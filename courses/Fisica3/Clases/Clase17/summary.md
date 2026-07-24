# Resumen Clase 17 — Campo de una Espira Circular, el Solenoide y la Ley de Ampère

---

## Índice

1. [Espira circular: campo sobre el eje](#1-espira-circular-campo-sobre-el-eje)
   - [1.1 Planteo y dirección del campo](#11-planteo-y-dirección-del-campo)
   - [1.2 Cálculo de la componente axial](#12-cálculo-de-la-componente-axial)
   - [1.3 Resultado](#13-resultado)
   - [1.4 Casos límite: centro y dipolo magnético](#14-casos-límite-centro-y-dipolo-magnético)
2. [El solenoide](#2-el-solenoide)
   - [2.1 Definición y planteo](#21-definición-y-planteo)
   - [2.2 Suma de espiras: la integral](#22-suma-de-espiras-la-integral)
   - [2.3 El solenoide ideal](#23-el-solenoide-ideal)
   - [2.4 Campo dentro y fuera](#24-campo-dentro-y-fuera)
3. [Ley de Ampère](#3-ley-de-ampère)
   - [3.1 Enunciado](#31-enunciado)
   - [3.2 Ejemplo: hilo infinito](#32-ejemplo-hilo-infinito)
   - [3.3 Ejemplo: cable cilíndrico](#33-ejemplo-cable-cilíndrico)
   - [3.4 Ejemplo: solenoide ideal](#34-ejemplo-solenoide-ideal)

---

## 1. Espira circular: campo sobre el eje

Segundo ejemplo de la ley de Biot–Savart (tras el segmento/hilo infinito de la Clase 16): una **espira circular** de radio $R$ con corriente $I$, calculando $\mathbf{B}$ en un punto $P$ del **eje**, a distancia $Z$ del centro.

### 1.1 Planteo y dirección del campo

Para un elemento de arco $d\mathbf{s}$, con $\mathbf{r}$ el vector desde el elemento hasta $P$, cada contribución $d\mathbf{B}$ es perpendicular a $d\mathbf{s}$ y a $\mathbf{r}$. **Argumento de simetría:** tomando el elemento **diametralmente opuesto**, su $d\mathbf{B}$ tiene la **misma componente vertical** (según el eje $z$) pero componentes horizontales **invertidas**. Al sumar sobre toda la espira, **las componentes horizontales se cancelan** y solo sobrevive la componente **axial** $B_z$. El sentido (hacia arriba, con la corriente dada) sale de la regla de la mano derecha.

### 1.2 Cálculo de la componente axial

El vector $\mathbf{r}$ es **perpendicular** a $d\mathbf{s}$ en todo punto, así que el módulo del producto vectorial es el producto de los módulos:

$$
dB = \frac{\mu_0 I}{4\pi}\,\frac{ds}{r^2}, \qquad r^2 = Z^2 + R^2 \ (\text{Pitágoras})
$$

Para **proyectar** sobre el eje se multiplica por $\sin\alpha$, con $\alpha$ el ángulo apropiado; $\sin\alpha = R/\sqrt{Z^2+R^2}$ (cateto opuesto sobre hipotenusa):

$$
dB_z = dB\,\sin\alpha = \frac{\mu_0 I}{4\pi}\,\frac{ds}{Z^2+R^2}\cdot\frac{R}{\sqrt{Z^2+R^2}} = \frac{\mu_0 I R}{4\pi}\,\frac{ds}{(Z^2+R^2)^{3/2}}
$$

### 1.3 Resultado

**Nada depende del ángulo**, así que integrar sobre la espira equivale a reemplazar $\int ds = 2\pi R$ (la circunferencia):

$$
B_z = \frac{\mu_0 I R}{4\pi\,(Z^2+R^2)^{3/2}}\int_0^{2\pi R} ds = \frac{\mu_0 I R}{4\pi\,(Z^2+R^2)^{3/2}}\,(2\pi R)
$$

$$
\boxed{B_z = \frac{\mu_0\, I\, R^2}{2\,(Z^2+R^2)^{3/2}}}
$$

### 1.4 Casos límite: centro y dipolo magnético

**En el centro ($Z = 0$):** $B_z = \mu_0 I/(2R) \neq 0$. A diferencia del **anillo cargado** (Clase 8), donde el campo eléctrico en el centro se anulaba (campos radiales opuestos), aquí el campo **no** es nulo. Las líneas de campo magnético son **cerradas** y atraviesan la espira.

**Lejos ($Z \gg R$):**

$$
B_z \approx \frac{\mu_0\, I\, R^2}{2\,|Z|^3} \sim \frac{1}{Z^3}
$$

Decrece como $1/Z^3$ (no como $1/Z^2$). **¿Por qué $1/r^3$?** Porque **no hay monopolos magnéticos**: no existe el equivalente de una "carga magnética" neta. Un anillo cargado, visto de lejos, se comporta como una **carga puntual** ($1/r^2$); pero una espira de corriente se comporta como un **dipolo magnético** ($1/r^3$), análogo al **dipolo eléctrico** (carga neta cero, Clase 8).

Se define el **momento dipolar magnético** de una espira plana:

$$
\boxed{\mu = I\,A} \qquad (A = \pi R^2)
$$

(vectorialmente, $\boldsymbol{\mu} = I\,\mathbf{A}$ con $\mathbf{A}$ por la regla de la mano derecha). Reescribiendo:

$$
B_z = \frac{\mu_0\, \mu}{2\pi\,(Z^2+R^2)^{3/2}}
$$

> **Cuadrupolo.** Si el momento dipolar se anula (p. ej. **dos espiras** con corrientes opuestas, o cuatro cargas cruzadas en el caso eléctrico), el efecto dipolar desaparece y sobrevive un efecto neto menor —el **cuadrupolar**— que decrece aún más rápido ($1/r^4$).

---

## 2. El solenoide

### 2.1 Definición y planteo

Un **solenoide** es una bobina cilíndrica con las espiras **muy compactas** (pegadas una contra otra). Sea $L$ el largo, $N$ el número total de espiras y $n = N/L$ el número de espiras **por unidad de longitud**. Se calcula $\mathbf{B}$ sobre el **eje**.

> **Por qué compactas:** si estuvieran separadas, cada vuelta sería una **hélice** (la corriente sube al dar la vuelta); al estar pegadas, se desprecia ese "pasito" y cada espira se aproxima por una **espira circular** plana. (El cable está **barnizado** —aislado— para que la corriente dé vueltas y no pase de una espira a la vecina por contacto.)

### 2.2 Suma de espiras: la integral

Se usa el resultado de la espira circular. Con el origen en el centro y $x$ la posición del punto de observación, una espira en la posición $y$ está a distancia $y - x$ del punto, así que aporta:

$$
dB_z^{(1\text{ espira})} = \frac{\mu_0 I R^2}{2\,[(y-x)^2 + R^2]^{3/2}}
$$

En un tramo $dy$ hay $n\,dy$ espiras (todas a $\approx$ la misma posición). Sumando e **integrando** en $y$ de $-L/2$ a $L/2$:

$$
B_z = \frac{\mu_0 I R^2 n}{2}\int_{-L/2}^{L/2}\frac{dy}{[(y-x)^2 + R^2]^{3/2}}
$$

Con el cambio $u = y - x$ ($du = dy$), la primitiva (ya obtenida antes por sustitución hiperbólica y por partes; se verifica derivando) es $\dfrac{u}{R^2\sqrt{u^2+R^2}}$. Evaluando:

$$
\boxed{B_z = \frac{\mu_0\, n\, I}{2}\left[\frac{L/2 - x}{\sqrt{(L/2-x)^2 + R^2}} + \frac{L/2 + x}{\sqrt{(L/2+x)^2 + R^2}}\right]}
$$

### 2.3 El solenoide ideal

El **solenoide ideal** es infinitamente largo. Rigurosamente, el límite es $L \gg R$ **con el punto de observación lejos de los bordes**: hay que pedir que $|L/2 - x| \gg R$ **y** $|L/2 + x| \gg R$ (la distancia a cada extremo mucho mayor que el radio). En una zona de ancho $\sim R$ cerca de los bordes, el campo se desvía y la aproximación falla. Al tomar $L\to\infty$ con $x$ **fijo**, ambos cocientes tienden a $\pm 1$.

### 2.4 Campo dentro y fuera

- **Dentro** del solenoide ideal ($L/2 - x > 0$ y $L/2 + x > 0$): ambos cocientes valen $+1$:

$$
\boxed{B_z = \mu_0\, n\, I}
$$

que es la fórmula **conocida del liceo**. Es **constante a lo largo del eje** (no depende de la posición, lejos de los bordes).

- **Fuera** del solenoide (sobre el eje, $x$ grande): un cociente vale $+1$ y el otro $-1$, se cancelan:

$$
B_z = 0
$$

Las líneas de campo son intensas y paralelas al eje **dentro**, y se "abren" rápidamente al salir (el alcance externo es del orden de $R$). Como toda línea magnética es cerrada, las de dentro se cierran por fuera muy dispersas → campo externo prácticamente nulo.

> Todo este cálculo (Biot–Savart) se hizo **solo sobre el eje**. Que el campo sea uniforme en **toda** la sección interna se probará con la ley de Ampère (§3.4).

---

## 3. Ley de Ampère

### 3.1 Enunciado

Así como la **ley de Gauss** es el equivalente (más general) de Coulomb para el campo eléctrico, existe el análogo magnético de Biot–Savart: la **ley de Ampère**. *(La equivalencia con Biot–Savart no se prueba aquí — es matemáticamente más pesada por los productos vectoriales; se ve en Electromagnetismo.)*

Tomando una **curva cerrada** $C$ atravesada por algunos cables:

$$
\boxed{\oint_C \mathbf{B}\cdot d\mathbf{l} = \mu_0 \sum_{k\ \text{a través de } C} I_k}
$$

La **circulación** de $\mathbf{B}$ a lo largo de $C$ (algo así como un "trabajo" sobre la curva cerrada, aunque $\mathbf{B}$ no es una fuerza) es $\mu_0$ por la suma de las corrientes que **atraviesan** $C$.

> **Analogía con Gauss.** Solo cuentan las corrientes que **pasan por dentro** de la curva (como en Gauss solo contaban las cargas dentro de la superficie). Las corrientes exteriores **sí** generan campo magnético en la curva, pero su contribución a la **circulación** neta es cero. Diferencias: aquí es una **curva cerrada** (allá, una superficie cerrada) y las fuentes son **corrientes** (allá, cargas).
>
> **Convención de signos:** hay que orientar la curva y contar las corrientes con la **regla de la mano derecha** (según la orientación de $C$): las que la cruzan en un sentido son positivas; en el opuesto, negativas.

Como con Gauss, Ampère es cómoda (evita integrar Biot–Savart) **solo cuando hay mucha simetría**.

### 3.2 Ejemplo: hilo infinito

Cable infinito con corriente $I$; se busca $\mathbf{B}$ a distancia $R$. **Simetrías:** el sistema es invariante ante **rotaciones** alrededor del eje y **traslaciones** a lo largo de él. Como las líneas de $\mathbf{B}$ son cerradas y deben respetar esas simetrías, son **círculos concéntricos**; $\mathbf{B}$ es **tangente** a ellos, de **módulo constante** sobre cada círculo. Se toma como curva $C$ un círculo de radio $R$:

$$
\oint_C \mathbf{B}\cdot d\mathbf{l} = B\oint_C dl = B\,(2\pi R) = \mu_0 I \;\Longrightarrow\; \boxed{B = \frac{\mu_0 I}{2\pi R}}
$$

Coincide con el resultado por Biot–Savart (Clase 16), pero el cálculo es de **una sola línea**. (Para un **segmento** finito no hay simetría → hay que volver a Biot–Savart.)

### 3.3 Ejemplo: cable cilíndrico

Cable cilíndrico de radio $R$ con corriente $I$ **uniforme** en su sección. Por la misma simetría, $\mathbf{B}$ es tangencial y de módulo constante sobre un círculo de radio $r$, así que $\oint \mathbf{B}\cdot d\mathbf{l} = B\,(2\pi r)$. Lo que cambia es la **corriente encerrada**:

- **Dentro ($r < R$):** la corriente es proporcional al área, $I_{\text{int}} = I\,\dfrac{\pi r^2}{\pi R^2} = I\,\dfrac{r^2}{R^2}$.
- **Fuera ($r > R$):** $I_{\text{int}} = I$ (toda la corriente; como si estuviera concentrada en el eje).

$$
\boxed{B = \frac{\mu_0 I}{2\pi}\times
\begin{cases}
\dfrac{r}{R^2}, & r < R \\[2mm]
\dfrac{1}{r}, & r > R
\end{cases}}
$$

El campo **crece linealmente** desde el centro hasta la superficie ($r=R$, donde vale $\mu_0 I/(2\pi R)$, el máximo) y luego **decrece** como $1/r$.

### 3.4 Ejemplo: solenoide ideal

Solenoide ideal ($L \gg R$), campo dentro lejos de los bordes. Por simetría, $\mathbf{B}$ es **paralelo al eje** dentro y **nulo fuera**. Se toma como curva un **rectángulo** amperiano con un lado (largo $a$) **dentro**, paralelo al eje, y el opuesto muy lejos (fuera, donde $B=0$):

- Los dos lados **perpendiculares** al eje no contribuyen ($\mathbf{B}\perp d\mathbf{l}$).
- El lado **exterior** no contribuye ($B=0$).
- Solo el lado **interior** aporta: $\oint \mathbf{B}\cdot d\mathbf{l} = B\,a$.

La corriente encerrada es la de las espiras dentro del rectángulo, $I_{\text{int}} = I\,(n\,a)$ (número de espiras $n\,a$, cada una con corriente $I$). Por Ampère:

$$
B\,a = \mu_0\, I\,(n\,a) \;\Longrightarrow\; \boxed{B = \mu_0\, n\, I}
$$

> **Ventaja sobre Biot–Savart:** aquí **no** se supuso estar sobre el eje — el segmento interior podía estar en cualquier posición. Por lo tanto, el campo $B = \mu_0 n I$ vale en **cualquier punto interior** del solenoide (lejos de los extremos), no solo sobre el eje. (Para que el campo tenga esta forma, la corriente debe circular como espiras, de modo que las líneas cerradas queden confinadas dentro.)

> Próxima clase: más aplicaciones de la ley de Ampère y materiales magnéticos.
