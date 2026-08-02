# Resumen Clase 9 — Campo Eléctrico desde el Potencial, Superficies Equipotenciales, Conductores y Capacitores

---

## Índice

1. [Campo eléctrico a partir del potencial](#1-campo-eléctrico-a-partir-del-potencial)
   - [1.1 Deducción: el gradiente](#11-deducción-el-gradiente)
   - [1.2 Ejemplo: campo del dipolo desde el potencial](#12-ejemplo-campo-del-dipolo-desde-el-potencial)
2. [Superficies equipotenciales](#2-superficies-equipotenciales)
   - [2.1 Definición](#21-definición)
   - [2.2 Propiedades](#22-propiedades)
   - [2.3 Ejemplos](#23-ejemplos)
3. [Potencial en conductores en equilibrio](#3-potencial-en-conductores-en-equilibrio)
   - [3.1 El conductor es un volumen equipotencial](#31-el-conductor-es-un-volumen-equipotencial)
   - [3.2 Continuidad de la componente tangencial](#32-continuidad-de-la-componente-tangencial)
   - [3.3 Ejemplo: cascarón esférico](#33-ejemplo-cascarón-esférico)
4. [Capacitores](#4-capacitores)
   - [4.1 Qué es un capacitor](#41-qué-es-un-capacitor)
   - [4.2 Capacitancia: ΔV proporcional a Q](#42-capacitancia-δv-proporcional-a-q)
   - [4.3 Unidad: el Farad](#43-unidad-el-farad)
   - [4.4 Método general de cálculo](#44-método-general-de-cálculo)
   - [4.5 Capacitor de placas paralelas](#45-capacitor-de-placas-paralelas)

---

## 1. Campo eléctrico a partir del potencial

En la Clase 7-8 se vio que $V_B - V_A = -\int_A^B \mathbf{E}\cdot d\mathbf{l}$. Ahora se busca la **relación inversa**: obtener $\mathbf{E}$ a partir de $V$. En una dimensión, integrar y derivar son operaciones inversas, así que $\mathbf{E}$ debe ser "menos la derivada" de $V$; hay que precisar los aspectos vectoriales.

> **Doble ganancia:** el potencial es escalar (más fácil de calcular, sin ángulos ni proyecciones) y, derivándolo, se obtiene *gratis* el campo (que es vectorial).

### 1.1 Deducción: el gradiente

Para dos puntos cercanos $A$ y $B$ unidos por $\Delta\mathbf{s}$, despreciando la variación de $\mathbf{E}$ (teorema del valor medio):

$$
\Delta V_{AB} \approx -\,\mathbf{E}\cdot\Delta\mathbf{s}
$$

Eligiendo $\Delta\mathbf{s} = \Delta x\,\hat{\mathbf{x}}$ (válido porque vale para todo $\Delta\mathbf{s}$):

$$
V(\mathbf{r}+\Delta x\,\hat{\mathbf{x}}) - V(\mathbf{r}) \approx -E_x\,\Delta x
$$

Tomando el límite $\Delta x \to 0$ aparece la **derivada parcial** (derivar respecto a una coordenada dejando fijas las otras). Repitiendo para cada eje:

$$
\boxed{E_x = -\frac{\partial V}{\partial x},\quad E_y = -\frac{\partial V}{\partial y},\quad E_z = -\frac{\partial V}{\partial z}} \qquad \left(\mathbf{E} = -\nabla V\right)
$$

> **Importante:** para calcular $\mathbf{E}$ no basta $V$ en un punto — hace falta $V$ en una **región** para poder comparar puntos cercanos y derivar.

### 1.2 Ejemplo: campo del dipolo desde el potencial

El potencial del dipolo (Clase 8), con $p = Qd$, tomando el punto en el plano $xy$ que contiene el dipolo (con $\cos\theta = y/r$, $r=\sqrt{x^2+y^2}$):

$$
V = \frac{p\,y}{4\pi\varepsilon_0\,(x^2+y^2)^{3/2}}
$$

**Componente $x$** (derivada parcial respecto a $x$, con $y$ fijo, regla de la cadena):

$$
E_x = -\frac{\partial V}{\partial x} = \frac{3p\,x\,y}{4\pi\varepsilon_0\,(x^2+y^2)^{5/2}}
$$

En el plano bisector ($y=0$): $E_x = 0$ ✓ (coherente con el cálculo directo previo).

**Componente $y$:**

$$
E_y = -\frac{\partial V}{\partial y} \;\xrightarrow{\,y=0\,}\; -\frac{p}{4\pi\varepsilon_0\,x^3}
$$

que es **exactamente** el resultado obtenido antes por cálculo directo sobre el eje.

> **Ventaja:** con el mismo esfuerzo se obtuvo $\mathbf{E}$ en **cualquier** punto del plano (y por simetría de rotación alrededor del eje del dipolo, en todo el espacio; además $E_z=0$ porque los campos de dos cargas en un plano quedan en ese plano). **Regla práctica:** para el campo en un punto genérico, calcular primero el potencial y luego derivar.

---

## 2. Superficies equipotenciales

### 2.1 Definición

Una **superficie equipotencial** es el conjunto de puntos con potencial constante:

$$
V(x,y,z) = V_0
$$

> **¿Por qué "superficie"?** Por el teorema de la función implícita: en 3D, una ecuación (una condición) deja normalmente 2 coordenadas libres → una superficie 2D. Cada valor $V_0$ da una equipotencial distinta. (Hay excepciones — ver §3.1.)

### 2.2 Propiedades

1. **$\Delta V$ entre dos equipotenciales no depende** de los puntos elegidos en cada una (la diferencia es siempre $V_0^{(2)} - V_0^{(1)}$).

2. **$\mathbf{E}$ es normal a la equipotencial.** Para $A,B$ cercanos en la misma superficie, $\Delta V_{AB}=0$, luego $\mathbf{E}\cdot\Delta\mathbf{s}=0$ para todo $\Delta\mathbf{s}$ tangente ⇒ $\mathbf{E}\perp$ superficie.

3. **Espaciado ↔ intensidad.** Tomando $\Delta\mathbf{s}\parallel\mathbf{E}$ entre dos equipotenciales cercanas, $|\Delta V| = E\,\Delta s$, de donde:
$$
\Delta s = \frac{|\Delta V|}{E} \quad\Longrightarrow\quad E \propto \frac{1}{\Delta s}
$$
En una familia de equipotenciales **equiespaciadas en voltaje**, el campo es **más intenso donde están más juntas**. Además, $\mathbf{E}$ apunta en la **dirección de máxima variación** de $V$ (una dirección "chanfleada" recorre más distancia para el mismo $\Delta V$, con un factor $1/\cos$ extra).

### 2.3 Ejemplos

| Sistema | Líneas de campo | Equipotenciales |
|---------|-----------------|-----------------|
| **Carga puntual** | radiales | esferas; se juntan al acercarse a la carga (campo mayor) |
| **Placas paralelas** ($+\sigma$, $-\sigma$) | paralelas, equiespaciadas | planos paralelos, equiespaciados (campo uniforme) |
| **Dipolo** | salen de $+Q$, entran en $-Q$ | esferas cerca de cada carga; el **plano bisector es $V=0$** |

> **Aclaración de vocabulario:** "equiespaciadas en **voltaje**" ($V_3-V_2 = V_2-V_1$) no es lo mismo que "equiespaciadas en **distancia**". Solo coinciden donde el campo es uniforme (placas).

---

## 3. Potencial en conductores en equilibrio

### 3.1 El conductor es un volumen equipotencial

Como $\mathbf{E}=0$ dentro de un conductor en equilibrio, para dos puntos internos $A,B$:

$$
V_B - V_A = -\int_A^B \mathbf{E}\cdot d\mathbf{l} = 0
$$

$$
\boxed{\text{Todo el volumen de un conductor en equilibrio es equipotencial}}
$$

Es la **excepción** a la regla "una condición → una superficie": aquí una región 3D entera (donde $\mathbf{E}\equiv 0$) es equipotencial.

### 3.2 Continuidad de la componente tangencial

Se completa la prueba pendiente (Clase 7) de que $\mathbf{E}$ es **normal** a la superficie del conductor:

- **Vía potencial:** el potencial es constante en la superficie ⇒ $\mathbf{E}$ normal ⇒ componente tangencial nula afuera; como adentro era 0, es continua.
- **Vía circuito rectangular** (equivalente): un rectángulo delgado a caballo de la superficie; como la fuerza es conservativa, $\oint\mathbf{E}\cdot d\mathbf{l}=0$. Despreciando los lados cortos:
$$
E_{1,\text{tang}} = E_{2,\text{tang}}
$$
La componente tangencial es continua; como adentro $\mathbf{E}=0$, afuera la tangencial es cero ⇒ $\mathbf{E}$ normal a la superficie.

### 3.3 Ejemplo: cascarón esférico

Cascarón de radio $R$, carga total $Q$ uniforme. Campo (Clase 6):

$$
E = \begin{cases} 0, & r<R \\ \dfrac{Q}{4\pi\varepsilon_0 r^2}, & r>R \end{cases}
$$

Potencial (con $V\to 0$ en el infinito), integrando:

$$
\boxed{V = \begin{cases} \dfrac{Q}{4\pi\varepsilon_0 R}, & r\leq R \quad(\text{constante}) \\[2mm] \dfrac{Q}{4\pi\varepsilon_0 r}, & r>R \end{cases}}
$$

- $V$ es **continuo**, pero su **derivada es discontinua** (coherente con $\mathbf{E}=-\nabla V$ y el salto de $\mathbf{E}$ en $r=R$).
- Adentro $V$ es constante (el cascarón es un equipotencial).

---

## 4. Capacitores

Comienza el **capítulo 5**.

### 4.1 Qué es un capacitor

Un **capacitor** (o condensador) es un dispositivo que **almacena energía eléctrica** de forma macroscópica, guardándola en el **campo eléctrico** (energía potencial eléctrica). Se distingue de una **batería**, que almacena energía **química** y la convierte en eléctrica. Ejemplo típico: dos placas conductoras paralelas conectadas a una batería, que separa cargas ($+\sigma$ / $-\sigma$) creando un campo interno.

> **Usos:** suavizar/regularizar la corriente, evitar saltos bruscos (p. ej. en el arranque de dispositivos), almacenamiento.

### 4.2 Capacitancia: ΔV proporcional a Q

Dos conductores **aislados** $A$, $B$ (de forma cualquiera, lejos de todo lo demás) con cargas $+Q$ y $-Q$. Se prueba que $\Delta V \propto Q$ por **superposición**: como

$$
V = \frac{1}{4\pi\varepsilon_0}\int \frac{dQ}{r}
$$

al multiplicar todas las cargas por un factor $\alpha$, el potencial (y $\Delta V$) se multiplica por $\alpha$. Se define la **capacitancia**:

$$
\boxed{C = \frac{|Q|}{|\Delta V|}}
$$

- $C$ depende de la **geometría**, la distancia y el material entre los conductores, **pero no de $Q$**.
- La placa con **carga positiva está a mayor potencial** (el potencial decrece de las cargas positivas a las negativas).

### 4.3 Unidad: el Farad

$$
[C] = \frac{\text{Coulomb}}{\text{Volt}} \equiv \text{Farad (F)}
$$

> El Farad es una unidad **enorme**: los capacitores reales van de **picofarad** ($10^{-12}$ F) a **microfarad** ($10^{-6}$ F).

### 4.4 Método general de cálculo

1. Fijar una **geometría simple** y la carga $\pm Q$ en cada placa.
2. Calcular el **campo eléctrico** $\mathbf{E}$ (conocida la distribución de carga).
3. Obtener $\Delta V = -\int \mathbf{E}\cdot d\mathbf{l}$.
4. $C = Q/\Delta V$.

> En geometrías arbitrarias ni siquiera se sabe *dónde* se distribuye la carga sobre la superficie — el cálculo requiere métodos numéricos. Solo geometrías simples admiten solución analítica. (A los dos conductores se les llama "placas" aunque no tengan forma de placa.)

### 4.5 Capacitor de placas paralelas

Dos placas de área $A$ separadas $d$, con $+Q$ y $-Q$, vacío en el medio. El campo es uniforme:

$$
E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 A}
$$

La diferencia de potencial (campo uniforme):

$$
|\Delta V| = E\,d = \frac{Q\,d}{\varepsilon_0 A}
$$

Por lo tanto:

$$
\boxed{C = \frac{\varepsilon_0 A}{d}}
$$

> La próxima clase: cálculo de capacitancias en otras geometrías.
