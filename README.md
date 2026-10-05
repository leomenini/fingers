# fingers

**Un servidor MCP que guía a un LLM por los cursos de OpenFING.** Navega el
mapa de cada curso (qué clase cubre qué tema, en qué orden, con qué
prerrequisitos) y cita el tramo exacto del video de donde sale cada respuesta.

> fingers es una **herramienta en construcción**, no un producto terminado.
> El giro desde «repositorio de apuntes» está decidido en
> [ADR-0006](docs/adr/0006-fingers-como-mcp-guia.md). El servidor MCP todavía
> no está escrito: hoy existen el extractor, el mapa de 106 clases y el
> contenido curado sobre el que se va a apoyar.

---

## La idea: el mapa, no el territorio

La transcripción de una clase es de OpenFING. fingers no la guarda ni la
redistribuye ([ADR-0005](docs/adr/0005-retencion-transcripcion-derivada.md)).
Lo que fingers escribe y versiona es el **mapa**:

- **`manifest.json`**: procedencia (URL, `sha256`, título, duración).
- **`metadata.yaml`**: temas, prerrequisitos, temas siguientes, estado.
- **`summary.md` / `notes.tex`**: notas curadas, donde existen.

Cuando el LLM necesita el texto de una clase, fingers lo baja de OpenFING la
primera vez, lo cachea en local y lo verifica contra el manifiesto. La
respuesta cita el video con un enlace a un tramo
(`open.fing.edu.uy/courses/<slug>/<N>/?t=<inicio>,<fin>`).

## Qué va a exponer el conector (v1)

| Tool | Para qué |
| --- | --- |
| `list_courses` | qué cursos hay y cuánto mapa tiene cada uno |
| `course_map` | recorrer un curso: clases, temas, prerrequisitos |
| `class_map` | los temas de una clase, cada uno con su enlace al video |
| `read_class` | leer un tramo de la transcripción, con `[mm:ss]` |
| `get_notes` | las notas curadas de una clase, si existen |

Además, unas instrucciones cortas y **prompts MCP** para recorridos guiados
(`estudiar <clase>`, `repasar <tema>`). El servidor arma pasajes y enlaces y
no llama a ningún LLM: la conversación la lleva tu cliente.

## Estado del contenido

| Curso | Clases | Con mapa y notas |
| --- | --- | --- |
| `Fisica3-2015`: Física III, Nicolás Wschebor | 28 | 28 |
| `ElecMag2024`: Electromagnetismo | 29 | 10 |
| `CDIV2017`: Cálculo 1, Alexandre Miquel | 42 | 7 |
| `MetNum2023`: Métodos Numéricos | 7 | 7 |

Las clases sin mapa se van a servir igual (título de OpenFING y
transcripción), marcadas como *sin mapa todavía*.

## Roadmap

1. **Evaluación.** Unas 20 preguntas sobre Física III, cada una con su
   respuesta esperada (clase, tramo de tiempo), sacada de las notas. Es el
   test del conector antes de que exista.
2. **Servidor MCP v1.** Las 5 tools, con caché local de transcripciones.
3. **Alineación tema → tramo.** Una función determinista que ubica cada tema
   en el video, con corrección manual opcional.
4. **Clasificador inteligente** para buscar sobre el texto de las clases,
   cuando el corpus lo justifique (con su propio ADR).
5. **Skill**, como ajuste fino del comportamiento de guía.
6. **Distribución para estudiantes.** El objetivo es que usarlo cueste pegar
   un enlace (con su propio ADR, por la tensión con ADR-0005).

## Para desarrollar

Hace falta **Node ≥ 20** y git. El extractor no tiene dependencias: no hace
falta `npm install`.

```bash
git clone git@github.com:leomenini/fingers.git
cd fingers
npm run fetch -- CDIV2017                 # dry-run: qué bajaría
npm run fetch -- CDIV2017 9,14 --write    # baja esas clases a courses/
```

- Cursos registrados: `CDIV2017`, `Fisica3-2015`, `ElecMag2024` y
  `MetNum2023`, en [`scripts/extractor/cursos.js`](scripts/extractor/cursos.js).
- `fetch` es idempotente: repetirlo salta lo que ya está y retoma lo que
  falló.
- Para compilar las notas curadas a PDF:
  `cd courses/<Curso> && ./build.sh`, con
  [`tectonic`](https://tectonic-typesetting.github.io/).

## Experimento: transcribir lo que OpenFING no publicó

Dos clases de ElecMag2024 no tienen transcripción oficial. Se transcribieron
con Whisper `large-v3` en RunPod: 0,917 de similitud contra la oficial en la
clase de control, por USD 0,155. Es un **experimento**, queda fuera del
conector y le falta medición. La bitácora está en
[`EXPERIMENTO.md`](EXPERIMENTO.md) y la procedencia en
[ADR-0007](docs/adr/0007-procedencia-transcripciones-asr.md).

## Documentación

- [`docs/adr/`](docs/adr/): las decisiones, de ADR-0001 (extracción por VTT)
  a ADR-0007 (ASR).
- [`docs/VISION.md`](docs/VISION.md): para qué existe fingers.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): las piezas, cuáles existen
  y cuáles faltan.
- [`docs/SPECS.md`](docs/SPECS.md): qué archivos tiene una clase.
- [`scripts/README.md`](scripts/README.md): qué se ejecuta.
- `CLAUDE.md`: contexto de trabajo para agentes.
- `courses/<Curso>/CLAUDE.md`: convenciones de cada corpus.

## Fuentes y licencia

El contenido de las clases es de **OpenFING** (CC BY-NC-ND). **Este repo no
distribuye transcripciones.** Versiona su procedencia y el código que las
vuelve a obtener de la fuente original. Las notas curadas son redacción
propia sobre las ideas expuestas en clase.
