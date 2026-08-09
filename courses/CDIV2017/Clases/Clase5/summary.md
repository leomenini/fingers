# Resumen Clase 5 — Orden en los reales, signos, intervalos y construcción de N por inducción

## Índice

1. [Recapitulación: R es un cuerpo](#1-recapitulación-r-es-un-cuerpo)
2. [Axiomas de orden total](#2-axiomas-de-orden-total)
3. [Orden amplio y orden estricto](#3-orden-amplio-y-orden-estricto)
4. [Reglas de las desigualdades](#4-reglas-de-las-desigualdades)
   - 4.1 [Suma: una traslación](#41-suma-una-traslación)
   - 4.2 [Producto: dilatación y contracción](#42-producto-dilatación-y-contracción)
   - 4.3 [Cociente](#43-cociente)
5. [El inverso y el orden](#5-el-inverso-y-el-orden)
6. [Signos: $\mathbb{R}^+$, $\mathbb{R}^-$ y la regla de los signos](#6-signos-mathbbr-mathbbr-y-la-regla-de-los-signos)
7. [Intervalos](#7-intervalos)
   - 7.1 [Los diez tipos de intervalo](#71-los-diez-tipos-de-intervalo)
   - 7.2 [Intersección de intervalos](#72-intersección-de-intervalos)
8. [Cuerpo totalmente ordenado y el axioma que falta](#8-cuerpo-totalmente-ordenado-y-el-axioma-que-falta)
9. [Construcción de $\mathbb{N}$](#9-construcción-de-mathbbn)
   - 9.1 [La función sucesor](#91-la-función-sucesor)
   - 9.2 [Conjuntos inductivos](#92-conjuntos-inductivos)
   - 9.3 [Definición de $\mathbb{N}$ sin puntos suspensivos](#93-definición-de-mathbbn-sin-puntos-suspensivos)
   - 9.4 [$\mathbb{N}$ es el subconjunto inductivo más pequeño](#94-mathbbn-es-el-subconjunto-inductivo-más-pequeño)
10. [Principio de inducción completa](#10-principio-de-inducción-completa)
    - 10.1 [Enunciado](#101-enunciado)
    - 10.2 [Intuición: los dominós](#102-intuición-los-dominós)
    - 10.3 [Demostración](#103-demostración)
    - 10.4 [Variante desde un $n_0$ arbitrario](#104-variante-desde-un-n_0-arbitrario)

---

## 1. Recapitulación: R es un cuerpo

La clase retoma la lista de 15 axiomas de $\mathbb{R}$ presentada la clase
anterior, de la cual ya se habían visto 14. El **grupo 1** (axiomas 1.1 a 1.4)
es el de la suma: **asociativa**, **conmutativa**, con **neutro** $0$ y con
**opuesto** $-x$ único para cada $x$. A partir del opuesto se define la resta:
$$x - y := x + (-y).$$

El **grupo 2** (axiomas 2.1 a 2.5) es el del producto: asociativo,
conmutativo, **distributivo** respecto de la suma (la novedad frente al grupo
1), con neutro $1 \neq 0$, y cada $x \neq 0$ tiene **inverso** único $x^{-1}$.
El cociente se define análogamente:
$$\frac{x}{y} := x \cdot y^{-1}.$$

Cuando un conjunto tiene una suma y un producto que cumplen los grupos 1 y 2,
se dice que es un **cuerpo**: se puede sumar, restar, multiplicar y dividir
"con alegría". $\mathbb{R}$ es un cuerpo, pero **no es el único ejemplo**. El
docente repasa candidatos propuestos por la clase:

- $\mathbb{Z}_2 = \{0,1\}$ con la suma módulo 2 ($0+0=0$, $0+1=1+0=1$,
  $1+1=0$) y el producto usual: es efectivamente un cuerpo (el más pequeño
  posible), pero **no** se trabajará con él porque le falta el orden total.
- $\mathbb{Q}$: cumple exactamente la misma lista de axiomas, luego es cuerpo.
- $\mathbb{C}$: también cumple la lista, luego es cuerpo.

> En este curso solo se usarán $\mathbb{Q}$ y $\mathbb{R}$. Se menciona que
> existen cuerpos finitos con 3, 5, 7, 11 elementos (en general, con $p$
> elementos si $p$ es primo), pero no se estudiarán.

## 2. Axiomas de orden total

El **grupo 3** agrega una relación de orden $\leq$ (orden **amplio**) sobre
$\mathbb{R}$, con cinco axiomas:

1. **Totalidad (tricotomía comparativa)**: para todo $x,y$, o bien
   $x \leq y$ o bien $y \leq x$ (siempre son comparables).
2. **Transitividad**: $x \leq y$ y $y \leq z$ implican $x \leq z$, para todo
   $x,y,z$.
3. **Antisimetría**: $x \leq y$ y $y \leq x$ implican $x = y$.
4. **Compatibilidad con la suma**: $x \leq y$ implica $x + z \leq y + z$, para
   todo $x,y,z$.
5. **Compatibilidad con el producto de no negativos**: si $x \geq 0$ y
   $y \geq 0$, entonces $xy \geq 0$.

Estos cinco axiomas, junto con los 9 algebraicos de los grupos 1 y 2, forman
la lista completa de 14 axiomas vista hasta ahora. Falta un decimoquinto
(§8), que es el que realmente distingue a $\mathbb{R}$ de $\mathbb{Q}$.

## 3. Orden amplio y orden estricto

El orden **estricto** se define a partir del amplio:
$$x < y \; :\Longleftrightarrow\; x \leq y \ \text{y} \ x \neq y.$$

Recíprocamente, el orden amplio se puede recuperar del estricto:
$$x \leq y \; \Longleftrightarrow\; x < y \ \text{o} \ x = y.$$

> Podría parecer más natural tomar $\leq$ como abreviatura de "$<$ o $=$"
> (el nombre lo sugiere), y de hecho se podría construir toda la teoría
> axiomatizando el orden estricto en vez del amplio; se obtendría una
> presentación **completamente equivalente**, solo cambiando la forma de los
> axiomas. Lo importante es tener claras las propiedades de ambos, no cuál se
> toma como primitivo.

## 4. Reglas de las desigualdades

### 4.1 Suma: una traslación

De los axiomas de orden y su combinación con la suma se obtiene una
**equivalencia lógica** (no solo una implicación en un sentido):
$$x \leq y \;\Longleftrightarrow\; x + z \leq y + z \;\Longleftrightarrow\; x - z \leq y - z, \qquad \forall x,y,z.$$

**Interpretación geométrica**: sumar $z$ a ambos miembros es **trasladar**
los dos puntos $x$ e $y$ de la recta por el mismo desplazamiento $z$; como
es el mismo movimiento para los dos, el orden relativo entre ellos no
cambia. Esto vale sea cual sea la posición de $0$ respecto de $x,y$.

También se tiene, tomando el opuesto:
$$x \leq y \;\Longleftrightarrow\; -y \leq -x.$$

> **Cuidado**: el paso al opuesto **invierte** el orden. Si $x$ está a la
> izquierda de $y$ en la recta, $-x$ queda a la **derecha** de $-y$. Esta
> propiedad no depende de las posiciones relativas de $x$, $y$ respecto de
> $0$. Las mismas dos equivalencias valen reemplazando $\leq$ por $<$.

La moraleja: sumar (o restar) una cantidad a una desigualdad **nunca da
problemas**: es una equivalencia lógica, y el razonamiento se puede invertir
en ambos sentidos.

### 4.2 Producto: dilatación y contracción

Multiplicar ambos miembros de una desigualdad por $z$ **sí es delicado**: el
resultado depende del **signo de $z$**.

- Si $z > 0$: $x \leq y \implies xz \leq yz$ (no se invierte el orden).
- Si $z < 0$: $x \leq y \implies xz \geq yz$ (se invierte el orden).
- Si $z = 0$: $x \leq y \implies xz \leq yz$ es cierto pero **inútil**, porque
  siempre da $0 \leq 0$: se **pierde información** y no se puede recuperar
  la desigualdad original dividiendo, porque no existe $0^{-1}$.

$$
\boxed{
\begin{aligned}
z>0 &: \quad x \leq y \iff xz \leq yz \\
z<0 &: \quad x \leq y \iff xz \geq yz
\end{aligned}}
$$

La **implicación recíproca** (ir "de vuelta", dividiendo por $z$) solo es
lícita cuando $z$ es **estrictamente** positivo o estrictamente negativo,
nunca cuando $z=0$: en ese caso cualquier par $x \ne y$ colapsa a
$0 \leq 0$, y no hay forma de reconstruir la desigualdad de partida.

**Lectura geométrica** (para $z$ positivo): multiplicar por $z>1$ es una
**dilatación** del segmento $[x,y]$; multiplicar por $0<z\leq 1$ es una
**contracción**. Para $z$ negativo se obtiene el mismo efecto de escala pero
además con **intercambio de posiciones** (lo que estaba más a la izquierda
pasa a estar más a la derecha):

| Caso | Efecto | ¿Intercambia posiciones? |
|---|---|---|
| $z \geq 1$ | dilatación | no |
| $0 \leq z \leq 1$ | contracción | no |
| $z \leq -1$ | dilatación | sí |
| $-1 \leq z \leq 0$ | contracción | sí |

> El docente insiste en que estas ideas geométricas (traslación para la
> suma, dilatación/contracción con o sin intercambio para el producto) son
> **más importantes que la manipulación simbólica**: "no van a sobrevivir en
> análisis si piensan que la matemática solo consiste en hacer cuentas sin
> entender el contenido geométrico". El curso podría llamarse igual de bien
> "geometría analítica con números".

### 4.3 Cociente

Las mismas reglas valen para el cociente entre ambos miembros de una
desigualdad (con $z \ne 0$):
$$
z>0: \; x \leq y \iff \frac{x}{z} \leq \frac{y}{z}, \qquad
z<0: \; x \leq y \iff \frac{x}{z} \geq \frac{y}{z}.
$$

> **Ejercicio propuesto en clase**: reescribir todas estas reglas con el
> orden estricto $<$. Cambian poco: los casos con $z=0$ simplemente
> **desaparecen** (no tienen sentido para $<$, porque $z=0$ fusiona a $x$ e
> $y$ en $0$), y en el resto basta reemplazar $\leq$ por $<$ y $\geq$ por
> $>$.

## 5. El inverso y el orden

Invertir ($x \mapsto x^{-1}$) es, como el opuesto, una operación que puede
intercambiar el orden — pero con una condición extra crucial: **ambos
números deben ser no nulos y tener el mismo signo**.

$$
\boxed{0 < x \leq y \;\Longrightarrow\; \frac{1}{y} \leq \frac{1}{x}}
\qquad\text{y análogamente para } x \leq y < 0.
$$

Cuando se cumple esta hipótesis (mismo signo, ambos no nulos), la relación
también se puede **invertir de nuevo** (aplicando el inverso una segunda
vez se recupera la desigualdad original).

**Verificación geométrica** con ejemplos concretos:

- Positivos: $2 \leq 3 \implies \tfrac12 \geq \tfrac13$ (el orden se
  invierte).
- Negativos: $-3 \leq -2 \implies -\tfrac13 \geq -\tfrac12$ (también se
  invierte).
- **Signos distintos**: $-2 \leq 3 \implies -\tfrac12 \leq \tfrac13$ — acá
  el orden **se mantiene**, porque el inverso de un negativo sigue siendo
  negativo y el de un positivo sigue siendo positivo, así que
  $1/x < 0 < 1/y$ automáticamente.

> **Advertencia central de la clase**: cada vez que aparece un inverso en
> una desigualdad hay que verificar **dos cosas** antes de concluir nada:
> que ambos lados son no nulos (si no, la expresión ni siquiera está bien
> definida) y que tienen el mismo signo (si no, no hay regla fija de
> inversión salvo el caso "signos distintos" descrito arriba). El docente
> lo remarca como una fuente típica de errores: "cuidado, hay un montón de
> trampas posibles, lo único posible es hacer pequeños dibujos".

## 6. Signos: $\mathbb{R}^+$, $\mathbb{R}^-$ y la regla de los signos

Para todo $x \in \mathbb{R}$ vale la **tricotomía**: exactamente una de las
tres opciones se cumple,
$$x < 0 \quad \text{o bien} \quad x = 0 \quad \text{o bien} \quad x > 0.$$

Esto parte a la recta real en tres piezas: la parte **negativa**, el
**cero**, y la parte **positiva**. Se definen por comprensión:
$$\mathbb{R}^+ = \{x \in \mathbb{R} : x > 0\}, \qquad \mathbb{R}^- = \{x \in \mathbb{R} : x < 0\},$$
con la **descomposición fundamental**
$$\mathbb{R} = \mathbb{R}^- \cup \{0\} \cup \mathbb{R}^+.$$

> **Nota histórico-anecdótica y de convención**: el docente cuenta que el
> cero tardó siglos en ser aceptado ("es muy suave con la adición pero es la
> bomba atómica con la multiplicación"). Sobre la convención de signo de
> $0$: en Francia se lo considera **ni positivo ni negativo** (la
> descomposición de arriba, con $0$ excluido de ambos conjuntos), mientras
> que en el mundo hispanohablante suele adoptarse la convención
> **inclusiva**, donde "positivo" significa $x\geq 0$ y "negativo" significa
> $x \leq 0$, de modo que el $0$ tiene "doble nacionalidad". El docente
> aclara que es **solo una cuestión de convención**, sin contenido
> matemático de fondo.

De los axiomas (no hay ningún axioma que lo postule directamente) se
**deducen** las reglas de los signos, tanto para la suma como para el
producto:

| Suma | Resultado | Producto | Resultado |
|---|---|---|---|
| $+ \ + \ +$ | $+$ | $+ \times +$ | $+$ |
| $+ \ + \ -$ | depende de cuál es mayor en valor absoluto | $+ \times -$ | $-$ |
| $- \ + \ -$ | $-$ | $- \times +$ | $-$ |
| | | $- \times -$ | $+$ |

> **Por qué importa demostrarlo y no memorizarlo**: ninguno de los 14
> axiomas menciona directamente "negativo por negativo es positivo"; es una
> **consecuencia** de las reglas algebraicas y de orden ya vistas
> (ejercicio propuesto: demostrar que si $x<0$ e $y<0$ entonces $xy>0$).
> El docente cuenta que este hecho —contraintuitivo incluso para niños— fue
> descubierto por los matemáticos árabes hacia el año 1000 (aunque los
> números negativos ya existían antes, en India desde el siglo VII y en
> China desde el siglo I, donde se entendían naturalmente en términos de
> yin y yang), y que Europa tardó unos 700 años más, hasta el siglo XVII,
> en aceptar los números negativos y el cero, por prejuicios culturales
> ("obra del demonio").

## 7. Intervalos

### 7.1 Los diez tipos de intervalo

Con el orden ya establecido se definen los intervalos por comprensión.
Dados $a \leq b$:
$$
[a,b] = \{x \in \mathbb{R} : a \leq x \leq b\}, \qquad
]a,b[ \ = \{x \in \mathbb{R} : a < x < b\},
$$
y de modo análogo los semiabiertos $[a,b[$ y $]a,b]$. Los semi-infinitos:
$$
\;]-\infty,a] = \{x : x \leq a\}, \quad ]-\infty,a[\ = \{x : x < a\},
$$
$$
[a,+\infty[\ = \{x : x \geq a\}, \quad ]a,+\infty[\ = \{x : x > a\}.
$$
A estos se agregan dos casos particulares: $]-\infty,+\infty[\ = \mathbb{R}$
(otro nombre, otra notación para $\mathbb{R}$) y el **conjunto vacío**
$\emptyset$, que también se considera un intervalo (aunque sin notación
propia como tal). En total, **diez tipos** de intervalo.

> **Cuidado con la hipótesis $a \leq b$**: la definición de $[a,b]$ (o
> cualquiera de sus variantes) solo tiene el sentido "esperado" cuando
> $a \leq b$. Si $a > b$, no existe ningún $x$ que sea a la vez
> $\geq a$ y $\leq b$, así que el conjunto que resulta de la fórmula es
> simplemente $\emptyset$ — **vacío pero perfectamente bien definido**, no
> un error.

### 7.2 Intersección de intervalos

Se plantea calcular, en general, la intersección $[a,b] \cap [c,d]$ (con
$a\leq b$, $c \leq d$). El docente hace notar que la respuesta **depende de
las posiciones relativas** de $a,b,c,d$ (si $b < c$ da vacío; si se
solapan, da otra cosa; etc.), y da la fórmula única que cubre todos los
casos:

$$
\boxed{[a,b] \cap [c,d] =
\begin{cases}
[\max(a,c), \min(b,d)] & \text{si } \max(a,c) \leq \min(b,d) \\
\emptyset & \text{en caso contrario}
\end{cases}}
$$

> **Ejercicio propuesto**: demostrar la fórmula considerando todos los casos
> posibles de posición relativa. El docente comenta su aplicación práctica
> en informática: al programar videojuegos, decidir si dos rectángulos (p.
> ej. dos personajes) se superponen se reduce a intersectar sus intervalos
> de coordenadas $x$ e $y$ con exactamente esta fórmula. Advierte que "la
> intersección de intervalos es mucho más complicada de lo que uno podría
> pensar" — hay muchos casos a distinguir, de los cuales en clase solo se
> verificaron dos.

## 8. Cuerpo totalmente ordenado y el axioma que falta

Cuando un conjunto cumple **simultáneamente** los axiomas de cuerpo (grupos
1 y 2) y los de orden total compatible (grupo 3), se dice que es un
**cuerpo totalmente ordenado**. Es una etiqueta que resume de una sola vez
los 14 axiomas ya vistos: en vez de enumerarlos uno por uno, un matemático
simplemente dice "$\mathbb{R}$ es un cuerpo totalmente ordenado".

$\mathbb{Q}$ también es un cuerpo totalmente ordenado (cumple exactamente
la misma lista de 14 axiomas). $\mathbb{C}$, en cambio, **no** lo es, porque
no admite un orden total compatible con su estructura de cuerpo; tampoco lo
es $\mathbb{Z}_2$.

Esto deja una pregunta abierta: si $\mathbb{Q}$ y $\mathbb{R}$ satisfacen
exactamente la misma lista de 14 axiomas, ¿**qué los distingue**? La
respuesta, presentada como *teaser* (adelanto sin desarrollar), es el
**decimoquinto axioma**, el **axioma de completitud**:

> Todo subconjunto **no vacío** de $\mathbb{R}$ y **superiormente acotado**
> tiene un **supremo**.

$\mathbb{Q}$ **no** cumple este axioma (de ahí la diferencia esencial entre
ambos cuerpos), pero las nociones de "superiormente acotado" y "supremo" no
se definen todavía —quedan para la clase siguiente—; solo se identifican
las palabras nuevas del enunciado (todo el resto, "subconjunto" y "no
vacío", ya es conocido).

## 9. Construcción de $\mathbb{N}$

Con la estructura de cuerpo totalmente ordenado ya establecida, la clase
pasa a construir formalmente algunos subconjuntos notables de
$\mathbb{R}$, comenzando por $\mathbb{N}$.

### 9.1 La función sucesor

Se define la función **sucesor** $s: \mathbb{R} \to \mathbb{R}$,
$$s(x) := x + 1.$$

Intuitivamente, $\mathbb{N}$ se construye a partir de $0$ aplicando el
sucesor repetidas veces: $1 = s(0) = 0+1$, $2 = s(1) = 1+1$,
$3 = s(2) = 2+1$, etc. La definición "de toda la vida"
$\mathbb{N} = \{0,1,2,\ldots\}$ es calificada de **"floja"**: casi todos
los elementos quedan escondidos detrás de los puntos suspensivos. El
objetivo de la clase es dar una definición **sin puntitos**.

### 9.2 Conjuntos inductivos

**Definición.** Un subconjunto $A \subseteq \mathbb{R}$ es **inductivo**
cuando cumple dos condiciones:

1. $0 \in A$.
2. $A$ es **estable por sucesor**: $x \in A \implies x+1 \in A$.

Ejemplos discutidos en clase:

| Conjunto | ¿Inductivo? | Razón |
|---|---|---|
| $[0,+\infty[$ | sí | contiene $0$; si $x\geq 0$ entonces $x+1\geq 0$ |
| $\{0,\tfrac12,1,\tfrac32,2,\ldots\}$ | sí | contiene $0$; sumar $1$ a cualquier elemento da otro elemento de la lista |
| $\mathbb{Z}$ | sí | contiene $0$ y es estable por sucesor |
| $\mathbb{Q}$ | sí | contiene $0$; la suma de un racional con $1$ es racional |
| positivos estrictos ($x>0$) | no | no contiene $0$ |
| $[0,42]$ | no | $42$ está, pero $s(42)=43$ no está |
| $[0,41]$ | no | $41$ está, pero $s(41)=42$ no está |

> El propio ejemplo de $\{0,\tfrac12,1,\tfrac32,\ldots\}$ generó una
> discusión en clase: un estudiante lo propuso como conjunto inductivo, a lo
> que el docente respondió que, efectivamente, lo es, pero que **describirlo
> así (con puntos suspensivos, generándolo paso a paso) ya usa
> implícitamente la idea de inducción** que se busca *fundamentar*, no
> presuponer.

### 9.3 Definición de $\mathbb{N}$ sin puntos suspensivos

Con la noción de conjunto inductivo ya disponible, se define:

$$
\boxed{n \text{ es un \textbf{entero natural}} \;:\Longleftrightarrow\; n \text{ pertenece a \emph{todos} los subconjuntos inductivos de } \mathbb{R}}
$$

y en consecuencia:
$$
\mathbb{N} := \{x \in \mathbb{R} : \forall A \subseteq \mathbb{R},\ (A \text{ inductivo} \implies x \in A)\}.
$$

Intuitivamente, $\mathbb{N}$ es la **intersección de todos los
subconjuntos inductivos** de $\mathbb{R}$: se toman todos los candidatos
(el docente ya exhibió varios) y se queda solo lo que está en común a
todos ellos. Es una definición más abstracta que la de "puntitos", pero
**formal y sin ambigüedad**.

### 9.4 $\mathbb{N}$ es el subconjunto inductivo más pequeño

**Proposición.** $\mathbb{N}$ es inductivo, y además es el **más pequeño**
de los conjuntos inductivos en el sentido de la inclusión: $\mathbb{N}
\subseteq A$ para todo $A$ inductivo.

**Demostración.**

*Parte 1: $\mathbb{N}$ es inductivo.*
- $0 \in \mathbb{N}$: por definición de conjunto inductivo, $0$ pertenece a
  *todo* conjunto inductivo $A$; por lo tanto $0$ cumple la condición que
  define a $\mathbb{N}$ (pertenecer a todos los inductivos), luego
  $0 \in \mathbb{N}$.
- $\mathbb{N}$ estable por sucesor: sea $x \in \mathbb{N}$, es decir, $x$
  pertenece a todo conjunto inductivo $A$. Como cada $A$ es, en particular,
  estable por sucesor, se tiene $x+1 \in A$ para ese mismo $A$. Como esto
  vale para **cualquier** inductivo $A$, se concluye que $x+1$ pertenece a
  todos los inductivos, es decir, $x + 1 \in \mathbb{N}$.

*Parte 2: $\mathbb{N} \subseteq A$ para todo $A$ inductivo.* Es inmediata
de la definición: $\mathbb{N}$ se definió exactamente como el conjunto de
los elementos que están en *todos* los inductivos, así que en particular
está contenido en cada uno de ellos. $\blacksquare$

> Esta proposición es la que hay que memorizar: "**$\mathbb{N}$ es el
> subconjunto inductivo más pequeño de $\mathbb{R}$**" resume, de una sola
> frase, tanto la definición formal como su relación con todos los demás
> conjuntos inductivos vistos en los ejemplos.

## 10. Principio de inducción completa

### 10.1 Enunciado

Sea $P(n)$ un enunciado (una propiedad, a veces verdadera y a veces falsa)
sobre un natural cualquiera $n$. Si se cumplen:

1. **Caso base**: $P(0)$ es verdadero.
2. **Paso inductivo**: para todo $n \in \mathbb{N}$, $P(n) \implies P(n+1)$.

entonces:
$$
\boxed{\forall n \in \mathbb{N},\ P(n) \text{ es verdadero.}}
$$

### 10.2 Intuición: los dominós

La imagen que propone el docente es la de una **fila de dominós**: si el
primero cae (caso base) y la distancia entre dominós consecutivos es tal
que la caída de uno siempre provoca la caída del siguiente (paso
inductivo), entonces **todos** los dominós de la fila terminan cayendo.

> Los dos ingredientes son igual de necesarios: sin caso base "nadie empuja
> el primer dominó y no cae ninguno"; y si en algún punto se rompe la
> implicación (algún dominó no logra tumbar al siguiente), la caída se
> **detiene ahí** y no se puede concluir nada sobre los que siguen.

### 10.3 Demostración

A diferencia de la intuición informal, el principio de inducción **se
demuestra** a partir de la definición de $\mathbb{N}$ como el subconjunto
inductivo más chico (§9.4); no es un axioma adicional.

**Demostración.** Se define
$$A := \{n \in \mathbb{N} : P(n) \text{ es verdadero}\}$$
(el "conjunto de los dominós que caen"). Se muestra que $A$ es inductivo:

- $0 \in A$: por hipótesis (1), $P(0)$ es verdadero, así que $0$ cumple la
  condición que define a $A$.
- $A$ estable por sucesor: sea $x \in A$, es decir, $P(x)$ es verdadero.
  Por hipótesis (2), $P(x) \implies P(x+1)$, luego $P(x+1)$ también es
  verdadero, es decir, $x + 1 \in A$.

Por lo tanto $A$ es un conjunto inductivo. Pero por la Proposición de §9.4,
$\mathbb{N}$ es el subconjunto inductivo **más pequeño**, así que
$\mathbb{N} \subseteq A$. Por otro lado, por construcción $A \subseteq
\mathbb{N}$ (los elementos de $A$ son naturales que además cumplen $P$).
De ambas inclusiones, $A = \mathbb{N}$, es decir:
$$\forall n \in \mathbb{N},\ n \in A \iff \forall n \in \mathbb{N},\ P(n) \text{ verdadero.} \qquad \blacksquare$$

> El punto conceptual central: la inducción **no cae del cielo** ni es un
> axioma separado; es una consecuencia directa de que $\mathbb{N}$ se
> definió como el inductivo más pequeño. "Ahora ya no es una cosa mágica".

### 10.4 Variante desde un $n_0$ arbitrario

Se enuncia (sin demostrar en clase, aunque se indica que la demostración es
análoga) una variante útil: sea $P(n)$ una propiedad y $n_0 \in \mathbb{N}$
fijo. Si $P(n_0)$ es verdadero y, para todo $n \geq n_0$,
$P(n) \implies P(n+1)$, entonces $P(n)$ es verdadero para todo
$n \geq n_0$.

> Es exactamente el mismo principio, pero arrancando la cadena de dominós
> en $n_0$ en vez de en $0$ — útil porque en la práctica muchas
> inducciones empiezan en $1$, $2$ o cualquier otro valor conveniente, no
> necesariamente en $0$.

---

*La próxima clase (lunes) retomará el axioma de completitud —definiendo
"superiormente acotado" y "supremo"— y se verán ejemplos concretos de
demostraciones por inducción.*
