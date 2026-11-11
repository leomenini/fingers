# Resumen Clase 15 — Relación entre resistencia y capacidad, aproximación al equilibrio y circuitos con resistencias y condensadores

## Índice

1. [Resistencia y capacidad con igual geometría](#1-resistencia-y-capacidad-con-igual-geometría)
   - [1.1 El mismo dibujo, dos problemas](#11-el-mismo-dibujo-dos-problemas)
   - [1.2 La relación RC = ε/g](#12-la-relación-rc--εg)
   - [1.3 Cómo leerla](#13-cómo-leerla)
2. [Aproximación al equilibrio electrostático](#2-aproximación-al-equilibrio-electrostático)
   - [2.1 Planteo y alcance](#21-planteo-y-alcance)
   - [2.2 Ecuación para la densidad de carga](#22-ecuación-para-la-densidad-de-carga)
   - [2.3 Tiempo característico](#23-tiempo-característico)
   - [2.4 Órdenes de magnitud](#24-órdenes-de-magnitud)
   - [2.5 Los metales](#25-los-metales)
3. [Circuitos con resistencias y baterías](#3-circuitos-con-resistencias-y-baterías)
   - [3.1 Corriente localizada](#31-corriente-localizada)
   - [3.2 Por qué hace falta una fuente no electrostática](#32-por-qué-hace-falta-una-fuente-no-electrostática)
   - [3.3 Baterías ideales y reales](#33-baterías-ideales-y-reales)
   - [3.4 Cables y resistores](#34-cables-y-resistores)
   - [3.5 Resistores en serie y en paralelo](#35-resistores-en-serie-y-en-paralelo)
   - [3.6 Leyes de Kirchhoff](#36-leyes-de-kirchhoff)
   - [3.7 Ejemplo: una malla](#37-ejemplo-una-malla)
4. [Circuitos RC](#4-circuitos-rc)
   - [4.1 El condensador como elemento y su signo](#41-el-condensador-como-elemento-y-su-signo)
   - [4.2 Carga de un condensador](#42-carga-de-un-condensador)
   - [4.3 Resolución de la ecuación](#43-resolución-de-la-ecuación)
   - [4.4 Descarga](#44-descarga)
5. [Límite de validez: régimen cuasi-estacionario](#5-límite-de-validez-régimen-cuasi-estacionario)

---

## 1. Resistencia y capacidad con igual geometría

La clase abre con un comentario sobre el primer parcial (el ejercicio 1, que
resultó «original»: potencial de cuatro cargas alineadas, un desarrollo de
Taylor guiado y, al final, un cascarón esférico conductor). No es contenido del
curso y no se desarrolla acá.

### 1.1 El mismo dibujo, dos problemas

Se retoma la situación del final de la clase anterior: dos **conductores
buenos** (los bornes, cables de cobre) y, entre ellos, un conductor de calidad
mediana, de conductividad $g$. Los conductores buenos se idealizan sin
resistencia: adentro el campo es nulo y cada uno es un equipotencial. Se vio que

$$\phi_2 - \phi_1 = R\,I .$$

La corriente se calcula como el flujo de $\vec J$ a través de **cualquier**
superficie $S$ ubicada en el medio que separe un borne del otro; como la carga
se conserva, da lo mismo cuál. Usando la ley de Ohm, $\vec J = g\vec E$:

$$I = \int_S \vec J\cdot\hat n\,dS = g\int_S \vec E\cdot\hat n\,dS
= \frac{\phi_2-\phi_1}{R} .
\qquad\text{(resistor)}$$

Ahora se piensa **otro problema con el mismo dibujo**: los dos conductores son
las placas de un condensador, con cargas $+Q$ y $-Q$, y todo el medio se
reemplaza por un dieléctrico de permitividad $\varepsilon$. Entonces
$\phi_2 - \phi_1 = Q/C$, y por la ley de Gauss en un único dieléctrico

$$\int_S \vec E\cdot\hat n\,dS = \frac{Q}{\varepsilon}
\quad\Longrightarrow\quad
Q = \varepsilon\int_S \vec E\cdot\hat n\,dS = C\,(\phi_2-\phi_1) .
\qquad\text{(condensador)}$$

### 1.2 La relación RC = ε/g

En los dos problemas el campo es el mismo —misma geometría, misma ecuación de
Laplace, mismas condiciones—, así que el flujo de $\vec E$ es el mismo.
Dividiendo una expresión por la otra, el flujo y la diferencia de potencial se
cancelan:

$$\boxed{\ R\,C = \frac{\varepsilon}{g}\ }$$

> El docente se equivoca dos veces al hacer el cociente en el pizarrón y lo
> corrige; el resultado final es el de arriba. Un estudiante observa que tiene
> unidades de tiempo (segundos), lo cual reaparece en §2.3.

### 1.3 Cómo leerla

- **Si se sabe calcular la capacidad de una geometría, se sabe calcular la
  resistencia.** Es literalmente la misma cuenta: resolver Laplace en el medio
  (típicamente con una computadora, si la geometría no es simple), calcular el
  campo y la diferencia de potencial entre bornes, y relacionarla en un caso
  con la corriente y en el otro con la carga.
- Mientras más grande la capacidad, menor la resistencia, y viceversa.
- Requiere un conductor **óhmico, homogéneo e isotrópico**.

> **El mismo objeto visto de las dos maneras.** El Reitz sugiere aplicarlo a un
> único dispositivo: un condensador de mala calidad, que no logra aislar del
> todo, es a la vez un resistor de mala calidad. El docente advierte que eso es
> «un poco un abuso de lenguaje» —ya no es estrictamente un problema
> electrostático— y que vale si la carga pasa muy de a poco (cuasi-estático). A
> quien no le guste esa situación intermedia le alcanza con pensarlo como dos
> problemas distintos con igual geometría.

---

## 2. Aproximación al equilibrio electrostático

### 2.1 Planteo y alcance

Se considera un material **óhmico, homogéneo e isotrópico «de mala calidad»**
—alcanza con un resistor estándar—, que por eso también se puede ver como un
aislante de mala calidad, con una permitividad $\varepsilon$.

En equilibrio electrostático un conductor tiene campo nulo y **densidad
volumétrica de carga nula** en su interior. Pregunta: si en un instante hay
carga acumulada en algún lugar del material, ¿cuánto tarda en irse a cero
(hacia los bordes)?

> **Esto no se aplica a los buenos conductores.** En un metal el acercamiento
> al equilibrio es instantáneo para cualquier experimento macroscópico, y lo
> gobierna la física microscópica del movimiento de los electrones, que acá no
> se trata (§2.5).

> **¿Tiende a cero o llega a cero?** Pregunta de un estudiante. Físicamente no
> se distinguen: por debajo del umbral del aparato no se puede decidir. Y más
> fundamental: la carga está cuantizada, así que cuando la carga calculada es
> comparable con la del electrón la descripción continua deja de tener sentido.
> Desde el punto de vista macroscópico se la considera cero. Lo mismo vale para
> la descarga «exponencial» de un condensador.

### 2.2 Ecuación para la densidad de carga

Tres ingredientes: la ecuación de continuidad, la ley de Ohm y la ley de Gauss
en el medio visto como dieléctrico.

$$\frac{\partial\rho}{\partial t} = -\nabla\cdot\vec J,
\qquad \vec J = g\,\vec E,
\qquad \nabla\cdot\vec E = \frac{\rho}{\varepsilon} .$$

Sustituyendo una en otra:

$$\frac{\partial\rho}{\partial t} = -g\,\nabla\cdot\vec E
\quad\Longrightarrow\quad
\boxed{\ \frac{\partial\rho}{\partial t} = -\frac{g}{\varepsilon}\,\rho\ }$$

Lo notable: pintaba como una ecuación en derivadas parciales, pero las
coordenadas espaciales **no juegan ningún papel**. Es una ecuación diferencial
ordinaria, lineal y de primer orden, en el tiempo, para cada punto por separado.

### 2.3 Tiempo característico

La solución es una exponencial con una condición inicial que depende del punto:

$$\rho(t,x,y,z) = \rho_0(x,y,z)\;e^{-g t/\varepsilon}
= \rho_0\,e^{-t/t_c},
\qquad
\boxed{\ t_c = \frac{\varepsilon}{g} = \varepsilon\,\eta\ }$$

La densidad de carga va a cero para $t \gg t_c$; en la práctica alcanza con dos
o tres veces $t_c$, porque las exponenciales «van muy rápido». Es el mismo
tiempo $RC = \varepsilon/g$ de §1.2.

### 2.4 Órdenes de magnitud

Para que no quede abstracto, el docente invierte la pregunta: dado un aparato
con resolución temporal buena, $10^{-2}$ s, ¿qué resistividad hace falta para
que $t_c$ sea de ese orden?

- En un dieléctrico usual $\varepsilon$ está entre $\varepsilon_0$ y
  $10\,\varepsilon_0$ (una constante dieléctrica de 100 ya «es un montón»).
- Pidiendo $t_c \sim 10^{-2}$ s: $g = \varepsilon/t_c = 100\,\varepsilon\ \text{s}^{-1}
  \sim 10^{3}\,\varepsilon_0\ \text{s}^{-1}$.
- Con $\varepsilon_0 \sim 10^{-11}$ en unidades SI:
  $\eta = 1/g \sim 10^{-3}\,\text{s}/\varepsilon_0 \sim 10^{8}\ \Omega\cdot$m.

$$\eta \lesssim 10^{8}\ \Omega\cdot\text{m}
\quad\Longrightarrow\quad
\text{el conductor se ve \emph{siempre} en equilibrio.}$$

Ese «siempre» está atado a la resolución temporal elegida: con un aparato de
$10^{-6}$ s se podría observar el transitorio en resistividades más bajas.
Cuanto menor la resistividad, más rápido se llega al equilibrio.

Comparando con la tabla de resistividades de la clase anterior, según lo dicho
en clase:

| Material | Resistividad (orden) | ¿Se ve fuera del equilibrio? |
| --- | --- | --- |
| Metales | $10^{-8}\ \Omega\cdot$m — 16 órdenes por debajo | Nunca |
| Semiconductores | entre $10^{-5}$ y $10^{-2}\ \Omega\cdot$m | No |
| Solución salina típica | $10^{-2}\ \Omega\cdot$m | No |
| Vidrio (aislante) | $10^{10}$–$10^{14}\ \Omega\cdot$m | Sí: pasa mucho tiempo |

La idea a retener: **el equilibrio electrostático se alcanza extremadamente
rápido**; hacen falta aislantes realmente buenos —como el plástico de un
condensador de verdad— para que no se alcance.

### 2.5 Los metales

Para un metal esta cuenta no es realista: nunca se lo puede imaginar como un
dieléctrico de mala calidad y la descripción continua no vale. La relajación
tiene **otros mecanismos, microscópicos**, con tiempos característicos del
orden de $10^{-9}$ s (la cuenta de arriba daría algo todavía más corto). Igual
es poquísimo: los aparatos de medida normales no permiten ver un metal fuera
del equilibrio electrostático. El docente no describe esos mecanismos.

---

## 3. Circuitos con resistencias y baterías

Tramo de repaso de Física III (circuitos de corriente directa), «que no es
completamente inútil».

### 3.1 Corriente localizada

Hasta acá se estudió la corriente distribuida en un volumen. En los circuitos
usuales la corriente está **concentrada** en objetos localizados —cables,
resistores—, rodeados de aire, que es un buen aislante. Eso simplifica mucho:
alcanza con la corriente total $I$ y, en buena aproximación, no hace falta
conocer $\vec J(\vec r)$.

### 3.2 Por qué hace falta una fuente no electrostática

En un problema electrostático o estacionario el campo eléctrico es
conservativo: su circulación a lo largo de una malla cerrada es **cero**. Eso
es un problema: una diferencia de potencial de origen puramente electrostático
no puede sostener la corriente.

> **Para que un circuito funcione hay que aportarle energía cuyo origen no es
> electrostático.**

**Ejemplo mecánico** (los generadores de los siglos XVIII y XIX). Una chapa de
metal, una banda de goma aislante que gira con una manivela y un cepillo de
cerdas de cobre: la banda frota el metal, le arranca electrones, que quedan
depositados en el aislante —y por eso no pueden volver atrás— hasta llegar a
otro conductor, un borne, donde pasan al circuito y encienden, por ejemplo, una
lamparita. Alguien aporta energía mecánica y en el medio aparece una diferencia
de potencial.

**Baterías.** Hoy la fuente usual transforma «energía química» en eléctrica. La
objeción justa es que los fenómenos químicos **son** eléctricos a nivel atómico.
La salvedad: el electromagnetismo que describe las reacciones químicas no es el
clásico sino el cuántico, donde muchas de las cosas de este curso no valen; ahí
no se puede hacer una descripción macroscópica. La energía se almacena en
procesos eléctricos a nivel atómico o molecular, y esa «electrostática muy
distinta» es la que permite escapar a la regla de la circulación nula.

### 3.3 Baterías ideales y reales

**Batería ideal:** mantiene entre sus bornes una diferencia de potencial fija,
que el docente anota con una B cursiva, $\mathcal{B}$.

> **No se le va a llamar FEM.** En Física III se le llamó FEM a dos cosas
> ligeramente distintas; en este curso la FEM será otra cosa (aparece con la
> inducción). Por costumbre histórica el término puede aparecer en letras de
> parcial o de ejercicios: es un abuso de lenguaje.

**Batería real:** la diferencia de potencial depende de la corriente que
circula. Una aproximación bastante realista es

$$\Delta\phi = \mathcal{B} - r\,I,$$

con $r$ la **resistencia interna**. Equivale a una batería ideal con un
resistor $r$ en serie. Salvo aviso, en el curso «batería» es batería ideal. La
resistencia interna es relativamente pequeña: una pila comercial da bastante
bien 1,5 V hasta que se le pide mucha corriente.

> Una batería no se puede modelar como dos placas cargadas: un condensador
> almacena energía pero no mantiene un potencial fijo —su diferencia de
> potencial es proporcional a la carga y va cayendo.

### 3.4 Cables y resistores

- **Cable:** una línea en el esquema. Conductor ideal, típicamente cobre; por
  §2, en excelente aproximación está siempre en equilibrio y **todos sus puntos
  están a igual potencial**.
- **Resistor:** dispositivo óhmico de peor calidad, con $\Delta\phi = R\,I$
  entre sus bornes.

### 3.5 Resistores en serie y en paralelo

**En serie.** Pasa la misma corriente (no se acumula carga) y las diferencias de
potencial se suman:

$$\Delta\phi = R_1 I + R_2 I = (R_1+R_2)\,I
\quad\Longrightarrow\quad
\boxed{\ R_{\text{serie}} = R_1 + R_2\ }$$

**En paralelo.** La corriente se divide, $I = I_1 + I_2$, y la diferencia de
potencial es la misma en las dos ramas porque los cables son equipotenciales:

$$I = \frac{\Delta\phi}{R_1} + \frac{\Delta\phi}{R_2}
\quad\Longrightarrow\quad
\boxed{\ \frac{1}{R_{\text{paralelo}}} = \frac{1}{R_1} + \frac{1}{R_2}\ }$$

### 3.6 Leyes de Kirchhoff

| Ley | Enunciado | De dónde sale |
| --- | --- | --- |
| Primera (de los nudos) | Toda la corriente que entra a un nudo sale: $I = I_1 + I_2$ | Conservación de la carga; en régimen estacionario no se acumula carga en un conductor |
| Segunda | $\phi_C - \phi_A = (\phi_C - \phi_B) + (\phi_B - \phi_A)$ | El campo es conservativo: existe el potencial |
| Caso particular (de mallas) | La suma de las diferencias de potencial en una malla cerrada es cero | Se vuelve al punto inicial |

Sobre el signo de «diferencia de potencial entre A y B» se usan las dos
convenciones (es frecuente final menos inicial); lo que importa es ser
consistente.

### 3.7 Ejemplo: una malla

Una batería $\mathcal{B}$ y dos resistencias $R_1$ y $R_2$ en una única malla.
Recorriéndola, el potencial sube en la batería y cae en cada resistencia cuando
se la recorre en el sentido convencional elegido para la corriente:

$$\mathcal{B} - R_1 I - R_2 I = 0
\quad\Longrightarrow\quad
I = \frac{\mathcal{B}}{R_1 + R_2} .$$

Con varias mallas, en lugar de una ecuación queda un **sistema lineal** para el
conjunto de las corrientes. Los ejemplos con muchas mallas quedan para el
práctico.

---

## 4. Circuitos RC

### 4.1 El condensador como elemento y su signo

A cable, batería y resistor se agrega el **condensador**, con diferencia de
potencial $Q/C$. Hay que decidir a qué placa se le llama $+Q$ (la otra tiene
$-Q$). Si $Q>0$, la placa $+Q$ (punto A) es la de mayor potencial, de modo que
yendo de A a B

$$\phi_B - \phi_A = -\frac{Q}{C} :$$

**recorriendo de $+Q$ a $-Q$ el potencial cae.** Si $Q$ resultara negativo la
fórmula vale igual, porque cambian los dos signos a la vez.

### 4.2 Carga de un condensador

Circuito: una batería $\mathcal{B}$, un interruptor con dos posiciones (A y B),
una resistencia $R$ y un condensador $C$. Se llama $I$ a la corriente y $Q$ a
la carga de la placa a la que esa corriente llega, de modo que

$$\frac{dQ}{dt} = I .$$

> **El error clásico de signo.** Para decidir si es $+I$ o $-I$, probar un caso
> particular: si $I>0$ está llegando carga a la placa, entonces $Q$ crece y la
> derivada es positiva.

Con el interruptor en A, cerrado en $t=0$ y el condensador inicialmente
descargado, $Q(0)=0$ (un ejemplo de condición inicial; podría ser otra), la ley
de mallas da

$$\mathcal{B} - R\,I - \frac{Q}{C} = 0
\quad\Longrightarrow\quad
\boxed{\ \mathcal{B} = R\,\frac{dQ}{dt} + \frac{Q}{C}\ }$$

### 4.3 Resolución de la ecuación

Es una ecuación diferencial **lineal, no homogénea, de primer orden y con
coeficientes constantes**. Su solución general es una particular más la general
de la homogénea:

$$Q(t) = Q_p(t) + Q_h(t).$$

**Homogénea.** $R\,\dot Q + Q/C = 0$. Las lineales homogéneas con coeficientes
constantes tienen soluciones exponenciales:

$$Q_h(t) = K\,e^{-t/RC}.$$

**Particular.** La obvia es la solución **estacionaria**, que es una solución
física (no cumple la condición inicial pedida, pero sí alguna otra):
$\dot Q = 0 \Rightarrow Q_p = \mathcal{B}\,C$.

**Condición inicial.** $Q(0) = \mathcal{B}C + K = 0 \Rightarrow K = -\mathcal{B}C$:

$$\boxed{\ Q(t) = \mathcal{B}\,C\left(1 - e^{-t/RC}\right)\ }$$

La carga se acerca a su valor estacionario $\mathcal{B}C$ con tiempo
característico $RC$.

> **El exponente sólo puede ser negativo.** Si saliera positivo, la carga
> crecería sin límite, y eso exigiría que algo aportara energía cada vez mayor;
> la batería no alcanza. Si el signo no da negativo, hay un error.

### 4.4 Descarga

Pasando el interruptor a la posición B, la ecuación es la misma sin
$\mathcal{B}$: la solución es directamente la de la homogénea, con la constante
fijada por la carga que tenía el condensador en ese instante. Si no estaba
cargado, permanece en cero. El docente no lo detalla.

---

## 5. Límite de validez: régimen cuasi-estacionario

El docente reconoce «unas pequeñas trampitas». Varias de las expresiones
usadas —en particular $\Delta\phi = R\,I$— se dedujeron en régimen
**estacionario**, y en un circuito RC la carga depende del tiempo.

> **Observación.** En principio esas expresiones valen sólo en régimen
> estacionario. Sin embargo, si $Q$ no varía excesivamente rápido, siguen
> valiendo con buena aproximación.

¿Hasta dónde? El límite de validez queda **explícitamente pendiente** para un
capítulo posterior («ni siquiera el que viene»); todavía faltan las
herramientas. Lo que el docente adelanta: para los circuitos de mesa hay
margen, e incluso los circuitos normales de corriente alterna entran. La
aproximación falla a frecuencias muy altas, cuando el circuito empieza a
**radiar** y pierde energía por radiación; eso requiere las correcciones de
Maxwell a la ley de Ampère.

*Con esto cierra el capítulo de corriente eléctrica. La clase siguiente
empieza un capítulo nuevo: el campo magnético.*
