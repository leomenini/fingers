# Resumen Clase 22 — Régimen Permanente, Resonancia e Impedancias Complejas

---

## Índice

1. [Régimen permanente sin resistencia](#1-régimen-permanente-sin-resistencia)
   - [1.1 Solución particular sinusoidal](#11-solución-particular-sinusoidal)
   - [1.2 Amplitud y resonancia](#12-amplitud-y-resonancia)
2. [El fenómeno de resonancia](#2-el-fenómeno-de-resonancia)
   - [2.1 Frecuencia natural y de resonancia](#21-frecuencia-natural-y-de-resonancia)
   - [2.2 Límites de la resonancia infinita](#22-límites-de-la-resonancia-infinita)
   - [2.3 Aplicaciones tecnológicas](#23-aplicaciones-tecnológicas)
3. [Circuitos RLC por el método complejo](#3-circuitos-rlc-por-el-método-complejo)
   - [3.1 El problema con la resistencia](#31-el-problema-con-la-resistencia)
   - [3.2 Notación compleja y la unidad imaginaria j](#32-notación-compleja-y-la-unidad-imaginaria-j)
   - [3.3 Impedancia compleja](#33-impedancia-compleja)
   - [3.4 Amplitud y desfasaje](#34-amplitud-y-desfasaje)
   - [3.5 Composición de impedancias](#35-composición-de-impedancias)
4. [Resonancia con resistencia](#4-resonancia-con-resistencia)
   - [4.1 Amplitud de la corriente](#41-amplitud-de-la-corriente)
   - [4.2 El desfasaje](#42-el-desfasaje)

---

## 1. Régimen permanente sin resistencia

Ya se resolvió la homogénea (Clase 21). Ahora se busca una **solución particular** (régimen permanente) para un forzado **sinusoidal**. Se empieza por el caso **sin resistencia** ($R$ despreciable).

### 1.1 Solución particular sinusoidal

> **Atención:** aquí $\omega$ es la frecuencia **del generador**, arbitraria, no la frecuencia natural $1/\sqrt{LC}$.

Ecuación (en $Q$, con $\varepsilon = \varepsilon_0\cos\omega t$):

$$
\varepsilon_0\cos(\omega t) = L\,\frac{d^2Q}{dt^2} + \frac{Q}{C}
$$

Con buen olfato se prueba una solución sinusoidal $Q(t) = Q_0\cos(\omega t)$ (solo se necesita **una** particular). Como $\ddot Q = -\omega^2 Q_0\cos(\omega t)$, los tres términos son proporcionales a $\cos(\omega t)$; simplificándolo:

$$
-\omega^2 Q_0\, L + \frac{Q_0}{C} = \varepsilon_0
$$

$$
\boxed{Q_0 = \frac{\varepsilon_0}{\,\dfrac{1}{C} - \omega^2 L\,}}
$$

$Q_0$ es la **amplitud** de oscilación de la carga.

### 1.2 Amplitud y resonancia

Representando $|Q_0|$ en función de $\omega$ (con $\varepsilon_0$ fijo):

- $\omega \to 0$: $|Q_0| \to \varepsilon_0 C$.
- $\omega$ grande: $|Q_0| \approx \varepsilon_0/(\omega^2 L) \to 0$.
- El denominador **se anula** en $\omega = 1/\sqrt{LC}$ → **asíntota vertical** (amplitud infinita).

Ese punto es la **frecuencia de resonancia**.

---

## 2. El fenómeno de resonancia

### 2.1 Frecuencia natural y de resonancia

La frecuencia $\omega_{\text{res}} = 1/\sqrt{LC}$ es a la vez la **frecuencia natural** (la que tendría el circuito LC libre, sin forzar) y la **frecuencia de resonancia**. **Interpretación (la hamaca):** para lograr amplitud máxima conviene empujar **sincronizado** con la frecuencia a la que la hamaca oscila por sí sola. Empujar mucho más rápido (p. ej. el doble) es contraproducente: a veces se empuja cuando la hamaca viene, restando energía. Lo óptimo es forzar a la frecuencia natural:

$$
\boxed{\omega_{\text{res}} = \omega_{\text{natural}} = \frac{1}{\sqrt{LC}}}
$$

Es una propiedad **general** de todos los osciladores lineales (no solo eléctricos). Circuitos complicados tienen **varias** frecuencias de resonancia (las soluciones libres del sistema).

### 2.2 Límites de la resonancia infinita

La divergencia es un artefacto de las aproximaciones:

- **Resistencia no nula:** si $R > 0$, la amplitud en resonancia **no** diverge; alcanza un valor grande (mayor cuanto menor $R$) pero finito. Todo sistema real tiene alguna resistencia (al menos la interna de la bobina).
- **Efectos no lineales:** con amplitudes muy grandes, la aproximación lineal falla (un péndulo no puede oscilar más de cierto ángulo). Los efectos no lineales también eliminan las resonancias infinitas.

> Si no hubiera resistencia suficiente, el circuito **se quema** en resonancia.

### 2.3 Aplicaciones tecnológicas

La resonancia sirve para obtener **grandes oscilaciones forzando poco**:

- **Telecomunicaciones (radio, celular).** La señal que llega es diminuta (por seguridad, los campos son débiles). Para captarla, el receptor se diseña con una **frecuencia natural** cercana a la del emisor: está **sintonizado**. Con poca $R$ (buen "factor de calidad"), un $\varepsilon_0$ minúsculo produce una amplitud apreciable. En las viejas radios, el **dial** variaba $L$ o $C$ para ajustar la frecuencia natural a la de la emisora.
- **Horno de microondas.** Emite en una frecuencia que **resuena** con enlaces químicos del agua (presente en la comida): excita la oscilación de las moléculas y les transmite energía → calor.
- **Aplicaciones médicas.** Ej.: tratamiento de la **ictericia** neonatal. Una reacción química elimina toxinas de la sangre estimulada por luz de una **frecuencia** particular. En vez de una lámpara que calienta e ilumina en todo el espectro (deshidratando al bebé), un aparato basado en **LEDs** (H. Failache, Instituto de Física) emite concentrado en esa frecuencia de resonancia, curando sin deshidratar.

En todos los casos: con el mismo esfuerzo, obtener grandes amplitudes.

---

## 3. Circuitos RLC por el método complejo

Ahora, el caso **general con resistencia** (capítulo de circuitos de corriente alterna). Circuito serie: generador $\varepsilon_0\cos(\omega t)$, $R$, $L$, $C$.

### 3.1 El problema con la resistencia

El término $R\,\dot Q$ introduce un **seno** (la derivada del coseno), así que la solución simple $\propto\cos(\omega t)$ **ya no sirve**. Se necesita permitir un **desfasaje**: $I(t) = I_M\cos(\omega t - \varphi)$. Sustituir y usar trigonometría funcionaría, pero es engorroso y **muy particular** de este circuito. Se usa un método más astuto y general: **exponenciales complejas**.

### 3.2 Notación compleja y la unidad imaginaria j

Los senos y cosenos son "primos" de las exponenciales, más fáciles de derivar (la derivada de $e^{j\omega t}$ es proporcional a sí misma). Se trabaja con la **corriente** (más fácil de medir que la carga); derivando la ecuación una vez para tenerla en $I$:

$$
-\varepsilon_0\,\omega\,\sin(\omega t) = L\,\ddot I + R\,\dot I + \frac{I}{C}
$$

Se escribe la solución real como **parte real** de una compleja (con $j$ la unidad imaginaria, para no confundir con la corriente $I$). Como **derivar** y **tomar parte real** conmutan, se resuelve la ecuación **compleja** y al final se toma la parte real:

$$
L\,\ddot{\hat I} + R\,\dot{\hat I} + \frac{\hat I}{C} = j\,\varepsilon_0\,\omega\, e^{j\omega t}
$$

Se propone $\hat I(t) = \hat I_M\, e^{j\omega t}$, con $\hat I_M = I_M\,e^{-j\varphi}$ (amplitud compleja). Como cada derivada agrega un factor $j\omega$, todo se factoriza y queda una ecuación **algebraica**:

$$
\hat I_M\left(-L\omega^2 + R\,j\omega + \frac{1}{C}\right) = j\,\varepsilon_0\,\omega
$$

Factorizando $j\omega$ en el denominador:

$$
\hat I_M = \frac{\varepsilon_0}{\,j\omega L + R + \dfrac{1}{j\omega C}\,}
$$

### 3.3 Impedancia compleja

El denominador es la **impedancia compleja** del circuito:

$$
\boxed{\hat Z = R + j\omega L + \frac{1}{j\omega C} = R + j\left(\omega L - \frac{1}{\omega C}\right)}
$$

Es la generalización compleja de la resistencia: si solo hubiera $R$, $\hat I_M = \varepsilon_0/R$ sería la ley de Ohm. Cada elemento aporta una **impedancia**:

| Elemento | Impedancia compleja |
|----------|---------------------|
| Resistencia | $R$ |
| Bobina | $j\omega L$ |
| Condensador | $1/(j\omega C) = -j/(\omega C)$ |

### 3.4 Amplitud y desfasaje

La **amplitud real** de la corriente es el **módulo** de $\hat I_M$ (no su parte real):

$$
\boxed{I_M = \frac{\varepsilon_0}{|\hat Z|} = \frac{\varepsilon_0}{\sqrt{R^2 + \left(\omega L - \dfrac{1}{\omega C}\right)^2}}}
$$

El **desfasaje** $\varphi$ es el **argumento** de $\hat Z$ (con signo, ya que $\hat I_M = I_M e^{-j\varphi}$ y $\hat Z$ está en el denominador):

$$
\boxed{\varphi = \arg(\hat Z) = \arctan\!\frac{\omega L - \dfrac{1}{\omega C}}{R}}
$$

El módulo $Z = |\hat Z|$ se llama **impedancia real** (¡es el módulo, no la parte real de $\hat Z$!). La corriente queda $I(t) = I_M\cos(\omega t - \varphi)$.

### 3.5 Composición de impedancias

Las impedancias se combinan **como las resistencias**: en **serie** se suman ($\hat Z = \sum \hat Z_k$), en **paralelo** se suman los inversos ($1/\hat Z = \sum 1/\hat Z_k$), operando como números complejos. Así, para un circuito RLC de una malla la impedancia total es la suma de las de cada elemento. Para cualquier circuito (con **una** fuente) se halla la impedancia equivalente y $\hat I_M = \varepsilon_M/\hat Z_{\text{eq}}$; luego el módulo da la amplitud y el argumento el desfasaje.

> Con **varias** fuentes hace falta el **principio de superposición** (se ve en el práctico).

---

## 4. Resonancia con resistencia

### 4.1 Amplitud de la corriente

$I_M$ es máxima cuando el denominador $|\hat Z|$ es mínimo, es decir cuando la parte imaginaria se anula:

$$
\omega L = \frac{1}{\omega C} \;\Longrightarrow\; \omega = \frac{1}{\sqrt{LC}} = \omega_{\text{res}}
$$

La frecuencia de resonancia sigue siendo $1/\sqrt{LC}$, pero ahora el máximo es **finito**:

$$
\boxed{I_M^{\max} = \frac{\varepsilon_0}{R}}
$$

Diverge solo cuando $R \to 0$. La curva $I_M(\omega)$ tiene un **pico** en $\omega_{\text{res}}$ que se vuelve más **angosto** al achicar $R$; las colas (para $\omega \to 0$ y $\omega \to \infty$) casi **no dependen** de $R$: para este circuito, $I_M \to \omega C\varepsilon_0$ cuando $\omega \to 0$, y $I_M \to \varepsilon_0/(\omega L)$ cuando $\omega \to \infty$ (ambas tienden a cero). Solo cerca de la resonancia importa $R$.

### 4.2 El desfasaje

El desfasaje $\varphi = \arctan\!\big[(\omega L - 1/\omega C)/R\big]$ varía de forma **monótona**:

- $\omega \to 0$: el argumento $\to -\infty$ → $\varphi \to -\pi/2$.
- $\omega = \omega_{\text{res}}$: el numerador se anula → $\varphi = 0$ (corriente y voltaje **en fase**).
- $\omega \to \infty$: el argumento $\to +\infty$ → $\varphi \to +\pi/2$.

La curva pasa de $-\pi/2$ a $+\pi/2$ cruzando cero en la resonancia. Al **achicar $R$**, la transición se hace más **abrupta**: en el límite $R \to 0$ hay casi una **discontinuidad** ($-\pi/2$ para frecuencias bajas, $+\pi/2$ para altas).

*Con esto cierra el bloque de circuitos de corriente alterna: el comportamiento queda descrito por la impedancia compleja, cuyo módulo da la amplitud y cuyo argumento da el desfasaje.*
