# fingers

Una base de conocimiento académico abierta, versionada y revisada por la
comunidad: cada afirmación puede rastrearse hasta sus fuentes y cada cambio
tiene historial. OpenFING es el primer corpus, no el destino final — la
arquitectura no depende de una fuente específica (ver
[`docs/FUNDATIONS.md`](docs/FUNDATIONS.md) y
[`docs/VISION.md`](docs/VISION.md)).

> **Este README es un TL;DR, no la documentación final.** Para el detalle
> real: `CLAUDE.md` (raíz) y `docs/`.

---

## Empezar

### Qué necesitás instalado

| Para | Herramienta | Nota |
|---|---|---|
| **Extraer transcripciones** | **Node ≥ 20** y git | Es todo. El extractor **no tiene dependencias**: sólo builtins de Node, no hace falta `npm install`. |
| Compilar los PDF | [`tectonic`](https://tectonic-typesetting.github.io/) | En el `PATH` o en `~/.local/bin`. |
| Re-descubrir la fuente (casi nunca) | Playwright + Chromium | `npm i && npx playwright install chromium` (~150 MB). Sólo para `probe`. |

```bash
git clone git@github.com:leomenini/fingers.git
cd fingers
node --version          # v20 o superior
```

### Extraer las transcripciones

**La transcripción no está en el repo** ([ADR-0005](docs/adr/0005-retencion-transcripcion-derivada.md)):
clonar no alcanza, hay que bajarla. Un comando por curso.

```bash
npm run fetch -- CDIV2017                      # dry-run: qué haría, sin tocar el disco
npm run fetch -- CDIV2017 --write              # baja las que falten
```

**Sin `--write` no escribe nada.** Es el default a propósito, porque escribe
directo en `courses/<Curso>/Clases/ClaseN/`.

Para elegir clases: un número, un rango, una lista, o una mezcla.

```bash
npm run fetch -- CDIV2017 9 --write            # sólo la 9
npm run fetch -- CDIV2017 6-42 --write         # un rango
npm run fetch -- CDIV2017 9,14,20-23 --write   # una mezcla
npm run fetch -- Fisica3-2015 --write          # el otro curso
```

Cursos disponibles: `CDIV2017` y `Fisica3-2015`. Para agregar otro, editá
[`scripts/extractor/cursos.js`](scripts/extractor/cursos.js).

**Repetir el comando es seguro.** Salta lo que ya está y retoma lo que falló,
así que si se corta a mitad de las 42, lo volvés a correr y sigue donde quedó.
`--force` rehace lo ya bajado; nunca pisa tu `metadata.yaml`.

Qué te deja en cada `ClaseN/`:

| Archivo | Qué es | ¿En git? |
|---|---|---|
| `transcript.txt` | la transcripción, sin marcas — **esto es lo que le das al LLM** | no |
| `transcript.timed.txt` | la misma, con `[m:ss]` para trazabilidad | no |
| `transcript.stats.json` | métricas: cues, palabras, overhead de timestamps | sí |
| `manifest.json` | procedencia: URL, `sha256`, fecha | sí |
| `metadata.yaml` | esqueleto con los campos mecánicos, **sólo si falta** | sí |

### Y después

Los pasos 2 a 5 (resumen, notas, metadatos, figuras) son manuales, con un LLM
y revisión humana; sus convenciones están en el `CLAUDE.md` **del curso**.
Para compilar los PDF:

```bash
cd courses/CDIV2017 && ./build.sh        # todas las clases
cd courses/CDIV2017 && ./build.sh 1 5    # sólo esas
```

La tabla completa de qué está automatizado y qué se hace a mano está en
[`scripts/README.md`](scripts/README.md).

---

## Estado

La transcripción se obtenía a mano con un userscript de Tampermonkey. Hoy la
baja un extractor que lee el WebVTT estático que sirve OpenFING vía HTTP
directo, sin ejecutar JavaScript
([ADR-0001](docs/adr/0001-extraccion-por-vtt-estatico.md),
[ADR-0002](docs/adr/0002-representacion-de-la-transcripcion.md)). Está
completo de punta a punta desde el 2026-08-08 y se corrió sobre los dos
cursos: **70 clases, cero errores**.

| Curso | Clases | Estado |
|---|---|---|
| `courses/Fisica3-2015/` — Física III, OpenFING, Nicolás Wschebor | 28/28 | Resumen, notas y 184 figuras completos. Revisión humana pendiente (mueve `review.state`/`editorial_status`). |
| `courses/CDIV2017/` — Cálculo 1, OpenFING, Alexandre Miquel | 42/42 transcritas · 5/42 con notas | Las 37 restantes esperan resumen y notas. Sin figuras todavía. |

## Estructura (resumen)

```text
fingers/
  courses/
    Fisica3-2015/     # 28 clases, ver courses/Fisica3-2015/CLAUDE.md
    CDIV2017/         # 42 clases, ver courses/CDIV2017/CLAUDE.md
  docs/               # visión, arquitectura, modelo de datos, ADRs, bitácora
  scripts/
    README.md         # ← qué se ejecuta y qué se hace a mano
    extractor/        # fetch.js, openfing.js, cursos.js, vtt.js,
                      # diff-oraculo.js, probe.js
  tests/
    extractor/fixtures/   # fixtures del parser de VTT
  package.json        # raíz: npm lo necesita acá
  CLAUDE.md           # contexto de trabajo del pipeline/extractor
```

`scripts/` y `tests/` se espejan por módulo del pipeline. Hoy sólo existe
`extractor/`; los demás módulos aparecerán cuando haya código, no antes.

Los PDF (`notes.pdf` y el snapshot `PDFiter1/`) **no se versionan**: son
artefactos de `build.sh` y se regeneran con tectonic.

Cada clase (`courses/<Curso>/Clases/ClaseN/`) versiona cinco archivos:
`summary.md`, `notes.tex`, `metadata.yaml`, `manifest.json` y
`transcript.stats.json`, más un `assets/` opcional creado con la primera
figura.

**La transcripción no se versiona** ([ADR-0005](docs/adr/0005-retencion-transcripcion-derivada.md)):
es contenido de OpenFING (CC BY-NC-ND) y la reproduce `npm run fetch` a partir
del `manifest.json`, que guarda URL, `sha256` y fecha. Clonar el repo no
alcanza para tener el texto — hace falta un comando. El esquema completo está
en [`docs/SPECS.md`](docs/SPECS.md) y, con más autoridad, en el `CLAUDE.md` de
cada curso.

## Qué sigue

El roadmap operativo vive en `CLAUDE.md` §7 (raíz), no acá — repetirlo en dos
lugares garantiza que uno de los dos quede desactualizado. En resumen:
**instrumentar métricas**, que es el paso previo al benchmark.

El extractor, el riesgo de licencia de la transcripción (ADR-0005) y la
limpieza del historial de git se cerraron el 2026-08-08.

## Documentación

- [`docs/FUNDATIONS.md`](docs/FUNDATIONS.md) — principios permanentes.
- [`docs/VISION.md`](docs/VISION.md) — visión, misión y principios (fuente de
  `FUNDATIONS.md`).
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — pipeline editorial y
  estructura del proyecto.
- [`docs/SPECS.md`](docs/SPECS.md) — modelo de datos de una clase.
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) — cómo colaborar.
- [`docs/log.md`](docs/log.md) — bitácora de decisiones de nomenclatura y
  esquema.
- [`docs/adr/`](docs/adr/) — decisiones de arquitectura (ADR-0001 a 0005).
- [`SESIONES.md`](SESIONES.md) — bitácora de trabajo: qué se hizo cada sesión
  y qué quedó abierto.
- [`scripts/README.md`](scripts/README.md) — qué se ejecuta y qué se hace a
  mano.
- `CLAUDE.md` (raíz) — contexto de trabajo del pipeline/extractor, qué sigue,
  decisiones abiertas. `courses/<Curso>/CLAUDE.md` — convenciones específicas
  de cada corpus.

## Fuentes y alcance

Las transcripciones provienen hoy de clases públicas de **OpenFING**, que
publica su contenido bajo **CC BY-NC-ND**. El contenido de este repositorio lo
redactan sus colaboradores; las fuentes sirven para verificar y respaldar
afirmaciones, no para ser reproducidas.

**Este repositorio no distribuye transcripciones.** Versiona su procedencia
—URL, `sha256`, fecha— y el código que las vuelve a obtener de la fuente
original. Es una decisión de diseño, no sólo de licencia: el producto de este
proyecto es la herramienta que reproduce el material y la documentación
derivada, no el material
([ADR-0005](docs/adr/0005-retencion-transcripcion-derivada.md)).
