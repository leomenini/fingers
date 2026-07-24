# Resumen Clase 27 — Efecto Doppler e Introducción a la Interferencia

---

## Índice

1. [Efecto Doppler](#1-efecto-doppler)
   - [1.1 Medición de la frecuencia](#11-medición-de-la-frecuencia)
   - [1.2 Observador en movimiento](#12-observador-en-movimiento)
   - [1.3 Fuente en movimiento](#13-fuente-en-movimiento)
   - [1.4 Doppler para la luz (relativista)](#14-doppler-para-la-luz-relativista)
   - [1.5 Corrimiento al rojo y ley de Hubble](#15-corrimiento-al-rojo-y-ley-de-hubble)
2. [Interferencia de ondas](#2-interferencia-de-ondas)
   - [2.1 El principio de superposición](#21-el-principio-de-superposición)
   - [2.2 Interferencia constructiva y destructiva](#22-interferencia-constructiva-y-destructiva)
   - [2.3 Interferencia en el plano](#23-interferencia-en-el-plano)
   - [2.4 Condiciones de fase](#24-condiciones-de-fase)
   - [2.5 Coherencia](#25-coherencia)
   - [2.6 Preview: experimento de doble rendija](#26-preview-experimento-de-doble-rendija)

---

## 1. Efecto Doppler

El **efecto Doppler** describe cómo cambia la **frecuencia (o longitud de onda) percibida** cuando la fuente o el observador se mueven respecto del medio en que se propaga la onda. Se estudia primero en ondas mecánicas (el **sonido**), donde existe un **referencial privilegiado**: el medio (el aire) en reposo.

### 1.1 Medición de la frecuencia

¿Cómo mide un observador la frecuencia? Lo eficiente es **contar frentes de onda** en un intervalo largo $t$ y dividir por $t$. Para un **observador en reposo**, en un tiempo $t$ pasan todos los frentes contenidos en la distancia $v\,t$ (con $v$ la velocidad de la onda); como están separados $\lambda$, el número es $v\,t/\lambda$, y la frecuencia:

$$
f = \frac{v\,t/\lambda}{t} = \frac{v}{\lambda}
$$

Ya conocido ($v = \lambda f$). El método solo es válido si el número de frentes es **grande** (la cuenta es discreta; en un intervalo largo los efectos de discretización son despreciables).

### 1.2 Observador en movimiento

Si el observador se mueve con velocidad $v_0$ **hacia** la fuente, en el tiempo $t$ pasan los frentes contenidos en la distancia $(v + v_0)\,t$ (los que llegan por la onda **más** los que el observador alcanza). El número es $(v+v_0)t/\lambda$, y la frecuencia observada:

$$
f' = \frac{v + v_0}{\lambda} = \frac{v}{\lambda}\left(1 + \frac{v_0}{v}\right)
$$

$$
\boxed{f' = f\left(1 + \frac{v_0}{v}\right)}
$$

Si $v_0$ es negativa (se aleja), aparece un signo menos. Solo interviene la **componente** de la velocidad en la dirección de propagación de la onda (una velocidad "chanfleada" contribuye solo con su proyección). La idea física es que, moviéndose hacia la fuente, el observador "sale al encuentro" de frentes adicionales: recorre una distancia $v_0 t$ que se suma a la $v\,t$ que recorre la propia onda, por lo que atraviesa más frentes en el mismo tiempo.

### 1.3 Fuente en movimiento

Ahora la **fuente** se mueve con velocidad $v_0$ hacia el observador (en reposo). Es el caso de la **ambulancia** (más aguda al acercarse, más grave al alejarse). Aquí el mecanismo es distinto: no cambia la velocidad con que llegan los frentes, sino la **separación entre ellos**. La fuente emite un frente por período $T$. Tomando el origen del tiempo en la emisión de un frente, ese frente se propaga a velocidad $v$; un período más tarde la onda avanzó $v\,T = \lambda$, pero **la fuente también se movió** $v_0\,T$ en la misma dirección, "persiguiendo" a su propia onda. La distancia real entre dos frentes consecutivos (la **longitud de onda real** que se propaga) es la diferencia:

$$
\lambda' = (v - v_0)\,T
$$

La frecuencia que mide el observador (contando frentes con $\lambda'$):

$$
f' = \frac{v}{\lambda'} = \frac{v}{(v-v_0)\,T} = \frac{v\,f}{v - v_0}
$$

$$
\boxed{f' = \frac{f}{1 - \dfrac{v_0}{v}}}
$$

Coherente con la ambulancia: si $v_0 > 0$ (se acerca), el denominador es menor que 1 → $f'$ mayor → más agudo.

> **Las dos fórmulas NO coinciden.** Por el referencial privilegiado (el medio), no es lo mismo que se mueva la fuente o el observador; solo importaría la velocidad relativa si no hubiera medio. Todo esto vale para $v_0 < v$; si la fuente supera la velocidad del sonido (avión supersónico), el fenómeno cambia por completo (**ondas de choque**).

### 1.4 Doppler para la luz (relativista)

La luz **no se propaga en un medio** (va en el vacío), así que no hay referencial privilegiado: debe dar lo mismo que se mueva la fuente o el observador. Las fórmulas anteriores **no pueden ser exactas** para la luz — aparecen **efectos relativistas** (la luz viaja a velocidad enorme). El resultado correcto (solo velocidad **relativa** $v_0$):

$$
\boxed{f' = f\,\frac{1 + \dfrac{v_0}{c}}{\sqrt{1 - \dfrac{v_0^2}{c^2}}}}
$$

**Para $v_0 \ll c$**, desarrollando en Taylor (el denominador corrige a orden $v_0^2/c^2$):

$$
f' \approx f\left(1 + \frac{v_0}{c}\right)
$$

que **coincide a primer orden** con **ambas** fórmulas mecánicas. En efecto, $f/(1 - v_0/c) \approx f(1 + v_0/c)$ por Taylor (dividir por $\approx 1-x$ es como multiplicar por $\approx 1+x$). A velocidades normales, el Doppler de la luz y el de las ondas en medios son equivalentes.

### 1.5 Corrimiento al rojo y ley de Hubble

Aplicación fundamental: medir la **velocidad de estrellas y galaxias**. Se observa que las galaxias lejanas se **alejan** (velocidad negativa) → su frecuencia **disminuye** → los colores se **corren hacia el rojo** (**corrimiento al rojo**). Cuanto más lejana la galaxia, más rápido se aleja: es la **ley de Hubble**, evidencia de que el universo **se expande** (imagen del budín que crece: todos los puntos se alejan entre sí, sin centro privilegiado). Proyectando hacia atrás, el universo estuvo concentrado → base empírica del **Big Bang**.

> Otras aplicaciones del Doppler acústico: **radar/sonar** de velocidad (multas), **sonares** de submarinos (velocidad de objetos) y **ecografía Doppler** médica (velocidad de la sangre / glóbulos rojos en arterias).

---

## 2. Interferencia de ondas

### 2.1 El principio de superposición

En el vacío, sin cargas ni corrientes, las **ecuaciones de Maxwell** son **lineales y homogéneas**:

$$
\oint \mathbf{E}\cdot d\mathbf{S} = 0, \quad \oint \mathbf{B}\cdot d\mathbf{S} = 0, \quad \oint \mathbf{B}\cdot d\mathbf{l} = \mu_0\varepsilon_0\frac{d\Phi_E}{dt}, \quad \oint \mathbf{E}\cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}
$$

Por lo tanto, una **combinación lineal** de soluciones también es solución: si $\mathbf{E}_1$ y $\mathbf{E}_2$ resuelven Maxwell, $\alpha\mathbf{E}_1 + \beta\mathbf{E}_2$ también. Este es el **principio de superposición**.

> **Consecuencia sorprendente:** dos ondas electromagnéticas que se cruzan **no se afectan** — pasan una a través de la otra y siguen como si nada (una onda no "rebota" en otra). Esto **no vale en un medio** (salvo que sea lineal): allí las cargas del medio, excitadas por una onda, reemiten en otras direcciones y las ondas se afectan (**óptica no lineal**, efectos diminutos). Para ondas **mecánicas** vale si la perturbación es **pequeña** (olas chicas se cruzan; olas grandes "chocan" — efectos no lineales).

### 2.2 Interferencia constructiva y destructiva

En una cuerda, sumando dos ondas sinusoidales de **igual amplitud**:

- **Constructiva total:** las dos coinciden (mismo signo en cada punto) → amplitud **doble** ($2A$).
- **Destructiva total:** una es el opuesto de la otra (máximo de una con mínimo de la otra) → se **cancelan** (nada).
- Lo típico es **intermedio** (dos sinusoides de igual amplitud pero un poco corridas: ni suma ni resta total).

Físicamente, esto ocurre cuando una onda llega por un lado y otra por el otro y en un instante dado se superponen; el resultado es su suma punto a punto.

### 2.3 Interferencia en el plano

Con dos fuentes puntuales en una cubeta (frentes circulares), la interferencia **depende del punto**: en las líneas donde se cruzan **máximo con máximo** (o **mínimo con mínimo**, ambos valles suman) hay **máximos de interferencia** (constructiva); donde se cruza máximo con mínimo, se cancelan. Aparecen **líneas** alternadas de interferencia constructiva y destructiva.

> "Máximo" y "mínimo" refieren a **amplitud máxima** (cresta o valle), no a signo: dos valles que se suman también dan interferencia constructiva.

### 2.4 Condiciones de fase

En el caso unidimensional, con dos ondas de igual amplitud (en $t=0$), $y = A\sin(kx)$ (con $k$ el número de onda). Definiendo la **fase** como el argumento del seno **con amplitud positiva delante**:

**Constructiva** ($A\sin(kx) + A\sin(kx) = 2A\sin(kx)$): las fases deben diferir en un múltiplo de $2\pi$:

$$
\boxed{\phi_2 - \phi_1 = 2\pi n, \qquad n \in \mathbb{Z}}
$$

**Destructiva** ($A\sin(kx) - A\sin(kx)$): como $-A\sin(kx) = A\sin(kx + \pi)$ (con $\sin(\phi+\pi) = -\sin\phi$; se reescribe con coeficiente positivo para definir bien la fase), las fases difieren en un múltiplo impar de $\pi$:

$$
\boxed{\phi_2 - \phi_1 = \pi + 2\pi n, \qquad n \in \mathbb{Z}}
$$

Lo que importa es la **diferencia de fases**. El $2\pi$ no es gratuito: siguiendo por continuidad, cada frente de onda difiere del siguiente en $2\pi$ de fase.

### 2.5 Coherencia

Para **observar** interferencia, las fuentes deben emitir **en fase** (coherentes): el desfasaje entre ellas debe mantenerse **constante en el tiempo** (no necesariamente cero ni el de una interferencia constructiva o destructiva, pero sí fijo). Por eso, dos **lamparitas** en un cuarto **no** producen zonas oscuras: si la interferencia funcionara, prender una segunda lámpara debería **oscurecer** alguna parte del cuarto, cosa que no ocurre. La razón es que cada lámpara emite por **emisiones atómicas** independientes a nivel del filamento, en intervalos cortísimos (fracciones de segundo) y **aleatorias** una respecto de la otra → emisión **incoherente**, sin patrón de interferencia. Se necesita emisión **coherente** y una señal suficientemente grande; cuando la señal se vuelve muy pequeña, empiezan a dominar los efectos de emisión incoherente. (Esto se cuantifica en la Clase 28.)

### 2.6 Preview: experimento de doble rendija

Se anticipa el experimento (a desarrollar en la Clase 28): una onda plana **monocromática** incide normal sobre una pantalla con **dos rendijas** separadas $d$; a una distancia $D$ hay una pantalla donde aparecen **franjas** claras y oscuras alternadas. En la zona central, la separación entre franjas claras consecutivas es aproximadamente **constante**.

*Próxima clase: cálculo completo del experimento de doble rendija, difracción, coherencia cuantitativa e intensidad. Con eso cierra el curso.*
