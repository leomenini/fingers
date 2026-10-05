# CLAUDE.md — Curso Métodos Numéricos (OpenFING, Teórico 2023)

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

> **Layout**: las clases viven en `courses/MetNum2023/Clases/ClaseN/`; el
> `assets/` global (compartido, para consistencia visual) en
> `courses/MetNum2023/Clases/assets/`, y se crea recién cuando la primera
> clase tenga figuras. `build.sh` y `CLAUDE.md` quedan a nivel
> `courses/MetNum2023/`.

> **Este curso es nuevo en el repo** (los otros son `courses/Fisica3-2015/`,
> `courses/CDIV2017/` y `courses/ElecMag2024/`). La metodología general
> (estructura de archivos, esquema de `metadata.yaml`, pipeline de
> compilación con tectonic) es la misma en todo el repo — ver
> `docs/ARCHITECTURE.md` y `docs/SPECS.md` para el modelo de datos a nivel de
> proyecto —, pero los **datos concretos del curso** (docente, id,
> bibliografía) son propios de Métodos Numéricos y no deben mezclarse con
> los de los demás.

> **Slug de OpenFING**: `metn-2023` (a diferencia de `civ`/`f3`/`em-2024`,
> este slug ya trae el año). El nombre de directorio `MetNum2023` es
> independiente del slug (ADR-0003) — no asumir que uno se deriva del otro.

> **No es un caso de ASR.** A diferencia de las Clase9/10 de
> `courses/ElecMag2024/` (ver su `CLAUDE.md` §0), OpenFING publica
> normalmente la transcripción VTT de este curso. Se extrae con
> `npm run fetch -- MetNum2023 N --write`. Si alguna clase apareciera como
> `SIN FUENTE`, tratarla igual que el caso ElecMag2024: no es bug del
> extractor, se documenta acá y se decide aparte si vale la pena ASR sólo
> para esa clase puntual.

---

## 1. Flujo de trabajo para una clase nueva

1. Leer `Clases/ClaseN/transcript.txt` (si falta, `npm run fetch -- MetNum2023
   N --write`). **`stats.transcript_words` sale de `transcript.stats.json` →
   `words`**, que ya viene escrito por el extractor. No copiar ningún conteo
   de una cabecera.
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
  los resultados clave (teoremas, cotas de error, algoritmos) en
  `\boxed{...}`.
- **Tablas Markdown** para comparaciones (métodos, cotas, complejidad
  algorítmica).
- **Citas `>`** para notas, sutilezas, hipótesis necesarias (p. ej.
  condiciones de existencia/unicidad de la factorización LU) y advertencias.
- **Negritas** para términos técnicos la primera vez que aparecen.
- Cerrar, si aplica, con un puntero a la clase siguiente (en cursiva).

El resumen debe reconstruir los razonamientos, no solo listar resultados:
incluir hipótesis, convenciones y **el porqué** de cada paso. En Métodos
Numéricos esto significa, en particular:

- **Los algoritmos son contenido, no decoración.** Si la clase describe un
  procedimiento (eliminación gaussiana, factorización LU, evaluación de un
  polinomio interpolante), el resumen reconstruye el algoritmo paso a paso,
  no solo lo nombra.
- **Las cotas de error y sus hipótesis van completas.** No enunciar "el error
  está acotado" sin la fórmula y las condiciones bajo las que vale (grado del
  polinomio, regularidad de la función, nodos usados).
- **No inventar fórmulas ni notación que la clase no usó.** Ver §5 sobre el
  riesgo específico de este curso (análogo al de Cálculo, sección 5 del
  `CLAUDE.md` raíz): el habla no trae símbolos, y la conversión de prosa a
  notación matemática es una decisión del transcriptor, no del docente.

**Nivel de detalle:** expandir el contenido de cada header, no resumir al
mínimo. Target orientativo heredado de los otros cursos del repo:
2000–3200 palabras (`summary_words`), sin forzar el número — depende de la
densidad de la clase. No recortar algoritmos, ejemplos ni desarrollos matriciales
para entrar en ese rango; las ecuaciones también son contenido.


### 2.1 Algoritmos y pseudocódigo explicados

Cada algoritmo expuesto debe incluir entradas, salida e hipótesis; explicar la
inicialización, el recorrido de índices, las actualizaciones y la terminación.
Acompañar el pseudocódigo con prosa que explique qué hace cada paso, por qué y
cómo se relaciona con las ecuaciones. Un bloque de código sin explicación no
cumple el requisito. Incluir costo, redondeo, pivoteo y criterios de parada
cuando la clase los desarrolle; no añadir demostraciones ni análisis externos.
Las convenciones editoriales necesarias (índices o nombres) se declaran; si el
audio no permite determinar una operación, señalar el límite en vez de inventarla.

### 2.2 Desarrollo matricial obligatorio

Las matrices desplegadas son contenido matemático, aunque no se almacenen como
figuras. Reconstruir sistemas, productos, bloques, patrones de ceros, pivotes y
estados intermedios cuando sostengan el razonamiento del docente. Una identidad
compacta como $A=LU$ no reemplaza la construcción de los factores ni las
operaciones entre filas que la clase haya explicado. Mostrar qué cambia de un
paso al siguiente y conservar dimensiones e índices coherentes.

Usar `pmatrix`, `bmatrix`, `array` y ecuaciones alineadas para el álgebra; TikZ
cuando sea necesario señalar bloques, bandas o pivotes. El contenido matemático
va también en `summary.md`; las figuras gráficas viven en LaTeX. Para desarrollos
anchos, dividir por pasos o bloques antes que reducir la letra hasta hacerla
ilegible. No confundir una matriz triangular con la exigencia de entradas no
nulas en toda la región triangular: señalar sólo los ceros garantizados.

Si faltan valores del pizarrón, conservar la estructura que el texto determine
y declarar los datos irrecuperables. Si el docente anuncia que no hará una cuenta
o demostración, registrar esa omisión sin resolverla por cuenta propia.

### 2.3 Control de cobertura por clase

Antes de redactar, leer ambas transcripciones completas y preparar un inventario
de temas, algoritmos, desarrollos matriciales y momentos gráficos con timestamps.
El inventario de trabajo puede vivir fuera del repo. Cada entrada debe aparecer
en las notas o quedar acompañada de una limitación explícita de la fuente.
No usar las notas de una corrida anterior como fuente ni como lista de cobertura.
La cantidad de figuras la determina la clase, no una cuota heredada del YAML.
Al terminar, actualizar `diagrams_pending` según lo que realmente quede pendiente.

---

## 3. `notes.tex` — estilo

- El **preámbulo base es idéntico en todas las clases** de este curso:
  copiarlo verbatim de §3.1. No agregar ni quitar paquetes sin motivo.
- **Encoding compatible con tectonic (XeTeX)**: guarda `iftex` (pdflatex →
  `inputenc`+`fontenc T1`; XeTeX → `fontspec`). No usar
  `\usepackage[utf8]{inputenc}` suelto: bajo XeTeX rompe símbolos (`·`, `—`,
  `¿`, `¡`, `§`, `ª`). Ya viene resuelto en el preámbulo de §3.1.
- Cajas de color (definidas en el preámbulo), usarlas consistentemente:
  - `keybox` (azul) — resultados/definiciones/teoremas clave (p. ej. "toda
    matriz definida positiva admite factorización LU sin pivoteo").
  - `notebox` (amarillo) — notas, aclaraciones, límites de validez.
  - `warnbox` (rojo) — advertencias, errores conceptuales frecuentes (p. ej.
    confundir norma matricial inducida con norma de Frobenius, o mal
    condicionamiento vs. inestabilidad numérica).
  - **Definirlas con `title={#1}`** (llave obligatoria, ya está así en §3.1):
    sin la llave, un `=` en el título rompe el parser `key=value` de
    tcolorbox con *Missing $ inserted*.
- Título de dos líneas: `\textbf{Clase N: <Tema>} \\ \large{<subtítulo>}`.
- Autor fijo: `Transcripto y expandido --- Curso Métodos Numéricos (OpenFING)`.
- Estructura `\section`/`\subsection` espejando el `summary.md`.
- `\tableofcontents` tras `\maketitle`.
- Mismos `\boxed{...}` y tablas `booktabs` que el resumen.
- **Pseudocódigo**: cuando una clase describa un algoritmo explícito
  (factorización LU, sustitución hacia adelante/atrás, evaluación de
  Newton/Lagrange), usar el bloque `algorithm2e` de §3.2 — **no**
  cargarlo en clases que no lo necesitan (mismo criterio que el bloque de
  diagramas §6.3: se agrega recién cuando la clase lo usa por primera vez).

### 3.1 Preámbulo canónico (verbatim, sin bloques opcionales de §3.2/§6.3)

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
\author{Transcripto y expandido --- Curso Métodos Numéricos (OpenFING)}
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

> No se incluye `esint` (integral de superficie cerrada): no aplica a
> Métodos Numéricos, igual criterio que CDIV2017.

### 3.2 Pseudocódigo (agregar sólo cuando la clase lo necesite)

A partir de la Clase 6 (Descomposición LU) el curso empieza a describir
algoritmos explícitos. Agregar al preámbulo, después del bloque de
`tcolorbox`:

```latex
% ---- Pseudocódigo ----
\usepackage[spanish,onelanguage,ruled,vlined]{algorithm2e}
\SetKwInput{KwEntrada}{Entrada}
\SetKwInput{KwSalida}{Salida}
```

Usar `algorithm2e` (no `algorithm`+`algorithmic`) porque soporta
`\SetKwInput` para etiquetas en español (Entrada/Salida) sin pelear con
`babel`.

> **Gotcha descubierto en Clase6 (descomposición LU):** `\KwBy` **no existe**
> en `algorithm2e` (ni tampoco `\KwDownTo`) — es fácil asumir que sí, por
> analogía con `\KwTo`, pero produce `Undefined control sequence` recién al
> compilar. Para un `\For` decreciente, no hay keyword dedicada: escribir el
> rango en texto plano, p. ej. `\For{$i \gets n, n-1, \dots, 1$}{...}` en vez
> de `\For{$i \gets n$ \KwTo $1$ \KwBy $-1$}{...}`. `\KwTo` sí existe y es
> sólo texto literal ("to") — `algorithm2e` no interpreta el rango del `\For`
> como un loop real, lo tipografía tal cual se escriba.

### 3.3 Notación específica de este curso

- **Matrices**: mayúscula itálica normal (`$A$`, `$L$`, `$U$`), **sin**
  negrita — es la convención estándar en análisis numérico y la que usa la
  bibliografía típica del área. No usar `\mathbf{A}` salvo que una clase
  puntual lo pida explícitamente (revisar contra la transcripción).
- **Vectores**: minúscula en negrita (`$\mathbf{x}$`, `$\mathbf{b}$`) vía el
  paquete `physics` ya cargado (o `\mathbf` directo, son equivalentes acá).
- **Normas**: `\|\cdot\|` (paquete `physics` da `\norm{\cdot}`); aclarar
  siempre **qué norma** (1, 2, ∞, Frobenius) cuando la clase lo especifique —
  no dejar una norma sin subíndice si el docente distinguió cuál usa.
- **Número de condición**: `\kappa(A) = \|A\| \, \|A^{-1}\|` — usar
  `\kappa`, no `\mathrm{cond}`, salvo que la clase use ese nombre
  explícitamente.
- **Interpolación**: polinomio interpolante `$p_n(x)$` o `$P_n(x)$` según lo
  que use la clase (mantener consistencia dentro de cada `notes.tex`, no
  necesariamente entre clases distintas si el docente cambia de notación).
  Diferencias divididas: `f[x_0,\dots,x_k]`.

---

## 4. `metadata.yaml` — esquema canónico

El archivo DEBE parsear con un cargador YAML estándar y respetar tipos y
enums porque estos YAML alimentan tablas de una base de datos (ver
`docs/SPECS.md`).

### 4.1 Plantilla

```yaml
title: Clase N                     # str, formato exacto "Clase N"
id: metn-2023-2-NN                 # str, clave ÚNICA por clase (course + NN con cero)

course: Métodos Numéricos          # str
academic_year: 2023                # int
semester: 2                        # int

teacher: Juan Pablo Borthagaray    # str

source:                            # lista de str (nombres de proveedor)
  - OpenFING

video:                             # lista con un tramo {start, end}
  - start: "00:00:00"              # str "HH:MM:SS" (entrecomillado)
    end: "01:26:18"                # str "HH:MM:SS" — fin real del video

stats:
  transcript_words: 0              # int (= transcript.stats.json → words)
  summary_words: 0                 # int (conteo real de palabras de summary.md)
  diagrams_pending: 0              # int
  equations: 0                     # int

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
  reviewer: []                     # lista de str

  date: 2026-09-13                 # date ISO YYYY-MM-DD (fecha de generación)

llm:
  model: claude-sonnet-5           # str, id del modelo que generó las notas

editorial_status: draft            # enum {draft, reviewing, verified, published}
```

### 4.2 Reglas de tipos y valores

Idénticas a las de los demás cursos del repo (ver `courses/CDIV2017/CLAUDE.md`
§4.2) — no se repiten acá salvo lo que cambia:

- **`id`**: `metn-2023-2-NN` (curso + número de clase con cero a la
  izquierda, p. ej. `metn-2023-2-05`). No reutilizar el id de curso como id
  de clase.
- **`bibliography`**: lista de objetos `{title, chapter, verified}` cuando
  haya una referencia confirmada; `chapter` SIEMPRE string entrecomillado.
  Mientras no se coteje bibliografía real del curso, `bibliography: []` — no
  completar con un libro de métodos numéricos genérico (Burden & Faires,
  Quarteroni, etc.) sin verificarlo contra lo que el docente menciona.

---

## 5. Datos fijos del curso

- `course: Métodos Numéricos` (slug OpenFING `metn-2023`) · `academic_year:
  2023` · `semester: 2` · `teacher: Juan Pablo Borthagaray`.
  > Confirmado contra la página del curso en OpenFING
  > (`https://open.fing.edu.uy/courses/metn-2023/`, título "Métodos
  > Numéricos - Teórico 2023") y la página de cada clase (docente). El
  > semestre (2) fue confirmado por el usuario al crear este curso, no
  > aparece explícito en las páginas scrapeadas.
- `source: [OpenFING]` · URL por clase: `https://open.fing.edu.uy/courses/metn-2023/N/`.
- **Bibliografía**: sin confirmar todavía. Dejar `bibliography: []` hasta
  que una clase mencione explícitamente un libro/apunte de referencia y se
  coteje el capítulo exacto. No completar con un libro genérico de métodos
  numéricos no verificado.
- **Riesgo específico de este curso (análogo a la sección 5 del `CLAUDE.md`
  raíz sobre Cálculo):** si el VTT no trae símbolos matemáticos y todo está
  en prosa hablada ("la norma infinito de la matriz", "el número de
  condición"), la conversión a notación (`\|\cdot\|_\infty`, `\kappa(A)`) es
  una decisión del transcriptor. Además, en este curso específicamente, los
  **algoritmos** tienen el mismo problema: una descripción hablada de
  "recorremos las filas y restamos un múltiplo de la fila pivot" se traduce
  a pseudocódigo, y esa traducción puede introducir detalles (índices
  exactos, orden de bucles) que el docente no precisó verbalmente. Marcar
  con `notebox` cuando el pseudocódigo complete un detalle no explícito en
  el audio.
- Lote inicial de este repo: Clase5–8 (Sistemas Lineales: introducción, LU,
  normas, número de condición) y Clase11–13 (Interpolación: polinomio, error,
  a trozos). Las Clase9–10 (entre ambos bloques) no forman parte de este
  lote — si `prerequisites`/`next_topics` de Clase11 dependen de contenido
  de Clase9–10, señalarlo con una `notebox` en vez de inventar el contenido
  faltante.

---

## 6. Assets (diagramas y figuras)

Metodología general agnóstica de curso, ya validada en
`courses/Fisica3-2015/CLAUDE.md` §6.5 y `courses/CDIV2017/CLAUDE.md` §6 — no
se repite acá. Lo específico de Métodos Numéricos:

### 6.1 Formatos y casos esperados

- **Gráficas de convergencia / error vs. grado / condicionamiento** →
  **`pgfplots`** (código en el `.tex`), igual que las demás clases del repo
  con curvas.
- **Matrices triangulares (estructura de `L`/`U`, patrón de ceros)** →
  `tikz` plano (matriz dibujada con `\matrix` de TikZ o `pmatrix` con
  sombreado de celdas), no una tabla `booktabs` (que no representa bien la
  estructura triangular).
- **Interpolación a trozos (splines)** → `pgfplots` con los nodos marcados y
  cada tramo en un `\addplot` separado (no un único `\addplot` continuo, que
  ocultaría los quiebres de derivada entre tramos si la clase los discute).
- **Nunca** PNG/JPG/WebP para line-art (mismo criterio que el resto del
  repo: el pipeline tectonic/XeTeX sólo incluye PDF/PNG/JPG en
  `\includegraphics`, y SVG/WebP no sirven ahí de todos modos).

### 6.2 Estructura de archivos

- **Global — `courses/MetNum2023/Clases/assets/`**: se crea on demand, con
  un `tikzstyles.tex` propio de este curso (no reutilizar el de otro curso:
  paletas y convenciones de signo son de otro contexto, mismo criterio que
  CDIV2017 vs. Fisica3-2015).
- **Local — `Clases/ClaseN/assets/`**: la mayoría de las figuras viven acá,
  específicas de la clase.
- **Naming**: `<claseN>-<slug>.tex`, kebab-case.

### 6.3 Preámbulo (cuando haya diagramas)

Agregar, después del bloque de `tcolorbox` de §3.1 (y del bloque de
pseudocódigo de §3.2 si ya está presente):

```latex
% ---- Diagramas (gráficas) ----
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usetikzlibrary{babel}  % babel español activa `>`; esto evita romper las flechas `->`
\input{../assets/tikzstyles.tex}
```

> **`\usetikzlibrary{babel}` es obligatorio, no opcional** — ver el gotcha
> #3 en `courses/CDIV2017/CLAUDE.md` §7.3, aplica idéntico acá.

---

## 7. Compilación (tectonic)

**tectonic es el compilador canónico** (mismo binario que el resto del
repo). `./build.sh` compila todas las `ClaseN` existentes; `./build.sh 5 6 7
8` sólo esas. Deja el PDF in situ en `Clases/ClaseN/notes.pdf`. Compila desde
cada `Clases/ClaseN/` para que `\input{../assets/…}` resuelva.

Gotchas genéricos de LaTeX/tectonic (encoding, `title={#1}`, `babel`+`>`,
parada en el primer error, `\foreach` dentro de `axis`, `\\` en `\node`,
leyendas de `pgfplots`, variables de `\foreach` que chocan con macros de
acento) — ver el catálogo completo en `courses/CDIV2017/CLAUDE.md` §7.3, es
agnóstico de curso.

**Chequeo de Overfull obligatorio tras cada compilación:**

```bash
mkdir -p /tmp/chk   # obligatorio: sin esto, --outdir falla y el grep da 0 igual
tectonic -X compile notes.tex --outdir /tmp/chk 2>&1 | grep -c Overfull
```

Debe dar `0`. Además de compilar, **leer el PDF renderizado** antes de dar
una clase por terminada — es el paso que en `courses/ElecMag2024/` encontró
colisiones de etiquetas en figuras que sólo se ven en el render, no en el
código fuente.


### 7.1 Criterios de aceptación del contenido

Además del control de compilación, cotejar el inventario de cobertura con el
resumen y el LaTeX. Revisar entradas y salidas de cada algoritmo, índices,
dimensiones, operaciones entre filas y ejemplos numéricos recuperables. Leer
**todas** las páginas del PDF: matrices sin columnas cortadas, letra legible,
pseudocódigo y explicaciones sin cortes confusos, figuras coherentes con el texto.
Confirmar el éxito del compilador además del conteo de `Overfull`: un compilador
que abortó no constituye una verificación válida. Parsear YAML y validar tipos,
enums y conteos reales. Todo contenido generado conserva estado `draft` y
`needs-review`; la revisión técnica no sustituye la revisión académica humana.

En una evaluación a ciegas, `llm.model` queda en `""` y se informa el modelo
fuera del repo, conforme a `AGENTS.md`. No se modifica la procedencia ni las
estadísticas del extractor.
