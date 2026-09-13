# Resumen Clase 7 — Normas de Matrices

## Índice

1. [Cierre de matrices dispersas y tridiagonales](#1-cierre-de-matrices-dispersas-y-tridiagonales)
2. [Normas vectoriales: repaso de axiomas](#2-normas-vectoriales-repaso-de-axiomas)
   - 2.1 [La familia de normas $L^p$ en $\mathbb{R}^n$](#21-la-familia-de-normas-lp-en-mathbbrn)
3. [Normas de matrices](#3-normas-de-matrices)
   - 3.1 [Norma de Frobenius](#31-norma-de-frobenius)
   - 3.2 [Normas operador (inducidas)](#32-normas-operador-inducidas)
4. [La norma inducida por $L^\infty$: máximo de las normas $L^1$ de las filas](#4-la-norma-inducida-por-linfty-máximo-de-las-normas-l1-de-las-filas)
   - 4.1 [Demostración](#41-demostración)
5. [Otras normas operador (enunciadas, no probadas en clase)](#5-otras-normas-operador-enunciadas-no-probadas-en-clase)
6. [Compatibilidad y submultiplicatividad](#6-compatibilidad-y-submultiplicatividad)
7. [Error vs. residuo: la motivación de fondo](#7-error-vs-residuo-la-motivación-de-fondo)

---

## 1. Cierre de matrices dispersas y tridiagonales

Arranque breve retomando el final de la clase anterior. Se define informalmente
la **densidad** de una matriz $A \in \mathbb{R}^{n\times n}$ como el cociente
entre su cantidad de entradas no nulas y $n^2$ (y **dispersidad** como
$1$ menos eso); una matriz es **dispersa** cuando su dispersidad es cercana a
$1$. Para esas matrices tiene sentido almacenar sólo las ternas $(i,j,a_{ij})$
de las entradas no nulas en vez de los $n^2$ números.

> **Matrices de banda / tridiagonales**: $A$ es tridiagonal si $a_{ij}=0$ para
> todo $|i-j|>1$. Si se le avisa al código que la matriz es tridiagonal, la
> eliminación gaussiana (con pivoteo parcial) se hace en **tiempo lineal**
> en vez de $O(n^3)$: en cada paso el pivoteo sólo compara con una fila
> (la de abajo), y los multiplicadores y actualizaciones son de costo
> constante por fila. La sustitución hacia adelante/atrás sobre las matrices
> triangulares resultantes también queda lineal (ejercicio de práctico, no
> desarrollado en clase). **Si no se avisa la estructura, el algoritmo cae en
> $O(n^3)$ igual**, aunque la matriz sea tridiagonal.

## 2. Normas vectoriales: repaso de axiomas

Una **norma** en un espacio vectorial $V$ (sobre $\mathbb{R}$) es una función
$\|\cdot\|: V \to \mathbb{R}$ que cumple:

1. $\|v\| \geq 0$, y $\|v\| = 0 \iff v = 0$.
2. $\|\alpha v\| = |\alpha|\,\|v\|$ para todo escalar $\alpha$.
3. **Desigualdad triangular**: $\|u+v\| \leq \|u\| + \|v\|$.

Sirve para hablar del "tamaño" o magnitud de un vector.

### 2.1 La familia de normas $L^p$ en $\mathbb{R}^n$

Para $p \geq 1$:

$$\|x\|_p = \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}$$

Casos particulares:

- **$p=2$**: norma **euclídea**, la que viene del producto interno, "la que
  cumple Pitágoras".
- **$p=1$**: norma del **taxi** o de **Manhattan**: $\|x\|_1 = \sum_i |x_i|$.
- **$p=\infty$** (límite formal cuando $p\to\infty$): norma **infinito** o
  **del máximo** o de **Chebyshev**: $\|x\|_\infty = \max_i |x_i|$.

> **Bolas unitarias**: en $\mathbb{R}^2$, la bola $\|x\|_1=1$ es un rombo
> (rotado 45°), $\|x\|_2=1$ es la circunferencia usual, y a medida que $p$
> crece las bolas se "inflan" hasta converger al cuadrado $\|x\|_\infty=1$.

## 3. Normas de matrices

Las matrices cuadradas $\mathbb{R}^{n\times n}$ también forman un espacio
vectorial (se suman y se multiplican por escalares), así que en principio se
les puede poner una norma.

### 3.1 Norma de Frobenius

Una opción es "desatar" la matriz en un vector de $n^2$ entradas y aplicarle
una norma $L^p$ vectorial. Para $p=2$ esto se llama **norma de Frobenius** y
tiene nombre propio y uso (se retoma más adelante en el curso); para otros
$p$ no tiene mucho sentido ni uso conocido.

> **Limitación señalada en clase**: las normas tipo Frobenius, para lo que
> se busca en esta unidad (relacionar residuo y error, condicionamiento), no
> son las útiles. El camino que sí importa es el de las normas operador.

### 3.2 Normas operador (inducidas)

Identificando cada matriz $A$ con la transformación lineal $x \mapsto Ax$ de
$\mathbb{R}^n$ en $\mathbb{R}^n$, y dada una norma vectorial $\|\cdot\|_B$ en
$\mathbb{R}^n$, se define la **norma matricial inducida** (u **operador**)
por:

$$\|A\|_M = \max_{x \neq 0} \frac{\|Ax\|_B}{\|x\|_B} = \max_{\|x\|_B \leq 1} \|Ax\|_B = \max_{\|x\|_B = 1} \|Ax\|_B$$

(las tres expresiones son equivalentes — la clase lo señala como ejercicio,
no lo demuestra). Que esto efectivamente cumple los axiomas de norma también
se deja como ejercicio.

> **No se parece a las normas $L^p$ "ingenuas"**: no es combinar las entradas
> de $A$ directamente, sino el máximo estiramiento que $A$ le produce a un
> vector unitario.

## 4. La norma inducida por $L^\infty$: máximo de las normas $L^1$ de las filas

**Proposición** (la única probada en detalle en esta clase):

$$\boxed{\|A\|_\infty = \max_{1\leq i\leq n} \sum_{j=1}^n |a_{ij}|}$$

es decir: se recorren todas las filas de $A$, se calcula la norma $L^1$ de
cada una (suma de valores absolutos de sus entradas), y se toma la más
grande.

### 4.1 Demostración

Se prueban las dos desigualdades por separado.

**($\leq$, la fácil)**: Sea $x$ con $\|x\|_\infty = 1$ (o sea $|x_j|\leq 1$
para todo $j$). Entonces

$$\|Ax\|_\infty = \max_i \left|\sum_{j=1}^n a_{ij}x_j\right| \leq \max_i \sum_{j=1}^n |a_{ij}||x_j| \leq \max_i \sum_{j=1}^n |a_{ij}|$$

usando la desigualdad triangular (extendida por inducción a $n$ sumandos) y
$|x_j|\leq 1$. Tomando máximo sobre todos esos $x$ se obtiene
$\|A\|_\infty \leq \max_i \sum_j |a_{ij}|$.

**($\geq$, la que exige construir un vector)**: Sea $i_0$ la fila que alcanza
el máximo $\max_i \sum_j |a_{ij}|$. Si $A=0$ no hay nada que probar. Si
$A\neq 0$, se construye

$$\hat{x}_j = \operatorname{sg}(a_{i_0 j}), \qquad j = 1,\dots,n$$

(la función signo; se puede fijar $\operatorname{sg}(0)=0$). Como $\hat{x}$
tiene todas las coordenadas en $\{-1,0,1\}$, $\|\hat{x}\|_\infty = 1$.
Entonces:

$$\|A\hat{x}\|_\infty = \max_i \left|\sum_j a_{ij}\hat{x}_j\right| \geq \left|\sum_j a_{i_0 j}\hat{x}_j\right| = \sum_j |a_{i_0 j}| = \max_i \sum_j |a_{ij}|$$

donde la penúltima igualdad usa que $a_{i_0 j}\cdot\operatorname{sg}(a_{i_0
j}) = |a_{i_0 j}|$ (un número por su propio signo es su valor absoluto).
Como $\|A\|_\infty$ es el máximo sobre **todos** los $x$ unitarios, en
particular es $\geq$ lo obtenido con este $\hat{x}$ en particular.

> **Técnica general para probar igualdades con máximos**: una desigualdad
> suele salir directo de la definición (acotar para todos los $x$); la otra
> exige **exhibir un vector particular que alcanza la cota** — ahí, si un
> caso particular ya alcanza el valor, el máximo no puede ser menor.

## 5. Otras normas operador (enunciadas, no probadas en clase)

- **Inducida por $L^1$**: $\|A\|_1 = \max_j \sum_i |a_{ij}|$ (máximo de las
  normas $L^1$ de las **columnas** de $A$) — corolario de la fórmula anterior
  vía $\|A\|_\infty = \|A^T\|_1$ (transponer cambia filas por columnas).
  Demostración análoga, dejada como ejercicio.
- **Inducida por $L^2$**: $\|A\|_2$ es el **primer valor singular** de $A$
  (el mayor). Se define: $A^TA$ es simétrica y semidefinida positiva, así que
  por el teorema espectral es diagonalizable con valores propios
  $\lambda_1,\dots,\lambda_n \geq 0$; los **valores singulares** de $A$ son
  $\sqrt{\lambda_i}$. La prueba de que $\|A\|_2$ es el mayor de éstos está en
  los apuntes del curso, no se desarrolla en clase (se retoma más adelante
  con la descomposición en valores singulares, útil en compresión de datos
  e imágenes).

## 6. Compatibilidad y submultiplicatividad

Sea $\|\cdot\|_M$ una norma matricial inducida por una norma vectorial
$\|\cdot\|_B$. Se cumplen dos propiedades, ambas demostradas en clase a
partir de la definición:

**Compatibilidad**: para toda $A$ y todo $x\in\mathbb{R}^n$,

$$\|Ax\|_B \leq \|A\|_M \|x\|_B$$

*Demostración*: si $x=0$ es trivial. Si $x\neq 0$,
$\dfrac{\|Ax\|_B}{\|x\|_B} \leq \max_{y\neq 0} \dfrac{\|Ay\|_B}{\|y\|_B} =
\|A\|_M$ por definición de máximo; multiplicando por $\|x\|_B$ se obtiene el
resultado.

**Submultiplicatividad**: para toda $A,B$ matrices,

$$\|AB\|_M \leq \|A\|_M \|B\|_M$$

*Demostración*: usando la definición y la compatibilidad dos veces (viendo
$Bx$ como un vector al que se le aplica $A$):

$$\|AB\|_M = \max_{x\neq0} \frac{\|A(Bx)\|_B}{\|x\|_B} \leq \max_{x\neq0} \frac{\|A\|_M\|Bx\|_B}{\|x\|_B} \leq \max_{x\neq0} \frac{\|A\|_M\|B\|_M\|x\|_B}{\|x\|_B} = \|A\|_M\|B\|_M$$

> **Corolario** (usado más adelante en el curso): para toda norma operador,
> $$\|A^k\| \leq \|A\|^k$$
> por inducción, aplicando submultiplicatividad con $B=A$ repetidamente.

> **Advertencia explícita del docente**: estas dos propiedades valen para
> **cualquier norma operador** (inducida por una norma vectorial) — no
> necesariamente para cualquier norma matricial. En particular, no está
> establecido que la norma de Frobenius (§3.1) las cumpla.

## 7. Error vs. residuo: la motivación de fondo

Cierre de la clase, que motiva el tema de la clase siguiente (número de
condición). Al resolver $Ax=b$ con eliminación gaussiana con pivoteo parcial
en una computadora de precisión finita, se obtiene una solución
**computacional** $\bar{x}$, distinta en general de la solución **exacta**
$x^\star$.

- **Error**: $e = \bar{x} - x^\star$ (o $x^\star - \bar{x}$, según
  convención). Mide qué tan lejos está la solución obtenida de la verdadera.
  > **El error no es computable**: para calcularlo hace falta conocer
  > $x^\star$, que es justamente lo que no se tiene en un problema real.
- **Residuo**: $r = A\bar{x} - b$. Mide qué tan lejos está $\bar{x}$ de
  satisfacer las ecuaciones del sistema.
  > **El residuo sí es computable**: sólo requiere $A$, $b$ y la salida
  > $\bar{x}$ del algoritmo — todas cantidades disponibles al final del
  > cómputo.

**Relación entre ambos**: como $b = Ax^\star$,

$$r = A\bar{x} - Ax^\star = A(\bar{x}-x^\star) = A\,e$$

$$\boxed{\text{el residuo es la matriz } A \text{ aplicada al error}}$$

Si $A$ es invertible, $r=0 \iff e=0$ (porque $e = A^{-1}r$): en aritmética
exacta, residuo nulo garantiza error nulo. Pero en la práctica el residuo
casi nunca da exactamente cero.

> **La pregunta que abre la clase siguiente**: si el residuo tiene norma
> chica, ¿se puede concluir que el error también es chico? **No hay por qué
> — no es obvio en absoluto**, y es la pregunta que va a determinar si un
> método (o una solución computada) es "bueno". Con las herramientas de
> normas operador, compatibilidad y submultiplicatividad recién probadas,
> la Clase 8 (Número de Condición) da la respuesta.

*Clase siguiente: Número de Condición — cuantifica exactamente la relación
entre residuo chico y error chico.*
