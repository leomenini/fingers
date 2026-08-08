# ADR-0005 · Retención de la transcripción derivada

- **Estado:** Propuesto
- **Fecha:** 2026-08-08
- **Afecta a:** modelo de datos de la clase · `docs/SPECS.md` · `docs/log.md` ·
  todas las clases del corpus
- **Depende de:** ADR-0002, ADR-0004
- **Bloqueado por:** el `fetch` del extractor (`CLAUDE.md` §7, punto 1)

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

**Ninguna todavía.** Este ADR queda en `Propuesto` a propósito.

La razón del diferimiento es concreta, no dilatoria: la alternativa A sólo es
real si cualquiera puede regenerar la transcripción con un comando, y el
`fetch` del extractor todavía no existe (`CLAUDE.md` §7, punto 1). Decidir hoy
sería elegir entre una opción implementada y una hipotética, que es una forma
elegante de decidir por B sin admitirlo.

**Criterio de desempate, fijado ahora para no discutirlo bajo presión después:**

1. **Disparador.** Se resuelve cuando el `fetch` esté completo y validado
   contra CDIV2017, o antes si llega un takedown o se suma un colaborador
   externo. Lo que ocurra primero.
2. **Condición de la alternativa A.** No se acepta A sin que
   `npm run fetch -- <curso>` reconstruya una clase completa desde cero. Sin
   eso, A no cierra el agujero: lo transforma en pérdida de contenido.
3. **Precedencia.** Esta decisión manda sobre el `filter-repo` de `CLAUDE.md`
   §7. No se reescribe el historial antes de resolverla, porque el
   `filter-repo` destruye el oráculo de §6.c de forma irreversible.
4. **Alcance.** Lo que se decida aplica a los **dos** cursos y a los que
   vengan. No se acepta una regla que valga para CDIV2017 y no para
   Física III: el corpus tendría dos modelos de datos.

## Alternativas consideradas

### A — La transcripción sale de Git; queda `manifest.json`

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

Mientras este ADR siga en `Propuesto`:

- El corpus sigue como está. **No se agregan clases nuevas asumiendo que la
  transcripción se versiona para siempre**: el extractor debe escribir el
  `manifest.json` de ADR-0004 desde el día uno, que es lo que mantiene viva la
  alternativa A.
- No se corre `git filter-repo` (punto 3 del criterio de desempate).
- `docs/log.md` y `CLAUDE.md` §7 dejan de describir el riesgo y pasan a
  apuntar acá. La descripción vive en un solo lugar.

Cuando se resuelva, este ADR se edita **sólo** para cambiar el estado a
`Aceptado` y agregar la decisión y su fecha; si la resolución contradijera lo
escrito acá, se escribe un ADR nuevo que lo supersede
(`docs/adr/README.md`).

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

**Sobre el número que circula en la documentación.** `CLAUDE.md` §7,
`docs/log.md` y ADR-0004 citan *271 057 palabras* para Física III; `wc -w` da
**264 383**. Es diferencia de método de conteo, no de contenido — la misma
clase de discrepancia que `docs/log.md` §7 documenta para
`stats.transcript_words`. Las cifras de este ADR son las de `wc -w` con el
comando de arriba, y quedan fechadas: la fuente se regenera
(`CLAUDE.md` §6.c), así que cualquier medición sobre ella caduca.
