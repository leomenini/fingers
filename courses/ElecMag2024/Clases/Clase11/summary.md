# Resumen Clase 11 — Esfera dieléctrica en campo uniforme y primeros pasos en energía electrostática

## Índice

1. [Repaso: medios dieléctricos](#1-repaso-medios-dieléctricos)
   - [1.1 Lo que sigue valiendo](#11-lo-que-sigue-valiendo)
   - [1.2 Materiales isótropos, homogéneos y lineales](#12-materiales-isótropos-homogéneos-y-lineales)
   - [1.3 Qué pasa si se levanta alguna hipótesis](#13-qué-pasa-si-se-levanta-alguna-hipótesis)
2. [Poisson y Laplace en un dieléctrico](#2-poisson-y-laplace-en-un-dieléctrico)
3. [Esfera dieléctrica en un campo uniforme](#3-esfera-dieléctrica-en-un-campo-uniforme)
   - [3.1 Planteo y las dos zonas](#31-planteo-y-las-dos-zonas)
   - [3.2 Las cinco condiciones](#32-las-cinco-condiciones)
   - [3.3 Lo que matan A, B y C](#33-lo-que-matan-a-b-y-c)
   - [3.4 Continuidad del potencial](#34-continuidad-del-potencial)
   - [3.5 Continuidad de la componente normal de D](#35-continuidad-de-la-componente-normal-de-d)
   - [3.6 Todos los modos con n ≥ 2 son nulos](#36-todos-los-modos-con-n--2-son-nulos)
   - [3.7 El sistema para n = 1 y la solución](#37-el-sistema-para-n--1-y-la-solución)
4. [Discusión de la solución](#4-discusión-de-la-solución)
   - [4.1 Campo, desplazamiento y polarización adentro](#41-campo-desplazamiento-y-polarización-adentro)
   - [4.2 Cómo quedan las líneas de campo](#42-cómo-quedan-las-líneas-de-campo)
   - [4.3 La versión astuta: unicidad](#43-la-versión-astuta-unicidad)
5. [Energía electrostática](#5-energía-electrostática)
   - [5.1 El trabajo no depende del camino](#51-el-trabajo-no-depende-del-camino)
   - [5.2 La energía es del sistema, no de una partícula](#52-la-energía-es-del-sistema-no-de-una-partícula)
   - [5.3 Energía de N cargas puntuales](#53-energía-de-n-cargas-puntuales)

---

## 1. Repaso: medios dieléctricos

La clase abre con un repaso breve de lo que, según dice el docente, **les presentó
Julia la semana pasada**: qué cambia en la electrostática cuando hay un material
dieléctrico.

> Un dieléctrico es sinónimo de **aislante**. Las cargas que uno pone en él quedan
> fijas donde se las puso; no se desplazan como en un conductor.

La dificultad de fondo es determinar **cómo reacciona el material** a un campo
aplicado: la relación entre la polarización y el campo. Eso es en general difícil,
y lo aborda la **mecánica estadística** —la descripción de sistemas con un número
enorme de partículas, en este caso las moléculas del material—, que no es parte
del curso. Aun así hay cosas generales que se pueden escribir.

### 1.1 Lo que sigue valiendo

Con o sin dieléctrico, el campo sigue derivando de un potencial,
$\vec E = -\grad\phi$. Además se introduce el **desplazamiento eléctrico**

$$\vec D = \varepsilon_0 \vec E + \vec P,$$

que obedece una ley de Gauss con la forma de siempre, pero donde la fuente no es
la carga total:

$$\boxed{\ \div\vec D = \rho_{\text{libre}}\ },
\qquad
\rho_{\text{total}} = \rho_{\text{libre}} + \rho_{\text{pol}} .$$

Es la **ley de Gauss en presencia de dieléctricos**. Lo mismo vale para las
densidades superficiales.

> **«Libre» hay que manejarlo con cuidado.** No quiere decir libre de moverse,
> como en un conductor. Quiere decir **externa**: carga a la que un agente externo
> puede acceder, que puede estar incrustada y fija en el dieléctrico. Lo que la
> define es que **no es carga de polarización**. En lo que sigue, cuando no se
> aclara nada, $\rho$ y $\sigma$ son las libres.

Dicho así, esto tiene poca información: la magnitud observable es $\vec E$, y
mientras no se diga cómo se relacionan $\vec E$ y $\vec D$ (o $\vec E$ y
$\vec P$) la ecuación no alcanza para resolver nada.

### 1.2 Materiales isótropos, homogéneos y lineales

La relación puede ser no trivial, pero en casos comunes se simplifica mucho.

**Isótropo y homogéneo.** Isótropo quiere decir sin direcciones privilegiadas.
Entonces $\vec D$ sólo puede ser paralelo a $\vec E$, con un factor que depende a
lo sumo del módulo:

$$\vec D = \varepsilon\!\left(|\vec E|\right) \vec E .$$

Esto supone además un material **sin polarización espontánea**: sin campo
aplicado no hay polarización.

**Lineal.** La mayor parte de los dieléctricos cumplen además que ese factor no
depende del campo:

$$\boxed{\ \vec D = \varepsilon \vec E\ },
\qquad \varepsilon = \text{cte},
\qquad
\boxed{\ K = \frac{\varepsilon}{\varepsilon_0}\ }.$$

$\varepsilon$ es la **permitividad eléctrica** del material, y $K$ la
**constante dieléctrica**. Sin material no hay polarización y $\vec D =
\varepsilon_0\vec E$: el caso lineal es la misma relación con otra constante,
propia de cada material.

> **Por qué la relación suele ser lineal.** Los campos eléctricos *dentro* de los
> materiales —los que ligan electrones y núcleos— son enormes, mucho más grandes
> que cualquier campo que se fabrique en un laboratorio. A los efectos del
> material, el campo aplicado es casi cero. Entonces
> $\varepsilon(|\vec E|)$ puede verse como el comienzo de un desarrollo de Taylor
> alrededor de $E=0$, y reemplazarlo por $\varepsilon(0)$ es una muy buena
> aproximación. Para ver la dependencia habría que ir a campos que en la práctica
> no se alcanzan.

### 1.3 Qué pasa si se levanta alguna hipótesis

| Hipótesis que falla | Consecuencia |
| --- | --- |
| Homogéneo | $\varepsilon$ depende del punto, $\varepsilon(\vec r)$ (p. ej. un material de densidad variable) |
| Isótropo (pero lineal y homogéneo) | $\varepsilon$ pasa a ser una **matriz**, y $\vec D$ ya no es colineal con $\vec E$ |
| Sin polarización espontánea | Materiales **ferroeléctricos**: quedan polarizados al apagar el campo |

> Cumplen las tres hipótesis los fluidos (gases y líquidos), los sólidos amorfos y
> algunos cristales. Muchos sólidos cristalinos no: la estructura del cristal
> impone direcciones privilegiadas y los vuelve anisótropos.

> Los ferroeléctricos existen —el docente comenta que en el piso de arriba hay
> gente que los estudia— pero no son tan comunes, y se ignoran en el curso. El
> fenómeno análogo en magnetismo, la magnetización espontánea, sí es muy común:
> son los imanes.

---

## 2. Poisson y Laplace en un dieléctrico

Con las condiciones de borde que se habían visto la clase anterior, se entra en
problemas electrostáticos con dieléctricos (punto 3.8 de las notas del docente),
siempre con dieléctricos **homogéneos, isótropos y lineales**. Puede haber varios,
y en cada uno $\vec D = \varepsilon\vec E$ con su propia $\varepsilon$.

Como $\varepsilon$ es constante dentro de cada material, sale de la divergencia:

$$\div\vec D = \varepsilon\, \div\vec E = \rho .$$

Es la ley de Gauss del vacío con $\varepsilon$ en lugar de $\varepsilon_0$.
Sustituyendo $\vec E = -\grad\phi$ se obtiene la **ecuación de Poisson en un
dieléctrico**:

$$\boxed{\ \laplacian\phi = -\frac{\rho}{\varepsilon}\ }$$

válida en cada dieléctrico, cada uno con su constante.

Si además no hay carga libre, $\rho = 0$, vale la **ecuación de Laplace**,
$\laplacian\phi = 0$.

> **Lo interesante:** Laplace vale aunque el medio esté polarizado y haya
> densidad de carga de polarización. Lo único que se pide es que la carga
> **externa** sea nula y el material homogéneo, isótropo y lineal.

---

## 3. Esfera dieléctrica en un campo uniforme

Es el ejemplo al que se dedica el grueso de la clase. En una región con un campo
externo **uniforme** $\vec E_0$ se coloca una esfera de radio $a$, pero no
conductora como la de clases atrás, sino de **material dieléctrico** homogéneo,
lineal, isótropo, sin polarización espontánea y **descargado**.

> «Descargada» quiere decir **sin carga externa**. El material igual se va a
> polarizar —sus moléculas responden al campo aplicado— y va a aparecer carga de
> polarización, superficial, volumétrica o ambas. Cuál de las dos, se ve problema
> por problema.

### 3.1 Planteo y las dos zonas

¿Dónde vale Laplace? **Afuera** sí: es vacío, sin carga. **Adentro** también: no
hay carga libre. **En el borde no**: ahí $\varepsilon$ tiene un escalón. Si se lo
pensara como un único $\varepsilon(\vec r)$, sería homogéneo afuera y homogéneo
adentro, pero no en $r = a$.

Además el problema tiene **simetría azimutal** en coordenadas esféricas (con el eje
$z$ en la dirección de $\vec E_0$), así que en cada zona se conoce la forma
general de la solución —la base hallada en clases anteriores—. Se llama
**zona 1** a la exterior y **zona 2** a la interior:

$$\phi_1(r,\theta) = \sum_{n=0}^{\infty}
\left(a_n^{(1)} r^n + \frac{b_n^{(1)}}{r^{n+1}}\right) P_n(\cos\theta),
\qquad
\phi_2(r,\theta) = \sum_{n=0}^{\infty}
\left(a_n^{(2)} r^n + \frac{b_n^{(2)}}{r^{n+1}}\right) P_n(\cos\theta).$$

> Los coeficientes de una zona **no** son los de la otra: para que coincidieran,
> las zonas tendrían que estar unidas continuamente por una región donde valga
> Laplace. Van a quedar vinculados por las condiciones de borde, pero no son
> iguales.

### 3.2 Las cinco condiciones

| | Condición | Dónde | De dónde sale |
| --- | --- | --- | --- |
| **A** | $\phi_1 \sim -E_0\, r\cos\theta$ | $r\to\infty$ | Lejos, el campo tiende al aplicado |
| **B** | $b_0^{(1)} = 0$ | $r\to\infty$ | La carga neta de polarización es cero |
| **C** | $b_n^{(2)} = 0\ \ \forall n$ | $r = 0$ | No hay carga concentrada en el origen |
| **D** | $\phi_1(a,\theta) = \phi_2(a,\theta)\ \ \forall\theta$ | $r = a$ | El potencial es continuo |
| **E** | $D_{r}^{(1)}(a,\theta) = D_{r}^{(2)}(a,\theta)\ \ \forall\theta$ | $r = a$ | No hay carga libre superficial |

**A.** A gran distancia $\vec E_1 \to \vec E_0 = E_0\hat z$, cuyo potencial es
$-E_0 z = -E_0\, r\cos\theta$. Igual que con la esfera conductora.

**B.** El efecto de la polarización se puede reemplazar por el de sus densidades
de carga de polarización, que están **localizadas** en la esfera. Lejos vale
entonces el desarrollo multipolar. El término monopolar es el de la carga neta, y
la carga neta de polarización es **cero**: el desarrollo arranca en el dipolo. El
término que se comporta como una carga puntual es $b_0^{(1)}/r$ (recordar que
$P_0 = 1$), así que $b_0^{(1)}=0$.

> Por el mismo argumento, **ningún** término que provenga de la esfera puede
> crecer con $r$: todo el desarrollo multipolar va en potencias negativas, y el
> efecto de una distribución localizada decrece lejos. De ahí que
> $a_n^{(1)} = 0$ para $n \ge 2$. El único que crece es $a_1^{(1)}$, y ese **no
> es de la esfera**: es del campo aplicado. (Crece el potencial; el campo, no.)

**C.** Un potencial singular en el origen exigiría una carga infinitamente
concentrada ahí. Hay densidad de polarización, pero ninguna carga concentrada.

**D.** Las discontinuidades de $\vec E$ son **finitas**: la componente normal
salta cuando hay densidad superficial, pero salta un valor finito. Una función
cuya derivada sólo tiene discontinuidades finitas es continua —no derivable, pero
continua—. Eso dejaría de valer con cargas concentradas en líneas o puntos, que
acá no hay.

**E.** La diferencia de las componentes normales de $\vec D$ es proporcional a la
densidad superficial libre, y en $r=a$ no hay: la esfera no tiene carga
externa. Como la superficie es esférica, la componente normal es la radial.

> Son dos condiciones en el borde por una razón: la ecuación es de **segundo
> orden**, y en cada zona hacen falta típicamente dos.

### 3.3 Lo que matan A, B y C

«Hay que armarse de valor»: se resuelve por **fuerza bruta**, con todos los
términos, antes de ver la versión astuta (§4.3).

Con **A** y **B**, en la zona exterior sobrevive el término lineal del campo
aplicado, que fija $a_1^{(1)} = -E_0$, y las potencias negativas desde $n = 1$.
Queda además una constante $a_0^{(1)}$ que nada prohíbe; como el potencial está
definido a menos de una constante, **se elige** $a_0^{(1)} = 0$. Es una elección
de nivel, no física.

$$\phi_1(r,\theta) = -E_0\, r\cos\theta
+ \sum_{n=1}^{\infty} \frac{b_n^{(1)}}{r^{n+1}} P_n(\cos\theta).$$

Con **C**, en la zona interior sólo quedan las potencias positivas:

$$\phi_2(r,\theta) = \sum_{n=0}^{\infty} a_n^{(2)} r^{n} P_n(\cos\theta).$$

> **Cuidado con tirar también $a_0^{(2)}$.** La tentación es decir «es una
> constante, la pongo en cero». Pero la constante aditiva se puede elegir **una
> sola vez**: al fijar $a_0^{(1)}=0$, la de adentro queda determinada por la
> continuidad. En este problema también va a dar cero —«spoiler»—, pero es un
> accidente del problema, no una regla.

### 3.4 Continuidad del potencial

Se evalúan ambas expresiones en $r=a$ y se igualan para todo $\theta$:

$$-E_0\, a\cos\theta + \sum_{n=1}^{\infty} \frac{b_n^{(1)}}{a^{n+1}} P_n(\cos\theta)
= \sum_{n=0}^{\infty} a_n^{(2)} a^{n} P_n(\cos\theta).$$

Los polinomios de Legendre son un conjunto infinito de polinomios, cada uno de
grado distinto: **linealmente independientes**, una base. Se puede identificar
**término a término** (como ya se hizo con la esfera conductora):

- **$n=0$.** A la izquierda no hay término de orden cero; a la derecha está
  $a_0^{(2)}$. Entonces $a_0^{(2)} = 0$.
- **$n=1$.** Hay dos contribuciones a la izquierda, porque $P_1(\cos\theta) =
  \cos\theta$ es también el del campo aplicado:
  $$-E_0\, a + \frac{b_1^{(1)}}{a^2} = a_1^{(2)}\, a .$$
- **$n\ge 2$.** Todas tienen la misma forma:
  $$\frac{b_n^{(1)}}{a^{n+1}} = a_n^{(2)} a^n
  \quad\Longrightarrow\quad
  b_n^{(1)} = a_n^{(2)}\, a^{2n+1}.$$

Los casos especiales son $n=0$ y $n=1$; a partir de $n=2$ son todos iguales.

> Todavía no terminó: es un sistema lineal **infinito**, que determina los
> coeficientes de una zona en términos de los de la otra. Falta la condición E.

### 3.5 Continuidad de la componente normal de D

En cada región $\vec D = \varepsilon\vec E = -\varepsilon\grad\phi$, y la
componente radial del gradiente en esféricas es la derivada respecto de $r$:

$$D_r^{(1)} = -\varepsilon_0 \pdv{\phi_1}{r},
\qquad
D_r^{(2)} = -\varepsilon\, \pdv{\phi_2}{r}.$$

Usando $\dv{r}\, r^{-(n+1)} = -(n+1)\, r^{-(n+2)}$ y evaluando en $r=a$, la
condición E se escribe, para todo $\theta$,

$$\varepsilon_0 E_0\cos\theta
+ \varepsilon_0 \sum_{n=1}^{\infty} \frac{(n+1)\, b_n^{(1)}}{a^{n+2}} P_n(\cos\theta)
= -\varepsilon \sum_{n=1}^{\infty} n\, a_n^{(2)} a^{n-1} P_n(\cos\theta).$$

(La suma de la derecha arranca en $n=1$ porque ya se sabe que $a_0^{(2)}=0$, y
además su derivada es nula.) Identificando otra vez término a término: no hay
componente $n=0$, y

$$n=1:\quad \varepsilon_0 E_0 + \frac{2\varepsilon_0\, b_1^{(1)}}{a^3}
= -\varepsilon\, a_1^{(2)},$$

$$n\ge 2:\quad \varepsilon_0\,\frac{(n+1)\, b_n^{(1)}}{a^{n+2}}
= -\varepsilon\, n\, a_n^{(2)} a^{n-1}.$$

### 3.6 Todos los modos con n ≥ 2 son nulos

«Muchas ecuaciones, pero casi todas son triviales.» Sustituyendo
$b_n^{(1)} = a_n^{(2)} a^{2n+1}$ de §3.4 en la ecuación de $n\ge2$ y simplificando
el factor $a^{n-1}$:

$$a_n^{(2)} \left[\varepsilon_0 (n+1) + \varepsilon\, n\right] = 0 .$$

El corchete es estrictamente positivo, así que

$$\boxed{\ a_n^{(2)} = b_n^{(1)} = 0 \qquad \forall\, n \ge 2\ }.$$

Hay «demasiadas ecuaciones» para esas incógnitas: dos condiciones homogéneas por
cada $n$ sólo admiten la solución nula.

> Una lectura física antes de seguir: el sistema tiene tanta simetría que la
> polarización genera **sólo un dipolo**. Todos los demás momentos multipolares
> son cero.

### 3.7 El sistema para n = 1 y la solución

Quedan dos ecuaciones con dos incógnitas —ahora **inhomogéneas**, por los
términos en $E_0$—:

$$-E_0 + \frac{b_1^{(1)}}{a^3} = a_1^{(2)},
\qquad
\varepsilon_0 E_0 + \frac{2\varepsilon_0\, b_1^{(1)}}{a^3} = -\varepsilon\, a_1^{(2)}.$$

Reemplazando la primera en la segunda se despeja $b_1^{(1)}$, y con él
$a_1^{(2)}$. (El docente da directamente el resultado final para no equivocarse
en el pizarrón.)

$$b_1^{(1)} = a^3 E_0\, \frac{\varepsilon-\varepsilon_0}{\varepsilon+2\varepsilon_0},
\qquad
a_1^{(2)} = -\frac{3\varepsilon_0 E_0}{\varepsilon+2\varepsilon_0}.$$

En términos de $K = \varepsilon/\varepsilon_0$, la solución es

$$\boxed{\ \phi_1(r,\theta) = -E_0\, r\cos\theta
+ a^3 E_0\, \frac{K-1}{K+2}\, \frac{\cos\theta}{r^2}\ }$$

$$\boxed{\ \phi_2(r,\theta) = -\frac{3E_0}{K+2}\, r\cos\theta\ }$$

> Afuera: el potencial del campo aplicado más el de un **dipolo** centrado en la
> esfera. Comparando con $p\cos\theta/(4\pi\varepsilon_0 r^2)$, el momento es
> $p = 4\pi\varepsilon_0\, a^3 E_0\,(K-1)/(K+2)$, en la dirección de $\vec E_0$.
> Adentro: un término proporcional a $r\cos\theta = z$.

---

## 4. Discusión de la solución

### 4.1 Campo, desplazamiento y polarización adentro

Como $\phi_2$ es una constante por $z$, conviene pensarlo en cartesianas: el
campo interior es la derivada respecto de $z$ cambiada de signo,

$$\boxed{\ \vec E_2 = \frac{3}{K+2}\, E_0\, \hat z\ }$$

**uniforme**, colineal con el aplicado, pero con otro módulo. De ahí
$\vec D_2 = \varepsilon\vec E_2$ y, usando $\vec D = \varepsilon_0\vec E + \vec P$,

$$\vec P = (\varepsilon-\varepsilon_0)\, \vec E_2
= 3\varepsilon_0\,\frac{K-1}{K+2}\, E_0\, \hat z .$$

> **Chequeo de sentido común.** Si $\varepsilon = \varepsilon_0$ ($K=1$), el
> problema es uno en que no hay nada: $\vec E_2 = \vec E_0$, $\vec P = 0$ y el
> término dipolar de afuera desaparece. Una esfera con las propiedades
> dieléctricas del vacío es «transparente» para la electrostática.

> **Por qué adentro el campo es menor.** Con un campo aplicado, la parte negativa
> de cada molécula tiende a acercarse a las cargas positivas que generan el campo
> y la positiva a las negativas. Las moléculas vibran, pero en promedio se
> alinean, y el campo que producen **compensa en parte, no del todo**, el
> original. Como $\varepsilon \ge \varepsilon_0$ siempre, el efecto es siempre
> ese: $K \ge 1$ y $|\vec E_2| \le E_0$.

### 4.2 Cómo quedan las líneas de campo

Afuera, lejos, el campo es uniforme y vale $E_0$. Cerca de la esfera es la suma
de un campo constante y un **campo dipolar**: el mismo tipo de términos que con
la esfera conductora, pero con otros coeficientes. Adentro las líneas son rectas,
paralelas y horizontales, con otra separación porque el módulo es otro.

> En el pizarrón el docente dibuja las líneas interiores «más apretadas». Con
> $K>1$ el campo interior es **menor** que $E_0$, así que las líneas de
> $\vec E$ adentro van **más separadas**; las que se concentran en la esfera
> son las de $\vec D$, porque $D_2 = 3K\varepsilon_0 E_0/(K+2) > \varepsilon_0
> E_0$. La figura de las notas dibuja $\vec E$.

> **El campo no es radial en el borde.** Contra lo que pasaba con la esfera
> conductora, acá llega «chanfleado», con componente radial y tangencial. Llegar
> perpendicular a la superficie es propiedad de los **conductores**, y esto es un
> dieléctrico.

### 4.3 La versión astuta: unicidad

«Cuando terminemos van a decir: ah, pero era más fácil.» Se metió todo, se
aplicó «la picadora de carne» y la solución salió. Pero quien ya hizo varios
prácticos sabe que $P_2$, $P_3$, … van a dar cero, y puede poner de entrada sólo
la constante y el término de $P_1$ en cada zona.

> **Por qué vale:** por el **teorema de unicidad**. Si con ese ansatz reducido se
> encuentra una solución que cumple todas las condiciones de borde, es **la**
> solución. Y si se puso de menos, se nota: **no se encuentra solución**, y hay
> que volver atrás y agregar términos. Es un arte, no una ciencia; a prueba y
> error, pero ahorra cuentas.

> **Cuándo no alcanza el dipolo.** Si en lugar de una esfera se pone un
> elipsoide con los ejes alineados para conservar la simetría azimutal, el
> problema es menos simétrico y aparecen otras componentes multipolares además de
> la dipolar.

---

## 5. Energía electrostática

En los últimos minutos se arranca el **capítulo 4**. Desde Física 1 se sabe que
los argumentos energéticos simplifican problemas, y eso es particularmente cierto
para la interacción electrostática, que es **conservativa**.

### 5.1 El trabajo no depende del camino

El trabajo de la fuerza electrostática sobre una carga $q$ que va de $A$ a $B$
por una curva $C$ es

$$W_{A\to B}^{(C)} = \int_C \vec F \cdot d\vec l
= q\int_C \vec E\cdot d\vec l
= -q\int_C \grad\phi\cdot d\vec l
= -q\left[\phi(B)-\phi(A)\right].$$

$$\boxed{\ W_{A\to B} = -q\,\left[\phi(B) - \phi(A)\right]\ }$$

**No depende de la trayectoria**: sólo de los potenciales inicial y final.

### 5.2 La energía es del sistema, no de una partícula

Como no depende del camino, se puede definir una energía electrostática. Pero —y
esto el docente lo insiste también en Física 3— **la energía potencial no está
asociada a una partícula**, sino al **conjunto** de partículas presentes. Lo que se
calcula es cuánto cuesta **constituir** el sistema.

Se define la energía potencial del sistema como el **trabajo que tiene que hacer
un agente externo** para traer las partículas desde el infinito hasta sus
posiciones, con nivel de referencia $U = 0$ cuando todas están infinitamente
alejadas unas de otras.

> **El signo.** El trabajo de la fuerza electrostática y el del agente externo
> tienen signos opuestos. Es lo mismo que con la gravedad: la fuerza apunta hacia
> abajo, pero la energía potencial **crece** al subir. Es la energía que el agente
> tiene que aportar para llevar el cuerpo arriba, y la que la gravedad libera si
> se lo suelta.

### 5.3 Energía de N cargas puntuales

Sección 4.1: se arma el sistema trayendo las cargas **de a una**.

- **Carga 1:** trabajo nulo. No hay ninguna otra en la vuelta, así que no hay
  fuerza.
- **Carga 2:** interactúa sólo con la 1:
  $\displaystyle W_2 = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}}$.
- **Carga 3:** interactúa con la 1 **y** con la 2:
  $\displaystyle W_3 = \frac{1}{4\pi\varepsilon_0}
  \left(\frac{q_1 q_3}{r_{13}} + \frac{q_2 q_3}{r_{23}}\right)$.
- Y así sucesivamente.

Sumando:

$$\boxed{\ U = \frac{1}{4\pi\varepsilon_0}
\sum_{i=1}^{N} \sum_{j=1}^{i-1} \frac{q_i\, q_j}{r_{ij}}\ }$$

> Lo importante es que no es «una carga con todas las demás»: son **todas las
> parejas posibles**, y cada pareja se cuenta **una sola vez** —el par $(1,2)$ no
> se distingue del $(2,1)$—.

*La clase siguiente retoma esta fórmula, la reescribe en términos de los
potenciales en cada carga y la extiende a distribuciones continuas y a la
densidad de energía en el campo.*
