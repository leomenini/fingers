# Resumen Clase 2 — Conjuntos por comprensión, operaciones booleanas, pares ordenados, producto cartesiano, conjunto potencia e introducción a funciones

## Índice

1. [Conjuntos construidos por comprensión](#1-conjuntos-construidos-por-comprensión)
   - 1.1 [Definición y notación](#11-definición-y-notación)
   - 1.2 [Ejemplos: pares, impares, primos](#12-ejemplos-pares-impares-primos)
   - 1.3 [Intervalos de $\mathbb{R}$](#13-intervalos-de-mathbbr)
   - 1.4 [El conjunto solución de una ecuación](#14-el-conjunto-solución-de-una-ecuación)
2. [Operaciones booleanas sobre conjuntos](#2-operaciones-booleanas-sobre-conjuntos)
   - 2.1 [Unión](#21-unión)
   - 2.2 [Intersección](#22-intersección)
   - 2.3 [Diferencia](#23-diferencia)
   - 2.4 [Conmutatividad y la excepción de la diferencia](#24-conmutatividad-y-la-excepción-de-la-diferencia)
   - 2.5 [Por qué la unión es la única construcción realmente nueva](#25-por-qué-la-unión-es-la-única-construcción-realmente-nueva)
3. [Igualdades entre conjuntos y razonamiento con diagramas de Venn](#3-igualdades-entre-conjuntos-y-razonamiento-con-diagramas-de-venn)
   - 3.1 [Descomposición de la unión en tres partes disjuntas](#31-descomposición-de-la-unión-en-tres-partes-disjuntas)
   - 3.2 [Distributividad de la unión respecto a la intersección](#32-distributividad-de-la-unión-respecto-a-la-intersección)
   - 3.3 [Dualidad unión–intersección: una analogía que no viene de la aritmética](#33-dualidad-unión-intersección-una-analogía-que-no-viene-de-la-aritmética)
4. [Pares ordenados](#4-pares-ordenados)
   - 4.1 [Definición e igualdad](#41-definición-e-igualdad)
   - 4.2 [Par ordenado vs. par no ordenado](#42-par-ordenado-vs-par-no-ordenado)
5. [Producto cartesiano](#5-producto-cartesiano)
   - 5.1 [Definición](#51-definición)
   - 5.2 [Por qué "producto": el caso finito](#52-por-qué-producto-el-caso-finito)
   - 5.3 [Por qué "cartesiano": Descartes y el plano](#53-por-qué-cartesiano-descartes-y-el-plano)
   - 5.4 [Representación geométrica: rectángulos](#54-representación-geométrica-rectángulos)
   - 5.5 [Ejemplo discreto: grillas de puntos](#55-ejemplo-discreto-grillas-de-puntos)
   - 5.6 [Generalización: $n$-uplas y producto cartesiano generalizado](#56-generalización-n-uplas-y-producto-cartesiano-generalizado)
6. [Conjunto potencia (partes de un conjunto)](#6-conjunto-potencia-partes-de-un-conjunto)
   - 6.1 [Definición](#61-definición)
   - 6.2 [Ejemplos en el caso finito](#62-ejemplos-en-el-caso-finito)
   - 6.3 [La fórmula del cardinal: $2^n$](#63-la-fórmula-del-cardinal-2n)
   - 6.4 [El caso infinito: $|\mathcal P(\mathbb N)| = |\mathbb R|$](#64-el-caso-infinito-mathcal-pmathbb-n-mathbb-r)
7. [Introducción a las funciones](#7-introducción-a-las-funciones)
   - 7.1 [Cambio de enfoque respecto al teórico anterior](#71-cambio-de-enfoque-respecto-al-teórico-anterior)
   - 7.2 [Definición por tres ingredientes](#72-definición-por-tres-ingredientes)

---

## 1. Conjuntos construidos por comprensión

### 1.1 Definición y notación

La clase retoma el capítulo 1 ("Conjuntos y funciones"), del que en la Clase 1 ya se habían visto la igualdad de conjuntos, la inclusión, la construcción **por extensión** (listar los elementos) y los cuatro conjuntos numéricos de base $\mathbb N$, $\mathbb Z$, $\mathbb Q$, $\mathbb R$ (todavía sin definir formalmente: eso queda para la semana siguiente). Ahora se completa el segundo método de construcción de conjuntos: la construcción **por comprensión**.

La idea es partir de dos ingredientes de naturaleza distinta:

- un conjunto de base $A$,
- un **predicado** $P(x)$, es decir una frase matemática que depende de una variable $x$ (por ejemplo "$x$ es par" o "$x \le 7$").

A partir de ellos se construye el conjunto

$$\{x \in A : P(x)\}$$

formado por todos los elementos de $A$ que cumplen la propiedad $P$. La definición formal, con cuantificación no restringida sobre todo el universo matemático, es:

$$\boxed{\forall y,\quad y \in \{x \in A : P(x)\} \iff (y \in A) \wedge P(y)}$$

Se insiste en que esta construcción **mezcla dos objetos de tipos distintos**: un conjunto $A$ y un objeto lingüístico $P$ (una frase con sentido matemático bien definido). El predicado divide "el universo" en dos partes: los objetos que cumplen la propiedad y los que no; el conjunto por comprensión selecciona, dentro de $A$, la parte que sí la cumple.

Un punto lógico importante: la variable $x$ que aparece en $\{x \in A : P(x)\}$ es una variable **ligada**: no importa cómo se la llame, exactamente como ocurre con el índice de una sumatoria,
$$\sum_{i=0}^n a_i = \sum_{k=0}^n a_k,$$
donde el resultado sólo depende de $n$, no del nombre del índice. De igual modo, $\{x \in A : P(x)\} = \{z \in A : P(z)\}$: el conjunto sólo depende de $A$ y de $P$, no del nombre de la variable ligada.

> **Nota de estilo docente**: el profesor advierte que se equivocará seguido durante el curso, y de hecho corrige varias veces sobre la marcha notaciones mal escritas en el pizarrón (p. ej. confunde $A - B$ con $B - A$ al dibujar en §2). Conviene seguir el razonamiento, no la primera fórmula escrita.

### 1.2 Ejemplos: pares, impares, primos

Ejemplos inmediatos de conjuntos por comprensión sobre $\mathbb N$:

- $\{n \in \mathbb N : n \text{ es par}\} = \{0, 2, 4, 6, \dots\}$
- $\{n \in \mathbb N : n \text{ es impar}\} = \{1, 3, 5, 7, \dots\}$
- $\{n \in \mathbb N : n \text{ es primo}\} = \{2, 3, 5, 7, 11, 13, \dots\}$

En los tres casos el predicado $P$ es lo único que cambia; el conjunto de base $A = \mathbb N$ es el mismo. Esto ilustra el mecanismo general: **dado un conjunto y una frase, se puede seleccionar la parte del conjunto que cumple la frase.**

### 1.3 Intervalos de $\mathbb{R}$

El mismo mecanismo permite **definir** —no sólo abreviar— los intervalos de $\mathbb R$, que hasta entonces se venían usando de manera informal:

$$[a,b] := \{x \in \mathbb{R} : a \le x \le b\}, \qquad (a,b) := \{x \in \mathbb{R} : a < x < b\}$$

y de modo análogo los semiabiertos/semicerrados $[a,b)$, $(a,b]$ (dejados como ejercicio de escritura explícita). También se definen los intervalos infinitos, por ejemplo:

$$[a,+\infty) := \{x \in \mathbb R : x \ge a\}$$

y análogamente $(a, +\infty)$, $(-\infty, b]$, $(-\infty,b)$.

> **Cuidado con la notación**: existen dos convenciones para los intervalos abiertos. La **notación inglesa** usa paréntesis, $(a,b)$; la **notación francesa** usa corchetes invertidos, $]a,b[$. El profesor advierte que la notación con paréntesis $(a,b)$ es ambigua en matemática, porque el mismo símbolo también denota el **par ordenado** de $a$ y $b$ (ver §4). Esa es la razón por la que, más adelante en el curso, se preferirá otra notación al presentar formalmente los intervalos.

### 1.4 El conjunto solución de una ecuación

Último ejemplo de construcción por comprensión: dado cualquier polinomio o ecuación, se puede formar el **conjunto solución**. Ejemplo trabajado en clase:

$$R = \{x \in \mathbb R : x^3 - 3x + 1 = 0\}$$

Se discute qué se puede decir de este conjunto sin resolverlo:

- No se habla de "tamaño" en matemática (palabra informal), sino de **cardinal**.
- Como es una ecuación de tercer grado, tiene **a lo sumo tres** soluciones reales: $R$ es *finito*, con cardinal $0$, $1$, $2$ o $3$.
- Un argumento de continuidad informal (el polinomio tiende a $-\infty$ cuando $x \to -\infty$ y a $+\infty$ cuando $x \to +\infty$) permite afirmar que hay **al menos una** raíz real entre ambos extremos.
- Verificando gráficamente, se puede constatar que en realidad hay **exactamente tres** soluciones.

> El ejemplo sirve de puente hacia el tema siguiente de operaciones sobre conjuntos: muestra cómo, a partir de un conjunto infinito ($\mathbb R$) y un predicado, se puede obtener un conjunto **finito**.

---

## 2. Operaciones booleanas sobre conjuntos

Se introducen las llamadas **operaciones booleanas** sobre conjuntos (el nombre viene de George Boole), tomando dos conjuntos cualesquiera $A$ y $B$.

### 2.1 Unión

$$\boxed{\forall x,\quad x \in A \cup B \iff (x \in A) \vee (x \in B)}$$

El **truco mnemotécnico** que da el profesor: el símbolo $\cup$ tiene la misma orientación "redondeada hacia arriba" que el símbolo $\vee$ (el "o" lógico) — ambos abren hacia arriba. Gráficamente, $A \cup B$ es "todo": la región cubierta por $A$ o por $B$ (incluyendo lo que está en ambos, ya que es un "o" inclusivo). Se señala explícitamente la ambigüedad con el lenguaje natural: coloquialmente se dice que la unión "contiene los elementos de $A$ y los de $B$", pero formalmente la definición usa un **o**, no un **y**.

### 2.2 Intersección

$$\boxed{\forall x,\quad x \in A \cap B \iff (x \in A) \wedge (x \in B)}$$

Mismo truco mnemotécnico invertido: $\cap$ y $\wedge$ ("y" lógico) comparten orientación (abren hacia abajo). Gráficamente, $A \cap B$ es la región común a ambos conjuntos.

### 2.3 Diferencia

$$\boxed{\forall x,\quad x \in A - B \iff (x \in A) \wedge (x \notin B)}$$

Es decir, los elementos de $A$ que **no** pertenecen a $B$. Gráficamente, en el dibujo de Venn, es la "luna" que queda de $A$ al quitarle la parte compartida con $B$. El profesor comenta que prefiere la notación $A - B$ (en vez de $A \setminus B$) para esta clase, aclarando que hay que tener cuidado porque el símbolo $-$ también se usa en álgebra con otro significado, así que conviene distinguir el contexto.

### 2.4 Conmutatividad y la excepción de la diferencia

Se remarca un contraste central:

| Operación | ¿Conmutativa? |
|---|---|
| $A \cup B$ | Sí: $A \cup B = B \cup A$ |
| $A \cap B$ | Sí: $A \cap B = B \cap A$ |
| $A - B$ | **No**, en general: $A - B \ne B - A$ |

> $A - B$ y $B - A$ sólo pueden coincidir en un caso: cuando **ambos son vacíos** (es decir, cuando $A = B$, o más precisamente cuando ninguno de los dos tiene elementos que el otro no tenga). En general son regiones distintas del diagrama de Venn: $A-B$ es la luna de $A$ y $B-A$ es la luna de $B$, ambas distintas de la intersección.

### 2.5 Por qué la unión es la única construcción realmente nueva

Observación conceptual importante que cierra la sección: aunque se presentaron **tres** operaciones nuevas, en realidad la **intersección** y la **diferencia** ya se pueden expresar como casos particulares de la construcción por comprensión vista en la §1:

$$A \cap B = \{x \in A : x \in B\} \quad \big(= \{x \in B : x \in A\}\big)$$
$$A - B = \{x \in A : x \notin B\}, \qquad B - A = \{x \in B : x \notin A\}$$

> **Advertencia**: $\{x \in A : x \notin B\}$ y $\{x \in B : x \notin A\}$ son, en general, conjuntos **distintos** (son $A-B$ y $B-A$ respectivamente).

La razón de fondo: la comprensión sólo permite **seleccionar una parte de un conjunto ya dado**, nunca **mezclar el contenido de dos conjuntos distintos**. La intersección y la diferencia seleccionan dentro de un único conjunto de partida ($A$ o $B$), pero la unión combina elementos que pueden venir de $A$ o de $B$ indistintamente — eso es genuinamente nuevo y no reducible a comprensión. **Moraleja**: de las tres operaciones presentadas, sólo la unión introduce una notación verdaderamente nueva.

---

## 3. Igualdades entre conjuntos y razonamiento con diagramas de Venn

### 3.1 Descomposición de la unión en tres partes disjuntas

Primer ejemplo de igualdad demostrable entre conjuntos: la unión $A \cup B$ siempre se puede descomponer en tres piezas que no se solapan entre sí:

$$\boxed{A \cup B = (A \cap B) \;\cup\; (A - B) \;\cup\; (B - A)}$$

Es decir: lo que está en común ($A \cap B$), más lo que hay que agregar de $A$ que no está en $B$ ($A-B$), más lo que hay que agregar de $B$ que no está en $A$ ($B-A$). Se verifica gráficamente que estas tres piezas no se intersectan dos a dos, por lo que la descomposición es una **unión disjunta**.

> **Definición**: una unión $C \cup D$ se dice **disjunta** cuando $C \cap D = \varnothing$. Más generalmente, una familia de conjuntos es **disjunta dos a dos** (o *disjunta a pares*) cuando la intersección de cualesquiera dos de ellos, tomados de a pares, es vacía. En el ejemplo de arriba, $A\cap B$, $A-B$ y $B-A$ son disjuntos dos a dos.

### 3.2 Distributividad de la unión respecto a la intersección

Segundo resultado: para todos los conjuntos $A$, $B$, $C$,

$$\boxed{(A \cup B) \cap C = (A \cap C) \cup (B \cap C)}$$

Se observa la analogía formal con la distributividad de la aritmética — concretamente con $(a+b)c = ac+bc$ — pero se aclara explícitamente que **es sólo una analogía de forma, no hay ningún vínculo matemático profundo** entre ambas leyes.

**Demostración gráfica (diagrama de Venn)**: en vez de una demostración formal por doble inclusión (que el profesor menciona que existe pero no desarrolla en esta clase), se traza un diagrama con tres conjuntos $A$, $B$, $C$ en posición genérica (que se solapan de a pares y los tres a la vez) y se sigue paso a paso:

1. Se sombrea $A \cup B$ (toda la región cubierta por cualquiera de los dos).
2. Se interseca esa región con $C$: queda $(A\cup B)\cap C$.
3. Por otro lado, se sombrea por separado $A \cap C$ y $B \cap C$.
4. Se toma la unión de esas dos regiones.
5. Se constata visualmente que el resultado del paso 2 coincide exactamente con el del paso 4.

> Este tipo de razonamiento —dibujar la región paso a paso y comparar— se llama **razonamiento con diagrama de Venn**, y el profesor recomienda usarlo como herramienta habitual cuando la igualdad involucra sólo dos o tres conjuntos: "estos tipos de razonamiento tienen que ser tan naturales como el aire que respiran". Queda como **ejercicio** verificar del mismo modo la ley "dual" $(A \cap B) \cup C = (A \cup C) \cap (B \cup C)$.

### 3.3 Dualidad unión–intersección: una analogía que no viene de la aritmética

Punto fino que cierra el bloque: existe una **simetría entre unión e intersección que no tiene análogo entre suma y producto**. Si en la ley de distributividad aritmética $a(b+c) = ab+ac$ se intercambian sumas y productos, se obtiene una fórmula sin sentido o falsa en general. En cambio, si en

$$(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$$

se intercambian **todas** las uniones por intersecciones y viceversa, la ley resultante **sigue siendo verdadera**:

$$(A \cap B) \cup C = (A \cup C) \cap (B \cup C)$$

Esto confirma que la analogía con la aritmética era sólo formal (una coincidencia notacional útil para recordar la fórmula), mientras que la dualidad ∪↔∩ es una propiedad estructural genuina del álgebra de conjuntos. Se deja como ejercicio dibujar el diagrama de Venn correspondiente para verificarlo.

---

## 4. Pares ordenados

### 4.1 Definición e igualdad

Se introduce un nuevo tipo de objeto matemático, el **par ordenado** de $a$ y $b$, escrito $(a,b)$: un "paquete" con dos compartimentos, uno para cada componente. Se llama **primera componente** a $a$ y **segunda componente** a $b$.

La igualdad entre pares ordenados se define componente a componente:

$$\boxed{\forall a,b,c,d,\quad (a,b) = (c,d) \iff (a=c) \wedge (b=d)}$$

Analogía informática que da el profesor: agrupar dos archivos en un único archivo (como hace un ZIP) manteniendo cada uno identificable y en su posición.

### 4.2 Par ordenado vs. par no ordenado

Se contrastan explícitamente dos construcciones que ya se venían usando y que **no deben confundirse**:

| | Par **no ordenado** $\{a,b\}$ | Par **ordenado** $(a,b)$ |
|---|---|---|
| Tipo de objeto | Conjunto | Nuevo tipo (no es un conjunto) |
| Orden de los elementos | Irrelevante: $\{a,b\} = \{b,a\}$ | Relevante: en general $(a,b) \ne (b,a)$ |
| Caso $a=b$ | $\{a,a\} = \{a\}$ (colapsa a un conjunto unitario) | $(a,a)$ sigue teniendo dos casillas, **no colapsa** |
| Cuándo $(a,b)=(b,a)$ | — | Sólo cuando $a=b$ |

> Un alumno pregunta explícitamente si $(a,a)$ se simplifica al notar que $\{a,a\}=\{a\}$. La respuesta del profesor es que **no**: el par ordenado es un tipo de objeto distinto del conjunto, "una caja con dos espacios para mantener dos objetos", y tener el mismo objeto repetido en ambas casillas no colapsa la estructura como sí ocurre con el conjunto $\{a,a\}$.

---

## 5. Producto cartesiano

### 5.1 Definición

Dado dos conjuntos $A$ y $B$, el **producto cartesiano** es el conjunto de todos los pares ordenados posibles con primera componente en $A$ y segunda componente en $B$:

$$\boxed{A \times B = \{(a,b) : a \in A \wedge b \in B\}}$$

### 5.2 Por qué "producto": el caso finito

Si $A = \{a_1,\dots,a_n\}$ tiene $n$ elementos y $B=\{b_1,\dots,b_m\}$ tiene $m$ elementos, el producto cartesiano se puede representar como una tabla con $n$ filas y $m$ columnas, listando todas las combinaciones $(a_i, b_j)$. Esa tabla tiene exactamente $n \cdot m$ casillas, de donde:

$$\boxed{|A \times B| = |A| \cdot |B| \quad \text{(caso finito)}}$$

usando ya la notación de **cardinal** $|\cdot|$ introducida antes. Esta es la razón del nombre "producto": el cardinal del producto cartesiano es el producto usual de los cardinales. (Se menciona, sin desarrollarlo, que en teoría de conjuntos también se puede definir el producto de cardinales infinitos por esta misma vía.)

### 5.3 Por qué "cartesiano": Descartes y el plano

La segunda palabra, "cartesiano", honra al filósofo y matemático francés **René Descartes**. La construcción se llama así porque fue Descartes quien observó que los puntos del plano se pueden representar mediante pares de **coordenadas cartesianas**: para él, el plano *es*, esencialmente, el producto cartesiano $\mathbb R \times \mathbb R$, el conjunto de todos los pares cuyas dos componentes son números reales.

### 5.4 Representación geométrica: rectángulos

Se explora qué pasa cuando $A$ y $B$ son intervalos de $\mathbb R$, digamos $A=[a,b]$ y $B=[c,d]$. Ubicando la primera componente en el eje $x$ y la segunda en el eje $y$, el conjunto $A\times B$ se representa como un **rectángulo** con vértices determinados por los extremos de ambos intervalos, cuya **área** es

$$\text{área} = (b-a)\cdot(d-c),$$

el producto de las longitudes de los dos intervalos — de nuevo aparece un producto, reforzando visualmente por qué se llama así la construcción.

$$\boxed{\text{producto cartesiano} \;\longleftrightarrow\; \text{rectángulo}}$$

Se plantea además, como ejercicio, qué ocurre con los **bordes** del rectángulo si se excluyen los extremos de uno o ambos intervalos (es decir, si se usan intervalos abiertos en vez de cerrados): el interior del rectángulo no cambia, pero algunos de los lados se pierden o quedan parcialmente presentes según cuál intervalo sea abierto.

### 5.5 Ejemplo discreto: grillas de puntos

Cuando $A$ y $B$ son conjuntos finitos de números (por ejemplo $A=\{2,3,4,5\}$ y $B=\{4,5,6\}$), el producto cartesiano se representa como una **grilla de puntos** en el plano, con $|A|\cdot|B|$ puntos (en el ejemplo, $4\times 3=12$). El patrón visual es el mismo que el de la tabla del §5.2, pero dibujado como puntos discretos en vez de celdas de una tabla.

### 5.6 Generalización: $n$-uplas y producto cartesiano generalizado

La construcción se extiende de manera natural a más de dos componentes mediante las **$n$-uplas**: una tupla con $n$ componentes en vez de dos. Nomenclatura: $n=2$ da un **par**, $n=3$ da una **terna**, $n=4$ una "cuarta" (el profesor no está seguro de este último nombre), y en general se habla de $n$-upla.

El **producto cartesiano generalizado** de $n$ conjuntos $A_1, A_2, \dots, A_n$ es

$$A_1 \times A_2 \times \cdots \times A_n = \{(x_1,\dots,x_n) : x_1\in A_1, \dots, x_n \in A_n\}$$

Con tres componentes correspondería geométricamente a un paralelepípedo; para $n$ mayor (el profesor bromea con $n=17$) ya no hay forma de dibujarlo, pero todas las propiedades se generalizan sin cambios: en particular, si todos los $A_i$ son finitos, $|A_1\times\cdots\times A_n| = |A_1|\cdots|A_n|$.

---

## 6. Conjunto potencia (partes de un conjunto)

### 6.1 Definición

Dado un conjunto $A$, el **conjunto potencia** (o **conjunto de partes**) de $A$, escrito $\mathcal P(A)$, es el conjunto de todos los subconjuntos de $A$:

$$\boxed{\forall B,\quad B \in \mathcal P(A) \iff (B \text{ es un conjunto}) \wedge (B \subseteq A)}$$

Se remarca que $\mathcal P(A)$ es un **conjunto de conjuntos** (una "carpeta que sólo contiene carpetas").

### 6.2 Ejemplos en el caso finito

- $\mathcal{P}(\varnothing) = \{\varnothing\}$: el único subconjunto del vacío es el propio vacío. Es un **conjunto unitario**, y en particular $\mathcal P(\varnothing) \ne \varnothing$ (contiene un elemento, aunque ese elemento sea el vacío).
- $\mathcal P(\{a\}) = \{\varnothing, \{a\}\}$: dos elementos.
- $\mathcal P(\{a,b\}) = \{\varnothing, \{a\}, \{b\}, \{a,b\}\}$: cuatro elementos.
- $\mathcal P(\{a,b,c\})$: el vacío, tres subconjuntos de un elemento, tres de dos elementos, y el total — ocho elementos en total.

### 6.3 La fórmula del cardinal: $2^n$

Se observa el patrón $1, 2, 4, 8, \dots$ y se generaliza:

$$\boxed{|\mathcal P(A)| = 2^{|A|} \quad \text{si } A \text{ es finito}}$$

**Justificación combinatoria**: para construir un subconjunto arbitrario de un conjunto de $n$ elementos, hay que decidir, para cada uno de los $n$ elementos, si entra o no entra en el subconjunto — dos posibilidades independientes por elemento. Multiplicando las $n$ decisiones binarias se obtiene $2 \cdot 2 \cdots 2 = 2^n$ subconjuntos posibles. Esto también explica el nombre "potencia".

### 6.4 El caso infinito: $|\mathcal P(\mathbb N)| = |\mathbb R|$

Se plantea qué pasa al tomar la potencia de un conjunto infinito, en particular $\mathcal P(\mathbb N)$ (en teoría de conjuntos a veces denotado $2^{\mathbb N}$, notación que el profesor evita presentar como tal por ser "peligrosa" en este contexto). El resultado —enunciado sin demostración, calificado de "conocido desde hace un siglo y medio"— es que $\mathcal P(\mathbb N)$ tiene el **mismo cardinal que $\mathbb R$**: existe una biyección entre ambos.

> **Jerarquía de infinitos**: se menciona informalmente que $\mathbb N$ representa el infinito "numerable" (el más pequeño), $\mathbb R$ el infinito "continuo", y que existe un siguiente cardinal y en general una jerarquía infinita de cardinales infinitos — tema que **no se desarrolla** en el curso. Se confirma además que la construcción de conjunto potencia se puede aplicar a cualquier conjunto, aunque los complejos y cuaterniones quedan fuera del programa.

---

## 7. Introducción a las funciones

### 7.1 Cambio de enfoque respecto al teórico anterior

El profesor anuncia explícitamente un **cambio de definición** respecto a una edición anterior del curso (dirigido a quienes ya habían cursado o asistido a un teórico previo): antes, la noción de función se introducía **a partir de la noción de relación**. En esta edición se abandona ese camino y se trata a las **funciones como un nuevo tipo de objeto matemático primitivo**, independiente de la noción de relación.

La intuición que motiva la nueva definición es informática: una función es una "maquinita" (análoga a un programa o ejecutable) que toma una entrada $x$ y produce una salida $f(x)$, calculada mediante una regla o algoritmo determinado a partir de $x$. Ejemplos ya vistos en la propia clase que, bajo esta óptica, son funciones: la operación de formar el conjunto potencia (toma un conjunto, da otro conjunto) y la de formar el producto cartesiano (toma dos conjuntos, da un conjunto de pares).

### 7.2 Definición por tres ingredientes

Una función $f$ queda definida dando **tres** ingredientes:

1. Un conjunto $A$, el **dominio**, escrito $\operatorname{Dom}(f)$: el conjunto donde se toman las entradas.
2. Un conjunto $B$, el **codominio**, escrito $\operatorname{Codom}(f)$: el conjunto donde "viven" las salidas.
3. Una expresión o regla $f(x) = \dots$ (una fórmula que depende de $x$) tal que para todo $x \in A$, $f(x)$ está bien definido y $f(x) \in B$.

$$\boxed{f \text{ está definida por } (\operatorname{Dom}(f)=A,\ \operatorname{Codom}(f)=B,\ f(x)=\dots) \text{ tal que } \forall x\in A,\ f(x)\in B}$$

Una pregunta de un alumno pide precisar si la "expresión que depende de $x$" debe depender realmente de $x$ (¿qué pasa con $f(x)=5$, una función constante?). El profesor aclara que no hay problema: "depende de $x$" se entiende como **posiblemente** depende de $x$; una expresión constante es un caso válido y perfectamente aceptado de regla de función.

La clase termina en este punto, con la promesa de continuar la próxima vez desarrollando la teoría de funciones (dominio, codominio, imagen, inyectividad, etc.) a partir de esta definición.

---

*Próxima clase: continuación del estudio de funciones (probablemente imagen, inyectividad/sobreyectividad, composición) antes de pasar al segundo capítulo del temario, números reales.*
