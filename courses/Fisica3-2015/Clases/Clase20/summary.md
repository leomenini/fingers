# Resumen Clase 20 — Materiales Magnéticos, Circuitos RL y Energía en el Campo Magnético

---

## Índice

1. [Materiales magnéticos en una bobina](#1-materiales-magnéticos-en-una-bobina)
2. [Circuitos RL](#2-circuitos-rl)
   - [2.1 Planteo y ecuación diferencial](#21-planteo-y-ecuación-diferencial)
   - [2.2 Analogía con el circuito RC](#22-analogía-con-el-circuito-rc)
   - [2.3 Resolución: solución particular y homogénea](#23-resolución-solución-particular-y-homogénea)
   - [2.4 Conexión (posición A) y desconexión (posición B)](#24-conexión-posición-a-y-desconexión-posición-b)
   - [2.5 Tiempo característico](#25-tiempo-característico)
3. [Experimentos de inducción](#3-experimentos-de-inducción)
4. [Energía almacenada en una bobina](#4-energía-almacenada-en-una-bobina)
   - [4.1 Balance de potencia](#41-balance-de-potencia)
   - [4.2 Energía magnética](#42-energía-magnética)
5. [Densidad de energía del campo magnético](#5-densidad-de-energía-del-campo-magnético)

---

## 1. Materiales magnéticos en una bobina

Igual que un dieléctrico dentro de un condensador cambia su capacitancia, un **material magnético** dentro de una bobina (p. ej. un **núcleo de hierro**) cambia sus propiedades, y de manera muy significativa.

**Diferencia importante con el caso eléctrico:** la mayoría de los dieléctricos son **lineales** (la polarización es proporcional al campo aplicado). En cambio, la mayoría de los materiales magnéticos interesantes (como el hierro) son **altamente no lineales**. Esa no linealidad es complicada y no se aborda en un primer curso, pero permite fenómenos como la **magnetización espontánea** (los imanes: sistemas imantados sin campo externo aplicado).

Solo se tratan aquí los materiales **aproximadamente lineales**. En ese caso, la autoinductancia se multiplica por una **constante magnética del material** $K_m$:

$$
\boxed{L = K_m\, L_{\text{vacío}}}
$$

análogo a multiplicar la capacidad por la constante dieléctrica. Así, $L$ depende de la **geometría** de la bobina **y** del **material** con que esté llena.

---

## 2. Circuitos RL

Se agrega una complejidad por vez: tras los circuitos con resistencias y con condensadores (RC), ahora **resistencia + bobina** (RL). Es la sección 11.3.

### 2.1 Planteo y ecuación diferencial

Una batería $\varepsilon$, una resistencia $R$ y una bobina $L$ en una sola malla, con un interruptor de dos posiciones (**A** conecta la batería; **B** la desconecta). Inicialmente no hay corriente. En $t = 0$ se pone en **A**. La ley de mallas (recorriendo la malla) da:

$$
\varepsilon - R\,I - L\,\frac{dI}{dt} = 0 \;\Longrightarrow\; L\,\frac{dI}{dt} + R\,I = \varepsilon
$$

Es una **ecuación diferencial lineal de primer orden con segundo miembro**: aparecen $I$ y $dI/dt$ (operaciones lineales) más un término $\varepsilon$ que no depende de $I$.

### 2.2 Analogía con el circuito RC

Comparando con el circuito RC ($\varepsilon = Q/C + R\,dQ/dt$, con $I = dQ/dt$), la estructura es la misma: en un caso aparece la derivada de la corriente, en el otro la derivada de la carga; en un caso el propio $I$, en el otro $Q$.

| Circuito RC | Circuito RL |
|-------------|-------------|
| variable $Q$ | variable $I$ |
| $R$ (deriv.) | $L$ (deriv.) |
| $1/C$ | $R$ |

Salvo esas sustituciones, la ecuación tiene la **misma forma** y por tanto la **misma solución**. Vale la pena reiterar el método porque es de uso muy general.

### 2.3 Resolución: solución particular y homogénea

**Paso 1 — solución particular.** Se busca una constante $I_0$ (la que ocurre tras esperar mucho tiempo, cuando la corriente se estabiliza y $dI/dt = 0$):

$$
R\,I_0 = \varepsilon \;\Longrightarrow\; I_0 = \frac{\varepsilon}{R}
$$

**Paso 2 — restar la particular.** Escribiendo $i(t) = I(t) - \varepsilon/R$, la constante desaparece al sustituir y queda la **ecuación homogénea**:

$$
L\,\frac{di}{dt} + R\,i = 0
$$

(es la ecuación con la batería "apagada", como poner el interruptor en B).

**Paso 3 — solución exponencial.** Para ecuaciones lineales homogéneas se busca $i = i_0\,e^{rt}$. La justificación es física: la ecuación dice que $di/dt \propto i$, y esa es **exactamente** la propiedad de las exponenciales (su derivada es proporcional a sí mismas). Este método es más general que la separación de variables usada en RC: sirve para **todas** las ecuaciones diferenciales lineales homogéneas (el espacio de soluciones es un espacio vectorial; se busca una **base**, que casi siempre es exponencial). Sustituyendo:

$$
L\,r\,i_0 e^{rt} + R\,i_0 e^{rt} = 0 \;\Longrightarrow\; L\,r + R = 0 \;\Longrightarrow\; r = -\frac{R}{L}
$$

$$
i(t) = i_0\, e^{-Rt/L}
$$

**Solución general** e imposición de la **condición inicial** $I(0) = 0$ (no había corriente):

$$
I(t) = \frac{\varepsilon}{R} + i_0\, e^{-Rt/L}, \qquad I(0) = 0 \Rightarrow i_0 = -\frac{\varepsilon}{R}
$$

$$
\boxed{I(t) = \frac{\varepsilon}{R}\left(1 - e^{-Rt/L}\right)}
$$

> **Test físico:** para $t \to \infty$, $I \to \varepsilon/R$ (satura). Si al resolver aparece una exponencial **creciente**, hay un error: un circuito así no puede tener corrientes que crecen sin límite.

### 2.4 Conexión (posición A) y desconexión (posición B)

Al pasar rápidamente a **B** (batería fuera), la ecuación queda homogénea, $L\,dI/dt + R\,I = 0$, con condición inicial la corriente que había. La corriente **decae exponencialmente a cero** desde su valor inicial:

$$
i(t) = i_0\, e^{-Rt/L}
$$

Al conectar, $I$ crece de $0$ a $\varepsilon/R$; al desconectar, decae de su valor a $0$.

### 2.5 Tiempo característico

En ambos casos el tiempo característico es

$$
\boxed{\tau = \frac{L}{R}}
$$

**Interpretación física:** con una bobina **muy grande**, tarda mucho en almacenar toda la energía de su campo magnético (τ grande). Con una resistencia **muy grande** respecto de la bobina, rápidamente domina la disipación (τ chico).

---

## 3. Experimentos de inducción

Tres experimentos de campo magnético, todos basados en la ley de Faraday. El flujo $\Phi_B = \iint \mathbf{B}\cdot d\mathbf{S} = \iint |B|\,|dS|\cos\theta$ puede variar por el **módulo** de $B$, por el **área**, o por el **ángulo**. Cada experimento ilustra una variación:

- **Variación de ángulo.** Un imán girando dentro de una bobina induce una FEM que enciende una lamparita (proporcional a la velocidad de giro). Es el principio del **generador de CA** (represas, centrales térmicas). El mismo dispositivo, alimentado con corriente, funciona como **motorcito** (levanta un peso).
- **Variación de módulo/dirección.** Una bobina de 2000 vueltas con corriente **alterna** y núcleo de hierro, con un **anillo de aluminio** conductor encima: el flujo variable induce una FEM y una corriente en el anillo, que sufre una fuerza y **levita** (anillo de Thomson). Con un anillo **cortado** no circula corriente → no levita (a pesar de que la FEM se induce igual, sin circuito cerrado no hay corriente ni fuerza). Sin núcleo de hierro las líneas de campo se abren en vez de conducirse a lo largo de la barra, deja de haber un campo vertical atravesando el anillo, y el efecto desaparece. El núcleo de hierro **refuerza** y **guía** el campo a lo largo de toda la barra.
- **Corrientes parásitas (péndulo de Foucault).** Un péndulo con placa de bronce maciza que oscila entre dos bobinas (alimentadas en paralelo para alcanzar ~10 A) se **frena bruscamente** al encender el campo. Al entrar la placa en la zona de campo, el flujo por ella aumenta → se generan **aros de campo eléctrico** inducido que mueven cargas en círculos (corrientes parásitas); esas cargas en movimiento sufren fuerza magnética que **frena** el péndulo, y la energía cinética se disipa por Joule. Con una placa **con muchos cortes** (peine) los aros de corriente no pueden cerrarse → casi no hay frenado y el péndulo oscila libremente (un solo corte frenaría menos: círculos más chicos). Es el principio de los **núcleos laminados** de los transformadores: se usan láminas metálicas separadas por aislante para impedir las corrientes parásitas y evitar el calentamiento.

---

## 4. Energía almacenada en una bobina

Sección 11.4. Igual que un condensador almacena energía en un campo eléctrico, una **bobina almacena energía en un campo magnético**.

### 4.1 Balance de potencia

Circuito RL con $\varepsilon = R\,I + L\,dI/dt$. La **potencia entregada** por la batería (una carga $dQ$ sube un potencial $\varepsilon$, $dW = \varepsilon\,dQ$, por unidad de tiempo):

$$
P_{\text{entregada}} = \varepsilon\,I = R\,I^2 + L\,I\,\frac{dI}{dt}
$$

El término $R\,I^2$ es la **potencia disipada** en la resistencia (ya conocida). La diferencia entre lo entregado por la batería y lo disipado es la **energía almacenada por unidad de tiempo** (energía que no se pierde, sino que se guarda en el campo magnético de la bobina):

$$
\frac{dU_B}{dt} = L\,I\,\frac{dI}{dt}
$$

### 4.2 Energía magnética

Usando la observación $I\,\dfrac{dI}{dt} = \dfrac{1}{2}\dfrac{d}{dt}(I^2)$ (igual que en mecánica con la energía cinética, donde $I$ juega el papel de la velocidad):

$$
\frac{dU_B}{dt} = \frac{d}{dt}\left(\frac{1}{2}L\,I^2\right) \;\Longrightarrow\; \boxed{U_B = \frac{1}{2}L\,I^2}
$$

La **constante aditiva** se elige cero para que $U_B = 0$ cuando $I = 0$ (solo importan las diferencias de energía). Es análoga a la energía del condensador $U_E = \frac{1}{2}Q^2/C$.

> Se supone una bobina **ideal** (sin resistencia). Una bobina real tendría, además, un término de disipación por su resistencia interna.

---

## 5. Densidad de energía del campo magnético

A los físicos les gusta imaginar la energía almacenada **en el campo mismo**, no en el dispositivo. Igual que para el condensador se obtuvo $u_E = \frac{1}{2}\varepsilon_0 E^2$ tomando el caso simple del condensador de placas paralelas, aquí se toma el **solenoide ideal**, se calcula la energía y se divide por el volumen.

Solenoide ideal: $B = \mu_0 n I$ (con $n = N/l$, siendo $l$ el largo), sección $A$, volumen $l\,A$, autoinductancia $L = \mu_0 N^2 A / l$. La densidad:

$$
u_B = \frac{U_B}{\text{vol}} = \frac{\frac{1}{2}L\,I^2}{l\,A} = \frac{\frac{1}{2}\,\mu_0 \frac{N^2}{l}A\,I^2}{l\,A}
$$

Sustituyendo $I = B\,l/(\mu_0 N)$ (despejado de $B = \mu_0 n I$) y simplificando ($N^2$, $A$, $l$ se cancelan):

$$
\boxed{u_B = \frac{B^2}{2\mu_0}}
$$

**Densidad de energía del campo magnético**, expresada solo en términos del campo (el resultado **no** hace referencia al tamaño del solenoide, ni al número de vueltas, ni a la sección: es una propiedad intrínseca del campo). Se probó solo para el solenoide —igual que $u_E$ se probó solo para el condensador de placas paralelas—, pero es una expresión **general** (en el vacío; con materiales magnéticos hay correcciones). En el curso de Electromagnetismo se demuestra rigurosamente.

> **Analogía con el campo eléctrico.** $u_E = \frac{1}{2}\varepsilon_0 E^2$ y $u_B = \frac{1}{2\mu_0}B^2$: ambas proporcionales al **cuadrado del campo**. Una lleva $\varepsilon_0$ (que aparecía en el denominador de Coulomb) y la otra $\mu_0$ en el denominador (porque en Biot–Savart $\mu_0$ va arriba, por convención histórica). Misma estructura.

*Próxima clase: cable coaxial, oscilaciones (circuito LC), analogía masa-resorte y resonancia.*
