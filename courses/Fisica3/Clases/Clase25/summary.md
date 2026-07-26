# Resumen Clase 25 — Vector de Poynting, Intensidad, Espectro Electromagnético y Velocidad de la Luz en un Medio

---

## Índice

1. [Transporte de energía: el vector de Poynting](#1-transporte-de-energía-el-vector-de-poynting)
   - [1.1 Definición del flujo de energía](#11-definición-del-flujo-de-energía)
   - [1.2 La forma del vector de Poynting](#12-la-forma-del-vector-de-poynting)
   - [1.3 Verificación de la dirección](#13-verificación-de-la-dirección)
2. [Densidad de energía en una onda electromagnética](#2-densidad-de-energía-en-una-onda-electromagnética)
3. [Demostración de que |S| es la potencia por unidad de área](#3-demostración-de-que-s-es-la-potencia-por-unidad-de-área)
4. [Intensidad](#4-intensidad)
5. [Ondas esféricas](#5-ondas-esféricas)
   - [5.1 Decaimiento de la intensidad](#51-decaimiento-de-la-intensidad)
   - [5.2 Decaimiento del campo eléctrico](#52-decaimiento-del-campo-eléctrico)
6. [Espectro electromagnético](#6-espectro-electromagnético)
   - [6.1 Una sola velocidad en el vacío](#61-una-sola-velocidad-en-el-vacío)
   - [6.2 Las regiones del espectro](#62-las-regiones-del-espectro)
   - [6.3 Antenas](#63-antenas)
7. [Velocidad de la luz en un medio](#7-velocidad-de-la-luz-en-un-medio)
   - [7.1 Medios opacos y transparentes](#71-medios-opacos-y-transparentes)
   - [7.2 Deducción de la velocidad](#72-deducción-de-la-velocidad)
   - [7.3 La constante dieléctrica depende de la frecuencia](#73-la-constante-dieléctrica-depende-de-la-frecuencia)
   - [7.4 Índice de refracción](#74-índice-de-refracción)
8. [La medición de la velocidad de la luz](#8-la-medición-de-la-velocidad-de-la-luz)
9. [Planteo: reflexión y refracción](#9-planteo-reflexión-y-refracción)

---

## 1. Transporte de energía: el vector de Poynting

### 1.1 Definición del flujo de energía

**Todas las ondas viajeras transportan energía**: la energía se traslada con la
onda. Las ondas electromagnéticas no son la excepción.

Para cuantificarlo se considera una superficie de área $A$ y se pregunta cuánta
energía la atraviesa **por unidad de tiempo y por unidad de superficie**. La
energía por unidad de tiempo es una **potencia**, y se la escribe como un flujo
vectorial:

$$P = \iint_S \mathbf{S}\cdot\hat{\mathbf{n}}\, dA$$

donde el vector $\mathbf{S}$ queda definido por:

- **Módulo**: la energía que atraviesa una superficie **normal** a $\mathbf{S}$,
  por unidad de tiempo y por unidad de superficie. Tomando un elemento
  suficientemente pequeño como para considerarlo plano, es
  $\Delta U/(\Delta t\,\Delta A)$.
- **Dirección y sentido**: hacia dónde se está transportando la energía.

Ese vector se llama **vector de Poynting**, o **vector de flujo de energía**.

> Esta definición es completamente general: se puede construir un vector de
> transporte de energía para cualquier situación en que haya transmisión de
> energía —ni siquiera hace falta que sea una onda—. Lo que sigue es su forma
> **específica** para el campo electromagnético.

### 1.2 La forma del vector de Poynting

$$\boxed{\ \mathbf{S} = \frac{1}{\mu_0}\,\mathbf{E}\times\mathbf{B}\ }$$

### 1.3 Verificación de la dirección

En la Clase 24 se vio que las ondas electromagnéticas son **transversales**:
$\mathbf{E}$ y $\mathbf{B}$ oscilan en el plano perpendicular a la dirección de
propagación, y además son perpendiculares entre sí.

De la definición, $\mathbf{S}$ es perpendicular a $\mathbf{E}$ y perpendicular a
$\mathbf{B}$; por lo tanto es **perpendicular al plano que ellos forman**. Para
una onda plana eso es exactamente la **dirección de propagación**. La dirección
sale sola de la definición.

> **El sentido también es el correcto**, aunque no se demuestra en general. Para
> la onda particular de la Clase 24 se verifica de inmediato: propagándose según
> $\hat{x}$, con $\mathbf{E}$ en $\hat{y}$ y $\mathbf{B}$ en $\hat{z}$, el
> producto vectorial $\hat{y}\times\hat{z} = \hat{x}$ da justo la dirección de
> propagación.

---

## 2. Densidad de energía en una onda electromagnética

Las densidades de energía eléctrica y magnética ya se conocían del curso:

$$u_E = \tfrac{1}{2}\varepsilon_0 E^2, \qquad u_B = \frac{1}{2\mu_0}B^2$$

> Estas expresiones son **generales** para cualquier sistema electromagnético. En
> el curso se demostraron sólo en casos particulares, pero valen siempre.

Ahora se usa la relación específica de las ondas, deducida en la Clase 24:

$$E = c\,B$$

Sustituyendo $B = E/c$ en la densidad magnética:

$$u_B = \frac{1}{2\mu_0}\frac{E^2}{c^2}$$

y usando que $c^2 = 1/(\mu_0\varepsilon_0)$, es decir
$1/c^2 = \mu_0\varepsilon_0$:

$$u_B = \frac{1}{2\mu_0}\,\mu_0\varepsilon_0\, E^2
     = \tfrac{1}{2}\varepsilon_0 E^2 = u_E$$

$$\boxed{\ u_E = u_B \quad\Longrightarrow\quad u = u_E + u_B = 2\,u_E\ }$$

> **Resultado notable:** en una onda electromagnética la energía está repartida
> **por partes iguales** entre el campo eléctrico y el magnético. La densidad
> total es simplemente el doble de cualquiera de las dos.

---

## 3. Demostración de que |S| es la potencia por unidad de área

Se toma una **onda plana de período $T$** propagándose según $\hat{x}$.

> No se pierde generalidad: por invariancia de rotación siempre se puede elegir el
> sistema de coordenadas de modo que la dirección de propagación sea $\hat{x}$.

Se construye un **paralelepípedo** de sección transversal $A$ (perpendicular a la
propagación) y largo $c\,\Delta t$ a lo largo de $\hat{x}$.

> **Por qué se pide $\Delta t \gg T$.** La onda está oscilando, así que la
> densidad de energía no es uniforme y la energía que pasa por unidad de tiempo
> tampoco es constante. Para poder hablar de una energía por unidad de tiempo bien
> definida se toma el intervalo **mucho mayor que el período**: lo que se calcula
> es entonces la energía **promediada en un período de oscilación**.

**Paso 1 — la energía contenida.** Toda la energía que está dentro del
paralelepípedo cruza la cara de área $A$ en el intervalo $\Delta t$, porque en ese
tiempo la onda avanza justamente el largo del paralelepípedo:

$$\Delta U = u \cdot \text{Volumen} = u\, A\, c\, \Delta t$$

**Paso 2 — potencia por unidad de área.**

$$P = \frac{\Delta U}{\Delta t} = u\,A\,c
\qquad\Longrightarrow\qquad
\frac{P}{A} = u\,c$$

**Paso 3 — cálculo de $|\mathbf{S}|$.** El módulo de un producto vectorial es el
producto de los módulos por el seno del ángulo entre ellos; como
$\mathbf{E} \perp \mathbf{B}$, ese seno vale 1:

$$|\mathbf{S}| = \frac{1}{\mu_0}E\,B$$

Sustituyendo $E = cB$:

$$|\mathbf{S}| = \frac{c}{\mu_0}B^2$$

Y reconociendo que $B^2/\mu_0 = 2\,u_B$, que por §2 es igual a $2\,u_E$, es decir
la **densidad total** $u$:

$$\boxed{\ |\mathbf{S}| = c\,u = \frac{P}{A}\ }$$

que es exactamente lo que se quería probar.

> **Alcance de la demostración.** Estrictamente, no se probó instante a instante
> sino **en promedios sobre tiempos mucho mayores que el período**. Se puede
> demostrar que la relación vale también instantáneamente, pero esa prueba es más
> complicada. En el plano conceptual queda claro: $\mathbf{S}$ es la energía que
> cruza una superficie por unidad de tiempo, dividida por esa superficie.

---

## 4. Intensidad

> **Por qué el promedio es lo que importa.** La luz visible oscila del orden de
> $10^{15}$ veces por segundo. Ningún aparato de medida corriente —los ojos, por
> ejemplo— tiene la precisión temporal para resolver algo que ocurre en una parte
> en $10^{15}$ de segundo. Los instrumentos no ven lo que pasa instante a
> instante: miden **promedios en un período**.

Por eso se define la **intensidad**:

$$\boxed{\ I = \langle |\mathbf{S}| \rangle \ }$$

el **valor medio del módulo del vector de Poynting** en un período, o en un
conjunto de períodos.

> Es decir: la **energía promedio que llega a una superficie, por unidad de tiempo
> y por unidad de superficie**. Cuando se habla de "la intensidad de la luz que
> llega del Sol" se está diciendo cuánta energía llega al suelo por unidad de
> tiempo y de área, promediada en un período.

---

## 5. Ondas esféricas

> **La onda plana es una idealización.** Supone que $\mathbf{E}$ y $\mathbf{B}$
> son uniformes en **todo** el plano perpendicular a la propagación. Las ondas
> reales pueden comportarse así en una región pequeña, pero no infinitamente: una
> onda plana infinita tendría **energía total infinita**, y no se pueden construir
> cosas con energía infinita.

Lo realista es una **fuente puntual** —una lamparita, por ejemplo— que emite en
todas las direcciones con **simetría esférica**, y cuya energía se va
desparramando: cuanto más lejos, menor la intensidad recibida.

### 5.1 Decaimiento de la intensidad

El argumento es **conservación de la energía**: la onda electromagnética no pierde
energía al propagarse, así que la potencia total que atraviesa un cascarón
esférico de radio $r_1$ es la misma que la que atraviesa el de radio $r_2$:

$$P(r_1) = P(r_2)
\quad\Longrightarrow\quad
I(r_1)\,4\pi r_1^2 = I(r_2)\,4\pi r_2^2$$

$$\boxed{\ I(r) \propto \frac{1}{r^2}\ }$$

### 5.2 Decaimiento del campo eléctrico

**Lejos de la fuente, localmente la onda esférica se parece a una onda plana**: en
una región suficientemente pequeña no se llega a notar la curvatura. Se puede
entonces usar el resultado de §3:

$$I = \langle|\mathbf{S}|\rangle = \frac{1}{\mu_0}\langle E B\rangle
    = \frac{\langle E^2\rangle}{\mu_0 c}$$

usando $B = E/c$. Es decir,

$$I \propto |E|^2$$

Combinando con $I \propto 1/r^2$:

$$\boxed{\ |E| \propto \frac{1}{r}\ }$$

> **Por qué esto es importante.** En el caso **electrostático** el campo decae
> como $1/r^2$. Las ondas permiten campos eléctricos que decaen **mucho más
> lentamente**, y **ésa es la razón por la cual existen las telecomunicaciones a
> larga distancia**. Si todos los campos fueran electrostáticos no habría
> transmisión a gran distancia: el campo caería demasiado rápido y muy pronto no
> se vería nada.

> El $1/r$ corresponde simplemente a que **la energía no se pierde**: a medida que
> la superficie sobre la que se reparte crece, el pedazo de energía que toca a cada
> región es más chico. Nada más que eso.

---

## 6. Espectro electromagnético

Lo que normalmente llamamos **luz** no es cualquier onda electromagnética: son las
del rango **visible**. Las ondas de radio, las microondas y las ultravioletas
también son ondas electromagnéticas, y no las vemos.

### 6.1 Una sola velocidad en el vacío

De la relación general de ondas:

$$\frac{\lambda}{T} = \lambda\,\nu = c$$

> **Primera observación:** en el vacío, $c$ es **la misma para todas las
> frecuencias y todas las longitudes de onda**.

> **Consecuencia práctica:** en el vacío, dar la frecuencia es lo mismo que dar la
> longitud de onda, porque $\nu = c/\lambda$ con $c$ fija. Por eso el espectro
> puede graficarse indistintamente en cualquiera de las dos variables.

### 6.2 Las regiones del espectro

De mayor a menor frecuencia (es decir, de menor a mayor longitud de onda):

| Región | Frecuencia aprox. | Longitud de onda aprox. |
|---|---|---|
| Rayos gamma | hasta $\sim 10^{22}$ Hz | — |
| Rayos X | — | $10^{-11}$–$10^{-9}$ m |
| Ultravioleta | hasta $\sim 10^{17}$ Hz | — |
| **Visible** | $\sim 10^{15}$ Hz | $10^{-7}$–$10^{-6}$ m |
| Infrarrojo | hasta $\sim 10^{11}$ Hz | hasta $\sim 10^{-3}$ m |
| Microondas | hasta $\sim 10^{9}$ Hz | $\sim 10^{-3}$–$1$ m |
| Radio (FM, AM, onda larga) | $\sim 10^{6}$ Hz y menos | $\sim 10^{3}$–$10^{6}$ m |

> Los límites son **cualitativos** y las fronteras no están nítidamente definidas.
> De hecho, hay zonas donde según el contexto se habla de **rayos X** o de **rayos
> gamma**: físicamente es lo mismo —radiación electromagnética de esa frecuencia—
> pero se les da distinto nombre según **cómo se producen**, por razones en buena
> parte históricas (los rayos gamma aparecen en algunas desintegraciones
> radiactivas).

**El visible, con precisión:** de aproximadamente **400 nm** (violeta) a **700
nm** (rojo); el límite exacto depende algo de cada persona.

> **Por qué vemos justamente ese rango.** Se da la coincidencia —que quizá no sea
> coincidencia— de que el visible es la zona donde **el Sol emite más**. El pico
> máximo de emisión solar está en el **verde**. Si estuviéramos fuera de la
> atmósfera veríamos el Sol más bien verdoso; lo vemos amarillo porque la
> atmósfera **no filtra todas las longitudes de onda por igual** y filtra más el
> verde que el amarillo. En todo caso, verde y amarillo están cerca y ambos
> aproximadamente en el centro del visible: probablemente estamos "diseñados" para
> aprovechar la luz del Sol.

> **Cuidado con los prefijos.** *Infra*-rrojo y *ultra*-violeta están al revés uno
> del otro según qué variable se use. El infrarrojo tiene longitudes de onda **más
> largas** que el rojo y por lo tanto frecuencias **más bajas**. Los prefijos se
> entienden habitualmente respecto de la **frecuencia**.

> **Rayos X:** penetran fácilmente los tejidos poco densos (la piel) pero son
> frenados por los tejidos duros (los huesos). Colocando una película sensible del
> otro lado se obtiene una radiografía.

> **Ultravioleta:** cuando se habla de los "rayos UV" del protector solar no se
> refiere a todo el UV, sino sólo al **UV relativamente cercano**, que es el que
> efectivamente llega a la Tierra.

### 6.3 Antenas

**¿Por qué las antenas sirven para captar?** No es por el área, ni sólo porque
sean conductores. Una antena es **un pedazo de circuito en el que los electrones
se pueden mover bastante**, y lo ideal para emitir o captar una señal es que se
muevan una distancia **comparable a la longitud de onda**.

> **Regla práctica:** las antenas se diseñan con tamaños lo más parecidos posible
> a la $\lambda$ que se quiere emitir o recibir. Pueden ser mil veces más chicas,
> pero no cien mil veces más chicas; si no, cuesta mucho. No es que no se pueda:
> cuesta más.

Esto explica el contraste **AM vs. FM en un celular**:

- Las ondas de **FM** son del orden del **metro**. Un celular mide unos 8–10 cm:
  un factor 10 de diferencia, no está tan lejos, y el aparato entero funciona un
  poco como antena.
- Las ondas de **AM** son del orden de $10^3$ m. Lo ideal sería una antena de un
  kilómetro, lo cual no es cómodo. El factor de diferencia es enorme, y por eso es
  mucho más difícil hacer funcionar AM en un celular.

> **Antenas en el techo.** Antes se necesitaban antenas grandes porque los
> receptores no eran de buena calidad. Hoy los aparatos hacen tanto procesamiento
> de señal que logran limpiar una señal mediocre —pero si uno está demasiado
> lejos, tampoco se puede reconstruir.

> **AM y alcance.** Las ondas de longitud de onda más grande **suelen** tener
> mayor alcance: tienden a disiparse en distancias comparables a su longitud. No es
> obligatorio, es una tendencia. Por eso las emisiones a muy grandes distancias son
> de onda larga.

> **Por qué usar varias bandas.** Además de las ventajas técnicas propias de cada
> una, usar más pedazos del espectro permite tener **más radios**: cada emisora
> ocupa un pedacito de ancho de banda y tienen que estar suficientemente separadas
> para no saturarlo.

---

## 7. Velocidad de la luz en un medio

Todo lo anterior valía **en el vacío**.

### 7.1 Medios opacos y transparentes

El principal fenómeno en un medio es que **la mayor parte de los materiales
absorben la luz** o la reflejan, pero no dejan que la onda se propague en su
interior (la madera, el metal). Los que sí lo permiten se llaman
**transparentes**.

> **La transparencia es por ventanas, no absoluta.** Un material puede ser
> transparente en el visible y opaco en otro rango. El **agua** es transparente en
> el visible pero **opaca en algunas regiones del ultravioleta**, cosa de la que no
> nos damos cuenta. Y aun dentro de su ventana la transmisión no es total: un
> vidrio muy grueso atenúa un poco la luz.

### 7.2 Deducción de la velocidad

En el vacío se dedujo $c = 1/\sqrt{\mu_0\varepsilon_0}$. En un medio hay que
reemplazar las constantes por las del material:
$\varepsilon_0 \to K_e\varepsilon_0$ y $\mu_0 \to K_m\mu_0$, siendo $K_e$ y $K_m$
las constantes eléctrica y magnética del medio.

> Se supone el medio **lineal, isótropo y homogéneo**, tanto en sus propiedades
> eléctricas como magnéticas.

$$v = \frac{1}{\sqrt{K_e\varepsilon_0\, K_m\mu_0}} = \frac{c}{\sqrt{K_e K_m}}$$

> **En la práctica $K_m$ no juega ningún papel:** en casi todos los materiales
> transparentes $K_m - 1$ es del orden de $10^{-4}$, así que $K_m \approx 1$.

$$\boxed{\ v \simeq \frac{c}{\sqrt{K_e}}\ }$$

### 7.3 La constante dieléctrica depende de la frecuencia

> **Advertencia importante.** La $K_e$ que aparece acá **no es la misma** que la
> constante dieléctrica estudiada en la parte electrostática del curso.

El razonamiento: un dieléctrico tiene constante eléctrica porque al aplicarle un
campo **se polariza**, es decir, sus moléculas se **alinean** con el campo. Pero
en una onda electromagnética el campo eléctrico está **oscilando**. Las moléculas
quieren orientarse, pero les cuesta mucho más hacerlo con un campo que se mueve
que con uno quieto: con el campo estático tienen todo el tiempo para acomodarse,
mientras que si oscila muy rápido, para cuando la molécula alcanza a acomodarse el
campo ya cambió.

$$\boxed{\ K_e = K_e(\lambda)\ }$$

> Ésta es la raíz física de la **dispersión cromática** que se verá en la clase
> siguiente: distintos colores "ven" distinta constante dieléctrica y por lo tanto
> se propagan a distinta velocidad.

**Velocidades en distintos medios** (para $\lambda = 589$ nm, en el amarillo):

| Medio | $v\ (\times 10^{8}\ \text{m/s})$ |
|---|---|
| Vacío / aire | $3{,}0$ |
| Agua | $2{,}26$ |
| Vidrio | $1{,}97$ |
| Diamante | $1{,}29$ |

> Típicamente la velocidad en un medio es **menor** que en el vacío. El aire y el
> vacío dan lo mismo, porque el aire está muy diluido.

### 7.4 Índice de refracción

$$\boxed{\ n = \frac{c}{v} = \sqrt{K_e}\ }$$

> **Verificación con la tabla anterior:** $n_{\text{agua}} = 3{,}00/2{,}26 =
> 1{,}33$ y $n_{\text{vidrio}} = 3{,}00/1{,}97 = 1{,}52$, que son exactamente los
> valores tabulados estándar. Para el diamante da $3{,}00/1{,}29 = 2{,}33$, algo
> por debajo del valor habitual ($\approx 2{,}42$); en la Clase 26 el docente da
> $2{,}54$ para el mismo material, así que ese dato arrastra algo de ruido de
> transcripción. Los dos primeros cierran perfecto.

> Como $K_e$ depende de $\lambda$, **también $n$ depende de $\lambda$**. Por eso
> las tablas de índices siempre se dan para una longitud de onda especificada.

---

## 8. La medición de la velocidad de la luz

**En la antigüedad** ni siquiera se planteaba el problema: se suponía que la luz
se propagaba instantáneamente, con velocidad infinita —lo cual no está tan lejos
de la experiencia cotidiana—. Aparentemente **Galileo** fue de los primeros en
plantearse si era realmente infinita o simplemente muy grande.

**Las primeras medidas fueron astronómicas**, e indirectas: como la velocidad de
la luz es finita, la luz tarda en llegar desde otros planetas, y eso produce
pequeños efectos observables (fenómenos de **aberración**). Conociendo las
distancias se puede estimar $c$.

| Autor | Año |
|---|---|
| Römer | 1676 |
| Bradley | 1729 |

> **Por qué a los físicos no les alcanzaban.** No es desconfianza del método sino
> del control: en un fenómeno astronómico, lejano e inaccesible, siempre se puede
> sospechar que la explicación no es el valor de $c$ sino alguna otra cosa —por
> ejemplo, un gas en medio del sistema solar que altere el resultado—. Es
> preferible, o al menos complementario, hacer una medida **en la Tierra**, donde
> se controla todo lo que pasa.

**El experimento de Fizeau (1849)** fue la primera medida terrestre precisa. El
montaje:

- Una fuente de luz (en la época, una vela) y un **espejo semirreflectante**: la
  mitad de la luz pasa y la mitad se refleja.
- Una **rueda dentada** con ranuras equiespaciadas, separadas por un ángulo
  $\theta$, girando con velocidad angular constante $\omega$.
- Un **espejo** a una distancia $L$, y el ojo del observador del otro lado del
  espejo semirreflectante.

La luz pasa por una ranura, recorre $L$, rebota en el espejo y vuelve. Al volver,
o coincide con una ranura —y llega al observador— o choca con un diente y se
bloquea.

Fizeau fue **variando la velocidad angular** hasta ver luz. Cuando la ve, el
tiempo de ida y vuelta de la luz coincide con el que tarda la rueda en avanzar un
ángulo $\theta$ (o un múltiplo entero):

$$\boxed{\ \frac{2L}{c} = \frac{\theta}{\omega}\ }$$

> Probando con varias velocidades angulares se identifican los casos $2\theta$,
> $3\theta$, etc., y de ahí se determina cuál es el menor. Lo que se variaba era
> la velocidad angular, no la rueda.

Con $L = 8630$ m —una distancia que obliga a montar el experimento entre dos
elevaciones, para que no haya nada en el medio— obtuvo
$c \approx 3\times 10^{8}$ m/s.

> **Hoy ya no se mide $c$.** Se conoce con tanta precisión que su valor está
> **fijado por convención** y forma parte de la **definición del metro**: a partir
> de la relatividad se establece una relación entre el metro y el segundo fijando
> $c$. La imprecisión de la medida quedó, en rigor, escondida dentro de la
> definición del metro.

---

## 9. Planteo: reflexión y refracción

Los últimos minutos plantean el problema que se resolverá en la clase siguiente.

Dos medios transparentes, 1 y 2, separados por una superficie plana, con un eje
normal. Un rayo de luz —una onda plana de longitud de onda $\lambda$— incide con
un ángulo $\theta_1$ respecto de la normal. Al llegar a la frontera ocurren dos
cosas:

- Parte de la luz es **reflejada** con un ángulo $\theta_2$.
- Parte es **transmitida** con un ángulo $\theta_3$.

Las dos propiedades a demostrar:

$$\boxed{\ \theta_1 = \theta_2\ } \qquad \text{(ley de la reflexión)}$$

$$\boxed{\ n_1 \operatorname{sen}\theta_1 = n_2 \operatorname{sen}\theta_3\ }
\qquad \text{(ley de Snell)}$$

> De la ley de la reflexión todos tienen una intuición muy armada; el objetivo es
> **entender por qué** la luz tiene esa propiedad, y poder hacer la cuenta que
> muestra que tiene que ser así.

---

*Continúa en la Clase 26: demostración de ambas leyes a partir de los frentes de
onda, principios de Huygens y de Fermat, y reflexión total interna.*
