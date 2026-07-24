# Resumen Clase 10 — Capacitores Esférico y Cilíndrico, Asociación Serie/Paralelo, Energía Almacenada y Dieléctricos

---

## Índice

1. [Demostración experimental: equipotenciales](#1-demostración-experimental-equipotenciales)
2. [Capacitor de placas esféricas](#2-capacitor-de-placas-esféricas)
3. [Capacitor de placas cilíndricas](#3-capacitor-de-placas-cilíndricas)
4. [Condensadores en serie y en paralelo](#4-condensadores-en-serie-y-en-paralelo)
   - [4.1 Paralelo](#41-paralelo)
   - [4.2 Serie](#42-serie)
   - [4.3 Ejemplo combinado](#43-ejemplo-combinado)
   - [4.4 Uso práctico](#44-uso-práctico)
5. [Energía almacenada en un condensador](#5-energía-almacenada-en-un-condensador)
6. [Energía almacenada en el campo eléctrico](#6-energía-almacenada-en-el-campo-eléctrico)
7. [Anuncio: aislante en un campo (dieléctricos)](#7-anuncio-aislante-en-un-campo-dieléctricos)

---

## 1. Demostración experimental: equipotenciales

Al inicio, dos estudiantes (Enzo Spera, Carla Yelpo) muestran una **cuba electrolítica** (agua como conductor débil) alimentada a 5 V, midiendo con un tester el potencial sobre curvas dibujadas en papel cuadriculado. Se verifica que **el potencial es constante sobre cada equipotencial** y que **$\mathbf{E}$ es perpendicular a ellas**. Configuraciones mostradas:

- **Dos líneas de carga** (≈ placas): equipotenciales rectas paralelas.
- **Aros concéntricos** (≈ carga central + cascarón): equipotenciales circulares.
- **Dipolo** (+Q, −Q): plano bisector a potencial medio (2,5 V); esferas cerca de cada carga.
- **Plano + carga puntual**: equipotenciales rectas cerca del plano, curvándose hacia círculos cerca de la carga.

También se simuló numéricamente por **relajación**: fijar el potencial en los bordes y reemplazar iterativamente cada punto por el **promedio de sus vecinos** hasta converger.

---

## 2. Capacitor de placas esféricas

Cascarón conductor interno de radio $A$ (carga $+Q$) y externo de radio $B$ (carga $-Q$). Se aplica la **receta general** (Clase 9): campo → $\Delta V$ → $C$.

**Campo (Gauss)**, con superficie esférica de radio $r$ ($A<r<B$):

$$
E\cdot 4\pi r^2 = \frac{Q}{\varepsilon_0} \;\Longrightarrow\; E = \frac{Q}{4\pi\varepsilon_0 r^2}
$$

(como si toda la carga estuviera en el centro).

**Diferencia de potencial** (segmento radial, $d\mathbf{l}\to dr$):

$$
|\Delta V| = \int_A^B \frac{Q}{4\pi\varepsilon_0 r^2}\,dr = \frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{A}-\frac{1}{B}\right)
$$

**Capacitancia:**

$$
\boxed{C = \frac{4\pi\varepsilon_0}{\dfrac{1}{A}-\dfrac{1}{B}}}
$$

---

## 3. Capacitor de placas cilíndricas

Dos cilindros conductores concéntricos de radios $A$ (interno, $+Q$) y $B$ (externo, $-Q$), largo $L \gg B$ (se desprecian efectos de borde).

**Campo (Gauss)**, con cilindro gaussiano de radio $r$ y altura $H$; las tapas no contribuyen ($\mathbf{E}\parallel$ tapa) y la carga encerrada es $Q\,H/L$:

$$
E\cdot 2\pi r H = \frac{Q\,H/L}{\varepsilon_0} \;\Longrightarrow\; E = \frac{Q}{2\pi\varepsilon_0 L\, r} = \frac{\lambda}{2\pi\varepsilon_0 r}
$$

(idéntico al de una **línea infinita** con $\lambda = Q/L$, Clase 6).

**Diferencia de potencial:**

$$
|\Delta V| = \int_A^B \frac{Q}{2\pi\varepsilon_0 L\, r}\,dr = \frac{Q}{2\pi\varepsilon_0 L}\ln\!\frac{B}{A}
$$

**Capacitancia:**

$$
\boxed{C = \frac{2\pi\varepsilon_0 L}{\ln(B/A)}}
$$

> El cálculo (y las aproximaciones) valen **lejos de los bordes**; para cilindros no muy largos aparecen efectos de borde adicionales.

---

## 4. Condensadores en serie y en paralelo

En un circuito, ciertos grupos de condensadores se comportan como **uno solo equivalente**. Se supone equilibrio electrostático y cables ideales (cada tramo conductor es un **equipotencial**). El símbolo de circuito de un condensador son dos placas paralelas $\dashv\vdash$ (cualquiera sea su forma real).

### 4.1 Paralelo

Ambos condensadores comparten la misma diferencia de potencial $|\Delta V_{AB}|$. La carga que entra se reparte: $Q = Q_1 + Q_2$ (conservación de la carga). Con $Q_i = |\Delta V_{AB}|\,C_i$:

$$
Q = |\Delta V_{AB}|(C_1 + C_2) \;\Longrightarrow\; \boxed{C_{\text{eq}} = C_1 + C_2}
$$

Para $N$ en paralelo, **se suman** las capacitancias.

### 4.2 Serie

La zona intermedia está **aislada del resto**: su carga neta se mantiene en cero, forzando la **misma carga $Q$** en ambos condensadores. Las diferencias de potencial se suman:

$$
\Delta V_{AB} = \Delta V_{AK} + \Delta V_{KB} = -\frac{Q}{C_1} - \frac{Q}{C_2}
$$

$$
\boxed{\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2}}
$$

Para $N$ en serie, se suman los **inversos**.

> **Consecuencia:** en serie $C_{\text{eq}} \leq C_1$ (y $\leq C_2$): la capacidad equivalente es **menor** que cualquiera de las individuales.

### 4.3 Ejemplo combinado

$C_1$ y $C_2$ en paralelo, en serie con $C_3$. Se resuelve **por etapas**: primero el paralelo $C_{12} = C_1 + C_2$, luego en serie con $C_3$:

$$
\frac{1}{C_{\text{eq}}} = \frac{1}{C_1 + C_2} + \frac{1}{C_3}
$$

> No **todo** circuito se reduce así: si hay baterías, resistencias u otros elementos entre medio, este método no aplica.

### 4.4 Uso práctico

Si en la ferretería no consiguen la capacidad deseada: **paralelo para aumentar**, **serie para disminuir** la capacitancia.

---

## 5. Energía almacenada en un condensador

Con el condensador cargado a $Q'$ (diferencia $\Delta V' = Q'/C$), el trabajo para agregar $dQ'$ aumenta la energía potencial:

$$
dU = \Delta V'\, dQ' = \frac{Q'}{C}\,dQ'
$$

Tomando $U=0$ con el condensador descargado e integrando:

$$
U = \int_0^Q \frac{Q'}{C}\,dQ' = \frac{Q^2}{2C}
$$

Usando $Q = C\,\Delta V$, formas equivalentes:

$$
\boxed{U = \frac{Q^2}{2C} = \frac{1}{2}C\,\Delta V^2 = \frac{1}{2}Q\,\Delta V}
$$

---

## 6. Energía almacenada en el campo eléctrico

Para el capacitor de placas paralelas ($C = \varepsilon_0 A/d$, campo uniforme $\Delta V = E d$):

$$
U = \frac{1}{2}C\,\Delta V^2 = \frac{1}{2}\frac{\varepsilon_0 A}{d}(E d)^2 = \frac{1}{2}\varepsilon_0 E^2\,(A d)
$$

donde $A d$ es el **volumen** interior. Esto sugiere que la energía está **distribuida en el espacio**, en el propio campo eléctrico, con **densidad volumétrica de energía**:

$$
\boxed{u = \frac{1}{2}\varepsilon_0 E^2}, \qquad U = \int u\, dV
$$

> Se dedujo solo para placas paralelas (campo uniforme), pero **vale siempre en el vacío** (demostración en el curso de Electromagnetismo). Para hallar la energía de un sistema: calcular $\mathbf{E}$ en cada zona e integrar $u$ sobre toda la región donde $\mathbf{E}\neq 0$.

---

## 7. Anuncio: aislante en un campo (dieléctricos)

Hasta aquí todo fue en el vacío. La próxima clase: ¿qué pasa si se rellena el condensador con un **aislante** (dieléctrico)? (No puede ser conductor, porque descargaría el capacitor.)

**Polarización:** un aislante de moléculas **polares** (con un lado más positivo que otro) responde al campo:
- Con $Q=0$: moléculas orientadas **al azar**, sin dirección preferencial.
- Con $Q\neq 0$: las moléculas se orientan **levemente** en promedio (no como "soldaditos" — hay fuerzas internas del material que se oponen).

**Efecto neto:** aparecen **cargas de polarización** en las superficies del aislante (negativas junto a la placa positiva, positivas junto a la negativa). El material sigue siendo neutro en el interior; las cargas **no se desplazan** (no hay conducción).

> **Dificultad:** normalmente **no se sabe cuánto se polariza** un material — es un problema de **mecánica estadística** (propiedades macroscópicas a partir de interacciones microscópicas). La próxima clase se verá cómo describir el dieléctrico sin necesidad de calcular la polarización exacta.
