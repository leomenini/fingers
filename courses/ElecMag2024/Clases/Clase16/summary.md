# Resumen Clase 16 — Campo magnético: fuerza entre cargas en movimiento, fuerza y torque sobre circuitos

## Índice

1. [Introducción histórica al magnetismo](#1-introducción-histórica-al-magnetismo)
   - [1.1 De las magnetitas a las corrientes](#11-de-las-magnetitas-a-las-corrientes)
   - [1.2 Magnetización y analogía con la polarización](#12-magnetización-y-analogía-con-la-polarización)
   - [1.3 El espín: lo que no es clásico](#13-el-espín-lo-que-no-es-clásico)
2. [Fuerza magnética entre dos cargas](#2-fuerza-magnética-entre-dos-cargas)
   - [2.1 La ley experimental](#21-la-ley-experimental)
   - [2.2 Dominio de validez y el problema del referencial](#22-dominio-de-validez-y-el-problema-del-referencial)
   - [2.3 La constante μ₀ y la velocidad de la luz](#23-la-constante-μ₀-y-la-velocidad-de-la-luz)
3. [Campo magnético y fuerza de Lorentz](#3-campo-magnético-y-fuerza-de-lorentz)
4. [Comparación entre la fuerza magnética y la eléctrica](#4-comparación-entre-la-fuerza-magnética-y-la-eléctrica)
   - [4.1 La cota](#41-la-cota)
   - [4.2 Por qué igual se observa el magnetismo](#42-por-qué-igual-se-observa-el-magnetismo)
5. [Fuerza sobre un cable con corriente](#5-fuerza-sobre-un-cable-con-corriente)
   - [5.1 Un tramo de cable](#51-un-tramo-de-cable)
   - [5.2 Espira cerrada en un campo uniforme](#52-espira-cerrada-en-un-campo-uniforme)
6. [Torque sobre una espira en un campo uniforme](#6-torque-sobre-una-espira-en-un-campo-uniforme)
   - [6.1 Planteo en componentes](#61-planteo-en-componentes)
   - [6.2 Las cuatro integrales](#62-las-cuatro-integrales)
   - [6.3 El vector área y el resultado](#63-el-vector-área-y-el-resultado)
   - [6.4 Momento dipolar magnético](#64-momento-dipolar-magnético)
7. [Corriente distribuida en un volumen](#7-corriente-distribuida-en-un-volumen)

---

## 1. Introducción histórica al magnetismo

### 1.1 De las magnetitas a las corrientes

Que las cargas en movimiento interactúan con fuerzas adicionales a las
electrostáticas no es sorpresa; pero no fue así como se descubrió el
magnetismo, que se conocía mucho antes de saber qué eran las cargas eléctricas.

- **Antigüedad.** Las **magnetitas** —básicamente óxidos de hierro—, colgadas
  de un hilo o flotando en una cubeta, se orientan siempre en una misma
  dirección. Utilidad tecnológica: las brújulas. Interpretación durante buena
  parte de la historia: piedras mágicas.
- **Siglo XIX.** El primero en advertir la naturaleza oculta del fenómeno
  observó que el efecto de una **corriente eléctrica** es muy similar al de un
  **imán** (una piedra magnetizada).

> El VTT transcribe el nombre como «Hertz»/«Ertz»; el docente lo presenta como
> «muy difícil de escribir» y lo escribe en el pizarrón, que no se ve. Por el
> hecho histórico descrito se trata de **Oersted (Ørsted)**; el nombre no se
> puede confirmar desde la transcripción.

De ahí salió una línea de investigación que ocupó todo el siglo XIX, con los
nombres que aparecerán en este capítulo y los siguientes: Ampère, Biot y
Savart, Faraday, Henry, Maxwell.

La conclusión, que es correcta: **hay un único magnetismo**. En los imanes hay,
en algún sentido, corrientes eléctricas «escondidas». El magnetismo es una
interacción entre **cargas en movimiento**; lo único que cambia es que en un
caso la corriente se ve fluir macroscópicamente y en el otro es interna.

### 1.2 Magnetización y analogía con la polarización

| Electricidad | Magnetismo |
| --- | --- |
| Cargas libres, a las que se tiene acceso | Corrientes eléctricas macroscópicas |
| Polarización | **Magnetización**: pequeñas corrientes a nivel atómico o molecular |

Con una diferencia fundamental: la mayoría de los materiales **no** tiene
polarización espontánea (sin campo eléctrico externo, la polarización es cero),
mientras que muchos materiales **sí tienen magnetización espontánea**: se
mantienen como imanes sin que se les aplique ningún campo magnético.

> El docente comenta que una de sus dos líneas de investigación son justamente
> las propiedades de materiales magnéticos, y que en el curso casi no se va a
> hablar de eso.

### 1.3 El espín: lo que no es clásico

Una salvedad que, según el docente, ni siquiera menciona el Reitz: **no todas
esas corrientes son interpretables como cargas clásicas en movimiento**. En los
materiales magnéticos el efecto principal no viene de cargas que se desplazan
sino del **espín** de los electrones.

En una primera aproximación «con muchos defectos», el electrón sería una bolita
cargada que gira sobre sí misma: sus partes se mueven y hay una corriente. Pero
esa imagen no admite interpretación clásica, por una razón directa: la carga
está cuantizada y no hay carga más chica que la del electrón, así que no se lo
puede pensar como una bola con una distribución de carga adentro. Cuando se
intenta, se llega enseguida a absurdos.

> **A nivel clásico no hay magnetismo de la materia.** La magnetización
> espontánea tiene una componente cuántica fundamental; el docente afirma que
> esto «se puede probar» y no lo prueba. Para el curso no importa el origen:
> hay una magnetización que genera efectos magnéticos, y se tratará más
> adelante.

Por ahora: interacción magnética entre cargas en movimiento y corrientes.

---

## 2. Fuerza magnética entre dos cargas

### 2.1 La ley experimental

En electrostática, dos cargas $q_1$ y $q_2$ interactúan según la ley de
Coulomb. Con $\vec r$ el vector que va de la carga 1 a la 2, la fuerza sobre
la 2 es

$$\vec F_{e,2} = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1 q_2}{r^3}\,\vec r .$$

Si las cargas se mueven, esa fuerza **sigue estando**, y se le agrega otra, la
**fuerza magnética**:

$$\boxed{\ \vec F_{m,2} = \frac{\mu_0}{4\pi}\,\frac{q_1 q_2}{r^3}\;
\vec v_2\times\left(\vec v_1\times\vec r\right)\ }$$

Es una **ley experimental**. No es una alternativa a Coulomb sino un
complemento: la suma de las dos vale también en el caso estático, donde las
velocidades son nulas y el segundo término se anula. Hace falta que **las dos**
cargas se muevan.

### 2.2 Dominio de validez y el problema del referencial

> **Esta forma sólo vale si $|\vec v_1|, |\vec v_2| \ll c$**, con
> $c = 2{,}9979\times10^{8}$ m/s la velocidad de la luz. Las correcciones están
> suprimidas por factores $v^2/c^2$: son órdenes superiores de un desarrollo en
> $v/c$.

Un estudiante pregunta lo obvio: **¿velocidades en qué referencial?** Y es «muy
raro». La mecánica newtoniana cumple el principio de Galileo —en todo
referencial inercial valen las mismas leyes—, y esta fórmula hace referencia a
las velocidades en un referencial dado; peor, a las **dos velocidades por
separado** y no a la velocidad relativa. La ley **no es invariante** ante un
cambio de referencial.

Lo que el docente dice al respecto, sin desarrollarlo:

- La fórmula vale en un referencial en que ambas partículas tengan velocidad
  chica; si no existe, no vale.
- Cuando se agregan los términos que la aproximación deja afuera, «todo se
  arregla». Entender cómo llevó un siglo: lo hizo Einstein en 1905, y es la
  teoría de la relatividad. No alcanzaba con corregir la fuerza
  electromagnética: hubo que cambiar la propia ley de Newton.
- «Por ahora no les estoy mostrando la solución, les estoy mostrando el
  problema.»

> Digresión histórica del docente: el principio lo formuló antes Giordano Bruno
> (en la bodega de un gran barco en mar calmo, jugando a los dados y viendo
> volar mariposas, no se puede saber si el barco se mueve); Galileo lo hizo
> famoso.

### 2.3 La constante μ₀ y la velocidad de la luz

$\mu_0$ juega para la fuerza magnética un papel análogo al de $\varepsilon_0$
para la eléctrica: la **permeabilidad magnética del vacío** (la transcripción
dice «permitividad magnética»). En el Sistema Internacional vale

$$\frac{\mu_0}{4\pi} = 10^{-7}\ \frac{\text{N}\,\text{s}^2}{\text{C}^2}
\qquad\text{(exactamente)},$$

sin ningún coeficiente raro: el sistema está elegido así, forma parte de la
definición del coulomb. Y las dos constantes están relacionadas:

$$\boxed{\ \mu_0\,\varepsilon_0 = \frac{1}{c^2}\ }$$

Quien hizo Física III sabe que no es coincidencia —la luz es un fenómeno
electromagnético—, pero por ahora se lo toma como un hecho útil.

---

## 3. Campo magnético y fuerza de Lorentz

Igual que en el caso eléctrico, en lugar de una acción a distancia conviene
pensar la fuerza como el efecto de un **campo** sobre una carga. En
electrostática se factoriza la carga que siente la fuerza:

$$\vec F_{e,2} = q_2\,\vec E, \qquad
\vec E = \frac{q_1}{4\pi\varepsilon_0}\,\frac{\vec r}{r^3} .$$

En el caso magnético hay **dos** propiedades de la carga 2 en juego, su carga y
su velocidad, y se factorizan las dos:

$$\vec F_{m,2} = q_2\,\vec v_2\times\vec B,
\qquad
\boxed{\ \vec B = \frac{\mu_0}{4\pi}\,q_1\,\frac{\vec v_1\times\vec r}{r^3}\ }$$

con $\vec B$ el **campo magnético** producido por la carga 1. La utilidad es la
misma que en el caso eléctrico: todo lo hecho con la ecuación de Laplace habría
sido muy difícil con interacción directa carga a carga.

Con campos eléctrico y magnético presentes, una carga siente la **fuerza de
Lorentz**:

$$\boxed{\ \vec F = q\left(\vec E + \vec v\times\vec B\right)\ }$$

> **¿Por qué un producto vectorial?** «Porque no hay remedio, porque la fuerza
> es así.» Y $\vec v_1$ en $\vec B$ **no** es una velocidad relativa: es la
> velocidad de la carga 1 en el referencial elegido.

---

## 4. Comparación entre la fuerza magnética y la eléctrica

### 4.1 La cota

Usando $\mu_0 = 1/(\varepsilon_0 c^2)$ y repartiendo un $c$ a cada velocidad:

$$\vec F_{m,2} = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1 q_2}{r^3}\;
\frac{\vec v_2}{c}\times\left(\frac{\vec v_1}{c}\times\vec r\right).$$

Al tomar módulos aparecen senos, que son menores o iguales que 1:

$$\boxed{\ |\vec F_{m,2}| \;\le\; |\vec F_{e,2}|\;\frac{v_1}{c}\,\frac{v_2}{c}\ }$$

Para los fenómenos cotidianos —un auto a 300 km/h es insignificante frente a
$c$— la fuerza magnética entre dos cargas es **muchísimo** menor que la
eléctrica. El factor va entre 0 y 1 y, a velocidades normales, está «pegado a
cero».

### 4.2 Por qué igual se observa el magnetismo

Si fuera sólo eso, los fenómenos magnéticos serían inobservables. No lo son
porque no se ven en pares de cargas sino en **conjuntos grandes de cargas con
carga neta nula y corriente no nula**.

> **Ejemplo clave: un cable con corriente.** El cable es neutro, no ejerce
> fuerza de Coulomb; pero la corriente no es cero y el efecto magnético
> sobrevive. Para ver un efecto magnético a velocidades normales hace falta que
> el efecto electrostático sea cero.

Recordatorio a raíz de una pregunta: la velocidad individual de cada electrón
en un conductor es muy alta, pero la velocidad de deriva es chica («algunos
centímetros por hora», según el material).

---

## 5. Fuerza sobre un cable con corriente

### 5.1 Un tramo de cable

Hay un campo magnético $\vec B$, producido por algo que por ahora no interesa, y
un cable descrito por una curva $C$ con corriente $I$. Se piensa el cable como
un cañito de sección $A$. En un tramito $d\vec l$ la velocidad de deriva es
**paralela** a $d\vec l$.

La fuerza sobre el tramito es la fuerza sobre un portador por el número de
portadores que hay en él. Con $n$ portadores por unidad de volumen (un solo
tipo de portador, como en un metal; con varios se suma sobre los tipos):

$$d\vec F = \underbrace{q\,\vec v_d\times\vec B}_{\text{un portador}}\;
\underbrace{n\,A\,dl}_{\text{portadores en } dl}
= A\,n\,q\,dl\;\vec v_d\times\vec B .$$

Como $\vec v_d$ y $d\vec l$ tienen igual dirección y sentido,
$dl\,\vec v_d = v_d\,d\vec l$: se pasa el carácter vectorial de uno al otro.
Y $n\,q\,v_d$ es la densidad de corriente, que por el área da la corriente
($I = JA$ en un conductor filiforme):

$$\boxed{\ d\vec F = I\,d\vec l\times\vec B\ }$$

> Si además hubiera campo eléctrico, el cable no sentiría fuerza eléctrica: es
> neutro. Sólo sobrevive la magnética.

Para un circuito completo se suma sobre la curva; la corriente es la misma en
todo el circuito y sale de la integral:

$$\vec F = I\oint_C d\vec l\times\vec B .$$

### 5.2 Espira cerrada en un campo uniforme

Si $\vec B$ es uniforme sale de la integral —**por la derecha**, porque el
producto vectorial no es conmutativo—:

$$\vec F = I\left(\oint_C d\vec l\right)\times\vec B = 0,$$

porque la suma de todos los $d\vec l$ a lo largo de una curva cerrada es nula.

$$\boxed{\ \text{Una espira en un campo magnético uniforme no experimenta fuerza neta.}\ }$$

Para que haya fuerza el campo tiene que ser **no uniforme**, de modo que partes
distintas de la espira sientan fuerzas distintas. Es la situación normal: cerca
de un imán el campo es más intenso que lejos, y los lados de la espira más
próximos no se compensan con los otros.

---

## 6. Torque sobre una espira en un campo uniforme

Aun en un campo uniforme, una espira **sí** experimenta un torque. En Física III
se vio para una espira plana rectangular; ahora se hace para **cualquier curva
cerrada**, plana o no. (Si el campo no es uniforme hay las dos cosas, fuerza y
torque.)

### 6.1 Planteo en componentes

Respecto de un origen, el torque de un elemento de fuerza es
$d\vec\tau = \vec r\times d\vec F$:

$$\vec\tau = I\oint_C \vec r\times\left(d\vec l\times\vec B\right).$$

Con $d\vec l = (dx, dy, dz)$ y $\vec B = (B_x, B_y, B_z)$, por la regla del
determinante:

$$d\vec l\times\vec B =
(dy\,B_z - dz\,B_y)\,\hat\imath
+ (dz\,B_x - dx\,B_z)\,\hat\jmath
+ (dx\,B_y - dy\,B_x)\,\hat k .$$

Se calcula sólo la componente $x$; las otras salen por **permutación circular**.
Con $\vec r = (x,y,z)$:

$$\left[\vec r\times(d\vec l\times\vec B)\right]_x
= y\,(dx\,B_y - dy\,B_x) - z\,(dz\,B_x - dx\,B_z).$$

### 6.2 Las cuatro integrales

Como $\vec B$ es uniforme, sus componentes salen de las integrales:

$$\frac{\tau_x}{I} = B_y\oint_C y\,dx \;-\; B_x\oint_C y\,dy
\;-\; B_x\oint_C z\,dz \;+\; B_z\oint_C z\,dx .$$

**Las dos fáciles.** $\oint y\,dy = 0$ y $\oint z\,dz = 0$: en una curva cerrada
se integra de $y_{\min}$ a $y_{\max}$ por un lado y se vuelve por el otro; lo
que se suma a la ida se deshace a la vuelta.

**Las otras dos.** $\oint_C y\,dx$ no hace intervenir $z$, así que es idéntica
a la integral sobre $C'$, la **proyección** de $C$ en el plano $Oxy$. Ya es un
problema plano. Se describe $C'$ con dos funciones, $y_1(x)$ por abajo e
$y_2(x)$ por arriba, entre $x_{\min}$ y $x_{\max}$:

$$\oint_{C'} y\,dx = \int_{x_{\min}}^{x_{\max}} y_1\,dx - \int_{x_{\min}}^{x_{\max}} y_2\,dx
= -\,\text{área}(C') .$$

> No vale cero porque el integrando no tiene función potencial: $y$ cambia a
> lo largo de la curva.

### 6.3 El vector área y el resultado

Se definen las tres áreas de las proyecciones de $C$:

| Componente | Proyección de $C$ en el plano | Integral |
| --- | --- | --- |
| $A_z$ | $Oxy$ | $\oint x\,dy = -\oint y\,dx$ |
| $A_x$ | $Oyz$ | $\oint y\,dz = -\oint z\,dy$ |
| $A_y$ | $Ozx$ | $\oint z\,dx = -\oint x\,dz$ |

Lo que se mantiene es la permutación circular $x\to y\to z\to x$; invertir el
orden de las dos coordenadas cambia el signo, porque la proyección se recorre
en el sentido opuesto. Con eso, $\oint y\,dx = -A_z$ y $\oint z\,dx = A_y$:

$$\tau_x = I\left(A_y B_z - A_z B_y\right) = I\left(\vec A\times\vec B\right)_x .$$

Y lo mismo para las otras componentes:

$$\boxed{\ \vec\tau = I\,\vec A\times\vec B\ }
\qquad\text{(curva cerrada cualquiera, } \vec B \text{ uniforme)}$$

con $\vec A = (A_x, A_y, A_z)$ el **vector área**.

> **Qué hay que retener.** El resultado es el mismo de Física III, pero vale
> para curvas en el espacio. En el caso plano el vector área era «el área por
> la normal»; para una curva no plana no es obvio qué significa, y la respuesta
> es: el vector cuyas componentes cartesianas son las áreas de las proyecciones
> en los tres planos.

> El docente tropieza varias veces con los signos en el pizarrón y deja la
> verificación como tarea. A la pregunta de cómo se orienta el área responde
> que las componentes son áreas «en el sentido usual» y que el vector queda sin
> ambigüedad; el sentido lo fijan las integrales de la tabla, que dependen del
> sentido en que se recorre la curva (el de la corriente).

**Ejercicio propuesto** (generalizar el razonamiento componente a componente):

$$\vec A = \frac12\oint_C \vec r\times d\vec l .$$

> La transcripción dice «$\vec r$ escalar $d\vec l$»; para que el resultado sea
> un vector, y coincida con la tabla, tiene que ser el producto vectorial.

### 6.4 Momento dipolar magnético

A la combinación

$$\boxed{\ \vec m = I\,\vec A\ }$$

se la llama **momento dipolar magnético**, de modo que
$\vec\tau = \vec m\times\vec B$.

---

## 7. Corriente distribuida en un volumen

Todo lo anterior es para cables. Se generaliza a una densidad de corriente
$\vec J(\vec r)$ distribuida en un volumen dividiéndola en **cablecitos
filiformes imaginarios** que siguen las líneas de corriente. En un tramito de
uno de ellos, de sección $A$, se toma $d\vec l$ paralelo a $\vec J$, así que
$I\,d\vec l = A\,J\,d\vec l = A\,|d\vec l|\,\vec J$:

$$d\vec F = I\,d\vec l\times\vec B = A\,|d\vec l|\;\vec J\times\vec B
= \vec J\times\vec B\;dV,$$

porque $A\,|d\vec l|$ es el elemento de volumen. En lugar de integrar sobre una
curva se integra sobre el volumen:

$$\boxed{\ \vec F = \int_V \vec J\times\vec B\;dV\ }$$

Regla para recordarla: donde había $I\,d\vec l$ va $\vec J\,dV$. Con el torque
se puede hacer lo mismo, sin sorpresas; el docente no lo escribe.

*La próxima clase: la ley de Biot y Savart —cómo una distribución de corrientes
genera un campo magnético— y, lo que en Física III se afirmaba sin probar, la
equivalencia entre Biot–Savart y la ley de Ampère, para lo cual hace falta
cálculo vectorial.*
