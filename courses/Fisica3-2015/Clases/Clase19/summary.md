# Resumen Clase 19 — Varilla Rotante, Generadores y Motores, Campos Eléctricos Inducidos e Inductancia

---

## Índice

1. [Varilla que rota en un campo magnético](#1-varilla-que-rota-en-un-campo-magnético)
   - [1.1 Método 1: suma de FEMs de segmentos](#11-método-1-suma-de-fems-de-segmentos)
   - [1.2 Método 2: Faraday sobre un circuito](#12-método-2-faraday-sobre-un-circuito)
2. [Generadores y motores](#2-generadores-y-motores)
   - [2.1 El generador de corriente alterna](#21-el-generador-de-corriente-alterna)
   - [2.2 Torque necesario y balance de energía](#22-torque-necesario-y-balance-de-energía)
   - [2.3 El motor: el mismo aparato al revés](#23-el-motor-el-mismo-aparato-al-revés)
3. [Campos eléctricos inducidos](#3-campos-eléctricos-inducidos)
   - [3.1 Faraday en términos del campo eléctrico](#31-faraday-en-términos-del-campo-eléctrico)
   - [3.2 Ejemplo: campo B uniforme y variable](#32-ejemplo-campo-b-uniforme-y-variable)
4. [Inductancia](#4-inductancia)
   - [4.1 Definición y autoinductancia](#41-definición-y-autoinductancia)
   - [4.2 Cálculo para un solenoide ideal](#42-cálculo-para-un-solenoide-ideal)
   - [4.3 Caso general, unidades y signos](#43-caso-general-unidades-y-signos)
   - [4.4 Ejemplo: el toroide](#44-ejemplo-el-toroide)

---

## 1. Varilla que rota en un campo magnético

Cierre de las **corrientes parásitas** (corrientes que aparecen en un conductor que se mueve en un campo magnético y disipan energía por efecto Joule). Nuevo ejemplo: una **varilla conductora** con un extremo fijo que rota con velocidad angular constante $\omega$ en una región de campo magnético uniforme $B$, perpendicular al plano. La varilla tiene largo $R$. Se busca la **FEM entre sus extremos**.

Es un problema confuso porque hay FEM sin circuito. Se resuelve de **dos maneras** que deben coincidir.

### 1.1 Método 1: suma de FEMs de segmentos

En la Clase 18 vimos que una varilla de largo $L$ moviéndose con velocidad $v$ en un campo perpendicular produce $|\varepsilon| = L\,v\,B$. Pero **no se puede aplicar directamente** aquí: la velocidad **depende del punto**. El extremo tiene velocidad $\omega R$; el punto medio, $\omega R/2$; cada trozo se mueve distinto.

Se piensa la varilla como una **sucesión de varillitas en serie**. Un segmento de ancho $dr$ a distancia $r$ del eje se mueve con velocidad $\omega r$ (aproximadamente uniforme por ser $dr$ pequeño), y aporta:

$$
d\varepsilon = B\,(\omega r)\,dr
$$

Como están **en serie**, las FEMs se suman (integran):

$$
\varepsilon = \int_0^{R} B\,\omega\, r\, dr = B\,\omega\,\frac{R^2}{2}
$$

$$
\boxed{|\varepsilon| = \frac{B\,\omega\,R^2}{2}}
$$

### 1.2 Método 2: Faraday sobre un circuito

Para medir la FEM se **cierra el circuito**: un cable desde el eje a un voltímetro y otro conductor que da la vuelta y contacta el extremo de la varilla. Ahora se puede aplicar Faraday. El **área barrida** dentro del campo depende del ángulo $\theta = \omega t$ (origen del tiempo cuando la varilla está en la posición de referencia). Por regla de tres respecto del círculo completo ($\pi R^2$ para $\theta = 2\pi$):

$$
A = \frac{\theta}{2}\,R^2 = \frac{\omega t}{2}\,R^2
$$

El flujo es $\Phi_B = B\,A = \frac{B\,\omega\,R^2}{2}\,t$, y su derivada:

$$
\left|\frac{d\Phi_B}{dt}\right| = \frac{B\,\omega\,R^2}{2}
$$

**Idéntico** al Método 1 (a menos del signo). Aplicar Faraday directamente da lo mismo que sumar las FEMs de segmentitos. Coherente.

---

## 2. Generadores y motores

El uso principal de la inducción es fabricar un **generador**.

### 2.1 El generador de corriente alterna

Campo magnético uniforme $B$ (hacia arriba) y una **espira** (o bobina de $N$ vueltas) que gira con velocidad angular $\omega$ alrededor de un eje —accionada, por ejemplo, por una **turbina** (una caída de agua en Salto Grande). Sea $\theta$ el ángulo entre la **normal** a la espira y $\mathbf{B}$, con $\theta = \omega t$ (origen en $\theta = 0$). Con área $A$:

$$
\Phi_B = B\,A\,\cos(\omega t)
$$

La FEM inducida (con $N$ vueltas, se multiplica por $N$):

$$
\boxed{\varepsilon = -\frac{d\Phi_B}{dt} = B\,A\,\omega\,\sin(\omega t)}
$$

Se genera de forma natural una FEM **sinusoidal**. Conectada a una resistencia $R$, la corriente es

$$
I = \frac{\varepsilon}{R} = \frac{B\,A\,\omega}{R}\,\sin(\omega t)
$$

Es **corriente alterna** (CA): cambia de signo periódicamente. Los generadores simples (bobina girando) producen CA de forma natural; hacer corriente continua es más difícil.

### 2.2 Torque necesario y balance de energía

Aunque se desprecien las pérdidas en la resistencia, **hay que hacer fuerza** para girar la manivela: una espira con corriente en un campo uniforme sufre un **torque** magnético. Para $\omega$ constante, el torque total debe ser cero, así que un agente externo debe aplicar un torque opuesto al magnético. El torque magnético (vectorialmente $\boldsymbol{\tau} = I\,\mathbf{A}\times\mathbf{B}$) tiene módulo:

$$
\tau = I\,A\,B\,\sin\theta = \frac{B^2 A^2 \omega}{R}\,\sin^2\theta
$$

El generador **convierte energía mecánica** (el torque externo) **en energía eléctrica** (que circula por la resistencia). Sin el torque externo, la espira se frenaría por las corrientes parásitas.

### 2.3 El motor: el mismo aparato al revés

El **mismo dispositivo** funciona como **motor**: en vez de girar la espira para inducir corriente, se **inyecta** una corriente alterna que genera el torque y hace girar el eje (p. ej. la mecha de un taladro). Convierte energía eléctrica en trabajo mecánico.

> **¿Por qué corriente alterna?** Con corriente **continua**, el torque $\propto\sin\theta$ cambia de signo cada media vuelta: a veces empuja para un lado, a veces para el otro, sin efecto acumulado. Se necesita que la corriente cambie de signo sincronizada con $\theta$. Con CA eso ocurre naturalmente; en el motor de corriente continua se usa un **conmutador** (la ficha cambia la conexión al girar).

---

## 3. Campos eléctricos inducidos

Para mover cargas en un circuito hace falta un **campo eléctrico** (el campo magnético **no trabaja**: la fuerza es perpendicular a la velocidad). Si la inducción genera corrientes, debe haber un **campo eléctrico inducido** asociado a la FEM.

### 3.1 Faraday en términos del campo eléctrico

Una carga $q_0$ que da una vuelta a lo largo de la curva $C$ recibe un trabajo por unidad de carga igual a la FEM:

$$
\varepsilon = \frac{W}{q_0} = \frac{1}{q_0}\oint_C \mathbf{F}_e\cdot d\mathbf{l} = \oint_C \mathbf{E}\cdot d\mathbf{l}
$$

En el caso **electrostático** esta circulación vale cero. Pero con campo magnético variable **no** estamos en electrostática. Igualando a la FEM de Faraday:

$$
\boxed{\oint_C \mathbf{E}\cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}}
$$

Es la **ley de Faraday en términos del campo eléctrico**. Contiene al caso electrostático como caso particular (si nada depende del tiempo, la circulación es cero).

> **Consecuencia conceptual.** Cuando las cosas dependen del tiempo, el campo eléctrico **ya no es irrotacional** ni deriva de un potencial: $\mathbf{E} = -\nabla V$ **deja de valer**. Siguen valiendo $\mathbf{F} = q_0\mathbf{E}$, el cálculo del trabajo y la ley de Ohm; lo que ya no vale es que la circulación de $\mathbf{E}$ sea nula. (Hay que respetar las convenciones de signos, ligando la orientación de $S$ con la de $C$ por la mano derecha, igual que antes.)

### 3.2 Ejemplo: campo B uniforme y variable

Región **circular** (radio del recinto dado) con campo magnético $\mathbf{B}$ **uniforme** pero **dependiente del tiempo**, perpendicular al plano. No hay cargas eléctricas. Se busca el campo eléctrico inducido a distancia $r$ del centro.

**Líneas de $\mathbf{E}$:** como no hay cargas, no nacen ni mueren en ningún punto → son **cerradas**. Por la invariancia rotacional, son **círculos concéntricos**; $\mathbf{E}$ es tangente y de **módulo constante** sobre cada círculo. (La orientación —horaria o antihoraria— depende de si $B$ crece o decrece.) Tomando como curva $C$ un círculo de radio $r$:

$$
\oint_C \mathbf{E}\cdot d\mathbf{l} = E\,(2\pi r) = -\frac{d\Phi_B}{dt}, \qquad \Phi_B = B\,\pi r^2
$$

$$
\boxed{|E| = \frac{r}{2}\left|\frac{dB}{dt}\right|}
$$

El campo inducido **crece linealmente** con $r$. La técnica es idéntica a la de la ley de Ampère: usar la simetría para sacar el campo de la integral.

> Los **campos eléctricos inducidos no derivan de un potencial** (sus líneas son cerradas).

---

## 4. Inductancia

Se abre el **capítulo 11**. La inductancia es a las bobinas lo que la capacitancia es a los condensadores: caracteriza cuánta energía es capaz de almacenar una bobina —ahora en un **campo magnético**.

### 4.1 Definición y autoinductancia

Se llama **autoinductancia** porque una bobina, al variar su corriente, se induce una FEM **a sí misma** (a diferencia de la inductancia **mutua**, entre bobinas distintas, que aquí no se trata). Es la propiedad de un elemento de circuito de almacenar energía en un campo magnético.

### 4.2 Cálculo para un solenoide ideal

Solenoide ideal, largo $L$, sección $A$, $n$ espiras por unidad de longitud, $N = nL$ espiras totales. Campo dentro: $B = \mu_0 n I$. Flujo en **una** espira:

$$
\Phi_{1} = B\,A = \mu_0\, n\, I\, A
$$

FEM inducida total (multiplicando por $N$ y derivando):

$$
|\varepsilon| = N\,\mu_0\, n\, A\,\left|\frac{dI}{dt}\right| = \mu_0\, n^2\, A\, L\,\left|\frac{dI}{dt}\right|
$$

La FEM es **proporcional a $dI/dt$**; el factor de proporcionalidad es la autoinductancia:

$$
\boxed{L = \frac{|\varepsilon|}{|dI/dt|} = \mu_0\, n^2\, A\, L_{\text{sol}}} \qquad \left(= \frac{\mu_0 N^2 A}{L_{\text{sol}}}\right)
$$

*(aquí $L_{\text{sol}}$ es el largo del solenoide; la inductancia se denota también $L$).*

### 4.3 Caso general, unidades y signos

**Caso general.** El campo magnético (y por tanto el flujo) es **proporcional a la corriente** (Biot–Savart es lineal). Si la bobina es **rígida**, el factor de proporcionalidad no depende del tiempo:

$$
\Phi_B = L\,I \;\Longrightarrow\; \varepsilon = -\frac{d\Phi_B}{dt} = -L\,\frac{dI}{dt}
$$

**Receta práctica:** calcular $\mathbf{B}$ (Biot–Savart o Ampère), integrar el flujo total, y dividir por $I$: $L = \Phi_B^{\text{total}}/I$. $L$ es una **constante positiva** que depende solo de la bobina.

**Unidades.** $L$ tiene unidades de $\text{volt}\cdot\text{s}/\text{ampere}$, que se llama **henry** (H).

**Signos.** Entre bornes $A$ y $B$ con corriente de $A$ a $B$: por Lenz, si $I$ crece la FEM se opone y $V_A > V_B$; si $I$ decrece, $V_B > V_A$. En ambos casos:

$$
\boxed{V_B - V_A = -L\,\frac{dI}{dt}}
$$

> El signo es el **mismo** crezca o decrezca $I$. Truco mnemotécnico: es como en las resistencias ($V_B - V_A = -R\,I$), pero con $L$ en lugar de $R$ y $dI/dt$ en lugar de $I$. El símbolo de una bobina en un circuito es un **resortecito**.

### 4.4 Ejemplo: el toroide

Toroide de sección **rectangular**, altura $h$, radios interno $A$ y externo $B$, $N$ espiras. Por Ampère (Clase 18), $B(r) = \mu_0 N I/(2\pi r)$ para $A < r < B$. El flujo en **una** espira (un rectángulo de altura $h$; el campo depende solo de $r$):

$$
\Phi_{1} = \frac{h\,N\,\mu_0\,I}{2\pi}\int_A^B \frac{dr}{r} = \frac{h\,N\,\mu_0\,I}{2\pi}\,\ln\!\frac{B}{A}
$$

Flujo total (multiplicando por $N$) y dividiendo por $I$:

$$
\boxed{L = \frac{\mu_0\, N^2\, h}{2\pi}\,\ln\!\frac{B}{A}}
$$

Esta es la autoinductancia de un toroide.

*Próxima clase: circuitos RL, materiales magnéticos y energía almacenada en el campo magnético.*
