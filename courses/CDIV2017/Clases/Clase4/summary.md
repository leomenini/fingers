# Resumen Clase 4 — Los números reales: axiomática de cuerpo ordenado

## Índice

1. [Introducción: la recta real como intuición geométrica](#1-introducción-la-recta-real-como-intuición-geométrica)
2. [Dos caminos hacia una definición rigurosa: construcción y axiomatización](#2-dos-caminos-hacia-una-definición-rigurosa-construcción-y-axiomatización)
3. [La estructura de $\mathbb{R}$: quince axiomas en cuatro grupos](#3-la-estructura-de-mathbbr-quince-axiomas-en-cuatro-grupos)
   - 3.1 [Axiomas de la suma](#31-axiomas-de-la-suma)
   - 3.2 [Axiomas del producto](#32-axiomas-del-producto)
   - 3.3 [Axiomas de orden](#33-axiomas-de-orden)
   - 3.4 [El axioma que falta: completitud](#34-el-axioma-que-falta-completitud)
4. [Consecuencias de los axiomas de la suma](#4-consecuencias-de-los-axiomas-de-la-suma)
   - 4.1 [Unicidad del neutro y del opuesto](#41-unicidad-del-neutro-y-del-opuesto)
   - 4.2 [La resta](#42-la-resta)
5. [Consecuencias de los axiomas del producto](#5-consecuencias-de-los-axiomas-del-producto)
   - 5.1 [Unicidad del neutro y del inverso](#51-unicidad-del-neutro-y-del-inverso)
   - 5.2 [Cero es absorbente: la demostración completa](#52-cero-es-absorbente-la-demostración-completa)
   - 5.3 [Producto nulo y producto unitario](#53-producto-nulo-y-producto-unitario)
6. [Los naturales como abreviaturas](#6-los-naturales-como-abreviaturas)
7. [El cociente y la reducción al mismo denominador](#7-el-cociente-y-la-reducción-al-mismo-denominador)
   - 7.1 [Definición y el peligro de dividir entre cero](#71-definición-y-el-peligro-de-dividir-entre-cero)
   - 7.2 [Ejemplos: racionales e irracionales](#72-ejemplos-racionales-e-irracionales)
8. [Interpretación geométrica de las operaciones](#8-interpretación-geométrica-de-las-operaciones)
   - 8.1 [La suma: construcción por paralelogramos](#81-la-suma-construcción-por-paralelogramos)
   - 8.2 [El producto: el teorema de Tales](#82-el-producto-el-teorema-de-tales)
   - 8.3 [Adelanto: la raíz cuadrada con regla y compás](#83-adelanto-la-raíz-cuadrada-con-regla-y-compás)
9. [Axiomas de orden en detalle](#9-axiomas-de-orden-en-detalle)
   - 9.1 [Totalidad, transitividad, antisimetría](#91-totalidad-transitividad-antisimetría)
   - 9.2 [Orden estricto y tricotomía](#92-orden-estricto-y-tricotomía)
10. [Un aparte de lógica: la implicación material](#10-un-aparte-de-lógica-la-implicación-material)
11. [Orden compatible con la suma y con el producto](#11-orden-compatible-con-la-suma-y-con-el-producto)
    - 11.1 [Suma: sin restricciones](#111-suma-sin-restricciones)
    - 11.2 [Producto: el origen del 90% de los errores](#112-producto-el-origen-del-90-de-los-errores)

---

## 1. Introducción: la recta real como intuición geométrica

La clase abre con un cambio de punto de vista respecto al liceo: en vez de dar
por sentado qué es $\mathbb{R}$, se pregunta **por qué** es un tema difícil.
La intuición fundamental es que los **números reales son los números que
permiten representar todos los puntos de una recta** — y la palabra clave es
*todos*. Esta intuición viene de la geometría: fijado un sistema de
coordenadas en una recta (un punto $O$ para el cero y un punto $I$ para la
unidad), cada número real $x$ se asocia biunívocamente a un punto $X$ tal que
$\vec{OX} = x \cdot \vec{OI}$.

> Esta correspondencia es **biyectiva**: hay tantos reales como puntos en la
> recta. Como consecuencia, **todas las rectas están en biyección con
> $\mathbb{R}$**: todas tienen "la misma forma", la misma cantidad de puntos.
> Por eso se habla de *la* recta real, entendida como una recta ideal que
> representa a todas las rectas posibles.

$\mathbb{R}$ contiene, por supuesto, a los naturales, los enteros y los
racionales. Pero ya en el liceo se sabe que hay más puntos en la recta que
racionales: el ejemplo clásico es $\sqrt{2}$, construible con compás como la
diagonal de un cuadrado de lado $1$, y que no es racional (demostración
diferida a una clase futura). A esta lista se agregan $\pi$, $e$, $\log 2$,
etc. Aunque parezca paradójico escribir solo cuatro irracionales frente a
infinitos racionales, es un resultado de la segunda mitad del siglo XIX que
**el infinito de los irracionales es estrictamente más grande** que el de los
racionales (la herramienta para probarlo — cardinalidad — no está disponible
todavía en el curso).

> Los griegos antiguos ya distinguían dos tipos de objetos: los *números*
> (solo los racionales) y los *objetos geométricos* (que cubrían todos los
> reales). Como no tenían notación para los irracionales, Euclides representa
> siempre los números por puntos de recta — de ahí que los *Elementos* estén
> llenos de figuras.

## 2. Dos caminos hacia una definición rigurosa: construcción y axiomatización

El cálculo diferencial e integral nace a fines del siglo XVII con **Leibniz**,
quien inventó de una vez el cálculo diferencial, el integral, y buena parte de
lo que se ve en Cálculo 1 y 2 — sin tener, sin embargo, una definición precisa
de número real, ni noción de límite, ínfimo o supremo. Esa carencia fue el
motor que llevó, en el siglo XIX, a precisar la noción de número real por dos
vías:

- **Construcción**: partir de "la nada" (o de los racionales $\mathbb{Q}$) y
  construir un objeto que funcione como $\mathbb{R}$. El paso de los enteros a
  $\mathbb{Q}$ es sencillo; el paso difícil de $\mathbb{Q}$ a $\mathbb{R}$ lo
  resolvió el matemático alemán **Dedekind** (cortes de racionales), y también
  hubo una construcción alternativa de **Cauchy** (sucesiones).
- **Axiomatización**: capturar las propiedades de $\mathbb{R}$ mediante una
  lista de fórmulas sencillas, al estilo de los axiomas de la geometría de
  Euclides (siglo V-VI a.C.).

Lo notable es que **ambos programas confluyeron**: se demostró que las
construcciones de Dedekind y Cauchy satisfacen todos los axiomas de la
axiomatización, y que **si existe un objeto que satisface la lista de
axiomas, es único a menos de isomorfismo**. La analogía con informática que da
el docente: así como una misma estructura de datos (un conjunto finito, por
ejemplo) puede implementarse con listas o con árboles binarios sin que cambien
sus propiedades observables, todas las construcciones posibles de
$\mathbb{R}$ son isomorfas entre sí.

> Por esta razón el curso **admite la existencia de un único cuerpo
> $\mathbb{R}$** que satisface la lista de axiomas, sin presentar la
> construcción (que "es gigantesca").

## 3. La estructura de $\mathbb{R}$: quince axiomas en cuatro grupos

Se postula que existe un conjunto $\mathbb{R}$ dotado de:

- dos **operaciones**: $x+y$ (suma) y $x \cdot y$ (producto, también escrito
  $xy$);
- una **relación** binaria $x \le y$ (equivalente a escribir $y \ge x$ — mera
  notación sinónima, no una definición nueva).

y que satisface **15 axiomas**, agrupados así:

| Grupo | Rango | Tema |
|-------|-------|------|
| 1 | 1.1 – 1.4 | Suma |
| 2 | 2.1 – 2.5 | Producto |
| 3 | 3.1 – 3.5 | Orden |
| 4 | único | Completitud (motor de toda la teoría) |

### 3.1 Axiomas de la suma

$$
\begin{aligned}
\textbf{1.1 (asociatividad)} &\quad (x+y)+z = x+(y+z), \ \forall x,y,z \\
\textbf{1.2 (conmutatividad)} &\quad x+y = y+x, \ \forall x,y \\
\textbf{1.3 (neutro)} &\quad \exists\, 0 : \ x + 0 = x, \ \forall x \\
\textbf{1.4 (opuesto)} &\quad \forall x, \ \exists (-x) : \ x + (-x) = 0
\end{aligned}
$$

### 3.2 Axiomas del producto

$$
\begin{aligned}
\textbf{2.1 (asociatividad)} &\quad (xy)z = x(yz) \\
\textbf{2.2 (conmutatividad)} &\quad xy = yx \\
\textbf{2.3 (neutro)} &\quad \exists\, 1 \ne 0 : \ x \cdot 1 = x, \ \forall x \\
\textbf{2.4 (inverso)} &\quad \forall x \ne 0, \ \exists\, x^{-1} : \ x\cdot x^{-1} = 1 \\
\textbf{2.5 (distributividad)} &\quad (x+y)z = xz + yz
\end{aligned}
$$

> **El axioma 2.3 dice algo más de lo que parece**: no solo exige que exista
> un neutro para el producto, sino que sea **distinto de $0$**. Sin esa
> cláusula sería trivial demostrar que $\mathbb{R}$ tiene un único punto (todo
> sería igual a $0$ y todas las demás reglas seguirían cumpliéndose
> vacuamente). Es, en la práctica, el axioma que garantiza que $\mathbb{R}$
> sea infinito.

### 3.3 Axiomas de orden

$$
\begin{aligned}
\textbf{3.1 (total)} &\quad x\le y \ \text{ó} \ y \le x, \ \forall x,y \\
\textbf{3.2 (transitivo)} &\quad x\le y \ \text{y} \ y\le z \implies x\le z \\
\textbf{3.3 (antisimétrico)} &\quad x\le y \ \text{y} \ y\le x \implies x=y \\
\textbf{3.4 (compatible con suma)} &\quad x\le y \implies x+z \le y+z \\
\textbf{3.5 (compatible con producto)} &\quad x\ge 0 \ \text{y} \ y\ge 0 \implies xy \ge 0
\end{aligned}
$$

> En 3.1, el "ó" es **inclusivo**: cuando $x=y$ ambas desigualdades se
> cumplen a la vez, y eso no es una contradicción.

### 3.4 El axioma que falta: completitud

Queda un axioma más, el **4**, el axioma de **completitud** — descrito como
"el motor de la máquina". No se presenta en esta clase; se pospone a la
próxima semana. Sin él, se puede razonar con las reglas algebraicas y de
orden usuales, pero **no** se puede todavía justificar la existencia de
$\sqrt{2}$ ni de ningún ínfimo o supremo: esa es precisamente la razón de ser
del axioma 4.

## 4. Consecuencias de los axiomas de la suma

### 4.1 Unicidad del neutro y del opuesto

El axioma 1.3 dice que *existe* un neutro, pero no dice que sea único: hay
que demostrarlo. Supongamos que $0$ y $0'$ son ambos neutros para la suma.
Entonces:

$$0 + 0' = 0' \quad (\text{porque } 0 \text{ es neutro})$$
$$0 + 0' = 0 \quad (\text{porque } 0' \text{ es neutro})$$

de donde $0 = 0'$. Por esto se puede hablar *del* neutro $0$ (una constante),
y no de *un* neutro cualquiera. El mismo argumento (dejado como ejercicio) da
la **unicidad del opuesto**.

De la unicidad del opuesto se obtiene la siguiente proposición, usada
constantemente en lo que sigue:

$$
\boxed{x+y = 0 \iff x = -y \iff y = -x}
$$

La primera equivalencia y la segunda son la misma afirmación leída con los
papeles de $x$ e $y$ intercambiados (por conmutatividad); solo hace falta
demostrar una de las dos implicaciones no triviales, lo cual queda como
ejercicio. De esta proposición se deducen inmediatamente tres consecuencias
muy usadas:

$$-(x+y) = (-x) + (-y), \qquad -(-x) = x, \qquad -0 = 0.$$

### 4.2 La resta

La resta **no es un axioma**: se **define** a partir de la suma y el opuesto.

$$
\boxed{x - y \ := \ x + (-y)}
$$

Todas las propiedades usuales de la resta (las que se manejan desde la
primaria) se deducen de esta definición combinada con las propiedades del
opuesto y de la suma — el ejercicio propuesto es tomar la lista de reglas
algebraicas conocidas y deducirlas una por una a partir de los axiomas.

## 5. Consecuencias de los axiomas del producto

### 5.1 Unicidad del neutro y del inverso

El mismo argumento de 4.1 (sustituyendo $+$ por $\cdot$ y $0$ por $1$)
demuestra que el neutro $1$ del producto es único, y de la misma manera el
inverso $x^{-1}$ de un elemento no nulo es único.

### 5.2 Cero es absorbente: la demostración completa

Ningún axioma dice explícitamente que $0 \cdot x = 0$: **es una
consecuencia**, y la clase la demuestra paso a paso como ejemplo de cómo se
"juega" con la lista de axiomas ("un juego infantil... pero solo usa los
axiomas"):

$$
\begin{aligned}
0x &= 0 + 0x &&\text{(1.3: } 0 \text{ es neutro, sumado a la izquierda)}\\
   &= (0+0)x &&\text{(1.3: } 0+0=0\text{, sustituyendo)}\\
   &= 0x + 0x &&\text{(2.5: distributividad)}
\end{aligned}
$$

Combinando las dos cadenas se obtiene $0x = 0x + 0x$. Sumando $-(0x)$ a ambos
lados y usando 1.4:

$$
0 = 0x + 0x - 0x = 0x.
$$

$$
\boxed{x \cdot 0 = 0 \cdot x = 0}
$$

> Este es el primer ejemplo completo de demostración a partir de la lista de
> axiomas, y sirve de modelo para todas las demás: nunca se usa nada que no
> esté en la lista.

### 5.3 Producto nulo y producto unitario

A partir de la absorción de $0$ se puede demostrar (no se desarrolla en
detalle en clase, queda para ejercicio) la propiedad central:

$$
\boxed{xy = 0 \iff x=0 \ \text{ó} \ y=0}
$$

y, de modo simétrico a la proposición de 4.1 para la suma:

$$
xy = 1 \iff x = y^{-1} \iff y = x^{-1}.
$$

Como $1 \ne 0$ (axioma 2.3), si $xy=1$ entonces ni $x$ ni $y$ pueden ser
nulos, así que ambos son invertibles. De aquí se deducen todas las reglas
usuales de manipulación de productos e inversos.

## 6. Los naturales como abreviaturas

Al desarrollar $(x+y)^2$ con la distributividad aparece el símbolo $2$, que
**no está definido por ningún axioma**. Se introduce entonces por definición:

$$
\boxed{2 := 1+1, \quad 3 := 2+1, \quad 4:=3+1, \ \ldots}
$$

Cada entero mayor que $1$ es, formalmente, una **abreviatura** construida a
partir del $1$ del axioma 2.3 y la suma. El docente ilustra que estas
abreviaturas son consistentes con las reglas que ya se conocen probando que
$x+x = 2x$:

$$
\begin{aligned}
x + x &= 1\cdot x + 1 \cdot x && \text{(2.3: neutro)}\\
&= (1+1)x && \text{(2.5: distributividad)}\\
&= 2x && \text{(definición de } 2\text{)}
\end{aligned}
$$

Con esta maquinaria, el desarrollo del cuadrado de un binomio queda
completamente justificado:

$$
(x+y)^2 = (x+y)(x+y) = x^2 + xy + yx + y^2 = x^2 + 2xy + y^2.
$$

## 7. El cociente y la reducción al mismo denominador

### 7.1 Definición y el peligro de dividir entre cero

Al igual que la resta, el cociente **se define**, no es un axioma:

$$
\boxed{\dfrac{x}{y} := x \cdot y^{-1}, \quad \text{si } y \ne 0}
$$

> **Advertencia enfática del docente**: escribir $y^{-1}$ (o $x/y$) sin
> verificar antes que $y \ne 0$ es un error grave — "se van directamente al
> infierno... antes de dar el examen", con el castigo cómico de repetir el
> curso de Cálculo 1 por la eternidad. El chiste subraya un punto serio: $0$
> no tiene inverso, y toda manipulación con cocientes debe justificar
> explícitamente que el denominador no se anula.

### 7.2 Ejemplos: racionales e irracionales

De la definición de cociente y de las propiedades del producto se deduce la
regla de **reducción al mismo denominador**, familiar desde la primaria:

$$
\boxed{\dfrac{x}{a} + \dfrac{y}{b} = \dfrac{xb + ya}{ab}}
$$

El docente insiste en un punto conceptual importante: esta regla **no es
exclusiva de los racionales**. Se cumple igual para cualquier par de reales,
con denominadores racionales o irracionales. Dos ejemplos:

- **Caso racional** (el "ejemplo idiota"):
$$
\frac{1}{2}+\frac{1}{3} = \frac{3}{6}+\frac{2}{6} = \frac{5}{6}.
$$

- **Caso irracional**, anticipando la existencia de $\sqrt{2}$ y $\sqrt{3}$
  (que en rigor solo está garantizada por el axioma de completitud, todavía
  no presentado, pero que ya se puede usar informalmente):
$$
\frac{1}{\sqrt 2}+\frac{1}{\sqrt 3} = \frac{\sqrt 3}{\sqrt2\sqrt3}+\frac{\sqrt 2}{\sqrt2\sqrt3} = \frac{\sqrt2+\sqrt3}{\sqrt 6}.
$$
  Para eliminar la raíz del denominador, se multiplica numerador y
  denominador por $\sqrt 6$:
$$
\frac{\sqrt2+\sqrt3}{\sqrt6} = \frac{(\sqrt2+\sqrt3)\sqrt6}{6} = \frac{\sqrt{12}+\sqrt{18}}{6}
= \frac{2\sqrt3 + 3\sqrt2}{6},
$$
  usando $\sqrt{12}=\sqrt{4\cdot3}=2\sqrt3$ y $\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$.

> **Idea a retener**: la reducción al mismo denominador es una consecuencia
> algebraica pura de los axiomas del producto y de la definición de cociente;
> por eso funciona igual de bien racionalizando denominadores irracionales.

## 8. Interpretación geométrica de las operaciones

Antes de pasar a los axiomas de orden, se hace una pausa para mostrar que
**toda cuenta algebraica tiene un correlato geométrico** — el mensaje
explícito es que quien maneja los números reales solo como "fórmulas
esotéricas" o "magia negra" se pierde, mientras que quien los piensa como
puntos de una recta tiene intuición ("magia blanca").

### 8.1 La suma: construcción por paralelogramos

Dados $0$, $x$ y $y$ en la recta $R$, se construye el punto suma $z=x+y$ sin
necesidad de conocer la unidad (la suma es una operación **lineal**, no
requiere escala):

1. Se toma una recta paralela $R'$ y un punto $O'$ arbitrario en ella.
2. Se copia el segmento $OI$ (o, de modo equivalente, cualquier segmento de
   referencia) formando el paralelogramo $O'I'IO$, lo que define $I'$.
3. Se repite la construcción de paralelogramos para trasladar el punto $y$ a
   partir de $x$, obteniendo $z$.

Es la construcción a regla y compás de la suma mediante traslaciones de
vectores (paralelogramos). Queda como ejercicio la construcción análoga para
el opuesto.

### 8.2 El producto: el teorema de Tales

A diferencia de la suma, el producto **sí necesita la unidad** $I$. Dados
$O$, $I$, $x$ e $y$ sobre la recta $R$:

1. Se traza una recta secante $R'$ por $O$ y se marca en ella un punto
   arbitrario $I'$ (la "unidad duplicada").
2. Se traza el segmento $I'I$ y se ubica, sobre $R'$, un punto llamado $G'$
   trazando la paralela adecuada, de modo que por el **teorema de Tales**
   se establece una razón de referencia entre los segmentos $OI'$, $OG'$ y
   $OI$.
3. Repitiendo la construcción entre $I'$ y $X$ (trazando la paralela
   correspondiente) se obtiene un punto $Z$ tal que, otra vez por Tales,
   $$\frac{OI'}{OG'} = \frac{OX}{OZ},$$
   y $Z$ es exactamente el punto que representa $x\cdot y$.

> La diferencia conceptual entre las dos construcciones: la suma usa
> **paralelogramos** (geometría afín, sin necesidad de escala); el producto
> usa **triángulos semejantes y el teorema de Tales** (geometría con escala,
> por eso hace falta la unidad).

Como ejercicio se propone construir, con la misma idea, el **inverso**
$y^{-1}$ a partir de $O$, $I$ e $y$: se trata de invertir los papeles en la
relación de Tales de modo que el producto de $y$ por el punto buscado dé $1$.

### 8.3 Adelanto: la raíz cuadrada con regla y compás

Como anticipo (no demostrado con los axiomas vistos, solo ilustrado
geométricamente): dados $O$ (cero), $I$ (uno) y $X$ sobre la recta, se marca
el simétrico $J$ de $X$ respecto de $O$ (que representa $-1$ en la escala de
$X$). Tomando el segmento $JX$ como **diámetro de una circunferencia** y
trazando la perpendicular a la recta por $O$, el punto de intersección $Z$
con la circunferencia cumple

$$
OZ = \sqrt{OX},
$$

una construcción clásica basada en el teorema del cateto / ángulo inscrito en
semicircunferencia.

> **Cuidado**: esta construcción **no se puede justificar todavía** con los
> 15 axiomas vistos, porque la existencia de la raíz cuadrada es consecuencia
> del axioma de completitud (axioma 4), que se verá recién la próxima clase.
> Se muestra únicamente para ilustrar el punto de vista griego antiguo: sin
> notación algebraica para los irracionales, Euclides (por ejemplo, en la
> demostración de que hay infinitos primos) razonaba enteramente con figuras.

## 9. Axiomas de orden en detalle

### 9.1 Totalidad, transitividad, antisimetría

- **3.1 (total)**: dados $x,y$ cualesquiera, siempre se puede comparar:
  $x\le y$ o $y\le x$. Tomando $x=y$ se obtiene como caso particular la
  **reflexividad**: $x\le x$ para todo $x$.

  > No todo orden es total: la **inclusión entre conjuntos** es un orden
  > (transitivo, reflexivo, antisimétrico) que **no** es total — dados dos
  > conjuntos cualesquiera, no siempre uno está incluido en el otro. En
  > cambio, el orden de $\mathbb{R}$ sí es total, precisamente porque
  > corresponde a la disposición de puntos sobre una recta ("a la izquierda
  > de" siempre se puede decidir).

- **3.2 (transitivo)**: $x\le y$ y $y\le z \implies x\le z$.

- **3.3 (antisimétrico)**: $x\le y$ y $y\le x \implies x=y$.

  > Este es, según el docente, "quizás el axioma de orden más importante de
  > todo el universo": parte de hipótesis sobre el **orden** y concluye una
  > **igualdad**. Gracias a él aparece un **método nuevo para demostrar
  > igualdades** que no depende de manipulaciones algebraicas: para probar
  > $x=y$ basta mostrar por separado $x\le y$ **y** $y\le x$. Este recurso se
  > usará con mucha frecuencia más adelante en el curso.

### 9.2 Orden estricto y tricotomía

El orden estricto se define a partir del amplio (y viceversa):

$$
\boxed{x < y \ :\Longleftrightarrow\ x\le y \ \text{y} \ x\ne y}
\qquad\qquad
x \le y \iff (x<y \ \text{ó} \ x=y).
$$

De aquí se deducen las propiedades del orden estricto:

- **Irreflexividad**: nunca se cumple $x<x$.
- **Transitividad**: $x<y$ y $y<z \implies x<z$.
- **Tricotomía**: para todo par $x,y$, se cumple **exactamente una** de las
  tres opciones
$$
x<y \quad \text{ó} \quad x=y \quad \text{ó} \quad x>y,
$$
  y aquí el "ó" es, por primera vez en la clase, **exclusivo**.

La tricotomía permite clasificar a $\mathbb{R}$ en tres partes disjuntas:

$$
\boxed{\text{positivos } (x>0), \quad \text{negativos } (x<0), \quad \text{nulo } (x=0)}.
$$

## 10. Un aparte de lógica: la implicación material

Al discutir por qué la transitividad ($x<y \wedge y<z \implies x<z$) **no**
es un "si y solo si", surge la pregunta de por qué la implicación no se puede
invertir. El docente construye un contraejemplo con valores concretos:

$$
1 < -3 \quad \text{(falso)} \qquad -3 < 2 \quad \text{(verdadero)} \qquad \Longrightarrow \qquad 1<2 \quad \text{(verdadero)}.
$$

La hipótesis (falso $\wedge$ verdadero $=$ falso) implica la conclusión
(verdadero), y la implicación completa es **verdadera** —porque **lo falso
implica cualquier cosa**. Esto no es un capricho: es la definición estándar
de la implicación material, y sirve para entender por qué un enunciado
universal ($\forall x,y,z$) puede evaluarse como verdadero aun sustituyendo
valores que hacen falsa la hipótesis.

> Puntos remarcados explícitamente por el docente:
> - La matemática **no prohíbe lo falso**: una proposición puede ser
>   verdadera aunque contenga subfórmulas falsas, siempre que la implicación
>   global sea verdadera.
> - Si a la izquierda de un "$\implies$" hay algo falso, a la derecha puede
>   haber **cualquier cosa** (verdadero o falso) sin violar la implicación.
> - Lo verdadero, en cambio, **nunca puede implicar** lo falso — por eso la
>   recíproca de una implicación válida no tiene por qué cumplirse.

## 11. Orden compatible con la suma y con el producto

### 11.1 Suma: sin restricciones

Del axioma 3.4 (y su combinación con los demás) se obtiene una equivalencia
completa, sin ninguna condición sobre $z$:

$$
\boxed{x\le y \iff x+z \le y+z \iff x-z \le y-z, \quad \text{para todo } z}
$$

y, al tomar el opuesto, el orden se invierte:

$$
x\le y \iff -x \ge -y.
$$

Las mismas equivalencias valen con desigualdad estricta. El docente lo
resume como "la fiesta": sumar o restar una cantidad cualquiera a ambos
lados de una desigualdad **nunca** requiere verificar nada sobre esa
cantidad.

### 11.2 Producto: el origen del 90% de los errores

Con el producto la historia es distinta, y el docente es explícito: **"es
responsable del 90% de los errores de los estudiantes"** en Cálculo 1. La
tabla resume los casos, todos derivados del axioma 3.5 y de la tricotomía:

| Hipótesis sobre $z$ | Conclusión a partir de $x\le y$ |
|---|---|
| $z \ge 0$ | $xz \le yz$ (se conserva el sentido) |
| $z \le 0$ | $xz \ge yz$ (se **invierte** el sentido) |
| $z = 0$ | $xz = yz = 0$ (caso degenerado, ninguna desigualdad estricta sobreviene) |

Con desigualdad **estricta** el caso $z=0$ deja de ser inofensivo: si $x<y$
y $z=0$, entonces $xz=yz$ (una **igualdad**, no una desigualdad estricta), así
que la implicación estricta exige $z>0$ (estrictamente):

$$
\boxed{x<y \ \text{y} \ z>0 \implies xz<yz}
$$
$$
x<y \ \text{y} \ z<0 \implies xz>yz.
$$

> **Advertencia central de la clase, repetida varias veces**: nunca se debe
> multiplicar (ni dividir) una desigualdad por una cantidad sin **antes**
> declarar y justificar su signo. El docente insiste en que buena parte de
> las pruebas del primer parcial contendrá pasos de este tipo hechos sin esa
> verificación, y que es exactamente el tipo de error que hace perder el
> curso.

---

*Próxima clase: el axioma 4 (completitud), el que permite finalmente
justificar la existencia de $\sqrt{2}$, del ínfimo y del supremo.*
