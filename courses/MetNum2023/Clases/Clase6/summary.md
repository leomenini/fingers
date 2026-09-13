# Resumen Clase 6 — Descomposición LU

## Índice

1. [Motivación: por qué falla la eliminación gaussiana sin pivoteo](#1-motivación-por-qué-falla-la-eliminación-gaussiana-sin-pivoteo)
2. [Pivoteo parcial](#2-pivoteo-parcial)
   - 2.1 [Estrategia](#21-estrategia)
   - 2.2 [Costo adicional](#22-costo-adicional)
3. [Codificar la eliminación como producto de matrices](#3-codificar-la-eliminación-como-producto-de-matrices)
   - 3.1 [Matrices de permutación](#31-matrices-de-permutación)
   - 3.2 [Matrices de multiplicadores](#32-matrices-de-multiplicadores)
   - 3.3 [La relación de conmutación $PM = \tilde{M}P$](#33-la-relación-de-conmutación-pm--tildem-p)
4. [El teorema de descomposición LU](#4-el-teorema-de-descomposición-lu)
   - 4.1 [Demostración (constructiva)](#41-demostración-constructiva)
   - 4.2 [Comentarios sobre el enunciado](#42-comentarios-sobre-el-enunciado)
   - 4.3 [No unicidad](#43-no-unicidad)
5. [Resolver sistemas usando la LU](#5-resolver-sistemas-usando-la-lu)
6. [Cuándo conviene calcular la LU](#6-cuándo-conviene-calcular-la-lu)
7. [Nota al margen: la factorización de Cholesky](#7-nota-al-margen-la-factorización-de-cholesky)
8. [Implementación: cómo funciona `\` en MATLAB/Octave](#8-implementación-cómo-funciona--en-matlaboctave)
9. [Matrices dispersas (introducción)](#9-matrices-dispersas-introducción)

---

## 1. Motivación: por qué falla la eliminación gaussiana sin pivoteo

La clase arranca retomando un ejemplo de la clase anterior: un sistema $Ax=b$ que
**no tiene ninguna dificultad especial**, resuelto con eliminación gaussiana
**sin pivoteo** en una máquina hipotética de 5 cifras significativas. El
resultado numérico queda muy lejos de la solución real.

El diagnóstico, paso a paso:

- En el segundo paso de la eliminación aparece un multiplicador
  $L_{32} \approx 2500$ — **mucho más grande** que el orden de magnitud de los
  coeficientes del sistema (que son del orden de $1$).
- Al calcular $b_3 \leftarrow b_3 + L_{32}\cdot(\text{fila }2)$, ese
  multiplicador gigante amplifica cualquier error relativo pequeño (de
  redondeo, inevitable en 5 cifras) hasta convertirlo en un error **absoluto
  grande** frente a la magnitud real de los coeficientes.
- El error se arrastra a la sustitución hacia atrás: al despejar $x_2$ (que
  queda multiplicado por un coeficiente chico), un error absoluto que ya era
  grande se magnifica todavía más.

> **Idea clave:** no es que "dividir" o el pivote en sí sean malos — la
> división por un pivote no introduce error relativo grande. El problema es
> puramente de **magnitud de los multiplicadores**: si $L_{jk}$ es grande,
> cualquier error de redondeo en los datos se amplifica al multiplicarlo.

$$\boxed{\text{Multiplicadores grandes} \implies \text{amplificación de error de redondeo}}$$

---

## 2. Pivoteo parcial

### 2.1 Estrategia

En el paso $k$-ésimo de la eliminación, en vez de usar $A_{kk}$ como pivote
sin más, se mira **toda la columna $k$ de la parte no reducida** de la matriz
(las filas $k, k+1, \dots, n$) y se elige como pivote el elemento de **mayor
valor absoluto**:

$$p = \operatorname*{argmax}_{j \geq k} |A_{jk}|$$

(si hay empate, cualquiera de los índices que alcanza el máximo sirve — no
hace falta que sea único). Luego se intercambia la fila $k$ con la fila $p$.

Esto garantiza que todos los multiplicadores queden acotados:

$$\boxed{|L_{jk}| \leq 1 \quad \text{para todo } j > k}$$

lo que evita exactamente el problema de §1: ya no hay forma de que un
multiplicador amplifique de más un error relativo pequeño.

> El curso solo trabaja con pivoteo **de filas** (pivoteo parcial). Existe
> también pivoteo de columnas (o pivoteo total, combinando ambos), pero no se
> desarrolla: "para los efectos de lo que hacemos en el curso, nos va a
> alcanzar y sobrar".

### 2.2 Costo adicional

Elegir el pivote en el paso $k$ cuesta buscar el máximo entre $n-k$ elementos,
es decir, del orden de $n-k-1$ comparaciones (pensando cada comparación como
una operación). Sumando sobre todos los pasos:

$$\sum_{k=1}^{n-1} (n-k-1) = O(n^2)$$

frente al costo de la eliminación gaussiana en sí, que es
$O(n^3)$ (más precisamente $\tfrac{2}{3}n^3$). El pivoteo parcial agrega un
término de orden inferior:

> **El costo de eliminación gaussiana con pivoteo parcial es comparable al de
> la eliminación sin pivoteo — no se paga mucho más por la seguridad
> adicional.**

El intercambio de filas en sí también es barato: es lineal en el largo de la
fila ($n$) para cada uno de los $n-1$ pasos, es decir $O(n^2)$ en total —
tampoco cambia el orden dominante.

---

## 3. Codificar la eliminación como producto de matrices

La segunda mitad de la clase reinterpreta la eliminación gaussiana con
pivoteo parcial —vista antes como una receta de pasos— como una sucesión de
**multiplicaciones de $A$ por matrices especiales**. Esto es lo que permite
después probar el teorema de la descomposición LU.

### 3.1 Matrices de permutación

Una **matriz de permutación** $P$ se obtiene intercambiando filas (o
columnas) de la identidad. Multiplicar por una matriz de permutación permuta
las filas o columnas de la matriz que multiplica:

- $P \cdot A$ permuta **filas** de $A$.
- $A \cdot P$ permuta **columnas** de $A$.

El producto de matrices de permutación es una matriz de permutación (se
menciona como observación auxiliar, útil más adelante).

> **Detalle de implementación (no crucial para la teoría, pero mencionado en
> clase):** una matriz de permutación $n\times n$ tiene $n^2$ entradas pero
> solo $n$ son "información" (dónde están los unos). En la práctica (Octave)
> conviene guardar un **vector de permutación** en vez de la matriz completa
> — por ejemplo, la permutación que intercambia las filas 1 y 3 de una
> identidad $4\times 4$ se guarda como el vector $(3,2,1,4)$. Esto es lo que
> hace, en código, que $P\cdot A$ se escriba como `A(p,:)` y $A \cdot P$ como
> `A(:,p)`.

### 3.2 Matrices de multiplicadores

El paso $k$ de la eliminación (restar a cada fila $j>k$ un múltiplo
$L_{jk}$ de la fila $k$, para hacer ceros debajo del pivote) también se puede
escribir como multiplicar $A$ por una matriz especial $M_k$:

- $M_k$ es la identidad, salvo que en la **columna $k$**, por debajo de la
  diagonal, tiene las entradas $-L_{k+1,k}, \dots, -L_{n,k}$.
- Es decir: $M_k$ es **triangular inferior, con unos en la diagonal**, y
  todos sus elementos no nulos fuera de la diagonal están concentrados en
  **una sola columna**.

A esta matriz se la llama en la clase **matriz de multiplicadores** (nombre
informal, no un término estándar con el que el docente esté completamente
conforme — "no sé si tiene un nombre muy especial").

Dos propiedades de las matrices de multiplicadores que se verifican
"mirándolas" (sin hacer cuentas), y que son la clave técnica de la
demostración:

1. **El producto de dos matrices de multiplicadores de pasos distintos se
   obtiene "pegando" las columnas no nulas** — no hace falta multiplicar de
   verdad, el resultado es directamente la matriz con ambas columnas de
   multiplicadores puestas en su lugar.
2. **La inversa de una matriz de multiplicadores es la misma matriz con el
   signo de los multiplicadores cambiado** — invertir, en general, es caro
   (resolver $n$ sistemas), pero para esta familia de matrices es trivial.

### 3.3 La relación de conmutación $PM = \tilde{M}P$

Falta un último ingrediente: cuando en la cadena de operaciones aparece una
matriz de permutación **de un paso posterior** multiplicando a una matriz de
multiplicadores de un paso anterior, se puede "pasar" la permutación al otro
lado, a costa de permutar también las entradas de la matriz de
multiplicadores:

$$P \cdot M = \tilde{M} \cdot P$$

donde $\tilde M$ tiene la misma estructura que $M$ (triangular inferior,
unos en la diagonal, no ceros en una sola columna), solo que con los
multiplicadores reordenados según la permutación $P$. Esta relación es la
que permite, más adelante, "separar" todas las $P$ de un lado y todas las
$M$ del otro en la cadena de productos.

---

## 4. El teorema de descomposición LU

### 4.1 Demostración (constructiva)

La eliminación gaussiana con pivoteo parcial, vista como producto de
matrices, se escribe (para una matriz $A$ de $n\times n$):

$$M_{n-1} P_{n-1} \cdots M_2 P_2 \, M_1 P_1 \, A = U$$

donde cada $P_k$ es la matriz de permutación del pivoteo en el paso $k$
(la identidad si no hubo que pivotear) y cada $M_k$ es la matriz de
multiplicadores de ese paso. Al final queda $U$, triangular superior (esto
es exactamente lo que hace la eliminación gaussiana: aunque $A$ sea singular,
se llega a una triangular superior, eventualmente con algún cero en la
diagonal).

Usando la asociatividad del producto de matrices y la relación de
conmutación de §3.3 repetidamente, se pueden **agrupar todas las $P_k$ a la
izquierda** (formando una única matriz de permutación $P$, producto de
permutaciones) **y todas las $M_k$** (transformadas por las conmutaciones)
**a la derecha de las $P$, multiplicando a $A$**. Al pasar las matrices de
multiplicadores transformadas al otro lado de la igualdad (invirtiéndolas —
lo cual, por la propiedad de §3.2, es solo cambiar signos) y multiplicarlas
entre sí (lo cual, de nuevo por §3.2, es solo "pegar" columnas), se llega a:

$$P \, A = L \, U$$

donde:

- $P$ es una matriz de permutación (producto de las $P_k$).
- $U$ es la triangular superior que deja la eliminación.
- $L$ es una matriz **triangular inferior, con unos en la diagonal**, cuyas
  entradas fuera de la diagonal son, **literalmente**, los multiplicadores
  $L_{jk}$ de la eliminación gaussiana con pivoteo parcial (ya con el efecto
  de las permutaciones incorporado). "Tiene la huella de tu eliminación
  gaussiana metida."

$$\boxed{\text{Para toda matriz cuadrada } A,\ \exists\, P,\, L,\, U \text{ tales que } PA = LU}$$

con $P$ de permutación, $L$ triangular inferior con unos en la diagonal, $U$
triangular superior.

### 4.2 Comentarios sobre el enunciado

- **La $P$ es necesaria en general.** No toda matriz cuadrada se puede
  escribir como $A = LU$ sin permutar filas — eso es falso en general, aun
  para matrices cuadradas.
- **El determinante de $A$ puede ser cualquiera.** El teorema no exige
  $\det A \neq 0$: si $A$ es singular, la eliminación llega igual a una $U$
  triangular superior, sólo que con algún cero en la diagonal (y eso revela
  que $A$ es singular). En el curso se trabaja mayormente con $A$ no
  singular porque interesa resolver sistemas, pero el teorema en sí no lo
  necesita.
- **La demostración es constructiva y ligada al algoritmo**: el resultado
  "sale" de eliminación gaussiana con pivoteo parcial, así que el costo de
  calcular $P, L, U$ es, como mucho, el costo de ese algoritmo:
  $O(n^3)$ (del orden de $\tfrac{2}{3}n^3$), el mismo orden que la
  eliminación simple.

### 4.3 No unicidad

La factorización $PA=LU$ **no es única**. Dos fuentes de no unicidad:

1. Depende de **qué pivoteo se hizo** — hay libertad en cómo se resuelven los
   empates al elegir el máximo en valor absoluto.
2. Aun fijando la convención "unos en la diagonal de $L$" (que ya es una
   elección, no la única posible), si en algún paso dos candidatos a pivote
   tienen el mismo valor absoluto, hay libertad de pivotear o no — y esa
   elección cambia $P$, $L$ y $U$.

> No hay que confundir esto con la factorización de Cholesky (§7), que sí es
> única bajo sus hipótesis — son construcciones distintas.

---

## 5. Resolver sistemas usando la LU

Dada la factorización $PA = LU$ de una matriz $A$ **no singular**, resolver
$Ax = b$ se reduce a dos sistemas triangulares:

1. Multiplicar la ecuación por $P$: $PAx = Pb \implies LUx = Pb$.
2. Definir la variable auxiliar $y := Ux$. El sistema queda $Ly = Pb$.
3. **Paso 1 — sustitución hacia adelante:** resolver $Ly = Pb$ para $y$.
   Costo $O(n^2)$ (mucho más barato que $O(n^3)$).
4. **Paso 2 — sustitución hacia atrás:** resolver $Ux = y$ para $x$. Costo
   también $O(n^2)$.

$$\boxed{\text{Con } P,L,U \text{ ya calculados, resolver } Ax=b \text{ cuesta } O(n^2), \text{ no } O(n^3)}$$

---

## 6. Cuándo conviene calcular la LU

Calcular $P,L,U$ cuesta $O(n^3)$ — el mismo orden que resolver el sistema
directamente con eliminación gaussiana una vez. La ventaja aparece cuando
**hay que resolver el mismo sistema $Ax=b$ para muchos $b$ distintos** (la
matriz $A$ es la misma, cambia el lado derecho).

Ejemplo usado en clase: un puente modelado por $Ax=b$, donde $A$ depende de
la estructura (fija) y $b$ representa distintas configuraciones de carga
(un camión, un tractor, distintas combinaciones). Si hay que evaluar $m$
configuraciones de carga distintas:

| Estrategia | Costo total |
| --- | --- |
| Eliminación gaussiana completa para cada $b$ | $O(n^3 \cdot m)$ |
| Calcular $P,L,U$ una vez + sustitución para cada $b$ | $O(n^3 + n^2 \cdot m)$ |

Si $m$ es comparable a $n$, la primera estrategia es $O(n^4)$ y la segunda
$O(n^3)$: se gana un orden de magnitud completo.

> **Regla práctica:** si la matriz se reutiliza muchas veces con distintos
> lados derechos, conviene factorizar una sola vez y reutilizar $L$ y $U$.

---

## 7. Nota al margen: la factorización de Cholesky

Comentario breve, no desarrollado en profundidad (queda para el práctico):
si $A$ es **simétrica** ($A = A^T$), por el teorema espectral es
diagonalizable en $\mathbb{R}$ con $n$ valores propios reales. Si además
todos sus valores propios son $\geq 0$, $A$ se dice **semidefinida positiva**
(definida positiva si son estrictamente $>0$).

Para esas matrices existe una factorización distinta de la LU:

$$A = R^T R$$

con $R$ triangular (la factorización de **Cholesky**) — **no** tiene unos en
la diagonal, **no** tiene que ver con eliminación gaussiana, y es un poco más
barata de calcular que la LU. Se menciona solo como contexto para entender
por qué el código de `\` (§8) chequea primero si la matriz es simétrica.

> No confundir con la descomposición LU de §4: son construcciones distintas,
> con hipótesis distintas sobre $A$.

---

## 8. Implementación: cómo funciona `\` en MATLAB/Octave

El operador **backslash** (`x = A \ b`) no es una caja negra mágica: internamente
decide **qué método usar según la estructura de $A$**. La clase muestra una
versión "de juguete" (simplificada, con fines didácticos) tomada del libro de
**Cleve Moler**, uno de los fundadores de MATLAB — autor de uno de los
libros de referencia del curso, con muchos ejemplos de código (el ejemplo de
la máquina de 5 dígitos de §1 sale de ese mismo libro).

> **Nota de transcripción:** el audio transcribe el nombre del autor como
> "Cliff Moller"; el autor real de *Numerical Computing with MATLAB* es
> **Cleve B. Moler**. Se corrige acá por ser un dato verificable (fundador de
> MATLAB, autor del libro con el ejemplo citado en clase), no una invención.

Lógica del backslash "de juguete":

1. Si $A$ es triangular inferior → sustitución hacia adelante directa.
2. Si $A$ es triangular superior → sustitución hacia atrás directa.
3. Si $A$ es simétrica → intentar Cholesky (más barato que LU).
4. Si nada de lo anterior aplica → calcular la descomposición LU (eliminación
   gaussiana con pivoteo parcial) y resolver con los dos pasos de §5.

La función de juguete `lu` (que calcula $P,L,U$) sigue, paso a paso, el
algoritmo de §2–§4, con un detalle de implementación eficiente: los
multiplicadores **se guardan directamente en la parte de $A$ que ya no se
va a usar** (la parte triangular inferior, debajo de la diagonal, que la
eliminación va dejando en ceros lógicamente pero que en memoria se
sobrescribe con los multiplicadores). Al terminar, la parte triangular
inferior estricta de esa matriz sobrescrita es $L - I$ (los multiplicadores)
y la parte triangular superior (incluida la diagonal) es $U$ — no hace falta
memoria extra para $L$ y $U$ por separado.

---

## 9. Matrices dispersas (introducción)

Comentario "al margen" que queda abierto para desarrollar más adelante: en
muchas aplicaciones (redes/grafos, sistemas estructurales tipo el ejemplo del
puente) las matrices tienen **muchos ceros** — a una variable no le "importan"
directamente todas las demás, solo sus vecinas. Estas se llaman **matrices
dispersas** (sparse).

- Almacenar una matriz dispersa como si fuera densa (los $n^2$ números,
  incluyendo todos los ceros) es un desperdicio de memoria.
- En Octave, el comando `sparse` permite guardar solo las coordenadas y
  valores de las entradas **no nulas**. El ejemplo de clase: una matriz
  $50\times 50$ densa ocupa 20 000 bytes; su versión dispersa, unas 8 veces
  menos.
- La eliminación gaussiana (con o sin pivoteo) **siempre funciona** mientras
  $A$ sea no singular — es "la red de seguridad" — pero es $O(n^3)$ sin
  aprovechar ninguna estructura. Para matrices dispersas existen métodos más
  eficientes, que el curso no desarrolla en esta clase.

*Continúa la clase siguiente retomando este tema y avanzando hacia el
análisis de cuán bueno es, en la práctica, el método de eliminación con
pivoteo parcial (normas de matrices y número de condición — Clases 7 y 8).*
