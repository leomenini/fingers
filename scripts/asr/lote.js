#!/usr/bin/env node
/**
 * lote.js — prepara en frio la lista de trabajo para el pod.
 *
 *   node scripts/asr/lote.js ElecMag2024 8,9,10 > scripts/asr/clases.json
 *
 * Resuelve numero de clase -> URL del .mp4 usando la capa de red que ya
 * existe (`openfing.js`), para que el script del pod no tenga que scrapear
 * nada: llega con las URLs resueltas y se dedica solo a transcribir. Menos
 * cosas que pueden fallar arriba de una GPU que se cobra por minuto.
 *
 * Ojo con ElecMag2024: el `og:video` de las clases 9 y 10 dice `em-2025_NN`
 * aunque vivan en `media/em-2024/`. Es correcto (son regrabaciones del
 * semestre siguiente); ver /CLAUDE.md §3. Por eso la URL se toma del
 * `og:video` y no se arma con el slug.
 */

import { resolverCurso } from '../extractor/cursos.js';
import { indiceDelCurso, metaDeClase } from '../extractor/openfing.js';
import { parseSeleccion } from '../extractor/fetch.js';

const [nombreCurso, ...resto] = process.argv.slice(2);
if (!nombreCurso) {
  console.error('uso: lote.js <curso> [clases]   ej: lote.js ElecMag2024 8,9,10');
  process.exit(2);
}

const curso = resolverCurso(nombreCurso);
const seleccion = parseSeleccion(resto);
const indice = await indiceDelCurso(curso.urlBase);
const objetivo = seleccion ? indice.filter((c) => seleccion.includes(c.n)) : indice;

if (objetivo.length === 0) {
  console.error(`ninguna clase coincide con la seleccion`);
  process.exit(1);
}

const clases = [];
for (const c of objetivo) {
  const meta = await metaDeClase(c.url);
  clases.push({
    n: c.n,
    titulo: c.titulo,
    paginaUrl: c.url,
    mp4: meta.ogVideo,
    duracionSeg: meta.durationSec,
    releaseDate: meta.releaseDate,
  });
  console.error(`  clase ${c.n}: ${meta.ogVideo}`);
}

console.log(
  JSON.stringify(
    {
      curso: curso.nombre,
      slug: curso.slug,
      preparadoEn: new Date().toISOString(),
      clases,
    },
    null,
    2,
  ),
);
