# Resumen Clase 21 — Intensidad magnética, materiales lineales, ferromagnetismo, histéresis y condiciones de borde

## Índice

1. [Repaso: corrientes de magnetización](#1-repaso-corrientes-de-magnetización)
2. [Ecuaciones de campo en un material](#2-ecuaciones-de-campo-en-un-material)
   - [2.1 Campo microscópico y campo macroscópico](#21-campo-microscópico-y-campo-macroscópico)
   - [2.2 La intensidad magnética H](#22-la-intensidad-magnética-h)
   - [2.3 Lo que falta: la relación constitutiva](#23-lo-que-falta-la-relación-constitutiva)
   - [2.4 Forma integral de la ley de Ampère](#24-forma-integral-de-la-ley-de-ampère)
3. [Susceptibilidad y permeabilidad: materiales lineales](#3-susceptibilidad-y-permeabilidad-materiales-lineales)
   - [3.1 Definición](#31-definición)
   - [3.2 Diamagnetismo y paramagnetismo](#32-diamagnetismo-y-paramagnetismo)
   - [3.3 Órdenes de magnitud](#33-órdenes-de-magnitud)
   - [3.4 Permeabilidad magnética](#34-permeabilidad-magnética)
4. [Ferromagnetismo](#4-ferromagnetismo)
   - [4.1 De dónde sale](#41-de-dónde-sale)
   - [4.2 Características](#42-características)
   - [4.3 Curva de primera imantación](#43-curva-de-primera-imantación)
   - [4.4 Magnetización de saturación](#44-magnetización-de-saturación)
5. [Histéresis](#5-histéresis)
   - [5.1 El material recuerda su historia](#51-el-material-recuerda-su-historia)
   - [5.2 Ciclos de histéresis](#52-ciclos-de-histéresis)
   - [5.3 Cómo se hacen cuentas en la práctica](#53-cómo-se-hacen-cuentas-en-la-práctica)
6. [Condiciones de borde](#6-condiciones-de-borde)
   - [6.1 Componente normal de B](#61-componente-normal-de-b)
   - [6.2 Componente tangencial de H](#62-componente-tangencial-de-h)

---

## 1. Repaso: corrientes de magnetización

La clase anterior empezó el estudio de las propiedades magnéticas de la
materia. Es todavía más importante que en el caso eléctrico, porque el
magnetismo conocido desde la antigüedad es el de los imanes, no el de las
corrientes.

El resultado principal: el potencial vector producido por una magnetización
$\vec M$ (momento dipolar magnético por unidad de volumen) se escribe como el
de una corriente de conducción, vía Biot y Savart, sólo que con **corrientes de
magnetización**: una densidad volumétrica en el interior del material,

$$\vec J_M = \curl\vec M,$$

y típicamente otra superficial en el borde.

Ahora se trata de escribir las ecuaciones del campo en presencia del material
de modo que esas corrientes —a las que no se tiene acceso experimental— no
aparezcan, o aparezcan lo menos posible. El docente insiste en la imagen de
**barrer la mugre bajo la alfombra**: la mugre sigue ahí; la pregunta es en qué
medida se puede evitar conocerla en detalle.

---

## 2. Ecuaciones de campo en un material

### 2.1 Campo microscópico y campo macroscópico

Dentro de un material no interesa el campo **microscópico**, medido a escala
atómica, sino el **macroscópico**. Sólo para éste se dedujo la forma del
potencial vector dentro del material: la deducción reemplazaba todas las
corrientes por dipolos, lo que vale lejos de ellas o promediando en volúmenes
grandes.

El campo, microscópico o macroscópico, verifica siempre

$$\div\vec B = 0, \qquad \curl\vec B = \mu_0\,\vec J_{\text{total}},$$

donde en la ley de Ampère entran **todas** las corrientes: las de conducción y
las microscópicas, asociadas a los espines o a las corrientes atómicas:

$$\vec J_{\text{total}} = \vec J + \vec J_M,$$

con $\vec J$ la corriente de conducción. Esto vale en el interior del material;
las corrientes de magnetización superficiales del borde se tratan aparte.

La clave para el campo macroscópico es que se conoce la forma explícita de
$\vec J_M$ en términos de la magnetización:

$$\curl\vec B = \mu_0\,\vec J + \mu_0\,\curl\vec M .$$

### 2.2 La intensidad magnética H

Dividiendo por $\mu_0$ y pasando el rotacional al otro lado:

$$\curl\left(\frac{\vec B}{\mu_0} - \vec M\right) = \vec J .$$

Se define la **intensidad magnética**

$$\boxed{\ \vec H = \frac{\vec B}{\mu_0} - \vec M\ }$$

y queda

$$\boxed{\ \curl\vec H = \vec J\ }$$

Es como la ley de Ampère, pero para $\vec H$ y **sólo con la corriente de
conducción**, que es la que realmente se controla. Es la **ley de Ampère en un
material** (en su interior; las corrientes superficiales se tratan aparte).

Es exactamente lo que se hizo en el caso eléctrico al pasar de $\vec E$ a
$\vec D$ metiendo adentro la polarización. «Por ahora no estamos haciendo más
que esconder la mugre, poniéndole un nombre.»

**Unidades.** $\vec H$ y $\vec M$ tienen las mismas unidades. Como
$\curl\vec H = \vec J$ y $\vec J$ se mide en A/m$^2$,

$$[H] = [M] = \text{A/m}.$$

> El docente se equivoca primero con las unidades («metro cúbico» en algún
> lado) y lo corrige media hora después: son amperes por metro.

### 2.3 Lo que falta: la relación constitutiva

«Hasta ahora esto es lindo e inútil.» Hay una ecuación para $\vec B$
(divergencia nula) y otra para $\vec H$ (Ampère); sin una relación entre los
dos campos el problema no se resuelve. Igual que en el caso eléctrico había
que saber la relación entre $\vec E$ y $\vec D$, acá alguien tiene que dar

$$\vec B = \vec B(\vec H) \quad\text{o}\quad \vec H = \vec H(\vec B):$$

la **relación constitutiva** o **ecuación de estado** del material.

- **Idealmente** se deduce de la física microscópica: un número del orden del
  de Avogadro de espines y momentos orbitales interactuando entre sí y con el
  campo externo, tratados con **mecánica estadística**. En general es un
  problema muy difícil; se sabe resolver cuando las interacciones entre átomos
  son despreciables o suficientemente simples. Es toda una rama de la física y
  no se hace en el curso.
- **En la práctica** se toma de datos experimentales. Para un material
  homogéneo e isotrópico $\vec B$ es paralelo a $\vec H$ (no hay direcciones
  preferenciales) y alcanza una **tabla** —una curva— que dé el módulo de
  $\vec B$ para cada módulo de $\vec H$.

### 2.4 Forma integral de la ley de Ampère

Se toma una curva cerrada $C$ (una curva amperiana) y una superficie $S$ que
se apoya en ella, orientada con la regla de la mano derecha. Por el teorema de
Stokes y la ley de Ampère en el material:

$$\oint_C \vec H\cdot d\vec l = \int_S (\curl\vec H)\cdot\hat n\,dS
= \int_S \vec J\cdot\hat n\,dS$$

$$\boxed{\ \oint_C \vec H\cdot d\vec l = I_{\text{adentro}}\ }$$

> **Sólo cuenta la corriente de conducción** que atraviesa $S$; las corrientes
> de magnetización no.

La otra ecuación en forma integral ya se conoce: el flujo de $\vec B$ por
cualquier superficie cerrada es cero.

---

## 3. Susceptibilidad y permeabilidad: materiales lineales

### 3.1 Definición

Primero el caso más simple, parecido al eléctrico. Se suponen materiales
**homogéneos e isotrópicos**: $\vec B$, $\vec M$ y $\vec H$ son paralelos, hay
una sola dirección en juego. Muchos metales tienen una red cristalina con
direcciones preferenciales, pero en la práctica son policristalinos —muchos
cristalitos orientados al azar— y macroscópicamente se comportan como
isotrópicos.

Un material es **lineal** si

$$\boxed{\ \vec M = \chi_m\,\vec H\ }$$

con $\chi_m$ la **susceptibilidad magnética**. Como $\vec M$ y $\vec H$ tienen
las mismas unidades, $\chi_m$ es **adimensionada**: se compara con 1.

> El docente arranca escribiendo $\vec M = \chi_m\vec B$ y se corrige: hay dos
> definiciones en la literatura, y la que usa el curso es con $\vec H$.

El nombre es «de lo más apropiado»: una persona susceptible se ofende mucho
por poca cosa; un material con $\chi_m$ grande reacciona mucho a un campo
chico.

> **Si no es isotrópico**, en el caso lineal y homogéneo la susceptibilidad es
> una **matriz** (un tensor): se aplica el campo en una dirección y la
> magnetización aparece en otra. Si además no es homogéneo, la matriz depende
> del punto.

### 3.2 Diamagnetismo y paramagnetismo

Diferencia fundamental con el caso eléctrico, donde la susceptibilidad era
siempre positiva (la polarización va para el mismo lado que el campo):

| $\chi_m$ | Nombre | Qué pasa |
| --- | --- | --- |
| $< 0$ | **Diamagnetismo** | $\vec M$ apunta en sentido opuesto a $\vec H$ |
| $> 0$ | **Paramagnetismo** | $\vec M$ apunta en el mismo sentido que $\vec H$ |

Típicamente la reacción de los **espines** es paramagnética y la de las
**corrientes orbitales** es diamagnética. Suelen estar las dos y normalmente
gana la paramagnética; pero en materiales con tantos electrones de un espín
como del opuesto el efecto paramagnético se anula y sobrevive el diamagnético.
Quién gana depende de la estructura molecular.

> $\chi_m$ es constante **a una temperatura dada**, pero en general depende
> bastante de ella: a temperaturas muy altas tiende a cero, y en la mayoría de
> los materiales magnéticos hay una temperatura —la **temperatura de Curie**—
> en la que diverge. El curso no trata la relación entre propiedades térmicas y
> magnetismo.

### 3.3 Órdenes de magnitud

A la pregunta de un estudiante sobre el valor de $\chi_m$, el docente responde
que a temperatura ambiente «básicamente no existe»: existe, pero es
chiquitito. Valores dados en clase:

| Material | $\chi_m$ | Tipo |
| --- | --- | --- |
| Aluminio | $2{,}1\times10^{-5}$ | para |
| Bismuto | $-16{,}4\times10^{-5}$ | dia |
| Cobre | $-0{,}98\times10^{-5}$ | dia |
| Diamante | $-2{,}2\times10^{-5}$ | dia |
| Magnesio | $1{,}2\times10^{-5}$ | para |
| Oxígeno (1 atm) | $0{,}193\times10^{-5}$ | para |
| Titanio | $18{,}0\times10^{-5}$ | para |
| Tungsteno | $7{,}6\times10^{-5}$ | para |

Van de $10^{-5}$ a $10^{-4}$. Como

$$\vec B = \mu_0\left(\vec H + \vec M\right),$$

y $\vec M$ es $10^{-5}$ o $10^{-4}$ veces $\vec H$, estos materiales se
comportan magnéticamente **casi como el vacío**.

> **Los lineales son aburridos.** Existen, son comunes, la aproximación lineal
> es muy buena, pero la respuesta es «chirolas, mucho menos que una propina».
> Muy distinto del caso eléctrico, donde los dieléctricos lineales tienen
> constantes dieléctricas de 2, 3 o 10.

### 3.4 Permeabilidad magnética

Si $\vec M$ es lineal en $\vec H$, también lo es $\vec B$, porque la relación
de arriba es exacta:

$$\vec B = \mu_0\,(1+\chi_m)\,\vec H
\quad\Longrightarrow\quad
\boxed{\ \vec B = \mu\,\vec H,\qquad \mu = \mu_0\,(1+\chi_m)\ }$$

$\mu$ es la **permeabilidad magnética** del material. Generaliza $\mu_0$: sin
material, $\mu = \mu_0$.

En resumen: se puede barrer la mugre pasando de $\vec B$ a $\vec H$, a costa
de necesitar la relación entre ellos. En el caso lineal todo queda en una
constante y se resuelve como en el caso eléctrico; lamentablemente el efecto
es chiquitito.

---

## 4. Ferromagnetismo

Los materiales con efectos magnéticos **grandes** son, casi siempre, **no
lineales**. El caso más común es el **ferromagnetismo**, cuyo nombre viene del
hierro: «el magnetismo del tipo del hierro».

### 4.1 De dónde sale

El cuento en pocas palabras, según el docente:

1. El ferromagnetismo está dominado por los **espines** de los electrones.
   Normalmente los orbitales atómicos se llenan con un electrón «para arriba» y
   otro «para abajo», y sus efectos magnéticos se compensan.
2. En el cristal de hierro hay un electrón **desapareado**, no de conducción,
   bastante ligado a la red. Su momento dipolar tiende a alinearse con un campo
   externo. Hasta ahí es como el paramagnetismo, un efecto básicamente lineal.
3. Lo no trivial: por un **efecto cuántico complicado** —no la interacción
   dipolo-dipolo— los espines de átomos vecinos tienden a **alinearse entre
   sí**. Energéticamente es favorable que estén alineados.
4. Resultado: la enorme mayoría de los espines del material se alinean unos con
   otros, y aparece una magnetización grande **aun sin campo externo**. Por eso
   hay imanes.

> Hay otras formas de magnetismo no lineal. En el **antiferromagnetismo** la
> interacción entre espines vecinos tiende a **desalinearlos**. Existe
> bastante en la naturaleza, en compuestos más complicados; no se trata en el
> curso.

> El docente intercala una digresión sin cerrar: macroscópicamente uno espera
> que todo movimiento se degrade en calor (rozamiento), pero a nivel molecular,
> donde manda la mecánica cuántica, puede haber corrientes que no se detienen.

### 4.2 Características

Para el caso homogéneo e isotrópico (realista si el material es
policristalino):

1. $\vec M$ es paralela a $\vec B$ y **del mismo sentido**.
2. Si se reduce $\vec B$ a cero, $\vec M$ **no tiende a cero**: hay
   magnetización espontánea.
3. El efecto es **enorme**.

Aunque la relación no sea lineal, se puede definir una **función**
permeabilidad:

$$\vec B = \mu(H)\,\vec H,$$

que ahora depende del módulo de $\vec H$; por eso la relación no es lineal.

> **Esta definición es problemática.** Supone que la relación es entre el
> $\vec B$ y el $\vec H$ de aquí y ahora. En los ferromagnéticos depende
> además de la **historia** del material (§5).

| Material | $\mu$ |
| --- | --- |
| Diamagnético o paramagnético | $\mu\approx\mu_0$ |
| Ferromagnético | $\mu/\mu_0$ varía mucho con $H$ y suele alcanzar $10^4$ o $10^5$ |

### 4.3 Curva de primera imantación

El docente dibuja, para **hierro inicialmente desmagnetizado**, $B$ (en tesla,
«una unidad enorme») en función de $H$ (en A/m, con marcas en 200 y 400 A/m):

- arranca más o menos lineal;
- después crece más rápido;
- después empieza a **saturar**, con una pendiente mucho más baja; la zona de
  saturación está del orden de **un tesla**, un campo muy grande.

La curva de $\mu/\mu_0$ en función de $H$ arranca en un valor moderado, tiene un
**máximo** alrededor de 200 A/m —«muy alto, tipo 6000»— y luego decrece hacia
1. Propiedades:

1. $\mu$ es **positiva** en esta curva;
2. **varía mucho** con $H$;
3. **tiende a $\mu_0$** para $H$ grande.

**Por qué tiende a $\mu_0$.** Con un campo muy grande todos los espines quedan
alineados: la magnetización **satura** y no puede crecer más, $\vec M\to$
constante. Entonces, cuando $H\gg M$,

$$\vec B = \mu_0(\vec H+\vec M)\approx\mu_0\,\vec H,$$

como si no hubiera magnetización. Pero hay que llegar a campos gigantescos,
difíciles de lograr en un laboratorio; la situación normal está antes de la
saturación.

> El docente aclara que su dibujo exagera: comparado con 6000, el valor final
> 1 es casi cero.

### 4.4 Magnetización de saturación

Es la magnetización máxima que se puede alcanzar en un material. Valores dados
en clase, como $\mu_0 M_s$ (que tiene unidades de campo magnético):

| Material | $\mu_0 M_s$ (T) |
| --- | --- |
| Hierro | 2,15 |
| Cobalto | 1,79 |
| Níquel | 0,61 |
| Ferrita de manganeso, MnFe$_2$O$_4$ | 0,49 |
| Ferrita de níquel, NiFe$_2$O$_4$ | 0,32 |

> La transcripción nombra los dos últimos como «magnetita de magnesio» y
> «magnetita de níquel»; el docente dicta sus fórmulas (manganeso, hierro dos,
> oxígeno cuatro; níquel, hierro dos, oxígeno cuatro), que son las ferritas de
> la tabla.

Son los ferromagnéticos más comunes: hierro, cobalto, níquel y óxidos de
hierro. En la naturaleza lo frecuente —y lo que se conocía en la antigüedad—
son los óxidos, porque el hierro se oxida muy fácil.

---

## 5. Histéresis

### 5.1 El material recuerda su historia

Si la relación dependiera sólo del presente, al bajar el campo después de
subirlo se volvería por la misma curva y, con $H = 0$, se tendría $B = 0$ y
$M = 0$: el material quedaría desmagnetizado. Pero estos materiales se
**imantan**. Ese fenómeno —depender de la historia pasada— se llama
**histéresis**.

### 5.2 Ciclos de histéresis

Partiendo de la curva de primera imantación hasta cierto punto y bajando $H$:

- el sistema **no vuelve por la curva original**, sino por encima;
- con $H = 0$ (sin corrientes de conducción externas) queda un campo $B$ no
  nulo adentro: es $\mu_0$ por la **magnetización espontánea**;
- hay un tramo en que $\mu$ es **negativa** (en la curva de primera
  imantación era positiva);
- aplicando $H$ hacia el otro lado, en algún momento la magnetización se da
  vuelta y la curva sigue; volviendo a subir se recorre otra rama, y se cierra
  un **ciclo**.

| Punto | Nombre |
| --- | --- |
| $B$ con $H = 0$ | **Remanencia** |
| $H$ con $B = 0$ | **Coercitividad**: cuánto campo externo hay que aplicar hacia el otro lado para anular el efecto neto |

> **No hay una única curva.** Hay muchos ciclos de histéresis, según el campo
> máximo que se llegó a aplicar; en cuál se está depende de la historia. Sólo
> si se llega a **saturar** el material el ciclo es único. Además los ciclos
> deberían ser simétricos (la curva es impar); el docente aclara que su dibujo
> no lo es.

Los ciclos tienen propiedades **disipativas**, con consecuencias
termodinámicas importantes que no se tratan.

La dificultad es doble: la relación no es lineal **y** no es única.

### 5.3 Cómo se hacen cuentas en la práctica

Tres situaciones en las que se puede calcular:

| Situación | Aproximación | Comentario |
| --- | --- | --- |
| Ciclos chicos, cerca del origen | Lineal, $\vec B\approx\mu\vec H$ con $\mu$ grande (del orden de mil) | Es «una recta gorda»: aproximación de calidad regular, pero con efecto magnético genuino y cuentas simples |
| Se conoce la curva | Se reemplaza el ciclo por tramos lineales, p. ej. un **paralelogramo** | Hay que dar la curva, no un número; aparece en el práctico |
| Magnetización saturada, campo aplicado chico | $\vec M\approx$ constante $=\vec M_s$: $\vec B = \mu_0(\vec H+\vec M_s)$ | Relación **afín**: no es proporcional, pero depende sólo de una constante |

> En la relación afín el docente escribe primero $\mu$ y corrige a $\mu_0$.
> Aclara también que vale componente a componente: el módulo no se puede sumar
> así porque el signo puede cambiar.

La utilidad tecnológica es clara: para efectos magnéticos grandes hace falta un
material ferromagnético. Por ejemplo, los **transformadores** eficientes
llevan un núcleo de hierro, y para estudiarlos habrá que ocuparse de esta
relación.

> Al cerrar el tema el docente dice que los materiales «diamagnéticos y
> ferromagnéticos» son, en primera aproximación, como aire; por el contexto se
> refiere a los **diamagnéticos y paramagnéticos**.

---

## 6. Condiciones de borde

Sección 7.6, parecida al caso eléctrico. Dos medios, 1 y 2 (uno puede ser el
vacío). Se usan las dos construcciones de siempre: una **superficie gaussiana**
$S$ con forma de cajita chata y una **curva amperiana** $C$ rectangular, ambas
a caballo de la interfaz.

### 6.1 Componente normal de B

El flujo de $\vec B$ por la cajita es cero. Haciéndola chata:

$$\boxed{\ B_{1n} = B_{2n}\ }$$

En el caso eléctrico aparecía además la densidad superficial de carga; acá no
hay nada porque **no existen cargas magnéticas**.

### 6.2 Componente tangencial de H

Se aplica Ampère en el material a la curva $C$, con lado $\vec L_0$ en el medio
1 (y $-\vec L_0$ en el 2) y lados cortos despreciables:

$$\oint_C \vec H\cdot d\vec l = \vec L_0\cdot(\vec H_1-\vec H_2) = I_{\text{adentro}} .$$

Normalmente la corriente encerrada tiende a cero al achicar la curva. Pero
puede haber una **corriente de conducción concentrada en la superficie**, con
densidad superficial $\vec j$ (por ejemplo, si el medio es un conductor con
corriente circulando por su superficie). El docente lo incluye para hacer el
caso general, aunque «muchas veces suele ser cero».

La corriente que cruza la curva es la componente de $\vec j$ perpendicular al
plano de $C$, por el largo $L_0$. Con un vector normal a la interfaz
$\hat n$, el vector $\hat n\times\vec L_0$ es perpendicular al plano de la
curva y de módulo $L_0$; usando la propiedad cíclica del producto mixto,

$$\vec L_0\cdot(\vec H_1-\vec H_2) = \vec j\cdot(\hat n\times\vec L_0)
= \vec L_0\cdot(\vec j\times\hat n).$$

Como vale para **cualquier** $\vec L_0$ en el plano tangente:

$$\boxed{\ \vec H_{1t} - \vec H_{2t} = \vec j\times\hat n\ }$$

donde $\vec j\times\hat n$ ya es tangente, sin necesidad de proyectarlo.

> **El sentido de $\hat n$.** El docente redibuja la figura varias veces y
> cambia el sentido de la normal sobre la marcha; termina la clase sin fijarlo
> por escrito. Con la orientación de la curva de arriba, para que el resultado
> sea correcto $\hat n$ tiene que apuntar **del medio 2 al medio 1**.

Quedan, como siempre, una condición normal y una tangencial. Sin corriente
superficial de conducción ($\vec j = 0$), la componente tangencial de $\vec H$
es continua.

*La próxima clase sigue el martes.*
