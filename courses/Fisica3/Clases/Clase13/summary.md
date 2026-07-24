# Resumen Clase 13 — Cierre del Modelo de Drude y Circuitos de Corriente Directa

---

## Índice

1. [Cierre del modelo de Drude](#1-cierre-del-modelo-de-drude)
   - [1.1 Repaso de las hipótesis](#11-repaso-de-las-hipótesis)
   - [1.2 Deducción de la velocidad de deriva](#12-deducción-de-la-velocidad-de-deriva)
   - [1.3 Ley de Ohm y conductividad microscópica](#13-ley-de-ohm-y-conductividad-microscópica)
   - [1.4 Con qué chocan realmente los electrones](#14-con-qué-chocan-realmente-los-electrones)
   - [1.5 Efecto Joule](#15-efecto-joule)
2. [Circuitos de corriente directa](#2-circuitos-de-corriente-directa)
   - [2.1 Aproximación de circuito ideal](#21-aproximación-de-circuito-ideal)
   - [2.2 Primera ley de Kirchhoff (nudos)](#22-primera-ley-de-kirchhoff-nudos)
3. [Baterías y fuerza electromotriz](#3-baterías-y-fuerza-electromotriz)
   - [3.1 Fuentes de energía eléctrica](#31-fuentes-de-energía-eléctrica)
   - [3.2 Fuerza electromotriz (FEM)](#32-fuerza-electromotriz-fem)
   - [3.3 Batería ideal y resistencia interna](#33-batería-ideal-y-resistencia-interna)
4. [Análisis de circuitos: ley de mallas](#4-análisis-de-circuitos-ley-de-mallas)
   - [4.1 Circuito simple](#41-circuito-simple)
   - [4.2 Segunda ley de Kirchhoff](#42-segunda-ley-de-kirchhoff)
   - [4.3 Circuito de dos mallas](#43-circuito-de-dos-mallas)
5. [Resistencias en serie y en paralelo](#5-resistencias-en-serie-y-en-paralelo)
6. [Transferencia de energía en un circuito](#6-transferencia-de-energía-en-un-circuito)

---

## 1. Cierre del modelo de Drude

Se completa el modelo clásico (Clase 12) que justifica la ley de Ohm a partir del movimiento microscópico de los electrones. Es un modelo **de juguete**: la descripción rigurosa requiere mecánica cuántica, y algunas propiedades no se entienden sin ella, pero el modelo da la imagen cualitativa correcta.

### 1.1 Repaso de las hipótesis

1. **Vale la mecánica clásica.** (Injustificada, pero es la que permite hacer cuentas.)
2. **Los electrones no interactúan entre sí.** Correcta pero difícil de justificar: siendo partículas cargadas con interacción de Coulomb (fuerte) y alta densidad, sorprende que no interactúen. Costó mucho entender por qué es válida.
3. **Movimiento libre con choques periódicos:** los electrones se mueven libremente salvo que **cada cierto tiempo chocan** con la red cristalina. El tiempo medio entre colisiones es $\tau$.
4. **Pérdida de memoria tras el choque:** después de chocar, el electrón arranca en una dirección **aleatoria**, independiente de su movimiento previo (como rebotar contra una pared: la red es rígida y muy pesada frente al electrón).
5. **Velocidad promedio ≫ velocidad de deriva:** los electrones se mueven muy rápido pero al azar; el campo solo añade una pequeña deriva.

> **Números que respaldan la hipótesis 5:** en el cobre la velocidad promedio es $\sim 1{,}6\times10^{6}$ m/s, mientras que la velocidad de deriva (Clase 12) es de algunos cm/hora ($\sim 14$ cm/h). La separación de escalas es enorme.

### 1.2 Deducción de la velocidad de deriva

Se toma un electrón que acaba de chocar en $t=0$, arrancando con una velocidad **aleatoria** $\mathbf{v}_0$ (dirección al azar, independiente del campo). Entre este choque y el siguiente, la **única** fuerza es la del campo:

$$
\mathbf{F} = -e\,\mathbf{E} = m\,\mathbf{a} \;\Longrightarrow\; \mathbf{a} = -\frac{e}{m}\mathbf{E}
$$

Como $\mathbf{E}$, $e$ y $m$ son constantes, la aceleración es **constante**, y la velocidad (integrando) es:

$$
\mathbf{v}(t) = \mathbf{v}_0 - \frac{e}{m}\mathbf{E}\, t
$$

Ahora se **promedia** sobre muchos electrones. El término aleatorio $\mathbf{v}_0$ promedia a **cero** (a veces va para un lado, a veces para el otro), y en el término determinista el tiempo promedia al **tiempo libre medio** $\tau$:

$$
\boxed{v_d = \frac{e\,E}{m}\,\tau}
$$

Esta es exactamente la **velocidad de deriva** (en módulo). El grueso de la velocidad ($\mathbf{v}_0$) se cancela al promediar; lo que sobrevive es el pequeño arrastre en la dirección de $\mathbf{E}$ (opuesto, para electrones, por el signo menos).

> **Punto clave:** $\tau$ **casi no depende de $E$**. El movimiento de los electrones es prácticamente el mismo con o sin campo (dominado por el movimiento térmico aleatorio); el campo solo agrega la pequeña deriva, así que la frecuencia de choques no cambia apreciablemente. $\tau$ es una propiedad del material.

### 1.3 Ley de Ohm y conductividad microscópica

Combinando con la relación de la Clase 12, $J = e\,n\,v_d$ (en módulo, con $n$ portadores por volumen):

$$
J = e\,n\,v_d = e\,n\cdot\frac{e\,E}{m}\,\tau = \frac{e^2 n\,\tau}{m}\,E
$$

Esto es **la ley de Ohm** $J = \sigma E$, con la **conductividad** expresada en términos microscópicos:

$$
\boxed{\sigma = \frac{e^2 n\,\tau}{m}}
$$

Se obtiene la proporcionalidad $J \propto E$ **porque $\tau$ no depende de $E$**: $\sigma$ es una constante del material (en ausencia de campo). Además, el modelo da una **fórmula** para $\sigma$ a partir de propiedades microscópicas.

### 1.4 Con qué chocan realmente los electrones

Drude imaginaba que los electrones chocaban con **todos los iones** de la red (razonable: la red está cargada positivamente, interacción de Coulomb fuerte). **Esto es incorrecto:** los electrones atraviesan la red casi como si fuera **transparente**. En realidad chocan solo con:

- **Impurezas** de la red.
- **Deformaciones** de la red (que no es una red periódica perfecta: vibra, el sonido la deforma, etc.).

Por eso chocan **mucho menos seguido** de lo esperado — están bastante libres. Esto es un **efecto cuántico**. Consecuencia: al **bajar la temperatura**, disminuyen las deformaciones y defectos, y la **resistividad baja** (a bajas temperaturas, $\rho \propto T$ para un gas de electrones). La mecánica cuántica "arregla" dos cosas del modelo: la escasa interacción electrón-electrón y la baja frecuencia de choques con la red.

### 1.5 Efecto Joule

En promedio los electrones **no ganan energía** (vuelven siempre a la misma velocidad media). Pero el campo les hace trabajo continuamente: ¿dónde va esa energía? Instante a instante el electrón gana energía cinética, pero **en el choque la pierde toda**, entregándola a las **vibraciones de la red** (es decir, a la **temperatura**). Por eso una resistencia se **calienta** al pasar corriente. Esta transformación de energía eléctrica en calor es el **efecto Joule**.

---

## 2. Circuitos de corriente directa

**Corriente directa** (continua): el **sentido** de la corriente no cambia de signo (su módulo puede variar). Se opone a la **corriente alterna** (que se verá luego), donde el sentido se invierte periódicamente —típicamente de forma sinusoidal— y donde interesan más las cantidades promedio que lo instantáneo.

### 2.1 Aproximación de circuito ideal

Se consideran circuitos con **resistencias** (resistores) unidas por **cables ideales**. Las hipótesis:

- **Cables ideales:** resistencia despreciable frente a la de los resistores. (Todos los cables reales tienen alguna resistencia — de ahí las pérdidas al transportar energía a distancia — pero se desprecia.)
- **Corriente estacionaria:** al cerrar un interruptor, hay un **transitorio** brevísimo ($\sim 10^{-9}$ s, casi indetectable) en que la señal se propaga; después el sistema llega a un régimen **estacionario** en que la corriente en cada punto no depende del tiempo.
- **Corriente igual a lo largo de un tramo de cable:** entre dos nudos, la corriente es la misma (no importa que la sección cambie).
- **No se acumula carga** en ningún punto. Los objetos cargados cuestan mucha energía, así que la naturaleza reparte la carga para que **todas las partes del circuito permanezcan neutras**.

> **Cortocircuito:** si se une la batería solo con un cable (sin resistor), la resistencia total es diminuta y circula una **corriente enorme** (por eso saltan las llaves térmicas/tapones). Ahí sí hay que considerar la resistencia del cable.

### 2.2 Primera ley de Kirchhoff (nudos)

Como no se acumula carga, en particular no se acumula en los **nudos**: toda la corriente que entra a un nudo debe salir. Para un nudo con una corriente entrante $I_1$ y dos salientes $I_2$, $I_3$:

$$
\boxed{I_1 = I_2 + I_3}
$$

Es la **primera ley de Kirchhoff** o **ley de los nudos**. Expresa dos cosas: la conservación de la carga (no se crea) y la no acumulación (no se deposita).

---

## 3. Baterías y fuerza electromotriz

### 3.1 Fuentes de energía eléctrica

Una **batería** es un dispositivo que transforma energía de algún tipo en **energía eléctrica** disponible para un circuito. Ejemplos según el origen:

- **Pila:** energía **química** → eléctrica. (En rigor, energía eléctrica microscópica de las moléculas, inaccesible directamente, liberada por una reacción química.)
- **Generador (represa):** energía **mecánica** (agua cayendo → turbina) → eléctrica, vía el "efecto dínamo" (se verá más adelante).
- **Central térmica:** combustión (química) → movimiento → generador.
- **Central nuclear:** reacción **nuclear** → calor → vapor → turbina → generador. (Térmicas y nucleares comparten el esquema "calentar algo → mover turbina".)
- **Solar:** reacción química inducida por la **luz**.
- **Eólica:** viento → aspas → turbina (mecánica).

> Los generadores realistas producen **corriente alterna** (por eso el foco se pone en pilas por ahora, que dan corriente directa de forma simple).

### 3.2 Fuerza electromotriz (FEM)

Las pilas aportan una **energía por unidad de carga** aproximadamente constante. Se define la **fuerza electromotriz** $\varepsilon$:

$$
\varepsilon = \frac{\text{trabajo entregado al circuito}}{\text{carga que se hizo circular}}
$$

> **Advertencias sobre el nombre.** "Fuerza electromotriz" es una denominación **infeliz**: (1) **no es una fuerza** — es una energía por unidad de carga; el nombre es histórico. (2) No coincide **exactamente** con el uso que se le da en cursos posteriores (Electromagnetismo), donde "FEM" designa algo parecido pero no idéntico. Se usa aquí porque es la del libro. Lo esencial: en una pila, la FEM es **constante** (propiedad intrínseca de cada batería; p. ej. $1{,}5$ V las comunes, $9$ V algunas).

### 3.3 Batería ideal y resistencia interna

**Batería ideal:** si toda la energía por unidad de carga se entrega a los portadores, la diferencia de potencial entre bornes es igual a la FEM:

$$
|\Delta V| = \varepsilon
$$

Es una aproximación (batería sin pérdidas), y como $\varepsilon$ es constante, el voltaje entre bornes es constante.

**Batería real:** toda batería tiene pérdidas por **efecto Joule** — la llamada **resistencia interna** $r$. Entonces:

$$
\Delta V = \varepsilon - r\,I < \varepsilon
$$

La igualdad $\Delta V = \varepsilon$ solo vale cuando la corriente es muy pequeña. Se modela la pila real como una **pila ideal $\varepsilon$ en serie con una resistencia $r$**.

> **Convención del curso:** salvo que se diga lo contrario, todos los dispositivos son **ideales** (resistencias, cables y baterías). "Batería de FEM tanto" significa batería ideal.

---

## 4. Análisis de circuitos: ley de mallas

### 4.1 Circuito simple

Batería de FEM $\varepsilon$ conectada a una resistencia $R$ por cables ideales. Como el cable ideal no tiene resistencia (es un dispositivo óhmico con $R=0$), su caída de potencial es **cero**: se comporta como un conductor en equilibrio (todos sus puntos al mismo potencial). Por lo tanto, la caída en $R$ iguala a la FEM:

$$
\varepsilon = R\,I \;\Longrightarrow\; \boxed{I = \frac{\varepsilon}{R}}
$$

**Sentido de la corriente:** el potencial es mayor en el borne positivo; los electrones van hacia él, así que la **corriente convencional** circula en sentido opuesto a los electrones.

### 4.2 Segunda ley de Kirchhoff

El mismo resultado se obtiene "dando la vuelta" a la malla: al atravesar la batería en el sentido de la FEM el potencial **sube** $\varepsilon$; al atravesar una resistencia en el sentido de la corriente **baja** $R\,I$. Volviendo al punto de partida:

$$
\varepsilon - R\,I = 0
$$

Generalizando, la **suma con signo de las diferencias de potencial a lo largo de una malla cerrada es cero**:

$$
\boxed{\sum_{\text{malla}} \Delta V = 0}
$$

Es la **segunda ley de Kirchhoff** (ley de mallas). No es más que afirmar que el potencial está bien definido (al volver al inicio, se recupera su valor).

**Dos resistencias en serie con una FEM:** $\varepsilon - R_1 I - R_2 I = 0 \Rightarrow I = \varepsilon/(R_1+R_2)$.

**Pila con resistencia interna conectada a $R$:** modelando la pila como $\varepsilon$ + $r$ en serie, $I = \varepsilon/(R+r)$, y la caída en la resistencia externa es $\Delta V_R = \varepsilon R/(R+r)$. La pila se comporta como **ideal** cuando $R \gg r$ (por eso "ser ideal" no es intrínseco: depende de a qué se conecte; en cortocircuito, con $R\to 0$, domina $r$).

### 4.3 Circuito de dos mallas

Con varias FEM, **el sentido de cada corriente no es evidente a priori** (distintas baterías empujan en sentidos opuestos). Estrategia:

1. **Inventar un sentido** para cada corriente ($I_1, I_2, I_3$) y llamarlo positivo. Si el resultado sale **negativo**, la corriente real circula al revés.
2. Escribir la **ley de mallas** para cada malla **independiente** (dos mallas independientes bastan; una tercera sería combinación de las otras). Al recorrer una resistencia **a favor** de su corriente se resta $R\,I$; **en contra**, se suma. Al recorrer una FEM en el sentido de su flecha se suma $\varepsilon$; en contra, se resta.
3. Añadir la **ley de nudos** ($I_3 = I_1 + I_2$).

Queda un **sistema lineal 3×3** en $I_1, I_2, I_3$ que se resuelve por álgebra lineal. Los signos de las corrientes dependen de los valores relativos de las FEM (p. ej. $I \propto \varepsilon_1 - \varepsilon_2$), confirmando que no podían conocerse de antemano — pero la convención de signos inicial se corrige sola.

---

## 5. Resistencias en serie y en paralelo

Igual que los condensadores, grupos de resistencias equivalen a una sola resistencia.

**Serie** (misma corriente $I$ por ambas). La caída total es la suma:

$$
V_A - V_B = R_1 I + R_2 I = (R_1+R_2)\,I \;\Longrightarrow\; \boxed{R_{\text{eq}} = R_1 + R_2}
$$

**Paralelo** (misma diferencia de potencial $V_A - V_B$, la corriente se reparte $I = I_1 + I_2$). Como $I_i = (V_A-V_B)/R_i$:

$$
I = \left(\frac{1}{R_1}+\frac{1}{R_2}\right)(V_A - V_B) \;\Longrightarrow\; \boxed{\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2}}
$$

> **Ojo: está al revés que los condensadores.** En condensadores, la **suma directa** era en **paralelo**; en resistencias, la suma directa es en **serie**.

---

## 6. Transferencia de energía en un circuito

Para un dispositivo cualquiera (resistencia, batería, condensador...) entre los puntos $A$ y $B$, con corriente $I$ y diferencia de potencial $\Delta V_{AB} = V_B - V_A$: cuando una carga $dQ$ pasa de $A$ a $B$, el dispositivo le entrega un trabajo $dW = \Delta V_{AB}\, dQ$. Dividiendo por $dt$ ($dQ/dt = I$), la **potencia entregada** es:

$$
\boxed{P = \Delta V_{AB}\, I}
$$

Casos particulares:

| Dispositivo | $\Delta V_{AB}$ | Potencia |
|-------------|-----------------|----------|
| **Batería ideal** (en el sentido de la FEM) | $\varepsilon$ | $P = \varepsilon I$ (entrega al circuito) |
| **Resistor** | $-R\,I$ (caída) | $P = -R\,I^2$ → **disipa** $R\,I^2$ |
| **Condensador** | $\pm Q/C$ | $\pm$ (almacena o entrega) |

- El **resistor** tiene potencia entregada **negativa**: no entrega, sino que **disipa** $R\,I^2$ en calor (efecto Joule, ya visto).
- El **condensador** puede tener ambos signos según la relación entre $Q$ e $I$: está **almacenando** o **entregando** energía.

> Esto permite analizar en un circuito quién **aporta** energía y quién la **consume/almacena**. La próxima clase habrá un **experimento** con circuitos de resistencias y condensadores.
