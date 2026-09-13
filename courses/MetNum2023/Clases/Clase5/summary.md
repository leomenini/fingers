# Resumen Clase 5 — Sistemas Lineales: Introducción

## Índice

1. [El problema y el enfoque del curso](#1-el-problema-y-el-enfoque-del-curso)
2. [Métodos directos vs. métodos iterativos](#2-métodos-directos-vs-métodos-iterativos)
3. [La regla de Cramer y por qué se descarta](#3-la-regla-de-cramer-y-por-qué-se-descarta)
   - 3.1 [Flops: la unidad de costo](#31-flops-la-unidad-de-costo)
   - 3.2 [Costo de Cramer](#32-costo-de-cramer)
4. [Sistemas triangulares](#4-sistemas-triangulares)
   - 4.1 [Definición y determinante](#41-definición-y-determinante)
   - 4.2 [Sustitución hacia adelante y hacia atrás](#42-sustitución-hacia-adelante-y-hacia-atrás)
   - 4.3 [Costo de la sustitución: $O(n^2)$](#43-costo-de-la-sustitución-on2)
5. [Eliminación gaussiana sin pivoteo](#5-eliminación-gaussiana-sin-pivoteo)
   - 5.1 [La idea: multiplicadores y combinaciones lineales](#51-la-idea-multiplicadores-y-combinaciones-lineales)
   - 5.2 [Pseudocódigo](#52-pseudocódigo)
   - 5.3 [Costo: $O(n^3)$](#53-costo-on3)
6. [Pivoteo: qué es y por qué hace falta](#6-pivoteo-qué-es-y-por-qué-hace-falta)
7. [Ejemplo numérico: cuando un pivote chico rompe todo](#7-ejemplo-numérico-cuando-un-pivote-chico-rompe-todo)

---

## 1. El problema y el enfoque del curso

Cierra la unidad de errores, punto flotante y redondeo, y arranca la unidad de
**sistemas de ecuaciones lineales**, el primer problema concreto del curso.
El objetivo declarado no es repetir el álgebra lineal ya conocido, sino darle
un **enfoque algorítmico**: entender cómo resolver un sistema grande y cuánto
cuesta hacerlo con las técnicas ya conocidas.

El problema formal:

$$Ax = b, \qquad A \in \mathbb{R}^{n\times n}, \quad b \in \mathbb{R}^n$$

$A$ y $b$ son los datos; $x \in \mathbb{R}^n$ es la incógnita. La notación
del curso **no usa flechas** para vectores (para evitar inconsistencias); si
hay ambigüedad entre escalar y vector, se aclara en el contexto.

> El sistema tiene **solución única** si y solamente si $\det(A) \neq 0$. El
> curso asume desde acá que se trabaja siempre en esa situación (sistema
> compatible determinado). Los sistemas rectangulares (matrices no
> cuadradas) se posponen para después de los parciales.

## 2. Métodos directos vs. métodos iterativos

La clase organiza todo el tema alrededor de una dicotomía:

- **Método directo**: después de una cantidad **finita** de pasos, produce
  la solución **exacta** del problema. Ejemplos: eliminación gaussiana,
  regla de Cramer.
- **Método iterativo**: genera una **sucesión** de vectores $x^{(k)} \in
  \mathbb{R}^n$ tal que

$$x^{(k)} \xrightarrow[k \to \infty]{} x^\star$$

  donde $x^\star$ es la solución exacta. En la práctica se fija una
  tolerancia y se detiene el cómputo cuando la aproximación se considera
  suficientemente buena.

> La motivación de los métodos iterativos es práctica: para un sistema
> $3\times 3$ cualquier método funciona bien, pero un ingeniero se enfrenta
> a sistemas de tamaño mucho mayor (la clase menciona "un millón por un
> millón"), donde un método directo puede ser demasiado costoso y conviene
> algo más rápido que dé una solución aceptable a menos de una tolerancia.

Esta clase y la siguiente semana se dedican enteramente a un método
**directo**: la eliminación gaussiana. Los métodos iterativos se retoman más
adelante en el curso.

## 3. La regla de Cramer y por qué se descarta

Antes de entrar en eliminación gaussiana, la clase recuerda la **regla de
Cramer** como ejemplo de método directo alternativo, y la usa para introducir
la noción de costo computacional.

**Regla de Cramer**: para $Ax = b$,

$$x_i = \frac{\det(A_i)}{\det(A)}$$

donde $A_i$ es la matriz que se obtiene sustituyendo la columna $i$-ésima de
$A$ por el vector $b$.

**Ejemplo trabajado en clase** ($2\times 2$):

$$\begin{pmatrix} 3 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \end{pmatrix}$$

$$\det(A) = -4, \qquad \det(A_1) = -4, \qquad \det(A_2) = -8$$

$$x_1 = \frac{-4}{-4} = 1, \qquad x_2 = \frac{-8}{-4} = 2$$

### 3.1 Flops: la unidad de costo

Se define **flop** como una operación aritmética de punto flotante (suma,
resta, multiplicación o división). El curso mide costo computacional
**contando el orden de magnitud** de flops en función de $n$ (el tamaño del
sistema), no el tiempo de reloj real (que depende de factores externos como
otros procesos corriendo en la máquina).

### 3.2 Costo de Cramer

Resolver un sistema $n\times n$ por Cramer requiere calcular $n+1$
determinantes (el de $A$ y el de cada $A_i$). Calculando cada determinante
por **desarrollo por filas/columnas** (la forma más ingenua), cada uno cuesta
del orden de $n!$ flops, porque el desarrollo anida el cálculo de
determinantes más chicos dentro de determinantes más grandes.

$$\text{Costo}_{\text{Cramer}} \sim (n+1)\cdot n! = (n+1)!$$

> **Kramer es un suicidio computacional** para $n$ grande: implementar Cramer
> ingenuamente sobre una matriz de $20\times 20$ "funde la computadora". Aun
> con formas más eficientes de calcular determinantes, Cramer sigue siendo
> más caro que la eliminación gaussiana — y la propia eliminación gaussiana
> ya es cara ($O(n^3)$, ver §5.3). Por eso Cramer no se usa en la práctica y
> el curso pasa directamente a escalerización gaussiana.

## 4. Sistemas triangulares

### 4.1 Definición y determinante

$A$ es **triangular superior** si $a_{ij} = 0$ para todo $i > j$ (ceros
debajo de la diagonal). $A$ es **triangular inferior** si $a_{ij} = 0$ para
todo $j > i$ (ceros arriba de la diagonal).

> **Propiedad clave**: si $A$ es triangular (superior o inferior),
> $$\det(A) = \prod_{i=1}^n a_{ii}$$
> En particular, $\det(A) \neq 0 \iff a_{ii} \neq 0 \text{ para todo } i$ —
> esto es lo que garantiza que la sustitución hacia adelante/atrás (§4.2)
> nunca divide por cero, bajo la hipótesis de solución única.

### 4.2 Sustitución hacia adelante y hacia atrás

Los sistemas triangulares son fáciles de resolver porque se puede despejar
una incógnita a la vez, **secuencialmente**, en vez de resolver todas
simultáneamente.

**Sustitución hacia adelante** ($A$ triangular inferior): se despeja desde
$x_1$ hacia $x_n$.

$$x_1 = \frac{b_1}{a_{11}}, \qquad x_i = \frac{b_i - \displaystyle\sum_{j=1}^{i-1} a_{ij}x_j}{a_{ii}} \quad (i = 2,\dots,n)$$

**Sustitución hacia atrás** ($A$ triangular superior): el mismo procedimiento
pero empezando por $x_n$ (la última ecuación sólo involucra a $x_n$) y
avanzando hacia $x_1$.

### 4.3 Costo de la sustitución: $O(n^2)$

Contando flops paso a paso: calcular $x_1$ cuesta 1 flop (una división).
Calcular $x_i$ para $i>1$ cuesta $(i-1)$ productos, $(i-1)$ sumas/restas y 1
división: en total $2i - 1$ flops en el paso $i$-ésimo. Sumando sobre todos
los pasos:

$$\sum_{i=1}^{n} (2i-1) = 2\cdot\frac{n(n+1)}{2} - n \sim n^2$$

> **Truco para estimar sumas $\sum i^\alpha$** (usado en clase para no tener
> que memorizar fórmulas): pensar $\sum_{i=1}^n i^\alpha$ como una suma de
> Riemann que acota (por arriba y por abajo) a $\int_0^n x^\alpha\,dx =
> \frac{n^{\alpha+1}}{\alpha+1}$. Concluye que la suma es del orden de
> $n^{\alpha+1}$. Es una herramienta general, no específica de esta cuenta.

**Conclusión**: sustitución hacia adelante o hacia atrás cuesta $O(n^2)$.
Duplicar $n$ multiplica el costo por 4.

## 5. Eliminación gaussiana sin pivoteo

La pregunta que motiva esta sección: ¿cuánto cuesta **llevar** un sistema
cualquiera a forma triangular (para después aplicar §4.2)?

### 5.1 La idea: multiplicadores y combinaciones lineales

Se trabaja sobre la **matriz ampliada** $[A \mid b]$. El objetivo es hacer
ceros, columna por columna, **debajo de la diagonal**, mediante combinaciones
lineales de filas que no cambian el conjunto solución (ni el determinante,
porque cada fila se reemplaza por sí misma más un múltiplo de otra fila).

En el paso $k$-ésimo, asumiendo $a_{kk}^{(k)} \neq 0$ (el **pivote**), se
definen los **multiplicadores**:

$$l_{ik} = \frac{a_{ik}^{(k)}}{a_{kk}^{(k)}}, \qquad i = k+1,\dots,n$$

y se actualizan las filas $i = k+1,\dots,n$:

$$a_{ij}^{(k+1)} = a_{ij}^{(k)} - l_{ik}\,a_{kj}^{(k)}, \qquad b_i^{(k+1)} = b_i^{(k)} - l_{ik}\,b_k^{(k)}$$

para $j = k+1,\dots,n$. Por construcción, $a_{ik}^{(k+1)} = 0$ para todo
$i>k$: los multiplicadores están definidos exactamente para cancelar esa
entrada.

> El nombre "pivote" viene de deporte (básquetbol/handball): es el punto
> fijo que se usa para "rebotar" y generar los ceros de la columna.

### 5.2 Pseudocódigo

Reconstrucción del algoritmo tal como se construyó en el pizarrón (notación
tipo Octave, tres loops anidados):

```
para k = 1, 2, ..., n-1:
    para i = k+1, ..., n:
        l[i][k] = a[i][k] / a[k][k]
        para j = k+1, ..., n:
            a[i][j] = a[i][j] - l[i][k] * a[k][j]
        b[i] = b[i] - l[i][k] * b[k]
```

### 5.3 Costo: $O(n^3)$

Fijado $k$: para cada $i$ (hay $n-k$ valores de $i$), calcular $l_{ik}$
cuesta 1 flop, y el loop interno en $j$ cuesta $2(n-k)$ flops (un producto y
una resta, repetidos $n-k$ veces), más 2 flops para actualizar $b_i$. Total
por cada $i$: $3 + 2(n-k)$ flops, repetido $n-k$ veces en $i$:

$$\text{Costo}(k) \sim 3(n-k) + 2(n-k)^2$$

Sumando sobre $k = 1,\dots,n-1$:

$$\sum_{k=1}^{n-1} \left[3(n-k) + 2(n-k)^2\right] \sim \frac{2}{3}n^3$$

**Eliminación gaussiana sin pivoteo cuesta $O(n^3)$** — específicamente
$\frac{2}{3}n^3$ flops. Duplicar $n$ multiplica el costo por 8.

$$\boxed{\text{Costo total (gaussiana + sustitución)} = \frac{2}{3}n^3 + O(n^2) \sim O(n^3)}$$

El término $n^3$ domina: la eliminación gaussiana es mucho más cara que la
sustitución hacia atrás que le sigue.

## 6. Pivoteo: qué es y por qué hace falta

**Pivotear = intercambiar filas.** En álgebra lineal I, la regla enseñada
era: pivotear **sólo si** el pivote candidato $a_{kk}^{(k)}$ es exactamente
$0$ (en ese caso hay que buscar, entre las filas $j>k$, una con
$a_{jk}^{(k)} \neq 0$ e intercambiarla).

> **Diferencia clave en métodos numéricos**: no alcanza con pivotear sólo
> cuando el pivote es exactamente cero. Un pivote **cercano a cero** —aunque
> matemáticamente válido, "en los papeles está todo bien"— puede ser
> igual de peligroso en una computadora con precisión finita, porque genera
> multiplicadores $l_{ik}$ muy grandes que amplifican el error de redondeo.
> Esto se ilustra con el ejemplo numérico de §7.

## 7. Ejemplo numérico: cuando un pivote chico rompe todo

Se trabaja con una computadora hipotética de **5 cifras significativas** (con
truncamiento) sobre el sistema

$$\begin{pmatrix} 10 & -7 & 0 \\ \cdot & \cdot & \cdot \\ \cdot & \cdot & \cdot \end{pmatrix}$$

cuya matriz ampliada inicial es $[7, 3, 9 \mid \dots]$ / $[0, 1, 6 \mid
\dots]$ (la transcripción no deja completamente claro el sistema $3\times 3$
completo a partir del habla sola — se reconstruye lo esencial del argumento,
no cada entrada). La **solución exacta** del sistema es $x = (0, -1, 1)$.

Tras el primer paso de eliminación (pivote $10$), queda un sistema
intermedio con un pivote candidato $a_{22}^{(2)} = -0{,}01$ — **muy cercano a
cero**, aunque no exactamente cero. Siguiendo la regla clásica (pivotear
sólo si es exactamente $0$), se lo usa igual como pivote.

Esto produce un multiplicador enorme:

$$l_{32} = \frac{-2{,}5}{-0{,}01} = -2500$$

Al propagar este multiplicador, aparece una resta de números de magnitud muy
distinta ($15\,002 $ vs. $15\,004{,}5$) que la máquina de 5 cifras trunca en
cada paso intermedio, perdiendo precisión. El resultado final, tras
sustitución hacia atrás, es

$$x_3 \approx 0{,}99993, \qquad x_2 \approx -1{,}4, \qquad x_1 \approx -0{,}28$$

muy lejos de la solución exacta $(0,-1,1)$ — en particular $x_1$ y $x_2$
quedan completamente arruinados.

> **El mensaje central**: el error no vino de la computadora "fallando", sino
> de una mala elección de pivote que la regla clásica de álgebra lineal no
> detecta (porque el pivote no era exactamente cero). Un pivote pequeño
> genera multiplicadores grandes, que amplifican el error de redondeo hasta
> volver inútil el resultado. La clase deja planteado, para la clase
> siguiente, que pivotear en este mismo paso (elegir la fila con el mayor
> valor absoluto disponible en la columna, en vez de conformarse con "no
> cero") evita el problema.

*Clase siguiente: se retoma este mismo ejemplo para mostrar la estrategia de
pivoteo (parcial) que sí evita la pérdida de precisión — tema de la
descomposición LU.*
