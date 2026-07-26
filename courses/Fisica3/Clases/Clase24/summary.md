# Resumen Clase 24 — Corriente de Desplazamiento, Ecuaciones de Maxwell, Repaso de Ondas Mecánicas y Ondas Electromagnéticas

---

## Índice

1. [La incoherencia de la ley de Ampère](#1-la-incoherencia-de-la-ley-de-ampère)
   - [1.1 El problema: dos superficies con el mismo borde](#11-el-problema-dos-superficies-con-el-mismo-borde)
   - [1.2 Cálculo sobre la superficie que corta el cable](#12-cálculo-sobre-la-superficie-que-corta-el-cable)
   - [1.3 Cálculo sobre la superficie que pasa entre las placas](#13-cálculo-sobre-la-superficie-que-pasa-entre-las-placas)
   - [1.4 Interpretación: la corriente de desplazamiento toma el relevo](#14-interpretación-la-corriente-de-desplazamiento-toma-el-relevo)
   - [1.5 El argumento estético de Maxwell](#15-el-argumento-estético-de-maxwell)
2. [Las ecuaciones de Maxwell](#2-las-ecuaciones-de-maxwell)
   - [2.1 Las cuatro leyes](#21-las-cuatro-leyes)
   - [2.2 Alcance y vigencia](#22-alcance-y-vigencia)
3. [Repaso de ondas mecánicas](#3-repaso-de-ondas-mecánicas)
   - [3.1 Qué es una onda y por qué importa el medio](#31-qué-es-una-onda-y-por-qué-importa-el-medio)
   - [3.2 Ondas viajeras y el signo del argumento](#32-ondas-viajeras-y-el-signo-del-argumento)
   - [3.3 Ondas sinusoidales y periodicidad espacial](#33-ondas-sinusoidales-y-periodicidad-espacial)
   - [3.4 Periodicidad temporal y definiciones asociadas](#34-periodicidad-temporal-y-definiciones-asociadas)
4. [Planteo de las ondas electromagnéticas](#4-planteo-de-las-ondas-electromagnéticas)
   - [4.1 Hipótesis de trabajo](#41-hipótesis-de-trabajo)
   - [4.2 Por qué la onda es transversal (argumento cualitativo)](#42-por-qué-la-onda-es-transversal-argumento-cualitativo)
   - [4.3 La forma propuesta](#43-la-forma-propuesta)
5. [Interludio: el éter y la relatividad](#5-interludio-el-éter-y-la-relatividad)
6. [Deducción de la velocidad de la luz](#6-deducción-de-la-velocidad-de-la-luz)
   - [6.1 Faraday sobre un rectángulo en el plano xy](#61-faraday-sobre-un-rectángulo-en-el-plano-xy)
   - [6.2 Sustitución de la onda sinusoidal en Faraday](#62-sustitución-de-la-onda-sinusoidal-en-faraday)
   - [6.3 Ampère–Maxwell sobre un rectángulo en el plano xz](#63-ampèremaxwell-sobre-un-rectángulo-en-el-plano-xz)
   - [6.4 Combinación: la velocidad de la luz](#64-combinación-la-velocidad-de-la-luz)
7. [La medición de c: el experimento de Fizeau](#7-la-medición-de-c-el-experimento-de-fizeau)

---

## 1. La incoherencia de la ley de Ampère

La clase abre cerrando un problema que había quedado planteado en el práctico: la
ley de Ampère **sin** el término de Maxwell es matemáticamente incoherente.

### 1.1 El problema: dos superficies con el mismo borde

La ley de Ampère relaciona la circulación de $\mathbf{B}$ sobre una curva cerrada
$C$ (la **amperiana**) con la corriente que atraviesa una superficie $S$ cuyo
**borde** es $C$:

$$\oint_C \mathbf{B}\cdot d\boldsymbol{\ell} = \mu_0 I_{\text{enc}}$$

La ley no especifica *cuál* superficie: cualquiera que tenga a $C$ por borde
debería servir. Ahí está el problema. Tomemos un circuito que carga un
**condensador de placas paralelas** y una amperiana $C$ que rodea el cable:

- **$S_1$**: una superficie que corta el cable. La corriente que la atraviesa es
  $I$.
- **$S_2$**: una superficie abombada que se cuela **entre las placas** del
  condensador sin cortar ningún cable. La corriente que la atraviesa es $0$ —por
  el medio del condensador no pasa corriente.

Dos superficies con el mismo borde dan dos respuestas distintas. La ley, así
escrita, no está bien definida.

> **El origen del problema es que el sistema no es estacionario.** Aunque la
> corriente $I$ sea independiente del tiempo, en las placas del condensador se
> está **acumulando carga**: $Q$ cambia con $t$. Eso se traduce en que el flujo
> eléctrico entre las placas también cambia con el tiempo. La ley de Ampère
> original sólo vale en régimen estacionario.

La ley de Ampère **modificada por Maxwell** agrega la **corriente de
desplazamiento** $I_d$:

$$\oint_C \mathbf{B}\cdot d\boldsymbol{\ell} = \mu_0 I + \mu_0\varepsilon_0 \frac{d\Phi_E}{dt},
\qquad I_d \equiv \varepsilon_0\frac{d\Phi_E}{dt}$$

Verifiquemos que con este término las dos superficies **sí** dan lo mismo.

### 1.2 Cálculo sobre la superficie que corta el cable

$S_1$ corta el cable, fuera del condensador. En esa zona no hay cargas acumuladas
que generen campo eléctrico, así que $\mathbf{E} \approx 0$, de donde $\Phi_E = 0$
y por lo tanto $I_d = 0$. El término de Maxwell no aporta nada y recuperamos la
ley de Ampère de siempre, sin modificación:

$$\left.\oint_C \mathbf{B}\cdot d\boldsymbol{\ell}\right|_{S_1} = \mu_0 I$$

### 1.3 Cálculo sobre la superficie que pasa entre las placas

En $S_2$ **no hay corriente de conducción**: $I = 0$. Pero sí hay campo eléctrico.
Para un condensador de placas paralelas de área $A$ con carga $Q$, el campo entre
las placas vale

$$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{A\,\varepsilon_0}$$

Al calcular el flujo hay que tener cuidado: en $S_2$ hay campo eléctrico **sólo
en la zona de área $A$** que queda entre las placas; en todo el resto de la
superficie $E = 0$. Entonces el flujo es el campo por el área de la zona donde el
campo existe:

$$\Phi_E = E \cdot A = \frac{Q}{A\,\varepsilon_0}\, A = \frac{Q}{\varepsilon_0}$$

y la corriente de desplazamiento resulta

$$I_d = \varepsilon_0\frac{d\Phi_E}{dt}
      = \varepsilon_0\frac{d}{dt}\!\left(\frac{Q}{\varepsilon_0}\right)
      = \frac{dQ}{dt} = I$$

Los $\varepsilon_0$ se cancelan y queda exactamente la corriente que llega por el
cable, porque $dQ/dt$ **es** la corriente que está cargando la placa. Por lo tanto

$$\left.\oint_C \mathbf{B}\cdot d\boldsymbol{\ell}\right|_{S_2} = \mu_0 I_d = \mu_0 I$$

$$\boxed{\ \left.\oint_C \mathbf{B}\cdot d\boldsymbol{\ell}\right|_{S_1}
       = \left.\oint_C \mathbf{B}\cdot d\boldsymbol{\ell}\right|_{S_2} = \mu_0 I\ }$$

### 1.4 Interpretación: la corriente de desplazamiento toma el relevo

| Superficie | $I$ (conducción) | $I_d$ (desplazamiento) | Circulación total |
|---|---|---|---|
| $S_1$ (corta el cable) | $I$ | $0$ | $\mu_0 I$ |
| $S_2$ (entre las placas) | $0$ | $I$ | $\mu_0 I$ |

La imagen física es nítida: la corriente viene por el cable, **se interrumpe** al
llegar a la placa, y justo ahí la corriente de desplazamiento **toma el relevo**.
Cada término por separado vale cosas distintas según la superficie elegida, pero
la **suma** de los dos da lo mismo. Eso es exactamente lo que hacía falta para que
la ley quede bien definida.

> La corriente de desplazamiento **no es una corriente de cargas**: en general es
> simplemente la manifestación de una **variación del flujo eléctrico** en una
> zona. Lo que ocurre en este ejemplo concreto es que, justo donde no hay carga ni
> corriente eléctrica, hay un cambio del campo eléctrico que se ocupa de tomar el
> relevo.

### 1.5 El argumento estético de Maxwell

Lo que motivó a Maxwell no fue en primer lugar la incoherencia matemática, sino
una **asimetría** que le molestaba: un campo magnético variable induce un campo
eléctrico (Faraday), pero parecía que un campo eléctrico variable no podía
inducir un campo magnético. Inventó el término por ese motivo estético.

> **La naturaleza no tiene por qué compartir nuestros gustos** —ni los de Maxwell
> en particular—. Alguien podría objetar que el término le complica la vida y que
> menos términos es más lindo. Que el término resuelva una incoherencia
> matemática es bienvenido, pero **el criterio de verdad en física es el acuerdo
> con los experimentos**, no la elegancia. Lo notable del caso es que el sentido
> estético de Maxwell resultó coincidir con el de la naturaleza: la ley resultante
> es correcta experimentalmente y además **predice un hecho mayor**, la existencia
> de ondas electromagnéticas, cuya velocidad resulta ser la velocidad de la luz.

---

## 2. Las ecuaciones de Maxwell

### 2.1 Las cuatro leyes

Este es un momento fundacional del curso: acá se juntan todas las leyes que se
fueron construyendo de a poco a lo largo del semestre.

$$\boxed{\ \oiint_S \mathbf{E}\cdot d\mathbf{A} = \frac{Q_{\text{int}}}{\varepsilon_0}\ }
\qquad \text{(Gauss para } \mathbf{E}\text{)}$$

$$\boxed{\ \oiint_S \mathbf{B}\cdot d\mathbf{A} = 0\ }
\qquad \text{(Gauss para } \mathbf{B}\text{)}$$

$$\boxed{\ \oint_C \mathbf{E}\cdot d\boldsymbol{\ell} = -\frac{d\Phi_B}{dt}\ }
\qquad \text{(Faraday)}$$

$$\boxed{\ \oint_C \mathbf{B}\cdot d\boldsymbol{\ell} = \mu_0 I + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}\ }
\qquad \text{(Ampère--Maxwell)}$$

Lectura de cada una:

- **Gauss para $\mathbf{E}$**: el flujo saliente a través de una superficie
  cerrada mide la carga encerrada, dividida por $\varepsilon_0$.
- **Gauss para $\mathbf{B}$**: el flujo de $\mathbf{B}$ a través de una superficie
  cerrada es cero **porque no hay monopolos magnéticos**. Es, literalmente, la ley
  que anuncia su inexistencia.
- **Faraday**: la circulación de $\mathbf{E}$ sobre una curva cerrada es menos la
  derivada temporal del flujo magnético a través de la superficie limitada por esa
  curva.
- **Ampère–Maxwell**: la versión corregida en §1.

### 2.2 Alcance y vigencia

Escritas en la segunda mitad del siglo XIX, estas leyes unificaron la teoría
eléctrica y la magnética en una sola y además predijeron las propiedades de la
luz. Han sobrevivido hasta hoy: no se conocen experimentos que las contradigan, y
se cuentan entre las **interacciones fundamentales**.

> **Única modificación necesaria:** en el régimen microscópico hay que incorporar
> los efectos cuánticos. Esa versión es la **electrodinámica cuántica**,
> completada hacia 1948–49, que le valió el Nobel a Feynman, Schwinger y
> Tomonaga. Fuera de ese régimen la teoría está terminada: no hubo que volver a
> tocarla.

---

## 3. Repaso de ondas mecánicas

Antes de buscar ondas en las ecuaciones de Maxwell, el docente hace un repaso de
**ondas mecánicas** (remite al capítulo 13, sección 13.2), porque son más fáciles
de visualizar y aportan todo el vocabulario que se usará después. El repaso se da
desde cero, sin suponerlo conocido.

### 3.1 Qué es una onda y por qué importa el medio

"Una manera de propagar energía" es una definición **demasiado general**: hay
muchísimas maneras de propagar energía, y las partículas propagándose también la
propagan sin ser ondas. La caracterización correcta es más específica:

> Una **onda** es un movimiento (una señal) **oscilatorio** que **se propaga**,
> generalmente en un medio.

Cuando se propaga en un medio se habla de **onda mecánica**. Ejemplos, y qué es lo
que oscila en cada caso:

| Onda | Cantidad que oscila |
|---|---|
| Sonido | Presión y densidad del aire, alrededor de su valor de reposo |
| Cuerda | Altura (desplazamiento transversal) de la cuerda |
| Luz | $\mathbf{E}$ y $\mathbf{B}$ |

Cuando hay medio, conviene describir la onda en el **referencial en que el medio
está en reposo**: ese referencial juega un rol privilegiado. Una cuerda estirada y
quieta determina ese referencial, y los desplazamientos se miden respecto de él.

> Se podría tomar otro referencial inercial —por ejemplo uno que se mueva
> uniformemente— pero en él la cuerda no estaría en reposo y la descripción se
> complica sin ganar nada. Por eso las ondas mecánicas tienen asociado un
> **referencial preferencial**: el del medio en reposo.

### 3.2 Ondas viajeras y el signo del argumento

Una onda es **viajera** cuando mantiene su forma —al menos de manera aproximada—
pero se desplaza. Si en $t = 0$ el perfil es $y(0,x) = f(x)$, en un instante
posterior es **la misma forma evaluada en otro punto**:

$$\boxed{\ y(t,x) = f(x - vt)\ }$$

El perfil se corre una distancia $\Delta x = v\,t$ en un tiempo $t$.

> **El signo menos confunde a mucha gente.** Parece que para mover la onda hacia
> la derecha habría que *sumar*. No es así. Verificación: tomemos el origen en el
> máximo, de modo que en $t = 0$ el máximo está en $x = 0$. En $t > 0$ el máximo
> sigue estando donde el argumento se anula, es decir en $x' = x - vt = 0$, o sea
> en $x = vt > 0$: **efectivamente corrido hacia la derecha**. Con $f(x + vt)$ se
> obtiene una onda viajando hacia la izquierda.

Una cuerda real puede tener la **superposición** de una onda hacia la derecha y
otra hacia la izquierda, e incluso combinaciones más complicadas.

> Este tratamiento es **unidimensional**. Una onda en el espacio —un grito, por
> ejemplo— se desparrama en todas las direcciones y la imagen 1D no aplica
> directamente, salvo que la onda esté confinada, como en un tubo. Se trabaja en
> 1D por simplicidad.

### 3.3 Ondas sinusoidales y periodicidad espacial

Un caso idealizado muy cómodo es la **onda sinusoidal**:

$$f(x) = A\,\operatorname{sen}\!\left(\frac{2\pi x}{\lambda}\right)$$

> **Por qué "idealizada":** el seno está definido de $-\infty$ a $+\infty$, pero
> una onda real no puede tener esa forma en todo el eje. En la práctica uno tiene
> ese perfil sólo en un tramo. Se supone extendido a todo $x$ porque simplifica
> las cuentas.

Recorriendo la forma: vale $0$ en $x=0$; alcanza su máximo $A$ en $x = \lambda/4$
(donde el argumento del seno vale $\pi/2$); vuelve a cero en $\lambda/2$; llega al
mínimo $-A$ en $3\lambda/4$; y en $\lambda$ vuelve al punto de partida y repite.
Es decir, $f$ es periódica de **periodo espacial** $\lambda$:

$$f(x + \lambda) = f(x), \qquad f'(x + \lambda) = f'(x)$$

> **Por qué hay que pedir también la derivada:** la función sola vuelve a tomar el
> mismo valor mucho antes de $\lambda$. Pero en esos puntos **la derivada tiene
> signos opuestos** (en uno la función sube y en el otro baja). El primer punto en
> que se repiten *función y derivada* es $\lambda$.

A ese periodo espacial se lo llama **longitud de onda**, justamente porque es el
largo del tramo de onda que después se repite.

### 3.4 Periodicidad temporal y definiciones asociadas

Incorporando el desplazamiento:

$$y(t,x) = A\,\operatorname{sen}\!\left[\frac{2\pi}{\lambda}(x - vt)\right]$$

Fijado un $x$, esta función también es periódica en $t$. Su **periodo de
oscilación** $T$ es el menor tiempo tal que la onda —y su derivada— vuelven al
mismo valor. Probando $T = \lambda/v$:

$$y\!\left[x - v\!\left(t + \tfrac{\lambda}{v}\right)\right]
 = y\big[(x - vt) - \lambda\big] = y(x - vt)$$

donde el último paso usa que $\lambda$ es el periodo espacial. Por lo tanto

$$\boxed{\ T = \frac{\lambda}{v}\ }$$

> Regla mnemotécnica —**algo tramposa**—: "velocidad = distancia / tiempo", con la
> distancia siendo el periodo espacial y el tiempo el periodo temporal. Funciona,
> pero no es una deducción.

Definiciones asociadas:

| Cantidad | Símbolo | Definición | Rol |
|---|---|---|---|
| Frecuencia | $\nu$ | $\nu = 1/T$ | inversa del periodo |
| Número de ondas | $k$ | $k = 2\pi/\lambda$ | análogo espacial de $\omega$ |
| Frecuencia angular | $\omega$ | $\omega = 2\pi/T = 2\pi v/\lambda$ | análogo temporal de $k$ |

Con ellas la onda se escribe en la forma compacta

$$\boxed{\ y(t,x) = A\,\operatorname{sen}(kx - \omega t)\ }$$

y, comparando con la expresión anterior, la velocidad de la onda es

$$\boxed{\ v = \frac{\omega}{k} = \frac{\lambda}{T}\ }$$

> El paralelo es exacto: el análogo de la **frecuencia angular** es el **número de
> ondas**, y el análogo del **periodo** es la **longitud de onda**. Unas describen
> la estructura temporal de la onda; las otras, la espacial. El pasaje de
> frecuencia a frecuencia angular ya se conoce del movimiento armónico simple y
> del movimiento circular uniforme.

---

## 4. Planteo de las ondas electromagnéticas

El objetivo: **probar que las ecuaciones de Maxwell tienen soluciones con forma de
onda**, y calcular su velocidad.

### 4.1 Hipótesis de trabajo

> **Alcance limitado, y explícitamente.** No se busca la onda electromagnética más
> general: se propone una **familia particular** de soluciones, se verifica que
> satisface las ecuaciones de Maxwell y se calcula su velocidad. Que no haya otras
> posibilidades es cierto, pero **no se demuestra acá**.

1. **Vacío**: $Q = 0$ e $I = 0$. Es una idealización realista — el espacio entre
   el Sol y la Tierra no tiene prácticamente cargas ni corrientes, y la onda que
   emite el Sol se sostiene a sí misma durante todo el trayecto hasta llegar a la
   Tierra.
2. **Onda transversal**: si la propagación es en $\hat{x}$, entonces
   $\mathbf{E} \perp \hat{x}$, $\mathbf{B} \perp \hat{x}$ y
   $\mathbf{E} \perp \mathbf{B}$.
3. **Onda plana**: los campos no dependen de $y$ ni de $z$, sólo de $x$ y $t$.
4. **Sinusoidal y en fase**: ambos campos se anulan simultáneamente.

> **No hay medio, y eso es lo raro.** Las ondas electromagnéticas se propagan en el
> vacío: no necesitan un medio como el sonido necesita el aire. Por lo tanto **no
> hay un referencial privilegiado** como el de §3.1. Es justamente lo que
> desconcertó a los físicos del siglo XIX (§5).

> **Sobre la onda plana:** que un plano infinito perpendicular a $x$ oscile todo
> junto es claramente una idealización. Se justifica como buena aproximación de una
> región donde el campo es aproximadamente uniforme en la sección perpendicular al
> eje de propagación. La ventaja es que reduce el problema a uno efectivamente
> unidimensional.

### 4.2 Por qué la onda es transversal (argumento cualitativo)

Estamos en una zona sin cargas eléctricas ni magnéticas. ¿Cómo son las líneas de
campo eléctrico si no hay cargas positivas de donde salir ni negativas a donde
llegar? **Cerradas.**

Imaginemos entonces una línea de $\mathbf{E}$ cerrada, oscilando. Al oscilar
genera —por Ampère–Maxwell— un campo magnético **perpendicular** a ese plano, que
a su vez también oscila y tiene sus propias líneas cerradas, perpendiculares a las
de $\mathbf{E}$. En cada zona, entonces, $\mathbf{E}$ queda contenido en un plano y
$\mathbf{B}$ resulta perpendicular a él.

> Es una **idea cualitativa** del porqué de $\mathbf{B} \perp \mathbf{E}$, no una
> demostración. El sentido en que entra o sale $\mathbf{B}$ depende de si el campo
> está creciendo o decreciendo: con una sola "foto" no se puede determinar.

### 4.3 La forma propuesta

Con el eje $x$ como dirección de propagación, $\mathbf{E}$ a lo largo de $\hat{y}$
y $\mathbf{B}$ a lo largo de $\hat{z}$:

$$E_y(x,t) = E_0\,\operatorname{sen}(kx - \omega t), \qquad
  B_z(x,t) = B_0\,\operatorname{sen}(kx - \omega t)$$

Son las **únicas componentes** no nulas, y están **en fase**: cuando una se anula,
la otra también. Como la velocidad de una onda es $v = \omega/k$ (§3.4), y acá esa
velocidad es la de la luz $c$, todo el problema se reduce a **calcular $\omega/k$**
a partir de las ecuaciones de Maxwell.

---

## 5. Interludio: el éter y la relatividad

La ausencia de un referencial privilegiado incomodó tanto a los físicos del siglo
XIX que **inventaron uno**: el **éter**, un medio muy difícil de detectar en cuyo
referencial —se suponía— valían las ecuaciones de Maxwell. Fuera de él, los
cálculos no serían correctos. El propio Maxwell lo pensaba así.

La cronología del desmontaje:

1. **Medir la velocidad de la Tierra respecto del éter.** Como $v/c$ es pequeño,
   los primeros experimentos tenían precisión a orden $v/c$, con un error de orden
   $v^2/c^2$ que se podía despreciar. Resultado: **cero**. Raro, porque la Tierra
   orbita el Sol: ¿cómo puede dar cero cuando va y también cuando vuelve?
2. **Arrastre del éter** (idea de la época, ligada a Fizeau): quizá la Tierra
   arrastra el éter consigo, y por eso se mide cero.
3. **Michelson y Morley**: un experimento mucho más preciso, sensible a efectos de
   orden $v^2/c^2$ —donde el arrastre ya no alcanzaba para explicar el resultado—.
   Dio **cero** otra vez.
4. **Lorentz**: propone que los cuerpos se **contraen** en la dirección de
   propagación al moverse respecto del éter, y calcula exactamente cuánto para que
   el efecto no se vea. Funcionaba, pero no se entendía por qué habría de suceder.
5. **Poincaré** lo pone en palabras: ¿qué idea disparatada habría que inventar
   cuando el experimento se haga con precisión $v^3/c^3$ y vuelva a dar cero? El
   "recauchutaje" de la mecánica ya no daba más.
6. **Einstein, 1905**: no hay éter. La luz se propaga en el vacío, **todos los
   referenciales inerciales son equivalentes** también para el electromagnetismo,
   y la velocidad de la luz es **la misma medida en todos ellos**.

> **El ejemplo del tren.** Un tren viaja a velocidad $v$ comparable a $c$. Alguien
> arriba enciende una luz; alguien en la estación mide la velocidad de esa señal.
> La intuición dice $c - v$. Pero da $c$. La conclusión de Einstein es que **lo que
> hay que modificar no es el electromagnetismo sino la mecánica**: cuando las
> velocidades son comparables a $c$, deja de valer la ley de adición de
> velocidades.

Dicho de otro modo: la teoría de Maxwell **ya verificaba la relatividad antes de
la relatividad** —ya tenía la propiedad de ser la misma en todos los referenciales
inerciales—, lo que no verificaba era la ley de adición de velocidades. Está muy
bien confirmada experimentalmente: el efecto es minúsculo para objetos
macroscópicos, pero se mide todos los días en los aceleradores de partículas con
enorme precisión.

---

## 6. Deducción de la velocidad de la luz

La estrategia: aplicar Faraday y Ampère–Maxwell a rectángulos pequeños y ver qué
condiciones imponen sobre $E_0$, $B_0$, $k$ y $\omega$.

### 6.1 Faraday sobre un rectángulo en el plano xy

Se toma una curva rectangular $C$ en el plano $xy$, de altura $h$ (en $\hat{y}$) y
ancho $\Delta x$ **pequeño** (en $\hat{x}$), ubicada en la posición $x$.

**Circulación de $\mathbf{E}$.** En los tramos horizontales —los de largo
$\Delta x$— la contribución es **cero**: ahí $d\boldsymbol{\ell} \parallel \hat{x}$
mientras que $\mathbf{E}$ apunta en $\hat{y}$. En los tramos verticales el campo es
uniforme a lo largo del tramo (no depende de $y$), así que

$$\oint_C \mathbf{E}\cdot d\boldsymbol{\ell} = h\,\big[E_y(x+\Delta x,\,t) - E_y(x,\,t)\big]$$

Todo evaluado en el **mismo instante** $t$: la ley se aplica en un instante dado.

**Flujo magnético.** Con $\hat{z}$ saliente —la orientación coherente con el
sentido de recorrido de $C$— y $\Delta x$ pequeño:

$$\Phi_B \simeq B_z(x,t)\,\Delta x\,h$$

> Se desprecia la variación de $B$ dentro del rectángulo porque $\Delta x$ es
> pequeño. **En la circulación no se podía hacer lo mismo**: si ahí se despreciara
> la variación de $E$, el resultado sería idénticamente cero. Esa diferencia es
> justamente la que hace aparecer una derivada.

Sustituyendo en Faraday, $\oint \mathbf{E}\cdot d\boldsymbol{\ell} = -\,d\Phi_B/dt$
—sin olvidar el signo menos—:

$$h\big[E_y(x+\Delta x,t) - E_y(x,t)\big] = -\,\Delta x\,h\,\frac{\partial B_z}{\partial t}$$

Se cancela $h$, se divide entre $\Delta x$ y se toma el límite $\Delta x \to 0$:

$$\boxed{\ \frac{\partial E_y}{\partial x} = -\,\frac{\partial B_z}{\partial t}\ }
\qquad \text{(Faraday para la onda plana)}$$

> Hasta acá **no se usó la forma sinusoidal**: lo único que se usó es que la onda
> es **plana**, es decir, que no depende de las direcciones laterales.

### 6.2 Sustitución de la onda sinusoidal en Faraday

Ahora sí se sustituyen $E_y = E_0\operatorname{sen}(kx-\omega t)$ y
$B_z = B_0\operatorname{sen}(kx-\omega t)$. Derivando cada lado:

$$k\,E_0\cos(kx-\omega t) = -\big[-\omega\,B_0\cos(kx-\omega t)\big]
                          = \omega\,B_0\cos(kx-\omega t)$$

Como esto debe valer **para todo $x$ y todo $t$**, los cosenos se cancelan:

$$k\,E_0 = \omega\,B_0 \quad\Longrightarrow\quad B_0 = \frac{k}{\omega}E_0$$

y como $\omega/k = c$:

$$\boxed{\ B_0 = \frac{E_0}{c}\ } \qquad \text{(primera relación)}$$

> Esta relación **no dice nada todavía sobre el valor de $c$**: sólo establece un
> vínculo entre las amplitudes de oscilación de los campos eléctrico y magnético.
> Hace falta usar la otra ecuación.

### 6.3 Ampère–Maxwell sobre un rectángulo en el plano xz

Se repite el procedimiento con un rectángulo de altura $h$ y ancho $\Delta x$, pero
ahora en el plano $xz$, y se aplica Ampère–Maxwell **con $I = 0$** (estamos en el
vacío):

$$\oint_C \mathbf{B}\cdot d\boldsymbol{\ell} = \mu_0\varepsilon_0\frac{d\Phi_E}{dt}$$

> La estructura es casi idéntica a la de Faraday. Las dos diferencias: **no hay
> signo menos** en el miembro derecho, y aparece el factor $\mu_0\varepsilon_0$.

**Circulación de $\mathbf{B}$.** Acá hay una sutileza de signo: por la orientación
del rectángulo en el plano $xz$, el tramo de $x$ mayor se recorre *acercándose* al
eje y el de $x$ menor *alejándose* —al revés de lo que pasaba en el caso anterior—.
Entra entonces un **signo menos**:

$$\oint_C \mathbf{B}\cdot d\boldsymbol{\ell} = -\,h\big[B_z(x+\Delta x,t) - B_z(x,t)\big]$$

**Flujo eléctrico**, en la dirección acorde con la curva:

$$\Phi_E \simeq E_y(x,t)\,\Delta x\,h$$

Sustituyendo, cancelando $h$ y tomando $\Delta x \to 0$:

$$\boxed{\ -\,\frac{\partial B_z}{\partial x} = \mu_0\varepsilon_0\,\frac{\partial E_y}{\partial t}\ }
\qquad \text{(Ampère--Maxwell para la onda plana)}$$

Sustituyendo ahora la forma sinusoidal:

$$-\,B_0\,k\cos(kx-\omega t) = \mu_0\varepsilon_0\,\big[-\omega\,E_0\cos(kx-\omega t)\big]$$

y como vale para todo $x$ y todo $t$:

$$B_0\,k = \mu_0\varepsilon_0\,\omega\,E_0 \quad\Longrightarrow\quad
B_0 = \mu_0\varepsilon_0\frac{\omega}{k}E_0$$

$$\boxed{\ B_0 = \mu_0\varepsilon_0\,c\,E_0\ } \qquad \text{(segunda relación)}$$

### 6.4 Combinación: la velocidad de la luz

Igualando las dos expresiones obtenidas para $B_0$:

$$\frac{E_0}{c} = \mu_0\varepsilon_0\,c\,E_0$$

Queremos una solución con **onda de verdad**, es decir $E_0 \neq 0$: si $E_0 = 0$
entonces $B_0 = 0$ y simplemente no hay campos —es la solución trivial, la
situación sin onda—. Podemos entonces dividir entre $E_0$:

$$\frac{1}{c} = \mu_0\varepsilon_0\,c \quad\Longrightarrow\quad c^2 = \frac{1}{\mu_0\varepsilon_0}$$

$$\boxed{\ c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3{,}0\times 10^{8}\ \text{m/s}\ }$$

> **Lo notable del resultado.** La velocidad de la luz quedó calculada a partir de
> **propiedades puramente electromagnéticas**: $\mu_0$ y $\varepsilon_0$ se miden
> en el laboratorio con experimentos de electricidad y magnetismo, sin ninguna
> referencia a la luz. Además, **todas** estas ondas se propagan a la misma
> velocidad.

---

## 7. La medición de c: el experimento de Fizeau

En la época de Maxwell ya se sabía medir $c$ de manera independiente, y el valor
coincidía con el cálculo electromagnético. Uno de esos métodos es el de **Fizeau**:

- Se colocan dos puntos muy alejados —por ejemplo, dos elevaciones—: en uno, una
  **rueda dentada** que gira con velocidad angular $\omega$; en el otro, un
  **espejo**.
- La rueda es un disco con **rendijas equiespaciadas**. La luz sale por una
  rendija, viaja hasta el espejo, rebota y vuelve.
- Si el tiempo de ida y vuelta coincide con el que tarda la rueda en avanzar de una
  rendija a la siguiente, la luz **pasa** y se ve. Si la rueda gira un poco más
  rápido o más lento, la luz vuelve a una **zona opaca** y se apaga.
- Ajustando $\omega$ y conociendo la distancia, se despeja $c$. Con una distancia
  suficientemente grande la medida es precisa, a pesar de lo enorme que es $c$.

> La $\omega$ de la rueda dentada **no tiene nada que ver** con la frecuencia
> angular de la onda de §3.4: es sólo una coincidencia de notación.

Que el valor medido por métodos ópticos coincidiera con
$1/\sqrt{\mu_0\varepsilon_0}$ —calculado con constantes puramente
electromagnéticas— fue la confirmación de que **la luz es una onda
electromagnética**.

---

> **Los tres finales del curso.** El docente describe el curso como una película
> con tres finales: el primero fue llegar a las ecuaciones de los circuitos de
> corriente alterna; el segundo es esta clase, llegar a las ecuaciones de Maxwell;
> el tercero será la óptica. Cada final es el comienzo de otra cosa.

*Continúa en la Clase 25: vector de Poynting y transporte de energía en ondas
electromagnéticas, espectro electromagnético, índice de refracción y entrada a la
óptica.*
