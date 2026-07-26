# CLAUDE.md — Curso Física III (OpenFING)


Guía para generar las notas de cada clase a partir de su transcripción. Cada
carpeta `Clases/ClaseN/` documenta una clase del curso y debe contener **cuatro**
archivos:

| Archivo | Origen | Descripción |
|---------|--------|-------------|
| `Transcription_raw.txt` | dado | Transcripción cruda exportada de OpenFING (no editar). |
| `summary.md` | generado | Resumen estructurado en Markdown. |
| `notes.tex` | generado | El mismo resumen traducido a LaTeX. |
| `metadata.yaml` | generado | Metadatos de la clase (esquema estricto, ver abajo). |

> El nombre del archivo de transcripción es **`Transcription_raw.txt`** en las
> 28 clases (unificado el 2026-07-25; antes había cuatro variantes históricas,
> ver `docs/log.md` §2).

> **Layout del repo (reorg 2026-07-25):** las 28 clases viven en
> `courses/Fisica3/Clases/ClaseN/`; el `assets/` global en
> `courses/Fisica3/Clases/assets/`. `build.sh`, `CLAUDE.md` y ` PDFiter1/`
> (snapshot iter1, no tocar) quedan a nivel `courses/Fisica3/`.

---

## 1. Flujo de trabajo para una clase nueva

1. Leer `Clases/ClaseN/Transcription_raw.txt`. La cabecera trae `Palabras : NNNN` →
   ese número es `stats.transcript_words`.
2. Escribir `summary.md` siguiendo §2.
3. Traducir a `notes.tex` siguiendo §3 (preámbulo **verbatim**).
4. Escribir `metadata.yaml` siguiendo §4 (esquema **exacto**).
5. No inventar datos: si un campo no se puede derivar de la transcripción,
   dejarlo en el valor por defecto documentado, no omitirlo.

---

## 2. `summary.md` — estilo

Estructura estándar (ver `Clase5`, `Clase6`, `Clase7` como referencia canónica
de estilo; son las más completas):

- **Título H1**: `# Resumen Clase N — <Tema 1, Tema 2, …>`.
- **Índice** con enlaces internos (`## Índice` → lista numerada a anclas
  `#n-titulo`), con subitems para las subsecciones.
- **Secciones `##` numeradas** siguiendo el orden de exposición de la clase;
  subsecciones `###`.
- **Ecuaciones** en LaTeX con `$...$` (inline) y `$$...$$` (display). Encerrar
  los resultados clave en `\boxed{...}`.
- **Tablas Markdown** para comparaciones (caras/flujos, casos, etc.).
- **Citas `>`** para notas, sutilezas, límites de validez y advertencias.
- **Negritas** para términos técnicos la primera vez que aparecen.
- Cerrar, si aplica, con un puntero a la clase siguiente (en cursiva).

El resumen debe reconstruir los razonamientos, no solo listar resultados:
incluir hipótesis, convenciones de signo y por qué de cada paso.

**Nivel de detalle (importante):** expandir el contenido de cada header, no
resumir al mínimo. Para cada tema, desarrollar el razonamiento completo de la
clase: motivación, hipótesis, **pasos intermedios de las deducciones** (no solo
el resultado final encajonado), interpretación física y sutilezas/límites de
validez. Subdividir en subsecciones (`###`) cuando un tema tenga varias partes.
Referencia de calibración: `Clase11/summary.md` (~3000 palabras). Es preferible
un resumen extenso y autocontenido que uno telegráfico; `summary_words` típico
esperado: 2000–3200 (no forzar el número — depende de la densidad de la clase).

---

## 3. `notes.tex` — estilo

- El **preámbulo es idéntico en todas las clases**: copiarlo verbatim de
  `Clase7/notes.tex` (referencia limpia, sin diagramas). No agregar ni quitar
  paquetes sin motivo. Las clases **con** diagramas le suman encima el bloque de
  §6.3 (Clase1–6 ya lo tienen); ese bloque es lo único que las diferencia. Incluye `babel` español, `amsmath/physics/esint`, `tcolorbox`,
  `booktabs`, `hyperref`.
- **Encoding compatible con tectonic (XeTeX)**: el bloque de encoding va con
  guarda `iftex` (pdflatex → `inputenc`+`fontenc T1`; XeTeX → `fontspec`). No
  volver a `\usepackage[utf8]{inputenc}` suelto: bajo XeTeX rompe símbolos
  (`·`, `—`, `¿`, `¡`, `§`, `ª`). Ver §7.
  ```latex
  \usepackage{iftex}
  \ifPDFTeX
    \usepackage[utf8]{inputenc}
    \usepackage[T1]{fontenc}
  \else
    \usepackage{fontspec}
  \fi
  ```
- Cajas de color (definidas en el preámbulo), usarlas consistentemente:
  - `keybox` (azul) — resultados/definiciones clave.
  - `notebox` (amarillo) — notas, aclaraciones, límites de validez.
  - `warnbox` (rojo) — advertencias, errores conceptuales, limitaciones.
  - **Definirlas con `title={#1}`** (llave obligatoria): sin la llave, un `=` en
    el título (p. ej. `[Discontinuidad en $r = R$]`) rompe el parser `key=value`
    de tcolorbox con *Missing $ inserted*.
- Título de dos líneas: `\textbf{Clase N: <Tema>} \\ \large{<subtítulo>}`.
- Autor fijo: `Transcripto y expandido --- Curso Física III (OpenFING)`.
- Estructura `\section`/`\subsection` espejando el `summary.md`.
- `\tableofcontents` tras `\maketitle`.
- Mismos `\boxed{...}` y tablas `booktabs` que el resumen.

---

## 4. `metadata.yaml` — esquema canónico

**Arquetipo de referencia: `Clase23/metadata.yaml`** (su *conjunto de campos*;
ver §4.3 sobre su estado real). El archivo DEBE parsear con un cargador YAML
estándar y respetar tipos y enums porque estos YAML alimentarán tablas de una
base de datos.

### 4.1 Plantilla

```yaml
title: Clase N                     # str, formato exacto "Clase N"
id: fis3-2015-2-NN                 # str, clave ÚNICA por clase (course + NN con cero)

course: Física III                 # str
academic_year: 2015                # int
semester: 2                        # int

teacher: Nicolás Wschebor          # str

source:                            # lista de str (nombres de proveedor)
  - OpenFING

video:                             # lista con un tramo {start, end}
  - start: "00:00:00"              # str "HH:MM:SS" (entrecomillado)
    end: "01:26:18"                # str "HH:MM:SS" — fin real del video

stats:
  transcript_words: 9101           # int (= "Palabras" de la cabecera)
  summary_words: 1820              # int (conteo real de palabras de summary.md)
  diagrams_pending: 8              # int
  equations: 24                    # int

topics:                            # lista de str, orden de exposición
  - ...

bibliography:                      # lista de referencias
  - title: Resnick & Halliday      # str
    chapter: "24-25"               # str SIEMPRE entrecomillado (soporta rangos)
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
  date: 2026-07-23                 # date ISO YYYY-MM-DD (fecha de generación)

llm:
  model: claude-opus-4-8           # str, id del modelo que generó las notas

editorial_status: draft            # enum {draft, reviewing, verified, published}
```

### 4.2 Reglas de tipos y valores

- **Tiempos** (`video.start/end`): string `"HH:MM:SS"` entrecomillado. `end` es
  el timestamp real del último segmento de la transcripción, no un redondeo.
- **`bibliography[].chapter`**: SIEMPRE string entrecomillado, aun para un solo
  capítulo (`"24"`), para admitir rangos (`"24-25"`) sin cambiar de tipo.
- **`date`**: formato ISO `YYYY-MM-DD` (parsea como fecha).
- **Enums**: usar exactamente uno de los valores listados; nunca listar todos
  los valores posibles como "menú".
- **Sin blank-lines dentro de bloques** de lista/mapa: una lista es contigua.
- **No usar** `duration` (redundante con `video.end`), ni `version`, ni
  `reviewed_by`, ni `status.reviewed`. El estado editorial va en
  `editorial_status`; el estado de revisión, en el bloque `review`.

### 4.3 Notas importantes sobre el corpus existente

- El arquetipo `Clase23` **no parsea tal cual** (bloque `editorial_status`
  malformado) y usa espaciado irregular. Tomar de él el *conjunto de campos*,
  no su formato literal.
- El corpus (Clase1–7, 23–26) fue **normalizado** a este esquema el
  2026-07-23 y la corrección ya está aplicada; el detalle de qué se tocó vivía
  en `METADATA_AUDIT.md`, que se eliminó del repo. Las clases nuevas deben
  seguir §4.1 desde el inicio.
- **`id` es único por clase** con la convención `fis3-2015-2-NN` (curso +
  número de clase con cero a la izquierda, p. ej. `fis3-2015-2-07`). No
  reutilizar el id de curso `fis3-2015-2` como id de clase.

---

## 5. Datos fijos del curso

- `course: Física III` · `academic_year: 2015` · `semester: 2`
- `teacher: Nicolás Wschebor`
- `source: [OpenFING]` · URL por clase: `https://open.fing.edu.uy/courses/f3/N/`
- Bibliografía principal: **Resnick & Halliday** (electromagnetismo, cap. ~21–29).
  Óptica/ondas también citan **Sears & Zemansky**. Marcar `verified: false`
  salvo cotejo manual del capítulo.
- Numeración de capítulos del curso (según el docente): 1 Coulomb · 2 campo ·
  3 Ley de Gauss · 4 energía y potencial · … (no confundir con capítulos del
  libro).

---

## 6. Assets (diagramas y figuras)

Los diagramas de cada clase se autoran en **formato vectorial**, nunca raster.
Regla de oro: **no fotos IRL ni capturas del video**; apuntes con figuras
limpias y reproducibles. El objetivo de tamaño de todo el curso con assets es
**< 20 MB** (con vector el total realista es ~1–3 MB).

### 6.1 Formatos

- **Circuitos** → **`circuitikz`** (código en el `.tex`). Es el estándar; usar
  `europeanresistors` (resistencias rectangulares).
- **Gráficas/curvas** → **`pgfplots`** (código en el `.tex`).
- **Freeform** (líneas de campo, geometría, esquemas) → **SVG** como fuente
  editable → exportar **PDF** para `\includegraphics`.
- **Nunca** PNG/JPG/WebP para line-art. El pipeline canónico (**tectonic/XeTeX**)
  sólo incluye PDF/PNG/JPG; SVG y WebP no son válidos para `\includegraphics`. WebP
  queda reservado para una futura representación web derivada.

### 6.2 Estructura de archivos

- **Global — `courses/Fisica3/Clases/assets/`**: existe para **consistencia visual**,
  no para ahorrar bytes (con vector la deduplicación es irrelevante; **no
  obsesionarse** con reusar). Contiene `tikzstyles.tex` (paleta
  `figblue`/`figred`/`figamber`/`figgray` alineada con las cajas del preámbulo,
  estilos `figline`/`figaux` y el estilo `fisfig` de pgfplots). Promover una
  figura de local→global solo si de verdad se reusa.
- **Local — `Clases/ClaseN/assets/`**: la mayoría de las figuras viven acá,
  específicas de la clase (o inline en el `.tex`, o en `Clases/ClaseN/assets/figNN.tex`
  incluido con `\input`; para SVG, el `.svg` fuente + el `.pdf` derivado).
- **Naming**: `<claseN>-<slug>.{tex,svg,pdf}`, kebab-case.
- **Git**: versionar solo la fuente (TikZ `.tex`, SVG); `.gitignore` para raster
  en `assets/`.

### 6.3 Preámbulo

Además del `tikz` ya presente, las clases con diagramas agregan (después del
bloque de `tcolorbox`, para evitar el choque de opciones de `xcolor`):

```latex
% ---- Diagramas (circuitos y gráficas) ----
\usepackage[europeanresistors]{circuitikz}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usetikzlibrary{babel}  % babel español activa `>`; esto evita romper las flechas `->`
\input{../assets/tikzstyles.tex}
```

> **`\usetikzlibrary{babel}` es obligatorio, no opcional.** `babel` español hace
> **activo** el carácter `>`, y sin esta línea *cualquier* flecha `->`/`->>` de
> TikZ/circuitikz revienta con `Argument of \language@active@arg> has an extra }`.
> El error es silencioso hasta que se compila. Va **después** de cargar
> `circuitikz`/`pgfplots` (que traen `tikz`) y de `babel`.

> Compilar **desde el directorio de la clase** para que `\input{../assets/…}`
> resuelva. El builder canónico es **tectonic** vía `./build.sh N` (ver §7), que
> ya hace `cd Clases/ClaseN` y deja `Clases/ClaseN/notes.pdf`.
>
> Clases **sin** el bloque §6.3 pero con un `tikzpicture` inline que use `->`
> (p. ej. `Clase23`) necesitan igual `\usetikzlibrary{babel}` tras cargar `tikz`.

Referencia de estilo: **`Clase14`** (proof-of-concept) — circuito RC en
`circuitikz` + curva de carga en `pgfplots`. Diagramas freeform (líneas de campo,
geometría, vectores) van en **`tikz` plano** con los estilos `figline`/`figaux`
(ver `Clase1`–`Clase5/assets/`), no requieren `circuitikz`/`pgfplots` para
dibujar pero **sí** el bloque completo de arriba (porque `tikzstyles.tex` usa
`\ctikzset` y `\pgfplotsset`).

### 6.4 Metadata al agregar assets

- Al incorporar diagramas a una clase: bajar `stats.diagrams_pending` según los
  agregados y poner `status.assets: in-progress`; al completarlos, `done`.
- **Pendiente de decisión** (registrado en `docs/log.md`): el enum
  `status.assets ∈ {done, pending, in-progress}` no tiene valor para "no
  necesita assets". Hasta que se defina, una clase sin diagramas se deja en
  `pending` con su `diagrams_pending` estimado.

### 6.5 Verificación visual de diagramas (obligatoria antes de entregar)

**Nunca entregar un diagrama sin verlo compilado.** Escribir TikZ "a ciegas"
produce figuras rotas o feas (etiquetas encimadas, vectores mal, o directamente
que no compilan). El asistente **no tiene** compilador por defecto, pero puede
instalar uno liviano y **leer el PDF como imagen** para autocorregir sin depender
del Overleaf del usuario. Flujo:

1. **Instalar tectonic** (una vez, sin sudo, hay red + `curl` en el entorno):
   ```bash
   curl --proto '=https' --tlsv1.2 -fsSL https://drop-sh.fullyjustified.net | sh
   ```
   Baja paquetes CTAN on-demand y los cachea. Motor XeTeX: irrelevante para el
   render del diagrama (TikZ es engine-agnóstico). tectonic es además el builder
   canónico del documento completo (ver §7).
2. **Harness** `preview.tex` en el scratchpad (`article`, `\pagestyle{empty}`)
   que hace `\input{<ruta absoluta a cada asset>}` con `\newpage` entre figuras,
   cargando el mismo bloque §6.3 (¡incluido `\usetikzlibrary{babel}`!) y el
   `tikzstyles.tex` global por ruta absoluta. Compilar **todas las figuras de una
   vez** y leer el PDF resultante en **una sola** lectura (barato en tokens: 1
   compile + 1 read para N figuras).
   ```bash
   mkdir -p out && ./tectonic -X compile preview.tex --outdir out
   ```
3. **Leer** `out/preview.pdf` (una página por figura), diagnosticar y **corregir
   el asset** hasta que se vea limpio; recompilar sólo lo que cambie.
4. **El preview no alcanza.** Tras insertar las figuras, compilar la clase
   (`./build.sh N`) y **releer `notes.pdf`** en las páginas donde caen. El
   documento usa `setspace` a 1.5: eso **estira los `\\` dentro de los nodos**
   `align=center` y aparecen colisiones que en el harness (interlineado simple)
   no existen. Pasó en Clase 2 y Clase 4. Para acercar el harness al documento,
   cargar también `setspace`+`\onehalfspacing` en `preview.tex`.
5. **Chequear `Overfull \hbox`.** El harness es apaisado (~24 cm útiles) y el
   documento tiene 16 cm de ancho de texto: una figura puede verse impecable en
   el preview y meterse en el margen del PDF real. **Pasó en 4 de las 5 clases
   10–14.** El grep es barato y no perdona:
   ```bash
   ~/.local/bin/tectonic -X compile notes.tex --outdir /tmp/chk 2>&1 | grep -c Overfull
   ```
   Debe dar `0`. Si no, casi siempre se arregla partiendo en dos líneas los pies
   de panel largos y acercando los `xshift` entre paneles, antes que bajando el
   `scale` (que achica la geometría pero **no** el texto de los nodos, así que
   suele empeorar las colisiones).
6. Recién entonces entregar el `.tex`. El usuario recibe figuras **ya
   verificadas**; su compile es sólo el armado del documento, no depuración.

> Costo/beneficio: el loop de compilar+ver gasta *menos* en total que el ida y
> vuelta a ciegas (menos turnos, menos trabajo del usuario) y sube mucho la
> calidad. Insertar diagramas **no toca `summary.md`** (la figura vive sólo en
> `notes.tex`).

#### 6.5.1 Qué figuras hacer (y cuántas)

- **El número lo fija `stats.diagrams_pending`** del `metadata.yaml`, no el
  criterio del momento. Al terminar: `diagrams_pending: 0` y
  `status.assets: done`.
- **Anclar cada figura a un momento en que el docente dibuja.** Buscar en la
  transcripción `dibuj|pizarr|hagamos|vamos a hacer|acá tengo|acá ponemos`. Si
  él lo dibujó, es porque el dibujo aportaba; si no lo dibujó, probablemente la
  figura sea decorativa. Esto además protege la regla de §1.5 (*no inventar
  datos*): la figura no introduce contenido que la clase no tenga.
- **Priorizar por cobertura de secciones**: elegir las que dejan sin figura a
  las secciones más áridas, no varias del mismo tema. Cotejar con los assets ya
  existentes de la clase antes de elegir.

#### 6.5.2 Patrones que funcionan

- **Dos paneles con geometría idéntica**, donde lo único que cambia es la
  variable en discusión (signo, régimen, mecanismo). Usado en
  `clase1-coulomb-vectorial`, `clase3-cascaron`, `clase3-limites-barra`,
  `clase2-polarizacion`, `clase4-plano-infinito`.
- **Mostrar el *porqué*, no sólo el resultado.** El panel interior de
  `clase3-cascaron` dibuja el casquete cercano-chico contra el lejano-grande:
  eso explica la cancelación, mientras que "$F=0$" solo la enuncia.
- **Etiquetas simbólicas cuando el número es dudoso.** `clase1-tres-cargas` va
  con $r_{12}$, $r_{13}$, $\theta$ y sin cifras, para no tomar partido en la
  inconsistencia 12/15 cm que el texto documenta en un `warnbox`.
- **Declarar la escala falseada dentro de la figura** (`clase1-atomo`,
  `clase2-electrolito`: "fuera de escala"), en vez de dibujar algo engañoso.
- **Pie de figura en `\small\itshape`** con la lectura física, no la repetición
  de los rótulos.
- **`\providecommand` para el sub-dibujo que se repite** (moléculas polares en
  `clase10-polarizacion`, imancitos en `clase14-oersted`). Dos requisitos: va
  definido **antes** del `tikzpicture` —si se define dentro de un `scope` no se
  ve desde los otros paneles— y con `#1`, no `##1`:
  ```latex
  \providecommand{\imancito}[3]{%
    \begin{scope}[shift={(#1,#2)}, rotate=#3] ... \end{scope}}
  ```
  Con `providecommand` (y no `newcommand`) el mismo asset se puede compilar dos
  veces en el mismo documento sin chocar.

#### 6.5.3 Colisiones de rótulos: los casos que se repiten

Casi todo el tiempo de iteración se va en esto. Los recurrentes:

- Rótulo **sobre su propia cota** (`\node` en el medio de una flecha doble) →
  usar `anchor=south` desplazado, no centrado.
- Rótulo de vector **sobre el vector paralelo de al lado** → si dos flechas son
  colineales (p. ej. $\vec r_{21}$ y $\vec F_{12}$), desplazar **una de ellas**
  a una vertical/horizontal paralela; no basta con mover el texto.
- **Rótulos de dos líneas** que crecen hacia el objeto de arriba → ver punto 4
  del flujo (interlineado 1.5).
- Rótulos de paneles vecinos que se tocan por el borde → separar los `xshift`
  antes que achicar la letra.
- Captions `(a)`/`(b)` de paneles: alinearlos a la **misma** $y$ absoluta y
  dejar ≥ 0.8 de aire respecto del contenido.

#### 6.5.4 Releer el PDF atrapa errores de física, no sólo de tipografía

Cuatro casos reales de este curso, todos detectados **mirando el render**, no
leyendo el código:

- `clase4-capacitor`: el aporte de la placa $-\sigma$ estaba dibujado hacia
  abajo también *debajo* de la placa, cuando ahí apunta **hacia** ella. Se
  rehizo por regiones (arriba se cancelan / en medio se suman / abajo se
  cancelan).
- Clase 3 §6: el texto (heredado de `deepseek-v4-flash`) decía que se cancelan
  las componentes $Y$ y dos líneas después que el neto apunta en $-\hat Y$. La
  figura dejó la contradicción a la vista; se corrigió a componentes $X$ en
  `notes.tex` **y** en `summary.md`.
- Clase 11 §7.4: al dibujar `clase11-corriente` no cerraba el sentido de la
  deriva, y el texto decía «los electrones hacia la derecha ⟹ corriente hacia
  la derecha **(opuesta al movimiento de los portadores negativos)**» — las dos
  mitades se contradicen entre sí. Va hacia la **izquierda**; corregido en
  `summary.md` y `notes.tex`. El error venía de una línea confusa de la propia
  transcripción, así que **la transcripción no arbitra**: arbitra la física.
- `clase14-oersted`: los imancitos alrededor del cable habían quedado en sentido
  horario. Con la corriente saliendo del plano, $\vec B$ es antihorario y cada
  imancito va a $90°$ de su posición angular. Conviene calcular el ángulo, no
  ponerlo a ojo (el propio docente avisa en clase «no quiero equivocarme en el
  sentido»).

> Corolario: si al dibujar una figura el contenido del `.tex` no cierra,
> **el sospechoso es el texto**, no la figura. Corregir ambos y decirlo.

#### 6.5.5 Coherencia visual al tocar una clase con assets previos

Las figuras viejas (Clase 1–5, iteración inicial) usan `->`, `\filldraw` y
colores ad hoc. Al agregar figuras nuevas a una de esas clases, **restilar
también la vieja** al vocabulario de `tikzstyles.tex` (`figvec`, `figvecres`,
`figpos`/`figneg`, `figlbl`/`figlblaux`), conservando geometría y contenido. Sin
eso la clase queda con dos códigos de color contradictorios (p. ej. `+` azul en
la figura vieja y `+` rojo en las nuevas).

---

## 7. Compilación (tectonic) y edición dirigida por PDF

**tectonic es el compilador canónico del curso** (reemplaza Overleaf). El
asistente genera los PDF end-to-end; el usuario revisa.

### 7.1 `build.sh`

- Binario durable en `~/.local/bin/tectonic` (instalar con el `curl` de §6.5).
- **`courses/Fisica3/build.sh`**: `./build.sh` compila las 28; `./build.sh 1 5 14`
  sólo esas. Deja el PDF **in situ** en `Clases/ClaseN/notes.pdf` (tectonic no deja
  `.aux/.log`). Compila desde cada `Clases/ClaseN/` para que `\input{../assets/…}`
  resuelva. Salida ~40–85 KB por clase; el curso entero < 2 MB.
- La carpeta ` PDFiter1/` (con espacio) es el **snapshot de iteración 1 del
  usuario** — **no tocar**. Los recompilados viven por clase, no en un `pdf/`
  central.

### 7.2 Loop de edición dirigida por PDF

Para la fase de revisión fina: compilo `ClaseN` → **leo `notes.pdf`** (se renderiza
como imagen) → el usuario señala qué corregir (screenshot anotado, que yo veo, o
"pág X, §Y, el párrafo que empieza con…") → edito el `.tex`/asset/`metadata`
exacto → recompilo → releo para confirmar. Los **colores** están centralizados en
`assets/tikzstyles.tex` (global) + los de caja en cada preámbulo; un retoque
global se propaga. El `metadata.yaml` se actualiza en el mismo loop
(`diagrams_pending`, `status.assets`, `equations`, `review.state`). *(`/loop` es
otra cosa: automatización por intervalo, no esto.)*

### 7.3 Gotchas XeTeX (ya corregidos en las 28; respetar al crear clases nuevas)

1. **Encoding**: guarda `iftex`+`fontspec` (§3). `inputenc utf8` suelto rompe
   `·`/`—`/`¿`/`¡`/`§`/`ª` bajo XeTeX (los acentos sí sobreviven).
2. **Títulos de caja**: definir con `title={#1}` (§3). Un `=` en el título rompe
   sin la llave.
3. **`>` de babel**: `\usetikzlibrary{babel}` en toda clase con `tikz` y flechas
   `->` (bloque §6.3, o suelto tras `tikz` si es un `tikzpicture` inline).
4. tectonic **se detiene en el primer error** (a diferencia del `nonstopmode` de
   pdflatex, que produce PDF igual enmascarando bugs). Por eso afloraron typos
   preexistentes (`\viaje`, `}` por `)`); si una clase falla, es un bug real a
   arreglar, no ruido.
5. **`\foreach` no funciona dentro de un `axis` de pgfplots.** Falla en el
   `\end{axis}` con `Undefined control sequence` en `\UseTextAccent`, sin
   importar qué haya en el cuerpo del loop. **Desenrollarlo a mano** (ver
   `Clase13/assets/clase13-drude-promedio.tex`, que dibuja seis choques uno por
   uno). Fuera del `axis`, en `tikzpicture` plano, `\foreach` anda perfecto.
6. **Nunca usar `\t` como variable de `\foreach`** —ni `\c`, `\d`, `\b`, `\v`,
   `\u`, `\r`, `\H`—: son los macros de **acento** de LaTeX, y redefinirlos
   rompe todo el texto acentuado del documento. Da **el mismo síntoma** que (5),
   lo que hace perder mucho tiempo en el diagnóstico: ante `\UseTextAccent`,
   revisar primero el nombre de la variable y después si el loop está dentro de
   un `axis`. Nombres seguros: `\tcol`, `\ang`, `\xx`.
