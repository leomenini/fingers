# CLAUDE.md — Curso Electromagnetismo (OpenFING, 2024)

Guía para generar las notas de cada clase a partir de su transcripción. Cada
carpeta `Clases/ClaseN/` documenta una clase del curso.

| Archivo | Origen | Descripción |
|---------|--------|-------------|
| `transcript.txt` | **no versionado** | Transcripción sin marcas de tiempo. La produce `npm run fetch`; no se edita. |
| `transcript.timed.txt` | **no versionado** | La misma, con marcas `[m:ss]`. Para trazabilidad y revisión. |
| `summary.md` | generado | Resumen estructurado en Markdown. |
| `notes.tex` | generado | El mismo resumen traducido a LaTeX. |
| `metadata.yaml` | generado | Metadatos de la clase (esquema estricto, ver abajo). |
| `manifest.json` | extractor | Procedencia: URL, `sha256`, fecha. No editar. |
| `transcript.stats.json` | extractor | Métricas del parseo. No editar. |

> **La estructura por clase es la misma que en `Fisica3-2015` y `CDIV2017`**, sin
> variantes propias de este curso: tres archivos generados (`summary.md`,
> `notes.tex`, `metadata.yaml`) más los tres del extractor, y `assets/` sólo si
> la clase tiene figuras. `notes.tex` es la **traducción del `summary.md` ya
> cerrado** —no se escriben en paralelo—: es la capa de compatibilidad que
> explica `/CLAUDE.md` §8.

> **Layout**: las clases viven en `courses/ElecMag2024/Clases/ClaseN/`; el
> `assets/` global (compartido, para consistencia visual) en
> `courses/ElecMag2024/Clases/assets/`. `build.sh` y `CLAUDE.md` quedan a nivel
> `courses/ElecMag2024/`.

> **Si falta `transcript.txt`, no está perdido** — se regenera (ADR-0005):
>
> ```bash
> npm run fetch -- ElecMag2024 <N> --write
> ```

---

## 0. Antes que nada: el slug correcto es `em-2024`

**OpenFING tiene dos cursos de electromagnetismo y son cursos distintos, no dos
ediciones intercambiables.** Esto ya costó una extracción entera que hubo que
tirar (2026-09-06):

| | slug `em` | slug **`em-2024`** ← este curso |
| --- | --- | --- |
| Clases | 24 | **29** |
| Docente | José Ferrari | **Nicolás Wschebor** |
| Fecha (`releaseDate`) | 2016-08-28 | **2024-08-06** |
| Texto | Reitz, Milford & Christie 4ª ed., caps. 1–16 salteando 5/10/14/15 | Reitz & Milford, sin capítulos anunciados |
| Enfoque | curso completo hasta Maxwell | intermedio, "espiral" sobre Física III con cálculo vectorial y EDP |

`scripts/extractor/cursos.js` ya apunta a `em-2024`. Antes de dar por buena
cualquier extracción, verificar que el `manifest.json` diga
`sourceUrl: https://open.fing.edu.uy/courses/em-2024/N/` y que el `vttUrl`
tenga `em-2024_NN_transcription.vtt`. Si aparece `José Ferrari` en una
transcripción, es el curso equivocado.

**Clases 9 y 10: no tienen transcripción publicada** (verificado 2026-09-06).
Dos cosas se cruzan ahí y conviene no confundirlas:

1. **La página se contradice a sí misma sobre el año** (verificado 2026-09-08):
   el `og:video` dice `media/em-2024/em-2025_09.mp4` —y ese `.mp4` existe—
   mientras que el `data-transcripcion-src` de la misma página dice
   `em-2024_09_transcription.vtt`. No es exactamente un typo: son **clases
   regrabadas en 2025 e insertadas en el curso de 2024** (`video:release_date`
   = 2025-09-04 y 2025-09-09, contra 2024-08-29 de la clase 8), y el nombre
   del video quedó con el año de la regrabación. Como el extractor deriva del
   `og:video` (ADR-0001), pedía `em-2025_09_transcription.vtt` y fallaba.
2. **Pero el archivo no existe con ningún nombre.** Barrido completo, sin
   celdas sin probar (2026-09-08); todo 404 salvo el `.mp4`:

   | | `_transcription.vtt` | `.vtt` | `_thumbnails.vtt` | `.mp4` |
   | --- | --- | --- | --- | --- |
   | `media/em-2024/em-2024_09` | 404 | 404 | 404 | 404 |
   | `media/em-2024/em-2025_09` | 404 | 404 | 404 | **200** |
   | `media/em-2025/em-2025_09` | 404 | — | — | 404 |

   Para contraste, la clase 8 sí tiene los tres: `_transcription.vtt`,
   `_thumbnails.vtt` y `em-2024_08.vtt` (100 KB, la pista del `<track>`).
   Que a 9 y 10 les falten **los tres** es la señal limpia de que OpenFING
   nunca generó los assets derivados de esos dos videos.

   **Cómo buscar, si hay que rehacerlo:** no razonar sobre ediciones («es de
   2025, será de otro curso»). Es la misma clase del mismo curso; lo que hay que
   barrer es la **familia de nombres de archivo**, y la lista sale de la propia
   página:
   ```bash
   curl -s "https://open.fing.edu.uy/courses/em-2024/9/" \
     | grep -oE '(src|href|data-[a-z-]*)=["'"'"']?[^"'"'"' >]*\.(vtt|mp4|json|m3u8)' | sort -u
   ```
   Ese grep fue el que reveló que **hay dos VTT por clase**, no uno:
   `em-2024_NN_transcription.vtt` (el que usa el extractor) y
   `em-2024_NN.vtt` (~95–100 KB, la pista de subtítulos del `<track>`). El
   segundo nunca se usó y es un **posible respaldo** si algún día falta el
   primero — habría que validarlo con `validarTranscripcion()` antes de confiar
   en él.

O sea: el año raro del `og:video` es real pero no es la causa; la causa es que
la fuente no publicó esas transcripciones. No es un bug del extractor. Mientras
tanto esas dos clases no se pueden documentar y **no se les crea carpeta**.

**El extractor ya contempla el caso (2026-09-08).** No hay que acordarse de
nada al correrlo:

- Si la URL canónica da 404, `candidatosDeVtt` (en `openfing.js`) prueba el
  año ±1 en el nombre de archivo y en el directorio. Para la clase 9 eso genera
  `em-2024_09_transcription.vtt`, que es **exactamente** lo que declara el
  `data-transcripcion-src` — la heurística apunta bien; el archivo no está.
- Cuando ningún candidato existe, la clase se reporta como `SIN FUENTE`, no
  como `ERROR`: no cuenta para el exit code y el resumen aclara que reintentar
  no cambia nada. Hoy `npm run fetch -- ElecMag2024` cierra en
  **27 · 2 sin fuente · 0 con error**, exit 0.
- Si algún día el fallback acierta, la corrida lo avisa con la URL efectiva.
  Un acierto silencioso sería un bug invisible.

> Hallazgo aprovechable: `data-transcripcion-src` en el HTML de la clase da la
> URL del VTT **directamente**, sin derivarla del `og:video`, y es inmune a este
> typo. Si OpenFING vuelve a mezclar nombres, es el atributo a mirar antes de
> tocar `urlDelVtt` en `openfing.js`.

**Estado de la extracción (2026-09-08): 27 de 29, cerrado.** Las 27 clases con
fuente están bajadas —las 19 de la 11 a la 29 se escribieron ese día, 175 505
palabras, 0 errores—; las 4–8 tienen además `summary.md`, `notes.tex`,
`assets/` y `metadata.yaml` completos.

**Las clases 9 y 10 quedan fuera del corpus por decisión, no por pendiente.**
Sólo existe su `.mp4` (1,13 GB, subido 2025-09-08); OpenFING nunca corrió su
pipeline de derivados sobre esos dos videos, así que no hay transcripción,
subtítulos, thumbnails ni poster. Transcribir el audio con ASR quedó como idea
sin decidir —daría texto de otra procedencia y otra tasa de error mezclado con
las otras 27, y exige ADR nuevo (toca 0001, 0002 y 0004); desarrollada en
`ideas/asr-runpod-whisper.md`. **El día que OpenFING publique los VTT, el
extractor las levanta solo**, sin tocar código. `27/29` es el número correcto
para este curso; no buscar el hueco de nuevo.

---

## 1. Flujo de trabajo para una clase nueva

1. Leer `Clases/ClaseN/transcript.txt` (si falta, `npm run fetch -- ElecMag2024
   N --write`). **`stats.transcript_words` sale de `transcript.stats.json` →
   `words`**, que ya viene escrito por el extractor. No contar a mano ni copiar
   un número de ninguna cabecera.
2. Escribir `summary.md` siguiendo §2.
3. Traducir a `notes.tex` siguiendo §3 (preámbulo **verbatim**, ver §3.1).
4. Escribir `metadata.yaml` siguiendo §4 (esquema **exacto**).
5. No inventar datos: si un campo no se puede derivar de la transcripción,
   dejarlo en el valor por defecto documentado, no omitirlo ni completarlo con
   un dato plausible pero no verificado.

---

## 2. `summary.md` — estilo

- **Título H1**: `# Resumen Clase N — <Tema 1, Tema 2, …>`.
- **Índice** con enlaces internos (`## Índice` → lista numerada a anclas
  `#n-titulo`), con subitems para las subsecciones.
- **Secciones `##` numeradas** siguiendo el orden de exposición de la clase;
  subsecciones `###`.
- **Ecuaciones** en LaTeX con `$...$` (inline) y `$$...$$` (display). Encerrar
  los resultados clave en `\boxed{...}`.
- **Tablas Markdown** para comparaciones (casos, coordenadas, regímenes, etc.).
- **Citas `>`** para notas, sutilezas, límites de validez y advertencias.
- **Negritas** para términos técnicos la primera vez que aparecen.
- Cerrar, si aplica, con un puntero a la clase siguiente (en cursiva).

El resumen debe reconstruir los razonamientos, no solo listar resultados:
hipótesis, convenciones de signo y **el porqué** de cada paso.

**Nivel de detalle (importante):** expandir el contenido de cada header, no
resumir al mínimo. `summary_words` típico esperado: **2000–3200** (no forzar el
número — depende de la densidad de la clase).

### 2.1 Lo que este curso pide y Física III no

Este es un curso **intermedio**, y el docente lo plantea explícitamente como una
**"lógica de espiral"** sobre Física III: los mismos temas, en casi el mismo
orden, pero con cálculo vectorial y **ecuaciones en derivadas parciales**. El
resumen no puede quedarse en el nivel Resnick.

- **Las deducciones son el contenido, no el adorno.** Cuando el docente resuelve
  Laplace por separación de variables, van los pasos: ansatz de producto,
  constante de separación, las dos EDO resultantes, las condiciones de borde y
  el ajuste de coeficientes. Terminar en el resultado encajonado y saltear el
  medio pierde justamente lo que distingue este curso del anterior.
- **Distinguir lo que se repasa de lo que es nuevo.** Casi toda clase abre
  retomando Física III (Gauss integral, Coulomb, potencial). Ese repaso va, pero
  comprimido; el peso del resumen va en la vuelta nueva (forma diferencial,
  desarrollo multipolar, problemas de contorno, medios).
- **Lo que el docente no demuestra, las notas dicen que no se demostró.** Este
  curso saltea cuentas a propósito y lo anuncia ("no lo vamos a demostrar",
  "esto lo ven en el práctico"). Se registra el hecho y la idea que él dio; no
  se completa la demostración por cuenta propia (AGENTS.md §3).
- **La notación se dicta en prosa y hay que reconstruirla.** Igual que en
  CDIV2017 (`/CLAUDE.md` §5), el VTT no trae un solo símbolo: "la divergencia
  de E es rho sobre épsilon cero" hay que escribirlo $\nabla\cdot\vec E =
  \rho/\varepsilon_0$. Es traducción, no invención — pero **el pizarrón es
  invisible**: cuando dice "esto" señalando un dibujo, el referente se perdió.
  Ante duda, decirlo en el texto en vez de inventar el referente.
- **Ruido de ASR conocido:** el apellido del docente sale como *"Yebor"*,
  *"Wschebor"* casi nunca; "epsilon cero" aparece como *"el silón cero"*,
  *"e silón"*; "Física 3" a veces como *"física tres"* o *"electroanalítica"*
  por "electromagnética". Corregir en silencio, no citarlo como si fuera lo que
  se dijo.

---

## 3. `notes.tex` — estilo

- **Es la traducción del `summary.md`**, con `\section`/`\subsection` espejando
  sus headers. No se agrega contenido que no esté en el `.md` ni al revés (la
  única excepción: las figuras viven sólo en el `.tex`, §6.5).
- El **preámbulo es idéntico en todas las clases** de este curso: copiarlo
  **verbatim** de §3.1. No agregar ni quitar paquetes sin motivo. Las clases
  **con** diagramas le suman encima el bloque de §6.3.
- **Encoding compatible con tectonic (XeTeX)**: el bloque de encoding va con
  guarda `iftex` (pdflatex → `inputenc`+`fontenc T1`; XeTeX → `fontspec`). No
  usar `\usepackage[utf8]{inputenc}` suelto: bajo XeTeX rompe símbolos
  (`·`, `—`, `¿`, `¡`, `§`, `ª`). Ya viene resuelto en §3.1.
- Cajas de color (definidas en el preámbulo), usarlas consistentemente:
  - `keybox` (azul) — resultados/definiciones/teoremas clave.
  - `notebox` (amarillo) — notas, aclaraciones, límites de validez.
  - `warnbox` (rojo) — advertencias, errores conceptuales frecuentes,
    condiciones que hay que verificar antes de aplicar un resultado.
  - **Definirlas con `title={#1}`** (llave obligatoria, ya está así en §3.1):
    sin la llave, un `=` en el título (p. ej. `[Campo en $r = R$]`) rompe el
    parser `key=value` de tcolorbox con *Missing $ inserted*.
- Título de dos líneas: `\textbf{Clase N: <Tema>} \\ \large{<subtítulo>}`.
- Autor fijo: `Transcripto y expandido --- Curso Electromagnetismo (OpenFING)`.
- `\tableofcontents` tras `\maketitle`.
- Mismos `\boxed{...}` y tablas `booktabs` que el resumen.
- **Los títulos del índice de OpenFING traen el sufijo `(versión borrador)`.**
  Es una marca de la fuente, no del contenido: **no** copiarlo al `\title`, ni a
  `topics`, ni al H1 del resumen.

### 3.1 Preámbulo canónico (verbatim, sin bloque de diagramas)

```latex
\documentclass[12pt,a4paper]{article}

% ---- Encoding & Font ----
\usepackage{iftex}
\ifPDFTeX
  \usepackage[utf8]{inputenc}
  \usepackage[T1]{fontenc}
\else
  \usepackage{fontspec}  % XeTeX/LuaTeX (tectonic): Unicode nativo (·, —, ¿, ª, §)
\fi
\usepackage[spanish]{babel}
\usepackage{csquotes}

% ---- Page layout ----
\usepackage[top=2.5cm, bottom=2.5cm, left=2.5cm, right=2.5cm]{geometry}
\usepackage{setspace}
\onehalfspacing

% ---- Math ----
\usepackage{amsmath, amssymb, amsthm}
\usepackage{mathtools}
\usepackage{physics}
\usepackage{esint}  % \oiint

% ---- Graphics ----
\usepackage{graphicx}
\usepackage{tikz}
\usepackage{float}
\usepackage{caption}

% ---- Tables ----
\usepackage{array}
\usepackage{booktabs}
\usepackage{tabularx}
\usepackage{colortbl}

% ---- Colours ----
\usepackage{xcolor}
\definecolor{notebg}{HTML}{FFF3CD}
\definecolor{noteborder}{HTML}{FFC107}
\definecolor{boxred}{HTML}{F8D7DA}
\definecolor{boxredborder}{HTML}{F5C6CB}

% ---- Boxes ----
\usepackage{mdframed}
\usepackage{tcolorbox}
\tcbuselibrary{most}

\newtcolorbox{keybox}[1][]{
  colback=blue!5,
  colframe=blue!70!black,
  arc=4pt,
  boxrule=1pt,
  fonttitle=\bfseries,
  title={#1}
}

\newtcolorbox{warnbox}[1][]{
  colback=boxred,
  colframe=boxredborder,
  coltitle=black!75,
  arc=4pt,
  boxrule=1pt,
  fonttitle=\bfseries,
  title={#1}
}

\newtcolorbox{notebox}[1][]{
  colback=notebg,
  colframe=noteborder,
  coltitle=black!75,
  arc=4pt,
  boxrule=1pt,
  fonttitle=\bfseries,
  title={#1}
}

% ---- Hyperlinks & TOC ----
\usepackage[hidelinks]{hyperref}
\usepackage{bookmark}

% ---- Enumerate ----
\usepackage{enumitem}

% ---- Miscellaneous ----
\usepackage{icomma}
\usepackage{siunitx}
\usepackage{textcomp}
\usepackage[bottom]{footmisc}

% ---- Title ----
\title{\textbf{Clase N: <Tema>} \\[0.3em]
        \large{<subtítulo>}}
\author{Transcripto y expandido --- Curso Electromagnetismo (OpenFING)}
\date{}

\begin{document}

\maketitle
\thispagestyle{empty}
\newpage

\tableofcontents
\newpage

% (secciones acá)

\end{document}
```

> **`esint` sí va en este curso** (a diferencia de CDIV2017, que lo omite con
> nota explícita): `\oiint` aparece en cuanto se escribe la ley de Gauss en
> forma integral, que es prácticamente toda clase.

### 3.2 Convenciones de notación del curso

Fijarlas de entrada y no cambiarlas entre clases:

- Vectores con `\vec` (`\vec E`, `\vec D`, `\vec P`), versores con `\hat`
  (`\hat r`, `\hat n`, `\hat z`). El paquete `physics` está cargado: usar
  `\div`, `\curl`, `\grad`, `\laplacian`, `\pdv{}{}` en vez de escribirlos a
  mano.
- $\varepsilon_0$ con `\varepsilon_0` (no `\epsilon_0`), consistente en todo el
  curso.
- Punto de campo $\vec r$, punto fuente $\vec r\,'$, separación
  $\vec{\mathfrak{R}} = \vec r - \vec r\,'$ **sólo si el docente la nombra**;
  si él escribe $|\vec r - \vec r\,'|$ crudo, se respeta.
- Gauss integral con `\oiint` sobre superficie cerrada; Ampère con `\oint`.
- Polinomios de Legendre $P_\ell(\cos\theta)$, índice $\ell$ con `\ell`.

---

## 4. `metadata.yaml` — esquema canónico

El archivo DEBE parsear con un cargador YAML estándar y respetar tipos y enums
porque estos YAML alimentan tablas de una base de datos (ver `docs/SPECS.md`).

### 4.1 Plantilla

```yaml
title: Clase N                     # str, formato exacto "Clase N"
id: em-2024-2-NN                   # str, clave ÚNICA por clase (curso+año+semestre+NN con cero)

course: Electromagnetismo          # str
academic_year: 2024                # int
semester: 2                        # int

teacher: Nicolás Wschebor          # str

source:                            # lista de str (nombres de proveedor)
  - OpenFING

video:                             # lista con un tramo {start, end}
  - start: "00:00:00"              # str "HH:MM:SS" (entrecomillado)
    end: "01:26:18"                # str "HH:MM:SS" — fin real del video

stats:
  transcript_words: 9643           # int (= `words` de transcript.stats.json)
  summary_words: 2600              # int (conteo real de palabras de summary.md)
  diagrams_pending: 0              # int
  equations: 24                    # int

topics:                            # lista de str, orden de exposición
  - ...

bibliography:                      # lista de referencias
  - title: Reitz & Milford         # str
    chapter: "2"                   # str SIEMPRE entrecomillado (soporta rangos)
    verified: false                # bool

prerequisites:                     # lista de str
  - ...

next_topics:                       # lista de str
  - ...

status:                            # exactamente 4 claves, enum {done, pending, in-progress}
  transcript: done
  summary: done
  latex: done
  assets: pending

review:
  state: needs-review              # enum {needs-review, needs-work, reviewed}
  reviewer:                        # lista de str
    - Leandro
  date: 2026-09-06                 # date ISO YYYY-MM-DD (fecha de generación)

llm:
  model: claude-opus-5             # str, id del modelo que generó las notas

editorial_status: draft            # enum {draft, reviewing, verified, published}
```

### 4.2 Reglas de tipos y valores

- **Tiempos** (`video.start/end`): string `"HH:MM:SS"` entrecomillado. `end` es
  el timestamp real del último segmento de la transcripción, no un redondeo.
- **`bibliography[].chapter`**: SIEMPRE string entrecomillado, aun para un solo
  capítulo (`"2"`), para admitir rangos (`"2-3"`) sin cambiar de tipo. Ver §5
  sobre cuándo se puede poner un capítulo.
- **`date`**: formato ISO `YYYY-MM-DD` (parsea como fecha).
- **Enums**: usar exactamente uno de los valores listados; nunca listar todos
  los valores posibles como "menú".
- **Sin blank-lines dentro de bloques** de lista/mapa: una lista es contigua.
- **No usar** `duration` (redundante con `video.end`), ni `version`, ni
  `reviewed_by`, ni `status.reviewed`. El estado editorial va en
  `editorial_status`; el estado de revisión, en el bloque `review`.
- **`id` es único por clase** con la convención `em-2024-2-NN` (curso + año +
  semestre + número de clase con cero a la izquierda, p. ej. `em-2024-2-04`).
  No reutilizar el id de curso como id de clase.
- **`llm.model` es trazabilidad, no adorno**: es el modelo que efectivamente
  generó las notas. No tocarlo al agregar figuras a una clase ya escrita.

---

## 5. Datos fijos del curso

- `course: Electromagnetismo` · `academic_year: 2024` · `semester: 2`.
  > El semestre sale del `uploadDate` de OpenFING (**2024-08-06**): agosto es
  > segundo semestre. El docente dice "este semestre" sin numerarlo. Esta es la
  > fuente de verdad para todas las clases; si cambia, cambia acá **y** en
  > `scripts/extractor/cursos.js`.
- `teacher: Nicolás Wschebor` — se presenta en la Clase 1 ("me llamo Nicolás
  Yebor", transcripto fonéticamente). Es el mismo docente que Física III 2015,
  lo cual es casualidad y no un dato arrastrado.
- `source: [OpenFING]` · slug **`em-2024`** · URL por clase:
  `https://open.fing.edu.uy/courses/em-2024/N/` · **29 clases**.
- **Bibliografía: Reitz & Milford**, *Fundamentos de la Teoría
  Electromagnética*. El docente lo declara en la Clase 1 como "la opción de
  base" y dice que va "por la cuarta o quinta edición" — **sin precisar cuál**,
  así que la edición no se escribe y `verified: false` siempre. A diferencia de
  CDIV2017, acá **no** corresponde `bibliography: []`: el libro está dicho.
  `chapter` sólo cuando la clase lo mencione explícitamente; este docente no
  anuncia capítulos por clase, así que lo habitual es omitir la clave.
- **Posicionamiento del curso** (Clase 1, útil para `prerequisites`): curso
  intermedio, posterior a Física III y "el más avanzado que se da de manera
  regular". Retoma los mismos temas en el mismo orden pero con cálculo
  diferencial e integral vectorial y **EDP** — en particular la ecuación de
  Laplace, que en Física III no aparecía.
- **Calidad de la fuente:** los VTT traen entre 0 y 2 `solapamiento temporal`
  por clase (cues que se pisan unos pocos segundos). Son inocuos —no duplican
  texto— y quedan registrados en `transcript.stats.json`; no hace falta hacer
  nada con ellos.

---

## 6. Assets (diagramas y figuras)

Los diagramas se autoran en **formato vectorial**, nunca raster. Regla de oro:
**no fotos IRL ni capturas del video**; figuras limpias y reproducibles.

### 6.1 Formatos

- **Gráficas/curvas** (potencial vs. $r$, campo vs. $r$, perfiles) →
  **`pgfplots`** (código en el `.tex`).
- **Freeform** (superficies gaussianas, geometría de contorno, líneas de campo,
  cargas imagen, interfaces dieléctricas) → **`tikz` plano** con los estilos de
  `assets/tikzstyles.tex`, o **SVG** editable → **PDF** para
  `\includegraphics` si es muy irregular.
- **Circuitos** → `circuitikz` con `europeanresistors`. **Todavía no aplica**:
  el curso no llega a circuitos hasta ~Clase 15.
- **Nunca** PNG/JPG/WebP para line-art. El pipeline canónico
  (**tectonic/XeTeX**) sólo incluye PDF/PNG/JPG; SVG no es válido para
  `\includegraphics`.

### 6.2 Estructura de archivos

- **Global — `courses/ElecMag2024/Clases/assets/tikzstyles.tex`**: existe para
  **consistencia visual**. Es una **copia** del de `Fisica3-2015` (mismo
  dominio, misma paleta `figblue`/`figred`/`figamber`/`figgray`, mismos estilos
  `figvec`/`figpos`/`figneg`/`figlbl`), con dos cambios propios:
  1. el bloque `\ctikzset` va bajo `\ifdefined\ctikzset`, para que el `\input`
     no reviente en las clases que no cargan `circuitikz` (todas las de
     electrostática);
  2. el estilo de pgfplots se llama **`emfig`**, no `fisfig`.
  Copia y no symlink: cada curso autocontenido, y la paleta de Física III puede
  evolucionar aparte.
- **Local — `Clases/ClaseN/assets/`**: la mayoría de las figuras viven acá.
- **Naming**: `<claseN>-<slug>.{tex,svg,pdf}`, kebab-case.
- **Git**: versionar solo la fuente (TikZ `.tex`, SVG); raster fuera.

### 6.3 Preámbulo (cuando haya diagramas)

Agregar, después del bloque de `tcolorbox` de §3.1:

```latex
% ---- Diagramas (gráficas y esquemas) ----
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usetikzlibrary{babel}  % babel español activa `>`; esto evita romper las flechas `->`
\input{../assets/tikzstyles.tex}
```

> **`\usetikzlibrary{babel}` es obligatorio, no opcional.** `babel` español hace
> **activo** el carácter `>`, y sin esta línea *cualquier* flecha `->`/`->>` de
> TikZ revienta con `Argument of \language@active@arg> has an extra }`. El error
> es silencioso hasta que se compila.
>
> Cuando el curso llegue a circuitos (~Clase 15), agregar arriba de `pgfplots`:
> `\usepackage[europeanresistors]{circuitikz}`. El `tikzstyles.tex` ya lo
> contempla con su guarda `\ifdefined`.
>
> Compilar **desde el directorio de la clase** para que `\input{../assets/…}`
> resuelva. El builder canónico es **tectonic** vía `./build.sh N` (§7).

### 6.4 Metadata al agregar assets

- Al incorporar diagramas: bajar `stats.diagrams_pending` según los agregados y
  poner `status.assets: in-progress`; al completarlos, `done` con
  `diagrams_pending: 0`.
- Una clase sin diagramas se deja en `status.assets: pending` con
  `diagrams_pending: 0`.

### 6.5 Verificación visual (obligatoria antes de entregar)

**Nunca entregar un diagrama sin verlo compilado.** La metodología completa
—instalar tectonic, harness `preview.tex` con `setspace`, releer `notes.pdf`,
chequeo de `Overfull \hbox`, `\providecommand` para sub-dibujos repetidos,
patrones de composición de paneles, catálogo de colisiones de rótulos— está
desarrollada en `courses/Fisica3-2015/CLAUDE.md` §6.5 y **es agnóstica de
curso**: aplica tal cual, no hace falta reescribirla acá. Lo mínimo, para no
tener que ir a buscarlo:

1. Harness `preview.tex` en el scratchpad con el bloque §6.3 completo (¡incluido
   `\usetikzlibrary{babel}`!) y `setspace`+`\onehalfspacing`; compilar **todas
   las figuras de una vez** y leer el PDF en una sola lectura.
2. **El preview no alcanza**: tras insertar, compilar la clase y **releer
   `notes.pdf`**. El documento va a interlineado 1.5 y eso estira los `\\`
   dentro de los nodos, creando colisiones que el harness no muestra.
3. Chequear `Overfull \hbox` (§7.3.11): el harness es apaisado y el documento
   tiene 16 cm de ancho de texto.

**Documentar acá los casos propios de este curso** a medida que se autoren las
figuras. Los casos de estudio de §6.5.2–6.5.6 de Física III
(`clase1-coulomb-vectorial`, `clase26-angulo-critico`, …) son de aquel corpus;
no heredarlos como si fueran de éste.

#### 6.5.2 Casos propios de este curso (Clases 4–8, 2026-09-06)

Las 21 figuras de ese lote dejaron cinco cosas que se pagaron una vez y no hay
que volver a pagar:

1. **Un color suelto en un `\tikzset` pinta también el relleno.** En
   `clase7-recurrencia-paridad`, un estilo de nodo terminado en `figgray`
   —después de `fill=figgray!12`— dejó todas las cajas rellenas de gris sólido
   con el texto invisible. El color suelto fija `draw`, `fill` **y** `text` a la
   vez. Va **`text=figgray`**, nunca el nombre pelado.
2. **`axis lines=middle` redefine `every axis x label`**, así que un
   `xlabel style` escrito *antes* no tiene efecto: el rótulo queda centrado
   **sobre la propia línea del eje** y un `=` se lee como `≠`. El estilo tiene
   que ir **después** de `axis lines=middle` en la lista de opciones. Pasó en
   `clase7-polinomios-legendre`, y el síntoma —«$u \neq \cos\theta$»— es
   confuso porque parece un error de contenido.
3. **Bajar el `scale` no arregla un Overfull cuyo culpable es un pie de figura.**
   El texto de los nodos **no escala**. En `clase6-dominio-theta` un pie de dos
   líneas desbordaba 7 pt y `scale=0.92` no movió el número ni un ápice; se
   arregló partiéndolo en cuatro líneas cortas. Corolario práctico: si el valor
   del Overfull **no cambia** al escalar, el culpable es texto, no geometría.
4. **Aislar la figura para ubicar un Overfull, pero con `grep -c`.** Un
   `grep … | head -1` devuelve el estado de `head`, así que el `|| echo OK` de
   respaldo nunca dispara y el test parece pasar cuando en realidad no midió
   nada. Usar `grep -c Overfull` y comparar el número.
5. **Rótulos de dos bloques a la misma altura se leen como uno solo.** En
   `clase4-dipolo-campo-externo` el rótulo de carga (`+Q`) y el de fuerza
   (`Q\vec E`) quedaron en la misma línea y el render los pegó. La regla que
   funcionó: **el rótulo de la carga va arriba/abajo del punto y el de la fuerza
   pegado a su propia flecha**, nunca ambos a la altura del eje. Misma familia
   que §6.5.3 de Física III.

En geometría, los dos patrones que más sirvieron en este corpus:

- **Dos condiciones de borde se anotan simétricas y a media altura**, con
  `fill=white`, no apiladas arriba: apiladas se comen el arco de $\theta$ y el
  rótulo de $r$ (`clase7-esfera-campo`).
- **Cuando dos vectores son casi colineales por construcción** —$\vec r$ y
  $\vec r-\vec r\,'$ cuando $r\gg a$— sus rótulos se separan
  **perpendicularmente**, uno debajo de la flecha y otro encima de la punteada,
  con una línea de llamada corta (`clase4-distribucion-localizada`). Mover los
  puntos no alcanza: la colinealidad *es* el contenido de la figura.

#### 6.5.1 Qué figuras hacer (y cuántas)

- **El número lo fija `stats.diagrams_pending`** del `metadata.yaml`, no el
  criterio del momento.
- **Anclar cada figura a un momento en que el docente dibuja.** Buscar en
  `transcript.timed.txt`:
  `grep -inE 'dibuj|pizarr|hagamos|vamos a hacer|acá tengo|acá pongo|acá ponemos|esta figura'`.
  Si él lo dibujó, el dibujo aportaba; si no lo dibujó, la figura probablemente
  sea decorativa. Esto además protege la regla de §1.5 (*no inventar datos*).
- **Priorizar por cobertura de secciones**: las que dejan sin figura a las
  secciones más áridas, no varias del mismo tema.
- En este curso el pizarrón es **mucho más geométrico que en Física III**: casi
  toda figura es un problema de contorno (una esfera en campo uniforme, un plano
  conductor con su carga imagen, una interfaz entre dos dieléctricos con la
  gaussiana chatita a caballo). Esas geometrías se repiten entre clases: son las
  primeras candidatas a promover a `assets/` global si aparecen tres veces.

---

## 7. Compilación (tectonic) y edición dirigida por PDF

**tectonic es el compilador canónico del curso** (mismo binario que los otros
dos cursos del repo).

### 7.1 `build.sh`

- Binario durable en `~/.local/bin/tectonic` (instalar si falta con:
  `curl --proto '=https' --tlsv1.2 -fsSL https://drop-sh.fullyjustified.net | sh`).
- **`courses/ElecMag2024/build.sh`**: `./build.sh` compila todas las `ClaseN`
  existentes; `./build.sh 4 5` sólo esas. Deja el PDF **in situ** en
  `Clases/ClaseN/notes.pdf` (tectonic no deja `.aux/.log`). Compila desde cada
  `Clases/ClaseN/` para que `\input{../assets/…}` resuelva.
- **`notes.pdf` no se versiona**: es artefacto de `build.sh` y está en
  `.gitignore` a nivel repo.

### 7.2 Loop de edición dirigida por PDF

Para la revisión fina: compilo `ClaseN` → **leo `notes.pdf`** (se renderiza como
imagen) → el usuario señala qué corregir → edito el `.tex`/asset/`metadata`
exacto → recompilo → releo para confirmar. Los colores están centralizados en
`assets/tikzstyles.tex` + los de caja en cada preámbulo; un retoque global se
propaga. El `metadata.yaml` se actualiza en el mismo loop (`diagrams_pending`,
`status.assets`, `equations`, `review.state`).

### 7.3 Gotchas XeTeX (genéricos de LaTeX/tectonic; ya pagados en los otros cursos)

1. **Encoding**: guarda `iftex`+`fontspec` (§3.1). `inputenc utf8` suelto rompe
   `·`/`—`/`¿`/`¡`/`§`/`ª` bajo XeTeX (los acentos sí sobreviven).
2. **Títulos de caja**: definir con `title={#1}` (§3.1). Un `=` en el título
   rompe sin la llave.
3. **`>` de babel**: `\usetikzlibrary{babel}` en toda clase con `tikz`/`pgfplots`
   y flechas `->` (bloque §6.3).
4. tectonic **se detiene en el primer error** (a diferencia del `nonstopmode` de
   pdflatex, que produce PDF igual enmascarando bugs). Si una clase falla, es un
   bug real a arreglar, no ruido.
5. **`\foreach` no funciona dentro de un `axis` de pgfplots.** Falla en el
   `\end{axis}` con `Undefined control sequence` en `\UseTextAccent`.
   Desenrollarlo a mano. Fuera del `axis`, en `tikzpicture` plano, anda perfecto.
6. **`\\` dentro de un `\node` exige `align=`.** Sin `align=left|center|right`
   el salto de línea falla con `Something's wrong--perhaps a missing \item`.
7. **En `pgfplots`, un `\addplot` sin `\addlegendentry` se come la entrada
   siguiente.** Curvas auxiliares van con `forget plot`.
8. **Leyenda debajo del eje:** `legend style={at={(0.5,-0.45)}, anchor=north}`;
   con `-0.32` o menos choca con el `xlabel`.
9. **Insertar `\input` por número de línea es cómodo pero ciego.** Verificar con
   `grep -n -B2 "input{assets"` que ninguno cayó dentro de un `keybox`/`notebox`
   ni partió una oración al medio.
10. **Nunca usar `\t` como variable de `\foreach`** —ni `\c`, `\d`, `\b`, `\v`,
    `\u`, `\r`, `\H`—: son macros de **acento** de LaTeX y dan el mismo síntoma
    que (5). Nombres seguros: `\tcol`, `\ang`, `\xx`.
11. **El chequeo de Overfull también delata bugs del cuerpo, no sólo figuras**
    (p. ej. una `tabularx` con la última columna declarada `l` en vez de `X`).
    Ante un Overfull, mirar el número de línea antes de suponer que es la
    figura. Chequeo:
    ```bash
    mkdir -p /tmp/chk   # obligatorio: sin esto, --outdir falla y el grep da 0 igual
    ~/.local/bin/tectonic -X compile notes.tex --outdir /tmp/chk 2>&1 | grep -c Overfull
    ```
    Debe dar `0`. **El `mkdir -p` no es opcional:** si el `--outdir` no existe,
    tectonic aborta sin compilar y el `grep -c` devuelve `0` igual — un falso
    negativo. Ante un `0`, confirmar que la salida trae los `note:` de
    compilación.
