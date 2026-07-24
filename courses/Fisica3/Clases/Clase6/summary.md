# Resumen Clase 6 — Flujo del Campo Eléctrico, Ley de Gauss y Conductores en Equilibrio

---

## Índice

1. [Flujo del campo eléctrico](#1-flujo-del-campo-eléctrico)
2. [Ejemplos electrostáticos de flujo](#2-ejemplos-electrostáticos-de-flujo)
   - [2.1 Campo uniforme a través de un cilindro](#21-campo-uniforme-a-través-de-un-cilindro)
   - [2.2 Carga puntual y esfera centrada](#22-carga-puntual-y-esfera-centrada)
   - [2.3 Carga puntual y superficie cerrada exterior](#23-carga-puntual-y-superficie-cerrada-exterior)
   - [2.4 Ángulo sólido](#24-ángulo-sólido)
   - [2.5 Superficie arbitraria sin la carga](#25-superficie-arbitraria-sin-la-carga)
   - [2.6 Superficie arbitraria que encierra la carga](#26-superficie-arbitraria-que-encierra-la-carga)
3. [Deducción para un conjunto de cargas](#3-deducción-para-un-conjunto-de-cargas)
4. [Ley de Gauss](#4-ley-de-gauss)
   - [4.1 Enunciado y carácter fundamental](#41-enunciado-y-carácter-fundamental)
   - [4.2 Equivalencia Coulomb ↔ Gauss en electrostática](#42-equivalencia-coulomb--gauss-en-electrostática)
   - [4.3 El 4π y ε₀](#43-el-4π-y-ε₀)
5. [Aplicaciones de la Ley de Gauss](#5-aplicaciones-de-la-ley-de-gauss)
   - [5.1 Línea infinita cargada](#51-línea-infinita-cargada)
   - [5.2 Plano infinito cargado](#52-plano-infinito-cargado)
   - [5.3 Cascarón esférico uniformemente cargado](#53-cascarón-esférico-uniformemente-cargado)
6. [Ley de Gauss y conductores en equilibrio](#6-ley-de-gauss-y-conductores-en-equilibrio)

---

## 1. Flujo del campo eléctrico

Retomando la Clase 5, donde se definió el flujo de un campo vectorial (pensado como un campo de velocidades para tener una imagen mecánica), la misma noción se aplica **idénticamente** al campo eléctrico, que es también un campo vectorial.

Para una superficie $S$ **orientada** (con un versor normal $\hat{\mathbf{n}}$ definido en cada punto, que varía por continuidad), el flujo del campo eléctrico a través de $S$ es:

$$
\Phi = \iint_S \mathbf{E} \cdot \hat{\mathbf{n}} \, dS = \iint_S \mathbf{E} \cdot d\mathbf{A}
$$

donde $d\mathbf{A} = \hat{\mathbf{n}}\, dS$ es el vector área.

**Convención para superficies cerradas:** se toma el **flujo saliente** ($\hat{\mathbf{n}}$ apuntando siempre hacia afuera), y se anota con un círculo sobre la integral:

$$
\Phi = \oiint_S \mathbf{E} \cdot d\mathbf{A}
$$

> El flujo es una **medida del número de líneas de campo** que atraviesan la superficie, **contadas con signo**: positivas si cruzan en el sentido de $\hat{\mathbf{n}}$, negativas en sentido opuesto.

---

## 2. Ejemplos electrostáticos de flujo

Todos estos ejemplos son **consecuencia directa de la ley de Coulomb**; todavía no se introduce ninguna ley nueva.

### 2.1 Campo uniforme a través de un cilindro

Campo $\mathbf{E}$ uniforme y un cilindro con las tapas normales al campo. Con las tapas numeradas $1$ (entrada) y $2$ (salida), de área $A$:

| Superficie | Flujo | Razón |
|------------|-------|-------|
| Lateral | $0$ | $\hat{\mathbf{n}} \perp \mathbf{E}$ |
| Tapa 1 (entrante) | $-E A$ | $\hat{\mathbf{n}}$ opuesto a $\mathbf{E}$ |
| Tapa 2 (saliente) | $+E A$ | $\hat{\mathbf{n}}$ paralelo a $\mathbf{E}$ |

$$
\Phi_{\text{total}} = -EA + 0 + EA = 0
$$

Entran tantas líneas como salen (no hay fuentes dentro).

### 2.2 Carga puntual y esfera centrada

Carga puntual $Q$ (se toma positiva) y una superficie esférica $S$ de radio $r$ centrada en ella. En todo punto de la esfera, $\mathbf{E}$ es **radial** (paralelo a $\hat{\mathbf{n}}$) y de **módulo constante** (por la ley de Coulomb, $E$ solo depende de $r$):

$$
\Phi = E \iint_S dS = E \cdot 4\pi r^2
$$

Sustituyendo $E = \dfrac{Q}{4\pi \varepsilon_0 r^2}$:

$$
\boxed{\Phi = \frac{Q}{\varepsilon_0}}
$$

El resultado **no depende del radio**. Esta expresión se parece a la ley de Gauss anunciada al final de la Clase 5, pero aquí es todavía solo una consecuencia de Coulomb.

### 2.3 Carga puntual y superficie cerrada exterior

Carga puntual $Q$ y una superficie cerrada que **no la contiene**: un "cascarón" recortado por un cono con vértice en la carga, entre dos esferas de radios $a < b$. Las caras laterales tienen $\hat{\mathbf{n}} \perp \mathbf{E}$ (flujo nulo). Quedan la cara exterior $S_1$ (radio $b$) y la interior $S_2$ (radio $a$):

$$
\Phi_1 = +E(b)\, S_1 = \frac{Q}{4\pi\varepsilon_0 b^2}\, S_1, \qquad
\Phi_2 = -E(a)\, S_2 = -\frac{Q}{4\pi\varepsilon_0 a^2}\, S_2
$$

Como las tapas son homotéticas, cada área es proporcional al cuadrado de su radio:

$$
\frac{S_1}{b^2} = \frac{S_2}{a^2} \;\Longrightarrow\; \Phi_1 = -\Phi_2 \;\Longrightarrow\; \Phi_{\text{total}} = 0
$$

Conceptualmente: toda línea que entra por una cara sale por la otra.

### 2.4 Ángulo sólido

La cantidad $\dfrac{S}{r^2}$ (área de un trozo dibujado sobre una esfera dividida por el radio al cuadrado) se llama **ángulo sólido**:

$$
\Omega = \frac{S}{r^2}
$$

- Es **invariante ante el tamaño de la esfera**: al inflar un globo esférico, el área del dibujo crece como $r^2$, pero el ángulo sólido no cambia.
- Ángulo sólido de la **esfera entera**: $\dfrac{4\pi r^2}{r^2} = 4\pi$.

> No es imprescindible para la deducción, pero es una noción de cultura general que aparece frecuentemente en los libros.

### 2.5 Superficie arbitraria sin la carga

Carga puntual $Q$ y **cualquier** superficie cerrada que no la contiene. Sin cálculo, $\Phi = 0$ (las líneas que entran vuelven a salir). Para hacerlo preciso a partir de la integral, se **descompone** la superficie con muchas esferas concéntricas en la carga: los flujos laterales son despreciables (superficie muy delgada) y cada trozo exterior cancela al interior (mismo ángulo sólido). Todos los pares se simplifican:

$$
\Phi_{\text{total}} = 0
$$

### 2.6 Superficie arbitraria que encierra la carga

Carga puntual $Q$ y una superficie arbitraria cerrada $S$ que **sí** la encierra. Se construye una pequeña esfera $S'$ centrada en $Q$ (con $\Phi_{S'} = Q/\varepsilon_0$). La superficie compuesta $S \setminus S'$ (el volumen entre ambas) es cerrada y **no** contiene la carga, por lo que su flujo es cero. Como las orientaciones salientes de ese volumen son opuestas en cada cara:

$$
\Phi_S = \Phi_{S'} = \frac{Q}{\varepsilon_0}
$$

Vale también para carga negativa: solo cambia el signo ($\Phi < 0$).

---

## 3. Deducción para un conjunto de cargas

Para un problema electrostático con cargas puntuales $Q_1, Q_2, \dots$ y una superficie cerrada $S$ que deja algunas dentro y otras fuera, se usa el **principio de superposición**: el campo total es la suma de los campos de cada carga, luego el flujo total es la suma de los flujos:

$$
\Phi = \sum_i \Phi_i
$$

Cada $\Phi_i$ vale $Q_i/\varepsilon_0$ si la carga está **dentro** de $S$, y $0$ si está **fuera** ("los de afuera son de palo"). Por lo tanto:

$$
\boxed{\Phi = \oiint_S \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{int}}}{\varepsilon_0}}
$$

donde $Q_{\text{int}}$ es la carga total encerrada por $S$.

---

## 4. Ley de Gauss

### 4.1 Enunciado y carácter fundamental

La expresión anterior fue **probada en el caso electrostático**, partiendo de la ley de Coulomb. La **Ley de Gauss** afirma algo más fuerte: la misma fórmula vale **siempre**, también fuera del caso electrostático, y es un **resultado experimental**.

$$
\boxed{\oiint_S \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{int}}}{\varepsilon_0}} \qquad \text{(válida en general)}
$$

Propuesta por **Gauss (≈1835)**, uno de los científicos más importantes de la historia (matemática, física y astronomía; niño prodigio de familia humilde).

**Intuición de por qué vale aun sin electrostática:** si las líneas de campo solo nacen y mueren en las cargas, cuando una carga se mueve ("baila") las líneas se deforman, pero el **número** de líneas que atraviesa la superficie no cambia. El flujo solo depende de cuántas líneas salen de las cargas encerradas.

> Por eso los físicos consideran a Gauss **más fundamental** que Coulomb: Coulomb vale solo en electrostática; Gauss vale siempre.

### 4.2 Equivalencia Coulomb ↔ Gauss en electrostática

En el caso electrostático ambas leyes son **equivalentes**:
- **Coulomb ⟹ Gauss:** demostrado en las secciones 2–3.
- **Gauss ⟹ Coulomb:** para una carga puntual, se toma una **superficie gaussiana** esférica de radio $r$. Solo por **simetría** (invariancia por rotaciones), $\mathbf{E}$ es radial y de módulo constante, luego $\Phi = E\, 4\pi r^2$. Igualando con Gauss ($\Phi = Q/\varepsilon_0$):

$$
E = \frac{Q}{4\pi\varepsilon_0 r^2}
$$

que es la ley de Coulomb. Esto requiere que la carga esté **quieta** (si se mueve, el campo deja de ser radial), por eso la equivalencia es solo en el caso electrostático.

### 4.3 El 4π y ε₀

El factor $4\pi$ se colocó en la ley de Coulomb precisamente para que la ley considerada **más fundamental** (Gauss) quede escrita de la forma **más simple** (sin $4\pi$). Es una convención sobre la definición de $\varepsilon_0$; existen sistemas de unidades que ponen el $4\pi$ en la ley de Gauss.

---

## 5. Aplicaciones de la Ley de Gauss

La estrategia es elegir una **superficie gaussiana con la misma simetría del problema**, de modo que el flujo se calcule fácilmente y se despeje $E$.

### 5.1 Línea infinita cargada

Línea infinita con densidad lineal uniforme $\lambda$. Por simetría (invariancia por traslaciones y rotaciones alrededor del eje), $\mathbf{E}$ es **radial** y de módulo constante a distancia fija. Superficie gaussiana: **cilindro** de radio $r$ y altura $h$.

- Carga encerrada: $Q_{\text{int}} = \lambda h$.
- Flujo: las tapas no contribuyen ($\mathbf{E}\perp\hat{\mathbf{n}}$); solo la lateral: $\Phi = E\,(2\pi r h)$.

$$
E\,(2\pi r h) = \frac{\lambda h}{\varepsilon_0} \;\Longrightarrow\; \boxed{E = \frac{\lambda}{2\pi\varepsilon_0 r}}
$$

Coincide con el resultado obtenido antes por Coulomb, pero aquí el cálculo es de una sola línea (por Coulomb era un "cuenterío bárbaro").

### 5.2 Plano infinito cargado

Plano infinito con densidad superficial uniforme $\sigma$. Por simetría, $\mathbf{E}$ es **perpendicular al plano**, saliente, con igual módulo a ambos lados. Superficie gaussiana: **cilindro** que atraviesa el plano, con tapas de área $S$ paralelas al plano.

- Carga encerrada: $Q_{\text{int}} = \sigma S$.
- Flujo: la lateral no contribuye; **ambas tapas** dan flujo saliente: $\Phi = 2 E S$.

$$
2 E S = \frac{\sigma S}{\varepsilon_0} \;\Longrightarrow\; \boxed{E = \frac{\sigma}{2\varepsilon_0}}
$$

El campo **no depende de la distancia**: es uniforme mientras la distancia sea pequeña frente al tamaño del plano.

### 5.3 Cascarón esférico uniformemente cargado

Cascarón esférico de radio $R$ con carga total $Q$ distribuida uniformemente. Por simetría, $\mathbf{E}$ es radial y de módulo constante sobre cualquier esfera concéntrica $S$ de radio $r$; luego $\Phi = E\, 4\pi r^2$. Por Gauss, la carga encerrada depende de si $S$ está dentro o fuera:

$$
\boxed{E =
\begin{cases}
\dfrac{Q}{4\pi\varepsilon_0 r^2}, & r > R \\[2mm]
0, & r < R
\end{cases}}
$$

- **Fuera:** se comporta como una carga puntual $Q$ ubicada en el origen.
- **Dentro:** campo nulo.

> **Discontinuidad en $r = R$:** el salto abrupto es un artefacto de suponer el cascarón de ancho nulo. Si el cascarón tiene un ancho real $a$ (pequeño), el campo no salta: vale $0$ dentro, **sube rápidamente** a través del espesor $a$, y luego decae como $1/r^2$ afuera. En la naturaleza (a nivel clásico) no hay saltos abruptos.

---

## 6. Ley de Gauss y conductores en equilibrio

Para un **conductor** de forma arbitraria en situación **electrostática (equilibrio)** valen dos propiedades:

1. **No hay carga neta en el interior:** cualquier volumen interno tiene carga neta nula. La carga neta del conductor se distribuye sobre su **superficie**. *(Intuición: las cargas de igual signo se repelen y se alejan lo más posible, quedando en la superficie.)*
2. **El campo eléctrico interior es nulo:** $\mathbf{E} = 0$ en todo punto interno. *(Menos intuitiva.)*

**Prueba (usando Gauss):**

- **Paso previo:** al menos una de las dos debe cumplirse, porque si hubiera **carga y campo simultáneamente** dentro, la carga se movería, contradiciendo el equilibrio.

- **(1) Si $\mathbf{E} = 0$ dentro ⟹ no hay carga:** para cualquier superficie $S$ interna, $\Phi = 0$ (pues $\mathbf{E}=0$), y por Gauss $Q_{\text{int}} = \varepsilon_0 \Phi = 0$. Como vale para toda $S$, no hay carga neta en ningún punto interior.

- **(2) Si no hay carga dentro ⟹ $\mathbf{E} = 0$:** por absurdo, si $\mathbf{E}\neq 0$, las líneas de campo no pueden empezar ni terminar en el interior (no hay carga), así que lo **atraviesan** de lado a lado. Pero entonces habría líneas que nacen/mueren en **cargas de la superficie**, y esas cargas superficiales sentirían un campo tangencial que las movería, contradiciendo el equilibrio.

$$
\boxed{\mathbf{E} = 0 \quad\text{y}\quad Q_{\text{neta}} = 0 \quad\text{en todo el interior del conductor}}
$$
