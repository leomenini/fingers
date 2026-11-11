# Resumen Clase 24 — Resolución numérica de la ecuación de Laplace, inductancia mutua y fórmula de Neumann

## Índice

1. [Resolución numérica de la ecuación de Laplace](#1-resolución-numérica-de-la-ecuación-de-laplace)
   - [1.1 Por qué y para qué](#11-por-qué-y-para-qué)
   - [1.2 Discretizar: la grilla](#12-discretizar-la-grilla)
   - [1.3 La derivada segunda en diferencias finitas](#13-la-derivada-segunda-en-diferencias-finitas)
   - [1.4 Laplace discretizada](#14-laplace-discretizada)
   - [1.5 Interpretación: el promedio de los vecinos](#15-interpretación-el-promedio-de-los-vecinos)
   - [1.6 Resolución iterativa](#16-resolución-iterativa)
   - [1.7 El programa y los resultados](#17-el-programa-y-los-resultados)
2. [Inductancia mutua](#2-inductancia-mutua)
   - [2.1 Repaso](#21-repaso)
   - [2.2 Ejemplo: dos bobinados en el mismo solenoide](#22-ejemplo-dos-bobinados-en-el-mismo-solenoide)
   - [2.3 Cota y coeficiente de acoplamiento](#23-cota-y-coeficiente-de-acoplamiento)
3. [Fórmula de Neumann](#3-fórmula-de-neumann)
   - [3.1 Deducción](#31-deducción)
   - [3.2 Consecuencias](#32-consecuencias)
   - [3.3 ¿Y para la autoinductancia?](#33-y-para-la-autoinductancia)
4. [Inductancias en serie y en paralelo](#4-inductancias-en-serie-y-en-paralelo)
   - [4.1 En serie](#41-en-serie)
   - [4.2 En paralelo](#42-en-paralelo)

---

## 1. Resolución numérica de la ecuación de Laplace

### 1.1 Por qué y para qué

El docente aprovecha que va adelantado respecto del práctico para un tema que
atraviesa todo el curso y que podía ir en cualquier momento. Durante el curso
dijo varias veces «llegado el caso, esto se mete en una computadora»; ahora
quiere mostrar concretamente cómo se resuelve un problema **que no es de
juguete**: la ecuación de Laplace con condiciones de borde cualesquiera, con
un programa de pocas líneas. Él lo programó en Fortran («un lenguaje
antidiluviano»), pero se puede hacer en Python o «hasta en una planilla de
cálculo».

Alcance:

- Laplace aparece en electrostática, en conducción estacionaria, en problemas
  magnéticos sin corriente y en otras ramas de la física.
- La mayor parte del método no es específico de Laplace: sirve, con variantes,
  para cualquier ecuación en derivadas parciales.
- Se trabaja en **dos dimensiones** sólo por comodidad (más fácil de
  representar, dos variables en lugar de tres); en tres dimensiones es casi
  idéntico.

$$\pdv[2]{\phi}{x} + \pdv[2]{\phi}{y} = 0 .$$

### 1.2 Discretizar: la grilla

Una computadora no maneja el continuo: hay que **discretizar**. Ejemplo de
problema: una caja con $\phi = 0$ en el borde (como una caja de metal) y, en
algún lugar del interior, una placa a potencial $\phi_0$. Sin ninguna simetría:
el tamaño y la ubicación del rectángulo interior son cualesquiera, y podría
haber varios.

> Son condiciones de **Dirichlet** (se da el potencial en los bordes). Con
> condiciones de **Neumann** (la componente normal del campo) también funciona;
> el docente no las programó.

Se arma una **grilla** regular de paso $a$, que incluye el borde (podría tener
pasos distintos en cada dirección), y se calcula el potencial sólo en sus
puntos; entre ellos se interpola. Para aproximar bien el continuo, $a$ tiene
que ser **chico frente a los tamaños característicos** del problema —en la
práctica, mucho más chico que el más chico de ellos—.

### 1.3 La derivada segunda en diferencias finitas

Desarrollo de Taylor alrededor de $x$:

$$f(x\pm a) = f(x) \pm a f'(x) + \frac{a^2}{2}f''(x) \pm \frac{a^3}{6}f'''(x) + \mathcal O(a^4).$$

Sumando las dos y restando $2f(x)$, se cancelan los términos en $f$, en $f'$ y
**también en $f'''$**:

$$f(x+a) + f(x-a) - 2f(x) = a^2 f''(x) + \mathcal O(a^4),$$

$$\boxed{\ f''(x) = \lim_{a\to0}\frac{f(x+a)+f(x-a)-2f(x)}{a^2}\ }$$

Con $a$ chico pero finito, el cociente es una **aproximación en diferencias
finitas** de la derivada segunda, con error de orden $a^2$ (en rigor
$a^2/\ell^2$, con $\ell$ una distancia característica).

> **Una aproximación mejor de lo esperable.** Como el término en $f'''$ se cancela
> solo, el error no es de orden $a$ sino $a^2$: con un paso de un décimo de los
> tamaños, el error es del orden del centésimo. No hacen falta grillas
> excesivamente finas; igual hay que testear que el resultado no dependa de la
> grilla.

### 1.4 Laplace discretizada

Lo mismo en $y$, y sumando:

$$\frac{1}{a^2}\Big[\phi(x+a,y)+\phi(x-a,y)+\phi(x,y+a)+\phi(x,y-a)-4\phi(x,y)\Big] = 0,$$

$$\boxed{\ \phi(x,y) = \frac14\Big[\phi(x+a,y)+\phi(x-a,y)+\phi(x,y+a)+\phi(x,y-a)\Big]\ }$$

**Ecuación de Laplace discretizada.** Se pasó de una ecuación en derivadas
parciales a ecuaciones **algebraicas**:

- hay una por cada punto **interior** de la grilla; en el borde no hay
  ecuación, el valor es dato;
- son **lineales**; parecen homogéneas, pero en los puntos vecinos al borde
  aparecen valores dados, así que no lo son;
- hay tantas ecuaciones como incógnitas.

Resolverlas por triangulación (eliminación de Gauss) es posible pero muy
ineficiente. La ecuación es **local**: cada punto sólo se relaciona con sus
vecinos, la matriz es casi toda ceros, y para eso hay métodos mejores.

> **Vale para cualquier ecuación.** Discretizar y reemplazar derivadas por
> diferencias finitas se puede hacer con cualquier ecuación en derivadas
> parciales —lineal o no, dependiente del tiempo o no—. Si la original no es
> lineal (Navier–Stokes, por ejemplo), las ecuaciones resultantes tampoco,
> pero siguen siendo algebraicas.

### 1.5 Interpretación: el promedio de los vecinos

La ecuación discretizada dice que **el potencial en cada punto es el promedio
de sus cuatro vecinos más cercanos**. Es otra manera de pensar la ecuación de
Laplace, independiente de la resolución numérica: en cada lugar, Laplace está
promediando lo que le pasa con sus vecinos.

### 1.6 Resolución iterativa

Se parte de una **solución inventada**, buena o disparatada. Por ejemplo,
$\phi = 0$ en todo el interior salvo en la placa, donde vale $\phi_0$. Después:

1. Se reemplaza cada punto interior por el **promedio de sus vecinos** del paso
   anterior.
2. La nueva función tampoco cumple Laplace (los promedios se calcularon con los
   valores viejos), así que se repite.
3. Se itera hasta que la diferencia entre un paso y el siguiente sea
   despreciable.

**Interpretación física.** Laplace es la solución estacionaria de la ecuación
del calor. Es como un cuarto a temperatura ambiente («cero») en el que de golpe
se pone una estufa caliente: el calor se desparrama paso a paso hasta
estabilizarse. Cada iteración propaga «una película» alrededor de la zona no
nula.

> **Converge**, aun partiendo de soluciones disparatadas. El docente afirma que
> se puede probar y que tiene una interpretación física linda, y no lo prueba.

**Cuánto iterar.** No tiene sentido pedir a la iteración un error menor que el
de la discretización: si ésta da un 1 %, no vale la pena converger al 1 por
mil.

**Una variante.** En lugar de calcular todos los promedios con el paso
anterior, se puede recorrer la grilla reemplazando cada punto por el promedio
**ya actualizado** de sus vecinos. Ya no se interpreta como propagación del
calor (los puntos no se tratan a iguales tiempos), pero converge igual, a otra
velocidad.

| Paso | Qué se hace |
| --- | --- |
| 1 | Discretizar el dominio en una grilla |
| 2 | Reemplazar las derivadas por diferencias finitas |
| 3 | Resolver las ecuaciones algebraicas: para Laplace, iterando promedios desde una solución inventada |

### 1.7 El programa y los resultados

El programa guarda dos arreglos: $\phi$ (el paso actual) y $\phi'$ (el
siguiente). En cada iteración recorre los puntos **interiores** —sin tocar el
borde ni la región de potencial fijo—, asigna a $\phi'$ el promedio de los
vecinos en $\phi$, y luego llama $\phi$ a lo que era $\phi'$.

Dos condiciones de borde mostradas, en una grilla cuadrada de 300 puntos por
lado:

- **un círculo** a potencial 1, centrado en el punto $(100,100)$, con la
  condición $(i-100)^2+(j-100)^2<2500$, y 0 en el borde exterior;
- **un rectángulo** a potencial 1 (entre las coordenadas 35 y 55 en $x$ y 60 y
  70 en $y$), y 0 en el resto.

Cambiar la condición de borde es cambiar dos líneas. Se muestran la condición
inicial en 3D, las equipotenciales y la superficie $\phi(x,y)$: vale 1 en el
rectángulo y cae hacia 0 en los bordes. Según el docente, las curvas tras 10 y
tras 20 iteraciones son indistinguibles: la solución está convergida.

> El código y las gráficas se ven en pantalla y no están en la transcripción;
> los números de iteraciones son los que se dicen en clase.

En tres dimensiones cambia muy poco: en lugar de 4 vecinos hay 6, y el factor
$\tfrac14$ pasa a ser $\tfrac16$. Lo que da más trabajo es representar el
resultado (cortes, superficies de nivel, colores).

> La superficie del rectángulo es también un **tambor de borde cuadrado con un
> taco**, «bastante realista». Las ecuaciones de este tipo aparecen en
> elasticidad, fluidos y transmisión de calor; ésta es la más simple, y los
> métodos se generalizan a problemas mucho más difíciles. Lo que se hace en el
> curso no son sólo problemas de juguete diseñados para poder resolverlos a
> mano.

---

## 2. Inductancia mutua

### 2.1 Repaso

Con varias bobinas cercanas, rígidas y en materiales lineales,

$$\mathcal{E}_i = -\sum_j M_{ij}\,\frac{dI_j}{dt},
\qquad M_{ij} = \frac{d\Phi_{ij}}{dI_j},$$

con $\Phi_{ij}$ el flujo que la bobina $j$ genera en la bobina $i$. Los
$M_{ij}$ con $i\neq j$ son las **inductancias mutuas**; los $M_{ii} = L_i$, las
**autoinductancias**.

**Propiedad** (se prueba en §3):

$$\boxed{\ M_{ij} = M_{ji}\ }$$

### 2.2 Ejemplo: dos bobinados en el mismo solenoide

Un tubo (de plástico: sin material magnético) de sección $A$ y largo $\ell$,
con **dos bobinados** superpuestos: el 1, con $N_1$ vueltas y corriente $I_1$,
y el 2, con $N_2$ vueltas y corriente $I_2$. «Bobina» no es el lugar, sino el
cableado.

**Campo y flujos del bobinado 1.** Es un solenoide ideal:

$$B_1 = \mu_0\,\frac{N_1}{\ell}\,I_1,
\qquad
\Phi_{11} = N_1 B_1 A = \mu_0\frac{N_1^2 A}{\ell}\,I_1,
\qquad
\Phi_{21} = N_2 B_1 A = \mu_0\frac{N_1 N_2 A}{\ell}\,I_1 .$$

**Lo mismo para el 2:**

$$B_2 = \mu_0\,\frac{N_2}{\ell}\,I_2,
\qquad
\Phi_{12} = N_1 B_2 A = \mu_0\frac{N_1 N_2 A}{\ell}\,I_2,
\qquad
\Phi_{22} = \mu_0\frac{N_2^2 A}{\ell}\,I_2 .$$

**Inductancias**, derivando cada flujo respecto de la corriente que lo genera:

| | Valor |
| --- | --- |
| $L_1 = M_{11}$ | $\mu_0 N_1^2 A/\ell$ |
| $L_2 = M_{22}$ | $\mu_0 N_2^2 A/\ell$ |
| $M_{12} = M_{21}$ | $\mu_0 N_1 N_2 A/\ell$ |

La simetría $M_{12} = M_{21}$ se cumple, y acá es casi obvia: el problema es
simétrico al intercambiar los bobinados.

### 2.3 Cota y coeficiente de acoplamiento

Para **dos** bobinas hay una sola mutua, $M = M_{12} = M_{21}$, y se cumple
siempre (se prueba más adelante):

$$\boxed{\ M^2 \le L_1 L_2\ }$$

> El docente escribe primero $\sqrt{L_1L_2}$ del lado derecho y se corrige: es
> el producto.

Las autoinductancias son positivas. La mutua, **tal como está definida
hasta ahora**, puede tener cualquier signo.

En el ejemplo vale la **igualdad**: $M^2 = L_1 L_2$. Es la mutua máxima posible,
porque los dos bobinados comparten **todo** el campo: «son siamesas». Si los
solenoides se superpusieran sólo en parte, habría campo no compartido. Se define
el **coeficiente de acoplamiento**

$$k = \frac{M}{\sqrt{L_1 L_2}},\qquad |k|\le 1,$$

que mide cuánto interactúan las bobinas: cero si están muy alejadas, máximo si
están superpuestas, y todo lo intermedio.

> **Cuándo $M$ es negativa.** Si uno de los bobinados se enrolla en sentido
> opuesto: el acoplamiento sigue siendo máximo, pero «para el otro lado». Las
> $L$ siguen siendo positivas; la $M$ cambia de signo. Más adelante se verá una
> convención con las $M$ siempre positivas.

---

## 3. Fórmula de Neumann

### 3.1 Deducción

Sección 8.4. Bobinas en el **vacío**, entendido en sentido amplio: aire,
plástico, cualquier material sin propiedades magnéticas fuertes (dia- o
paramagnético), para el que se puede tomar $\mu = \mu_0$ —una diferencia de
$10^{-4}$ no importa—.

Dos curvas $C_1$ y $C_2$ con corrientes $I_1$ e $I_2$. Si un bobinado da varias
vueltas, se lo piensa como **una curva que da varias vueltas**: no hace falta
poner el número de espiras. Puede haber más bobinas; sólo interesan dos.

El campo que la 1 genera en la posición $\vec r_2$, como rotacional del
potencial vector:

$$\vec B_{21}(\vec r_2) = \nabla_2\times\left[\frac{\mu_0 I_1}{4\pi}\oint_{C_1}
\frac{d\vec r_1}{|\vec r_2-\vec r_1|}\right].$$

Su flujo a través de una superficie $S_2$ apoyada en $C_2$, por el teorema de
Stokes:

$$\Phi_{21} = \int_{S_2}\vec B_{21}\cdot\hat n\,dS_2
= \frac{\mu_0 I_1}{4\pi}\oint_{C_2}\oint_{C_1}
\frac{d\vec r_1\cdot d\vec r_2}{|\vec r_2-\vec r_1|}.$$

> En el pizarrón se olvidan primero $I_1$ y $\mu_0/4\pi$ («me olvidé de la
> corriente todo el tiempo, pobrecita») y se agregan después.

Derivando respecto de $I_1$:

$$\boxed{\ M_{21} = \frac{\mu_0}{4\pi}\oint_{C_1}\oint_{C_2}
\frac{d\vec r_1\cdot d\vec r_2}{|\vec r_2-\vec r_1|}\ }$$

**Fórmula de Neumann.**

### 3.2 Consecuencias

- **Otras bobinas no cambian la fórmula**: la mutua sólo se refiere al flujo
  que una bobina le hace a la otra.
- **Prueba la simetría $M_{ij} = M_{ji}$** automáticamente: la fórmula es
  simétrica en 1 y 2.
- **Depende de la distancia** entre puntos de una curva y de la otra, como
  preguntaba un estudiante. Si se alejan bobinas de tamaño fijo, la mutua
  tiende a cero, y **más rápido que $1/d$**: a primer orden quedaría $1/d$ por
  el producto de las integrales de línea de cada curva cerrada, que son nulas.
  Es la ausencia de término monopolar.

### 3.3 ¿Y para la autoinductancia?

En principio se podría usar con las dos integrales sobre la misma curva:

$$L = \frac{\mu_0}{4\pi}\oint_{C}\oint_{C}\frac{d\vec r\cdot d\vec r\,'}{|\vec r-\vec r\,'|},$$

pero hay una **singularidad** cuando los dos puntos coinciden. Se le puede dar
sentido regularizándola —los cables no son infinitamente finos, tienen
grosor—, pero da trabajo y no se hace. Para autoinductancias hay métodos más
cómodos; la fórmula es muy útil cuando las bobinas están separadas.

> El docente menciona que hay generalizaciones de la fórmula a materiales, y de
> la desigualdad a más de dos bobinas, más complicadas; no se ven.

---

## 4. Inductancias en serie y en paralelo

Con mutuas, la generalización de lo de Física III se complica, aun con dos
bobinas. Además, los bobinados tienen mucho cable y rara vez se puede despreciar
su **resistencia interna**, así que se la incluye.

### 4.1 En serie

Dos bobinas en serie, con resistencias internas $R_1$ y $R_2$,
autoinductancias $L_1$ y $L_2$ y mutua $M$ (de cualquier signo). Por las dos
pasa la misma corriente $I$. La diferencia de potencial entre los extremos,
bobina por bobina:

$$V = \underbrace{R_1 I + L_1\frac{dI}{dt} + M\frac{dI}{dt}}_{\text{bobina 1}}
+ \underbrace{R_2 I + L_2\frac{dI}{dt} + M\frac{dI}{dt}}_{\text{bobina 2}},$$

$$\boxed{\ V = (R_1+R_2)\,I + (L_1+L_2+2M)\,\frac{dI}{dt}\ }$$

Se comporta como **una única bobina**, con $R = R_1+R_2$ y
$L = L_1+L_2+2M$. Sin mutua se recupera la suma de Física III.

### 4.2 En paralelo

Entra $I$ y se divide: $I = I_1 + I_2$ (ley de los nudos, válida en todo
instante y por lo tanto también para las derivadas). La diferencia de potencial
se calcula por cualquiera de las dos ramas:

$$V = R_1 I_1 + L_1\frac{dI_1}{dt} + M\frac{dI_2}{dt},
\qquad
V = R_2 I_2 + L_2\frac{dI_2}{dt} + M\frac{dI_1}{dt}.$$

La novedad respecto de Física III: lo que pasa por una rama depende de la
corriente de la otra, y al revés.

> **En general no se comporta como una bobina.** No se puede despejar $V$ como
> una constante por $I$ más otra por $dI/dt$: aparecen a la vez corrientes y
> derivadas de las dos ramas, y la solución de la ecuación diferencial mezcla
> exponenciales con tiempos distintos.

**Bobinas ideales** ($R_1, R_2$ despreciables). Ahora sólo aparecen derivadas y
las ecuaciones son **algebraicas** en $dI_1/dt$ y $dI_2/dt$. Resolviendo el
sistema:

$$V\,(L_2-M) = (L_1L_2-M^2)\,\frac{dI_1}{dt},
\qquad
V\,(L_1-M) = (L_1L_2-M^2)\,\frac{dI_2}{dt}.$$

Sumando y usando $I = I_1+I_2$:

$$V = \frac{L_1L_2-M^2}{L_1+L_2-2M}\,\frac{dI}{dt}
\quad\Longrightarrow\quad
\boxed{\ L_{\text{eq}} = \frac{L_1L_2-M^2}{L_1+L_2-2M}\ }$$

Con $M\to0$ se recupera la fórmula de Física III,
$L_{\text{eq}}^{-1} = L_1^{-1}+L_2^{-1}$.

| Conexión | Con resistencias internas | Bobinas ideales |
| --- | --- | --- |
| Serie | Una bobina: $L_1+L_2+2M$ | Ídem |
| Paralelo | No equivale a una bobina | $\dfrac{L_1L_2-M^2}{L_1+L_2-2M}$ |

*La próxima clase: energía almacenada en el campo magnético.*
