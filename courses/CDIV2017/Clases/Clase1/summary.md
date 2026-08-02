# Resumen Clase 1 — Presentación del curso, nuevo programa, conjuntos y funciones

## Índice

1. [Presentación y organización del curso](#1-presentacion-y-organizacion-del-curso)
   - 1.1 [Docentes y anuncios prácticos](#11-docentes-y-anuncios-practicos)
   - 1.2 [El nuevo programa: "Cálculo 1 nuevo"](#12-el-nuevo-programa-calculo-1-nuevo)
2. [Zoología de los objetos matemáticos](#2-zoologia-de-los-objetos-matematicos)
3. [Conjuntos: pertenencia e igualdad](#3-conjuntos-pertenencia-e-igualdad)
   - 3.1 [Relación de pertenencia y diagramas de Venn](#31-relacion-de-pertenencia-y-diagramas-de-venn)
   - 3.2 [Igualdad de conjuntos](#32-igualdad-de-conjuntos)
4. [Inclusión](#4-inclusion)
   - 4.1 [Definición y cuantificadores relativizados](#41-definicion-y-cuantificadores-relativizados)
   - 4.2 [Propiedades de la inclusión](#42-propiedades-de-la-inclusion)
5. [Los conjuntos de base: N, Z, Q, R](#5-los-conjuntos-de-base-n-z-q-r)
6. [Construcción de conjuntos por extensión](#6-construccion-de-conjuntos-por-extension)
   - 6.1 [Caso $n=0$: el conjunto vacío](#61-caso-n0-el-conjunto-vacio)
   - 6.2 [Caso $n=1$: el conjunto unitario](#62-caso-n1-el-conjunto-unitario)
   - 6.3 [Caso $n=2$: el par no ordenado](#63-caso-n2-el-par-no-ordenado)
7. [Construcción de conjuntos por comprensión](#7-construccion-de-conjuntos-por-comprension)

---

## 1. Presentación y organización del curso

### 1.1 Docentes y anuncios prácticos

El docente responsable del teórico de la tarde es **Alexandre Miquel**; el
coordinador del curso y responsable del teórico de la mañana es Marcos
Barrios. El curso se llama oficialmente **Cálculo DIR** (Cálculo Diferencial
e Integral con una Variable), nombre que corresponde a un **nuevo programa**
que el docente presenta en esta primera clase.

Anuncios organizativos de la clase:

- Registrarse en el sitio **Eva** del curso.
- Hay **seis grupos de prácticos**; como no existe teórico nocturno, el
  práctico del grupo 1 (nocturno) dura dos horas y media en lugar de una
  hora y media, y en él se hacen repasos de teórico para quienes no pueden
  asistir de día.
- Los prácticos llevan, en general, **una semana de retraso** respecto al
  teórico (es una edición nueva del curso y se están ajustando los tiempos).
- Habrá un **cuestionario semanal en línea**, sin valor para la nota (no
  puntúa de forma directa), pensado como termómetro de aprendizaje tanto
  para los estudiantes como para los docentes.
- Todavía no hay apuntes nuevos completos: para los temas que no cambian
  respecto al programa anterior se puede seguir usando el material viejo;
  para los temas que sí cambian, el docente producirá capítulos específicos.

> Preguntas de la clase sobre el régimen de exámenes (si las demostraciones
> "antiguas" siguen siendo válidas, si exonerar habilita a dar el examen de
> Cálculo 2 viejo, si habrá más parciales que teóricos, etc.) quedaron sin
> resolver: el docente respondió explícitamente "no sé" en varios casos,
> porque es la primera edición del programa nuevo y los detalles de examen
> todavía se están coordinando entre los docentes. Un dato que sí quedó
> fijado: quien apruebe Cálculo 1 nuevo queda habilitado para dar el examen
> de Cálculo 2 nuevo, no el de Cálculo 2 viejo.

### 1.2 El nuevo programa: "Cálculo 1 nuevo"

La reorganización responde a un cambio en los programas de liceo, que dejó
un salto demasiado grande entre el liceo y el temario tradicional de
Cálculo 1. La solución fue **aligerar Cálculo 1** trasladando temas a
Cálculo 2 y superiores. Importante: los temas no desaparecen del plan de
estudios, solo se **reubican**.

**Temas que se van de Cálculo 1** (pasan a Cálculo 2 o cursos posteriores):

- Números complejos.
- Sucesiones y series.
- Integrales impropias.

El nuevo temario se organiza en **ocho capítulos**:

| # | Capítulo | Observación |
|---|----------|-------------|
| 1 | Conjuntos y funciones | Repaso de notaciones (esta clase) |
| 2 | Números reales | Sin cambios respecto al programa anterior; dos semanas |
| 3 | **Integrales** | Tema central de la nueva edición; cambia mucho |
| 4 | Continuidad | Cambia mucho (nuevas demostraciones) |
| 5 | Funciones trigonométricas | Sin cambios; se dicta justo antes del primer parcial |
| 6 | Derivadas | No cambia demasiado |
| 7 | Desarrollo de Taylor | — |
| 8 | Métodos de integración | — |

El cambio conceptual más importante es que las **integrales pasan a ser el
tema central** del curso desde el capítulo 3, en vez de dictarse recién al
final (donde antes solía faltar tiempo para cubrirlas bien). Esto obliga a
repensar la presentación, porque en el capítulo 3 todavía no se dispone ni
de sucesiones, ni de continuidad, ni de derivada:

- La integral se presenta a partir de la **teoría de Riemann usando solo
  supremos e ínfimos** (noción que se construye en el capítulo 2, números
  reales), sin necesitar el teorema fundamental del cálculo ni la noción de
  función continua.
- Se introduce un teorema nuevo en este enfoque: **toda función monótona es
  integrable**, que permite construir ejemplos de integrales sin pasar por
  la continuidad.
- La integral se entiende, en esta etapa, como el **área algebraica** de la
  superficie definida por una curva.
- El primer parcial cubre normalmente los capítulos 1 a 4.

En continuidad también hay cambios profundos: los grandes teoremas clásicos
(**Bolzano**, **Weierstrass**) se demostraban tradicionalmente apoyándose en
sucesiones, pero como las sucesiones se retiraron del programa, hay que
producir **demostraciones nuevas que no usen sucesiones**.

Otra simplificación deliberada: **no habrá topología de la recta**. El curso
solo considera funciones definidas en intervalos, así que la única noción
topológica necesaria es distinguir intervalo abierto, cerrado, semiabierto y
semicerrado.

Por la centralidad de las integrales, el tema se reparte en varios
capítulos en vez de concentrarse en uno solo: aparece en el capítulo 3 (teoría
básica), otra vez en el capítulo 4 (para mostrar que toda función continua es
localmente integrable) y de nuevo en el capítulo 6, derivadas, donde recién ahí
se presenta el **teorema fundamental del cálculo**.

---

## 2. Zoología de los objetos matemáticos

Antes de definir conjuntos, el docente hace un repaso de los **tipos de
objetos matemáticos** que se van a manipular en el curso, usando la imagen de
una "zoología" de objetos:

- **Números**: los conjuntos numéricos que se usarán son los **naturales**
  ($\mathbb{N}$), **enteros** ($\mathbb{Z}$), **racionales** ($\mathbb{Q}$) y
  **reales** ($\mathbb{R}$); los **complejos quedan fuera del programa**.
  Ejemplos de números: $0, 1, 2, -1, 3, \tfrac{1}{2}, \sqrt{2}, \pi, e$.
- **Objetos geométricos**: puntos, rectas, triángulos, círculos. En este
  curso se usan casi exclusivamente como **herramienta para dibujar**
  funciones, no como objeto de estudio en sí.
- **Objetos compuestos**: se construyen agrupando objetos de base. Ejemplos:
  **funciones** (reglas que transforman un número en otro número), matrices,
  **pares** $(a,b)$, y **n-uplas** (pares generalizados con cualquier
  cantidad de componentes).
- **Conjuntos**: la noción central de esta clase, presentada al final "porque
  es la mejor para el final".

> **Analogía informática**: la mejor intuición de un conjunto (al menos uno
> finito) es una **carpeta**: contiene "archivos" (los elementos). Hay dos
> diferencias clave con las carpetas de una computadora: (1) las carpetas
> tienen nombre, los **conjuntos son anónimos** (se identifican únicamente
> por lo que contienen); (2) las carpetas son necesariamente finitas por
> limitaciones de hardware, mientras que **los conjuntos pueden ser
> infinitos**. El docente aclara que esta cercanía no es casualidad: cuando
> se inventó la noción informática de carpeta, se tomó como modelo la noción
> matemática de conjunto.

> **Buena práctica (no obligación lógica)**: aunque en teoría un conjunto
> puede mezclar tipos de objetos distintos (números, puntos, rectas, etc.),
> en la práctica se considera **mala práctica** hacerlo. El curso trabajará
> con conjuntos "tipados": conjuntos de números, conjuntos de puntos, etc.,
> sin mezclarlos.

---

## 3. Conjuntos: pertenencia e igualdad

### 3.1 Relación de pertenencia y diagramas de Venn

La noción de conjunto es **primitiva**: no se define, se observa a través de
una relación, la **pertenencia**:
$$x \in A$$
que se lee "$x$ es un elemento de $A$", y su negación
$$x \notin A.$$

> **Asimetría de la notación**: a la derecha del símbolo $\in$ siempre debe
> haber un **conjunto**; a la izquierda, $x$ puede ser **cualquier objeto
> matemático** (número, punto, recta, matriz, función, o incluso otro
> conjunto — así como una carpeta puede contener otras carpetas).

Los conjuntos se representan con **diagramas de Venn** (en Francia,
informalmente, "diagramas patatoidales" por su forma de papa): un óvalo que
contiene los elementos adentro; si $x \in A$ se dibuja adentro y si $y
\notin A$ se dibuja afuera.

### 3.2 Igualdad de conjuntos

La igualdad entre dos conjuntos se **define** mediante la pertenencia:

$$A = B \;:\Longleftrightarrow\; \forall x,\; (x \in A \Longleftrightarrow x \in B)$$

Es decir, dos conjuntos son iguales si y solo si **tienen exactamente los
mismos elementos**, sin importar el orden en que se listen ni cuántas veces
se repita cada uno.

> **Sobre la notación $:\Leftrightarrow$**: el docente distingue la
> **igualdad** (relación entre dos *objetos* matemáticos, que dice que son
> idénticos) de la **equivalencia definicional** (relación entre dos
> *frases* o enunciados, que dice que tienen el mismo significado). Como $A =
> B$ es en sí mismo un enunciado (no un objeto), no tiene sentido escribir
> una "igualdad de igualdades"; por eso se usa un símbolo distinto (aquí
> $:\Leftrightarrow$, con tres rayas) para introducir la definición. Quien lo
> prefiera puede reemplazarlo por un $\Leftrightarrow$ ordinario "de
> definición" — el significado es el mismo.

> **Cuantificador $\forall x$ sin relativizar**: en esta definición, "para
> todo $x$" cuantifica sobre **todo el universo matemático**, no sobre un
> conjunto particular — es, en palabras del docente, "una cuantificación
> terrible".

Otra diferencia con las carpetas informáticas: dos carpetas con el mismo
contenido pero distinto nombre son objetos distintos en una computadora; en
teoría de conjuntos, como los conjuntos son anónimos, **dos conjuntos con el
mismo contenido son el mismo conjunto**.

---

## 4. Inclusión

### 4.1 Definición y cuantificadores relativizados

La **inclusión** (subconjunto) se define:

$$A \subset B \;:\Longleftrightarrow\; \forall x,\; (x \in A \Longrightarrow x \in B)$$

Nótese que solo cambia un símbolo ($\Rightarrow$ en vez de $\Leftrightarrow$)
respecto de la definición de igualdad. Intuitivamente, $A \subset B$ dice que
todo elemento de $A$ es también elemento de $B$ ("$A$ está incluido en
$B$"), en analogía con el orden $\le$ sobre números.

Esta definición motiva la introducción de los **cuantificadores
relativizados**, abreviaturas de uso constante en el curso:

$$\forall x \in A,\; (\ldots) \quad:\Longleftrightarrow\quad \forall x,\; (x \in A \Rightarrow (\ldots))$$
$$\exists x \in A,\; (\ldots) \quad:\Longleftrightarrow\quad \exists x,\; (x \in A \;\wedge\; (\ldots))$$

> Diferencia entre cuantificador "no relativizado" (sobre todo el universo)
> y "relativizado" (restringido a los elementos de un conjunto $A$): el
> segundo es abreviatura del primero combinado con $\Rightarrow$ (para "para
> todo") o $\wedge$ (para "existe"). El docente insiste en el símbolo
> universal $\wedge$ para "y" (independiente del idioma, a diferencia de
> "and", "et", "y"), y en que "existe" en matemática significa **existe al
> menos uno**, no "existen todos".

### 4.2 Propiedades de la inclusión

Para todos los conjuntos $A, B, C$:

1. **Reflexividad**: $A \subset A$ (todo conjunto se incluye a sí mismo).
2. **Transitividad**: si $A \subset B$ y $B \subset C$, entonces $A \subset C$.
3. **Antisimetría**: si $A \subset B$ y $B \subset A$, entonces $A = B$.

La propiedad (3) es el contenido del

$$\boxed{A = B \iff (A \subset B \;\wedge\; B \subset A)}$$

que el docente destaca como el **método estándar** para demostrar la
igualdad de dos conjuntos en la práctica: para probar $A = B$ se hacen
**dos demostraciones independientes**, primero $A \subset B$ y luego $B
\subset A$, y de ambas se concluye la igualdad. Este método se usará
repetidamente a lo largo del curso.

> La inclusión comparte estructura con la relación $\le$ sobre los números:
> reflexiva, transitiva y antisimétrica son exactamente los axiomas de un
> **orden (parcial)**.

---

## 5. Los conjuntos de base: N, Z, Q, R

El curso trabajará principalmente con cuatro conjuntos numéricos de base,
relacionados por inclusiones:

$$\boxed{\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}}$$

| Conjunto | Notación | Descripción informal | Definición rigurosa |
|----------|----------|----------------------|----------------------|
| Naturales | $\mathbb{N}$ | $0, 1, 2, 3, \ldots$ (en este curso empiezan en $0$) | Pendiente (cap. 2) |
| Enteros relativos | $\mathbb{Z}$ | $\ldots, -2, -1, 0, 1, 2, \ldots$ | Pendiente (cap. 2) |
| Racionales | $\mathbb{Q}$ | Fracciones | $\mathbb{Q} = \{\, \tfrac{n}{p} : n, p \in \mathbb{Z},\ p \neq 0 \,\}$ |
| Reales | $\mathbb{R}$ | — | Se define recién en el capítulo 2 |

> **Las notaciones con puntos suspensivos son "flojas" (no definiciones
> rigurosas)**: escribir $\mathbb{N} = \{0, 1, 2, 3, \ldots\}$ no es una
> definición matemática precisa porque los puntos suspensivos ocultan una
> cantidad infinita de elementos que nunca se terminarían de listar (el
> docente ilustra la idea con la imagen, en broma, de escribir naturales
> hasta destruir las paredes del salón y dar la vuelta al planeta, sin
> terminar nunca). $\mathbb{Z}$ es "una broma doble" porque tiene infinitos
> en dos direcciones, y $\mathbb{Q}$ es peor todavía porque además hay una
> cantidad infinita de racionales entre dos racionales cualesquiera. Por eso
> $\mathbb{Q}$ sí admite una definición por comprensión rigurosa (fracciones
> de enteros con denominador no nulo), mientras que $\mathbb{N}$ y
> $\mathbb{Z}$ requieren una construcción más cuidadosa que se pospone al
> capítulo 2.

Sobre $\mathbb{R}$, el docente adelanta que la diferencia con $\mathbb{Q}$
no es solo agregar "algunos números para completar" (idea que trae el
estudiante típico del liceo, y que es **falsa**): hay **infinitamente más**
números en $\mathbb{R}$ que en $\mathbb{Q}$. Ejemplos de reales no
racionales: $\sqrt{2}$, $\sqrt{3}$, $-\sqrt{2}$, $\pi$, $e$.

> **Nota histórica**: el docente sitúa el nacimiento del análisis matemático
> (la disciplina de Cálculo 1) en los trabajos de **Leibniz** hacia fines del
> siglo XVII (contemporáneo de Bach y Händel). En esa época aún no se sabía
> qué era rigurosamente un número real, lo que generó "cuentas flojas" y
> paradojas; la definición precisa y moderna de $\mathbb{R}$ es la tarea del
> capítulo 2 (dos semanas de curso), a partir de la cual $\mathbb{N}$,
> $\mathbb{Z}$ y $\mathbb{Q}$ se recuperan como subconjuntos particulares.

---

## 6. Construcción de conjuntos por extensión

Sin ejemplos de conjuntos concretos aún, el docente introduce dos métodos
generales para **construir** conjuntos, empezando por la **construcción por
extensión**: dar la lista finita de todos sus elementos.

Dados objetos cualesquiera $a_1, \ldots, a_n$, se define
$$\{a_1, \ldots, a_n\}$$
por la propiedad
$$\forall x,\; \big(x \in \{a_1,\ldots,a_n\} \iff x = a_1 \lor x = a_2 \lor \cdots \lor x = a_n\big).$$

> El símbolo $\lor$ (disyunción) es, en la convención matemática por
> defecto, **inclusivo**: "$A$ o $B$" admite que ambas se cumplan a la vez.
> Es el símbolo "dual" de $\wedge$: gráficamente, $\wedge$ invertido da
> $\lor$. Cuando se necesita disyunción exclusiva, se escribe la palabra
> completa "exclusivo", porque no hay símbolo estándar para ella.

**Defecto de este método**: solo permite construir **conjuntos finitos** (hay
que poder listar todos los elementos), y en principio no impone ninguna
restricción sobre el tipo de los $a_i$ (podrían mezclarse números, puntos,
conjuntos, etc. — aunque en la práctica no se hace, por las razones de
"buena práctica" ya mencionadas en la §2).

Como un conjunto no puede contener dos veces el mismo elemento, listar un
objeto repetido en la construcción no cambia el resultado: $\{a, a\} =
\{a\}$.

El docente distingue tres **casos particulares** según la cantidad $n$ de
elementos listados.

### 6.1 Caso $n=0$: el conjunto vacío

$$\boxed{\varnothing := \{\,\} \quad\text{tal que}\quad \forall x,\; x \notin \varnothing}$$

El vacío es, por definición, el conjunto construido por extensión a partir
de una **lista vacía**. Corresponde a una **disyunción vacía**, que por
convención (análoga a la de una sumatoria vacía igual a $0$) se toma como
**falsa** — el elemento neutro de la disyunción.

### 6.2 Caso $n=1$: el conjunto unitario

$\{a\}$ se llama **conjunto unitario**.

> **Advertencia (frecuente fuente de confusión en las pruebas)**: $a$ y
> $\{a\}$ son objetos **distintos** — como la diferencia entre un archivo $a$
> y una carpeta que contiene únicamente el archivo $a$ (o entre una manzana
> y una bolsa que contiene una manzana). Esto vale **incluso cuando $a$ es en
> sí mismo un conjunto**: el ejemplo canónico es
> $$\varnothing \neq \{\varnothing\},$$
> el conjunto vacío frente al conjunto unitario que contiene al vacío. El
> primero no tiene elementos; el segundo tiene exactamente un elemento (que
> resulta ser el conjunto vacío). Distinguir estos "niveles" es, según el
> docente, una de las sutilezas más comunes de confundir por quien empieza a
> estudiar teoría de conjuntos.

### 6.3 Caso $n=2$: el par no ordenado

$\{a, b\}$ se llama **par no ordenado**, porque
$$\{a, b\} = \{b, a\}$$
dado que ambos conjuntos tienen los mismos elementos (el orden en que se
listan los elementos de un conjunto es irrelevante, igual que el orden de los
archivos dentro de una carpeta). Como caso límite,
$$\{a, a\} = \{a\},$$
es decir, listar el mismo objeto dos veces produce el conjunto unitario, no
un "conjunto con dos copias".

---

## 7. Construcción de conjuntos por comprensión

El método por extensión no sirve para conjuntos infinitos, que son los de
mayor interés en matemática. El segundo método, **construcción por
comprensión**, resuelve esto: dado un conjunto $A$ ya formado y un
**enunciado** (frase, no objeto matemático) $P(x)$ que depende de una
variable $x$, se define

$$\{\, x \in A : P(x) \,\}$$

por la propiedad

$$\forall y,\; \big(y \in \{x \in A : P(x)\} \iff (y \in A \;\wedge\; P(y))\big).$$

> **El símbolo $x$ dentro de las llaves está *ligado***: solo tiene sentido
> dentro de la notación $\{x \in A : P(x)\}$, igual que la variable ligada
> por $\forall$ o $\exists$, o como la $x$ en la definición de una función
> "$x \mapsto 3x$". El conjunto resultante **no depende de $x$**, solo de
> $A$ y de la frase $P$; se puede sustituir $x$ por cualquier nombre sin
> cambiar el conjunto (y se puede evaluar la pertenencia de cualquier objeto
> concreto, no solo de una variable, p. ej. $3 \in \{x \in A: P(x)\} \iff 3
> \in A \wedge P(3)$).

**Interpretación geométrica**: la propiedad $P$ traza una **frontera** en el
universo matemático, separando los objetos que la cumplen de los que no. La
construcción por comprensión "recorta", dentro de $A$, exactamente los
elementos que caen del lado de la frontera donde $P$ es verdadera.

> Dos ingredientes son indispensables: **el conjunto $A$ y la propiedad
> $P$**. No se puede prescindir de $A$ y tomar "todos los objetos del
> universo que cumplen $P$", porque en general esa colección sería
> demasiado grande. Si $A$ es finito, el conjunto resultante también lo es;
> si $A$ es infinito, el resultado puede ser finito o infinito según la
> propiedad $P$.

**Ejemplos trabajados en clase** (todos con $A = \mathbb{N}$):

| Propiedad $P(n)$ | Conjunto resultante | ¿Finito o infinito? |
|---|---|---|
| $n$ es par | $\{0, 2, 4, 6, \ldots\}$ | Infinito |
| $n$ es impar | $\{1, 3, 5, 7, \ldots\}$ | Infinito (complementario del anterior) |
| $n$ es primo | $\{2, 3, 5, 7, 11, 13, \ldots\}$ | Infinito (aunque la estructura fina de los primos todavía es objeto de conjeturas abiertas) |
| $n$ es primo y par | $\{2\}$ | Finito (un único elemento) |
| $n$ es par y $n$ es impar | $\varnothing$ | Vacío |

> El último ejemplo muestra que **el conjunto vacío también puede
> construirse por comprensión**: basta una propiedad que ningún objeto del
> universo satisface. También se señaló, a partir de una pregunta de la
> clase, que **negar la propiedad** $P$ (usar $\neg P$ en vez de $P$) produce
> el **conjunto complementario** dentro de $A$ — como en el par
> par/impar de arriba, que son complementarios entre sí dentro de
> $\mathbb{N}$.

La clase termina en este punto ("vamos a continuar con la comprensión la
próxima vez"), habiendo cubierto pertenencia, igualdad, inclusión, los
conjuntos numéricos de base y los dos métodos de construcción de conjuntos
(extensión y comprensión), como preparación para retomar funciones y avanzar
hacia la definición rigurosa de $\mathbb{R}$ en el capítulo 2.

*Continúa en la Clase 2 con más ejemplos de construcción por comprensión y,
previsiblemente, la noción de función.*
