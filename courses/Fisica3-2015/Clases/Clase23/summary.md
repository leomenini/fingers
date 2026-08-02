# Notas de Clase 2 — Circuitos de Corriente Alterna, Potencia, Transformador y Ecuaciones de Maxwell

---

## Índice

1. [Potencia en circuitos de CA](#1-potencia-en-circuitos-de-ca)
   - [1.1 Limitación del método de fasores](#11-limitación-del-método-de-fasores)
   - [1.2 Potencia instantánea disipada en una resistencia](#12-potencia-instantánea-disipada-en-una-resistencia)
   - [1.3 Potencia media disipada](#13-potencia-media-disipada)
   - [1.4 Potencia media entregada por la fuente](#14-potencia-media-entregada-por-la-fuente)
   - [1.5 Valores eficaces o RMS](#15-valores-eficaces-o-rms)
   - [1.6 Factor de potencia](#16-factor-de-potencia)
   - [1.7 Verificación de conservación de energía en RLC serie](#17-verificación-de-conservación-de-energía-en-rlc-serie)
   - [1.8 Diagrama fasorial de impedancias](#18-diagrama-fasorial-de-impedancias)
   - [1.9 Potencia media en condensador y bobina](#19-potencia-media-en-condensador-y-bobina)
2. [Paréntesis de trigonometría](#2-paréntesis-de-trigonometría)
   - [2.1 La fórmula que gobierna todas](#21-la-fórmula-que-gobierna-todas)
   - [2.2 Demostraciones clave](#22-demostraciones-clave)
3. [El transformador](#3-el-transformador)
   - [3.1 Estructura básica](#31-estructura-básica)
   - [3.2 Principio de funcionamiento](#32-principio-de-funcionamiento)
   - [3.3 Relación de voltajes](#33-relación-de-voltajes)
   - [3.4 Idealizaciones del transformador ideal](#34-idealizaciones-del-transformador-ideal)
4. [Ecuaciones de Maxwell](#4-ecuaciones-de-maxwell)
   - [4.1 Las cuatro ecuaciones antes de Maxwell](#41-las-cuatro-ecuaciones-antes-de-maxwell)
   - [4.2 Problema con la ley de Ampère](#42-problema-con-la-ley-de-ampère)
   - [4.3 La corrección de Maxwell: corriente de desplazamiento](#43-la-corrección-de-maxwell-corriente-de-desplazamiento)
   - [4.4 Deducción de la constante](#44-deducción-de-la-constante)
   - [4.5 Ecuaciones de Maxwell completas (forma integral)](#45-ecuaciones-de-maxwell-completas-forma-integral)
   - [4.6 Consecuencias fundamentales](#46-consecuencias-fundamentales)

---

## 1. Potencia en circuitos de CA

### 1.1 Limitación del método de fasores

El método de fasores (exponenciales complejas) funciona para **ecuaciones lineales**:

- La ecuación diferencial del circuito RLC es lineal en \( I(t) \).
- Podemos sustituir \( I(t) = \text{Re}[\hat{I} e^{j\omega t}] \), resolver la ecuación compleja y tomar parte real al final.

**Problema con la potencia**: la potencia **no es lineal** en \( I \).

\[
P_R(t) = R\, I(t)^2
\]

\[
\text{Re}[z]^2 \neq \text{Re}[z^2]
\]

Por lo tanto, **no se puede** calcular la potencia simplemente tomando parte real de un fasor al cuadrado. Hay que trabajar con las cantidades reales.

> ⚠️ **Error común en parciales y exámenes**: aplicar fasores directamente al calcular potencia. Hay que volver a la expresión real de la corriente.

---

### 1.2 Potencia instantánea disipada en una resistencia

Dada la corriente en régimen permanente:

\[
I(t) = I_m \cos(\omega t - \phi)
\]

La potencia instantánea disipada en una resistencia \( R \) es:

\[
P_R(t) = R\, I(t)^2 = R\, I_m^2 \cos^2(\omega t - \phi)
\]

---

### 1.3 Potencia media disipada

En CA no interesa la potencia instantánea (la corriente oscila a 50/60 Hz), sino la **potencia promedio en un período**.

\[
\langle P_R \rangle = \frac{1}{T} \int_0^T P_R(t)\, dt
\]

Usando la identidad trigonométrica:

\[
\cos^2 x = \frac{1 + \cos 2x}{2}
\]

\[
\begin{aligned}
\langle P_R \rangle &= R\, I_m^2 \left\langle \frac{1 + \cos(2\omega t - 2\phi)}{2} \right\rangle \\
&= \frac{1}{2} R\, I_m^2
\end{aligned}
\]

ya que \( \langle \cos(2\omega t - 2\phi) \rangle = 0 \).

**Resultado clave:**

\[
\boxed{\langle P_R \rangle = \frac{1}{2} R\, I_m^2}
\]

- Se parece a la potencia en DC (\( P = R I^2 \)), pero con un factor \( 1/2 \) y usando la amplitud máxima \( I_m \).

---

### 1.4 Potencia media entregada por la fuente

La FEM de la fuente es:

\[
\mathcal{E}(t) = \mathcal{E}_0 \cos(\omega t)
\]

La corriente es:

\[
I(t) = I_m \cos(\omega t - \phi)
\]

La **potencia instantánea entregada** es:

\[
P_{\mathcal{E}}(t) = \mathcal{E}(t)\, I(t) = \mathcal{E}_0 I_m \cos(\omega t) \cos(\omega t - \phi)
\]

Desarrollando \( \cos(\omega t - \phi) = \cos\omega t \cos\phi + \sin\omega t \sin\phi \):

\[
P_{\mathcal{E}}(t) = \mathcal{E}_0 I_m \left[ \cos^2\omega t \cos\phi + \cos\omega t \sin\omega t \sin\phi \right]
\]

Promediando en un período:

- \( \langle \cos^2\omega t \rangle = 1/2 \)
- \( \langle \cos\omega t \sin\omega t \rangle = \langle \frac{1}{2} \sin 2\omega t \rangle = 0 \)

**Resultado clave:**

\[
\boxed{\langle P_{\mathcal{E}} \rangle = \frac{1}{2} \mathcal{E}_0 I_m \cos\phi}
\]

El término \( \cos\phi \) es el **factor de potencia**.

---

### 1.5 Valores eficaces o RMS

Para eliminar el factor \( 1/2 \) se definen los **valores RMS** (Root Mean Square):

\[
\boxed{I_{\text{rms}} = \frac{I_m}{\sqrt{2}}}, \qquad \boxed{\mathcal{E}_{\text{rms}} = \frac{\mathcal{E}_0}{\sqrt{2}}}
\]

En términos RMS, las expresiones quedan **idénticas a las de DC**:

\[
\boxed{\langle P_R \rangle = R\, I_{\text{rms}}^2}
\]

\[
\boxed{\langle P_{\mathcal{E}} \rangle = \mathcal{E}_{\text{rms}}\, I_{\text{rms}} \cos\phi}
\]

> Ejemplo: el voltaje de la pared (220 V en Uruguay) es el valor RMS. El valor máximo es \( 220 \times \sqrt{2} \approx 311 \, \text{V} \).

---

### 1.6 Factor de potencia

\[
\boxed{\text{factor de potencia} = \cos\phi}
\]

- \( \phi \) es el desfasaje entre la corriente y la FEM de la fuente.
- \( \cos\phi = 1 \) cuando \( \phi = 0 \) (circuito resistivo puro, corriente en fase).
- \( \cos\phi = 0 \) cuando \( \phi = \pm \pi/2 \) (circuito puramente reactivo, no se disipa potencia neta).
- Un factor de potencia bajo significa que se necesita más corriente para entregar la misma potencia útil → pérdidas en las líneas de transmisión.

---

### 1.7 Verificación de conservación de energía en RLC serie

Para el circuito RLC serie (clase anterior):

\[
I_m = \frac{\mathcal{E}_0}{\sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}}
\]

\[
\tan\phi = \frac{\omega L - \frac{1}{\omega C}}{R}
\]

Usando la identidad \( 1 + \tan^2\phi = 1 / \cos^2\phi \):

\[
\cos\phi = \frac{R}{\sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}}
\]

Sustituyendo en la expresión de potencia entregada:

\[
\begin{aligned}
\langle P_{\mathcal{E}} \rangle &= \frac{1}{2} \mathcal{E}_0 I_m \cos\phi \\
&= \frac{1}{2} \mathcal{E}_0 \cdot \frac{\mathcal{E}_0}{\sqrt{R^2 + (\omega L - 1/\omega C)^2}} \cdot \frac{R}{\sqrt{R^2 + (\omega L - 1/\omega C)^2}} \\
&= \frac{1}{2} \frac{\mathcal{E}_0^2 R}{R^2 + (\omega L - 1/\omega C)^2} \\
&= \frac{1}{2} R I_m^2 = \langle P_R \rangle
\end{aligned}
\]

**Conclusión**: la potencia media entregada por la fuente es igual a la potencia media disipada en la resistencia (como debe ser, ya que condensador y bobina no disipan potencia en promedio).

---

### 1.8 Diagrama fasorial de impedancias

La impedancia compleja total del circuito RLC serie es:

\[
\hat{Z} = R + j\omega L + \frac{1}{j\omega C} = R + j\left(\omega L - \frac{1}{\omega C}\right)
\]

En el plano complejo:

| Elemento | Eje | Valor |
|----------|-----|-------|
| Resistencia | Real (+x) | \( R \) |
| Bobina | Imaginario positivo (+y) | \( \omega L \) |
| Condensador | Imaginario negativo (-y) | \( -1/\omega C \) |

La suma vectorial da \( \hat{Z} \), con:

- **Módulo**: \( |Z| = \sqrt{R^2 + (\omega L - 1/\omega C)^2} \)
- **Argumento**: \( \phi = \arctan\left(\frac{\omega L - 1/\omega C}{R}\right) \)

Y de esta representación se ve directamente:

\[
\cos\phi = \frac{R}{|Z|} \quad\text{(cateto adyacente / hipotenusa)}
\]

---

### 1.9 Potencia media en condensador y bobina

**Ejercicio propuesto en clase** (se deja al estudiante):

Demostrar que la potencia media en un condensador es cero:

\[
P_C(t) = V_C(t)\, I(t) = \frac{Q(t)}{C}\, I(t)
\]

\[
\langle P_C \rangle = 0
\]

Y análogamente para la bobina:

\[
P_L(t) = V_L(t)\, I(t) = L \frac{dI}{dt}\, I(t)
\]

\[
\langle P_L \rangle = 0
\]

**Interpretación física**: condensador y bobina almacenan y devuelven energía alternadamente, pero en promedio no consumen ni generan energía neta. Solo la resistencia disipa energía.

---

## 2. Paréntesis de trigonometría

### 2.1 La fórmula que gobierna todas

El profesor enfatiza que **toda la trigonometría** se puede derivar de una sola fórmula:

\[
\boxed{e^{ix} = \cos x + i \sin x}
\]

(Fórmula de Euler / De Moivre)

Combinando con propiedades de exponenciales (\( e^{a+b} = e^a e^b \)) se pueden obtener todas las identidades trigonométricas sin memorizarlas.

### 2.2 Demostraciones clave

**Fórmula del coseno cuadrado:**

\[
\begin{aligned}
e^{i2x} &= (e^{ix})^2 \\
\cos 2x + i\sin 2x &= (\cos x + i\sin x)^2 \\
&= \cos^2 x - \sin^2 x + i(2\sin x \cos x)
\end{aligned}
\]

Igualando partes real e imaginaria:

\[
\boxed{\cos 2x = \cos^2 x - \sin^2 x}, \qquad \boxed{\sin 2x = 2\sin x \cos x}
\]

Combinando con \( 1 = \sin^2 x + \cos^2 x \):

\[
\boxed{\cos^2 x = \frac{1 + \cos 2x}{2}}
\]

**Fórmula de suma de ángulos:**

\[
\begin{aligned}
e^{i(a+b)} &= e^{ia} e^{ib} \\
\cos(a+b) + i\sin(a+b) &= (\cos a + i\sin a)(\cos b + i\sin b) \\
&= (\cos a \cos b - \sin a \sin b) + i(\cos a \sin b + \sin a \cos b)
\end{aligned}
\]

\[
\boxed{\cos(a+b) = \cos a \cos b - \sin a \sin b}
\]
\[
\boxed{\sin(a+b) = \sin a \cos b + \cos a \sin b}
\]

**Para obtener \( \cos 3x \), \( \sin 3x \), etc.**: simplemente desarrollar \( e^{i3x} = (e^{ix})^3 \), etc.

---

## 3. El transformador

### 3.1 Estructura básica

- **Núcleo de hierro**: material ferromagnético de alta permeabilidad (\( \mu_r \sim 4000 \)), que confina el flujo magnético.
- **Bobina primaria**: \( N_p \) vueltas, conectada a la fuente de CA.
- **Bobina secundaria**: \( N_s \) vueltas, conectada a la carga.

```
        Núcleo de hierro
     ┌──────────────────┐
     │                  │
     │  ┌──┐    ┌──┐   │
  ───┤  │Np│    │Ns│   ├───
     │  └──┘    └──┘   │
     │                  │
     └──────────────────┘
   Primario        Secundario
```

### 3.2 Principio de funcionamiento

1. La corriente alterna en el primario genera un flujo magnético variable \( \Phi(t) \) en el núcleo.
2. El núcleo de hierro confina el flujo, haciendo que **prácticamente todo el flujo pase por ambas bobinas**.
3. El flujo variable induce una FEM en el secundario (ley de Faraday).
4. Como el flujo por espira es el mismo en primario y secundario, la FEM inducida es proporcional al número de vueltas.

### 3.3 Relación de voltajes

\[
\Phi_{\text{espira}}^{(p)} = \Phi_{\text{espira}}^{(s)} \quad\Rightarrow\quad \frac{d\Phi}{dt} \text{ igual para ambas}
\]

La FEM inducida en cada bobina (sin signo para magnitudes):

\[
V_p = N_p \frac{d\Phi}{dt}, \qquad V_s = N_s \frac{d\Phi}{dt}
\]

Dividiendo:

\[
\boxed{\frac{V_p}{V_s} = \frac{N_p}{N_s}}
\]

**Ejemplo**: para bajar de 220 V a 12 V:

\[
\frac{N_p}{N_s} = \frac{220}{12} \approx 18.3
\]

Si el primario tiene 220 vueltas, el secundario necesita 12 vueltas.

### 3.4 Idealizaciones del transformador ideal

- **Sin pérdidas de flujo**: todo el flujo magnético está confinado en el núcleo (aproximación válida porque \( \mu_{\text{hierro}} / \mu_{\text{aire}} \sim 4000 \), la pérdida es fracción de ~1/4000).
- **Sin resistencia en las bobinas**.
- **Sin pérdidas por corrientes de Foucault** ni **histéresis** (se ven en cursos más avanzados).

---

## 4. Ecuaciones de Maxwell

### 4.1 Las cuatro ecuaciones antes de Maxwell

| Ecuación | Forma integral | Significado físico |
|----------|---------------|-------------------|
| **Ley de Gauss (eléctrica)** | \( \displaystyle \oint_S \vec{E} \cdot d\vec{S} = \frac{Q_{\text{int}}}{\varepsilon_0} \) | Las cargas eléctricas son fuentes de campo eléctrico. |
| **Ley de Gauss (magnética)** | \( \displaystyle \oint_S \vec{B} \cdot d\vec{S} = 0 \) | No existen monopolos magnéticos. El flujo magnético neto a través de superficie cerrada es cero. |
| **Ley de Faraday** | \( \displaystyle \oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \) | Un campo magnético variable induce un campo eléctrico. |
| **Ley de Ampère** | \( \displaystyle \oint_C \vec{B} \cdot d\vec{l} = \mu_0 I \) | Una corriente eléctrica genera un campo magnético. |

### 4.2 Problema con la ley de Ampère

**Inconsistencia al cargar un condensador**:

Consideremos un condensador siendo cargado por una corriente \( I \). Tomamos una curva amperiana \( C \) alrededor del cable, y dos superficies distintas bordeada por \( C \):

- **Superficie \( S_1 \)**: pasa por el cable → la atraviesa la corriente \( I \) → \( \oint \vec{B} \cdot d\vec{l} = \mu_0 I \).
- **Superficie \( S_2 \)**: pasa entre las placas del condensador → **no** la atraviesa corriente alguna → \( \oint \vec{B} \cdot d\vec{l} = 0 \).

¡La ley de Ampère da **dos resultados diferentes** para la misma curva \( C \)! Esto es una **inconsistencia matemática**.

- En **régimen estacionario** (DC) no hay problema porque la corriente es constante y no se acumula carga en el condensador.
- El problema surge porque \( I \) es constante pero la **carga en el condensador varía con el tiempo** → situación no estacionaria.

### 4.3 La corrección de Maxwell: corriente de desplazamiento

Maxwell propuso agregar un término extra a la ley de Ampère, inspirado por simetría con la ley de Faraday (simetría estética, pero también necesaria para la consistencia matemática):

\[
\boxed{\oint_C \vec{B} \cdot d\vec{l} = \mu_0 I + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}}
\]

- **Corriente de desplazamiento**:

\[
\boxed{I_d = \varepsilon_0 \frac{d\Phi_E}{dt}}
\]

con **densidad de corriente de desplazamiento**:

\[
\boxed{\vec{J}_d = \varepsilon_0 \frac{\partial \vec{E}}{\partial t}}
\]

- Este término solo es relevante cuando el campo eléctrico **varía en el tiempo**.
- En situaciones estacionarias, \( d\Phi_E/dt = 0 \) y se recupera la ley de Ampère original.

### 4.4 Deducción de la constante

Para que el resultado no dependa de la superficie, calculamos el flujo eléctrico entre las placas:

\[
E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{A \varepsilon_0} \quad\Rightarrow\quad \Phi_E = E A = \frac{Q}{\varepsilon_0}
\]

Derivando:

\[
\frac{d\Phi_E}{dt} = \frac{1}{\varepsilon_0} \frac{dQ}{dt} = \frac{I}{\varepsilon_0}
\]

Sustituyendo en la ley de Ampère-Maxwell para la superficie \( S_2 \) (entre placas, donde \( I = 0 \)):

\[
\oint \vec{B} \cdot d\vec{l} = \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} = \mu_0 \varepsilon_0 \cdot \frac{I}{\varepsilon_0} = \mu_0 I
\]

¡Que es exactamente el mismo resultado que para \( S_1 \)!

La constante queda determinada **unívocamente** como \( \mu_0 \varepsilon_0 \). No hay libertad de elección.

### 4.5 Ecuaciones de Maxwell completas (forma integral)

\[
\boxed{
\begin{aligned}
\text{(1)} &\quad \oint_S \vec{E} \cdot d\vec{S} = \frac{Q_{\text{int}}}{\varepsilon_0} &\quad&\text{(Ley de Gauss eléctrica)} \\
\text{(2)} &\quad \oint_S \vec{B} \cdot d\vec{S} = 0 &\quad&\text{(Ley de Gauss magnética)} \\
\text{(3)} &\quad \oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} &\quad&\text{(Ley de Faraday)} \\
\text{(4)} &\quad \oint_C \vec{B} \cdot d\vec{l} = \mu_0 I + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} &\quad&\text{(Ley de Ampère-Maxwell)}
\end{aligned}
}
\]

Observaciones:

- **(1)** y **(2)** son simétricas salvo que no hay fuentes de campo magnético (monopolos).
- **(3)** y **(4)** son completamente simétricas en el vacío (sin fuentes): un campo variable induce al otro.
- La constante \( \mu_0 \varepsilon_0 \) define la velocidad de la luz.

### 4.6 Consecuencias fundamentales

**1. Unificación del electromagnetismo**

Antes de Maxwell, la electricidad y el magnetismo se consideraban fenómenos separados. Maxwell demostró que son manifestaciones de un mismo campo **electromagnético**.

**2. Predicción de ondas electromagnéticas**

En el vacío (sin cargas ni corrientes), las ecuaciones se reducen a:

\[
\begin{aligned}
\oint \vec{E} \cdot d\vec{l} &= -\frac{d\Phi_B}{dt} \\
\oint \vec{B} \cdot d\vec{l} &= \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}
\end{aligned}
\]

De estas se derivan ecuaciones de onda para \( \vec{E} \) y \( \vec{B} \):

\[
\nabla^2 \vec{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}, \qquad
\nabla^2 \vec{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}
\]

**3. Velocidad de la luz**

Comparando con la ecuación de onda general \( \nabla^2 f = \frac{1}{v^2} \partial^2 f / \partial t^2 \):

\[
\boxed{c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}}
\]

Cálculo numérico:

\[
\mu_0 = 4\pi \times 10^{-7} \, \text{H/m}, \quad
\varepsilon_0 = 8.85 \times 10^{-12} \, \text{F/m}
\]

\[
c \approx 3 \times 10^8 \, \text{m/s}
\]

Este valor coincidía con la velocidad de la luz medida experimentalmente en la época de Maxwell → **la luz es una onda electromagnética**.

**4. Simetría electromagnética**

Sin el término de corriente de desplazamiento, un campo magnético variable inducía un campo eléctrico (Faraday), pero un campo eléctrico variable **no** inducía un campo magnético. Con la corrección de Maxwell, la simetría es completa.

---

## Resumen de fórmulas clave

| Concepto | Fórmula |
|----------|---------|
| Potencia media disipada | \( \langle P_R \rangle = \frac{1}{2} R I_m^2 = R I_{\text{rms}}^2 \) |
| Potencia media entregada | \( \langle P_{\mathcal{E}} \rangle = \frac{1}{2} \mathcal{E}_0 I_m \cos\phi = \mathcal{E}_{\text{rms}} I_{\text{rms}} \cos\phi \) |
| Factor de potencia | \( \cos\phi \) |
| Relación RMS / máxima | \( I_{\text{rms}} = I_m / \sqrt{2} \), \( \mathcal{E}_{\text{rms}} = \mathcal{E}_0 / \sqrt{2} \) |
| Transformador ideal | \( V_p / V_s = N_p / N_s \) |
| Corriente de desplazamiento | \( I_d = \varepsilon_0 \, d\Phi_E / dt \) |
| Ley de Ampère-Maxwell | \( \oint \vec{B} \cdot d\vec{l} = \mu_0 (I + I_d) \) |
| Velocidad de la luz | \( c = 1 / \sqrt{\mu_0 \varepsilon_0} \) |
| Fórmula de Euler | \( e^{ix} = \cos x + i \sin x \) |
