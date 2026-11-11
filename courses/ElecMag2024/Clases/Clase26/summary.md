# Resumen Clase 26 — Circuitos RLC: validez de la aproximación, régimen transitorio y régimen permanente

## Índice

1. [¿Cuándo varía «lentamente» una corriente?](#1-cuándo-varía-lentamente-una-corriente)
   - [1.1 Lo que se viene despreciando](#11-lo-que-se-viene-despreciando)
   - [1.2 El criterio: tamaño frente a longitud de onda](#12-el-criterio-tamaño-frente-a-longitud-de-onda)
   - [1.3 Órdenes de magnitud](#13-órdenes-de-magnitud)
2. [Elementos lineales e ideales](#2-elementos-lineales-e-ideales)
3. [Ecuaciones de los circuitos](#3-ecuaciones-de-los-circuitos)
   - [3.1 El circuito RLC serie](#31-el-circuito-rlc-serie)
   - [3.2 Varias mallas](#32-varias-mallas)
   - [3.3 Solución general = homogénea + particular](#33-solución-general--homogénea--particular)
4. [Régimen transitorio y régimen permanente](#4-régimen-transitorio-y-régimen-permanente)
5. [Ejemplo de régimen transitorio](#5-ejemplo-de-régimen-transitorio)
   - [5.1 Ecuación para la corriente](#51-ecuación-para-la-corriente)
   - [5.2 Régimen sobreamortiguado](#52-régimen-sobreamortiguado)
   - [5.3 Régimen subamortiguado](#53-régimen-subamortiguado)
   - [5.4 Régimen crítico](#54-régimen-crítico)
6. [Hacia el régimen permanente sinusoidal](#6-hacia-el-régimen-permanente-sinusoidal)

---

## 1. ¿Cuándo varía «lentamente» una corriente?

Los circuitos RLC ya se vieron en Física III; ahora se les da una segunda
vuelta con elementos nuevos (en particular, bobinas acopladas, que se verán
más adelante). Antes, una aclaración sobre la validez de lo que se hace.

### 1.1 Lo que se viene despreciando

Se ha venido usando que en una resistencia la diferencia de potencial es
proporcional a la corriente, en un condensador a la carga, y en una bobina a la
derivada de la corriente. Pero de Física III se sabe que eso en algún momento
deja de valer: un circuito acoplado a una antena **pierde energía por
radiación**, emite ondas electromagnéticas, y los circuitos tal como se los
modela no tienen ese fenómeno.

Despreciarlo es una buena aproximación cuando las corrientes **varían
lentamente**, y equivale a ignorar el **término de desplazamiento** que Maxwell
agregó a la ley de Ampère. La pregunta es: lento, ¿comparado con qué? La
respuesta definitiva vendrá con las ecuaciones de Maxwell; por ahora, una
estimación de orden de magnitud.

### 1.2 El criterio: tamaño frente a longitud de onda

Un circuito que oscila con frecuencia angular $\omega$ tiene período
$T = 2\pi/\omega$, y las ondas que podría emitir tienen longitud de onda

$$\lambda = c\,T = \frac{2\pi c}{\omega}.$$

Para emitir de manera eficiente, el emisor tiene que tener un tamaño
**comparable** a la longitud de onda (o mayor; quizás diez veces menor, pero no
un millón de veces): un circuito de 10 cm difícilmente emita ondas de un
kilómetro. Por eso las radios tienen antenas. Con $a$ el tamaño del circuito
—**incluida** cualquier antena conectada—:

$$\boxed{\ a \ll \lambda = \frac{2\pi c}{\omega}
\quad\Longleftrightarrow\quad
\omega \ll \frac{2\pi c}{a}\ }$$

es la condición para que la emisión sea despreciable: la corriente «varía
lentamente».

> Si la corriente no es oscilante sino, por ejemplo, un pulso, el período se
> reemplaza por el tiempo característico de variación. Con corriente constante
> ($\omega = 0$) la aproximación es perfecta.

### 1.3 Órdenes de magnitud

Con $c = 3\times10^8$ m/s:

| Señal | Frecuencia | $\omega$ (rad/s) | $\lambda$ (tamaño límite) | Consecuencia |
| --- | --- | --- | --- | --- |
| Red eléctrica | 50 o 60 Hz | 376 (60 Hz) | $\sim5\times10^6$ m | Un circuito de 5000 km empezaría a emitir: del tamaño de una mesa o una ciudad, «ampliamente tranquilos» |
| Radio AM | $\sim10^6$ Hz | $6{,}28\times10^6$ | 300 m | Para emitir hace falta una antena de decenas o centenas de metros |
| Radio FM, televisión | $\sim10^8$ Hz | — | 3 m | En un circuito de laboratorio la aproximación deja de valer |
| Microondas | $\sim10^{10}$ Hz | — | 3 cm | No se aplica a circuitos de mesa |

Consecuencias que comenta el docente:

- Es más fácil recibir FM que AM en aparatos chicos: un celular no tiene antena
  de decenas de metros. Con el cable del auricular como antena se llega a
  algunas decenas de centímetros, no tan lejos de los 3 m de FM, y la baja
  eficiencia se compensa con procesamiento de la señal y eliminación de ruido.
  Lo mismo en los autos, que antes llevaban una antena de metros.
- Al revés: un **horno de microondas** mide unas decenas de centímetros y por
  eso emite muy eficientemente a esa frecuencia, que el docente asocia a una
  resonancia de los enlaces presentes en los materiales biológicos, con la que
  la energía electromagnética se transforma en calor.

> La explicación del calentamiento por microondas se registra tal como la da
> el docente («el puente de hidrógeno»); no se desarrolla en clase.

Durante esta semana se supone siempre que las oscilaciones son lentas en este
sentido; la siguiente se pasa a las ecuaciones de Maxwell y las ondas.

---

## 2. Elementos lineales e ideales

Segunda hipótesis: todos los elementos son **lineales**. Para resistencias y
condensadores, perfecto. Para bobinas, puede fallar si el núcleo es no lineal,
lo que no es raro, y la oscilación se vuelve no lineal: «no vamos a meternos en
ese infierno».

También **ideales**: toda resistencia (incluida la interna de las bobinas) se
pone aparte, en una resistencia. $R$, $C$ y $L$ son constantes.

Convención de signos: se escribe la diferencia de potencial **inicial menos
final**, $\phi_A - \phi_B$, recorriendo de A a B en el sentido de la corriente:

| Elemento | $\phi_A - \phi_B$ |
| --- | --- |
| Resistencia | $R\,I$ |
| Condensador (carga $Q$ en la placa A) | $Q/C$ |
| Bobina ideal | $L\,dI/dt$ |

> En Física III se suele tomar final menos inicial, y al recorrer en el sentido
> de la corriente aparecen signos menos (el potencial cae). Es la misma
> convención con el signo al revés.

---

## 3. Ecuaciones de los circuitos

Como los elementos son lineales, las ecuaciones son **diferenciales lineales**
en la carga y sus derivadas ($I = \dot Q$). Pero hay además términos que no
dependen de la carga ni de sus derivadas: los de las **fuentes** (baterías,
generadores). Se los llama **segundo miembro**, y hacen que las ecuaciones no
sean homogéneas.

### 3.1 El circuito RLC serie

Un generador $V(t)$ en serie con una resistencia, un condensador y una bobina.
Recorriendo la malla:

$$V(t) - R I - \frac{Q}{C} - L\frac{dI}{dt} = 0
\quad\Longrightarrow\quad
\boxed{\ V(t) = L\,\ddot Q + R\,\dot Q + \frac{Q}{C}\ }$$

Es una ecuación diferencial **lineal, de segundo orden, con coeficientes
constantes y con segundo miembro**.

### 3.2 Varias mallas

Con dos mallas acopladas hay **dos** ecuaciones independientes, no tres: la ley
de los nudos (lo que entra a un nudo sale) liga las corrientes. En general hay
una ecuación por **malla independiente**, y queda un **sistema** de ecuaciones
diferenciales lineales con coeficientes constantes y segundo miembro.

### 3.3 Solución general = homogénea + particular

> **Propiedad general de los sistemas lineales** (ni siquiera hace falta que
> los coeficientes sean constantes): la solución general es la solución general
> del sistema **homogéneo** (sin segundo miembro, con las fuentes apagadas) más
> **una** solución particular del sistema completo.

**Prueba.** El sistema es $E_i(Q, \dot Q, \ddot Q,\dots) = V_i(t)$, con $Q$ un
vector (una carga por malla). Si $Q_1$ y $Q_2$ son dos soluciones, restando
ecuación a ecuación y usando la linealidad —la resta de las ecuaciones es la
ecuación evaluada en la resta, porque la derivada de una resta es la resta de
las derivadas—:

$$E_i(Q_1-Q_2,\ \dot Q_1-\dot Q_2,\dots) = 0 :$$

**la diferencia entre dos soluciones cualesquiera resuelve el homogéneo.** Toda
solución es, entonces, una particular elegida más una homogénea.

Para el RLC serie se ve directamente:

$$L(\ddot Q_1-\ddot Q_2) + R(\dot Q_1-\dot Q_2) + \frac{Q_1-Q_2}{C} = 0 .$$

> Quien prefiera pensar en corrientes puede hacerlo; la carga es la primitiva
> de la corriente. Se usan cargas para sólo derivar y no tener que integrar.

---

## 4. Régimen transitorio y régimen permanente

Salvo con superconductores, todo circuito tiene resistencias —en el peor de los
casos, la de los cables, chica pero no nula—. En el **homogéneo**, con todas las
fuentes apagadas, la resistencia transforma energía eléctrica en calor: la
energía almacenada disminuye y **corrientes y cargas tienden a cero** (también
se descargan los condensadores).

Entonces, para $t$ grande,

$$Q(t) = Q_h(t) + Q_p(t) \;\longrightarrow\; Q_p(t):$$

todas las soluciones se vuelven **idénticas**, y **no dependen de las
condiciones iniciales**. «Tiempo grande» puede ser muy poco: un tiempo
característico $\tau$ asociado a las resistencias (cuanto más chicas, más hay
que esperar); y la homogénea suele decaer exponencialmente.

| Régimen | Tiempo | $Q_h$ | Depende de las condiciones iniciales |
| --- | --- | --- | --- |
| **Transitorio** | $t\lesssim\tau$ | $\neq0$ | Sí |
| **Permanente** | $t\gg\tau$ | $\to0$ | No: $Q\approx Q_p$ |

En la mayoría de los circuitos el transitorio es cortísimo: al prender el
lavarropas se establece enseguida el régimen permanente, que es el que interesa.
Es especialmente así con un forzado **periódico**, que dura mucho.

> **La hamaca.** Si se empuja a un chico en una hamaca, al principio el
> movimiento depende de cómo se la soltó; después de un rato oscila
> sincronizada con el empuje, independientemente de la condición inicial. Eso
> es el régimen permanente.

---

## 5. Ejemplo de régimen transitorio

Sección 10.3.

### 5.1 Ecuación para la corriente

Una **batería** de diferencia de potencial **constante** $V$, un interruptor y
un circuito RLC serie:

$$V = L\frac{dI}{dt} + R I + \frac{Q}{C}.$$

Derivando respecto del tiempo, el lado izquierdo se anula:

$$L\ddot I + R\dot I + \frac{I}{C} = 0 .$$

La ecuación para la **corriente** es homogénea, aunque la de la carga no lo
sea. Si se espera mucho, $I\to0$ y la carga no tiende a cero sino a una
constante, $Q\to CV$: el condensador se carga.

Las soluciones de una ecuación lineal homogénea forman un **espacio vectorial**,
y con coeficientes constantes se puede encontrar una base de **exponenciales**:
la derivada de una exponencial es proporcional a ella misma, así que la
dependencia temporal se factoriza. Con $I = I_0\,e^{\lambda t}$:

$$L\lambda^2 + R\lambda + \frac1C = 0
\quad\Longrightarrow\quad
\boxed{\ \lambda_\pm = -\frac{R}{2L} \pm\sqrt{\frac{R^2}{4L^2}-\frac{1}{LC}}\ }$$

(descartando la solución trivial $I_0 = 0$; el docente ubica primero mal la
$L$ en el pizarrón y lo corrigen.)

### 5.2 Régimen sobreamortiguado

Si $\dfrac{R^2}{4L^2} > \dfrac{1}{LC}$, las dos raíces son **reales y
negativas** (la raíz es, en módulo, menor que $R/2L$, así que el signo $+$ no
alcanza a compensar el menos):

$$I(t) = A\,e^{\lambda_+ t} + B\,e^{\lambda_- t}\ \xrightarrow[t\to\infty]{}\ 0 .$$

Tiende a cero **sin oscilar** (a lo sumo cambia de signo una vez, según $A$ y
$B$). Las constantes salen de **dos** condiciones iniciales —es de segundo
orden—, típicamente la corriente y su derivada al cerrar el interruptor; con el
condensador inicialmente descargado, $I(0) = 0$ y la derivada sale de la
ecuación.

### 5.3 Régimen subamortiguado

Si $\dfrac{R^2}{4L^2} < \dfrac{1}{LC}$, la raíz es imaginaria pura y la parte
real sigue siendo negativa:

$$\lambda_\pm = -\frac{R}{2L} \pm i\,\omega_0',
\qquad
\omega_0' = \sqrt{\frac{1}{LC}-\frac{R^2}{4L^2}},$$

$$I(t) = A\,e^{-Rt/2L + i\omega_0' t} + B\,e^{-Rt/2L - i\omega_0' t}.$$

**La corriente es real.** Imponiendo $\bar I = I$ y comparando término a
término resulta $B = \bar A$. Escribiendo $A = |A|\,e^{i\theta}$ y usando la
fórmula de Euler (la suma de una exponencial imaginaria pura y su conjugada es
dos veces el coseno):

$$\boxed{\ I(t) = 2|A|\,e^{-Rt/2L}\cos\!\left(\omega_0' t + \theta\right)\ }$$

Tiende a cero **oscilando**, dentro de una envolvente $2|A|\,e^{-Rt/2L}$. Las
dos constantes, $|A|$ y $\theta$, salen de las condiciones iniciales.

### 5.4 Régimen crítico

En el borde, $\dfrac{R^2}{4L^2} = \dfrac{1}{LC}$, hay **una sola** exponencial
y falta una solución para completar la base. Exactamente en ese valor nunca se
está en la práctica, pero cerca de él la solución se le parece.

Para encontrar la otra, se mira el caso sobreamortiguado muy cerca del
crítico, con $\delta\lambda = \sqrt{R^2/4L^2 - 1/LC}$ real y chico:

$$I = e^{-Rt/2L}\left(A\,e^{\delta\lambda\,t} + B\,e^{-\delta\lambda\,t}\right)
\approx e^{-Rt/2L}\Big[(A+B) + \delta\lambda\,(A-B)\,t\Big].$$

La base en el caso crítico es

$$\boxed{\ e^{-Rt/2L},\qquad t\,e^{-Rt/2L}\ }$$

> **Situación general.** En las ecuaciones lineales con coeficientes constantes
> lo normal es una base de exponenciales; en los **casos críticos**, justo en el
> pasaje de una situación a otra, aparecen exponenciales multiplicadas por
> polinomios. Acá, el polinomio más simple: $t$.

| Régimen | Condición | Comportamiento |
| --- | --- | --- |
| Sobreamortiguado | $R^2/4L^2 > 1/LC$ | Decae sin oscilar |
| Crítico | $R^2/4L^2 = 1/LC$ | $e^{-Rt/2L}$ y $t\,e^{-Rt/2L}$ |
| Subamortiguado | $R^2/4L^2 < 1/LC$ | Oscila con $\omega_0'$ dentro de una envolvente exponencial |

---

## 6. Hacia el régimen permanente sinusoidal

Para un $V(t)$ arbitrario, hallar una solución particular puede ser difícil.
La clase siguiente se ocupa del caso más simple, un **generador sinusoidal**.

No es tan restrictivo: un forzado periódico cualquiera se descompone en **serie
de Fourier**. «No le decimos nada a los matemáticos»: aunque la serie es
infinita, se la piensa con unos pocos términos, cada uno como un generador
sinusoidal. Por el **principio de superposición** se resuelve cada componente
por separado (apagando los demás generadores) y la solución es la suma.

> A la pregunta de si esto entra en el parcial: el práctico no tiene ejemplos
> con series de Fourier, así que no; pero conviene saberlo.

*La próxima clase: régimen permanente con generadores sinusoidales.*
