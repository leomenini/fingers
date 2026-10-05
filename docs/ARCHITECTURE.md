# ARCHITECTURE.md

> Reescrito el 2026-10-05 por [ADR-0006](adr/0006-fingers-como-mcp-guia.md).
> La versión anterior describía un pipeline editorial de apuntes sobre
> premisas que no había forma de medir. Queda en el historial de Git.

fingers tiene tres capas. Cada una se apoya en la de abajo, y sólo la primera
está completa.

```
┌─────────────────────────────────────────────────────────────┐
│ 3. Conector MCP          (por construir)                    │
│    tools · instructions · prompts → pasajes + enlaces ?t=   │
├─────────────────────────────────────────────────────────────┤
│ 2. Mapa del curso        (52 de 106 clases)                 │
│    manifest.json · metadata.yaml · summary.md / notes.tex   │
├─────────────────────────────────────────────────────────────┤
│ 1. Extractor             (completo)                         │
│    OpenFING → VTT → transcript.txt / .timed.txt  (no en Git)│
└─────────────────────────────────────────────────────────────┘
```

## 1. Extractor (existe)

`scripts/extractor/`. Baja el WebVTT estático que publica OpenFING por HTTP
directo, sin ejecutar JavaScript, y lo convierte en dos representaciones de
texto (ADR-0001, ADR-0002).

- `openfing.js` es la única pieza que hace pedidos de red. `vtt.js` es el
  parser, todo con funciones puras. `fetch.js` es la CLI.
- Es idempotente y resumible. Su primera corrida completa (2026-08-08) bajó
  70 clases sin errores. Hoy tiene registrados los 4 cursos.
- La transcripción **no se versiona** (ADR-0005). Lo que queda en Git es su
  procedencia: `manifest.json`, con URL, `sha256` y fecha.

El conector va a reusar `openfing.js` y `vtt.js` tal cual.

## 2. Mapa del curso (parcial)

Lo que fingers escribe. Por clase, en `courses/<Curso>/Clases/ClaseN/`:

| Archivo | Rol en el conector |
| --- | --- |
| `manifest.json` | identidad y procedencia: título de OpenFING, duración, `sha256` |
| `metadata.yaml` | navegación: `topics`, `prerequisites`, `next_topics`, estado |
| `summary.md` | contenido curado (`get_notes`) y referencia de evaluación |
| `notes.tex` + `assets/` | la versión tipográfica de lo mismo, con figuras |
| `transcript.stats.json` | métricas del extractor |

- **52 de 106 clases** tienen mapa completo. Las demás tienen sólo
  `manifest.json` y el esqueleto de `metadata.yaml`.
- **Los temas no tienen tiempo.** Ubicarlos en el video es trabajo del
  conector (ver *Alineación*).
- El esquema de cada archivo está en `docs/SPECS.md` y en el `CLAUDE.md` de
  cada curso.

## 3. Conector MCP (por construir)

Un servidor MCP local (stdio, Node). Decidido en ADR-0006:

- **Tools v1:** `list_courses`, `course_map`, `class_map`, `read_class` y
  `get_notes`.
- **Guía:** un campo `instructions` corto (≤ 15 líneas), las descripciones de
  las tools y prompts MCP para recorridos guiados.
- **Salida:** pasajes (cues con `[mm:ss]`) y enlaces
  `…/courses/<slug>/<N>/?t=<inicio>,<fin>`. No llama a ningún LLM.
- **Transcripciones en ejecución:** se bajan la primera vez que se piden, se
  cachean en local fuera de Git y se verifican contra el `sha256` del
  manifiesto.

### Alineación tema → tramo

Es una función determinista. Toma los términos de un tema de
`metadata.yaml`, los busca en los cues de la transcripción y devuelve la
ventana con mejor puntaje. Un campo `t:` opcional en el tema la corrige a
mano. Es la pieza que hace posibles los enlaces de `class_map`.

## Evaluación

Va antes que el servidor. Un set de unas 20 preguntas sobre Física III, cada
una con su respuesta esperada: (clase, tramo de tiempo), tomada de las notas
existentes. Mide dos cosas: si el conector señala la clase correcta, y si el
tramo devuelto contiene el concepto.

## Fuera del camino principal

- **`scripts/asr/`**: el experimento de transcribir con Whisper las clases que
  OpenFING no publicó. Es experimental y queda fuera del conector (ADR-0007).
- **El pipeline de notas** (transcripción → `summary.md` → `notes.tex`) está
  congelado como pipeline. Escribir más notas es curaduría opcional, y cada
  una se mide antes de servirse.

## Diferido, con ADR propio

- El clasificador inteligente, para buscar sobre el texto de las clases.
- La distribución remota: que usarlo cueste pegar un enlace, sin chocar con
  ADR-0005.
- La skill, como ajuste fino del comportamiento de guía.
