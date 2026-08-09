#!/usr/bin/env node
/**
 * vtt.js — parser de WebVTT para el pipeline de Fingers.
 *
 *   node vtt.js <archivo.vtt> [dir-salida]
 *
 * Produce dos representaciones del mismo contenido:
 *   transcript.txt        sin marcas de tiempo  → es lo que se le manda al LLM
 *   transcript.timed.txt  con marcas de tiempo  → trazabilidad y revisión humana
 *   transcript.stats.json métricas de la etapa de extracción
 *
 * `parseVtt` es una función pura: entra texto, sale estructura. Sin red,
 * sin disco. Es la parte testeable del extractor.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename } from 'node:path';

/** "00:01:17.268" | "01:17.268" → segundos */
export function parseTimestamp(s) {
  const partes = s.trim().split(':').map(Number);
  if (partes.length === 3) return partes[0] * 3600 + partes[1] * 60 + partes[2];
  if (partes.length === 2) return partes[0] * 60 + partes[1];
  throw new Error(`timestamp inválido: ${s}`);
}

/** segundos → "1:17" o "1:02:33" */
export function formatTimestamp(seg) {
  const h = Math.floor(seg / 3600);
  const m = Math.floor((seg % 3600) / 60);
  const s = Math.floor(seg % 60);
  const mm = h ? String(m).padStart(2, '0') : String(m);
  return `${h ? `${h}:` : ''}${mm}:${String(s).padStart(2, '0')}`;
}

const RE_TIEMPO = /^(\S+)\s+-->\s+(\S+)/;

/**
 * Parsea WebVTT. Devuelve { cues, warnings }.
 * Tolera: BOM, CRLF, ids de cue, bloques NOTE/STYLE/REGION, settings
 * de posición en la línea de tiempo, y tags inline tipo <v Locutor>.
 */
export function parseVtt(texto) {
  const warnings = [];
  const limpio = texto.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');

  if (!limpio.startsWith('WEBVTT')) {
    warnings.push('el archivo no empieza con WEBVTT');
  }

  const bloques = limpio.split(/\n{2,}/);
  const cues = [];

  for (const bloque of bloques) {
    const lineas = bloque.split('\n').filter((l) => l.trim() !== '');
    if (lineas.length === 0) continue;
    if (/^(WEBVTT|NOTE|STYLE|REGION)\b/.test(lineas[0])) continue;

    const i = lineas.findIndex((l) => RE_TIEMPO.test(l));
    if (i === -1) continue; // bloque sin línea de tiempo: no es un cue

    const m = lineas[i].match(RE_TIEMPO);
    const start = parseTimestamp(m[1]);
    const end = parseTimestamp(m[2]);
    if (end < start) warnings.push(`cue con fin anterior al inicio en ${m[1]}`);

    const texto = lineas
      .slice(i + 1)
      .join(' ')
      .replace(/<[^>]+>/g, '') // tags inline de WebVTT
      .replace(/\s+/g, ' ')
      .trim();

    if (texto) cues.push({ start, end, text: texto });
  }

  // solapamientos temporales
  for (let k = 1; k < cues.length; k++) {
    if (cues[k].start < cues[k - 1].end) {
      warnings.push(`solapamiento temporal en ${formatTimestamp(cues[k].start)}`);
    }
  }

  return { cues, warnings };
}

/**
 * Detecta repetición de cola entre cues consecutivos, típica del
 * subtitulado rolling. Si esto dispara mucho, concatenar duplica texto.
 */
export function detectarSolapeTextual(cues, maxN = 12) {
  let n = 0;
  for (let i = 1; i < cues.length; i++) {
    const a = cues[i - 1].text.split(' ');
    const b = cues[i].text.split(' ');
    for (let k = Math.min(maxN, a.length, b.length); k > 2; k--) {
      if (a.slice(-k).join(' ') === b.slice(0, k).join(' ')) { n++; break; }
    }
  }
  return n;
}

/**
 * Un WebVTT válido no es necesariamente una transcripción. OpenFING sirve
 * `_thumbnails.vtt` en la misma ruta: es la previsualización del scrubbing
 * y sus cues son referencias a sprites (`foo_001.jpg#xywh=0,0,160,90`).
 * Parsea sin una sola advertencia, así que el nombre del archivo no alcanza
 * como red de seguridad — hay que mirar el contenido.
 *
 * Devuelve { esTranscripcion, motivo }.
 */
export function validarTranscripcion(cues) {
  if (cues.length === 0) return { esTranscripcion: false, motivo: 'sin cues' };

  const muestra = cues.slice(0, 20);
  const esRefMedia = (t) =>
    /^\S+\.(jpe?g|png|webp|avif|gif)(#|$)/i.test(t) || /#xywh=/i.test(t);

  const refs = muestra.filter((c) => esRefMedia(c.text)).length;
  if (refs / muestra.length > 0.5) {
    return {
      esTranscripcion: false,
      motivo: 'los cues son referencias a imágenes (¿pista de thumbnails?)',
    };
  }

  const palabrasPorCue =
    muestra.reduce((a, c) => a + c.text.split(/\s+/).length, 0) / muestra.length;
  if (palabrasPorCue < 3) {
    return {
      esTranscripcion: false,
      motivo: `cues demasiado cortos (${palabrasPorCue.toFixed(1)} palabras de media)`,
    };
  }

  return { esTranscripcion: true, motivo: null };
}

export const aTextoPlano = (cues) => cues.map((c) => c.text).join('\n\n');

export const aTextoConTiempo = (cues) =>
  cues.map((c) => `[${formatTimestamp(c.start)}] ${c.text}`).join('\n\n');

export function metricas(cues, warnings) {
  const palabras = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);
  const plano = aTextoPlano(cues);
  const timed = aTextoConTiempo(cues);
  const hablado = cues.reduce((a, c) => a + (c.end - c.start), 0);
  const span = cues.length ? cues.at(-1).end - cues[0].start : 0;

  return {
    cues: cues.length,
    words: palabras(plano),
    charsPlain: plano.length,
    charsTimed: timed.length,
    timestampOverheadPct: plano.length
      ? +(((timed.length - plano.length) / plano.length) * 100).toFixed(1)
      : 0,
    // estimación gruesa: ~4 chars por token en español
    estTokensPlain: Math.round(plano.length / 4),
    estTokensTimed: Math.round(timed.length / 4),
    speechSeconds: +hablado.toFixed(1),
    spanSeconds: +span.toFixed(1),
    speechRatio: span ? +(hablado / span).toFixed(3) : 0,
    avgCueSeconds: cues.length ? +(hablado / cues.length).toFixed(1) : 0,
    rollingOverlapCues: detectarSolapeTextual(cues),
    warnings,
  };
}

// --- CLI ---
if (import.meta.url === `file://${process.argv[1]}`) {
  const [, , entrada, salida = './out'] = process.argv;
  if (!entrada) {
    console.error('uso: node vtt.js <archivo.vtt> [dir-salida]');
    process.exit(1);
  }

  const raw = await readFile(entrada, 'utf8');
  const { cues, warnings } = parseVtt(raw);

  const v = validarTranscripcion(cues);
  if (!v.esTranscripcion) {
    console.error(`✗ ${entrada} no parece una transcripción: ${v.motivo}`);
    process.exit(2);
  }

  const stats = metricas(cues, warnings);

  await mkdir(salida, { recursive: true });
  await writeFile(join(salida, 'transcript.txt'), aTextoPlano(cues), 'utf8');
  await writeFile(join(salida, 'transcript.timed.txt'), aTextoConTiempo(cues), 'utf8');
  await writeFile(
    join(salida, 'transcript.stats.json'),
    JSON.stringify({ source: basename(entrada), ...stats }, null, 2),
    'utf8',
  );

  console.log(JSON.stringify(stats, null, 2));
  if (warnings.length) console.warn(`\n⚠ ${warnings.length} advertencia(s)`);
}
