# Resumen Clase 28 — Resonancia, mutuas en circuitos, transformador y comienzo de las ecuaciones de Maxwell

## Índice

1. [Resonancia](#1-resonancia)
   - [1.1 La idea: la hamaca](#11-la-idea-la-hamaca)
   - [1.2 Frecuencia de resonancia del RLC serie](#12-frecuencia-de-resonancia-del-rlc-serie)
   - [1.3 Frecuencia natural y frecuencia de resonancia](#13-frecuencia-natural-y-frecuencia-de-resonancia)
   - [1.4 Ancho de la resonancia y factor de calidad](#14-ancho-de-la-resonancia-y-factor-de-calidad)
   - [1.5 La resonancia en la fase](#15-la-resonancia-en-la-fase)
   - [1.6 Varios osciladores acoplados](#16-varios-osciladores-acoplados)
2. [Inductancias mutuas en circuitos](#2-inductancias-mutuas-en-circuitos)
   - [2.1 La convención de los puntos](#21-la-convención-de-los-puntos)
   - [2.2 Ejemplo: dos ramas acopladas](#22-ejemplo-dos-ramas-acopladas)
3. [El transformador](#3-el-transformador)
   - [3.1 Transformador real](#31-transformador-real)
   - [3.2 Transformador ideal](#32-transformador-ideal)
4. [Ecuaciones de Maxwell](#4-ecuaciones-de-maxwell)
   - [4.1 La inconsistencia de la ley de Ampère](#41-la-inconsistencia-de-la-ley-de-ampère)
   - [4.2 Corregirla con la conservación de la carga](#42-corregirla-con-la-conservación-de-la-carga)
   - [4.3 Corriente de desplazamiento](#43-corriente-de-desplazamiento)
   - [4.4 Las cuatro ecuaciones](#44-las-cuatro-ecuaciones)
   - [4.5 ¿Siguen siendo correctas?](#45-siguen-siendo-correctas)

---

## 1. Resonancia

### 1.1 La idea: la hamaca

La **resonancia** es una propiedad general de cualquier sistema oscilante
—eléctrico o mecánico—: con un forzado a ciertas frecuencias particulares, el
oscilador oscila con amplitud **muy grande**.

El ejemplo de siempre del docente: una hamaca. (No es un oscilador lineal para
ángulos grandes, pero se piensa con oscilaciones chicas.) Sin forzado y con poco
rozamiento tiene una **frecuencia natural**: digamos, va y vuelve una vez por
segundo. Empujarla cuatro veces por segundo no es óptimo —a veces se empuja a
contramano—; empujarla una vez cada cuatro segundos desaprovecha oportunidades.
Lo ideal es empujarla **cada vez que vuelve**: con una frecuencia igual o muy
parecida a la natural.

> La analogía es cualitativa: la hamaca es no lineal y el empujón es periódico
> pero no sinusoidal (más bien un golpe). Lo que se conserva es la idea.

El resultado que se va a ver: la frecuencia de máxima amplitud coincide con la
natural **sólo sin rozamiento** (sin resistencia); con resistencia son
parecidas, no iguales.

### 1.2 Frecuencia de resonancia del RLC serie

El RLC serie con $V_0\cos\omega t$:

$$I(t) = \frac{V_0}{|\hat Z|}\cos(\omega t-\theta),
\qquad
|\hat Z| = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2},
\qquad
\theta = \arctan\frac{\omega L - 1/\omega C}{R}.$$

La amplitud de la corriente, $I_0(\omega) = V_0/|\hat Z|$, es máxima cuando
$|\hat Z|$ es mínimo. A simple vista: $|\hat Z|^2$ es una suma de dos
cuadrados, $R^2$ no depende de $\omega$, y el otro se puede anular. Por lo
tanto $|\hat Z|\ge R$, con igualdad cuando **la reactancia se anula**:

$$\omega L = \frac{1}{\omega C}
\quad\Longrightarrow\quad
\boxed{\ \omega_0 = \frac{1}{\sqrt{LC}}\ },
\qquad
I_0(\omega_0) = \frac{V_0}{R}.$$

La **curva de resonancia** $I_0(\omega)$ arranca en cero (para $\omega\to0$ el
condensador hace divergir $|\hat Z|$), tiene un máximo $V_0/R$ en $\omega_0$ y
vuelve a tender a cero para $\omega\to\infty$ (diverge el término de la
bobina).

### 1.3 Frecuencia natural y frecuencia de resonancia

Sin forzado, el circuito oscila a la **frecuencia natural** calculada dos
clases atrás,

$$\omega_0' = \sqrt{\frac{1}{LC}-\frac{R^2}{4L^2}} .$$

Cuando $R\to0$, $\omega_0'\to\omega_0$: con resistencias pequeñas, el forzado
óptimo está en la frecuencia natural. Con resistencia no nula, la **frecuencia
de resonancia** $\omega_0$ y la natural no coinciden.

> Un estudiante observa que la que se mueve con $R$ es $\omega_0'$, no
> $\omega_0$, que no depende de $R$. El docente lo acepta: lo que quería decir es
> que se acercan.

Además, al bajar $R$ el máximo $V_0/R$ crece: el pico se vuelve cada vez más
alto y angosto. En el límite $R\to0$ sería infinito, situación no física; pero
con muy poca resistencia la resonancia puede ser muy grande.

> **Abuso de lenguaje estándar.** En todo lo que sigue se dice «frecuencia» por
> **frecuencia angular**, que difiere en $2\pi$.

### 1.4 Ancho de la resonancia y factor de calidad

Hay que definir qué se llama ancho; la convención es tomar las frecuencias en
que la amplitud cae al máximo **dividido por $\sqrt2$** (es arbitrario, pero las
cuentas quedan cómodas):

$$\frac{I_0(\omega)}{I_0(\omega_0)} = \frac{1}{\sqrt2}
\quad\Longleftrightarrow\quad
|\hat Z(\omega)| = \sqrt2\,R
\quad\Longleftrightarrow\quad
\left|\omega L - \frac{1}{\omega C}\right| = R .$$

> El docente pone primero el $\sqrt2$ del lado equivocado y lo corrigen.

Se calcula sólo para **$R$ pequeño**, donde el ancho es chico:
$\omega = \omega_0 + \Delta\omega$ con $\Delta\omega\ll\omega_0$. Con
$(1+x)^{-1}\approx 1-x$ («dividir por 1,01 es como multiplicar por 0,99»):

$$\frac{1}{C(\omega_0+\Delta\omega)} \approx \frac{1}{C\omega_0}\left(1-\frac{\Delta\omega}{\omega_0}\right).$$

El término de orden cero se cancela por la condición de resonancia, y como
$1/(C\omega_0^2) = L$:

$$L\,\Delta\omega + L\,\Delta\omega = R
\quad\Longrightarrow\quad
\boxed{\ \Delta\omega = \frac{R}{2L}\ }$$

$\Delta\omega$ es el ancho hacia cada lado; cerca del pico, con $R$ chico, la
curva es simétrica. Tiende a cero con $R$.

Se define el **factor de calidad**

$$\boxed{\ \mathcal{Q} = \frac{\omega_0 L}{R} = \frac{\omega_0}{2\Delta\omega}\ }$$

(con la letra Q «porque se me acabaron las letras»; no es la carga). Cuanto
mayor, más aguda la resonancia.

> **Por qué «calidad».** Una radio: la antena recibe una señal débil, que actúa
> como un generador de forzado pequeño. Las radios reales tienen amplificador,
> pero aun sin él, con un $\mathcal{Q}$ alto y bien sintonizada, ese forzado
> pequeño produce oscilaciones grandes. Un estudiante resume: es más selectivo
> y además amplifica mucho en resonancia. El costo es que exige una
> sintonización más fina. Las radios viejas sintonizaban con un condensador o
> una resistencia variable; hoy es todo electrónico, porque se miniaturiza
> mejor, aunque la física de fondo es la misma.

### 1.5 La resonancia en la fase

La resonancia también se ve en la fase, $\theta = \arctan\dfrac{\omega L - 1/\omega C}{R}$:

| $\omega$ | Argumento | $\theta$ |
| --- | --- | --- |
| $\to0$ | $\to-\infty$ | $\to-\pi/2$ |
| $\omega_0$ | $0$ | $0$ |
| $\to\infty$ | $\to+\infty$ | $\to+\pi/2$ |

La fase pasa de $-\pi/2$ a $\pi/2$ en una región de ancho del orden de
$\Delta\omega$. Al bajar $R$ el pasaje se vuelve más vertical, y en el límite
$R\to0$ es una discontinuidad.

### 1.6 Varios osciladores acoplados

El fenómeno es general. Con $n$ osciladores lineales acoplados y un generador
sinusoidal, **para resistencias pequeñas**:

1. hay **$n$ frecuencias de resonancia** ($n$ picos);
2. cada una es cercana a una de las **$n$ frecuencias naturales** del sistema
   sin forzar, y en el límite de resistencias nulas coinciden;
3. en resonancia el desfasaje se anula (estrictamente, en el límite $R\to0$) y
   el **factor de potencia tiende a 1**; con resistencias pequeñas, «factor de
   potencia 1» y «módulo de la impedancia mínimo» son equivalentes.

> **Por qué resistencias pequeñas.** Con resistencias grandes el sistema sin
> forzar ni siquiera oscila: decae sin oscilar, y la noción de frecuencia
> natural pierde sentido. Cuanto mayor la resistencia, más chatos los picos,
> que pueden volverse invisibles.

Se puede probar en general; el docente no lo hace.

---

## 2. Inductancias mutuas en circuitos

### 2.1 La convención de los puntos

El signo de una mutua depende de cómo están enrolladas las bobinas: dos
bobinados en el mismo solenoide enrollados para el mismo lado dan $M>0$; al
revés, $M<0$. En un diagrama de circuito eso no se ve. La convención:

> **Se da $M$ siempre positiva y el signo se indica en el diagrama con puntos**
> en un extremo de cada bobina.

**Regla.** Si todas las corrientes (elegidas convencionalmente) **entran por
los puntos**, los términos de mutua llevan **signo $+$**, el mismo que las
autoinductancias. Cada cambio de un punto al otro extremo introduce un signo
delante de $j\omega M$; dos cambios se compensan. Si las dos corrientes entran
por el extremo sin punto, también es $+$.

> Con varias mutuas no siempre se puede elegir que todas las corrientes entren
> por los puntos: al acomodar una, otra puede quedar al revés.

### 2.2 Ejemplo: dos ramas acopladas

Un generador alimenta dos ramas en paralelo: una con $\hat Z_1$ y $L_1$, otra con
$\hat Z_2$ y $L_2$, acopladas por $M$, con los dos puntos del mismo lado y las
dos corrientes entrando por ellos. Malla de arriba (con el generador) y malla
de abajo:

$$V_0 = \hat Z_1\hat I_1 + j\omega L_1\hat I_1 + j\omega M\,\hat I_2,$$

$$0 = \hat Z_2\hat I_2 + j\omega L_2\hat I_2 + j\omega M\,\hat I_1 - (\text{rama de arriba}).$$

> En la segunda malla el docente escribe primero $V_0$ del lado izquierdo y se
> corrige: «mezclé dos cosas». La malla de abajo no contiene el generador. El
> punto importante es el signo de los términos con $M$, que es $+$ en las dos
> porque ambas corrientes entran por los puntos.

Es un sistema lineal que se puede resolver; el docente no lo resuelve.

---

## 3. El transformador

### 3.1 Transformador real

Un **circuito primario** con el generador $V_0\cos\omega t$, una resistencia
$R_1$ y una bobina $L_1$, y un **circuito secundario**, sin generador, con una
bobina $L_2$, una resistencia $R_2$ y la carga $\hat Z$ que se quiere
alimentar. $R_1$ y $R_2$ representan las resistencias internas, inevitables, de
los bobinados. Con las corrientes entrando por los puntos:

$$V_0 = (R_1 + j\omega L_1)\,\hat I_1 + j\omega M\,\hat I_2,$$

$$0 = j\omega M\,\hat I_1 + (R_2 + j\omega L_2 + \hat Z)\,\hat I_2 .$$

Resolviendo el sistema $2\times2$, con
$D = (R_1 + j\omega L_1)(\hat Z + j\omega L_2 + R_2) + \omega^2M^2$:

$$\boxed{\ \hat I_1 = \frac{\hat Z + j\omega L_2 + R_2}{D}\,V_0,
\qquad
\hat I_2 = -\frac{j\omega M}{D}\,V_0\ }$$

- Si $M\to0$ (bobinas desacopladas), en el secundario no pasa nada: la
  corriente ahí es puramente inducida.
- Las dos corrientes son proporcionales a $V_0$.
- Es la solución exacta de un **transformador real**: no se supuso acoplamiento
  máximo ($M$ puede ser menor que $\sqrt{L_1L_2}$) y hay resistencias.

No hace lo que se quiere de un transformador: los cocientes de corrientes y de
voltajes **dependen de la frecuencia**.

### 3.2 Transformador ideal

Un transformador ideal cambia voltaje y corriente por una constante
**independiente de $\omega$**: multiplica el voltaje por un factor $A$ y la
corriente por el inverso.

> En el VTT el docente dice que $\hat I_2/\hat I_1$ y $\hat V_Z/V_0$ son «la misma
> constante» $A$ (con un signo menos en la corriente), y enseguida que la
> corriente cambia «de manera inversa». Por el resultado de abajo y el del
> ejercicio, lo consistente es: voltaje por $A$, corriente por $1/A$.

Del sistema:

$$-\frac{\hat I_1}{\hat I_2} = \frac{\hat Z + j\omega L_2 + R_2}{j\omega M},$$

que se vuelve independiente de $\omega$ si

$$\boxed{\ \omega L_2 \gg |\hat Z + R_2|\ }
\quad\Longrightarrow\quad
-\frac{\hat I_1}{\hat I_2}\approx\frac{L_2}{M}.$$

Es la primera condición de transformador ideal: resistencias pequeñas y una
carga que no le exija demasiado.

**Ejercicio propuesto.** Analizar el voltaje de manera similar, en el caso de
**acoplamiento máximo**, $M^2 = L_1L_2$ (por ejemplo, dos bobinados en el mismo
solenoide), y probar que

$$A = \frac{N_2}{N_1},$$

con $N_1$ y $N_2$ los números de espiras.

> Con $L\propto N^2$ y $M = \sqrt{L_1L_2}$, el cociente de corrientes de arriba
> da $L_2/M = N_2/N_1$, coherente con que la corriente cambie por el inverso de
> $A$.

---

## 4. Ecuaciones de Maxwell

Capítulo 11, el último del curso.

### 4.1 La inconsistencia de la ley de Ampère

Un cable con corriente variable $I(t)$ que llega a un condensador. Se aplica
Ampère a una curva $C$ alrededor del cable, con dos superficies del mismo borde:
$S_1$, atravesada por el cable, y $S_2$, que «da la vuelta» pasando entre las
placas.

$$\oint_C \vec H\cdot d\vec l = \int_S \vec J\cdot\hat n\,dS =
\begin{cases} I & \text{con } S_1\\ 0 & \text{con } S_2 \end{cases}$$

Tendrían que dar lo mismo y no dan. No es extraño: Ampère se dedujo para
corrientes estacionarias.

La diferencia entre los dos cálculos es el flujo de $\vec J$ por la superficie
cerrada formada por $S_1$ y $S_2$, que es la corriente que entra en ella, igual
a la variación de la carga encerrada:

$$\int_{S_1}\vec J\cdot\hat n\,dS - \int_{S_2}\vec J\cdot\hat n\,dS
= \frac{d}{dt}\int_V\rho\,dV .$$

El motivo de la inconsistencia: **la carga en el condensador está variando.**

### 4.2 Corregirla con la conservación de la carga

En forma diferencial: la divergencia de un rotacional es cero, así que

$$\curl\vec H = \vec J
\quad\Longrightarrow\quad
\div\vec J = 0 :$$

la ecuación **sólo es consistente si $\div\vec J = 0$**, es decir, en el caso
estacionario.

Hay que reemplazar $\vec J$ por un nuevo campo $\vec J_{\text{nuevo}}$ tal que

1. $\vec J_{\text{nuevo}} = \vec J$ en el caso estacionario;
2. $\div\vec J_{\text{nuevo}} = 0$ **siempre**.

No hay una única solución; se busca la más simple, que es la que encontró
Maxwell y que además resultó la correcta, aunque «podría haber sido más
complicada».

La pista es la **conservación de la carga**. Lo que se sabe de $\div\vec J$ en
el caso general es la ecuación de continuidad, y lo que se sabe de $\rho$ en
términos de una divergencia es la ley de Gauss:

$$\pdv{\rho}{t} + \div\vec J = 0,
\qquad
\div\vec D = \rho
\quad\Longrightarrow\quad
\div\left(\vec J + \pdv{\vec D}{t}\right) = 0 .$$

$\vec J + \partial\vec D/\partial t$ cumple las dos condiciones: en el caso
estacionario es $\vec J$, y su divergencia es siempre nula (se usaron sólo
ecuaciones exactas).

### 4.3 Corriente de desplazamiento

Maxwell propone modificar la ley de Ampère:

$$\boxed{\ \curl\vec H = \vec J + \pdv{\vec D}{t}\ }$$

**Ley de Ampère modificada por Maxwell.** (El docente dice «divergencia» en voz
alta y escribe rotacional; lo corrige.) A $\partial\vec D/\partial t$ se lo llama
**densidad de corriente de desplazamiento**: en Física III se hablaba de
corriente de desplazamiento sin establecer el vínculo con el **vector
desplazamiento** $\vec D$, que es de donde viene el nombre. La **corriente de
desplazamiento** es

$$I_d = \int_S \pdv{\vec D}{t}\cdot\hat n\,dS .$$

> A la pregunta de si Maxwell «se llevó todo el crédito»: «a Ampère le seguimos
> diciendo Ampère».

### 4.4 Las cuatro ecuaciones

| Ley | En un medio | En el vacío |
| --- | --- | --- |
| Gauss | $\div\vec D = \rho$ | $\div\vec E = \rho/\varepsilon_0$ |
| No hay monopolos | $\div\vec B = 0$ | $\div\vec B = 0$ |
| Faraday | $\curl\vec E = -\pdv{\vec B}{t}$ | $\curl\vec E = -\pdv{\vec B}{t}$ |
| Ampère–Maxwell | $\curl\vec H = \vec J + \pdv{\vec D}{t}$ | $\curl\vec B = \mu_0\vec J + \mu_0\varepsilon_0\pdv{\vec E}{t}$ |

«Está lleno de remeras que tienen esto.» En un medio hay que agregar siempre
las relaciones constitutivas entre $\vec D$ y $\vec E$ y entre $\vec H$ y
$\vec B$.

### 4.5 ¿Siguen siendo correctas?

Maxwell hizo una jugada arriesgada: buscó «al tuntún» la corrección más simple,
y era la correcta. Hoy se piensa que las ecuaciones están bien, con dos
modificaciones del siglo XX:

1. **Efectos cuánticos.** A escalas muy chicas hay que usar el equivalente
   cuántico de estas ecuaciones: la **electrodinámica cuántica**, que lograron
   formular de manera coherente Feynman, Schwinger y Tomonaga (premio Nobel).
   No cambia las ecuaciones, sino cómo se usan a nivel microscópico; para
   objetos macroscópicos el límite es esto.
2. **El modelo estándar.** A distancias del orden de un centésimo del radio del
   protón, el electromagnetismo se entrevera con las interacciones nucleares
   débiles: la **unificación electrodébil**.

Fuera de esas escalas, son leyes fundamentales del electromagnetismo, y con
enormes consecuencias prácticas: tienen **soluciones en forma de ondas**. Así
Maxwell entendió la naturaleza electromagnética de la luz y pudo calcular su
velocidad a partir de propiedades eléctricas y magnéticas.

*La próxima clase: las ondas electromagnéticas.*
