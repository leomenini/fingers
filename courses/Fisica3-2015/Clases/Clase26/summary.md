# Resumen Clase 26 — Reflexión y Refracción: Leyes de Snell, Principios de Huygens y Fermat, Reflexión Total Interna

---

## Índice

1. [Planteo: reflexión y refracción en una frontera](#1-planteo-reflexión-y-refracción-en-una-frontera)
   - [1.1 Geometría y las dos leyes](#11-geometría-y-las-dos-leyes)
   - [1.2 Dependencia con la longitud de onda: dispersión](#12-dependencia-con-la-longitud-de-onda-dispersión)
   - [1.3 Tabla de índices de refracción](#13-tabla-de-índices-de-refracción)
   - [1.4 Alcance y simplificaciones](#14-alcance-y-simplificaciones)
2. [Deducción de la ley de Snell](#2-deducción-de-la-ley-de-snell)
   - [2.1 Continuidad de la onda en la frontera](#21-continuidad-de-la-onda-en-la-frontera)
   - [2.2 La distancia común d](#22-la-distancia-común-d)
   - [2.3 La frecuencia no cambia](#23-la-frecuencia-no-cambia)
   - [2.4 Cierre de la deducción](#24-cierre-de-la-deducción)
3. [Deducción de la ley de reflexión](#3-deducción-de-la-ley-de-reflexión)
4. [Principio de Huygens](#4-principio-de-huygens)
   - [4.1 Enunciado](#41-enunciado)
   - [4.2 Cómo se usa: el método gráfico](#42-cómo-se-usa-el-método-gráfico)
   - [4.3 Alcance y una objeción](#43-alcance-y-una-objeción)
5. [Principio de Fermat](#5-principio-de-fermat)
   - [5.1 Enunciado y contexto](#51-enunciado-y-contexto)
   - [5.2 Reflexión por tiempo mínimo](#52-reflexión-por-tiempo-mínimo)
   - [5.3 Refracción: el problema del salvavidas](#53-refracción-el-problema-del-salvavidas)
6. [Reflexión total interna](#6-reflexión-total-interna)
   - [6.1 El ángulo crítico](#61-el-ángulo-crítico)
   - [6.2 Fibra óptica](#62-fibra-óptica)
   - [6.3 Onda evanescente y reflexión total frustrada](#63-onda-evanescente-y-reflexión-total-frustrada)

---

## 1. Planteo: reflexión y refracción en una frontera

### 1.1 Geometría y las dos leyes

Dos medios con índices de refracción $n_1$ y $n_2$, separados por una frontera. Un
rayo incide desde el medio 1 formando un ángulo $\theta_1$ **con la normal**.
Parte de la onda **se refleja** con ángulo $\theta_2$ y parte **se transmite** al
medio 2 con ángulo $\theta_3$ (si ambos medios son transparentes).

Las dos leyes a demostrar:

$$\boxed{\ \theta_2 = \theta_1\ } \qquad \text{(ley de la reflexión)}$$

$$\boxed{\ n_1 \operatorname{sen}\theta_1 = n_2 \operatorname{sen}\theta_3\ }
\qquad \text{(ley de Snell, refracción)}$$

> **Sobre la notación.** La numeración de los ángulos resulta un poco incómoda
> ($1$ y $3$ en la misma fórmula), pero la regla es simple: **$n$ del medio por el
> seno del ángulo en ese mismo medio**. $\theta_3$ es el ángulo en el segundo
> medio. No hay que marearse con los números.

> **Frontera plana.** Se supone la frontera plana. Si es curva, basta con
> considerar **un trozo suficientemente pequeño**: localmente se trabaja con el
> plano tangente y su normal, y la figura es la misma.

Cuando se dibuja la dirección de propagación se está dibujando la **normal a los
frentes de onda**.

### 1.2 Dependencia con la longitud de onda: dispersión

El índice de refracción se define como

$$n = \frac{c}{v}$$

(velocidad de la luz en el vacío sobre velocidad en el medio) y **depende de la
longitud de onda**: no es el mismo para todas las $\lambda$.

> **Consecuencia:** la ley de Snell hay que aplicarla **longitud de onda por
> longitud de onda**. Para distintas $\lambda$, el ángulo refractado $\theta_3$ es
> distinto.

De ahí el fenómeno cotidiano de la **dispersión cromática**. La **luz blanca** es
la que contiene esencialmente por igual todos los colores; al atravesar, por
ejemplo, un prisma de vidrio, el rojo y el violeta se refractan a ángulos
distintos y aparece el arcoíris. Se observa también:

- En el **arcoíris** propiamente dicho, producto de la refracción de la luz solar
  en las gotitas de agua en suspensión, cuando llueve y hay sol al mismo tiempo.
- En un **vaso de agua**: no sólo se ve desplazada la posición del objeto, sino
  que los bordes aparecen "manchados" con colores.

### 1.3 Tabla de índices de refracción

Como $n$ depende de $\lambda$, hay que dar los valores **para una $\lambda$
dada**. Los siguientes corresponden a $\lambda = 589$ nm (en el amarillo):

| Medio | $n$ |
|---|---|
| Vacío / aire | $1{,}00$ |
| Agua | $1{,}33$ |
| Acetona (y alcohol, similar) | $1{,}36$ |
| Vidrio común / sal cristalina | $1{,}54$ |
| Diamante | $2{,}54$ |

> **Cuanto mayor es $n$, mayor es el efecto de la refracción.** El diamante desvía
> mucho más que el vidrio.

> **Nota sobre estos valores.** El pasaje de la transcripción donde el docente da
> el vidrio y la sal está confuso (menciona ambos junto al valor $1{,}54$, y
> aclara que hay muchos tipos de vidrio). Además, el valor del diamante que
> figura, $2{,}54$, difiere del valor tabulado habitual ($\approx 2{,}42$) y
> podría ser un desliz de transcripción. Los demás valores son estándar.

### 1.4 Alcance y simplificaciones

> **Estas leyes valen para ondas muy generales, no sólo para la luz.** Valen
> también para el sonido. Para ondas en la superficie del agua, la **reflexión**
> sí aplica (una onda que choca contra un borde rebota con el mismo ángulo), pero
> la **refracción** requiere que el mismo tipo de onda pueda propagarse de ambos
> lados. Si el borde es un sólido, del otro lado la onda ya no tiene sentido;
> haría falta una frontera entre dos líquidos, lo cual es mucho más complicado.

> **Se ignoran los aspectos vectoriales.** La onda electromagnética es transversal
> y está descrita por vectores ($\mathbf{E}$ y $\mathbf{B}$), pero acá se la
> caracteriza por **un único número**. Es decir, se ignora todo lo relativo a la
> **polarización**. Eso alcanza para los **ángulos**, que es de lo único que se
> ocupa esta clase; si uno quisiera calcular **qué fracción de la luz se transmite
> y cuál se refleja** —las intensidades— habría que tomar en cuenta los aspectos
> vectoriales.

> **Ondas planas y monocromáticas.** *Monocromática* significa de un solo color,
> es decir, de **frecuencia bien definida**: sinusoidal en el tiempo. Hace falta
> porque se quiere trabajar con un único índice de refracción, y $n$ depende de
> $\lambda$.

---

## 2. Deducción de la ley de Snell

La deducción es **puramente geométrica**, a partir de los frentes de onda.

### 2.1 Continuidad de la onda en la frontera

Se dibujan los frentes de onda incidentes, perpendiculares a la dirección de
propagación y separados una distancia $\lambda$. Del otro lado, los frentes
transmitidos son perpendiculares a la dirección refractada y están separados
$\lambda'$.

La construcción se apoya en que **el campo eléctrico es continuo en la
frontera**: en todo instante la onda es la misma de un lado y del otro. Por eso
los frentes de onda de ambos lados deben **empalmar** en la frontera, siendo a la
vez paralelos entre sí y perpendiculares a su dirección de propagación.

> **¿Pero no habíamos visto campos discontinuos?** Sí: en la superficie de un
> conductor, donde se concentra una **densidad superficial de carga** $\sigma$, la
> componente **normal** de $\mathbf{E}$ es discontinua —justo afuera vale
> $\sigma/\varepsilon_0$ y adentro, en electrostática, vale cero—; la componente
> **tangencial** sí es continua.
>
> Acá se supone que **no hay carga concentrada** en la frontera: un borde
> tranquilo, como el de aire-vidrio. Si uno de los medios fuera conductor todo
> sería mucho más complicado, pero **los conductores normalmente no son
> transparentes**, así que el caso no preocupa.

### 2.2 La distancia común d

Ésta es la clave geométrica. Aunque $\lambda \neq \lambda'$, la **distancia entre
los puntos donde dos frentes de onda consecutivos cortan la frontera** es la misma
vista de un lado y del otro: es **una única cantidad $d$**, calculable con la
geometría de cualquiera de los dos lados.

Del triángulo rectángulo del lado incidente:

$$\lambda = d\,\operatorname{sen}\theta_1$$

y del lado transmitido, por el mismo argumento —la figura es igual, sólo cambian
$\lambda$ y el ángulo—:

$$\lambda' = d\,\operatorname{sen}\theta_3$$

> El ángulo $\theta_1$ reaparece dentro del triángulo por ser ángulos de lados
> perpendiculares: hay tres ángulos rectos en la construcción.

### 2.3 La frecuencia no cambia

$\lambda$ cambia al pasar de un medio a otro, pero **la frecuencia de oscilación
no puede cambiar**.

> **Por qué.** Tomemos un punto de la frontera. Visto desde el medio 1 tiene un
> máximo cada cierto periodo; visto desde el medio 2 tiene que tener un máximo
> **cada el mismo tiempo**. Si no, ambos lados se **desfasarían** y sería
> imposible mantener la continuidad en la frontera **en todo instante**. No puede
> ser que de un lado haya un máximo cada $3\times 10^{-15}$ s y del otro cada
> $4\times 10^{-15}$ s: tienen que oscilar juntos.

$$\nu_1 = \nu_2 \equiv f$$

Con la relación general $v = \lambda/T = \lambda f$, válida para cualquier onda:

$$v_1 = \lambda f = \frac{c}{n_1}, \qquad v_2 = \lambda' f = \frac{c}{n_2}$$

Dividiendo miembro a miembro se elimina $f$ y queda cómo cambia la longitud de
onda:

$$\boxed{\ \lambda\, n_1 = \lambda'\, n_2\ }$$

> Es decir, la longitud de onda cambia, **pero no de manera arbitraria**: el
> cambio queda determinado por los índices de refracción.

### 2.4 Cierre de la deducción

Sustituyendo $\lambda = d\operatorname{sen}\theta_1$ y
$\lambda' = d\operatorname{sen}\theta_3$ en la relación anterior:

$$d\,\operatorname{sen}\theta_1\, n_1 = d\,\operatorname{sen}\theta_3\, n_2$$

y simplificando $d$:

$$\boxed{\ n_1 \operatorname{sen}\theta_1 = n_2 \operatorname{sen}\theta_3\ }$$

> **De qué depende realmente la ley de Snell.** De sólo dos cosas: (i) la
> **continuidad de la onda en la frontera en todo instante** —que fija que la
> frecuencia sea la misma— y (ii) que los **frentes de onda estén espaciados
> $\lambda$**, junto con el hecho de que la velocidad de la luz no es la misma de
> un lado y del otro. Nada más.

---

## 3. Deducción de la ley de reflexión

Conceptualmente es **más simple**, pero el dibujo es más enredado: ahora los
frentes incidentes y los reflejados conviven en la misma región.

> **La idea, adelantada:** es el mismo argumento que para la refracción, pero con
> $n_1 = n_2$, porque **ambas ondas se propagan en el mismo medio**. Con índices
> iguales los senos son iguales y los ángulos terminan siendo iguales.

Con más detalle: se supone *a priori* que el ángulo reflejado $\theta_2$ podría
ser distinto de $\theta_1$, y se dibujan los frentes reflejados de modo que sean
continuos con los incidentes en la frontera y perpendiculares a la dirección
reflejada.

La misma distancia $d$ entre cortes de frentes consecutivos con la frontera se
puede calcular de las dos maneras:

$$\lambda = d\,\operatorname{sen}\theta_1, \qquad
  \lambda = d\,\operatorname{sen}\theta_2$$

Aquí es **el mismo $\lambda$**: la frecuencia es la misma por continuidad —igual
que antes— y la velocidad también, porque el medio es el mismo y la velocidad
sólo depende del medio; entonces la longitud de onda coincide. Por lo tanto

$$\operatorname{sen}\theta_1 = \operatorname{sen}\theta_2$$

> **De senos iguales a ángulos iguales.** Los ángulos están, por construcción,
> entre $0$ y $\pi/2$ —no hay ángulos de otro tipo en esta figura—. En ese
> intervalo la función seno es **monótona creciente**, así que si los senos
> coinciden, los ángulos coinciden.

$$\boxed{\ \theta_1 = \theta_2\ }$$

> **La ley de Snell vale sólo para ondas monocromáticas.** La luz no monocromática
> puede pensarse como superposición de muchas ondas monocromáticas; cada color
> tiene su propio índice de refracción y **verifica la ley de Snell por
> separado**, refractándose a un ángulo diferente. Hay que aplicar la ley **a cada
> componente**, no a la luz como un todo: el rojo tendrá su ley de Snell, el
> violeta la suya, el amarillo la suya.

---

## 4. Principio de Huygens

### 4.1 Enunciado

Formulado en **1678** —siglo XVII, mucho antes de que se conociera la naturaleza
electromagnética de la luz— y válido para **cualquier onda**:

> **Cada punto de un frente de ondas se comporta como una fuente puntual que
> genera ondas esféricas. Un nuevo frente de ondas será la envolvente de esas
> ondas esféricas secundarias.**

La motivación es práctica: ¿cómo se calcula la deformación de un frente de onda
que **no es plano**? Partir de las ecuaciones del electromagnetismo es posible
pero muy complicado. Huygens da un método gráfico de sentido común.

> El principio se presenta acá **sin demostración rigurosa**, como una regla
> independiente de todo lo anterior.

### 4.2 Cómo se usa: el método gráfico

El ejemplo del docente: una **cubeta de agua** golpeada periódicamente con un
objeto de forma **cuadrada**.

- Cerca del punto de golpe, los frentes de onda son esencialmente **cuadrados**.
- A medida que se alejan se van **suavizando**.
- Lejos, se comportan como **ondas circulares**.

La construcción, con regla y compás: se toma el frente actual, se dibuja un
circulito centrado en cada uno de sus puntos, y el nuevo frente es la
**envolvente** —lo que va por el exterior— de todos esos circulitos. Repitiendo
período a período se ve cómo la forma cuadrada se va redondeando.

> **El radio de los circulitos es $\lambda$** si se avanza un período por paso.
> Todas las ondas secundarias tienen la misma longitud de onda y el mismo período,
> así que **todos los circulitos son iguales**. Si se quisiera avanzar de a un
> décimo de período, el radio sería $\lambda/10$: hay que declarar cada cuánto se
> hacen los dibujitos.

**Aplicaciones:**

- Ver cómo se **refleja** una onda plana sobre una superficie de forma arbitraria:
  se emiten los circulitos desde esa superficie y se sigue la envolvente. Con
  paciencia, así se sabía predecir cómo se reflejaba la onda en cada lugar.
- **Deducir la refracción**: del otro lado de la frontera la velocidad es
  distinta, luego la longitud de onda es distinta, luego **los circulitos tienen
  otro radio**. Los frentes resultantes quedan más separados, y se recupera la
  misma figura de §2.

### 4.3 Alcance y una objeción

> **Para ondas planas no aporta nada.** Si se parte de un plano y se dibujan
> circulitos, la envolvente es otro plano: el principio sólo dice que la onda
> sigue siendo plana. Su valor está en los **frentes curvos**, donde permite hacer
> el dibujo aunque no dé fórmulas.

> **La objeción de la onda hacia atrás.** Tomado al pie de la letra, el principio
> predice también un frente propagándose **hacia atrás**, lo cual no es
> físicamente razonable: en el ejemplo del cuadrado, la onda se aleja del
> cuadrado, no entra hacia adentro. La explicación es que las ondas secundarias
> **no son esféricas uniformes**: tienen una **dirección preferencial**. Para
> saber hacia dónde va la onda —y no sólo dónde está— haría falta conocer la
> intensidad relativa hacia cada lado. Esto ya se sabía formalizar en la época.

---

## 5. Principio de Fermat

### 5.1 Enunciado y contexto

Formulado alrededor de **1650**, también en el siglo XVII.

> **La luz se propaga de un punto a otro por la trayectoria que requiere el menor
> tiempo.**

> Es como si la luz **recorriera todas las trayectorias posibles** —y un poco lo
> hace, porque la onda se desparrama por todos lados— y finalmente eligiera como
> buena solución la que le lleva menor tiempo.

> **Un principio con mucha descendencia.** Algo parecido ocurre en mecánica con el
> **principio de mínima acción**: las partículas, para ir de un punto a otro,
> exploran todos los caminos y siguen el de menor *acción*. Y eso no es del todo
> una metáfora: según la física cuántica, las partículas en algún sentido preciso
> **no tienen una única trayectoria**, sino que recorren todas; la que se observa
> macroscópicamente es la que "suma más", la de menor acción. En el caso de la luz
> esto es más fácil de aceptar porque la onda se ve desparramada.

> El principio **se puede deducir** de las ecuaciones de Maxwell en una
> aproximación precisa —la llamada **aproximación eikonal**—, en la cual la luz se
> comporta efectivamente como rayos que se propagan. Fermat no lo probó en
> general: hizo la observación de que las leyes ya conocidas de la óptica
> geométrica se entendían fácilmente suponiendo esto.

> **Anécdota.** Fermat era matemático **no profesional** —se dedicaba a otra
> cosa— y leía por diversión los libros de los matemáticos de su época, agregando
> comentarios en los márgenes que solían ser resultados originales. En uno de esos
> márgenes, junto a la ecuación diofántica $x^n + y^n = z^n$ con
> $x,y,z,n \in \mathbb{N}$, anotó que para $n > 2$ **no hay soluciones**, y que
> tenía una prueba muy linda y simple que no le entraba en el margen. Esas notas
> nunca aparecieron. La conjetura resistió siglos y recién se probó en
> **1994–1995**, con métodos matemáticos extremadamente sofisticados —nada de
> prueba simple y elegante—. Es un problema que se le puede plantear a un niño de
> escuela y que necesitó la matemática más elaborada para resolverse.

Se verifica el principio en **dos ejemplos**, no en general.

### 5.2 Reflexión por tiempo mínimo

Un punto $A$ de partida y un punto $B$ de llegada, ambos en el **mismo medio**,
con la luz rebotando en un punto de la superficie reflectante. Sea $y$ la posición
del punto de rebote, $x_A$ y $x_B$ las distancias de $A$ y $B$ a la superficie, y
$D$ la separación entre ambos medida a lo largo de la superficie.

> **En un único medio, tiempo mínimo equivale a distancia mínima**, porque la
> velocidad es la misma en todo el trayecto. El principio de Fermat queda bien
> simple.

La longitud total del camino, por Pitágoras en cada tramo:

$$L(y) = \sqrt{x_A^2 + y^2} + \sqrt{x_B^2 + (D-y)^2}$$

Las posiciones de $A$ y $B$ están fijas; la incógnita es $y$. Derivando e
igualando a cero (condición necesaria de mínimo):

$$\frac{dL}{dy} = \frac{y}{\sqrt{x_A^2 + y^2}}
                 + \frac{y - D}{\sqrt{x_B^2 + (D-y)^2}} = 0$$

Ahora se identifican los dos cocientes geométricamente. En cada triángulo
rectángulo el cociente es **cateto opuesto sobre hipotenusa**, es decir el seno
del ángulo con la normal:

$$\operatorname{sen}\theta_1 - \operatorname{sen}\theta_2 = 0$$

$$\boxed{\ \theta_1 = \theta_2\ }$$

> Es una **segunda demostración** de la ley de reflexión, por un camino
> completamente distinto al de los frentes de onda. Decir que los ángulos son
> iguales es lo mismo que decir que la luz escogió el camino más corto para
> rebotar.

### 5.3 Refracción: el problema del salvavidas

Ahora $A$ está en el medio 1 y $B$ en el medio 2, y la luz cruza la frontera en la
posición $y$.

> **Acá tiempo mínimo ya NO es lo mismo que distancia mínima**, porque la
> velocidad no es la misma en los dos medios.

El tiempo es distancia sobre velocidad, tramo por tramo:

$$t(y) = \frac{\sqrt{y^2 + x_A^2}}{v_1}
       + \frac{\sqrt{x_B^2 + (D-y)^2}}{v_2}$$

y usando $v = c/n$, es decir $1/v = n/c$:

$$t(y) = \frac{n_1}{c}\sqrt{y^2 + x_A^2}
       + \frac{n_2}{c}\sqrt{x_B^2 + (D-y)^2}$$

Derivando e igualando a cero:

$$\frac{dt}{dy} = \frac{n_1}{c}\,\frac{y}{\sqrt{y^2 + x_A^2}}
                + \frac{n_2}{c}\,\frac{y - D}{\sqrt{x_B^2 + (D-y)^2}} = 0$$

Con las mismas identificaciones geométricas que antes:

$$\frac{n_1}{c}\operatorname{sen}\theta_1
- \frac{n_2}{c}\operatorname{sen}\theta_3 = 0$$

$$\boxed{\ n_1 \operatorname{sen}\theta_1 = n_2 \operatorname{sen}\theta_3\ }$$

> **Cuidado con el signo.** Al derivar el segundo radicando aparece un factor
> $-1$ de la cadena, que es lo que produce el $-\operatorname{sen}\theta_3$.
> Conviene escribir el radicando como $(y-D)^2$ en vez de $(D-y)^2$: al derivar
> quedan menos signos que manejar.

**El problema del salvavidas.** El mismo problema matemático tiene una versión
cotidiana: un salvavidas en la arena debe llegar lo antes posible hasta alguien
que se está ahogando en el agua. **No** tiene que recorrer el camino más corto:
tiene que tardar lo menos posible, y corre mucho más rápido en la arena que
nadando.

- ¿Conviene correr hasta el punto justo enfrente de la persona y recién ahí
  meterse al agua? **No**: así se pierde tiempo de más.
- ¿Conviene la línea recta? Tampoco.
- La trayectoria óptima está **en el medio** entre ambas, y es exactamente la que
  da la ley de Snell.

> **La interpretación que aporta Fermat.** La ley de Snell dice que la luz elige el
> trayecto de **menor tiempo** —no de menor distancia— para ir de un punto a otro.
> Todas las fórmulas de la óptica geométrica pueden hallarse a partir de esa única
> exigencia.

---

## 6. Reflexión total interna

### 6.1 El ángulo crítico

Partiendo de la ley de Snell, $n_1\operatorname{sen}\theta_1 =
n_2\operatorname{sen}\theta_3$, cabe preguntarse si **siempre existe** solución
para $\theta_3$.

A medida que $\theta_1$ crece, $\theta_3$ también crece. La pregunta es **cuál
llega antes a $\pi/2$**:

- Si $\theta_1$ llega primero, hay $\theta_3$ para todo ángulo de incidencia.
- Si $\theta_3$ llega a $\pi/2$ **antes** de que $\theta_1$ lo haga, entonces a
  partir de ese ángulo **no hay onda transmitida**: toda la luz se refleja hacia
  adentro.

El ángulo límite se obtiene poniendo $\theta_3 = \pi/2$, con
$\operatorname{sen}(\pi/2) = 1$:

$$n_1 \operatorname{sen}\theta_{1,\max} = n_2
\quad\Longrightarrow\quad
\operatorname{sen}\theta_{1,\max} = \frac{n_2}{n_1}$$

$$\boxed{\ \theta_c = \arcsen\!\left(\frac{n_2}{n_1}\right)\ }$$

> **Condición de existencia.** Esta ecuación tiene solución sólo si
> $\boxed{n_2 < n_1}$, es decir, si la luz va de un medio **más** refringente a uno
> **menos** refringente. A partir de $\theta_c$ toda la luz queda en el medio 1.

### 6.2 Fibra óptica

La aplicación tecnológica más conocida.

**El problema.** Los cables eléctricos tienen defectos: se calientan, tienen
impurezas, y la señal no se transmite con tan buena calidad como con luz. Pero una
señal eléctrica se puede hacer seguir un cable de cobre, mientras que la luz —a
priori— va en línea recta. ¿Cómo hacer que la luz siga un recorrido curvo?

**La idea.** Usar reflexión total interna. En el caso más simple, un cilindro de
vidrio ($n \approx 1{,}3$–$1{,}5$, según el tipo) rodeado de aire ($n = 1$): la
luz que viaja por dentro llega a la pared yendo de mayor a menor índice, y si es
suficientemente **rasante** rebota **completamente**, sin pérdidas.

> **Por eso no hay que doblar mucho una fibra óptica**: al curvarla el ángulo de
> incidencia empeora y en algún punto la luz deja de reflejarse totalmente y se
> escapa. Con el cable bastante recto —una curvatura suave está bien— la señal se
> mantiene con gran precisión a distancias muy grandes, a diferencia de los cables
> eléctricos con su resistencia y sus pérdidas.

> **Las fibras reales no son así.** En vez de vidrio-aire tienen **dos tipos de
> vidrio**: un núcleo con índice de refracción mayor y una capa exterior con
> índice menor —y en realidad la capa exterior tiene un **degradé** de índice—. Es
> mejor porque da **más margen**: si el rayo se pasa un poco del ángulo crítico,
> en lugar de perderse se **curva y vuelve hacia adentro**. El resultado es mucho
> más robusto que el esquema simple, donde basta curvar un poco para que la luz se
> escape.

**Otra aplicación:** instrumentos de exploración médica. Un haz de tubitos de
fibra óptica se introduce en el cuerpo; la luz entra por esos cañitos y, si no se
los deforma demasiado, **sale del otro lado la misma imagen que entró**, porque se
mantiene a lo largo del recorrido.

### 6.3 Onda evanescente y reflexión total frustrada

> **La afirmación "no se transmite nada" no es exacta.** Del otro lado de la
> frontera sí penetra algo; lo que no hay es una onda que **se propague**.

Lo que existe es una **onda evanescente**: su amplitud **decrece
exponencialmente** con la distancia dentro del segundo medio. No es una señal
sinusoidal en el espacio, sino una exponencial decreciente.

**Reflexión total frustrada.** Si antes de que la onda evanescente se extinga se
coloca **otro medio muy pegado** al primero —en el que la onda sí pueda
propagarse— la onda **continúa** del otro lado. La transmisión es pequeña y
**decrece exponencialmente con el espesor** de la separación, pero si ese espesor
es suficientemente fino, existe.

> Es decir, la imagen simple de que "no pasa nada" es esquemática. No hay
> transmisión de una onda **si el segundo medio se extiende hasta el infinito**;
> con espesor finito sí puede haberla.

---

*Continúa en la Clase 27: efecto Doppler para ondas y para la luz, corrimiento al
rojo, e interferencia de ondas.*
