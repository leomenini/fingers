# ADR-0003 · Convención de nombres para curso/edición

- **Estado:** Aceptado
- **Fecha:** 2026-08-02
- **Afecta a:** `courses/` · `CLAUDE.md` (raíz, §7) · `docs/SPECS.md`

## Contexto

El repo tenía dos convenciones de nombre de directorio conviviendo bajo
`courses/`:

- `courses/Fisica3/` — sin año ni edición.
- `courses/CDIV2017/` — con el año de la edición como sufijo.

La asimetría no era arbitraria: `CDIV2017` necesita el año porque existe una
segunda edición del mismo curso, `cdiv-2022`, y sin el sufijo los dos árboles
chocarían. `Fisica3` no lo necesitaba cuando se creó porque no había una
segunda edición conocida de esa materia. Pero el nombre no dice de qué año es,
y deja dos convenciones activas en el mismo nivel del árbol sin que nada las
explique — cualquiera que llegue al repo tiene que adivinar la regla, o peor,
inventar una nueva la próxima vez que se agregue un curso.

`CLAUDE.md` §7 ya había marcado esto como "material de ADR-0003" con tres
salidas posibles: (a) renombrar `Fisica3` ahora, (b) dejarlo como excepción
histórica documentada, (c) adoptar la regla "sufijo sólo si hay más de una
edición" (que en los hechos ya describía el estado existente, sin tocar nada).

## Decisión

**Se renombra `courses/Fisica3/` a `courses/Fisica3-2015/` y se formaliza la
regla general: el directorio de un curso es `<Slug>` o `<Slug>-<Año>`, con el
sufijo de año obligatorio siempre que exista más de una edición conocida del
curso, y opcional (pero recomendado) en caso contrario, para que el nombre
sea autodescriptivo desde el primer commit.** El guión se usa cuando el slug
ya termina en un dígito (como `Fisica3`), para evitar una secuencia de
dígitos ambigua (`Fisica32015` no se lee como "Fisica 3, 2015"); si el slug
no termina en dígito, el año puede concatenarse sin guión, como ya hace
`CDIV2017`.

El rename se aplica retroactivamente porque es barato: se verificó antes de
ejecutarlo que `courses/Fisica3/build.sh` resuelve su propio directorio con
`dirname "${BASH_SOURCE[0]}"` (sin rutas hardcodeadas) y que
`metadata.yaml` de cada clase ya usa un `id` independiente del nombre de
carpeta (`fis3-2015-2-01`). El único costo real es actualizar las referencias
textuales en `CLAUDE.md`, `README.md`, `docs/SPECS.md` y el `CLAUDE.md` de
`CDIV2017`, hecho en el mismo commit que este ADR.

## Alternativas consideradas

**(b) Dejarlo como excepción histórica documentada, sin regla general.**
Descartada: no resuelve nada para el próximo curso que se agregue — cada
corpus nuevo volvería a enfrentar la misma pregunta sin una regla escrita a
la que apelar.

**(c) Regla "sufijo sólo si hay más de una edición conocida", sin renombrar
`Fisica3`.** Es la opción más barata en el momento (cero cambios), y
describía correctamente el estado existente. Se descartó igual porque, dado
que el rename no cuesta nada (ver Decisión), dejar `Fisica3` sin año de forma
permanente es una asimetría innecesaria: cualquiera que lea `courses/`
tendría que saber que "sin sufijo" significa "una sola edición conocida hoy",
en vez de que el nombre lo diga directamente.

## Consecuencias

- `courses/Fisica3/` pasa a `courses/Fisica3-2015/` (vía `git mv`, historial
  de las 28 clases preservado).
- Referencias actualizadas en `CLAUDE.md`, `README.md`, `docs/SPECS.md` y
  `courses/CDIV2017/CLAUDE.md`. `docs/log.md` **no** se edita
  retroactivamente: es una bitácora fechada y las rutas que cita eran
  correctas cuando se escribieron; se le agrega una entrada nueva con fecha
  de hoy en vez de reescribir la vieja.
- Si en el futuro aparece una segunda edición de Física III, el árbol ya
  tiene el año y no hace falta un segundo rename de emergencia.
- La regla queda escrita para el próximo curso que se agregue: no hay que
  volver a decidir esto por curso.
