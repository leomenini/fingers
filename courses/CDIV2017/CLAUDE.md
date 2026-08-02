# CLAUDE.md — Curso Cálculo 1 (OpenFING)

Guía para generar las notas de cada clase a partir de su transcripción. Cada
carpeta `Clases/ClaseN/` documenta una clase del curso y debe contener **cuatro**
archivos:

| Archivo | Origen | Descripción |
|---------|--------|-------------|
| `Transcription_raw.txt` | dado | Transcripción cruda exportada de OpenFING (no editar). |
| `summary.md` | generado | Resumen estructurado en Markdown. |
| `notes.tex` | generado | El mismo resumen traducido a LaTeX. |
| `metadata.yaml` | generado | Metadatos de la clase (esquema estricto, ver abajo). |

> El nombre del archivo de transcripción es **`Transcription_raw.txt`**, igual
> que en el resto del repo (ver `courses/Fisica3-2015/CLAUDE.md` y
> `docs/log.md` §2, donde se unificó para todos los cursos).

> **Layout**: las clases viven en `courses/CDIV2017/Clases/ClaseN/`; el
> `assets/` global (compartido, para consistencia visual) en
> `courses/CDIV2017/Clases/assets/`, y se crea recién cuando la primera clase
> tenga figuras. `build.sh` y `CLAUDE.md` quedan a nivel `courses/CDIV2017/`.

> **Este curso es nuevo en el repo** (el otro curso existente es
> `courses/Fisica3-2015/`, Física III/OpenFING/2015). La metodología general
> (estructura de 4 archivos, esquema de `metadata.yaml`, pipeline de
> compilación con tectonic) es la misma en todo el repo — ver
> `docs/ARCHITECTURE.md` y `docs/SPECS.md` para el modelo de datos a nivel de
> proyecto —, pero los **datos concretos del curso** (docente, id, URL,
> bibliografía) son propios de Cálculo 1 y no deben mezclarse con los de
> Física III.

---

## 1. Flujo de trabajo para una clase nueva

1. Leer `Clases/ClaseN/Transcription_raw.txt`. La cabecera trae `Palabras : NNNN` →
   ese número es `stats.transcript_words`.
2. Escribir `summary.md` siguiendo §2.
3. Traducir a `notes.tex` siguiendo §3 (preámbulo **verbatim**, ver §3.1).
4. Escribir `metadata.yaml` siguiendo §4 (esquema **exacto**).
5. No inventar datos: si un campo no se puede derivar de la transcripción,
   dejarlo en el valor por defecto documentado (p. ej. `bibliography: []`
   hasta cotejo manual — ver §5), no omitirlo ni completarlo con un dato
   plausible pero no verificado.

---

## 2. `summary.md` — estilo

Estructura estándar (mientras no haya clases previas de este curso que sirvan
de referencia canónica, seguir esta plantilla al pie de la letra; una vez que
haya 2–3 clases completas, usarlas como referencia de calibración de estilo
entre sí):

- **Título H1**: `# Resumen Clase N — <Tema 1, Tema 2, …>`.
- **Índice** con enlaces internos (`## Índice` → lista numerada a anclas
  `#n-titulo`), con subitems para las subsecciones.
- **Secciones `##` numeradas** siguiendo el orden de exposición de la clase;
  subsecciones `###`.
- **Ecuaciones** en LaTeX con `$...$` (inline) y `$$...$$` (display). Encerrar
  los resultados clave en `\boxed{...}`.
- **Tablas Markdown** para comparaciones (casos, criterios, tipos de límite,
  etc.).
- **Citas `>`** para notas, sutilezas, límites de validez y advertencias.
- **Negritas** para términos técnicos la primera vez que aparecen.
- Cerrar, si aplica, con un puntero a la clase siguiente (en cursiva).

El resumen debe reconstruir los razonamientos, no solo listar resultados:
incluir hipótesis, convenciones y **el porqué** de cada paso — en un curso de
cálculo, esto significa las demostraciones y sus pasos intermedios, no solo el
enunciado del teorema.

**Nivel de detalle (importante):** expandir el contenido de cada header, no
resumir al mínimo. Para cada tema, desarrollar el razonamiento completo de la
clase: motivación, hipótesis, **pasos intermedios de las demostraciones** (no
solo el resultado final encajonado), interpretación y sutilezas/límites de
validez. Subdividir en subsecciones (`###`) cuando un tema tenga varias partes.
Target orientativo heredado de la experiencia con Física III: 2000–3200
palabras (`summary_words`), sin forzar el número — depende de la densidad de
la clase (una clase con mucha organización de curso al inicio, como suele pasar
en una Clase 1, puede quedar más corta de forma legítima).

---

## 3. `notes.tex` — estilo

- El **preámbulo es idéntico en todas las clases** de este curso: copiarlo
  verbatim de §3.1 (abajo). No agregar ni quitar paquetes sin motivo. Las
  clases **con** diagramas le suman encima el bloque de §6.3; mientras el
  curso no tenga figuras (todo el lote Clase1–5 actual), **no** incluir ese
  bloque.
- **Encoding compatible con tectonic (XeTeX)**: el bloque de encoding va con
  guarda `iftex` (pdflatex → `inputenc`+`fontenc T1`; XeTeX → `fontspec`). No
  usar `\usepackage[utf8]{inputenc}` suelto: bajo XeTeX rompe símbolos
  (`·`, `—`, `¿`, `¡`, `§`, `ª`). Ya viene resuelto en el preámbulo de §3.1.
- Cajas de color (definidas en el preámbulo), usarlas consistentemente:
  - `keybox` (azul) — resultados/definiciones/teoremas clave.
  - `notebox` (amarillo) — notas, aclaraciones, límites de validez.
  - `warnbox` (rojo) — advertencias, errores conceptuales frecuentes,
    limitaciones (p. ej. condiciones que hay que verificar antes de aplicar
    un teorema).
  - **Definirlas con `title={#1}`** (llave obligatoria, ya está así en §3.1):
    sin la llave, un `=` en el título (p. ej. `[Discontinuidad en $x = 0$]`)
    rompe el parser `key=value` de tcolorbox con *Missing $ inserted*.
- Título de dos líneas: `\textbf{Clase N: <Tema>} \\ \large{<subtítulo>}`.
- Autor fijo: `Transcripto y expandido --- Curso Cálculo 1 (OpenFING)`.
- Estructura `\section`/`\subsection` espejando el `summary.md`.
- `\tableofcontents` tras `\maketitle`.
- Mismos `\boxed{...}` y tablas `booktabs` que el resumen.

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
\author{Transcripto y expandido --- Curso Cálculo 1 (OpenFING)}
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

> Nota sobre `\usepackage{esint}` (símbolo `\oiint`, integral de superficie
> cerrada): el preámbulo de Física III lo trae porque electromagnetismo lo usa
> constantemente. En Cálculo 1 (una variable) no aplica — se omite. Si más
> adelante el curso llega a integrales múltiples/de superficie, agregarlo ahí,
> no antes.

---

## 4. `metadata.yaml` — esquema canónico

El archivo DEBE parsear con un cargador YAML estándar y respetar tipos y
enums porque estos YAML alimentan tablas de una base de datos (ver
`docs/SPECS.md`).

### 4.1 Plantilla

```yaml
title: Clase N                     # str, formato exacto "Clase N"
id: civ-2017-1-NN                  # str, clave ÚNICA por clase (course + NN con cero)

course: Cálculo 1                  # str
academic_year: 2017                # int
semester: 1                        # int

teacher: Alexandre Miquel          # str

source:                            # lista de str (nombres de proveedor)
  - OpenFING

video:                             # lista con un tramo {start, end}
  - start: "00:00:00"              # str "HH:MM:SS" (entrecomillado)
    end: "01:26:18"                # str "HH:MM:SS" — fin real del video

stats:
  transcript_words: 9699           # int (= "Palabras" de la cabecera)
  summary_words: 2100              # int (conteo real de palabras de summary.md)
  diagrams_pending: 0              # int
  equations: 24                    # int

topics:                            # lista de str, orden de exposición
  - ...

bibliography: []                  # lista de referencias; [] hasta cotejo manual (ver §5)

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
  date: 2026-07-30                 # date ISO YYYY-MM-DD (fecha de generación)

llm:
  model: claude-sonnet-5            # str, id del modelo que generó las notas

editorial_status: draft            # enum {draft, reviewing, verified, published}
```

### 4.2 Reglas de tipos y valores

- **Tiempos** (`video.start/end`): string `"HH:MM:SS"` entrecomillado. `end` es
  el timestamp real del último segmento de la transcripción, no un redondeo.
- **`bibliography`**: lista de objetos `{title, chapter, verified}` cuando haya
  una referencia confirmada; `chapter` SIEMPRE string entrecomillado (soporta
  rangos, p. ej. `"3-4"`). Mientras no se coteje bibliografía real del curso,
  dejar `bibliography: []` — no inventar libro ni capítulo (regla de §1.5).
- **`date`**: formato ISO `YYYY-MM-DD` (parsea como fecha).
- **Enums**: usar exactamente uno de los valores listados; nunca listar todos
  los valores posibles como "menú".
- **Sin blank-lines dentro de bloques** de lista/mapa: una lista es contigua.
- **No usar** `duration` (redundante con `video.end`), ni `version`, ni
  `reviewed_by`, ni `status.reviewed`. El estado editorial va en
  `editorial_status`; el estado de revisión, en el bloque `review`.
- **`id` es único por clase** con la convención `civ-2017-1-NN` (curso +
  número de clase con cero a la izquierda, p. ej. `civ-2017-1-01`). No
  reutilizar el id de curso como id de clase.

---

## 5. Datos fijos del curso

- `course: Cálculo 1` (curso "CIV" en OpenFING — Cálculo Diferencial e Integral
  en una Variable) · `academic_year: 2017` · `semester: 1`.
  > Ninguno de estos tres datos aparece explícito y verificado dentro de las
  > transcripciones (no hay fecha ni "año lectivo" mencionados); se infieren
  > del nombre de carpeta `CDIV2017` y de que Cálculo 1 es materia de primer
  > semestre. Si en algún momento se confirma un dato distinto, corregir acá
  > primero (es la fuente de verdad para todas las clases).
- `teacher: Alexandre Miquel` — dicta el **teórico de la tarde** (el que estas
  transcripciones registran). El coordinador del curso y responsable del
  **teórico de la mañana** es **Marcos Barrios** — no confundir ambos roles si
  aparece una transcripción de la mañana en el futuro.
- `source: [OpenFING]` · URL por clase: `https://open.fing.edu.uy/courses/civ/N/`.
- **Bibliografía**: no hay libro de texto ni capítulo mencionados en las
  transcripciones de Clase1–5 (el docente habla de "apuntes" propios del
  curso, sin título editorial). Dejar `bibliography: []` hasta que se
  identifique y coteje el material real (apuntes del curso o libro de
  referencia). No completar con un libro de cálculo genérico no verificado.
- Esta es la **primera edición nueva del programa** ("Cálculo 1 nuevo"): el
  propio docente explica en Clase 1 que se reorganizó el temario respecto a
  ediciones anteriores (números complejos, sucesiones/series e integrales
  impropias pasan a Cálculo 2; el eje nuevo de Cálculo 1 son las integrales).
  Tenerlo presente al escribir `prerequisites`/`next_topics`: reflejan el
  temario **de esta edición**, no el de ediciones previas del curso.

---

## 6. Assets (diagramas y figuras)

**Este lote (Clase1–5) no incluye diagramas** — son clases de organización de
curso y fundamentos (conjuntos, funciones, números reales); `diagrams_pending`
se deja en `0` salvo que al leer la transcripción aparezca un momento
explícito de pizarrón que amerite una figura (gráfica de una función, recta
numérica, diagrama de conjuntos). Si eso ocurre, seguir la metodología general
de abajo — es agnóstica de curso y ya está validada en
`courses/Fisica3-2015/`.

### 6.1 Formatos

- **Gráficas de funciones/curvas** → **`pgfplots`** (código en el `.tex`).
- **Freeform** (diagramas de Venn, rectas numéricas, esquemas) → **SVG** como
  fuente editable → exportar **PDF** para `\includegraphics`, o `tikz` plano
  si es simple.
- **Nunca** PNG/JPG/WebP para line-art. El pipeline canónico (**tectonic/XeTeX**)
  sólo incluye PDF/PNG/JPG; SVG y WebP no son válidos para `\includegraphics`.

### 6.2 Estructura de archivos

- **Global — `courses/CDIV2017/Clases/assets/`**: se crea on demand, cuando
  la primera clase del curso tenga una figura. Contendría un `tikzstyles.tex`
  propio de este curso (no reusar el de Fisica3-2015: paletas y convenciones
  de signo son de otro contexto).
- **Local — `Clases/ClaseN/assets/`**: la mayoría de las figuras viven acá,
  específicas de la clase.
- **Naming**: `<claseN>-<slug>.{tex,svg,pdf}`, kebab-case.
- **Git**: versionar solo la fuente (TikZ `.tex`, SVG); `.gitignore` para
  raster en `assets/`.

### 6.3 Preámbulo (cuando haya diagramas)

Agregar, después del bloque de `tcolorbox` de §3.1:

```latex
% ---- Diagramas (gráficas) ----
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usetikzlibrary{babel}  % babel español activa `>`; esto evita romper las flechas `->`
\input{../assets/tikzstyles.tex}
```

> **`\usetikzlibrary{babel}` es obligatorio, no opcional.** `babel` español
> hace **activo** el carácter `>`, y sin esta línea *cualquier* flecha
> `->`/`->>` de TikZ revienta con
> `Argument of \language@active@arg> has an extra }`. El error es silencioso
> hasta que se compila.
>
> Compilar **desde el directorio de la clase** para que `\input{../assets/…}`
> resuelva. El builder canónico es **tectonic** vía `./build.sh N` (ver §7).

### 6.4 Metadata al agregar assets

- Al incorporar diagramas a una clase: bajar `stats.diagrams_pending` según
  los agregados y poner `status.assets: in-progress`; al completarlos, `done`.
- Una clase sin diagramas se deja en `status.assets: pending` con
  `diagrams_pending: 0` mientras no haga falta ninguna figura, o con la
  estimación real si se detectan momentos de pizarrón pendientes de dibujar.

### 6.5 Verificación visual (cuando se produzcan figuras)

La metodología completa (instalar tectonic, harness `preview.tex`, releer
`notes.pdf` con `setspace` activo, chequeo de `Overfull \hbox`,
`\providecommand` para sub-dibujos repetidos, patrones de composición de
paneles, catálogo de colisiones de rótulos frecuentes) está desarrollada en
detalle en `courses/Fisica3-2015/CLAUDE.md` §6.5 — es agnóstica de curso y no hace
falta reescribirla acá. Los casos de estudio citados ahí (`clase1-coulomb-
vectorial`, `clase26-angulo-critico`, etc.) son de Física III; **documentar
acá los casos propios de CDIV2017** a medida que se autoren las primeras
figuras de este curso, en vez de heredar ejemplos que no aplican.

---

## 7. Compilación (tectonic) y edición dirigida por PDF

**tectonic es el compilador canónico del curso** (mismo binario que
Fisica3-2015).

### 7.1 `build.sh`

- Binario durable en `~/.local/bin/tectonic` (instalar si falta con:
  `curl --proto '=https' --tlsv1.2 -fsSL https://drop-sh.fullyjustified.net | sh`).
- **`courses/CDIV2017/build.sh`**: `./build.sh` compila todas las `ClaseN`
  existentes; `./build.sh 1 3` sólo esas. Deja el PDF **in situ** en
  `Clases/ClaseN/notes.pdf` (tectonic no deja `.aux/.log`). Compila desde cada
  `Clases/ClaseN/` para que `\input{../assets/…}` resuelva cuando haya assets.

### 7.2 Loop de edición dirigida por PDF

Para la fase de revisión fina: compilo `ClaseN` → **leo `notes.pdf`** (se
renderiza como imagen) → el usuario señala qué corregir → edito el
`.tex`/`metadata` exacto → recompilo → releo para confirmar. El
`metadata.yaml` se actualiza en el mismo loop (`equations`, `review.state`,
etc.).

### 7.3 Gotchas XeTeX (genéricos de LaTeX/tectonic, no de curso)

1. **Encoding**: guarda `iftex`+`fontspec` (§3.1). `inputenc utf8` suelto
   rompe `·`/`—`/`¿`/`¡`/`§`/`ª` bajo XeTeX (los acentos sí sobreviven).
2. **Títulos de caja**: definir con `title={#1}` (§3.1). Un `=` en el título
   rompe sin la llave.
3. **`>` de babel**: `\usetikzlibrary{babel}` en toda clase con `tikz`/`pgfplots`
   y flechas `->` (bloque §6.3).
4. tectonic **se detiene en el primer error** (a diferencia del `nonstopmode`
   de pdflatex, que produce PDF igual enmascarando bugs). Si una clase falla,
   es un bug real a arreglar, no ruido.
5. **`\foreach` no funciona dentro de un `axis` de pgfplots.** Falla en el
   `\end{axis}` con `Undefined control sequence` en `\UseTextAccent`.
   Desenrollarlo a mano. Fuera del `axis`, en `tikzpicture` plano, `\foreach`
   anda perfecto.
6. **`\\` dentro de un `\node` exige `align=`.** Sin `align=left|center|right`
   el salto de línea falla con `Something's wrong--perhaps a missing \item`.
7. **En `pgfplots`, un `\addplot` sin `\addlegendentry` se come la entrada
   siguiente.** Curvas auxiliares van con `forget plot`.
8. **Leyenda debajo del eje:** `legend style={at={(0.5,-0.45)}, anchor=north}`;
   con `-0.32` o menos choca con el `xlabel`.
9. **Insertar `\input` por número de línea es cómodo pero ciego.** Verificar
   con `grep -n -B2 "input{assets"` que ninguno cayó dentro de un
   `keybox`/`notebox` ni partió una oración al medio.
10. **Nunca usar `\t` como variable de `\foreach`** —ni `\c`, `\d`, `\b`, `\v`,
    `\u`, `\r`, `\H`—: son macros de **acento** de LaTeX. Nombres seguros:
    `\tcol`, `\ang`, `\xx`.
11. **El chequeo de Overfull también delata bugs del cuerpo, no sólo
    figuras** (p. ej. una `tabularx` con la última columna declarada `l` en
    vez de `X`). Ante un Overfull, mirar el número de línea antes de suponer
    que es la figura. Chequeo:
    ```bash
    mkdir -p /tmp/chk   # obligatorio: sin esto, --outdir falla y el grep da 0 igual
    ~/.local/bin/tectonic -X compile notes.tex --outdir /tmp/chk 2>&1 | grep -c Overfull
    ```
    Debe dar `0`.
