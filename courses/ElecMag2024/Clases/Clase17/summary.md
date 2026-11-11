# Resumen Clase 17 — Ley de Biot y Savart, ausencia de monopolos magnéticos y símbolo de Levi-Civita

## Índice

1. [De las fuerzas a las fuentes del campo](#1-de-las-fuerzas-a-las-fuentes-del-campo)
2. [Ley de Biot y Savart](#2-ley-de-biot-y-savart)
   - [2.1 Campo de una carga en movimiento](#21-campo-de-una-carga-en-movimiento)
   - [2.2 Densidad de corriente distribuida](#22-densidad-de-corriente-distribuida)
   - [2.3 Corriente en un cable](#23-corriente-en-un-cable)
3. [No hay monopolos magnéticos](#3-no-hay-monopolos-magnéticos)
   - [3.1 Enunciado](#31-enunciado)
   - [3.2 Demostración](#32-demostración)
4. [Paréntesis matemático: el símbolo de Levi-Civita](#4-paréntesis-matemático-el-símbolo-de-levi-civita)
   - [4.1 Definición](#41-definición)
   - [4.2 Producto vectorial y rotacional](#42-producto-vectorial-y-rotacional)
   - [4.3 Ejemplo: divergencia de un producto vectorial](#43-ejemplo-divergencia-de-un-producto-vectorial)
5. [Ejemplos de aplicación de Biot y Savart](#5-ejemplos-de-aplicación-de-biot-y-savart)
   - [5.1 Alcance: corrientes dadas](#51-alcance-corrientes-dadas)
   - [5.2 Cable recto muy largo](#52-cable-recto-muy-largo)
   - [5.3 Espira circular, campo sobre el eje](#53-espira-circular-campo-sobre-el-eje)
   - [5.4 Solenoide finito](#54-solenoide-finito)
   - [5.5 Corrección al solenoide ideal](#55-corrección-al-solenoide-ideal)

---

## 1. De las fuerzas a las fuentes del campo

La clase anterior trató las **fuerzas** que cargas en movimiento y corrientes
sienten en un campo magnético. Esta clase y la siguiente tratan lo otro: cómo
corrientes y cargas en movimiento **generan** campos magnéticos. La primera ley
es la de **Biot y Savart**, conocida de Física III, a la que ahora se le va a
sacar más jugo.

Contexto histórico, tal como lo cuenta el docente:

- El experimento mencionado la clase pasada (en el VTT, «Hertz»; ver la nota de
  la Clase 16) era **cualitativo**: mostraba que una corriente produce efectos
  magnéticos, sin números.
- El primero en estudiar **experimental y cuantitativamente** cómo las
  corrientes generan efectos magnéticos fue **Ampère**, alrededor de 1820.
- La expresión matemática general la dieron luego Biot y Savart.

> El docente dice que Biot y Savart no trabajaron juntos, que uno era inglés y
> el otro francés, y que por eso los manuales franceses y británicos nombran la
> ley distinto. Se registra como dicho en clase; no coincide con la historia
> habitual (ambos eran franceses y publicaron juntos), así que conviene no
> tomarlo como dato.

---

## 2. Ley de Biot y Savart

### 2.1 Campo de una carga en movimiento

Punto de partida, de la clase pasada: una carga $q_1$ en la posición $\vec r_1$
con velocidad $\vec v_1$ produce en $\vec r_2$ el campo

$$\vec B(\vec r_2) = \frac{\mu_0}{4\pi}\,q_1\,
\frac{\vec v_1\times(\vec r_2-\vec r_1)}{|\vec r_2-\vec r_1|^3} .$$

Pero el efecto de cargas individuales a velocidades normales es prácticamente
indetectable; lo que interesa son las corrientes en sistemas neutros.

### 2.2 Densidad de corriente distribuida

Se toma un conjunto de portadores con $N$ cargas por unidad de volumen. En un
volumen pequeño $dV$ en torno de $\vec r_1$ cada carga tiene su propia
velocidad, pero se las reemplaza a todas por la **velocidad de deriva**. El
campo que ese volumencito produce en $\vec r_2$ es el de una carga por el
número de cargas, $N\,dV$:

$$d\vec B(\vec r_2) = \frac{\mu_0}{4\pi}\;N\,dV\;q_1\,
\frac{\vec v_1\times(\vec r_2-\vec r_1)}{|\vec r_2-\vec r_1|^3} .$$

(Se supone un solo tipo de portador, como en un metal; si no, se suma sobre los
tipos.) Usando $\vec J(\vec r_1) = N\,q_1\,\vec v_1$ e integrando sobre todo el
volumen donde hay corriente:

$$\boxed{\ \vec B(\vec r_2) = \frac{\mu_0}{4\pi}\int_V
\frac{\vec J(\vec r_1)\times(\vec r_2-\vec r_1)}{|\vec r_2-\vec r_1|^3}\,dV_1\ }$$

**Ley de Biot y Savart para una densidad de corriente.**

### 2.3 Corriente en un cable

Lo habitual es que la corriente esté concentrada en cables. El pasaje se hizo
con las cuentas precisas la clase pasada (sección del cable, etc.); ahora se
usa como **regla mnemotécnica**, dimensionalmente correcta:

$$\vec J\,dV \;\longrightarrow\; I\,d\vec l .$$

La integral de volumen pasa a ser una integral de línea sobre la curva $C$ del
circuito (normalmente cerrada), y la corriente, que es la misma en todo el
cable, sale afuera:

$$\boxed{\ \vec B(\vec r_2) = \frac{\mu_0 I}{4\pi}\oint_C
\frac{d\vec l_1\times(\vec r_2-\vec r_1)}{|\vec r_2-\vec r_1|^3}\ }$$

**Ley de Biot y Savart para corrientes en cables**, la forma de Física III y la
que históricamente se midió: es muy difícil medir una distribución, lo que se
mide es corriente en cables.

> **Dominio de validez.** Para corrientes que no varían mucho en el tiempo, es
> la expresión general del campo magnético producido por una corriente y
> contiene, en principio, toda la información. Cuando las corrientes varían
> mucho aparecen efectos nuevos, que se verán más adelante.

---

## 3. No hay monopolos magnéticos

### 3.1 Enunciado

Las líneas de campo magnético se cierran sobre sí mismas o van al infinito, pero
**no terminan en un punto**. Es distinto del campo eléctrico, cuyas líneas salen
de las cargas positivas y terminan en las negativas. La ley de Gauss dice
$\nabla\cdot\vec E = \rho/\varepsilon_0$ en el vacío; si no hay monopolos
magnéticos, el equivalente de la densidad de carga es cero:

$$\boxed{\ \nabla\cdot\vec B = 0\ }$$

En Física III se escribía en forma integral: el flujo de $\vec B$ a través de
cualquier superficie cerrada es nulo. Por el teorema de la divergencia son
equivalentes, y la forma diferencial termina siendo más cómoda.

> **Es un hecho experimental.** Aunque acá se deduce de Biot y Savart, tiene que
> verificarse en el laboratorio. Los físicos se preguntan desde el siglo XIX si
> no habrá monopolos magnéticos: los teóricos «desearíamos» que los hubiera
> —explicarían varias cosas—, y los experimentales se empecinan en que no hay.
> Muchas teorías que generalizan el electromagnetismo predicen cierta densidad
> de monopolos en el universo, y fueron descartadas por eso.

### 3.2 Demostración

Se trabaja con la forma de volumen, que es menos singular (cualquier cable,
mirado de cerca, tiene una distribución). Se toma la divergencia respecto de
las coordenadas del punto de campo, $\nabla_2$ (derivadas en $x_2, y_2, z_2$).

Hace falta la divergencia de un producto vectorial:

$$\nabla\cdot(\vec F\times\vec G) = \vec G\cdot(\nabla\times\vec F) - \vec F\cdot(\nabla\times\vec G) .$$

> En estas fórmulas todo es «medio obvio» —es como la derivada de un producto y,
> para que cierren los vectores, uno de los factores tiene que ser un
> rotacional y el otro entrar con producto escalar— **salvo el signo**, porque
> el producto vectorial no es conmutativo. El truco de §4 es para no
> equivocarse en eso.

Con $\vec F = \vec J(\vec r_1)$ y
$\vec G = (\vec r_2-\vec r_1)/|\vec r_2-\vec r_1|^3$:

1. $\vec J(\vec r_1)$ no depende de $\vec r_2$, así que
   $\nabla_2\times\vec J(\vec r_1) = 0$: el primer término se anula.
2. Queda
   $$\nabla_2\cdot\vec B(\vec r_2) = -\frac{\mu_0}{4\pi}\int_V \vec J(\vec r_1)\cdot
   \left[\nabla_2\times\frac{\vec r_2-\vec r_1}{|\vec r_2-\vec r_1|^3}\right]dV_1 .$$
3. El corchete es el rotacional de algo proporcional al **campo eléctrico de
   una carga puntual**, que es cero; esa cuenta ya se hizo al estudiar Coulomb.

Por lo tanto $\nabla_2\cdot\vec B(\vec r_2) = 0$. ∎

Son dos las leyes fundamentales del campo magnético: la ausencia de monopolos,
que sale de tomar la **divergencia**, y la ley de Ampère, que saldrá la próxima
clase de tomar el **rotacional**.

---

## 4. Paréntesis matemático: el símbolo de Levi-Civita

Al docente le molesta ir introduciendo fórmulas de cálculo vectorial «sacadas
de la manga». La comparación es con la trigonometría, que en Física III reduce a
una única fórmula (la de Euler o de De Moivre). Acá hace lo mismo: **todas** las
fórmulas diferenciales del cálculo vectorial salen de una herramienta.

> El docente lo atribuye a «dos matemáticos italianos, Levi y Civita». Es una
> sola persona: Tullio Levi-Civita.

### 4.1 Definición

$\varepsilon_{ijk}$ es un símbolo con tres índices, cada uno con valores 1, 2
o 3 (las coordenadas cartesianas $x$, $y$, $z$), definido por dos propiedades:

$$\varepsilon_{123} = 1,
\qquad
\varepsilon_{ijk} = -\varepsilon_{jik} = -\varepsilon_{kji}
\quad\text{(completamente antisimétrico).}$$

Al intercambiar dos índices cualesquiera cambia de signo. Iterando, todos los
casos se reducen a esos.

| Caso | Valor | Por qué |
| --- | --- | --- |
| Índice repetido, p. ej. $\varepsilon_{113}$ | $0$ | Intercambiando los dos iguales es igual a menos sí mismo |
| Permutación par, p. ej. $\varepsilon_{231}$ | $+1$ | Dos intercambios desde 123 |
| Permutación impar, p. ej. $\varepsilon_{321}$, $\varepsilon_{132}$ | $-1$ | Un intercambio desde 123 |

### 4.2 Producto vectorial y rotacional

Sirve porque es una manera muy cómoda de escribir productos vectoriales. Todas
las sumas van de 1 a 3:

$$\boxed{\ (\vec a\times\vec b)_i = \sum_{j,k}\varepsilon_{ijk}\,a_j\,b_k\ }$$

El índice $i$ no está sumado: es un dato.

**Verificación para $i=3$.** $j$ y $k$ no pueden valer 3 ni ser iguales entre
sí (el símbolo se anularía), así que de toda la suma sobreviven dos términos:

$$(\vec a\times\vec b)_3 = \varepsilon_{312}\,a_1 b_2 + \varepsilon_{321}\,a_2 b_1
= a_1 b_2 - a_2 b_1,$$

que es la componente $z$ conocida. La fórmula no tiene ambigüedad: fijado $i$,
no hay opción para los otros dos.

Del mismo modo, para el rotacional:

$$(\nabla\times\vec v)_i = \sum_{j,k}\varepsilon_{ijk}\,\partial_j v_k .$$

La ventaja: $\partial_j$ es una **derivada común y silvestre** respecto de
$x_j$, no un operador vectorial; se la manipula con las reglas usuales.

> Está hecho en cartesianas, pero una fórmula **vectorial** probada en un
> sistema de coordenadas vale en cualquiera. Hay generalizaciones del símbolo a
> otros sistemas, más complicadas.

### 4.3 Ejemplo: divergencia de un producto vectorial

Se prueba la fórmula usada en §3.2. La divergencia es derivar cada componente
respecto de su coordenada y sumar:

$$\nabla\cdot(\vec F\times\vec G) = \sum_i \partial_i(\vec F\times\vec G)_i
= \sum_{i,j,k}\varepsilon_{ijk}\,\partial_i\!\left(F_j\,G_k\right),$$

donde $\varepsilon_{ijk}$, que es constante, salió de la derivada. Por la regla
del producto:

$$= \sum_{i,j,k}\varepsilon_{ijk}\left[(\partial_i F_j)\,G_k + F_j\,(\partial_i G_k)\right].$$

**Primer término.** Sumando en $i$ y $j$, los índices están en el orden
correcto: $\sum_{i,j}\varepsilon_{ijk}\,\partial_i F_j$ es, por permutación
circular, la componente $k$ del rotacional de $\vec F$. Queda
$\sum_k (\nabla\times\vec F)_k\,G_k$, que es la definición misma de producto
escalar:

$$\vec G\cdot(\nabla\times\vec F).$$

**Segundo término.** Acá los índices **no** están en el orden correcto: la
derivada y la componente de $\vec G$ quedan con el primero y el tercero, con el
de $\vec F$ en el medio. Se usa la antisimetría para intercambiar $i$ y $j$, lo
que agrega un signo:

$$\sum_{i,j,k}\varepsilon_{ijk}\,F_j\,\partial_i G_k
= -\sum_{i,j,k}\varepsilon_{jik}\,F_j\,\partial_i G_k
= -\,\vec F\cdot(\nabla\times\vec G).$$

Sumando:

$$\boxed{\ \nabla\cdot(\vec F\times\vec G)
= \vec G\cdot(\nabla\times\vec F) - \vec F\cdot(\nabla\times\vec G)\ }$$

> **Recomendación del docente.** «Esto es como ver al profesor de gimnasia hacer
> gimnasia: no sirve para nada.» Hay que rehacer la cuenta paso a paso. No hay
> nada conceptualmente difícil; es operatoria que se automatiza. Quien no
> quiera usarlo puede seguir calculando «a pedal», componente a componente.

---

## 5. Ejemplos de aplicación de Biot y Savart

### 5.1 Alcance: corrientes dadas

Tramo de repaso de Física III, hecho ahora «por fuerza bruta» con productos
vectoriales explícitos —no porque haga falta, sino como ejercitación, para que
el método se pueda generalizar.

Si las corrientes son **conocidas**, el problema magnético se reduce a hacer una
integral (analítica o, la mayoría de las veces, numérica).

> Eso no es toda la historia. Igual que en electrostática una esfera se
> polarizaba y había que resolver a la vez la distribución de carga, las
> propias corrientes pueden reaccionar al campo magnético. Esos problemas se
> tratan con métodos parecidos a los de Laplace, más adelante.

### 5.2 Cable recto muy largo

Cable sobre el eje $x$ con corriente $I$ constante; punto de observación sobre
el eje $y$ a distancia $a$ del origen.

$$\vec r_1 = x\,\hat\imath,\qquad \vec r_2 = a\,\hat\jmath,\qquad
d\vec l_1 = dx\,\hat\imath .$$

El producto vectorial es inmediato ($\hat\imath\times\hat\imath = 0$,
$\hat\imath\times\hat\jmath = \hat k$):

$$d\vec l_1\times(\vec r_2-\vec r_1) = dx\,\hat\imath\times(a\,\hat\jmath - x\,\hat\imath)
= a\,dx\,\hat k .$$

$$\vec B(\vec r_2) = \frac{\mu_0 I}{4\pi}\,\hat k\int_{-\infty}^{+\infty}
\frac{a\,dx}{\left(a^2+x^2\right)^{3/2}} .$$

El problema físico está resuelto; falta una integral. En Física III se vieron
otros trucos (seno hiperbólico, partes); acá se usa un **cambio a variable
angular**. Sea $\theta$ el ángulo, en el elemento de corriente, entre el cable
y la recta al punto de observación:

$$\sin\theta = \frac{a}{\sqrt{a^2+x^2}},
\qquad
x = -\,a\,\frac{\cos\theta}{\sin\theta}
\quad\Longrightarrow\quad
dx = \frac{a}{\sin^2\theta}\,d\theta .$$

Cuando $x\to-\infty$, $\theta\to0$; cuando $x\to+\infty$, $\theta\to\pi$ (el
docente discute los límites un rato con los estudiantes hasta fijarlos). Como
$\left(a^2+x^2\right)^{-3/2} = \sin^3\theta/a^3$:

$$\vec B = \frac{\mu_0 I}{4\pi a}\,\hat k\int_0^{\pi}\sin\theta\,d\theta
= \frac{\mu_0 I}{4\pi a}\,\hat k\,\Big[-\cos\theta\Big]_0^{\pi}$$

$$\boxed{\ \vec B = \frac{\mu_0 I}{2\pi a}\,\hat k\ }$$

Es el resultado conocido, que por Ampère sale en dos líneas. Se calculó en un
punto particular; al rotar el punto en torno del cable el campo rota con él:
las líneas son curvas cerradas alrededor del cable, en planos transversales.

### 5.3 Espira circular, campo sobre el eje

Espira de radio $R$ en el plano $xy$, con corriente $I$; punto de observación
sobre el eje $z$ a distancia $a$.

$$\vec r_2 = a\,\hat k,\qquad
\vec r_1 = R\,\hat e_r = R\left(\cos\theta\,\hat\imath + \sin\theta\,\hat\jmath\right),\qquad
d\vec l_1 = R\,d\theta\,\hat e_\theta = R\,d\theta\left(-\sin\theta\,\hat\imath + \cos\theta\,\hat\jmath\right).$$

Producto vectorial, término a término:

$$d\vec l_1\times(\vec r_2-\vec r_1)
= R\,d\theta\left(-\sin\theta\,\hat\imath+\cos\theta\,\hat\jmath\right)\times
\left(a\,\hat k - R\cos\theta\,\hat\imath - R\sin\theta\,\hat\jmath\right)$$

| Producto | Resultado |
| --- | --- |
| $-\sin\theta\,\hat\imath\times a\,\hat k$ | $a\sin\theta\,\hat\jmath$ |
| $-\sin\theta\,\hat\imath\times(-R\sin\theta\,\hat\jmath)$ | $R\sin^2\theta\,\hat k$ |
| $\cos\theta\,\hat\jmath\times a\,\hat k$ | $a\cos\theta\,\hat\imath$ |
| $\cos\theta\,\hat\jmath\times(-R\cos\theta\,\hat\imath)$ | $R\cos^2\theta\,\hat k$ |

$$d\vec l_1\times(\vec r_2-\vec r_1) = R\,d\theta\left[
a\left(\cos\theta\,\hat\imath + \sin\theta\,\hat\jmath\right) + R\,\hat k\right].$$

Como $\vec r_2$ es ortogonal al plano de la espira, por Pitágoras
$|\vec r_2-\vec r_1| = \sqrt{a^2+R^2}$, constante. Las integrales de
$\cos\theta$ y $\sin\theta$ entre $0$ y $2\pi$ se anulan; el término según
$\hat k$ es constante y da $2\pi$:

$$\boxed{\ \vec B = \frac{\mu_0 I}{2}\,\frac{R^2}{\left(a^2+R^2\right)^{3/2}}\,\hat k\ }$$

### 5.4 Solenoide finito

**Ejercicio propuesto** (el docente da el resultado y no hace la integral).
Solenoide de largo $L$, base circular de radio $R$, con $N$ espiras en total, o
sea $n = N/L$ espiras por unidad de longitud. **No** se lo supone infinito. La
aproximación de solenoide es que las espiras están tan pegadas que la distancia
entre ellas es despreciable; se lo trata como una suma de espiras, usando §5.3.

Con el origen en un borde y el punto de observación sobre el eje en
$\vec r_2 = z_0\,\hat k$, el campo es paralelo a $Oz$:

$$\boxed{\ B_z(z_0) = \frac{\mu_0\,n\,I}{2}\left[
\frac{L-z_0}{\sqrt{(L-z_0)^2+R^2}} + \frac{z_0}{\sqrt{z_0^2+R^2}}\right]\ }$$

Si el punto está adentro ($0<z_0<L$) y **lejos de los dos bordes**
($z_0\gg R$ y $L-z_0\gg R$), cada cociente vale 1 y se recupera el solenoide
ideal:

$$B_z = \mu_0\,n\,I .$$

### 5.5 Corrección al solenoide ideal

Se puede ir un poco más lejos y estimar el error. Con $z_0\gg R$, por Taylor:

$$\frac{z_0}{\sqrt{z_0^2+R^2}} = \left(1+\frac{R^2}{z_0^2}\right)^{-1/2}
= 1 - \frac12\,\frac{R^2}{z_0^2} + \mathcal O\!\left(\frac{R^4}{z_0^4}\right),$$

y lo mismo para el otro término con $z_0\to L-z_0$ (es el mismo cálculo). El
parámetro de desarrollo ya es cuadrático en $R$, así que el orden siguiente es
cuártico. Reemplazando:

$$\boxed{\ B_z(z_0) \simeq \mu_0\,n\,I\left[1 - \frac14\,\frac{R^2}{z_0^2}
- \frac14\,\frac{R^2}{(L-z_0)^2}\right]\ }$$

El primer término es el solenoide ideal; los otros dos, las primeras
correcciones. Muestran **cuándo la aproximación se vuelve mala**: al acercarse
a un borde ($z_0\to0$) o al otro ($L-z_0\to0$) la corrección explota.

> **Con números.** En el punto medio, $z_0 = L/2$, de un solenoide «bastante
> alargado», $L = 10R$: cada corrección es del 1 %, y el error total es del
> orden del **2 %**.

*La próxima clase: primero la delta de Dirac, postergada desde el principio del
curso, que permite vincular distribuciones continuas con cargas discretas; y
con ella, la ley de Ampère y su equivalencia con Biot y Savart.*
