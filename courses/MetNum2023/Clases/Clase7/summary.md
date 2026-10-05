# Resumen Clase 7 — Matrices especiales, normas inducidas, error y residuo

## Índice

1. [Dispersidad y estructura de banda](#1-dispersidad-y-estructura-de-banda)
2. [Normas vectoriales y geometría](#2-normas-vectoriales-y-geometria)
3. [De arreglos a operadores](#3-de-arreglos-a-operadores)
4. [Cálculo de la norma infinito inducida](#4-calculo-de-la-norma-infinito-inducida)
5. [Normas uno y dos inducidas](#5-normas-uno-y-dos-inducidas)
6. [Compatibilidad y submultiplicatividad](#6-compatibilidad-y-submultiplicatividad)
7. [Error y residuo de un sistema](#7-error-y-residuo-de-un-sistema)

## 1. Dispersidad y estructura de banda

### 1.1 Qué conviene almacenar

La clase retoma las **matrices dispersas**, que tienen muchos ceros. El docente propone como medida heurística la fracción de entradas no nulas y corrige su nombre durante la exposición: esa fracción es densidad; su complemento sería dispersidad. Para $A\in\mathbb R^{n\times n}$:

$$
\text{densidad}(A)=\frac{\#\{(i,j):a_{ij}\ne0\}}{n^2},\qquad
\text{dispersidad}(A)=1-\text{densidad}(A).
$$

Ambas cantidades quedan entre cero y uno. No se fija un umbral universal que separe matrices dispersas de densas. La motivación es práctica: guardar ceros de una matriz enorme no aporta información. Una representación posible conserva ternas $(i,j,a_{ij})$ sólo para entradas no nulas. Si hay $s$ entradas de ese tipo, se almacenan $3s$ números en vez de $n^2$. En este modelo simple hay ahorro cuando $3s<n^2$.

El comando `sparse` permite construir una representación dispersa o convertir una matriz ya construida. Se menciona la posibilidad de operar eficientemente con ella, pero no se desarrolla un algoritmo general para hacerlo. La cuenta de ternas ilustra la idea de almacenamiento; no pretende describir todos los detalles internos de una biblioteca.

### 1.2 La matriz tridiagonal desplegada

Una matriz de banda permite entradas no nulas sólo cerca de la diagonal. En particular, es **tridiagonal** cuando $a_{ij}=0$ si $|i-j|>1$. La estructura dibujada es

$$
A=\begin{pmatrix}
d_1&c_1&0&\cdots&0\\
a_2&d_2&c_2&\ddots&\vdots\\
0&a_3&d_3&\ddots&0\\
\vdots&\ddots&\ddots&\ddots&c_{n-1}\\
0&\cdots&0&a_n&d_n
\end{pmatrix}.
$$

Los símbolos $a_i,d_i,c_i$ nombran editorialmente las tres diagonales. Las entradas mostradas pueden ser cero; lo que se garantiza es la nulidad fuera de la banda. En la primera fila sólo pueden intervenir las columnas 1 y 2; en una fila interior $i$, las columnas $i-1,i,i+1$.

En una eliminación general se realizan $O(n^3)$ operaciones. Con esta estructura y una implementación que la aproveche, cada etapa tiene una cantidad acotada de candidatos a pivote y de coeficientes que actualizar. El número de etapas crece con $n$, pero el trabajo por etapa permanece acotado: el costo se vuelve $O(n)$. Las sustituciones también aprovechan la estructura para tener costo lineal.

La misma idea se extiende a una banda de ancho fijo, como la pentadiagonal. El ancho debe mantenerse fijo al crecer $n$; de lo contrario no corresponde tratar el trabajo de cada etapa como constante. El docente deja el desarrollo concreto como ejercicio práctico. No se añade aquí un algoritmo de Thomas ni una deducción que no se hizo. Tampoco se afirma que cualquier implementación densa detecte y aproveche automáticamente los ceros: hay que comunicar o explotar esa estructura.

## 2. Normas vectoriales y geometría

### 2.1 Medir tamaños

Para estudiar la calidad de una solución calculada se necesitan tamaños de vectores y matrices. Una **norma** en un espacio vectorial real $V$ es una función que satisface

$$
\begin{aligned}
\|v\|&\ge0,&\qquad \|v\|=0&\iff v=0,\\
\|\lambda v\|&=|\lambda|\|v\|,\\
\|v+w\|&\le\|v\|+\|w\|.
\end{aligned}
$$

La primera propiedad distingue el vector nulo; la segunda describe cómo cambia el tamaño al escalar; la tercera es la **desigualdad triangular**. El rodeo por un punto intermedio no puede resultar más corto que el trayecto directo, en la interpretación geométrica dada en clase.

En $\mathbb R^n$, para $1\le p<\infty$ se consideran

$$
\|\mathbf x\|_p=\left(\sum_{j=1}^n|x_j|^p\right)^{1/p},\qquad
\|\mathbf x\|_\infty=\max_j|x_j|.
$$

La norma uno suma valores absolutos y se llama del taxi o Manhattan. La norma dos es la euclídea, vinculada al producto interno y a Pitágoras. La norma infinito se llama también del máximo o de Chebyshev. No se sustituye literalmente $p=\infty$ en una fórmula con potencias: se da una definición separada. Que se recupere como límite de las normas $p$ se deja como ejercicio.

### 2.2 Las fronteras unitarias

En dos dimensiones, los puntos de norma uno forman un rombo con vértices $(\pm1,0)$ y $(0,\pm1)$ para $p=1$, una circunferencia para $p=2$ y el borde del cuadrado $[-1,1]^2$ para $p=\infty$. Al aumentar $p$, las fronteras dibujadas se ensanchan desde el rombo hacia el cuadrado. La bola unitaria incluye también el interior; la figura de nivel uno representa su frontera.

Esta comparación muestra que hablar de cercanía exige elegir una norma. La misma diferencia vectorial puede recibir tamaños distintos según cómo se mida. La clase introduce estas herramientas antes de usarlas plenamente en estabilidad y convergencia.

## 3. De arreglos a operadores

### 3.1 La alternativa de Frobenius

Las matrices también forman un espacio vectorial: se suman y multiplican por escalares. Una posibilidad es ordenar sus $n^2$ entradas como un vector y usar una norma vectorial. Para la norma dos de ese vector se obtiene la **norma de Frobenius**:

$$
\|A\|_F=\left(\sum_{i=1}^n\sum_{j=1}^n|a_{ij}|^2\right)^{1/2}.
$$

El docente sólo presenta esta posibilidad y anuncia que volverá a ella más adelante. No desarrolla sus propiedades. Para el análisis que sigue interesa mirar a $A$ como una transformación lineal $\mathbf x\mapsto A\mathbf x$ y medir cuánto puede ampliar vectores.

### 3.2 Norma matricial inducida

Fijada una norma vectorial $\|\cdot\|_v$, se define la norma matricial inducida, o **norma operador**, mediante

$$
\boxed{\|A\|_m=\max_{\mathbf x\ne0}
\frac{\|A\mathbf x\|_v}{\|\mathbf x\|_v}}.
$$

El cociente normaliza el tamaño de la entrada. Se pregunta cuál es la mayor amplificación posible, considerando todas las direcciones. La norma de $A$ depende de la norma vectorial escogida: el subíndice matricial no designa una elección independiente.

Se enuncian también las caracterizaciones

$$
\|A\|_m=\max_{\|\mathbf x\|_v\le1}\|A\mathbf x\|_v
=\max_{\|\mathbf x\|_v=1}\|A\mathbf x\|_v.
$$

La verificación de los axiomas de norma y de estas igualdades se deja como ejercicio. La clase usa la caracterización sobre la esfera unitaria para la demostración siguiente. Estas normas no se obtienen, en general, combinando entradas de una matriz como si fueran simplemente un vector largo.

## 4. Cálculo de la norma infinito inducida

El resultado central demostrado es

$$
\boxed{\|A\|_\infty=\max_{1\le i\le n}\sum_{j=1}^n|a_{ij}|}.
$$

Se suma por columnas con la fila fija: cada suma es la norma uno de una fila. Luego se elige la fila con mayor suma. No es el máximo de las entradas individuales. Para visualizar la operación, las sumas de filas se organizan así:

$$
\begin{pmatrix}
a_{11}&\cdots&a_{1n}\\
\vdots&&\vdots\\
a_{n1}&\cdots&a_{nn}
\end{pmatrix}
\quad\longmapsto\quad
\begin{pmatrix}
\sum_j|a_{1j}|\\\vdots\\\sum_j|a_{nj}|
\end{pmatrix}
\quad\longmapsto\quad\max_i\sum_j|a_{ij}|.
$$

### 4.1 Una cota que vale para cualquier vector unitario

Si $\|\mathbf x\|_\infty=1$, entonces $|x_j|\le1$ para toda coordenada. Se desarrolla el producto matriz-vector y se usa la desigualdad triangular del valor absoluto:

$$
\begin{aligned}
\|A\mathbf x\|_\infty
&=\max_i\left|\sum_j a_{ij}x_j\right|\\
&\le\max_i\sum_j|a_{ij}x_j|\\
&=\max_i\sum_j|a_{ij}|\,|x_j|\\
&\le\max_i\sum_j|a_{ij}|.
\end{aligned}
$$

La desigualdad triangular para una suma finita se obtiene aplicando repetidamente la de dos términos. Como la cota no depende de qué vector unitario se eligió, también acota el máximo sobre todos ellos. Se obtiene así $\|A\|_\infty\le\max_i\sum_j|a_{ij}|$.

### 4.2 Construir el vector que alcanza la cota

Para la desigualdad opuesta no se puede invertir la desigualdad triangular. Se busca un vector especialmente diseñado. Sea $i_0$ una fila donde se alcanza la máxima suma absoluta y defínase

$$
y_j=\operatorname{sgn}(a_{i_0j}),\qquad
\mathbf y=\begin{pmatrix}
\operatorname{sgn}(a_{i_01})\\\vdots\\\operatorname{sgn}(a_{i_0n})
\end{pmatrix}.
$$

Puede tomarse $\operatorname{sgn}(0)=0$. Si $A=0$, ambas partes del resultado son cero y no hay más que demostrar. Si $A\ne0$, la fila de máxima suma contiene alguna entrada no nula, de modo que al menos una coordenada de $\mathbf y$ vale $1$ o $-1$; las restantes pertenecen a $\{-1,0,1\}$. Por tanto $\|\mathbf y\|_\infty=1$.

Primero se restringe el máximo sobre vectores a este candidato; después se restringe el máximo sobre coordenadas a la fila $i_0$:

$$
\begin{aligned}
\|A\|_\infty
&\ge\|A\mathbf y\|_\infty\\
&=\max_i\left|\sum_j a_{ij}y_j\right|\\
&\ge\left|\sum_j a_{i_0j}y_j\right|\\
&=\left|\sum_j |a_{i_0j}|\right|\\
&=\sum_j |a_{i_0j}|=\max_i\sum_j|a_{ij}|.
\end{aligned}
$$

El paso decisivo usa $a_{i_0j}\operatorname{sgn}(a_{i_0j})=|a_{i_0j}|$. Sólo después se puede quitar el valor absoluto externo, porque todos los sumandos ya son no negativos. Meterlo dentro antes de elegir los signos cambiaría el sentido de la desigualdad y arruinaría la prueba.

Las dos cotas prueban la igualdad. El docente destaca el patrón: una cota uniforme suele salir directamente de la definición; alcanzar esa cota requiere escoger un objeto especial. No alcanza con afirmar que existe un máximo: hay que construir un vector que llegue al valor propuesto.

## 5. Normas uno y dos inducidas

Se enuncian, sin demostración en clase, otros dos resultados. Para la norma uno:

$$
\boxed{\|A\|_1=\max_j\sum_i|a_{ij}|}.
$$

Se toman ahora las normas uno de las columnas. La prueba se deja como ejercicio análogo. Intercambiar filas y columnas mediante trasposición da $\|A^T\|_\infty=\|A\|_1$, observación surgida en la discusión.

Para la norma dos:

$$
\boxed{\|A\|_2=\sigma_{\max}(A)
=\sqrt{\lambda_{\max}(A^TA)}}.
$$

Se explica qué son los **valores singulares**: $A^TA$ es simétrica y semidefinida positiva, tiene valores propios reales no negativos y sus raíces cuadradas son los valores singulares de $A$. El mayor es la norma operador inducida por la norma euclídea. Se corrige durante la exposición la afirmación inicial de positividad estricta por semidefinida positividad.

La prueba de esta fórmula se remite a las notas del curso, no se realiza en la clase. Se menciona la futura descomposición en valores singulares y su uso en compresión; no se agrega su desarrollo. La comparación con un cuadrado escalar es sólo una intuición oral: no se identifica $A^TA$ con $A^2$.

## 6. Compatibilidad y submultiplicatividad

### 6.1 Matriz por vector

La **compatibilidad** de la norma inducida con su norma vectorial es

$$
\boxed{\|A\mathbf x\|_v\le\|A\|_m\|\mathbf x\|_v}.
$$

Si $\mathbf x=0$, la desigualdad es inmediata. En caso contrario, se multiplica y divide por su norma, y el cociente de un vector particular se acota por el máximo:

$$
\begin{aligned}
\|A\mathbf x\|_v
&=\frac{\|A\mathbf x\|_v}{\|\mathbf x\|_v}\|\mathbf x\|_v\\
&\le\left(\max_{\mathbf z\ne0}
\frac{\|A\mathbf z\|_v}{\|\mathbf z\|_v}\right)\|\mathbf x\|_v
=\|A\|_m\|\mathbf x\|_v.
\end{aligned}
$$

La variable $\mathbf z$ es auxiliar: evita confundir el vector fijo con la variable que recorre el máximo. El argumento usa directamente la definición, sin recurrir a una desigualdad de producto interno.

### 6.2 Matriz por matriz

La **submultiplicatividad** afirma

$$
\boxed{\|AB\|_m\le\|A\|_m\|B\|_m}.
$$

Por definición, se maximiza $\|AB\mathbf x\|_v/\|\mathbf x\|_v$. Como $B\mathbf x$ es un vector, se aplica primero compatibilidad a $A$ y luego a $B$:

$$
\begin{aligned}
\|AB\|_m
&=\max_{\mathbf x\ne0}\frac{\|A(B\mathbf x)\|_v}{\|\mathbf x\|_v}\\
&\le\max_{\mathbf x\ne0}
\frac{\|A\|_m\|B\mathbf x\|_v}{\|\mathbf x\|_v}\\
&\le\max_{\mathbf x\ne0}
\frac{\|A\|_m\|B\|_m\|\mathbf x\|_v}{\|\mathbf x\|_v}
=\|A\|_m\|B\|_m.
\end{aligned}
$$

También se podría sacar $\|A\|_m$ del máximo en la segunda línea y reconocer directamente la definición de $\|B\|_m$. La repetición de la propiedad da el corolario $\|A^k\|_m\le\|A\|_m^k$ para enteros positivos $k$.

> Estas demostraciones se hicieron para normas inducidas por una norma vectorial. La clase no decide aquí si Frobenius satisface las mismas propiedades; no se concluye ni su validez ni su invalidez a partir de lo demostrado.

## 7. Error y residuo de un sistema

Se vuelve a $A\mathbf x=\mathbf b$, con $A$ invertible. Una eliminación con pivoteo parcial realizada en precisión finita produce $\overline{\mathbf x}$. El **error** mide la diferencia con la solución exacta:

$$
\mathbf e=\overline{\mathbf x}-\mathbf x.
$$

Su norma sería una medida natural de calidad, pero calcularlo requiere conocer precisamente la solución que se intenta hallar. En cambio, el **residuo** se obtiene de la salida del programa y los datos disponibles:

$$
\mathbf r=A\overline{\mathbf x}-\mathbf b.
$$

El error compara soluciones; el residuo pregunta cuánto incumple la aproximación las ecuaciones. Son vectores distintos. La relación entre ellos se obtiene sustituyendo $\mathbf b=A\mathbf x$:

$$
\boxed{\mathbf r=A\overline{\mathbf x}-A\mathbf x
=A(\overline{\mathbf x}-\mathbf x)=A\mathbf e}.
$$

Si el residuo es exactamente nulo, la invertibilidad da $\mathbf e=A^{-1}\mathbf r=0$. Recíprocamente, error nulo implica residuo nulo. Esta equivalencia corresponde a aritmética exacta; un cero computado puede estar afectado por la precisión de la evaluación.

La pregunta pendiente es más delicada: ¿un residuo pequeño garantiza error pequeño? La equivalencia entre ceros no responde esa pregunta. Una transformación invertible puede alterar mucho tamaños sin llevar un vector no nulo a cero. La clase termina dejando el análisis cuantitativo para la siguiente, donde se usarán las normas recién construidas.
