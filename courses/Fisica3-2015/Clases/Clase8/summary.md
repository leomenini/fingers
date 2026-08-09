# Resumen Clase 8 — Unidades de Potencial, el Electronvolt, y Potencial de Cargas Puntuales y Distribuciones Continuas

---

## Índice

1. [Unidades del potencial: el Volt](#1-unidades-del-potencial-el-volt)
2. [El electronvolt](#2-el-electronvolt)
3. [Potencial de un conjunto de cargas puntuales](#3-potencial-de-un-conjunto-de-cargas-puntuales)
   - [3.1 Deducción a partir de la energía potencial](#31-deducción-a-partir-de-la-energía-potencial)
   - [3.2 Ejemplo: cuadrado de cargas](#32-ejemplo-cuadrado-de-cargas)
4. [Potencial de un dipolo](#4-potencial-de-un-dipolo)
   - [4.1 Expresión exacta](#41-expresión-exacta)
   - [4.2 Límite de dipolo puntual (Taylor)](#42-límite-de-dipolo-puntual-taylor)
5. [Potencial de una distribución continua](#5-potencial-de-una-distribución-continua)
6. [Ejemplo: barra cargada](#6-ejemplo-barra-cargada)
   - [6.1 Integral por sustitución hiperbólica](#61-integral-por-sustitución-hiperbólica)
   - [6.2 Límite de gran distancia](#62-límite-de-gran-distancia)
7. [Ejemplo: anillo cargado](#7-ejemplo-anillo-cargado)
8. [Ejemplo: disco cargado](#8-ejemplo-disco-cargado)
   - [8.1 Continuidad del potencial y no derivabilidad](#81-continuidad-del-potencial-y-no-derivabilidad)
9. [Anuncio: campo desde el potencial](#9-anuncio-campo-desde-el-potencial)

---

## 1. Unidades del potencial: el Volt

El potencial (y la diferencia de potencial) tiene unidades de **trabajo/energía dividida por carga**. En el SI:

$$
[V] = \frac{\text{J}}{\text{C}} \equiv \text{Volt} \;(\text{V})
$$

---

## 2. El electronvolt

Dando vuelta la relación, el Volt permite definir una **unidad de energía**: el **electronvolt (eV)** es la energía que gana una partícula de carga $e$ (el valor absoluto de la carga del electrón) al desplazarse entre dos puntos con $|\Delta V| = 1\,\text{V}$:

$$
1\,\text{eV} = e \cdot (1\,\text{V}) = 1{,}6\times10^{-19}\,\text{J}
$$

> Es una unidad **muy pequeña**, adecuada a la escala atómica y de partículas:
> - La energía de ligazón más fuerte de un electrón a su núcleo (átomo de hidrógeno) es del orden de **13 eV**.
> - Los procesos químicos involucran fracciones de eV.
> - En física de altas energías se usan múltiplos: **MeV**, **GeV**. Como la carga $e$ aparece por todos lados, estas unidades simplifican las expresiones (evitan arrastrar $10^{-19}$).

---

## 3. Potencial de un conjunto de cargas puntuales

### 3.1 Deducción a partir de la energía potencial

Para un conjunto de cargas $Q_1, Q_2, \dots$ más una carga de prueba $Q_0$ en la posición $\mathbf{r}$, la energía potencial del sistema (con la convención $U=0$ para cargas infinitamente alejadas) es:

$$
U = \frac{1}{4\pi\varepsilon_0}\sum_{i<j}\frac{Q_i Q_j}{R_{ij}}
$$

Separando la parte que **depende de $Q_0$** (índice $0$):

$$
U = \underbrace{\frac{Q_0}{4\pi\varepsilon_0}\sum_{i\geq 1}\frac{Q_i}{R_{0i}}}_{\text{depende de } Q_0} \;+\; \underbrace{\frac{1}{4\pi\varepsilon_0}\sum_{1\leq i<j}\frac{Q_i Q_j}{R_{ij}}}_{\text{no depende de } Q_0}
$$

El potencial en la posición de $Q_0$ es esa parte por unidad de carga (se cancela $Q_0$):

$$
\boxed{V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\sum_{i}\frac{Q_i}{R_{0i}}}
$$

- Es **independiente de $Q_0$** (propiedad del campo, no de la carga de prueba).
- Solo la parte dependiente de $Q_0$ interviene en el trabajo de mover $Q_0$; el resto es constante.
- **Nivel de referencia:** $V\to 0$ cuando $Q_0$ está infinitamente alejado de todas las cargas (ahí todos los $R_{0i}\to\infty$).

### 3.2 Ejemplo: cuadrado de cargas

Cuadrado de lado $A$ con cargas $Q_1,\dots,Q_4$ en los vértices; potencial en el centro $O$. La distancia del centro a cada vértice (por Pitágoras, media diagonal) es:

$$
d = \frac{A}{\sqrt{2}}
$$

Como las cuatro distancias son iguales:

$$
V(O) = \frac{1}{4\pi\varepsilon_0}\cdot\frac{\sqrt{2}}{A}\sum_{i=1}^{4} Q_i
$$

---

## 4. Potencial de un dipolo

> **Por qué tanto énfasis en el potencial:** es una cantidad **escalar** — evita ángulos, componentes y productos vectoriales. Calcular el potencial suele ser mucho más fácil que el campo, y (próxima clase) el campo se recupera a partir de él.

### 4.1 Expresión exacta

Cargas $+Q$ y $-Q$ separadas por $\mathbf{d}$; punto $P$ **arbitrario** (no solo el plano bisector) a distancias $r_+$ y $r_-$ de cada carga:

$$
V(P) = \frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{r_+} - \frac{1}{r_-}\right)
$$

Con $\mathbf{r}$ desde el centro del dipolo y usando $\mathbf{r}_\pm = \mathbf{r} \mp \tfrac{\mathbf{d}}{2}$, el módulo al cuadrado da:

$$
r_\pm^2 = r^2 \mp \mathbf{r}\cdot\mathbf{d} + \frac{d^2}{4}
$$

### 4.2 Límite de dipolo puntual (Taylor)

Se mira el dipolo **de lejos** ($r \gg d$). El término de "carga puntual" se cancela porque la **carga neta es cero**; hay que ir al orden siguiente. Con el desarrollo $(1+x)^\alpha \approx 1+\alpha x$ para $x$ pequeño:

$$
\frac{1}{r_\pm} \approx \frac{1}{r}\left(1 \pm \frac{1}{2}\frac{\mathbf{r}\cdot\mathbf{d}}{r^2}\right)
$$

Restando, el $1/r$ se cancela y los términos se suman. Con el **momento dipolar** $\mathbf{p} = Q\mathbf{d}$:

$$
\boxed{V(P) = \frac{1}{4\pi\varepsilon_0}\frac{\mathbf{r}\cdot\mathbf{p}}{r^3} = \frac{1}{4\pi\varepsilon_0}\frac{p\cos\theta}{r^2}}
$$

donde $\theta$ es el ángulo entre $\mathbf{r}$ y $\mathbf{p}$.

- **Decae como $1/r^2$**, más rápido que una carga puntual ($1/r$).
- Con el **mismo esfuerzo** que el cálculo del campo (que en teórico se hizo solo sobre el plano bisector), se obtuvo el potencial en **cualquier** punto: mucha más información.

---

## 5. Potencial de una distribución continua

Se divide la distribución en elementos $\Delta V_i$ tratados como cargas puntuales $\Delta Q_i = \rho(\mathbf{r}_i)\,\Delta V_i$. La suma de Riemann tiende a una integral:

$$
\boxed{V(P) = \frac{1}{4\pi\varepsilon_0}\int_{\text{vol}} \frac{\rho(\mathbf{r}')}{r}\, dV'}
$$

Análogamente para densidad lineal ($\lambda\,d\ell$) o superficial ($\sigma\,dS$). Al ser el potencial escalar, **no hay que proyectar vectores** (ventaja frente al campo).

---

## 6. Ejemplo: barra cargada

Barra de largo $L$ con densidad lineal uniforme $\lambda$ sobre el eje $z$; punto $P$ a distancia $y$ perpendicular, en el centro. Cada elemento $dz$ está a distancia $\sqrt{y^2+z^2}$:

$$
V(P) = \frac{1}{4\pi\varepsilon_0}\int_{-L/2}^{L/2}\frac{\lambda\, dz}{\sqrt{y^2+z^2}}
= \frac{\lambda}{2\pi\varepsilon_0}\int_{0}^{L/2}\frac{dz}{\sqrt{y^2+z^2}}
$$

(se usó la paridad en $z$).

### 6.1 Integral por sustitución hiperbólica

Con $z = y\sinh w$ (y $\cosh^2 w - \sinh^2 w = 1$), se tiene $\sqrt{y^2+z^2} = y\cosh w$ y $dz = y\cosh w\, dw$, de modo que todo se simplifica:

$$
V(P) = \frac{\lambda}{2\pi\varepsilon_0}\int_0^{\,\operatorname{arcsinh}(L/2y)} dw = \frac{\lambda}{2\pi\varepsilon_0}\operatorname{arcsinh}\!\left(\frac{L}{2y}\right)
$$

Invirtiendo el seno hiperbólico (ecuación cuadrática en $u=e^{w}$) se obtiene la forma cerrada $\operatorname{arcsinh}(X) = \ln\!\big(X + \sqrt{X^2+1}\big)$:

$$
\boxed{V(P) = \frac{\lambda}{2\pi\varepsilon_0}\ln\!\left(\frac{L}{2y} + \sqrt{\frac{L^2}{4y^2}+1}\right)}
$$

### 6.2 Límite de gran distancia

Para $y \gg L$, usando $\ln(1+x)\approx x$:

$$
V(P) \approx \frac{\lambda}{2\pi\varepsilon_0}\cdot\frac{L}{2y} = \frac{\lambda L}{4\pi\varepsilon_0\, y} = \frac{Q}{4\pi\varepsilon_0\, y}
$$

con $Q = \lambda L$ la carga total: se comporta como una **carga puntual**, como debía ser.

> **Ejercicio propuesto:** analizar el límite opuesto $y \ll L$ (muy cerca de la barra).

---

## 7. Ejemplo: anillo cargado

Anillo de radio $R$ con densidad lineal uniforme $\lambda$; punto $P$ sobre el eje a distancia $z$. Cada elemento de arco tiene carga $dQ = \lambda R\, d\theta$ y está a distancia $\sqrt{R^2+z^2}$ (constante). Como **nada depende de $\theta$**, la integral es trivial ($\int_0^{2\pi}d\theta = 2\pi$):

$$
\boxed{V(P) = \frac{\lambda R}{2\varepsilon_0\sqrt{R^2+z^2}}}
$$

Para $z \gg R$ tiende al potencial de una carga puntual.

---

## 8. Ejemplo: disco cargado

Disco de radio $R$ con densidad superficial uniforme $\sigma$; punto $P$ sobre el eje a distancia $z$. Se divide en **anillos** de radio $r$ y ancho $dr$ (carga $dQ = \sigma\, 2\pi r\, dr$) y se **suman los potenciales** de cada anillo (usando el resultado §7):

$$
V(P) = \frac{\sigma}{2\varepsilon_0}\int_0^{R}\frac{r\, dr}{\sqrt{z^2+r^2}}
$$

Con $u = r^2+z^2$:

$$
\boxed{V(P) = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{R^2+z^2} - |z|\right)}
$$

Para $|z| \ll R$:

$$
V(P) \approx \frac{\sigma}{2\varepsilon_0}\left(R - |z|\right) + \mathcal{O}\!\left(\frac{z^2}{R}\right)
$$

### 8.1 Continuidad del potencial y no derivabilidad

Cerca del disco el potencial tiene una propiedad curiosa:

- Es **continuo** en $z=0$ (por arriba y por abajo tiende a $V_0 = \sigma R/2\varepsilon_0$).
- **No es derivable**: la dependencia $-|z|$ produce un **pico** (vértice) en $z=0$.

> Esto anticipa la relación de la próxima clase: **la derivada del potencial es (menos) el campo eléctrico**. El campo de un disco es *discontinuo* al cruzarlo (apunta hacia arriba de un lado y hacia abajo del otro), lo que se corresponde exactamente con que la derivada de $V$ salte. El potencial se comporta "un poco mejor" (es continuo) pero su derivada no.

---

## 9. Anuncio: campo desde el potencial

La próxima clase:
1. Cómo calcular el **campo eléctrico a partir del potencial** (el gradiente).
2. **Superficies equipotenciales**.
3. Comienzo de **capacitores / condensadores**.
