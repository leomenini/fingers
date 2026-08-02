#!/usr/bin/env node
/**
 * diff-oraculo.js — compara la salida del extractor contra el oráculo.
 *
 *   node diff-oraculo.js <curso> [clase...]
 *
 *   node diff-oraculo.js Fisica3-2015 1 14 23   # sólo esas clases
 *   node diff-oraculo.js Fisica3-2015           # todas las del curso
 *
 * El "oráculo" son los `Transcription_raw.txt` que produjo el userscript de
 * Tampermonkey antes de ADR-0001. Son 28 casos de Física III con contenido
 * verificado a mano, y sirven para responder una pregunta que ningún test
 * sintético puede: ¿el extractor nuevo reproduce lo que producía el viejo?
 *
 * Baja el VTT de OpenFING (no lo guarda: ADR-0004), lo parsea con vtt.js y
 * compara contra el `Transcription_raw.txt` de esa clase.
 *
 * Sale con código 1 si alguna clase queda por debajo del umbral de similitud.
 */

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseVtt, formatTimestamp } from './vtt.js';

const RAIZ = fileURLToPath(new URL('../..', import.meta.url));

/** Debajo de esto, el extractor no está reproduciendo el oráculo. */
const UMBRAL_SIMILITUD = 0.97;

/**
 * Cuerpo de un Transcription_raw.txt → [{ ts, texto }].
 *
 * El formato del userscript es una línea con el timestamp (`M:SS`) y a
 * continuación el texto del cue. La cabecera (`# Clase N`, `Curso:`, y en
 * algunas clases un bloque de stats) se descarta: empieza a leer en el primer
 * timestamp suelto.
 */
export function parseOraculo(texto) {
  const cues = [];
  let ts = null;
  let buf = [];
  for (const linea of texto.replace(/\r\n?/g, '\n').split('\n')) {
    const t = linea.trim();
    if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(t)) {
      if (ts !== null) cues.push({ ts, texto: buf.join(' ').trim() });
      ts = t;
      buf = [];
    } else if (ts !== null && t) {
      buf.push(t);
    }
  }
  if (ts !== null) cues.push({ ts, texto: buf.join(' ').trim() });
  return cues;
}

const palabras = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);

/**
 * Similitud por bag-of-words (Jaccard sobre multiconjunto).
 *
 * No se compara cue a cue a propósito: OpenFING re-segmentó varios VTT desde
 * que se exportó el corpus, así que los cortes no coinciden aunque el texto
 * sea el mismo. Lo que importa es si el contenido sobrevive, no dónde corta.
 */
export function similitud(a, b) {
  const bolsa = (s) => {
    const m = new Map();
    for (const p of s.toLowerCase().split(/\s+/).filter(Boolean)) {
      m.set(p, (m.get(p) ?? 0) + 1);
    }
    return m;
  };
  const ma = bolsa(a);
  const mb = bolsa(b);
  let comun = 0;
  for (const [p, n] of ma) comun += Math.min(n, mb.get(p) ?? 0);
  const total = palabras(a) + palabras(b);
  return total ? (2 * comun) / total : 1;
}

/** Deriva la URL del VTT del `og:video` de la página de la clase (ADR-0001). */
async function urlDelVtt(urlClase) {
  const res = await fetch(urlClase);
  if (!res.ok) throw new Error(`${urlClase} → HTTP ${res.status}`);
  const html = await res.text();
  const m = html.match(/og:video"\s+content="([^"]+\.mp4)"/);
  if (!m) throw new Error(`no encontré og:video en ${urlClase}`);
  return m[1].replace(/\.mp4$/, '_transcription.vtt');
}

async function comparar(dirCurso, n, urlBase) {
  const dirClase = join(RAIZ, 'courses', dirCurso, 'Clases', `Clase${n}`);
  const rutaOraculo = join(dirClase, 'Transcription_raw.txt');
  if (!existsSync(rutaOraculo)) return { n, error: 'sin Transcription_raw.txt' };

  const vttUrl = await urlDelVtt(`${urlBase}/${n}/`);
  const res = await fetch(vttUrl);
  if (!res.ok) return { n, error: `VTT → HTTP ${res.status}` };
  const { cues, warnings } = parseVtt(await res.text());

  const oraculo = parseOraculo(await readFile(rutaOraculo, 'utf8'));

  const textoParser = cues.map((c) => c.text).join(' ');
  const textoOraculo = oraculo.map((c) => c.texto).join(' ');

  return {
    n,
    cuesOraculo: oraculo.length,
    cuesParser: cues.length,
    palabrasOraculo: palabras(textoOraculo),
    palabrasParser: palabras(textoParser),
    similitud: similitud(textoOraculo, textoParser),
    warnings: warnings.length,
    primerCue: cues.length ? formatTimestamp(cues[0].start) : null,
  };
}

/** Clases presentes en el corpus, ordenadas numéricamente. */
async function clasesDe(dirCurso) {
  const { readdir } = await import('node:fs/promises');
  const entradas = await readdir(join(RAIZ, 'courses', dirCurso, 'Clases'));
  return entradas
    .map((e) => e.match(/^Clase(\d+)$/)?.[1])
    .filter(Boolean)
    .map(Number)
    .sort((a, b) => a - b);
}

/** slug de OpenFING por curso; el directorio del repo no lo dice (ADR-0003). */
const SLUGS = { 'Fisica3-2015': 'f3', CDIV2017: 'civ' };

if (import.meta.url === `file://${process.argv[1]}`) {
  const [, , curso, ...args] = process.argv;
  if (!curso) {
    console.error('uso: diff-oraculo.js <curso> [clase...]');
    process.exit(64);
  }
  const slug = SLUGS[curso];
  if (!slug) {
    console.error(`no conozco el slug de OpenFING para "${curso}".`);
    console.error(`conocidos: ${Object.keys(SLUGS).join(', ')}`);
    process.exit(64);
  }
  const urlBase = `https://open.fing.edu.uy/courses/${slug}`;
  const clases = args.length ? args.map(Number) : await clasesDe(curso);

  console.log(`${curso} · ${clases.length} clase(s) · ${urlBase}\n`);
  console.log('clase  cues_o  cues_p   pal_o   pal_p   simil  warn');
  console.log('─'.repeat(52));

  const bajos = [];
  for (const n of clases) {
    try {
      const r = await comparar(curso, n, urlBase);
      if (r.error) {
        console.log(`${String(n).padStart(5)}  ${r.error}`);
        continue;
      }
      const flag = r.similitud < UMBRAL_SIMILITUD ? ' ←' : '';
      if (r.similitud < UMBRAL_SIMILITUD) bajos.push(n);
      console.log(
        `${String(n).padStart(5)}  ${String(r.cuesOraculo).padStart(6)}  ${String(r.cuesParser).padStart(6)}  ` +
          `${String(r.palabrasOraculo).padStart(6)}  ${String(r.palabrasParser).padStart(6)}  ` +
          `${r.similitud.toFixed(3).padStart(6)}  ${String(r.warnings).padStart(4)}${flag}`,
      );
    } catch (e) {
      console.log(`${String(n).padStart(5)}  ERROR: ${e.message}`);
    }
  }

  if (bajos.length) {
    console.log(`\n${bajos.length} clase(s) por debajo de ${UMBRAL_SIMILITUD}: ${bajos.join(', ')}`);
    process.exit(1);
  }
  console.log(`\nTodas por encima de ${UMBRAL_SIMILITUD}.`);
}
