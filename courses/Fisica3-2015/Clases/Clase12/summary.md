# Resumen Clase 12 — Velocidad de Deriva, Ley de Ohm, Resistividad y Resistencia, y el Modelo de Drude

---

## Índice

1. [Velocidad de desplazamiento (deriva)](#1-velocidad-de-desplazamiento-deriva)
   - [1.1 Dirección y sentido de J](#11-dirección-y-sentido-de-j)
   - [1.2 Deriva vs. velocidad real; régimen estacionario](#12-deriva-vs-velocidad-real-régimen-estacionario)
2. [Relación entre J y la velocidad de deriva](#2-relación-entre-j-y-la-velocidad-de-deriva)
   - [2.1 Deducción con el cilindrito](#21-deducción-con-el-cilindrito)
   - [2.2 Forma vectorial general](#22-forma-vectorial-general)
3. [Estimación de la velocidad de deriva en el cobre](#3-estimación-de-la-velocidad-de-deriva-en-el-cobre)
   - [3.1 El cálculo](#31-el-cálculo)
   - [3.2 La analogía de la manguera y la señal eléctrica](#32-la-analogía-de-la-manguera-y-la-señal-eléctrica)
   - [3.3 Corrección cuántica: el principio de Pauli](#33-corrección-cuántica-el-principio-de-pauli)
4. [Ley de Ohm (forma microscópica)](#4-ley-de-ohm-forma-microscópica)
   - [4.1 Conductividad y resistividad](#41-conductividad-y-resistividad)
   - [4.2 Materiales óhmicos (lineales)](#42-materiales-óhmicos-lineales)
   - [4.3 Tabla de resistividades](#43-tabla-de-resistividades)
5. [Resistencia y ley de Ohm macroscópica](#5-resistencia-y-ley-de-ohm-macroscópica)
   - [5.1 Conductor filiforme: R = ρL/A](#51-conductor-filiforme-r--ρla)
   - [5.2 Caso general: la resistencia depende de los bornes](#52-caso-general-la-resistencia-depende-de-los-bornes)
6. [Materiales óhmicos vs. no óhmicos: el diodo](#6-materiales-óhmicos-vs-no-óhmicos-el-diodo)
7. [Modelo microscópico de la conducción (Drude)](#7-modelo-microscópico-de-la-conducción-drude)
   - [7.1 Velocidad real vs. velocidad de deriva](#71-velocidad-real-vs-velocidad-de-deriva)
   - [7.2 Hipótesis del modelo](#72-hipótesis-del-modelo)

---

## 1. Velocidad de desplazamiento (deriva)

Repasando la Clase 11: la corriente a través de una superficie orientada $S$ es el **flujo** del vector densidad de corriente, $I = \iint_S \mathbf{J}\cdot\hat{\mathbf{n}}\,dS$. Para una superficie **pequeña y plana** de área $A$, despreciando la variación de $\mathbf{J}$:

$$
I = J\,A\cos\theta
$$

donde $\theta$ es el ángulo entre $\mathbf{J}$ y la normal $\hat{\mathbf{n}}$. En particular, si la superficie es **normal** a $\mathbf{J}$, simplemente $I = J\,A$.

### 1.1 Dirección y sentido de J

El vector $\mathbf{J}$ tiene un significado físico preciso: su **dirección** es la del **desplazamiento promedio** de los portadores de carga en el punto donde se mide, es decir, la dirección de su **velocidad media** $\mathbf{v}_d$. El **sentido** depende del signo de los portadores:

- Portadores **positivos:** $\mathbf{J}$ tiene el sentido de $\mathbf{v}_d$.
- Portadores **negativos** (electrones): $\mathbf{J}$ tiene sentido **opuesto** a $\mathbf{v}_d$.

A $\mathbf{v}_d$ se le llama **velocidad de desplazamiento** o **velocidad de deriva** (la "D" sirve para ambos).

### 1.2 Deriva vs. velocidad real; régimen estacionario

Un punto conceptual crucial: en un metal, la velocidad **real** de los electrones es **muchísimo mayor** que $v_d$. Los electrones se mueven muy rápido pero **en todas las direcciones** — un ratito para un lado, chocan con la red, y salen casi para el otro lado o en cualquier dirección. $\mathbf{v}_d$ **no** mide la velocidad de los electrones, sino su **velocidad promedio**, que es mucho menor.

- **Sin campo aplicado:** el movimiento es completamente **aleatorio**; en promedio los electrones no van a ningún lado.
- **Con campo aplicado:** al movimiento aleatorio se **superpone** un leve desplazamiento medio en la dirección del campo (o la opuesta, si son negativos). Eso es $\mathbf{v}_d$.

**Régimen estacionario ≠ equilibrio.** Con un campo uniforme y una batería que hace circular corriente, el sistema llega a un régimen **estacionario** (la corriente no depende del tiempo), pero **no** está en equilibrio (el equilibrio sería campo nulo dentro del conductor).

> **¿Por qué velocidad constante y no aceleración constante?** Si los electrones fueran como un gas libre en una caja, un campo (fuerza) constante daría **aceleración** constante. Pero como chocan continuamente con la red —acumulan energía, la entregan en el choque y arrancan de cero— el resultado promedio es una **velocidad** constante. Es análogo a un cuerpo en un **medio viscoso** (o en caída libre con rozamiento del aire): alcanza una **velocidad límite**, no una aceleración límite. El golpeteo con la red actúa como una viscosidad efectiva.

---

## 2. Relación entre J y la velocidad de deriva

### 2.1 Deducción con el cilindrito

Se toma un conductor con un campo $\mathbf{E}$ aplicado y se aísla un **cilindrito pequeño** alineado con el campo, tan chico que $\mathbf{E}$ (y por lo tanto $\mathbf{J}$) es aproximadamente **uniforme** en él. Sea:

- $A$ = área de la base (perpendicular a $\mathbf{J}$).
- $L = v_d\,\Delta t$ = largo del cilindrito, **elegido** como la distancia que recorre la deriva en un tiempo $\Delta t$.
- $n$ = número de portadores (electrones) **por unidad de volumen**.

**Idea clave:** en el intervalo $\Delta t$, los electrones que cruzan la base $A$ son **todos** los que están dentro del cilindrito. ¿Por qué todos? Porque avanzan (en promedio) a velocidad $v_d$; los que están en el borde más lejano recorren exactamente $L = v_d\,\Delta t$ y **justo** alcanzan a cruzar, mientras que los que estaban más allá no llegan. (Es un enunciado **en promedio**: el movimiento real es errático, pero como los portadores son muchísimos, el promedio es válido.)

El número de electrones en el cilindrito es $n$ por el volumen $A L = A\,v_d\,\Delta t$. La carga que atraviesa $A$ (con carga $-e$ por electrón):

$$
\Delta Q = (-e)\, n\, A\, v_d\, \Delta t
$$

La corriente (como $\Delta t$ es pequeño, esto ya es el límite):

$$
I = \frac{\Delta Q}{\Delta t} = -e\, n\, A\, v_d
$$

Y la densidad de corriente, dividiendo por $A$ (la superficie es normal a $\mathbf{J}$):

$$
\boxed{J = -e\, n\, v_d}
$$

### 2.2 Forma vectorial general

La relación se escribe vectorialmente. Si los portadores tuvieran carga genérica $q$ (en vez de $-e$), basta reemplazar:

$$
\boxed{\mathbf{J} = q\, n\, \mathbf{v}_d}
$$

Y si hay **varios tipos de portadores** (p. ej. un electrolito con distintos iones), hay que **sumar** las contribuciones, teniendo en cuenta que cada especie $i$ tiene su propia carga $q_i$, su densidad $n_i$ y su velocidad de deriva $\mathbf{v}_{d,i}$:

$$
\mathbf{J} = \sum_i q_i\, n_i\, \mathbf{v}_{d,i}
$$

---

## 3. Estimación de la velocidad de deriva en el cobre

### 3.1 El cálculo

Se busca **el orden de magnitud** de $v_d$ (no números precisos). Datos de un cable de cobre típico:

- Diámetro $D = 1{,}8$ mm, corriente $I = 1{,}3$ A.

**Densidad de corriente** (suponiendo $J$ uniforme sobre la sección circular):

$$
J = \frac{I}{\pi D^2/4} \approx 51\ \frac{\text{A}}{\text{cm}^2}
$$

**Densidad de portadores $n$.** Se supone que cada átomo de cobre aporta **un** electrón de conducción, de modo que $n$ = número de átomos por unidad de volumen. Este se obtiene de datos tabulados:

$$
n = \frac{\rho_{\text{masa}}}{M_{\text{molar}}}\, N_A
$$

con la densidad de masa $\rho_{\text{masa}} = 8{,}96\times10^{3}\ \text{kg/m}^3$, la masa molar $M_{\text{molar}} = 63{,}5\ \text{g/mol}$ y el número de Avogadro $N_A = 6{,}02\times10^{23}\ \text{mol}^{-1}$. Resulta:

$$
n \approx 8{,}49\times10^{28}\ \frac{\text{electrones}}{\text{m}^3}
$$

**Velocidad de deriva** (en módulo):

$$
v_d = \frac{J}{e\, n} \approx 14\ \frac{\text{cm}}{\text{hora}}
$$

Para otros metales el número cambia un poco (7, 24 cm/hora...), pero siempre del orden de **algunos centímetros por hora**.

### 3.2 La analogía de la manguera y la señal eléctrica

Resulta sorprendente que los electrones avancen tan lento: a $14$ cm/hora, un electrón tardaría **más de un día** en ir del interruptor a la lámpara — y sin embargo la luz se prende **al instante**. La resolución es la **analogía de la manguera llena**: si una manguera ya está llena de agua y se abre la canilla, sale agua por el otro extremo **instantáneamente**, aunque el agua avance lento. El agua que sale no es la que entró en la canilla, sino la que ya estaba del otro lado; todas las cargas se mueven "juntas".

> **A retener:** la **velocidad de transmisión de la señal eléctrica** es muchísimo mayor que la velocidad de deriva. La señal viaja rápido; los portadores, no.

### 3.3 Corrección cuántica: el principio de Pauli

El profesor advierte que **la estimación anterior está mal**: la velocidad de deriva real es unas **~100 veces mayor** (aunque aun así sería sorprendentemente lenta). El error está en suponer que **todos** los electrones de conducción participan.

Aunque en el cobre efectivamente hay un electrón de conducción por átomo (electrones no ligados al núcleo), **la mayoría no puede moverse**, por un efecto **no clásico**: el **principio de exclusión de Pauli**. Este principio (visto en química) dice que dos electrones no pueden ocupar el mismo estado cuántico. En la conducción, casi **todos los estados están ocupados**, así que solo los electrones que tienen **estados libres a su lado** pueden moverse. A temperatura ambiente, esa proporción es de aproximadamente **un centésimo**.

En consecuencia, el $n$ efectivo es ~100 veces menor, y $v_d$ es ~100 veces mayor. La proporción exacta depende de la temperatura y de la geometría de la estructura de bandas de conducción del material.

> **Dos ideas para retener:** (1) la velocidad de deriva es **mucho menor** que la velocidad real de los electrones (que es enorme, pero errática y de promedio nulo sin campo); (2) la **señal eléctrica** viaja mucho más rápido que ambas.

---

## 4. Ley de Ohm (forma microscópica)

### 4.1 Conductividad y resistividad

En un material **homogéneo e isótropo**, ocurre lo mismo que con la polarización: como el material no tiene ninguna dirección intrínseca preferencial, $\mathbf{J}$ debe ser **paralelo** a $\mathbf{E}$. Esto permite **definir** la **conductividad** $\sigma$ del material:

$$
\boxed{\mathbf{J} = \sigma\, \mathbf{E}}
$$

$\sigma$ es un **escalar**: a igual campo, mayor $\sigma$ significa mayor densidad de corriente — es una medida de "cuánto quiere conducir" el material. Se define también la **resistividad** como su inversa:

$$
\boxed{\rho = \frac{1}{\sigma}} \qquad (\mathbf{E} = \rho\,\mathbf{J})
$$

> **Nota sobre notación:** $\sigma$ ya se usó para la densidad superficial de carga. Se recicla la letra (el alfabeto se acaba); el contexto distingue cuál es.

### 4.2 Materiales óhmicos (lineales)

A priori, **cómo depende $\sigma$ del campo** no es obvio: al duplicar $E$, ¿la corriente se duplica, o se multiplica por 4, por 7? Calcularlo desde cero es un problema de **mecánica estadística** (muchísimos electrones interactuando con la red y entre sí). Pero, igual que con los dieléctricos, muchos materiales son **lineales**: en muy buena aproximación, **$\sigma$ es independiente de $E$** (constante propia de cada material). Entonces $\mathbf{J} = \sigma\mathbf{E}$ es una relación de **proporcionalidad**.

Estos materiales se llaman **lineales** u **óhmicos** (el término "óhmico" especifica que la linealidad es en la **conducción**, para distinguirla de, p. ej., los dieléctricos lineales). La relación $\mathbf{J} = \sigma\mathbf{E}$ es la **Ley de Ohm** (forma microscópica). Son óhmicos los **metales**, los **electrolitos** y en general los buenos conductores.

**Unidades:**
- Conductividad: $[\sigma] = \text{Siemens/metro}$, con $1\ \text{S} = 1\ \text{A/V}$ (unidad poco usada).
- Resistividad: $[\rho] = \text{Ohm}\cdot\text{metro}$, con $1\ \Omega = 1\ \text{V/A}$ (el Ohm sí se usa mucho).

### 4.3 Tabla de resistividades

| Material | $\rho\ (\Omega\cdot\text{m})$ | Tipo |
|----------|------------------------------|------|
| Plata | $1{,}62\times10^{-8}$ | conductor |
| Cobre | $\approx 1{,}7\times10^{-8}$ | conductor |
| Aluminio | $2{,}75\times10^{-8}$ | conductor |
| Silicio puro | $2{,}5\times10^{3}$ | semiconductor |
| Silicio dopado (tipo N) | $\ll$ silicio puro | semiconductor |
| Agua destilada | $2{,}5\times10^{5}$ | aislante |
| Vidrio | $10^{10}$ – $10^{14}$ | aislante |

Observaciones:

- **Cobre vs. plata:** el cobre conduce un **poquito peor** que la plata, pero los cables se hacen de cobre por **relación costo-beneficio** (casi tan buen conductor, mucho más barato).
- **Semiconductores:** el silicio puro tiene $\rho$ enormemente mayor que un metal. Su rasgo distintivo es que $\rho$ es **muy sensible a las impurezas**: al **dopar** (agregar impurezas controladas, p. ej. fósforo → tipo N) la resistividad **cae** drásticamente. Esto no pasa con los metales, cuya conductividad casi no cambia con impurezas.
- **Conductor vs. aislante:** la clasificación es **bastante blanco-negro**: entre un conductor y un aislante la resistividad difiere en ~$10^{13}$, así que a igual campo las corrientes son **radicalmente** distintas.
- El **vidrio no es realmente óhmico**, por eso su $\rho$ depende del campo aplicado (y del tipo de vidrio).

---

## 5. Resistencia y ley de Ohm macroscópica

La ley $\mathbf{J} = \sigma\mathbf{E}$ es una propiedad del **material**. Ahora se la conecta con la ley de Ohm "del liceo", $\Delta V = R\,I$, que es una propiedad de un **cuerpo** conductor.

### 5.1 Conductor filiforme: R = ρL/A

Un conductor **filiforme** (con forma de hilo/cable) cilíndrico de área $A$, largo $L$, con campo uniforme $\mathbf{E}$. La diferencia de potencial entre sus bornes (campo uniforme):

$$
|\Delta V| = E\,L
$$

Como el material es óhmico, $E = \rho J$, y como $J = I/A$:

$$
|\Delta V| = \rho\,L\,J = \rho\,L\,\frac{I}{A} = \left(\frac{\rho\,L}{A}\right) I
$$

Es decir, $\Delta V = R\,I$ con la **resistencia**:

$$
\boxed{R = \frac{\rho\, L}{A}}
$$

Puntos clave:

- La **resistividad** $\rho$ depende **solo del material**; la **resistencia** $R$ depende del material **y de la forma** del cuerpo.
- Un cable el **doble de largo** tiene el doble de resistencia; uno más **ancho** tiene menos resistencia (analogía de la manguera: cuanto más gruesa, más agua pasa).
- $R$ **no depende de la intensidad** ($R$ es el coeficiente constante en $\Delta V = R\,I$).

### 5.2 Caso general: la resistencia depende de los bornes

La proporcionalidad $\Delta V = R\,I$ es **general**: para **cualquier** conductor óhmico conectado a una batería por dos bornes, la corriente es proporcional a la diferencia de potencial. Lo que ya **no** es general es la fórmula $R = \rho L/A$.

Para un cuerpo de forma arbitraria, $R$ depende no solo del material y la forma, sino también de **dónde se colocan los bornes**. Es evidente: si se conectan dos bornes muy **cercanos**, el trayecto que deben recorrer los electrones es corto y $R$ es pequeña; incluso en un cable, conectarlo por dos puntos cercanos da mucha menos resistencia que conectarlo por los extremos.

$$
\boxed{\Delta V = R\, I \ \text{(general para óhmicos)}, \qquad R = \frac{\rho L}{A}\ \text{(solo filiformes)}}
$$

> Calcular $R$ de un cuerpo general es difícil (se ve en Electromagnetismo); en el práctico se resuelven geometrías simples con "truquitos".

---

## 6. Materiales óhmicos vs. no óhmicos: el diodo

La distinción se ve claramente en la **curva $I$ vs. $\Delta V$**:

- **Material/dispositivo óhmico:** la curva es una **recta por el origen** ($I=0$ cuando $\Delta V=0$; $I$ proporcional y del mismo signo que $\Delta V$). Es lo que llamamos una **resistencia** o **resistor**.
- **Material no óhmico:** cualquier curva que **no** sea una recta por el origen.

Ejemplo importante de dispositivo no óhmico: el **diodo**. Su curva es asimétrica: para voltajes positivos la corriente crece **muy rápido**, mientras que para voltajes negativos permanece **casi nula**. Es decir, el diodo deja pasar la corriente **fácilmente en un sentido** y prácticamente **la bloquea en el otro**.

> Un diodo es un caso particular de no óhmico; hay muchas otras curvas no óhmicas posibles.

---

## 7. Modelo microscópico de la conducción (Drude)

Comienza la sección **6.4**. Para entender *por qué* muchos metales son óhmicos se presenta el **modelo de Drude** (fines del s. XIX / principios del XX), un modelo **clásico** "de juguete" — la descripción rigurosa requiere mecánica cuántica, pero este da la idea cualitativa.

### 7.1 Velocidad real vs. velocidad de deriva

Sin campo, la trayectoria de un electrón es un "relajo": se mueve, choca con objetos de la red, y arranca de nuevo en una dirección **aleatoria**. Al aplicar un campo, las trayectorias se **corren levemente** en su dirección (o la opuesta, para electrones): siguen siendo caóticas, pero con un pequeño arrastre neto. El efecto real es **muchísimo más leve** que en cualquier dibujo esquemático.

La velocidad real de los electrones tiene módulo prácticamente **fijo** y **enorme**: en el cobre, $v_e \approx 1{,}6\times10^{6}\ \text{m/s}$ a temperatura ambiente (otros materiales, del mismo orden $\sim10^{6}$ m/s). La deriva es solo una **fracción diminuta** de esta velocidad.

### 7.2 Hipótesis del modelo

El modelo de Drude describe la conducción con cuatro hipótesis:

1. **Mecánica clásica.** (En rigor debería ser cuántica, pero se usa la clásica.)
2. **Movimiento libre entre choques:** entre un choque y el siguiente, el electrón se mueve **solo acelerado por el campo** $\mathbf{E}$ (movimiento uniformemente acelerado).
3. **Choques con pérdida total de memoria:** cada cierto tiempo el electrón choca con objetos del material y arranca de nuevo en una dirección **cualquiera, al azar**, con la misma rapidez; la nueva trayectoria **no depende** de la anterior (choque "brutal").
4. **Sin interacción entre electrones:** se **desprecian** las interacciones electrón-electrón. Esto es sorprendente (hay ~1 electrón por átomo, muy cerca unos de otros, con interacción coulombiana enorme), y costó mucho entender por qué termina siendo una buena aproximación — pero lo es.

Se define el **tiempo libre medio** $\tau$: el tiempo promedio entre choques. Es razonable suponer que $\tau$ **casi no depende de $E$**, porque el efecto del campo es diminuto frente al movimiento térmico, y no altera apreciablemente la frecuencia de los choques.

> **Próxima clase:** con estas hipótesis se calcula la velocidad de deriva (el movimiento entre choques es uniformemente acelerado) y se deriva la conductividad, cerrando el modelo. Luego se arranca el capítulo siguiente.
