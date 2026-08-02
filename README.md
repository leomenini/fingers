# fingers

Una base de conocimiento académico abierta, versionada y revisada por la
comunidad: cada afirmación puede rastrearse hasta sus fuentes y cada cambio
tiene historial. OpenFING es el primer corpus, no el destino final — la
arquitectura no depende de una fuente específica (ver
[`docs/FUNDATIONS.md`](docs/FUNDATIONS.md) y
[`docs/VISION.md`](docs/VISION.md)).

> **Este README es un TL;DR, no la documentación final.** El proyecto está en
> medio de una migración (pipeline manual → extractor automatizado, ver
> ADR-0001) y este archivo se va a seguir reescribiendo mientras eso avance.
> Para el detalle real: `CLAUDE.md` (raíz) y `docs/`.

---

## Estado (WIP)

La transcripción se obtenía a mano con un userscript de Tampermonkey. Eso se
reemplazó por un extractor que lee el WebVTT estático que sirve OpenFING vía
HTTP directo, sin ejecutar JavaScript ([ADR-0001](docs/adr/0001-extraccion-por-vtt-estatico.md),
[ADR-0002](docs/adr/0002-representacion-de-la-transcripcion.md)). El extractor
**todavía no está completo de punta a punta** (falta el paso índice del
curso → por clase → manifiesto, idempotente y resumible); hoy existen
`scripts/extractor/probe.js` (descubrimiento) y `scripts/extractor/vtt.js` (parser de VTT,
probado contra fixtures), pero ninguna clase del corpus real se produjo
todavía con este extractor.

| Curso | Clases | Estado |
|---|---|---|
| `courses/Fisica3-2015/` — Física III, OpenFING, Nicolás Wschebor | 28/28 | Resumen, notas y 184 figuras completos. Revisión humana pendiente (mueve `review.state`/`editorial_status`). |
| `courses/CDIV2017/` — Cálculo 1, OpenFING, Alexandre Miquel | 5/42 | En curso. Sin figuras todavía (lote actual no las necesita). |

## Estructura (resumen)

```text
fingers/
  courses/
    Fisica3-2015/    # 28 clases, ver courses/Fisica3-2015/CLAUDE.md
    CDIV2017/         # 5/42 clases, ver courses/CDIV2017/CLAUDE.md
  docs/               # visión, arquitectura, modelo de datos, ADRs, bitácora
  scripts/
    extractor/        # módulo Extractor: probe.js, vtt.js — ya no es userscript
  tests/
    extractor/fixtures/   # fixtures del parser de VTT
  package.json        # raíz: npm lo necesita acá
  CLAUDE.md           # contexto de trabajo del pipeline/extractor
```

`scripts/` y `tests/` se espejan por módulo del pipeline. Hoy sólo existe
`extractor/`; los demás módulos aparecerán cuando haya código, no antes.

Cada clase (`courses/<Curso>/Clases/ClaseN/`) es autocontenida: cuatro
archivos obligatorios (`Transcription_raw.txt`, `summary.md`, `notes.tex`,
`metadata.yaml`) y un `assets/` opcional, creado recién con la primera
figura. El esquema completo está en [`docs/SPECS.md`](docs/SPECS.md) y, con
más autoridad, en el `CLAUDE.md` de cada curso.

## Qué sigue

El roadmap operativo vive en `CLAUDE.md` §7 (raíz), no acá — repetirlo en dos
lugares garantiza que uno de los dos quede desactualizado. En resumen: completar
el extractor de punta a punta, instrumentar métricas, y las decisiones
abiertas listadas ahí (rename de `Transcription_raw.txt`, riesgo de licencia
de la transcripción ya commiteada, limpieza de `Resnick.pdf` del historial de
git).

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
- [`docs/adr/`](docs/adr/) — decisiones de arquitectura (ADR-0001 a 0004).
- `CLAUDE.md` (raíz) — contexto de trabajo del pipeline/extractor, qué sigue,
  decisiones abiertas. `courses/<Curso>/CLAUDE.md` — convenciones específicas
  de cada corpus.

## Fuentes y alcance

Las transcripciones provienen hoy de clases públicas de **OpenFING**. El
contenido de este repositorio lo redactan sus colaboradores; las fuentes
sirven para verificar y respaldar afirmaciones, no para ser reproducidas. No
se distribuye material protegido por derechos de autor más allá de lo que ya
está anotado como riesgo abierto en `docs/log.md`.
