# Resumen Clase 27 — Régimen permanente sinusoidal: superposición, fasores, impedancia y potencia media

## Índice

1. [Repaso: basta con una solución particular](#1-repaso-basta-con-una-solución-particular)
2. [Principio de superposición](#2-principio-de-superposición)
   - [2.1 Dos generadores](#21-dos-generadores)
   - [2.2 Generadores periódicos y series de Fourier](#22-generadores-periódicos-y-series-de-fourier)
3. [El problema complejo asociado](#3-el-problema-complejo-asociado)
   - [3.1 Por qué complejos](#31-por-qué-complejos)
   - [3.2 Tomar parte real](#32-tomar-parte-real)
   - [3.3 Fasor e impedancia](#33-fasor-e-impedancia)
4. [Reglas para un circuito cualquiera](#4-reglas-para-un-circuito-cualquiera)
   - [4.1 Nudos, mallas e impedancias de cada elemento](#41-nudos-mallas-e-impedancias-de-cada-elemento)
   - [4.2 Reactancia](#42-reactancia)
   - [4.3 Corriente real: módulo y desfasaje](#43-corriente-real-módulo-y-desfasaje)
5. [Impedancias en serie y en paralelo](#5-impedancias-en-serie-y-en-paralelo)
   - [5.1 Reglas](#51-reglas)
   - [5.2 Ejemplo con dos mallas](#52-ejemplo-con-dos-mallas)
6. [Potencia en régimen permanente](#6-potencia-en-régimen-permanente)
   - [6.1 La potencia no es lineal](#61-la-potencia-no-es-lineal)
   - [6.2 Potencia media y factor de potencia](#62-potencia-media-y-factor-de-potencia)
   - [6.3 Con fases cualesquiera](#63-con-fases-cualesquiera)
   - [6.4 Valores eficaces](#64-valores-eficaces)

---

## 1. Repaso: basta con una solución particular

La clase pasada: la solución general es una particular más la general de la
homogénea, y con resistencias la homogénea se desvanece, en general al cabo de
un par de ciclos del forzado. En el **régimen permanente** no importan las
condiciones iniciales ni hace falta la solución general: **alcanza con
encontrar una solución**. Para un forzado general eso puede dar trabajo, y no
hay una solución analítica general; se hace para un generador sinusoidal, que
—se verá— permite tratar cualquier forzado periódico.

Se supone, «una última vez», que todos los elementos son **lineales** e
**ideales** (la resistencia interna de una bobina se pone aparte).

---

## 2. Principio de superposición

### 2.1 Dos generadores

Un circuito RLC serie con **dos** generadores, $V_1(t)$ y $V_2(t)$:

$$V_1(t) + V_2(t) = L\,\dot I + R\,I + \frac{Q}{C}.$$

Sea $I_1$ la solución con $V_2$ apagado e $I_2$ la solución con $V_1$
apagado:

$$V_1 = L\dot I_1 + R I_1 + \frac{Q_1}{C},
\qquad
V_2 = L\dot I_2 + R I_2 + \frac{Q_2}{C}.$$

Sumando, por linealidad,

$$V_1 + V_2 = L\,(\dot I_1+\dot I_2) + R\,(I_1+I_2) + \frac{Q_1+Q_2}{C}:$$

$$\boxed{\ I_1 + I_2 \text{ es solución del problema completo}\ }$$

Es el **principio de superposición**, y es totalmente general para circuitos
lineales: con varios generadores, se resuelve con uno solo prendido por vez y
se suman las soluciones. Con 17 generadores son 17 problemas, «un buen
embole», pero cada uno con un solo generador. Vale aunque los generadores no
sean periódicos: son funciones dadas, que no dependen de la corriente.

### 2.2 Generadores periódicos y series de Fourier

Un generador periódico de período $T$, con $\omega = 2\pi/T$, se desarrolla en
**serie de Fourier**:

$$V(t) = V_0 + \sum_{n=1}^{\infty}\Big[V_n\cos(n\omega t) + \hat V_n\sin(n\omega t)\Big].$$

Si $V$ es continua y periódica la serie converge punto a punto, y cortarla en
algún término es una buena aproximación. La constante es una sinusoide de
frecuencia nula. Por superposición, cada término se trata por separado.

> **Discontinuidades.** Con experimentos finitos no se puede decidir si una
> función es continua o tiene una caída muy abrupta, y en la práctica da lo
> mismo: un salto se refleja en que la serie converge peor y hacen falta muchos
> más términos. En una discontinuidad finita la serie converge al valor medio,
> en un sentido generalizado.

Con superposición y Fourier, **cualquier conjunto de generadores periódicos se
reduce a resolver con un único generador sinusoidal**. (Calcular los
coeficientes «es parte de otra historia».)

---

## 3. El problema complejo asociado

El circuito puede tener muchas mallas, pero un único generador,
$V(t) = V_0\cos\omega t$. Para el RLC serie:

$$V_0\cos\omega t = L\,\dot I + R\,I + \frac{Q}{C}.$$

### 3.1 Por qué complejos

Las funciones trigonométricas dan trabajo «porque nos complicamos la vida»: son
partes reales o imaginarias de exponenciales, y las exponenciales tienen
propiedades muy simpáticas. En lugar de este problema real se resuelve un
**problema asociado**, en funciones complejas:

$$V_0\,e^{j\omega t} = L\,\dot{\hat I} + R\,\hat I + \frac{\hat Q}{C},
\qquad \hat I = \dot{\hat Q} .$$

> **Notación.** Siguiendo la costumbre de los ingenieros electricistas, la
> unidad imaginaria se escribe $j$, porque la $i$ (o $I$) es la corriente. El
> sombrero indica que la cantidad es compleja.

### 3.2 Tomar parte real

Si se resuelve el problema complejo, se toma parte real de la ecuación. $V_0$,
$L$, $R$ y $1/C$ son reales, así que

$$V_0\cos\omega t = L\,\frac{d}{dt}\Re\hat I + R\,\Re\hat I + \frac{\Re\hat Q}{C}:$$

$$\boxed{\ I(t) = \Re\,\hat I(t) \text{ es solución del problema físico}\ }$$

A priori parece más complicado; en realidad es más simple.

### 3.3 Fasor e impedancia

Como el forzado es una exponencial y las derivadas de una exponencial son
proporcionales a ella misma, se busca **una** solución de la forma

$$\hat I(t) = \hat I_0\,e^{j\omega t},
\qquad
\dot{\hat I} = j\omega\,\hat I,
\qquad
\hat Q = \frac{\hat I}{j\omega}.$$

(Una constante aditiva en la primitiva no hace falta: el problema es
oscilante.) El prefactor complejo $\hat I_0$ es el **fasor** de la corriente.

> Ante la pregunta de un estudiante, el docente aclara que $\hat I(t)$ no es un
> fasor: es una función compleja del tiempo. El fasor es el **prefactor**.

Sustituyendo, la exponencial se cancela —«justamente toda la idea es eso»—:

$$V_0 = \left(j\omega L + R + \frac{1}{j\omega C}\right)\hat I_0 .$$

Se define la **impedancia**

$$\boxed{\ \hat Z = R + j\omega L + \frac{1}{j\omega C},
\qquad
\hat I_0 = \frac{V_0}{\hat Z}\ }$$

y el problema está resuelto: $I(t) = \Re\big(\hat I_0\,e^{j\omega t}\big)$.

Es una **generalización de la ley de Ohm** para los fasores, con la impedancia
en el lugar de la resistencia: un objeto «complejo en dos sentidos», más
complicado que una resistencia y número complejo.

---

## 4. Reglas para un circuito cualquiera

Con un único generador hay una única frecuencia. (Con dos generadores de
frecuencias distintas el análisis no funciona tal cual, pero la superposición
evita ese problema.) Cada elemento tiene una impedancia asociada.

### 4.1 Nudos, mallas e impedancias de cada elemento

1. **Ley de los nudos**: la suma de los fasores de las corrientes que entran es
   la de las que salen.
2. **Ley de las mallas**: en una malla cerrada, la suma de los fasores de los
   voltajes es cero.
3. **Cada elemento**: $\hat V = \hat Z\,\hat I_0$.

| Elemento | Impedancia $\hat Z$ |
| --- | --- |
| Resistencia | $R$ |
| Bobina | $j\omega L$ |
| Condensador | $\dfrac{1}{j\omega C}$ |
| Generador | Su fasor es $V_0$ (real si se elige el origen del tiempo con un coseno) |

> **Ojo: son números complejos.** Se suman parte real con parte real e imaginaria
> con imaginaria; **no se suman los módulos**. En el producto sí se multiplican
> los módulos (y se suman las fases).

> **Fases.** El fasor del generador es real porque se eligió el origen del
> tiempo con un coseno. Con un seno se toma parte imaginaria en lugar de parte
> real. Con varios generadores desfasados a igual frecuencia no se puede hacer
> real a todos, y sus fasores son complejos, con la fase correspondiente; el
> docente advierte, ante una propuesta de un estudiante, que la cuenta «es un
> poquito más complicada» de lo que parece.

Cada derivada pasa a ser multiplicar por $j\omega$ y cada primitiva dividir por
$j\omega$: con $n$ mallas independientes quedan $n$ ecuaciones **algebraicas**,
no diferenciales. Pueden ser complicadas, pero «el problema no va más allá».

### 4.2 Reactancia

La parte imaginaria de una impedancia es la **reactancia**:

| | Reactancia |
| --- | --- |
| Inductiva | $\omega L$ |
| Capacitiva | $-\dfrac{1}{\omega C}$ |

La capacitiva sale de multiplicar arriba y abajo por $j$:
$\dfrac{1}{j\omega C} = -\dfrac{j}{\omega C}$.

### 4.3 Corriente real: módulo y desfasaje

Se escribe la impedancia en forma polar,

$$\hat Z = |\hat Z|\,e^{j\theta},$$

con $|\hat Z|$ la **impedancia real** —que es el **módulo**, no la parte real:
hay que tener cuidado— y $\theta$ el **desfasaje**. Para el RLC serie, por
Pitágoras en el plano complejo (la resistencia sobre el eje real; $j\omega L$ y
$1/j\omega C$ sobre el imaginario, en sentidos opuestos):

$$|\hat Z| = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2},
\qquad
\theta = \arctan\frac{\omega L - \dfrac{1}{\omega C}}{R}.$$

Entonces $\hat I_0 = \dfrac{V_0}{|\hat Z|}\,e^{-j\theta}$ y

$$\boxed{\ I(t) = \frac{V_0}{|\hat Z|}\cos(\omega t - \theta)\ }$$

> **Convención.** Se llama desfasaje al argumento de la **impedancia**, no al de
> la corriente: en la corriente aparece con signo menos. Hay que tener cuidado
> con hacia qué lado está desfasada la corriente respecto del voltaje.

---

## 5. Impedancias en serie y en paralelo

### 5.1 Reglas

**En serie.** Misma corriente, se suman los voltajes:

$$\hat V = \hat Z_1\hat I_0 + \hat Z_2\hat I_0
\quad\Longrightarrow\quad
\boxed{\ {\hat Z}_{\text{serie}} = \hat Z_1 + \hat Z_2\ }$$

**En paralelo.** Mismo voltaje, se suman las corrientes,
$\hat I_0 = \hat V/\hat Z_1 + \hat V/\hat Z_2$:

$$\boxed{\ \frac{1}{{\hat Z}_{\text{paralelo}}} = \frac{1}{\hat Z_1} + \frac{1}{\hat Z_2}\ }$$

Toda el álgebra de las resistencias se traslada: impedancias en lugar de
resistencias, fasores en lugar de corrientes y voltajes. «En realidad haciendo
trampa, porque todos esos números son complejos.» La impedancia del RLC serie
de §3.3 ya era, implícitamente, una suma en serie.

> **Error típico:** calcular los módulos de cada impedancia y sumarlos. Hay que
> sumar los números complejos.

### 5.2 Ejemplo con dos mallas

Un generador $V_0\cos\omega t$ y una resistencia $R_1$, en serie con un tramo
que se abre en dos ramas: en una un condensador $C$, en la otra una
resistencia $R_2$ en serie con una bobina $L$.

La rama con $R_2$ y $L$ es una serie; las dos ramas están en paralelo; y todo
eso, en serie con $R_1$:

$${\hat Z}_{\text{eq}} = R_1 + \hat Z_\parallel,
\qquad
\frac{1}{\hat Z_\parallel} = j\omega C + \frac{1}{R_2 + j\omega L}.$$

Para tener módulo y fase conviene separar parte real e imaginaria. Sacando
denominador común y multiplicando por el **conjugado** del denominador:

$$\hat Z_\parallel = \frac{R_2 + j\omega L}{1-\omega^2LC + j\omega R_2 C}
= \frac{(R_2 + j\omega L)\,(1-\omega^2LC - j\omega R_2 C)}{(1-\omega^2LC)^2 + \omega^2R_2^2C^2}.$$

Desarrollando el numerador, la parte real tiene dos contribuciones,
$R_2(1-\omega^2LC)$ y $+\omega^2 R_2 LC$ (del producto de las dos partes
imaginarias), y la imaginaria es $\omega L(1-\omega^2LC) - \omega R_2^2 C$:

$${\hat Z}_{\text{eq}} = R_1 + \frac{R_2 + j\big[\omega L(1-\omega^2LC) - \omega R_2^2C\big]}{(1-\omega^2LC)^2 + \omega^2R_2^2C^2}.$$

> El docente deja la parte real como la suma de los dos términos y aclara que
> no verificó la cuenta; sumados, se simplifican a $R_2$, como está escrito
> arriba. «Típicamente los errores son de signo»; lo importante es el método.

Con eso, $I(t) = \dfrac{V_0}{|{\hat Z}_{\text{eq}}|}\cos(\omega t - \theta_{\text{eq}})$.

> **Lo que se omitió a propósito:** las bobinas con **mutua**. Ahí no se puede
> hacer así —se vio que dos bobinas en paralelo con mutua no siempre equivalen
> a una— y se trata la clase siguiente.

---

## 6. Potencia en régimen permanente

Sección 10.6.

### 6.1 La potencia no es lineal

Resolver el problema complejo y tomar parte real funciona para la corriente y
para cualquier **expresión lineal** de ella, porque las dos operaciones
conmutan. La potencia instantánea entregada a un dispositivo,

$$P(t) = I(t)\,V(t),$$

es **cuadrática** en la corriente, y la parte real de un cuadrado no es el
cuadrado de la parte real:

$$\Re\big(\hat I^2\big) \neq \big(\Re\hat I\big)^2 .$$

> Para expresiones no lineales hay que **tomar parte real primero**.

### 6.2 Potencia media y factor de potencia

La potencia instantánea suele no interesar: un circuito conectado a la red
oscila 50 o 60 veces por segundo y haría falta un aparato muy fino para
seguirla. Interesa la **potencia media**, $\overline{P} = \langle I\,V\rangle$,
promediada en un período (o en un tiempo largo, que es lo mismo).

> El docente duda entre la barra —que también usó para el conjugado— y los
> corchetes angulares para el promedio.

Con $V = V_0\cos\omega t$ e $I = \dfrac{V_0}{|\hat Z|}\cos(\omega t-\theta)$:

$$\overline{P} = \frac{V_0^2}{|\hat Z|}\,\big\langle\cos\omega t\,\cos(\omega t-\theta)\big\rangle .$$

Desarrollando el coseno de la resta (el coseno es par y el seno impar):

$$\cos\omega t\,\cos(\omega t-\theta) = \cos\theta\cos^2\omega t + \sin\theta\,\cos\omega t\,\sin\omega t .$$

Los promedios en un período:

- $\langle\cos^2\omega t\rangle = \tfrac12$, porque
  $\cos^2x = \tfrac12(1+\cos2x)$ y el coseno promedia cero en un número entero
  de períodos;
- $\langle\cos\omega t\,\sin\omega t\rangle = 0$.

$$\boxed{\ \overline{P} = \frac12\,\frac{V_0^2}{|\hat Z|}\cos\theta
= \frac12\,V_0\,|\hat I_0|\cos\theta\ }$$

A $\cos\theta$ se lo llama **factor de potencia**. (Un estudiante comenta que
UTE —la empresa eléctrica— usa otra letra para la fase; «elijan al gusto del
consumidor».)

### 6.3 Con fases cualesquiera

Arriba se eligió el origen del tiempo para que el voltaje del dispositivo fuera
real. Sin esa suposición, con fases $\theta_V$ y $\theta_I$:

$$\overline{P} = |\hat V_0|\,|\hat I_0|\,
\big\langle\cos(\omega t+\theta_V)\cos(\omega t+\theta_I)\big\rangle .$$

Desarrollando los dos cosenos, los términos en $\cos^2$ y $\sin^2$ promedian
$\tfrac12$ y los cruzados se anulan; volviendo a usar la fórmula del coseno al
revés:

$$\boxed{\ \overline{P} = \frac12\,|\hat V_0|\,|\hat I_0|\cos(\theta_V-\theta_I)
= \frac12\,\Re\!\left(\hat V_0\,\hat I_0^{\,*}\right)\ }$$

Es lo mismo de antes (con $\theta_V = 0$, $\theta_I = -\theta$, y el coseno es
par). La forma con el conjugado se usa mucho para calcular potencias.

### 6.4 Valores eficaces

Se definen los valores **eficaces** o **RMS**:

$$V_{\text{rms}} = \frac{|\hat V_0|}{\sqrt2},\qquad I_{\text{rms}} = \frac{|\hat I_0|}{\sqrt2},
\qquad
\boxed{\ \overline{P} = V_{\text{rms}}\,I_{\text{rms}}\cos\theta\ }$$

En una resistencia el desfasaje es cero (corriente y voltaje en fase), y la
fórmula queda igual que en corriente continua: a los efectos de la potencia, lo
que juega el papel de los valores de continua son los eficaces.

*La próxima clase: resonancia, circuitos con mutuas, y luego las ecuaciones de
Maxwell.*
