# Resumen Clase 14 — Densidad de corriente, ecuación de continuidad, ley de Ohm y conductores en régimen estacionario

## Índice

1. [Densidad de corriente](#1-densidad-de-corriente)
   - [1.1 Velocidad de arrastre](#11-velocidad-de-arrastre)
   - [1.2 Corriente a través de una superficie pequeña](#12-corriente-a-través-de-una-superficie-pequeña)
   - [1.3 La corriente como flujo de un campo vectorial](#13-la-corriente-como-flujo-de-un-campo-vectorial)
2. [Ecuación de continuidad](#2-ecuación-de-continuidad)
3. [Ley de Ohm](#3-ley-de-ohm)
   - [3.1 Conductividad en un medio homogéneo e isotrópico](#31-conductividad-en-un-medio-homogéneo-e-isotrópico)
   - [3.2 Materiales óhmicos](#32-materiales-óhmicos)
   - [3.3 Por qué velocidad constante y no aceleración constante](#33-por-qué-velocidad-constante-y-no-aceleración-constante)
   - [3.4 Resistividad, unidades y órdenes de magnitud](#34-resistividad-unidades-y-órdenes-de-magnitud)
4. [Resistencia](#4-resistencia)
   - [4.1 Cable filiforme](#41-cable-filiforme)
   - [4.2 Un resistor de forma cualquiera](#42-un-resistor-de-forma-cualquiera)
5. [Efecto Joule](#5-efecto-joule)
   - [5.1 Potencia en un dispositivo](#51-potencia-en-un-dispositivo)
   - [5.2 Potencia por unidad de volumen](#52-potencia-por-unidad-de-volumen)
6. [Corrientes en régimen estacionario](#6-corrientes-en-régimen-estacionario)
   - [6.1 Divergencia nula de la corriente y del campo](#61-divergencia-nula-de-la-corriente-y-del-campo)
   - [6.2 El rotacional sigue siendo cero: vale Laplace](#62-el-rotacional-sigue-siendo-cero-vale-laplace)
   - [6.3 Un problema tipo: esfera conductora en una corriente uniforme](#63-un-problema-tipo-esfera-conductora-en-una-corriente-uniforme)
   - [6.4 Condiciones de borde entre dos conductores](#64-condiciones-de-borde-entre-dos-conductores)
7. [Analogía entre electrostática y régimen estacionario](#7-analogía-entre-electrostática-y-régimen-estacionario)
   - [7.1 Tabla de correspondencias](#71-tabla-de-correspondencias)
   - [7.2 Prueba de la ley de Ohm para resistores](#72-prueba-de-la-ley-de-ohm-para-resistores)

---

## 1. Densidad de corriente

La clase anterior cerró introduciendo la corriente eléctrica. La **densidad de
corriente** ya se vio en Física III; acá se la rehace «más prolijo», con las
herramientas de cálculo vectorial.

### 1.1 Velocidad de arrastre

Se supone por ahora un medio con **un único tipo de portador** —los electrones
de un metal, o un electrolito donde domina un ion—, de carga $q$ y con $N$
portadores por unidad de volumen.

Sin campo eléctrico aplicado los portadores **no están quietos**: la agitación
térmica los mueve mucho, pero con igual probabilidad en todas las direcciones.
El promedio de la velocidad es nulo:

$$\langle \vec v\rangle = 0 \qquad (\text{sin campo aplicado}).$$

Un campo eléctrico realista, de laboratorio, es chiquito frente a los campos
presentes a escala atómica (distancias del orden del ångström, campos que
crecen como $1/r^2$). Por eso casi no altera el movimiento de **un** electrón
particular. Pero sobre el **promedio** el efecto es grande, porque sin campo el
promedio era exactamente cero. Al aplicar un campo aparece

$$\langle \vec v\rangle \equiv \vec v_d \neq 0,$$

la **velocidad de deriva o de arrastre**, cuyo módulo es mucho menor que el de
la velocidad típica de cada portador.

> **Convención de aquí en más.** Se ignora la velocidad particular de cada
> portador y se trabaja «como si todos se movieran con su velocidad promedio»
> $\vec v_d$. El docente lo llama explícitamente «hacer trampa»: la otra
> velocidad existe, pero para la conducción a este nivel no importa.

### 1.2 Corriente a través de una superficie pequeña

Se toma un trozo de material (un paralelepípedo) y en él una sección de área
$A$ con versor normal $\hat n$. El sentido de $\hat n$ es una **elección de
orientación**: fija qué corriente se llama positiva.

Pregunta: ¿cuántos portadores cruzan $A$, en promedio, en un intervalo
$\Delta t$? Son los que están en el volumen de base $A$ y ancho
$(\vec v_d\cdot\hat n)\,\Delta t$:

$$\#\,\text{portadores} = N\,A\,(\vec v_d\cdot\hat n)\,\Delta t,
\qquad
\Delta Q = q\,N\,A\,(\vec v_d\cdot\hat n)\,\Delta t .$$

Dividiendo por $\Delta t$:

$$I = \frac{\Delta Q}{\Delta t} = q\,N\,A\;\vec v_d\cdot\hat n .$$

> Está implícito que la región es **suficientemente chica** para despreciar la
> variación de $\vec v_d$ de un punto a otro (el campo puede ser más intenso en
> una zona que en otra) y para aproximar la superficie por un plano.

### 1.3 La corriente como flujo de un campo vectorial

Para una superficie $S$ grande, no necesariamente plana y con $\vec v_d$ no
uniforme, primero se la orienta —tiene que ser una superficie **orientable**— y
se suman las contribuciones de cada pedacito:

$$I = \int_S q\,N\,\vec v_d\cdot\hat n\,dS .$$

La corriente es entonces el **flujo** de un campo vectorial:

$$\boxed{\ I = \int_S \vec J\cdot\hat n\,dS,
\qquad \vec J = N\,q\,\vec v_d\ }$$

y a $\vec J$ se lo llama **densidad de corriente**. Si hay varios tipos de
portadores (lo usual en un electrolito) se suma sobre ellos, cada uno con su
densidad, su carga y su propia velocidad de deriva:

$$\vec J = \sum_i N_i\,q_i\,\vec v_{d,i} .$$

---

## 2. Ecuación de continuidad

La densidad de corriente y la densidad de carga **no pueden ser
independientes**, porque la carga total se conserva: la única manera de que
cambie la carga encerrada en un volumen es que entre o salga.

Se toma un volumen $V$ cualquiera dentro del conductor, limitado por una
superficie $S$, con normal $\hat n$ **saliente** (el criterio del curso para
superficies cerradas). La carga que entra por unidad de tiempo es la corriente
entrante, o sea menos el flujo saliente; por el teorema de la divergencia,

$$I_{\text{entrante}} = -\oiint_S \vec J\cdot\hat n\,dS
= -\int_V \nabla\cdot\vec J\;dV .$$

Por otro lado, si $Q(t)$ es la carga contenida en $V$ en el instante $t$, una
corriente entrante positiva la hace crecer:

$$I_{\text{entrante}} = \dot Q(t) = \frac{d}{dt}\int_V \rho\,dV
= \int_V \frac{\partial\rho}{\partial t}\,dV .$$

El último paso usa que el volumen $V$ es arbitrario pero **fijo**, no depende
del tiempo; lo único que depende de $t$ es $\rho$, y la derivada es parcial
porque $\rho$ depende también de la posición. Igualando:

$$-\int_V \nabla\cdot\vec J\;dV = \int_V \frac{\partial\rho}{\partial t}\,dV
\qquad \text{para todo } V .$$

Dos integrales iguales sobre **toda** región de integración, con integrandos
continuos, tienen integrandos iguales:

$$\boxed{\ \frac{\partial\rho}{\partial t} + \nabla\cdot\vec J = 0\ }$$

Es la **ecuación de continuidad**: la expresión local —en un punto y en un
instante— de la conservación de la carga. La carga que cambió en un lugar es
porque se fue a otro, no porque haya aparecido o desaparecido.

> El argumento exige que valga para **todo** volumen. Para un volumen dado, una
> integral puede anularse sin que se anule el integrando.

---

## 3. Ley de Ohm

Tema conocido de Física III, al que ahora se le va a «sacar el jugo de una
manera nueva».

### 3.1 Conductividad en un medio homogéneo e isotrópico

Se supone, como antes para los dieléctricos, un conductor **homogéneo e
isotrópico**. Un metal es localmente un cristal, con direcciones
preferenciales; pero suele ser *policristalino* —muchos cristalitos orientados
al azar—, así que macroscópicamente se comporta como isotrópico. En un fluido
(un electrolito) la isotropía es casi siempre obvia.

Si el material no tiene direcciones preferenciales, al aplicar un campo
eléctrico la **única** dirección disponible es la de $\vec E$. Como $\vec J$ es
un vector, tiene que ser colineal con él:

$$\vec J = g(E)\,\vec E .$$

Esto define la **conductividad eléctrica** $g$, a priori función del módulo del
campo: a igual campo, más $g$ significa más corriente. La colinealidad viene de
la isotropía; que $g$ no dependa del punto, de la homogeneidad.

> Es difícil tener un material inhomogéneo que sea isotrópico: la
> inhomogeneidad trae consigo una dirección, la de variación de la propiedad.

### 3.2 Materiales óhmicos

En muchos materiales, llamados **óhmicos** o *lineales*, $g$ no depende de $E$
en muy buena aproximación:

$$\boxed{\ \vec J = g\,\vec E\ } \qquad \text{(ley de Ohm)}$$

La razón cualitativa es la misma de §1.1: el campo aplicado hay que compararlo
con los campos que el material ya tiene internamente, y frente a ellos es muy
chico. La relación lineal es el comienzo de un desarrollo de Taylor del cual el
orden siguiente es despreciable —lo mismo que pasaba con la polarización.

Metales y electrolitos obedecen muy bien la relación lineal. Los
semiconductores también suelen hacerlo; los que **no** son lineales son algunos
dispositivos construidos combinando distintos semiconductores, como las uniones
PN con las que se hacen los diodos. (El docente se corrige en clase: primero
dijo que los semiconductores no eran lineales.)

### 3.3 Por qué velocidad constante y no aceleración constante

La ley de Ohm no es obvia. Un campo uniforme y constante ejerce sobre cada
electrón una fuerza constante, y por la segunda ley de Newton uno esperaría una
**aceleración** constante, no una corriente —una velocidad— constante.

La explicación: el electrón no se mueve en una caja vacía. Entre choque y
choque el campo lo acelera; al chocar transfiere la cantidad de movimiento
adquirida, hace vibrar la red cristalina —eso es el **efecto Joule**— y
«arranca de nuevo». Acelera, golpea, baja; en promedio la velocidad se
mantiene.

> **Contra qué choca.** Con la densidad de iones que hay, uno esperaría que el
> electrón chocara todo el tiempo. No es así: por un efecto de mecánica
> cuántica, no explicable clásicamente, el electrón **no choca con la red
> perfecta**; choca con sus imperfecciones (defectos) o con sus fluctuaciones
> (la red vibra). El modelo de Drude, visto en Física III, no especifica contra
> qué choca, y su estimación no da bien: el libre recorrido medio real es mucho
> mayor que el que Drude estimaba. Se entendió décadas después.

Dos comentarios al pasar, por preguntas de los estudiantes: en un
superconductor, sin resistencia, «hay que pensarlo de cero»; y los electrones no
se deterioran con los choques —no tienen una estructura interna que quede
«abollada»—, sólo intercambian energía.

### 3.4 Resistividad, unidades y órdenes de magnitud

Al inverso de la conductividad se lo llama **resistividad**:

$$\eta = \frac{1}{g} .$$

En Física III se la notó $\rho$; el Reitz usa otra letra para no confundirla con
la densidad volumétrica de carga. Su unidad es el ohm por metro (multiplicados):

$$[\eta] = \Omega\cdot\text{m}, \qquad 1\ \Omega = \frac{1\ \text{V}}{1\ \text{A}} .$$

El ohm es la unidad natural de la *resistencia* (§4), no de la resistividad. La
resistividad es una propiedad **del material**, que no depende de su tamaño ni
de su forma.

El docente escribe en el pizarrón una tabla de resistividades de cobre,
aluminio, plata, solución de cloruro de sodio, grafito, germanio puro, germanio
dopado (valor que depende del dopaje) y vidrio. **Los valores no se dicen en
voz alta**, salvo el del vidrio: entre $10^{10}$ y $10^{14}\ \Omega\cdot$m.
Las conclusiones que saca:

- la separación entre aislantes y conductores es muy nítida: la diferencia
  entre el vidrio y un metal es gigantesca;
- una solución salina es conductora, pero sigue siendo **muchos órdenes de
  magnitud** peor conductor que un metal: queda «en el medio».

---

## 4. Resistencia

### 4.1 Cable filiforme

Ejemplo simple: un cable cilíndrico de sección $A$, largo $L$ y resistividad
$\eta$ uniforme, con una diferencia de potencial $\Delta\phi$ entre sus bornes
(por ejemplo una batería). El campo es uniforme, de módulo $E = \Delta\phi/L$.
Usando la ley de Ohm del material, $E = \eta J$, y que con $\vec J$ uniforme y
normal a la sección el flujo es simplemente $I = J A$:

$$\Delta\phi = L\,E = L\,\eta\,J = \frac{\eta L}{A}\,I .$$

$$\boxed{\ \Delta\phi = R\,I, \qquad R = \frac{\eta L}{A}\ }
\qquad \text{(resistor filiforme)}$$

### 4.2 Un resistor de forma cualquiera

La fórmula $R = \eta L/A$ vale **sólo** para esa geometría. La proporcionalidad
$\Delta\phi = R\,I$, en cambio, vale para cualquier conductor óhmico: es la
**ley de Ohm para resistores**.

El ejemplo del docente es un conductor con forma de pera —una pera real, que no
es mal conductor: agua con cosas disueltas— al que se le conectan dos cables en
lugares cualesquiera. $R$ depende de la forma de la pera **y de los puntos donde
se la conecta**: si la corriente tiene que atravesar un tramo más corto o más
grueso, la resistencia es otra.

> En este punto de la clase la afirmación queda sin demostrar. La prueba llega
> al final (§7.2), sobre la hora.

---

## 5. Efecto Joule

### 5.1 Potencia en un dispositivo

El campo aporta energía a los electrones, pero ellos no la guardan: la pasan a
la red en forma permanente y el material se calienta. El trabajo para mover una
carga $\Delta Q$ a través de una diferencia de potencial $\Delta\phi$ es
$\Delta W = \Delta\phi\,\Delta Q$, así que la potencia es

$$\boxed{\ P = \frac{dW}{dt} = \Delta\phi\;I\ }$$

Es una fórmula **totalmente general**, válida para cualquier dispositivo. En un
resistor, $\Delta\phi = R I$ y la potencia disipada es

$$P = R\,I^2 .$$

### 5.2 Potencia por unidad de volumen

Ahora la misma idea no para el objeto entero sino distribuida en el volumen. La
potencia que la fuerza eléctrica entrega a **un** portador es fuerza por
velocidad (se supone un solo tipo de portador para simplificar):

$$P_{\text{portador}} = \vec F_e\cdot\vec v_d
= q\vec E\cdot\frac{\vec J}{Nq} = \frac{\vec E\cdot\vec J}{N},$$

donde se usó $\vec F_e = q\vec E$ y $\vec J = Nq\,\vec v_d$. En un volumen
pequeño $\Delta V$ hay $N\,\Delta V$ portadores, así que la potencia entregada
ahí es $\vec E\cdot\vec J\;\Delta V$, y en todo el material

$$\boxed{\ P = \int_V \vec J\cdot\vec E\;dV\ }$$

En un medio isotrópico $\vec J$ y $\vec E$ son colineales y el integrando queda
$g\,E^2$; si además el material es homogéneo, $g$ sale de la integral.

---

## 6. Corrientes en régimen estacionario

Hasta acá todo era general: cargas y corrientes podían depender del tiempo. Ahora
se restringe al **régimen estacionario**: no es el caso estático —las cargas se
mueven— pero **nada depende del tiempo**; todo lo que entra, sale.

### 6.1 Divergencia nula de la corriente y del campo

Si nada depende del tiempo, en particular $\partial\rho/\partial t = 0$ y la
ecuación de continuidad queda

$$\nabla\cdot\vec J = 0 :$$

en cualquier volumen no se acumula carga. Si el material es óhmico con $g$
uniforme, $\vec J = g\vec E$ y entonces

$$\nabla\cdot\vec E = 0 \qquad \text{en un conductor en régimen estacionario.}$$

En un conductor **en equilibrio** el campo adentro era cero. Ahora no lo es —si
lo fuera estaríamos en equilibrio—, pero conserva una propiedad «simpática»: su
divergencia es nula. Se parece a la ley de Gauss sin carga, aunque viene de
otro lado.

### 6.2 El rotacional sigue siendo cero: vale Laplace

En electrostática había dos ecuaciones para $\vec E$: una para la divergencia y
otra para el rotacional. Fuera del caso estático no se sabe, a priori, si la
segunda sigue valiendo. Lo decide el experimento:

> **Se observa** que en régimen estacionario sigue valiendo
> $\nabla\times\vec E = 0$. No es una ley general: más adelante se verá que
> cuando las cosas dependen del tiempo deja de ser válida.

Entonces $\vec E$ sigue siendo un gradiente, $\vec E = -\nabla\phi$, y junto con
$\nabla\cdot\vec E = 0$:

$$\boxed{\ \nabla^2\phi = 0\ } \qquad \text{en un conductor en régimen estacionario.}$$

Es un **segundo contexto** del electromagnetismo donde vale la ecuación de
Laplace. Antes, dentro del conductor el campo era nulo y Laplace valía «de una
manera un poco boluda»; ahora vale con campo y corriente no nulos. Lo que cambia
son las **condiciones de borde**.

### 6.3 Un problema tipo: esfera conductora en una corriente uniforme

Una esfera de conductividad $g_1$ inmersa en otro conductor de conductividad
$g_2$, con una densidad de corriente $\vec J$ uniforme lejos de la esfera. Es
«primo hermano» de problemas ya resueltos (la esfera dieléctrica en campo
uniforme): Laplace afuera, Laplace adentro y las mismas técnicas. El docente no
lo resuelve; discute lo cualitativo:

| Caso | Qué hace la corriente |
| --- | --- |
| $g_1 \to 0$ | La esfera no conduce: la corriente le da la vuelta. |
| $g_1 < g_2$ | Le da un poco la vuelta, pero una parte pasa por adentro. |
| $g_1 > g_2$ | La corriente tiende a pasar por adentro. |

### 6.4 Condiciones de borde entre dos conductores

**Componente tangencial de $\vec E$.** Como sigue valiendo
$\nabla\times\vec E = 0$, la circulación en una curva cerrada $C$ a caballo de
la interfaz es nula y, igual que en electrostática,

$$E_{1t} = E_{2t} .$$

**Componente normal de $\vec J$.** Se toma una superficie cerrada $S$ con forma
de cajita bien chatita a caballo de la interfaz. En régimen estacionario la
carga adentro no cambia, así que

$$\oiint_S \vec J\cdot\hat n\,dS = 0
\quad\Longrightarrow\quad
\boxed{\ J_{1n} = J_{2n}\ }
\quad\Longleftrightarrow\quad
g_1\,E_{1n} = g_2\,E_{2n} .$$

La componente normal de $\vec E$ tiene una discontinuidad, como en
electrostática; pero allá estaba asociada a la polarización y acá —problema
entre conductores, sin dieléctricos— al **cambio de conductividad**.

Simétricamente, la componente tangencial de $\vec J$ es discontinua: $E_t$ es
continua y $g$ no. (El docente advierte que su dibujo sugería lo contrario.)

> **Forma alternativa.** $\vec E$ tiene una discontinuidad **finita**, así que
> su primitiva es continua: $\phi$ es continuo en la interfaz. La condición
> $E_{1t}=E_{2t}$ se puede reemplazar por «$\phi$ continuo». La de la componente
> normal no se puede reemplazar: es la que da el salto del campo. $\phi$ resulta
> continuo pero no derivable en la dirección normal.

---

## 7. Analogía entre electrostática y régimen estacionario

### 7.1 Tabla de correspondencias

Los problemas electrostáticos con dieléctricos se parecen mucho a los de
conductores en régimen estacionario. El docente los ordena en dos columnas. Del
lado estático mira la frontera entre un conductor y un dieléctrico; del lado
estacionario, la frontera entre un conductor muy bueno (un cable metálico) y uno
«más o menos» (un electrolito, la pera).

| | Electrostática (conductores y dieléctricos) | Régimen estacionario (conductores) |
| --- | --- | --- |
| Ecuación | $\nabla^2\phi = 0$ | $\nabla^2\phi = 0$ |
| Campo | $\vec E = -\nabla\phi$ | $\vec E = -\nabla\phi$ |
| Divergencia | $\nabla\cdot\vec E = 0$ (con $\rho = 0$) | $\nabla\cdot\vec E = 0$ (por otro motivo) |
| Componente tangencial | continua | continua |
| Componente normal en el borde | $E_n = \sigma/\varepsilon$ | $E_n = J_n/g$ |
| Magnitud global | $Q = \oiint \sigma\,dS$ | $I = \int J_n\,dS$ |
| Relación con $\Delta\phi$ | $\Delta\phi \propto Q$ (capacitancia) | $\Delta\phi \propto I$ (resistencia) |

Donde en un caso hay **carga**, en el otro hay **corriente**; donde aparece
$\varepsilon$, aparece $g$. Resolver Laplace es igual en ambos.

### 7.2 Prueba de la ley de Ohm para resistores

En el caso electrostático se vio (clase anterior) que con dos conductores la
diferencia de potencial entre ellos es proporcional a la carga de uno; el
coeficiente está asociado a la capacitancia.

Caso estacionario análogo: dos conductores muy buenos (los cables) y, entre
ellos, un conductor de mala calidad (el resistor; la pera). Como el problema
matemático es el mismo, con corriente en lugar de carga y $g$ en lugar de
$\varepsilon$, se concluye

$$\boxed{\ \Delta\phi = R\,I\ }$$

para un resistor de **forma cualquiera**: queda probada la ley de Ohm para
resistores, y al coeficiente de proporcionalidad se lo llama **resistencia**.

> **$R$ es positiva.** Si el potencial es mayor en un borne que en el otro, la
> corriente va del de mayor al de menor potencial y no al revés.

*La próxima clase retoma, pasado el período de parciales, con circuitos con
resistencias y condensadores.*
