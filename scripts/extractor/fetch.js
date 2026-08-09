#!/usr/bin/env node
/**
 * fetch.js — extractor de punta a punta: índice del curso → clase →
 * `og:video` → `.vtt` → transcripción + manifiesto, en un solo comando.
 *
 *   npm run fetch -- CDIV2017                      # dry-run de todo el curso
 *   npm run fetch -- CDIV2017 --write              # baja las que faltan
 *   npm run fetch -- CDIV2017 9 --write            # una sola
 *   npm run fetch -- CDIV2017 6-42 --write         # rango
 *   npm run fetch -- CDIV2017 9,14,20-23 --write   # mezcla
 *
 * Sin `--write` no toca el disco: lista qué haría y termina.
 *
 * No calcula ninguna métrica propia. Baja el texto y se lo pasa a las
 * funciones puras de vtt.js; lo único que sale de la capa de red es la
 * procedencia, y va al manifest.json (ADR-0004), no al stats.json.
 *
 * Idempotente y resumible: salta las clases que ya tienen transcript.txt
 * (salvo --force) y un fallo en la clase 27 no tira las 15 que faltan.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolverCurso } from './cursos.js';
import { indiceDelCurso, metaDeClase, urlDelVtt, bajarTexto } from './openfing.js';
import {
  parseVtt,
  validarTranscripcion,
  aTextoPlano,
  aTextoConTiempo,
  metricas,
  formatHHMMSS,
} from './vtt.js';

const RAIZ = fileURLToPath(new URL('../..', import.meta.url));
export const VERSION_EXTRACTOR = '1.0.0';

/** "9,14,20-23" → [9, 14, 20, 21, 22, 23]. Sin argumento, null = todas. */
export function parseSeleccion(args) {
  const crudo = args.filter((a) => !a.startsWith('-')).join(',');
  if (!crudo) return null;

  const ns = new Set();
  for (const parte of crudo.split(',').map((s) => s.trim()).filter(Boolean)) {
    const rango = parte.match(/^(\d+)\s*-\s*(\d+)$/);
    if (rango) {
      const [a, b] = [Number(rango[1]), Number(rango[2])];
      if (a > b) throw new Error(`rango invertido: "${parte}"`);
      for (let i = a; i <= b; i++) ns.add(i);
    } else if (/^\d+$/.test(parte)) {
      ns.add(Number(parte));
    } else {
      throw new Error(`no entiendo "${parte}" (esperaba N, N-M o una lista)`);
    }
  }
  return [...ns].sort((a, b) => a - b);
}

/**
 * metadata.yaml con los campos que se pueden derivar mecánicamente. El resto
 * queda vacío: son los que exigen leer la clase.
 *
 * Se emite plantillado y no con un serializador YAML porque el esquema
 * (courses/<Curso>/CLAUDE.md §4) fija orden de claves, comentarios y qué va
 * entrecomillado — cosas que un dump genérico no respeta.
 */
export function plantillaMetadata({ curso, n, stats, cues, hoy }) {
  const nn = String(n).padStart(2, '0');
  // start/end salen del primer y último cue, no de video:duration: el esquema
  // §4.2 prohíbe el campo `duration` y pide el tiempo real de la transcripción.
  const start = cues.length ? formatHHMMSS(cues[0].start) : '00:00:00';
  const end = cues.length ? formatHHMMSS(cues.at(-1).end) : '00:00:00';

  return `title: Clase ${n}
id: ${curso.idPrefix}-${nn}

course: ${curso.course}
academic_year: ${curso.academic_year}
semester: ${curso.semester}

teacher: ${curso.teacher}

source:
  - OpenFING

video:
  - start: "${start}"
    end: "${end}"

stats:
  transcript_words: ${stats.words}
  summary_words: 0
  diagrams_pending: 0
  equations: 0

# Los campos de acá abajo NO los puede derivar el extractor: salen de leer
# la clase. Completar antes de marcar status.summary como done.

topics: []

bibliography: []

prerequisites: []

next_topics: []

status:
  transcript: done
  summary: pending
  latex: pending
  assets: pending

review:
  state: needs-review
  reviewer: []
  date: ${hoy}

llm:
  model: ""          # id del modelo que genere el resumen; es trazabilidad, no inventar

editorial_status: draft
`;
}

/** Baja y parsea una clase. No escribe nada: devuelve qué habría que escribir. */
export async function extraerClase({ curso, n, urlClase, titulo }) {
  const meta = await metaDeClase(urlClase);
  const vttUrl = urlDelVtt(meta.ogVideo);
  const payload = await bajarTexto(vttUrl);

  const { cues, warnings } = parseVtt(payload.texto);
  const v = validarTranscripcion(cues);
  if (!v.esTranscripcion) throw new Error(`no es una transcripción: ${v.motivo}`);

  const stats = metricas(cues, warnings);
  const hoy = new Date().toISOString().slice(0, 10);

  return {
    n,
    stats,
    archivos: {
      'transcript.txt': aTextoPlano(cues),
      'transcript.timed.txt': aTextoConTiempo(cues),
      'transcript.stats.json': JSON.stringify({ source: vttUrl, ...stats }, null, 2),
      // ADR-0004: el .vtt crudo no se guarda; se versiona sólo la procedencia.
      'manifest.json': JSON.stringify(
        {
          course: curso.nombre,
          class: n,
          sourceUrl: urlClase,
          // El del índice viene limpio; el og:title trae pegado el nombre del
          // curso y "OpenFing".
          sourceTitle: titulo ?? meta.titulo,
          vttUrl,
          sha256: payload.sha256,
          bytes: payload.bytes,
          contentType: payload.contentType,
          releaseDate: meta.releaseDate,
          durationSec: meta.durationSec,
          extractedAt: new Date().toISOString(),
          extractorVersion: VERSION_EXTRACTOR,
        },
        null,
        2,
      ),
      'metadata.yaml': plantillaMetadata({ curso, n, stats, cues, hoy }),
    },
  };
}

/** Corre `fn` sobre `items` con como mucho `limite` en vuelo, preservando orden. */
async function enParalelo(items, limite, fn) {
  const salida = new Array(items.length);
  let i = 0;
  const obrero = async () => {
    while (i < items.length) {
      const k = i++;
      salida[k] = await fn(items[k]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limite, items.length) }, obrero));
  return salida;
}

// --- CLI ---
if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);

  // Las opciones con valor se sacan primero, o su valor se cuela como número
  // de clase: `--concurrency 4` haría que se pida la Clase4.
  const CON_VALOR = new Set(['--concurrency']);
  const opciones = new Map();
  const sueltos = [];
  for (let i = 0; i < argv.length; i++) {
    if (CON_VALOR.has(argv[i])) opciones.set(argv[i], argv[++i]);
    else if (argv[i].startsWith('-')) opciones.set(argv[i], true);
    else sueltos.push(argv[i]);
  }

  const [nombreCurso, ...restoSueltos] = sueltos;
  if (!nombreCurso) {
    console.error('uso: fetch.js <curso> [clases] [--write] [--force] [--concurrency N]');
    console.error('     fetch.js CDIV2017 9,14,20-23 --write');
    process.exit(64);
  }

  let curso, seleccion;
  try {
    curso = resolverCurso(nombreCurso);
    seleccion = parseSeleccion(restoSueltos);
  } catch (e) {
    console.error(e.message);
    process.exit(64);
  }

  const escribir = opciones.has('--write');
  const forzar = opciones.has('--force');
  const conMetadata = !opciones.has('--no-metadata');
  const concurrencia = Math.max(1, Number(opciones.get('--concurrency')) || 2);

  console.log(`${curso.nombre} · ${curso.urlBase}`);
  const indice = await indiceDelCurso(curso.urlBase);
  console.log(`índice: ${indice.length} clase(s)`);

  let objetivo = indice;
  if (seleccion) {
    const enIndice = new Set(indice.map((c) => c.n));
    const faltan = seleccion.filter((n) => !enIndice.has(n));
    if (faltan.length) {
      console.error(`estas clases no están en el índice: ${faltan.join(', ')}`);
      process.exit(64);
    }
    objetivo = indice.filter((c) => seleccion.includes(c.n));
  }

  if (!escribir) {
    console.log('\n*** dry-run: no se escribe nada. Agregá --write. ***');
  }
  console.log(
    `\nclase  estado    cues  palabras  warn  título\n${'─'.repeat(72)}`,
  );

  const dirDe = (n) => join(RAIZ, 'courses', curso.nombre, 'Clases', `Clase${n}`);
  const fallos = [];
  let hechas = 0;
  let saltadas = 0;

  await enParalelo(objetivo, concurrencia, async (c) => {
    const dir = dirDe(c.n);
    // Una clase ya extraída puede tener cualquiera de las dos convenciones:
    // el rename de ADR-0002 es forward-only y las 33 clases viejas conservan
    // `Transcription_raw.txt`. Sin esto, el fetch les dejaría al lado una
    // segunda copia del mismo texto con otro nombre.
    const yaEsta =
      existsSync(join(dir, 'transcript.txt')) ||
      existsSync(join(dir, 'Transcription_raw.txt'));
    if (yaEsta && !forzar) {
      saltadas++;
      console.log(`${String(c.n).padStart(5)}  saltada   ${' '.repeat(20)}  ${c.titulo}`);
      return;
    }

    try {
      const r = await extraerClase({
        curso, n: c.n, urlClase: c.url, titulo: c.titulo,
      });
      const archivos = { ...r.archivos };
      // metadata.yaml no se pisa NUNCA, ni con --force. Sólo se crea si falta.
      // Es trabajo humano (topics, review) y contiene trazabilidad que el
      // extractor no puede reconstruir: llm.model dice qué modelo generó el
      // resumen. `--force` significa "volvé a bajar la transcripción", no
      // "borrá lo que escribí".
      if (!conMetadata || existsSync(join(dir, 'metadata.yaml'))) {
        delete archivos['metadata.yaml'];
      }

      if (escribir) {
        await mkdir(dir, { recursive: true });
        for (const [nombre, contenido] of Object.entries(archivos)) {
          await writeFile(join(dir, nombre), contenido, 'utf8');
        }
      }
      hechas++;
      console.log(
        `${String(c.n).padStart(5)}  ${escribir ? 'escrita ' : 'ok      '}  ` +
          `${String(r.stats.cues).padStart(4)}  ${String(r.stats.words).padStart(8)}  ` +
          `${String(r.stats.warnings.length).padStart(4)}  ${c.titulo}`,
      );
    } catch (e) {
      fallos.push({ n: c.n, error: e.message });
      console.log(`${String(c.n).padStart(5)}  ERROR     ${e.message}`);
    }
  });

  console.log(
    `\n${hechas} ${escribir ? 'escrita(s)' : 'lista(s)'} · ` +
      `${saltadas} saltada(s) · ${fallos.length} con error`,
  );
  if (saltadas && !forzar) {
    console.log('las saltadas ya estaban extraídas; usá --force para rehacerlas.');
  }
  if (fallos.length) {
    console.log(`\nclases con error: ${fallos.map((f) => f.n).join(', ')}`);
    console.log('volvé a correr el mismo comando: las que salieron bien se saltan.');
    process.exit(1);
  }
}
