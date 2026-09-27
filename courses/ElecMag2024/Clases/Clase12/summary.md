# Resumen Clase 12 — Energía electrostática: distribuciones, densidad de energía y conductores

## Índice

1. [Repaso: energía de cargas puntuales](#1-repaso-energía-de-cargas-puntuales)
   - [1.1 Parejas y pares](#11-parejas-y-pares)
   - [1.2 La energía en términos de los potenciales](#12-la-energía-en-términos-de-los-potenciales)
2. [Energía de una distribución continua](#2-energía-de-una-distribución-continua)
   - [2.1 El proceso de carga](#21-el-proceso-de-carga)
   - [2.2 Linealidad y el factor un medio](#22-linealidad-y-el-factor-un-medio)
   - [2.3 La paradoja de la autoenergía](#23-la-paradoja-de-la-autoenergía)
   - [2.4 Conductores](#24-conductores)
3. [Densidad de energía electrostática](#3-densidad-de-energía-electrostática)
   - [3.1 Hipótesis y geometría](#31-hipótesis-y-geometría)
   - [3.2 El viejo truco de sumar y restar](#32-el-viejo-truco-de-sumar-y-restar)
   - [3.3 El término de superficie en el infinito](#33-el-término-de-superficie-en-el-infinito)
   - [3.4 Resultado y cargas puntuales](#34-resultado-y-cargas-puntuales)
4. [Energía de un conjunto de conductores cargados](#4-energía-de-un-conjunto-de-conductores-cargados)
   - [4.1 Coeficientes de potencial](#41-coeficientes-de-potencial)
   - [4.2 La energía como forma cuadrática](#42-la-energía-como-forma-cuadrática)
   - [4.3 Ejemplo: el condensador](#43-ejemplo-el-condensador)

---

## 1. Repaso: energía de cargas puntuales

### 1.1 Parejas y pares

La clase anterior cerró con la energía de un sistema de $N$ cargas puntuales,
donde $r_{ij}$ es la distancia entre las cargas $i$ y $j$ (por ejemplo, $r_{14}$
entre la 1 y la 4):

$$U = \frac{1}{4\pi\varepsilon_0}\sum_{i=1}^{N}\sum_{j=1}^{i-1}\frac{q_i q_j}{r_{ij}} .\qquad(\ast\ast)$$

Es un resultado de Física 3. Se suma sobre todas las **parejas**, cada una una
sola vez: con tres cargas son tres términos, $(1,2)$, $(1,3)$ y $(2,3)$.

La misma cantidad se puede escribir sumando sobre todos los **pares ordenados**
—contando $(1,2)$ y $(2,1)$ por separado— y dividiendo por dos para no contar
doble:

$$U = \frac{1}{2}\,\frac{1}{4\pi\varepsilon_0}\sum_{i=1}^{N}\sum_{\substack{j=1\\ j\neq i}}^{N}\frac{q_i q_j}{r_{ij}} .$$

> **No se cuenta la autointeracción.** El término $i=j$ daría infinito, porque la
> distancia de una carga a sí misma es cero. La energía es **interacción entre
> cosas**, no de una cosa consigo misma. El docente cita un dicho que nació
> precisamente de este problema: *no porque algo sea infinito es forzosamente
> cero*. Sobre esto se vuelve en §2.3.

### 1.2 La energía en términos de los potenciales

El potencial en la posición de la carga $i$ es el que generan **todas las
demás**:

$$\phi_i = \frac{1}{4\pi\varepsilon_0}\sum_{j\neq i}\frac{q_j}{r_{ij}} .$$

Separando la suma en $i$ en la fórmula de pares, lo que queda es justamente
$\phi_i$:

$$\boxed{\ U = \frac{1}{2}\sum_{i=1}^{N} q_i\,\phi_i\ }\qquad(\ast)$$

| Fórmula | Vale en |
| --- | --- |
| $(\ast\ast)$ — en términos de $q_iq_j/r_{ij}$ | sólo en el **vacío** |
| $(\ast)$ — en términos de $q_i\phi_i$ | también en presencia de dieléctricos **homogéneos, isótropos y lineales** |

> La deducción anterior de $(\ast)$ sólo vale en el vacío, porque parte de
> $(\ast\ast)$. Que $(\ast)$ sea más general **todavía no está probado**: se
> prueba ahora, para distribuciones continuas. Para cargas puntuales la prueba es
> idéntica y queda como ejercicio.

---

## 2. Energía de una distribución continua

Sección 4.2. Se considera una densidad volumétrica $\rho$ y una superficial
$\sigma$ (podrían agregarse densidades lineales o cargas puntuales; la prueba es
la misma). Cuando no se aclara, las densidades son las **libres** (externas).
**Hipótesis:** dieléctricos lineales.

### 2.1 El proceso de carga

La energía es el **trabajo necesario para instaurar la distribución desde cero**.
Se toma $\phi=0$ cuando $\rho\equiv 0$ y $\sigma\equiv 0$, y se van incrementando
las cargas **cuasiestáticamente** —«lento, lento, lento»— hasta sus valores
finales.

> «Es electrostática, nada se mueve.» Sí, pero si nada se moviera nunca se
> llegaría a la configuración deseada. Se la arma de a poquito, y se calcula la
> energía que cuesta ese proceso.

En un estado intermedio con carga $q'$ y potencial $\phi'$, agregar $\delta q$
cuesta

$$\delta W = \phi'(\vec r)\,\delta q,
\qquad
\delta q = \delta\rho\,dV \ \ \text{(volumen)}
\quad\text{o}\quad
\delta q = \delta\sigma\,dS \ \ \text{(superficie)}.$$

Como el sistema es **conservativo**, el resultado no depende del camino por el que
se suban las cargas: se podría subir primero la volumétrica y después la
superficial, o unas más rápido que otras. Se elige el camino más cómodo: **todas
crecen proporcionalmente**,

$$\rho' = \alpha\,\rho,\qquad \sigma' = \alpha\,\sigma,\qquad \alpha\in[0,1],$$

con $\alpha=0$ al principio y $\alpha=1$ en la configuración final. Entonces
$\delta\rho = \rho\,\delta\alpha$ y $\delta\sigma = \sigma\,\delta\alpha$, y

$$U = \int_0^1 d\alpha\left[\int_V \phi'(\vec r)\,\rho(\vec r)\,dV
+ \int_S \phi'(\vec r)\,\sigma(\vec r)\,dS\right].$$

> Son integrales una dentro de la otra. $\rho$ y $\sigma$ quedan **adentro**
> porque dependen de $\vec r$; $d\alpha$ sale **afuera** porque se eligió el mismo
> para todos los puntos. Si no se hubiera elegido que todas crecen igual, eso no
> se podría hacer.

### 2.2 Linealidad y el factor un medio

Acá entra la linealidad del medio: el potencial es **proporcional a la carga**. Si
todas las cargas se multiplican por un factor, el potencial se multiplica por el
mismo factor:

$$\phi'(\vec r) = \alpha\,\phi(\vec r),$$

con $\phi$ el potencial final. Toda la dependencia en $\alpha$ queda explícita, y
$\int_0^1 \alpha\,d\alpha = 1/2$:

$$\boxed{\ U = \frac12\int_V \rho\,\phi\,dV + \frac12\int_S \sigma\,\phi\,dS\ }$$

Es la contraparte continua de $U = \tfrac12\sum_i q_i\phi_i$.

> **Lo que se usó, y lo que no.** Sólo que el trabajo es conservativo y que el
> medio es lineal. Es una prueba completamente distinta de la de cargas puntuales,
> pero da el mismo resultado; el vacío es un caso particular de medio lineal. Y
> el $\tfrac12$ viene **sólo** de la integral en $\alpha$.

### 2.3 La paradoja de la autoenergía

Comparar esta fórmula con $(\ast)$ debería generar «cierta incomodidad». En
$(\ast)$, $\phi_i$ es el potencial de **las otras** cargas; la propia no cuenta.
En la fórmula continua no se hizo esa distinción: $\phi$ es el potencial total.

Una carga puntual es una **idealización** de una distribución muy concentrada, así
que la fórmula de cargas puntuales debería salir de la continua en el límite. No
sale: se obtiene $(\ast)$ **más** la energía de interacción interna de cada carga
consigo misma. Si se imagina la carga como una esferita, esa energía no tiende a
cero al achicarla sino que **diverge**: el volumen baja, pero el $1/r$ crece.

**Resolución.** Lo que interesa es la energía de **interacción** entre partículas,
que depende de sus **distancias relativas**. La energía interna de cada carga no
depende de su posición: es una constante aditiva —la suma de las
**autoenergías**—. Como la energía potencial está definida a menos de una
constante, se la descarta cambiando el nivel cero. Y es bueno descartarla, porque
en el límite puntual es infinita.

> **Nota de cultura general.** Un problema análogo, pero en mecánica cuántica,
> ocupó a los mejores físicos del mundo aproximadamente entre 1924 y 1947 y su
> resolución dio lugar a un premio Nobel. En el caso clásico es trivial —es sólo
> una constante—; en el cuántico las autoenergías se mezclan con la dinámica.
> El concepto de la solución es el mismo: en las cantidades realmente
> observables, como distancias relativas, esos infinitos no aparecen. El electrón,
> en los experimentos más precisos, no muestra estructura interna, y con la carga
> cuantizada no queda claro qué estructura podría tener algo cuya carga ya es la
> mínima posible. Para este curso, nada de esto importa.

### 2.4 Conductores

En un conductor $\rho = 0$ y sólo hay $\sigma$ en su superficie, donde el
potencial es **constante** en situación estática. Sale de la integral:

$$U = \frac12\,\phi_c\oint_S\sigma\,dS
\qquad\Longrightarrow\qquad
\boxed{\ U = \frac12\,Q\,\phi_c\ }$$

> Una fórmula como la de una carga puntual —potencial por carga— aunque la carga
> esté distribuida. Y **no depende de cómo está distribuida**, sólo de la total,
> lo cual simplifica mucho porque muchas veces esa distribución no se conoce.

---

## 3. Densidad de energía electrostática

En Física 3 se enseñó que la energía puede pensarse de dos maneras: como
interacción directa entre cargas, o como **almacenada en el campo**, con densidad
$\tfrac12\varepsilon_0 E^2$. Según el docente, aquello era «un cuentito al borde de
lo delictivo», algo que había que creer con los ojos cerrados. Sección 4.3: se
deduce ahora de manera prolija.

### 3.1 Hipótesis y geometría

1. Las cargas están en una **región acotada** (no hay distribuciones que lleguen
   al infinito).
2. Todos los dieléctricos son **lineales**.
3. Toda la densidad superficial de carga está en **superficies de conductores**;
   no hay carga superficial sobre los dieléctricos.

Se toma un conjunto de conductores con superficies $S_1, S_2, \dots, S_n$; entre
ellos puede haber vacío o dieléctricos lineales. Se elige además una superficie
$S'$ que encierra todo, y se llama $V$ al volumen **entre** los conductores y
$S'$. Se usan dos hechos:

$$\div\vec D = \rho \quad\text{(Gauss)},
\qquad
\sigma = \vec D\cdot\hat n \quad\text{sobre cada } S_i ,$$

con $\hat n$ la normal **saliente del conductor**: si $\sigma>0$, $\vec D$ sale.

### 3.2 El viejo truco de sumar y restar

Sustituyendo en la energía de §2.2:

$$U = \frac12\int_V (\div\vec D)\,\phi\,dV
+ \frac12\sum_{i=1}^{n}\oint_{S_i}\phi\,\vec D\cdot\hat n\,dS .$$

Para simplificar hay que usar el teorema de la divergencia, pero el integrando no
es una divergencia: es una divergencia **por** otra cosa. El truco —«el viejo
truco de sumar y restar», como decía el Superagente 86— es la identidad

$$\div(\phi\vec D) = \phi\,\div\vec D + \grad\phi\cdot\vec D .$$

Entonces

$$U = \frac12\int_V \div(\phi\vec D)\,dV
- \frac12\int_V \grad\phi\cdot\vec D\,dV
+ \frac12\sum_{i=1}^{n}\oint_{S_i}\phi\,\vec D\cdot\hat n\,dS .$$

El teorema de la divergencia convierte el primer término en un flujo **saliente
de $V$** a través de **todo** su borde: las $S_i$ **y** $S'$. Llamando $\hat n'$
a la normal saliente de $V$, sobre cada conductor $\hat n' = -\hat n$ (sale de
$V$, o sea, entra al conductor). Con $-\grad\phi = \vec E$:

$$U = \frac12\int_V \vec E\cdot\vec D\,dV
+ \frac12\sum_{i=1}^{n}\oint_{S_i}\phi\,\vec D\cdot\hat n'\,dS
+ \frac12\oint_{S'}\phi\,\vec D\cdot\hat n'\,dS
+ \frac12\sum_{i=1}^{n}\oint_{S_i}\phi\,\vec D\cdot\hat n\,dS .$$

Los términos sobre los conductores se cancelan de a pares, y sobrevive sólo el de
$S'$:

$$U = \frac12\int_V \vec E\cdot\vec D\,dV + \frac12\oint_{S'}\phi\,\vec D\cdot\hat n'\,dS .$$

> $S'$ no tiene análogo de $\hat n$: no hay conductor ahí, ni carga. Es una
> superficie **inventada** para decir en qué región se calcula la energía, y
> obviamente hay energía también afuera de ella.

### 3.3 El término de superficie en el infinito

Para incluir toda la energía se hace crecer $S'$: se la toma como una esfera de
radio $R$ y se manda $R\to\infty$. Como las cargas están localizadas, sobre $S'$:

| Cantidad | Orden |
| --- | --- |
| $\phi$ | a lo sumo $1/R$ |
| $\lvert\vec D\rvert$ | a lo sumo $1/R^2$ |
| área de $S'$ | $R^2$ |
| integral sobre $S'$ | a lo sumo $1/R$ |

(Puede decrecer más rápido: si la carga total es cero, lo hace.) El término de
superficie **tiende a cero**.

### 3.4 Resultado y cargas puntuales

Queda la integral en todo el espacio fuera de los conductores. Dentro de un
conductor $\vec E = 0$, así que agregar esos volúmenes es sumar cero:

$$\boxed{\ U = \frac12\int_{\text{todo el espacio}}\vec D\cdot\vec E\,dV\ },
\qquad
\boxed{\ u = \frac12\,\vec D\cdot\vec E\ }$$

En el vacío, $\vec D = \varepsilon_0\vec E$ y se recupera la fórmula de Física 3,
$u = \tfrac12\varepsilon_0E^2$. Pero ésta es más general: vale en presencia de
dieléctricos, mientras sean lineales.

> **Ojo con las cargas puntuales.** Calculada así, la energía de un sistema con
> cargas puntuales da **infinito**. Pensando la carga como una esferita de radio
> $r$: $E^2\sim 1/r^4$, el volumen $\sim r^3$, y la energía diverge como $1/r$.
> Para pasar a cargas puntuales hay que **sustraer la autoenergía** de cada una.
> La ventaja es que no depende de las posiciones, así que no importa.

> **Tres formas, una sola energía.** Como interacción entre cargas (clase
> pasada); como carga por potencial ($\tfrac12\sum q_i\phi_i$ o
> $\tfrac12\int\rho\phi$); y como integral de una densidad en términos de los
> campos. No son energías distintas: es siempre la misma.

---

## 4. Energía de un conjunto de conductores cargados

Sección 4.4. El caso conocido de Física 3 es el condensador, con energía
$Q^2/2C$. Se ve ahora el caso general con $n$ conductores.

### 4.1 Coeficientes de potencial

Conductores $1,\dots,n$ con cargas $Q_1,\dots,Q_n$ y potenciales
$\phi_1,\dots,\phi_n$ en sus superficies. **Hipótesis:** todos los dieléctricos
son lineales. Se quiere probar que

$$\boxed{\ \phi_i = \sum_{j=1}^{n} P_{ij}\,Q_j\ }$$

donde los $P_{ij}$ son los **coeficientes de potencial**. Dependen de la
**geometría** y de las **constantes dieléctricas**, pero **no de las cargas**: si
dependieran, la relación ya no sería lineal.

**Prueba.** Sean $\bar Q_1,\dots,\bar Q_n$ las cargas del problema que interesa.
En vez de ese problema se considera uno más simple:

1. **Sólo el conductor 1 cargado**: $Q_1 = \bar Q_1$, $Q_2=\dots=Q_n=0$. Llamando
   $\phi_i^{(1)}$ al potencial resultante en el conductor $i$, si la carga se
   multiplica por $\lambda$ el potencial se multiplica por $\lambda$: vale Laplace,
   valen las condiciones de borde, y todo escala. Entonces $\phi_i^{(1)}$ es
   proporcional a $\bar Q_1$.
2. De la misma forma se define $\phi_i^{(j)}$: el potencial en $i$ cuando **sólo
   la carga $j$** está «prendida». Es proporcional a $Q_j$.
3. **Superposición:** con $Q_1 = \lambda\bar Q_1$, $Q_2 = \mu\bar Q_2$ y el resto
   nulo, el potencial es $\lambda\phi_i^{(1)} + \mu\phi_i^{(2)}$, porque eso cumple
   las condiciones de borde. Con todas prendidas pasa lo mismo:

$$\phi_i = \sum_j \phi_i^{(j)} = \sum_j P_{ij}\,Q_j ,$$

donde la última igualdad es la proporcionalidad de cada $\phi_i^{(j)}$ con $Q_j$.

### 4.2 La energía como forma cuadrática

En un conjunto de conductores la energía es la suma de las contribuciones de cada
superficie, y en cada una el potencial sale afuera (§2.4):

$$U = \frac12\sum_i\oint_{S_i}\phi_i\,\sigma\,dS = \frac12\sum_i\phi_i\,Q_i .$$

Usando la relación lineal:

$$\boxed{\ U = \frac12\sum_{i=1}^{n}\sum_{j=1}^{n}P_{ij}\,Q_i\,Q_j\ }$$

Aparecen todos los productos cuadráticos de todas las cargas, «de todos con
todos», con coeficientes.

> **Sí aparece $i=j$.** Un conductor genera potencial sobre sí mismo: un solo
> conductor cargado tiene energía. A diferencia de las cargas puntuales, acá eso
> no es una autoenergía infinita.

> **Cómo se calculan los $P_{ij}$.** Se apagan todas las cargas, se pone carga sólo
> en uno, se **resuelve Laplace** con el método que se tenga y se miran los
> potenciales en todos. Con conductores de formas raras es un problema difícil. El
> docente anuncia que antes del parcial va a enseñar un método para resolver
> Laplace «a prueba de balas», que siempre funciona pero necesita una computadora.

### 4.3 Ejemplo: el condensador

El caso más simple: dos placas conductoras con cargas $Q$ y $-Q$. De la fórmula
general:

$$U = \frac12 P_{11}Q^2 + \frac12 P_{22}Q^2 - \frac12 P_{12}Q^2 - \frac12 P_{21}Q^2
= \frac12\left(P_{11}+P_{22}-P_{12}-P_{21}\right)Q^2 .$$

Todo ese «bicho» es lo que en Física 3 se llamaba $1/C$:

$$\boxed{\ C = \frac{1}{P_{11}+P_{22}-P_{12}-P_{21}}\ },
\qquad U = \frac{Q^2}{2C}.$$

> La energía de un condensador proporcional a $Q^2$ es un caso particular de lo
> general. Y calcular la capacitancia de un condensador con placas de «formas
> podridas» es el mismo problema: resolver Laplace «y remangarse».

*La clase siguiente sigue con las propiedades de los coeficientes de potencial y
una definición más general de condensador.*
