# Resumen Clase 13 — Interpolación a Trozos

## Índice

1. [Motivación: el fenómeno de Runge](#1-motivación-el-fenómeno-de-runge)
2. [Dos salidas: mejores nodos o interpolar a trozos](#2-dos-salidas-mejores-nodos-o-interpolar-a-trozos)
3. [Interpolación lineal a trozos](#3-interpolación-lineal-a-trozos)
   - 3.1. [Definición](#31-definición)
   - 3.2. [Continuidad sin derivabilidad](#32-continuidad-sin-derivabilidad)
   - 3.3. [Cota del error](#33-cota-del-error)
   - 3.4. [Aplicación a la función de Runge](#34-aplicación-a-la-función-de-runge)
4. [De lineal a cúbica a trozos](#4-de-lineal-a-cúbica-a-trozos)
   - 4.1. [Por qué no cuadrática](#41-por-qué-no-cuadrática)
   - 4.2. [Por qué grado impar](#42-por-qué-grado-impar)
5. [La interpolante cúbica a trozos](#5-la-interpolante-cúbica-a-trozos)
   - 5.1. [El problema, con los $d_i$ dados](#51-el-problema-con-los-d_i-dados)
   - 5.2. [Fórmula explícita (base de Hermite)](#52-fórmula-explícita-base-de-hermite)
6. [Tres formas de elegir los $d_i$](#6-tres-formas-de-elegir-los-d_i)
7. [Interpolación de Hermite cúbica a trozos](#7-interpolación-de-hermite-cúbica-a-trozos)
   - 7.1. [Definición](#71-definición)
   - 7.2. [Teorema del error](#72-teorema-del-error)
   - 7.3. [Idea de la demostración](#73-idea-de-la-demostración)

---

## 1. Motivación: el fenómeno de Runge

La clase retoma el teorema de error de interpolación probado la clase
anterior (Clase 12): dado un polinomio interpolante $p_n$ de grado $\le n$
por $n+1$ nodos $x_0,\dots,x_n \in [a,b]$,

$$f(x) - p_n(x) = \frac{f^{(n+1)}(\gamma_x)}{(n+1)!}\,\omega_n(x), \qquad \omega_n(x) = \prod_{i=0}^n (x-x_i),$$

para cierto $\gamma_x$ no controlable. La cota resultante depende de tres
factores: la derivada de orden $n+1$ de $f$, el factorial $(n+1)!$ (que
ayuda, porque crece muy rápido) y el **polinomio nodal** $\omega_n$ (que
puede ayudar o no, según cómo se elijan los nodos).

Se retoma el ejemplo de la **función de Runge**,

$$f(x) = \frac{1}{1+25x^2}, \qquad x \in [-1,1],$$

interpolada con nodos equiespaciados de grado creciente. A diferencia del
ejemplo anterior ($\mathrm{sen}(x)\cos(x)$, donde la interpolante convergía
muy bien), acá la interpolante **no converge** en norma del supremo: para
$n$ grande aparecen oscilaciones violentas cerca de los extremos del
intervalo (el fenómeno se ve con claridad al graficar, aunque en el centro
del intervalo la aproximación es buena).

> **Por qué pasa esto.** Con nodos equiespaciados, el polinomio nodal
> $\omega_n$ no ayuda ni perjudica "a propósito": simplemente puede volverse
> enorme. Para la función de Runge, las derivadas de orden alto crecen tan
> rápido que ni el factorial $(n+1)!$ del denominador alcanza para
> compensar, y la cota (y el error real) diverge.

**Mensaje general:** si una función tiene derivadas de orden alto que crecen
rápido, hacer interpolación polinomial de grado alto es mala idea.

---

## 2. Dos salidas: mejores nodos o interpolar a trozos

Como el factor $f^{(n+1)}$ y el factorial $(n+1)!$ no son negociables (son
datos del problema), la única palanca disponible es el polinomio nodal
$\omega_n$. Se mencionan dos estrategias:

1. **Elegir mejor los nodos** — los **nodos de Chebyshev** (construidos
   proyectando una partición uniforme de un círculo sobre el diámetro)
   minimizan $\|\omega_n\|_\infty$ y evitan el fenómeno de Runge cerca de los
   bordes. La clase los muestra brevemente (con 5, 20 y 50 nodos la curva
   mejora notoriamente), pero **no se desarrollan más**: quedan mencionados
   como una alternativa válida, sin demostración ni fórmula de error propia
   en esta clase.
2. **Interpolar a trozos con grado bajo** — en vez de un único polinomio de
   grado alto (con mucha "libertad para oscilar"), particionar el intervalo
   en subintervalos chicos y usar un polinomio de grado bajo en cada uno.
   Caso extremo: una función **lineal** no puede tener un máximo local, así
   que no puede oscilar. Ésta es la estrategia que desarrolla el resto de la
   clase.

> **Cuándo vale la pena.** Para una función "linda" como $\mathrm{sen}(x)\cos(x)$,
> interpolar a trozos no aporta nada — conviene el interpolante global de
> grado alto. La interpolación a trozos se justifica cuando **no se pueden
> elegir los nodos** (o cuando elegirlos como Chebyshev no alcanza) y la
> función tiene derivadas de orden alto grandes.

---

## 3. Interpolación lineal a trozos

### 3.1. Definición

Dados $(x_i, y_i)$, $i=0,\dots,n$, con $x_0 < x_1 < \dots < x_n$, se define
la interpolante lineal a trozos $L: [x_0,x_n] \to \mathbb{R}$ como la función
que, restringida a cada subintervalo $[x_i, x_{i+1}]$, es el (único)
polinomio de grado $\le 1$ que interpola $(x_i,y_i)$ y $(x_{i+1},y_{i+1})$:

$$L(x) = y_i + (x - x_i)\,\frac{y_{i+1}-y_i}{x_{i+1}-x_i}, \qquad x \in [x_i, x_{i+1}].$$

Es literalmente "unir los puntos con segmentos de recta" — la existencia no
plantea ningún problema porque ya se sabe interpolar por dos puntos.

### 3.2. Continuidad sin derivabilidad

$L$ es **continua** por construcción (los segmentos comparten extremos), pero
**no es derivable** en los nodos interiores en general (salvo que $f$ sea
constante) — hay un "pico" en cada $x_i$.

### 3.3. Cota del error

Si los $(x_i,y_i)$ provienen de evaluar una función $f$, se reutiliza el
teorema de error de interpolación de la clase anterior, pero **aplicado
localmente**: para $x \in [x_i,x_{i+1}]$ existe $\gamma_x \in (x_i,x_{i+1})$
tal que

$$f(x) - L(x) = \frac{f''(\gamma_x)}{2}\,(x-x_i)(x-x_{i+1}).$$

Es exactamente el teorema de la clase anterior particularizado a $n=1$ en el
subintervalo $[x_i,x_{i+1}]$ en vez de en todo $[a,b]$.

Acotando: $(x-x_i)(x-x_{i+1})$ (con signo cambiado para que sea positivo) es
una parábola que vale $0$ en ambos extremos y, por simetría, alcanza su
máximo en el punto medio, donde vale $\frac{(x_{i+1}-x_i)^2}{4}$. Tomando el
peor caso sobre todos los subintervalos:

$$
\boxed{\;\|f - L\|_\infty \;\le\; \frac{\|f''\|_{\infty,[x_0,x_n]}}{8}\,h^2\;},
\qquad h = \max_i (x_{i+1}-x_i).
$$

> **De dónde sale el 8.** Sale de combinar el $2$ del $2!$ en el denominador
> del teorema con el $4$ del máximo de la parábola $(x-x_i)(x-x_{i+1})$.

### 3.4. Aplicación a la función de Runge

Con $n+1$ nodos equiespaciados en $[-1,1]$, $h = \dfrac{2}{n}$. La derivada
segunda de la función de Runge,

$$f''(x) = \frac{50\,(75x^2-1)}{(1+25x^2)^3},$$

alcanza su máximo en valor absoluto en $x=0$, donde vale $50$ (dato que se da
sin demostrarlo formalmente en la clase — se justifica cualitativamente
mirando el gráfico: la derivada segunda mide "cuán rápido cambia la
pendiente", y eso es máximo en el centro, donde la función pasa de crecer a
decrecer más bruscamente; hacia los extremos la función se parece a una
recta y $f''$ es chica).

$$
\|f - L\|_\infty \;\le\; \frac{50}{8}\cdot\frac{4}{n^2} \;=\; \frac{25}{n^2}
\;\xrightarrow[n\to\infty]{}\; 0.
$$

> **Contraste clave con la clase anterior.** Con los mismos nodos
> equiespaciados que producían el fenómeno de Runge en la interpolación
> global de grado alto, la interpolación **lineal a trozos** converge
> uniformemente. El precio es una curva visualmente "tosca" (llena de picos),
> pero cumple el objetivo de convergencia en norma infinito.

---

## 4. De lineal a cúbica a trozos

### 4.1. Por qué no cuadrática

Se busca ahora un interpolante a trozos **derivable**, no solo continuo: que
en cada nodo interior $x_i$ coincidan tanto el valor como la derivada por
izquierda y por derecha. Para un intervalo interior $[x_i,x_{i+1}]$ eso son
**cuatro condiciones**:

$$p(x_i)=y_i,\quad p(x_{i+1})=y_{i+1},\quad p'(x_i)=d_i,\quad p'(x_{i+1})=d_{i+1}.$$

Un polinomio cuadrático tiene sólo **tres** grados de libertad — no alcanzan
para las cuatro condiciones. Un polinomio **cúbico** tiene exactamente
cuatro coeficientes, así que el sistema queda determinado (y es a lo sumo un
sistema $4\times 4$, resoluble por ejemplo a la Vandermonde, aunque no se
resuelve en el pizarrón).

### 4.2. Por qué grado impar

En general estos interpolantes a trozos se toman de **grado impar**: un
polinomio de grado impar tiene una cantidad **par** de coeficientes, lo que
encaja con imponer pares de condiciones (valor + derivadas de distintos
órdenes) en cada extremo del subintervalo.

> Se menciona además, sin desarrollarlo, que una ventaja práctica de trabajar
> a trozos (frente a un interpolante global) es que agregar un nodo nuevo
> sólo obliga a recalcular el (o los) subintervalo(s) afectados, no toda la
> interpolante.

---

## 5. La interpolante cúbica a trozos

### 5.1. El problema, con los $d_i$ dados

Se plantea el problema suponiendo, por ahora, que además de los datos
$(x_i,y_i)$ también se conocen valores deseados de la derivada en cada nodo,
$d_i$ (de dónde salen esos $d_i$ es la pregunta que se responde en la
§6). El problema es: hallar $P:[x_0,x_n]\to\mathbb{R}$ tal que, en cada
subintervalo, $P$ sea un polinomio de grado $\le 3$ con

$$P(x_i)=y_i, \qquad P'(x_i)=d_i \qquad \text{para todo } i.$$

### 5.2. Fórmula explícita (base de Hermite)

Con $s = x-x_i$ la variable local dentro del subintervalo y $h_i =
x_{i+1}-x_i$ su longitud, la interpolante en $[x_i,x_{i+1}]$ es

$$
P(x) = y_i\,\frac{(h_i-s)^2(h_i+2s)}{h_i^3}
     \;+\; y_{i+1}\,\frac{s^2(3h_i-2s)}{h_i^3}
     \;+\; d_i\,\frac{s(s-h_i)^2}{h_i^2}
     \;+\; d_{i+1}\,\frac{s^2(s-h_i)}{h_i^2}.
$$

> **Verificación en los extremos** (como se hace en clase): en $s=0$
> sobreviven sólo los términos sin $s$, y queda $P=y_i$; en $s=h_i$ sobrevive
> sólo el término de $y_{i+1}$, y queda $P=y_{i+1}$ — consistente con lo
> pedido. (Puede verificarse igual de mecánicamente que $P'(x_i)=d_i$ y
> $P'(x_{i+1})=d_{i+1}$, aunque la clase no hace esa cuenta explícita.)

Es, en palabras del docente, "una de esas fórmulas que escribís una vez, la
copiás y la pegás": una vez fijados los $d_i$ (por cualquiera de los tres
métodos de la §6), esta fórmula da el interpolante cúbico a trozos completo.

---

## 6. Tres formas de elegir los $d_i$

La clase anuncia (y desarrolla en las próximas clases, "entre hoy y el
miércoles") tres estrategias distintas para fijar los $d_i$, con preguntas
distintas asociadas a cada una:

1. **Interpolación de Hermite** — los $d_i$ *vienen dados*: si los datos
   provienen de una función conocida $f$, se toma $d_i = f'(x_i)$. La
   pregunta relevante es cuán bien aproxima el interpolante a $f$ (se
   desarrolla en la §7).
2. **Splines** — los $d_i$ **no** vienen dados; se eligen de forma que la
   función resultante tenga **derivada segunda continua** (sea de clase
   $C^2$). No se desarrolla en esta clase.
3. **Interpolación que preserva forma (`pchip`)** — los datos son puntos
   sueltos, sin función subyacente conocida; los $d_i$ se eligen con
   fórmulas heurísticas para que la curva "se vea linda" (es lo que hace la
   función `pchip` de MATLAB/Octave). No se desarrolla en esta clase; para
   estos dos últimos casos no se plantea una pregunta de error contra una
   $f$ (no hay $f$), sino de estética de la curva.

---

## 7. Interpolación de Hermite cúbica a trozos

### 7.1. Definición

Dada $f:[x_0,x_n]\to\mathbb{R}$ derivable y nodos $x_0<\dots<x_n$, la
**interpolante de Hermite cúbica a trozos** es la función $P$ dada en cada
subintervalo por la fórmula de la §5.2 con $y_i = f(x_i)$ y $d_i = f'(x_i)$.
Por construcción, $P$ es continua, con derivada continua, coincide con $f$ en
los nodos y su derivada coincide con $f'$ en los nodos.

### 7.2. Teorema del error

A diferencia de la interpolante lineal a trozos, acá se dispone de más
información (los valores de la derivada), y la fórmula de error de la
Clase 12 "se queda corta": sólo explota la coincidencia de valores, no de
derivadas. El teorema (enunciado primero para un único intervalo $[a,b]$,
antes de pegar subintervalos):

> **Teorema.** Sea $f$ de clase $C^4$ en $[a,b]$ y sea $P$ el polinomio de
> grado $\le 3$ tal que $P(a)=f(a)$, $P(b)=f(b)$, $P'(a)=f'(a)$,
> $P'(b)=f'(b)$. Entonces para todo $x\in[a,b]$ existe $\gamma_x \in (a,b)$
> tal que
> $$
> \boxed{\;f(x)-P(x) \;=\; \frac{f^{(4)}(\gamma_x)}{24}\,(x-a)^2(x-b)^2\;}.
> $$

Comparado con el teorema de la clase anterior (con nodos simples), acá el
polinomio nodal aparece **al cuadrado**, aparece la derivada **cuarta**
(no la $n+1$-ésima genérica) y el denominador es $24$ (no un factorial
genérico). El docente es explícito en que el valor concreto del "24" no
importa memorizarlo — lo que importa es la técnica de la demostración.

### 7.3. Idea de la demostración

Es la misma técnica que en la Clase 12 (función auxiliar + Rolle repetido),
con un ajuste. Se define, para el $x$ fijado,

$$g(t) = f(t) - P(t) - E(x)\cdot \frac{(t-a)^2(t-b)^2}{(x-a)^2(x-b)^2}, \qquad E(x) := f(x)-P(x),$$

donde el factor $(t-a)^2(t-b)^2$ (en vez de $(t-a)(t-b)$, como en la clase
anterior) es la clave del ajuste: al elevarlo al cuadrado, **su derivada
también se anula** en $a$ y en $b$ (no sólo la función). Concretamente:

- $g$ se anula en $a$, $b$ y en $x$ → **tres** raíces de $g$.
- Además $g'(a) = f'(a) - P'(a) - (\text{término que se anula por la
  derivada del factor cuadrático en } a) = 0$, y análogamente $g'(b)=0$
  (usando que $P'(a)=f'(a)$, $P'(b)=f'(b)$ por definición de $P$).

Con esto, $g'$ tiene **cuatro** raíces en $(a,b)$ (dos entre $a$-$x$ y
$x$-$b$ por Rolle aplicado a $g$, más $a$ y $b$ mismos como raíces directas
de $g'$). Aplicando Rolle sucesivamente: $g''$ tiene al menos 3 raíces,
$g'''$ al menos 2, y $g^{(4)}$ al menos 1 — llamada $\gamma_x$. Igualando
$g^{(4)}(\gamma_x)=0$ y despejando se obtiene la fórmula del teorema.

> **La diferencia con la demostración anterior** está toda concentrada en
> ese cambio del factor lineal al cuadrático: ganar dos raíces adicionales
> de $g'$ (en $a$ y en $b$) es lo que permite llegar hasta la derivada cuarta
> en vez de quedarse en la $(n+1)$-ésima genérica del caso simple.

*Clase que viene: splines cúbicos (elegir los $d_i$ para $C^2$) e
interpolación que preserva forma (`pchip`).*
