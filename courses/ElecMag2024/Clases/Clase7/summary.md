# Resumen Clase 7 — Polinomios de Legendre, ecuación radial y la esfera conductora en campo uniforme

## Índice

1. [Dónde estamos](#1-dónde-estamos)
2. [Resolver Legendre por serie de potencias](#2-resolver-legendre-por-serie-de-potencias)
   - 2.1 [El método](#21-el-método)
   - 2.2 [La relación de recurrencia](#22-la-relación-de-recurrencia)
   - 2.3 [Primera observación: pares e impares no se hablan](#23-primera-observación-pares-e-impares-no-se-hablan)
   - 2.4 [Segunda observación: cuando la serie se corta](#24-segunda-observación-cuando-la-serie-se-corta)
3. [Los polinomios de Legendre](#3-los-polinomios-de-legendre)
   - 3.1 [Cálculo de los primeros](#31-cálculo-de-los-primeros)
   - 3.2 [Normalización](#32-normalización)
4. [Por qué las demás soluciones no sirven](#4-por-qué-las-demás-soluciones-no-sirven)
   - 4.1 [Convergencia por el criterio del cociente](#41-convergencia-por-el-criterio-del-cociente)
   - 4.2 [El caso $K=0$, resuelto exactamente](#42-el-caso-k0-resuelto-exactamente)
5. [La ecuación radial y la base de soluciones](#5-la-ecuación-radial-y-la-base-de-soluciones)
6. [Ejemplo: esfera conductora en un campo uniforme](#6-ejemplo-esfera-conductora-en-un-campo-uniforme)
   - 6.1 [Planteo y condiciones de borde](#61-planteo-y-condiciones-de-borde)
   - 6.2 [Imponer la condición en el infinito](#62-imponer-la-condición-en-el-infinito)
   - 6.3 [Imponer la condición en la superficie](#63-imponer-la-condición-en-la-superficie)
   - 6.4 [El dato que faltaba: la esfera está descargada](#64-el-dato-que-faltaba-la-esfera-está-descargada)

---

## 1. Dónde estamos

El conjunto de soluciones de una ecuación diferencial lineal **homogénea** —incluidas las que son en derivadas parciales, como Laplace— forma un espacio vectorial. Sobre esa base, la clase anterior aplicó el **método de separación de variables** a la ecuación de Laplace en coordenadas esféricas con simetría azimutal, buscando soluciones de la forma $\phi(r,\theta) = Z(r)\,P(\theta)$ —no la solución general, sino **una base** de soluciones—. Eso separó el problema en dos ecuaciones diferenciales **ordinarias**:

$$\frac{d}{dr}\big(r^2 Z'(r)\big) = K\,Z(r)
\qquad\qquad
\frac{d}{d\theta}\big(\sin\theta\,P'(\theta)\big) + K\sin\theta\,P(\theta) = 0$$

y el cambio $u = \cos\theta$ llevó la angular a la **ecuación de Legendre**:

$$(1-u^2)\,P''(u) - 2u\,P'(u) + K\,P(u) = 0$$

con el interés puesto en $\theta\in[0,\pi]$, es decir $u\in[-1,1]$.

> **El obstáculo:** es lineal y homogénea, pero **no de coeficientes constantes**. Con coeficientes constantes las soluciones son exponenciales —o combinaciones complejas de ellas, que dan senos y cosenos—, y se hallan con el polinomio característico: es la ecuación del resorte, la carga y descarga de un condensador. Acá los coeficientes dependen de $u$, así que ese camino no existe.

---

## 2. Resolver Legendre por serie de potencias

### 2.1 El método

El truco es **buscar la solución como serie de potencias** alrededor de un punto cómodo. El intervalo de interés es $[-1,1]$, cuyo punto natural del medio es $u=0$. En lugar de calcular la solución, se calcula su **desarrollo de Taylor** alrededor de $u=0$.

> **Es dos cosas a la vez.** Como **método numérico** es muy práctico: se calculan términos sucesivos hasta donde llegue la paciencia y se reemplaza la función desconocida por su polinomio. Pero acá se va más lejos: se construye la **serie de Taylor** completa y se estudia si converge. Ahí aparece el arte del asunto —la serie puede converger o no, portarse bien o mal—.

Se propone entonces

$$P(u) = \sum_{m=0}^{\infty} a_m\,u^{m}$$

y se deriva término a término:

$$P'(u) = \sum_{m=0}^{\infty} a_m\,m\,u^{m-1}
\qquad
P''(u) = \sum_{m=0}^{\infty} a_m\,m(m-1)\,u^{m-2}$$

**Reindexado.** En $P''$ los términos $m=0$ y $m=1$ son nulos, así que la suma arranca realmente en $m=2$. Definiendo $m' = m-2$ y volviendo a llamar $m$ al índice —es un **índice mudo**, como en un cambio de variable de una integral—:

$$P''(u) = \sum_{m=0}^{\infty} a_{m+2}\,(m+2)(m+1)\,u^{m}$$

que ya tiene la misma potencia $u^m$ que los demás términos.

### 2.2 La relación de recurrencia

Sustituyendo los cuatro términos de la ecuación, todos escritos con $u^m$:

| Término | Queda |
|---|---|
| $P''$ | $\sum_m a_{m+2}(m+2)(m+1)\,u^m$ |
| $-u^2 P''$ | $-\sum_m a_m\,m(m-1)\,u^m$ |
| $-2u\,P'$ | $-2\sum_m a_m\,m\,u^m$ |
| $K\,P$ | $K\sum_m a_m\,u^m$ |

> **El argumento clave:** si la suma vale $0$ **para todo $u$**, entonces **cada coeficiente de $u^m$ vale cero por separado**. Es el mismo razonamiento que con un polinomio: si un polinomio es idénticamente nulo, todos sus coeficientes lo son.

Igualando a cero el coeficiente de $u^m$:

$$a_{m+2}\,(m+2)(m+1) = a_m\big[m(m-1) + 2m - K\big] = a_m\big[m(m+1) - K\big]$$

$$\boxed{a_{m+2} = a_m\,\frac{m(m+1) - K}{(m+1)(m+2)}}$$

Ésta es la **relación de recurrencia**, y **salta de dos en dos**.

### 2.3 Primera observación: pares e impares no se hablan

Como el salto es de 2, $a_0$ genera $a_2, a_4, a_6,\dots$ y $a_1$ genera $a_3, a_5, a_7,\dots$, **sin mezclarse nunca**. El espacio de soluciones se parte en dos subespacios que no se comunican: el de las funciones **pares** y el de las **impares**.

> Sin pérdida de generalidad se puede tomar $a_1=0$ (soluciones pares) o $a_0=0$ (soluciones impares). La solución general será una combinación lineal y por lo tanto mezclará ambas, pero **como base se pueden separar**. Es una clasificación, no una restricción.

### 2.4 Segunda observación: cuando la serie se corta

Mirando el numerador de la recurrencia: si para algún entero $n$ ocurre que

$$K = n(n+1)$$

entonces al llegar a $m=n$ el numerador se anula, $a_{n+2}=0$, y **todos los coeficientes siguientes son nulos**. La serie deja de ser infinita: es un **polinomio**.

$$\boxed{K = n(n+1)\quad\Longrightarrow\quad a_m = 0 \;\;\text{para todo } m > n}$$

(unos se anulan por la recurrencia, otros por paridad).

> **Y eso es una ganancia enorme.** En este caso no hay ninguna aproximación: la solución es **exacta**, y un polinomio está definido en todo $\mathbb{R}$ —en particular en todo el intervalo $[-1,1]$ que interesa, extremos incluidos—. «Ahí ya no a lo físico o ingeniero, ahí posta a lo matemático.»

---

## 3. Los polinomios de Legendre

### 3.1 Cálculo de los primeros

Todos salen de aplicar la recurrencia con $K = n(n+1)$. Nótese que **la solución tiene siempre la misma paridad que $n$**.

| $n$ | $K$ | Recurrencia | Solución |
|---|---|---|---|
| 0 | 0 | $a_2 = 0$ | $P_0(u) = a_0$ (constante) |
| 1 | 2 | $a_3 = 0$ | $P_1(u) = a_1\,u$ |
| 2 | 6 | $a_2 = a_0\dfrac{0-6}{1\cdot2} = -3a_0$, $a_4=0$ | $P_2(u) = a_0\,(1 - 3u^2)$ |
| 3 | 12 | $a_3 = a_1\dfrac{1\cdot2-12}{2\cdot3} = -\tfrac{5}{3}a_1$, $a_5=0$ | $P_3(u) = a_1\left(u - \tfrac{5}{3}u^3\right)$ |

> La solución constante ($n=0$) es solución, aunque «no es tan obvio: hay que hacer una cuentita para darse cuenta».

En general, para cada entero $n$ hay una solución polinomial de **grado $n$** y de **la misma paridad que $n$**. Son infinitas: los **polinomios de Legendre**.

### 3.2 Normalización

Como la ecuación es lineal y homogénea, cualquier múltiplo de una solución es solución: todas las de arriba quedaron a menos de una constante multiplicativa ($a_0$ o $a_1$). Para fijarla, la literatura adopta la convención

$$\boxed{P_n(1) = 1}$$

Con ella, los primeros son

$$P_0(u) = 1
\qquad
P_1(u) = u
\qquad
P_2(u) = \tfrac{1}{2}\left(3u^2 - 1\right)
\qquad
P_3(u) = \tfrac{1}{2}\left(5u^3 - 3u\right)$$

> Se comprueba directo: en $P_2$, la forma $a_0(1-3u^2)$ evaluada en $u=1$ da $-2a_0$, así que hay que elegir $a_0 = -\tfrac12$.

> **Sobre el rol de todo esto.** «Alguien puede decir: esto no tiene nada de física, es sólo matemática.» Y en parte es cierto. Lo que hay que llevarse no son estas soluciones particulares sino **el método**: separación de variables, reducción a ecuaciones ordinarias, y resolución de ésas por desarrollo en serie de potencias.

---

## 4. Por qué las demás soluciones no sirven

Falta el caso $K \neq n(n+1)$, en el que la serie **no se corta nunca**.

### 4.1 Convergencia por el criterio del cociente

Se aplica el **criterio de D'Alembert** (del cociente). La serie no es a priori de términos positivos porque $u$ puede ser negativo, pero basta estudiar la de los valores absolutos; y de hecho, como las soluciones son puras pares o puras impares, sacando el primer término de factor sólo quedan potencias de $u^2$.

$$\left|\frac{a_{m+2}\,u^{m+2}}{a_m\,u^{m}}\right|
= \left|\frac{m(m+1)-K}{(m+1)(m+2)}\right|\,u^{2}
\;\xrightarrow[m\to\infty]{}\; u^{2}$$

Por lo tanto la serie **converge absolutamente si $|u| < 1$**, y en $u = \pm1$ el criterio **no decide**.

> Y $u=\pm1$ es justamente donde hace falta: $u=1$ corresponde a $\theta = 0$ y $u=-1$ a $\theta = \pi$, los dos polos, que forman parte del dominio del problema.

**Ejercicio dejado en clase** (explícitamente fuera del parcial, «háganlo porque es divertido»): probar que si $K \neq n(n+1)$ con $n$ entero, la serie **no converge** en $u = \pm 1$. La divergencia es **logarítmica**.

$$\boxed{\text{Sólo sirven las soluciones polinomiales}}$$

> Es un resultado importante y una divergencia afortunada: todas las soluciones no polinomiales están mal definidas justo en el borde, así que se pueden descartar. Lo que empezó como una restricción matemática ($K$ no puede ser cualquier cosa) resulta ser una **condición física**.

### 4.2 El caso $K=0$, resuelto exactamente

Para muestra vale un botón: se resuelve exactamente el caso más simple. Con $K=0$ y usando la forma compacta de la ecuación,

$$\frac{d}{du}\left[(1-u^2)\frac{dP}{du}\right] = 0
\qquad\Longrightarrow\qquad
(1-u^2)\,P'(u) = A
\qquad\Longrightarrow\qquad
P'(u) = \frac{A}{1-u^2}$$

Primitivando:

$$\boxed{P(u) = \frac{A}{2}\ln\!\left(\frac{1+u}{1-u}\right) + B}$$

**Verificación** de que la primitiva está bien:

$$\frac{d}{du}\left[\frac{A}{2}\ln\frac{1+u}{1-u}\right]
= \frac{A}{2}\left[\frac{1}{1+u} + \frac{1}{1-u}\right]
= \frac{A}{2}\cdot\frac{(1-u)+(1+u)}{1-u^2}
= \frac{A}{1-u^2}$$

Esta solución general es una **combinación lineal de dos soluciones**:

- la **constante** $B$, que es la polinomial ($P_0$);
- el término logarítmico, perfectamente definido en el intervalo abierto $(-1,1)$ pero que **explota en $u=\pm1$**.

> Ese ejemplo exhibe en un caso concreto lo que pasa en general: las soluciones no polinomiales existen y están bien definidas en el interior, pero en el borde revientan.

---

## 5. La ecuación radial y la base de soluciones

Con la angular resuelta, se vuelve a la radial, ya sabiendo que $K = n(n+1)$:

$$\frac{d}{dr}\big(r^2 Z'(r)\big) = n(n+1)\,Z(r)$$

Otra vez es lineal, de segundo orden, con coeficientes que dependen de la variable, pero **ésta no es difícil**.

> **Ejercicio con pista:** hacer el cambio de variable $v = \ln r$.

El resultado es una combinación de dos potencias:

$$\boxed{Z_n(r) = A_n\,r^{\,n} + B_n\,r^{-(n+1)}}$$

Juntando ambas piezas, la **base de soluciones** de la ecuación de Laplace en coordenadas esféricas con simetría azimutal es:

| $n$ | Soluciones (dos por cada $n$) |
|---|---|
| 0 | $1$ ; $\;\dfrac{1}{r}$ |
| 1 | $r\cos\theta$ ; $\;\dfrac{\cos\theta}{r^{2}}$ |
| 2 | $r^{2}P_2(\cos\theta)$ ; $\;\dfrac{P_2(\cos\theta)}{r^{3}}$ |
| $n$ | $r^{\,n}P_n(\cos\theta)$ ; $\;\dfrac{P_n(\cos\theta)}{r^{\,n+1}}$ |

$$\boxed{\phi(r,\theta) = \sum_{n=0}^{\infty}\left[A_n\,r^{\,n} + \frac{C_n}{r^{\,n+1}}\right]P_n(\cos\theta)}$$

> **Lo que hay que llevarse del método**, dicho por el propio docente: elegir las coordenadas que convengan al problema, proponer soluciones producto, y así **reducir una ecuación en derivadas parciales a ecuaciones ordinarias**. Que resolver esas ordinarias haya dado trabajo es otra cuestión; el problema original era más difícil.

---

## 6. Ejemplo: esfera conductora en un campo uniforme

### 6.1 Planteo y condiciones de borde

Una **esfera conductora descargada** de radio $a$, colocada en un campo eléctrico uniforme $\vec E_0 = E_0\hat z$. Se quiere el potencial para $r \ge a$.

> Dentro de la esfera el campo es nulo (conductor en equilibrio) y el potencial es constante: la solución interior es trivial y no interesa. Y en el exterior no hay carga volumétrica, así que **vale Laplace**.
>
> El problema tiene simetría azimutal —girar alrededor de $Oz$ no cambia nada—, así que $\phi = \phi(r,\theta)$ y se aplica la base recién construida.

**Condición 1 — en la superficie.** Un conductor en equilibrio es **equipotencial**: todos sus puntos tienen el mismo potencial. Entonces

$$\phi(a,\theta) = \phi_0 \qquad\text{para todo }\theta$$

**Condición 2 — en el infinito.** Lejos de la esfera su efecto desaparece y se recupera el campo uniforme. Como el campo uniforme corresponde a un potencial que varía **linealmente**, y $\vec E_0$ va según $\hat z$:

$$\phi \;\xrightarrow[r\to\infty]{}\; -E_0\,z = -E_0\,r\cos\theta$$

usando $z = r\cos\theta$.

> **Sobre el signo menos:** como $\vec E = -\nabla\phi$, un campo que apunta según $+\hat z$ significa potencial decreciente hacia $+z$. Físicamente: las cargas que crean el campo son positivas de un lado y negativas del otro, y el potencial va de más a menos.

### 6.2 Imponer la condición en el infinito

En la serie general, cuando $r\to\infty$:

- todos los términos $C_n/r^{n+1}$ **tienden a cero**: no aportan a la condición;
- de los términos $A_n r^n$, el que domina es el de mayor $n$.

Pero el comportamiento pedido es **lineal en $r$**. Luego ningún término puede crecer más rápido:

$$A_n = 0 \qquad\text{para todo } n \ge 2$$

Queda el término $n=1$, con $P_1(\cos\theta) = \cos\theta$:

$$A_1\,r\cos\theta \;\equiv\; -E_0\,r\cos\theta
\qquad\Longrightarrow\qquad
\boxed{A_1 = -E_0}$$

> **Coincide exactamente en la forma**, y eso no es casualidad: el potencial de un campo uniforme *es* el elemento $n=1$ de la base.

Queda $A_0$, que multiplica a $P_0 = 1$: es una **constante aditiva**. No la fija ninguna condición de borde porque el potencial está definido a menos de una constante. **Se elige** $A_0 = 0$ —una opción, no un dato—.

El potencial va quedando

$$\phi(r,\theta) = -E_0\,r\cos\theta + \sum_{n=0}^{\infty}\frac{C_n}{r^{\,n+1}}P_n(\cos\theta)$$

### 6.3 Imponer la condición en la superficie

Evaluando en $r=a$:

$$-E_0\,a\cos\theta + \sum_{n=0}^{\infty}\frac{C_n}{a^{\,n+1}}P_n(\cos\theta) = \phi_0
\qquad\text{para todo }\theta$$

**El argumento decisivo es de álgebra lineal:** los $P_n$ son polinomios **todos de grado distinto**, y por lo tanto son **linealmente independientes**. Así que se pueden identificar los coeficientes término a término, escribiendo cada lado como desarrollo en la base $\{P_n\}$ —no en la base de monomios—.

> Esta parte generó discusión en clase y vale precisarla. El punto no es que los $P_n$ sean monomios (no lo son: $P_2$ tiene término constante). El punto es que, teniendo grados distintos, forman una **base del espacio de polinomios**, distinta de $\{1,u,u^2,\dots\}$ pero igual de válida. Si una combinación lineal de ellos es idénticamente nula, se anula primero el coeficiente del de mayor grado, luego el siguiente, y así hacia abajo — todos los coeficientes son cero.

Identificando, con $\phi_0 = \phi_0\,P_0$ y $\cos\theta = P_1(\cos\theta)$:

| Orden | Ecuación | Resultado |
|---|---|---|
| $P_0$ | $\dfrac{C_0}{a} = \phi_0$ | $C_0 = \phi_0\,a$ |
| $P_1$ | $-E_0\,a + \dfrac{C_1}{a^{2}} = 0$ | $C_1 = E_0\,a^{3}$ |
| $P_n$, $n\ge2$ | $\dfrac{C_n}{a^{\,n+1}} = 0$ | $C_n = 0$ |

> De una base infinita sobrevivieron **dos términos**. El docente lo llama, con razón, una «solución de juguete».

### 6.4 El dato que faltaba: la esfera está descargada

Con las dos condiciones impuestas, **$\phi_0$ sigue sin determinarse**. Falta usar un dato del enunciado que todavía no se usó: la esfera está **descargada**.

El argumento es a través del **desarrollo multipolar** de las clases 4 y 5. Lejos de la esfera hay dos contribuciones al campo: la del campo externo $\vec E_0$, ya incorporada, y la de las cargas inducidas sobre la esfera. Esas cargas forman una **distribución localizada**, así que su potencial admite desarrollo multipolar, cuyo primer término va como $Q/4\pi\varepsilon_0 r$.

Pero la esfera está **polarizada, no cargada**: hay carga negativa de un lado y positiva del otro, con **carga total nula**. Entonces el término en $1/r$ tiene que anularse, y ese término es exactamente $C_0/r$:

$$C_0 = \phi_0\,a = 0 \qquad\Longrightarrow\qquad \phi_0 = 0$$

$$\boxed{\phi(r,\theta) = -E_0\left(r - \frac{a^{3}}{r^{2}}\right)\cos\theta
\qquad (r \ge a)}$$

> **Verificación inmediata:** en $r=a$ el paréntesis se anula y $\phi = 0$ para todo $\theta$, que es exactamente la condición de equipotencial. Y para $r\to\infty$ el segundo término desaparece y queda $-E_0 r\cos\theta$, el campo uniforme.
>
> **Si la esfera estuviera cargada** con carga $Q$, el razonamiento sería el mismo pero el coeficiente del término $1/r$ no sería nulo: valdría $Q/4\pi\varepsilon_0$.

> **Por qué esto importa.** Es el **primer problema del curso que no se podía resolver con las herramientas de Física III**: la posición de las cargas era parte de la incógnita y aun así el método la determinó. Es, en palabras del docente, «algo cualitativamente más poderoso» — aunque el caso concreto haya salido fácil.

*Continúa en la Clase 8, calculando el campo eléctrico y la carga de polarización inducida sobre la esfera, y pasando después a la misma técnica en coordenadas cilíndricas.*
