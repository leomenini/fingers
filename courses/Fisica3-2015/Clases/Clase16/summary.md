# Resumen Clase 16 — Par sobre una Espira, Motores y Galvanómetro, y el Campo Magnético de las Corrientes (Biot–Savart)

---

## Índice

1. [Par sobre una espira con corriente](#1-par-sobre-una-espira-con-corriente)
   - [1.1 Configuración](#11-configuración)
   - [1.2 Análisis de las fuerzas](#12-análisis-de-las-fuerzas)
   - [1.3 El torque y su módulo](#13-el-torque-y-su-módulo)
   - [1.4 Forma vectorial: vector área y momento](#14-forma-vectorial-vector-área-y-momento)
   - [1.5 Bobina de N vueltas](#15-bobina-de-n-vueltas)
2. [Aplicaciones](#2-aplicaciones)
   - [2.1 Motor de corriente continua](#21-motor-de-corriente-continua)
   - [2.2 Galvanómetro: amperímetro y voltímetro](#22-galvanómetro-amperímetro-y-voltímetro)
3. [Campo magnético de una carga en movimiento](#3-campo-magnético-de-una-carga-en-movimiento)
   - [3.1 Dificultad experimental](#31-dificultad-experimental)
   - [3.2 Descripción del campo](#32-descripción-del-campo)
   - [3.3 Ley de Biot–Savart para una carga puntual](#33-ley-de-biot-savart-para-una-carga-puntual)
   - [3.4 Comparación con Coulomb y validez](#34-comparación-con-coulomb-y-validez)
4. [Ley de Biot–Savart para un cable](#4-ley-de-biot-savart-para-un-cable)
   - [4.1 Deducción](#41-deducción)
   - [4.2 Ejemplo: segmento rectilíneo](#42-ejemplo-segmento-rectilíneo)
   - [4.3 Límites: dipolo magnético e hilo infinito](#43-límites-dipolo-magnético-e-hilo-infinito)

---

## 1. Par sobre una espira con corriente

### 1.1 Configuración

Una espira **rectangular** por la que circula una corriente $I$ se coloca en un campo magnético **uniforme** $\mathbf{B}$, montada sobre un eje que le permite **girar** libremente. Se define un **versor normal** $\hat{\mathbf{n}}$ a la espira (plana) y el ángulo $\theta$ que forma con $\mathbf{B}$. Vista desde arriba, la espira se ve como un segmento inclinado y el eje de rotación pasa por su mitad.

> Si el campo real no fuera uniforme, basta con que la **espira sea muy pequeña** frente a las escalas de variación del campo para tratarlo como uniforme.

### 1.2 Análisis de las fuerzas

La fuerza sobre cada lado es $\mathbf{F} = I\,\mathbf{L}\times\mathbf{B}$ (Clase 15). Hay cuatro lados; conviene analizarlos por pares:

- **Lados horizontales** (en el plano que contiene a $\mathbf{B}$): cada uno da una fuerza **vertical**; una hacia arriba y la otra hacia abajo, de igual módulo → **se anulan** ($\mathbf{F}_1 + \mathbf{F}_2 = 0$). Además, sus líneas de acción pasan por el eje, así que **no hacen par**.
- **Lados laterales** (donde circula la corriente perpendicular a $\mathbf{B}$): las fuerzas $\mathbf{F}_3$ y $\mathbf{F}_4$ también son de igual módulo y opuestas → **se anulan como resultante**, pero están aplicadas a distinto lado del eje → **generan un par (torque)**.

**Conclusión:** la **resultante** sobre la espira es cero, pero se genera un **torque** neto que tiende a hacerla girar. (Si el campo **no** fuera uniforme, las fuerzas no se cancelarían exactamente y habría también resultante.)

### 1.3 El torque y su módulo

Sean $a$ y $b$ los lados del rectángulo (área $A = ab$). El torque de $\mathbf{F}_3$ respecto del eje es la fuerza por el **brazo de palanca** $\tfrac{a}{2}\sin\theta$:

$$
\tau_3 = F_3 \cdot \frac{a}{2}\sin\theta
$$

El lado lateral es perpendicular a $\mathbf{B}$, así que $F_3 = I\,b\,B$. Sumando la contribución idéntica de $\mathbf{F}_4$:

$$
\tau = 2\cdot I\,b\,B\cdot\frac{a}{2}\sin\theta = I\,(ab)\,B\,\sin\theta
$$

$$
\boxed{\tau = I\,A\,B\,\sin\theta}
$$

El torque es **nulo cuando $\theta = 0$** (normal paralela al campo): la posición de equilibrio favorece alinear la espira con $\mathbf{B}$.

### 1.4 Forma vectorial: vector área y momento

La aparición del $\sin\theta$ sugiere un **producto vectorial**. Se define el **vector área** $\mathbf{A} = A\,\hat{\mathbf{n}}'$, con $\hat{\mathbf{n}}'$ dado por la **regla de la mano derecha para espiras** (los dedos siguen el sentido de la corriente, el pulgar da la normal). Con esta elección:

$$
\boxed{\boldsymbol{\tau} = I\,\mathbf{A}\times\mathbf{B}}
$$

Esta forma vectorial contiene módulo ($I A B \sin\theta$), dirección (perpendicular al plano de $\mathbf{A}$ y $\mathbf{B}$) y sentido correctos. (El producto $\mathbf{A}\times\mathbf{B}$ debe tomarse en este orden — es anticonmutativo — para obtener el sentido físico correcto del giro.)

> Se define el **momento dipolar magnético** de la espira como $\boldsymbol{\mu} = I\,\mathbf{A}$, de modo que $\boldsymbol{\tau} = \boldsymbol{\mu}\times\mathbf{B}$ — análogo al torque sobre un dipolo eléctrico, $\boldsymbol{\tau} = \mathbf{p}\times\mathbf{E}$ (Clase 5).

### 1.5 Bobina de N vueltas

Si en lugar de una espira hay una **bobina de $N$ vueltas** (bien juntas), todas contribuyen igual y el torque se multiplica por $N$:

$$
\boxed{\boldsymbol{\tau} = N\,I\,\mathbf{A}\times\mathbf{B}}
$$

> **Consejo práctico:** para no equivocarse con los signos, conviene calcular el **módulo** con la fórmula y determinar el **sentido** del torque pensando físicamente hacia dónde apuntan las fuerzas.

---

## 2. Aplicaciones

### 2.1 Motor de corriente continua

Una espira con corriente en un campo externo gira por el torque, pero es un **"motor aburrido"**: al pasar la posición de alineación, el torque se invierte y la espira **oscila** en vez de girar. La solución es **invertir el sentido de la corriente cada media vuelta**. Esto se logra con un **conmutador** (unas "escobillas" que hacen contacto): al girar, la conexión se invierte, la corriente sobre la espira cambia de sentido y el torque sigue impulsando el giro en la misma dirección.

Esto es un **motor eléctrico de corriente continua** (la corriente de entrada no oscila; el conmutador la invierte mecánicamente). Los motores de **corriente alterna** funcionan igual, pero es la **propia corriente** la que oscila (sinusoidalmente).

> Como el torque $\propto \sin\theta$ no es constante ("tuc, tuc, tuc"), en la práctica se agregan dispositivos que estabilizan el giro.

### 2.2 Galvanómetro: amperímetro y voltímetro

Como el par es **proporcional a la corriente**, se puede **medir corriente**: se agrega un **resorte de torsión** (cuyo torque es proporcional al ángulo de giro). En equilibrio, el torque magnético iguala al del resorte, y el ángulo de una aguja indica el torque → **la corriente**. Con $\mathbf{A}$ y $\mathbf{B}$ fijos, medir $\tau$ es medir $I$. Esto es un **galvanómetro**, el núcleo de muchos instrumentos de medida.

- **Amperímetro:** mide corriente. Se conecta **en serie** y debe tener **resistencia muy pequeña**, para no alterar la corriente que se quiere medir.
- **Voltímetro:** mide diferencia de potencial. Se conecta **en paralelo** y debe tener **resistencia muy grande**, para desviar muy poca corriente y no modificar el circuito. Midiendo la corriente que pasa por una resistencia grande conocida se obtiene $\Delta V = R\,I$.

> **Principio general de medición:** todo instrumento perturba el sistema; se lo diseña para perturbarlo **lo menos posible** (poca corriente desviada en el voltímetro; poca caída de potencial en el amperímetro).

---

## 3. Campo magnético de una carga en movimiento

Comienza el **capítulo 9**: cómo las cargas en movimiento **generan** campo magnético (hasta ahora se estudiaba el efecto del campo *dado* sobre cargas; ahora, la fuente del campo).

### 3.1 Dificultad experimental

Idealmente se mediría el campo de una carga $q$ en movimiento usando otra carga $q'$ de prueba. Pero $q'$ sentiría **dos** fuerzas: la **eléctrica** (de Coulomb) y la **magnética**. Para velocidades ordinarias, la fuerza magnética es **muchísimo menor** que la eléctrica, así que queda "oculta" — el experimento es impracticable con cargas sueltas. En la práctica se mide el campo de una **corriente** (un cable **neutro**: sin fuerza eléctrica, pero con muchas cargas en movimiento). Aun así, la carga puntual se estudia primero por ser **más fácil de describir**.

### 3.2 Descripción del campo

Midiendo (idealmente) el campo de una carga $q$ que se mueve con velocidad $\mathbf{v}$, se observa: en un **círculo** en el plano perpendicular al movimiento que pasa por $q$, el módulo de $\mathbf{B}$ es **constante** y el campo es **tangente al círculo**, con sentido dado por la **regla de la mano derecha** (pulgar según $\mathbf{v}$, dedos según $\mathbf{B}$). Además:

- $B \propto 1/r^2$,
- $B \propto v$,
- $B \propto |q|$,
- $B \propto \sin\theta$ (ángulo entre $\mathbf{v}$ y el radio-vector).

### 3.3 Ley de Biot–Savart para una carga puntual

Con $\mathbf{r}$ el vector desde la carga al punto de observación, todo se resume en:

$$
\boxed{\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\,\frac{q\,\mathbf{v}\times\mathbf{r}}{r^3}}
$$

- $\mu_0$ es la **permeabilidad magnética del vacío** (juega para el campo magnético el papel que $\varepsilon_0$ juega para el eléctrico; por convención histórica, $\mu_0$ va **arriba** y $\varepsilon_0$ iba **abajo**).
- El producto vectorial da el campo **perpendicular a $\mathbf{v}$ y a $\mathbf{r}$** (tangente a los círculos), con el sentido correcto (para $q>0$).

### 3.4 Comparación con Coulomb y validez

La ley se **parece a la de Coulomb**: decrece como $1/r^2$ (un $r$ arriba, $r^3$ abajo) y es proporcional a la carga. **Diferencias fundamentales:** tiene una **estructura vectorial** más compleja (perpendicular a $\mathbf{r}$, no radial) y **depende de la velocidad**.

> **Validez ($v \ll c$).** La fórmula es **instantánea**, como si el efecto se propagara sin demora. En realidad las señales electromagnéticas viajan a la **velocidad de la luz** $c$: si $v$ es comparable a $c$, lo que llega al punto de observación es lo que le pasaba a la carga un **rato antes**, y esta ley deja de valer. Todo el curso trabaja en el límite $v \ll c$, pero aquí es particularmente relevante.

---

## 4. Ley de Biot–Savart para un cable

### 4.1 Deducción

Biot y Savart en realidad formularon la ley para un **hilo de corriente** (medible, por ser neutro). Se toma un elemento pequeño de cable $d\mathbf{s}$ por el que pasa corriente $I$, y se suma el campo de todas las cargas que lo cruzan. Para una carga $dQ$ que cruza en un tiempo $dt$: usando $\mathbf{B}$ de la carga puntual con $\mathbf{v}_d$ (velocidad de deriva promedio) y observando que $dQ\,\mathbf{v}_d = I\,dt\,\mathbf{v}_d = I\,d\mathbf{s}$ (pues $d\mathbf{s} = \mathbf{v}_d\,dt$ y $I = dQ/dt$):

$$
d\mathbf{B} = \frac{\mu_0}{4\pi}\,\frac{I\,d\mathbf{s}\times\mathbf{r}}{r^3}
$$

Integrando sobre todo el cable:

$$
\boxed{\mathbf{B} = \frac{\mu_0}{4\pi}\,I\int_C \frac{d\mathbf{s}\times\mathbf{r}}{r^3}}
$$

Esta es la **Ley de Biot–Savart**, la que se determina experimentalmente (la corriente $I$ y la geometría son medibles). Juega para el campo magnético el papel que la ley de Coulomb juega para el eléctrico: da el campo conocidas las **fuentes** (corrientes o cargas en movimiento).

### 4.2 Ejemplo: segmento rectilíneo

Cable rectilíneo de largo $L$, corriente $I$; se calcula $\mathbf{B}$ en un punto $P$ a distancia $X$ en el **plano bisector**. (Como la carga se conserva, un segmento aislado es solo una **contribución** — debe cerrarse con otros segmentos.)

**Dirección:** para cada elemento, $d\mathbf{s}$ y $\mathbf{r}$ están en el plano del dibujo, así que $d\mathbf{B} \perp$ a ese plano — **todas** las contribuciones son **entrantes** y **paralelas** entre sí. Por eso se pueden **sumar los módulos** (sin álgebra vectorial).

**Módulo:** con $\theta$ el ángulo apropiado y $\sin\theta = X/\sqrt{X^2+Y^2}$, $r^2 = X^2+Y^2$:

$$
dB = \frac{\mu_0 I}{4\pi}\,\frac{dy\,\sin\theta}{r^2} = \frac{\mu_0 I}{4\pi}\,\frac{X\,dy}{(X^2+Y^2)^{3/2}}
$$

$$
B = \frac{\mu_0 I X}{4\pi}\int_{-L/2}^{L/2}\frac{dy}{(X^2+Y^2)^{3/2}}
$$

> **Analogía de cálculo:** es el mismo tipo de integral que aparecía al calcular el campo eléctrico de una barra cargada (Clase 8), salvo por los productos vectoriales. La integral se resuelve con el cambio $Y = X u$ y un **truco de integración por partes**: escribir el integrando sumando y restando ($1 = (1+u^2) - u^2$) para separarlo en una parte directa y otra integrable por partes. (Es una alternativa al truco de la sustitución hiperbólica visto antes.)

### 4.3 Límites: dipolo magnético e hilo infinito

**Lejos ($X \gg L$):** la contribución del segmento va como $B \sim \dfrac{\mu_0 I L}{4\pi X^2}$, es decir $\sim 1/X^2$. **Pero** este es solo un cachito: como la corriente se conserva, el circuito es **cerrado**, y al sumar las contribuciones opuestas del circuito completo, el campo de una **distribución acotada de corriente decrece como $1/r^3$** (no $1/r^2$).

> **Por qué $1/r^3$:** no hay **monopolos magnéticos** (no existe el equivalente de la carga magnética). Por eso, visto de lejos, un circuito se comporta como un **dipolo magnético**, cuyo campo decrece como $1/r^3$ — igual que el campo eléctrico de un dipolo (Clase 8), y a diferencia de la carga puntual ($1/r^2$).

**Cerca ($X \ll L$):** despreciando $X$ frente a $L$, se recupera el campo del **hilo infinito**:

$$
\boxed{B = \frac{\mu_0 I}{2\pi X}}
$$

**Dirección y sentido (todos los casos):** las líneas de $\mathbf{B}$ son **círculos cerrados** alrededor del cable, con $\mathbf{B}$ tangente en cada punto, orientados por la **regla de la mano derecha** (pulgar según la corriente, dedos según $\mathbf{B}$).

> Próxima clase: se continúa con el hilo infinito, la fuerza entre corrientes y la ley de Ampère.
