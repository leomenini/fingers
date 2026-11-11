# Resumen Clase 22 — Potencial escalar magnético, circuitos magnéticos e imanes permanentes

## Índice

1. [Problemas magnéticos con condiciones de borde](#1-problemas-magnéticos-con-condiciones-de-borde)
   - [1.1 Potencial escalar magnético](#11-potencial-escalar-magnético)
   - [1.2 Caso 1: material lineal](#12-caso-1-material-lineal)
   - [1.3 Caso 2: magnetización uniforme](#13-caso-2-magnetización-uniforme)
   - [1.4 Dos ejemplos](#14-dos-ejemplos)
2. [Circuitos magnéticos](#2-circuitos-magnéticos)
   - [2.1 Núcleos de alta permeabilidad](#21-núcleos-de-alta-permeabilidad)
   - [2.2 Las aproximaciones y su calidad](#22-las-aproximaciones-y-su-calidad)
   - [2.3 Ley de los nudos](#23-ley-de-los-nudos)
   - [2.4 Ley de las mallas y reluctancia](#24-ley-de-las-mallas-y-reluctancia)
   - [2.5 Analogía con los circuitos eléctricos](#25-analogía-con-los-circuitos-eléctricos)
   - [2.6 La gran diferencia: no linealidad y resolución iterativa](#26-la-gran-diferencia-no-linealidad-y-resolución-iterativa)
3. [Circuitos magnéticos con imanes permanentes](#3-circuitos-magnéticos-con-imanes-permanentes)
   - [3.1 El circuito](#31-el-circuito)
   - [3.2 Domina la reluctancia del entrehierro](#32-domina-la-reluctancia-del-entrehierro)
   - [3.3 Recta de desmagnetización y solución gráfica](#33-recta-de-desmagnetización-y-solución-gráfica)
   - [3.4 Para qué sirven los circuitos magnéticos](#34-para-qué-sirven-los-circuitos-magnéticos)
4. [Adelanto: inducción electromagnética](#4-adelanto-inducción-electromagnética)

---

## 1. Problemas magnéticos con condiciones de borde

El ferromagnetismo, con sus curvas de histéresis y relaciones no lineales, da
en general problemas difíciles. Esta clase muestra situaciones en que se puede
avanzar con aproximaciones razonables, algunas con aplicaciones tecnológicas
importantes. La primera es parecida a la electrostática: hallar el campo en
regiones con condiciones en la frontera.

### 1.1 Potencial escalar magnético

Para corrientes estacionarias las ecuaciones son

$$\div\vec B = 0, \qquad \curl\vec H = \vec J,$$

con $\vec J$ la densidad de corriente **de conducción**, más la ecuación
constitutiva del o de los materiales, que relaciona $\vec B$ con $\vec H$.

Muchas veces la corriente está concentrada en algunas regiones. En las regiones
**sin corriente de conducción**, $\vec J = 0$ y entonces $\curl\vec H = 0$:
$\vec H$ deriva de un potencial,

$$\boxed{\ \vec H = -\grad\phi^*\ }$$

el **potencial escalar magnético**. El asterisco es la notación del libro, para
no confundirlo con el potencial electrostático.

> A diferencia del campo eléctrico, que en electrostática **siempre** deriva de
> un potencial, ésta es una situación particular, no genérica: vale sólo donde
> no hay corriente de conducción. Corrientes de magnetización sí puede haber.

Sin ecuación constitutiva no se puede seguir; se ven dos casos.

### 1.2 Caso 1: material lineal

Exactamente lineal no es casi ninguno interesante, pero hay materiales cuya
curva de histéresis es muy angosta —el **hierro dulce**, por ejemplo— y para
los que $\vec B = \mu\vec H$ es una aproximación aceptable («más o menos»,
no tan buena como en el caso eléctrico). Con $\mu$ constante en cada material,
lejos de los bordes y donde no hay corriente:

$$0 = \div\vec B = \mu\,\div\vec H = -\mu\,\laplacian\phi^*
\quad\Longrightarrow\quad
\boxed{\ \laplacian\phi^* = 0\ }$$

Todos los métodos de la ecuación de Laplace se importan a los problemas
magnéticos. En particular vale en el vacío donde no hay corriente.

> Una diferencia práctica: en electrostática las cargas solían estar en
> superficies; acá es común que la corriente esté distribuida en volumen. Laplace
> vale sólo afuera de esas regiones.

### 1.3 Caso 2: magnetización uniforme

Un caso **no lineal** pero manejable: la magnetización dentro del material es,
en buena aproximación, **uniforme**. La relación general es
$\vec B = \mu_0(\vec H + \vec M)$, y si $\vec M$ es uniforme su divergencia es
nula:

$$0 = \div\vec B = \mu_0\left(\div\vec H + \div\vec M\right)
= -\mu_0\,\laplacian\phi^* .$$

Otra vez Laplace. Que no sea lineal se ve en que $\vec M$ no es proporcional a
$\vec B$: no depende de él, está fija.

| Caso | Hipótesis | Resultado |
| --- | --- | --- |
| 1 | Material lineal, $\vec J = 0$ | $\laplacian\phi^* = 0$ |
| 2 | $\vec M$ uniforme, $\vec J = 0$ | $\laplacian\phi^* = 0$ |

> **Ojo con las condiciones de borde**: no son las de electrostática, sino las
> de la clase pasada ($B_n$ continua, $H_t$ continua salvo corriente
> superficial de conducción).

### 1.4 Dos ejemplos

Quedan como ejercicio (están en el práctico):

1. **Esfera de permeabilidad $\mu$ en un campo uniforme $\vec B_0$**, rodeada
   de aire. Sin corriente de conducción en ningún lado. Es muy parecido a la
   esfera dieléctrica: simetría azimutal, desarrollos en polinomios de
   Legendre adentro y afuera, y las condiciones de borde.
2. **Imán esférico con $\vec M$ uniforme**, sin campo externo aplicado. Lo que
   genera el campo es la magnetización espontánea, que es dato. Afuera hay aire
   (caso lineal con $\mu = \mu_0$) y adentro magnetización uniforme (caso 2).
   Con el eje $z$ según $\vec M$, el problema tiene simetría azimutal. Adentro
   las líneas son paralelas y equiespaciadas; afuera, curvas que se cierran.

Con cilindros muy largos magnetizados a lo largo del eje se puede hacer lo
mismo en el plano transversal, con los métodos ya vistos.

---

## 2. Circuitos magnéticos

Otra situación, muy importante en la práctica y en la tecnología.

### 2.1 Núcleos de alta permeabilidad

Un **núcleo de hierro** que se cierra sobre sí mismo —un toroide, aunque podría
ser rectangular o de otra forma— al que se le conectan cosas: **bobinados**
(uno o varios), tramos de **distintos materiales** A, B, C, o un pedacito de
aire, el **entrehierro**, que tiene que ser chico. Puede haber varias mallas.

Los materiales del núcleo, lineales o no, tienen $\mu\gg\mu_0$, y afuera hay
aire.

**La analogía clave.** En un cable con aire alrededor, los electrones no se
escapan del cable: la conductividad del cobre es muchísimo mayor que la del
aire. Acá pasa lo mismo con el campo magnético: si $\mu\gg\mu_0$, las líneas que
genera un bobinado **circulan dentro del núcleo** y no se van al aire.

¿Cuánto se escapa? Con $\mu = 4000\,\mu_0$ —valor totalmente verosímil para
muchos ferromagnéticos—, aproximadamente una línea de cada 4000. Donde la
aproximación empeora es en el **entrehierro**, donde hay $\mu_0$; si es muy
chico, el campo «no tiene tiempo» de irse por los costados.

### 2.2 Las aproximaciones y su calidad

| Aproximación | Qué supone | Calidad |
| --- | --- | --- |
| De circuito | El campo circula por los núcleos de alto $\mu$ y no se dispersa en el aire | Muy buena (error $\sim\mu_0/\mu$), salvo en el entrehierro |
| Filiforme | $\vec B$ uniforme en cada sección, paralelo al núcleo y ortogonal a la sección | Regular: 5 o 10 % de error |

En los circuitos eléctricos las dos son casi exactas: la diferencia de
conductividad entre metal y aire es de unos veinte órdenes de magnitud, «blanco
o negro», y los cables son realmente finos. Acá la primera es buena pero no tan
buena, y la segunda es mala: un núcleo tiene centímetros de grosor —no puede ser
muy fino, porque hay que enrollarle el bobinado— y en las esquinas de un núcleo
rectangular el campo da vuelta y no es uniforme.

> «El profesor de electro se puso a hacer aproximaciones truchas. Y sí, pero a
> veces la vida puede más»: es la razón del artillero, se tira con los obuses
> que se tienen. Estas aproximaciones se usan muchísimo, pero hay que usarlas
> con espíritu crítico y saber que, para algo preciso, hay que mejorarlas.

### 2.3 Ley de los nudos

El flujo magnético por una superficie cerrada es cero. Si en un nudo entra un
flujo $\Phi_1$ y se reparte en $\Phi_2$ y $\Phi_3$:

$$\boxed{\ \Phi_1 = \Phi_2 + \Phi_3\ }$$

Es una muy buena aproximación: lo exacto es que el flujo total por la
superficie cerrada es nulo, y lo único que se desprecia es el flujo lateral que
se va al aire (1 en 4000), salvo en los entrehierros, donde la pérdida es
proporcional a la superficie lateral.

### 2.4 Ley de las mallas y reluctancia

Se toma una curva cerrada $C$ que recorre una malla por dentro del núcleo, y un
bobinado de $N$ vueltas con corriente $I$. Por Ampère en el material:

$$\oint_C \vec H\cdot d\vec l = N\,I .$$

El signo de cada término sale de la regla de la mano derecha según el sentido
en que se recorre $C$; con varios bobinados hay un término $N_k I_k$ por cada
uno.

Ahora sí las aproximaciones filiformes:

1. $\vec H$ paralelo a $d\vec l$ en todo punto;
2. $\vec B = \mu\vec H$ —sin exigir linealidad: $\mu$ puede depender del campo—
   en un material homogéneo e isotrópico;
3. $\vec B$ uniforme en la sección $A$, de modo que $\Phi = B\,A$.

$$\oint_C H\,dl = \oint_C \frac{B}{\mu}\,dl = \oint_C \frac{\Phi}{\mu A}\,dl .$$

En una malla sin nudos el flujo es el mismo en todo el recorrido y sale de la
integral; $\mu$ y $A$ no, porque pueden cambiar a lo largo del circuito
(distintos materiales, tramos más gruesos o más finos):

$$\boxed{\ \Phi\,\mathcal{R} = N\,I,\qquad
\mathcal{R} = \oint_C \frac{dl}{\mu\,A}\ }$$

$\mathcal{R}$ es la **reluctancia**. Con varias mallas hay una ecuación por
malla y, en cada tramo, el flujo que circula por él.

> Para disminuir los errores, la curva se toma por el medio del núcleo, que
> promedia las diferencias de campo en la sección.

### 2.5 Analogía con los circuitos eléctricos

| Circuito eléctrico | Circuito magnético |
| --- | --- |
| Fuente $\mathcal{B}$ (batería) | $N I$ (bobinado) |
| Corriente $I$ | Flujo $\Phi$ |
| Densidad de corriente $\vec J$ | Campo $\vec B$ |
| Resistencia $R$ | Reluctancia $\mathcal{R}$ |
| $\mathcal{B} = R I$ | $N I = \mathcal{R}\,\Phi$ |
| Ley de los nudos | $\sum\Phi = 0$ en un nudo |

Como con las resistencias, las reluctancias en serie se suman y en paralelo se
suman los inversos. Hasta el nombre se parece.

### 2.6 La gran diferencia: no linealidad y resolución iterativa

La pregunta del docente a la clase: aun con todas estas aproximaciones, ¿qué es
muy distinto del caso eléctrico? La resistencia **no depende** de la corriente:
la ley de Ohm es lineal. La reluctancia, en cambio, depende del flujo, porque
$\mu$ depende del campo en los materiales interesantes:

$$\mathcal{R} = \mathcal{R}(\Phi) .$$

Las ecuaciones se parecen pero el sistema es **no lineal**, y no se resuelve
con eliminación de Gauss. Se resuelve de manera **iterativa**:

1. Se estima el rango de campo y se toma el $\mu$ correspondiente, constante.
2. Se resuelve el problema, ya lineal, y se obtiene un campo.
3. Se va a la tabla (o a la curva) $\mu(B)$ y se toma el $\mu$ de ese campo.
4. Se vuelve a resolver, hasta que el campo supuesto y el calculado coincidan.

No hace falta precisión de 1 por 1000: con las aproximaciones que se hicieron,
si $\mu$ cambia menos del 5 % entre iteraciones, alcanza. Típicamente bastan un
par de iteraciones.

En electrotecnia se usan tablas reales; en el curso las curvas de histéresis se
reemplazan por tramos de recta.

| | Circuitos eléctricos | Circuitos magnéticos |
| --- | --- | --- |
| Aproximaciones | Casi exactas | Similares, en general de peor calidad |
| Ecuaciones | Mallas y nudos | Similares en apariencia |
| Coeficientes | $R$ no depende de $I$ | $\mathcal{R}$ suele depender de $\Phi$ |
| Resolución | Sistema lineal | No lineal: iterativa |

---

## 3. Circuitos magnéticos con imanes permanentes

En lugar de un bobinado, la fuente es un tramo de **imán**: un material con una
relación no trivial entre $\vec H$ y $\vec B$, típicamente con $\vec B\neq0$
cuando $\vec H\to0$ (magnetización espontánea). Hay que saber su curva.

### 3.1 El circuito

Un circuito de una malla con sección uniforme $A$: un tramo de imán entre los
puntos A y B, hierro dulce de B a C, un entrehierro de C a D y hierro dulce de
D a A. En el hierro dulce se supone que no hay histéresis y que
$\vec B = \mu\vec H$ es lineal; en el imán, no.

**No hay bobinados**, así que la circulación de $\vec H$ en una curva cerrada
—por el medio del núcleo— es **cero**:

$$\int_A^B H\,dl + \int_B^C H\,dl + \int_C^D H\,dl + \int_D^A H\,dl = 0 .$$

Con una sola malla el flujo $\Phi$ es el mismo en todo el circuito. En cada
tramo que no es el imán, $\int H\,dl = \Phi\,\mathcal{R}_{\text{tramo}}$:

$$\int_A^B H\,dl + \Phi\left(\mathcal{R}_{BC} + \mathcal{R}_{CD} + \mathcal{R}_{DA}\right) = 0 .$$

### 3.2 Domina la reluctancia del entrehierro

¿Qué reluctancia es mayor? La del **entrehierro**. Las reluctancias son
inversamente proporcionales a $\mu$: en el hierro dulce, $\mu\gg\mu_0$ y su
reluctancia es casi nula. El entrehierro es corto, pero típicamente no 4000
veces más corto que el hierro sino unas 20 veces; sólo con un entrehierro
miles de veces más chico que los tramos de hierro se compensaría.

> **Por qué es una buena noticia.** Las aproximaciones sobre el hierro dulce
> (lineal, filiforme) no son buenas, pero afectan a términos que casi no
> cuentan. La del entrehierro, en cambio, se calcula muy bien:
> $$\mathcal{R}_{CD} = \frac{L_{CD}}{\mu_0\,A} .$$
> Es como en un circuito eléctrico: los tramos de hierro son los cables y el
> entrehierro es el resistor.

El uso típico de un circuito así es **transportar** el campo del imán hasta la
zona del entrehierro, donde se lo quiere usar, sin que se disperse.

### 3.3 Recta de desmagnetización y solución gráfica

Despreciando $\mathcal{R}_{BC}$ y $\mathcal{R}_{DA}$ frente a $\mathcal{R}_{CD}$,
y suponiendo $H$ constante en el imán (de largo $L_{AB}$):

$$H_m\,L_{AB} + \frac{\Phi\,L_{CD}}{\mu_0 A} = 0 .$$

Como las secciones son iguales, el campo en el imán es el mismo que en el
entrehierro, $B_m = \Phi/A$ (si no, lo que sería igual son los flujos):

$$\boxed{\ B_m = -\,\mu_0\,\frac{L_{AB}}{L_{CD}}\,H_m\ }$$

Esta relación la impone el **circuito**: es **lineal**, una recta por el origen
de pendiente negativa en el plano $(H, B)$ —$H$ y $B$ del imán tienen signos
opuestos—. Se la llama recta **desmagnetizante**. Sola no alcanza: falta la
relación constitutiva del imán, su **curva de histéresis**, que es parte de
los datos (no es única: depende de la historia, y hay que decir en cuál se
está).

La solución está en la **intersección** de la recta con la curva de
histéresis. Hay **dos** soluciones, simétricas, porque no se dijo hacia dónde
apunta el imán (cuál es su polo norte).

> **Cuándo no hay simetría.** Si además hay un bobinado, o dos imanes, ya
> existe una dirección preferencial y las dos orientaciones no son
> equivalentes. Hay que dar como dato hacia dónde apunta cada cosa; si no, hay
> varias soluciones posibles. Un bobinado alrededor del imán no cambia nada:
> lo que importa es cómo está enrollado.

En los ejercicios la curva de histéresis suele reemplazarse por curvas
poligonales para poder hacer las cuentas; si es una curva realista, hay que
trabajar con una tabla.

### 3.4 Para qué sirven los circuitos magnéticos

El uso más común son los **transformadores**: dos bobinados sobre el mismo
núcleo, el **primario**, por el que entra corriente, y el **secundario**, por
el que sale. El núcleo de hierro hace que todo el campo generado por uno llegue
al otro y no se pierda energía por esa vía. (Siempre hay pérdidas, pero las
principales son de naturaleza eléctrica, no magnética.)

Respondiendo a una pregunta: para el circuito magnético, un bobinado con
corriente impuesta desde afuera y uno cuya corriente es inducida entran igual
en las ecuaciones; en un caso la corriente es dato y en el otro, incógnita, que
se determina acoplando con el circuito eléctrico. El que tiene corriente
impuesta es el que aporta energía al sistema.

---

## 4. Adelanto: inducción electromagnética

Con los minutos que quedan, el docente abre el capítulo 8. En el caso estático
o estacionario,

$$\curl\vec E = 0 \quad\Longleftrightarrow\quad \oint_C\vec E\cdot d\vec l = 0
\ \text{ para toda curva cerrada } C .$$

Pero de Física III se sabe que, si el flujo magnético a través de $C$ varía con
el tiempo, vale la **ley de Faraday**:

$$\boxed{\ \oint_C\vec E\cdot d\vec l = -\frac{d\Phi}{dt}\ }$$

con el flujo calculado sobre una superficie orientada con la regla de la mano
derecha respecto de $C$.

- El caso estacionario es un caso particular: si el flujo no cambia, la
  circulación es cero.
- Si cambia, la fuerza eléctrica deja de ser conservativa: la integral de línea
  entre dos puntos depende del camino.
- Como siempre en este curso, se va a ir más allá de la forma integral, a una
  ecuación diferencial que dé el **rotacional** de $\vec E$ en términos de la
  variación del campo magnético.

*La próxima clase retoma Faraday, con detalle sobre los signos y la regla de la
mano derecha.*
