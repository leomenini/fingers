# ADR-0005 · Retención de la transcripción derivada

- **Estado:** Aceptado
- **Fecha:** 2026-08-08 (levantado y decidido el mismo día, ver *Decisión*)
- **Afecta a:** modelo de datos de la clase · `docs/SPECS.md` · `docs/log.md` ·
  todas las clases del corpus
- **Depende de:** ADR-0002, ADR-0004

## Contexto

ADR-0004 decidió que el `.vtt` crudo no se commitea, y dejó explícitamente sin
resolver el escalón de arriba: si la **transcripción derivada** —hoy
`Transcription_raw.txt`, mañana `transcript.txt` / `transcript.timed.txt` de
ADR-0002— debe seguir versionada. Lo difirió porque no es una decisión del
módulo Extractor sino del modelo de datos de todas las clases del repo.

Ese diferimiento se venció. Hoy el asunto está anotado en tres lugares
(`CLAUDE.md` §7, `docs/log.md` §Pendientes, ADR-0004) con distinto nivel de
detalle y ninguno es la decisión formal. Este ADR levanta el expediente.

El hecho: OpenFING declara todo su contenido bajo **CC BY-NC-ND**, y el repo
commitea 308 452 palabras de transcripción literal de sus clases (medición
abajo). El riesgo concreto no es una demanda —nadie demanda a un repo
académico sin ánimo de lucro— sino un **takedown en GitHub**, que llega sin
aviso y sin discusión. Y hay un problema más incómodo que el legal: el
producto de este proyecto *es* la trazabilidad de la procedencia, y esto es un
agujero de procedencia en el centro del corpus.

### La cláusula muerde en dos niveles, y hay que separarlos

`ND` prohíbe distribuir obras **derivadas**. La transcripción literal ni
siquiera llega a derivada: es **reproducción** de la obra. Es el caso nítido y
es el que este ADR discute.

`summary.md` y `notes.tex` son otra cosa y **no** están en el alcance de este
ADR. Son expresión propia de los colaboradores sobre ideas expuestas en clase,
y las ideas no son copyrightables: un apunte de clase pertenece a quien lo
escribe. Se anota acá sólo para dejar constancia de dónde se traza la línea,
no para decidir sobre ellos.

### Acoplamiento no anotado hasta ahora

Los 28 `Transcription_raw.txt` de Física III **son** el oráculo de `CLAUDE.md`
§6.c — el único test con oráculo real del proyecto. Sacarlos del working tree
los deja vivos en el historial de Git, así que `diff-oraculo.js` seguiría
teniendo de dónde recuperarlos. Pero la pasada de `git filter-repo` anotada en
`CLAUDE.md` §7 los borraría del todo. **Las dos decisiones abiertas están
ligadas**: si se elige la alternativa A, hay que decidir antes del
`filter-repo` si el oráculo se preserva fuera de Git, o se pierde para
siempre.

## Decisión

**La transcripción no se versiona. Se adopta la alternativa A.**

Este ADR se levantó en estado `Propuesto` esa misma mañana, difiriendo la
decisión hasta que existiera el `fetch`, con esta condición escrita: *"no se
acepta A sin que `npm run fetch -- <curso>` reconstruya una clase completa
desde cero"*. El `fetch` se completó ese mismo día y se corrió sobre las 42
clases de CDIV2017 sin un solo error (`CLAUDE.md` §6.d). **La condición se
cumplió**, y con ella desapareció la razón del diferimiento: A dejó de ser una
opción hipotética.

Concretamente:

1. **No se commitea `transcript.txt` ni `transcript.timed.txt`.** Están en el
   `.gitignore`. Viven en el disco de quien corrió la extracción.
2. **Sí se versionan los artefactos derivados que no reproducen la obra:**
   `manifest.json` (procedencia, ADR-0004), `transcript.stats.json` (métricas)
   y `metadata.yaml`. Ninguno contiene texto del docente.
3. **Regla de alcance:** vale para los **dos** cursos y los que vengan. Una
   regla que valiera para CDIV2017 y no para Física III dejaría el corpus con
   dos modelos de datos.
4. **Lo ya commiteado sale del historial.** Ignorar no destrackea: las
   308 452 palabras de `Transcription_raw.txt` de las 33 clases existentes
   siguen en Git hasta que se reescriba la historia. Eso se hace en la pasada
   de `git filter-repo` que `CLAUDE.md` §7 ya tenía agendada por peso; ahora
   esa pasada tiene dos motivos y un solo pase.

**El razonamiento que cerró la discusión** no fue el legal sino el de alcance:
el producto de este módulo es la *herramienta que reproduce* la transcripción,
no la transcripción. Con el `fetch` andando, el payload es un artefacto
intermedio regenerable, y versionarlo es guardar la salida de un comando
determinista. Que además cierre el problema de licencia es una consecuencia,
no la premisa.

## Alternativas consideradas

### A — La transcripción sale de Git; queda `manifest.json` — **ELEGIDA**

Extiende ADR-0004 un escalón: se versiona sólo el manifiesto (URL, `sha256`,
fecha de extracción, versión del extractor) y el texto se regenera con
`npm run fetch`. Es la única que cierra el agujero de procedencia.

Costo, todo real:

- La clase **deja de ser autocontenida**, que es un principio explícito de
  `docs/SPECS.md` ("cada clase representa una instancia académica
  autocontenida").
- `docs/SPECS.md` pasa de cuatro archivos obligatorios a tres + manifiesto.
- Clonar el repo deja de alcanzar para trabajar: hace falta red y que OpenFING
  siga sirviendo el curso.
- El oráculo de §6.c queda sólo en disco y en el historial (ver
  *Acoplamiento*).

### B — Se queda, con atribución explícita

Status quo documentado: un `NOTICE` por curso con autor, URL de origen y
licencia, y el riesgo aceptado por escrito, apoyándose en que el uso es
académico, sin ánimo de lucro y con atribución.

Cero migración, corpus autocontenido, oráculo intacto. No cierra nada: `NC` y
`BY` se cumplen, `ND` y la redistribución no, y un takedown llega igual. Su
mérito honesto es que el costo del riesgo es bajo y el de A es alto.

### C — Híbrido: sale el texto, queda la traza

Se commitea `transcript.stats.json` más timestamps y un hash por cue, sin el
texto. Permite verificar que una cita del `summary.md` corresponde a un cue
real de la fuente, y medir, sin redistribuir una palabra.

Es la más interesante conceptualmente y la más cara: exige inventar una
representación nueva, escribir el código que la produce y la verifica, y
mantenerla. Sólo se justifica si la trazabilidad verificable es un requisito
del producto y no un lindo a tener.

## Consecuencias

- **La clase deja de ser autocontenida**, y eso contradice a `docs/SPECS.md`
  ("cada clase representa una instancia académica autocontenida") y a su lista
  de cuatro archivos obligatorios. `SPECS.md` hay que corregirlo: pasa a tres
  versionados (`summary.md`, `notes.tex`, `metadata.yaml`) más `manifest.json`
  y `transcript.stats.json`, con la transcripción como insumo local.
- **Clonar el repo ya no alcanza para trabajar.** Hace falta red y que
  OpenFING siga sirviendo el curso. Reproducibilidad *verificable*, no
  *hermética*: el `sha256` del manifiesto permite confirmar que el texto que
  tenés es el que se usó, pero no recuperarlo sin la fuente.
- **El oráculo de `CLAUDE.md` §6.c es una baja real.** Los 28
  `Transcription_raw.txt` de Física III son el único test con oráculo real del
  proyecto, y el `filter-repo` los borra del historial de forma irreversible.
  Antes de correrlo hay que decidir explícitamente si se conserva una copia
  fuera de Git; si se pierde, `diff-oraculo.js` queda sin nada contra qué
  comparar. **Su hallazgo principal ya está registrado** en §6.c (el userscript
  no transformaba el texto), así que lo que se pierde es la capacidad de
  re-verificarlo, no el resultado.
- **Física III queda a medio camino** hasta que se le corra el `fetch`: sus 28
  clases tienen `Transcription_raw.txt` (que va a salir del repo) pero todavía
  no tienen `manifest.json`. Sin manifiesto no hay procedencia verificable, que
  es justamente lo que este ADR compra. Correr `fetch` sobre Física III es
  ahora un prerrequisito del `filter-repo`, no una tarea opcional.
- Las métricas del corpus que dependan de contar palabras de la fuente pasan a
  salir de `transcript.stats.json`, no de los archivos.

## Evidencia

**Licencia** (verificada el 2026-08-08 en <https://open.fing.edu.uy/>): el pie
del sitio declara *"Todo el contenido de OpenFing es Creative Commons"*, con
ícono y enlace a **CC BY-NC-ND**.

**Volumen** (medido el 2026-08-08, sobre archivos trackeados en
`chore/estructura`):

```bash
git ls-files -z 'courses/<Curso>/*Transcription_raw.txt' | xargs -0 wc -w
```

| Artefacto | Palabras |
| --- | --- |
| `Transcription_raw.txt` — Física III (28 clases) | 264 383 |
| `Transcription_raw.txt` — CDIV2017 (5 clases) | 44 069 |
| **Total de transcripción literal (33 clases, 1,8 MB)** | **308 452** |
| `summary.md` (33 clases, fuera de alcance) | 78 707 |
| `notes.tex` (33 clases, fuera de alcance) | 63 781 |

**La condición de aceptación, verificada el mismo día.** `npm run fetch --
CDIV2017 --write` reconstruyó las 42 clases del curso desde cero, sin un solo
error, en 85 peticiones (`CLAUDE.md` §6.d). `civ_09` reprodujo exactamente los
números medidos en §4 (279 cues, 9 301 palabras, 50 990 chars, 0
advertencias), que es lo que hace de la regeneración algo determinista y no
una aproximación.

**Sobre el número que circula en la documentación.** `CLAUDE.md` §7,
`docs/log.md` y ADR-0004 citan *271 057 palabras* para Física III; `wc -w` da
**264 383**. Es diferencia de método de conteo, no de contenido — la misma
clase de discrepancia que `docs/log.md` §7 documenta para
`stats.transcript_words`. Las cifras de este ADR son las de `wc -w` con el
comando de arriba, y quedan fechadas: la fuente se regenera
(`CLAUDE.md` §6.c), así que cualquier medición sobre ella caduca.
