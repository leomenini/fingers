# Resumen Clase 1 — Presentación del curso, carga eléctrica, ley de Coulomb y campo eléctrico

## Índice

1. [Presentación del curso](#1-presentación-del-curso)
   - [1.1 Un curso intermedio: la lógica de espiral](#11-un-curso-intermedio-la-lógica-de-espiral)
   - [1.2 Bibliografía](#12-bibliografía)
   - [1.3 Un problema que todavía no se sabe resolver](#13-un-problema-que-todavía-no-se-sabe-resolver)
2. [Carga eléctrica](#2-carga-eléctrica)
   - [2.1 La carga en la materia usual](#21-la-carga-en-la-materia-usual)
   - [2.2 Cuantización y conservación](#22-cuantización-y-conservación)
   - [2.3 Procesos que no conservan partículas](#23-procesos-que-no-conservan-partículas)
   - [2.4 Los quarks](#24-los-quarks)
   - [2.5 Por qué la materia es casi neutra](#25-por-qué-la-materia-es-casi-neutra)
3. [Ley de Coulomb](#3-ley-de-coulomb)
   - [3.1 Qué es una carga puntual](#31-qué-es-una-carga-puntual)
   - [3.2 La ley](#32-la-ley)
   - [3.3 Qué dice la ley](#33-qué-dice-la-ley)
   - [3.4 Comparación con la gravedad](#34-comparación-con-la-gravedad)
   - [3.5 Historia y valor de la constante](#35-historia-y-valor-de-la-constante)
   - [3.6 Varias cargas: superposición](#36-varias-cargas-superposición)
4. [Distribuciones continuas de carga](#4-distribuciones-continuas-de-carga)
   - [4.1 Densidad de carga a pesar de la cuantización](#41-densidad-de-carga-a-pesar-de-la-cuantización)
   - [4.2 Un problema filosófico: el interior del electrón](#42-un-problema-filosófico-el-interior-del-electrón)
   - [4.3 Fuerza de una distribución continua](#43-fuerza-de-una-distribución-continua)
5. [Campo eléctrico](#5-campo-eléctrico)
   - [5.1 Separar la carga del resto](#51-separar-la-carga-del-resto)
   - [5.2 Cuando las cargas se pueden mover](#52-cuando-las-cargas-se-pueden-mover)
   - [5.3 Definición con carga de prueba](#53-definición-con-carga-de-prueba)

---

## 1. Presentación del curso

### 1.1 Un curso intermedio: la lógica de espiral

Nicolás Wschebor se presenta como profesor del teórico. Electromagnetismo es un
curso de **nivel intermedio**, posterior al curso elemental (Física III), y «el
más avanzado que estamos dando de manera regular» en la facultad. Teórico
martes y jueves; los prácticos empiezan esa misma semana.

El programa (en la página EVA) se parece mucho al de Física III: los mismos
temas, casi en el mismo orden. La diferencia está en las herramientas:

- uso **intensivo del cálculo diferencial e integral vectorial**;
- **ecuaciones diferenciales**, en particular **en derivadas parciales**, que en
  Física III casi no aparecían.

El docente lo llama una **lógica de espiral**: se vuelve a pasar por los mismos
temas, pero «por el costado», con otra mirada. «Uno no se baña dos veces en el
mismo río.» Esta primera clase es básicamente un repaso de Física III «para
ponernos en forma».

### 1.2 Bibliografía

| Libro | Papel en el curso |
| --- | --- |
| **Reitz, Milford** (en las últimas ediciones, también Christie), *Fundamentos de la teoría electromagnética* | Opción de base. El curso lo sigue bastante, notaciones incluidas |
| **Griffiths**, *Introduction to Electrodynamics* | Mismos temas y nivel, notaciones parecidas, otro orden; «un poquito más divertido» |
| **Feynman**, *Lectures on Physics*, vol. 2 | Para divertirse y tener otra mirada, no para seguir el curso |

¿Por qué un libro «extremadamente aburrido» como el Reitz? No porque guste lo
aburrido, sino porque está bien, no tiene errores, es fácil de leer y está muy
pulido (va «por la cuarta o quinta edición»): uno puede leerlo con confianza
si falta a una clase.

> **Las lecturas de Feynman.** Feynman —«probablemente el físico más importante
> de la segunda mitad del siglo XX»— reorganizó los cursos elementales de
> Caltech, y las *Lectures* son casi la transcripción de esos cursos. Se leen
> como una novela, pero como experiencia pedagógica fueron un fracaso: según el
> propio Feynman, a los buenos estudiantes les fue bárbaro y a los malos «los
> hice pomada». El curso elige deliberadamente una versión más conservadora,
> para que nadie quede perdido.

### 1.3 Un problema que todavía no se sabe resolver

Un adelanto del tipo de problema que el curso enseña a resolver, «un caballito
de batalla»: una **esfera conductora descargada** (maciza o hueca, da igual) en
un **campo eléctrico uniforme**. ¿Cómo es el campo en todo el espacio?

- La esfera es neutra pero **se polariza**: los electrones se acercan hacia el
  lado de donde viene el campo (las cargas positivas que lo generan) y dejan un
  déficit del otro lado.
- Esa distribución **no es uniforme**, y genera un campo que tampoco lo es: lejos
  el campo es uniforme, pero cerca de la esfera no.
- En equilibrio electrostático el campo es **nulo adentro** y **normal a la
  superficie** justo afuera; las líneas tienen que doblarse para llegar
  perpendiculares.

> **Por qué es difícil.** En Física III se conocían las cargas y se calculaba su
> campo (con Coulomb o Gauss). Acá **no se sabe dónde están las cargas**: se
> acomodan en respuesta al campo, que a su vez depende de ellas, hasta llegar al
> equilibrio. Ese problema se va a saber resolver «dentro de un mes».

También habrá problemas análogos con corrientes y campos magnéticos, circuitos
con **inductancias mutuas**, propiedades magnéticas «más entreveradas» y
ecuaciones diferenciales más trabajadas.

El docente pide muchas preguntas: quien pregunta ayuda también a los compañeros
que tienen la misma duda y no la llegan a formular.

---

## 2. Carga eléctrica

Comienza el capítulo 1, **electrostática**, sobre todo un repaso; lo más
avanzado viene en el capítulo siguiente.

### 2.1 La carga en la materia usual

La **carga eléctrica** es una propiedad fundamental de algunas partículas, que
las hace interactuar eléctricamente. La materia usual está compuesta
básicamente de tres partículas:

| Partícula | Símbolo | Carga |
| --- | --- | --- |
| Protón | $p^+$ | positiva, $+e$ |
| Neutrón | $n^0$ | nula |
| Electrón | $e^-$ | negativa, $-e$ |

> **Un hecho experimental no entendido.** La carga del protón y la del electrón
> son **exactamente iguales en valor absoluto** y de signo opuesto: un protón y
> un electrón juntos, vistos de lejos, son como si no hubiera carga. «Hasta el
> día de hoy no sabemos entender» por qué.

Entonces, para la materia usual,

$$\boxed{\ Q = e\,(N_p - N_e)\ }$$

con $e$ el valor absoluto de la carga del electrón. Su valor depende del sistema
de unidades. En las **unidades naturales** se toma $e = 1$; en el Sistema
Internacional las cargas se definen por protocolos macroscópicos y se miden en
**coulombs** (C):

$$e \approx 1{,}602\times10^{-19}\ \text{C}.$$

> La transcripción dice «1,66019»; el valor es $1{,}602\times10^{-19}$ C. La
> definición del coulomb queda para más adelante.

### 2.2 Cuantización y conservación

De esa fórmula tan simple, «que se puede aprender en primero de escuela», salen
dos propiedades notables:

1. **La carga está cuantizada**: toda carga es un múltiplo entero (con signo) de
   $e$.
2. **La carga se conserva**: en los procesos usuales —todos los procesos
   químicos y las fuerzas macroscópicas de la vida corriente— no cambia el
   número de protones, de neutrones ni de electrones. En un sistema cerrado la
   carga total es constante; en uno abierto, lo que hay adentro más lo que
   entró menos lo que salió.

En esa imagen, protones, neutrones y electrones son «ladrillitos
indestructibles».

### 2.3 Procesos que no conservan partículas

«Lamentablemente les llené la cabeza y no es verdad»: hay fenómenos en los que
el número de protones, neutrones y electrones **no** se conserva. Ejemplo: la
**radiactividad beta**, en la que un núcleo emite un electrón porque un neutrón
se transforma:

$$n^0 \;\longrightarrow\; p^+ + e^- + \bar\nu_e .$$

No se conservan ni neutrones, ni protones, ni electrones. Pero la **carga sí**:
$0 = (+1) + (-1) + 0$ en unidades de $e$ (el antineutrino electrónico, como su
nombre lo indica, es neutro).

> **Resultado experimental.** Aunque el número de partículas pueda cambiar, en
> **todos** los experimentos realizados hasta la fecha se observa que la
> **cuantización** y la **conservación** de la carga se cumplen. «En ciencia
> nunca podemos decir siempre», y se han buscado mucho las violaciones.
> Por qué se conserva la carga «un poco lo entendemos»; por qué está cuantizada,
> «no lo entendemos nada»: los modelos de física de partículas lo meten a mano
> como dato experimental.

### 2.4 Los quarks

Dentro de los protones y neutrones hay **quarks**, que tienen **carga
fraccionaria**. ¿Viola eso la cuantización? No, por una propiedad «rarísima» y
no bien entendida: los quarks **no se pueden separar**. Siempre forman grupos
—como los protones y neutrones— con carga múltiplo entero de $e$.

### 2.5 Por qué la materia es casi neutra

La materia usual tiene muchísimos protones y electrones, pero en número **casi
exactamente igual**: se compensan en una proporción «astronómicamente precisa».
Las cargas que se miden son cargas **netas**, pequeñas diferencias entre ambos
números (pueden ser trillones, pero son una fracción minúscula del total). Al
cargar un peine pasándolo por el pelo se arranca una proporción ínfima de
electrones.

¿Por qué? Porque

$$\text{cargas de igual signo se repelen; cargas de signo opuesto se atraen.}$$

Separar cargas cuesta mucha energía —la interacción eléctrica es muy intensa, al
menos comparada con la gravedad—, así que la situación más estable es que se
vuelvan a juntar. Un objeto con carga neta «trata de encontrar un amigo de
carga opuesta».

---

## 3. Ley de Coulomb

### 3.1 Qué es una carga puntual

Una **carga puntual** es una idealización: ningún objeto es realmente un punto.
Es un objeto **cuyo tamaño es mucho menor que las distancias de interés** en el
problema.

> **Depende del problema y de la precisión.** La Tierra es puntual para estudiar
> su movimiento alrededor del Sol, y cualquier cosa menos puntual en la vida
> cotidiana. Y midiendo con suficiente precisión, cualquier objeto con volumen
> termina mostrando que no es un punto.

### 3.2 La ley

Coulomb (1736–1806) midió la fuerza entre dos cargas $q_1$ y $q_2$ pequeñas
frente a su separación. Con $\vec r_{12}$ el vector que va de $q_2$ a $q_1$
(la notación del libro, que el docente intenta respetar aunque «no es
totalmente intuitiva»), la fuerza sobre $q_1$ es

$$\boxed{\ \vec F_1 = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1\,q_2}{r_{12}^3}\,\vec r_{12}\ }$$

Es una **ley experimental**, válida para cargas puntuales en el vacío (o en aire,
que «es casi vacío»).

> **¿Por qué $1/4\pi\varepsilon_0$ y no una $k$?** Para que una de las
> ecuaciones de Maxwell, la ley de Gauss, quede simple.

### 3.3 Qué dice la ley

1. El módulo es **proporcional al producto de las cargas**.
2. $\vec F_1$ es **paralela** a $\vec r_{12}$: la fuerza va según la recta que
   une las cargas.
3. El módulo va como **$1/r^2$**: un $r_{12}$ del denominador se cancela con el
   módulo de $\vec r_{12}$ del numerador.
4. El sentido: si $q_1q_2>0$ (igual signo) la fuerza tiene el sentido de
   $\vec r_{12}$ y es **repulsiva**; si $q_1q_2<0$, es **atractiva**.
   («Repulsiva» no es un juicio moral.)

### 3.4 Comparación con la gravedad

La gravedad tiene la misma forma, con las masas en lugar de las cargas, pero es
**siempre atractiva**. Es muchísimo más débil que la interacción eléctrica y,
sin embargo, se ve:

> La interacción eléctrica a veces suma y a veces resta, y como las cargas se
> agrupan en conjuntos neutros, su efecto neto suele cancelarse. La gravedad
> siempre suma, y en objetos grandes como la Tierra termina dominando, aunque
> entre dos partículas sea despreciable.

### 3.5 Historia y valor de la constante

La ley lleva el nombre de Coulomb porque él publicó el primer trabajo
experimental. Pero **Cavendish** la había observado antes, con experimentos de
mejor calidad, y nunca los publicó; se supo al desarmar su laboratorio después
de su muerte.

$\varepsilon_0$ es la **permitividad eléctrica del vacío**. En el SI:

$$\varepsilon_0 = 8{,}854\times10^{-12}\ \frac{\text{C}^2}{\text{N}\,\text{m}^2}.$$

> En un medio material (un plástico, el agua) la ley cambia, porque hay que
> tener en cuenta el medio; se verá más adelante. Por ahora, las cargas están en
> el vacío o en el aire.

### 3.6 Varias cargas: superposición

Con una carga $q$ y otras cargas $q_i$, con $\vec r_{0i}$ el vector de cada
$q_i$ a $q$, la fuerza es la **suma vectorial** de las fuerzas, como en
Física I:

$$\boxed{\ \vec F = \frac{q}{4\pi\varepsilon_0}\sum_i \frac{q_i\,\vec r_{0i}}{r_{0i}^3}\ }$$

Es lo que a veces se llama **principio de superposición**.

---

## 4. Distribuciones continuas de carga

### 4.1 Densidad de carga a pesar de la cuantización

Si la carga está cuantizada, ¿qué es una distribución **continua**? No hay
contradicción si se consideran volúmenes **pequeños macroscópicamente** pero que
contienen un **número muy grande** de cargas: la «pixelación» no importa. Y la
carga del electrón es muy chica: en experimentos típicos, con cargas del orden
de $10^{-9}$ o $10^{-7}$ C, hay un número gigantesco de cargas elementales.

Se define la **densidad volumétrica de carga**

$$\boxed{\ \rho = \lim_{\Delta V\to0}\frac{\Delta q}{\Delta V}\ }$$

con $\Delta q$ la carga en $\Delta V$.

> **Cuidado con ese límite.** $\Delta V$ tiene que ser chico frente a los
> volúmenes de interés (por ejemplo, un centímetro cúbico) pero grande frente a
> la escala de la carga elemental. Con 2 o 10 electrones, en lugar de $10^{5}$ o
> $10^{20}$, el límite continuo no vale.

### 4.2 Un problema filosófico: el interior del electrón

¿Cómo está armado por dentro el electrón? Si la carga está cuantizada, no puede
estar repartida en su interior. Es un problema no resuelto. Lo que se hace en
las teorías más avanzadas es… nada: suponer que el electrón es una **partícula
elemental**, sin estructura interna. «No es un problema resuelto, es un problema
escondido.»

Es insatisfactorio porque la experiencia es que todo lo que se golpea con
suficiente fuerza termina rompiéndose. Al electrón se lo ha medido a distancias
muy cortas y siempre parece puntual (puede transformarse en otras cosas, pero no
se le vio estructura). Al protón sí: tiene un radio del orden de $10^{-15}$ m, y
un experimento en Stanford (SLAC) mostró su estructura interna; según el
docente, en los años 70. El problema pasa del protón a los quarks, que en el
modelo estándar son elementales.

### 4.3 Fuerza de una distribución continua

Se agrupan las cargas en volumencitos $\Delta V_a$, cada uno con carga
$\Delta q_a = \rho(\vec r\,')\,\Delta V_a$, y se suma. En el límite, la suma de
Riemann es una integral de volumen. Con $\vec r$ la posición de $q$ y $\vec r\,'$
la del elemento de carga:

$$\boxed{\ \vec F = \frac{q}{4\pi\varepsilon_0}\int_V
\rho(\vec r\,')\,\frac{\vec r-\vec r\,'}{|\vec r-\vec r\,'|^3}\,dV'\ }$$

Si la carga está en una superficie, la integral es de superficie, con la
**densidad superficial** $\sigma$; en una curva, de línea, con la **densidad
lineal** $\lambda$.

> Respondiendo a una pregunta: la fuerza de una distribución sobre **otra
> distribución** requiere integrar de nuevo, dividiendo la segunda en pedacitos.
> Hay un análogo del centro de masa, pero con campos inhomogéneos no es
> simplemente el baricentro.

---

## 5. Campo eléctrico

### 5.1 Separar la carga del resto

La fórmula sugiere separar la fuerza en una parte que depende de la carga $q$ y
otra que depende de todas las demás:

$$\boxed{\ \vec F_q = q\,\vec E\ }$$

con $\vec E$ el **campo eléctrico**. Para cargas puntuales $q_i$ en posiciones
dadas,

$$\vec E = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{q_i\,\vec r_{0i}}{r_{0i}^3},$$

y para una distribución continua, la integral de §4.3 sin la $q$.

La imagen: las demás cargas, en lugar de actuar directamente sobre $q$,
**generan algo en el espacio** que, si se pone una carga, le produce una fuerza.
En electrostática con cargas fijas es casi una idea «ociosa»; su importancia
aparece en los problemas no estáticos, donde el campo en un punto puede haber
sido producido por cargas que antes estaban en otro lado.

### 5.2 Cuando las cargas se pueden mover

Pregunta a la clase: ¿qué fuerza hace una **esfera conductora sin carga neta**
sobre una carga puntual $q$ cercana? Un estudiante contesta «ninguna». No es
así:

- si la esfera tuviera una distribución fija, con la carga del mismo signo que
  $q$ más cerca, la fuerza sería repulsiva (la fuerza decrece con la distancia);
- pero en un conductor las cargas **reaccionan**: las de signo opuesto a $q$ se
  acercan y las del mismo signo se alejan, y el efecto neto es **atractivo**.

Es un efecto chiquito, pero se ve: el peine cargado atrae papelitos neutros
porque los polariza.

> **Qué se quiere llamar campo eléctrico.** El campo que la esfera neutra ejerce
> sobre $q$ no es cero, pero no es ése el que interesa: interesa el campo que
> había **antes** de poner $q$, que es cero.

### 5.3 Definición con carga de prueba

Por eso se define el campo electrostático como

$$\boxed{\ \vec E = \lim_{q\to0}\frac{\vec F_q}{q}\ }$$

Con $q$ tan chica como se quiera, la reacción del sistema (la polarización)
tiende a cero y se obtiene el campo previo. Con cargas fijas, la relación es
proporcional y el límite no hace falta.

> **Otro problema filosófico.** Por la cuantización, no se puede tomar
> $q\to0$: cuando las cargas son comparables con $e$ y el sistema puede
> reaccionar, la definición precisa del campo tiene dificultades.

*La próxima clase: un poco más de repaso y, poco a poco, las cosas nuevas.*
