# Resumen Clase 6 — Pivoteo parcial y construcción de la factorización LU

## Índice

1. [Multiplicadores grandes y pivoteo parcial](#1-multiplicadores-grandes-y-pivoteo-parcial)
2. [Permutar filas mediante matrices](#2-permutar-filas-mediante-matrices)
3. [Matrices de eliminación y sus operaciones](#3-matrices-de-eliminacion-y-sus-operaciones)
4. [De la eliminación a PA igual LU](#4-de-la-eliminacion-a-pa-igual-lu)
5. [Resolver y reutilizar una factorización](#5-resolver-y-reutilizar-una-factorizacion)
6. [Qué hacen los códigos mostrados](#6-que-hacen-los-codigos-mostrados)
7. [Matrices dispersas y almacenamiento](#7-matrices-dispersas-y-almacenamiento)

## 1. Multiplicadores grandes y pivoteo parcial

### 1.1 Retomar el ejemplo de precisión limitada

La clase vuelve al ejemplo de cinco cifras significativas de la clase anterior. El primer paso de eliminación había sido exacto; el problema apareció al reemplazar la tercera fila por la tercera más $2500$ veces la segunda. Con la convención $F_j\leftarrow F_j-\ell_{jk}F_k$, el multiplicador es $\ell_{32}=-2500$.

El cálculo señalado es la actualización $2.5+2500\cdot6.001$ del lado derecho. Un producto del orden de quince mil tiene un error absoluto de truncamiento que puede ser importante comparado con coeficientes originales del orden de uno. No hace falta que el multiplicador mismo esté mal calculado: su magnitud hace peligrosas las operaciones posteriores.

Durante la sustitución hacia atrás, $x_3$ tiene un error pequeño, pero $x_2$ está multiplicado por un coeficiente pequeño. Al despejar $x_2$, el error que parecía inocuo se amplifica; el error en $x_2$ afecta luego a $x_1$. No se concluye que la eliminación sea inútil ni que el sistema sea intrínsecamente malo: la estrategia elegida es la que produce el problema.

> El docente no vuelve a escribir la matriz completa ni repite todas las cuentas. La transcripción sólo determina la operación destacada y su interpretación; no se añade una reconstrucción numérica de la matriz original.

### 1.2 Elegir un pivote respecto de su columna

En el paso $k$, los multiplicadores son

$$
\ell_{jk}=\frac{a_{jk}^{(k)}}{a_{kk}^{(k)}},\qquad j=k+1,\ldots,n.
$$

Para que no sean grandes, se elige un elemento máximo en valor absoluto dentro de la parte no reducida de la columna $k$. El **pivoteo parcial** consiste en escoger

$$
p\in\operatorname*{arg\,max}_{k\le j\le n}|a_{jk}^{(k)}|
$$

 e intercambiar las filas $k$ y $p$ antes de calcular los multiplicadores. Puede haber varios máximos; cualquiera sirve. Tras el intercambio, si el pivote no es cero,

$$
\boxed{|\ell_{jk}|\le1\quad(j>k)}.
$$

La referencia es relativa a los demás elementos de la columna, no un umbral absoluto de cercanía a cero. El método mitiga el mecanismo observado de amplificación por multiplicadores grandes; no se demuestra aquí una garantía universal de ausencia de errores. El pivoteo por columnas se menciona, pero no se estudia.

### 1.3 Búsqueda, intercambio y costo

La búsqueda se puede hacer conservando el mejor candidato encontrado:

```text
p = k
Para j = k+1, ..., n:
  Si abs(A[j,k]) > abs(A[p,k]):
    p = j
Intercambiar filas k y p de A y del lado derecho
Continuar con los multiplicadores de la etapa k
```

Inicializar con $p=k$ incluye la posibilidad de no intercambiar. Cada comparación pregunta si la nueva fila ofrece un pivote mayor; con la comparación estricta se conserva el primer máximo en caso de empate, una convención de esta escritura. El lado derecho debe seguir la misma permutación para preservar el sistema.

Hay $n-k$ comparaciones en este recorrido y un intercambio de longitud a lo sumo $n$. Al sumar sobre $k$, ambas tareas adicionales cuestan $O(n^2)$. La eliminación sigue dominando con $O(n^3)$, cuyo término principal era $2n^3/3$. El conteo oral vacila en una unidad, pero el argumento de orden es inequívoco: pivotear no agrega otro costo cúbico.

## 2. Permutar filas mediante matrices

### 2.1 Matriz y vector de permutación

Una **matriz de permutación** se obtiene reordenando filas de la identidad. Multiplicar $PA$ permuta filas de $A$; multiplicar a la derecha permuta columnas. Por ejemplo, el intercambio de filas 1 y 3 de una matriz de tamaño cuatro se representa como

$$
P=\begin{pmatrix}
0&0&1&0\\0&1&0&0\\1&0&0&0\\0&0&0&1
\end{pmatrix},\qquad
PA=\begin{pmatrix}F_3(A)\\F_2(A)\\F_1(A)\\F_4(A)\end{pmatrix}.
$$

La notación $F_i(A)$ representa aquí la fila completa. Si no se intercambia nada, $P=I$. El producto de matrices de permutación vuelve a ser una matriz de permutación: simplemente encadena reordenamientos.

No hace falta almacenar los dieciséis números del ejemplo. El vector $p=(3,2,1,4)$ indica qué fila original ocupa cada posición nueva. En la notación de Octave mostrada, `A(p,:)` realiza ese reordenamiento. Se almacenan $n$ índices en lugar de $n^2$ números. Para el intercambio del ejemplo, `A(:,p)` reordena las columnas correspondientes.

### 2.2 Ejemplo de multiplicación a izquierda y derecha

En la demostración con computadora se usa la matriz de entradas 1 a 9 y el intercambio de posiciones 1 y 2. Desplegar los resultados permite ver qué lado del producto importa:

$$
A=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix},\qquad
P=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},
$$

$$
PA=\begin{pmatrix}4&5&6\\1&2&3\\7&8&9\end{pmatrix},\qquad
AP=\begin{pmatrix}2&1&3\\5&4&6\\8&7&9\end{pmatrix}.
$$

En el primer producto cambian filas enteras; en el segundo, las dos primeras entradas de cada fila intercambian posición. Para representar la eliminación se necesitan operaciones por la izquierda.

## 3. Matrices de eliminación y sus operaciones

### 3.1 Una columna que codifica las combinaciones entre filas

La operación $F_j\leftarrow F_j-\ell_{jk}F_k$ para todas las filas $j>k$ se representa multiplicando por una matriz $M_k$: es la identidad con los negativos de los multiplicadores debajo de la diagonal, solamente en la columna $k$.

Por ejemplo, en tamaño cuatro, las dos primeras etapas tienen la estructura

$$
M_1=\begin{pmatrix}
1&0&0&0\\-\ell_{21}&1&0&0\\-\ell_{31}&0&1&0\\-\ell_{41}&0&0&1
\end{pmatrix},\qquad
M_2=\begin{pmatrix}
1&0&0&0\\0&1&0&0\\0&-\ell_{32}&1&0\\0&-\ell_{42}&0&1
\end{pmatrix}.
$$

Estas matrices se escriben simbólicamente para mostrar la estructura dictada; no sustituyen con cifras nuevas los ejemplos proyectados. En $M_1A$, la primera fila es $F_1(A)$ y la fila $j$ es $F_j(A)-\ell_{j1}F_1(A)$. Los signos negativos son los de la operación de eliminación; después aparecerán signos positivos en el factor $L$.

En la computadora se muestra otro ejemplo con pivote 6 y multiplicadores $1/6$ y $2/3$. La matriz correspondiente es

$$
M_1=\begin{pmatrix}1&0&0\\-1/6&1&0\\-2/3&0&1\end{pmatrix}.
$$

El producto anula las entradas inferiores de la primera columna. El docente observa que esa matriz de ejemplo es singular, pero eso no impide ilustrar la operación. El audio no enumera el resto de sus entradas, por lo que no se fabrica el producto numérico completo.

### 3.2 Inversas y orden de los productos

La inversa de una matriz de eliminación tiene la misma estructura y cambia el signo de los multiplicadores. Por ejemplo,

$$
M_2^{-1}=\begin{pmatrix}
1&0&0&0\\0&1&0&0\\0&\ell_{32}&1&0\\0&\ell_{42}&0&1
\end{pmatrix}.
$$

El docente verifica estas propiedades con ejemplos en computadora y omite desarrollar todas las multiplicaciones. También muestra que, con las columnas en el orden apropiado, multiplicar estas matrices equivale a pegar sus columnas modificadas:

$$
\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&a&1&0\\0&b&0&1\end{pmatrix}
\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&1&0\\0&0&c&1\end{pmatrix}
=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&a&1&0\\0&b&c&1\end{pmatrix}.
$$

Aquí $a,b,c$ representan las entradas de las columnas modificadas. La primera matriz corresponde a una etapa anterior a la segunda. Esta precisión de orden es esencial: la multiplicación matricial no es conmutativa y no se autoriza a pegar columnas en cualquier orden.

### 3.3 Pasar una permutación posterior a la derecha

Para reunir las permutaciones, se necesita la relación $PM_1=\widetilde M_1P$ cuando $P$ intercambia filas de una etapa posterior. En el ejemplo, $P$ intercambia las filas 2 y 4 y deja fija la primera. Entonces

$$
M_1=\begin{pmatrix}1&0&0&0\\a&1&0&0\\b&0&1&0\\c&0&0&1\end{pmatrix},\qquad
\widetilde M_1=\begin{pmatrix}1&0&0&0\\c&1&0&0\\b&0&1&0\\a&0&0&1\end{pmatrix},
$$

$$
PM_1=\widetilde M_1P
=\begin{pmatrix}1&0&0&0\\c&0&0&1\\b&0&1&0\\a&1&0&0\end{pmatrix}.
$$

Se intercambian los multiplicadores de esas filas en la primera columna, mientras la identidad de $\widetilde M_1$ se conserva. El producto $PM_1$ solo ya no es triangular. La relación permite trasladar $P$ hacia la derecha, pero exige cambiar $M_1$: no es una conmutación libre. La clase motiva esta identidad mediante el ejemplo; no desarrolla una demostración general entrada por entrada.

## 4. De la eliminación a PA igual LU

### 4.1 Encadenar las operaciones

Se comienza con $A$. En cada etapa primero se permuta, si hace falta, y después se elimina. Por eso el producto total se lee desde la derecha:

$$
M_{n-1}P_{n-1}\cdots M_2P_2M_1P_1A=U,
$$

con $U$ triangular superior. Usando la relación anterior, se pasa $P_2$ a la derecha de $M_1$, cambiando sus multiplicadores. Luego se hace lo mismo con $P_3$ y las matrices de eliminación anteriores. Continuando se llega a

$$
\widehat M_{n-1}\cdots\widehat M_2\widehat M_1\,PA=U,
\qquad P=P_{n-1}\cdots P_1.
$$

Los sombreros indican que algunas filas de los multiplicadores fueron reordenadas. El producto de las $P_k$ es una sola permutación. Se despeja multiplicando por las inversas en orden inverso al producto:

$$
PA=\underbrace{\widehat M_1^{-1}\widehat M_2^{-1}\cdots
\widehat M_{n-1}^{-1}}_{L}\,U.
$$

Cada inversa devuelve el signo de los multiplicadores calculados. En este orden, las columnas se ensamblan en una triangular inferior con diagonal de unos:

$$
L=\begin{pmatrix}
1&0&\cdots&0\\
\widehat\ell_{21}&1&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
\widehat\ell_{n1}&\widehat\ell_{n2}&\cdots&1
\end{pmatrix},\qquad \boxed{PA=LU}.
$$

Así, $P$ registra los intercambios, $U$ es el resultado de triangularizar y $L$ conserva la historia de multiplicadores, ajustada por los intercambios posteriores. Esta construcción es el centro del argumento: no basta con conocer el nombre de la factorización.

### 4.2 Alcance del resultado

El docente enuncia que toda matriz cuadrada admite esa descomposición con $P$ de permutación, $L$ triangular inferior unitaria y $U$ triangular superior. Aclara que la singularidad no impide la existencia: en ese caso $U$ tiene algún cero diagonal. Para resolver un sistema con solución única sí se exige invertibilidad.

No toda matriz admite $A=LU$ sin permutaciones; no se puede borrar $P$ del enunciado general. La factorización tampoco es única en la generalidad presentada: incluso el pivoteo parcial puede encontrar máximos empatados. La clase da una construcción motivada por operaciones y ejemplos, sin formalizar todos los casos. Calcularla tiene costo $O(n^3)$, comparable al de la eliminación que la produce.

## 5. Resolver y reutilizar una factorización

### 5.1 Dos sistemas triangulares

Si ya se conocen $P,L,U$ y $A$ es invertible, se transforma

$$
A\mathbf x=\mathbf b
\quad\Longrightarrow\quad
LU\mathbf x=P\mathbf b.
$$

Introducir $\mathbf y=U\mathbf x$ permite separar dos tareas:

$$
\boxed{L\mathbf y=P\mathbf b\quad\text{y luego}\quad U\mathbf x=\mathbf y}.
$$

Primero se permuta el lado derecho. Después se resuelve hacia adelante para $\mathbf y$; finalmente se resuelve hacia atrás para $\mathbf x$. El orden no es intercambiable: el segundo sistema necesita la salida del primero. No se forman inversas de $L$ ni de $U$ para hacer estas sustituciones.

```text
Entrada: P, L, U con P*A = L*U; b
c = P*b                         (permutar entradas)
y = sustitucion_adelante(L, c)
x = sustitucion_atras(U, y)
Salida: x
```

Cada sustitución cuesta $O(n^2)$. Si la factorización fue entregada, resolver un nuevo lado derecho cuesta $O(n^2)$; obtenerla inicialmente no es gratis.

### 5.2 Muchas cargas, una misma matriz

El ejemplo conceptual es un puente: $\mathbf x$ representa desplazamientos, $\mathbf b$ las fuerzas y $A$ relaciona sus grados de libertad. Interesa ensayar muchas cargas con la misma estructura. Se dibuja un puente y se plantean distintos vehículos o pesos, sin precisar una geometría numérica.

Para $m$ lados derechos, repetir la eliminación cuesta $O(mn^3)$. Factorizar una vez y reutilizar cuesta

$$
\boxed{O(n^3)+O(mn^2)}.
$$

Si $m$ es comparable con $n$, se pasa de orden $n^4$ a orden $n^3$. El ahorro surge de separar el trabajo que depende de $A$ del que cambia con cada $\mathbf b$.

## 6. Qué hacen los códigos mostrados

### 6.1 Estructura antes de fuerza bruta

Antes de mostrar una versión didáctica de la contrabarra de MATLAB/Octave, se menciona **Cholesky**. Para matrices simétricas con la positividad apropiada puede escribirse $A=CC^T$, con $C$ triangular inferior; su diagonal no está normalizada a unos. La clase relaciona positividad con los signos de los valores propios y no deriva el algoritmo, que remite al práctico.

> La exposición menciona semidefinidas positivas al hablar de la factorización. Para usarla como resolución única mediante sustituciones se necesita además no singularidad. La simetría sola no basta para aplicar Cholesky. El código proyectado no se recupera íntegro del audio; no se atribuye al programa real una selección basada únicamente en simetría.

La lógica narrada de la versión de juguete de `A\b` es detectar estructura económica antes de factorizar una matriz general:

```text
Entrada: A, b (sistema con solucion unica)
Si A es triangular inferior: resolver hacia adelante
Si A es triangular superior: resolver hacia atras
Si corresponde Cholesky: usar esa factorizacion
En el caso general:
  calcular P, L, U
  resolver L*y = P*b
  resolver U*x = y
Salida: x
```

Esto resume las ramas explicadas, no reproduce el código real de una biblioteca. La rama de Cholesky se deja condicionada a su aplicabilidad porque los detalles del chequeo no se leen en la transcripción. El docente menciona un libro de uno de los fundadores de MATLAB, pero no proporciona su título: la bibliografía estructurada queda sin completar.

### 6.2 LU almacenada en un solo arreglo

La versión de juguete de LU inicializa un vector de permutaciones. En cada columna busca pivote, intercambia filas y actualiza ese vector. Calcula luego los multiplicadores y los guarda en posiciones inferiores de la matriz que ya no necesita para representar $U$. Finalmente separa el triángulo superior y el inferior, agregando unos a la diagonal de $L$.

```text
Entrada: A cuadrada
p = (1, ..., n)
Para k = 1, ..., n-1:
  buscar q de maximo abs(A[q,k]), q >= k
  Si A[q,k] = 0: continuar con la siguiente columna
  intercambiar filas k y q de A
  intercambiar p[k] y p[q]
  Para i = k+1, ..., n:
    A[i,k] = A[i,k] / A[k,k]
    Para j = k+1, ..., n:
      A[i,j] = A[i,j] - A[i,k] * A[k,j]
L = identidad + parte estrictamente inferior de A
U = parte triangular superior de A
Salida: L, U, p; la fila i de P*A es la fila p[i] original
```

Es una reconstrucción del procedimiento verbal, con índices explicitados editorialmente. Si el máximo es cero, toda la parte buscada es cero y se evita dividir. Intercambiar filas completas también reordena multiplicadores de columnas anteriores: eso materializa las permutaciones que aparecían con sombreros en la deducción. En el recorrido interior $A[i,k]$ ya contiene el multiplicador, no el coeficiente original. Guardar ahí un cero destruiría la información necesaria para $L$.

## 7. Matrices dispersas y almacenamiento

Una matriz **dispersa** tiene muchos ceros. En redes, un nodo suele conectarse con pocos otros; en el ejemplo mecánico, algunos desplazamientos se relacionan directamente sólo con vecinos. No todos los grados de libertad interactúan con todos, por lo que almacenar una matriz llena de ceros desperdicia memoria.

La demostración muestra con color las posiciones no nulas y usa `sparse` para almacenar sus valores y coordenadas. La matriz presentada es de tamaño $50\times50$: su almacenamiento denso ocupa 20000 bytes y la versión dispersa ocupa aproximadamente ocho veces menos. El ahorro pertenece a ese ejemplo, no es una constante universal.

> El patrón exacto proyectado no se determina por el audio. Se conserva la explicación del almacenamiento y sus cifras; no se inventa una matriz dispersa de cincuenta filas para reproducir la imagen.

La próxima clase retomará matrices especiales y la manera de cuantificar errores vectoriales y matriciales.
