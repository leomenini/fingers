# Resumen Clase 13 — Coeficientes de potencial, condensadores y fuerzas a partir de la energía

## Índice

1. [Repaso: conductores cargados](#1-repaso-conductores-cargados)
2. [Propiedades de los coeficientes de potencial](#2-propiedades-de-los-coeficientes-de-potencial)
   - [2.1 Simetría](#21-simetría)
   - [2.2 Las otras dos propiedades](#22-las-otras-dos-propiedades)
   - [2.3 Ejemplo: esfera conductora y conductor puntual](#23-ejemplo-esfera-conductora-y-conductor-puntual)
3. [Condensadores](#3-condensadores)
   - [3.1 Una definición más general](#31-una-definición-más-general)
   - [3.2 Un conductor dentro del otro](#32-un-conductor-dentro-del-otro)
   - [3.3 Placas muy grandes](#33-placas-muy-grandes)
   - [3.4 Capacitancia y energía](#34-capacitancia-y-energía)
   - [3.5 Condensador de placas paralelas](#35-condensador-de-placas-paralelas)
   - [3.6 Serie y paralelo](#36-serie-y-paralelo)
4. [Fuerzas y momentos electrostáticos](#4-fuerzas-y-momentos-electrostáticos)
   - [4.1 Sistema aislado](#41-sistema-aislado)
   - [4.2 Baterías que mantienen los potenciales](#42-baterías-que-mantienen-los-potenciales)
   - [4.3 Ejemplo: un dieléctrico entre las placas](#43-ejemplo-un-dieléctrico-entre-las-placas)
5. [Corriente eléctrica](#5-corriente-eléctrica)
   - [5.1 Definición](#51-definición)
   - [5.2 Tipos de conducción](#52-tipos-de-conducción)

---

## 1. Repaso: conductores cargados

La clase anterior terminó con un conjunto de $n$ conductores con cargas
$Q_1, Q_2, \dots$ rodeados de vacío o de dieléctricos **lineales**. En ese
escenario el potencial de cada conductor es una combinación lineal de las cargas
de todos, con los **coeficientes de potencial** $P_{ij}$, y la energía es una
forma cuadrática en las cargas:

$$\phi_i = \sum_{j=1}^{n} P_{ij}\,Q_j,
\qquad
U = \frac12\sum_{i=1}^{n}\sum_{j=1}^{n} P_{ij}\,Q_i\,Q_j .$$

El ejemplo fue el condensador de dos placas aisladas de todo lo demás; más
adelante en esta clase aparece un concepto más general de condensador.

---

## 2. Propiedades de los coeficientes de potencial

Son tres. El docente prueba sólo la primera, «que es la que vamos a usar más».

### 2.1 Simetría

$$\boxed{\ P_{ij} = P_{ji}\ }$$

**Prueba.** Se dejan fijas todas las cargas salvo $Q_1$, que pasa de $Q_1$ a
$Q_1+\delta Q_1$. La variación de la energía se puede calcular de dos maneras.

**Primera: derivando la forma cuadrática.** $Q_1$ aparece en los dos índices, así
que

$$\delta U = \frac12\sum_{j} Q_j\,P_{1j}\,\delta Q_1 + \frac12\sum_{i} Q_i\,P_{i1}\,\delta Q_1 .$$

Como $i$ y $j$ son **índices mudos**, se renombra uno y se juntan:

$$\delta U = \frac12\sum_i \left(P_{1i}+P_{i1}\right) Q_i\,\delta Q_1 .$$

Tiene que dar algo simétrico: es una forma cuadrática.

**Segunda: como trabajo.** El sistema es conservativo, así que $\delta U$ es el
trabajo necesario para traer $\delta Q_1$ desde el infinito hasta el conductor 1,
que es su potencial por la carga traída:

$$\delta U = \phi_1\,\delta Q_1 = \sum_i P_{1i}\,Q_i\,\delta Q_1 .$$

**Comparando**, y como las $Q_i$ son arbitrarias, coeficiente a coeficiente:

$$P_{1i} = \frac12\left(P_{1i}+P_{i1}\right)
\quad\Longrightarrow\quad
P_{1i} = P_{i1}.$$

Lo mismo se hace variando cualquier otra carga, y de ahí el resultado general.

> **No es obvio.** Por definición, $P_{ij}$ mide el potencial que una carga en el
> conductor $j$ genera en el $i$. Que sea igual al que una carga en $i$ genera en
> $j$ no sale de la definición.

> **Contexto.** Es un caso particular de la **teoría de la respuesta lineal**: a
> los $P_{ij}$ se les llama a veces coeficientes de respuesta, y hay un teorema
> general según el cual, en sistemas en equilibrio, las funciones de respuesta
> están ligadas a cantidades naturalmente simétricas (funciones de correlación).
> El docente lo menciona sin desarrollarlo.

### 2.2 Las otras dos propiedades

Se enuncian y se **admiten sin demostración**: probarlas «da un poquito de
trabajo» y no se van a usar lo suficiente.

$$P_{ij} \ge 0,
\qquad
P_{ii} \ge P_{ij} .$$

| Propiedad | Intuición |
| --- | --- |
| $P_{ij}\ge 0$ | Con el cero del potencial en el infinito, agregar una carga positiva tiende a **subir** el potencial en todos lados, no a bajarlo |
| $P_{ii}\ge P_{ij}$ | Agregar carga a un conductor modifica más su **propio** potencial que el de los demás |

### 2.3 Ejemplo: esfera conductora y conductor puntual

Para que no parezca todo abstracto: una **esfera conductora** de radio $a$ (el
conductor 1) y un **conductor puntual** (el 2), a una distancia $d$ entre centros.
Hay un problema fácil y uno difícil.

> En la transcripción, el radio y la distancia aparecen con la misma letra; acá se
> los distingue como $a$ y $d$. El resultado sólo involucra la distancia.

**El fácil: el potencial que genera la esfera en el punto.** Se olvida la carga
puntual y se carga sólo la esfera con $Q$. Por Gauss, afuera de una esfera
conductora el campo es el de una carga puntual en el centro, y el potencial
también. En la posición del conductor puntual:

$$\phi_2 = \frac{Q}{4\pi\varepsilon_0 d}
\quad\Longrightarrow\quad
P_{21} = \frac{1}{4\pi\varepsilon_0 d}.$$

**El difícil: el potencial que genera el conductor puntual en la esfera.** Si la
esfera está descargada y el conductor puntual tiene carga $q$, la esfera se
polariza con una distribución de carga difícil de calcular: habría que resolver
Laplace en una geometría complicada. Pero por la simetría:

$$P_{12} = P_{21} = \frac{1}{4\pi\varepsilon_0 d}
\quad\Longrightarrow\quad
\boxed{\ \phi_{\text{esfera}} = \frac{q}{4\pi\varepsilon_0 d}\ }$$

> **Qué es y qué no es este potencial.** Es el potencial **del conductor**, que es
> uno solo en toda la esfera; no es «el potencial en el centro». Las distancias de
> $q$ a cada punto de la esfera son distintas, pero el potencial es el mismo en
> todos. Por eso tampoco importa si la esfera es maciza o un cascarón: la carga
> sólo se ubica en la superficie.

> «Es raro el resultado, pero es correcto.» Que la esfera genere ese potencial en
> el punto es obvio; al revés, no lo es. Con los coeficientes de potencial se
> prueba en dos líneas, y resulta más fácil conseguir los potenciales **sólo en
> los conductores** que hallar el potencial en todo el espacio.

---

## 3. Condensadores

Después de la parte abstracta, una que es «como un descansito»: repaso de
Física 3, pero con alguna vuelta de tuerca (sección 4.5). El curso, dice el
docente, alterna entre cosas avanzadas con ecuaciones diferenciales y repasos.

### 3.1 Una definición más general

En Física 3 un condensador es un dispositivo para almacenar energía en un campo
eléctrico, y concretamente **dos placas conductoras** a cierta distancia,
implícitamente **aisladas del resto del mundo**: lo bastante lejos de cualquier
otra carga como para que nada afecte sus potenciales.

> **Definición del curso.** Un **condensador** (o capacitor) es un dispositivo
> compuesto por **dos conductores** separados tales que la **diferencia de
> potencial entre ellos no depende de las cargas de otros conductores
> cercanos**.

Contiene a la de Física 3 como caso particular —si no hay nada cerca, no se puede
depender de ello—, pero es más útil: en un circuito real dos condensadores pueden
estar cerca, y se quiere que cada uno conserve sus propiedades. En un circuito,
además, las cargas suelen estar en placas, no «boyando» por ahí. Hay dos maneras
típicas de conseguirlo, y una es caso particular de la otra.

### 3.2 Un conductor dentro del otro

El conductor 1 tiene una **cavidad**, y adentro está el conductor 2. Afuera hay
otros, por ejemplo el 3 y el 4.

**Cómo se calcula $P_{13}$:** se apagan todas las cargas salvo $Q_3$ y se mira el
potencial en 1. Pero entonces, en particular, **$Q_2 = 0$**. Sin carga adentro de
la cavidad, toda la región encerrada por el conductor 1 —cavidad y conductor 2
incluidos— tiene campo nulo y **el mismo potencial**. Entonces
$\phi_1 = \phi_2$ en esa situación, y

$$P_{13} = P_{23},\qquad P_{14} = P_{24}.$$

La diferencia de potencial entre 1 y 2 es

$$\phi_1-\phi_2 = (P_{11}-P_{21})\,Q_1 + (P_{12}-P_{22})\,Q_2
+ \underbrace{(P_{13}-P_{23})}_{0}\,Q_3 + \underbrace{(P_{14}-P_{24})}_{0}\,Q_4 ,$$

que **no depende de $Q_3$ ni de $Q_4$**. Con 28 conductores afuera sería lo mismo.

> Es una receta de ingeniería para un condensador «fiable»: poner una placa dentro
> de la otra. Los condensadores de ferretería son conductores **enrollados**: no
> están totalmente uno dentro del otro, pero casi.

### 3.3 Placas muy grandes

El otro caso típico, «el caso de escuela», son **dos placas muy grandes**
comparadas con la distancia entre ellas. Es un caso particular del anterior: como
no se llegan a ver los bordes, podría ser que allá lejos las placas dieran la
vuelta y una quedara encerrada en la otra, y el resultado no puede depender del
borde.

> La analogía del docente: parados acá no sabemos si la Tierra es plana o
> esférica, porque el borde está tan lejos que puede haberse curvado.

Las dos maneras de **apantallar** lo que pasa afuera son, entonces, una dentro de
la otra o placas muy grandes. En Física 3 este problema «se ponía abajo de la
alfombra».

### 3.4 Capacitancia y energía

Los condensadores se usan con **carga neta nula**: $Q_1 = Q$, $Q_2 = -Q$. Usando
$P_{21} = P_{12}$:

$$\Delta\phi = \phi_1-\phi_2 = \left(P_{11} - 2P_{12} + P_{22}\right) Q .$$

La diferencia de potencial es proporcional a la carga de una de las placas, como
se sabía de Física 3, y el coeficiente define la **capacitancia**:

$$\boxed{\ C = \frac{1}{P_{11}+P_{22}-2P_{12}}\ },
\qquad
\boxed{\ \Delta\phi = \frac{Q}{C}\ } .$$

No depende de la carga sino de la **geometría** y de los **dieléctricos** del
entorno. La única hipótesis usada en todo esto es que esos dieléctricos sean
**lineales**.

**Unidades.** $C = Q/\Delta\phi$ se mide en coulomb por volt, el **farad**
(F). Es una unidad enorme —el volt es de laboratorio, el coulomb no—: los
condensadores reales son de micro-, nano- o picofarads.

**Energía.** Con la simetría, la fórmula de la clase pasada se simplifica:

$$U = \frac12\left(P_{11}+P_{22}-P_{12}-P_{21}\right)Q^2
= \frac12\left(P_{11}+P_{22}-2P_{12}\right)Q^2
= \boxed{\ \frac{Q^2}{2C}\ } .$$

### 3.5 Condensador de placas paralelas

Placas de área $A$ a distancia $d$, con vacío entre ellas. Por invariancia de
traslación a lo largo del plano, las densidades son uniformes, $+\sigma$ y
$-\sigma$. Por Gauss el campo entre placas es uniforme:

$$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{A\,\varepsilon_0},
\qquad
\Delta\phi = E\,d = \frac{Q\,d}{\varepsilon_0 A}
\quad\Longrightarrow\quad
\boxed{\ C = \frac{\varepsilon_0 A}{d}\ } .$$

> Con Laplace o el método de las imágenes ahora se pueden hallar capacitancias de
> geometrías más difíciles que las de Física 3; eso queda para el práctico.

### 3.6 Serie y paralelo

Más repaso, «porque estaban oxidados».

**En serie.** Dos condensadores $C_1$ y $C_2$ uno detrás del otro, con $\Delta\phi$
aplicada a los extremos. Aparece $Q$ en una placa del primero y $-Q$ en la otra;
el tramo que une los dos condensadores es neutro, así que el segundo también
tiene $\pm Q$. La diferencia de potencial total es la suma:

$$\Delta\phi = \frac{Q}{C_1} + \frac{Q}{C_2}
\quad\Longrightarrow\quad
\boxed{\ \frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2}\ } .$$

**En paralelo.** Unidos por cables ideales —o simplemente en equilibrio—, los dos
tienen la **misma** $\Delta\phi$, y la carga total es la suma,
$Q = Q_1 + Q_2 = C_1\Delta\phi + C_2\Delta\phi$:

$$\boxed{\ C = C_1 + C_2\ } .$$

> Para quien se acuerda a medias: con las resistencias la relación es **al
> revés**. Las resistencias aparecen en la clase siguiente.

---

## 4. Fuerzas y momentos electrostáticos

Para cerrar el capítulo 4 (sección 4.6): cómo reconstruir fuerzas y torques a
partir de la energía.

### 4.1 Sistema aislado

Un sistema electrostático **aislado**: nada le aporta energía desde afuera. Se
imagina que todo está quieto salvo una parte, que se desplaza $d\vec r$. El
trabajo electrostático es $dW = \vec F\cdot d\vec r$. Como el sistema es estático
no cambia la energía cinética, no hay fuerzas externas, y el trabajo es a costa de
la energía potencial: $dW = -dU$. Entonces

$$\boxed{\ \vec F = -\grad U\ } .$$

Si en lugar de una traslación la parte **rota** un ángulo $d\theta$ alrededor de
un eje de versor $\hat n$, $dW = \tau_n\,d\theta$ y

$$\boxed{\ \tau_n = -\pdv{U}{\theta}\ } .$$

Conocer la energía permite calcular no sólo fuerzas sino también torques.

### 4.2 Baterías que mantienen los potenciales

Si el sistema no está aislado «puede pasar de todo»: hay que decir cuáles son las
fuerzas externas, y el caso general no se puede tratar. Se estudia un caso
particular: **baterías** que mantienen **constantes** los potenciales de los
conductores (fijado el cero en el infinito, tiene sentido hablar de potenciales y
no sólo de diferencias).

Ahora el trabajo tiene dos partes: la asociada a la energía potencial, y la que
aporta la batería. Con $U = \tfrac12\sum_i\phi_i Q_i$ y los potenciales fijos,
sólo cambian las cargas:

$$dU\big|_{\phi} = \frac12\sum_i \phi_i\,dQ_i .$$

La batería mantiene los potenciales moviendo cargas $dQ_i$ a cada conductor, y el
trabajo que hace es

$$dW_{\text{bat}} = \sum_i \phi_i\,dQ_i = 2\,dU .$$

Esa «coincidencia grata» decide todo: el trabajo total es
$\vec F\cdot d\vec r = -dU + dW_{\text{bat}} = +dU$. Las fórmulas son las del
sistema aislado **con el signo al revés**:

$$\boxed{\ \vec F = +\grad U\big|_{\phi}\ },
\qquad
\boxed{\ \tau_n = +\pdv{U}{\theta}\bigg|_{\phi}\ } .$$

> **No viola nada.** El sistema no está aislado: la batería aporta energía, y
> justo el doble de la variación de la energía potencial. Una contribución va para
> un lado y la otra para el otro.

> El docente admite que la primera vez le resultó «re extraño», y que no conoce
> una explicación más simple que la cuenta misma: a potencial fijo, el trabajo de
> la batería es el doble de la variación de la energía potencial.

### 4.3 Ejemplo: un dieléctrico entre las placas

Un condensador de placas paralelas rectangulares, de largo $L$ y ancho $W$,
separadas $D$, conectado a una batería que mantiene $\Delta\phi$ fijo. Entre las
placas hay un bloque de dieléctrico (lineal, homogéneo, isótropo, constante $K$)
que puede entrar o salir: un tramo de largo $x$ queda en vacío y el resto,
$L-x$, con dieléctrico. **¿La fuerza lo chupa hacia adentro o lo expulsa?**

Se **desprecian los efectos de borde**: si $L\gg D$, las zonas de borde son del
ancho de $D$ y el grueso de la energía está en las regiones interiores, que es
proporcional a $x$ o a $L-x$. Así el sistema son **dos condensadores en
paralelo**:

$$C_0 = \frac{\varepsilon_0\, x\,W}{D},
\qquad
C_K = \frac{K\varepsilon_0\,(L-x)\,W}{D}.$$

Usando $\Delta\phi = Q/C$, cada energía se escribe $\tfrac12 C\,\Delta\phi^2$:

$$U = \frac12\left(C_0 + C_K\right)\Delta\phi^2
= \frac{\Delta\phi^2}{2}\,\frac{\varepsilon_0 W}{D}\left[x + K(L-x)\right].$$

Con $\Delta\phi$ fijo por la batería, la fuerza es **más** la derivada:

$$F_x = +\pdv{U}{x} = \frac{\Delta\phi^2}{2}\,\frac{\varepsilon_0 W}{D}\,(1-K) .$$

Como $K>1$, $F_x<0$: la fuerza tiende a achicar el tramo en vacío. **El
condensador chupa el dieléctrico hacia adentro.**

> **Ejercicio.** ¿Qué pasa si el condensador está cargado pero **desconectado**
> de la batería? Entonces $\Delta\phi$ ya no es fijo, pero la carga sí, porque
> nadie aporta carga. ¿El dieléctrico tiende a entrar o a salir?

> Por qué acá el signo es $+$: porque el sistema no está aislado. Si lo
> estuviera, sería $-\grad U$. Los dos casos fáciles de tratar son el aislado y
> el de potenciales fijos.

---

## 5. Corriente eléctrica

Con los minutos que quedan arranca el **capítulo 5**: por primera vez en el curso
las cargas se mueven.

### 5.1 Definición

Se toma una superficie $S$ y cargas que la cruzan. La **carga que cruza $S$ por
unidad de tiempo** es la **corriente eléctrica**:

$$\boxed{\ I = \frac{dQ}{dt}\ } .$$

> **Convención de signos.** Se cuenta **carga**, no partículas, y hay que elegir
> qué sentido de cruce es positivo. La corriente va siempre en el sentido de
> hipotéticas cargas **positivas** en movimiento: si lo que se mueve son cargas
> negativas, la corriente va en sentido opuesto a su movimiento.

**Unidad:** coulomb por segundo, el **ampere** (A).

### 5.2 Tipos de conducción

1. **Electrones en un metal.** Se mueven los electrones de valencia en una red
   cristalina iónica. En los semiconductores a veces se mueven **huecos**,
   ausencias de electrones que van para el otro lado; su naturaleza no tiene
   sentido clásico. Cualitativamente sirve pensar el metal como una caja con
   electrones que se mueven, aunque en realidad la red vibra y tiene impurezas.
2. **Electrolitos en un fluido.** Iones disueltos en un líquido.
3. **Transporte hidrodinámico en un plasma.** En el Sol, por ejemplo, la materia
   está tan caliente que electrones e iones están separados: es un fluido
   cargado, y lo que se mueve es **el propio medio**, no cargas dentro de él.

> El tercero **no se estudia**: habría que acoplar las ecuaciones del
> electromagnetismo con las de la hidrodinámica (las de Navier–Stokes para un
> fluido neutro), y cada una complica a la otra. Es la única vez que el curso
> menciona los plasmas.

*La clase siguiente continúa con la corriente eléctrica y las resistencias.*
