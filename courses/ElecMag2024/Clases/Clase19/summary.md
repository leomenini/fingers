# Resumen Clase 19 — Potencial vector magnético, desarrollo multipolar y campo de un dipolo magnético

## Índice

1. [Un ejemplo más de Ampère: cable grueso](#1-un-ejemplo-más-de-ampère-cable-grueso)
2. [Potencial vector magnético](#2-potencial-vector-magnético)
   - [2.1 Por qué no hay potencial escalar](#21-por-qué-no-hay-potencial-escalar)
   - [2.2 Biot y Savart como un rotacional](#22-biot-y-savart-como-un-rotacional)
   - [2.3 Definición y analogía con el potencial escalar](#23-definición-y-analogía-con-el-potencial-escalar)
   - [2.4 Qué es exacto y qué es aproximado](#24-qué-es-exacto-y-qué-es-aproximado)
3. [Desarrollo multipolar magnético](#3-desarrollo-multipolar-magnético)
   - [3.1 Planteo para un circuito](#31-planteo-para-un-circuito)
   - [3.2 Desarrollo de 1/|r₂ − r₁|](#32-desarrollo-de-1r₂--r₁)
   - [3.3 El término monopolar es cero](#33-el-término-monopolar-es-cero)
   - [3.4 El término dipolar](#34-el-término-dipolar)
   - [3.5 Momento dipolar magnético y potencial del dipolo](#35-momento-dipolar-magnético-y-potencial-del-dipolo)
4. [Campo magnético de un dipolo](#4-campo-magnético-de-un-dipolo)
   - [4.1 Cálculo del rotacional](#41-cálculo-del-rotacional)
   - [4.2 Resultado y cuándo falla](#42-resultado-y-cuándo-falla)
5. [Flujo magnético por superficies abiertas](#5-flujo-magnético-por-superficies-abiertas)
6. [Adelanto: Laplace fuera del electromagnetismo](#6-adelanto-laplace-fuera-del-electromagnetismo)

---

## 1. Un ejemplo más de Ampère: cable grueso

Repaso: la clase pasada se probó que, para corrientes estacionarias
($\nabla\cdot\vec J = 0$), Biot y Savart implica Ampère; eso cierra un asunto
que en Física III «había que creer o reventar».

Ejemplo de recordatorio. Un cable muy largo (se omiten los efectos de borde en
las puntas) de radio $R$, perpendicular al pizarrón, con densidad de corriente
$J$ **uniforme**.

Mismas simetrías que el cable infinito: invariancia por rotaciones alrededor
del eje, de modo que las líneas de campo —cerradas e invariantes— son
circunferencias, y el módulo de $\vec B$ es constante sobre cada una. Tomando
una de radio $r$ como curva amperiana, esté adentro o afuera del cable:

$$B\,2\pi r = \mu_0\,I_{\text{adentro}},
\qquad
I_{\text{adentro}} =
\begin{cases}
J\,\pi r^2 & r<R\\[2pt]
J\,\pi R^2 & r>R
\end{cases}$$

$$\boxed{\ B(r) =
\begin{cases}
\dfrac{\mu_0 J}{2}\,r & r<R\\[8pt]
\dfrac{\mu_0 J}{2}\,\dfrac{R^2}{r} & r>R
\end{cases}\ }$$

El módulo crece linealmente hasta $r=R$, donde alcanza su máximo
$B_{\max} = \mu_0 J R/2$, y afuera decrece como $1/r$.

Con esto el campo magnético tiene, como el eléctrico, sus dos leyes:

| | Divergencia | Rotacional |
| --- | --- | --- |
| $\vec B$ | $\nabla\cdot\vec B = 0$ (no hay monopolos) | $\nabla\times\vec B = \mu_0\vec J$ (Ampère) |

---

## 2. Potencial vector magnético

### 2.1 Por qué no hay potencial escalar

En electrostática el campo se escribe como menos el gradiente de un potencial.
Para $\vec B$ en general no se puede: como $\nabla\times\vec B = \mu_0\vec J$
no es cero, $\vec B$ **no deriva de un potencial escalar**.

> Sí se puede definir un potencial escalar magnético en regiones **sin
> corriente**. Es una situación excepcional, pero aparece en el práctico y más
> adelante en el teórico.

Hay una propiedad alternativa: la divergencia de $\vec B$ sí es cero. Eso
permite asociarle un potencial que, en lugar de un escalar, es un **vector**.

### 2.2 Biot y Savart como un rotacional

Se parte de

$$\vec B(\vec r_2) = \frac{\mu_0}{4\pi}\int_V
\vec J(\vec r_1)\times\frac{\vec r_2-\vec r_1}{|\vec r_2-\vec r_1|^3}\,dV_1$$

y se busca escribirlo no como un gradiente sino como un rotacional.

**Paso 1.** El cociente es, salvo constantes, el campo de una carga puntual en
$\vec r_1$, que es menos el gradiente de su potencial:

$$\nabla_2\frac{1}{|\vec r_2-\vec r_1|} = -\frac{\vec r_2-\vec r_1}{|\vec r_2-\vec r_1|^3}
\quad\Longrightarrow\quad
\vec B(\vec r_2) = -\frac{\mu_0}{4\pi}\int_V \vec J(\vec r_1)\times
\nabla_2\frac{1}{|\vec r_2-\vec r_1|}\,dV_1 .$$

**Paso 2.** Rotacional de un escalar por un vector (otra vez «la derivada de un
producto»; lo dudoso son los signos, que se verifican a mano o con
Levi-Civita):

$$\nabla\times(f\,\vec v) = f\,\nabla\times\vec v + \nabla f\times\vec v .$$

Con $f = 1/|\vec r_2-\vec r_1|$ y $\vec v = \vec J(\vec r_1)$, el primer
término es nulo porque $\vec J(\vec r_1)$ **no depende de $\vec r_2$**:

$$\nabla_2\times\frac{\vec J(\vec r_1)}{|\vec r_2-\vec r_1|}
= \nabla_2\frac{1}{|\vec r_2-\vec r_1|}\times\vec J(\vec r_1).$$

**Paso 3.** Eso es el integrando de arriba con los factores en el otro orden;
el producto vectorial es anticonmutativo y el signo absorbe el menos. Y el
rotacional, que es una derivada respecto de la variable exterior, **sale de la
integral**:

$$\vec B(\vec r_2) = \nabla_2\times\left[\frac{\mu_0}{4\pi}\int_V
\frac{\vec J(\vec r_1)}{|\vec r_2-\vec r_1|}\,dV_1\right].$$

### 2.3 Definición y analogía con el potencial escalar

$$\boxed{\ \vec A(\vec r_2) = \frac{\mu_0}{4\pi}\int_V
\frac{\vec J(\vec r_1)}{|\vec r_2-\vec r_1|}\,dV_1,
\qquad \vec B = \nabla\times\vec A\ }$$

$\vec A$ es el **potencial vector magnético**. La expresión es casi idéntica a
la del potencial de Coulomb:

$$\phi(\vec r_2) = \frac{1}{4\pi\varepsilon_0}\int_V
\frac{\rho(\vec r_1)}{|\vec r_2-\vec r_1|}\,dV_1 .$$

| Eléctrico | Magnético |
| --- | --- |
| $1/\varepsilon_0$ | $\mu_0$ |
| $\rho$ | $\vec J$ |
| $\phi$ (escalar) | $\vec A$ (vector) |
| $\vec E = -\nabla\phi$ | $\vec B = \nabla\times\vec A$ |

**¿Qué se ganó?** La objeción es razonable: se pasó de un vector a otro vector,
no de tres componentes a una como en el caso eléctrico. Igual se gana bastante:

- la integral —que es lo que da trabajo— es **mucho más simple**: no tiene
  productos vectoriales, y el rotacional se toma una sola vez al final;
- es mnemotécnicamente cómoda: en Biot y Savart uno duda del orden de los
  factores y de los signos; ésta se recuerda a partir de la de Coulomb.

### 2.4 Qué es exacto y qué es aproximado

La deducción se apoya en Biot y Savart, que es una ley **aproximada**. Pero:

> **Resultado matemático (enunciado, no demostrado).** Todo campo vectorial que
> verifique $\nabla\cdot\vec B = 0$ se puede escribir como
> $\vec B = \nabla\times\vec A$ para algún campo vectorial $\vec A$. Es análogo
> a que un campo de rotacional nulo se escribe como un gradiente, con hipótesis
> del mismo tipo sobre la región (simplemente conexa, etc.); se toma todo el
> espacio «para no hacernos lío».

Como hasta donde se sabe los experimentos nunca detectaron monopolos,
$\nabla\cdot\vec B = 0$ es exacta, y entonces:

| Afirmación | Estatus |
| --- | --- |
| $\vec B = \nabla\times\vec A$ para algún $\vec A$ | **Exacta**; no depende de Biot y Savart |
| La expresión integral concreta de $\vec A$ | Basada en Biot y Savart; tendrá correcciones cuando se corrija esa ley |

Resumen del docente: (1) es útil, simplifica cuentas; (2) no tanto como en el
caso eléctrico, porque siguen siendo tres componentes; (3) $\vec B$ siempre es
el rotacional de un potencial vector, pero la fórmula disponible está al nivel
de aproximación de Biot y Savart; (4) se parece mucho a la del potencial
escalar.

---

## 3. Desarrollo multipolar magnético

Pregunta: un conjunto de corrientes localizadas en una región; se quiere el
campo magnético **lejos** de ella. Igual que en el caso eléctrico, se hace un
desarrollo en el tamaño de la región, y conviene empezar por el potencial.
Cada componente de $\vec A$ obedece la misma expresión que $\phi$, así que la
cuenta es la misma, con particularidades.

### 3.1 Planteo para un circuito

Se trata el caso más común, corriente $I$ en un circuito $C$. Con la regla
$\vec J\,dV\to I\,d\vec l$:

$$\vec A(\vec r_2) = \frac{\mu_0 I}{4\pi}\oint_C
\frac{d\vec l_1}{|\vec r_2-\vec r_1|} .$$

Se toma el origen cerca del circuito, de modo que $|\vec r_1|$ sea del orden
del tamaño $a$ del circuito, y se estudia $|\vec r_2|\gg|\vec r_1|$.

### 3.2 Desarrollo de 1/|r₂ − r₁|

El mismo cálculo del caso eléctrico:

$$\frac{1}{|\vec r_2-\vec r_1|}
= \frac{1}{\left(r_2^2 + r_1^2 - 2\,\vec r_1\cdot\vec r_2\right)^{1/2}}
= \frac{1}{r_2}\left(1 - \frac{2\,\vec r_1\cdot\vec r_2}{r_2^2}
+ \frac{r_1^2}{r_2^2}\right)^{-1/2}.$$

| Aproximación | Orden en $r_1/r_2$ | Significado |
| --- | --- | --- |
| Monopolar | 0 | Se reemplaza $\vec r_1$ por 0: todo el circuito en el origen |
| Dipolar | 1 | — |
| Cuadrupolar | 2 | — |

En el caso eléctrico se llegó al cuadrupolo; acá alcanza con el **dipolar**.
Con $(1+x)^\alpha = 1+\alpha x+\mathcal O(x^2)$ y $\alpha = -\tfrac12$ (el
término $r_1^2/r_2^2$ ya es de segundo orden):

$$\frac{1}{|\vec r_2-\vec r_1|} = \frac{1}{r_2}\left[1 +
\frac{\vec r_1\cdot\vec r_2}{r_2^2} + \mathcal O\!\left(\frac{r_1^2}{r_2^2}\right)\right].$$

Sustituyendo (con $d\vec l_1 = d\vec r_1$):

$$\vec A(\vec r_2) = \frac{\mu_0 I}{4\pi}\left[
\frac{1}{r_2}\oint_C d\vec r_1
+ \frac{1}{r_2^3}\oint_C d\vec r_1\,(\vec r_1\cdot\vec r_2)
+ \mathcal O\!\left(\frac{1}{r_2^3}\right)\right].$$

El primer término decrece como $1/r_2$, el segundo como $1/r_2^2$ (hay un
$r_2$ arriba) y el cuadrupolar, despreciado, como $1/r_2^3$.

### 3.3 El término monopolar es cero

$$\oint_C d\vec r_1 = 0 :$$

la integral de línea sobre una curva cerrada se anula. **No hay término
monopolar**, como tenía que ser: no existe el equivalente magnético de la
carga. El campo magnético de un circuito decrece, a lo sumo, dipolarmente.

### 3.4 El término dipolar

Hay que calcular $\oint_C d\vec r_1\,(\vec r_1\cdot\vec r_2)$, y se quiere
sacar $\vec r_2$ de la integral, donde está entreverado en un producto escalar.

> Este tramo del video es una **regrabación**: el docente avisa que la
> explicación original «fue un enredo inútil» y la rehace prolija.

**Ecuación (1): triple producto vectorial.**

$$(\vec r_1\times d\vec r_1)\times\vec r_2
= -\,\vec r_1\,(d\vec r_1\cdot\vec r_2) + d\vec r_1\,(\vec r_1\cdot\vec r_2).$$

**Ecuación (2): un diferencial exacto.** Variando $\vec r_1$ con $\vec r_2$
fijo:

$$d\!\left[\vec r_1\,(\vec r_2\cdot\vec r_1)\right]
= d\vec r_1\,(\vec r_1\cdot\vec r_2) + \vec r_1\,(\vec r_2\cdot d\vec r_1).$$

La expresión buscada aparece en las dos, y la otra aparece con signos opuestos.
**Sumando**:

$$(\vec r_1\times d\vec r_1)\times\vec r_2 + d\!\left[\vec r_1\,(\vec r_2\cdot\vec r_1)\right]
= 2\,d\vec r_1\,(\vec r_1\cdot\vec r_2).$$

Integrando sobre la curva cerrada, el diferencial exacto da cero (se vuelve al
punto de partida) y $\vec r_2$ sale de la integral:

$$\oint_C d\vec r_1\,(\vec r_1\cdot\vec r_2)
= \left[\frac12\oint_C \vec r_1\times d\vec r_1\right]\times\vec r_2 .$$

### 3.5 Momento dipolar magnético y potencial del dipolo

El corchete es el **vector área** del circuito, el mismo que apareció al
calcular el torque sobre una espira (Clase 16):

$$\vec{\mathcal A} = \frac12\oint_C \vec r_1\times d\vec r_1 .$$

(Con $\mathcal A$ cursiva para no confundirlo con el potencial vector.)
Multiplicado por la corriente es el **momento dipolar magnético**:

$$\vec m = I\,\vec{\mathcal A} = \frac{I}{2}\oint_C \vec r_1\times d\vec r_1 .$$

Para una curva plana, $\vec{\mathcal A}$ es el de Física III: módulo igual al
área, dirección perpendicular al plano, sentido según la mano derecha. Para un
circuito en el espacio es más complicado, pero la integral lo da.

$$\boxed{\ \vec A(\vec r) = \frac{\mu_0}{4\pi}\,\frac{\vec m\times\vec r}{r^3}
+ \mathcal O\!\left(\frac{1}{r^3}\right)\ }$$

Es la **aproximación dipolar magnética** del potencial vector. Comparada con el
dipolo eléctrico:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\,\frac{\vec p\cdot\vec r}{r^3} + \dots$$

el producto escalar pasa a ser vectorial, $1/\varepsilon_0$ pasa a $\mu_0$ y
$\vec p$ pasa a $\vec m$.

---

## 4. Campo magnético de un dipolo

### 4.1 Cálculo del rotacional

$\vec B = \nabla\times\vec A$, con $\vec m$ **constante** (depende del dipolo,
no del punto de observación). Usando el rotacional de un producto vectorial
(Clase 18), sólo sobreviven los términos donde las derivadas caen sobre
$\vec r/r^3$:

$$\nabla\times\left(\vec m\times\frac{\vec r}{r^3}\right)
= \vec m\;\nabla\cdot\!\left(\frac{\vec r}{r^3}\right)
- (\vec m\cdot\nabla)\frac{\vec r}{r^3}.$$

**Primer término.** $\vec r/r^3$ es el campo de una carga puntual: su
divergencia es $4\pi\,\delta(\vec r)$, nula fuera del origen.

> **La delta en el origen no interesa.** La aproximación dipolar es para $r$
> grande; en $r=0$ nada de esto vale y habría que mirar el detalle de la
> distribución de corriente. Se descarta el término.

**Segundo término.** Componente a componente. Derivando arriba y abajo:

$$m_x\,\frac{\partial}{\partial x}\,\frac{\vec r}{r^3}
= \frac{m_x\,\hat\imath}{r^3} - \frac{3\,m_x\,x\;\vec r}{r^5},$$

y lo mismo con $y$ y $z$. Sumando los tres:

$$(\vec m\cdot\nabla)\frac{\vec r}{r^3}
= \frac{\vec m}{r^3} - \frac{3\,(\vec m\cdot\vec r)\,\vec r}{r^5}.$$

### 4.2 Resultado y cuándo falla

Con el signo menos de adelante (que el docente se había «morfado» y corrige):

$$\boxed{\ \vec B(\vec r) = \frac{\mu_0}{4\pi}\left[
\frac{3\,(\vec m\cdot\vec r)\,\vec r}{r^5} - \frac{\vec m}{r^3}\right]\ }$$

Es el **campo magnético dipolar**. Es casi idéntico al campo de un dipolo
eléctrico: se pasa de uno a otro cambiando $1/\varepsilon_0\to\mu_0$ y
$\vec p\to\vec m$. El nombre «dipolar» es totalmente apropiado.

> **Cualquier circuito, visto de lejos, se comporta así**, siempre que
> $\vec m\neq0$. En el caso eléctrico, para llegar al cuadrupolo tenían que
> anularse carga y momento dipolar; acá el término de carga se anula solo.

¿Cuándo $\vec m = 0$? Una sola curva plana nunca lo tiene nulo. Sí puede
anularse, por ejemplo, con dos circuitos girando en sentidos opuestos, o con
una curva que sube y vuelve por el otro lado: es como sumar dos dipolos
opuestos.

---

## 5. Flujo magnético por superficies abiertas

Definición que hará falta más adelante, para la ley de Faraday. El flujo de
$\vec B$ por una superficie **cerrada** es cero; pero interesa también el flujo
por superficies abiertas.

Dada una curva cerrada orientada $C$ y dos superficies $S_1$ y $S_2$ con ese
mismo borde, cada una orientada por la **regla de la mano derecha** (la
convención del curso):

$$\Phi_{S_1} = \int_{S_1}\vec B\cdot\hat n\,dS,
\qquad
\Phi_{S_2} = \int_{S_2}\vec B\cdot\hat n\,dS .$$

Son iguales. Intuitivamente: el flujo cuenta líneas de campo, y todas las que
pasan por una pasan por la otra. Formalmente: la unión $S_1\cup S_2$ es una
superficie cerrada, pero al tomar la normal saliente hay que invertir la de una
de las dos:

$$0 = \Phi_{S_1\cup S_2} = \Phi_{S_1} - \Phi_{S_2}
\quad\Longrightarrow\quad
\boxed{\ \Phi_{S_1} = \Phi_{S_2}\ }$$

**El flujo magnético depende sólo del borde**, no de la superficie elegida para
calcularlo.

> Con el campo eléctrico no pasa lo mismo: si entre las dos superficies queda
> una carga, por Gauss el flujo por la superficie cerrada no es cero. En el
> caso magnético, como no hay monopolos, vale siempre.

---

## 6. Adelanto: Laplace fuera del electromagnetismo

Quedan ocho minutos y el docente los usa para anunciar algo de la clase
siguiente. La ecuación de Laplace ya apareció dos veces (electrostática y
corrientes estacionarias en medios óhmicos), y aparecerá una tercera en
problemas magnéticos: donde $\vec J = 0$ es $\nabla\times\vec B = 0$, se escribe
$\vec B$ como un gradiente y, con $\nabla\cdot\vec B = 0$, vuelve Laplace.

Pero es mucho más general: vale siempre que haya un fenómeno **lineal,
homogéneo e isotrópico, sin fuentes**, determinado por lo que pasa en el borde.
Dos ejemplos que se anuncian y **no se desarrollan** en esta clase:

| Ejemplo | Qué obedece Laplace | Dimensión |
| --- | --- | --- |
| Membrana tensa de un tambor (de borde cualquiera) deformada **un poquito** por un taco, en equilibrio | La altura de la membrana como función de $(x,y)$ | Plano |
| Salón cerrado con una estufa, en régimen estacionario | El campo de temperaturas | Espacio |

Para deformaciones grandes de la membrana el problema es no lineal y más
complicado; fuera del régimen estacionario, la temperatura obedece otra
ecuación, la del calor.

*La próxima clase dedica un rato a esas aplicaciones de la ecuación de Laplace
en otras ramas de la física.*
