# ADR-0006 · fingers pasa de repositorio de apuntes a MCP que guía por los cursos

- **Estado:** Propuesto
- **Fecha:** 2026-10-05
- **Afecta a:** alcance del proyecto · `README.md` · `docs/VISION.md` ·
  `docs/ARCHITECTURE.md` · `CLAUDE.md` · `AGENTS.md`
- **Depende de:** ADR-0001, ADR-0002, ADR-0005

## Contexto

fingers nació como una **base de conocimiento académico**: cada clase de
OpenFING se convertía, con un LLM y revisión humana, en resumen, notas LaTeX y
figuras. El extractor (ADR-0001/0002) automatizó la primera etapa y funciona.
El resto del pipeline tiene tres problemas que ninguna iteración resolvió:

1. **La calidad no se puede medir.** `CLAUDE.md` §9 lo dice con todas las
   letras: hoy no existe ninguna métrica de calidad. Las métricas que sí hay
   (palabras, ratio de reducción, ¿compila?) miden proceso, no fidelidad. La
   primera versión de `docs/ARCHITECTURE.md` describía un producto editorial
   terminado sobre premisas que no hay forma de comprobar.
2. **El costo en tokens no escala.** Resumir una clase cabe; resumir un curso
   no. En la práctica entran unas **6 clases por ventana de contexto** antes de
   que se agote, y cada resumen nuevo exige su propia medición.
3. **Cobertura.** Al 2026-10-05 hay 106 clases en 4 cursos y **52** tienen
   resumen. Las otras 54 tienen sólo transcripción.

Mientras tanto quedó a la vista qué es lo único que este repo tiene y un LLM
no: **saber dónde está cada cosa**. Qué clase cubre qué tema, en qué orden,
con qué prerrequisitos, y en qué minuto del video. OpenFING además acepta
enlaces a un tramo exacto del video: `…/courses/<slug>/<N>/?t=<inicio>,<fin>`
en segundos (verificado en `openfing.js` del sitio, 2026-10-05). Una
respuesta puede citar el pedazo de clase de donde sale.

## Decisión

**fingers deja de ser un producto terminado (apuntes) y pasa a ser una
herramienta: un servidor MCP que guía a un LLM, y a quien lo usa, a través de
los cursos de OpenFING.**

### 1. Para quién y para qué

- **Usuario:** primero el autor, mientras estudia. Después, estudiantes de
  FING. El diseño no puede impedir lo segundo.
- **Un conector, un objetivo:** *preguntarle a una clase* («¿qué dijo sobre
  Gauss en la clase 14?») y *ubicar un tema a través de los cursos* («¿dónde
  se ve Taylor?»). Cada respuesta cita la clase y el tramo `?t=`.
- **Sólo OpenFING.** Otras fuentes no se diseñan hasta que exista una.

### 2. El mapa, no el territorio

**fingers versiona el mapa, no el territorio.** La transcripción es contenido
de OpenFING. fingers sólo la reformatea, y sigue sin versionarse (ADR-0005
intacto). Lo que fingers *escribe* es el mapa que guía al LLM:

- `manifest.json`: procedencia, título de OpenFING, duración, `sha256`.
- `metadata.yaml`: `topics`, `prerequisites`, `next_topics`, estado.
- `summary.md` / `notes.tex`, donde existen: contenido curado.

En tiempo de ejecución, cada instancia baja la transcripción que necesita
**la primera vez que se pide** (las 2 peticiones de siempre). La cachea en
local, fuera de Git, y la verifica contra el `sha256` del manifiesto. Así
fingers nunca redistribuye la transcripción.

### 3. Forma

- **Servidor MCP local (stdio, Node)**, que reusa `openfing.js` y `vtt.js`.
  Es Node porque el repo ya es Node ESM y esos módulos ya son funciones puras.
- **El servidor arma pasajes, no redacta respuestas:** cue + `[mm:ss]` +
  enlace `?t=`. No llama a ningún LLM y no necesita API key. Su salida es
  determinista y testeable. El LLM del cliente es quien conversa.
- **El comportamiento de guía** vive en el servidor, en tres lugares:
  - el campo `instructions` del MCP, corto (≤ 15 líneas) porque se carga
    siempre;
  - las descripciones de las tools;
  - **prompts MCP** para los recorridos guiados (p. ej. `estudiar <clase>` o
    `repasar <tema>`).

  Un protocolo largo en una skill se pierde a medida que se llena el contexto.
  La **skill** queda para después, como ajuste fino.

### 4. Superficie v1

| Tool | Devuelve |
| --- | --- |
| `list_courses` | cursos, cantidad de clases y cobertura del mapa |
| `course_map(curso)` | cada clase: título, temas, prerrequisitos, temas siguientes |
| `class_map(curso, clase)` | temas con tramo de tiempo y enlace `?t=`; si hay notas curadas |
| `read_class(curso, clase, desde?, hasta?)` | cues con `[mm:ss]` de un tramo (bajada perezosa, cacheada) |
| `get_notes(curso, clase)` | el `summary.md` curado, si existe |

- **Clases sin mapa** (54 hoy): se sirven igual, con el título de OpenFING y
  `read_class`, marcadas *sin mapa todavía*. Así el LLM sabe que ahí no puede
  navegar por tema.
- **Tema → tramo:** los `topics` no dicen *dónde* están en el video. Una
  **función determinista** alinea los términos de cada tema contra los cues y
  devuelve la mejor ventana. Un campo `t:` opcional en `metadata.yaml` la
  corrige a mano cuando falla. No cuesta tokens y mejora sin re-resumir nada.
- **Búsqueda:** sólo funciones deterministas sobre el mapa (títulos y temas).
  La búsqueda sobre el texto de las transcripciones queda diferida (ver
  *Consecuencias*).

### 5. El corpus existente

Las 52 clases con resumen **se quedan**, con dos usos:

- `get_notes` las sirve como contenido curado.
- Son la **referencia de evaluación** del conector.

El pipeline de notas **se congela como pipeline**: escribir más resúmenes
pasa a ser curaduría opcional, y cada uno nuevo se mide antes de servirse. El
conector funciona con la transcripción sola.

## Alternativas consideradas

- **Seguir como repositorio de apuntes.** Descartada por los tres problemas
  del *Contexto*. El corpus sobrevive como contenido, no como objetivo.
- **Una Claude Skill en vez de un MCP.** Descartada por ahora: el protocolo de
  guía es largo, y en una skill se pierde con el contexto. Además, un MCP
  funciona con cualquier cliente, no sólo con Claude. Vuelve más adelante
  como ajuste fino.
- **Que el servidor redacte respuestas con un LLM propio.** Descartada:
  necesitaría API key, tendría costo, quedaría atado a un proveedor y su
  salida no sería determinista. El LLM del cliente ya está en la conversación.
- **Embeddings o un clasificador inteligente** (un LLM que clasifica grandes
  volúmenes de forma determinista, tipo Laya/Jev) **desde el día uno.**
  Diferido: con este tamaño de corpus alcanzan las funciones deterministas
  sobre el mapa. Entra con su propio ADR cuando el proyecto crezca y se pueda
  medir contra la evaluación.
- **Separar el contenido en otro repo.** Prematuro con un solo usuario.

## Consecuencias

- **Se reescriben** `README.md`, `docs/VISION.md` y `docs/ARCHITECTURE.md`. La
  arquitectura editorial anterior queda en el historial de Git.
- **ADR-0001 a 0005 no cambian.** Este ADR decide el alcance del producto, no
  la extracción. El conector se apoya en todos ellos.
- **Lo próximo es la evaluación, antes que el servidor.** Un set de unas 20
  preguntas sobre Física III, el único curso completo. Cada una con su
  respuesta esperada: (clase, tramo de tiempo), sacada de las notas
  existentes. Es determinista y barata, y mide el conector y la alineación
  tema → tramo a la vez.
- **Distribución: abierta, con una restricción.** Para contribuir, se clona el
  repo. Para usarlo, **el costo para quien lo use tiene que ser pegar un
  enlace**. Eso apunta a un MCP remoto, y un servidor remoto que baja y sirve
  transcripciones **choca con ADR-0005**, porque redistribuiría. Se resuelve
  con su propio ADR antes de abrirlo a estudiantes.
- **Pendientes con ADR propio:** el clasificador inteligente, la distribución
  remota y la skill.
- **El experimento de ASR** (transcribir lo que OpenFING no publicó) queda
  **fuera del MCP**. Su procedencia y estado se deciden en ADR-0007.

## Evidencia

Medido el 2026-10-05 sobre el árbol de trabajo:

| Curso | Clases | Con resumen y `topics` |
| --- | --- | --- |
| Fisica3-2015 | 28 | 28 |
| ElecMag2024 | 29 | 10 |
| CDIV2017 | 42 | 7 |
| MetNum2023 | 7 | 7 |
| **Total** | **106** | **52** |

- Todas las clases con resumen tienen `topics` completos. **Ninguna** tiene
  tramos de tiempo: 0 marcas `mm:ss` en los `summary.md` muestreados de
  ElecMag2024 (11), Fisica3-2015 (14) y MetNum2023 (6).
- Enlace a un tramo de video: `openfing.js` lee `?t=<inicio>,<fin>`, salta a
  `inicio` y pausa en `fin`. Revisado el 2026-10-05.
- «~6 clases por ventana de contexto» es la observación de trabajo del autor
  al resumir, no una medición instrumentada.
