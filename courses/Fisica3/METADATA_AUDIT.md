# Auditoría de `metadata.yaml` — Física III

**Fecha:** 2026-07-23 · **Alcance:** Clase1–7, Clase23–26 (11 archivos) ·
**Arquetipo declarado:** `Clase23/metadata.yaml` · **Estado:** ✅ **NORMALIZADO
el 2026-07-23** — este informe queda como registro histórico de lo que había
antes. Ver "Resolución" al final.

Verificado pasando cada archivo por un cargador YAML estándar (PyYAML
`safe_load`) y comparando el conjunto de campos, tipos y enums contra el
esquema canónico de `CLAUDE.md §4`.

**Nota de codificación:** todos los archivos son UTF-8 válido. El mojibake tipo
`FM-CM--sica` que aparece con `cat -A` es solo la representación de bytes de
`cat`, no una corrupción — el texto real es "Física", "Nicolás".

## Resumen por severidad

| Sev | # | Qué |
|-----|---|-----|
| 🔴 BLOCKER | 1 | El arquetipo no parsea. |
| 🟠 HIGH | 5 | Integridad de esquema / clave primaria / tipos / stub. |
| 🟡 MEDIUM | 8 | Campos presentes/ausentes, enums y valores divergentes. |
| ⚪ LOW | 6 | Cosmético, valores obsoletos, higiene. |

---

## 🔴 BLOCKER

### B1 — El arquetipo `Clase23` no parsea como YAML
Al final del archivo:
```yaml
editorial_status:

draft

reviewing

verified

published
```
`editorial_status:` queda con valor nulo y luego aparecen cuatro escalares
sueltos (`draft`, `reviewing`, `verified`, `published`) en la columna 0. El
parser aborta: `ScannerError: could not find expected ':' (line 66)`.
**Impacto:** el archivo designado como arquetipo **no se puede ingerir**; parece
un "menú" de los 4 valores posibles del enum en lugar de una elección.
**Fix:** una sola línea, p. ej. `editorial_status: draft`.

---

## 🟠 HIGH

### H1 — `id` no es único (no hay clave primaria por clase)
Todas las clases que traen `id` usan el **mismo** valor `fis3-2015-2`, que es un
identificador de **curso**, no de clase. Además falta por completo en Clase1,
24, 25, 26.
**Impacto:** ninguna fila puede identificarse unívocamente; `id` no sirve como
PK. **Fix propuesto:** `fis3-2015-2-NN` (p. ej. `fis3-2015-2-23`).

### H2 — `bibliography[].chapter` mezcla tipos `int` y `str`
- `int`: Clase2 (`21`, `1`), Clase4 (`22`), Clase6 (`24`).
  También Clase23 usa int (`29`, sin comillas).
- `str`: Clase3 (`"21-22"`, `"1-2"`), Clase5 (`"22-23"`), Clase7 (`"24-25"`).
**Impacto:** una columna de base de datos no puede ser int y string a la vez.
**Fix:** string entrecomillado siempre, aun para capítulo único (`"24"`).

### H3 — Dos campos rivales para el estado de flujo editorial
El mismo concepto se modela de dos formas mutuamente excluyentes:
- `editorial_status: draft` → Clase2, 3, 4, 5 (y Clase23, roto).
- `version: 1` → Clase1, 6, 7, 24, 25, 26.
Ningún archivo combina ambos de forma significativa.
**Impacto:** dos columnas para un solo dato; ingestión ambigua. **Fix:** elegir
uno. El arquetipo usa `editorial_status` → recomiendo estandarizar en ése y
eliminar `version`.

### H4 — `Clase24` es un stub (faltan casi todos los campos)
Solo tiene: `title, course, teacher, duration, source, status, llm,
reviewed_by, version`. **Faltan:** `id, academic_year, semester, video, stats,
topics, bibliography, prerequisites, next_topics, review`.
**Impacto:** no puede poblar la mayoría de las columnas; requiere regenerarse
desde su transcripción.

### H5 — `Clase24` usa un esquema de revisión divergente
En lugar del bloque `review: {state, reviewer, date}` que usan todos los demás,
Clase24 mete `reviewed_by: [Leandro]` en el nivel raíz **y** `reviewed: true`
dentro de `status`.
**Impacto:** dos representaciones incompatibles de "quién/si se revisó";
`status` deja de tener aridad fija (ver M7). **Fix:** migrar al bloque `review`.

---

## 🟡 MEDIUM

### M1 — `id` / `academic_year` / `semester` ausentes en parte del corpus
Presentes en Clase2–7 y 23; **ausentes** en Clase1, 24, 25, 26.
**Impacto:** columnas nulas donde deberían ser constantes del curso.

### M2 — `duration` presente de forma intermitente (y redundante)
Presente en Clase1, 6, 7, 24, 25, 26; ausente en Clase2, 3, 4, 5 y en el
arquetipo Clase23. Duplica información de `video.end`.
**Fix:** eliminar `duration`; usar `video.end` como única fuente.

### M3 — `duration` ≠ `video.end` donde ambos existen
| Clase | duration | video.end | ¿coincide? |
|-------|----------|-----------|------------|
| 1  | 01:28:00 | 01:28:31 | ❌ (redondeado) |
| 25 | 01:20:00 | 01:20:55 | ❌ |
| 26 | 01:22:00 | 01:22:16 | ❌ |
| 6  | 01:22:18 | 01:22:18 | ✅ |
| 7  | 01:26:18 | 01:26:18 | ✅ |
**Impacto:** dos "duraciones" que no concuerdan; las viejas están redondeadas al
minuto. Refuerza M2 (eliminar `duration`).

### M4 — `bibliography` ausente en Clase1, 24, 25, 26
El resto la trae. **Impacto:** referencias faltantes para esas clases.

### M5 — Enum `review.state` divergente
`needs-review` en casi todos; `needs-work` en Clase23; Clase24 no tiene bloque
`review` (usa `status.reviewed`). **Fix:** fijar enum {needs-review, needs-work,
reviewed}.

### M6 — `llm.model` divergente
`deepseek-v4-flash` en Clase1–5, 23, 24, 25, 26; `claude-opus-4-8` en Clase6, 7.
**Impacto:** informativo (refleja qué modelo generó cada una), pero conviene
registrarlo de forma consistente.

### M7 — `status` con aridad variable
4 claves (`transcript, summary, latex, assets`) en todos, salvo **Clase24** que
agrega una 5.ª clave `reviewed: true`. **Fix:** quitar `reviewed` (va en
`review`).

### M8 — `source` mezcla semántica de ítems
La mayoría: `source: [OpenFING]` (nombre de proveedor). **Clase6 y 7** agregan un
segundo ítem que es una URL cruda
(`https://open.fing.edu.uy/courses/f3/6/`). **Impacto:** la lista mezcla
"proveedor" y "URL". **Fix:** o separar en un campo `url:` propio, o
estandarizar el contenido de `source`.

---

## ⚪ LOW

### L1 — `Clase23`: líneas en blanco dentro de los bloques
El arquetipo intercala blank-lines dentro de `video`, `stats`, `bibliography` y
`editorial_status`. Parsea (salvo B1) pero es visualmente inconsistente con todo
el resto. Irónicamente, el arquetipo es el archivo con peor higiene de formato.

### L2 — `summary_words` obsoleto / placeholder
Clase1 = **380** y Clase26 = **380** (idéntico e implausiblemente bajo frente al
contenido real); Clase25 = **580**. No reflejan el tamaño real del `summary.md`.
Comparar con el rango real del resto (1260–2480). **Fix:** recontar.

### L3 — `Clase24`: espacio final en un valor
`reviewed_by: - Leandro ` tiene un espacio en blanco tras "Leandro".

### L4 — Granularidad de `topics` muy dispar
De **3** ítems (Clase23, el arquetipo) a **18** (Clase7). No es error, pero
afecta a cualquier tabla normalizada de temas. Clase23 está subdescripta.

### L5 — Redundancia en `id`
`fis3-2015-2` codifica `academic_year: 2015` + `semester: 2`. Aceptable si es una
clave compuesta intencional; anotado por completitud (relacionado con H1).

### L6 — `review.date` en dos oleadas
`2026-07-06` (Clase1, 23, 25, 26) vs `2026-07-23` (Clase2–7); Clase24 sin fecha.
Refleja tandas de edición — informativo, no un defecto.

---

## Matriz de conformidad (campos presentes)

`✓` presente · `—` ausente · `!` presente pero problemático

| Campo | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 23* | 24 | 25 | 26 |
|-------|---|---|---|---|---|---|---|-----|----|----|----|
| id / academic_year / semester | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — |
| duration | ! | — | — | — | — | ! | ! | — | ! | ! | ! |
| video | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| stats | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ! | ! |
| bibliography | — | ✓ | ! | ✓ | ! | ✓ | ! | ✓ | — | — | — |
| prerequisites / next_topics | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| review (bloque) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ! | — | ✓ | ✓ |
| editorial_status | — | ✓ | ✓ | ✓ | ✓ | — | — | 🔴 | — | — | — |
| version | ✓ | — | — | — | — | ✓ | ✓ | — | ✓ | ✓ | ✓ |
| Parsea YAML | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🔴 | ✓ | ✓ | ✓ |

\* Clase23 = arquetipo declarado.

---

## Recomendación de normalización (a confirmar antes de ejecutar)

1. **B1** — arreglar `editorial_status` de Clase23 (desbloquea el arquetipo).
2. **H1** — introducir `id` único por clase (`fis3-2015-2-NN`) en las 11.
3. **H2** — `bibliography.chapter` → string entrecomillado en todas.
4. **H3/M2** — elegir `editorial_status` como campo único de estado y eliminar
   `version` y `duration` (o, si preferís conservar `duration`, unificarla con
   `video.end`). **Esta es la decisión que más filas toca — necesito tu OK.**
5. **H4/H5/M7/L3** — regenerar Clase24 completa y migrar su revisión al bloque
   `review`.
6. **M1/M4** — completar `id/academic_year/semester` y `bibliography` en Clase1,
   24, 25, 26.
7. **L1** — reformatear Clase23 (quitar blank-lines internas).
8. **L2** — recontar `summary_words` en Clase1, 25, 26.

---

## Resolución (2026-07-23)

Criterio adoptado: **estado editorial unificado en `editorial_status`** (se
eliminaron `version` y `duration`), e **`id` único `fis3-2015-2-NN`**. Los 11
archivos se reescribieron al esquema canónico de `CLAUDE.md §4` y **los 11
parsean** (validado con PyYAML). Estado por ítem:

| Ítem | Estado | Detalle |
|------|--------|---------|
| B1 | ✅ | `editorial_status` de Clase23 → valor único `draft`. |
| H1 | ✅ | `id` → `fis3-2015-2-NN` en las 11 (sin duplicados). |
| H2 | ✅ | `bibliography.chapter` → string entrecomillado en todas. |
| H3 | ✅ | `version` eliminado; estado en `editorial_status`. |
| H4 | ✅ | Clase24 completada (video, stats, topics, bibliografía, prereqs, next) derivando de su transcripción/notas. |
| H5 | ✅ | Clase24: `reviewed_by`/`status.reviewed` → bloque `review` (`state: reviewed`, `editorial_status: reviewing`). |
| M1 | ✅ | `id`/`academic_year`/`semester` añadidos a Clase1, 24, 25, 26. |
| M2 | ✅ | `duration` eliminado; se usa `video.end`. |
| M3 | ✅ | Desaparece el conflicto duration vs end (`duration` ya no existe). |
| M4 | ⚠️ | `bibliography` añadida a Clase1, 24, 25, 26 **con `verified: false`** — capítulos son estimaciones sin cotejar (Clase1 Resnick "21"; Clase24 S&Z "32"; Clase25 S&Z "32-33"; Clase26 S&Z "33"). |
| M5 | ✅ | Enum `review.state` fijado; se preservó `needs-work` (23) y `reviewed` (24). |
| M6 | ✅ | `llm.model` preservado (refleja el modelo real de cada clase). |
| M7 | ✅ | `status` con 4 claves en todas (se quitó `reviewed`). |
| M8 | ✅ | `source` uniforme `- OpenFING` (se quitaron las URLs de Clase6/7). |
| L1 | ✅ | Clase23 reformateada (sin blank-lines internas). |
| L2 | ✅ | `summary_words` recontado: Clase1 380→**219**, Clase25 580→**472**, Clase26 380→**273**. |
| L3 | ✅ | Espacio final de `reviewed_by` eliminado (campo ya no existe). |
| L4 | ⚠️ | `topics` de Clase23 sigue con 3 ítems (contenido, no esquema). Regenerar si se desea más granularidad. |
| L5 | ✅ | `id` ahora es clave de clase; la redundancia con year/semester es intencional (clave compuesta). |
| L6 | ✅ | `review.date` histórica preservada; Clase24 recibió 2026-07-06 (fecha de su archivo). |

**Notas de datos derivados / estimados** (revisar si se busca exactitud):
- **Clase24** era un stub: `video.end` (01:23:43), `transcript_words` (10145) y
  `equations` (27) se **midieron** de su transcripción/`notes.tex`;
  `diagrams_pending` (4) es una **estimación**. Además su `summary.md` es en la
  práctica el transcript casi crudo (de ahí `summary_words: 9978`) — conviene
  regenerarlo como resumen real.
- Los capítulos de **bibliografía añadida** (M4) son tentativos → `verified:
  false`.

Pendientes de contenido (fuera del alcance de esta normalización de esquema):
regenerar el resumen de Clase24 y enriquecer `topics` de Clase23 (L4).
