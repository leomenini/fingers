# Resumen Clase 25 — Energía magnética: corrientes, campo y fuerzas

## Índice

1. [Almacenar energía en un campo que no trabaja](#1-almacenar-energía-en-un-campo-que-no-trabaja)
2. [Energía en una bobina](#2-energía-en-una-bobina)
   - [2.1 Balance con una batería](#21-balance-con-una-batería)
   - [2.2 Forma general y forma lineal](#22-forma-general-y-forma-lineal)
3. [Energía de un conjunto de corrientes](#3-energía-de-un-conjunto-de-corrientes)
   - [3.1 El trabajo de las baterías](#31-el-trabajo-de-las-baterías)
   - [3.2 Un camino cómodo: subir todas las corrientes a la vez](#32-un-camino-cómodo-subir-todas-las-corrientes-a-la-vez)
   - [3.3 Ejemplos: una y dos bobinas](#33-ejemplos-una-y-dos-bobinas)
   - [3.4 Prueba de la cota de la inductancia mutua](#34-prueba-de-la-cota-de-la-inductancia-mutua)
4. [Densidad de energía magnética](#4-densidad-de-energía-magnética)
   - [4.1 De los flujos al potencial vector](#41-de-los-flujos-al-potencial-vector)
   - [4.2 De las corrientes a los campos](#42-de-las-corrientes-a-los-campos)
   - [4.3 El término de borde se anula](#43-el-término-de-borde-se-anula)
5. [Fuerzas y torques sobre circuitos rígidos](#5-fuerzas-y-torques-sobre-circuitos-rígidos)
   - [5.1 Balance de energía](#51-balance-de-energía)
   - [5.2 Sistema aislado: un caso poco interesante](#52-sistema-aislado-un-caso-poco-interesante)
   - [5.3 Corrientes constantes](#53-corrientes-constantes)
   - [5.4 Ejemplo: núcleo de hierro dulce que entra en un solenoide](#54-ejemplo-núcleo-de-hierro-dulce-que-entra-en-un-solenoide)

---

## 1. Almacenar energía en un campo que no trabaja

La idea parece rara de entrada. La potencia que una fuerza entrega a una carga
es $\vec F\cdot\vec v$, y la fuerza magnética es ortogonal a la velocidad: **la
fuerza magnética no trabaja**. ¿Cómo se almacena energía en un campo magnético?

Por la **inducción**: un campo magnético variable genera un campo eléctrico
inducido, y ése sí trabaja y puede dar o tomar energía de las cargas. Por eso,
como se sabe de Física III, para almacenar energía en una bobina hace falta que
las corrientes **cambien en el tiempo** durante el proceso.

Así como el condensador es el dispositivo típico para almacenar energía en un
campo eléctrico, la **bobina** o **inductor** lo es para el magnético. Pero
cualquier distribución de corrientes genera un campo y tiene una energía
asociada; la bobina es «particularmente llamadora» porque con muchas vueltas
concentra mucho campo en una región. Una sola espira almacena menos, con un
campo más desparramado.

---

## 2. Energía en una bobina

### 2.1 Balance con una batería

Una batería alimenta una bobina, representada como una bobina ideal de
autoinductancia $L$ en serie con su resistencia interna $R$. El trabajo de la
batería al mover una carga $dq$ es $V\,dq$, y la diferencia de potencial es la
caída en la resistencia más la FEM de la bobina, que por Faraday es
$d\Phi/dt$. Si la bobina es **rígida y lineal**, $d\Phi/dt = L\,dI/dt$:

$$V = R\,I + L\,\frac{dI}{dt}.$$

La energía por unidad de carga no depende sólo de la corriente, sino de su
derivada. Con $dq = I\,dt$:

$$dW_b = R I^2\,dt + L I\,\frac{dI}{dt}\,dt
= R I^2\,dt + d\!\left(\tfrac12 L I^2\right).$$

- $R I^2\,dt$: lo que se disipa por **efecto Joule**, ya conocido.
- $d(\tfrac12 L I^2)$: lo que se **acumula en la bobina**.

$$\boxed{\ U = \tfrac12 L I^2\ }$$

### 2.2 Forma general y forma lineal

El término de acumulación también se escribe como $I\,d\Phi$:

$$dW_b^{\text{(acum)}} = I\,d\Phi .$$

| Expresión | Validez |
| --- | --- |
| $I\,d\Phi$ | **General**: sale de Faraday sin suponer autoinductancia ni linealidad; vale, por ejemplo, con un núcleo no lineal |
| $d(\tfrac12 L I^2)$ | Sólo en el caso **lineal**: al derivar se trató a $L$ como constante. Si $L$ dependiera de $I$ habría que derivarla también |

La energía aportada a la bobina puede ir a dos lugares: a **energía almacenada**
o, en medios no lineales, a **pérdidas por histéresis**, un proceso
irreversible que depende de la historia. Eso «desborda los propósitos del
curso»: de acá en más se supone **medio lineal** (vacío, materiales no
magnéticos o hierro dulce, aproximadamente lineal).

---

## 3. Energía de un conjunto de corrientes

### 3.1 El trabajo de las baterías

Varias bobinas con corrientes $I_1, I_2, I_3,\dots$ Se ignora el efecto Joule
—siempre está, pero sólo se arrastra—: baterías ideales. El trabajo es la suma
sobre todas las bobinas, y el flujo en cada una se descompone en los flujos
generados por todas:

$$dW_b = \sum_i I_i\,d\Phi_i = \sum_{i,j} I_i\,d\Phi_{ij}.$$

Hasta acá es general. Para **bobinas rígidas** lo único que cambia es la
corriente, y para **medios lineales** $d\Phi_{ij} = M_{ij}\,dI_j$ con $M_{ij}$
constante:

$$dW_b = \sum_{i,j} M_{ij}\,I_i\,dI_j .$$

> **Por qué importa la linealidad.** Si el medio es lineal, la energía está
> bien definida y no depende del camino por el que se llegó a las corrientes
> finales: se puede elegir el que se quiera. Con histéresis, los $M$ dependen
> de las corrientes, el trabajo **depende del camino** y hay ciclos
> irreversibles, «como si hubiera un rozamiento» cuando las zonas del material
> se alinean con el campo.

### 3.2 Un camino cómodo: subir todas las corrientes a la vez

Como en el caso de los conductores cargados, se hacen crecer **todas las
corrientes proporcionalmente**:

$$I'_i = \alpha\,I_i,\qquad \alpha: 0\to1,\qquad dI'_j = I_j\,d\alpha .$$

$$U = \int_0^1 \sum_{i,j} M_{ij}\,(\alpha I_i)\,(I_j\,d\alpha)
= \sum_{i,j} M_{ij}\,I_i I_j\int_0^1\alpha\,d\alpha$$

$$\boxed{\ U = \frac12\sum_{i,j} M_{ij}\,I_i\,I_j\ }$$

Es la energía almacenada en un conjunto de **bobinas rígidas en medios
lineales**, interactuando entre sí. Si no fueran rígidas, parte del trabajo iría
a deformarlas (trabajo mecánico); si no fueran lineales, parte iría al proceso
irreversible de magnetización. Una magnetización lineal sí está incluida.

### 3.3 Ejemplos: una y dos bobinas

**Una bobina.** Un solo término, $M_{11} = L$: se recupera $U = \tfrac12 L I^2$.

**Dos bobinas.** Con $M_{11} = L_1$, $M_{22} = L_2$ y los dos términos cruzados,
que son iguales porque $M_{12} = M_{21} = M$:

$$\boxed{\ U = \tfrac12 L_1 I_1^2 + \tfrac12 L_2 I_2^2 + M\,I_1 I_2\ }$$

### 3.4 Prueba de la cota de la inductancia mutua

La cota enunciada la clase pasada sale de un argumento físico: con las
corrientes apagadas no hay energía almacenada (nivel cero), y para llegar a
cualquier par de corrientes hubo que **aportar** energía. Entonces

$$U(I_1, I_2)\ \ge\ 0 \qquad\text{para todo } I_1, I_2 .$$

> Esta expresión **no es manifiestamente positiva**: con $M$ arbitraria podría
> ser negativa. Que tenga que serlo es la propiedad física, y de ahí sale la
> cota.

Se fija $I_2$ y se mira $f(I_1) = U(I_1, I_2)$. Si $U\ge0$ variando todo, en
particular el mínimo de $f$ es $\ge0$. Derivando:

$$f'(I_1) = L_1 I_1 + M I_2 = 0
\quad\Longrightarrow\quad
I_1^{\min} = -\frac{M}{L_1}\,I_2 .$$

Sustituyendo, todos los términos quedan proporcionales a $I_2^2$:

$$f(I_1^{\min}) = I_2^2\left(\frac{M^2}{2L_1} + \frac{L_2}{2} - \frac{M^2}{L_1}\right)
= \frac{I_2^2}{2}\left(L_2 - \frac{M^2}{L_1}\right)\ \ge\ 0 .$$

Como $L_1 > 0$:

$$\boxed{\ M^2 \le L_1\,L_2\ }$$

La igualdad corresponde al acoplamiento total (los dos bobinados superpuestos
de la clase pasada); con bobinas alejadas $M$ puede ser cero, y hay todos los
casos intermedios.

---

## 4. Densidad de energía magnética

Sección 9.2. Igual que en el caso eléctrico la energía de los conductores
cargados podía pensarse almacenada en las cargas **o en el campo**, acá puede
pensarse almacenada en las corrientes o **en el campo magnético**. Se reescribe
$U$ como integral de volumen de una densidad.

Hipótesis: **medio lineal** y **corrientes localizadas** —hay una esfera finita
fuera de la cual no hay corrientes—, como en el desarrollo multipolar. Las
situaciones realistas son así: «no tenemos ningún cable que nos permita llevar
energía al fin del universo».

### 4.1 De los flujos al potencial vector

Como $\Phi_i = \sum_j M_{ij} I_j$,

$$U = \frac12\sum_i I_i\,\Phi_i .$$

Y el flujo por la superficie $S_i$ que se apoya en el circuito $C_i$, usando
$\vec B = \curl\vec A$ y el teorema de Stokes, es la circulación del potencial
vector:

$$\Phi_i = \int_{S_i}(\curl\vec A)\cdot\hat n\,dS = \oint_{C_i}\vec A\cdot d\vec l,
\qquad
U = \frac12\sum_i I_i\oint_{C_i}\vec A\cdot d\vec l .$$

Con la regla de siempre para pasar de circuitos a corrientes distribuidas,
$I\,d\vec l\to\vec J\,dV$ (imaginar el cable grueso como muchos cablecitos):

$$U = \frac12\int_V \vec A\cdot\vec J\;dV,$$

con $V$ un volumen que incluye todas las corrientes.

> A la pregunta de si la regla es una igualdad: es una **equivalencia**, una
> regla mnemotécnica; ninguna de las dos expresiones existe sola, siempre van
> multiplicadas por algo (acá por $\vec A$).

### 4.2 De las corrientes a los campos

Por Ampère en el material, $\vec J = \curl\vec H$, donde $\vec J$ es la
corriente **de conducción** (sin la de magnetización). Se usa la identidad

$$\div(\vec A\times\vec H) = \vec H\cdot(\curl\vec A) - \vec A\cdot(\curl\vec H)$$

> El docente la escribe primero con un signo mal y se lo corrigen. Bromea con
> que los profesores del práctico están enojados por el uso de Levi-Civita.

Despejando $\vec A\cdot\curl\vec H$ y usando $\curl\vec A = \vec B$:

$$U = \frac12\int_V \vec H\cdot\vec B\;dV
\;-\; \frac12\oiint_S (\vec A\times\vec H)\cdot\hat n\,dS,$$

con $S$ el borde de $V$. Integrar en una región más grande que la de las
corrientes no cambia nada («quien puede más puede menos»).

El primer término recuerda al eléctrico, $\tfrac12\vec D\cdot\vec E$ (en el
vacío, $\tfrac12\varepsilon_0E^2$), y en el vacío da el $B^2/2\mu_0$ de Física
III. Hay además, como allá, un **término de borde**.

### 4.3 El término de borde se anula

Como en el caso eléctrico, se toma $S$ una esfera de radio $R\to\infty$. Para
corrientes localizadas, por el desarrollo multipolar:

| Cantidad | Decaimiento | Por qué |
| --- | --- | --- |
| $|\vec A|$ | $1/R^2$ | No hay término monopolar |
| $|\vec B|$, $|\vec H|$ | $1/R^3$ | Rotacional de $\vec A$; $\vec H\propto\vec B$ en medio lineal |
| Área de $S$ | $R^2$ | |
| Término de borde | $1/R^3$ | $\to 0$ |

Tiende a cero, y más rápido que en el caso eléctrico, donde el potencial iba
como $1/R$ y $\vec D$ como $1/R^2$, y el término de borde decrecía como $1/R$.
Integrando sobre todo el espacio:

$$\boxed{\ U = \frac12\int_{\text{todo el espacio}}\vec H\cdot\vec B\;dV,
\qquad u_B = \frac12\,\vec H\cdot\vec B\ }$$

Vale también con varias zonas lineales distintas (vacío, $\mu_1$, $\mu_2$…),
usando en cada una su permeabilidad. Con un único medio, $\vec B = \mu\vec H$:

$$u_B = \frac{B^2}{2\mu},$$

que en el vacío es la fórmula de Física III.

> **Regla mnemotécnica.** Del caso eléctrico al magnético, $\vec E\to\vec B$ y
> $\vec D\to\vec H$: de $\tfrac12\vec E\cdot\vec D$ a $\tfrac12\vec B\cdot\vec H$.

> En medios no lineales la noción misma de energía magnética es complicada:
> hay una energía potencial asociada, pero también disipación por histéresis,
> y el trabajo depende del camino.

---

## 5. Fuerzas y torques sobre circuitos rígidos

Sección 9.3. Como en el caso eléctrico (un dieléctrico que entra en un
condensador), se calculan fuerzas y torques a partir de la energía cuando una
parte del sistema se puede mover respecto de otra. Ejemplo típico: un solenoide
con un núcleo de **hierro dulce** (para que sea aproximadamente lineal)
parcialmente adentro. El sistema ya no es rígido, pero lo visto se aplica.

### 5.1 Balance de energía

El trabajo mecánico en un desplazamiento $d\vec l$ de una parte respecto de la
otra sale de dos aportes: la batería y la energía almacenada.

$$\vec F\cdot d\vec l = dW_b - dU .$$

### 5.2 Sistema aislado: un caso poco interesante

Sin batería, $dW_b = 0$ y $\vec F = -\grad U$, como en el caso eléctrico
aislado. Pero acá **no es interesante**: sin batería, por el efecto Joule, las
corrientes tienden a cero muy rápido. En el caso eléctrico las cargas
electrostáticas no se disipan, y las fuerzas sobreviven sin que nadie aporte
energía.

### 5.3 Corrientes constantes

El caso realista: las baterías aportan energía de modo que **las corrientes se
mantienen constantes** (el análogo de las baterías que mantenían los potenciales
fijos en el caso eléctrico). Entonces sólo varían los flujos:

$$dW_b = \sum_i I_i\,d\Phi_i,
\qquad
dU = \frac12\sum_i I_i\,d\Phi_i
\quad\Longrightarrow\quad
\boxed{\ dW_b = 2\,dU\ }$$

Igual que en el caso eléctrico a potencial fijo, la batería aporta el doble de
lo que varía la energía almacenada. Entonces $\vec F\cdot d\vec l = 2dU - dU = dU$:

$$\boxed{\ \vec F = +\left(\grad U\right)_{I},
\qquad \tau_n = +\left(\pdv{U}{\theta}\right)_{I}\ }$$

con $\tau_n$ el torque según un eje $\hat n$ y $\theta$ el ángulo de rotación
alrededor de él. Siempre en medio lineal.

> **El signo «raro».** En mecánica la fuerza es menos el gradiente de la
> energía potencial cuando ésa es la única fuente de energía. Acá hay dos
> aportes, y la batería, al mantener fijas las corrientes, compensa justo el
> signo.

### 5.4 Ejemplo: núcleo de hierro dulce que entra en un solenoide

Un solenoide ideal de largo $\ell$, sección $A$ y $N$ vueltas, con corriente
$I$. Un núcleo de hierro dulce lineal, de permeabilidad $\mu$, ocupa un tramo de
largo $x$; el resto, de largo $\ell - x$, es vacío.

> El docente cambia a mitad de camino las $L$ mayúsculas de los largos por
> minúsculas, para no confundirlas con autoinductancias.

**Aproximación.** Si $x$ y $\ell - x$ son mucho mayores que el radio del
solenoide, se desprecian los efectos de borde —dos veces: al usar el campo del
solenoide ideal y al calcular la energía—. Las zonas mal descritas son chicas,
aportan poco, y además lo que aportan casi no depende de $x$.

En cada zona $H = N I/\ell$ (las vueltas por unidad de largo son las mismas), y

$$B_0 = \mu_0\frac{N}{\ell}I,\qquad B_1 = \mu\frac{N}{\ell}I .$$

Con $u = B^2/2\mu$ por el volumen de cada zona:

$$U = \frac{B_0^2}{2\mu_0}\,A\,(\ell-x) + \frac{B_1^2}{2\mu}\,A\,x
= \frac{I^2 N^2 A}{2\ell^2}\Big[\mu_0\,(\ell-x) + \mu\,x\Big].$$

A corriente constante, la fuerza en la dirección de $x$ creciente:

$$\boxed{\ F_x = \pdv{U}{x} = \frac{I^2 N^2 A}{2\ell^2}\,(\mu-\mu_0)\ }$$

Como $\mu > \mu_0$, $F_x > 0$: **el núcleo es atraído hacia adentro** del
solenoide.

*La próxima clase: circuitos con resistencias, inductancias y condensadores.*
