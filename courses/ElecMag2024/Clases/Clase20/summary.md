# Resumen Clase 20 — La ecuación de Laplace en otras ramas de la física y propiedades magnéticas de la materia: magnetización y corrientes de magnetización

## Índice

1. [Paréntesis: Laplace en otras ramas de la física](#1-paréntesis-laplace-en-otras-ramas-de-la-física)
   - [1.1 Conducción del calor en régimen estacionario](#11-conducción-del-calor-en-régimen-estacionario)
   - [1.2 Ley de Fourier y analogía con la conducción eléctrica](#12-ley-de-fourier-y-analogía-con-la-conducción-eléctrica)
   - [1.3 De Poisson a Laplace](#13-de-poisson-a-laplace)
   - [1.4 Otros dos ejemplos: el tambor y los fluidos](#14-otros-dos-ejemplos-el-tambor-y-los-fluidos)
   - [1.5 Para qué sirve el paréntesis](#15-para-qué-sirve-el-paréntesis)
2. [Propiedades magnéticas de la materia: motivación](#2-propiedades-magnéticas-de-la-materia-motivación)
   - [2.1 El magnetismo «posta»](#21-el-magnetismo-posta)
   - [2.2 El programa: lo mismo que con los dieléctricos, con una diferencia](#22-el-programa-lo-mismo-que-con-los-dieléctricos-con-una-diferencia)
3. [Magnetización](#3-magnetización)
   - [3.1 Corrientes microscópicas](#31-corrientes-microscópicas)
   - [3.2 Cada átomo como un dipolo](#32-cada-átomo-como-un-dipolo)
   - [3.3 Definición de la magnetización](#33-definición-de-la-magnetización)
   - [3.4 Magnetización espontánea](#34-magnetización-espontánea)
4. [Campo magnético producido por un material magnetizado](#4-campo-magnético-producido-por-un-material-magnetizado)
   - [4.1 Potencial vector de una magnetización dada](#41-potencial-vector-de-una-magnetización-dada)
   - [4.2 Validez dentro del material](#42-validez-dentro-del-material)
   - [4.3 Reescritura con un rotacional](#43-reescritura-con-un-rotacional)
   - [4.4 Un teorema: la integral de volumen de un rotacional](#44-un-teorema-la-integral-de-volumen-de-un-rotacional)
   - [4.5 Corrientes de magnetización](#45-corrientes-de-magnetización)
   - [4.6 Consecuencias para el campo](#46-consecuencias-para-el-campo)

---

## 1. Paréntesis: Laplace en otras ramas de la física

> La grabación empieza con «un **segundo** tema que quiero avanzar»: lo que se
> haya tratado antes en esa clase no está en la transcripción.

Las ecuaciones de **Poisson y Laplace** aparecen en muchas ramas de la física, y
no sólo de la física. El docente lo presenta como cultura general: detalla un
ejemplo —el calor— y menciona otros dos.

### 1.1 Conducción del calor en régimen estacionario

Siempre en **régimen estacionario**: la ecuación de Laplace no tiene el tiempo.
El ejemplo es el salón en invierno, con puertas cerradas y una estufa: al
prenderla la temperatura varía en el tiempo y en el espacio, el calor difunde y
al final el sistema se estabiliza. No interesa el transitorio, sino el estado
final.

Para un volumen $V$ limitado por una superficie $S$, el calor que **sale** por
unidad de tiempo se escribe como el flujo saliente de un vector $\vec H$, el
**flujo de calor**:

$$\frac{dQ}{dt} = \oiint_S \vec H\cdot\hat n\,dS .$$

Es el análogo de $I = \int\vec J\cdot\hat n\,dS$: $\vec H$ juega el papel de
$\vec J$ y $Q$ el de la carga.

> **Diferencia fundamental: el calor no es una cantidad conservada.** La carga
> se conserva; el calor no, porque otras formas de energía se transforman en
> calor (la estufa convierte energía eléctrica). Se conserva la energía total.

Por eso el balance tiene un término de fuente. En forma diferencial (dividiendo
por el volumen y tomando el límite, que es lo que define la divergencia):

$$\nabla\cdot\vec H = s - \frac{\partial u}{\partial t},$$

con $s$ el calor producido por unidad de volumen y de tiempo (por conversión de
otra forma de energía) y $u$ la energía interna por unidad de volumen. Los
signos dependen de la convención; acá el calor se toma saliente.

### 1.2 Ley de Fourier y analogía con la conducción eléctrica

El calor va de las zonas calientes a las frías. En muy buena aproximación —no
es exacta— lo hace según la **ley de Fourier**:

$$\boxed{\ \vec H = -k\,\nabla T\ }$$

con $k$ la **conductividad térmica**. El signo menos hace que el flujo vaya de
caliente a frío. Es el análogo de $\vec J = g\,\vec E$:

| Conducción eléctrica | Conducción térmica |
| --- | --- |
| Potencial $\phi$ | Temperatura $T$ |
| Densidad de corriente $\vec J$ | Flujo de calor $\vec H$ |
| Campo $\vec E = -\nabla\phi$ | $-\nabla T$ |
| Conductividad $g$ | Conductividad térmica $k$ |

Lo que no tiene análogo es el término $\partial u/\partial t$, que es **cero en
el estado estacionario**. (Fuera de él haría falta relacionar la energía
interna con la temperatura.)

### 1.3 De Poisson a Laplace

En régimen estacionario $\nabla\cdot\vec H = s$, y sustituyendo Fourier:

$$\boxed{\ -k\,\nabla^2 T = s\ }$$

Es la **ecuación de Poisson**, con la fuente de calor en el papel que tenían
las cargas eléctricas. Donde no hay fuentes:

$$\nabla^2 T = 0 .$$

En el salón, Laplace no vale en la estufa pero sí en todo el resto
(despreciando el calor que generan las personas).

> **La temperatura no tiene por qué ser uniforme.** Si los vidrios están fríos y
> la estufa suministra calor, o si la sala de al lado está calefaccionada, hay
> una temperatura en la puerta y otra en la ventana, y en el medio un gradiente
> de temperaturas dado por Laplace **con condiciones de borde** fijadas en
> esos lugares.

La razón de fondo del parecido: es un problema de conducción, con fuentes
apagadas o localizadas, y una relación entre divergencia y fuente.

### 1.4 Otros dos ejemplos: el tambor y los fluidos

Mencionados sin detallar.

- **Tambor estacionario.** Una lonja tensa con un borde (circular o no) a la
  que se le aplica desde abajo un taco que la deforma. Si el estiramiento no es
  muy grande, la **altura de la lonja** verifica Laplace: el borde está a
  altura cero, la zona del taco (de la forma que sea; el docente dibuja un
  hexágono) a, digamos, un centímetro, y entre medio la superficie baja
  cumpliendo Laplace. Se lo puede pensar como un fenómeno de elasticidad y
  relajación: el sistema quiere estar lo menos estirado posible, dentro de lo
  que le imponen las condiciones de borde.
- **Fluidos estacionarios.** La ecuación de la mecánica de fluidos
  (Navier–Stokes) es no lineal y mucho más complicada, pero en ciertas
  situaciones se aproxima por una lineal y se cumple Laplace: hace falta flujo
  **irrotacional** y bastante suave. No todo flujo laminar sirve: la no
  linealidad puede dar turbulencia, pero también características no lineales
  del propio flujo laminar.

> **Lo robusto.** Laplace sigue apareciendo donde hay **linealidad y respuesta
> lineal a un gradiente**.

### 1.5 Para qué sirve el paréntesis

No es electromagnetismo, pero da **intuición geométrica** sobre las soluciones:
es mucho más fácil imaginar qué le pasa a un tambor con un taco, o cómo varía
la temperatura en un cuarto con los bordes a temperaturas fijas, que a una
esfera con carga.

> Siempre régimen estacionario. Cuando las cosas dependen del tiempo «aparecen
> nuevos chiches».

---

## 2. Propiedades magnéticas de la materia: motivación

### 2.1 El magnetismo «posta»

Si se le pregunta a un chico qué sabe de magnetismo, no habla de circuitos:
habla de los imanes de la heladera. El magnetismo de la experiencia cotidiana
—el que se conoce desde la antigüedad, el más frecuente— **no es el que se
vino estudiando**; ése es el magnetismo de los laboratorios.

El docente lo compara con el chiste del borracho que busca la llave bajo el
farol, no donde se le cayó sino donde hay luz: se estudió el magnetismo donde
era más simple. Con la salvedad de que no fue inútil —los circuitos importan,
ese magnetismo existe y se mide, y permitió avanzar—. Ahora toca el magnetismo
**en los materiales**.

### 2.2 El programa: lo mismo que con los dieléctricos, con una diferencia

En el caso eléctrico, la reacción de la materia a un campo se tomó en cuenta
con la **polarización**, y se formularon ecuaciones que «barren bajo la
alfombra» lo que no se sabe del detalle microscópico. Lo simpático de ese caso
es que la mayoría de los aislantes usuales son, en muy buena aproximación,
homogéneos, isotrópicos y **lineales**: todo queda en una única constante por
material, la constante dieléctrica (que hay que dar material por material,
porque deducirla de las interacciones microscópicas es muy difícil).

Se hará el ejercicio análogo en el caso magnético, con la **magnetización**
$\vec M(\vec r)$ en lugar de la polarización.

> **La diferencia.** En muchos materiales magnéticos la relación entre el campo
> magnético aplicado y la magnetización **no es lineal**, y eso es lo que da
> lugar a los imanes. El análogo eléctrico existe, pero es infrecuente y
> pequeño; en el caso magnético es frecuente y grande. Tarde o temprano habrá
> que ir al **ferromagnetismo**, que es más difícil y es el caso interesante
> —el de las magnetitas.

**Por qué un imán exige no linealidad:** con una relación lineal, si
$\vec B\to0$ entonces $\vec M\to0$. Para tener $\vec M\neq0$ con $\vec B\to0$
la relación tiene que ser no lineal (y fuertemente, en algunos casos).

---

## 3. Magnetización

### 3.1 Corrientes microscópicas

La polarización se debía a que átomos o moléculas, cuya orientación sigue
siendo casi totalmente aleatoria por el ruido térmico, se alinean *en promedio
un poquito* con el campo eléctrico. Acá pasa lo mismo con corrientes.

Átomos y moléculas suelen tener **corrientes eléctricas microscópicas**, que no
son de conducción —no hay desplazamiento macroscópico de carga—, sino
localizadas a escala atómica. Son de dos tipos:

| Tipo | Descripción |
| --- | --- |
| Orbitales | Corrientes a nivel de los orbitales atómicos; el átomo puede tener un momento dipolar magnético, por ejemplo con un campo aplicado |
| De espín | Propiedad intrínseca del electrón: se comporta «como si» rotara sobre sí mismo. Es un efecto cuántico, sin análogo clásico, y muy importante |

Los dos pueden importar según la situación, y pueden interactuar entre sí
(interacción espín–órbita, sólo mencionada).

### 3.2 Cada átomo como un dipolo

Como electrones y átomos son muy pequeños, a distancia **macroscópica** el
efecto de cada corriente microscópica se reemplaza por un campo **dipolar**:
es el desarrollo multipolar magnético de la clase pasada. A cada átomo —sumando
efectos orbitales y de espín— se le asocia un momento dipolar magnético
$\vec m_i$.

### 3.3 Definición de la magnetización

No interesa dipolo por dipolo, sino la suma en un volumen $\Delta V$ **chico
macroscópicamente pero con muchísimos átomos** (para un material de 10 cm,
volúmenes de un milímetro cúbico):

$$\boxed{\ \vec M(\vec r) = \lim_{\Delta V\to0}\frac{1}{\Delta V}
\sum_{i\,\in\,\Delta V}\vec m_i\ }$$

Es el momento dipolar magnético por unidad de volumen, definido exactamente
como la polarización con $\vec m_i$ en lugar del momento dipolar eléctrico.

- **Material desmagnetizado:** la suma de los $\vec m_i$ en un volumen
  macroscópico es cero. No porque no haya momentos microscópicos —siempre los
  hay—, sino porque están desordenados y promedian cero.
- **Con un $\vec B$ externo:** por lo general $\vec M\neq0$, igual que un
  dieléctrico se polariza en un campo eléctrico.

> Respuesta a una pregunta: magnetizarse no es propio de los conductores. Hay
> materiales aislantes magnéticos —los imanes de cocina son, como un todo,
> plástico, aunque tengan hierro adentro—, y algunos metales juegan un papel
> importante.

### 3.4 Magnetización espontánea

En general, si $\vec E\to0$ la polarización tiende a cero. En el caso magnético
no siempre: puede ser $\vec B\to0$ con $\vec M\not\to0$. A eso se le llama
**magnetización espontánea**.

> **«Espontánea» es un término engañoso.** No hay nada mágico ni sin causa. Un
> material isotrópico sin campo aplicado no tiene direcciones privilegiadas,
> así que no puede «elegir» una por sí solo. Lo que pasa es que **algo en el
> pasado lo orientó**, se apagaron las causas y el material guarda su historia.
> Espontánea quiere decir «sin una causa aplicada en ese momento».

No es raro que haya cosas magnetizadas en la superficie de la Tierra: el
planeta tiene un campo magnético que se mide con aparatos caseros. Es una causa
posible, no la única.

---

## 4. Campo magnético producido por un material magnetizado

Mismo plan que con los dieléctricos: primero se supone una magnetización
$\vec M(\vec r)$ **dada** y se estudia qué produce; cómo se genera viene
después.

### 4.1 Potencial vector de una magnetización dada

Como $\vec M$ es momento dipolar por unidad de volumen, un volumen pequeño
tiene momento $\Delta\vec m = \vec M\,\Delta V$. Sumando los potenciales
vectores dipolares de cada elemento:

$$\vec A(\vec r) = \frac{\mu_0}{4\pi}\int_V
\frac{\vec M(\vec r\,')\times(\vec r-\vec r\,')}{|\vec r-\vec r\,'|^3}\,dV' .$$

La única suposición es que cada corriente microscópica se reemplaza por un
dipolo, sin cuadrupolos ni órdenes superiores. Eso es excelente **fuera del
material**, a distancia macroscópica de las moléculas.

### 4.2 Validez dentro del material

Interesa también el campo dentro del material.

> **Se puede probar, y no se prueba acá,** que la misma expresión vale dentro
> del material **para campos macroscópicos**. Muy cerca de una molécula no
> vale: su corriente no se puede reemplazar por un dipolo. Pero promediando en
> regiones macroscópicas la contribución de cada molécula individual pesa poco.
> Es el mismo argumento que para la polarización, que el Reitz hace en detalle;
> hacerlo acá llevaría una clase entera.

Se admite, entonces, la expresión tanto fuera como dentro del material.

### 4.3 Reescritura con un rotacional

Objetivo: escribir $\vec A$ en términos de **corrientes de magnetización**, así
como la polarización se escribió en términos de cargas de polarización.

**Paso 1.** Derivando respecto de la variable de integración, el signo se
compensa:

$$\nabla'\frac{1}{|\vec r-\vec r\,'|} = \frac{\vec r-\vec r\,'}{|\vec r-\vec r\,'|^3}
\quad\Longrightarrow\quad
\vec A(\vec r) = \frac{\mu_0}{4\pi}\int_V \vec M(\vec r\,')\times
\nabla'\frac{1}{|\vec r-\vec r\,'|}\,dV' .$$

**Paso 2.** Rotacional de un escalar por un vector,
$\nabla\times(\varphi\,\vec b) = \nabla\varphi\times\vec b + \varphi\,\nabla\times\vec b$.
Los factores están en el otro orden, así que hay que cuidar el signo:

$$\vec M\times\nabla'\frac{1}{|\vec r-\vec r\,'|}
= \frac{\nabla'\times\vec M(\vec r\,')}{|\vec r-\vec r\,'|}
- \nabla'\times\left(\frac{\vec M(\vec r\,')}{|\vec r-\vec r\,'|}\right).$$

**Paso 3.** Sustituyendo:

$$\vec A(\vec r) = \frac{\mu_0}{4\pi}\int_V
\frac{\nabla'\times\vec M(\vec r\,')}{|\vec r-\vec r\,'|}\,dV'
\;-\; \frac{\mu_0}{4\pi}\int_V
\nabla'\times\left(\frac{\vec M(\vec r\,')}{|\vec r-\vec r\,'|}\right)dV' .$$

El primer término ya tiene la forma general de un potencial vector, con
$\nabla'\times\vec M$ en el lugar de $\vec J$. El segundo «se parece a un
término de borde»: si fuera una divergencia, el teorema de la divergencia lo
llevaría a la superficie. Pero es un rotacional.

### 4.4 Un teorema: la integral de volumen de un rotacional

$$\boxed{\ \int_V \nabla\times\vec b\;dV = \oiint_S \hat n\times\vec b\;dS\ }$$

Es como el teorema de la divergencia, pero para rotacionales.

**Prueba**, a partir del teorema de la divergencia. La igualdad es vectorial;
para volverla escalar se la multiplica por un vector **constante** $\vec w$. En
general,

$$\vec w\cdot(\nabla\times\vec b) = \nabla\cdot(\vec b\times\vec w) + \vec b\cdot(\nabla\times\vec w),$$

y el último término es nulo porque $\vec w$ es constante. Entonces

$$\vec w\cdot\int_V \nabla\times\vec b\;dV
= \int_V \nabla\cdot(\vec b\times\vec w)\,dV
= \oiint_S (\vec b\times\vec w)\cdot\hat n\,dS
= \vec w\cdot\oiint_S \hat n\times\vec b\,dS,$$

donde se usó la **propiedad cíclica del producto mixto** y que $\vec w$,
constante, sale de la integral. Como $\vec w$ es arbitrario, se lo toma igual a
$\hat\imath$, $\hat\jmath$ y $\hat k$, y la igualdad queda probada componente a
componente. ∎

### 4.5 Corrientes de magnetización

Aplicando el teorema al segundo término:

$$\vec A(\vec r) = \frac{\mu_0}{4\pi}\int_V
\frac{\nabla'\times\vec M(\vec r\,')}{|\vec r-\vec r\,'|}\,dV'
\;-\; \frac{\mu_0}{4\pi}\oiint_S
\frac{\hat n\times\vec M(\vec r\,')}{|\vec r-\vec r\,'|}\,dS' .$$

Se definen:

$$\boxed{\ \vec J_M(\vec r\,') = \nabla'\times\vec M(\vec r\,')\ }
\qquad\text{densidad (volumétrica) de corriente de magnetización,}$$

y una **densidad superficial de corriente de magnetización** $\vec j_M$,
construida con $\hat n$ y $\vec M$ en el borde.

> **Sobre el signo de $\vec j_M$.** La transcripción dice que se la define como
> «$\hat n$ por $\vec M$». Con el signo menos que precede a la integral de
> superficie, la combinación que entra en $\vec A$ *como una corriente* —con el
> mismo signo que $\vec J_M$ en el término de volumen— es
> $\vec M\times\hat n = -\,\hat n\times\vec M$. El orden de los factores que el
> docente escribió en el pizarrón no se puede confirmar desde el VTT.

Lectura: el potencial vector producido por una magnetización,
$\vec A_M$, se puede pensar como producido por **corrientes**, en el volumen o
en la superficie, que ya no son corrientes de conducción a las que se accede
externamente, sino microscópicas. Es muy parecido a lo que pasaba con la
polarización, que se veía como producida por densidades volumétricas y
superficiales de carga que no eran cargas libres.

> **El término de superficie** sólo contribuye si hay corrientes de
> magnetización concentradas en el borde. Siempre se lo puede pensar también
> como de volumen, haciendo zoom en la pequeña capa superficial y viendo que
> tiene un perfil. Con las cargas de polarización el término de borde es muy
> importante; acá, no siempre.

### 4.6 Consecuencias para el campo

El campo de magnetización es $\vec B_M = \nabla\times\vec A_M$. Por lo tanto:

$$\nabla\cdot\vec B_M = 0,$$

porque la divergencia de todo rotacional es cero: el campo macroscópico en un
material sigue siendo de divergencia nula. Y, salvo en la superficie, donde
está el término singular,

$$\boxed{\ \nabla\times\vec B_M = \mu_0\,\vec J_M\ }$$

porque $\vec A_M$ tiene exactamente la forma del potencial vector de una
corriente. **Sigue valiendo Ampère**, para el caso estacionario, con la
corriente de magnetización en lugar de la de conducción.

Se conserva entonces la noción de corriente, sólo que ya no asociada a cargas
que se desplazan macroscópicamente, sino a cargas localizadas en un átomo, o
incluso a un electrón «rotando».

*La próxima clase: qué uso se le da a estos campos de magnetización. Buena
parte se parecerá mucho a lo hecho con la polarización, ahora con la
magnetización.*
