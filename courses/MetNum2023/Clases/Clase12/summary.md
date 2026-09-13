# Resumen Clase 12 — Error de Interpolación

## Índice

1. [La forma de Lagrange](#1-la-forma-de-lagrange)
   - 1.1 [Ejemplo](#11-ejemplo)
   - 1.2 [Luces y sombras de Lagrange](#12-luces-y-sombras-de-lagrange)
2. [La forma de Newton](#2-la-forma-de-newton)
   - 2.1 [Diferencias divididas: cómo calcular los coeficientes](#21-diferencias-divididas-cómo-calcular-los-coeficientes)
   - 2.2 [Ventajas de Newton](#22-ventajas-de-newton)
3. [Interpolando funciones desconocidas](#3-interpolando-funciones-desconocidas)
   - 3.1 [La norma del supremo](#31-la-norma-del-supremo)
4. [El teorema de error de interpolación](#4-el-teorema-de-error-de-interpolación)
   - 4.1 [Demostración](#41-demostración)
5. [Corolario: cota práctica del error](#5-corolario-cota-práctica-del-error)
6. [¿Más puntos siempre es mejor? Ejemplo con $\sin(x)\cos(x)$](#6-más-puntos-siempre-es-mejor-ejemplo-con-sinxcosx)

---

## 1. La forma de Lagrange

Segunda de tres formas de escribir el mismo polinomio interpolante, buscando
evitar el mal condicionamiento de Vandermonde (§4 de la Clase 11). En vez de
la base monomial, se usa una base **adaptada a los nodos** $x_0,\dots,x_n$.

**Polinomio base de Lagrange** $L_n^k$: el único polinomio de grado $\leq n$
tal que

$$L_n^k(x_j) = \begin{cases} 1 & j=k \\ 0 & j\neq k\end{cases}$$

(delta de Kronecker). Existe y es único por el teorema de existencia y
unicidad de la Clase 11 (interpolando los datos "todos cero salvo un 1 en
$x_k$"). Fórmula explícita:

$$L_n^k(x) = \prod_{\substack{i=0\\ i\neq k}}^{n} \frac{x - x_i}{x_k - x_i}$$

> **Por qué el denominador nunca es cero**: exactamente porque se exige
> $x_i$ distintos dos a dos (la misma hipótesis de siempre). El numerador
> tiene grado $n$ (correcto) y se anula en todos los nodos salvo $x_k$; el
> denominador es sólo un factor de normalización para que valga $1$ en
> $x_k$.

**Polinomio interpolante en base de Lagrange**:

$$\boxed{p_n(x) = \sum_{k=0}^{n} y_k\, L_n^k(x)}$$

Al evaluar en $x_j$, todos los términos se anulan salvo el $k=j$, que vale
$y_j$: la construcción es "evidente" una vez que se tiene la base.

### 1.1 Ejemplo

Mismos datos de la Clase 11: $(1/4,\,1),\ (1,\,-1),\ (5/2,\,3/2)$.

$$L_2^0(x) = \frac{(x-1)(x-5/2)}{(1/4-1)(1/4-5/2)}$$

(denominador $=27/16$ en el cálculo de clase). Análogamente $L_2^1$,
$L_2^2$; el polinomio final es $y_0L_2^0 + y_1L_2^1 + y_2L_2^2$, el
**mismo** polinomio que con Vandermonde, escrito en otra base.

### 1.2 Luces y sombras de Lagrange

**A favor**:

- **No hay sistema que resolver** → no hay problema de condicionamiento. El
  ejemplo patológico de la Clase 11 (interpolar $f\equiv 1$ con 25+ puntos)
  se calcularía de forma estable con Lagrange.
- **Corregir un dato es fácil**: si un $y_i$ está mal, sólo cambia un
  número en la combinación lineal final.

**En contra**:

- **Agregar un nodo obliga a recalcular toda la base**: cada $L_n^k$
  depende de **todos** los puntos, así que un punto nuevo invalida todos
  los polinomios base ya calculados.
- **Evaluar en un punto que no es nodo es caro**: hay que computar cada
  $L_n^k(x)$ por separado (un producto de $n$ factores cada uno), mucho más
  trabajo que evaluar el polinomio ya expandido de Vandermonde.
  > Esto encarece cualquier operación posterior sobre el polinomio
  > (derivar, integrar, hallar raíces), porque todas requieren evaluarlo
  > repetidamente.

## 2. La forma de Newton

Tercera forma. Recupera la **estructura de la demostración por inducción**
de la Clase 11 y la escribe explícitamente:

$$p_n(x) = a_0 + a_1(x-x_0) + a_2(x-x_0)(x-x_1) + \dots + a_n\prod_{i=0}^{n-1}(x-x_i)$$

Base: $\{1,\ (x-x_0),\ (x-x_0)(x-x_1),\ \dots\}$.

### 2.1 Diferencias divididas: cómo calcular los coeficientes

Método recursivo, con notación $f[x_0,\dots,x_k]$:

- **Orden 0**: $f[x_i] = y_i$.
- **Orden $k$**: $f[x_i,\dots,x_{i+k}] = \dfrac{f[x_{i+1},\dots,x_{i+k}] - f[x_i,\dots,x_{i+k-1}]}{x_{i+k}-x_i}$.

Los coeficientes de Newton son $a_k = f[x_0,\dots,x_k]$.

**Ejemplo trabajado** (mismos 3 puntos): $f[x_0]=-3/4$, $f[x_1]=-1$,
$f[x_2]=3/2$.

$$f[x_0,x_1] = \frac{-1-(-3/4)}{1-1/4} = -\frac13, \qquad f[x_1,x_2] = \frac{3/2-(-1)}{5/2-1} = \frac53$$

$$f[x_0,x_1,x_2] = \frac{5/3-(-1/3)}{5/2-1/4} = \frac{8}{9}$$

$$a_0=-\frac34,\quad a_1=-\frac13,\quad a_2=\frac89 \implies p_2(x) = -\frac34 -\frac13(x-\tfrac14) + \frac89(x-\tfrac14)(x-1)$$

(el mismo polinomio, verificable, que Vandermonde y Lagrange dieron).

> **Estructura de árbol**: se combinan pares consecutivos ($x_0x_1$,
> $x_1x_2$), luego esos resultados entre sí ($x_0x_1x_2$), etc. — un
> patrón de "pirámide" que sólo usa las diferencias ya calculadas.

### 2.2 Ventajas de Newton

- **No hay sistema que resolver** → estable, igual que Lagrange.
- **Incremental**: agregar un punto $(x_{n+1},y_{n+1})$ sólo agrega un
  término $a_{n+1}\prod_{i=0}^{n}(x-x_i)$ — **los coeficientes anteriores
  no cambian**, porque cada diferencia dividida $f[x_0,\dots,x_k]$ con
  $k<n+1$ no depende de $x_{n+1}$. Esto resuelve **ambos** problemas de
  Vandermonde a la vez (condicionamiento y no incrementalidad), a
  diferencia de Lagrange, que sólo resuelve el primero.
- **Evaluación eficiente**: la forma anidada se presta al **algoritmo de
  Horner** (mencionado, no desarrollado en clase — está en los apuntes).

> Con pocos puntos (3, por ejemplo) cualquiera de las tres formas sirve sin
> problema; las diferencias importan a partir de decenas de nodos.

## 3. Interpolando funciones desconocidas

Nuevo problema, mismo marco: existe una función $f$ que **no se conoce**,
sólo se tienen muestras $(x_i, f(x_i))$. El polinomio interpolante $p_n$ es
lo mejor que se puede construir sin conocer $f$. Pregunta central: **¿qué
tan lejos está $p_n$ de $f$?**

> Relevante, por ejemplo, para integrar $f$: si no se conoce $f$ pero sí se
> puede interpolarla, se integra el polinomio (que sí se sabe integrar) en
> su lugar — y hace falta saber cuánto error introduce esa sustitución.

### 3.1 La norma del supremo

Para medir la distancia entre funciones $\varphi$ en un intervalo $I$:

$$\|\varphi\|_{\infty,I} = \sup_{x\in I} |\varphi(x)|$$

(la convergencia en esta norma se llama **convergencia uniforme**). Si $I$
es cerrado y acotado (compacto) y $\varphi$ es continua, por Weierstrass el
supremo se alcanza: es un **máximo**. El curso trabaja siempre en esas
condiciones, así que usa "máximo" en vez de "supremo" de ahí en más.

**El objetivo**: acotar $\|f - p_n\|_{\infty,I}$.

## 4. El teorema de error de interpolación

**Teorema (clave de estas semanas)**: sea $f\in C^{n+1}([a,b])$ (derivable
$n+1$ veces con derivada $n+1$-ésima continua), $x_0,\dots,x_n\in[a,b]$
distintos, $p_n$ el polinomio interpolante por esos puntos. Entonces, para
todo $x\in[a,b]$, existe $\gamma_x\in(a,b)$ tal que

$$\boxed{f(x) - p_n(x) = \frac{f^{(n+1)}(\gamma_x)}{(n+1)!}\,\omega_n(x)}, \qquad \omega_n(x) := \prod_{i=0}^{n}(x-x_i)$$

donde $\omega_n$ es el **polinomio nodal** (grado $n+1$, a pesar del
subíndice $n$ — convención heredada de los apuntes). Notación: $e_n(x) :=
f(x)-p_n(x)$ (nótese el cambio de signo respecto a la convención de "tengo
menos quiero" usada en Sistemas Lineales — acá conviene al revés, sólo
importa el valor absoluto al final).

### 4.1 Demostración

Fijado $x\in[a,b]$: si $x$ coincide con algún nodo $x_i$, ambos lados de la
fórmula son $0$ trivialmente, así que se asume $x\neq x_i$ para todo $i$
(necesario además para que $\omega_n(x)\neq 0$ y la división tenga
sentido).

**Función auxiliar**: se define, en la variable $t$ (con $x$ fijo),

$$g(t) = e_n(t) - \frac{e_n(x)}{\omega_n(x)}\,\omega_n(t)$$

($e_n(x)/\omega_n(x)$ es una **constante**, ya que $x$ está fijo). Como
$e_n = f-p_n$ es diferencia de una $C^{n+1}$ y un polinomio, $g$ también es
$C^{n+1}$.

**Raíces de $g$**: en cada nodo $x_i$, $e_n(x_i)=0$ (el polinomio
interpola exactamente ahí) y $\omega_n(x_i)=0$, así que $g(x_i)=0$. Además
$g(x) = e_n(x) - e_n(x) = 0$ (los $\omega_n$ se cancelan). Con $n+1$ nodos
más el propio $x$: **$g$ tiene al menos $n+2$ raíces distintas** en $[a,b]$.

**Rolle, repetido**: $g$ es derivable ($C^{n+1}$), así que entre cada par
de raíces consecutivas de $g$ hay, por el teorema de Rolle, una raíz de
$g'$: **$g'$ tiene al menos $n+1$ raíces distintas**. Aplicando Rolle de
nuevo a $g'$: $g''$ tiene al menos $n$ raíces. Repitiendo sucesivamente
hasta la derivada $(n+1)$-ésima: **$g^{(n+1)}$ tiene al menos $1$ raíz** —
llamada $\gamma_x \in (a,b)$ (abierto, porque Rolle siempre produce una
raíz estrictamente entre las dos que la generan).

**Evaluar $g^{(n+1)}$ en $\gamma_x$**: como $e_n = f-p_n$ y $p_n$ tiene
grado $\leq n$, su derivada $(n+1)$-ésima es $0$; entonces
$e_n^{(n+1)} = f^{(n+1)}$. El término constante $e_n(x)/\omega_n(x)$
sobrevive la derivación sin cambiar. $\omega_n$ tiene grado exacto $n+1$
con coeficiente principal $1$ (es un producto de $n+1$ factores
$(t-x_i)$), así que $\omega_n^{(n+1)}(t) \equiv (n+1)!$ (constante). Por lo
tanto:

$$0 = g^{(n+1)}(\gamma_x) = f^{(n+1)}(\gamma_x) - \frac{e_n(x)}{\omega_n(x)}\,(n+1)!$$

Despejando $e_n(x)$ se obtiene exactamente la fórmula del teorema.
$\blacksquare$

## 5. Corolario: cota práctica del error

Tomando valor absoluto en la fórmula del teorema y acotando
$|f^{(n+1)}(\gamma_x)|$ por el máximo de $|f^{(n+1)}|$ en $[a,b]$ (ya que no
se sabe dónde cae $\gamma_x$):

$$|f(x)-p_n(x)| \leq \frac{\|f^{(n+1)}\|_{\infty,[a,b]}}{(n+1)!}\,|\omega_n(x)|, \qquad \forall x\in[a,b]$$

Y como esto vale para todo $x$, se puede acotar también $\omega_n(x)$ por
su norma del supremo y tomar máximo en ambos lados:

$$\boxed{\|f-p_n\|_{\infty,[a,b]} \leq \frac{\|f^{(n+1)}\|_{\infty,[a,b]}}{(n+1)!}\,\|\omega_n\|_{\infty,[a,b]}}$$

> **Tres ingredientes en competencia**: qué tan grande es la derivada
> $(n+1)$-ésima de $f$, el factorial $(n+1)!$ en el denominador (siempre
> "ayuda", crece muy rápido), y qué tan grande es el polinomio nodal.

## 6. ¿Más puntos siempre es mejor? Ejemplo con $\sin(x)\cos(x)$

No necesariamente: el factorial $(n+1)!$ compite contra el crecimiento de
$\|f^{(n+1)}\|_\infty$ con $n$. Si las derivadas de $f$ no crecen mucho, el
factorial gana y agregar puntos **siempre** mejora la aproximación. Si las
derivadas crecen muy rápido, agregar puntos puede empeorar. *(La clase
siguiente profundiza este último caso — el fenómeno de Runge.)*

**Ejemplo con $f(x)=\sin(x)\cos(x)$ en $I=[0,1]$**: las derivadas
sucesivas son combinaciones de $\sin$ y $\cos$ (acotados por $1$ en valor
absoluto), así que $\|f^{(n+1)}\|_\infty \leq 2$ para todo $n$ (cota
uniforme, no crece). Además, tomando nodos dentro de $[0,1]$, cada factor
$|x-x_i|\leq 1$, así que $\|\omega_n\|_\infty \leq 1$
**independientemente de cómo se elijan los nodos**. Entonces:

$$\|f-p_n\|_{\infty,[0,1]} \leq \frac{2^{n+1}}{(n+1)!} \xrightarrow[n\to\infty]{} 0$$

**Verificación numérica**: con 11 puntos (equiespaciados), el error ronda
$10^{-11}$. La cota teórica da $\sim 10^{-5}$ para grado 10 y $\sim
10^{-14}$ para grado 20 — agregar puntos "hace pedazos" el error en esta
función. *(Contraste explícito con la función de Runge de la clase
siguiente, donde el mismo razonamiento falla.)*
