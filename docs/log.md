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

## 6. Convención de nombres de curso/edición — RESUELTA (2026-08-02)

- **`docs/`, `CLAUDE.md` y el corpus real** tenían dos convenciones
  conviviendo: `courses/Fisica3/` (sin año) y `courses/CDIV2017/` (con año),
  sin que ningún documento explicara la asimetría.

**Decisión:** [ADR-0003](adr/0003-convencion-nombres-curso-edicion.md).
`courses/Fisica3/` se renombra a `courses/Fisica3-2015/` (`git mv`, historial
preservado); regla general: sufijo `-<año>` obligatorio si hay más de una
edición conocida del curso, recomendado en caso contrario. Las referencias
textuales en `CLAUDE.md`, `README.md`, `docs/SPECS.md` y
`courses/CDIV2017/CLAUDE.md` se actualizaron en el mismo commit. Esta entrada
de `log.md` (fechada 2026-07-24/25 en las secciones de arriba) no se edita
retroactivamente — las rutas que cita ahí eran correctas cuando se
escribieron.

## 7. `stats.transcript_words` no es reproducible desde el archivo — ABIERTA (2026-08-02)

Detectada al correr `scripts/extractor/diff-oraculo.js` sobre las 28 clases
de Física III.

**Las 28 clases tienen `stats.transcript_words` distinto del conteo real de
su propio `Transcription_raw.txt`.** No es un caso aislado:

| | |
|---|---|
| Clases afectadas | 28 / 28 |
| Error típico | +355 a +518 palabras (≈ 4 %) |
| Caso extremo | Clase23: `12584` declarado, **9225** real (+36 %) |
| Error absoluto acumulado | 13 908 palabras |

En 26 clases el número de `metadata.yaml` copia fielmente el header del
userscript (`Palabras : NNNN`), así que el error viene de origen: el
userscript contaba sobre el DOM al momento de exportar y lo que quedó
guardado en el archivo no es exactamente eso. No hay una fórmula simple que
lo explique — no es "contó los timestamps" ni "contó la cabecera"; en Clase1
el valor declarado es incluso **menor** que el real. Las dos clases sin
bloque de stats (1 y 23) tienen números de otra procedencia, y la de Clase23
es la peor de todas.

**Por qué importa:** el `CLAUDE.md` de ambos cursos instruye *"La cabecera
trae `Palabras : NNNN` → ese número es `stats.transcript_words`"*. Esa receta
propaga un número que no se puede verificar contra el archivo.

**Decisión:** no se corrigen los 28 `metadata.yaml` a mano ahora. El conteo
correcto lo produce el parser (`transcript.stats.json`), así que la
corrección llega sola cuando el extractor regenere cada clase. Lo que sí hay
que hacer en ese momento es **dejar de copiar el header** y empezar a usar el
valor medido. Hasta entonces, `stats.transcript_words` es indicativo, no
exacto — no usarlo como base de ninguna métrica del benchmark.

---

## Pendientes (2026-08-02)

Registrado el mismo día que se resolvió el punto 6, durante la sesión de
sincronización de documentación posterior al rediseño del proyecto (ver
`CLAUDE.md` §7 y §10).

### Rename `Transcription_raw.txt` → `transcript.txt` — RESUELTA (2026-08-08)

**Forward-only.** Toda clase que produzca el extractor usa los nombres de
ADR-0002 (`transcript.txt`, `transcript.timed.txt`, `transcript.stats.json`,
`manifest.json`). Las 33 clases del corpus viejo conservan
`Transcription_raw.txt` hasta que se decida migrarlas.

Razón: migrar retroactivamente es un trabajo aparte —toca 33 clases,
`docs/SPECS.md` y los `CLAUDE.md` de los dos cursos— y no bloquea la
recolección, que era lo urgente. Se pagó el precio de tener dos convenciones
conviviendo un tiempo, a cambio de que el extractor naciera alineado con el
ADR en vez de heredar el nombre viejo.

Consecuencia operativa ya implementada: `fetch.js` considera "ya extraída" a
una clase que tenga **cualquiera** de los dos nombres. Sin eso le dejaría al
lado una segunda copia del mismo texto a las 33 clases viejas.

La migración retroactiva queda como pendiente separado, y conviene resolverla
junto con [ADR-0005](adr/0005-retencion-transcripcion-derivada.md): si la
transcripción sale de Git, renombrar archivos que van a dejar de versionarse
es trabajo perdido.

### Riesgo CC BY-NC-ND de la transcripción derivada — RESUELTA (2026-08-08)

**[ADR-0005](adr/0005-retencion-transcripcion-derivada.md)**, `Aceptado`: la
transcripción **no se versiona**. `transcript.txt` y `transcript.timed.txt`
van al `.gitignore`; se versionan `manifest.json`, `transcript.stats.json` y
`metadata.yaml`, que no reproducen la obra. El contexto, las alternativas y la
evidencia están en el ADR y no se repiten acá.

**Ejecutada el mismo día.** Ignorar no destrackea, así que las 308 452
palabras salieron del historial con `git filter-repo` (`CLAUDE.md` §7.b). Los
dos prerrequisitos se cumplieron antes: se corrió el `fetch` sobre Física III
—sus 28 clases ya tienen `manifest.json`— y el oráculo se copió a
`~/Desktop/Files/respaldo-fingers-borrados/`.

### `Resnick.pdf` (69 MB) en el historial de git — RESUELTA (2026-08-08)

Salió con la misma pasada de `git filter-repo`, junto al resto del peso
muerto (`notes.pdf`, `PDFiter1/`, `NotasCA.pdf`). `.git` pasó de 82 MB a
1,7 MB. Detalle y lecciones en `CLAUDE.md` §7.b.

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
