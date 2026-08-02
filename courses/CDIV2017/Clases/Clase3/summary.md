# Resumen Clase 3 — Funciones: definición, dominio implícito, operaciones, inyectividad/sobreyectividad/biyectividad e inversa

## Índice

1. [La definición de función: dominio, codominio y regla](#1-la-definición-de-función-dominio-codominio-y-regla)
2. [Notación estándar y la intuición de "máquina"](#2-notación-estándar-y-la-intuición-de-máquina)
3. [Buenas y malas definiciones: cuidado con el dominio](#3-buenas-y-malas-definiciones-cuidado-con-el-dominio)
4. [Definición por casos](#4-definición-por-casos)
   - [4.1 Valor absoluto](#41-valor-absoluto)
   - [4.2 Función signo](#42-función-signo)
   - [4.3 Una definición "peligrosa" que igual funciona](#43-una-definición-peligrosa-que-igual-funciona)
5. [Dominio implícito en funciones numéricas](#5-dominio-implícito-en-funciones-numéricas)
6. [Definición implícita de una función](#6-definición-implícita-de-una-función)
   - [6.1 La raíz cuadrada como definición implícita](#61-la-raíz-cuadrada-como-definición-implícita)
   - [6.2 La parte entera](#62-la-parte-entera)
   - [6.3 El axioma de elección (mención)](#63-el-axioma-de-elección-mención)
7. [Vocabulario: imagen y preimagen](#7-vocabulario-imagen-y-preimagen)
8. [Representaciones de una función](#8-representaciones-de-una-función)
9. [Operaciones sobre funciones: identidad y composición](#9-operaciones-sobre-funciones-identidad-y-composición)
   - [9.1 La función identidad](#91-la-función-identidad)
   - [9.2 Composición de funciones](#92-composición-de-funciones)
   - [9.3 Neutralidad de la identidad y asociatividad](#93-neutralidad-de-la-identidad-y-asociatividad)
   - [9.4 La composición no es conmutativa](#94-la-composición-no-es-conmutativa)
10. [Funciones inyectivas, sobreyectivas y biyectivas](#10-funciones-inyectivas-sobreyectivas-y-biyectivas)
    - [10.1 Inyectividad y el contrarrecíproco](#101-inyectividad-y-el-contrarrecíproco)
    - [10.2 Sobreyectividad](#102-sobreyectividad)
    - [10.3 Biyectividad: ejemplos con diagramas](#103-biyectividad-ejemplos-con-diagramas)
11. [La función inversa](#11-la-función-inversa)

---

## 1. La definición de función: dominio, codominio y regla

El docente retoma el hilo de la clase anterior ("conjuntos y funciones") y anuncia que esta es la última clase antes de empezar con los números reales. El tema del día es exclusivamente **funciones**.

La definición de partida es que una función queda determinada por **tres datos**:

1. Un **dominio**, escrito $\mathrm{Dom}(f)$: el conjunto de partida. Todo lo que se "entregue" a la función debe pertenecer a él.
2. Un **codominio**, escrito $\mathrm{Cod}(f)$: el conjunto donde caen las salidas.
3. Una **definición** (regla de asignación) de la forma
$$f(x) = \text{expresión que puede depender de } x,$$
tal que para todo $x$ en el dominio la expresión $f(x)$ sea **bien definida** y pertenezca al codominio.

Un matiz importante: la regla **puede no depender realmente de $x$** (una función puede ser constante) y **puede darse por casos** — ambas posibilidades se retoman más adelante en la clase.

> El profesor deja explícitamente sin definir con precisión qué significa "bien definida" ("nunca definí lo que significa ser bien definido, pero vamos a aceptar esta definición parcial"). Es una noción que se maneja de manera intuitiva y se precisa caso a caso con los ejemplos.

## 2. Notación estándar y la intuición de "máquina"

La notación que se privilegiará de ahora en más (en lugar de escribir $\mathrm{Dom}(f)$ y $\mathrm{Cod}(f)$ por separado) es
$$f : A \to B,$$
que se lee "$f$ es una función de $A$ en $B$": el dominio es $A$, el codominio es $B$.

La intuición central que propone el docente es que **una función es una máquina**: tiene una entrada ($x$) y una salida ($f(x)$); $x$ debe pertenecer al dominio y la respuesta siempre pertenece al codominio. Traza una analogía con la informática: es la visión "de los años 60" de un programa (entregar datos, correr la máquina, esperar, obtener la respuesta), un modelo de "caja negra" que en matemática se conserva porque es conceptualmente muy simple — incluso para analizar un programa moderno, alcanza con considerar el teclado como parte de la entrada y la pantalla como parte de la salida.

En consecuencia, **definir una función exige dar tres cosas**: el formato de los datos de entrada (dominio), el formato de los datos de salida (codominio) y el algoritmo (la expresión), verificando que esté bien definida para todo $x$ del dominio.

## 3. Buenas y malas definiciones: cuidado con el dominio

El primer ejemplo es una **definición sencilla y correcta**:
$$f : \mathbb{R} \to \mathbb{R}, \qquad f(x) = x^3 - 3x + 1.$$
Se verifica que está bien definida tomando un $x \in \mathbb{R}$ cualquiera: $x^3$ siempre tiene sentido, $-3x$ también, sumar $1$ también, y el resultado es un número real — por lo tanto $f(x) \in \mathbb{R}$ siempre.

El segundo ejemplo es una **mala definición**, elegida deliberadamente porque el docente comenta que en la corrección de exámenes es un error frecuente:
$$f : \mathbb{R} \to \mathbb{R}, \qquad f(x) = \sqrt{x^2 - 1}.$$

El problema aparece cuando $-1 < x < 1$: ahí $x^2 - 1 < 0$ y la raíz cuadrada de un número negativo no tiene sentido en $\mathbb{R}$. Hay **dos lecturas posibles** del error, que llevan a la misma conclusión (la función está mal definida):

- **El dominio es incorrecto**: si se trabaja en $\mathbb{R}$, la raíz cuadrada nunca está definida para negativos, así que la expresión simplemente no tiene sentido cuando $x \in (-1,1)$.
- **El codominio es incorrecto**: se podría decir que la expresión siempre "tiene sentido" pero da un número complejo — en ese caso el error está en haber puesto $\mathbb{R}$ como codominio.

Como el curso no trabaja con números complejos, la corrección adoptada es **restringir el dominio**, no tocar el codominio:
$$f : (-\infty,-1] \cup [1,+\infty) \to \mathbb{R}, \qquad f(x) = \sqrt{x^2-1}.$$

> **Advertencia central de la sección**: el cuidado con el dominio de definición es "un punto especialmente importante en cálculo" al que el docente anuncia que va a volver más adelante en el curso.

## 4. Definición por casos

### 4.1 Valor absoluto

El primer ejemplo de **función definida por casos** es el valor absoluto. Antes de escribir la fórmula, el docente explica una convención de notación: cuando una operación **no tiene nombre en letras** (a diferencia de seno, coseno o logaritmo), se le da nombre reemplazando la variable por un punto o una barra: $|\cdot|$ indica dónde va el argumento.

La definición:
$$|\cdot| : \mathbb{R} \to \mathbb{R}, \qquad |x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x < 0 \end{cases}$$

Para que una definición por casos sea **correcta**, hay que verificar dos cosas:

1. **Los casos son disjuntos**: ningún número real puede ser a la vez $\geq 0$ y $< 0$ — no hay ambigüedad.
2. **Los casos cubren todo el dominio**: $\mathbb{R} = (-\infty, 0) \cup [0, +\infty)$, y estos dos subconjuntos son disjuntos y su unión da exactamente $\mathbb{R}$.

Cumplidas ambas condiciones, la definición es válida.

### 4.2 Función signo

El segundo ejemplo, con **tres casos**, es la función signo:
$$\mathrm{sgn} : \mathbb{R} \to \mathbb{R}, \qquad \mathrm{sgn}(x) = \begin{cases} 1 & \text{si } x > 0 \\ 0 & \text{si } x = 0 \\ -1 & \text{si } x < 0 \end{cases}$$

Aquí los tres subdominios son $\mathbb{R}^-$, $\{0\}$ y $\mathbb{R}^+$: disjuntos dos a dos y su unión reconstruye $\mathbb{R}$. Es una **función constante por trozos** (o "seccionalmente constante"): vale $-1$ en todos los negativos, salta a $0$ exactamente en $0$, y pasa a $1$ en los positivos. El docente describe su gráfica: un segmento en altura $-1$ para $x<0$ que **no alcanza** el punto $(0,-1)$ (extremo abierto), el punto aislado $(0,0)$, y un segmento en altura $1$ para $x>0$ que tampoco alcanza $(0,1)$.

### 4.3 Una definición "peligrosa" que igual funciona

El docente muestra qué pasa si, por simetría, se reescriben los casos del valor absoluto permitiendo que se **toquen** en $x=0$ (por ejemplo usando $x \geq 0$ en un caso y $x \leq 0$ en el otro). Ahora los dos subdominios **no son disjuntos**: se solapan en $x=0$.

> **Regla de decisión ante una definición por casos con solapamiento**: hay que verificar que la función dé **el mismo resultado** en la intersección. En $x=0$, ambas ramas de la definición dan $0$, así que —aunque sea una definición "peligrosa"— sigue siendo válida. El docente es explícito: *"si no están seguros, hay que quedarse en el caso donde los casos son disjuntos"*, es decir, evitar el solapamiento salvo que se controle bien la coherencia.

## 5. Dominio implícito en funciones numéricas

Se introduce una observación de notación muy usada en la práctica: para las **funciones numéricas** (dominio y codominio son conjuntos de números) es frecuente escribir solo
$$f(x) = \text{expresión}$$
sin precisar dominio ni codominio — el docente lo atribuye, con humor, a que "los matemáticos a veces son perezosos". Ante esa omisión, se adopta una **convención**:

- El **codominio**, en las funciones numéricas de este curso, siempre será $\mathbb{R}$ (no genera problema).
- El **dominio**, por convención, es
$$\boxed{\text{el conjunto más grande de } x \text{ para los cuales el lado derecho tiene sentido.}}$$

Esta convención se ejemplifica con una batería de casos, de menor a mayor dificultad:

| Expresión $f(x)$ | Dominio |
|---|---|
| $\dfrac{1}{x}$ | $\mathbb{R} \setminus \{0\}$ |
| $\sqrt{x}$ | $[0, +\infty)$ |
| $\ln(x)$ (o $\log$) | $(0, +\infty)$ |
| $\dfrac{1}{x^2-1}$ | $\mathbb{R} \setminus \{-1, 1\}$ |

Para el ejemplo de $\dfrac{1}{x^2-1}$, el razonamiento es: el único problema posible en una división es que el denominador se anule ("nunca dividirás por cero... sino guillotina", bromea el docente). Hay que resolver $x^2 - 1 = 0 \iff x = \pm 1$, y esos dos valores quedan excluidos.

Después se presenta un ejemplo deliberadamente **más difícil**: una función del tipo $f(x) = \dfrac{1}{P(x)}$ con $P$ un polinomio de tercer grado sin raíces expresables de forma sencilla. El docente no calcula las raíces exactas en vivo, pero razona **cualitativamente**: sabe que $P$ tiene tres raíces reales (por el signo de $P$ en un par de puntos de referencia, p. ej. evaluando en $0$), así que el dominio tendrá la forma $(-\infty,A) \cup (B,C) \cup (C',+\infty)$ (la forma exacta depende de dónde $P$ cambia de signo), con $A, B, C$ las tres raíces — que en general **no** son valores exactos fáciles de escribir, sino que requerirían aproximación numérica.

> **Advertencia pedagógica**: el propio docente señala que este último ejemplo es "una trampa del profesor": si un examen pide el dominio de una función así, es genuinamente difícil incluso para quien la escribe, porque exige resolver una ecuación de tercer grado. En los casos frecuentes del curso, en cambio, el dominio se calcula fácilmente.

## 6. Definición implícita de una función

Se presenta un segundo mecanismo para definir funciones, distinto de dar una fórmula explícita: la **definición implícita**. Su forma general:

> Sea $f : A \to B$ el único $y$ tal que $E(x,y)$,

donde $E(x,y)$ es un enunciado ("frase") que relaciona $x \in A$ con $y \in B$. Formalmente:
$$\forall x \in A,\ \exists! y \in B \text{ tal que } E(x,y).$$

**Para que esta definición sea legítima, hay que demostrar la propiedad** de existencia y unicidad — no se supone gratis. Una vez demostrado que a cada $x$ le corresponde un único $y$, queda definida automáticamente una función $f(x) := y$.

### 6.1 La raíz cuadrada como definición implícita

El primer ejemplo, elegido porque "ya lo conocen, pero en general no son conscientes de que ya lo conocen", es la **raíz cuadrada**:

$$\forall x \in [0,+\infty),\ \exists! y \in \mathbb{R} \text{ tal que } \big(y \geq 0 \ \text{y}\ y^2 = x\big).$$

El docente hace explícito **por qué hace falta la condición $y \geq 0$**: si solo se pidiera $y^2 = x$, en general hay **dos** soluciones (salvo en $x=0$, donde hay una sola), así que no se podría hablar de "el" $y$. Al restringir a soluciones no negativas, la solución es única. Esto permite definir formalmente
$$\sqrt{\cdot} : [0,+\infty) \to \mathbb{R},$$
donde $\sqrt{x}$ es, por definición, **la única solución no negativa** de la ecuación $y^2 = x$.

### 6.2 La parte entera

Segundo ejemplo, la **función parte entera**, notada con corchetes dobles $[\![x]\!]$ (o $\lfloor x \rfloor$):

$$\forall x \in \mathbb{R},\ \exists! y \in \mathbb{R} \text{ tal que } \big(y \in \mathbb{Z}\ \text{y}\ y \leq x < y+1\big).$$

El docente enuncia el resultado subyacente: dado un real $x$, siempre existe un entero $y$ que es simultáneamente el mayor entero menor o igual a $x$ (porque el "siguiente" entero ya se pasa de $x$). Formalmente:
$$\boxed{[\![x]\!] \in \mathbb{Z}, \qquad [\![x]\!] \leq x < [\![x]\!] + 1.}$$

### 6.3 El axioma de elección (mención)

El docente adelanta, sin desarrollarlo ("normalmente debería estar afuera del programa, pero quizás lo use a veces"), que la **unicidad** en una definición implícita es en realidad opcional si se acepta el **axioma de elección**: cuando para cada $x$ existe al menos un $y$ pero no necesariamente uno solo, el axioma garantiza que se puede "elegir" un $y$ para cada $x$, y eso también define una función. La **existencia**, en cambio, sigue siendo obligatoria: sin al menos un $y$ para cada $x$, no hay función posible.

## 7. Vocabulario: imagen y preimagen

Se introduce vocabulario básico sobre funciones, insistiendo en su **asimetría**: cada entrada tiene una única salida, pero dos entradas distintas pueden compartir la misma salida (ejemplo inmediato: $|3| = |-3|$).

Dada $f:A\to B$, si $y = f(x)$:

- se dice que $y$ es **la imagen** de $x$ por $f$ (con artículo determinado "la", porque siempre existe y es única);
- se dice que $x$ es **una preimagen** de $y$ por $f$ (con artículo "una", porque un elemento del codominio puede tener cero, una o varias preimágenes).

> **La asimetría es el punto central de esta sección**: la relación que induce una función va en una sola dirección de manera controlada (de $x$ a su imagen), pero al revés (de $y$ a sus preimágenes) puede haber cero, una o muchas. Las funciones donde esta relación inversa también es "buena" se llaman **biyecciones** (se retoman en la §10-11).

Se define además la **imagen** (o **recorrido**) de $f$, notada $\mathrm{Img}(f)$, como el subconjunto del codominio formado por los elementos que tienen **al menos una preimagen**:
$$\mathrm{Img}(f) = \{\, y \in B \mid \exists x \in A,\ y = f(x) \,\} = \{\, f(x) \mid x \in A \,\}.$$

Es una **definición por comprensión**, y por construcción $\mathrm{Img}(f) \subseteq B$.

## 8. Representaciones de una función

El docente enumera **tres representaciones** habituales de una función (particularmente útiles para el caso finito):

1. **Diagramas de Venn**: dos "nubes" $A$ y $B$ con flechas de cada elemento de $A$ a su imagen en $B$. Permite visualizar de un vistazo la asimetría: cada elemento de $A$ tiene **exactamente una** flecha saliente (si un elemento tuviera dos flechas, eso "no es una función", sino una **relación**); en cambio un elemento de $B$ puede recibir cero, una o varias flechas.
2. **Tablas de valores**: dos filas, la primera con los argumentos y la segunda con las imágenes correspondientes. El docente comenta, con ironía, que "los ingenieros nunca hacen diagramas de Venn porque no parecen serios", y que la tabla es la representación que sí usan — aunque para funciones finitas ambas son formalmente equivalentes.
3. **Gráficas**: solo tiene sentido para funciones numéricas. Por definición, la **gráfica** de $f:A\to B$ es
$$\mathrm{Gr}(f) = \{\, (x,y) \in A \times B \mid y = f(x) \,\},$$
un subconjunto del producto cartesiano que, vía la identificación entre pares de reales y puntos del plano, se visualiza como una curva. Se retoma el ejemplo $f(x) = x^3-3x+1$ de la §3 y se menciona el procedimiento habitual antes de dibujar: estudiar el dominio, construir una tabla de valores inicial, y estudiar continuidad/monotonía.

## 9. Operaciones sobre funciones: identidad y composición

Se presentan las dos operaciones que existen para **cualquier** función entre conjuntos abstractos (más adelante, con funciones numéricas, se agregarán suma, producto, etc.).

### 9.1 La función identidad

Para todo conjunto $A$ existe la **función identidad** en $A$:
$$\mathrm{id}_A : A \to A, \qquad \mathrm{id}_A(x) = x.$$
Es la función que "no cambia nada". Su gráfica, cuando $A=\mathbb{R}$, es la recta diagonal.

### 9.2 Composición de funciones

Dadas $f:A\to B$ y $g:B\to C$, se define la **compuesta** $g \circ f : A \to C$ por
$$(g \circ f)(x) := g\big(f(x)\big).$$

> **Cuidado con el orden de la notación** (el docente insiste en esto): aunque se escribe $g \circ f$, la función que se aplica **primero** es $f$, y **después** $g$. Esto viene directamente de la definición: para calcular $(g\circ f)(x)$ hay que evaluar primero $f(x)$ y recién después aplicarle $g$.

La analogía con circuitos: $f$ y $g$ son "máquinas" que se enchufan en cadena, y $g\circ f$ es la "supermáquina" resultante — con la salvedad de tener presente el orden invertido en la notación.

### 9.3 Neutralidad de la identidad y asociatividad

Con la analogía de circuitos ("la identidad es un cable: lo que entra sale idéntico"), se derivan dos propiedades para $f:A\to B$, $g:B\to C$, $h:C\to D$:

$$f \circ \mathrm{id}_A = f, \qquad \mathrm{id}_B \circ f = f,$$
es decir, **la identidad actúa como elemento neutro** de la composición; y
$$(h\circ g)\circ f = h\circ(g\circ f),$$
es decir, **la composición es asociativa** — no importa cómo se agrupen los paréntesis al componer tres o más funciones.

### 9.4 La composición no es conmutativa

Se dedica especial énfasis a una advertencia:

$$\boxed{g \circ f \neq f \circ g \ \ \text{en general.}}$$

Hay **dos razones** distintas por las que puede fallar la conmutatividad:

1. **Razón de dominios/codominios**: si $f:A\to B$ y $g:B\to C$, se puede formar $g\circ f$, pero para formar $f\circ g$ haría falta que la salida de $g$ (en $C$) fuera del tipo de entrada de $f$ (en $A$) — y si no hay vínculo entre $C$ y $A$, $f \circ g$ **ni siquiera está definida**. Muchas veces se puede componer en una sola dirección.
2. **Razón "de fondo", incluso cuando ambas composiciones existen** (los tres conjuntos coinciden, digamos todos $\mathbb{R}$): igual puede no haber conmutatividad. Contraejemplo trabajado en clase con $f,g:\mathbb{R}\to\mathbb{R}$, $f(x)=x^2$, $g(x)=x+1$:
$$(g\circ f)(x) = g(x^2) = x^2+1,$$
$$(f\circ g)(x) = f(x+1) = (x+1)^2 = x^2+2x+1.$$
Como $x^2+1 \neq x^2+2x+1$ (difieren en el término $2x$), las dos compuestas son funciones **distintas**.

> El docente advierte, con humor, que este es terreno fértil para "trampas gigantescas" y "oportunidades maravillosas para armar ejercicios de parcial que van a matar a toda la gente" — la recomendación es simplemente **tener siempre presente que, en general, son dos cosas distintas**.

## 10. Funciones inyectivas, sobreyectivas y biyectivas

### 10.1 Inyectividad y el contrarrecíproco

Una función $f:A\to B$ es **inyectiva** si objetos distintos del dominio tienen imágenes distintas:
$$\forall x, x' \in A,\quad x \neq x' \implies f(x) \neq f(x').$$

El docente muestra que esta definición es **lógicamente equivalente** a su contrarrecíproco:
$$\forall x, x' \in A,\quad f(x) = f(x') \implies x = x'.$$

La equivalencia se justifica invocando la regla general de la lógica: un enunciado $E \Rightarrow F$ es siempre equivalente a $\lnot F \Rightarrow \lnot E$ (el docente ilustra con el ejemplo clásico: "si llueve, voy al cine" equivale a "si no estoy en el cine, no llueve").

> **Recomendación práctica explícita**: en la práctica, para *demostrar* que una función es inyectiva conviene usar la segunda formulación (la del contrarrecíproco), porque parte de una **igualdad** — y "sabemos hacer un montón de cosas con igualdades", mientras que "en general no se sabe hacer muchas cosas con negaciones de igualdad".

### 10.2 Sobreyectividad

Una función $f:A\to B$ es **sobreyectiva** si todo elemento del codominio tiene **al menos una** preimagen, lo cual equivale exactamente a decir que la imagen coincide con todo el codominio:
$$\boxed{f \text{ sobreyectiva} \iff \mathrm{Img}(f) = B.}$$

Y $f$ es **biyectiva** si es a la vez inyectiva y sobreyectiva.

### 10.3 Biyectividad: ejemplos con diagramas

El criterio práctico que propone el docente, con diagramas de Venn dibujados en clase: contar, **para cada elemento del codominio, cuántas preimágenes tiene**.

- Si cada elemento del codominio tiene **a lo sumo una** preimagen → la función es inyectiva.
- Si cada elemento tiene **al menos una** → sobreyectiva.
- Si tiene **exactamente una** en todos los casos → biyectiva.

Se repasan cuatro diagramas ilustrativos:

| Situación (conteo de preimágenes por elemento de $B$) | Inyectiva | Sobreyectiva |
|---|---|---|
| Un punto con 5 preimágenes; otro con 0 | No | No |
| Cada punto con 0 o 1 preimagen (nunca más) | Sí | No |
| Un punto con 3 preimágenes; todos con $\geq 1$ | No | Sí |
| Cada punto con exactamente 1 preimagen | Sí | Sí (biyectiva) |

## 11. La función inversa

Solo en el caso biyectivo la noción de función se vuelve **simétrica**: cada elemento del dominio tiene una única imagen y, ahora también, cada elemento del codominio tiene una única preimagen. Esto corresponde a la idea de "circuito inversible": se puede invertir la función.

Si $f:A\to B$ es biyectiva, se define su **inversa** $f^{-1}:B\to A$ mediante una **definición implícita**:
$$f^{-1}(y) := \text{el único } x \in A \text{ tal que } f(x)=y.$$

Se verifican dos propiedades por construcción, con la misma analogía de circuitos ("dos circuitos que se anulan"):
$$\boxed{f^{-1}\circ f = \mathrm{id}_A, \qquad f\circ f^{-1} = \mathrm{id}_B.}$$

La primera identidad vive en $A$ (se parte del dominio, se llega al codominio vía $f$, y se regresa al dominio vía $f^{-1}$); la segunda vive en $B$, en el sentido inverso. Esta correspondencia también recibe el nombre de **recíproca**.

> El docente cierra la clase reconociendo que fue rápido en esta última parte y promete retomar todo — inyectividad, sobreyectividad, biyectividad, inversa — con más ejemplos en la clase siguiente. *La próxima clase (lunes) comienza el estudio de los números reales.*
