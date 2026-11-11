# Resumen Clase 3 — Energía potencial, conductores y aislantes, ley de Gauss

## Índice

1. [Potencial y energía potencial](#1-potencial-y-energía-potencial)
   - [1.1 La parte de la energía que depende de una carga](#11-la-parte-de-la-energía-que-depende-de-una-carga)
   - [1.2 El potencial como energía por unidad de carga](#12-el-potencial-como-energía-por-unidad-de-carga)
2. [Conductores y aislantes](#2-conductores-y-aislantes)
   - [2.1 Conductores](#21-conductores)
   - [2.2 Aislantes](#22-aislantes)
   - [2.3 Zonas grises](#23-zonas-grises)
3. [Ley de Gauss a partir de Coulomb](#3-ley-de-gauss-a-partir-de-coulomb)
   - [3.1 Flujo a través de una superficie cerrada](#31-flujo-a-través-de-una-superficie-cerrada)
   - [3.2 Carga puntual en el centro de una esfera](#32-carga-puntual-en-el-centro-de-una-esfera)
   - [3.3 Por qué la constante de Coulomb lleva cuatro pi](#33-por-qué-la-constante-de-coulomb-lleva-cuatro-pi)
   - [3.4 Superficie cualquiera con la carga adentro](#34-superficie-cualquiera-con-la-carga-adentro)
   - [3.5 Ángulo sólido](#35-ángulo-sólido)
   - [3.6 Carga afuera de la superficie](#36-carga-afuera-de-la-superficie)
   - [3.7 Superposición: la ley de Gauss](#37-superposición-la-ley-de-gauss)
4. [Forma diferencial de la ley de Gauss](#4-forma-diferencial-de-la-ley-de-gauss)
   - [4.1 Teorema de la divergencia](#41-teorema-de-la-divergencia)
   - [4.2 De la forma integral a la diferencial](#42-de-la-forma-integral-a-la-diferencial)
   - [4.3 Interpretación geométrica de la divergencia](#43-interpretación-geométrica-de-la-divergencia)
5. [Aplicaciones de la ley de Gauss: línea infinita de carga](#5-aplicaciones-de-la-ley-de-gauss-línea-infinita-de-carga)

---

## 1. Potencial y energía potencial

### 1.1 La parte de la energía que depende de una carga

Se tiene un conjunto de cargas $q_1,\dots,q_n$ en posiciones $\vec r_1,\dots,\vec r_n$
y se agrega una carga $q_0$ en $\vec r$. La energía potencial electrostática
depende de las distancias entre todos los pares, es decir, de todas las
posiciones. Con las $\vec r_i$ fijas, se la separa en una parte que depende de
$\vec r$ y otra que no:

$$U(\vec r,\vec r_1,\dots,\vec r_n) = U_r(\vec r,\vec r_1,\dots,\vec r_n) + \hat U(\vec r_1,\dots,\vec r_n).$$

$U_r$ es menos el trabajo de la fuerza electrostática para llevar $q_0$ desde un
punto de referencia $\vec r_0$ hasta $\vec r$. Como la fuerza es conservativa,
el camino no importa:

$$U_r = -\int_{\vec r_0}^{\vec r}\vec F\cdot d\vec l = -q_0\int_{\vec r_0}^{\vec r}\vec E\cdot d\vec l .$$

Y por la definición de la clase pasada, esa integral es la diferencia de
potencial, que no depende del nivel cero elegido para $\phi$:

$$\boxed{\ U_r = q_0\,\big[\phi(\vec r) - \phi(\vec r_0)\big]\ }$$

> **Las dos constantes son arbitrarias.** $\phi(\vec r_0)$ es una referencia, y
> la energía potencial también está definida a menos de una constante aditiva:
> como en $mgh$, la altura se mide desde un piso o desde la planta baja. Separar
> $U$ en $U_r$ y $\hat U$ es elegir qué constante va de cada lado.

Acá sólo se mira la dependencia en la posición de **una** carga, con las demás
fijas. La energía del sistema completo es la suma sobre todos los pares, como en
Física III.

### 1.2 El potencial como energía por unidad de carga

La diferencia de potencial es una **energía por unidad de carga**, en este
sentido preciso: la parte de la energía potencial que depende de la posición de
una carga es esa carga por la diferencia de potencial entre su posición y una
referencia arbitraria.

En el sistema internacional la energía se mide en joules y la carga en
coulombs, así que el potencial se mide en **volts**:

$$1\ \mathrm{V} = 1\ \mathrm{J/C}.$$

---

## 2. Conductores y aislantes

### 2.1 Conductores

Son los materiales en los que las cargas se mueven con facilidad. Dos ejemplos:

- **Metales.** Una red cristalina de iones más **electrones de conducción**,
  poco ligados, que pasan fácilmente de un átomo a otro. No participan todos los
  electrones: la mayoría está fuertemente ligada al núcleo y forma parte del
  ion. En casi todos los metales conducen **uno o dos electrones por átomo**
  (el hierro tiene 26 y conduce uno).
- **Electrolitos.** Líquidos con sales disueltas, como el agua con sal (y los
  seres vivos, que «son básicamente agua con sal»). Las cargas que se mueven
  son iones.

Los metales conducen mejor: el electrón es unas 2000 veces más liviano que el
protón, y a igual fuerza se acelera mucho más que un ion, que pesa miles de
veces más.

### 2.2 Aislantes

Son los materiales en los que las cargas no se mueven: aire, vidrio, gomas y
plásticos, madera **seca** (un árbol vivo conduce bien; al secarse se vuelve
aislante).

> **El agua destilada es un aislante frágil.** Basta un bajo nivel de
> electrolitos para que conduzca; su conductividad es muy sensible a la pureza,
> y el agua realmente pura es infrecuente.

### 2.3 Zonas grises

«En la naturaleza casi nada es blanco o negro.» Hay materiales intermedios, como
los **semiconductores** (el silicio). La propiedad que distingue unos de otros es
la **conductividad**, que se verá más adelante en el curso: entre un buen
conductor y un buen aislante difiere en un factor del orden de $10^{20}$, así
que en los extremos la separación es radical.

> **Situaciones extremas.** Un aislante sometido a una diferencia de potencial
> gigantesca puede romperse y conducir: el aire se ioniza en un rayo y forma un
> plasma, otra organización de la materia; un condensador se «pincha». No es
> lo mismo que un metal, que conduce sin dejar de ser el mismo material. Es
> como un sólido que se derrite si se lo calienta: la clasificación es a igual
> situación termodinámica.

---

## 3. Ley de Gauss a partir de Coulomb

En electrostática **todo** es consecuencia de la ley de Coulomb (por ejemplo, que
el campo sea un gradiente), y la ley de Gauss también. Pero Gauss resulta más
potente: **sigue valiendo** cuando Coulomb deja de valer, fuera del caso
electrostático. Por ahora se la deduce de Coulomb, ahora con las herramientas
de integrales de superficie que en Física III eran «un cuentito».

### 3.1 Flujo a través de una superficie cerrada

El **flujo** de un campo vectorial a través de una superficie $S$ es

$$\Phi_E(S) = \int_S \vec E\cdot\hat n\,dS ,$$

con $\hat n$ el versor normal en cada punto. Para una superficie **cerrada** se
escribe $\oint_S$, y por convención (la usual en la literatura) se toma siempre
el **flujo saliente**: $\hat n$ apunta hacia afuera. Adentro y afuera sólo
tienen sentido para una superficie cerrada.

### 3.2 Carga puntual en el centro de una esfera

Carga $q$ (positiva, por fijar el dibujo) en el origen y esfera $S$ de radio
$R$ centrada en ella. Por Coulomb,

$$\vec E = \frac{1}{4\pi\varepsilon_0}\,\frac{q\,\vec r}{r^3},$$

donde un vector sin flecha denota su módulo. En la esfera $\hat n = \vec r/r$,
así que $\vec r\cdot\hat n = r = R$, constante, y todo sale de la integral:

$$\Phi_E(S) = \frac{q}{4\pi\varepsilon_0R^2}\oint_S dS .$$

El área de la esfera, que en Física III era dogma, ahora se calcula. En
esféricas, $dS = R^2\sin\theta\,d\theta\,d\varphi$ (se usa $\varphi$ para no
confundir con el potencial):

$$\oint_S dS = R^2\int_0^{\pi}\sin\theta\,d\theta\int_0^{2\pi}d\varphi
= R^2\cdot 2\pi\,\big[-\cos\theta\big]_0^{\pi} = 4\pi R^2 .$$

$$\boxed{\ \Phi_E(S) = \frac{q}{\varepsilon_0}\ }$$

### 3.3 Por qué la constante de Coulomb lleva cuatro pi

La constante de Coulomb se escribe $1/(4\pi\varepsilon_0)$ para que la ley de
Gauss quede **sin** $4\pi$. Las dos leyes no pueden quedar sin $4\pi$: hay que
elegir dónde ponerlo. En el sistema internacional se eligió simplificar Gauss,
porque se la considera más fundamental; en otros sistemas de unidades el $4\pi$
aparece en Gauss. Que $\varepsilon_0$ vaya en el denominador es sólo histórico.

### 3.4 Superficie cualquiera con la carga adentro

Ahora $S$ es una superficie cerrada cualquiera («una papa») con $q$ adentro.
Coulomb sigue valiendo,

$$\Phi_E(S) = \frac{q}{4\pi\varepsilon_0}\oint_S\frac{\vec r\cdot\hat n}{r^3}\,dS,$$

pero $\hat n$ ya no es radial. Se divide la superficie en pedacitos.

**Un pedacito.** Si $dS$ es suficientemente chico es plano, y el campo es
uniforme sobre él. Sea $\theta$ el ángulo entre $\vec E$ y $\hat n$. Si el
pedacito es un rectángulo de lados $a$ y $b$ (con $a$ perpendicular al plano
del dibujo), su proyección sobre el plano normal a $\vec E$ tiene lados $a$ y
$b\cos\theta$:

$$\vec E\cdot\hat n\,dS = |\vec E|\cos\theta\;ab = |\vec E|\;dS_\perp ,
\qquad dS_\perp = dS\cos\theta .$$

El flujo por el pedacito inclinado es igual al flujo por su proyección
perpendicular al campo. (No hace falta que sea un rectángulo: cualquier
pedacito plano se proyecta igual; así se define la integral de flujo.)

**La proyección es un cacho de esfera.** Como el campo es radial, la superficie
perpendicular a $\vec E$ es un elemento de esfera de radio $r$:

$$\frac{\vec r\cdot\hat n}{r^3}\,dS = \frac{dS_\perp}{r^2},\qquad
dS_\perp = r^2\sin\theta\,d\theta\,d\varphi .$$

El $r^2$ se cancela y la integral vuelve a ser la de la esfera:

$$\Phi_E(S) = \frac{q}{4\pi\varepsilon_0}\int_0^{\pi}\!\!\int_0^{2\pi}\sin\theta\,d\theta\,d\varphi = \frac{q}{\varepsilon_0}.$$

**El flujo no depende de la superficie**, ni de dónde esté la carga, siempre que
esté adentro.

> **Interpretación.** El flujo mide el número de líneas de campo que atraviesan
> la superficie. Las líneas salen de la carga y, sin cargas negativas cerca,
> siguen hasta el infinito: cualquier superficie que encierre la carga las
> cruza todas.

> **«Pero eso ya lo sabíamos.»** Varios estudiantes objetan que el flujo se
> conserva. El docente responde que eso es justamente lo que se está
> **probando**: la única hipótesis es Coulomb. En Física III se contaba; ahora se
> hace la cuenta. Usar el teorema de la divergencia exigiría saber antes que
> $\div\vec E = 0$ fuera de la carga, y además «es matar una mosca con un
> cañón».

### 3.5 Ángulo sólido

$dS_\perp/r^2$ es el área del elemento proyectado sobre la **esfera de radio 1**
(el área de un pedazo de esfera es proporcional a $r^2$). Se la llama
**elemento de ángulo sólido**:

$$\boxed{\ d\Omega = \sin\theta\,d\theta\,d\varphi = \frac{dS_\perp}{r^2}\ }$$

y la esfera completa subtiende $\oint d\Omega = 4\pi$.

### 3.6 Carga afuera de la superficie

Si $q$ está afuera de $S$, cada línea radial que corta la superficie la cruza
**dos veces**: una entrando y otra saliendo. Se divide $S$ en la parte
$S_1$ donde el flujo sale ($\vec E\cdot\hat n>0$) y la parte $S_2$ donde entra
($\vec E\cdot\hat n<0$), y se proyectan ambas sobre una misma superficie
intermedia $S'$ (un casco de esfera centrada en la carga). Con el mismo
argumento de proyección,

$$\Phi_E(S_1) = \Phi_E(S'),\qquad \Phi_E(S_2) = -\,\Phi_E(S'),$$

porque en un caso la normal de $S'$ queda en un sentido y en el otro, al revés.
Entonces

$$\Phi_E(S) = \Phi_E(S_1) + \Phi_E(S_2) = 0 .$$

**Una carga afuera no aporta flujo neto.**

### 3.7 Superposición: la ley de Gauss

Con $n$ cargas y una superficie que deja algunas adentro y otras afuera, el campo
total es la suma de los campos $\vec E_i$ de cada carga:

$$\oint_S\vec E\cdot\hat n\,dS = \sum_i\oint_S\vec E_i\cdot\hat n\,dS,\qquad
\oint_S\vec E_i\cdot\hat n\,dS =
\begin{cases} q_i/\varepsilon_0 & \text{si } q_i \text{ está adentro de } S,\\ 0 & \text{si está afuera.}\end{cases}$$

$$\boxed{\ \oint_S\vec E\cdot\hat n\,dS = \frac{Q_{\text{int}}}{\varepsilon_0}\ }$$

con $Q_{\text{int}}$ la carga neta adentro de $S$. «Chocolate por la noticia»: lo
importante es haberla retomado con los métodos nuevos.

Para una distribución continua (volumétrica) de densidad $\rho$, con $V$ el
volumen encerrado por $S$:

$$\oint_S\vec E\cdot\hat n\,dS = \frac{1}{\varepsilon_0}\int_V\rho\,dV .$$

---

## 4. Forma diferencial de la ley de Gauss

### 4.1 Teorema de la divergencia

«Ustedes estaban con ganas, como nene chico con juguete nuevo, de usar el
teorema de la divergencia.» Ahora es el momento.

> **La ley de Gauss no es el teorema de Gauss.** El teorema de la divergencia también se
> llama teorema de Gauss, y las dos cosas las descubrió Gauss, pero son
> distintas. Un teorema habla de «realidades platónicas»: valdría aunque no
> existiera el mundo. Una ley física habla de cosas que se miden en
> experimentos. Se entiende por qué Gauss llegó a las dos: con el teorema, la
> ley sale fácil de Coulomb.

Para un campo vectorial $\vec A$ cualquiera, suficientemente derivable, y un
volumen $V$ con borde $S$ (flujo saliente):

$$\boxed{\ \int_V\div\vec A\;dV = \oint_S\vec A\cdot\hat n\,dS\ }$$

### 4.2 De la forma integral a la diferencial

Aplicando el teorema al flujo de la ley de Gauss:

$$\int_V\div\vec E\;dV = \oint_S\vec E\cdot\hat n\,dS = \frac{1}{\varepsilon_0}\int_V\rho\,dV
\qquad\text{para todo volumen } V .$$

Que dos integrales sean iguales **no** implica que lo sean los integrandos (una
función impar integrada entre $-1$ y $1$ da cero sin ser nula). Pero si son
iguales **para cualquier dominio**, sí:

$$\int_V\left(\div\vec E - \frac{\rho}{\varepsilon_0}\right)dV = 0\quad\forall V .$$

Si el integrando fuera positivo en alguna región, integrando sólo sobre ella se
obtendría algo positivo, absurdo (y lo mismo si fuera negativo). Entonces:

$$\boxed{\ \div\vec E = \frac{\rho}{\varepsilon_0}\ }$$

Es la **forma diferencial** de la ley de Gauss; la de §3.7 es la **forma
integral**. «Esto está re bueno», porque derivar es más fácil que integrar.

### 4.3 Interpretación geométrica de la divergencia

La prueba del teorema de la divergencia («a lo físico») es como la de Stokes:
se divide el volumen en pedacitos, se lo prueba para un cubito, y al sumar los
flujos por las caras compartidas se cancelan, quedando sólo el flujo externo.
Queda como ejercicio («divertido»).

Lo que sí interesa es que el teorema da una definición **geométrica** de la
divergencia. Para un volumen chico $\Delta V$, el integrando sale de la integral:

$$\int_{\Delta V}\div\vec A\;dV \approx \div\vec A\;\Delta V ,$$

$$\boxed{\ \div\vec A = \lim_{\Delta V\to0}\frac{1}{\Delta V}\oint_{\partial(\Delta V)}\vec A\cdot\hat n\,dS\ }$$

Es el **flujo saliente por unidad de volumen**. A diferencia de la definición
cartesiana de la clase pasada, no depende de las coordenadas: el flujo y el
volumen son propiedades geométricas.

---

## 5. Aplicaciones de la ley de Gauss: línea infinita de carga

En sistemas muy simétricos, la forma integral de la ley de Gauss permite hallar
el campo sin hacer la integral de Coulomb (lo que se hizo mucho en Física III).
La receta:

1. por la simetría, determinar la dirección y el sentido de $\vec E$;
2. elegir una **superficie gaussiana** con la geometría del problema, donde la
   integral de flujo se haga sin conocer el campo;
3. igualar al $Q_{\text{int}}/\varepsilon_0$ de Gauss y despejar $|\vec E|$.

**Ejemplo.** Línea infinita con densidad lineal uniforme $\lambda$; campo a
distancia $r$. El problema es invariante por traslaciones a lo largo de la línea
y por rotaciones a su alrededor, así que $\vec E$ es **radial** (saliente si
$\lambda>0$). La superficie gaussiana es un **cilindro** coaxial de radio $r$ y
altura $h$ (una esfera no sirve). En las tapas $\hat n\perp\vec E$ y el flujo
es nulo; sólo cuenta la superficie lateral:

$$\Phi_E = |\vec E|\;2\pi r h = \frac{\lambda h}{\varepsilon_0}
\quad\Longrightarrow\quad
\boxed{\ |\vec E| = \frac{\lambda}{2\pi\varepsilon_0\,r}\ }$$

Es un ejemplo «muy banal»; en el curso se aplicará a casos más sofisticados.
