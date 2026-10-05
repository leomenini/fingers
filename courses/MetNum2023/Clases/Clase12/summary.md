# Resumen Clase 12 — Lagrange, Newton y error de interpolación

## Índice

1. [El problema y la base de Lagrange](#1-el-problema-y-la-base-de-lagrange)
2. [Ejemplo y evaluación](#2-ejemplo-y-evaluación)
3. [Newton y diferencias divididas](#3-newton-y-diferencias-divididas)
4. [Qué significa aproximar una función](#4-qué-significa-aproximar-una-función)
5. [Teorema del error](#5-teorema-del-error)
6. [Demostración mediante Rolle](#6-demostración-mediante-rolle)
7. [Cotas y efecto de agregar nodos](#7-cotas-y-efecto-de-agregar-nodos)

## 1. El problema y la base de Lagrange

Dados $n+1$ nodos distintos $x_0,\ldots,x_n$ y valores $y_0,\ldots,y_n$, buscamos el único polinomio $p_n$ de grado menor o igual que $n$ tal que $p_n(x_j)=y_j$. La existencia y unicidad ya se probaron. Resolver un sistema de Vandermonde en la base monomial es una posibilidad, pero su mal condicionamiento motiva otras representaciones del mismo polinomio.

La **base de Lagrange** adapta sus elementos a los nodos. Para cada $k$ se construye un polinomio que vale uno en $x_k$ y cero en todos los demás:

$$
L_n^k(x_j)=\begin{cases}1,&j=k,\\0,&j\ne k.\end{cases}
$$

¿Cómo se consigue? Para anularlo en cada $x_j$ con $j\ne k$, se multiplica por $x-x_j$. Este producto tiene $n$ factores, por lo tanto grado $n$. En $x_k$ no se anula, pues los nodos son distintos. Dividir por su valor en ese nodo normaliza el resultado a uno:

$$
\boxed{L_n^k(x)=\prod_{\substack{j=0\\j\ne k}}^n\frac{x-x_j}{x_k-x_j}.}
$$

El denominador es una constante respecto de $x$. No se incluye el factor con $j=k$: además de destruir la normalización, produciría una división por cero. Las propiedades de evaluación quedan visibles en la matriz

$$
\begin{pmatrix}
L_n^0(x_0)&L_n^1(x_0)&\cdots&L_n^n(x_0)\\
L_n^0(x_1)&L_n^1(x_1)&\cdots&L_n^n(x_1)\\
\vdots&\vdots&\ddots&\vdots\\
L_n^0(x_n)&L_n^1(x_n)&\cdots&L_n^n(x_n)
\end{pmatrix}
=\begin{pmatrix}1&0&\cdots&0\\0&1&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&1\end{pmatrix}.
$$

Esta escritura despliega las condiciones explicadas verbalmente; no requiere resolver otro sistema. Ahora se pondera cada función por el dato que debe aportar:

$$
\boxed{p_n(x)=\sum_{k=0}^n y_k L_n^k(x).}
$$

Al evaluar en $x_j$, todos los sumandos salvo el de índice $j$ desaparecen. El que queda es $y_j\cdot1$. Además, la suma tiene grado a lo sumo $n$. Cumple así las condiciones que caracterizan al interpolante; por unicidad es el mismo que se obtendría con Vandermonde, aunque esté escrito de otra manera.

## 2. Ejemplo y evaluación

La clase retoma los datos

$$
(x_0,x_1,x_2)=\left(\frac14,1,\frac52\right),\qquad
(y_0,y_1,y_2)=\left(-\frac34,-1,\frac32\right).
$$

Los tres polinomios de Lagrange se construyen suprimiendo sucesivamente el factor correspondiente al nodo donde deben valer uno:

$$
\begin{aligned}
L_2^0(x)&=\frac{(x-1)(x-5/2)}{(1/4-1)(1/4-5/2)}
=\frac{16}{27}(x-1)(x-5/2),\\
L_2^1(x)&=\frac{(x-1/4)(x-5/2)}{(1-1/4)(1-5/2)}
=-\frac89(x-1/4)(x-5/2),\\
L_2^2(x)&=\frac{(x-1/4)(x-1)}{(5/2-1/4)(5/2-1)}
=\frac8{27}(x-1/4)(x-1).
\end{aligned}
$$

El interpolante es

$$
p_2(x)=-\frac34L_2^0(x)-L_2^1(x)+\frac32L_2^2(x)
=-\frac49-\frac{13}{9}x+\frac89x^2.
$$

La representación cambia, no la función. En la base monomial los coeficientes son $(-4/9,-13/9,8/9)$; en la base de Lagrange son directamente los datos $(-3/4,-1,3/2)$. Los factores muestran las raíces de cada función de base y evitan perder de vista para qué se construyó cada una.

El siguiente pseudocódigo escribe de manera explícita la evaluación por productos y suma descrita en clase. Recibe nodos distintos, sus valores y un punto $z$; devuelve $p_n(z)$. Los índices y nombres son una convención editorial, no una transcripción literal de un programa proyectado.

```text
valor = 0
para k = 0,...,n:
    base = 1
    para j = 0,...,n:
        si j != k:
            base = base * (z-x[j])/(x[k]-x[j])
    valor = valor + y[k]*base
devolver valor
```

La variable `base` empieza en uno porque acumula un producto. El bucle interior recorre todos los factores de $L_n^k(z)$ y omite el índice $k$. Cuando termina, se multiplica por $y_k$ y se agrega a `valor`, que acumula una suma y por eso se inicializó en cero. La salida no es un vector de coeficientes monomiales: es el valor del polinomio en el punto pedido. Para varios puntos de evaluación se repite esta operación.

Si cambian solamente los $y_k$, los polinomios de base permanecen iguales: dependen de los nodos, no de las alturas. Si se agrega un nodo, todos los productos cambian y hay que reconstruir la base. Esta diferencia motiva Newton. La clase también señala que evaluar la expresión de Lagrange requiere realizar sus productos; evitar el sistema de Vandermonde no significa que toda operación de interpolación carezca de problemas numéricos.

## 3. Newton y diferencias divididas

### 3.1 Una base que permite agregar nodos

La demostración inductiva de existencia ya había construido $p_k$ corrigiendo $p_{k-1}$ mediante un producto que se anula en los nodos anteriores. Repetir esa construcción da la **forma de Newton**:

$$
\begin{aligned}
p_n(x)={}&a_0+a_1(x-x_0)+a_2(x-x_0)(x-x_1)\\
&+\cdots+a_n\prod_{j=0}^{n-1}(x-x_j).
\end{aligned}
$$

El término de índice $k$ no altera ninguno de los valores en $x_0,\ldots,x_{k-1}$. Si se agrega $x_{n+1}$, se mantiene todo lo calculado y se incorpora un nuevo término con el producto hasta $x_n$. Esta estructura explica la ventaja de Newton para ampliar una tabla de datos.

El docente menciona la evaluación anidada mediante Horner y remite a los apuntes, pero no la desarrolla. Aquí se conserva esa referencia sin agregar un algoritmo de Horner que no fue explicado.

### 3.2 Construcción del árbol de diferencias

Los coeficientes se obtienen de las **diferencias divididas**. La columna inicial contiene los datos, y cada nivel resta dos entradas del nivel anterior y divide por la distancia entre los nodos extremos involucrados:

$$
f[x_i]=y_i,\qquad
f[x_i,\ldots,x_{i+k}]
=\frac{f[x_{i+1},\ldots,x_{i+k}]-f[x_i,\ldots,x_{i+k-1}]}{x_{i+k}-x_i}.
$$

No se divide siempre por la separación de nodos consecutivos. Esa separación corresponde al primer nivel; en los siguientes se usan los extremos del grupo completo. Para los datos del ejemplo:

$$
\begin{aligned}
f[x_0,x_1]&=\frac{-1-(-3/4)}{1-1/4}=-\frac13,\\
f[x_1,x_2]&=\frac{3/2-(-1)}{5/2-1}=\frac53,\\
f[x_0,x_1,x_2]&=\frac{5/3-(-1/3)}{5/2-1/4}=\frac89.
\end{aligned}
$$

El árbol queda desplegado en una tabla triangular. Los espacios vacíos no representan ceros: son entradas que no se necesitan.

$$
\begin{array}{c|r|r|r}
\text{nodo}&\text{orden 0}&\text{orden 1}&\text{orden 2}\\\hline
x_0=1/4&-3/4&-1/3&8/9\\
x_1=1&-1&5/3&\\
x_2=5/2&3/2&&
\end{array}
$$

Tomando la entrada que empieza en $x_0$ en cada orden se obtienen $a_0=-3/4$, $a_1=-1/3$ y $a_2=8/9$. Por tanto,

$$
\boxed{p_2(x)=-\frac34-\frac13(x-1/4)+\frac89(x-1/4)(x-1).}
$$

Es el mismo polinomio que antes. La clase muestra la regla para obtener los coeficientes, pero explícitamente no demuestra que las diferencias divididas produzcan siempre los coeficientes de Newton. Se menciona la posibilidad de una demostración inductiva; no se completa aquí.

### 3.3 Pseudocódigo de la tabla

Para hacer inequívoco el recorrido del árbol, denotamos por $D[i,k]$ la diferencia de orden $k$ que empieza en $x_i$.

```text
para i = 0,...,n:
    D[i,0] = y[i]
para k = 1,...,n:
    para i = 0,...,n-k:
        D[i,k] = (D[i+1,k-1]-D[i,k-1])/(x[i+k]-x[i])
para k = 0,...,n:
    a[k] = D[0,k]
devolver a
```

Primero se copian los datos porque las diferencias de orden cero no requieren cuentas. Luego se avanza por orden: toda la columna $k-1$ debe estar disponible antes de construir la columna $k$. En esa columna sólo existen $n-k+1$ entradas, de ahí el límite del bucle interior. La resta combina dos grupos consecutivos, y el denominador usa el primer y último nodo de su unión. Finalmente se lee la primera entrada de cada columna para obtener la expansión que comienza en $x_0$.

Agregar un nodo al final exige calcular las nuevas diferencias que lo involucran; las anteriores no cambian. La estructura triangular permite ver qué partes del cálculo se conservan. No debe confundirse esta ampliación con mover un nodo ya usado: en ese caso cambian denominadores y diferencias existentes.

## 4. Qué significa aproximar una función

Hasta aquí los $y_i$ podían ser datos sueltos. Ahora se supone $y_i=f(x_i)$ para una función dada, y se pregunta qué tan lejos queda $p_n$ de $f$ entre los nodos. Pasar exactamente por las muestras no resuelve esa pregunta: ambas curvas pueden separarse en el interior.

La figura conceptual muestra una curva y su interpolante que coinciden en tres puntos. La distancia relevante es vertical, $|f(x)-p_n(x)|$, a igual abscisa; no la distancia geométrica más corta entre dos curvas. El audio no identifica la fórmula de la primera curva negra dibujada, por lo que no se le atribuye una función numérica específica.

Para medir el peor error se define

$$
\|\varphi\|_{\infty,I}=\sup_{x\in I}|\varphi(x)|.
$$

El supremo permite hablar de una cota superior aunque no se alcance. En adelante las funciones serán continuas y $I=[a,b]$ será cerrado y acotado; por el teorema de Weierstrass el valor máximo existe y puede escribirse `max` en lugar de `sup`. Se menciona que otras aplicaciones usan otras normas, como la norma $L^2$ en problemas de Fourier, pero el análisis de esta clase se concentra en la norma infinito.

El objetivo será controlar $\|f-p_n\|_{\infty,I}$. Que este número tienda a cero significa **convergencia uniforme**: un único control sirve para todos los puntos del intervalo, no sólo para cada nodo por separado.

## 5. Teorema del error

Sea $f\in C^{n+1}([a,b])$, sean $x_0,\ldots,x_n$ nodos distintos de ese intervalo y sea $p_n$ su interpolante de grado a lo sumo $n$. Entonces para cada $x\in[a,b]$ existe $\gamma_x\in(a,b)$ tal que

$$
\boxed{f(x)-p_n(x)=\frac{f^{(n+1)}(\gamma_x)}{(n+1)!}\prod_{j=0}^n(x-x_j).}
$$

La regularidad exige derivadas continuas hasta orden $n+1$. El punto $\gamma_x$ depende de $x$ y el teorema no entrega un procedimiento para hallarlo. La igualdad es exacta, pero todavía no es la cota uniforme buscada: será el paso intermedio para conseguirla.

Definimos el **error** y el **polinomio nodal** por

$$
e_n(x)=f(x)-p_n(x),\qquad \omega_n(x)=\prod_{j=0}^n(x-x_j).
$$

El signo del error es el opuesto al usado antes para sistemas lineales. Al tomar valor absoluto no afecta el análisis. Aunque el subíndice sea $n$, $\omega_n$ tiene grado $n+1$ y coeficiente principal uno. Esta distinción es decisiva al derivarlo.

## 6. Demostración mediante Rolle

### 6.1 Fijar el punto y fabricar ceros

Si $x$ es uno de los nodos, tanto $e_n(x)$ como $\omega_n(x)$ son cero y la fórmula ya vale. Para los demás puntos, $\omega_n(x)\ne0$. Se fija uno de ellos y se introduce una variable distinta, $t$:

$$
g(t)=e_n(t)-\frac{e_n(x)}{\omega_n(x)}\omega_n(t).
$$

La razón $e_n(x)/\omega_n(x)$ es una constante respecto de $t$. No hace falta conocerla numéricamente para razonar con ella. Como $f$ es $C^{n+1}$ y se le restan polinomios, $g$ también es $C^{n+1}$.

En cada nodo, $e_n(x_i)=0$ por interpolación y $\omega_n(x_i)=0$ por construcción. Así,

$$
g(x_i)=0-\frac{e_n(x)}{\omega_n(x)}\,0=0.
$$

Hay además un cero deliberadamente creado en el punto fijo:

$$
g(x)=e_n(x)-\frac{e_n(x)}{\omega_n(x)}\omega_n(x)=0.
$$

Se han encontrado $n+2$ ceros distintos. Este es el motivo de la función auxiliar: agrega un cero a los que ya proporcionaba la interpolación.

### 6.2 Contar ceros de las derivadas

Ordenamos esos $n+2$ puntos. Entre cada par consecutivo, Rolle garantiza un cero de $g'$. Los intervalos abiertos son disjuntos, de modo que se obtienen al menos $n+1$ ceros distintos. Aplicando otra vez Rolle entre ceros consecutivos de $g'$, se obtienen al menos $n$ ceros de $g''$.

El dibujo de ceros intercalados permite seguir la repetición sin perder la cuenta:

$$
\begin{array}{c|ccccc}
\text{función}&g&g'&g''&\cdots&g^{(n+1)}\\\hline
\text{ceros garantizados}&n+2&n+1&n&\cdots&1
\end{array}
$$

La regularidad disponible permite repetir el argumento hasta ese orden. Llamamos $\gamma_x$ a uno de los ceros de $g^{(n+1)}$. Está en el interior del intervalo porque Rolle produce puntos estrictamente entre sus extremos. No necesitamos identificarlo.

### 6.3 Derivar y despejar

Al derivar $e_n=f-p_n$ un total de $n+1$ veces, el polinomio $p_n$ desaparece porque tiene grado a lo sumo $n$. Por eso $e_n^{(n+1)}=f^{(n+1)}$. Por otra parte,

$$
\omega_n(t)=t^{n+1}+\text{términos de grado menor},\qquad
\omega_n^{(n+1)}(t)=(n+1)!.
$$

Cada derivación baja un factor sucesivo $n+1,n,\ldots,1$ del término principal; los demás términos desaparecen. La constante que multiplicaba a $\omega_n$ no se deriva. Evaluar en el cero encontrado da

$$
0=g^{(n+1)}(\gamma_x)
=f^{(n+1)}(\gamma_x)-\frac{e_n(x)}{\omega_n(x)}(n+1)!.
$$

Pasando el segundo término al otro lado y multiplicando por $\omega_n(x)/(n+1)!$, se recupera exactamente la fórmula del teorema. La técnica importante es fabricar ceros y aplicar Rolle repetidamente; será reutilizada con modificaciones para otros tipos de interpolación.

## 7. Cotas y efecto de agregar nodos

Tomando valores absolutos en la igualdad y usando que $\gamma_x\in I$, se obtiene primero una cota que conserva la dependencia del punto:

$$
|e_n(x)|\le\frac{\|f^{(n+1)}\|_{\infty,I}}{(n+1)!}|\omega_n(x)|.
$$

Después se acota $|\omega_n(x)|$ por su máximo en $I$. El lado derecho ya no depende de $x$; como la desigualdad vale para todo punto, se puede tomar máximo también a la izquierda:

$$
\boxed{\|f-p_n\|_{\infty,I}\le
\frac{\|f^{(n+1)}\|_{\infty,I}\,\|\omega_n\|_{\infty,I}}{(n+1)!}.}
$$

Son dos pasos distintos: reemplazar un factor variable por una cota uniforme y luego maximizar el error. Intervienen tres cantidades: el tamaño de la derivada, el polinomio nodal y el factorial. El factorial crece y ayuda, pero las derivadas también pueden crecer con el orden; aumentar el grado no garantiza por sí solo una mejor aproximación.

El ejemplo final usa $f(x)=\sin x\cos x$ en $[0,1]$; la identificación queda también explícita en el repaso inicial de la clase 13. Se da la cota $\|f^{(n+1)}\|_{\infty,[0,1]}\le2^{n+1}$. El docente ilustra la primera derivada, $\cos^2x-\sin^2x$, acotando cada término por uno, pero no desarrolla la cuenta general de derivadas sucesivas.

Para cualquier elección de nodos distintos en $[0,1]$, cada $|x-x_j|\le1$. Por tanto $|\omega_n(x)|\le1$ en todo el intervalo y también $\|\omega_n\|_\infty\le1$. Resulta

$$
\boxed{\|f-p_n\|_{\infty,[0,1]}\le\frac{2^{n+1}}{(n+1)!}\longrightarrow0.}
$$

Aquí sí se garantiza convergencia uniforme al aumentar el grado. La demostración no necesita equiespaciado; la demostración gráfica posterior sí utiliza nodos equiespaciados. Se comparan dos y cuatro puntos y luego más nodos. Para once puntos se comenta un error observado del orden de $10^{-11}$, mientras que la cota teórica es del orden de $10^{-5}$. Para grado veinte se menciona una cota del orden de $10^{-14}$. Una cota superior puede ser mucho mayor que el error efectivo sin ser incorrecta.

La figura final reproduce la comparación de dos y cuatro nodos a partir de la función indicada; no inventa una serie de errores medidos por el programa proyectado. La próxima clase presenta una función para la cual aumentar el grado con nodos equiespaciados tiene un comportamiento muy diferente.
