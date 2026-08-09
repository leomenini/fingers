# SESIONES.md

Bitácora de trabajo, una entrada por sesión. Existe para responder *"¿qué pasó
la última vez?"* sin releer el `git log` ni una conversación.

No duplica otros documentos: las **decisiones** viven en `docs/adr/`, las de
esquema en `docs/log.md`, y el estado del pipeline en `CLAUDE.md`. Acá va el
relato: qué se hizo, qué se descubrió y qué quedó abierto.

---

## 2026-08-08 — El extractor de punta a punta, y el repo sin transcripción

Rama: `chore/estructura`. El día empezó con `vtt.js` parseando un archivo que
ya tenías en disco y terminó con 70 clases extraídas por comando y un
historial de Git sin una palabra de transcripción.

### Lo que se construyó

- **`fetch.js`**, el extractor de punta a punta: índice del curso → `og:video`
  → `.vtt` → transcripción, métricas y manifiesto. Selección por número, rango
  o lista (`9,14,20-23`). Dry-run por defecto. Idempotente y resumible.
- **`openfing.js`** (la capa de red, lo único que toca HTTP) y **`cursos.js`**
  (slug + datos fijos). No hizo falta escribir código de red nuevo: `urlDelVtt`
  y el mapa de slugs ya existían enterrados en `diff-oraculo.js`. Se
  extrajeron y ahora los comparten, así el oráculo valida el mismo camino que
  corre en producción.
- **ADR-0005**, levantado y aceptado el mismo día.

### Los tres hallazgos que importan

**1. Filtrar por nombre exacto no alcanza.** La primera pasada de
`filter-repo` dejó adentro cuatro transcripciones con el nombre mal escrito
(`Transciption_raw.txt`, `transcript_raw.txt` ×2, `transcrip_raw.txt`): unas
40 000 palabras que una verificación por nombre canónico no encuentra. La
pregunta correcta no es *"¿queda algún `Transcription_raw.txt`?"* sino
*"¿queda algún `.txt`?"*. Detalle en `CLAUDE.md` §7.b.

**2. `--force` no debe significar "borrá lo que escribí".** El `fetch` pisaba
`metadata.yaml` con `--force`, y correrlo sobre Física III —prerrequisito del
`filter-repo`— habría borrado `topics`, `review` y `llm.model` de 28 clases.
`llm.model` es trazabilidad y el extractor no puede reconstruirlo. Ahora
`metadata.yaml` sólo se crea si falta, nunca se pisa.

**3. El HTML del índice de OpenFING viene minificado y sin comillas en los
atributos**, y hay que anclar en `<a class=clase-enlace>`: un regex que
arranque por `href` se come el nav de otros cursos y le asigna esa URL a la
clase 1. Fallaba en silencio.

### Números

| | |
| --- | --- |
| Clases extraídas | 70 (28 Física III + 42 CDIV2017), 0 errores |
| CDIV2017 con transcripción | 5/42 → **42/42** |
| Clases con procedencia (`manifest.json`) | 0 → **70/70** |
| `.git` | 82 MB → **1,7 MB** |
| Transcripción literal versionada | 308 452 palabras → **0** |

### Qué quedó abierto

`docs/SPECS.md` se corrigió el mismo día, junto con `README.md`,
`docs/ARCHITECTURE.md`, `docs/FUNDATIONS.md` y los `CLAUDE.md` de los dos
cursos: ADR-0005 había roto *"cada clase es autocontenida"* y la lista de
cuatro archivos obligatorios, y los de curso eran los peores —su paso 1
mandaba leer un archivo que ya no existe.

Queda **instrumentar métricas** (§9), el paso previo al benchmark. Y una
decisión que no es técnica: los objetos viejos siguen en los servidores de
GitHub hasta que corra su recolección; cerrarlo del todo exige un ticket a
Support o recrear el repo.

> **Nota de método.** El oráculo de §6.c ya no está en el repo. Para volver a
> correr `diff-oraculo.js` hay que copiar los 28 `Transcription_raw.txt` desde
> `~/Desktop/Files/respaldo-fingers-borrados/` al working tree. Está anotado
> en el README de esa carpeta.

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
