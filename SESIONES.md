# SESIONES.md

Bitácora de trabajo, una entrada por sesión. Existe para responder *"¿qué pasó
la última vez?"* sin releer el `git log` ni una conversación.

No duplica otros documentos: las **decisiones** viven en `docs/adr/`, las de
esquema en `docs/log.md`, y el estado del pipeline en `CLAUDE.md`. Acá va el
relato: qué se hizo, qué se descubrió y qué quedó abierto.

---

## 2026-08-02 — Automatización de la extracción

**12 commits · 3 PR · 367 archivos · +11 553 / −340** (sin contar PDF).
Rama de trabajo: `pipeline/extractor` → `pipeline/oraculo` → `chore/estructura`.

El día empezó con un corpus completo y cero automatización, y terminó con el
extractor validado contra las 28 clases de Física III.

### Lo que se construyó

- **Módulo Extractor** en `scripts/extractor/`: `vtt.js` (parser de WebVTT,
  funciones puras), `probe.js` (descubrimiento con Playwright, diagnóstico) y
  `diff-oraculo.js` (validación contra el corpus viejo). Fixtures en
  `tests/extractor/fixtures/`, una por rama del parser.
- **Cuatro ADR**: extracción por VTT estático (0001), separación `fetch`/`parse`
  y doble representación (0002), convención de nombres curso/edición (0003) y
  retención del payload VTT (0004).
- **`docs/FUNDATIONS.md`**, con los principios permanentes que estaban
  dispersos entre `VISION.md` y `ARCHITECTURE.md`.
- **`scripts/README.md`**, que dice qué está automatizado y qué se hace a mano.

### Los dos hallazgos que importan

**1. El userscript no transformaba el texto.** Era la pregunta abierta desde
que se decidió automatizar. El diff contra las 28 clases da **21 con similitud
1.000 exacta** y ninguna por debajo de 0,97. Las tres diferencias reales
—etiqueta de locutor en las clases 10/14/20, re-segmentación de OpenFING en
1/25/26, y retoques de ASR en 2/22/23— no exigen tocar el parser. Detalle en
`CLAUDE.md` §6.c.

**2. `stats.transcript_words` está mal en las 28 clases.** Error típico +4 %, y
Clase23 declara `12584` cuando el archivo tiene **9225** (+36 %). En 26 clases
el número copia fielmente el header del userscript, así que el error viene de
origen. No se corrigió a mano: el conteo correcto lo produce el parser y la
corrección llega cuando el extractor regenere cada clase — pero hay que dejar
de copiar el header. Anotado en `docs/log.md` §7.

> Corolario para el benchmark: el oráculo **no es estable en el tiempo**,
> OpenFING regenera sus transcripciones. Las mediciones hay que fecharlas.

### Saneamiento

- `courses/Fisica3/` → `courses/Fisica3-2015/` (356 archivos, rename puro).
- Los PDF salen de Git: los 28 `notes.pdf` estaban trackeados *y* en
  `.gitignore` a la vez; `PDFiter1/` cargaba 6,5 MB y tenía un espacio inicial
  en el nombre. Ambos siguen en disco.
- `scripts/` y `tests/` se espejan por módulo. `.mjs` → `.js`. README reducido
  a un TL;DR de WIP honesto.

### Qué quedó abierto

Lo próximo es **completar el extractor de punta a punta**: hoy parsea un
archivo que ya tenés, falta el `fetch` (índice del curso → `og:video` →
`.vtt` → manifiesto, idempotente y resumible). El arnés para validarlo ya
existe.

Lo demás, en `CLAUDE.md` §7: actualizar `docs/SPECS.md` (línea 30 todavía
dice que `Transcription_raw.txt` es "dado"), instrumentar métricas, y la
pasada de `git filter-repo` que ahora cubre ~79 MB.

### Nota de método

Un `git rebase` borró del disco los 28 `notes.pdf` al pasar por un `main`
donde todavía estaban trackeados. Se recuperaron con
`git restore --source=origin/main --worktree`. **Cuando un commit destrackea
archivos que querés conservar, verificá que sigan en disco después de
cualquier rebase o cambio de rama.** Deja de ser un riesgo una vez que el
cambio está en `main`.
