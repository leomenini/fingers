# Resumen Clase 4 — Conductores en equilibrio, dipolo eléctrico y comienzo del desarrollo multipolar

## Índice

1. [Repaso: de Gauss a Coulomb](#1-repaso-de-gauss-a-coulomb)
2. [Conductores en equilibrio](#2-conductores-en-equilibrio)
   - 2.1 [Campo y densidad de carga en el interior](#21-campo-y-densidad-de-carga-en-el-interior)
   - 2.2 [Conductor con hueco: la carga vive en el borde exterior](#22-conductor-con-hueco-la-carga-vive-en-el-borde-exterior)
   - 2.3 [Campo justo afuera: componente tangencial nula](#23-campo-justo-afuera-componente-tangencial-nula)
   - 2.4 [Campo justo afuera: componente normal](#24-campo-justo-afuera-componente-normal)
3. [La idea del desarrollo multipolar](#3-la-idea-del-desarrollo-multipolar)
4. [El dipolo eléctrico](#4-el-dipolo-eléctrico)
   - 4.1 [Campo exacto de dos cargas opuestas](#41-campo-exacto-de-dos-cargas-opuestas)
   - 4.2 [La fórmula maestra del desarrollo](#42-la-fórmula-maestra-del-desarrollo)
   - 4.3 [Campo del dipolo a gran distancia](#43-campo-del-dipolo-a-gran-distancia)
   - 4.4 [Potencial del dipolo](#44-potencial-del-dipolo)
5. [Dipolo en un campo externo: energía y fuerza](#5-dipolo-en-un-campo-externo-energía-y-fuerza)
6. [Desarrollo multipolar de una distribución continua](#6-desarrollo-multipolar-de-una-distribución-continua)

---

## 1. Repaso: de Gauss a Coulomb

La clase anterior había mostrado que la ley de Coulomb **implica** la ley de Gauss. La clase abre cerrando el círculo: la implicación también vale al revés, y el caso de la carga puntual lo exhibe.

Sea una carga puntual $Q>0$ en el origen. El argumento no arranca por la cuenta sino por la **simetría**: si la carga se piensa puntual, todas las direcciones son equivalentes, de modo que

- $\vec E$ es **radial** en todo punto, y
- $|\vec E|$ es el mismo en dos puntos a igual distancia de la carga.

> Dirección y sentido se determinan **a priori**, antes de aplicar Gauss. La ley de Gauss sólo aporta el módulo. Este orden —simetría primero, ley después— es el que hace útil a Gauss para calcular.

Con una superficie gaussiana esférica de radio $r$ centrada en la carga, el flujo saliente sale de la integral porque el módulo es constante sobre ella:

$$\oiint_S \vec E \cdot d\vec S = |\vec E| \oiint_S dS = 4\pi r^2\,|\vec E| = \frac{Q}{\varepsilon_0}$$

$$\boxed{|\vec E| = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}}$$

que es Coulomb, con el sentido saliente si $Q>0$ y entrante si $Q<0$.

---

## 2. Conductores en equilibrio

### 2.1 Campo y densidad de carga en el interior

Sea un **conductor en equilibrio** (un metal, aunque el argumento no usa que sea metálico).

**Primero, $\vec E = 0$ adentro.** El argumento es por el absurdo y es físico, no matemático: si el campo interior no fuera nulo, las cargas se moverían. Si hay carga neta, se movería la carga neta; si no la hay, el material se polarizaría —las positivas hacia un lado, las negativas hacia el otro—. Cualquiera de las dos cosas contradice estar en equilibrio.

**Segundo, $\rho = 0$ adentro.** Esto ya no es un argumento físico independiente: es una consecuencia inmediata de la forma diferencial de Gauss, que es justamente la herramienta nueva del curso. De

$$\nabla\cdot\vec E = \frac{\rho}{\varepsilon_0} \quad\Longrightarrow\quad \rho = \varepsilon_0\,\nabla\cdot\vec E = 0$$

porque la divergencia de un campo idénticamente nulo es nula.

> Conductor en equilibrio: $\vec E = 0$ y $\rho = 0$ en el interior. La carga neta, si la hay, sólo puede estar en **alguna** superficie.

> Nótese el contraste de método con Física III: allá esto se argumenta con superficies gaussianas encogidas; acá sale en un renglón de la forma diferencial. Es exactamente la ganancia que el curso viene a capitalizar.

### 2.2 Conductor con hueco: la carga vive en el borde exterior

Considérese ahora un conductor en equilibrio con un **hueco interior sin cargas** (puede haber carga en el conductor, pero no dentro del hueco). Lo anterior dice que la carga está en algún borde, pero ahora hay **dos** bordes: el exterior y el que rodea el hueco. La propiedad extra es que **está toda en el exterior**.

**Paso 1 — la carga neta en la superficie interna es cero.** Se toma una superficie gaussiana $S$ pegada al hueco pero **del lado del material**, de modo que encierre a la superficie interna. Como $S$ está enteramente dentro del conductor, $\vec E = 0$ sobre ella, y por lo tanto su flujo es nulo. Gauss da entonces

$$Q_{\text{encerrada}} = 0 \quad\Longrightarrow\quad Q_{\text{sup. interna}} = 0$$

(usando que dentro del hueco no hay carga).

**Paso 2 — y no sólo la neta: la densidad es cero punto a punto.** Acá está la sutileza que el docente insiste en no saltear. El paso 1 no excluye una configuración con **zonas de $\sigma>0$ y zonas de $\sigma<0$ sobre la superficie interna que se compensen**. Para descartarla no alcanza Gauss: hay que usar la otra propiedad del caso electrostático, que la circulación del campo es nula sobre **cualquier** curva cerrada.

Si existiera esa configuración de parches, habría un campo eléctrico **dentro del hueco**, yendo de las zonas positivas a las negativas. Se toma entonces una curva cerrada que pase por el hueco (donde $\vec E \neq 0$ y va en el sentido del recorrido) y se cierre por dentro del material (donde $\vec E = 0$). El tramo por el material no aporta y el tramo por el hueco aporta positivo, de modo que

$$\oint_C \vec E\cdot d\vec\ell > 0$$

lo que contradice la electrostática. Luego la configuración de parches es imposible.

> **⚠ El argumento intuitivo no alcanza**
>
> Decir "las cargas positivas y negativas se atraen, así que se neutralizan" **no es una demostración**. El docente construye a propósito un contraejemplo aparente: un hueco de forma alargada con carga positiva en un extremo y negativa en el otro parece localmente estable —"los electrones no van a querer dar la vuelta"—. Sí dan la vuelta, pero eso no es obvio desde el argumento de atracción. Lo que cierra el caso es la circulación nula, que es global.

### 2.3 Campo justo afuera: componente tangencial nula

Ahora el campo **inmediatamente afuera** del conductor. El resultado conocido es que es normal a la superficie; la pregunta es cómo se prueba. Se prueba en dos pasos, y el primero **no** usa Gauss.

Se toma una **curva cerrada pequeña** $C$, rectangular y achatada, con un lado justo afuera de la superficie y el lado opuesto justo adentro del material (la superficie se supone suave; si tiene aristas el argumento no vale). Como la curva es chica y achatada, los lados cortos no contribuyen, y de los dos lados largos:

- el interior no aporta, porque adentro $\vec E = 0$;
- el exterior aporta sólo su **componente tangencial**, porque el producto escalar $\vec E\cdot d\vec\ell$ proyecta sobre la dirección del recorrido.

Entonces $\oint_C \vec E\cdot d\vec\ell = E_t\,\Delta\ell = 0$, y como $\Delta\ell \neq 0$,

$$\boxed{E_t = 0 \quad\text{justo afuera del conductor}}$$

Como la dirección tangencial elegida era arbitraria, **toda** componente tangencial se anula.

> El docente señala que esta demostración **está mal hecha en el Resnick** — uno de los pocos errores que dice haberle encontrado al libro.

### 2.4 Campo justo afuera: componente normal

Descartada la componente tangencial, sólo queda la normal, y ahora sí entra Gauss. Se toma una superficie gaussiana con forma de **cilindro chato y chico** ("cilindrito") a caballo del borde: una tapa afuera, la otra adentro del material, y altura despreciable.

- La tapa interior no aporta: $\vec E = 0$.
- La cara lateral no aporta: es de altura despreciable y, además, el campo exterior es normal.
- La tapa exterior aporta $E_n\,\Delta S$.

La carga encerrada está concentrada en la superficie, así que vale $\sigma\,\Delta S$. Gauss da $E_n\,\Delta S = \sigma\,\Delta S/\varepsilon_0$, o sea

$$\boxed{E_n = \frac{\sigma}{\varepsilon_0}}$$

> **Dos precisiones sobre este resultado**
>
> 1. **No hace falta que $\sigma$ sea uniforme.** En una superficie de forma cualquiera la densidad se distribuye de manera inhomogénea, pero la relación vale **punto a punto**: en cada punto el campo es normal y su valor es el $\sigma$ **de ese punto** sobre $\varepsilon_0$.
> 2. **El signo importa.** La fórmula tal como está da la componente normal saliente con su signo: si $\sigma>0$ el campo apunta hacia afuera, y si $\sigma<0$ apunta hacia adentro. Si se escribe la igualdad entre módulos hay que poner $|\vec E| = |\sigma|/\varepsilon_0$.

---

## 3. La idea del desarrollo multipolar

Con esto termina el repaso y empieza el tema nuevo. La motivación es una pregunta simple: si se tiene una **distribución localizada** de carga —discreta o continua, pero confinada a una región— y se la mira desde muy lejos, ¿cómo se comporta?

- **Casi siempre, como una carga puntual**, con la carga neta total.
- **Si la carga neta es nula**, ese efecto desaparece y lo que queda, visto de lejos, es un objeto un poco más complicado: un **dipolo eléctrico**.
- **Si además el momento dipolar es nulo**, lo que queda es un objeto todavía más complicado: un **cuadrupolo**.
- Y así sucesivamente.

> **La idea de fondo**
>
> Toda distribución localizada de carga, vista de lejos, **se simplifica**: se comporta como una jerarquía de objetos caracterizables, y uno puede llevar la descripción al nivel de precisión que quiera agregando términos.

El orden de la clase es deliberado: primero el dipolo (que ya se vio en Física III, aunque no tan matemáticamente), como calentamiento; después la generalización a una distribución cualquiera.

---

## 4. El dipolo eléctrico

### 4.1 Campo exacto de dos cargas opuestas

Un **dipolo**, en esta primera definición, son dos cargas de igual módulo y signo opuesto. (El docente advierte que ésta no es la única definición y que más adelante vendrá una más general.)

Geometría: con el origen fijado, la carga $-Q$ está en $\vec r\,'$, y la carga $+Q$ en $\vec r\,' + \vec L$; el vector $\vec L$ va de la negativa a la positiva. El punto de observación $P$ está en $\vec r$.

El campo es pura superposición de dos Coulomb, sin ninguna aproximación:

$$\vec E(\vec r) = \frac{Q}{4\pi\varepsilon_0}\left[\frac{\vec r - \vec r\,' - \vec L}{|\vec r - \vec r\,' - \vec L|^3} - \frac{\vec r - \vec r\,'}{|\vec r - \vec r\,'|^3}\right]$$

> Hasta acá, en palabras del docente, "es una trivialidad, es simplemente escribir Coulomb". Lo que interesa —y no es trivial— es el comportamiento a **gran distancia**.

### 4.2 La fórmula maestra del desarrollo

"Gran distancia" significa $|\vec r - \vec r\,'| \gg L$. Antes de desarrollar hay dos observaciones metodológicas que el docente subraya:

1. **Hacer $|\vec r - \vec r\,'|$ grande es lo mismo que hacer $L\to 0$**: lo que importa es la comparación entre las dos, no el valor de ninguna. Y el límite $L\to 0$ es trivial (da cero); lo interesante es la **corrección** a ese límite, es decir, el desarrollo de Taylor.
2. **Los desarrollos se hacen en cantidades adimensionadas.** No tiene sentido decir que una distancia es grande o chica: es chica *comparada con otra*. El parámetro del desarrollo es $L/|\vec r - \vec r\,'|$.

Conviene entonces resolver **una sola vez** la expansión genérica que después se usará con distintos exponentes. Sea $n$ entero. El truco es escribir la potencia como un módulo al cuadrado, para poder usar que el módulo al cuadrado de un vector es su producto escalar consigo mismo:

$$\frac{1}{|\vec r - \vec r\,' - \vec L|^{n}} = \left(|\vec r - \vec r\,' - \vec L|^2\right)^{-n/2} = \left(|\vec r - \vec r\,'|^2 + L^2 - 2\,\vec L\cdot(\vec r - \vec r\,')\right)^{-n/2}$$

Se factoriza el orden cero para dejar el corchete adimensionado:

$$= \frac{1}{|\vec r - \vec r\,'|^{n}}\left[1 + \frac{L^2}{|\vec r - \vec r\,'|^2} - \frac{2\,\vec L\cdot(\vec r - \vec r\,')}{|\vec r - \vec r\,'|^2}\right]^{-n/2}$$

Dentro del corchete el primer término correctivo es de orden $(L/|\vec r-\vec r\,'|)^2$ y el segundo de orden $L/|\vec r-\vec r\,'|$: a primer orden sólo sobrevive el segundo. Falta el desarrollo de $f(x) = (1+x)^\alpha$, que se hace "a pedal": $f(0)=1$, $f'(x) = \alpha(1+x)^{\alpha-1}$, $f'(0)=\alpha$, de donde

$$(1+x)^{\alpha} = 1 + \alpha x + \mathcal{O}(x^2)$$

Con $\alpha = -n/2$ y $x = -2\vec L\cdot(\vec r-\vec r\,')/|\vec r-\vec r\,'|^2$, los dos signos menos y el 2 se cancelan contra el $1/2$:

$$\boxed{\frac{1}{|\vec r - \vec r\,' - \vec L|^{n}} = \frac{1}{|\vec r - \vec r\,'|^{n}}\left[1 + n\,\frac{\vec L\cdot(\vec r - \vec r\,')}{|\vec r - \vec r\,'|^{2}}\right] + \mathcal{O}(L^2)}$$

Esta fórmula se usa dos veces en la clase: con $n=3$ para el campo y con $n=1$ para el potencial.

### 4.3 Campo del dipolo a gran distancia

Aplicando la fórmula maestra con $n = 3$ al primer término del campo, y notando que el factor $(\vec r - \vec r\,' - \vec L)$ del numerador ya contiene un $\vec L$ —de modo que multiplicarlo por la corrección lineal daría $\mathcal{O}(L^2)$—:

$$\frac{\vec r - \vec r\,' - \vec L}{|\vec r - \vec r\,' - \vec L|^3} = \frac{\vec r - \vec r\,'}{|\vec r - \vec r\,'|^3} - \frac{\vec L}{|\vec r - \vec r\,'|^3} + \frac{3\,[\vec L\cdot(\vec r - \vec r\,')]\,(\vec r - \vec r\,')}{|\vec r - \vec r\,'|^5} + \mathcal{O}(L^2)$$

Al restar el campo de la carga negativa, **el término de orden cero se cancela** — y tenía que cancelarse:

> Si el término de orden cero no se fuera, el sistema visto de lejos sería equivalente a una carga puntual. Pero su carga neta es cero, así que el efecto de carga puntual debe anularse. "Si no se fuera, cometimos un error."

Definiendo el **momento dipolar eléctrico**

$$\boxed{\vec p = Q\,\vec L}$$

queda, para $L \ll |\vec r - \vec r\,'|$,

$$\boxed{\vec E_{\text{dip}}(\vec r) \simeq \frac{1}{4\pi\varepsilon_0}\left[\frac{3\,[\vec p\cdot(\vec r - \vec r\,')]\,(\vec r - \vec r\,')}{|\vec r - \vec r\,'|^{5}} - \frac{\vec p}{|\vec r - \vec r\,'|^{3}}\right] + \mathcal{O}(L^2)}$$

> La letra $p$ es la misma que la de cantidad de movimiento y **no tiene nada que ver** con ella.

Las correcciones descartadas, de orden $L^2$, se llaman **correcciones cuadrupolares**. No se calculan acá: el docente aclara que se obtienen llevando el mismo desarrollo de Taylor un orden más lejos, y que eso es justamente lo que hará después para una distribución cualquiera.

### 4.4 Potencial del dipolo

El mismo cálculo para el potencial es más corto, y se hace directamente en vez de integrar el campo. Superponiendo los dos potenciales de Coulomb:

$$\phi(\vec r) = \frac{Q}{4\pi\varepsilon_0}\left[\frac{1}{|\vec r - \vec r\,' - \vec L|} - \frac{1}{|\vec r - \vec r\,'|}\right]$$

Ahora la fórmula maestra se usa con $n = 1$. De nuevo el orden cero se cancela contra el segundo término y queda

$$\boxed{\phi_{\text{dip}}(\vec r) \simeq \frac{1}{4\pi\varepsilon_0}\,\frac{\vec p\cdot(\vec r - \vec r\,')}{|\vec r - \vec r\,'|^{3}}}$$

una expresión notoriamente más simple que la del campo.

> **Ejercicio dejado en clase:** verificar que $\vec E_{\text{dip}} = -\nabla\phi_{\text{dip}}$ con las dos expresiones obtenidas. Dan exactamente lo mismo porque en ambos cálculos se descartaron los mismos términos de orden $L^2$ y ambos son lineales en $\vec L$.

---

## 5. Dipolo en un campo externo: energía y fuerza

El problema se da vuelta: ya no interesa el campo *producido* por el dipolo, sino la fuerza que *experimenta* cuando se lo coloca en un campo externo $\vec E_{\text{ext}}$ generado por otras cargas.

**Primera observación, antes de toda cuenta: si el campo externo es uniforme, la fuerza neta es cero.** La fuerza sobre $+Q$ y la fuerza sobre $-Q$ tienen igual módulo y dirección y sentidos opuestos, de modo que se cancelan. (Hay un torque neto, que el docente menciona pero no calcula.)

> Para que haya **fuerza** sobre un dipolo, el campo externo tiene que ser **inhomogéneo**.

Conviene trabajar con el potencial externo, que es más simple. Modelando el dipolo como una barrita rígida de longitud $L$, con $-Q$ en $\vec r$ y $+Q$ en $\vec r + \vec L$, la energía es la suma de carga por potencial de cada una:

$$U = Q\,\phi_{\text{ext}}(\vec r + \vec L) - Q\,\phi_{\text{ext}}(\vec r)$$

**¿Chico respecto de qué?** Acá el docente se detiene en una confusión frecuente: $L$ **no** puede ser chico "respecto de $\vec r$", porque $\vec r$ depende de dónde se ponga el origen, que es una convención (se podría elegir $\vec r = 0$). La escala de comparación correcta es la **distancia típica $H$ en la que el campo externo varía apreciablemente**: la aproximación es $L \ll H$. Es coherente con lo anterior — si el campo es uniforme, $H\to\infty$ y no hay efecto.

El desarrollo de Taylor es ahora **de una función de varias variables**, y se hace por coordenadas:

$$\phi_{\text{ext}}(x + L_x,\, y + L_y,\, z + L_z) = \phi_{\text{ext}}(\vec r) + \frac{\partial \phi_{\text{ext}}}{\partial x}L_x + \frac{\partial \phi_{\text{ext}}}{\partial y}L_y + \frac{\partial \phi_{\text{ext}}}{\partial z}L_z + \mathcal{O}(L^2)$$

Los tres términos lineales son un producto escalar del gradiente con $\vec L$:

$$\phi_{\text{ext}}(\vec r + \vec L) = \phi_{\text{ext}}(\vec r) + \vec L\cdot\nabla\phi_{\text{ext}}(\vec r) + \mathcal{O}(L^2)$$

Sustituyendo, **otra vez el orden cero se cancela** —por la misma razón de siempre: si no hubiera inhomogeneidad no habría efecto—, y con $\vec p = Q\vec L$:

$$U = \vec p\cdot\nabla\phi_{\text{ext}}(\vec r) + \mathcal{O}(L^2)$$

Finalmente, como $\nabla\phi = -\vec E$:

$$\boxed{U = -\,\vec p\cdot\vec E_{\text{ext}}(\vec r) + \mathcal{O}(L^2)}$$

> **⚠ El signo**
>
> $\nabla\phi = -\vec E$, no $+\vec E$. Es un signo fácil de olvidar y que no se debe olvidar: se lo lleva puesto toda la fórmula de la energía.

La fuerza se obtiene como siempre a partir de la energía potencial, $\vec F = -\nabla U$. Se ve inmediatamente la consistencia con la observación inicial: si $\vec E_{\text{ext}}$ es uniforme, $U$ no depende de $\vec r$ y su gradiente es nulo, de modo que la fuerza es cero.

El término $\mathcal{O}(L^2)$ descartado es el que corresponde a **dipolos grandes** —grandes frente a la escala de variación del campo—. Que despreciarlo sea buena aproximación depende del nivel de precisión que se busque; la fórmula general vale siempre, la simplificación es la que tiene condiciones.

---

## 6. Desarrollo multipolar de una distribución continua

El último tramo generaliza todo lo anterior de dos cargas discretas a una **distribución continua cualquiera**. (El cálculo para una distribución discreta es casi idéntico.)

**Planteo.** Una densidad volumétrica $\rho(\vec r\,')$ localizada en un volumen $B$: *localizada* significa que fuera de un volumen finito es despreciable. Se toma el origen **dentro** de $B$ —en un punto cualquiera, no importa cuál— y se llama $a$ al **tamaño típico** de $B$ (por ejemplo, el diámetro de una esfera que lo contenga). El punto de observación $P$ está en $\vec r$, con

$$r \gg a$$

El potencial exacto lo da Coulomb, sin aproximación alguna:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0}\int_B \frac{\rho(\vec r\,')}{|\vec r - \vec r\,'|}\,dV'$$

donde la prima en $dV' = dx'\,dy'\,dz'$ insiste en que la integración es sobre $\vec r\,'$.

**Toda la dependencia en $\vec r$ está en el denominador**, así que el desarrollo se hace ahí. Desarrollar en $r$ grande es lo mismo que desarrollar en $r' \ll r$, porque $r'$ está acotado por $a$.

Misma estrategia que en §4.2: escribir el módulo como producto escalar y factorizar el orden cero.

$$\frac{1}{|\vec r - \vec r\,'|} = \left(r^2 - 2\,\vec r\cdot\vec r\,' + r'^2\right)^{-1/2} = \frac{1}{r}\left[1 - \frac{2\,\vec r\cdot\vec r\,'}{r^2} + \frac{r'^2}{r^2}\right]^{-1/2}$$

Pero ahora **no alcanza el primer orden**: hay que ir al segundo, porque el objetivo es llegar hasta el término cuadrupolar. Se retoma $f(x)=(1+x)^\alpha$ y se calcula una derivada más:

$$f''(x) = \alpha(\alpha-1)(1+x)^{\alpha-2} \;\Longrightarrow\; f''(0) = \alpha(\alpha-1)$$

$$(1+x)^{\alpha} = 1 + \alpha x + \tfrac{1}{2}\,\alpha(\alpha-1)\,x^2 + \mathcal{O}(x^3)$$

> El factor $1/n!$ del desarrollo de Taylor es el que da el $1/2$; el término siguiente sería $\tfrac{1}{6}\alpha(\alpha-1)(\alpha-2)x^3$. Es fácil ir a cualquier orden.

Con $\alpha = -1/2$ y $x = -2\,\vec r\cdot\vec r\,'/r^2 + r'^2/r^2$:

- del término $\alpha x$ salen $\;+\dfrac{\vec r\cdot\vec r\,'}{r^2}\;$ y $\;-\dfrac{1}{2}\dfrac{r'^2}{r^2}$;
- de $\tfrac12\alpha(\alpha-1)x^2 = \tfrac{3}{8}x^2$ hay que **quedarse sólo con el cuadrado del término cruzado**: al elevar $x$ al cuadrado aparecen un término de orden $r'^2$, otro de orden $r'^4$ y un cruzado de orden $r'^3$; los dos últimos ya son de orden superior. El que sobrevive es $\tfrac{3}{8}\cdot\dfrac{4(\vec r\cdot\vec r\,')^2}{r^4} = \dfrac{3}{2}\dfrac{(\vec r\cdot\vec r\,')^2}{r^4}$.

Resultado del desarrollo, que es donde queda la clase:

$$\boxed{\frac{1}{|\vec r - \vec r\,'|} = \frac{1}{r}\left[1 + \frac{\vec r\cdot\vec r\,'}{r^{2}} - \frac{1}{2}\frac{r'^{2}}{r^{2}} + \frac{3}{2}\frac{(\vec r\cdot\vec r\,')^{2}}{r^{4}}\right] + \mathcal{O}\!\left(\left(\tfrac{r'}{r}\right)^{3}\right)}$$

> **Sobre el coeficiente del último término**
>
> El $3/2$ se armó en el pizarrón en dos pasos y con una corrección sobre la marcha: al factor $3/8$ hay que multiplicarlo por el $4$ que sale de elevar al cuadrado el $-2$ del término cruzado. El propio docente detectó en clase que se le había "morfado" un $1/2$ intermedio y lo corrigió.

La clase termina acá, deliberadamente en suspenso: falta meter este desarrollo dentro de la integral y ver qué momentos de la distribución multiplican a cada potencia de $1/r$. Eso es el desarrollo multipolar propiamente dicho.

*Continúa en la Clase 5, donde el desarrollo se sustituye en la integral y aparecen la carga total, el momento dipolar y el tensor cuadrupolar, para luego pasar a las ecuaciones de Poisson y Laplace.*
