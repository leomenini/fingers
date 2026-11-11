# Resumen Clase 18 — Función delta de Dirac y ley de Ampère

## Índice

1. [Paréntesis: la delta de Dirac](#1-paréntesis-la-delta-de-dirac)
   - [1.1 Qué es una carga puntual](#11-qué-es-una-carga-puntual)
   - [1.2 Distribuciones como límites de funciones](#12-distribuciones-como-límites-de-funciones)
2. [Regularización de la delta](#2-regularización-de-la-delta)
   - [2.1 Las dos propiedades](#21-las-dos-propiedades)
   - [2.2 Ejemplo: la gaussiana](#22-ejemplo-la-gaussiana)
   - [2.3 La integral gaussiana](#23-la-integral-gaussiana)
   - [2.4 El objeto límite](#24-el-objeto-límite)
3. [La delta en tres dimensiones y las cargas puntuales](#3-la-delta-en-tres-dimensiones-y-las-cargas-puntuales)
   - [3.1 Densidad de una carga puntual](#31-densidad-de-una-carga-puntual)
   - [3.2 Ejemplo: potencial de un conjunto de cargas](#32-ejemplo-potencial-de-un-conjunto-de-cargas)
4. [Una identidad clave: la divergencia de r/r³](#4-una-identidad-clave-la-divergencia-de-rr³)
   - [4.1 De dónde sale](#41-de-dónde-sale)
   - [4.2 Verificación fuera del origen](#42-verificación-fuera-del-origen)
   - [4.3 Verificación de la propiedad integral](#43-verificación-de-la-propiedad-integral)
5. [Ley de Ampère](#5-ley-de-ampère)
   - [5.1 Qué se va a probar y cuándo vale](#51-qué-se-va-a-probar-y-cuándo-vale)
   - [5.2 Rotacional del integrando](#52-rotacional-del-integrando)
   - [5.3 El término con la delta](#53-el-término-con-la-delta)
   - [5.4 El término de borde](#54-el-término-de-borde)
   - [5.5 Forma integral](#55-forma-integral)
6. [Ejemplo: cable infinito](#6-ejemplo-cable-infinito)

---

## 1. Paréntesis: la delta de Dirac

La **función delta de Dirac** se podría haber introducido en el primer capítulo
—ahí está en el libro—; el docente la postergó porque hasta ahora no hacía
falta y es un tema más técnico. A diferencia del paréntesis del símbolo de
Levi-Civita, que fue «por amor al arte», **esto forma parte del programa** y de
acá en más se usa.

### 1.1 Qué es una carga puntual

Como siempre que se trabaja con distribuciones continuas, se ignora la
cuantización de la carga (válido mientras las cargas en juego sean grandes
frente a la del electrón).

«Carga puntual» no quiere decir realmente puntual: quiere decir que su tamaño
es mucho menor que las distancias relevantes y, más precisamente, **mucho menor
que la resolución del aparato de medida**. Una distancia no es «chica» en
abstracto, es chica respecto de algo.

- Dos bolitas separadas dos metros, medidas con resolución de un centímetro:
  son puntuales si son mucho más chicas que un centímetro.
- Si se quiere medir con un milímetro o una micra de precisión, el criterio se
  vuelve más exigente.
- El aparato tiene que ser apropiado al problema: una resolución de diez metros
  para cargas separadas dos metros no mide nada.

> **Idea básica.** Si se ignora la cuantización de la carga, no es posible
> diferenciar físicamente una carga puntual de una distribución continua de
> carga **muy localizada**. De hecho esa es la definición de carga puntual que
> se usa: una distribución localizada de modo que su tamaño sea mucho menor que
> la resolución del aparato de medida.

### 1.2 Distribuciones como límites de funciones

Los matemáticos probaron que esto se puede construir de manera consistente: se
puede trabajar con algo que se parece a una distribución continua de carga pero
describe una carga puntual. La herramienta es la **teoría de distribuciones**:
objetos que no son funciones sino **límites de funciones**. Una carga cada vez
más concentrada no tiene por límite una función.

La teoría rigurosa lleva un curso entero y no se hace acá; se dan las ideas
intuitivas que se usan en física y cómo se manipula la distribución más simple,
la delta de Dirac. Dirac —físico, años treinta del siglo pasado— la introdujo
**antes** de que existiera la formulación matemática general.

---

## 2. Regularización de la delta

### 2.1 Las dos propiedades

Se empieza en una dimensión. Sobre una recta se toma una función
$\delta_\varepsilon(x)$ centrada en el origen, de ancho del orden de
$\sqrt\varepsilon$ y altura del orden de $1/\sqrt\varepsilon$. Cuando
$\varepsilon\to0$ se concentra, **pero el área no cambia**: se achica el ancho
y se agranda la altura. Pensada como densidad lineal de carga, la carga total
es la misma, cada vez más concentrada.

El aparato de medida se modela con una función $f(x)$, su **sensibilidad**:
mide la carga alrededor de una posición $x_0$ con un ancho de precisión
$\sqrt\Delta$. Para ese aparato la distribución se comporta como carga puntual
si $\varepsilon\ll\Delta$: no puede saber si es puntual o no.

Una **regularización** de la delta es una función suave que cumple:

$$\boxed{\ \begin{aligned}
&\text{(1)}\quad \delta_\varepsilon(x)\xrightarrow[\varepsilon\to0]{}0
\quad\text{para todo } x\neq0;\\[4pt]
&\text{(2)}\quad \int_{-\infty}^{+\infty} dx\;\delta_\varepsilon(x)\,f(x)
\xrightarrow[\varepsilon\to0]{} f(0).
\end{aligned}\ }$$

La segunda dice que, aunque la función tiende a cero en todos lados salvo en el
origen, se concentra de tal manera que la integral contra la sensibilidad del
aparato sólo «conoce» el valor de $f$ en un punto. Hay muchas regularizaciones
posibles.

### 2.2 Ejemplo: la gaussiana

$$\delta_\varepsilon(x) = \frac{1}{\sqrt{2\pi\varepsilon}}\;
\exp\!\left(-\frac{x^2}{2\varepsilon}\right).$$

**Propiedad 1.** Inmediata: para cualquier $x\neq0$ la exponencial tiende a
cero mucho más rápido de lo que crece el prefactor.

**Propiedad 2.** Todo ocurre a distancia $\sqrt\varepsilon$ del origen, así
que se hace un zoom con el cambio $u = x/\sqrt\varepsilon$,
$du = dx/\sqrt\varepsilon$:

$$\int_{-\infty}^{+\infty} dx\,f(x)\,
\frac{e^{-x^2/2\varepsilon}}{\sqrt{2\pi\varepsilon}}
= \int_{-\infty}^{+\infty} du\;f\!\left(\sqrt\varepsilon\,u\right)
\frac{e^{-u^2/2}}{\sqrt{2\pi}}
\;\xrightarrow[\varepsilon\to0]{}\;
f(0)\int_{-\infty}^{+\infty}\frac{e^{-u^2/2}}{\sqrt{2\pi}}\,du .$$

Queda $f(0)$ por una integral que ya no depende de $\varepsilon$. La convención
es normalizar la delta para que el área total sea 1; el factor
$\sqrt{2\pi\varepsilon}$ estaba puesto para eso.

> **Qué se le pide a $f$.** En la teoría de distribuciones se suele pedir que
> sea $C^\infty$ y de soporte compacto (nula fuera de un intervalo finito). El
> docente no es preciso al respecto y aclara que el argumento seguiría valiendo
> pidiendo menos.

### 2.3 La integral gaussiana

Falta ver que $\int e^{-u^2/2}\,du = \sqrt{2\pi}$. «Lo que importa no es el
qué, sino el cómo.» El truco: un número positivo es la raíz de su cuadrado, y
el cuadrado es una integral doble en el plano $(u,v)$, que se pasa a polares
(el jacobiano trae un $r$):

$$\int_{-\infty}^{+\infty} e^{-u^2/2}\,du
= \left[\int\!\!\int du\,dv\;e^{-(u^2+v^2)/2}\right]^{1/2}
= \left[\int_0^{2\pi}\!d\theta\int_0^{\infty}\! r\,e^{-r^2/2}\,dr\right]^{1/2}.$$

La integral angular da $2\pi$. La radial, con $z = r^2/2$, $dz = r\,dr$, es
$\int_0^\infty e^{-z}\,dz = 1$. Por lo tanto vale $\sqrt{2\pi}$ y

$$\int_{-\infty}^{+\infty} dx\;\delta_\varepsilon(x)\,f(x)\to f(0).$$

### 2.4 El objeto límite

> **$\delta_\varepsilon(x)$ no tiene límite como función** —se vuelve
> infinitamente alta e infinitamente angosta—, **pero el proceso de integrarla
> contra funciones suaves sí tiene límite.** Esa operación límite es lo que se
> llama una **distribución**.

Al tomar el límite se omite el $\varepsilon$: el objeto es la **delta de
Dirac**, $\delta(x)$, y corresponde a la carga puntual. Para el curso el rigor
del límite no importa; alcanza con que las dos descripciones sean físicamente
equivalentes.

---

## 3. La delta en tres dimensiones y las cargas puntuales

### 3.1 Densidad de una carga puntual

La densidad asociada a una carga puntual $q$ en el origen es

$$\rho(\vec r) = q\,\delta(\vec r),
\qquad
\delta(\vec r) \equiv \delta(x)\,\delta(y)\,\delta(z) :$$

el producto de las tres deltas, que localiza en $x=0$, $y=0$ y $z=0$ a la vez.
Para una carga en $\vec r_0$:

$$\boxed{\ \rho(\vec r) = q\,\delta(\vec r-\vec r_0)\ }$$

concentrada donde se anula el argumento. Integrando contra una función suave,
con el cambio $\vec r\,' = \vec r - \vec r_0$ (que no altera el volumen):

$$\int_V f(\vec r)\,q\,\delta(\vec r-\vec r_0)\,dV
= q\int_V f(\vec r_0+\vec r\,')\,\delta(\vec r\,')\,dV' = q\,f(\vec r_0).$$

> **Regla operativa.** Al integrar, la delta **elimina la integral y evalúa la
> variable de integración en el punto donde se anula su argumento.**

De acá en más las cargas puntuales y las distribuciones continuas se tratan al
mismo nivel; no hace falta distinguir casos.

### 3.2 Ejemplo: potencial de un conjunto de cargas

Chequeo de coherencia. El potencial de una distribución continua es

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\int_V
\frac{\rho(\vec r\,')}{|\vec r-\vec r\,'|}\,dV' .$$

Para cargas $q_i$ en posiciones $\vec r_i$ se pone
$\rho(\vec r\,') = \sum_i q_i\,\delta(\vec r\,'-\vec r_i)$; cada delta evalúa
el integrando en $\vec r\,' = \vec r_i$:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\sum_i q_i\int_V
\frac{\delta(\vec r\,'-\vec r_i)}{|\vec r-\vec r\,'|}\,dV'
= \frac{1}{4\pi\varepsilon_0}\sum_i\frac{q_i}{|\vec r-\vec r_i|},$$

que es el potencial de una suma de cargas puntuales, como tenía que ser.

---

## 4. Una identidad clave: la divergencia de r/r³

### 4.1 De dónde sale

Se combinan dos cosas que ya se saben. La ley de Gauss,
$\nabla\cdot\vec E = \rho/\varepsilon_0$, con $\rho = q\,\delta(\vec r)$ —una
carga puntual en el origen—, y el campo de esa carga, que es Coulomb,
$\vec E = q\,\vec r/(4\pi\varepsilon_0 r^3)$. Si la delta tiene sentido, las dos
tienen que ser coherentes:

$$\nabla\cdot\left(\frac{1}{4\pi\varepsilon_0}\frac{q\,\vec r}{r^3}\right)
= \frac{q}{\varepsilon_0}\,\delta(\vec r)
\quad\Longrightarrow\quad
\boxed{\ \nabla\cdot\left(\frac{\vec r}{r^3}\right) = 4\pi\,\delta(\vec r)\ }$$

«Una fórmula maravillosa», que se va a usar mucho. Se verifica que hace lo que
una delta debe hacer.

### 4.2 Verificación fuera del origen

Tiene que valer cero para $\vec r\neq0$. En cartesianas, con
$r = (x^2+y^2+z^2)^{1/2}$:

$$\frac{\partial}{\partial x}\,\frac{x}{r^3} = \frac{1}{r^3} - \frac{3x^2}{r^5},$$

y lo análogo para $y$ y $z$. Sumando los tres:

$$\nabla\cdot\frac{\vec r}{r^3} = \frac{3}{r^3} - \frac{3\,(x^2+y^2+z^2)}{r^5} = 0
\qquad (\vec r\neq0).$$

> La cuenta **no vale en el origen**: ahí la función no es diferenciable.

### 4.3 Verificación de la propiedad integral

Hay que ver que $\int \nabla\cdot(\vec r/r^3)\,f\,dV = 4\pi f(0)$, resultado
raro para algo que es cero en todos lados salvo en un punto. Se usa «el viejo
truco de sumar y restar», la derivada de un producto:

$$\nabla\cdot\!\left(\frac{\vec r}{r^3}\right) f
= \nabla\cdot\!\left(\frac{\vec r}{r^3}\,f\right) - \frac{\vec r}{r^3}\cdot\nabla f .$$

Al primer término se le aplica el teorema de la divergencia; en el segundo,
$\vec r/r^3$ es radial y sólo sobrevive la componente radial del gradiente:

$$\int_V \nabla\cdot\!\left(\frac{\vec r}{r^3}\right) f\,dV
= \oiint_S \frac{\vec r\cdot\hat n}{r^3}\,f\,dS
- \int_V \frac{1}{r^2}\,\frac{\partial f}{\partial r}\,dV .$$

Se toma como $V$ una esfera de radio $R$ centrada en el origen (si el origen no
estuviera adentro, daría cero). En esféricas el $r^2$ del elemento de volumen
cancela el $1/r^2$ y la integral radial es inmediata:

$$\int_V \frac{1}{r^2}\,\frac{\partial f}{\partial r}\,dV
= \int_0^{\pi}\!d\theta\,\sin\theta\int_0^{2\pi}\!d\varphi\,
\Big[f(R,\theta,\varphi) - f(0)\Big].$$

Haciendo $R\to\infty$: $f$ es la sensibilidad de un aparato, está localizada,
y $f(R,\theta,\varphi)\to0$; por lo mismo se anula el término de superficie.
En $r=0$ ya no hay dependencia angular —es un punto— y la integral angular da
$4\pi$:

$$\int \nabla\cdot\!\left(\frac{\vec r}{r^3}\right) f\,dV = 4\pi\,f(0).\ \blacksquare$$

> **Hipótesis usadas.** $f$ suave (para poder derivar) y $f(\vec r)\to0$
> suficientemente rápido cuando $r\to\infty$; y hubo que integrar sobre todo el
> espacio.

Cuando Dirac la introdujo, la reacción fue «nos está tomando el pelo». Después
los matemáticos lo emprolijaron: hay que pensar las distribuciones como la
operación de integrar contra una función en un límite; en la práctica siempre
hay una integral de por medio, y ahí sí hay límite.

---

## 5. Ley de Ampère

### 5.1 Qué se va a probar y cuándo vale

En Física III Biot–Savart y Ampère se usaban como equivalentes sin probarlo.
Probarlo sin la delta se puede, pero es mucho más trabajoso.

> **¿Equivalentes?** Al final de Física III se ve que la ley de Ampère es
> matemáticamente inconsistente para corrientes no estacionarias (el problema
> que resuelve el término de Maxwell). Nada puede ser equivalente a algo
> inconsistente; la equivalencia vale **para corrientes estacionarias**.

Régimen estacionario: la densidad de carga no depende del tiempo (no es que sea
cero), y la ecuación de continuidad
$\partial\rho/\partial t + \nabla\cdot\vec J = 0$ se reduce a

$$\nabla\cdot\vec J = 0 .$$

Ya se vio que Biot–Savart implica $\nabla\cdot\vec B = 0$. Ahora se busca el
**rotacional**, respecto de la variable del punto de campo, $\nabla_2\times$,
partiendo de

$$\vec B(\vec r_2) = \frac{\mu_0}{4\pi}\int_V
\vec J(\vec r_1)\times\frac{\vec r_2-\vec r_1}{|\vec r_2-\vec r_1|^3}\,dV_1 .$$

### 5.2 Rotacional del integrando

Fórmula de cálculo vectorial, que queda como **ejercicio** (con Levi-Civita o
«a manopla»):

$$\nabla\times(\vec F\times\vec G)
= \vec F\,(\nabla\cdot\vec G) - \vec G\,(\nabla\cdot\vec F)
+ (\vec G\cdot\nabla)\vec F - (\vec F\cdot\nabla)\vec G .$$

Con $\vec F = \vec J(\vec r_1)$, que **no depende de $\vec r_2$**, y
$\vec G = (\vec r_2-\vec r_1)/|\vec r_2-\vec r_1|^3$, todas las derivadas que
caen sobre $\vec F$ son nulas. Sobreviven dos términos:

$$\nabla_2\times\left(\vec J(\vec r_1)\times\vec G\right)
= \vec J(\vec r_1)\;\nabla_2\cdot\vec G - \left(\vec J(\vec r_1)\cdot\nabla_2\right)\vec G .$$

- El primero es la identidad de §4:
  $\nabla_2\cdot\vec G = 4\pi\,\delta(\vec r_2-\vec r_1)$.
- En el segundo, $\vec G$ depende sólo de $\vec r_2-\vec r_1$, así que derivar
  respecto de $\vec r_2$ o de $\vec r_1$ difiere en un signo:
  $-(\vec J\cdot\nabla_2)\vec G = +(\vec J\cdot\nabla_1)\vec G$.

Hasta acá es sólo cálculo vectorial; todavía no se usó el régimen estacionario.

$$\nabla_2\times\vec B(\vec r_2) = \frac{\mu_0}{4\pi}\int_V\left[
4\pi\,\delta(\vec r_2-\vec r_1)\,\vec J(\vec r_1)
+ \left(\vec J(\vec r_1)\cdot\nabla_1\right)
\frac{\vec r_2-\vec r_1}{|\vec r_2-\vec r_1|^3}\right]dV_1 .$$

### 5.3 El término con la delta

Es el fácil: la delta elimina la integral y evalúa $\vec J$ en
$\vec r_1 = \vec r_2$; los $4\pi$ se cancelan:

$$\frac{\mu_0}{4\pi}\int_V 4\pi\,\delta(\vec r_2-\vec r_1)\,\vec J(\vec r_1)\,dV_1
= \mu_0\,\vec J(\vec r_2).$$

### 5.4 El término de borde

Se hace componente a componente; para la componente $x$, con
$G_x = (x_2-x_1)/|\vec r_2-\vec r_1|^3$. La idea es convertirlo en una
divergencia:

$$\nabla_1\cdot\left(\vec J(\vec r_1)\,G_x\right)
= \underbrace{\left(\nabla_1\cdot\vec J(\vec r_1)\right)}_{=\,0}G_x
+ \vec J(\vec r_1)\cdot\nabla_1 G_x .$$

**Acá entra la física:** $\nabla_1\cdot\vec J = 0$ por régimen estacionario.
Entonces el integrando es una divergencia pura y, por el teorema de la
divergencia,

$$\int_V \vec J(\vec r_1)\cdot\nabla_1 G_x\,dV_1
= \oiint_S G_x\;\vec J(\vec r_1)\cdot\hat n\,dS = 0,$$

porque si las corrientes están **localizadas** basta tomar un volumen que las
contenga enteramente: sobre su borde $\vec J = 0$ (ni siquiera hace falta ir al
infinito). Lo mismo para $y$ y $z$.

$$\boxed{\ \nabla\times\vec B = \mu_0\,\vec J\ }
\qquad\text{(corrientes localizadas y estacionarias)}$$

Es la **ley de Ampère** en forma diferencial. Lo que se probó es que Biot y
Savart **implica** Ampère bajo esas dos hipótesis.

### 5.5 Forma integral

Para recuperar la de Física III se toma una curva cerrada $C$ que delimita una
superficie $S$, orientada con la regla de la mano derecha, y se integra el
flujo de ambos lados. Por el teorema de Stokes:

$$\int_S (\nabla\times\vec B)\cdot\hat n\,dS = \oint_C \vec B\cdot d\vec l,
\qquad
\mu_0\int_S \vec J\cdot\hat n\,dS = \mu_0\,I_S,$$

$$\boxed{\ \oint_C \vec B\cdot d\vec l = \mu_0\,I_S\ }$$

con $I_S$ la corriente que cruza $S$.

---

## 6. Ejemplo: cable infinito

Cable recto infinito con corriente estacionaria $I$.

> **Advertencia.** Esta corriente **no está localizada**, así que en rigor lo
> probado no se aplica. Hay que pensarlo como caso límite de una corriente
> localizada; se sabe que el límite está bien porque el resultado ya se obtuvo
> con Biot y Savart.

Curva amperiana: un círculo de radio $r$ en un plano perpendicular al cable.
¿Por qué el campo es tangencial? Las líneas de $\vec B$ tienen que ser cerradas
(no hay monopolos) y el problema tiene simetría de rotación: las únicas curvas
cerradas con esa simetría son círculos. Además el módulo es constante sobre el
círculo:

$$B\,2\pi r = \mu_0 I
\quad\Longrightarrow\quad
B = \frac{\mu_0 I}{2\pi r},$$

el mismo resultado de la clase anterior. Lo que con Biot y Savart llevó un
pizarrón entero, con Ampère lleva una línea.

| | Cuándo conviene |
| --- | --- |
| Ampère | Problemas con mucha simetría |
| Biot y Savart | Poca simetría: hay que hacer las integrales, analítica o numéricamente; siempre funciona |

*La próxima clase: algún ejemplo más de Ampère y el **potencial vector**. Como
$\nabla\times\vec B\neq0$ donde hay corriente, no existe en general un potencial
escalar magnético; pero sí algo parecido a un potencial, que es un vector.*
