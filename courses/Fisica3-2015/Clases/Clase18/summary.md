# Resumen Clase 18 — El Toroide, la Ley de Inducción de Faraday y la Ley de Lenz

---

## Índice

1. [Último ejemplo de Ampère: el toroide](#1-último-ejemplo-de-ampère-el-toroide)
   - [1.1 Simetría y curva amperiana](#11-simetría-y-curva-amperiana)
   - [1.2 Corriente encerrada y resultado](#12-corriente-encerrada-y-resultado)
   - [1.3 Campo nulo fuera del toroide](#13-campo-nulo-fuera-del-toroide)
2. [La ley de inducción de Faraday](#2-la-ley-de-inducción-de-faraday)
   - [2.1 Los experimentos de Faraday](#21-los-experimentos-de-faraday)
   - [2.2 El flujo magnético](#22-el-flujo-magnético)
   - [2.3 La FEM inducida (valor absoluto)](#23-la-fem-inducida-valor-absoluto)
   - [2.4 ¿Por qué el coeficiente es 1?](#24-por-qué-el-coeficiente-es-1)
3. [Ejemplo: solenoide grande y bobina chica](#3-ejemplo-solenoide-grande-y-bobina-chica)
4. [Los signos: la ley de Lenz](#4-los-signos-la-ley-de-lenz)
   - [4.1 Enunciado de Lenz](#41-enunciado-de-lenz)
   - [4.2 Ejemplos con imán y espira](#42-ejemplos-con-imán-y-espira)
   - [4.3 Ley de Faraday con signos](#43-ley-de-faraday-con-signos)
5. [Ejemplo: espira que sale de un campo (frenos magnéticos)](#5-ejemplo-espira-que-sale-de-un-campo-frenos-magnéticos)

---

## 1. Último ejemplo de Ampère: el toroide

Antes de abrir el capítulo de inducción, se cierra el tema de la **ley de Ampère** con un cuarto ejemplo que **no** se había calculado con Biot–Savart: el **toroide**. Un toroide es una bobina cerrada sobre sí misma con forma de "rosca" (dona): un embobinado que da vueltas alrededor de un anillo, con radio interno $A$, radio externo $B$ y corriente $I$. La sección puede ser rectangular o circular; no influye en lo que sigue. Se busca el campo magnético **dentro** del toroide, entre los rollos de la bobina.

### 1.1 Simetría y curva amperiana

El sistema tiene **invariancia por rotaciones** alrededor del eje del toroide. Como las líneas de campo magnético son **cerradas** (no hay monopolos: nunca empiezan ni terminan), y deben respetar esa simetría, las líneas de $\mathbf{B}$ dentro del toroide son **circunferencias** concéntricas. Sobre una de ellas —la **curva amperiana** $C$, de radio $R$— el campo es **tangente** y de **módulo constante** (por la invariancia por rotaciones). El rol de $C$ para Ampère es análogo al de la superficie gaussiana para Gauss: se elige respetando la simetría del problema.

Como $\mathbf{B}$ es tangente a $C$ y de módulo constante:

$$
\oint_C \mathbf{B}\cdot d\mathbf{l} = B\oint_C dl = B\,(2\pi R)
$$

### 1.2 Corriente encerrada y resultado

Falta la **corriente encerrada** por $C$: ¿cuánta corriente atraviesa la superficie delimitada por la circunferencia de radio $R$ (con $A < R < B$)? Cada espira del embobinado cruza esa superficie **una vez**, siempre en el **mismo sentido** (entra por dentro y sale por fuera, pero lo de afuera no cuenta). Si hay $N$ espiras, la corriente encerrada es $N\,I$. Por Ampère:

$$
B\,(2\pi R) = \mu_0\, N\, I \;\Longrightarrow\; \boxed{B = \frac{\mu_0\, N\, I}{2\pi R}} \qquad (A < R < B)
$$

El campo **no es uniforme**: decrece como $1/R$ dentro del toroide. Nuevamente se calculó un campo en una geometría complicada **sin integrales**, gracias a la simetría.

### 1.3 Campo nulo fuera del toroide

- **Si $R > B$** (curva por fuera, envolviendo todo el toroide): toda la corriente que entra por un lado sale por el otro; contando con signo, la corriente neta encerrada es **cero** $\Rightarrow B = 0$.
- **Si $R < A$** (curva por el hueco central): no pasa ninguna corriente por dentro $\Rightarrow B = 0$ (con más razón).

Así, **todo el campo del toroide está confinado en su interior**.

---

## 2. La ley de inducción de Faraday

Se abre el **capítulo 10**. Este es un curso de **electro-magnetismo**: en los dos capítulos anteriores vimos que cargas en movimiento (corrientes) generan campos magnéticos. Ahora veremos algo **más fuerte**: que **campos (o situaciones) magnéticas variables generan corrientes eléctricas**. Es una relación recíproca que vincula profundamente lo eléctrico y lo magnético.

### 2.1 Los experimentos de Faraday

Faraday fue un experimentador genial y muy intuitivo (introdujo la idea de **líneas de campo**), aunque sabía poca matemática y no hablaba de "flujo". Sus observaciones, en lenguaje moderno:

**Primer experimento (imán y espira).** Un amperímetro conectado a una resistencia y a una espira (o bobina de muchas vueltas, para amplificar el efecto). Si el imán está **quieto** cerca de la espira: no pasa nada (el experimento más aburrido del mundo). Pero al **mover** el imán acercándolo, aparece una corriente; al alejarlo, la corriente cambia de signo; al detenerlo, la corriente desaparece. **No es la presencia del campo magnético lo que genera corriente, sino su variación.** Variantes observadas:

- Imán más grande → efecto mayor.
- Invertir la polaridad del imán → corriente invertida.
- Deformar la espira (cambiar su **área**) → efecto proporcional al área y a $dB/dt$.
- **Girar** la espira → efecto proporcional al **coseno del ángulo** entre la normal a la espira y $\mathbf{B}$.

**Segundo experimento (dos bobinas).** En vez del imán, un **electroimán**: una segunda bobina con batería e interruptor. Al **cerrar** el interruptor, arranca una corriente que crece y genera un campo magnético creciente → se induce una corriente en la primera bobina, que dura solo mientras la corriente cambia. Una vez estabilizada la corriente, el campo es constante y **no hay inducción**. Al **abrir** el interruptor, el campo decrece → se induce una corriente de **signo opuesto**. Conclusión: **da igual la fuente del campo** (imán o electroimán); lo que importa es la variación.

**Variante clave.** Dejando el imán fijo y **moviendo el circuito**, también aparece corriente. Lo que importa no es que $\mathbf{B}$ cambie, sino que **el flujo a través de la espira** cambie.

### 2.2 El flujo magnético

Para enunciar la ley se define el **flujo magnético** a través de una superficie $S$, igual que el flujo eléctrico:

$$
\Phi_B = \iint_S \mathbf{B}\cdot \hat{n}\, dS
$$

> **Diferencia con Gauss.** En la ley de Gauss usábamos superficies **cerradas**. Aquí $S$ es una superficie **abierta**, cuyo **borde** es la espira (o bobina) $C$. Es cualquier superficie bordeada por $C$ (como una "red de mariposas" apoyada en el aro).

### 2.3 La FEM inducida (valor absoluto)

La **ley de inducción de Faraday** dice que un flujo magnético variable induce una **FEM** (fuerza electromotriz, un voltaje). Por ahora, solo el **valor absoluto**:

$$
\boxed{|\varepsilon| = \left|\frac{d\Phi_B}{dt}\right|}
$$

El uso del **flujo** engloba todas las observaciones: el tamaño de la espira (área), el módulo de $\mathbf{B}$ y el **ángulo** (por el producto escalar). Si $\mathbf{B}$ es paralelo a la superficie, no hay flujo y su variación no induce nada: se necesita una componente **normal**. La FEM se induce **siempre** (esté o no cerrado el circuito); si el circuito está abierto, la FEM existe igual pero no circula corriente (es una "potencialidad" de corriente). Con una **bobina de $N$ vueltas**, hay que sumar el flujo de todas: si es igual en cada una, se multiplica por $N$.

### 2.4 ¿Por qué el coeficiente es 1?

Los experimentos dan proporcionalidad, no igualdad. El coeficiente es **1 por elección del Sistema Internacional de unidades**: las unidades de campo magnético y de voltaje se definen justo para que sea 1. En otros sistemas de unidades el coeficiente es distinto (se opta por simplificar otra ley). Es lo mismo que ocurre con el $4\pi$ "raro" de Coulomb, puesto ahí para que **no** aparezca en Gauss.

---

## 3. Ejemplo: solenoide grande y bobina chica

Un **solenoide grande** ("mamá solenoide"), ideal, de $n$ espiras por unidad de longitud, con corriente $I$. Dentro se coloca una **bobina chica** de $N$ vueltas y sección $A$, coaxial. Se la llama "chica" a propósito: así el efecto de la bobina chica sobre la grande es despreciable y no hay que resolver la inducción mutua (que complicaría todo).

El campo dentro del solenoide grande es uniforme, $B = \mu_0 n I$. El flujo **total** en la bobina chica (sus $N$ espiras):

$$
\Phi_B = N\,(B\,A) = \mu_0\, N\, n\, I\, A
$$

Ahora se impone una corriente en el solenoide grande con forma de **rampa**:

$$
I(t) = \begin{cases} 0, & t < 0 \\[1mm] \dfrac{I_{\max}}{t_f}\,t, & 0 < t < t_f \\[2mm] I_{\max}, & t > t_f \end{cases}
$$

La FEM inducida en la bobina chica (todo constante salvo $I$):

$$
|\varepsilon| = \left|\frac{d\Phi_B}{dt}\right| = \mu_0\, N\, n\, A\,\left|\frac{dI}{dt}\right|
$$

Como $dI/dt$ vale $0$ fuera del tramo de rampa e $I_{\max}/t_f$ dentro:

$$
\boxed{|\varepsilon| = \begin{cases} 0, & t<0 \ \text{o}\ t>t_f \\[1mm] \dfrac{\mu_0\, N\, n\, A\, I_{\max}}{t_f}, & 0<t<t_f \end{cases}}
$$

Reproduce a Faraday: **mientras la corriente cambia** (rampa), hay FEM; antes y después, no. Si la corriente hubiera sido cuadrática, la FEM habría variado linealmente (la FEM es la derivada). Solo se calculó la FEM, no la corriente inducida (haría falta cerrar el circuito de la bobina chica).

---

## 4. Los signos: la ley de Lenz

### 4.1 Enunciado de Lenz

Para hablar de signos, imaginamos la espira **cerrada** por un circuito (real o, si está abierta, cerrada por una resistencia enorme —como el aire—, de modo que la corriente sea diminuta pero definida en signo). La **ley de Lenz** dice:

> El signo de la corriente inducida es tal que **el campo magnético que ella genera se opone a la variación de flujo magnético que la provocó**.

**¿Por qué "se opone" y no "alimenta"?** Si la corriente inducida reforzara la causa que la generó, entraríamos en un círculo vicioso: la corriente crecería sin límite y "explotaría" todo. Físicamente, las cosas no crecen solas: la inducción tiende a **oponerse**. Dos matices importantes:

- La corriente **no** se opone al campo magnético, sino a **su variación** (de flujo).
- La oposición **no alcanza** a compensar del todo: no es inducción perfecta, solo tiende a oponerse ("le devuelve la piña, pero no la anula").

### 4.2 Ejemplos con imán y espira

Con una convención de signos fija para la corriente $I$ y la normal $\hat n$ de la espira (elegidas por ahora arbitrariamente), se analizan casos con un imán moviéndose:

| Caso | $\Phi_B$ | ¿Crece o decrece? | Corriente inducida |
|------|----------|-------------------|--------------------|
| Imán **acercándose**, $\mathbf{B}\parallel\hat n$ | positivo | **crece** | negativa (se opone) |
| Imán **alejándose**, $\mathbf{B}\parallel\hat n$ | positivo | **decrece** | positiva |
| Imán invertido, acercándose | negativo | decrece (más neg.) | positiva |

**Método:** (1) calcular el flujo **con su signo**; (2) ver si **crece o decrece** (no basta el signo); (3) elegir la corriente que genere un campo que **se oponga a la variación**. 

> **Test de consistencia:** si se **invierte el imán**, la corriente **debe** cambiar de sentido. Al principio uno se equivoca ~50 % de las veces (azar puro); con práctica, el objetivo es acercarse al 100 %.

### 4.3 Ley de Faraday con signos

Hoy preferimos una sola ley, sin valores absolutos, que incluya el signo. Para eso hay que **ligar** dos convenciones que a priori son independientes: el sentido de la FEM positiva y el sentido del flujo positivo. Se ligan con la **regla de la mano derecha**: elegida la orientación de la curva $C$, la normal a $S$ queda determinada (pulgar). Con esa convención:

$$
\boxed{\varepsilon = -\frac{d\Phi_B}{dt}}
$$

El **signo menos** codifica la ley de Lenz (la oposición). Verificando en los ejemplos anteriores (flujo creciente → derivada positiva → FEM negativa; flujo decreciente → FEM positiva), la fórmula reproduce siempre el resultado de Lenz. Insistencia: el menos solo es válido con las convenciones ligadas por la mano derecha.

> Para retener esto hay que hacer **muchos ejercicios**: el valor absoluto se recuerda fácil, pero los signos (Lenz) se olvidan a los "3 milisegundos" de salir de clase. La ejercitación es irreducible.

---

## 5. Ejemplo: espira que sale de un campo (frenos magnéticos)

Región con campo magnético uniforme **entrante** $B$. Una **espira rectangular** de lados $D$ (vertical: es el lado que queda dentro del campo) y $L$ (horizontal), con una porción de ancho $x$ dentro del campo, se mueve con velocidad $v$ **hacia afuera**. Resistencia total $R$; se desprecia la autoinducción.

**Flujo** (normal entrante, consistente con la orientación por la mano derecha): $\Phi_B = B\,D\,x$ (no hay coseno; $\mathbf{B}$ es ortogonal a la figura).

**FEM inducida** por Faraday con signo, notando que al salir $x$ **decrece** ($dx/dt = -v$):

$$
\varepsilon = -\frac{d\Phi_B}{dt} = -B\,D\,\frac{dx}{dt} = B\,D\,v
$$

El flujo (positivo) **decrece** → se induce una corriente que tiende a **generar flujo** en el sentido original (consistente con Lenz). La **corriente inducida**:

$$
\boxed{I = \frac{\varepsilon}{R} = \frac{B\,D\,v}{R}}
$$

### Balance de energía y frenos magnéticos

**Potencia disipada** por efecto Joule:

$$
P_{\text{dis}} = R\,I^2 = \frac{B^2 D^2 v^2}{R}
$$

Si el sistema disipa energía y $v$ es constante, **alguien** debe estar haciendo una fuerza. En efecto, la corriente en los tres lados dentro del campo sufre fuerzas $\mathbf{F} = I\,\mathbf{L}\times\mathbf{B}$: las de los dos lados horizontales se **cancelan** entre sí; la del lado vertical interior ($F_2$) **se opone al movimiento** (frena):

$$
F_2 = I\,D\,B = \frac{B^2 D^2 v}{R}
$$

Para mantener $v$ constante hace falta una **fuerza externa** de igual módulo. La **potencia entregada** por esa fuerza externa:

$$
P_{\text{ext}} = F_{\text{ext}}\,v = \frac{B^2 D^2 v^2}{R} = P_{\text{dis}} \ \checkmark
$$

**La potencia entregada iguala a la disipada** (buen test: en régimen estacionario, toda la energía mecánica aportada se disipa por Joule).

> **Aplicación tecnológica: frenos magnéticos.** Si se deja de aplicar la fuerza externa, la fuerza magnética frena el sistema progresivamente (a menor $v$, menor inducción, menor frenado). Los autos de alta gama usan **frenos magnéticos**: sin contacto, no se gastan; al encender el campo, una chapa metálica que se mueve se frena por inducción y la energía cinética se pierde por efecto Joule.

*Próxima clase: corrientes parásitas, generadores y motores, campos eléctricos inducidos.*
