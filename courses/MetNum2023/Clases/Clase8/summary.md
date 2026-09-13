# Resumen Clase 8 — Número de Condición

## Índice

1. [Motivación: un sistema que engaña al residuo](#1-motivación-un-sistema-que-engaña-al-residuo)
   - 1.1 [Interpretación geométrica: rectas casi paralelas](#11-interpretación-geométrica-rectas-casi-paralelas)
2. [De la relación residuo–error al número de condición](#2-de-la-relación-residuo–error-al-número-de-condición)
   - 2.1 [Definición](#21-definición)
3. [Por qué no alcanza con el determinante](#3-por-qué-no-alcanza-con-el-determinante)
4. [Caracterización geométrica: estiramiento máximo sobre contracción mínima](#4-caracterización-geométrica-estiramiento-máximo-sobre-contracción-mínima)
   - 4.1 [Costo de calcularlo](#41-costo-de-calcularlo)
5. [Análisis de perturbaciones](#5-análisis-de-perturbaciones)
   - 5.1 [Perturbación en el lado derecho $b$](#51-perturbación-en-el-lado-derecho-b)
   - 5.2 [Perturbación en la matriz $A$](#52-perturbación-en-la-matriz-a)
6. [El teorema de Wilkinson](#6-el-teorema-de-wilkinson)
   - 6.1 [Consecuencia: error relativo controlado por el número de condición](#61-consecuencia-error-relativo-controlado-por-el-número-de-condición)
   - 6.2 [El mensaje final: el residuo siempre es chico, el error no siempre](#62-el-mensaje-final-el-residuo-siempre-es-chico-el-error-no-siempre)

---

## 1. Motivación: un sistema que engaña al residuo

Retomando el cierre de la Clase 7 (¿residuo chico implica error chico?), se
trabaja un ejemplo con una computadora hipotética de **tres cifras
significativas**, resolviendo $Ax=b$ con eliminación gaussiana **con
pivoteo parcial** (ya aplicando la lección de la Clase 6).

La solución computada es $\bar{x} = (-0{,}443,\ 1)$. El **residuo**
calculado es del orden de $5{,}41\times 10^{-4}$ en norma infinito — un
número tan chico como la propia precisión de la máquina. Todo parece
indicar que $\bar{x}$ es una buena aproximación.

Sin embargo, la solución exacta (calculada a mano por un compañero) es
$x^\star = (1,-1)$. El **error** en norma infinito es $\|\bar{x}-x^\star\|_\infty
\approx 2{,}2$ — enorme, del orden de la magnitud misma de la solución.

> **Se hizo todo bien** (eliminación gaussiana con pivoteo parcial, la mejor
> herramienta disponible) y aun así el resultado es inútil. La pregunta es
> quién tiene la culpa.

### 1.1 Interpretación geométrica: rectas casi paralelas

Un sistema $2\times 2$ es la intersección de dos rectas en el plano.
Graficando el sistema, las dos rectas resultan **casi paralelas**. El punto
que se calculó está muy cerca de ambas rectas (de ahí el residuo chico),
pero cuando dos rectas casi paralelas están muy próximas entre sí, **estar
cerca de ambas no implica estar cerca de su punto de intersección**.

> **La culpa es del sistema, no de la computadora ni del algoritmo.** Si en
> cambio las rectas fueran muy distintas en dirección (en el caso extremo,
> ortogonales), estar cerca de ambas sí obligaría a estar cerca de la
> intersección: ese sería un sistema "bueno". Cuanto más cerca esté un
> sistema de ser linealmente dependiente, más peligroso es resolverlo
> numéricamente.

## 2. De la relación residuo–error al número de condición

De $r = Ae$ (Clase 7) y, usando compatibilidad de la norma operador con
$r=Ae$ y con $e=A^{-1}r$ (viable porque $A$ es invertible):

$$\|r\| \leq \|A\|\,\|e\|, \qquad \|e\| \leq \|A^{-1}\|\,\|r\|$$

Para obtener una noción de **error relativo** (dividir por el tamaño de la
solución, ya que no se puede dividir por un vector), se repite el mismo
argumento con $b = Ax^\star$:

$$\|b\| \leq \|A\|\,\|x^\star\|, \qquad \|x^\star\| \leq \|A^{-1}\|\,\|b\|$$

Combinando ambos pares de desigualdades (usando el primero para acotar
$\|e\|$ y el segundo — invertido — para acotar $1/\|x^\star\|$):

$$\boxed{\frac{1}{\kappa(A)}\cdot\frac{\|r\|}{\|b\|} \;\leq\; \frac{\|e\|}{\|x^\star\|} \;\leq\; \kappa(A)\cdot\frac{\|r\|}{\|b\|}}$$

donde aparece, multiplicando, el factor $\kappa(A) = \|A\|\,\|A^{-1}\|$.

### 2.1 Definición

$$\kappa(A) := \|A\|\,\|A^{-1}\|$$

se llama el **número de condición** de $A$ (respecto de la norma matricial
elegida — siempre una norma operador, inducida por una norma vectorial, ya
que es donde valen compatibilidad y submultiplicatividad).

> **Interpretación directa**: si $\kappa(A)$ es moderado (p. ej. $4$),
> residuo relativo chico $\iff$ error relativo chico — son casi
> equivalentes. Si $\kappa(A)$ es enorme (p. ej. $10^9$), un residuo
> relativo chico **no dice nada** sobre el error relativo.

> **Depende de la norma elegida, pero no del orden de magnitud**: para una
> matriz razonable, $\kappa$ calculado con distintas normas ($L^1$, $L^2$,
> $L^\infty$) da resultados del mismo orden de magnitud. En Octave: `cond(A,
> p)` (exacto, caro — requiere invertir $A$); `condest(A)` (estimación
> barata asociada a la norma $L^1$). Sin especificar norma, `cond(A)` usa
> $L^2$.
>
> Para la matriz mala del ejemplo de §1: $\kappa_1 \approx 2{,}6\times
> 10^6$, $\kappa_2 \approx 2{,}19\times 10^6$, $\kappa_\infty \approx
> 2{,}6\times 10^6$ — todos del orden $10^6$. Con un residuo relativo del
> orden $10^{-4}$, el error relativo queda acotado sólo hasta el orden
> $10^{6}\times 10^{-4} = 10^{2}$: completamente inútil, consistente con lo
> observado.

## 3. Por qué no alcanza con el determinante

Pregunta natural: ¿no eran las matrices "malas" las de determinante chico
(cercano a singular)? **No es así.**

**Contraejemplo**: $A = \alpha I$ con $\alpha$ muy chico (p. ej.
$\alpha=10^{-5}$ en $3\times 3$). $\det(A) = \alpha^3 = 10^{-15}$ —
diminuto. Sin embargo, $\kappa(A) = 1$ (el mínimo posible): desde el punto
de vista computacional, resolver un sistema con esta matriz es trivial y
perfectamente estable, aunque desde Álgebra Lineal I parecería "casi
singular".

> **El determinante no mide lo que importa aquí.** Lo que importa es cuánto
> estira la matriz en unas direcciones comparado con cuánto contrae en
> otras (§4) — no qué tan chico es el producto de sus valores propios.

## 4. Caracterización geométrica: estiramiento máximo sobre contracción mínima

$$\kappa(A) = \|A\| \cdot \|A^{-1}\| = \frac{\displaystyle\max_{x\neq 0}\dfrac{\|Ax\|}{\|x\|}}{\displaystyle\min_{x\neq 0}\dfrac{\|Ax\|}{\|x\|}}$$

**Demostración** de que $\|A^{-1}\| = 1/\min_{x\neq 0}\|Ax\|/\|x\|$:

Usando que $1/\min(f) = \max(1/f)$ (el mínimo de $f$ se alcanza donde el
máximo de $1/f$ se alcanza, en el mismo punto):

$$\frac{1}{\min\limits_{x\neq0} \|Ax\|/\|x\|} = \max_{x\neq0} \frac{\|x\|}{\|Ax\|}$$

Como $A$ es invertible, el cambio de variable $y=Ax$ (biyectivo sobre
$\mathbb{R}^n\setminus\{0\}$) da $x = A^{-1}y$, y el máximo recorre todos
los $y\neq 0$:

$$\max_{y\neq0} \frac{\|A^{-1}y\|}{\|y\|} = \|A^{-1}\|$$

por definición de norma operador. $\blacksquare$

**Lectura geométrica**: agarrando la bola unitaria de $\mathbb{R}^n$ y
mirando $Ax$ para todo $x$ en esa bola, $\kappa(A)$ compara la dirección que
$A$ más estira contra la que más contrae — sin importar el signo del
estiramiento, sólo su magnitud.

> **Corolario**: para cualquier norma operador, $\kappa(\alpha I) = 1$
> (estira/contrae igual en toda dirección: máximo y mínimo coinciden en
> $|\alpha|$).
>
> **Ejemplo con estiramiento anisótropo**: $A = \begin{pmatrix}\alpha & 0 \\
> 0 & 1/\alpha\end{pmatrix}$ con $\alpha=1000$ estira por $1000$ en una
> dirección y contrae por $1000$ en la otra: $\kappa(A) = 10^6$.
>
> **Si $A$ es singular**, el mínimo estiramiento es $0$ (hay una dirección
> que $A$ manda al vector nulo), así que formalmente $\kappa(A) = \infty$.

### 4.1 Costo de calcularlo

Esta caracterización, aunque conceptualmente más simple, exige recorrer
**todas las direcciones posibles** — es cara, salvo que se conozcan de
antemano los valores propios (o valores singulares) de $A$. Por eso, en la
práctica, se usan estimaciones baratas como `condest`.

## 5. Análisis de perturbaciones

El número de condición cumple, para sistemas lineales, el mismo rol de
**sensibilidad** que cumplía el número de condición de una función:
cuantifica cómo un error en la entrada se propaga a la salida.

### 5.1 Perturbación en el lado derecho $b$

Si $b$ tiene error de medición: se resuelve $Ax=b+\delta b$ en vez de
$Ax=b$; la solución cambia a $x+\delta x$. Restando ambos sistemas y usando
linealidad: $A\,\delta x = \delta b$. Repitiendo el mismo argumento que en
§2 (compatibilidad en ambas direcciones, normalizando por $\|b\|$ y
$\|x\|$ vía $b=Ax$):

$$\boxed{\frac{\|\delta x\|}{\|x\|} \leq \kappa(A)\cdot\frac{\|\delta b\|}{\|b\|}}$$

> Si $A$ está **bien condicionada**, un cambio chico en $b$ produce un
> cambio chico en $x$. Si está **mal condicionada** (como el ejemplo de las
> rectas casi paralelas), un cambio chiquito en $b$ puede mandar la
> solución "al demonio".

### 5.2 Perturbación en la matriz $A$

Ahora el error está en $A$: se resuelve $(A+\delta A)(x+\delta x) = b$ en
vez de $Ax=b$. Restando y usando linealidad:

$$A\,\delta x + \delta A\,(x+\delta x) = 0 \implies \delta x = -A^{-1}\,\delta A\,(x+\delta x)$$

Tomando norma y usando compatibilidad **y** submultiplicatividad
(el producto $A^{-1}\,\delta A$ es un producto de matrices):

$$\|\delta x\| \leq \|A^{-1}\|\,\|\delta A\|\,\|x+\delta x\|$$

Multiplicando y dividiendo por $\|A\|$ para que aparezca la perturbación
normalizada de $A$:

$$\boxed{\frac{\|\delta x\|}{\|x+\delta x\|} \leq \kappa(A)\cdot\frac{\|\delta A\|}{\|A\|}}$$

**Mismo mensaje**: el error relativo en la salida se controla con el número
de condición de $A$ y el tamaño relativo de la perturbación.

## 6. El teorema de Wilkinson

*(Enunciado y aceptado sin demostración — la clase lo presenta como un
resultado clásico de los años 60, de James H. Wilkinson, uno de los
pioneros del álgebra lineal numérica.)*

**Teorema (Wilkinson)**: al resolver $Ax=b$ con eliminación gaussiana con
pivoteo parcial en una computadora, la solución computada $\bar{x}$ es la
solución **exacta** (en aritmética exacta) de un sistema **perturbado**:

$$(A+E)\,\bar{x} = b$$

donde los elementos de la matriz de perturbación $E$ son, en magnitud, del
orden del **error de representación** de los coeficientes de $A$: en
alguna norma matricial,

$$\|E\| \lesssim (\text{factor del orden de } 10)\cdot \varepsilon_{\text{máq}} \cdot \|A\|$$

($\varepsilon_{\text{máq}} \approx 10^{-16}$ en doble precisión.)

### 6.1 Consecuencia: error relativo controlado por el número de condición

Identificando $E$ con $\delta A$ y $\bar{x}$ con $x+\delta x$ en la fórmula
de §5.2:

$$\frac{\|\delta x\|}{\|\bar{x}\|} \leq \kappa(A)\cdot\frac{\|E\|}{\|A\|} \lesssim \kappa(A)\cdot(\text{factor}\sim10)\cdot\varepsilon_{\text{máq}}$$

$$\boxed{\text{Si } \kappa(A) \text{ no es muy grande, eliminación gaussiana con pivoteo parcial da errores relativos chicos.}}$$

Por ejemplo, con $\kappa(A)\sim 20$ y factor $\sim 10$, el error relativo
esperado es del orden de $\varepsilon_{\text{máq}} \times 200 \sim
10^{-14}$ — excelente.

### 6.2 El mensaje final: el residuo siempre es chico, el error no siempre

Un resultado adicional, y el cierre de la clase: **incluso si $\kappa(A)$ es
grande**, la eliminación gaussiana con pivoteo parcial produce siempre
**residuos relativos chicos**, independientemente del condicionamiento.

*Derivación*: $r = A\bar{x}-b$. Usando $A\bar{x}-b = -E\bar{x}$ (de la
ecuación de Wilkinson, $(A+E)\bar x = b \Rightarrow A\bar x - b = -E\bar
x$):

$$\frac{\|r\|}{\|A\|\,\|\bar{x}\|} = \frac{\|{-E\bar{x}}\|}{\|A\|\,\|\bar{x}\|} \leq \frac{\|E\|}{\|A\|} \lesssim (\text{factor}\sim10)\cdot\varepsilon_{\text{máq}}$$

$$\boxed{\text{El residuo relativo de la eliminación gaussiana con pivoteo parcial es siempre del orden de } \varepsilon_{\text{máq}}\text{, sin importar } \kappa(A).}$$

> **Mensaje final del curso sobre esta unidad**: el residuo relativo es
> \emph{siempre} pequeño con eliminación gaussiana con pivoteo parcial —
> eso está garantizado. Si esa pequeñez del residuo se traduce en un error
> pequeño **depende exclusivamente del número de condición de la matriz**,
> algo que queda **fuera del control del algoritmo**. Un residuo chico no
> es evidencia de nada si $\kappa(A)$ es grande.

*Con esto se cierra la unidad de Sistemas Lineales que arrancó en la Clase
5. El curso avanza a partir de la clase siguiente hacia Interpolación
(Clase 11 en este lote).*
