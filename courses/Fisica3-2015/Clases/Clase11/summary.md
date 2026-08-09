# Resumen Clase 11 — Dieléctricos, Condensador con Dieléctrico, Ley de Gauss en Dieléctricos e Introducción a la Corriente Eléctrica

---

## Índice

1. [Dieléctricos: polarización de un material lineal](#1-dieléctricos-polarización-de-un-material-lineal)
   - [1.1 Hipótesis sobre el material](#11-hipótesis-sobre-el-material)
   - [1.2 Respuesta al campo: orientación molecular](#12-respuesta-al-campo-orientación-molecular)
   - [1.3 Campo de polarización y constante dieléctrica](#13-campo-de-polarización-y-constante-dieléctrica)
2. [Valores de la constante dieléctrica](#2-valores-de-la-constante-dieléctrica)
3. [Comentarios sobre la linealidad](#3-comentarios-sobre-la-linealidad)
4. [Condensador con dieléctrico](#4-condensador-con-dieléctrico)
   - [4.1 Repaso: el condensador en vacío](#41-repaso-el-condensador-en-vacío)
   - [4.2 Carga de polarización](#42-carga-de-polarización)
   - [4.3 Capacitancia y permitividad](#43-capacitancia-y-permitividad)
   - [4.4 Carga fija vs. potencial fijo](#44-carga-fija-vs-potencial-fijo)
5. [Ley de Gauss en presencia de dieléctricos](#5-ley-de-gauss-en-presencia-de-dieléctricos)
   - [5.1 Motivación: la carga de polarización es inaccesible](#51-motivación-la-carga-de-polarización-es-inaccesible)
   - [5.2 Deducción para un único dieléctrico](#52-deducción-para-un-único-dieléctrico)
6. [Ejemplos con varios dieléctricos](#6-ejemplos-con-varios-dieléctricos)
7. [Corriente eléctrica](#7-corriente-eléctrica)
   - [7.1 Conductor fuera del equilibrio](#71-conductor-fuera-del-equilibrio)
   - [7.2 Resistencia y efecto Joule](#72-resistencia-y-efecto-joule)
   - [7.3 Superconductores](#73-superconductores)
   - [7.4 Definición de corriente](#74-definición-de-corriente)
   - [7.5 Densidad de corriente](#75-densidad-de-corriente)

---

## 1. Dieléctricos: polarización de un material lineal

**Dieléctrico** es sinónimo de **aislante** (así se usa en toda la literatura). El objetivo de esta parte es entender qué ocurre cuando se aplica un campo eléctrico externo a un aislante, y cómo describir el material sin tener que resolver su física microscópica en detalle.

### 1.1 Hipótesis sobre el material

El tratamiento se restringe a una clase particular de materiales, definida por tres condiciones:

- **Homogéneo:** el material es igual en todas sus partes — no tiene zonas más densas que otras, ni grumos, ni inhomogeneidades. Sus propiedades no dependen del punto.
- **Isótropo:** no tiene direcciones preferenciales — no hay fibras ni ejes cristalinos que privilegien una dirección. Sus propiedades son iguales en todas las direcciones.
- **Compuesto de moléculas polares:** cada molécula tiene su carga positiva y negativa **espacialmente separadas** (una "elongación"), de modo que el centro de carga positiva no coincide con el de carga negativa. Cada molécula es, en pequeño, un dipolo.

> Estas tres hipótesis son lo que da sentido a hablar de **una** constante dieléctrica escalar. Si el material fuese anisótropo, por ejemplo, la respuesta dependería de la dirección y haría falta un tensor.

### 1.2 Respuesta al campo: orientación molecular

- **Sin campo externo ($\mathbf{E}_0 = 0$):** las moléculas apuntan **al azar** en todas las direcciones. No hay ninguna dirección privilegiada y, en promedio, el material no está polarizado.
- **Con campo externo ($\mathbf{E}_0 \neq 0$):** las moléculas tienden a orientarse **según el campo**. Si $\mathbf{E}_0$ apunta hacia arriba, las cargas negativas de cada molécula tienden a apuntar hacia abajo (buscando la carga positiva que las atrae) y las positivas hacia arriba.

Es crucial entender que este alineamiento es **muy leve**: las vibraciones térmicas y las interacciones internas mantienen a las moléculas **esencialmente desordenadas**. El dibujo de "todas las moléculas alineadas como soldaditos" es una idealización pedagógica; si se pudiera fotografiar el material, las moléculas se verían casi aleatorias. Lo que sobrevive al **promediar** todo el caos molecular es un pequeño efecto neto orientado según $\mathbf{E}_0$.

### 1.3 Campo de polarización y constante dieléctrica

El efecto neto de la orientación es que aparecen **cargas de polarización** en las superficies del material: junto a la placa positiva del sistema se acumula un sobrante de carga **negativa**, y viceversa. En el interior sigue habiendo tantas cargas positivas como negativas (el material permanece neutro); solo hay sobrante en las superficies.

Estas cargas de polarización generan un campo propio $\mathbf{E}'$. Dos propiedades clave:

- **$\mathbf{E}'$ es colineal con $\mathbf{E}_0$.** Por **isotropía**, no hay ninguna otra dirección posible: la única dirección privilegiada del problema es la que impone $\mathbf{E}_0$. Cualquier otra dirección sería equivalente a sus vecinas, así que $\mathbf{E}'$ no "tendría hacia dónde apuntar" salvo a lo largo de $\mathbf{E}_0$.
- **$\mathbf{E}'$ es opuesto a $\mathbf{E}_0$.** Las cargas de polarización se disponen de modo de **oponerse** al campo aplicado.

Por lo tanto, como ambos vectores son colineales y de sentido opuesto, el campo **total** dentro del material tiene módulo:

$$
E = E_0 - E'
$$

En muchos aislantes —los llamados **materiales lineales**— el campo de polarización es **proporcional** al aplicado, $E' \propto E_0$. Como $E$ es una combinación lineal de $E_0$ y $E'$, también resulta $E \propto E_0$. Esto permite definir la **constante dieléctrica** $K_E$ del material:

$$
\boxed{E = \frac{E_0}{K_E}}
$$

- El nombre "lineal" viene precisamente de que la relación entre $E'$ (o $E$) y $E_0$ es de **proporcionalidad**: si se duplica $E_0$, se duplica $E$. No tiene por qué ser así en general (existen materiales no lineales), pero cuando lo es, **basta un solo número $K_E$** para caracterizar las propiedades eléctricas de equilibrio del material.
- **$K_E \geq 1$ siempre.** Como $\mathbf{E}'$ compensa parcialmente a $\mathbf{E}_0$, el campo total es **menor** que el aplicado ($E < E_0$), lo que obliga a $K_E > 1$.

---

## 2. Valores de la constante dieléctrica

| Material | $K_E$ |
|----------|-------|
| Vacío | $1$ |
| Aire (condiciones normales) | $1{,}00059$ |
| Poliestireno (plástico) | $2{,}6$ |
| Papel | $\approx 3{,}5$ |
| Agua destilada | $78{,}5$ |

- **Vacío:** por definición $K_E = 1$ (no se polariza; en rigor hay una polarización cuántica del vacío, pero es despreciable a este nivel).
- **Aire ≈ vacío:** el aire está tan diluido que casi no se polariza. Como en el curso rara vez se trabaja con más de 2–3 cifras significativas, **aire y vacío son equivalentes** a todos los efectos prácticos.
- **Papel:** el valor es aproximado porque, al ser de origen biológico, varía según el tipo.
- **Agua destilada:** su $K_E$ es enorme ($78{,}5$). Debe ser **destilada** — con sales disueltas sería un **conductor**, y ya no tendría sentido hablar de constante dieléctrica.

---

## 3. Comentarios sobre la linealidad

**¿Por qué tantos materiales resultan lineales?** La respuesta es, en cierto sentido, que "el dibujo de las moléculas alineadas está mal". Los campos eléctricos que sabemos producir en un laboratorio normal son **diminutos** comparados con los campos que existen a nivel microscópico dentro del material (cerca de un electrón el campo es gigantesco). El campo externo apenas perturba el sistema: las moléculas se deforman/orientan **apenitas** en promedio.

Formalmente, la relación $E'(E_0)$ puede pensarse como un **desarrollo de Taylor**: como $E' = 0$ cuando $E_0 = 0$ (sin campo aplicado no hay polarización), el desarrollo arranca en el término **lineal**, seguido de términos cuadráticos, cúbicos, etc. Pero como $E_0$ es "pequeño" a la escala del material, los términos no lineales son **totalmente despreciables**, y sobrevive solo el término lineal. De ahí la ubicuidad de los materiales lineales.

Tres precisiones adicionales:

- **Existen materiales no lineales:** la relación $E$–$E_0$ no es de proporcionalidad.
- **Ruptura dieléctrica:** si se aplica un campo **muy** grande, además de aparecer efectos no lineales, el material típicamente **se quema o se perfora**. La perforación consiste en que las cargas logran atravesar el aislante (se vuelve conductor de forma abrupta). Esto pone un límite práctico al campo aplicable.
- **Ferroeléctricos (polarización permanente):** existen materiales que, una vez polarizados por un campo, **conservan** la polarización al apagarlo. Es muy poco común en el caso eléctrico. En cambio, el **análogo magnético** —la **magnetización** permanente— es muy común: los **imanes** son materiales magnetizados espontáneamente, aun sin campo externo aplicado. (Los efectos magnéticos se verán más adelante en el curso.)

---

## 4. Condensador con dieléctrico

Se analiza un capacitor de placas paralelas al que se le aplica una diferencia de potencial $\Delta V$ **fija**, con cargas $+Q$ y $-Q$ en las placas. Aunque el cálculo se hace para placas paralelas por simplicidad, la conclusión se generaliza a cualquier condensador.

### 4.1 Repaso: el condensador en vacío

Sin dieléctrico, ya se calculó (Clase 9–10):

$$
E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 A}, \qquad \Delta V = E\,d = \frac{Q\,d}{\varepsilon_0 A}, \qquad C_{\text{vac}} = \frac{\varepsilon_0 A}{d}
$$

donde $A$ es el área de la placa y $d$ la separación.

### 4.2 Carga de polarización

Ahora se rellena el espacio entre placas con un dieléctrico lineal, homogéneo e isótropo de constante $K_E$. Aparecen cargas de polarización $Q'$ (con $Q' < 0$ junto a la placa de carga $+Q$). Aplicando la **ley de Gauss usual** con un cilindro gaussiano, que exige usar **toda** la carga encerrada (libre + polarización):

$$
E = \frac{Q + Q'}{\varepsilon_0 A}
$$

Por otro lado, sabemos que $E = E_0/K_E$, con $E_0 = Q/(\varepsilon_0 A)$ el campo que habría **sin** polarización. Igualando ambas expresiones del campo:

$$
\frac{E_0}{K_E} = E_0 + \frac{Q'}{\varepsilon_0 A}
$$

Despejando $Q'$ y usando $Q = \varepsilon_0 A\, E_0$:

$$
Q' = \varepsilon_0 A\left(\frac{E_0}{K_E} - E_0\right) = \varepsilon_0 A\, E_0\left(\frac{1}{K_E} - 1\right)
$$

$$
\boxed{Q' = Q\left(\frac{1}{K_E} - 1\right)}
$$

Como $K_E > 1$, el paréntesis es negativo: $Q'$ tiene signo **opuesto** a $Q$, como debía ser (junto a la carga libre positiva se acumula carga de polarización negativa).

### 4.3 Capacitancia y permitividad

Sustituyendo $Q'$ en el campo total:

$$
E = \frac{Q + Q'}{\varepsilon_0 A} = \frac{Q}{\varepsilon_0 A}\left[1 + \left(\frac{1}{K_E}-1\right)\right] = \frac{Q}{\varepsilon_0 K_E A}
$$

La diferencia de potencial (campo uniforme) es $\Delta V = E\,d = Q\,d/(\varepsilon_0 K_E A)$, de donde:

$$
\boxed{C = \frac{K_E\,\varepsilon_0\, A}{d} = \frac{\varepsilon\, A}{d}}
$$

Se define la **permitividad eléctrica** del material:

$$
\boxed{\varepsilon = K_E\,\varepsilon_0}
$$

Interpretación y consecuencias:

- La capacitancia **aumenta** en un factor $K_E$ respecto del vacío. Por eso, para fabricar condensadores de mayor capacidad, se les **agrega un dieléctrico**.
- **Regla práctica (un solo dieléctrico):** si en todo el problema interviene **un único** dieléctrico, todo se resuelve **exactamente como en el vacío**, pero reemplazando $\varepsilon_0 \to \varepsilon$. Se puede **olvidar por completo** la carga de polarización. El vacío pasa a verse como el caso particular $K_E = 1$ (con $\varepsilon \to \varepsilon_0$): $\varepsilon_0$ es la "permitividad del vacío" y $\varepsilon$ la del material.
- Esta simplificación **solo** funciona con un único dieléctrico. Con varios, hay que decidir dónde va $\varepsilon$ y dónde $\varepsilon_0$, lo que no siempre es obvio.

### 4.4 Carga fija vs. potencial fijo

En el cálculo anterior se mantuvo **$\Delta V$ fija** (condensador conectado a la fuente): lo que cambió al meter el dieléctrico fue que **aumentó la carga** $Q$.

> **Ejercicio (situación complementaria):** cargar el condensador, **desconectarlo** de la fuente (de modo que la carga $Q$ quede **fija**) y recién entonces introducir el dieléctrico. Ahora $Q$ no puede cambiar, así que lo que ocurre es que **disminuye la diferencia de potencial** $\Delta V$ (en un factor $K_E$).

---

## 5. Ley de Gauss en presencia de dieléctricos

### 5.1 Motivación: la carga de polarización es inaccesible

La ley de Gauss vista hasta ahora **vale siempre**, con o sin dieléctricos, pero exige usar **toda** la carga:

$$
\Phi_E = \frac{Q_{\text{libre}} + Q_{\text{pol}}}{\varepsilon_0}
$$

El problema práctico: $Q_{\text{libre}}$ (la que uno pone desde afuera) y $\Delta V$ son **medibles**, pero $Q_{\text{pol}}$ es un fenómeno **interno** del material, difícil de acceder experimentalmente. Uno querría formular una ley de Gauss que use **solo la carga libre** y "deje que el material se las arregle" con su polarización — trabajar con el material como se trabajaba con el vacío. La idea, en palabras del profesor, es **"barrer la mugre bajo la alfombra"**: la carga de polarización sigue ahí (es real), simplemente no queremos ocuparnos de ella.

### 5.2 Deducción para un único dieléctrico

Se supone que en el problema interviene **un solo** dieléctrico de constante $K_E$. Partimos de dos hechos:

1. La ley de Gauss con la carga total: $\displaystyle \Phi_E = \frac{Q_{\text{libre}} + Q_{\text{pol}}}{\varepsilon_0}$.
2. En todo punto, el campo real cumple $E = E_0/K_E$, con $E_0$ el campo "sin polarización". Como los campos son proporcionales punto a punto, **sus flujos también** lo son:

$$
\Phi_{E_0} = K_E\, \Phi_E
$$

El flujo $\Phi_{E_0}$ correspondería a tener solo la carga libre en el vacío: $\Phi_{E_0} = Q_{\text{libre}}/\varepsilon_0$. Restando las ecuaciones de Gauss para $E$ y para $E_0$ se puede despejar $Q_{\text{pol}}$ en términos de $\Phi_E$. Sustituyendo de vuelta en (1), el término de polarización se reabsorbe y queda:

$$
K_E\,\Phi_E = \frac{Q_{\text{libre}}}{\varepsilon_0}
$$

$$
\boxed{\Phi_E = \frac{Q_{\text{libre}}}{K_E\,\varepsilon_0} = \frac{Q_{\text{libre}}}{\varepsilon}}
$$

Esta es la **Ley de Gauss en presencia de dieléctrico**: es **idéntica** a la del vacío, con el único cambio $\varepsilon_0 \to \varepsilon$, y **solo usa la carga libre**. La polarización quedó "escondida" dentro de $\varepsilon$.

> **Salvedad importante:** esta ley usa que el material es **lineal** (un hecho **empírico**, que no se dedujo de las ecuaciones microscópicas). Cuando la información de linealidad está disponible, conviene usarla. Y vale solo si hay **un único** dieléctrico en juego; la ley de Gauss general (con la carga total) sigue valiendo siempre, pero obliga a considerar $Q_{\text{pol}}$.

---

## 6. Ejemplos con varios dieléctricos

La ley de Gauss "con $\varepsilon$" solo aplica con un único dieléctrico, situación poco común. Pero muchas configuraciones con varios dieléctricos pueden **descomponerse** en regiones, cada una con un único dieléctrico:

- **Dos dieléctricos lado a lado** ($K_1$, $K_2$) entre las mismas placas: se comporta como **dos condensadores en paralelo**. Como comparten las mismas placas conductoras, ambas mitades están a la misma diferencia de potencial (definición de conexión en paralelo). Cada mitad tiene un único dieléctrico → se trata con la ley anterior, y luego se combinan con $C_{\text{eq}} = C_1 + C_2$. Los efectos de borde en la frontera entre ambos dieléctricos se desprecian (ya se despreciaban los de los bordes de las placas).
- **Dieléctricos apilados (sándwich)**, uno sobre otro: equivale a **dos condensadores en serie** (con una "placa imaginaria" en la interfaz). De nuevo, cada capa tiene un único dieléctrico.

> **Cuándo NO se puede:** la descomposición funciona porque la **interacción** entre las regiones es despreciable (gracias a los efectos de borde despreciables). Si la interacción entre las partes es del **mismo orden** que el problema de cada dieléctrico por separado (por ejemplo, dieléctricos distintos separando directamente cargas $+Q$ y $-Q$), no se puede separar así. Ese caso general se estudia en el curso de Electromagnetismo.

---

## 7. Corriente eléctrica

Comienza el **capítulo 6**. Hasta ahora todo era **electrostático** (o casi: aunque vimos cargas moviéndose, todo se calculaba como en equilibrio). Ahora las cargas se mueven de forma sostenida.

### 7.1 Conductor fuera del equilibrio

Recordando la distinción conductor/aislante (es esquemática: existen **semiconductores** en el medio). En **equilibrio**, un conductor tiene $\mathbf{E} = 0$ en su interior: al aplicarle un campo externo, las cargas se redistribuyen (los electrones se acumulan en un extremo dejando déficit positivo en el otro) hasta que esa polarización **compensa** el campo aplicado y el interior queda con campo nulo.

Pero si se agrega un **mecanismo de bombeo** que devuelva las cargas que llegan a un extremo de vuelta por el otro, el sistema **no llega al equilibrio** y se mantiene una **corriente eléctrica**. Mantener una corriente requiere **dos** cosas:

1. Mantener un **campo eléctrico** aplicado.
2. Un mecanismo (una **fuente de energía**) que **bombee** las cargas de un lado al otro, cerrando el circuito.

> Un sistema con corriente está **fuera del equilibrio**: un sistema en equilibrio no tiene corrientes. Según el material, las cargas móviles son electrones (en un metal, se mueven en sentido opuesto a la corriente convencional) o iones (en un electrolito, pueden moverse en ambos sentidos).

### 7.2 Resistencia y efecto Joule

Si los electrones no encontraran ninguna oposición, un campo uniforme los sometería a una **fuerza constante** y tendrían un **movimiento uniformemente acelerado** — acelerarían indefinidamente, lo cual no ocurre. Lo que pasa en realidad es que los electrones se comportan como en un **pinball**: son acelerados por el campo, pero **chocan** repetidamente con la red del material ("pum, pum, pum"). En cada choque **entregan su energía** a la red (que se pone a vibrar) y **arrancan de cero**.

El resultado neto es un **avance promedio lento** en la dirección del campo, y una **disipación** de la energía suministrada en forma de **calor** (la vibración de la red es, microscópicamente, temperatura). Esta disipación es el **efecto Joule**, y es la razón por la que un conductor recorrido por corriente **se calienta**. En los aislantes esto prácticamente no ocurre (algunos conducen un poquitito, pero esencialmente no).

### 7.3 Superconductores

Hay materiales excepcionales que, por debajo de cierta **temperatura crítica**, tienen **resistencia exactamente cero**. Por ejemplo, el plomo enfriado a $\sim 3$ K (casi el cero absoluto). En un anillo superconductor, una corriente iniciada **persiste indefinidamente**: se retira la fuente, se vuelve un año después (manteniendo la temperatura) y la corriente sigue circulando sin haberse perdido nada.

Es un efecto **cuántico** (no se explica clásicamente), típicamente a temperaturas muy bajas ($< 20$ K). Desde los años 80 existen **superconductores de alta temperatura** (aún bajo cero, del orden de $-150$ a $-200\ ^\circ$C, pero mucho más "altos" que $20$ K); se llegó a soñar con superconductores a temperatura ambiente, sin éxito. **Uso tecnológico clave: electroimanes.** Un bobinado que da muchas vueltas, con resistencia ordinaria, disiparía enormes cantidades de energía por efecto Joule al intentar producir campos magnéticos muy intensos; con superconductores se evita esa pérdida (a costa del sistema de refrigeración). Aplicaciones: **aceleradores de partículas**, **suspensión magnética** (trenes que flotan).

### 7.4 Definición de corriente

Para cuantificar la corriente se toma una superficie $A$ en el material y se mide la carga $\Delta Q$ que la atraviesa en un tiempo $\Delta t$:

$$
\boxed{I = \lim_{\Delta t\to 0}\frac{\Delta Q}{\Delta t}}
$$

- **Orientación (signo):** hay que **orientar** la superficie, es decir, elegir un sentido positivo. La corriente es **positiva** cuando cargas positivas la cruzan en el sentido elegido. Una carga negativa que cruza en ese sentido cuenta como contribución **negativa**. En consecuencia, si los electrones se mueven hacia la derecha, la **corriente** apunta hacia la **izquierda**: la corriente convencional va en sentido contrario al movimiento de los portadores negativos.
- **Unidad:** $[I] = \text{Coulomb/segundo} \equiv \textbf{Ampere (A)}$.

### 7.5 Densidad de corriente

La corriente puede pensarse **exactamente como un flujo** de un campo vectorial, igual que el flujo eléctrico — solo que en lugar de "contar líneas de campo" se cuentan **trayectorias de cargas** que cruzan la superficie. Argumentos que lo justifican:

- Si se duplica el área transversal (con portadores distribuidos uniformemente), pasa el **doble** de carga por unidad de tiempo: $I \propto A$.
- Si la superficie se toma **paralela** al movimiento de las cargas, no la cruza ninguna: $I = 0$. Es exactamente el comportamiento de un flujo.

Esto motiva definir el **vector densidad de corriente** $\mathbf{J}$, tal que la corriente a través de una superficie $S$ sea su flujo:

$$
\boxed{I = \iint_S \mathbf{J}\cdot\hat{\mathbf{n}}\, dS}
$$

- Para una superficie **pequeña y perpendicular** al flujo: $I = J\,A$, es decir $J = I/A$. Como $I \propto A$, esta razón **no depende** del tamaño del área — es una propiedad **local**.
- **Dirección y sentido de $\mathbf{J}$:** el del **movimiento medio de las cargas positivas** (o el opuesto, si los portadores son negativos).

> Próxima clase: la relación entre $\mathbf{J}$ y el campo eléctrico aplicado —la **Ley de Ohm**— o, equivalentemente, la corriente en función de la diferencia de potencial entre los bornes de un conductor.
