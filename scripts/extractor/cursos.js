/**
 * cursos.js — registro de los cursos que el extractor sabe bajar.
 *
 * El directorio del repo no dice el slug de OpenFING (ADR-0003: el nombre del
 * directorio desambigua ediciones, no identifica la fuente), y los slugs no
 * son sistemáticos: `civ`, `cdiv-2022`, `f3`, `p2-2023`. Este archivo es el
 * único lugar donde vive esa traducción.
 *
 * Los datos fijos del curso (course, academic_year, semester, teacher) NO se
 * infieren de la transcripción: no aparecen en ella. Su fuente de verdad
 * declarada es el `CLAUDE.md` de cada curso (§5 en CDIV2017); acá se copian
 * para poder plantillar el `metadata.yaml`. Si cambian allá, cambian acá.
 */

export const CURSOS = {
  'CDIV2017': {
    slug: 'civ',
    idPrefix: 'civ-2017-1',
    course: 'Cálculo 1',
    academic_year: 2017,
    semester: 1,
    teacher: 'Alexandre Miquel',
  },
  'Fisica3-2015': {
    slug: 'f3',
    idPrefix: 'fis3-2015-2',
    course: 'Física III',
    academic_year: 2015,
    semester: 2,
    teacher: 'Nicolás Wschebor',
  },
};

export const urlBaseDe = (slug) => `https://open.fing.edu.uy/courses/${slug}`;

/** Nombre de directorio → ficha del curso. Lanza con mensaje accionable. */
export function resolverCurso(nombre) {
  const c = CURSOS[nombre];
  if (!c) {
    throw new Error(
      `no conozco el curso "${nombre}".\n` +
        `conocidos: ${Object.keys(CURSOS).join(', ')}\n` +
        `para agregar uno, editá scripts/extractor/cursos.js`,
    );
  }
  return { nombre, urlBase: urlBaseDe(c.slug), ...c };
}
