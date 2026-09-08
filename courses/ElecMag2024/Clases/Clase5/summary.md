# Resumen Clase 5 — Cierre del desarrollo multipolar, ecuaciones de Poisson y Laplace, teorema de unicidad

## Índice

1. [El desarrollo multipolar, término a término](#1-el-desarrollo-multipolar-término-a-término)
   - 1.1 [El problema de sacar $\vec r$ fuera de la integral](#11-el-problema-de-sacar-vec-r-fuera-de-la-integral)
   - 1.2 [La delta de Kronecker como herramienta](#12-la-delta-de-kronecker-como-herramienta)
   - 1.3 [Los tres momentos y el potencial](#13-los-tres-momentos-y-el-potencial)
2. [Qué dice el desarrollo](#2-qué-dice-el-desarrollo)
   - 2.1 [La jerarquía de comportamientos](#21-la-jerarquía-de-comportamientos)
   - 2.2 [Dependencia del origen de coordenadas](#22-dependencia-del-origen-de-coordenadas)
   - 2.3 [Para qué sirve, y la versión discreta](#23-para-qué-sirve-y-la-versión-discreta)
3. [Capítulo 2: por qué hace falta un método nuevo](#3-capítulo-2-por-qué-hace-falta-un-método-nuevo)
4. [La ecuación de Poisson](#4-la-ecuación-de-poisson)
   - 4.1 [Deducción](#41-deducción)
   - 4.2 [El operador laplaciano](#42-el-operador-laplaciano)
   - 4.3 [Qué tipo de ecuación es](#43-qué-tipo-de-ecuación-es)
5. [La ecuación de Laplace](#5-la-ecuación-de-laplace)
   - 5.1 [Primera propiedad: linealidad](#51-primera-propiedad-linealidad)
   - 5.2 [Segunda propiedad: unicidad](#52-segunda-propiedad-unicidad)

---

## 1. El desarrollo multipolar, término a término

La clase retoma exactamente donde quedó la anterior. Para una distribución continua localizada $\rho(\vec r\,')$ en un volumen $B$, con el origen **dentro** de $B$ y $r \gg a$ (siendo $a$ el tamaño típico), el potencial exacto es

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\int_B \frac{\rho(\vec r\,')}{|\vec r - \vec r\,'|}\,dV'$$

y el desarrollo de Taylor obtenido en la Clase 4 es

$$\frac{1}{|\vec r - \vec r\,'|} = \frac{1}{r} + \frac{\vec r\cdot\vec r\,'}{r^{3}} + \frac{1}{2}\left[\frac{3(\vec r\cdot\vec r\,')^{2}}{r^{5}} - \frac{r'^{2}}{r^{3}}\right] + \mathcal{O}(r'^{3})$$

> El desarrollo se puede llevar al orden que se quiera; dónde cortar lo fija la precisión buscada, como en cualquier Taylor. Acá se corta en $r'^2$, que es lo mismo que decir en $1/r^3$: el primer término es de orden $1/r$, el segundo de orden $1/r^2$ (hay un $r$ arriba y un $r^3$ abajo) y el tercero de orden $1/r^3$.

### 1.1 El problema de sacar $\vec r$ fuera de la integral

La estrategia es meter el desarrollo en la integral y **sacar afuera todo lo que dependa de $\vec r$**, porque $\vec r$ no se integra. Con los dos primeros términos sale solo:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\frac{1}{r}\int_B \rho(\vec r\,')\,dV'
\;+\; \frac{1}{4\pi\varepsilon_0}\frac{\vec r}{r^{3}}\cdot\int_B \rho(\vec r\,')\,\vec r\,'\,dV' \;+\;\cdots$$

Pero el tercer término tiene un producto escalar **al cuadrado**, $(\vec r\cdot\vec r\,')^2$, y ahí la factorización deja de ser obvia: no hay manera de sacar $\vec r$ como un factor vectorial limpio.

### 1.2 La delta de Kronecker como herramienta

La salida es pasar a componentes. Se introduce la **delta de Kronecker**:

$$\delta_{ij} = \begin{cases} 1 & \text{si } i = j\\ 0 & \text{si } i \neq j\end{cases}$$

Con ella, el producto escalar y su cuadrado se escriben por componentes:

$$\vec r\cdot\vec r\,' = \sum_{i=1}^{3} r_i r'_i
\qquad\Longrightarrow\qquad
(\vec r\cdot\vec r\,')^2 = \sum_{i,j=1}^{3} r_i r'_i\, r_j r'_j$$

Y —éste es el truco— el término $r'^2/r^3$, que a primera vista no tiene la misma forma, **se puede forzar a tenerla**. Notando que

$$r'^2 = \sum_{i,j=1}^{3} r'_i r'_j\,\delta_{ij} = \sum_{i=1}^{3} r_i'^2
\qquad\text{y análogamente}\qquad
r^2 = \sum_{i,j=1}^{3} r_i r_j\,\delta_{ij}$$

se puede escribir $\dfrac{r'^2}{r^3} = \dfrac{r'^2\,r^2}{r^5} = \sum_{i,j}\dfrac{r_i r_j}{r^5}\,r'^2\,\delta_{ij}$, que ya tiene el mismo factor $r_i r_j / r^5$ que el otro término.

> **Por qué complicar lo que parecía simple.** Escribir $r'^2$ como una suma doble con una delta es más largo, pero es lo único que permite **sacar toda la dependencia en $\vec r$ fuera de la integral en un solo factor común**. Ése es el objetivo del ejercicio.

Juntando los dos pedazos bajo la misma suma:

$$\text{3.\textsuperscript{er} término} = \frac{1}{4\pi\varepsilon_0}\cdot\frac{1}{2}\sum_{i,j=1}^{3}\frac{r_i r_j}{r^{5}}\int_B \rho(\vec r\,')\left[3 r'_i r'_j - r'^2\,\delta_{ij}\right]dV'$$

### 1.3 Los tres momentos y el potencial

Cada integral que quedó es una propiedad **de la distribución sola**, sin ninguna referencia al punto de observación. Se les da nombre:

| Momento | Definición | Cuántos números |
|---|---|---|
| **Carga total** | $Q = \displaystyle\int_B \rho(\vec r\,')\,dV'$ | 1 |
| **Momento dipolar** | $\vec p = \displaystyle\int_B \rho(\vec r\,')\,\vec r\,'\,dV'$ | 3 |
| **Momento cuadrupolar** | $Q_{ij} = \displaystyle\int_B \rho(\vec r\,')\left[3 r'_i r'_j - r'^2\delta_{ij}\right]dV'$ | 6 |

> El momento dipolar es la **generalización** del $\vec p = Q\vec L$ de la clase anterior: allá se definió para dos cargas puntuales, acá para una distribución continua, pero es la misma idea.

Con esto el potencial queda escrito como una serie de términos con potencias crecientes de $1/r$:

$$\boxed{\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}
\;+\; \frac{1}{4\pi\varepsilon_0}\frac{\vec p\cdot\vec r}{r^{3}}
\;+\; \frac{1}{2}\sum_{i,j=1}^{3}\frac{1}{4\pi\varepsilon_0}\frac{r_i r_j\,Q_{ij}}{r^{5}}
\;+\; \mathcal{O}\!\left(\frac{1}{r^{4}}\right)}$$

> **El tercer término es de orden $1/r^3$**, aunque el denominador diga $r^5$: los dos $r_i r_j$ del numerador se comen dos potencias. Es la misma contabilidad que en el segundo término, donde el $r^3$ de abajo y el $\vec r$ de arriba dejan $1/r^2$. La regla general: cada $\vec r\,'$ extra en el numerador trae un $1/r$ extra en el denominador — que es justamente por qué da lo mismo pensarlo como un desarrollo en $r'$ chico o en $r$ grande: lo que se desarrolla es el **cociente**.

El desarrollo sigue: el término siguiente se llama **momento octopolar** y tiene tres índices, el que le sigue cuatro, y así. El docente corta en $1/r^3$ «porque después las cuentas empiezan a ser demoníacas», aclarando que conceptualmente se podría llegar tan lejos como se quiera.

---

## 2. Qué dice el desarrollo

### 2.1 La jerarquía de comportamientos

El desarrollo formaliza lo que se había anticipado cualitativamente en la Clase 4:

| Si… | el comportamiento dominante a gran distancia es… |
|---|---|
| $Q \neq 0$ | el de una **carga puntual** ($\sim 1/r$) |
| $Q = 0$ | el de un **dipolo** ($\sim 1/r^2$) |
| $Q = 0$ y $\vec p = 0$ | el de un **cuadrupolo** ($\sim 1/r^3$) |
| … | … |

### 2.2 Dependencia del origen de coordenadas

Hay algo incómodo en estas expresiones: **dependen del sistema de coordenadas**, porque todas hacen referencia al punto $O$. Si se cambia el origen, $\vec p$ cambia.

> Eso no es un defecto sino la naturaleza del método: es un desarrollo de Taylor, y un Taylor se hace alrededor de un punto que uno elige. **La suma completa de la serie no cambia**; lo que cambia es cómo se reparte entre los términos.
>
> Sí hay una restricción real: **$O$ tiene que estar dentro de $B$**, para que $r'$ sea del orden del tamaño del sistema. Con el origen lejos, $r'$ ya no es chico y el desarrollo no es en el parámetro que se quería.

Pero hay una propiedad importante: **los momentos de un dado orden se vuelven independientes del origen cuando todos los de orden menor son nulos.** El caso concreto que se demuestra es el del momento dipolar.

**Demostración (dipolar).** Sean dos orígenes, $O$ y $\bar O$, y llámese $\vec{O\bar O}$ al vector que va de uno a otro. Un mismo punto fuente se mide como $\vec r\,'$ desde $O$ y como $\vec r\,''$ desde $\bar O$, con

$$\vec r\,'' = \vec r\,' - \vec{O\bar O}$$

El elemento de volumen no cambia (es un mero cambio de origen), así que

$$\vec p_{\bar O} = \int_B \rho(\vec r\,')\,\vec r\,''\,dV'
= \int_B \rho(\vec r\,')\,\vec r\,'\,dV' \;-\; \vec{O\bar O}\int_B \rho(\vec r\,')\,dV'
= \vec p_{O} - \vec{O\bar O}\,Q$$

$$\boxed{Q = 0 \quad\Longrightarrow\quad \vec p_{\bar O} = \vec p_{O}}$$

> Y es razonable que sea así: si la carga neta es cero, a gran distancia el sistema **se comporta** como un dipolo, y ese comportamiento observable no puede depender del sistema de coordenadas que eligió quien hace la cuenta. La fórmula además dice exactamente cuánto vale la ambigüedad cuando $Q\neq0$: es $\vec{O\bar O}\,Q$.

### 2.3 Para qué sirve, y la versión discreta

El argumento es de ingeniería, y el docente lo plantea así: una distribución de carga complicada, vista **de lejos**, no necesita guardarse entera. Basta con unos pocos números:

- la carga total: **1** número;
- el momento dipolar: **3** números;
- el momento cuadrupolar: **6** números —no nueve, porque $Q_{ij}$ es simétrica: la diagonal más los de fuera de la diagonal.

> Esto sólo sirve si se va a mirar de lejos. De cerca «no hay tutía»: hay que quedarse con toda la distribución. La moraleja es de modelado: guardar la mínima información compatible con la precisión con la que se va a trabajar.
>
> Ejemplos que se mencionan: una **antena** vista de lejos se reemplaza por su momento dipolar (todo esto es estático, pero el mismo desarrollo se hace para sistemas que dependen del tiempo). En **ondas gravitacionales**, en cambio, no hay efecto dipolar y lo que domina es el cuadrupolar, lo que obliga a un tratamiento más complicado.

Todo lo anterior se hizo para una distribución continua, pero funciona igual para un conjunto discreto de $N$ cargas puntuales: donde había integrales hay sumas, y donde había densidades hay cargas.

$$Q = \sum_{k=1}^{N} q_k
\qquad
\vec p = \sum_{k=1}^{N} q_k\,\vec r\,'_k
\qquad
Q_{ij} = \sum_{k=1}^{N} q_k\left[3\,r'_{k,i}\,r'_{k,j} - r_k'^2\,\delta_{ij}\right]$$

> **Aclaración pedida en clase:** cualquier distribución, para ser descrita exactamente, necesita **toda** la serie. Un dipolo real —dos cargas a distancia finita, no infinitesimal— tiene también momento cuadrupolar, octopolar, etcétera. Quedarse en el término dipolar es una decisión de precisión, no una propiedad del objeto.

> **Queda pendiente** la última sección del capítulo 1, la **delta de Dirac**. El docente la deja explícitamente «en el tintero» para retomarla más adelante, cuando la necesite.

---

## 3. Capítulo 2: por qué hace falta un método nuevo

Un estudiante podría objetar que la electrostática ya está resuelta, y en parte tendría razón: **si las cargas están dadas, con posiciones prefijadas, el problema está resuelto**. El campo deriva de un potencial y el potencial tiene una expresión explícita,

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\vec r\,')}{|\vec r - \vec r\,'|}\,dV'$$

y con $\vec E = -\nabla\phi$ se termina. Si la integral es horrible, se discretiza y se resuelve numéricamente (Simpson, cuadraturas gaussianas, lo que sea) con las cifras significativas que se quieran. No hay más nada que hacer.

**Pero hay otro tipo de problema electrostático: aquel en que la posición de la carga es parte de la incógnita.** El ejemplo de juguete es una **esfera conductora colocada en un campo eléctrico externo uniforme**: la esfera se polariza, la carga se redistribuye en su superficie, y el campo resultante toma una forma que no se conoce de antemano. La integral de Coulomb no sirve, porque **no se sabe dónde están las cargas**.

> El objetivo del capítulo es hallar métodos que resuelvan **a la vez** el campo y la posición de las cargas, al menos en situaciones relativamente simples. El docente aclara el alcance: éste es un curso de nivel **intermedio**, así que no se verá el caso más general, pero sí se llegará a situaciones relativamente realistas.
>
> **Alcance de este capítulo: sin dieléctricos.** No hay materiales aislantes que se polaricen localmente. Puede haber polarización de un metal por circulación de carga, pero no polarización local del material.

---

## 4. La ecuación de Poisson

### 4.1 Deducción

Las dos ecuaciones que caracterizan la electrostática sin dieléctricos, ya vistas en el capítulo anterior, son

$$\text{(1)}\quad \nabla\times\vec E = 0
\qquad\qquad
\text{(2)}\quad \nabla\cdot\vec E = \frac{\rho}{\varepsilon_0}$$

La primera dice que el campo es **conservativo**; la segunda es la ley de Gauss en forma diferencial. Resolver ambas es resolver el problema electrostático.

La (1) se puede aprovechar para simplificar: un campo irrotacional deriva de un potencial,

$$\vec E = -\nabla\phi$$

> Esto reduce un problema **vectorial** (tres funciones incógnita) a uno **escalar** (una sola). Es la ganancia práctica de usar el potencial.

Sustituyendo en (2):

$$\boxed{\nabla\cdot\nabla\phi = -\frac{\rho}{\varepsilon_0}}$$

que es la **ecuación de Poisson**.

> **⚠ Poisson no es literalmente «el problema general».** Vale para distribuciones **continuas** y en los puntos suaves. Donde hay singularidades —una carga puntual, o un borde con densidad **superficial** de carga, como la que se acumula en la superficie de un conductor— la ecuación no vale. El problema completo es entonces: Poisson en el volumen **más** el tratamiento de los bordes.

### 4.2 El operador laplaciano

Conviene pensar la composición «gradiente y después divergencia» como **un solo operador**, el producto escalar del gradiente consigo mismo. Se define el **laplaciano**:

$$\nabla^2\phi \equiv \nabla\cdot\nabla\phi$$

La definición vale para cualquier función escalar y en cualquier sistema de coordenadas. En cartesianas, partiendo de

$$\nabla\phi = \frac{\partial\phi}{\partial x}\hat\imath + \frac{\partial\phi}{\partial y}\hat\jmath + \frac{\partial\phi}{\partial z}\hat k
\qquad
\nabla\cdot\vec V = \frac{\partial V_x}{\partial x} + \frac{\partial V_y}{\partial y} + \frac{\partial V_z}{\partial z}$$

y sustituyendo una en la otra ($V_x \to \partial\phi/\partial x$, etc.):

$$\boxed{\nabla^2\phi = \frac{\partial^2\phi}{\partial x^2} + \frac{\partial^2\phi}{\partial y^2} + \frac{\partial^2\phi}{\partial z^2}}$$

de modo que Poisson en cartesianas es

$$\frac{\partial^2\phi}{\partial x^2} + \frac{\partial^2\phi}{\partial y^2} + \frac{\partial^2\phi}{\partial z^2} = -\frac{\rho}{\varepsilon_0}$$

### 4.3 Qué tipo de ecuación es

Vale la pena clasificarla, porque de eso dependen los métodos:

- Tiene derivadas: es una **ecuación diferencial**.
- Tiene derivadas respecto de **varias** variables (las tres coordenadas), no de una sola: es una **ecuación en derivadas parciales**, no una ecuación diferencial *ordinaria*. Ésta es la novedad respecto de todo lo que se vio antes.
- El laplaciano es un operador **lineal**: la dependencia en $\phi$ es lineal.
- Es de **segundo orden**, y tiene **segundo miembro** ($-\rho/\varepsilon_0$).

> La analogía que se ofrece es la **ecuación del resorte**: también lineal, de segundo orden y con segundo miembro. La única diferencia estructural es que aquella es ordinaria (derivadas respecto del tiempo) y ésta es en derivadas parciales (respecto de $x$, $y$, $z$).

---

## 5. La ecuación de Laplace

Cuando en la región de interés **no hay carga volumétrica** ($\rho = 0$), Poisson se reduce a la **ecuación de Laplace**:

$$\boxed{\nabla\cdot\nabla\phi = \nabla^2\phi = 0}
\qquad\Longleftrightarrow\qquad
\frac{\partial^2\phi}{\partial x^2} + \frac{\partial^2\phi}{\partial y^2} + \frac{\partial^2\phi}{\partial z^2} = 0$$

> No es un caso exótico: es exactamente el del ejemplo motivador. En la esfera conductora dentro de un campo externo no hay carga volumétrica **en ningún lado** — dentro del conductor no hay (propiedad de la Clase 4) y afuera está el vacío; toda la carga vive en la superficie, es decir, en el borde.

Laplace es la **ecuación homogénea asociada** a Poisson: es lo que queda al «apagar» el segundo miembro. De ahí, por la teoría general de ecuaciones lineales,

$$\text{solución general de Poisson} = \text{solución general de Laplace} + \text{una solución particular de Poisson}$$

### 5.1 Primera propiedad: linealidad

Si $\phi_1$ y $\phi_2$ son soluciones de Laplace, cualquier combinación lineal $c_1\phi_1 + c_2\phi_2$ también lo es. La verificación es directa, apoyada en que gradiente y divergencia son lineales:

$$\nabla^2(c_1\phi_1 + c_2\phi_2) = \nabla\cdot\nabla(c_1\phi_1 + c_2\phi_2) = c_1\nabla^2\phi_1 + c_2\nabla^2\phi_2 = 0$$

> Consecuencia: a partir de dos soluciones se construye un conjunto infinito de soluciones. El **conjunto de soluciones de Laplace forma un espacio vectorial**.

> **⚠ Cuidado con lo que ese espacio vectorial es y lo que no es.** Es el conjunto de soluciones **sin imponer condiciones de borde**. Las distintas soluciones **pueden no verificar las mismas condiciones de borde**, y de hecho en general no lo hacen. Resolver una ecuación diferencial requiere dar la ecuación **y** las condiciones; acá no son condiciones *iniciales* (eso remite a un problema temporal) sino **condiciones de borde**: cuánto vale el potencial, o su derivada normal, en el borde de la región.

### 5.2 Segunda propiedad: unicidad

**Planteo geométrico.** Se considera una región $B$ limitada por una superficie exterior $S_0$ y un conjunto de superficies interiores $S_1, S_2, \dots$; el problema es resolver Laplace en la región **entre** ellas. Físicamente: una cavidad metálica con varios conductores adentro.

**Dos tipos de condición de borde**, una por superficie (pueden ser de distinto tipo en distintas superficies):

| Tipo | Se da como dato | Nombre |
|---|---|---|
| 1 | $\phi\big|_{S_i}$ (no tiene por qué ser constante; en un metal sí lo es, por ser equipotencial) | **Dirichlet** |
| 2 | $\nabla\phi\cdot\hat n\,\big|_{S_i}$, es decir la componente normal del campo | **Von Neumann** |

> Se pueden estudiar condiciones más complicadas, o mezclas dentro de una misma superficie, pero ahí el problema se vuelve más difícil. Acá se consideran estas dos.

**Teorema.** *La ecuación de Laplace en $B$ con esas condiciones de borde tiene solución única, a menos de una constante aditiva.*

> Si alguna de las superficies tiene condición de **Dirichlet**, ni siquiera queda esa constante: el dato la fija. Con condiciones de Von Neumann puras sólo se dan derivadas, y sumar una constante sigue dando una solución. Esa constante, además, no es física.

> **«El teorema de todos los golpes están permitidos».** Así lo bautiza el docente, porque es la forma útil de pensar cualquier teorema de unicidad: si hay unicidad y uno encuentra **una** solución que cumple todas las condiciones de borde —por el mecanismo que sea, adivinando, con un truco, «pegando por debajo de la cintura»— entonces ganó, porque es *la* solución.
>
> La analogía es el sudoku: si el sudoku está bien diseñado y tiene solución única, encontrar una solución resuelve el problema; si está mal diseñado y admite varias, encontrar una no permite afirmar nada. Esto no es una guitarreada: va a ser la justificación de los métodos de las clases siguientes.

**Demostración (por el absurdo).** Supóngase que hay dos soluciones $\phi_1$ y $\phi_2$ del problema **completo** (Laplace en $B$ más las condiciones de borde en las $S_i$). Se define su diferencia

$$\Phi \equiv \phi_1 - \phi_2$$

Por linealidad, $\Phi$ satisface Laplace en $B$. Y satisface condiciones de borde **mucho más simples**: como $\phi_1$ y $\phi_2$ tienen los mismos datos, la resta los anula. En cada superficie vale una de las dos:

$$\Phi\big|_{S_i} = 0 \qquad\text{o}\qquad \nabla\Phi\cdot\hat n\,\big|_{S_i} = 0$$

Se define ahora el campo auxiliar

$$\vec D \equiv \Phi\,\nabla\Phi$$

y se calcula su divergencia con la regla del producto para la divergencia de (escalar $\times$ vector), $\nabla\cdot(f\vec A) = \nabla f\cdot\vec A + f\,\nabla\cdot\vec A$:

$$\nabla\cdot\vec D = \nabla\Phi\cdot\nabla\Phi + \Phi\,\nabla^2\Phi = |\nabla\Phi|^2$$

donde el segundo término se anula **porque $\Phi$ satisface Laplace**.

> **Interpretación física (no necesaria para la prueba, pero sí para entenderla).** La densidad de energía electrostática es $u = \tfrac{1}{2}\varepsilon_0|\vec E|^2$. Como $\nabla\Phi$ es (menos) el campo asociado a $\Phi$, la cantidad $|\nabla\Phi|^2$ es proporcional a la densidad de energía electrostática de la diferencia.

Aplicando el teorema de la divergencia sobre $B$, con $\partial B = S_0 \cup S_1 \cup \cdots \cup S_n$:

$$\int_B |\nabla\Phi|^2\,dV = \int_B \nabla\cdot\vec D\,dV = \oint_{\partial B} \Phi\,\nabla\Phi\cdot\hat n\,dS = 0$$

La integral de superficie se anula **por las condiciones de borde**: en cada superficie, o bien $\Phi = 0$, o bien $\nabla\Phi\cdot\hat n = 0$; en cualquiera de los dos casos el integrando es nulo ahí.

Queda entonces

$$\int_B |\nabla\Phi|^2\,dV = 0$$

con un integrando **positivo o nulo y continuo**. Sumando cantidades no negativas y obteniendo cero, todas tenían que ser cero:

$$|\nabla\Phi|^2 = 0 \;\;\text{en todo }B
\quad\Longrightarrow\quad
\nabla\Phi = 0 \;\;\text{en todo }B
\quad\Longrightarrow\quad
\Phi = \text{constante}$$

$$\boxed{\phi_1 = \phi_2 + \text{cte.}}$$

> **La hipótesis de continuidad no es decorativa.** Si la cantidad no fuera suave se podría tener una singularidad en un punto y el argumento fallaría; se están buscando soluciones suaves.

> **Lo que está en el corazón de la prueba:** la diferencia entre dos soluciones es una configuración con **energía electrostática nula** dentro de $B$. Eso es lo que dice Laplace con condiciones de borde homogéneas. Nótese que es la *energía de la diferencia*, no la diferencia de energías; y que $\Phi$ resulta equipotencial aunque el problema original no tenga por qué serlo.

*Continúa en la Clase 6, con la ecuación de Laplace en otros sistemas de coordenadas —cilíndricas, esféricas— y el comienzo de su resolución, empezando por las situaciones más simples.*
