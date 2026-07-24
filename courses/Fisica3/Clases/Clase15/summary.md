# Resumen Clase 15 — Movimiento de Cargas en Campo Magnético, Espectrómetro y Ciclotrón, Efecto Hall y Fuerza sobre Cables

---

## Índice

1. [Movimiento de una carga en un campo magnético uniforme](#1-movimiento-de-una-carga-en-un-campo-magnético-uniforme)
   - [1.1 Planteo y notación](#11-planteo-y-notación)
   - [1.2 El movimiento es circular uniforme](#12-el-movimiento-es-circular-uniforme)
   - [1.3 Radio, período y frecuencia de ciclotrón](#13-radio-período-y-frecuencia-de-ciclotrón)
   - [1.4 Entrada oblicua: movimiento helicoidal](#14-entrada-oblicua-movimiento-helicoidal)
   - [1.5 Validez no relativista](#15-validez-no-relativista)
2. [Aplicaciones tecnológicas](#2-aplicaciones-tecnológicas)
   - [2.1 Espectrómetro de masas](#21-espectrómetro-de-masas)
   - [2.2 El ciclotrón](#22-el-ciclotrón)
   - [2.3 Desviación en tubos de rayos catódicos](#23-desviación-en-tubos-de-rayos-catódicos)
3. [El efecto Hall](#3-el-efecto-hall)
   - [3.1 El problema: signo de los portadores](#31-el-problema-signo-de-los-portadores)
   - [3.2 La idea de Hall](#32-la-idea-de-hall)
   - [3.3 Cálculo del campo y el voltaje de Hall](#33-cálculo-del-campo-y-el-voltaje-de-hall)
   - [3.4 Resultados: portadores y huecos](#34-resultados-portadores-y-huecos)
4. [Fuerza magnética sobre un cable](#4-fuerza-magnética-sobre-un-cable)
   - [4.1 Cable rectilíneo: F = I L × B](#41-cable-rectilíneo-f--i-l--b)
   - [4.2 Caso general: la integral](#42-caso-general-la-integral)
   - [4.3 Ejemplo: dos segmentos y un semicírculo](#43-ejemplo-dos-segmentos-y-un-semicírculo)

---

## 1. Movimiento de una carga en un campo magnético uniforme

Retomando la Clase 14: la fuerza sobre una carga en movimiento (sin campo eléctrico) es la **fuerza de Lorentz** magnética $\mathbf{F} = q\,\mathbf{v}\times\mathbf{B}$. Ahora se analiza el movimiento concreto en un campo **uniforme**.

### 1.1 Planteo y notación

Se toma una región con campo $\mathbf{B}$ uniforme, usando la convención de dibujo: **punto** ($\odot$) para campo saliente del plano, **cruz** ($\otimes$) para entrante. Entra una partícula de carga $q$, masa $m$ y velocidad $\mathbf{v}$ **perpendicular** a $\mathbf{B}$ (se toma $q>0$; para $q<0$ el análisis es análogo). El peso es despreciable, así que la **única** fuerza relevante es la magnética.

**Sentido de la fuerza inicial:** se obtiene con la **regla de la mano derecha** para $\mathbf{v}\times\mathbf{B}$ (índice = primer vector $\mathbf{v}$; mayor = segundo vector $\mathbf{B}$; pulgar = producto; para $q>0$ ese es el sentido de $\mathbf{F}$). *Consejo: elegir una regla y no mezclarla nunca con otra.*

### 1.2 El movimiento es circular uniforme

Dos observaciones encadenadas:

- **La rapidez es constante.** Como $\mathbf{F}\perp\mathbf{v}$ en todo instante, el trabajo magnético es **cero**, así que la energía cinética $\tfrac{1}{2}mv^2$ se conserva → $|\mathbf{v}|$ constante (cambia la dirección, no el módulo).
- **El movimiento queda en el plano perpendicular a $\mathbf{B}$.** La fuerza está en ese plano (el producto vectorial es $\perp \mathbf{B}$) y la velocidad inicial también; como no hay fuerza en la dirección de $\mathbf{B}$, la partícula nunca sale de ese plano.

Con $\mathbf{v}\perp\mathbf{B}$ en todo instante, el módulo de la fuerza es constante:

$$
|\mathbf{F}| = |q|\, v\, B = \text{constante}
$$

Una fuerza **de módulo constante y siempre perpendicular a la velocidad** produce un **movimiento circular uniforme** (visto en Física I). La aceleración es **centrípeta**, $a = v^2/r$.

### 1.3 Radio, período y frecuencia de ciclotrón

Igualando $m\,a = |q|\,vB$ con $a = v^2/r$:

$$
\frac{m\,v^2}{r} = q\,v\,B \;\Longrightarrow\; \boxed{r = \frac{m\,v}{q\,B}}
$$

El **período** (tiempo de una vuelta) sale de $2\pi r = v\,T$:

$$
T = \frac{2\pi r}{v} = \frac{2\pi}{v}\cdot\frac{m v}{qB} \;\Longrightarrow\; \boxed{T = \frac{2\pi m}{q\,B}}
$$

**Resultado notable: el período NO depende de la velocidad.** Se cancela $v$. Partículas que entren con distinta velocidad giran en radios distintos, pero tardan **lo mismo** en dar una vuelta: si $v$ se duplica, el radio (y la distancia a recorrer) también, y el período no cambia. La **frecuencia de ciclotrón**:

$$
\boxed{f = \frac{1}{T} = \frac{|q|\,B}{2\pi m}}
$$

(vale para $q$ positivo o negativo; solo cambia el sentido de giro). Es **independiente de la velocidad**, hecho que será clave para el ciclotrón.

### 1.4 Entrada oblicua: movimiento helicoidal

Si la partícula entra **no perpendicular** a $\mathbf{B}$, su velocidad se descompone en:

- **Componente perpendicular a $\mathbf{B}$:** produce el movimiento circular ya descrito (con esa componente en el radio).
- **Componente paralela a $\mathbf{B}$:** como la fuerza magnética es nula en la dirección de $\mathbf{B}$, esta componente se **mantiene constante** → movimiento rectilíneo uniforme.

La composición de ambos es una **hélice** ("tirabuzón").

### 1.5 Validez no relativista

Todo esto usa la mecánica clásica; los efectos cuánticos no juegan. Pero cuando la velocidad es **comparable a la de la luz** aparecen efectos **relativistas**, y en particular la **frecuencia de ciclotrón deja de ser independiente de la velocidad** ($f$ pasa a depender de $v$). Esto limita algunas aplicaciones (ver ciclotrón).

---

## 2. Aplicaciones tecnológicas

### 2.1 Espectrómetro de masas

Sirve para **determinar la composición química** de una muestra. Se **vaporiza** el material y se ionizan sus componentes (cargas típicamente $\pm e$ o múltiplos enteros). Se los acelera con un pequeño campo eléctrico hasta una velocidad conocida y se los inyecta en una región de campo magnético uniforme, donde describen un semicírculo de radio $r = mv/(qB)$. Como $q$ y $B$ son conocidos, **el radio determina la masa** → identifica los iones. La **abundancia relativa** se lee por la intensidad de las "manchas" en una película (más oscura donde llegan más partículas).

### 2.2 El ciclotrón

Es un **acelerador de partículas**. Acelerar cargas es fácil (una diferencia de potencial), pero un acelerador lineal se "acaba enseguida" (analogía: una **calesita** en línea recta). El ciclotrón las hace **girar** para retenerlas mientras les agrega energía.

**Estructura:** dos cajas metálicas semicirculares en forma de "**D**" (radio $R$), separadas por una pequeña ranura, con una **diferencia de potencial** entre ellas y sumergidas en un campo magnético uniforme perpendicular.

**Funcionamiento:** la partícula arranca cerca del centro; en la ranura la $\Delta V$ la **acelera**; dentro de una D describe un semicírculo (sin ganar energía). Para que al pasar a la otra D vuelva a acelerarse (y no frenarse), la $\Delta V$ debe **cambiar de signo** cada semivuelta → una señal **alterna**. Como la velocidad crece, cada semicírculo tiene **mayor radio**, hasta que la partícula sale por el borde.

**La clave** es que la frecuencia de ciclotrón **no depende de la velocidad**: se puede usar una única frecuencia fija para la $\Delta V$ alterna que acelera **a todas** las partículas por igual, sin importar que estén a distintas velocidades. (Si $f$ dependiera de $v$, no habría una frecuencia común.)

**Energía de salida:** la velocidad final es $v = qBR/m$, de donde:

$$
\boxed{E_c = \frac{1}{2}m v^2 = \frac{q^2 B^2 R^2}{2m}}
$$

Con radio $\sim 1$ m se aceleran electrones hasta $\sim 10$ MeV y protones hasta $\sim 40$ MeV. **Limitaciones:** el tamaño del acelerador ($E_c \propto R^2$) y los **efectos relativistas** (a alta velocidad, $f$ deja de ser constante y el diseño falla). Por eso los ciclotrones tienen pocos metros de radio; los aceleradores gigantes (kilómetros) usan **otra** tecnología.

> **Usos actuales:** ya no para física de partículas de frontera, sino para **medicina** (radiación de ciclotrón para tratamientos e imágenes; detección de tumores) y **estudio de materiales** (haces colimados que revelan la estructura interna).

### 2.3 Desviación en tubos de rayos catódicos

Los televisores antiguos combinaban **campo eléctrico y campo magnético** para desviar el haz de electrones (variando la intensidad del campo magnético se controla la deflexión, de forma complementaria al campo eléctrico).

---

## 3. El efecto Hall

### 3.1 El problema: signo de los portadores

Hasta aquí, macroscópicamente **no** se puede saber si la corriente se debe a cargas **positivas** moviéndose en el sentido de la corriente o a cargas **negativas** moviéndose en sentido opuesto: ambas dan la misma corriente. (De hecho, el signo negativo del electrón es una **convención histórica**: cuando se definió el sentido de la corriente no se sabía el signo de los portadores.) El **efecto Hall** (descubierto por Hall, ~1879) permite determinar el **signo** — y la **abundancia** — de los portadores.

### 3.2 La idea de Hall

Se hace pasar una corriente $I$ por un cable ancho, inmerso en un campo magnético uniforme $\mathbf{B}$ (entrante). Hay dos escenarios:

- Portadores **positivos** moviéndose en el sentido de la corriente.
- Portadores **negativos** moviéndose en sentido opuesto.

**Observación clave:** en **ambos** casos, la fuerza magnética $q\,\mathbf{v}_d\times\mathbf{B}$ empuja los portadores hacia el **mismo lado** (el signo de $q$ y el de $\mathbf{v}_d$ se invierten juntos, y el producto no cambia). Entonces las cargas se **acumulan** en un costado, dejando déficit en el otro, y aparece una **diferencia de potencial transversal** (voltaje de Hall). **Su signo** revela de qué lado se acumularon las cargas → el **signo de los portadores**.

### 3.3 Cálculo del campo y el voltaje de Hall

En **régimen estacionario** (tras un transitorio en que se acumulan las cargas laterales), los portadores que siguen circulando lo hacen en línea recta, con **fuerza total nula**. La acumulación creó un **campo eléctrico** transversal $\mathbf{E}_H$ que equilibra a la fuerza magnética:

$$
q\,\mathbf{E}_H + q\,\mathbf{v}_d\times\mathbf{B} = 0 \;\Longrightarrow\; \mathbf{E}_H = -\,\mathbf{v}_d\times\mathbf{B}
$$

Como $\mathbf{v}_d\perp\mathbf{B}$, el módulo es $E_H = v_d\,B$ (independiente de $q$). Para un ancho $W$, el **voltaje de Hall**:

$$
|\Delta V_H| = E_H\, W = v_d\, B\, W
$$

Como Hall no tenía acceso a $v_d$, usó el **modelo de Drude**: $J = n\,|q|\,v_d$, y con $I = J\,W\,H$ (siendo $H$ la altura, $W$ el ancho):

$$
\boxed{|\Delta V_H| = \frac{B}{n\,|q|\,H}\, I}
$$

Todo lo del segundo miembro es **medible** (el signo de $\Delta V_H$ da el signo de los portadores; su magnitud, con $B$, $I$, $H$ conocidos, da el producto $n\,|q|$).

### 3.4 Resultados: portadores y huecos

Midiendo $\Delta V_H$ se obtiene el número de portadores por átomo (una vez conocida $|q| = e$, gracias a Millikan/Thomson, que midieron la carga del electrón poco después):

| Material | Signo | Portadores/átomo |
|----------|-------|------------------|
| Sodio | negativo | $0{,}99$ |
| Potasio | negativo | $1{,}1$ |
| Cobre | negativo | $1{,}3$ |
| Plata | negativo | $1{,}3$ |
| Aluminio | negativo | $3{,}5$ |
| Berilio | **positivo** | $2{,}2$ |
| Zinc | **positivo** | — |
| Silicio | negativo | $\sim 3\times10^{-3}$ (dopado: mucho mayor) |

> **La sorpresa (huecos).** Algunos metales (Be, Zn) dan portadores **positivos** — algo que Hall no esperaba y demoró ~40 años en entenderse (requiere mecánica cuántica). En esos casos, lo que se mueve **no** son electrones, sino **huecos**: **déficits de electrones** que se comportan como cargas positivas desplazándose en sentido opuesto. Es una advertencia sobre el modelo de Drude: la conducción real requiere mecánica cuántica.
>
> *(Nota: el aluminio tiene muchos portadores pero no es tan buen conductor como la plata/cobre — su mayor resistividad se debe a otros efectos, no al número de portadores.)*

---

## 4. Fuerza magnética sobre un cable

Es difícil observar la fuerza magnética sobre cargas **aisladas**, porque en la práctica siempre aparecen efectos eléctricos (que suelen dominar). En cambio, un **cable con corriente** es **neutro** (sin efecto eléctrico) pero tiene un número enorme de cargas en movimiento (efecto magnético apreciable). Por eso se estudia la fuerza magnética sobre cables.

### 4.1 Cable rectilíneo: F = I L × B

Configuración: una barra conductora sobre dos rieles, en un campo $\mathbf{B}$ uniforme, con corriente $I$. La fuerza sobre la barra es la **suma** de las fuerzas sobre todos sus portadores. Para $N$ electrones con velocidad de deriva $\mathbf{v}_d$:

$$
\mathbf{F} = -e\,N\,\mathbf{v}_d\times\mathbf{B}
$$

Escribiendo $N = n\,A\,L$ (densidad $n$, área $A$, largo $L$) y usando $\mathbf{J} = -e\,n\,\mathbf{v}_d$:

$$
\mathbf{F} = (-e\,n\,\mathbf{v}_d)\,A\,L\times\mathbf{B} = \mathbf{J}\,A\,L\times\mathbf{B}
$$

Definiendo el **vector $\mathbf{L}$** (módulo $L$, dirección y sentido de $\mathbf{J}$, es decir de la corriente) y usando $J\,A = I$:

$$
\boxed{\mathbf{F} = I\,\mathbf{L}\times\mathbf{B}}
$$

Válida para un **cable rectilíneo en campo uniforme**.

### 4.2 Caso general: la integral

Para un cable de **forma arbitraria** en un campo **no uniforme**, se divide en elementos $d\mathbf{L}$ (localmente rectilíneos, con $\mathbf{B}$ aproximadamente constante). La corriente $I$ es la misma en todo el cable (se conserva la carga), así que sale de la integral:

$$
\boxed{\mathbf{F} = I\int_C d\mathbf{L}\times\mathbf{B}}
$$

Cada elemento aporta $d\mathbf{F} = I\, d\mathbf{L}\times\mathbf{B}$, y se **suman vectorialmente**. ($\mathbf{B}$ es la función que se integra, evaluada en cada punto; el diferencial es el trozo de cable $d\mathbf{L}$.)

### 4.3 Ejemplo: dos segmentos y un semicírculo

Cable rígido en campo $\mathbf{B}$ uniforme **entrante**, formado por: un segmento recto de largo $L$, una **semicircunferencia** de radio $R$, y otro segmento recto de largo $L$. Corriente $I$.

**Segmentos rectos.** Como $\mathbf{L}\perp\mathbf{B}$, cada uno da una fuerza de módulo $I L B$ (hacia arriba). Los dos aportan $2\,I L B$.

**Semicírculo.** Un elemento de arco en el ángulo $\theta$ tiene $d\mathbf{F} = I\, d\mathbf{L}\times\mathbf{B}$ de módulo $dF = I\,(R\,d\theta)\,B$, en dirección **radial**. Por simetría, las componentes **horizontales se cancelan** entre las dos mitades; solo sobrevive la **vertical**, $dF_y = dF\sin\theta$:

$$
F_y = \int_0^{\pi} I\,R\,B\,\sin\theta\, d\theta = I\,R\,B\,[-\cos\theta]_0^{\pi} = 2\,I\,R\,B
$$

**Fuerza total** (todo hacia arriba, $\hat{\mathbf{j}}$):

$$
\boxed{\mathbf{F}_{\text{total}} = (2\,I L B + 2\,I R B)\,\hat{\mathbf{j}}}
$$

> **Interpretación elegante:** el semicírculo contribuyó como si fuera su **proyección horizontal** (un segmento recto de largo $2R$, el diámetro). En un campo uniforme, la fuerza sobre un tramo curvo solo depende del vector que une sus extremos.

> Próxima clase: se continúa con el momento sobre una espira y el campo magnético generado por corrientes.
