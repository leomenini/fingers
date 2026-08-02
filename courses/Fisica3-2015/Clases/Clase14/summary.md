# Resumen Clase 14 — Circuitos RC e Introducción al Campo Magnético

---

## Índice

1. [Circuitos RC](#1-circuitos-rc)
   - [1.1 Comportamiento cualitativo: carga y descarga](#11-comportamiento-cualitativo-carga-y-descarga)
   - [1.2 Experimento con onda cuadrada](#12-experimento-con-onda-cuadrada)
   - [1.3 Ecuación de carga y su resolución](#13-ecuación-de-carga-y-su-resolución)
   - [1.4 Carga y corriente durante la carga](#14-carga-y-corriente-durante-la-carga)
   - [1.5 Descarga del condensador](#15-descarga-del-condensador)
   - [1.6 Constante de tiempo y el experimento de la chispa](#16-constante-de-tiempo-y-el-experimento-de-la-chispa)
2. [Introducción al campo magnético](#2-introducción-al-campo-magnético)
   - [2.1 Imanes y polos](#21-imanes-y-polos)
   - [2.2 No es un fenómeno eléctrico; la Tierra como imán](#22-no-es-un-fenómeno-eléctrico-la-tierra-como-imán)
   - [2.3 No hay monopolos magnéticos](#23-no-hay-monopolos-magnéticos)
   - [2.4 Corrientes e imanes: Oersted y electroimanes](#24-corrientes-e-imanes-oersted-y-electroimanes)
3. [Fuerza magnética sobre una carga en movimiento](#3-fuerza-magnética-sobre-una-carga-en-movimiento)
   - [3.1 El experimento ideal](#31-el-experimento-ideal)
   - [3.2 La ley F = qv×B](#32-la-ley-f--qvb)
   - [3.3 Propiedades y trabajo nulo](#33-propiedades-y-trabajo-nulo)
   - [3.4 Unidades: Tesla y Gauss](#34-unidades-tesla-y-gauss)
   - [3.5 Líneas de campo magnético](#35-líneas-de-campo-magnético)
   - [3.6 Fuerza de Lorentz](#36-fuerza-de-lorentz)

---

## 1. Circuitos RC

Un **circuito RC** contiene fuentes, **resistencias** y **condensadores**. Se estudia el más simple: una FEM $\varepsilon$, un interruptor, una resistencia $R$ y un condensador $C$ en serie. El interruptor tiene dos posiciones: **A** (batería conectada → carga) y **B** (batería descolgada → descarga).

**Convención de signos:** se llama $Q$ a la carga de una placa e $I$ a la corriente entrante. Con esta elección, $I = dQ/dt$ (si se hubiera llamado $Q$ a la carga de la **otra** placa, sería $I = -dQ/dt$; conviene fijar bien las convenciones).

### 1.1 Comportamiento cualitativo: carga y descarga

**Carga (posición A).** Inicialmente el condensador está descargado, así que su diferencia de potencial es **cero** — se comporta como un cable. Entonces la corriente inicial es la de una resistencia sola:

$$
I(0) = \frac{\varepsilon}{R}
$$

A medida que entra carga, crece la diferencia de potencial en el condensador; como la suma de las caídas (resistencia + condensador) es igual a $\varepsilon$ (constante), la caída en la resistencia disminuye y **la corriente decrece**. Al cabo de mucho tiempo el condensador queda **totalmente cargado** e $I \to 0$.

**Descarga (posición B).** Con el condensador ya cargado y la batería desconectada, la carga acumulada circula (tendiendo a una situación de menor energía): la diferencia de potencial y la carga disminuyen hasta que no queda ni carga ni corriente.

### 1.2 Experimento con onda cuadrada

Para visualizar carga y descarga sin conmutar a mano, se alimenta el circuito RC con una **fuente de onda cuadrada** (potencial que alterna entre un valor $V$ y $0$ periódicamente): el tramo alto equivale a "fuente conectada" (carga) y el bajo a "sin fuente" (descarga). Con un osciloscopio se mide:

- **Voltaje en el condensador** ($\propto Q$): sube desde $0$ hasta el valor de la fuente durante la carga, y baja a $0$ durante la descarga.
- **Voltaje en la resistencia** ($\propto I$): la corriente **salta** a un valor no nulo al conectar y decae a cero; en la descarga la corriente aparece con **signo opuesto** (la carga circula al revés), coherente con lo esperado.

### 1.3 Ecuación de carga y su resolución

Aplicando la **ley de mallas** en la posición A (recorriendo en el sentido de la corriente): se sube $\varepsilon$ en la batería, se cae $R\,I$ en la resistencia y $Q/C$ en el condensador:

$$
\varepsilon - R\,I - \frac{Q}{C} = 0 \;\Longrightarrow\; \boxed{R\,\frac{dQ}{dt} + \frac{Q}{C} = \varepsilon}
$$

Es una **ecuación diferencial lineal de primer orden con segundo miembro** (aparecen $Q$ y su derivada de forma lineal, y está igualada a una constante, no a cero).

**Paso 1 — Solución particular evidente.** Corresponde a esperar mucho tiempo ($dQ/dt = 0$): el condensador completamente cargado.

$$
\frac{Q_p}{C} = \varepsilon \;\Longrightarrow\; Q_p = \varepsilon C
$$

**Paso 2 — Restar la particular.** Se define $\tilde{Q}(t) = Q(t) - Q_p$. Como $Q_p$ es constante, $d\tilde{Q}/dt = dQ/dt$, y sustituyendo el término de la FEM se cancela, quedando la **ecuación homogénea**:

$$
R\,\frac{d\tilde{Q}}{dt} + \frac{\tilde{Q}}{C} = 0
$$

> La solución general de la ecuación completa es la suma de **una solución particular + la solución de la homogénea**.

**Paso 3 — Resolver la homogénea por variables separables.** Se separan $Q$ y $t$ a cada lado e integra:

$$
\frac{d\tilde{Q}}{\tilde{Q}} = -\frac{dt}{RC} \;\Longrightarrow\; \ln\frac{\tilde{Q}(t)}{\tilde{Q}_0} = -\frac{t}{RC} \;\Longrightarrow\; \tilde{Q}(t) = \tilde{Q}_0\, e^{-t/RC}
$$

Cuando $t\to\infty$, $\tilde{Q}\to 0$, o sea $Q\to Q_p$ (condensador cargado), como se esperaba.

### 1.4 Carga y corriente durante la carga

La solución general es $Q(t) = \varepsilon C + Q_0\, e^{-t/RC}$. Imponiendo la **condición inicial** $Q(0)=0$: $0 = \varepsilon C + Q_0 \Rightarrow Q_0 = -\varepsilon C$. Por lo tanto:

$$
\boxed{Q(t) = \varepsilon C\left(1 - e^{-t/RC}\right)}
$$

La corriente es su derivada (el término constante deriva a cero):

$$
\boxed{I(t) = \frac{\varepsilon}{R}\, e^{-t/RC}}
$$

Coincide con el experimento: la corriente **salta** a $\varepsilon/R$ en $t=0$ y decae **exponencialmente** a cero.

> **Lo importante es el procedimiento, no memorizar la fórmula:** (1) restar la solución evidente → ecuación homogénea; (2) resolver por variables separables → exponenciales; (3) imponer condiciones iniciales.

### 1.5 Descarga del condensador

En la posición B ya no hay batería, así que la ecuación es directamente la **homogénea**:

$$
R\,\frac{dQ}{dt} + \frac{Q}{C} = 0
$$

cuya solución es $Q(t) = A\, e^{-t/RC}$. Con la condición inicial $Q(0) = q_0$ (carga inicial), resulta $A = q_0$:

$$
\boxed{Q(t) = q_0\, e^{-t/RC}}, \qquad I(t) = \frac{dQ}{dt} = -\frac{q_0}{RC}\, e^{-t/RC}
$$

La corriente es **negativa** durante la descarga (la carga circula en sentido opuesto al de la carga), como se vio en el experimento.

> **Test de signos útil:** si al resolver la carga queda un exponencial **creciente** (signo $+$ en el exponente), hay un error de signos: la carga no puede crecer espontáneamente sin que nadie aporte energía — debe permanecer constante o tender a cero.

### 1.6 Constante de tiempo y el experimento de la chispa

El tiempo característico de carga y descarga es del orden de $\tau = RC$: la carga tiende a $\varepsilon C$ (carga) o a $0$ (descarga) en una escala $RC$.

**Segundo experimento (la chispa).** Se carga un condensador **grande** a $\sim 30$ V con una fuente continua, se lo desconecta y se **cortocircuitan** sus bornes acercando los cables: salta una **chispa**. Como el tiempo de descarga $\propto RC$ y aquí la resistencia (solo la del cable) es diminuta, la descarga es **rapidísima**: un pasaje enorme de carga en muy poco tiempo. La chispa es la carga pasando por el **aire** (que se **ioniza** y emite luz).

> Sin condensador no hay chispa: una resistencia sola no acumula carga (al desconectar la fuente, la corriente cae a cero). Para la chispa se necesita algo que haya **almacenado energía**.

---

## 2. Introducción al campo magnético

Comienza el **capítulo 8**, la segunda gran parte del curso. Hasta ahora todo fue electrostático; ahora se estudia un efecto **específico de las cargas en movimiento**.

### 2.1 Imanes y polos

El magnetismo se conoce desde la antigüedad: ciertas piedras (**magnetitas**, óxidos de hierro), colgadas de un hilo, apuntan siempre en la misma dirección — así se hicieron las **brújulas**. Estas piedras son **imanes**, con dos lados: **polo norte** (apunta al norte geográfico) y **polo sur**. Al acercar dos imanes, el **polo norte de uno atrae al polo sur del otro**.

### 2.2 No es un fenómeno eléctrico; la Tierra como imán

**Los imanes son neutros:** la atracción entre polos **no** es un fenómeno electrostático. No hay cargas positivas de un lado y negativas del otro — es un fenómeno **distinto**, que solo "suena" parecido porque los polos opuestos se atraen.

La **Tierra es un imán grande**. Los imancitos livianos se orientan con su polo norte hacia el norte geográfico. Como el polo norte de un imán es atraído por un polo **sur**, el **polo norte geográfico de la Tierra es un polo sur magnético**.

### 2.3 No hay monopolos magnéticos

Si se **parte** un imán en dos con una sierra, no se obtiene "un polo norte" y "un polo sur" por separado, sino **dos imanes** completos, cada uno con su norte y su sur. No se pueden aislar los polos: **no existen los monopolos magnéticos**.

> **Curiosidad:** algunas teorías predicen monopolos magnéticos, y su existencia (aun de unos pocos) implicaría que la **carga eléctrica está cuantizada**. Pero, pese a muchas búsquedas experimentales, **nunca se ha detectado ninguno**.

### 2.4 Corrientes e imanes: Oersted y electroimanes

En el siglo XIX (Oersted) se descubrió el vínculo entre magnetismo y electricidad:

- **Una corriente genera efectos magnéticos:** un cable con corriente, perpendicular a una mesa, orienta a los imancitos que la rodean (como lo haría un imán). El efecto lo producen **cargas en movimiento**: con cargas quietas **no hay efecto magnético**.
- **Recíprocamente**, una **espira con corriente** cerca de un imán se comporta como un imán (se alinea, es atraída). Es un **electroimán**.
- Dos espiras con corriente ejercen fuerza entre sí.

**Los imanes permanentes funcionan bajo el mismo principio:** a nivel molecular hay pequeñas **corrientes eléctricas**. En la mayoría de los materiales están orientadas al azar (sin efecto macroscópico); en un imán están **todas alineadas**, y su efecto se suma. En definitiva: **todos los efectos magnéticos provienen de cargas en movimiento (corrientes)**, y **los objetos que sienten fuerza magnética son también cargas en movimiento / corrientes**.

> Se dice "corrientes" y no solo "cargas en movimiento" porque a nivel molecular hay corrientes que no corresponden a cargas desplazándose, sino p. ej. al "spin" del electrón (una especie de rotación sobre sí mismo — "especie", porque nada gira realmente).

---

## 3. Fuerza magnética sobre una carga en movimiento

**Problema conceptual:** en el caso eléctrico había **monopolos** (cargas) que generan y sienten campo aun quietas. En magnetismo **no hay monopolos**, así que su papel lo cumplen las **cargas en movimiento**. La descripción pasa de "carga ↔ campo eléctrico ↔ carga" a "**cargas en movimiento ↔ campo magnético ↔ cargas en movimiento**". En este capítulo se **supone conocido** el campo magnético y se estudia la fuerza que ejerce (cómo se genera se verá en el capítulo siguiente).

### 3.1 El experimento ideal

Se ubica un imán (o una bobina con corriente) fijo y, en un punto, se hace pasar una carga $q$ **neutra en su entorno** (para evitar fuerzas eléctricas, que suelen dominar) con distintas velocidades, midiendo la fuerza (idealmente, con un resorte). Repitiendo con distintas cargas, módulos y direcciones de velocidad, se observa:

1. Existe **una dirección** de la velocidad en la que **no hay fuerza**; en todas las demás sí.
2. La fuerza es **proporcional al módulo de la velocidad** (velocidad doble → fuerza doble).
3. La fuerza es **proporcional al valor absoluto de la carga**.
4. La fuerza es **proporcional a $\sin\theta$**, con $\theta$ el ángulo respecto de la dirección "sin fuerza".
5. La fuerza es **perpendicular** tanto a la velocidad como a esa dirección preferencial.

### 3.2 La ley F = qv×B

Todas esas observaciones se resumen en una única **ley vectorial**, definiendo el **campo magnético** $\mathbf{B}$ como un vector en la dirección "sin fuerza":

$$
\boxed{\mathbf{F} = q\, \mathbf{v}\times\mathbf{B}}
$$

- Es un **campo**: repitiendo el experimento en otros puntos, $\mathbf{B}$ cambia — depende de la posición (módulo, dirección y sentido).
- El **producto vectorial** codifica todo: es cero si $\mathbf{v}\parallel\mathbf{B}$ (dirección sin fuerza), su módulo $\propto |q|\,v\,\sin\theta$, y es perpendicular a $\mathbf{v}$ y a $\mathbf{B}$.

### 3.3 Propiedades y trabajo nulo

Resumen de las propiedades contenidas en la ley:

- $\mathbf{F} \perp \mathbf{B}$ y $\mathbf{F} \perp \mathbf{v}$.
- $\mathbf{F} = 0$ si $\mathbf{v}\parallel\mathbf{B}$.
- $|\mathbf{F}| \propto v$, $\propto |q|$, $\propto \sin\theta$.

**Trabajo nulo.** Como $\mathbf{F}$ es en todo instante **perpendicular** a $\mathbf{v}$, la potencia $P = \mathbf{F}\cdot\mathbf{v} = 0$: la **fuerza magnética no realiza trabajo** (al menos con $\mathbf{B}$ uniforme). Puede cambiar la **dirección** de la velocidad, pero no su módulo (ni la energía cinética).

> Cuando $\mathbf{B}$ depende del tiempo aparecen otros efectos (inducción), que se verán al final del curso.

### 3.4 Unidades: Tesla y Gauss

De $F = qvB$, la unidad SI del campo magnético es:

$$
[B] = \frac{\text{N}}{\text{C}\cdot(\text{m/s})} \equiv \text{Tesla (T)}
$$

Otra unidad usada a veces es el **Gauss**, con $1\ \text{T} = 10^{4}$ Gauss. El Tesla es una unidad **grande**: en la mayoría de los experimentos se manejan fracciones de Tesla (solo algunos alcanzan varios Tesla).

### 3.5 Líneas de campo magnético

Las ideas de **líneas de campo** (introducidas para el campo eléctrico y para campos de velocidades) se aplican también a $\mathbf{B}$. Pero como **no hay monopolos magnéticos** (que harían de "cargas" donde nacer o morir), **las líneas de $\mathbf{B}$ son cerradas**: no empiezan ni terminan en ningún lado (o se cierran sobre sí mismas, o van de infinito a infinito).

Ejemplo: en un imán, las líneas salen del polo norte hacia afuera, dan la vuelta y **regresan por dentro** del imán, cerrándose. (Si una línea "fuera al infinito", terminaría en otro imán y volvería a cerrarse.)

### 3.6 Fuerza de Lorentz

Si hay campos eléctrico **y** magnético simultáneamente, la fuerza total sobre la carga es la suma:

$$
\boxed{\mathbf{F} = q\left(\mathbf{E} + \mathbf{v}\times\mathbf{B}\right)}
$$

Es la **fuerza de Lorentz**: la fuerza electromagnética siempre se escribe en términos de un campo eléctrico y uno magnético.

> Próxima clase: se continúa con el campo magnético (movimiento de cargas en campos, fuerza sobre corrientes).
