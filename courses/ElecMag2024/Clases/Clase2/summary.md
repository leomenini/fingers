# Resumen Clase 2 — Líneas de campo, rotacional nulo y potencial electrostático, teorema de Stokes

## Índice

1. [Líneas de campo](#1-líneas-de-campo)
   - [1.1 Fuentes y sumideros](#11-fuentes-y-sumideros)
   - [1.2 Una aclaración de notación](#12-una-aclaración-de-notación)
   - [1.3 Cerca de una carga puntual](#13-cerca-de-una-carga-puntual)
2. [Repaso de operadores diferenciales](#2-repaso-de-operadores-diferenciales)
   - [2.1 Producto vectorial](#21-producto-vectorial)
   - [2.2 Gradiente, divergencia y rotacional](#22-gradiente-divergencia-y-rotacional)
3. [El campo electrostático es irrotacional](#3-el-campo-electrostático-es-irrotacional)
   - [3.1 Enunciado](#31-enunciado)
   - [3.2 Prueba para cargas puntuales](#32-prueba-para-cargas-puntuales)
4. [Potencial electrostático](#4-potencial-electrostático)
   - [4.1 De rotacional nulo a gradiente](#41-de-rotacional-nulo-a-gradiente)
   - [4.2 Las condiciones que piden los matemáticos](#42-las-condiciones-que-piden-los-matemáticos)
   - [4.3 Teorema de Stokes y circulación nula](#43-teorema-de-stokes-y-circulación-nula)
   - [4.4 El potencial como integral de línea](#44-el-potencial-como-integral-de-línea)
   - [4.5 Referencia en el infinito](#45-referencia-en-el-infinito)
5. [Interpretación geométrica del rotacional](#5-interpretación-geométrica-del-rotacional)
6. [Prueba «a lo físico» del teorema de Stokes](#6-prueba-a-lo-físico-del-teorema-de-stokes)
   - [6.1 Dividir la superficie en una malla](#61-dividir-la-superficie-en-una-malla)
   - [6.2 Un rectángulo chiquito](#62-un-rectángulo-chiquito)
   - [6.3 Sumar los pedacitos](#63-sumar-los-pedacitos)

---

## 1. Líneas de campo

### 1.1 Fuentes y sumideros

El campo eléctrico es un campo vectorial. Cuando sus **fuentes** y **sumideros**
están en zonas aisladas —la expresión viene de la mecánica de fluidos: el agua
sale de una fuente y desaparece en un sumidero—, conviene representarlo con
**líneas de campo**, introducidas por Faraday. Para el campo eléctrico, las
cargas positivas son fuentes y las negativas, sumideros:

- $\vec E$ es **tangente** a las líneas en cada punto;
- las líneas **empiezan en cargas positivas** y **terminan en cargas
  negativas**.

### 1.2 Una aclaración de notación

Sobre la clase pasada: en la fórmula de la fuerza sobre una carga $q$, el
subíndice 0 de $\vec r_{0i}$ se refiere a la carga $q$ (que podría haberse
llamado $q_0$), no al origen de coordenadas. El origen se toma en otro lado,
arbitrario, porque a veces conviene mover el punto de observación; las
posiciones de las demás cargas son datos.

> El docente insiste en que le hagan las preguntas durante la clase, no al
> terminar, para poder contestárselas a todos.

### 1.3 Cerca de una carga puntual

Muy cerca de una carga puntual, el campo de las demás cargas es despreciable y
hay simetría esférica: las líneas son **radiales** y **equiespaciadas
angularmente**.

---

## 2. Repaso de operadores diferenciales

«Yo tengo por costumbre cumplir mis promesas»: se acaba la sensación de que todo
es repaso. El potencial ya se vio en Física III, pero ahora se lo trata con el
cálculo vectorial (que es previatura obligatoria del curso).

### 2.1 Producto vectorial

El producto vectorial $\vec A\wedge\vec B$ no es conmutativo. En cartesianas se
recuerda con la regla mnemotécnica del determinante, desarrollado por la
primera fila:

$$\vec A\wedge\vec B =
\begin{vmatrix} \hat\imath & \hat\jmath & \hat k\\ A_x & A_y & A_z\\ B_x & B_y & B_z\end{vmatrix}
= (A_yB_z - A_zB_y)\,\hat\imath + (A_zB_x - A_xB_z)\,\hat\jmath + (A_xB_y - A_yB_x)\,\hat k .$$

> **Notación.** El docente prefiere $\wedge$ a $\times$: la cruz «suena demasiado
> al producto común y silvestre» y puede tentar a pensar que es conmutativo. En
> los libros aparecen las dos. (Estas notas usan $\times$, la convención del
> resto del curso.)

El producto vectorial tiene también una definición **geométrica**, independiente
de las coordenadas: perpendicular a los dos vectores, de módulo
$|\vec A||\vec B|\sin\theta$ y sentido dado por la regla de la mano derecha.

### 2.2 Gradiente, divergencia y rotacional

El **gradiente** es un **operador diferencial** («un nombre rimbombante para algo
que opera con derivadas»). En cartesianas:

$$\vec\nabla = \hat\imath\,\pdv{x} + \hat\jmath\,\pdv{y} + \hat k\,\pdv{z}.$$

> Definirlo así no es lindo, porque depende de un sistema de coordenadas
> particular; hay una definición intrínseca, que aparecerá.

La **divergencia** es «una especie de producto escalar» del operador con un
vector, y el **rotacional**, un producto vectorial:

$$\div\vec B = \pdv{B_x}{x} + \pdv{B_y}{y} + \pdv{B_z}{z},$$

$$\curl\vec B =
\left(\pdv{B_z}{y}-\pdv{B_y}{z}\right)\hat\imath +
\left(\pdv{B_x}{z}-\pdv{B_z}{x}\right)\hat\jmath +
\left(\pdv{B_y}{x}-\pdv{B_x}{y}\right)\hat k .$$

Un campo con **rotacional nulo** se llama **irrotacional**.

---

## 3. El campo electrostático es irrotacional

### 3.1 Enunciado

$$\boxed{\ \curl\vec E = 0\ }\qquad\text{(campo electrostático)}$$

Es una propiedad muy importante. **No vale** para campos que dependen del tiempo,
donde aparecen otros fenómenos.

### 3.2 Prueba para cargas puntuales

Alcanza con probarlo para un conjunto de cargas puntuales: como la carga está
cuantizada, cualquier sistema lo es, y una distribución continua es una
idealización que promedia. El campo es

$$\vec E(\vec r) = \frac{1}{4\pi\varepsilon_0}\sum_{i=1}^{n}
q_i\,\frac{\vec r-\vec r_i}{|\vec r-\vec r_i|^3}.$$

> Las derivadas son respecto de las coordenadas del **punto de observación**
> $\vec r$; las $\vec r_i$ están fijas. En $\vec r = \vec r_i$ el campo es
> singular y el rotacional no está definido: la propiedad vale **fuera de las
> cargas**.

**Paso 1: linealidad.** El rotacional es un operador lineal, así que basta probar
que es nulo el rotacional del campo de **una** carga:

$$\curl\left(\frac{\vec r-\vec r_i}{|\vec r-\vec r_i|^3}\right) = 0 .$$

**Paso 2: derivada de un producto.** Se usa la fórmula (del formulario del curso;
más adelante el docente promete un truco para deducir todas):

$$\curl(f\,\vec v) = \grad f\times\vec v + f\,\curl\vec v .$$

Lo único no trivial de estas fórmulas son los signos, porque el producto
vectorial no conmuta. Queda como ejercicio verificarla por fuerza bruta.

$$\curl\left(\frac{\vec r-\vec r_i}{|\vec r-\vec r_i|^3}\right)
= \grad\!\left(\frac{1}{|\vec r-\vec r_i|^3}\right)\times(\vec r-\vec r_i)
+ \frac{1}{|\vec r-\vec r_i|^3}\,\curl(\vec r-\vec r_i).$$

**Segundo término.** $\vec r_i$ no depende de las coordenadas de derivación, así
que queda $\curl\vec r$, que es cero: cada componente es la derivada de una
coordenada respecto de otra.

**Primer término.** Con
$|\vec r-\vec r_i|^{-3} = \big[(x-x_i)^2+(y-y_i)^2+(z-z_i)^2\big]^{-3/2}$ y la
regla de la cadena:

$$\pdv{x}\,|\vec r-\vec r_i|^{-3} = -\frac32\,\big[\cdots\big]^{-5/2}\,2(x-x_i)
= -\frac{3\,(x-x_i)}{|\vec r-\vec r_i|^5},$$

e igual para $y$ y $z$:

$$\grad\!\left(\frac{1}{|\vec r-\vec r_i|^3}\right) = -\,\frac{3\,(\vec r-\vec r_i)}{|\vec r-\vec r_i|^5}.$$

Es **colineal** con $\vec r-\vec r_i$, y el producto vectorial de dos vectores
colineales es nulo. Los dos términos se anulan:

$$\curl\vec E = 0\qquad\text{para } \vec r\neq\vec r_i .$$

> A una pregunta: vale en cualquier punto que no sea una carga puntual, sin
> importar cuántas cargas haya cerca. Con una distribución continua las cosas
> se suavizan y vale en todos lados.

---

## 4. Potencial electrostático

### 4.1 De rotacional nulo a gradiente

Un resultado de cálculo vectorial: un campo irrotacional es un gradiente. Por
costumbre histórica, en física se le pone un signo menos:

$$\boxed{\ \vec E = -\grad\phi\ }$$

con $\phi$ el **potencial electrostático**. Un campo de tres componentes queda
descrito por **una sola función escalar**: el campo esconde una simplicidad
subyacente.

### 4.2 Las condiciones que piden los matemáticos

«Hice trampa, las cosas que hacemos los físicos.» El «implica» exige:

1. que el campo esté definido y sea suficientemente derivable;
2. que la región sea **simplemente conexa**: conexa, y tal que toda curva
   cerrada se pueda deformar continuamente a un punto.

El espacio menos un conjunto de puntos aislados **es** simplemente conexo. Un
toro (una dona) no.

> **¿Y una barra infinita?** El espacio menos una línea infinita no es
> simplemente conexo, y ahí no es cierto que **cualquier** campo irrotacional
> sea un gradiente. Pero una barra infinita no existe: el campo eléctrico de
> una barra infinita es el límite del de barras finitas, que sí es un
> gradiente, y conserva la propiedad. No es un campo cualquiera: «tenemos más
> información».

### 4.3 Teorema de Stokes y circulación nula

En Física III el potencial se introducía distinto: a partir de que el campo es
**conservativo** en sentido integral. El puente es el **teorema de Stokes**: dada
una curva cerrada orientada $C$ y una superficie $S$ que la tiene por borde,
orientada con la regla de la mano derecha,

$$\boxed{\ \oint_C \vec v\cdot d\vec l = \int_S (\curl\vec v)\cdot\hat n\,dS\ }$$

para cualquier campo vectorial suficientemente diferenciable (es matemática pura,
no electromagnetismo). Con $\curl\vec E = 0$:

$$\oint_C \vec E\cdot d\vec l = 0\qquad\text{para toda curva cerrada } C .$$

> Muchos estudiantes no recuerdan haber visto la prueba de Stokes en cálculo
> vectorial; el docente la hace «a lo físico» al final de la clase (§6).

### 4.4 El potencial como integral de línea

Si la circulación en toda curva cerrada es nula, para dos curvas $C_1$ y $C_2$
que van de $\vec r_0$ a $\vec r$:

$$\int_{C_1}\vec E\cdot d\vec l = \int_{C_2}\vec E\cdot d\vec l,$$

porque recorrer $C_1$ y volver por $C_2$ al revés es una curva cerrada (y dar
vuelta $C_2$ cambia el signo de su integral). La integral no depende del camino
y se puede definir

$$\boxed{\ \phi(\vec r) = -\int_{\vec r_0}^{\vec r}\vec E\cdot d\vec l\ }$$

por cualquier curva, con $d\vec l$ los «vectorcitos tangentes» a la curva, como
al calcular un trabajo. Entonces $\vec E = -\grad\phi$.

> **$\phi$ no es único**: depende del punto de referencia $\vec r_0$, que se
> elige como se quiera. $\vec E$ sí es único.

### 4.5 Referencia en el infinito

Con $\vec r_0$ en el infinito se obtiene el potencial de Física III, que tiende a
cero en el infinito (si las cargas están localizadas) y tiene la ventaja de ser
una expresión explícita:

$$\boxed{\ \phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\sum_{i=1}^{n}\frac{q_i}{|\vec r-\vec r_i|}\ }$$

**Verificación.** Con
$|\vec r-\vec r_i|^{-1} = \big[(x-x_i)^2+\cdots\big]^{-1/2}$, la componente $x$
del gradiente da $-(x-x_i)/|\vec r-\vec r_i|^3$, y así con las otras:

$$\grad\phi = -\frac{1}{4\pi\varepsilon_0}\sum_i q_i\,\frac{\vec r-\vec r_i}{|\vec r-\vec r_i|^3} = -\vec E .$$

> La fórmula del potencial «la saqué de la manga»: en Física III se deduce con
> una cuenta pesada. Como ya se conoce, acá sólo se verifica. «Esas son las
> cosas que uno se permite cuando está haciendo repasos.» En general es más
> cómodo calcular el potencial y después el gradiente que calcular el campo
> directamente.

Para una distribución continua, con las mismas salvedades de la clase pasada:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\int_V\frac{\rho(\vec r\,')}{|\vec r-\vec r\,'|}\,dV' .$$

---

## 5. Interpretación geométrica del rotacional

El rotacional se definió en cartesianas, lo que «es medio feo»: no queda claro
que sea una propiedad intrínseca. Stokes da una definición geométrica. Se toma
una curva $C$ **pequeña y plana** y la superficie plana $S$ que encierra, de
área $\Delta S$ y normal $\hat n$. Como la superficie es muy chica, el rotacional
sale de la integral (teorema del valor medio):

$$\oint_C\vec v\cdot d\vec l \approx (\curl\vec v)\cdot\hat n\;\Delta S,$$

$$\boxed{\ (\curl\vec v)\cdot\hat n = \lim_{\Delta S\to0}\frac{1}{\Delta S}\oint_C\vec v\cdot d\vec l\ }$$

Es la **circulación por unidad de área**, como intuía un estudiante («lo que
cuesta dar una vueltita»). Nada depende del sistema de coordenadas, y como
$\hat n$ se elige libremente, da cualquier componente.

> Para **calcular**, la fórmula en coordenadas es más útil. Pero definir las
> cosas sólo a partir de un sistema de coordenadas es peligroso: podría no ser
> algo intrínseco. Ésta muestra que lo es, y además da la pista de la prueba de
> Stokes.

---

## 6. Prueba «a lo físico» del teorema de Stokes

«Las imágenes que siguen pueden ser hirientes para un matemático.» El docente
cita la introducción de *The Quantum Theory of Fields* de Steven Weinberg (premio
Nobel, fallecido poco antes), donde advierte que la mayoría de sus pruebas
«llenarían de lágrimas los ojos de cualquier lector matemático»; él cree que
son lágrimas de risa.

Se suponen superficies **orientables** (y suficiente regularidad).

### 6.1 Dividir la superficie en una malla

Se imagina la superficie como la red de un cazamariposas y la curva $C$ como el
aro. Se divide la red en muchas mallitas $C_i$, todas recorridas en el **mismo
sentido** (antihorario, por ejemplo). Al sumar las circulaciones, **los tramos
internos se cancelan**: cada segmento compartido por dos mallitas se recorre una
vez en cada sentido. Queda sólo el borde:

$$\sum_i\oint_{C_i}\vec v\cdot d\vec l = \oint_C\vec v\cdot d\vec l .$$

Esto no requiere ningún límite: vale para una malla gruesa. Es «el principio de
Jack el Destripador»: cortar un problema grande en pedacitos.

### 6.2 Un rectángulo chiquito

Si las mallitas son muy chicas son casi planas, y se las puede tomar
rectangulares («la parte más trucha de la prueba, pero se puede hacer»). Como
todo es geométrico, se elige para cada una un sistema de coordenadas con el
rectángulo en el plano $xy$: esquina $(x_0,y_0)$ y lados $a$ (en $x$) y $b$ (en
$y$), recorrido en sentido antihorario por los tramos 1 (abajo), 2 (derecha), 3
(arriba) y 4 (izquierda).

En cada tramo chico, la integral se aproxima por el valor en el punto medio por
el largo, con el signo del sentido de recorrido:

| Tramo | Integral aproximada |
| --- | --- |
| 1 (abajo, hacia $+x$) | $v_x(x_0+\tfrac a2,\,y_0)\;a$ |
| 2 (derecha, hacia $+y$) | $v_y(x_0+a,\,y_0+\tfrac b2)\;b$ |
| 3 (arriba, hacia $-x$) | $-\,v_x(x_0+\tfrac a2,\,y_0+b)\;a$ |
| 4 (izquierda, hacia $-y$) | $-\,v_y(x_0,\,y_0+\tfrac b2)\;b$ |

Agrupando 1 con 3 y 2 con 4, cada diferencia es el comienzo de un **desarrollo
de Taylor**: el orden cero se cancela y queda el primer orden, con la derivada
en la dirección en que se desplazó el punto:

$$\oint_{C_i}\vec v\cdot d\vec l \approx
ab\left(\pdv{v_y}{x} - \pdv{v_x}{y}\right)
= (\curl\vec v)\cdot\hat k\;\Delta S,$$

con $\Delta S = ab$. Los términos despreciados son de orden cúbico en los lados.
**Para cada mallita vale Stokes.**

> Varios estudiantes preguntan si $v_x(x_0+\tfrac a2, y_0)$ es un producto: no,
> es la componente evaluada en ese punto.

### 6.3 Sumar los pedacitos

$$\oint_C\vec v\cdot d\vec l = \sum_i\oint_{C_i}\vec v\cdot d\vec l
= \sum_i\int_{S_i}(\curl\vec v)\cdot\hat n\,dS
= \int_S(\curl\vec v)\cdot\hat n\,dS .\ \blacksquare$$

Se reduce el problema a un pedacito, se hace la cuenta explícita para él con
Taylor, y se suma.

*La próxima clase continúa con la ley de Gauss.*
