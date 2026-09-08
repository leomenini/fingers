#!/usr/bin/env node
/**
 * comparar.js — el control del experimento.
 *
 *   node scripts/asr/comparar.js trabajo/ ElecMag2024 8
 *
 * Compara la transcripcion propia (ASR) contra la que publico OpenFING, sobre
 * la MISMA clase y el MISMO audio. Solo tiene sentido en clases que tienen
 * VTT oficial — la 8 es la elegida porque es la vecina inmediata de las dos
 * que faltan, asi que el docente, el tema y la acustica son los mismos.
 *
 * Por que hace falta: sin esto se producen dos clases (9 y 10) de calidad
 * DESCONOCIDA, y cuando un resumen salga raro no se va a poder saber si la
 * culpa fue del ASR o de la etapa de resumen. Con esto hay un numero.
 *
 * Reusa `similitud()` de diff-oraculo.js, que compara por bolsa de palabras y
 * no cue a cue — la decision correcta aca tambien: Whisper segmenta distinto
 * que OpenFING, asi que comparar cue a cue mediria la segmentacion y no el
 * contenido.
 *
 * NO hay umbral de aprobado. El numero es el resultado, no un test.
 */

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseVtt, aTextoPlano, metricas } from '../extractor/vtt.js';
import { similitud } from '../extractor/diff-oraculo.js';
import { resolverCurso } from '../extractor/cursos.js';
import { metaDeClase, resolverVtt } from '../extractor/openfing.js';

const RAIZ = fileURLToPath(new URL('../..', import.meta.url));

const [dirTrabajo, nombreCurso, ...ns] = process.argv.slice(2);
if (!dirTrabajo || !nombreCurso || ns.length === 0) {
  console.error('uso: comparar.js <dir-trabajo> <curso> <clase...>');
  process.exit(2);
}
const curso = resolverCurso(nombreCurso);

console.log(
  `\nclase  ─── OpenFING ───   ─── ASR propio ───   similitud\n` +
    `       cues  palabras     cues  palabras\n${'─'.repeat(62)}`,
);

for (const arg of ns) {
  const n = Number(arg);
  const nn = String(n).padStart(2, '0');

  const propio = parseVtt(
    await readFile(join(dirTrabajo, 'vtt', `clase${nn}.vtt`), 'utf8'),
  );

  // El VTT oficial se baja al vuelo y no se guarda: ADR-0004. Se usa como
  // referencia de comparacion, nada mas.
  const meta = await metaDeClase(`${curso.urlBase}/${n}/`);
  const { payload } = await resolverVtt(meta.ogVideo);
  const oficial = parseVtt(payload.texto);

  const mo = metricas(oficial.cues, oficial.warnings);
  const mp = metricas(propio.cues, propio.warnings);
  const s = similitud(aTextoPlano(oficial.cues), aTextoPlano(propio.cues));

  console.log(
    `${String(n).padStart(5)}  ${String(mo.cues).padStart(4)}  ` +
      `${String(mo.words).padStart(8)}     ${String(mp.cues).padStart(4)}  ` +
      `${String(mp.words).padStart(8)}      ${s.toFixed(3)}`,
  );
  console.log(
    `       segmentacion: ${mo.avgCueSeconds}s/cue oficial vs ` +
      `${mp.avgCueSeconds}s/cue propio · ` +
      `habla ${(mo.speechRatio * 100).toFixed(0)}% vs ${(mp.speechRatio * 100).toFixed(0)}%`,
  );
}

console.log(
  `\nLa similitud es por bolsa de palabras. Un valor alto dice que se dijeron\n` +
    `las mismas palabras, NO que la segmentacion o la puntuacion coincidan.\n`,
);
