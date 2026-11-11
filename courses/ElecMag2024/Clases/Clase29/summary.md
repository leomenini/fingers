# Resumen Clase 29 — Por qué funcionó la corrección de Maxwell, ecuaciones de onda y ondas planas monocromáticas

## Índice

1. [¿Por qué acertó Maxwell?](#1-por-qué-acertó-maxwell)
   - [1.1 Simplicidad y experimento](#11-simplicidad-y-experimento)
   - [1.2 La opinión del docente: teorías vistas de lejos](#12-la-opinión-del-docente-teorías-vistas-de-lejos)
2. [Ecuaciones de onda del electromagnetismo](#2-ecuaciones-de-onda-del-electromagnetismo)
   - [2.1 Hipótesis](#21-hipótesis)
   - [2.2 Ecuación de onda para H](#22-ecuación-de-onda-para-h)
   - [2.3 Disipación y el papel del término de Maxwell](#23-disipación-y-el-papel-del-término-de-maxwell)
   - [2.4 Ecuación de onda para E](#24-ecuación-de-onda-para-e)
   - [2.5 Maxwell tiene más información](#25-maxwell-tiene-más-información)
3. [Soluciones monocromáticas](#3-soluciones-monocromáticas)
   - [3.1 Separar el tiempo: la ecuación de Helmholtz](#31-separar-el-tiempo-la-ecuación-de-helmholtz)
   - [3.2 Ecuaciones elípticas, parabólicas e hiperbólicas](#32-ecuaciones-elípticas-parabólicas-e-hiperbólicas)
   - [3.3 Onda plana](#33-onda-plana)
   - [3.4 La velocidad de la luz](#34-la-velocidad-de-la-luz)
4. [Ondas planas monocromáticas en las ecuaciones de Maxwell](#4-ondas-planas-monocromáticas-en-las-ecuaciones-de-maxwell)
   - [4.1 El ansatz](#41-el-ansatz)
   - [4.2 Las ecuaciones de Maxwell para una onda plana](#42-las-ecuaciones-de-maxwell-para-una-onda-plana)
   - [4.3 Consecuencias](#43-consecuencias)

---

## 1. ¿Por qué acertó Maxwell?

«Todo termina»: es la última clase del curso.

### 1.1 Simplicidad y experimento

Maxwell modificó la ley de Ampère de manera **minimalista**, para volverla
matemáticamente consistente: tomó el campo más simple que coincidía con
$\vec J$ en el caso estacionario y tenía divergencia nula. Eso debería
sorprender. Lo que da valor a una ley física no es la simplicidad ni la
estética sino que **la corroboren los experimentos**; el mundo podría haber
dicho, como en un libro de Feynman, «a mí tu argumento no me gusta». Las leyes
de Maxwell valían antes de que él las escribiera.

Había miles de modificaciones posibles y la más simple es la correcta: un siglo
y medio después no se conoce ningún experimento que la contradiga. Ha pasado
varias veces en la historia de la física —Einstein con la relatividad general
es otro ejemplo— que leyes elegidas por argumentos estéticos resultaran
exitosas.

### 1.2 La opinión del docente: teorías vistas de lejos

> Lo que sigue es, como él aclara, su **opinión como investigador**.

- **No es que la naturaleza dirija lo que nos resulta lindo; es al revés.** Los
  criterios estéticos son subjetivos y se forman aprendiendo física: los
  físicos teóricos aprenden a valorar lo que tiene chance de funcionar, y
  terminan llamando «lindo» a eso. La versión cualitativa de esta idea es
  «bastante falaciosa»; la que se sabe objetivar es la de las teorías
  cuánticas de campos.
- **Renormalizabilidad.** Primero con la electrodinámica cuántica y luego, en
  los años 70 y 80, con otras teorías, se usó como guía la condición de ser
  **renormalizables**: un criterio de consistencia matemática que obliga a las
  teorías a ser relativamente simples.
- **Weinberg.** Hacia fines de los 90, Steven Weinberg cuestionó esa idea en un
  artículo —«casi de divulgación, para físicos»— cuyo título el docente traduce
  como «¿Qué es la teoría cuántica de campos y qué es lo que creíamos que
  era?». El docente se declara muy cercano a esa postura: **la física no es
  particularmente simple**. Cuando una teoría tiene una escala fundamental y se
  la mira a escalas mucho mayores, «los zapallos se van ordenando en el carro»
  y lo que sobrevive es una teoría simple.
- **El electromagnetismo** puede ser muy complicado a la escala de la teoría
  electrodébil —un centésimo del radio del protón—, pero se lo observa a
  distancias muchísimo mayores, donde sólo sobrevive lo simple.

**Analogía: la Tierra y la Luna.** La Tierra es un objeto extremadamente
complicado (con ocho mil millones de personas, y mucho más que personas). Sin
embargo, para estudiar su interacción con la Luna alcanza con las dos masas y la
distancia: los radios son mucho menores que la separación. Es la idea del
**desarrollo multipolar** «del cual han sido víctimas en este curso»: un objeto
complicado visto de lejos se comporta como uno simple.

---

## 2. Ecuaciones de onda del electromagnetismo

Uno de los grandes éxitos de las ecuaciones de Maxwell: tienen **ondas
electromagnéticas**, y entre ellas está la luz.

### 2.1 Hipótesis

- Medios **lineales, homogéneos e isotrópicos**: $\vec D = \varepsilon\vec E$,
  $\vec B = \mu\vec H$, y la ley de Ohm $\vec J = g\vec E$.
- Regiones **sin densidad volumétrica de carga**, $\rho = 0$.

El docente marca en azul, en el pizarrón, los términos que vienen de la
corrección de Maxwell, para seguirles la pista.

### 2.2 Ecuación de onda para H

Se toma el rotacional de la ley de Ampère–Maxwell:

$$\curl(\curl\vec H) = \curl\vec J + \pdv{t}\left(\curl\vec D\right)
= g\,\curl\vec E + \varepsilon\,\pdv{t}\left(\curl\vec E\right).$$

Con la identidad, válida para cualquier campo vectorial,

$$\curl(\curl\vec v) = \grad(\div\vec v) - \laplacian\vec v,$$

que casi puede tomarse como la **definición** del laplaciano de un vector (en
cartesianas es la suma de las derivadas segundas de cada componente; se ve en
el práctico):

- $\div\vec H = \div\vec B/\mu = 0$, porque **no hay monopolos**;
- $\curl\vec E = -\partial\vec B/\partial t = -\mu\,\partial\vec H/\partial t$,
  por **Faraday**.

Sacando los signos que aparecen en todos los términos:

$$\boxed{\ \laplacian\vec H = \mu g\,\pdv{\vec H}{t} + \mu\varepsilon\,\pdv[2]{\vec H}{t}\ }$$

### 2.3 Disipación y el papel del término de Maxwell

- El término proporcional a $g$ describe la **disipación por efecto Joule**: una
  onda que se propaga en un conductor se atenúa, y esa energía se transforma en
  calor.
- Los términos que describen propiamente la onda son el laplaciano y la
  **derivada segunda temporal**. Si todo fuera estacionario quedaría Laplace.
  Para tener oscilaciones en una ecuación lineal hacen falta **al menos dos
  derivadas temporales**: con una sola salen exponenciales, no sinusoides.

> **Sin el término de Maxwell no hay ondas.** La derivada segunda temporal viene
> de $\partial\vec D/\partial t$. Sin ella, aun sin disipación, quedaría la
> ecuación de Laplace; y con disipación, una **ecuación del calor**. El término
> de desplazamiento es clave para la existencia de las ondas electromagnéticas.

### 2.4 Ecuación de onda para E

El mismo razonamiento, ahora partiendo de la ecuación para el rotacional de
$\vec E$, que es Faraday:

$$\curl(\curl\vec E) = -\pdv{t}\left(\curl\vec B\right)
= -\mu\,\pdv{t}\left(\vec J + \pdv{\vec D}{t}\right).$$

Como no hay carga, $\div\vec E = \rho/\varepsilon = 0$; con la ley de Ohm y
$\vec D = \varepsilon\vec E$:

$$\boxed{\ \laplacian\vec E = \mu g\,\pdv{\vec E}{t} + \mu\varepsilon\,\pdv[2]{\vec E}{t}\ }$$

**Idéntica** a la de $\vec H$. En un aislante —en particular en el vacío— la
conductividad es nula y el término disipativo no aparece.

### 2.5 Maxwell tiene más información

> **Ojo:** Maxwell implica las ecuaciones de onda, pero **tiene más
> información** que ellas.

A nivel de las ecuaciones de onda, $\vec E$ y $\vec B$ están desacoplados;
pero, por ejemplo, el rotacional de $\vec E$ está ligado a la variación de
$\vec B$: si hay un campo eléctrico variable tiene que haber uno magnético. Eso
se ve en §4.

---

## 3. Soluciones monocromáticas

Se hace para el campo eléctrico (para el magnético es idéntico) y en el
**vacío**. Vale igual en cualquier **aislante** ($g = 0$, sin disipación),
reemplazando $\mu_0\varepsilon_0$ por $\mu\varepsilon$:

$$\laplacian\vec E = \mu_0\varepsilon_0\,\pdv[2]{\vec E}{t}.$$

### 3.1 Separar el tiempo: la ecuación de Helmholtz

**Monocromáticas**: con una única frecuencia angular, como en los circuitos.
Una fuente oscilante se descompone en Fourier y se mira un modo por vez. El
nombre viene de que, para la luz, corresponden a un único color; la luz real es
una superposición de colores.

$$\vec E(\vec r, t) = e^{-i\omega t}\,\hat{\vec E}(\vec r).$$

Como en los circuitos, se extiende el problema a los complejos y **la solución
física es la parte real**. (El docente elige el signo menos en la exponencial.)

Cada derivada temporal baja un $-i\omega$, y la exponencial se cancela:

$$\boxed{\ \laplacian\hat{\vec E} = -\,\mu_0\varepsilon_0\,\omega^2\,\hat{\vec E}\ }$$

la **ecuación de Helmholtz**, para la parte espacial de la onda. Se parece
mucho a Laplace: en lugar de igualarse a cero, el laplaciano es proporcional a
la función.

### 3.2 Ecuaciones elípticas, parabólicas e hiperbólicas

Mucho de lo aprendido con Laplace sirve acá: es también una ecuación en
derivadas parciales lineal. La clasificación, por analogía con las cónicas:

| Ecuación | Tipo | Por qué |
| --- | --- | --- |
| Laplace | **Elíptica** | Todos los coeficientes del mismo signo, como en una elipse |
| Del calor | **Parabólica** | Una variable aparece con derivada primera |
| De onda | **Hiperbólica** | Al pasar el término temporal de lado aparecen signos opuestos, como en una hipérbola |

(El docente dice primero «parabólica» para la de onda y se corrige.)

### 3.3 Onda plana

Una **onda plana** es una idealización —ninguna fuente real genera un campo
exactamente plano—, pero una buena aproximación lejos de la fuente: el campo
vale lo mismo en todo un plano. Con $x$ perpendicular a ese plano,
$\hat{\vec E} = \hat{\vec E}(x)$ y el laplaciano es sólo la derivada segunda en
$x$:

$$\frac{d^2\hat{\vec E}}{dx^2} + \mu_0\varepsilon_0\,\omega^2\,\hat{\vec E} = 0 .$$

Es la ecuación del **oscilador armónico** —la que «capaz que más han visto»—,
con $x$ en el lugar del tiempo. Su solución general, con dos constantes
vectoriales $\vec a$ y $\vec b$:

$$\hat{\vec E}(x) = \vec a\,e^{ikx} + \vec b\,e^{-ikx},
\qquad
\boxed{\ k^2 = \mu_0\varepsilon_0\,\omega^2\ }$$

$k$ es el **número de ondas**, el análogo espacial de la frecuencia angular.
Volviendo a poner el tiempo:

$$\vec E(x,t) = \vec a\,e^{i(kx-\omega t)} + \vec b\,e^{-i(kx+\omega t)}:$$

una onda que se propaga hacia $+x$ y otra hacia $-x$. (Las constantes $\vec a$
y $\vec b$ no tienen nada que ver con el campo magnético; el docente usó otras
letras.)

### 3.4 La velocidad de la luz

| Temporal | Espacial |
| --- | --- |
| Frecuencia angular $\omega$ | Número de ondas $k$ |
| Período $T = 2\pi/\omega$ | Longitud de onda $\lambda = 2\pi/k$ |

La velocidad de una onda es la longitud de onda sobre el período:

$$v = \frac{\lambda}{T} = \frac{\omega}{k}
\quad\Longrightarrow\quad
\boxed{\ v = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = 2{,}9979\times10^{8}\ \text{m/s}\ }$$

Es una velocidad de naturaleza **puramente electromagnética**, y coincide con
la velocidad de la luz medida independientemente. Es uno de los grandes éxitos
del electromagnetismo: refuerza la idea de que **la luz es un caso particular
de onda electromagnética**.

No toda onda electromagnética es luz: se llama luz a las que el ojo humano
puede ver, un rango de frecuencias —el **visible**, del rojo al violeta—. Por
encima del violeta, el **ultravioleta**; por debajo del rojo, el
**infrarrojo**. «Las infrarrojas en general las sentimos como calor y las
ultravioletas las sentimos como cáncer de piel.»

---

## 4. Ondas planas monocromáticas en las ecuaciones de Maxwell

### 4.1 El ansatz

Ahora se busca la onda plana directamente en las ecuaciones de Maxwell, que
tienen más información. Con $\hat k$ un versor perpendicular a los planos de la
onda (la dirección de propagación, cualquiera) se define el **vector de onda**
$\vec k = k\,\hat k$, de módulo el número de ondas:

$$\vec E(\vec r,t) = \hat{\vec E}\,e^{i(\vec k\cdot\vec r-\omega t)},
\qquad
\vec B(\vec r,t) = \hat{\vec B}\,e^{i(\vec k\cdot\vec r-\omega t)},$$

con $\hat{\vec E}$ y $\hat{\vec B}$ vectores constantes. Con $\hat k = \hat\imath$
se recupera la onda hacia $+x$ de §3.3, y con $\hat k = -\hat\imath$ la otra.

> Ya se puso, «adelantándose al sentido común», la **misma** dirección de
> propagación para los dos campos. No hay solución de onda plana con el campo
> eléctrico propagándose en una dirección y el magnético en otra.

### 4.2 Las ecuaciones de Maxwell para una onda plana

Medio lineal, **aislante** (sin corriente) y sin carga:

$$\div\vec E = 0,\qquad \div\vec B = 0,\qquad
\curl\vec E = -\pdv{\vec B}{t},\qquad
\curl\vec B = \mu\varepsilon\,\pdv{\vec E}{t}.$$

Para la onda plana, cada derivada se reemplaza por un factor:

$$\pdv{t}\to -i\omega,\qquad \pdv{x_i}\to i\,k_i .$$

Las ecuaciones de Maxwell quedan algebraicas (simplificando los factores $i$):

$$\boxed{\ \vec k\cdot\hat{\vec E} = 0,\qquad
\vec k\cdot\hat{\vec B} = 0,\qquad
\vec k\times\hat{\vec E} = \omega\,\hat{\vec B},\qquad
\vec k\times\hat{\vec B} = -\mu\varepsilon\,\omega\,\hat{\vec E}\ }$$

Las dos últimas **vinculan** los campos eléctrico y magnético: no son
independientes.

### 4.3 Consecuencias

1. **Ondas transversales.** Por las dos primeras, $\hat{\vec E}$ y
   $\hat{\vec B}$ son perpendiculares a la dirección de propagación: oscilan en
   las direcciones transversales, nunca en la longitudinal.
2. **$\vec E\perp\vec B$.** Por la tercera, $\hat{\vec B} = \dfrac{1}{\omega}\,\vec k\times\hat{\vec E}$:
   el campo magnético es perpendicular al eléctrico (y los dos a
   $\vec k$).
3. **La velocidad.** Haciendo el producto vectorial de la tercera con
   $\vec k$ y usando la cuarta:
   $$\vec k\times(\vec k\times\hat{\vec E}) = -\mu\varepsilon\,\omega^2\,\hat{\vec E}.$$
   Como $\vec k\times(\vec k\times\hat{\vec E}) = (\vec k\cdot\hat{\vec E})\,\vec k - k^2\hat{\vec E}$
   y el primer término es nulo por la transversalidad,
   $$k^2 = \mu\varepsilon\,\omega^2
   \quad\Longrightarrow\quad
   \boxed{\ v^2 = \frac{\omega^2}{k^2} = \frac{1}{\mu\varepsilon}\ }$$
   para cualquier aislante; en el vacío es la velocidad de la luz.
4. **Las amplitudes están ligadas.** Tomando módulos en la tercera ecuación
   (como $\vec k\perp\hat{\vec E}$, el módulo del producto vectorial es el
   producto de los módulos):
   $$\boxed{\ |\hat{\vec B}| = \frac{k}{\omega}\,|\hat{\vec E}| = \frac{|\hat{\vec E}|}{v}\ }$$

No toda solución de onda plana de la ecuación de onda es compatible con
Maxwell. En particular, como preguntaba un estudiante, no se puede tener sólo
campo eléctrico o sólo campo magnético: están relacionados entre sí.

*Con esto termina el curso, «con 15 minutos de adelanto». Nos vemos en el
parcial.*
