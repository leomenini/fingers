/**
 * openfing.js — la capa de red del extractor. Todo lo que toca OpenFING
 * pasa por acá; el resto del módulo son funciones puras.
 *
 * ADR-0001 fija el mecanismo: HTTP directo, sin ejecutar JavaScript. El HTML
 * de la clase NO trae la transcripción (dice "Cargando transcripción..." y la
 * inyecta el JS), pero sí trae los meta tags, y el índice del curso viene
 * entero en el HTML servido.
 *
 * Coste por curso: 1 petición al índice + 2 por clase.
 */

import { createHash } from 'node:crypto';

export const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');

/**
 * Atributo HTML con comillas OPCIONALES.
 *
 * OpenFING sirve el HTML minificado y sin comillas (`href=/courses/civ/1/`,
 * `class=clase-numero`). Los <meta> sí vienen entrecomillados, pero no hay
 * ninguna garantía de que sigan así: un regex que exija comillas funciona
 * hasta que dejan de ponerlas.
 */
const attr = (nombre) => `${nombre}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`;
const valor = (m) => m?.[1] ?? m?.[2] ?? m?.[3] ?? null;

const UA = 'fingers-extractor/1.0 (+https://github.com/leomenini; contacto vía repo)';

/** GET con reintento y backoff. Devuelve { texto, bytes, sha256, url }. */
export async function bajarTexto(url, { intentos = 3, esperaMs = 1000 } = {}) {
  let ultimo;
  for (let i = 0; i < intentos; i++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': UA } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      return {
        url,
        texto: buf.toString('utf8'),
        bytes: buf.length,
        sha256: sha256(buf),
        // No se usa para elegir parser: ADR-0001 documenta que OpenFING
        // devuelve application/octet-stream para los .vtt. Se registra nomás.
        contentType: res.headers.get('content-type'),
      };
    } catch (e) {
      ultimo = e;
      if (i < intentos - 1) await new Promise((r) => setTimeout(r, esperaMs * 2 ** i));
    }
  }
  throw new Error(`${url} → ${ultimo.message}`);
}

/**
 * Índice del curso → [{ n, titulo, url }], ordenado por número de clase.
 *
 * El HTML servido trae la lista completa sin ejecutar JS, con esta forma:
 *   <a class=clase-enlace href=URL>
 *     <div id=class-N class=clase-item>
 *       <span class=clase-numero>N</span>
 *       <div class=clase-titulo>TÍTULO</div>
 */
export function parseIndice(html) {
  // Se ancla en el <a class=clase-enlace> y no en un href suelto: el índice
  // trae antes un nav con los OTROS cursos, y un regex que empiece por href
  // se come ese enlace y le asigna la clase 1.
  const anclas = /<a([^>]*\bclase-enlace\b[^>]*)>([\s\S]*?)<\/a>/g;
  const reHref = new RegExp(attr('href'));
  const reNum = /clase-numero[^>]*>\s*(\d+)\s*</;
  const reTitulo = /clase-titulo[^>]*>([^<]*)</;

  const clases = [];
  const vistos = new Set();
  for (const [, tag, cuerpo] of html.matchAll(anclas)) {
    const n = Number(cuerpo.match(reNum)?.[1]);
    if (!Number.isFinite(n) || vistos.has(n)) continue;
    vistos.add(n);
    clases.push({
      n,
      titulo: (cuerpo.match(reTitulo)?.[1] ?? '').trim(),
      url: valor(tag.match(reHref)),
    });
  }
  return clases.sort((a, b) => a.n - b.n);
}

export async function indiceDelCurso(urlBase) {
  const { texto } = await bajarTexto(`${urlBase}/`);
  const clases = parseIndice(texto);
  if (clases.length === 0) {
    throw new Error(
      `no encontré ninguna clase en ${urlBase}/ — puede que OpenFING haya ` +
        `cambiado el HTML del índice. Correr probe.js para re-descubrirlo.`,
    );
  }
  return clases;
}

/** Meta tags de la página de una clase. Ninguno requiere ejecutar JS. */
export function parseMetaClase(html) {
  const meta = (prop) => {
    const re = new RegExp(
      `<meta[^>]*(?:property|name)=["']?${prop}["']?[^>]*content="([^"]*)"`,
      'i',
    );
    return html.match(re)?.[1] ?? null;
  };
  const dur = meta('video:duration');
  return {
    titulo: meta('og:title'),
    ogVideo: meta('og:video'),
    releaseDate: meta('video:release_date'),
    durationSec: dur ? Number(dur) : null,
  };
}

export async function metaDeClase(urlClase) {
  const { texto } = await bajarTexto(urlClase);
  const meta = parseMetaClase(texto);
  if (!meta.ogVideo) throw new Error(`no encontré og:video en ${urlClase}`);
  return meta;
}

/**
 * URL del VTT, derivada del `og:video` y NUNCA del slug (ADR-0001): los slugs
 * no son sistemáticos y el padding del número no está garantizado entre
 * ediciones. El `og:video` ya trae el nombre real del archivo.
 */
export function urlDelVtt(ogVideo) {
  if (!/\.mp4$/.test(ogVideo)) {
    throw new Error(`og:video no termina en .mp4: ${ogVideo}`);
  }
  return ogVideo.replace(/\.mp4$/, '_transcription.vtt');
}

/** Atajo para quien sólo tiene la URL de la clase (lo que usa diff-oraculo). */
export async function urlDelVttDeClase(urlClase) {
  return urlDelVtt((await metaDeClase(urlClase)).ogVideo);
}
