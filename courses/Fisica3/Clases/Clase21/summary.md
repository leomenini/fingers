# Resumen Clase 21 — Energía en un Cable Coaxial, Oscilaciones LC y Circuito RLC Amortiguado

---

## Índice

1. [Energía almacenada en un cable coaxial](#1-energía-almacenada-en-un-cable-coaxial)
   - [1.1 Campo magnético por Ampère](#11-campo-magnético-por-ampère)
   - [1.2 Integración por cascarones](#12-integración-por-cascarones)
2. [Oscilaciones: el circuito LC](#2-oscilaciones-el-circuito-lc)
   - [2.1 Planteo y ecuación](#21-planteo-y-ecuación)
   - [2.2 Analogía con el sistema masa-resorte](#22-analogía-con-el-sistema-masa-resorte)
   - [2.3 Conservación de la energía](#23-conservación-de-la-energía)
   - [2.4 Solución por analogía y verificación](#24-solución-por-analogía-y-verificación)
   - [2.5 Solución por exponenciales complejas](#25-solución-por-exponenciales-complejas)
3. [Oscilaciones forzadas con resistencia (RLC)](#3-oscilaciones-forzadas-con-resistencia-rlc)
   - [3.1 Régimen transitorio y permanente](#31-régimen-transitorio-y-permanente)
   - [3.2 Solución de la homogénea: caso subamortiguado](#32-solución-de-la-homogénea-caso-subamortiguado)

---

## 1. Energía almacenada en un cable coaxial

Aplicación de la densidad de energía $u_B = B^2/(2\mu_0)$ (Clase 20). Un **cable coaxial**: un conductor central fino (radio $A$) por el que **entra** corriente $I$ y un cascarón cilíndrico externo (radio $B$) por el que **sale** la misma $I$. En el medio, vacío (o un aislante con propiedades magnéticas ≈ vacío). Se supone que la energía está **dominada por la región** $A < r < B$ ($A$ muy chico).

### 1.1 Campo magnético por Ampère

El sistema tiene simetría cilíndrica (invariancia por traslación a lo largo del eje y por rotación). Con una curva amperiana circular de radio $r$:

- **Fuera ($r > B$):** la corriente neta encerrada es cero (entra $I$ por el centro, sale $I$ por el cascarón) → $B = 0$.
- **Entre $A$ y $B$:** solo se encierra la corriente central $I$:

$$
B\,(2\pi r) = \mu_0 I \;\Longrightarrow\; B = \frac{\mu_0 I}{2\pi r}
$$

(idéntico al de un solo cable por el eje). La densidad de energía:

$$
u_B = \frac{B^2}{2\mu_0} = \frac{\mu_0 I^2}{8\pi^2 r^2}
$$

**depende de $r$** (no es uniforme): mayor cerca del centro.

### 1.2 Integración por cascarones

Para la energía total se integra sobre la región. Se toma un **cascarón** cilíndrico entre $r$ y $r + dr$, de largo $\ell$ (perpendicular al plano). Su volumen es $2\pi r\, \ell\, dr$ (área de la corona $\times$ largo), y en él la densidad es uniforme:

$$
dU = u_B\,(2\pi r\,\ell\,dr) = \frac{\mu_0 I^2}{8\pi^2 r^2}\,2\pi r\,\ell\,dr = \frac{\mu_0\,\ell\, I^2}{4\pi}\,\frac{dr}{r}
$$

Integrando entre $A$ y $B$:

$$
U = \frac{\mu_0\,\ell\, I^2}{4\pi}\int_A^B \frac{dr}{r}
$$

$$
\boxed{U = \frac{\mu_0\,\ell\, I^2}{4\pi}\,\ln\!\frac{B}{A}}
$$

Ejemplo concreto de que, conocido el campo magnético de un sistema, se calcula la energía integrando $u_B$ en la zona con campo. (Se despreció la energía dentro del conductor central, que también se podría calcular conociendo cómo está distribuida la corriente.)

---

## 2. Oscilaciones: el circuito LC

Hasta ahora la corriente era constante o variaba **exponencialmente** (carga/descarga, RL). Ahora aparecen sistemas donde **oscila sinusoidalmente**.

### 2.1 Planteo y ecuación

Un condensador $C$ y una bobina $L$, **despreciando la resistencia** (bobina superconductora ideal, o mirando un tramo corto de tiempo antes de que la resistencia disipe la energía). Inicialmente el condensador está cargado ($Q(0) = Q_0$, se lo cargó con una batería que luego se desconecta) y no hay corriente. La ley de mallas:

$$
\frac{Q}{C} + L\,\frac{dI}{dt} = 0 \;\Longrightarrow\; L\,\frac{d^2Q}{dt^2} + \frac{Q}{C} = 0
$$

Es una **ecuación diferencial lineal homogénea con coeficientes constantes** (aparecen $Q$ y $\ddot Q$ linealmente, sin segundo miembro).

### 2.2 Analogía con el sistema masa-resorte

Un sistema masa-resorte sin rozamiento satisface $M\,\ddot x + K\,x = 0$. La correspondencia es total:

| Mecánico | Eléctrico |
|----------|-----------|
| posición $x$ | carga $Q$ |
| masa $M$ (inercia) | inductancia $L$ |
| constante $K$ | $1/C$ |
| energía cinética $\frac{1}{2}M\dot x^2$ | energía magnética $\frac{1}{2}L\,I^2$ |
| energía potencial $\frac{1}{2}K x^2$ | energía eléctrica $\frac{1}{2}Q^2/C$ |

Ecuaciones con la misma forma tienen las mismas soluciones.

### 2.3 Conservación de la energía

Sin resistencia no hay pérdida (la resistencia transformaría energía eléctrica en térmica). La **energía total** debe conservarse:

$$
U = \frac{1}{2}\frac{Q^2}{C} + \frac{1}{2}L\,I^2
$$

Derivando y usando $\dot Q = I$:

$$
\frac{dU}{dt} = \frac{Q}{C}\dot Q + L\,I\,\dot I = I\left(\frac{Q}{C} + L\,\frac{dI}{dt}\right) = 0
$$

(el paréntesis es cero por la ley de mallas). La energía **se conserva**, oscilando entre la forma eléctrica (condensador) y la magnética (bobina), igual que en el masa-resorte la energía va y viene entre cinética y potencial. No sorprende: al ser las ecuaciones idénticas, si allá se conserva la energía mecánica, acá se conserva la eléctrica. Es también coherente con la ley de mallas vista como balance de energía: nadie aporta ni saca energía del circuito.

### 2.4 Solución por analogía y verificación

Por analogía con el oscilador armónico ($x = x_0\cos(\omega t + \varphi)$, con $\omega = \sqrt{K/M}$), la solución del LC es:

$$
Q(t) = Q_0\,\cos(\omega t + \varphi), \qquad \boxed{\omega = \frac{1}{\sqrt{LC}}}
$$

**Verificación:** con $\ddot Q = -\omega^2 Q_0\cos(\omega t + \varphi)$, sustituyendo en la ecuación y simplificando el coseno (que no se anula para todo $t$): $-L\omega^2 + 1/C = 0 \Rightarrow \omega = 1/\sqrt{LC}$. **Condiciones iniciales:** de $\dot Q(0) = 0$ (corriente inicial nula) sale $\sin\varphi = 0 \Rightarrow \varphi = 0$ (el caso $\varphi = \pi$ solo cambia el signo de $Q_0$), y $Q(0) = Q_0$. Solución:

$$
Q(t) = Q_0\,\cos(\omega t)
$$

> **Limitación del método:** verificar que "adivinamos bien" no ayuda a **hallar** la solución si no se la conoce de antemano.

### 2.5 Solución por exponenciales complejas

Método general y útil (a diferencia del anterior, permite **hallar** la solución sin conocerla). La idea de fondo es simple: la ecuación dice que $\ddot Q$ es proporcional (a menos de signo) a $Q$, y esa es justamente la propiedad de las **exponenciales** (derivar equivale a multiplicar por una constante). Por eso las ecuaciones diferenciales lineales homogéneas con coeficientes constantes tienen **soluciones exponenciales**. Se busca $Q(t) = A\,e^{rt}$; sustituyendo (cada derivada agrega un factor $r$), el **polinomio característico**:

$$
L\,r^2 + \frac{1}{C} = 0 \;\Longrightarrow\; r^2 = -\frac{1}{LC} \;\Longrightarrow\; r = \pm\,\frac{i}{\sqrt{LC}} = \pm\,i\omega
$$

Las raíces son **imaginarias puras**. La solución general es combinación lineal:

$$
Q(t) = A_1\,e^{i\omega t} + A_2\,e^{-i\omega t}
$$

Estas son **todas** las soluciones matemáticas, pero solo interesan las **físicas**: $Q$ es un número **real**. Imponer $Q = \overline{Q}$ (característica de los reales) obliga a $A_2 = \overline{A_1}$ (las dos exponenciales son linealmente independientes, así que el coeficiente de cada una debe coincidir con su conjugado). Escribiendo $A_1 = |A_1|\,e^{i\varphi}$ en forma polar y usando la **fórmula de Euler** ($e^{ix} = \cos x + i\sin x$), al sumar $A_1 e^{i\omega t}$ con su conjugado las partes imaginarias (senos) se cancelan y quedan dos veces la parte real:

$$
Q(t) = 2|A_1|\cos(\omega t + \varphi) \equiv Q_0\cos(\omega t + \varphi)
$$

Se recupera la misma solución, pero por un método que sirve para casos más difíciles (los que siguen). En esta parte del curso se usa $j$ para la unidad imaginaria (no $i$), para no confundirla con la corriente.

---

## 3. Oscilaciones forzadas con resistencia (RLC)

Ahora un **generador** $\varepsilon(t)$ fuerza un circuito con **resistencia** $R$, condensador $C$ y bobina $L$ en serie (sección 11.6). La ecuación:

$$
\varepsilon(t) = L\,\frac{dI}{dt} + R\,I + \frac{Q}{C} \;\Longleftrightarrow\; L\,\ddot Q + R\,\dot Q + \frac{Q}{C} = \varepsilon(t)
$$

Se supone el forzado **periódico** (p. ej. sinusoidal, pero podrían ser escalones o triángulos). Analogía con una **hamaca**: al empujar periódicamente, al principio la hamaca hace un movimiento que depende de las condiciones iniciales (no periódico), pero tras un rato oscila con el **mismo periodo** del empuje, independientemente de cómo arrancó. Aparecen entonces dos etapas bien distintas.

### 3.1 Régimen transitorio y permanente

Si $Q_1$ y $Q_2$ son dos soluciones (distintas condiciones iniciales), su **diferencia** $Q_H = Q_1 - Q_2$ satisface la **ecuación homogénea** (sin generador). Con resistencia, la homogénea **tiende a cero** cuando $t \to \infty$ (la oscilación se apaga por disipación). Por tanto, **cualquier** solución se escribe:

$$
Q(t) = Q_{\text{particular}}(t) + Q_H(t)
$$

- **Régimen transitorio:** depende de las condiciones iniciales; dura un tiempo corto (mientras $Q_H$ no se anula).
- **Régimen permanente:** para $t$ grande, toda solución se comporta como una **solución particular** dada, insensible a las condiciones iniciales.

El problema se **separa en dos**: hallar una solución particular (régimen permanente) y resolver la homogénea (régimen transitorio). Esto es una ventaja enorme: normalmente resolver una ecuación diferencial exige encontrar **todas** las soluciones, pero aquí basta encontrar **una** particular, porque todas las demás se comportan igual para tiempos largos. La homogénea, además, es más fácil que la ecuación completa (no tiene segundo miembro).

### 3.2 Solución de la homogénea: caso subamortiguado

Buscando $Q_H = A\,e^{rt}$, el polinomio característico es de segundo grado:

$$
L\,r^2 + R\,r + \frac{1}{C} = 0 \;\Longrightarrow\; r = \frac{-R \pm \sqrt{R^2 - 4L/C}}{2L}
$$

Según el signo del discriminante hay varios casos (como en Física 1):

- **$R$ grande (sobreamortiguado):** discriminante positivo → raíces **reales** → no oscila, va al equilibrio.
- **$R$ chica (subamortiguado):** discriminante negativo → raíces **complejas** → oscila con amplitud decreciente.

En el caso **subamortiguado** ($R^2 - 4L/C < 0$):

$$
r_\pm = -\frac{R}{2L} \pm i\,\omega', \qquad \omega' = \sqrt{\frac{1}{LC} - \frac{R^2}{4L^2}}
$$

Definiendo $\gamma = R/(2L)$, e imponiendo que $Q_H$ sea real (mismo procedimiento que en el LC):

$$
\boxed{Q_H(t) = Q_0\, e^{-\gamma t}\cos(\omega' t + \varphi)}
$$

Es la solución del LC **modulada** por una exponencial decreciente $e^{-\gamma t}$: las oscilaciones se **amortiguan**. $\gamma$ es proporcional a $R$ (mayor $R$ → decae más rápido) y $\omega' \to \omega = 1/\sqrt{LC}$ cuando $R \to 0$.

*Próxima clase: la solución particular en régimen permanente, resonancia e impedancias complejas.*
