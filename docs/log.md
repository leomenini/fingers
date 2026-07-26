# log.md — Decisiones de nomenclatura y esquema

Registro de inconsistencias detectadas entre los documentos de `docs/`, el
`CLAUDE.md` del curso (`courses/Fisica3/CLAUDE.md`) y el corpus real de clases.

Fecha de registro: 2026-07-24 · Resueltas: 2026-07-25

---

## 0. Regla de autoridad — RESUELTA (2026-07-25)

**Decisión:** ante un conflicto entre `docs/` y el `CLAUDE.md` de un curso,
**manda el `CLAUDE.md` del curso**.

`docs/` describe la visión y el modelo de datos a nivel de proyecto; el
`CLAUDE.md` define el esquema ejecutable, es más estricto y está alineado con el
corpus real. Cuando difieran, se corrige `docs/`.

Anotado en el encabezado de `docs/SPECS.md`.

---

## 1. Campo `duration` en metadata — RESUELTA (2026-07-25)

- **`docs/SPECS.md`** listaba `duración` como ejemplo de campo de `metadata.yaml`.
- **`CLAUDE.md` §4.2** lo prohíbe explícitamente (redundante con `video.end`).

**Decisión:** se elimina. `SPECS.md` ahora lista el tramo de video
(`start`/`end`) y aclara que `duration` no existe. El corpus nunca lo usó.

---

## 2. Nombre del archivo de transcripción — RESUELTA (2026-07-25)

- **`docs/`** usaba `transcript_raw.txt`.
- **`CLAUDE.md` y corpus** usan `Transcription_raw.txt`, con cuatro variantes
  históricas desalineadas.

**Decisión:** se unifica en **`Transcription_raw.txt`** (23 de las 28 clases ya
lo usaban). `ARCHITECTURE.md` y `SPECS.md` actualizados; las 5 clases
desalineadas renombradas con `git mv`:

| Clase | Nombre anterior |
|---|---|
| Clase1 | `Transciption_raw.txt` (typo) |
| Clase3 | `transcription_raw.txt` (minúscula) |
| Clase23 | `transcript_raw.txt` |
| Clase24 | `transcript_raw.txt` |
| Clase26 | `transcrip_raw.txt` |

La nota de `CLAUDE.md` sobre variantes históricas queda obsoleta tras el
renombrado.

---

## 3. Carpeta `assets/` — RESUELTA (2026-07-25)

- **`docs/`** incluía `assets/` como parte fija de la estructura de cada clase.
- **Corpus:** Clase1–5 tienen una figura cada una; Clase14 usa TikZ inline;
  Clase23 y Clase24 tenían un andamiaje de subcarpetas **vacías**
  (`circuits/ diagrams/ figures/ graphs/ references/`), que contradice el naming
  plano de `CLAUDE.md` §6.2.

**Decisión:** `assets/` se crea **on demand**, al producir la primera figura de
la clase. Sin carpetas vacías y sin subcarpetas por tipo: archivos planos
`<claseN>-<slug>.{tex,svg,pdf}` en kebab-case. El andamiaje de Clase23/24 se
eliminó. Documentado en `ARCHITECTURE.md` y `SPECS.md`.

---

## 4. Estados editoriales — RESUELTA (2026-07-25)

- **`docs/`** listaba un único conjunto `Draft / Reviewing / Needs Work /
  Verified / Published`.
- **`CLAUDE.md` §4.1** lo separa en dos campos, con `needs-work` viviendo en el
  bloque `review`.

**Decisión:** se mantienen los **dos campos** (el corpus ya los usa) y se
documenta el mapeo en `SPECS.md`, que era lo que faltaba: leyendo solo los docs
no era evidente. `editorial_status` es el avance en el pipeline; `review.state`
es qué le hace falta a la revisión humana.

---

## 5. Fotografías del pizarrón — RESUELTA (2026-07-25)

Detectada el 2026-07-25 al auditar el corpus.

- **`docs/ARCHITECTURE.md`** listaba "fotografías del pizarrón" y **`SPECS.md`**
  "fotografías" entre los recursos válidos de una clase.
- **`CLAUDE.md` §6** lo prohíbe: "no fotos IRL ni capturas del video".

**Decisión:** se elimina de ambos docs. Todo recurso gráfico es vectorial y
reproducible (TikZ, circuitikz, pgfplots, SVG). Una foto del pizarrón es
material de origen, no contenido del repositorio, y viola el principio de
reproducibilidad (`ARCHITECTURE.md` §4).

---

## Pendientes

### `status.assets` no tiene valor para "no aplica"

El enum `status.assets ∈ {done, pending, in-progress}` (`CLAUDE.md` §6.4) no
puede expresar "esta clase no necesita diagramas". Hoy es un problema
**teórico**: las 28 clases tienen `diagrams_pending > 0`. Se deja abierto; si
aparece una clase sin figuras, la opción es agregar `not-needed` al enum.

---

## Notas adicionales (contexto, no discrepancias)

- **Bibliografía sin verificar:** todas las clases llevan `verified: false` en
  `bibliography`. Es coherente con el principio "la IA propone, las personas
  deciden" — pendiente de cotejo manual del capítulo real (Resnick & Halliday
  para electromagnetismo; Sears & Zemansky para óptica/ondas, ver `CLAUDE.md`
  §5).
- **`summary_words` bajo el rango objetivo:** algunas clases con mucho contenido
  experimental o muy matemático (p. ej. 20, 21, 22, 27, 28) quedaron por debajo
  del rango típico 2000–3200 indicado en `CLAUDE.md` §2. Es un efecto real de la
  densidad de la clase (el conteo `wc` subestima el contenido en ecuaciones y
  tablas), no un recorte de contenido.
- **Calidad desigual según el modelo generador:** las clases con
  `llm.model: deepseek-v4-flash` (1–5, 23–26) quedaron por debajo del estándar
  de `CLAUDE.md` §2. Los casos graves — Clase24 (su `summary.md` era la
  transcripción cruda pegada verbatim), Clase1, Clase25 y Clase26 (resúmenes de
  219–472 palabras) — se regeneran. El campo `llm.model` de cada clase refleja
  quién la generó realmente, es trazabilidad y no se uniformiza.

---

## Producción

- [ ] Revisar los `metadata.yaml` del proyecto corrigiendo inconsistencias con
      OpenFING.
- [ ] Contabilizar manualmente assets y generar los directorios correspondientes.
- [ ] Conseguir maneras de generar assets para las clases (i.e. circuitos,
      diagramas, dibujos, esquemas).
