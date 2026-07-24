# log.md — Discrepancias de nomenclatura y esquema pendientes de decisión

Registro de inconsistencias detectadas entre los documentos de `docs/`, el
`CLAUDE.md` del curso (`courses/Fisica3/CLAUDE.md`) y el corpus real de clases.
**Ninguna es grave** ni bloquea el trabajo actual; se registran para corregir a
mano y decidir activamente las convenciones en futuras sesiones.

> Autoridad pendiente de definir: cuando `docs/` y `CLAUDE.md` difieren, hoy se
> viene aplicando el `CLAUDE.md` (más estricto y alineado con el corpus). Falta
> decidir si esa es la regla oficial o si los docs deben prevalecer.

Fecha de registro: 2026-07-24

---

## 1. Campo `duration` en metadata

- **`docs/SPECS.md`** lista `duración` como ejemplo de campo de `metadata.yaml`.
- **`CLAUDE.md` §4.2** lo **prohíbe explícitamente** (redundante con
  `video.end`).
- **Estado actual:** el corpus generado **no** incluye `duration` (se sigue el
  `CLAUDE.md`).
- **Decisión pendiente:** quitar el ejemplo de `SPECS.md`, o bien re-habilitar
  `duration` y ajustar `CLAUDE.md`.

## 2. Nombre del archivo de transcripción

- **`docs/` (ARCHITECTURE.md, SPECS.md):** usan `transcript_raw.txt`.
- **`CLAUDE.md` y corpus:** usan **`Transcription_raw.txt`** (con la variante
  histórica `Transciption_raw.txt`, con typo, en `Clase1`).
- **Estado actual:** todas las clases nuevas usan `Transcription_raw.txt`.
- **Decisión pendiente:** unificar la nomenclatura en una sola forma y
  actualizar el bando que quede desalineado (incluido el typo de `Clase1`).

## 3. Carpeta `assets/`

- **`docs/` (ARCHITECTURE.md, SPECS.md):** incluyen `assets/` en la estructura
  autocontenida de cada clase.
- **Corpus:** ninguna `ClaseN/` tiene la carpeta `assets/` todavía.
- **Estado actual:** se anticipa con `status.assets: pending` y
  `stats.diagrams_pending: N` en cada `metadata.yaml`.
- **Decisión pendiente:** definir cuándo/cómo se crean las carpetas `assets/`
  (al generar diagramas) y si deben existir vacías desde el inicio.

## 4. Estados editoriales (un conjunto vs. dos campos)

- **`docs/` (ARCHITECTURE.md, SPECS.md):** listan un único conjunto
  `Draft / Reviewing / Needs Work / Verified / Published`.
- **`CLAUDE.md` §4.1:** lo separa en **dos** campos:
  - `editorial_status ∈ {draft, reviewing, verified, published}`
  - `review.state ∈ {needs-review, needs-work, reviewed}`
  - Es decir, `needs-work` vive en el bloque `review`, no en
    `editorial_status`.
- **Estado actual:** el corpus usa los dos campos separados.
- **Decisión pendiente:** documentar en `docs/` el mapeo entre ambos campos (no
  es evidente leyendo solo los docs), o unificar el modelo.

---

## Notas adicionales (no discrepancias, contexto)

- **Bibliografía sin verificar:** todas las clases llevan `verified: false` en
  `bibliography` y estimaciones en `diagrams_pending`. Es coherente con el
  principio "la IA propone, las personas deciden" — pendiente de cotejo manual
  del capítulo real (Resnick & Halliday para electromagnetismo; Sears &
  Zemansky para óptica/ondas, ver `CLAUDE.md` §5).
- **`summary_words` bajo el rango objetivo:** algunas clases con mucho contenido
  experimental o muy matemático (p. ej. 20, 21, 22, 27, 28) quedaron por debajo
  del rango típico 2000–3200 indicado en `CLAUDE.md` §2. Es un efecto real de la
  densidad de la clase (el conteo `wc` subestima el contenido en ecuaciones y
  tablas), no un recorte de contenido.

##Produccion

- [ ] Revisar los metadata.yaml del proyecto corriegiendo inconsistencias con openfing.
- [ ] Contabilizar manualmente assets y generar directorios correspondientes.
- [ ] Conseguir maneras de generar assets para las clases(i.e. circuitos, diagramas, dibujos, esquemas)
