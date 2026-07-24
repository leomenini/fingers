# Resumen Clase 28 — Experimento de Doble Rendija, Difracción, Coherencia e Intensidad

---

## Índice

1. [El experimento de doble rendija](#1-el-experimento-de-doble-rendija)
   - [1.1 Hipótesis: campo lejano y diferencia de caminos](#11-hipótesis-campo-lejano-y-diferencia-de-caminos)
   - [1.2 Suma de las dos ondas](#12-suma-de-las-dos-ondas)
   - [1.3 Condiciones de máximo y mínimo](#13-condiciones-de-máximo-y-mínimo)
   - [1.4 Aproximación de ángulos pequeños](#14-aproximación-de-ángulos-pequeños)
   - [1.5 Número finito de máximos](#15-número-finito-de-máximos)
2. [Difracción por una rendija](#2-difracción-por-una-rendija)
3. [El experimento de Young y la coherencia](#3-el-experimento-de-young-y-la-coherencia)
   - [3.1 El experimento de Young (1801)](#31-el-experimento-de-young-1801)
   - [3.2 Coherencia cuantitativa: el término de interferencia](#32-coherencia-cuantitativa-el-término-de-interferencia)
4. [Cálculo de la intensidad](#4-cálculo-de-la-intensidad)

---

## 1. El experimento de doble rendija

Una onda plana **monocromática** de longitud de onda $\lambda$ incide **normal** sobre una pantalla con **dos rendijas** separadas $d$; a distancia $D$ hay una pantalla de observación. Desde el punto medio se define el ángulo $\theta$ hacia un punto $P$. El resultado antiintuitivo: dos fuentes de luz (una por rendija) generan, en ciertas zonas, **oscuridad** en lugar de más luz. Es un fenómeno **general de las ondas** (funciona con agua en una cubeta, o con sonido de dos parlantes: en algunas zonas de la sala no se escucha nada).

### 1.1 Hipótesis: campo lejano y diferencia de caminos

Dos suposiciones:

1. **Campo lejano:** $D \gg d$ (las distancias $R_1$, $R_2$ desde cada rendija a $P$ son mucho mayores que $d$). Entonces los dos rayos hacia $P$ son casi **paralelos**.
2. Se **ignoran los aspectos vectoriales** (se describe la onda con una sola componente del campo eléctrico, sin transversalidad).

Con los rayos paralelos, la **diferencia de caminos** entre ambos es (geometría del triángulo rectángulo en las rendijas):

$$
\boxed{R_2 - R_1 \approx d\,\sin\theta}
$$

### 1.2 Suma de las dos ondas

La onda en $P$ es la superposición (amplitudes ≈ iguales, onda incidente plana, monocromática y **coherente** — desfasaje constante):

$$
E = A\sin(kR_1 - \omega t) + A\sin(kR_2 - \omega t)
$$

Usando la identidad de suma de senos (escribiendo cada fase como $\phi_1 + \Delta\phi/2 \mp \Delta\phi/2$, con $\Delta\phi = k(R_2 - R_1)$, y desarrollando: el término en coseno se cancela por signos opuestos y el otro aparece dos veces):

$$
E = 2A\,\cos\!\left(\frac{k(R_2 - R_1)}{2}\right)\sin\!\left(kR_1 - \omega t + \frac{k(R_2-R_1)}{2}\right)
$$

Es una onda sinusoidal de **amplitud** $2A\cos\!\big(k(R_2-R_1)/2\big)$.

### 1.3 Condiciones de máximo y mínimo

La amplitud es **máxima** cuando $\cos(\cdot) = \pm 1$, es decir cuando su argumento es $0$ o múltiplo de $\pi$; combinando el $\pm 1$, la condición limpia es:

$$
k(R_2 - R_1) = 2\pi n
$$

Con $k = 2\pi/\lambda$, se simplifica el $2\pi$: la diferencia de caminos es un **múltiplo entero de $\lambda$**. Para la geometría de las rendijas ($R_2 - R_1 = d\sin\theta$):

$$
\boxed{d\,\sin\theta = n\,\lambda \qquad (\text{máximos})}
$$

La amplitud es **mínima** (cero) cuando el coseno se anula, es decir su argumento vale $\pi/2 + n\pi$; equivalentemente $k(R_2-R_1) = \pi + 2\pi n$, o sea la diferencia de caminos es un múltiplo **impar** de $\lambda/2$:

$$
\boxed{d\,\sin\theta = \left(n + \tfrac{1}{2}\right)\lambda \qquad (\text{mínimos})}
$$

> **Resultado general:** la superposición de dos ondas de igual amplitud es máxima cuando la **diferencia de fases** es múltiplo de $2\pi$ (⇔ diferencia de caminos múltiplo de $\lambda$). El $d\sin\theta$ es específico de la geometría de doble rendija.

### 1.4 Aproximación de ángulos pequeños

Máximos y mínimos están **intercalados** (franjas oscuras y claras alternadas) y **equiespaciados en diferencia de caminos**, pero **no en ángulo** en general. Cerca del eje ($\theta$ pequeño), $\sin\theta \approx \tan\theta = y/D$ (con $y$ la posición en la pantalla). La condición de máximo $d\,\tan\theta \approx n\lambda$ da:

$$
\boxed{y_{\max} = \frac{D\,\lambda}{d}\,n} \qquad y_{\min} = \frac{D\,\lambda}{d}\left(n + \tfrac{1}{2}\right)
$$

Cerca del eje las franjas están **equiespaciadas**, con separación entre consecutivas $D\lambda/d$; los mínimos caen justo a mitad de camino entre máximos.

### 1.5 Número finito de máximos

La condición $\sin\theta = n\lambda/d$ solo tiene solución si $n\lambda/d \le 1$ (el seno está acotado por 1). Siempre existe el **máximo central** ($n=0$, $\theta=0$). Para tener al menos un **máximo lateral** se necesita:

$$
\boxed{\frac{d}{\lambda} \ge 1 \quad (\lambda \le d)}
$$

El último máximo corresponde a $\theta \to \pi/2$, es decir $n_{\max} \approx \lfloor d/\lambda\rfloor$ (parte entera). Hay un número **finito** de máximos, cada vez más espaciados hacia los lados (la fórmula equiespaciada solo vale en la región central).

---

## 2. Difracción por una rendija

En el experimento real (láser verde ~450 nm) aparecen, además de los mínimos de doble rendija, **zonas más oscuras y espaciadas** debidas a un segundo efecto: la **difracción por una rendija simple** (una rendija de ancho no despreciable interfiere **consigo misma**).

**Modelo:** una rendija de ancho $a$ se aproxima por dos "agujeros" separados $a/2$ (centro y borde). Un rayo del borde y otro del centro, hacia el mismo punto, tienen diferencia de caminos $\frac{a}{2}\sin\theta$. Si esa diferencia es $\lambda/2$, **interfieren destructivamente**. Emparejando de a dos rayos (cada uno de la mitad superior con su compañero de la mitad inferior), **todos** se cancelan de a pares → **mínimo**. La condición general de mínimos de rendija simple (múltiplos impares de $\lambda/2$ en la diferencia de caminos, que sumada sobre pares da):

$$
\boxed{a\,\sin\theta = m\,\lambda \qquad (\text{mínimos de rendija simple}, \ m \neq 0)}
$$

Los **dos efectos se superponen**: los mínimos finos y frecuentes son de la **doble rendija** ($d$), y las envolventes oscuras más anchas y espaciadas son de la **rendija simple** ($a$). Se mostraron rendijas de distintos anchos, rendijas variables, y aperturas 2D (cuadrado, hexágono, círculo) que producen patrones combinados en ambas direcciones.

> **¿Por qué un láser?** (1) Es una fuente **potente** (necesaria en una sala no oscurecida). (2) Sobre todo, es muy **coherente**: longitud de onda bien definida y frente de onda que oscila en fase en una región amplia (que abarca las dos rendijas). Con una lamparita normal el experimento es muy difícil.

---

## 3. El experimento de Young y la coherencia

### 3.1 El experimento de Young (1801)

Young quería probar que la luz es una **onda** mostrando interferencia, pero no tenía fuentes coherentes (no existían láseres). Su truco: colocó **antes** de la doble rendija una pantalla con **una rendija fina**. Al ser finita, todos los puntos de esa rendija son esencialmente **el mismo punto**, y un punto es coherente **consigo mismo**. Así, la luz que emerge (incoherente en origen, una vela o fogata) se vuelve **coherente**.

> **Compromiso:** una rendija infinitamente fina daría coherencia perfecta pero **sin intensidad** (no pasa luz). Young balanceó ambos requerimientos: fuente grande + rendija bastante fina. Si la segunda pantalla está suficientemente lejos, la onda que llega es aproximadamente **plana** y coherente. Un logro notable para hace más de dos siglos.

### 3.2 Coherencia cuantitativa: el término de interferencia

Sección 15.3. Dos campos superpuestos con un desfasaje $\phi$:

$$
E = E_1 + E_2 = A\sin(kx - \omega t) + B\sin(kx - \omega t + \phi)
$$

La **intensidad** es proporcional al cuadrado del campo **promediado en el tiempo**:

$$
I \propto \langle E^2\rangle = \langle E_1^2\rangle + \langle E_2^2\rangle + 2\langle E_1 E_2\rangle
$$

$$
\frac{I}{C} = \frac{I_1}{C} + \frac{I_2}{C} + \underbrace{2\langle E_1 E_2\rangle}_{\text{término de interferencia}}
$$

Nuestra experiencia cotidiana (las intensidades se suman) corresponde a **término de interferencia nulo**. Analicemos ese término cuando la fase $\phi$ **oscila mucho** (fuentes incoherentes) frente al tiempo de medida del aparato. Desarrollando $E_1 E_2 = AB\,\sin(kx-\omega t)\sin(kx-\omega t + \phi)$ y promediando **en la fase**:

$$
\langle E_1 E_2\rangle_\phi \propto \langle\cos\phi\rangle_\phi \ (\cdots) + \langle\sin\phi\rangle_\phi \ (\cdots)
$$

Si $\phi$ varía de forma **aleatoria**, $\langle\cos\phi\rangle = \langle\sin\phi\rangle = 0$ (tantos valores positivos como negativos) → el **término de interferencia se anula**:

$$
\boxed{I = I_1 + I_2 \qquad (\text{fuentes incoherentes})}
$$

**Esta es la razón** por la que dos lamparitas no dan zonas oscuras: cada una tiene un tiempo típico de autocoherencia de ~$10^{-8}$ s, y nuestro ojo (o cualquier detector lento) promedia sobre millones de esas oscilaciones aleatorias.

> Si la fase se mantiene **fija** (fuentes coherentes, como en el experimento con láser), **no** hay que promediar: el término de interferencia sobrevive y aparecen las franjas. Se necesita que el **tiempo de autocoherencia** sea al menos comparable al tiempo de medida. Además de la coherencia **temporal**, importa la **coherencia espacial** (distintos puntos del frente en fase entre sí) — lo que Young logró con la rendija fina y hoy dan los láseres.

---

## 4. Cálculo de la intensidad

Sección 15.4. Con rendijas **muy finas** (difracción ignorada), el campo emitido por cada rendija decae como $1/R$ (como una onda esférica/cilíndrica). El campo total en $P$:

$$
E = \frac{A}{R_1}\sin(kR_1 - \omega t) + \frac{A}{R_2}\sin(kR_2 - \omega t)
$$

**Aproximación de campo lejano:** en el **prefactor** $R_2 \approx R_1$ (la diferencia es de orden $d$, despreciable), pero en la **fase** hay que conservar $R_2 - R_1$ (es lo que genera la interferencia). Sumando los senos (mismo cálculo que en §1.2) y tomando el **cuadrado promediado en el tiempo** ($\langle\sin^2\rangle = 1/2$):

$$
I = \frac{2A^2}{R_1^2}\cos^2\!\left(\frac{k(R_2-R_1)}{2}\right)
$$

Normalizando por la intensidad de **una sola rendija** ($I_1 = C A^2/(2R_1^2)$), se cancelan $C$ y $R_1^2$:

$$
\boxed{\frac{I}{I_1} = 4\cos^2\!\left(\frac{k(R_2 - R_1)}{2}\right)}
$$

o, con $I_0$ la intensidad en el centro ($\theta = 0$, donde el coseno vale 1):

$$
I = I_0\,\cos^2\!\left(\frac{k\,d\,\sin\theta}{2}\right)
$$

**Observaciones:**

- El coseno se **anula** en las posiciones de mínimo ya calculadas (zonas oscuras).
- En los máximos, la intensidad **no es el doble** de la de una rendija, sino el **cuádruple** ($1 + 1 = 4$). La amplitud se duplica y la intensidad va con el **cuadrado** de la amplitud → factor 4. La luz en los máximos es realmente **cuatro veces más brillante**.
- Hay una dependencia **suave** adicional con $1/R_1^2$ (la intensidad decae hacia los bordes laterales), distinta del fenómeno de interferencia; se desprecia en la región central o se elimina normalizando por $I_1$.

*Con el cálculo completo de la intensidad del experimento de doble rendija cierra el curso de Física III.*
