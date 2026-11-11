# Resumen Clase 23 — Ley de Faraday, FEM de movimiento, autoinductancia e inductancia mutua

## Índice

1. [Del caso estacionario al dependiente del tiempo](#1-del-caso-estacionario-al-dependiente-del-tiempo)
2. [Ley de Faraday](#2-ley-de-faraday)
   - [2.1 Forma integral y convención de signos](#21-forma-integral-y-convención-de-signos)
   - [2.2 Comentarios](#22-comentarios)
   - [2.3 Forma diferencial](#23-forma-diferencial)
   - [2.4 Ley de Lenz](#24-ley-de-lenz)
3. [Problemas que parecen de inducción y no lo son](#3-problemas-que-parecen-de-inducción-y-no-lo-son)
   - [3.1 Una barra en un campo uniforme y constante](#31-una-barra-en-un-campo-uniforme-y-constante)
   - [3.2 FEM de movimiento sin Faraday](#32-fem-de-movimiento-sin-faraday)
   - [3.3 Dónde entra Faraday: curvas que dependen del tiempo](#33-dónde-entra-faraday-curvas-que-dependen-del-tiempo)
   - [3.4 Cambio de referencial](#34-cambio-de-referencial)
4. [Autoinductancia](#4-autoinductancia)
   - [4.1 Hipótesis: materiales lineales y bobinas rígidas](#41-hipótesis-materiales-lineales-y-bobinas-rígidas)
   - [4.2 Definición](#42-definición)
   - [4.3 Ejemplo: solenoide ideal](#43-ejemplo-solenoide-ideal)
   - [4.4 Ejemplo: toroide de sección rectangular](#44-ejemplo-toroide-de-sección-rectangular)
5. [Inductancia mutua](#5-inductancia-mutua)

---

## 1. Del caso estacionario al dependiente del tiempo

Empieza el capítulo 8, **inducción electromagnética**. En el caso
electrostático o estacionario, el campo eléctrico cumple

$$\curl\vec E = 0, \qquad \div\vec E = \frac{\rho}{\varepsilon_0},$$

o en forma integral: la circulación de $\vec E$ en **cualquier** curva cerrada
es cero, y el flujo por una superficie cerrada es la carga encerrada sobre
$\varepsilon_0$.

Ahora interesan situaciones que dependen del tiempo, y **lo que se observa** es
que la primera ley deja de valer. Las leyes de la física son empíricas: lo que
la reemplaza también tiene que venir del experimento, y quien la encontró fue
**Faraday**.

Lo que **sigue valiendo** en el caso no estacionario es la fuerza de Lorentz,
también experimental:

$$\vec F = q\left(\vec E + \vec v\times\vec B\right).$$

En algún sentido es la que **define** los campos eléctrico y magnético: se los
mide con una carga en movimiento. La pregunta es qué leyes cumplen.

---

## 2. Ley de Faraday

### 2.1 Forma integral y convención de signos

Se toma una curva cerrada $C$ cualquiera y una superficie $S$ que la tiene por
borde. Las orientaciones **no son independientes**: se orienta $S$ con la
**regla de la mano derecha** respecto del sentido de recorrido de $C$. Si se
invierte $C$, se invierte $\hat n$.

$$\boxed{\ \oint_C \vec E\cdot d\vec l = -\frac{d\Phi_B}{dt},
\qquad \Phi_B = \int_S \vec B\cdot\hat n\,dS\ }$$

> **Por qué hace falta la convención.** $S$ no es cerrada, así que no rige el
> criterio de normal saliente; con orientaciones elegidas por separado, el
> flujo quedaría definido a menos de un signo y la ley no tendría signo
> inambiguo. Se supone, además, que $S$ es orientable.

Si el flujo no depende del tiempo se vuelve al caso anterior: para que haya
circulación no trivial de $\vec E$, el flujo a través de la curva tiene que
cambiar.

### 2.2 Comentarios

1. **Es una ley experimental.** No se deduce de lo visto hasta ahora.
2. **Vale por cambios en $\vec B$ y también por cambios en $C$.** Con un campo
   fijo y una curva que se deforma, el flujo cambia y la ley sigue valiendo. La
   curva puede ser una curva imaginaria, elegida por nosotros; Faraday medía
   sobre circuitos eléctricos, porque en el espacio vacío es muy difícil de
   medir, y verificó la ley tanto variando el campo como deformando los
   circuitos.
3. **Cambiar $S$ con $C$ fijo no cambia el flujo.** Como $\div\vec B = 0$, el
   flujo por la superficie cerrada formada por dos superficies con el mismo
   borde es nulo, así que las dos dan el mismo flujo. Lo que importa es el
   **borde**: la derivada temporal golpea en el campo y en la forma de la
   curva.

### 2.3 Forma diferencial

Para pasar a una ecuación diferencial conviene tomar $C$ y $S$ **fijas**: «el
que puede más puede menos», la superficie la elige uno. Entonces la derivada
sólo actúa sobre el campo:

$$\oint_C \vec E\cdot d\vec l = -\int_S \pdv{\vec B}{t}\cdot\hat n\,dS .$$

Por el teorema de Stokes, el lado izquierdo es el flujo del rotacional:

$$\int_S (\curl\vec E)\cdot\hat n\,dS = -\int_S \pdv{\vec B}{t}\cdot\hat n\,dS
\qquad\text{para toda } S \text{ fija}.$$

Como vale para cualquier dominio de integración, los integrandos son iguales:

$$\boxed{\ \curl\vec E = -\pdv{\vec B}{t}\ }$$

**Ley de Faraday en forma diferencial.**

- Generaliza $\curl\vec E = 0$: si $\vec B$ no depende del tiempo, se recupera.
- Se perdió información: la forma integral también se ocupaba de las curvas que
  se deforman. «En algún lado está», pero no en esta ecuación.
- A cambio, no hay integrales: hacer derivadas es siempre más fácil.

### 2.4 Ley de Lenz

El signo menos tiene nombre propio: **ley de Lenz**.

> El campo eléctrico inducido, si genera una corriente, lo hace de modo que esa
> corriente produciría un campo magnético **opuesto a la variación** del campo
> magnético que produjo la inducción.

Dos palabras clave: **opuesto**, que es el signo, y **variación**. No se opone
al campo original —podría tener su mismo sentido— sino a su variación, dada por
la derivada temporal. Si el campo disminuye, la corriente inducida tiende a
compensar la disminución; si aumenta, a compensar el aumento. En general no
compensa del todo, sino en parte.

La ecuación es inambigua; esto es «palabrerío» para recordarla.

---

## 3. Problemas que parecen de inducción y no lo son

El docente quiere desarmar una confusión que, dice, se instala año tras año
desde Física III: hay problemas que se resuelven «con Faraday» y que en
realidad se podían resolver antes de Faraday. Separa qué es la novedad de la
ley y qué ya se sabía.

### 3.1 Una barra en un campo uniforme y constante

Un campo magnético **uniforme e independiente del tiempo** y una barra de largo
$L$ que se mueve con velocidad $\vec v$ constante. Nada depende del tiempo:
**el problema es estacionario**. ¿Por qué parece un problema de Faraday?

### 3.2 FEM de movimiento sin Faraday

Los portadores de la barra se mueven con ella en el campo y sienten la fuerza
magnética $q\,\vec v\times\vec B$, a lo largo de la barra. En el régimen
estacionario las cargas ya se redistribuyeron: se acumularon en los extremos y
generan un **campo eléctrico** en la barra. Cada portador se mueve con
velocidad constante, así que la fuerza de Lorentz sobre él es **nula**:

$$q\left(\vec E + \vec v\times\vec B\right) = 0
\quad\Longrightarrow\quad
E = v\,B \quad\text{(con } \vec v\perp\vec B\text{)}.$$

> Hace falta $\vec B$ constante y $\vec v$ constante para que sea un régimen
> estacionario.

El campo eléctrico es uniforme en la barra —$v$ y $B$ lo son—, así que entre
sus extremos hay una diferencia de potencial

$$\boxed{\ \mathcal{E} = v\,B\,L\ }$$

la **FEM de movimiento**. No se usó Faraday en ningún momento.

> **El signo de la carga no importa.** Aparece dos veces —en la fuerza magnética
> y en la eléctrica— y se cancela: la dirección de $\vec E$ es la misma para
> electrones que para cargas positivas. Por eso se puede razonar con cargas
> positivas aunque los portadores sean electrones.

En general, para una barra representada por un vector $\vec L$ y un campo no
necesariamente perpendicular,

$$\mathcal{E} = (\vec v\times\vec B)\cdot\vec L .$$

> El docente escribe primero otro orden de factores y lo corrige a éste. Aclara
> también que, en su dibujo, $\vec B$ tiene que tener una componente fuera del
> plano de $\vec v$ y $\vec L$: si los tres estuvieran en el plano, daría cero.

### 3.3 Dónde entra Faraday: curvas que dependen del tiempo

**Curva fija.** Se toma una curva cerrada $C$ que en un instante pasa por la
barra (de extremos A y B) y se cierra por puntos C y D, y se la deja **fija**.
El problema es estacionario: la circulación de $\vec E$ es cero. Sólo dice que
el potencial medido entre C y D es el mismo que entre A y B. Es correcto, pero
nada más.

**Curva que acompaña a la barra.** Se tiene derecho a elegir una curva que se
deforma siguiendo la barra. El problema sigue siendo estacionario; lo que no es
estacionario es **la descripción**. Si $x$ es la posición de la barra, el flujo
por la curva es $\Phi = B\,L\,x$ y, en módulo,

$$\left|\oint_C \vec E\cdot d\vec l\right| = \left|\frac{d\Phi}{dt}\right| = B\,L\,v,$$

que coincide con la FEM de movimiento. Es coherente.

> **Qué aporta Faraday.** No resolver este problema, sino poder **elegir** si la
> curva depende del tiempo y obtener lo mismo. Y, sobre todo, resolver los
> problemas **genuinamente no estacionarios**: ahí el razonamiento de §3.2 deja
> de valer y «es Faraday o morir». Este problema ya se sabía resolver antes de
> Faraday.

### 3.4 Cambio de referencial

El problema también conecta con la relatividad del electromagnetismo, que
apareció cuando se vio la fuerza magnética. La barra se mueve con movimiento
rectilíneo uniforme, así que se puede pasar al referencial en que **la barra
está quieta**. Ahí la fuerza magnética sobre los portadores es **cero**.
¿Cómo funciona entonces?

En ese referencial **el campo magnético no es estacionario**: la región con
campo se mueve, y en un punto dado el campo pasa de cero a no nulo. El problema
ya no es estacionario y hay que usar Faraday. Aplicándolo, el flujo por la
curva varía y se mide la misma diferencia de potencial.

La consistencia: ahora hay **dos** campos eléctricos, el de la separación de
cargas (que es lo que se mide) y el **inducido**, y su suma sobre los
portadores es cero.

| Referencial | Fuerza magnética | Fuerza eléctrica | Origen de la diferencia de potencial |
| --- | --- | --- | --- |
| Campo estacionario, barra en movimiento | $\neq0$ | $\neq0$ (se compensan) | Separación de cargas; no hace falta Faraday |
| Barra en reposo | $0$ | $0$ en total | Inducción: el campo inducido compensa al de las cargas |

> **El principio de relatividad sigue valiendo**, pero de una manera más
> sofisticada que en mecánica. Lo que se mide es lo mismo; la descripción en
> términos de fuerzas cambia con el referencial. En mecánica las fuerzas eran
> las mismas en todos los referenciales inerciales; acá lo que se llama
> eléctrico y lo que se llama magnético **se redistribuye**, y Faraday dice
> exactamente cómo. Eso explica la rareza de que la fuerza magnética dependiera
> del referencial.

---

## 4. Autoinductancia

El dispositivo típico para almacenar energía en un campo eléctrico es el
condensador; para almacenarla en un campo magnético, la **bobina** o
**inductor**. En Física III se vieron bobinas aisladas: una corriente variable
genera un campo variable, que genera un flujo variable, que genera una FEM.
Ahora se agrega lo nuevo: bobinas cercanas que **se inducen mutuamente**.

### 4.1 Hipótesis: materiales lineales y bobinas rígidas

- **Materiales lineales.** En el caso no lineal muchas cosas siguen valiendo y
  otras no, y aparecen muchos fenómenos (con histéresis, por ejemplo, ni
  siquiera está claro que un ciclo no disipe energía en calor).
- **Inductores aislados**, por ahora: lejos unos de otros, cada uno se trata
  por separado.
- **Bobinas rígidas**: la forma no cambia con el tiempo. Eso incluye todo lo que
  afecta al campo: el bobinado, pero también las zonas de aire o de hierro
  dulce (sin histéresis).

### 4.2 Definición

Con una única corriente $I$, el campo generado es **proporcional** a $I$
(Biot y Savart, Ampère: duplicar la corriente duplica el campo). Eso usa la
linealidad: en el vacío es seguro, pero la reacción de un material podría no
ser lineal. Por lo tanto el flujo, que es una integral de $\vec B$, también es
proporcional a $I$.

Si la bobina es rígida, lo único que depende del tiempo es la corriente, y por
la regla de la cadena:

$$\frac{d\Phi_B}{dt} = \frac{d\Phi_B}{dI}\,\frac{dI}{dt},
\qquad
\frac{d\Phi_B}{dI} = \frac{\Phi_B}{I} \equiv L .$$

Con una relación de proporcionalidad, la derivada es el cociente. $L$ es una
constante que depende de la forma de la bobina, de los materiales lineales que
la componen y de sus tamaños relativos: la **autoinductancia** de la bobina.
Por Faraday,

$$\boxed{\ \mathcal{E} = -L\,\frac{dI}{dt}\ }$$

> **$L$ es positiva**, por la ley de Lenz.

Esa FEM es el trabajo por unidad de carga al recorrer la bobina, y da la
diferencia de potencial entre sus bornes.

**Unidades.** El **henry**: $1\ \text{H} = 1\ \text{V}\cdot\text{s}/\text{A}$.

### 4.3 Ejemplo: solenoide ideal

Solenoide en el vacío con $N$ vueltas, sección $A$ y largo $\ell$ (con
minúscula, a pedido de un estudiante, para no confundirlo con la
autoinductancia). El campo es el del solenoide ideal, y el flujo en una espira
es el campo por la sección:

$$B = \mu_0\,\frac{N}{\ell}\,I,
\qquad
\Phi_{\text{espira}} = \mu_0\,\frac{N}{\ell}\,I\,A .$$

El flujo total en el bobinado es $N$ veces eso, proporcional a $I$ como se
esperaba:

$$\Phi_{\text{total}} = \mu_0\,\frac{N^2 A}{\ell}\,I
\quad\Longrightarrow\quad
\boxed{\ L = \mu_0\,\frac{N^2 A}{\ell}\ }$$

> **¿Por qué $N^2$?** Al duplicar las vueltas pasan dos cosas: el campo se
> duplica, así que el flujo en cada espira se duplica; y hay el doble de
> espiras. Cada espira induce en todas.

### 4.4 Ejemplo: toroide de sección rectangular

Un toroide de radio interno $a$, radio externo $b$ y altura $h$, con $N$
vueltas. Ya no es un solenoide ideal: el campo depende de la distancia al eje.

**Campo.** Por simetría el campo da vueltas alrededor del eje. Con una curva
amperiana circular de radio $r$ entre $a$ y $b$, la corriente que la atraviesa
es $N I$:

$$B\,2\pi r = \mu_0 N I \quad\Longrightarrow\quad B = \frac{\mu_0 N I}{2\pi r}.$$

**Flujo en una espira.** Como $B$ varía con $r$, no es «campo por área»: en una
franja de ancho $dr$ el campo es casi constante y el flujo es $B\,h\,dr$.
Integrando:

$$\Phi_{\text{espira}} = \frac{\mu_0 N I h}{2\pi}\int_a^b\frac{dr}{r}
= \frac{\mu_0 N I h}{2\pi}\,\ln\frac{b}{a}.$$

**Flujo total y autoinductancia.** Todas las espiras tienen el mismo flujo, así
que se multiplica por $N$ y se divide por $I$:

$$\boxed{\ L = \frac{\mu_0\,N^2\,h}{2\pi}\,\ln\frac{b}{a}\ }$$

> **El método, siempre igual:** (1) calcular el campo por el medio que sea —con
> mucha simetría, Ampère—; (2) el flujo en una espira, integrando si el campo
> no es uniforme; (3) sumar sobre las espiras; (4) dividir por $I$.

---

## 5. Inductancia mutua

Sección 8.3, lo nuevo respecto de Física III. Varias bobinas
$C_1, C_2, C_3,\dots$ **no alejadas entre sí** (cada una puede dar muchas
vueltas). La FEM en la bobina $i$ es

$$\mathcal{E}_i = -\frac{d\Phi_i}{dt},$$

pero el flujo en la bobina $i$ ya no depende sólo de su propia corriente, sino
del campo generado por **todas**:

$$\mathcal{E}_i = -\sum_j \frac{d\Phi_{ij}}{dt},$$

con $\Phi_{ij}$ el flujo que la bobina $j$ genera en la bobina $i$.

Con materiales lineales y bobinas rígidas, y corriente $I_j$ en la bobina $j$:

> **Importante:** $\Phi_{ij}$ es proporcional a $I_j$ y **no depende de las
> otras corrientes**, porque es el flujo generado por la bobina $j$.

Entonces

$$\frac{d\Phi_{ij}}{dt} = \frac{d\Phi_{ij}}{dI_j}\,\frac{dI_j}{dt} = M_{ij}\,\frac{dI_j}{dt},
\qquad M_{ij} = \frac{d\Phi_{ij}}{dI_j}\ \text{(constante)},$$

$$\boxed{\ \mathcal{E}_i = -\sum_j M_{ij}\,\frac{dI_j}{dt}\ }$$

- Generaliza $\mathcal{E} = -L\,dI/dt$: con una sola bobina la suma tiene un
  término, una constante y una corriente.
- Las constantes dependen ahora no sólo de la geometría de cada bobina sino de
  la geometría **entre** bobinas: a qué distancia están, qué material hay entre
  ellas.
- La FEM inducida en una bobina depende de cómo varían las corrientes de
  **todas**.

| Elementos de la matriz $M_{ij}$ | Nombre |
| --- | --- |
| Diagonales, $M_{ii}$ | **Autoinductancias**: FEM inducida por la corriente de la propia bobina |
| Fuera de la diagonal, $i\neq j$ | **Inductancias mutuas** |

*La próxima clase continúa con la inductancia mutua.*
