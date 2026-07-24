# Resumen Clase 7 — Conductores con Cavidades, Campo en la Superficie, Test Experimental de Gauss y Energía/Potencial Eléctrico

---

## Índice

1. [Repaso: conductor en equilibrio](#1-repaso-conductor-en-equilibrio)
2. [Conductor aislado con cavidad](#2-conductor-aislado-con-cavidad)
   - [2.1 La carga se ubica en la superficie externa](#21-la-carga-se-ubica-en-la-superficie-externa)
   - [2.2 Densidad superficial interna nula y estabilidad](#22-densidad-superficial-interna-nula-y-estabilidad)
3. [Campo eléctrico justo afuera de un conductor](#3-campo-eléctrico-justo-afuera-de-un-conductor)
   - [3.1 El argumento erróneo de Resnick](#31-el-argumento-erróneo-de-resnick)
   - [3.2 Cálculo por Gauss](#32-cálculo-por-gauss)
   - [3.3 Paradoja aparente: plano conductor vs plano cargado](#33-paradoja-aparente-plano-conductor-vs-plano-cargado)
4. [Prueba experimental de la Ley de Gauss](#4-prueba-experimental-de-la-ley-de-gauss)
5. [Energía y potencial eléctrico](#5-energía-y-potencial-eléctrico)
   - [5.1 Fuerzas conservativas](#51-fuerzas-conservativas)
   - [5.2 La fuerza electrostática es conservativa](#52-la-fuerza-electrostática-es-conservativa)
   - [5.3 Energía potencial eléctrica](#53-energía-potencial-eléctrica)
   - [5.4 Energía potencial de un conjunto de cargas](#54-energía-potencial-de-un-conjunto-de-cargas)
6. [Potencial eléctrico](#6-potencial-eléctrico)
   - [6.1 Definición](#61-definición)
   - [6.2 Diferencia de potencial y campo eléctrico](#62-diferencia-de-potencial-y-campo-eléctrico)

---

## 1. Repaso: conductor en equilibrio

De la Clase 6, para un conductor en equilibrio electrostático se probó (usando la Ley de Gauss):

- La **carga neta se ubica en la superficie** del conductor.
- El **campo eléctrico en el interior es nulo** ($\mathbf{E}=0$).

En esta clase se completan las propiedades de conductores y se testea experimentalmente la Ley de Gauss, antes de iniciar el capítulo de energía y potencial.

---

## 2. Conductor aislado con cavidad

**Configuración:** un conductor **aislado** (lejos de todo otro objeto cargado) en equilibrio electrostático, con un **hueco** (cavidad) en su interior. La cavidad no forma parte del conductor y **no contiene cargas**. El conductor tiene entonces dos superficies: una **externa** y una **interna** (la de la cavidad).

### 2.1 La carga se ubica en la superficie externa

**Afirmación:** toda la carga se ubica en la superficie **externa**; la carga neta en la superficie interna es cero.

**Prueba (Gauss):** se toma una superficie gaussiana cerrada $S$ contenida **dentro del material** del conductor, que rodea completamente a la cavidad. Como $\mathbf{E}=0$ en todo el material conductor:

$$
\Phi = \oiint_S \mathbf{E}\cdot d\mathbf{A} = 0 \;\Longrightarrow\; Q_{\text{int}} = \varepsilon_0 \Phi = 0
$$

Como en la cavidad no hay cargas, la **carga neta en la superficie interna es cero**.

### 2.2 Densidad superficial interna nula y estabilidad

El argumento anterior solo prueba que la carga **neta** interna es cero, pero no descarta que haya zonas con $\sigma > 0$ y otras con $\sigma < 0$ que se cancelen. Para descartarlo hace falta un argumento **de estabilidad**:

- Si hubiera densidades de signos opuestos en la superficie interna, aparecerían líneas de campo a través de la cavidad conectándolas, y las cargas superficiales **se moverían** (las positivas hacia las negativas), lo que contradice el equilibrio.

> **Sutileza (contraejemplos):** se pueden inventar formas de cavidad donde cargas opuestas quedan "atoradas" en un equilibrio **localmente estable pero globalmente inestable** (p. ej. objetos macroscópicos en pozos separados). En la práctica esto **no ocurre** con portadores de carga reales: los electrones, por agitación térmica, siempre encuentran el camino para escaparse y neutralizarse. Por eso la conclusión ($\sigma_{\text{interna}}=0$) requiere **dos ingredientes**: Gauss (carga neta cero) **y** la estabilidad del equilibrio.

---

## 3. Campo eléctrico justo afuera de un conductor

Con una densidad superficial $\sigma$ en la superficie, se busca el campo **justo afuera** del conductor. **No** es análogo a una lámina infinita cargada: la lámina emite campo hacia ambos lados, mientras que aquí el campo sale **solo hacia afuera** (adentro $\mathbf{E}=0$).

### 3.1 El argumento erróneo de Resnick

Se **admite** (a probar más adelante) que el campo justo afuera es **normal** a la superficie. El Resnick da un argumento para esto **que está mal** (ejercicio: encontrar el error):

> *Argumento de Resnick:* si el campo tuviera componente tangencial, las cargas de la superficie se moverían → luego no hay componente tangencial.

**El error:** aplica un razonamiento sobre el campo **afuera** a las cargas que están **en/dentro** del conductor. Implícitamente supone que la **componente tangencial es continua** a través de la superficie. Pero si se admite esa continuidad, como adentro la componente tangencial ya es cero, no habría nada que probar. El punto delicado es que la componente **normal NO es continua** (salta de $0$ a un valor no nulo), así que hay que justificar por qué la **tangencial sí** lo es. El resultado (campo normal) es correcto, pero el argumento de Resnick no.

### 3.2 Cálculo por Gauss

Admitiendo que $\mathbf{E}$ es normal, se usa una superficie gaussiana en forma de **cilindro muy achatado** ("pastillita"), con una tapa afuera y otra dentro del conductor:

| Parte | Flujo | Razón |
|-------|-------|-------|
| Lateral | $0$ | $\mathbf{E}$ normal a la superficie ⇒ $\mathbf{E}\perp\hat{\mathbf{n}}$ |
| Tapa interior | $0$ | $\mathbf{E}=0$ dentro del conductor |
| Tapa exterior ($S$ pequeña) | $E\,S$ | $\mathbf{E}\parallel\hat{\mathbf{n}}$ |

Flujo total $\approx E\,S$. Por Gauss, con carga encerrada $\sigma S$:

$$
E\,S = \frac{\sigma S}{\varepsilon_0} \;\Longrightarrow\; \boxed{E = \frac{\sigma}{\varepsilon_0}}
$$

> El resultado vale **punto a punto**: si $\sigma$ no es uniforme, para el campo en un punto se usa el $\sigma$ **de ese punto**. La superficie gaussiana debe ser **cerrada** (por eso el cilindro y no una simple tapa tangente).

### 3.3 Paradoja aparente: plano conductor vs plano cargado

- Plano infinito **cargado** (no conductor): $E = \dfrac{\sigma}{2\varepsilon_0}$ (Clase 6).
- Plano infinito **conductor**: la fórmula recién obtenida da $E = \dfrac{\sigma}{\varepsilon_0}$.

**Resolución:** todo conductor tiene un pequeño espesor. La carga se reparte por **simetría** en sus **dos caras**, con densidad $\sigma' = \sigma/2$ en cada una. La fórmula del conductor usa la densidad de la cara **pegada** al punto de medición:

$$
E = \frac{\sigma'}{\varepsilon_0} = \frac{\sigma/2}{\varepsilon_0} = \frac{\sigma}{2\varepsilon_0}
$$

Ambas expresiones son **coherentes**: la aparente contradicción viene de llamar $\sigma$ a cosas distintas (la carga total del plano vs. la de una sola cara). Para Gauss solo cuenta la carga **encerrada** por la superficie ("los de afuera son de palo"); para Coulomb hay que sumar ambas caras — y da lo mismo.

---

## 4. Prueba experimental de la Ley de Gauss

Como Gauss y Coulomb son **equivalentes en electrostática**, testear Gauss es una **prueba indirecta** de Coulomb, mucho más precisa que medir fuerzas directamente.

**Experimento (caja metálica / balde):**
1. Se tiene una caja metálica conductora.
2. Se cuelga una bolita conductora **cargada** de un hilo aislante y se introduce en la caja (se induce polarización).
3. Se tapa la caja (con un agujerito despreciable para el hilo): ahora es una cavidad cerrada.
4. Se deja que la bolita **toque el fondo**: al hacer contacto forman **un solo conductor**, y por Gauss la carga migra a la **superficie exterior**. La carga en la bolita pasa a ser **cero**.
5. Se saca la bolita y se mide su carga: es **cero**.

> **Por qué es tan preciso:** medir si un objeto tiene carga o **no** (blanco/negro) se hace con muchísima más precisión que medir la fuerza entre cargas. Con este tipo de test se acota el exponente de Coulomb: $F \propto 1/r^{2+\delta}$ con $|\delta| < 10^{-15}$.

**Historia:** el experimento fue **propuesto por Priestley en 1767** (antes que Coulomb), quien ya había comprendido que hallar carga cero implica la ley $1/r^2$ — pero no lo ejecutó con precisión. Ventaja adicional: el resultado **no depende** de que la caja esté perfectamente descargada.

*(Con esto se cierra el capítulo 3, Ley de Gauss.)*

---

## 5. Energía y potencial eléctrico

Comienza el **capítulo 4**. Las consideraciones energéticas son especialmente útiles cuando las fuerzas son **conservativas**.

### 5.1 Fuerzas conservativas

Una fuerza es **conservativa** si el trabajo para llevar el sistema de un punto a otro **no depende del camino**; equivalentemente, el trabajo en cualquier **curva cerrada es cero**:

$$
W_{I\to F}^{(C_1)} = W_{I\to F}^{(C_2)} \quad \forall\, C_1, C_2
\qquad\Longleftrightarrow\qquad \oint \mathbf{F}\cdot d\mathbf{l} = 0
$$

### 5.2 La fuerza electrostática es conservativa

Se calcula el trabajo de la fuerza electrostática de una carga puntual $Q$ sobre otra $Q_0$ que se mueve por una curva $C$ desde $I$ hasta $F$:

$$
W_{I\to F} = \int_C \mathbf{F}\cdot d\mathbf{l}
= \frac{Q_0 Q}{4\pi\varepsilon_0}\int_C \frac{\hat{\mathbf{r}}}{r^2}\cdot d\mathbf{l}
$$

Como $\hat{\mathbf{r}}\cdot d\mathbf{l} = dr$ (solo cuenta el cambio de distancia radial), la integral de línea se reduce a una integral ordinaria:

$$
W_{I\to F} = \frac{Q_0 Q}{4\pi\varepsilon_0}\int_{r_i}^{r_f}\frac{dr}{r^2}
= \frac{Q_0 Q}{4\pi\varepsilon_0}\left(\frac{1}{r_i} - \frac{1}{r_f}\right)
$$

$$
\boxed{W_{I\to F} = \frac{Q_0 Q}{4\pi\varepsilon_0}\left(\frac{1}{r_i} - \frac{1}{r_f}\right)}
$$

El resultado **solo depende de las posiciones inicial y final**, no del camino ⇒ la fuerza electrostática es **conservativa**.

> Aunque se probó solo para dos cargas, es muy intuitivo (por superposición) que las fuerzas electrostáticas de **cualquier** sistema son conservativas: el trabajo sobre una carga es la suma de los trabajos de todas las demás.

### 5.3 Energía potencial eléctrica

Al ser conservativa, la fuerza tiene asociada una **energía potencial** $U$:

$$
\Delta U = U_F - U_I = -\,W_{I\to F}
$$

Solo están bien definidas las **diferencias** de $U$; el valor absoluto depende de una **constante aditiva** (elección del nivel de referencia), igual que la energía potencial gravitatoria.

**Convención habitual:** $U = 0$ cuando todas las cargas están **infinitamente alejadas**. Con ella, para dos cargas:

$$
\boxed{U(r) = \frac{Q_0 Q}{4\pi\varepsilon_0\, r}}
$$

- **Cargas de igual signo** ($Q_0 Q > 0$): $U > 0$. Un agente externo hizo trabajo positivo para acercarlas; sueltas, se repelen hacia el mínimo de energía (infinito).
- **Cargas de signo opuesto** ($Q_0 Q < 0$): $U < 0$. Sueltas, se atraen hacia el mínimo de energía (contacto).

### 5.4 Energía potencial de un conjunto de cargas

Se arma el sistema trayendo las cargas **una a una** desde el infinito (posible por ser la fuerza conservativa):

- La 1ª carga llega "gratis" (no hay otra): $W=0$.
- La 2ª siente a la 1ª: $W_2 = -\dfrac{Q_1 Q_2}{4\pi\varepsilon_0 R_{12}}$.
- La 3ª siente a la 1ª y la 2ª: dos términos, etc.

Sumando y usando $U = -W_{\infty\to F}$:

$$
\boxed{U = \frac{1}{4\pi\varepsilon_0}\sum_{i<j}\frac{Q_i\, Q_j}{R_{ij}}}
$$

Es la suma sobre **todas las parejas**, contando cada una **una sola vez** (de ahí $i<j$).

---

## 6. Potencial eléctrico

### 6.1 Definición

En $U$, se aísla la parte que depende de la posición de **una** carga (p. ej. $Q_1$). Todos esos términos son proporcionales a $Q_1$:

$$
U_{Q_1} = \frac{Q_1}{4\pi\varepsilon_0}\sum_{i\neq 1}\frac{Q_i}{R_{1i}}
$$

El **potencial electrostático** experimentado por $Q_1$ se define como esa energía por unidad de carga (independiente de $Q_1$):

$$
\boxed{V = \frac{U_{Q_1}}{Q_1}}
$$

Al igual que $U$, el potencial $V$ está definido a menos de una **constante aditiva**; lo bien definido son las **diferencias de potencial**.

### 6.2 Diferencia de potencial y campo eléctrico

Desplazando solo la carga de prueba $Q_0$ (las demás fijas) de $A$ a $B$:

$$
V_B - V_A = \frac{U_B - U_A}{Q_0} = -\frac{1}{Q_0}\,W_{A\to B}
= -\frac{1}{Q_0}\int_A^B \mathbf{F}\cdot d\mathbf{l}
$$

Como $\mathbf{F} = Q_0\mathbf{E}$, los $Q_0$ se cancelan:

$$
\boxed{V_B - V_A = -\int_A^B \mathbf{E}\cdot d\mathbf{l}}
$$

La integral es independiente del camino (fuerza conservativa). Como $\mathbf{E}$ no depende de $Q_0$, la diferencia de potencial tampoco — es una propiedad del campo, no de la carga de prueba.

*(La próxima clase continúa con el potencial eléctrico, superficies equipotenciales y el gradiente.)*
