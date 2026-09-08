#!/usr/bin/env node
/**
 * integrar.js — toma los .vtt que volvieron del pod y arma los artefactos de
 * clase, con la procedencia marcada.
 *
 *   node scripts/asr/integrar.js trabajo/ ElecMag2024            # dry-run
 *   node scripts/asr/integrar.js trabajo/ ElecMag2024 --write
 *
 * **No reimplementa nada del parseo.** El contrato del modulo de ASR es
 * "producir un .vtt", justo para que todo lo de aguas abajo ya este escrito:
 * `parseVtt`, `validarTranscripcion`, `metricas`, `aTextoPlano` y
 * `aTextoConTiempo` salen tal cual de `scripts/extractor/vtt.js`. La
 * transcripcion de Whisper entra por el mismo cano que la de OpenFING.
 *
 * Lo unico que cambia es la PROCEDENCIA, y se marca desde el minuto uno:
 *
 * - `metadata.yaml` lleva `transcriptionSource: asr`.
 * - `manifest.json` lleva un bloque `asr` (sha256 del audio, modelo, version,
 *   parametros, fecha) EN LUGAR del sha256 del VTT de OpenFING.
 *
 * El modo de falla que esto evita: que estas clases lleguen algun dia al repo
 * sin marca y nadie las pueda distinguir de las otras 27. Ver la discusion de
 * ADR-0005 en ideas/asr-runpod-whisper.md — la premisa de ese ADR (la
 * transcripcion es reproducible desde el manifiesto) NO se cumple aca.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  parseVtt,
  validarTranscripcion,
  aTextoPlano,
  aTextoConTiempo,
  metricas,
  detectarSolapeTextual,
  formatHHMMSS,
} from '../extractor/vtt.js';
import { resolverCurso } from '../extractor/cursos.js';

const RAIZ = fileURLToPath(new URL('../..', import.meta.url));

const [dirTrabajo, nombreCurso, ...flags] = process.argv.slice(2);
if (!dirTrabajo || !nombreCurso) {
  console.error('uso: integrar.js <dir-trabajo> <curso> [--write]');
  process.exit(2);
}
const escribir = flags.includes('--write');
const curso = resolverCurso(nombreCurso);

const resultado = JSON.parse(
  await readFile(join(dirTrabajo, 'resultado.json'), 'utf8'),
);
const lote = JSON.parse(
  await readFile(join(RAIZ, 'scripts/asr/clases.json'), 'utf8'),
);
const porClase = new Map(lote.clases.map((c) => [c.n, c]));

if (!escribir) console.log('\n*** dry-run: no se escribe nada. Agrega --write. ***');
console.log(
  `\nclase  cues  palabras  warn  solape  valida  titulo\n${'─'.repeat(78)}`,
);

for (const r of resultado.clases) {
  if (r.error) {
    console.log(`${String(r.clase).padStart(5)}  ERROR: ${r.error}`);
    continue;
  }
  const n = r.clase;
  const nn = String(n).padStart(2, '0');
  const vtt = await readFile(join(dirTrabajo, 'vtt', `clase${nn}.vtt`), 'utf8');
  const { cues, warnings } = parseVtt(vtt);

  // La misma guarda que atrapa el _thumbnails.vtt en el extractor. Aca cubre
  // otro riesgo: un run degenerado de Whisper.
  const v = validarTranscripcion(cues);
  // Repeticion en cola es EL sintoma del loop de alucinacion de Whisper.
  const solape = detectarSolapeTextual(cues);
  const stats = metricas(cues, warnings);

  console.log(
    `${String(n).padStart(5)}  ${String(stats.cues).padStart(4)}  ` +
      `${String(stats.words).padStart(8)}  ${String(warnings.length).padStart(4)}  ` +
      `${String(solape ?? 0).padStart(6)}  ${v.esTranscripcion ? '  si  ' : ' NO   '}  ` +
      `${porClase.get(n)?.titulo ?? ''}`,
  );
  if (!v.esTranscripcion) {
    console.log(`       ↳ ${v.motivo}`);
    continue;
  }

  const meta = porClase.get(n) ?? {};
  const dir = join(RAIZ, 'courses', curso.nombre, 'Clases', `Clase${n}`);
  const start = cues.length ? formatHHMMSS(cues[0].start) : '00:00:00';
  const end = cues.length ? formatHHMMSS(cues.at(-1).end) : '00:00:00';
  const hoy = new Date().toISOString().slice(0, 10);

  const archivos = {
    'transcript.txt': aTextoPlano(cues),
    'transcript.timed.txt': aTextoConTiempo(cues),
    'transcript.stats.json': JSON.stringify(
      { source: `asr:${resultado.modelo}`, ...stats },
      null,
      2,
    ),
    'manifest.json': JSON.stringify(
      {
        course: curso.nombre,
        class: n,
        sourceUrl: meta.paginaUrl,
        sourceTitle: meta.titulo,
        // NO hay vttUrl ni sha256 de la fuente: OpenFING no publico ninguno.
        // La procedencia es el audio, y su hash es reproducible con los
        // parametros de ffmpeg que estan aca abajo.
        transcriptionSource: 'asr',
        asr: {
          mp4Url: r.mp4Url,
          audioSha256: r.audioSha256,
          audioFormato: 'wav pcm_s16le 16000 Hz mono',
          modelo: resultado.modelo,
          computeType: resultado.computeType,
          beamSize: resultado.beamSize,
          vadFilter: resultado.vadFilter,
          conditionOnPreviousText: resultado.conditionOnPreviousText,
          idiomaDetectado: r.idiomaDetectado,
          segundosDeComputo: r.segundosDeComputo,
          factorTiempoReal: r.factorTiempoReal,
          generadoEn: resultado.generadoEn,
        },
        releaseDate: meta.releaseDate,
        durationSec: meta.duracionSeg,
        extractedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  };

  if (!existsSync(join(dir, 'metadata.yaml'))) {
    archivos['metadata.yaml'] = `title: Clase ${n}
id: ${curso.idPrefix}-${nn}

course: ${curso.course}
academic_year: ${curso.academic_year}
semester: ${curso.semester}

teacher: ${curso.teacher}

source:
  - OpenFING

# ATENCION: esta transcripcion NO la publico OpenFING. La genero ${resultado.modelo}
# sobre el audio del video. No es de la misma procedencia ni de la misma calidad
# que las demas clases del curso, y sus metricas no son comparables con ellas
# (segmenta distinto). Ver manifest.json -> asr.
transcriptionSource: asr

video:
  - start: "${start}"
    end: "${end}"

stats:
  transcript_words: ${stats.words}
  summary_words: 0
  diagrams_pending: 0
  equations: 0

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
  model: ""

editorial_status: draft
`;
  }

  if (escribir) {
    await mkdir(dir, { recursive: true });
    for (const [nombre, contenido] of Object.entries(archivos)) {
      await writeFile(join(dir, nombre), contenido, 'utf8');
    }
    console.log(`       ↳ escrito en ${dir.replace(RAIZ, '')}`);
  }
}

console.log('');
