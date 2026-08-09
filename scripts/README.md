# scripts/ — qué está automatizado y qué se hace a mano

Índice de ejecución del pipeline. Responde una sola pregunta: **qué comando
corro y qué me toca hacer a mí.**

El pipeline es todavía mayormente manual. Lo automatizado es el primer paso
(obtener la transcripción) y el último (compilar el PDF). Todo lo del medio
—entender la clase y escribirla— lo hace una persona con un LLM, a mano.

## El recorrido de una clase, de punta a punta

| # | Paso | Cómo se hace hoy | Comando |
| --- | --- | --- | --- |
| 1 | Transcripción | **Automatizado, de punta a punta** | `npm run fetch -- <curso> --write` |
| 2 | `summary.md` | **A mano** (LLM + revisión) | — |
| 3 | `notes.tex` | **A mano** (LLM + revisión) | — |
| 4 | `metadata.yaml` | **A mano** | — |
| 5 | Figuras (`assets/`) | **A mano** (TikZ/pgfplots) | — |
| 6 | PDF | **Automatizado** | `./build.sh` (por curso) |
| 7 | Revisión humana | **A mano**, y no es opcional | — |

El paso 1 va solo desde el 2026-08-08: `fetch` recorre el índice del curso,
deriva el `.vtt` de cada clase del `og:video` y escribe la transcripción, las
métricas y el manifiesto. Es idempotente y resumible — repetir el comando
salta lo que ya está y retoma lo que falló.

**Sin `--write` no escribe nada**: lista qué haría y termina. Es el default a
propósito, porque escribe directo en `courses/<Curso>/Clases/ClaseN/`.

Los pasos 2 a 5 tienen sus convenciones en el `CLAUDE.md` **del curso**
(`courses/<Curso>/CLAUDE.md`), no acá: cada corpus tiene su estilo, su
preámbulo de LaTeX y su esquema de metadatos.

## Comandos

Todos se corren desde la raíz del repo. `package.json` vive ahí porque npm lo
necesita ahí.

```bash
npm run fetch -- <curso> [clases] [--write]  # extrae un curso entero
npm run vtt  -- <archivo.vtt> [dir-salida]   # parsea un .vtt que ya tenés
npm run diff -- <curso> [clase...]           # valida contra el oráculo
npm run probe -- <url-de-clase> <dir>        # diagnóstico, casi nunca
```

Selección de clases: un número, un rango o una lista.

```bash
npm run fetch -- CDIV2017                      # dry-run del curso entero
npm run fetch -- CDIV2017 --write              # baja las que faltan
npm run fetch -- CDIV2017 9 --write            # una sola
npm run fetch -- CDIV2017 6-42 --write         # un rango
npm run fetch -- CDIV2017 9,14,20-23 --write   # una mezcla
```

| Comando | Cuándo se usa | Necesita red |
| --- | --- | --- |
| `fetch` | Cada vez que entra una clase nueva. Es producción. | Sí |
| `vtt` | Sólo para reparsear un `.vtt` local sin volver a bajarlo. | No |
| `diff` | Al tocar el parser, para no romper lo que ya andaba. | Sí |
| `probe` | Sólo si OpenFING cambia y el extractor deja de encontrar el `.vtt`. | Sí |

`probe` además necesita Chromium (`npx playwright install chromium`, ~150 MB).
No hace falta para el uso normal.

Y por curso, para compilar:

```bash
cd courses/<Curso> && ./build.sh        # todas las clases
cd courses/<Curso> && ./build.sh 1 5    # sólo esas
```

Requiere `tectonic` en el `PATH` o en `~/.local/bin`.

## Estructura

```text
scripts/
  extractor/     # único módulo con código hoy
    fetch.js       # CLI de punta a punta
    openfing.js    # la capa de red (lo único que toca HTTP)
    cursos.js      # registro de cursos: slug y datos fijos
    vtt.js         # parser, funciones puras
    diff-oraculo.js
    probe.js
    README.md    # detalle de cada script
tests/
  extractor/
    fixtures/    # entradas del parser, una por rama
```

`scripts/` y `tests/` se espejan por módulo del pipeline. Los módulos que
todavía no existen (Normalizador, Summarizer, …) **no tienen carpeta**: se
crean cuando haya código, no antes.

## Salida

`vtt.js` y `probe.js` escriben en directorios efímeros (`out/`,
`probe-out/`), ignorados por Git. De ahí se promueve **a mano** sólo lo que
pasa a ser evidencia de un ADR o fixture de test; el resto se borra. Si el
criterio es "lo guardo por las dudas", en un año hay diez netlogs y ninguno
indexado (`CLAUDE.md` §7).

El `.vtt` crudo no se versiona nunca: [ADR-0004](../docs/adr/0004-retencion-payload-vtt.md).
