# Resumen Clase 4 — Campo Eléctrico de Distribuciones Continuas y Movimiento de Cargas

---

## Índice

1. [Dipolo eléctrico: campo sobre el plano bisector](#1-dipolo-eléctrico-campo-sobre-el-plano-bisector)
   - [1.1 Momento dipolar eléctrico](#11-momento-dipolar-eléctrico)
   - [1.2 Límite de gran distancia](#12-límite-de-gran-distancia)
2. [Campo eléctrico de distribuciones continuas](#2-campo-eléctrico-de-distribuciones-continuas)
   - [2.1 Principio general](#21-principio-general)
3. [Ejemplo 1: Barra con densidad lineal uniforme](#3-ejemplo-1-barra-con-densidad-lineal-uniforme)
4. [Ejemplo 2: Anillo cargado uniformemente](#4-ejemplo-2-anillo-cargado-uniformemente)
   - [4.1 Cálculo del campo sobre el eje](#41-cálculo-del-campo-sobre-el-eje)
   - [4.2 Límites](#42-límites)
5. [Ejemplo 3: Disco cargado uniformemente](#5-ejemplo-3-disco-cargado-uniformemente)
   - [5.1 Cálculo del campo sobre el eje](#51-cálculo-del-campo-sobre-el-eje)
   - [5.2 Límite de gran distancia (Z ≫ R)](#52-límite-de-gran-distancia-z--r)
   - [5.3 Límite de plano infinito (Z ≪ R)](#53-límite-de-plano-infinito-z--r)
6. [Ejemplo 4: Cascarón esférico](#6-ejemplo-4-cascarón-esférico)
7. [Movimiento de cargas en campos eléctricos](#7-movimiento-de-cargas-en-campos-eléctricos)
   - [7.1 Fuerza sobre una carga en un campo](#71-fuerza-sobre-una-carga-en-un-campo)
   - [7.2 Ejemplo: capacitor de placas paralelas](#72-ejemplo-capacitor-de-placas-paralelas)
   - [7.3 Aplicación tecnológica: tubo de rayos catódicos](#73-aplicación-tecnológica-tubo-de-rayos-catódicos)

---

## 1. Dipolo eléctrico: campo sobre el plano bisector

Retomando el cálculo iniciado en Clase 3. Configuración:
- Carga $+Q$ en $(0, +d/2)$ y $-Q$ en $(0, -d/2)$ sobre el eje $Y$.
- Punto de observación sobre el **eje $X$** (plano bisector), a distancia $x$ del origen.

Por simetría:
- Los módulos son iguales: $|E_+| = |E_-| = \dfrac{Q}{4\pi\varepsilon_0 (x^2 + d^2/4)}$.
- Las componentes horizontales ($X$) se **cancelan**.
- Solo sobrevive la componente vertical ($Y$), hacia abajo.

Cálculo de la componente $Y$:

$$
E_y = -2 E_+ \cos\theta = -2 \cdot \frac{Q}{4\pi\varepsilon_0 (x^2 + d^2/4)} \cdot \frac{d/2}{\sqrt{x^2 + d^2/4}}
$$

$$
\boxed{E_y = -\frac{Qd}{4\pi\varepsilon_0 \, (x^2 + d^2/4)^{3/2}}}
$$

### 1.1 Momento dipolar eléctrico

Se define el **momento dipolar eléctrico** como:

$$
\boxed{p = Qd}
$$

Es un vector que apunta de la carga negativa a la positiva. En términos de $p$:

$$
E_y = -\frac{p}{4\pi\varepsilon_0 \, (x^2 + d^2/4)^{3/2}}
$$

### 1.2 Límite de gran distancia

Para $x \gg d$:

$$
E_y \approx -\frac{p}{4\pi\varepsilon_0 \, x^3}
$$

El campo de un dipolo decrece como **$1/x^3$**, más rápido que el de una carga puntualual ($1/x^2$). Esto es porque el dipolo tiene **carga neta cero**: a grandes distancias, los campos de las dos cargas casi se cancelan, dejando solo el efecto de la separación finita.

---

## 2. Campo eléctrico de distribuciones continuas

### 2.1 Principio general

Al igual que para cargas discretas, el campo eléctrico de una distribución continua se obtiene por **superposición**. La única diferencia es que la suma se reemplaza por una integral:

$$
\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \iiint \frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|^2} \hat{\mathbf{r}} \, dV'
$$

Para distribuciones lineales ($\lambda$) o superficiales ($\sigma$), se usan integrales de línea o superficie respectivamente.

---

## 3. Ejemplo 1: Barra con densidad lineal uniforme

Retomando el resultado de Clases 2 y 3: para una barra de longitud $L$ con densidad lineal $\lambda$ uniforme, sobre el plano bisector a distancia $Y$:

$$
E_y = \frac{Q}{4\pi\varepsilon_0 \, Y \sqrt{Y^2 + L^2/4}}, \qquad E_x = E_z = 0
$$

donde $Q = \lambda L$ es la carga total.

- Si $\lambda > 0$: líneas de campo **salen** radialmente de la barra (campo repulsivo).
- Si $\lambda < 0$: líneas de campo **entran** hacia la barra.

Este campo es radial saliente desde el eje de la barra en todo el plano bisector.

---

## 4. Ejemplo 2: Anillo cargado uniformemente

### 4.1 Cálculo del campo sobre el eje

**Configuración:**
- Anillo de radio $R$ en el plano $XY$, centrado en el origen.
- Densidad lineal de carga $\lambda$ uniforme.
- Punto de observación sobre el eje $Z$, a distancia $Z$ del centro.

**Por simetría:** solo hay componente $Z$.

Elemento de arco: $d\ell = R\,d\theta$, con carga $dq = \lambda R\,d\theta$.
Distancia al punto $P$: $r = \sqrt{R^2 + Z^2}$.

Campo diferencial (módulo):
$$
dE = \frac{1}{4\pi\varepsilon_0} \frac{\lambda R\,d\theta}{R^2 + Z^2}
$$

Componente $Z$ (proyectando con $\cos\phi = Z/\sqrt{R^2 + Z^2}$):
$$
dE_z = \frac{1}{4\pi\varepsilon_0} \frac{\lambda R Z\,d\theta}{(R^2 + Z^2)^{3/2}}
$$

Integrando sobre todo el anillo ($\theta$ de $0$ a $2\pi$):

$$
\boxed{E_z = \frac{\lambda R Z}{2\varepsilon_0 \, (R^2 + Z^2)^{3/2}}}
$$

O en términos de la carga total $Q = \lambda \cdot 2\pi R$:

$$
\boxed{E_z = \frac{Q Z}{4\pi\varepsilon_0 \, (R^2 + Z^2)^{3/2}}}
$$

### 4.2 Límites

- **$Z \gg R$**: $E_z \approx \dfrac{Q}{4\pi\varepsilon_0 Z^2}$ (se comporta como **carga puntual**).
- **$Z = 0$**: $E_z = 0$ (en el centro, todos los campos se cancelan por simetría).

---

## 5. Ejemplo 3: Disco cargado uniformemente

### 5.1 Cálculo del campo sobre el eje

**Configuración:**
- Disco de radio $R$ en el plano $XY$, centrado en el origen.
- Densidad superficial de carga $\sigma$ uniforme.
- Punto de observación sobre el eje $Z$.

**Método:** dividir el disco en **anillos concéntricos** de radio $r$ y ancho $dr$. Cada anillo tiene área $dA = 2\pi r\,dr$ y carga $dq = \sigma \cdot 2\pi r\,dr$.

Usando el resultado del anillo para cada anillo infinitesimal:

$$
dE_z = \frac{Z \, dq}{4\pi\varepsilon_0 (r^2 + Z^2)^{3/2}} = \frac{\sigma Z}{2\varepsilon_0} \frac{r\,dr}{(r^2 + Z^2)^{3/2}}
$$

Integrando de $r = 0$ a $r = R$:

$$
E_z = \frac{\sigma Z}{2\varepsilon_0} \int_0^R \frac{r\,dr}{(r^2 + Z^2)^{3/2}}
$$

Cambio de variable: $u = r^2 + Z^2$, $du = 2r\,dr$:

$$
E_z = \frac{\sigma Z}{4\varepsilon_0} \int_{Z^2}^{R^2+Z^2} u^{-3/2} du
    = \frac{\sigma Z}{4\varepsilon_0} \left[-2 u^{-1/2}\right]_{Z^2}^{R^2+Z^2}
$$

$$
\boxed{E_z = \frac{\sigma}{2\varepsilon_0} \left(1 - \frac{Z}{\sqrt{Z^2 + R^2}}\right)}
$$

Para $Z > 0$, el campo apunta hacia arriba (saliendo del disco si $\sigma > 0$). Para $Z < 0$, el campo cambia de signo (apunta hacia abajo).

### 5.2 Límite de gran distancia ($Z \gg R$)

Desarrollo de Taylor de $\sqrt{Z^2 + R^2} = Z\sqrt{1 + R^2/Z^2} \approx Z(1 + R^2/2Z^2)$:

$$
\frac{Z}{\sqrt{Z^2 + R^2}} \approx 1 - \frac{R^2}{2Z^2} + \cdots
$$

Sustituyendo:

$$
E_z \approx \frac{\sigma}{2\varepsilon_0} \left(1 - \left(1 - \frac{R^2}{2Z^2}\right)\right) = \frac{\sigma R^2}{4\varepsilon_0 Z^2}
$$

Como $Q = \sigma \pi R^2$:

$$
\boxed{E_z \approx \frac{Q}{4\pi\varepsilon_0 Z^2}}
$$

El disco se comporta como una **carga puntual** a grandes distancias.

### 5.3 Límite de plano infinito ($Z \ll R$)

Cuando $Z \ll R$, $\dfrac{Z}{\sqrt{Z^2 + R^2}} \to 0$:

$$
\boxed{E_z \approx \frac{\sigma}{2\varepsilon_0}}
$$

**Campo uniforme**, independiente de la distancia. Este es el campo de un **plano infinito cargado uniformemente**. El resultado no depende de la forma del plano (mientras se esté lejos de los bordes) y vale para cualquier punto cercano a la superficie.

> **Importante:** este campo es perpendicular al plano y uniforme en magnitud y dirección, salvo en las proximidades de los bordes (efectos de borde).

---

## 6. Ejemplo 4: Cascarón esférico

Recordatorio del resultado anunciado en Clase 3 (demostración pendiente con ley de Gauss):

- **Dentro** ($r < R$): $E = 0$.
- **Fuera** ($r > R$): $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$ (como carga puntual en el centro).

---

## 7. Movimiento de cargas en campos eléctricos

### 7.1 Fuerza sobre una carga en un campo

Si una carga $q$ se encuentra en una región donde hay un campo eléctrico $\mathbf{E}$, la fuerza que experimenta es:

$$
\boxed{\mathbf{F} = q \mathbf{E}}
$$

- Si el movimiento es **suficientemente lento**, se pueden usar las expresiones electrostáticas como buena aproximación (régimen **cuasi-estático**).
- Conocida la fuerza, se aplica la **segunda ley de Newton** para determinar el movimiento.

### 7.2 Ejemplo: capacitor de placas paralelas

Dos placas paralelas muy grandes (comparadas con su separación), con densidades superficiales $+\sigma$ y $-\sigma$.

**Campo de cada placa individual** (plano infinito): $E = \sigma / (2\varepsilon_0)$.

**Campo total entre las placas:** ambos campos apuntan en la misma dirección (de $+$ a $-$), por lo que:

$$
\boxed{E = \frac{\sigma}{\varepsilon_0}}
$$

El campo es **uniforme** (constante en magnitud y dirección) en toda la región entre las placas, salvo cerca de los bordes.

**Movimiento de una carga $q$ dentro del capacitor:**
- Fuerza constante: $\mathbf{F} = q\mathbf{E}$.
- Movimiento: **parabólico** (análogo al tiro parabólico gravitatorio).
- La dirección de curvatura depende del signo de la carga.

### 7.3 Aplicación tecnológica: tubo de rayos catódicos

En los televisores antiguos (tubos de rayos catódicos, CRT):
- Una fuente de electrones (filamento caliente) emite electrones.
- Un **colimador** selecciona electrones con una dirección inicial específica.
- Los electrones atraviesan un campo eléctrico (y/o magnético) que los desvía.
- El haz de electrones impacta en una pantalla fluorescente, creando una imagen.

> La gravedad es despreciable frente a la fuerza eléctrica en estos dispositivos, como se vio en la comparación de Clase 3 ($F_e/F_g \sim 10^{39}$).