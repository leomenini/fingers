# Resumen Clase 10 — Condiciones de frontera entre dieléctricos y Laplace con dos medios

## Índice

1. [Consecuencias del signo de la susceptibilidad](#1-consecuencias-del-signo-de-la-susceptibilidad)
   - [1.1 Materiales anisótropos](#11-materiales-anisótropos)
   - [1.2 Valores típicos](#12-valores-típicos)
2. [Primer ejemplo: esfera cargada en un dieléctrico](#2-primer-ejemplo-esfera-cargada-en-un-dieléctrico)
   - [2.1 Campo y polarización](#21-campo-y-polarización)
   - [2.2 Cargas de polarización](#22-cargas-de-polarización)
   - [2.3 Por qué el campo es menor](#23-por-qué-el-campo-es-menor)
3. [Condiciones de borde entre dos medios](#3-condiciones-de-borde-entre-dos-medios)
   - [3.1 La componente normal de D](#31-la-componente-normal-de-d)
   - [3.2 La componente tangencial de E](#32-la-componente-tangencial-de-e)
   - [3.3 La continuidad del potencial](#33-la-continuidad-del-potencial)
4. [Poisson y Laplace en un dieléctrico](#4-poisson-y-laplace-en-un-dieléctrico)
5. [Segundo ejemplo: cilindro en campo uniforme](#5-segundo-ejemplo-cilindro-en-campo-uniforme)
   - [5.1 Las dos zonas](#51-las-dos-zonas)
   - [5.2 Las cinco condiciones](#52-las-cinco-condiciones)
   - [5.3 Imposición y resultado](#53-imposición-y-resultado)

---

## 1. Consecuencias del signo de la susceptibilidad

La clase anterior definió susceptibilidad y permitividad para materiales
homogéneos, isótropos y **lineales**, entendiendo por lineal que $\chi$ no
depende del campo aplicado y por lo tanto la relación entre $\vec P$ y $\vec E$
—o entre $\vec D$ y $\vec E$— es de proporcionalidad.

Falta una observación elemental que tiene consecuencias fuertes. Si hay un campo
externo, está asociado a cargas exteriores positivas y negativas. La parte
negativa de cada molécula tiende a acercarse a la carga **positiva** externa, y
la positiva a la negativa. El momento dipolar que se genera apunta entonces en
**el mismo sentido** que el campo aplicado, y como la polarización es el momento
dipolar por unidad de volumen:

$$\vec P \ \text{tiene el mismo sentido que}\ \vec E
\quad\Longrightarrow\quad
\boxed{\ \chi \ge 0\ }$$

con igualdad sólo en el vacío o en un material que no se polarice. De ahí se
encadenan las otras dos cotas, usando $\varepsilon = \varepsilon_0(1+\chi)$:

$$\boxed{\ \varepsilon \ge \varepsilon_0
\qquad\text{y}\qquad
K = \frac{\varepsilon}{\varepsilon_0} \ge 1 \ }$$

> El origen del resultado es trivial —las cargas negativas son atraídas por las
> positivas— pero la conclusión no lo es: **la constante dieléctrica no puede ser
> cualquier cosa**, siempre es mayor o igual que uno.

### 1.1 Materiales anisótropos

En algunos sólidos el material no es isótropo. La generalización es casi la
misma, pero la susceptibilidad deja de ser un escalar y pasa a ser una **matriz**
—un tensor— que a un campo aplicado le asocia una polarización que **no tiene por
qué ser colineal** con él.

> Ese caso **no se trata en el curso**; se menciona sólo para que se sepa que
> existe.

### 1.2 Valores típicos

| Material | $K$ |
| --- | --- |
| Azufre | 4,0 |
| Cuarzo | 4,3 |
| Cloruro de sodio (sal de mesa) | 6,1 |
| Agua destilada (20 °C) | 80,1 |
| Aire (presión normal) | $\approx 1$ |

> Dos lecturas de la tabla. Primero: **el aire y el vacío son lo mismo** a los
> efectos de este curso — distinguirlos exigiría una precisión que nunca se va a
> usar. Segundo: para materiales nada exóticos el efecto es **significativo**,
> con factores de 6 o 10.

> El agua con sales disueltas **no** es un aislante sino un conductor; el valor de
> la tabla es para agua destilada, y depende algo de la temperatura.

---

## 2. Primer ejemplo: esfera cargada en un dieléctrico

El ejemplo más simple posible, con simetría esférica y dependencia de una sola
coordenada. Una **esfera conductora** de radio $a$ con carga total $Q$, rodeada de
un medio dieléctrico de constante $K$ (homogéneo, isótropo y lineal — todo lo que
la frase «constante $K$» implica).

> De acá en adelante, decir «material de constante $K$» ya no se acompaña de la
> lista de hipótesis: sin ellas la frase no tendría sentido.

### 2.1 Campo y polarización

Se toma una **superficie gaussiana esférica** $S$ de radio $r > a$. Dentro del
conductor no hay campo, así que la región interesante es la exterior. Por
simetría esférica, $\vec E$, $\vec P$ y $\vec D$ son todos radiales y paralelos
entre sí —el material es lineal e isótropo—, y sus módulos son constantes sobre
$S$. Aplicando Gauss para dieléctricos:

$$\oiint_S \vec D \cdot \hat n \, dS = D \cdot 4\pi r^2 = Q
\quad\Longrightarrow\quad
\boxed{\ D = \frac{Q}{4\pi r^2}\ }$$

donde $Q$ es la **carga libre**, que en este problema es toda la carga del
conductor: la que uno deposita y a la que tiene acceso.

Ahora hace falta volver a $\vec E$, y para eso se usa la relación constitutiva del
medio lineal, $\vec D = \varepsilon \vec E = \varepsilon_0 K \vec E$:

$$\boxed{\ E = \frac{Q}{4\pi\varepsilon_0 K r^2}\ }$$

> **Fue clave tener la relación entre $\vec D$ y $\vec E$.** Sin ella se podía
> calcular $\vec D$ por simetría, pero no habría servido de mucho: la magnitud que
> ejerce la fuerza electrostática es $\vec E$, no $\vec D$.

El campo es **menor** que el que habría en el vacío, exactamente por un factor
$K$. Para la polarización se usa la otra forma de la relación,
$\vec D = \varepsilon_0 \vec E + \vec P$:

$$\vec P = \vec D - \varepsilon_0 \vec E
= \varepsilon_0 (K-1) \vec E
\quad\Longrightarrow\quad
\boxed{\ P = \frac{(K-1)\,Q}{4\pi K r^2}\ }$$

> Coherencia: si $K = 1$ estamos en el vacío y $P = 0$, como debe ser. Y como
> $K > 1$, $\vec P$ tiene el mismo sentido que $\vec E$ — que es lo que se había
> argumentado en §1, ahora en la dirección inversa del razonamiento.

$\vec P$ tiene las mismas unidades que $\vec D$: carga por unidad de superficie,
$\mathrm{C/m^2}$.

### 2.2 Cargas de polarización

Para la densidad volumétrica hay que usar la divergencia en **coordenadas
esféricas**, no la derivada radial a secas:

$$\rho_p = -\div \vec P
= -\frac{1}{r^2}\pdv{r}\left(r^2 P_r\right).$$

> Ese $1/r^2$ es justamente el que uno se come si escribe la fórmula de memoria.
> El docente se corrige en el pizarrón: no hay componentes según $\hat e_\theta$
> ni $\hat e_\phi$, pero el factor $r^2$ sí está.

Y ahí ocurre la cancelación: $P_r \propto 1/r^2$, así que $r^2 P_r$ es una
**constante** y su derivada se anula:

$$\boxed{\ \rho_p = 0\ }$$

> No era para nada obvio. Es la compensación de un $r^2$ con otro $r^2$, y no
> siempre tiene por qué pasar.

Para la densidad superficial, $\sigma_p = \vec P \cdot \hat n$ con $\hat n$
**saliente del material**. Acá está la sutileza del ejemplo: el material
dieléctrico está **afuera** de la esfera, de modo que la normal saliente del
material sobre la superficie $r=a$ apunta hacia el centro:

$$\hat n = -\hat e_r
\quad\Longrightarrow\quad
\boxed{\ \sigma_p = -\frac{(K-1)\,Q}{4\pi K a^2}\ }$$

> Siempre hay **dos** normales posibles en una superficie. La que va en la
> definición de $\sigma_p$ es la que sale del material, y como el material está
> afuera, ese vector apunta hacia adentro. El signo menos no es un descuido: es
> el contenido físico del resultado.

Es **negativa** si $Q$ es positiva, y es razonable: frente a una carga positiva,
las moléculas se orientan de modo que quede su lado negativo hacia ella. Todo el
resto se compensa.

La carga de polarización total, con densidad uniforme sobre la esfera de radio
$a$:

$$Q_p = \sigma_p \cdot 4\pi a^2 = -\frac{K-1}{K}\,Q
= -\left(1 - \frac{1}{K}\right) Q .$$

### 2.3 Por qué el campo es menor

Con esto se cierra el argumento físico que quedó pendiente. La carga **total**
que ve el campo eléctrico no es $Q$ sino

$$Q + Q_p = Q - \left(1-\frac{1}{K}\right) Q = \frac{Q}{K},$$

es decir, la carga original **dividida por $K$** — exactamente el factor por el
que se redujo $E$. Todo cierra.

> La imagen es la caricatura de siempre: la carga $+Q$ queda rodeada de cargas
> negativas de polarización pegadas a ella, y la carga neta que se «ve» desde
> afuera es menor.

> **$\vec D$ no cuenta la polarización, $\vec E$ sí.** Para $\vec D$ la fuente es
> sólo la carga libre; para $\vec E$ hay que poner la carga total, que es menor.
> De ahí que $D$ no lleve $K$ y $E$ sí.

Es un ejemplo de juguete —podría haberse hecho en Física III— pero fija las ideas
antes de pasar a los problemas propios de este curso.

---

## 3. Condiciones de borde entre dos medios

Los ejemplos que vienen usan la ecuación de Laplace, y ahí aparece un problema
nuevo: cuando hay **dos medios** —dos dieléctricos, o un conductor y un
dieléctrico— la ecuación no vale en la frontera. Hay que saber cómo se pegan las
soluciones de un lado y del otro.

Se toma un borde suave entre el medio 1 y el medio 2.

### 3.1 La componente normal de D

Se construye una **cápsula gaussiana** (un cilindro chato a caballo de la
interfaz) con tapa $S_1$ en el medio 1, tapa $S_2$ en el medio 2 y superficie
lateral. Tomándola suficientemente pequeña, la superficie se puede reemplazar por
un plano y $\vec D$ por una constante sobre cada tapa. La lateral es despreciable
frente a las tapas.

Aplicando Gauss para dieléctricos, con $\hat n$ el vector que va **del medio 2 al
1**:

$$D_{1n}\,\Delta S - D_{2n}\,\Delta S = \sigma_{\text{libre}}\,\Delta S$$

$$\boxed{\ D_{1n} - D_{2n} = \sigma_{\text{libre}}\ }$$

> La convención de signos importa: se puede elegir cualquiera de las dos
> normales, pero **hay que ser consistente** o los signos cambian.

Si no hay densidad superficial de carga **libre**, la componente normal de
$\vec D$ es **continua**.

### 3.2 La componente tangencial de E

Con la componente normal no alcanza: hace falta también la tangencial. Se toma un
**rectángulo pequeño** $C$ a caballo de la interfaz y se usa que la circulación
del campo eléctrico sobre cualquier curva cerrada es nula. Haciendo tender a cero
la altura del rectángulo:

$$\boxed{\ E_{1t} = E_{2t}\ }$$

> En rigor no es una sola condición sino varias: vale para cualquier vector
> tangencial, y a priori hay dos direcciones tangenciales independientes.

Con estas dos condiciones ya se puede empalmar dos soluciones de Laplace, una a
cada lado.

### 3.3 La continuidad del potencial

La condición tangencial admite un reemplazo más cómodo. Las dos condiciones
anteriores dicen que $\vec E$ **puede saltar** al cruzar la interfaz: aun con
$\sigma_{\text{libre}} = 0$, si las constantes dieléctricas difieren, la
continuidad de $D_n$ obliga a $E_n$ a dar un salto.

Pero lo importante es que esas discontinuidades son **finitas**. Y una función
cuya derivada tiene discontinuidades finitas es **continua**: se la puede ver como
la primitiva de esa derivada, y la primitiva es continua aunque no derivable —
tendrá un pico, nada más. Por lo tanto

$$\boxed{\ \phi_1 = \phi_2 \ \text{en la interfaz}\ }$$

> **Es esencial que sea una superficie.** Cerca de una carga puntual el campo
> diverge; cerca de una línea de carga diverge también, más suavemente, como un
> logaritmo. A través de una **superficie** la discontinuidad es finita, y por eso
> el potencial es continuo.

En la práctica se usa el par $\{\phi$ continuo, $D_n$ continua$\}$: la primera
condición es más fácil de imponer que la tangencial de $\vec E$, y la condición
sobre $D_n$ **no** se puede reemplazar.

---

## 4. Poisson y Laplace en un dieléctrico

En una zona ocupada por un medio homogéneo, isótropo y lineal de permitividad
$\varepsilon$, con $\vec D = \varepsilon \vec E$ y $\vec E = -\grad \phi$ (el
problema sigue siendo electrostático), la forma diferencial de Gauss da

$$\div(\varepsilon \vec E) = \rho_{\text{libre}} .$$

Como $\varepsilon$ es constante, sale de la divergencia:

$$\boxed{\ \laplacian \phi = -\frac{\rho_{\text{libre}}}{\varepsilon}\ }$$

que es la **ecuación de Poisson en un dieléctrico**: idéntica a la usual, con
$\varepsilon$ donde antes había $\varepsilon_0$. El cambio es imposible de más
simple.

> Y sólo hay que incluir la **carga libre**. De la carga de polarización no hay
> que ocuparse: ya está escondida en $\varepsilon$.

En particular, si no hay carga libre —aunque el medio **sí** esté polarizado—
vale la ecuación de Laplace:

$$\rho_{\text{libre}} = 0 \quad\Longrightarrow\quad \laplacian \phi = 0 .$$

Aparece entonces una familia de problemas nueva: electrostática en presencia de
dieléctricos, donde sigue valiendo Laplace pero hay más de una región.

---

## 5. Segundo ejemplo: cilindro en campo uniforme

Un **cilindro muy largo** de radio $a$, de material dieléctrico de constante $K$ y
**descargado**, colocado en un campo eléctrico uniforme $\vec E_0$ perpendicular a
su eje. Se pide el campo eléctrico en todo el espacio, adentro y afuera.

> El material se polariza, así que el campo deja de ser uniforme: tendrá la
> contribución aplicada más el efecto de la polarización. Y como no es un
> conductor, hay campo **adentro y afuera**: son dos campos, no uno.

> El ejemplo con esfera ya está publicado en OpenFING de años anteriores; acá se
> hace con cilindro para variar. La estructura del razonamiento es la misma.

### 5.1 Las dos zonas

Al ser un cilindro muy largo el problema no depende de $z$, y $\theta$ recorre de
$0$ a $2\pi$. La solución general de Laplace en cilíndricas bajo esas hipótesis
—los **armónicos cilíndricos**, vistos clases atrás— es

$$\phi(r,\theta) = a_0 + b_0 \ln r
+ \sum_{n=1}^{\infty} \left(a_n r^n + b_n r^{-n}\right)
\left(c_n \cos n\theta + d_n \sin n\theta\right).$$

Como la permitividad cambia abruptamente en $r=a$, hacen falta **dos**
soluciones, con el mismo formato pero coeficientes distintos: $\phi_1$ **afuera**
(medio 1, $\varepsilon_0$) y $\phi_2$ **adentro** (medio 2, $\varepsilon$).

### 5.2 Las cinco condiciones

| | Condición | Dónde |
| --- | --- | --- |
| **A** | $\phi_1 \sim -E_0\, r\cos\theta$ | $r \to \infty$ |
| **B** | $b_0^{(1)} = 0$ | $r \to \infty$ |
| **C** | $\phi_2$ regular | $r \to 0$ |
| **D** | $\phi_1(a,\theta) = \phi_2(a,\theta)$ | $r = a$ |
| **E** | $D_{1n} = D_{2n}$ | $r = a$ |

**A.** A gran distancia el campo debe tender al aplicado, cuyo potencial es
$-E_0 x = -E_0\, r\cos\theta$.

**B.** El término logarítmico es el potencial de una línea cargada, con
coeficiente proporcional a la carga por unidad de longitud. Como **el cilindro
está descargado**, ese coeficiente es nulo.

> Es un punto donde la intuición falla fácil. La condición A es un
> **equivalente**, no un límite, y el logaritmo es **subdominante** frente a $r$:
> crece mucho más despacio. Por eso A **no dice nada** sobre el término
> logarítmico y hace falta B aparte. Lo que A sí mata son los términos que crecen
> más rápido que $r$ ($r^2$, $r^3$, …).

> Si el cilindro estuviera cargado, B se reemplazaría por la condición de que a
> gran distancia se comporte como un cilindro infinitamente fino: de lejos no se
> le ve el ancho.

**C.** En el origen no hay carga libre ni carga concentrada de ninguna clase, y
sólo una carga concentrada puede producir una divergencia. Por lo tanto $\phi_2$
no diverge en $r \to 0$.

**D** y **E** son las condiciones de frontera de §3, con $\sigma_{\text{libre}}=0$
porque el cilindro está descargado.

> Sí habrá densidad superficial **de polarización**, pero esa no entra en la
> condición sobre $\vec D$: ahí sólo cuenta la carga libre.

### 5.3 Imposición y resultado

**Con A y B**, en la zona exterior mueren $b_0^{(1)}$ y todos los $a_n^{(1)}$ con
$n \ge 2$. Del término lineal queda
$a_1^{(1)} r \left(c_1^{(1)}\cos\theta + d_1^{(1)}\sin\theta\right)
\sim -E_0 r\cos\theta$, que obliga a $d_1^{(1)} = 0$ y
$a_1^{(1)} c_1^{(1)} = -E_0$. Queda

$$\phi_1(r,\theta) = a_0^{(1)} - E_0\, r\cos\theta
+ \sum_{n=1}^{\infty} \frac{b_n^{(1)}}{r^{n}}
\left(c_n^{(1)} \cos n\theta + d_n^{(1)} \sin n\theta\right).$$

**Con C**, en la zona interior mueren $b_0^{(2)}$ y **todos** los $b_n^{(2)}$ —el
logaritmo y todas las potencias negativas:

$$\phi_2(r,\theta) = a_0^{(2)}
+ \sum_{n=1}^{\infty} a_n^{(2)} r^{n}
\left(c_n^{(2)} \cos n\theta + d_n^{(2)} \sin n\theta\right).$$

> En cada zona se mató la mitad de los coeficientes. Además, el potencial está
> definido a menos de una constante, así que se puede **elegir** $a_0^{(1)} = 0$
> — pero sólo una de las dos: $a_0^{(2)}$ queda determinado por las condiciones,
> no se puede elegir también.

**Con D**, se evalúan ambas en $r=a$ y se igualan para todo $\theta$. Como
$\{1, \cos n\theta, \sin n\theta\}$ son **linealmente independientes**, se puede
igualar coeficiente a coeficiente. Eso da $a_0^{(2)} = 0$, una ecuación por cada
seno, una por cada coseno con $n\ge 2$, y un caso aparte para $n=1$:

$$-E_0\,a + \frac{b_1^{(1)} c_1^{(1)}}{a} = a_1^{(2)} c_1^{(2)}\, a .$$

> Son infinitas ecuaciones y **todavía no se sabe resolverlas**: sólo determinan
> las constantes de la zona 2 en términos de las de la zona 1. Falta la condición
> E.

**Con E**, la componente normal es la radial, así que la condición es
$\varepsilon_0 \left.\pdv{\phi_1}{r}\right|_{r=a}
= \varepsilon \left.\pdv{\phi_2}{r}\right|_{r=a}$. Derivando ambas series e
igualando coeficiente a coeficiente aparece el mismo juego, ahora con los
factores $\varepsilon_0$ y $\varepsilon$ a cada lado.

Y ahí llegan las buenas noticias: combinando las ecuaciones de D y E, para cada
$n$ queda un sistema **sobredeterminado** cuya única solución es la trivial:

$$d_n^{(1)} = d_n^{(2)} = 0 \ \ \forall n,
\qquad
c_n^{(1)} = c_n^{(2)} = 0 \ \ \forall n \ge 2 .$$

Sobreviven únicamente los coeficientes de $n=1$. Sus dos ecuaciones son

$$-E_0\,a + \frac{b_1^{(1)} c_1^{(1)}}{a} = a\, a_1^{(2)} c_1^{(2)},
\qquad
-E_0 - \frac{b_1^{(1)} c_1^{(1)}}{a^2} = K\, a_1^{(2)} c_1^{(2)} .$$

Sumando y restando convenientemente se despejan las dos incógnitas, y el
resultado es:

$$\boxed{\ \phi_1(r,\theta) = -E_0\, r\cos\theta
+ a^2 E_0\,\frac{K-1}{K+1}\,\frac{\cos\theta}{r}\ }$$

$$\boxed{\ \phi_2(r,\theta) = -\frac{2 E_0}{K+1}\, r\cos\theta\ }$$

> Hubo que hacer muchas cuentas, pero **en el principio es el mismo tipo de
> problema ya resuelto antes**. La única diferencia es que hay dos zonas: se
> resuelve en cada una y se imponen los bordes. Y en el borde se imponen
> normalmente dos condiciones, una de continuidad y otra sobre una derivada.

> **Por qué no hizo falta imponer $E_t$ continua.** Esa condición se escribe como
> la derivada respecto de $\theta$, y una vez impuesta la continuidad de $\phi$
> para todo $\theta$, la continuidad de $\partial\phi/\partial\theta$ sale
> automáticamente. Las dos que se impusieron —continuidad y derivada radial— ya
> dan todo.

*La discusión de esta solución —cómo queda el campo eléctrico y cómo quedan las
cargas— queda explícitamente postergada para la clase siguiente.*
