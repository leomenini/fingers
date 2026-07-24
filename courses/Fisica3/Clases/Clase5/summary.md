# Resumen Clase 5 — Movimiento de Cargas, Dipolos en Campos, Líneas de Campo y Flujo Eléctrico

---

## Índice

1. [Movimiento de cargas en campos uniformes](#1-movimiento-de-cargas-en-campos-uniformes)
   - [1.1 Carga puntual en campo uniforme](#11-carga-puntual-en-campo-uniforme)
   - [1.2 Aplicaciones tecnológicas](#12-aplicaciones-tecnológicas)
2. [Dipolo en un campo eléctrico uniforme](#2-dipolo-en-un-campo-eléctrico-uniforme)
   - [2.1 Fuerza neta y torque](#21-fuerza-neta-y-torque)
   - [2.2 Momento dipolar vectorial](#22-momento-dipolar-vectorial)
   - [2.3 Forma vectorial del torque](#23-forma-vectorial-del-torque)
3. [Líneas de campo eléctrico (Faraday)](#3-líneas-de-campo-eléctrico-faraday)
   - [3.1 Propiedades de las líneas de campo](#31-propiedades-de-las-líneas-de-campo)
   - [3.2 Ejemplos de representación](#32-ejemplos-de-representación)
   - [3.3 Relación con la ley de Coulomb](#33-relación-con-la-ley-de-coulomb)
4. [Flujo de un campo vectorial](#4-flujo-de-un-campo-vectorial)
   - [4.1 Motivación](#41-motivación)
   - [4.2 Caso simple: campo uniforme, superficie perpendicular](#42-caso-simple-campo-uniforme-superficie-perpendicular)
   - [4.3 Campo uniforme, superficie inclinada](#43-campo-uniforme-superficie-inclinada)
   - [4.4 Caso general: campo no uniforme, superficie curva](#44-caso-general-campo-no-uniforme-superficie-curva)
   - [4.5 Superficies cerradas y convención de signo](#45-superficies-cerradas-y-convención-de-signo)
5. [Ejemplo: prisma en campo uniforme](#5-ejemplo-prisma-en-campo-uniforme)
6. [Anuncio: Ley de Gauss](#6-anuncio-ley-de-gauss)

---

## 1. Movimiento de cargas en campos uniformes

### 1.1 Carga puntual en campo uniforme

Retomando Clase 4: dos placas paralelas generan un campo eléctrico uniforme $\mathbf{E}$ entre ellas. Una partícula de masa $m$ y carga $q$ entra con velocidad horizontal $v_0$ en la región entre las placas.

**Ecuaciones de movimiento:**

Eje $X$ (movimiento uniforme, sin fuerza horizontal):
$$
x(t) = v_0 t
$$

Eje $Y$ (fuerza constante $F = qE$, movimiento uniformemente acelerado):
$$
\ddot{y} = -\frac{q}{m} E
$$
$$
y(t) = -\frac{1}{2}\frac{q}{m} E \, t^2
$$

**Trayectoria:** parabólica (análoga al tiro parabólico gravitatorio).
- Si $q > 0$: la aceleración es hacia abajo (en dirección de $\mathbf{E}$).
- Si $q < 0$ (electrón): la aceleración es hacia arriba (opuesta a $\mathbf{E}$).

### 1.2 Aplicaciones tecnológicas

- **Tubo de rayos catódicos (CRT):** un filamento caliente emite electrones que pasan entre placas cargadas. Variando el campo eléctrico se controla la desviación del haz, formando imágenes en una pantalla fluorescente. Usado en televisores y monitores antiguos.
- **Impresoras de tinta:** gotitas de tinta se cargan eléctricamente y se desvían mediante campos eléctricos para ubicarlas en la posición deseada.

---

## 2. Dipolo en un campo eléctrico uniforme

### 2.1 Fuerza neta y torque

**Configuración:**
- Dipolo: cargas $+Q$ y $-Q$ separadas por distancia $d$ (barra rígida).
- Campo eléctrico uniforme $\mathbf{E}$ horizontal.

**Fuerza neta:**
$$
\mathbf{F}_1 = +Q\mathbf{E}, \qquad \mathbf{F}_2 = -Q\mathbf{E}
$$
$$
\mathbf{F}_{\text{total}} = \mathbf{F}_1 + \mathbf{F}_2 = 0
$$

El dipolo no se traslada (centro de masa no se desplaza).

**Torque:**

Considerando el ángulo $\theta$ entre el dipolo y el campo:
$$
\tau_1 = F_1 \cdot \frac{d}{2}\sin\theta = QE \frac{d}{2}\sin\theta
$$
$$
\tau_2 = F_2 \cdot \frac{d}{2}\sin\theta = QE \frac{d}{2}\sin\theta
$$

Ambos torques tienen el mismo sentido (tienden a alinear el dipolo con el campo):

$$
\boxed{\tau_{\text{total}} = -Q E d \sin\theta}
$$

### 2.2 Momento dipolar vectorial

Se define el **momento dipolar eléctrico** como un **vector** que va de la carga negativa a la positiva:

$$
\boxed{\mathbf{p} = Q \mathbf{d}}
$$

Donde $\mathbf{d}$ es el vector de $-Q$ a $+Q$ (magnitud $d$, dirección a lo largo del dipolo). En términos de $\mathbf{p}$:

$$
\tau = -p E \sin\theta
$$

### 2.3 Forma vectorial del torque

El torque puede expresarse como un **producto vectorial**:

$$
\boxed{\boldsymbol{\tau} = \mathbf{p} \times \mathbf{E}}
$$

- **Dirección:** perpendicular al plano que forman $\mathbf{p}$ y $\mathbf{E}$.
- **Sentido:** dado por la regla de la mano derecha (de $\mathbf{p}$ a $\mathbf{E}$).

> Si el campo no es estrictamente uniforme pero el dipolo es muy pequeño comparado con las escalas de variación del campo, la fórmula sigue siendo una buena aproximación.

---

## 3. Líneas de campo eléctrico (Faraday)

Faraday introdujo la noción de **líneas de campo** como una forma cualitativa de visualizar campos vectoriales sin usar matemática compleja. Tres propiedades fundamentales:

### 3.1 Propiedades de las líneas de campo

1. **Nacen en cargas positivas y mueren en cargas negativas** (o se van al infinito). No pueden aparecer ni desaparecer en el espacio libre.
2. **$\mathbf{E}$ es tangente a las líneas** en todo punto (la dirección de la línea da la dirección del campo; una flecha indica el sentido).
3. **El módulo de $\mathbf{E}$ es proporcional al número de líneas por unidad de área transversal:**

$$
|\mathbf{E}| \propto \frac{N}{A}
$$

donde $N$ es el número de líneas que atraviesan una superficie $A$ perpendicular al campo.

### 3.2 Ejemplos de representación

**Campo uniforme:** líneas paralelas equiespaciadas. La densidad de líneas es constante → campo constante.

**Carga puntual positiva:** líneas radiales salientes, equiespaciadas angularmente. Al alejarse, la densidad de líneas disminuye → campo decrece.

**Dipolo eléctrico:** las líneas salen de $+Q$ y entran en $-Q$. Cerca de cada carga, las líneas se parecen a las de una carga puntual individual. A grandes distancias, las líneas conectan una carga con la otra.

### 3.3 Relación con la ley de Coulomb

Para una carga puntual $Q$ positiva, asignando $N$ líneas que salen radialmente y tomando una superficie esférica de radio $r$:

$$
|\mathbf{E}| \propto \frac{N}{4\pi r^2}
$$

Esto implica $|\mathbf{E}| \propto 1/r^2$, que es precisamente la ley de Coulomb. El $4\pi$ aparece naturalmente por la geometría esférica.

> **Ventaja:** las líneas de campo permiten visualizar cualitativamente el campo sin ecuaciones. **Limitación:** la discretización en líneas introduce errores de conteo (efecto de "pixelado").

---

## 4. Flujo de un campo vectorial

### 4.1 Motivación

Para dar un **sentido matemático preciso** al conteo de líneas de campo (evitando los problemas de discretización), se define el **flujo** de un campo vectorial.

### 4.2 Caso simple: campo uniforme, superficie perpendicular

Para un campo $\mathbf{v}$ uniforme y una superficie plana $A$ perpendicular a $\mathbf{v}$:

$$
\Phi = v A
$$

donde $\Phi$ (fi mayúscula) es el flujo. Es una **medida del número de líneas** que atraviesan la superficie, pero como magnitud continua (sin discretización).

### 4.3 Campo uniforme, superficie inclinada

Si la superficie está inclinada un ángulo $\theta$ respecto al campo, lo que importa es la **proyección** de la superficie sobre el plano perpendicular a $\mathbf{v}$:

$$
\Phi = v A_\perp = v A \cos\theta
$$

**Vector área:** se define $\mathbf{A} = A \hat{\mathbf{n}}$, donde $\hat{\mathbf{n}}$ es el versor normal a la superficie. Entonces:

$$
\boxed{\Phi = \mathbf{v} \cdot \mathbf{A}}
$$

- $\Phi > 0$: flujo en la dirección de $\hat{\mathbf{n}}$.
- $\Phi < 0$: flujo en dirección opuesta a $\hat{\mathbf{n}}$.
- $\Phi = 0$: superficie paralela al campo.

### 4.4 Caso general: campo no uniforme, superficie curva

Se divide la superficie $S$ en elementos infinitesimales $dS$. En cada elemento, el campo es aproximadamente uniforme y la superficie es aproximadamente plana:

$$
d\Phi = \mathbf{v}(\mathbf{r}) \cdot \hat{\mathbf{n}} \, dS = \mathbf{v} \cdot d\mathbf{A}
$$

Integrando:

$$
\boxed{\Phi = \iint_S \mathbf{v} \cdot d\mathbf{A} = \iint_S \mathbf{v} \cdot \hat{\mathbf{n}} \, dS}
$$

- El flujo total es la **suma con signo** de las líneas que atraviesan la superficie.
- Líneas que cruzan en el sentido de $\hat{\mathbf{n}}$ se cuentan positivas; en sentido opuesto, negativas.

### 4.5 Superficies cerradas y convención de signo

Para **superficies cerradas**, se usa la notación:

$$
\Phi = \oiint_S \mathbf{v} \cdot d\mathbf{A}
$$

**Convención del curso:** para superficies cerradas, $\hat{\mathbf{n}}$ siempre apunta **hacia afuera** (flujo saliente positivo).

---

## 5. Ejemplo: prisma en campo uniforme

**Configuración:**
- Prisma de base triangular en un campo $\mathbf{v}$ uniforme y horizontal.
- Se numeran las caras: $A_1$ (cara frontal, $\perp$ a $\mathbf{v}$), $A_2$ (tapa superior, $\parallel$ a $\mathbf{v}$), $A_3$ (cara inclinada), $A_4$ y $A_5$ (caras triangulares laterales).

**Cálculo:**

| Cara | Flujo | Razón |
|------|-------|-------|
| $A_1$ (frontal) | $-v A_1$ | $\mathbf{v}$ opuesto a $\hat{\mathbf{n}}$ |
| $A_2$ (tapa) | $0$ | $\mathbf{v} \perp \hat{\mathbf{n}}$ |
| $A_3$ (inclinada) | $+v A_1$ | $A_3 \cos\theta = A_1$, flujo saliente |
| $A_4$, $A_5$ (triangulares) | $0$ | $\mathbf{v} \perp \hat{\mathbf{n}}$ |

**Flujo total:**
$$
\Phi_{\text{total}} = -v A_1 + 0 + v A_1 + 0 + 0 = 0
$$

El flujo neto es cero porque entran tantas líneas como salen (el campo es uniforme y no hay fuentes ni sumideros dentro del prisma).

---

## 6. Anuncio: Ley de Gauss

La próxima clase se demostrará la **Ley de Gauss**:

$$
\boxed{\oiint_S \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{int}}}{\varepsilon_0}}
$$

El flujo del campo eléctrico a través de una superficie cerrada es igual a la **carga neta encerrada** dividida por $\varepsilon_0$. Esta ley permitirá calcular campos eléctricos de distribuciones simétricas de forma mucho más simple que integrando directamente la ley de Coulomb.