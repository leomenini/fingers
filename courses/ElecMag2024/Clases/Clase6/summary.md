# Resumen Clase 6 — Laplace en varios sistemas de coordenadas, casos de una variable y separación de variables

## Índice

1. [Dónde estamos](#1-dónde-estamos)
2. [La ecuación de Laplace en otros sistemas de coordenadas](#2-la-ecuación-de-laplace-en-otros-sistemas-de-coordenadas)
   - 2.1 [Cartesianas (repaso)](#21-cartesianas-repaso)
   - 2.2 [Cilíndricas](#22-cilíndricas)
   - 2.3 [Esféricas](#23-esféricas)
   - 2.4 [Cómo se deducen: el gradiente en cilíndricas](#24-cómo-se-deducen-el-gradiente-en-cilíndricas)
3. [Laplace cuando hay una sola variable](#3-laplace-cuando-hay-una-sola-variable)
   - 3.1 [Cartesianas: $\phi = \phi(x)$](#31-cartesianas-phi--phix)
   - 3.2 [Esféricas: $\phi = \phi(r)$](#32-esféricas-phi--phir)
   - 3.3 [Cilíndricas: $\phi = \phi(r)$](#33-cilíndricas-phi--phir)
4. [Problemas con simetría azimutal](#4-problemas-con-simetría-azimutal)
   - 4.1 [Buscar una base, no la solución general](#41-buscar-una-base-no-la-solución-general)
   - 4.2 [El método de separación de variables](#42-el-método-de-separación-de-variables)
   - 4.3 [La constante de separación](#43-la-constante-de-separación)
5. [La ecuación de Legendre](#5-la-ecuación-de-legendre)
   - 5.1 [El cambio de variable $u = \cos\theta$](#51-el-cambio-de-variable-u--costheta)
   - 5.2 [Qué soluciones interesan](#52-qué-soluciones-interesan)

---

## 1. Dónde estamos

Repaso de la clase anterior. La **ecuación de Poisson** corresponde al caso en que hay una distribución continua de carga en un volumen; la **ecuación de Laplace** es su ecuación homogénea asociada y vale cuando no hay densidad volumétrica de carga —toda la carga está en cargas puntuales o en superficies que hacen de borde de la región—. De ella se probaron dos propiedades:

1. **Linealidad**: una combinación lineal de dos soluciones es solución, aunque **no tiene por qué cumplir las mismas condiciones de borde**.
2. **Unicidad**: con condiciones de borde razonables (potencial dado, o componente normal de su gradiente dada), la solución es única a menos de una constante aditiva.

> Todo eso era **formal**. El objetivo de esta clase es empezar a ser concreto y producir soluciones: primero simplonas, después cada vez más sofisticadas.

Pero antes hace falta una herramienta previa.

---

## 2. La ecuación de Laplace en otros sistemas de coordenadas

**El motivo es práctico:** según la geometría del problema, las coordenadas cartesianas no son siempre las más apropiadas.

### 2.1 Cartesianas (repaso)

$$\nabla\phi = \frac{\partial\phi}{\partial x}\hat\imath + \frac{\partial\phi}{\partial y}\hat\jmath + \frac{\partial\phi}{\partial z}\hat k
\qquad
\nabla\cdot\vec V = \frac{\partial V_x}{\partial x} + \frac{\partial V_y}{\partial y} + \frac{\partial V_z}{\partial z}$$

$$\nabla^2\phi = \frac{\partial^2\phi}{\partial x^2} + \frac{\partial^2\phi}{\partial y^2} + \frac{\partial^2\phi}{\partial z^2}
\qquad\Longrightarrow\qquad
\text{Laplace: } \frac{\partial^2\phi}{\partial x^2} + \frac{\partial^2\phi}{\partial y^2} + \frac{\partial^2\phi}{\partial z^2} = 0$$

(Poisson es lo mismo igualado a $-\rho/\varepsilon_0$.)

### 2.2 Cilíndricas

Se **mantiene $z$** como en cartesianas y en el plano $xy$ se pasa a polares:

$$x = r\cos\theta \qquad y = r\sin\theta \qquad z = z$$

El punto de interés es $P$, en el espacio; lo que se usa para definir $r$ y $\theta$ es su **proyección $P'$** sobre el plano $Oxy$. Los versores son $\hat k$ (igual que antes), $\hat e_r$ —radial, en la dirección de la proyección horizontal— y $\hat e_\theta$, ortogonal a él y en el sentido de los $\theta$ crecientes.

$$\nabla\phi = \frac{\partial\phi}{\partial r}\hat e_r + \frac{1}{r}\frac{\partial\phi}{\partial\theta}\hat e_\theta + \frac{\partial\phi}{\partial z}\hat k$$

$$\nabla\cdot\vec V = \frac{1}{r}\frac{\partial}{\partial r}\big(r\,V_r\big) + \frac{1}{r}\frac{\partial V_\theta}{\partial\theta} + \frac{\partial V_z}{\partial z}$$

Componiendo ambas:

$$\boxed{\nabla^2\phi = \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial\phi}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2\phi}{\partial\theta^2} + \frac{\partial^2\phi}{\partial z^2}}$$

### 2.3 Esféricas

Un punto $P$ se ubica con: la distancia al origen $r$; el ángulo $\theta$ que forma con la **vertical** $z$; y el ángulo $\varphi$ que forma la proyección $P'$ sobre el plano horizontal con el eje $x$.

$$x = r\sin\theta\cos\varphi \qquad y = r\sin\theta\sin\varphi \qquad z = r\cos\theta$$

> Se usa $\varphi$ para la coordenada azimutal, distinta del $\phi$ del potencial. El docente reconoce la inconsistencia: es la notación más frecuente en la literatura, no la que más le gusta.

Los tres versores son $\hat e_r$ (radial **en el espacio**, no en la proyección), $\hat e_\theta$ (en el sentido de los $\theta$ crecientes) y $\hat e_\varphi$ (en el de los $\varphi$ crecientes, contenido en la dirección horizontal).

$$\nabla\phi = \frac{\partial\phi}{\partial r}\hat e_r + \frac{1}{r}\frac{\partial\phi}{\partial\theta}\hat e_\theta + \frac{1}{r\sin\theta}\frac{\partial\phi}{\partial\varphi}\hat e_\varphi$$

$$\nabla\cdot\vec V = \frac{1}{r^2}\frac{\partial}{\partial r}\big(r^2 V_r\big) + \frac{1}{r\sin\theta}\frac{\partial}{\partial\theta}\big(\sin\theta\, V_\theta\big) + \frac{1}{r\sin\theta}\frac{\partial V_\varphi}{\partial\varphi}$$

$$\boxed{\nabla^2\phi = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\phi}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\phi}{\partial\theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2\phi}{\partial\varphi^2}}$$

> **⚠ Ojo con la notación.** $\hat e_r$ y $\hat e_\theta$ se llaman igual en cilíndricas y en esféricas pero **significan cosas distintas**: el $\hat e_r$ cilíndrico apunta hacia la proyección horizontal, el esférico apunta hacia el punto en el espacio; y el $\theta$ cilíndrico se mide en el plano $xy$ mientras que el esférico se mide desde el eje $z$. Es incómodo, pero es la costumbre de la literatura.

> **No hay que memorizarlas.** Hay una hoja de fórmulas de operadores diferenciales en el EVA que **se puede llevar a los parciales**; el propio docente aclara que él tampoco se las acuerda. Lo que sí hay que saber es que existen y usarlas seguido.

> **Un control barato: análisis dimensional.** Los factores $1/r$ tienen que estar porque $\theta$ y $\varphi$ son **adimensionadas**, y una derivada respecto de ellas no tiene las mismas unidades que una derivada respecto de $r$. El $\sin\theta$, en cambio, no sale del análisis dimensional: hay que hacer la cuenta.

### 2.4 Cómo se deducen: el gradiente en cilíndricas

Ninguna de estas fórmulas cae del cielo: todas salen de aplicar la **regla de la cadena** al cambio de variable. Se hace la más simple de todas como muestra; las demás son idénticas conceptualmente, sólo que con muchas más cuentas.

Como $z$ no se toca, alcanza con ocuparse del plano $xy$. Del dibujo se leen las relaciones entre versores:

$$\hat e_r = \cos\theta\,\hat\imath + \sin\theta\,\hat\jmath
\qquad
\hat e_\theta = -\sin\theta\,\hat\imath + \cos\theta\,\hat\jmath$$

**Paso 1: derivadas respecto de las coordenadas nuevas.** Por regla de la cadena, y usando $x = r\cos\theta$, $y = r\sin\theta$:

$$\frac{\partial\phi}{\partial r} = \frac{\partial\phi}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial\phi}{\partial y}\frac{\partial y}{\partial r}
= \cos\theta\,\frac{\partial\phi}{\partial x} + \sin\theta\,\frac{\partial\phi}{\partial y}$$

$$\frac{\partial\phi}{\partial\theta} = \frac{\partial\phi}{\partial x}\frac{\partial x}{\partial\theta} + \frac{\partial\phi}{\partial y}\frac{\partial y}{\partial\theta}
= -r\sin\theta\,\frac{\partial\phi}{\partial x} + r\cos\theta\,\frac{\partial\phi}{\partial y}$$

**Paso 2: invertir el sistema.** Es un sistema lineal de dos por dos en las incógnitas $\partial_x\phi$ y $\partial_y\phi$ —de hecho, dividiendo la segunda por $r$, la matriz es una **rotación**—. Despejando:

$$\frac{\partial\phi}{\partial x} = \cos\theta\,\frac{\partial\phi}{\partial r} - \frac{\sin\theta}{r}\frac{\partial\phi}{\partial\theta}
\qquad
\frac{\partial\phi}{\partial y} = \sin\theta\,\frac{\partial\phi}{\partial r} + \frac{\cos\theta}{r}\frac{\partial\phi}{\partial\theta}$$

> **Un error que apareció en el pizarrón y se corrigió sobre la marcha:** estas dos expresiones estaban cruzadas —la de $\partial_x$ escrita para $\partial_y$ y viceversa—. El síntoma fue que al agrupar no aparecían los versores esperados. Es el chequeo natural de esta cuenta: si al final no salen $\hat e_r$ y $\hat e_\theta$, hay un error antes.

**Paso 3: sustituir y agrupar.** Partiendo del gradiente en cartesianas y sustituyendo (el término en $\hat k$ sobrevive sin cambios):

$$\nabla\phi = \left(\cos\theta\,\partial_r\phi - \tfrac{\sin\theta}{r}\partial_\theta\phi\right)\hat\imath
+ \left(\sin\theta\,\partial_r\phi + \tfrac{\cos\theta}{r}\partial_\theta\phi\right)\hat\jmath
+ \partial_z\phi\,\hat k$$

Agrupando por derivada en lugar de por versor, aparecen exactamente las combinaciones del paso previo:

- el factor de $\partial_r\phi$ es $\cos\theta\,\hat\imath + \sin\theta\,\hat\jmath = \hat e_r$;
- el factor de $\tfrac{1}{r}\partial_\theta\phi$ es $-\sin\theta\,\hat\imath + \cos\theta\,\hat\jmath = \hat e_\theta$.

$$\boxed{\nabla\phi = \frac{\partial\phi}{\partial r}\hat e_r + \frac{1}{r}\frac{\partial\phi}{\partial\theta}\hat e_\theta + \frac{\partial\phi}{\partial z}\hat k}$$

> Todas las demás fórmulas se prueban igual: tomar las derivadas parciales del cambio de variable, sustituir y agrupar. «Tener mucha paciencia, porque son muchas cuentas, pero al final no hay mayor misterio que ése.»

---

## 3. Laplace cuando hay una sola variable

Se empieza por casos «bobos» —matar una mosca con un cañón— donde el potencial depende de **una sola** coordenada. En todos ellos la EDP colapsa a una ecuación diferencial **ordinaria**, y el resultado es algo que ya se conocía de Física III.

> El valor del ejercicio es de verificación: comprobar que la ecuación de Laplace **da lo que tiene que dar** en las situaciones ya conocidas. «Es como el primer check en la lista de cosas a verificar.»

### 3.1 Cartesianas: $\phi = \phi(x)$

Si $\phi$ no depende de $y$ ni de $z$, esas derivadas se anulan y queda

$$\frac{d^2\phi}{dx^2} = 0 \qquad\Longrightarrow\qquad \boxed{\phi(x) = A x + B}$$

integrando dos veces. **Ejemplo físico: el condensador de placas paralelas**, cuyas equipotenciales son planos. El potencial varía **linealmente**, y los valores en las dos placas fijan $A$ y $B$: dos datos para dos constantes.

### 3.2 Esféricas: $\phi = \phi(r)$

Si el problema tiene **simetría esférica** —invariante bajo cualquier rotación—, $\phi$ no depende de $\theta$ ni de $\varphi$ y esos dos términos del laplaciano se anulan:

$$\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{d\phi}{dr}\right) = 0$$

El factor $1/r^2$ no juega ningún papel, así que $r^2\,\phi'(r) = A$, es decir $\phi'(r) = A/r^2$, y primitivando:

$$\boxed{\phi(r) = -\frac{A}{r} + B}$$

> Ejemplos: una carga puntual, o una esfera uniformemente cargada vista desde afuera. El resultado es el $1/r$ conocido, más la constante aditiva que siempre se puede sumar. Imponiendo condiciones de borde se identifica $A$ con $-Q/4\pi\varepsilon_0$ (a menos de un signo, según la convención con que se escriba).

### 3.3 Cilíndricas: $\phi = \phi(r)$

Con **simetría cilíndrica** —sin dependencia en $z$ ni en $\theta$— sobrevive un solo término:

$$\frac{1}{r}\frac{d}{dr}\left(r\frac{d\phi}{dr}\right) = 0
\qquad\Longrightarrow\qquad
r\,\phi'(r) = A
\qquad\Longrightarrow\qquad
\boxed{\phi(r) = A\ln r + B}$$

> Ejemplos: una **línea infinita de carga** (cuyo potencial logarítmico ya se conocía) o un **condensador cilíndrico**, donde los potenciales de los dos electrodos determinan $A$ y $B$.
>
> Las dos hipótesis son restrictivas y hay que decirlas: para que no haya dependencia en $z$ el sistema tiene que ser **muy largo**, y para que no dependa de $\theta$ tiene que ser isótropo en el plano.

---

## 4. Problemas con simetría azimutal

Ahora se sube un escalón: un problema que depende de **dos** variables. (El caso de tres coordenadas no se ve en el teórico de este curso.)

A la variable $\varphi$ se la llama **azimutal**, y **simetría azimutal** significa que el problema no depende de ella: es invariante bajo rotaciones alrededor del eje $z$, aunque no bajo rotaciones arbitrarias.

$$\phi = \phi(r,\theta)$$

> **El ejemplo de siempre:** una esfera conductora en un campo externo uniforme, con el eje $z$ en la dirección del campo. Girando alrededor de $z$ nada cambia —la esfera es simétrica y el campo es uniforme—, pero girando alrededor de otro eje el campo se movería. Por eso el potencial depende de $r$ y de $\theta$, pero no de $\varphi$.

Con el último término del laplaciano anulado, la ecuación es

$$\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\phi}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\phi}{\partial\theta}\right) = 0$$

Siguen siendo derivadas parciales, porque siguen siendo dos variables.

### 4.1 Buscar una base, no la solución general

Acá entra la propiedad de linealidad de la clase anterior. Si el conjunto de soluciones es un **espacio vectorial**, lo cómodo —como en álgebra lineal— es describir sus elementos desarrollados en una **base**. Entonces el objetivo no es hallar directamente la solución del problema concreto sino

$$\phi(r,\theta) = \sum_n a_n\,\phi_n(r,\theta)$$

donde las $\phi_n$ son una base de soluciones.

> **⚠ Esta suma no es la de álgebra lineal.** Allá las bases son finitas y cada elemento se escribe como suma finita. Acá el espacio tiene **dimensión infinita** y esto es una **serie**, con un proceso de convergencia detrás. Es una **base de Hilbert**, no una base en el sentido usual.
>
> El docente es explícito sobre cómo se trata eso en la práctica: «ustedes son candidatos a ingenieros y yo soy físico, así que ese problema se lo dejamos a los matemáticos», pero **hay que saber que el peligro existe**. Y agrega el criterio pragmático: una base es útil si sumando unos diez términos ya se parece; si hacen falta 800 000, no sirve para nada. El objetivo es reemplazar un problema complicado por uno manejable.

### 4.2 El método de separación de variables

El truco para encontrar elementos de la base es buscar soluciones **con variables separables**, es decir, de la forma producto:

$$\phi(r,\theta) = Z(r)\,P(\theta)$$

> **⚠ Esta es la advertencia central de la clase.** Las soluciones **en general no son de esta forma** —típicamente las dos variables aparecen entreveradas—. Lo que se afirma es mucho más débil: que se puede encontrar **una base** formada por soluciones de este tipo. La solución general es una **combinación lineal** de ellas, y no tiene forma de producto.

> El método no es exclusivo de Laplace: sirve para **cualquier ecuación diferencial lineal homogénea**, y con más trabajo incluso para algunas no lineales. La metáfora del docente: es una 4×4 — no cruza el océano, pero cruza muchísimos ríos. Vale la pena tenerlo en la caja de herramientas.
>
> (No confundir con el método de separación de variables de Cálculo 1. Se llama igual y la cuenta se parece, pero es otra cosa.)

Al sustituir el producto, cada derivada golpea a una sola función y la otra sale de factor:

$$\frac{P(\theta)}{r^2}\frac{d}{dr}\big(r^2 Z'(r)\big) + \frac{Z(r)}{r^2\sin\theta}\frac{d}{d\theta}\big(\sin\theta\,P'(\theta)\big) = 0$$

Nótese que ya son derivadas **ordinarias**: $Z$ depende sólo de $r$ y $P$ sólo de $\theta$.

### 4.3 La constante de separación

Hasta acá sólo se factorizó. La separación viene ahora: se multiplica por $r^2$ y se divide por $Z\,P$, y se pasa un término al otro miembro:

$$\frac{1}{Z(r)}\frac{d}{dr}\big(r^2 Z'(r)\big) = -\frac{1}{P(\theta)\sin\theta}\frac{d}{d\theta}\big(\sin\theta\,P'(\theta)\big)$$

**El argumento decisivo, planteado como pregunta capciosa: ¿de qué variable depende cada miembro?** De ninguna.

- El miembro izquierdo tiene pinta de depender de $r$, pero es igual al derecho, que no depende de $r$.
- El derecho tiene pinta de depender de $\theta$, pero es igual al izquierdo, que no depende de $\theta$.

Luego ambos son iguales a una misma **constante**, la **constante de separación** $K$:

$$\boxed{\frac{d}{dr}\big(r^2 Z'(r)\big) = K\,Z(r)}
\qquad\qquad
\boxed{\frac{d}{d\theta}\big(\sin\theta\,P'(\theta)\big) + K\sin\theta\,P(\theta) = 0}$$

> **Lo que se ganó:** el problema de hallar una base de soluciones de una **ecuación en derivadas parciales** quedó reducido a resolver **dos ecuaciones diferenciales ordinarias**. Las EDO, que uno creía ya dominadas, pasan a ser el juego lateral para resolver el problema grande.

Ambas ecuaciones son de **segundo orden**, así que para cada valor aceptable de $K$ hay típicamente dos soluciones de cada una: cuatro combinaciones. Y a priori hay una para cada $K$, es decir infinitas — **aunque se verá que no todos los valores de $K$ son aceptables**, y por eso al final no serán tantas.

---

## 5. La ecuación de Legendre

Se ataca primero la **ecuación angular**.

### 5.1 El cambio de variable $u = \cos\theta$

Como toda la ecuación es trigonométrica, conviene pasar a una variable trigonométrica:

$$u = \cos\theta \qquad\Longrightarrow\qquad \frac{du}{d\theta} = -\sin\theta$$

Por regla de la cadena, $\dfrac{dP}{d\theta} = \dfrac{dP}{du}\dfrac{du}{d\theta} = -\sin\theta\,\dfrac{dP}{du}$, de modo que la combinación que aparece dentro de la derivada es

$$\sin\theta\,\frac{dP}{d\theta} = -\sin^2\theta\,\frac{dP}{du} = (u^2 - 1)\frac{dP}{du}$$

usando $\sin^2\theta = 1 - \cos^2\theta = 1 - u^2$. Derivando otra vez respecto de $\theta$ —lo que vuelve a traer un factor $-\sin\theta$ de la cadena—:

$$\frac{d}{d\theta}\left(\sin\theta\frac{dP}{d\theta}\right) = -\sin\theta\,\frac{d}{du}\left[(u^2-1)\frac{dP}{du}\right]$$

Sustituyendo en la ecuación angular, **el $\sin\theta$ se cancela** y queda una ecuación mucho más limpia:

$$\boxed{\frac{d}{du}\left[(1-u^2)\frac{dP}{du}\right] + K\,P(u) = 0}$$

que es la **ecuación de Legendre**. Distribuyendo la derivada se obtiene la forma equivalente

$$(1-u^2)\,P''(u) - 2u\,P'(u) + K\,P(u) = 0$$

> **Por qué esto no es fácil.** Es una EDO lineal de segundo orden, sí, **pero no de coeficientes constantes**: los coeficientes dependen de $u$. Con coeficientes constantes —como la ecuación del resorte— las soluciones serían exponenciales o senos y cosenos. Acá no: resolverla da trabajo real.

### 5.2 Qué soluciones interesan

Antes de resolverla hay que acotar qué se busca:

- **Soluciones suaves, sin singularidades.** Es coherente con el planteo: se está aplicando la ecuación de Laplace, es decir se está en una zona **sin cargas**, así que no debe haber singularidades.
- **$\theta$ recorriendo todo el rango $[0,\pi]$**, extremos incluidos. Equivalentemente, dado que $\cos 0 = 1$ y $\cos\pi = -1$:

$$\theta \in [0,\pi] \qquad\Longleftrightarrow\qquad u \in [-1,1]$$

> **Qué queda afuera, y por qué se dice.** Un problema con simetría azimutal donde $\theta$ sólo recorre $[0,\alpha]$ —por ejemplo un **casquete esférico**, un cascarón limitado por un cono de semiángulo $\alpha$— **no está incluido** en este análisis. No es que no se pueda: se resuelve con los mismos métodos, pero **hay más soluciones posibles** y hay que trabajar más.
>
> La regla general es esa: **cuanto más restringido está el recorrido de $u$, más soluciones hay**. Pedir el intervalo completo $[-1,1]$ es la exigencia más fuerte y por eso deja el conjunto de soluciones más chico — y el problema más simple.

*La clase termina sin resolver la ecuación de Legendre; queda para la clase siguiente, junto con la ecuación radial.*
