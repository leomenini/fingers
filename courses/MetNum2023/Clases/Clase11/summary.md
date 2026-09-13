# Resumen Clase 11 — Polinomio Interpolante

## Índice

1. [Cierre de métodos iterativos: criterios de parada](#1-cierre-de-métodos-iterativos-criterios-de-parada)
   - 1.1 [Criterio del residuo](#11-criterio-del-residuo)
   - 1.2 [Criterio de la diferencia entre iterados](#12-criterio-de-la-diferencia-entre-iterados)
   - 1.3 [Red de contención](#13-red-de-contención)
2. [Interpolación: el problema](#2-interpolación-el-problema)
   - 2.1 [¿Por qué interpolar? Motivación](#21-por-qué-interpolar-motivación)
3. [Existencia y unicidad del polinomio interpolante](#3-existencia-y-unicidad-del-polinomio-interpolante)
   - 3.1 [Demostración por inducción completa](#31-demostración-por-inducción-completa)
4. [Construcción por Vandermonde](#4-construcción-por-vandermonde)
   - 4.1 [El problema de condicionamiento de Vandermonde](#41-el-problema-de-condicionamiento-de-vandermonde)
   - 4.2 [El problema de no incrementalidad](#42-el-problema-de-no-incrementalidad)

---

## 1. Cierre de métodos iterativos: criterios de parada

Punto pendiente de la unidad de sistemas lineales: dado un método iterativo
matricial (Jacobi, Gauss-Seidel, relajaciones), ¿con qué criterio se
detiene? Hasta ahora sólo se había hablado de convergencia y velocidad de
convergencia, no de implementación práctica.

### 1.1 Criterio del residuo

Parar cuando $\|r_k\| = \|Ax_k - b\| < \text{tol}$ (norma vectorial a
elección).

> **Se conecta con el número de condición** (resultado ya probado en la
> unidad de Sistemas Lineales): $\dfrac{\|e_k\|}{\|x^\star\|} \leq
> \kappa(A)\cdot\dfrac{\|r_k\|}{\|b\|}$. En la práctica conviene usar como
> tolerancia $\varepsilon\cdot\|b\|$ (conocido, ya que $b$ es un dato), así
> que parar cuando $\|r_k\| < \varepsilon\|b\|$ garantiza
> $\dfrac{\|e_k\|}{\|x^\star\|} < \varepsilon\cdot\kappa(A)$: el error
> relativo queda acotado por la tolerancia multiplicada por el número de
> condición. Si $A$ no está muy mal condicionada, el criterio es confiable.

### 1.2 Criterio de la diferencia entre iterados

Parar cuando $\|x_{k+1}-x_k\| < \text{tol}$: si el iterado dejó de moverse,
no tiene sentido seguir.

**Análisis**: usando $x_{k+1}=Qx_k+r$ (forma del método iterativo matricial)
y la misma ecuación para $x^\star = Qx^\star + r$, restando se obtiene la
ecuación del error $e_{k+1} = Qe_k$. Sumando y restando $x_{k+1}$:

$$e_k = (x_k - x_{k+1}) + (x_{k+1} - x^\star) = (x_k-x_{k+1}) + Qe_k$$

Tomando norma y desigualdad triangular:

$$\|e_k\| \leq \|x_{k+1}-x_k\| + \|Q\|\,\|e_k\|$$

(usando compatibilidad de la norma operador de $Q$ con la vectorial).
Despejando (válido si $\|Q\|<1$):

$$\boxed{\|e_k\| \leq \frac{\|x_{k+1}-x_k\|}{1-\|Q\|} < \frac{\varepsilon}{1-\|Q\|}}$$

> **Cuidado**: esto exige que **la norma con la que se mide $Q$** cumpla
> $\|Q\|<1$ — no cualquier norma matricial sirve, aunque el método sea
> convergente (convergencia garantiza radio espectral $<1$, que es un
> ínfimo sobre normas, no que toda norma dé $<1$). Si el método converge,
> se espera que exista alguna norma que sí cumpla la cota, pero hay que
> acertarle a esa norma.

### 1.3 Red de contención

Ambos criterios pueden no alcanzarse nunca en tiempo razonable si la matriz
está muy mal condicionada (ejemplo citado: matrices de Hilbert, tema de un
ejercicio del práctico — "se te va la vida" esperando). Por eso, en la
práctica, se combina cualquiera de los dos criterios con un **tope máximo
de iteraciones** ($k < 10\,000$, o el que se elija) como red de seguridad.

## 2. Interpolación: el problema

Cambio de tema — arranca la unidad de **Interpolación**, herramienta propia
de la matemática computacional y el análisis numérico.

**Interpolar** = unir puntos con una función. Formalmente: dados $n+1$
puntos en el plano $(x_i,y_i)$, $i=0,\dots,n$, con **las coordenadas $x_i$
distintas dos a dos**, hallar $\varphi: \mathbb{R}\to\mathbb{R}$ tal que
$\varphi(x_i)=y_i$ para todo $i$.

> **La condición $x_i$ distintos es necesaria**: si dos puntos comparten
> abscisa, no puede existir función (en el sentido usual) que pase por
> ambos.

Sin restricciones adicionales, el problema tiene **infinitas soluciones**
(está mal planteado: demasiada libertad para $\varphi$). Hace falta
restringir la clase de funciones. Este curso trabaja **interpolación
polinomial** ($\varphi$ = polinomio algebraico); existe también
interpolación con polinomios trigonométricos (base de Fourier, útil en
procesamiento de señales), con teoría distinta, no cubierta acá.

### 2.1 ¿Por qué interpolar? Motivación

- **Pasar de datos discretos a un objeto continuo**: para integrar, derivar,
  o encontrar ceros de una función que sólo se conoce en puntos aislados,
  conviene construir primero $\varphi$ y operar sobre ella.
- **Diseño asistido por computadora (CAD)**: por qué al hacer zoom sobre
  texto vectorial (p. ej. en un PDF) las letras no se pixelan — las fuentes
  no almacenan un dibujo, sino puntos de control, y el trazo se reconstruye
  por interpolación polinomial. Escalar es simplemente reescalar los
  puntos de control. Origen histórico en el diseño industrial de los años
  60 (prototipos de autos en madera → control numérico de máquinas).

## 3. Existencia y unicidad del polinomio interpolante

**Teorema**: dados $n+1$ puntos en el plano con abscisas distintas, existe
un **único** polinomio $p_n$ de grado $\leq n$ tal que $p_n(x_i)=y_i$ para
todo $i$. Se le llama **el polinomio interpolante** por esos puntos.

> **Por qué grado $\leq n$ para $n+1$ puntos**: 1 punto → grado 0
> (constante); 2 puntos → grado 1 (recta); en general, la cantidad de
> puntos tiene que ser uno más que el grado. El "$\leq$" (no "$=$") es
> necesario porque, por ejemplo, con 2 puntos a la misma altura, la única
> función que pasa por ambos es una recta que degeneró en constante — un
> polinomio de grado exactamente 1 "sobra" en ese caso particular.

### 3.1 Demostración por inducción completa

**Paso base** ($n=0$): un único punto $(x_0,y_0)$. El único polinomio de
grado $0$ (constante) que cumple $p_0(x_0)=y_0$ es $p_0(x)\equiv y_0$.
Existencia y unicidad triviales.

**Paso inductivo**: suponiendo el teorema válido para $n-1$ (existe un
único $p_{n-1}$ de grado $\leq n-1$ que interpola los **primeros $n$**
puntos, $i=0,\dots,n-1$), se construye $p_n$ a partir de $p_{n-1}$ más un
**polinomio de corrección** $q$:

$$p_n(x) = p_{n-1}(x) + q(x)$$

Como cualquier polinomio de grado $\leq n$ se puede escribir de esta forma
(restando $p_{n-1}$, que es de grado $\leq n-1 \leq n$, queda algo de grado
$\leq n$), esta escritura no pierde generalidad.

**Requisitos sobre $q$**: para no arruinar el trabajo ya hecho por
$p_{n-1}$ en los primeros $n$ puntos, $q$ debe anularse en $x_0,\dots,x_{n-1}$
— eso son $n$ raíces para un polinomio de grado $\leq n$, así que

$$q(x) = a_n\prod_{i=0}^{n-1}(x-x_i)$$

para alguna constante $a_n$ (la única libertad que queda). Imponiendo la
condición que falta, $p_n(x_n)=y_n$:

$$y_n = p_{n-1}(x_n) + a_n\prod_{i=0}^{n-1}(x_n-x_i)$$

> **Acá es donde se usa que las abscisas son distintas dos a dos**: ninguno
> de los factores $(x_n-x_i)$ es cero, así que se puede despejar
> $$a_n = \frac{y_n - p_{n-1}(x_n)}{\displaystyle\prod_{i=0}^{n-1}(x_n-x_i)}$$

Esto determina $a_n$ **de forma única**, lo que prueba **simultáneamente**
existencia y unicidad del paso inductivo. $\blacksquare$

## 4. Construcción por Vandermonde

Existencia y unicidad no dan, por sí solas, una forma de calcular el
polinomio en la computadora. Primera de tres formas que se van a ver (ésta
y la próxima clase) de escribir el mismo polinomio interpolante en bases
distintas del espacio de polinomios de grado $\leq n$.

**Base monomial**: $p_n(x) = c_0 + c_1x + c_2x^2 + \dots + c_nx^n$. Imponer
$p_n(x_i)=y_i$ para $i=0,\dots,n$ da un **sistema lineal** $n+1\times n+1$
en las incógnitas $c_0,\dots,c_n$:

$$Bc = y, \qquad B_{ij} = x_i^{\,j}$$

$B$ es la **matriz de Vandermonde**. Es invertible porque el teorema de
existencia-unicidad de §3 ya garantiza solución única al problema — no hace
falta un argumento algebraico aparte (aunque también se ve directo: si dos
$x_i$ coincidieran, dos columnas de $B$ serían iguales y $B$ sería
singular).

En Octave: `B = vander(x)` (con las columnas en orden inverso al de la
fórmula de arriba), `c = B \ y`.

### 4.1 El problema de condicionamiento de Vandermonde

**Demostración experimental en clase**: el número de condición de la matriz
de Vandermonde para $n$ puntos equiespaciados en $[0,1]$ crece muy rápido
con $n$ — del orden constante para pocos puntos, hasta $\sim 4\times
10^{16}$ con 20 puntos, y "cualquiera" (overflow numérico) con 55 puntos.

> **Consecuencia práctica, ejemplo con la función constante $f\equiv 1$**:
> interpolando 25 puntos de $f(x)=1$, el polinomio calculado (por
> `backslash`, que hace eliminación gaussiana con pivoteo parcial) **evalúa
> razonablemente bien** (entre $0{,}99$ y $1{,}00$ algo) pero sus
> **coeficientes son un desastre** — números enormes que casi se cancelan.
> Con 55 puntos, hasta las evaluaciones se rompen (oscilan entre valores
> muy alejados de 1).
>
> **Por qué pasa esto**: la eliminación gaussiana con pivoteo parcial
> siempre da **residuos chicos** (Clase 8) — de ahí que las evaluaciones no
> estén tan mal —, pero con $\kappa(B)$ enorme el **error en los
> coeficientes** queda sin control. Residuo chico y error grande
> conviven exactamente como en el ejemplo de las rectas casi paralelas de
> la Clase 8.

## 4.2 El problema de no incrementalidad

Defecto adicional, no relacionado con condicionamiento: si se agrega (o se
corrige) un punto a interpolar, **hay que rearmar la matriz de Vandermonde
entera y resolver el sistema de nuevo desde cero** — no hay forma de
reutilizar el cálculo anterior.

> Estos dos problemas —mal condicionamiento creciente con $n$, y falta de
> incrementalidad— motivan las dos formas alternativas de escribir el
> polinomio interpolante que se ven la clase siguiente (bases de Lagrange y
> de Newton), buscando evitar ambos defectos.

*Clase siguiente: dos formas alternativas de escribir el mismo polinomio
interpolante (Lagrange, Newton), pensadas para evitar el mal
condicionamiento y la falta de incrementalidad de Vandermonde.*
