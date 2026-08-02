# Resumen Clase 3 — Campo Eléctrico, Comparación de Fuerzas y Límites de Distribuciones

---

## Índice

1. [Límites del problema de la barra cargada](#1-límites-del-problema-de-la-barra-cargada)
   - [1.1 Límite de gran distancia (D ≫ L)](#11-límite-de-gran-distancia-d--l)
   - [1.2 Límite de pequeña distancia (D ≪ L)](#12-límite-de-pequeña-distancia-d--l)
2. [Cascarón esférico cargado](#2-cascarón-esférico-cargado)
   - [2.1 Resultado para puntos fuera del cascarón](#21-resultado-para-puntos-fuera-del-cascarón)
   - [2.2 Resultado para puntos dentro del cascarón](#22-resultado-para-puntos-dentro-del-cascarón)
3. [Comparación de fuerzas fundamentales](#3-comparación-de-fuerzas-fundamentales)
   - [3.1 Fuerza eléctrica vs. gravitatoria en el átomo de hidrógeno](#31-fuerza-eléctrica-vs-gravitatoria-en-el-átomo-de-hidrógeno)
   - [3.2 Repulsión electrostática entre protones en el núcleo](#32-repulsión-electrostática-entre-protones-en-el-núcleo)
4. [Introducción al concepto de campo](#4-introducción-al-concepto-de-campo)
   - [4.1 Definición general](#41-definición-general)
   - [4.2 Ejemplos de campos en física](#42-ejemplos-de-campos-en-física)
   - [4.3 Motivación: necesidad de descripción local](#43-motivación-necesidad-de-descripción-local)
5. [Campo eléctrico](#5-campo-eléctrico)
   - [5.1 Definición](#51-definición)
   - [5.2 Carga de prueba y límite q₀ → 0](#52-carga-de-prueba-y-límite-q₀--0)
   - [5.3 Campo de una carga puntual](#53-campo-de-una-carga-puntual)
   - [5.4 Principio de superposición](#54-principio-de-superposición)
   - [5.5 Ejemplo: dipolo eléctrico](#55-ejemplo-dipolo-eléctrico)

---

## 1. Límites del problema de la barra cargada

Retomando el problema de Clase 2: barra de longitud $L$ con densidad lineal uniforme $\lambda$, carga puntual $q_0$ sobre el plano bisector a distancia $D$.

Resultado obtenido:

$$
F_x = \frac{q_0 \lambda L}{4\pi\varepsilon_0 \, D\sqrt{D^2 + (L/2)^2}}
$$

### 1.1 Límite de gran distancia ($D \gg L$)

Cuando la carga de prueba está muy alejada ($D \gg L$):

$$
\sqrt{D^2 + (L/2)^2} \approx D
$$

$$
F_x \approx \frac{q_0 \lambda L}{4\pi\varepsilon_0 \, D^2} = \frac{q_0 Q}{4\pi\varepsilon_0 \, D^2}
$$

donde $Q = \lambda L$ es la carga total de la barra. La barra se comporta como una **carga puntual**. Esto es esperable: desde muy lejos, el tamaño del objeto es imperceptible.

### 1.2 Límite de pequeña distancia ($D \ll L$)

Cuando la carga de prueba está muy cerca ($D \ll L$):

$$
\sqrt{D^2 + (L/2)^2} \approx L/2
$$

$$
F_x \approx \frac{q_0 \lambda}{4\pi\varepsilon_0 \, D} \cdot \frac{L}{L/2} = \frac{q_0 \lambda}{2\pi\varepsilon_0 \, D}
$$

- La fuerza **decrece como $1/D$** (no como $1/D^2$).
- Esto es consistente con una **distribución infinita**: al estar muy cerca, la barra parece infinitamente larga, y la fuerza no decae tan rápido.
- No hay contradicción con los límites, ya que $D \gg L$ y $D \ll L$ son regímenes mutuamente excluyentes.

---

## 2. Cascarón esférico cargado

Se considera un **cascarón esférico hueco** de radio $R$, con densidad superficial de carga uniforme, y carga total $Q$. Se coloca una carga puntual $q_0$ a una distancia $r$ del centro.

El resultado (que se probará más adelante mediante ley de Gauss) es:

### 2.1 Resultado para puntos fuera del cascarón ($r > R$)

$$
F = \frac{q_0 Q}{4\pi\varepsilon_0 \, r^2}
$$

El cascarón esférico se comporta **exactamente como una carga puntual** ubicada en el centro, para puntos exteriores. La dirección es radial (repulsiva si $q_0 Q > 0$, atractiva si $q_0 Q < 0$), y por simetría está sobre el eje que une el centro con $q_0$.

### 2.2 Resultado para puntos dentro del cascarón ($r < R$)

$$
F = 0
$$

Dentro del cascarón esférico, la **fuerza neta es cero**. Esto es sorprendente: aunque algunas partes de la esfera están más cerca que otras, la compensación geométrica es exacta. Una carga colocada en el interior no experimenta fuerza neta del cascarón.

> Estos resultados se demostrarán formalmente en clases posteriores usando la **ley de Gauss**, que simplifica enormemente estos cálculos.

---

## 3. Comparación de fuerzas fundamentales

### 3.1 Fuerza eléctrica vs. gravitatoria en el átomo de hidrógeno

**Datos del átomo de hidrógeno:**
- Distancia promedio protón-electrón: $a_0 = 5.3 \times 10^{-11}$ m (radio de Bohr)
- Masa del protón: $m_p = 1.67 \times 10^{-27}$ kg
- Masa del electrón: $m_e = 9.11 \times 10^{-31}$ kg
- El electrón es $\sim 4$ órdenes de magnitud más liviano que el protón

**Fuerza eléctrica (módulo):**

$$
F_e = \frac{1}{4\pi\varepsilon_0} \frac{e^2}{a_0^2} \approx 8.2 \times 10^{-8} \text{ N}
$$

**Fuerza gravitatoria (módulo):**

$$
F_g = G \frac{m_p m_e}{a_0^2} \approx 3.6 \times 10^{-47} \text{ N}
$$

**Comparación:**

$$
\frac{F_e}{F_g} \approx 2.3 \times 10^{39}
$$

La fuerza eléctrica es **~40 órdenes de magnitud mayor** que la gravitatoria a escala atómica. Por esto la gravedad es completamente despreciable en fenómenos atómicos y subatómicos.

**¿Por qué entonces la gravedad domina en la vida cotidiana?**
- Los objetos cotidianos son **neutros** (igual número de cargas positivas y negativas).
- Las fuerzas eléctricas se cancelan a larga distancia.
- La gravedad siempre es atractiva y se acumula con la masa.
- En el experimento del peine y los papelitos, la fuerza electrostática y la gravitatoria son comparables (por eso papeles grandes no se levantan).

### 3.2 Repulsión electrostática entre protones en el núcleo

**Núcleo de hierro:** radio típico $\sim 4 \times 10^{-15}$ m.

**Repulsión entre dos protones:**
$$
F_{pp} = \frac{1}{4\pi\varepsilon_0} \frac{e^2}{r_{\text{núcleo}}^2} \approx 14 \text{ N}
$$

¡14 N es una fuerza macroscópica (como el peso de un objeto de ~1.4 kg) concentrada en dos partículas de $10^{-15}$ m!

**Implicación:** si solo existiera la fuerza eléctrica, el núcleo se desintegraría instantáneamente. Debe existir la **fuerza nuclear fuerte**, de intensidad comparable, que mantiene unidos a protones y neutrones.

**Inestabilidad de núcleos grandes:** La fuerza nuclear fuerte decrece muy rápido con la distancia (alcance corto). En núcleos grandes, los protones en los extremos experimentan principalmente repulsión electrostática sin suficiente fuerza fuerte, lo que causa radiactividad y fisión nuclear.

---

## 4. Introducción al concepto de campo

### 4.1 Definición general

Un **campo** es una **propiedad física que depende de la posición** (y eventualmente del tiempo):

$$
\phi = \phi(\mathbf{r}, t)
$$

Matemáticamente, es una función de un espacio (típicamente $\mathbb{R}^3$ o $\mathbb{R}^4$ si se incluye el tiempo) en otro espacio (escalares, vectores, tensores).

### 4.2 Ejemplos de campos en física

**Campos escalares** (un número por punto):
- **Temperatura**: en una sala con estufa, la temperatura varía con la posición.
- **Presión**: aunque uniforme en un salón, varía en la atmósfera o en fluidos.
- **Densidad** (de masa o de carga): $\rho(\mathbf{r})$.

**Campos vectoriales** (un vector por punto):
- **Velocidad de un fluido**: el agua al esquivar un pilar de un puente tiene velocidades diferentes en cada punto.
- **Campo de fuerzas**: la fuerza gravitatoria del Sol en diferentes puntos del espacio.
- **Campo eléctrico** $\mathbf{E}(\mathbf{r})$: objeto central de esta clase.

**Campos tensoriales** (objetos más complejos):
- **Campo de tensiones** en un material deformado: no es escalar ni vectorial.

### 4.3 Motivación: necesidad de descripción local

**Problema de la interacción a distancia:**
- En la ley de Coulomb, dos cargas interactúan directamente sin necesidad de campo.
- Esto funciona bien en **electrostática** (cargas fijas, situación estacionaria).
- Pero falla si las cargas se mueven: ¿cómo sabe una carga dónde está la otra "ahora"?

**Ejemplo de la estufa móvil:**
- Si una estufa se mueve por el salón, la temperatura en un punto no depende de dónde está la estufa ahora, sino de dónde estuvo (el calor se difunde con retardo).
- Sin campo, habría que conocer toda la historia pasada de la estufa.
- Con campo, basta con conocer la temperatura local aquí y ahora.

**Conclusión:** el campo permite una **descripción local** ("aquí y ahora"), esencial cuando hay dependencia temporal o cuando la información no se propaga instantáneamente.

---

## 5. Campo eléctrico

### 5.1 Definición

El **campo eléctrico** $\mathbf{E}(\mathbf{r})$ en un punto del espacio se define como la **fuerza por unidad de carga** que experimentaría una carga de prueba colocada en ese punto:

$$
\boxed{\mathbf{E}(\mathbf{r}) = \lim_{q_0 \to 0} \frac{\mathbf{F}(\mathbf{r})}{q_0}}
$$

- Es un **campo vectorial**.
- No depende de la carga de prueba $q_0$ (se cancela en el cociente).
- Unidades: N/C (newton por coulomb), o V/m (volt por metro).

### 5.2 Carga de prueba y límite $q_0 \to 0$

**¿Por qué tomar $q_0 \to 0$?**

Si la carga de prueba es demasiado grande, **perturba** la distribución original:

- En un **conductor**, $q_0$ induce polarización: las cargas del conductor se reacomodan.
- La fuerza resultante no es puramente la del campo original, sino que incluye efectos de la polarización inducida.
- Estos efectos son proporcionales a $q_0^2$ (no lineales), por lo que al dividir por $q_0$ y tomar $q_0 \to 0$, desaparecen.

> **Nota conceptual:** Si todas las cargas que generan el campo están fijas (no se pueden mover), el límite $q_0 \to 0$ es irrelevante: el campo está bien definido para cualquier $q_0$.

**Problema de la cuantización:** Estrictamente, no se puede tomar $q_0 \to 0$ porque la carga está cuantizada ($q_0 = Ne$). Esto es una idealización matemática del continuo.

### 5.3 Campo de una carga puntual

Para una **carga puntual $Q$** en el origen:

$$
\mathbf{E}(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r^2} \hat{\mathbf{r}}
$$

**Módulo:**

$$
|\mathbf{E}| = \frac{|Q|}{4\pi\varepsilon_0 \, r^2}
$$

**Dirección y sentido:**
- Si $Q > 0$: el campo **sale** de la carga (radial hacia afuera).
- Si $Q < 0$: el campo **entra** hacia la carga (radial hacia adentro).

**Verificación:** el sentido del campo es independiente del signo de la carga de prueba $q_0$ (gracias a la definición $\mathbf{E} = \mathbf{F}/q_0$).

### 5.4 Principio de superposición

Para un sistema de $N$ cargas puntuales:

$$
\mathbf{E}(\mathbf{r}) = \sum_{i=1}^N \mathbf{E}_i(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \sum_{i=1}^N \frac{Q_i}{|\mathbf{r} - \mathbf{r}_i|^2} \hat{\mathbf{r}}_i
$$

El campo eléctrico total es la **suma vectorial** de los campos individuales. Esto es consecuencia directa del principio de superposición para fuerzas.

### 5.5 Ejemplo: dipolo eléctrico

**Configuración:**
- Carga $+Q$ en $(0, +a)$ y carga $-Q$ en $(0, -a)$ sobre el eje $Y$.
- Punto de observación sobre el **eje $X$** (plano bisector), a distancia $x$ del origen.

**Análisis de simetría:**
- Por simetría, las componentes $X$ de los campos de las dos cargas se cancelan (son opuestas); las componentes $Y$ se suman.
- El campo resultante apunta en la dirección $-Y$ (hacia abajo, de la carga positiva a la negativa).
- Los módulos son iguales: $|E_1| = |E_2| = \frac{Q}{4\pi\varepsilon_0 (x^2 + a^2)}$.

**Dirección del campo:** según el eje $Z$ (perpendicular a la línea que une las cargas), hacia la carga negativa.

> El cálculo del módulo se completará en la próxima clase.