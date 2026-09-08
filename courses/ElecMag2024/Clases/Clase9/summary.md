# Resumen Clase 9 — Polarización, cargas ligadas y ley de Gauss en dieléctricos

## Índice

1. [Por qué un aislante sí importa](#1-por-qué-un-aislante-sí-importa)
   - [1.1 Moléculas polares y apolares](#11-moléculas-polares-y-apolares)
   - [1.2 De la molécula al dipolo puntual](#12-de-la-molécula-al-dipolo-puntual)
2. [El vector polarización](#2-el-vector-polarización)
3. [Potencial de un dieléctrico polarizado](#3-potencial-de-un-dieléctrico-polarizado)
   - [3.1 El truco del gradiente primado](#31-el-truco-del-gradiente-primado)
   - [3.2 Las cargas de polarización](#32-las-cargas-de-polarización)
4. [Por qué siempre aparece carga superficial](#4-por-qué-siempre-aparece-carga-superficial)
5. [La carga de polarización total es cero](#5-la-carga-de-polarización-total-es-cero)
6. [El campo macroscópico](#6-el-campo-macroscópico)
   - [6.1 El campo macroscópico es irrotacional](#61-el-campo-macroscópico-es-irrotacional)
   - [6.2 La cavidad en forma de aguja](#62-la-cavidad-en-forma-de-aguja)
7. [Ley de Gauss en presencia de dieléctricos](#7-ley-de-gauss-en-presencia-de-dieléctricos)
8. [La ecuación constitutiva](#8-la-ecuación-constitutiva)
   - [8.1 Susceptibilidad y permitividad](#81-susceptibilidad-y-permitividad)
   - [8.2 Por qué tantos materiales son lineales](#82-por-qué-tantos-materiales-son-lineales)

---

## 1. Por qué un aislante sí importa

Hasta ahora todo el curso transcurrió en el vacío, con la única excepción de los
conductores. Empieza el capítulo 3: qué pasa cuando hay **materiales
dieléctricos**.

Un dieléctrico, por definición, **no contiene cargas libres**: no tiene cargas
que puedan moverse distancias macroscópicas de un lado a otro. La reacción
inmediata sería concluir que entonces es electrostáticamente irrelevante. Es
falsa, y el motivo es que las cargas sí pueden moverse **distancias
microscópicas**.

Un plástico está formado por un número enorme de moléculas y, frecuentemente,
cada una de ellas está polarizada: el baricentro de las cargas positivas no
coincide con el de las negativas, de modo que la molécula tiene un **momento
dipolar** propio y una dirección preferencial.

Al aplicar un campo eléctrico externo, cada dipolo tiende a orientarse: la carga
negativa quiere acercarse a las cargas positivas que generaron el campo, y la
positiva a las negativas. El resultado no es un alineamiento perfecto —las
moléculas siguen con su agitación térmica— pero **en promedio** el efecto se
acumula, y esa acumulación sobre un número enorme de moléculas produce un efecto
macroscópico: la **polarización**.

> El docente insiste en que el dibujo de todas las moléculas alineadas es una
> **caricatura**. En la realidad las moléculas siguen casi tan desordenadas como
> antes; están sólo *levemente* orientadas. Lo que ocurre es que sin campo el
> promedio da cero y con campo no.

### 1.1 Moléculas polares y apolares

También existen moléculas **apolares**, sin momento dipolar propio. Todo lo que
sigue vale igual para ellas, pero por una razón más sofisticada: el propio campo
aplicado deforma la molécula y le genera un **dipolo inducido**. El efecto es
mucho más chico y el tratamiento más complicado.

> La clase se restringe a **moléculas polares**, tomando los dipolos como dato y
> sin considerar la deformación de la molécula por el campo aplicado.

### 1.2 De la molécula al dipolo puntual

Una molécula real no es un dipolo: es neutra, pero tiene momentos cuadrupolares,
octopolares y todo lo demás. La simplificación viene de que las moléculas son
**chiquitas**: su tamaño típico es el nanómetro, y cualquier distancia
macroscópica —aunque sea una micra— ya es enormemente mayor.

Por el desarrollo multipolar, un objeto de **carga neta nula** visto a distancias
mucho mayores que su tamaño se comporta como un **dipolo**: los demás momentos
decaen más rápido. Entonces, a efectos macroscópicos, cada molécula puede
reemplazarse por su momento dipolar y toda la demás información se descarta.

---

## 2. El vector polarización

Lo que le pasa a cada molécula individual no interesa: a escala molecular el
problema es intratable. Lo que interesa es el **efecto promediado** de muchas
moléculas en un volumen pequeño.

Se toma un volumen $\Delta V$ **grande respecto de la escala molecular y pequeño
respecto de la macroscópica** —por ejemplo un cubo de una micra de lado dentro de
un objeto de 20 cm—, que contiene una cantidad enorme de moléculas. Su momento
dipolar total es

$$\Delta \vec p = \sum_{i \in \Delta V} \vec p_i,
\qquad
\vec p_i = \int_{\text{molécula}} \rho(\vec r_i)\, \vec r_i \, dV .$$

Pero $\Delta\vec p$ no sirve como magnitud local: en un material homogéneo, al
duplicar el volumen se duplica el momento dipolar. Lo que sí tiene límite es la
densidad:

$$\boxed{\ \vec P(\vec r) = \lim_{\Delta V \to 0} \frac{\Delta \vec p}{\Delta V}\ }$$

el **campo de polarización**, es decir el momento dipolar por unidad de volumen.

> El límite $\Delta V \to 0$ es un abuso de notación deliberado: significa
> pequeño **macroscópicamente**, nunca microscópicamente. A escala molecular la
> polarización deja de tener sentido, porque se pone a variar de molécula a
> molécula.

Si el material es homogéneo, $\vec P$ no depende de la posición; si es
inhomogéneo, varía suavemente a escala macroscópica.

---

## 3. Potencial de un dieléctrico polarizado

El problema que se plantea es el inverso del que uno esperaría: **la polarización
se da como dato**. No se pregunta todavía cómo se polarizó el material, sino qué
campo eléctrico produce una polarización conocida.

Se considera un material que ocupa un volumen $V_0$, con polarización
$\vec P(\vec r\,')$, y se observa el potencial en un punto $\vec r$ **fuera del
material**. Cada elemento de volumen $dV'$ tiene momento dipolar
$\vec P(\vec r\,')\,dV'$ y aporta un potencial dipolar. Sumando:

$$\boxed{\ \phi(\vec r) = \frac{1}{4\pi\varepsilon_0}
\int_{V_0} \frac{\vec P(\vec r\,') \cdot (\vec r - \vec r\,')}
{|\vec r - \vec r\,'|^3}\, dV' \ }$$

> La aproximación dipolar es legítima **para todas** las moléculas, incluso la
> más cercana al punto de observación: estando fuera del material, esa distancia
> ya es macroscópica frente al tamaño molecular.

> Este es sólo el potencial **producido por la polarización**. Si además hay
> cargas libres —las que uno deposita o manipula— sus potenciales se suman aparte.

### 3.1 El truco del gradiente primado

Se define $\nabla'$ como el gradiente respecto de las coordenadas de $\vec r\,'$.
La observación clave es

$$\nabla' \frac{1}{|\vec r - \vec r\,'|} = \frac{\vec r - \vec r\,'}{|\vec r - \vec r\,'|^3},$$

que es el mismo objeto que aparece en el campo de una carga puntual, salvo el
signo que introduce derivar respecto de la variable primada en lugar de la
no primada. Con eso el integrando se escribe como
$\vec P \cdot \nabla'\!\left(1/|\vec r - \vec r\,'|\right)$.

> Se elige el gradiente **primado** a propósito: para aplicar el teorema de la
> divergencia hacen falta derivadas respecto de la misma variable sobre la que se
> integra.

Eso todavía no es una divergencia, pero se parece. Usando la identidad

$$\div(f\vec A) = \grad f \cdot \vec A + f \, \div \vec A$$

leída al revés, el integrando se parte en dos:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0} \int_{V_0}
\left[ \nabla' \cdot \frac{\vec P(\vec r\,')}{|\vec r - \vec r\,'|}
- \frac{\nabla' \cdot \vec P(\vec r\,')}{|\vec r - \vec r\,'|} \right] dV' .$$

Al primer término —y sólo a ese— se le aplica el teorema de la divergencia, que
lo convierte en una integral sobre la superficie $S_0$ que bordea $V_0$:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0} \oint_{S_0}
\frac{\vec P(\vec r\,') \cdot \hat n'}{|\vec r - \vec r\,'|}\, dS'
+ \frac{1}{4\pi\varepsilon_0} \int_{V_0}
\frac{-\nabla' \cdot \vec P(\vec r\,')}{|\vec r - \vec r\,'|}\, dV' .$$

### 3.2 Las cargas de polarización

Las dos integrales tienen exactamente la forma coulombiana del potencial de una
densidad superficial y de una densidad volumétrica de carga. Eso permite
**bautizar** lo que aparece arriba:

$$\boxed{\ \rho_p(\vec r) = -\div \vec P
\qquad\text{y}\qquad
\sigma_p(\vec r) = \vec P \cdot \hat n \ }$$

con $\hat n$ **saliente del material** — la orientación queda bien definida
porque la polarización está asociada a un material con un adentro y un afuera.

Con estos nombres el potencial queda idéntico al de cualquier distribución de
carga:

$$\phi(\vec r) = \frac{1}{4\pi\varepsilon_0} \oint_{S_0}
\frac{\sigma_p(\vec r\,')}{|\vec r - \vec r\,'|}\, dS'
+ \frac{1}{4\pi\varepsilon_0} \int_{V_0}
\frac{\rho_p(\vec r\,')}{|\vec r - \vec r\,'|}\, dV' .$$

> Estas cargas «tienen nombre carga y apellido polarización»: si uno se olvida
> del apellido, la fórmula es la usual. La única particularidad es que $\rho_p$ y
> $\sigma_p$ **no son arbitrarias**, sino que se expresan de manera precisa en
> términos de $\vec P$.

El campo eléctrico se obtiene entonces sin ninguna complicación adicional, porque
**Coulomb sigue valiendo para todas las cargas**:

$$\vec E(\vec r) = \frac{1}{4\pi\varepsilon_0} \int_{V_0}
\rho_p(\vec r\,') \frac{\vec r - \vec r\,'}{|\vec r - \vec r\,'|^3}\, dV'
+ \frac{1}{4\pi\varepsilon_0} \oint_{S_0}
\sigma_p(\vec r\,') \frac{\vec r - \vec r\,'}{|\vec r - \vec r\,'|^3}\, dS' .$$

> Las cargas de polarización son producto de la reorientación local de las
> moléculas, pero **no por eso dejan de ser cargas**.

---

## 4. Por qué siempre aparece carga superficial

Que aparezca una densidad **superficial** en un dieléctrico puede sorprender: es
el tipo de cosa que uno asocia a conductores. La razón es que en el borde hay un
**cambio abrupto**.

El ejemplo es un condensador con carga libre positiva en una placa y un
dieléctrico en el medio. Con campo aplicado uniforme, las moléculas se orientan
todas igual (caricatura mediante): en cualquier región interior hay tantas cargas
positivas como negativas y **no queda densidad volumétrica**, pero sobra un
excedente de carga negativa de un lado y positiva del otro.

| Campo aplicado | $\rho_p$ | $\sigma_p$ |
| --- | --- | --- |
| Uniforme | $0$ | $\neq 0$ |
| Inhomogéneo | en general $\neq 0$ | en general $\neq 0$ |

> El caso uniforme, con sólo carga superficial, es el que se veía en Física III.
> Ahora aparecen las dos, y la superficial no se puede olvidar.

---

## 5. La carga de polarización total es cero

Tiene que serlo: la polarización es producto de dipolos y cada dipolo tiene carga
neta nula. Pero conviene verificarlo, porque si a uno le dieran un $\rho$ y un
$\sigma$ cualesquiera no habría motivo para que la suma se anulara. Que se anule
es consecuencia de que **no son cualesquiera**.

$$Q_p = \int_{V_0} \rho_p \, dV' + \oint_{S_0} \sigma_p \, dS'
= \int_{V_0} \left(-\div' \vec P\right) dV' + \oint_{S_0} \vec P \cdot \hat n'\, dS' .$$

Aplicando el teorema de la divergencia al primer término se obtiene
$-\oint_{S_0} \vec P \cdot \hat n'\, dS'$, que cancela exactamente al segundo:

$$\boxed{\ Q_p = 0\ }$$

> Sirve como regla mnemotécnica: uno se puede olvidar cuál de las dos
> definiciones lleva el signo menos, pero **una lleva más y la otra menos**, y es
> justamente por esta cancelación.

---

## 6. El campo macroscópico

Todo lo anterior se dedujo observando desde **fuera** del material. Adentro hay
que ser mucho más cuidadoso con *qué* campo eléctrico se está nombrando.

El campo **microscópico** dentro del material varía salvajemente: cerca de una
carga positiva se dispara, cerca de una negativa se dispara para el otro lado, y
además depende fuertemente del tiempo porque las moléculas se agitan sin parar.
No es ese el campo de interés.

El campo de interés es el que uno **mediría con un aparato**. Un voltímetro con
sus agujas metidas en el material da una diferencia de potencial estable, que no
oscila: la punta de la aguja, aunque sea fina macroscópicamente, abarca una
cantidad enorme de moléculas y **promedia** sobre todas ellas.

Formalmente se define, con una función de peso $f$,

$$\vec E_{\text{macro}}(\vec r) = \int_V f(\vec r\,')\,
\vec E_{\text{micro}}(\vec r + \vec r\,')\, dV',
\qquad \int_V f(\vec r\,')\, dV' = 1,$$

donde $f$ está concentrada cerca de $\vec r$ y decae al alejarse, y $V$ es grande
frente a la escala molecular y pequeño frente a la macroscópica. El peso total es
1 para no sesgar el promedio.

> Se puede tomar $f$ uniforme ($1/V$), pero tiene el defecto del salto abrupto en
> el borde; conviene una función suave. Otra opción equivalente es promediar con
> una carga de prueba pequeña macroscópicamente pero grande molecularmente, que
> promedia sola. **En el límite de mirar de lejos, el resultado no depende del
> detalle del promedio.**

### 6.1 El campo macroscópico es irrotacional

No es automático que el campo macroscópico herede las propiedades del
microscópico, así que hay que verificarlo. Tomando el rotacional respecto de
$\vec r$:

$$\curl \vec E_{\text{macro}}(\vec r) = \int_V dV' \, f(\vec r\,')\,
\curl \vec E_{\text{micro}}(\vec r + \vec r\,') ,$$

porque $f$ no depende de $\vec r$. Y un desplazamiento del origen no cambia las
derivadas: con $\vec r\,'' = \vec r + \vec r\,'$, el rotacional respecto de
$\vec r$ es el rotacional respecto de $\vec r\,''$, que es cero. Por lo tanto

$$\boxed{\ \curl \vec E_{\text{macro}} = 0
\quad\Longrightarrow\quad
\vec E_{\text{macro}} = -\grad \phi \ }$$

y también $\oint_C \vec E \cdot d\vec l = 0$ sobre toda curva cerrada.

> A partir de acá el subíndice se elimina: **el único campo que interesa es el
> macroscópico**. En el vacío ambos coinciden.

La ventaja es que el campo macroscópico es **suave**, mientras que el
microscópico varía sin control en cuanto uno se mueve a escalas intermedias.

### 6.2 La cavidad en forma de aguja

Falta el paso que permite usar dentro del material la expresión deducida fuera.
Se considera un material **isótropo** —sin direcciones privilegiadas— y se le
practica una **cavidad en forma de aguja**, pequeña macroscópicamente pero grande
microscópicamente (por ejemplo, una micra de ancho por cien de largo). La cavidad
tiene dos tapas $S_1$, $S_2$ y una superficie lateral $S_L$.

Sobre una curva cerrada $C$ que recorre la aguja a lo largo,
$\oint_C \vec E \cdot d\vec l = 0$, lo que da

$$E^{\text{cav}}_t = E^{\text{diel}}_t .$$

Ahora se elige la cavidad **paralela al campo** en el dieléctrico, con lo que la
componente tangencial es el campo entero:
$E^{\text{cav}}_t = E^{\text{diel}}$.

> **Hasta acá no se usó la isotropía. Se usa en el paso siguiente**, y es el que
> cierra el argumento: como el problema no tiene ninguna otra dirección
> privilegiada, el campo dentro de la cavidad no puede apuntar en otra dirección
> que la del campo del dieléctrico —si tuviera componente normal, ¿por qué hacia
> un lado y no hacia el otro?

Además, por isotropía $\vec P$ es paralela al campo, de modo que sobre la
superficie lateral $\sigma_p = \vec P \cdot \hat n = 0$: **no hay carga
concentrada** en las paredes de la aguja. Sin nada singular, se puede hacer
tender $S_1$, $S_2$ y $S_L$ a cero y concluir que

$$\boxed{\ \vec E^{\text{cav}} = \vec E^{\text{diel}} \ }$$

Pero el campo dentro de la cavidad ya se sabe calcular, porque **está fuera del
material** —a una distancia macroscópica de la molécula más cercana, aunque
microscópicamente esté pegado—. Conclusión: las expresiones de $\phi$ y $\vec E$
deducidas fuera **valen también dentro** del dieléctrico, con la restricción de
que el material sea isótropo.

---

## 7. Ley de Gauss en presencia de dieléctricos

La ley de Gauss usual sigue valiendo, pero exige **toda** la carga, libre y de
polarización. Y ahí está el problema: la carga de polarización es en general una
incógnita, se genera sola y no se controla. Se busca entonces una ley de Gauss
escrita **sólo en términos de las cargas libres**.

> «Carga libre» es un nombre confuso: no significa que se pueda mover. Una carga
> depositada sobre un dieléctrico está fija y es libre. **Carga libre es la que
> no es de polarización**; por eso a veces se prefiere «carga externa», la que
> uno accede externamente.

Se toma una superficie gaussiana $S$ **dentro** del dieléctrico, cuyo material
está bordeado por superficies $S_1, S_2, S_3, \dots$. La ley de Gauss da

$$\oint_S \vec E \cdot \hat n \, dS = \frac{Q + Q_p}{\varepsilon_0}.$$

La carga de polarización encerrada se escribe con sus definiciones:

$$Q_p = \int_V \left(-\div \vec P\right) dV
+ \int_{S_1 \cup S_2 \cup S_3} \vec P \cdot \hat n \, dS ,$$

donde $V$ es el volumen de material encerrado —que **no** incluye lo que está
fuera del dieléctrico— y las $\hat n$ son salientes del material. Aplicando el
teorema de la divergencia al primer término aparece una integral sobre **toda** la
frontera de $V$, es decir $S \cup S_1 \cup S_2 \cup S_3$, y las contribuciones de
los bordes del material se cancelan contra el segundo término. Sobrevive
únicamente

$$Q_p = -\oint_S \vec P \cdot \hat n \, dS .$$

> Esa integral sobre la gaussiana **no es una verdadera densidad superficial**:
> ahí no hay nada. Es el sobrante que queda al compensarse las integrales de los
> bordes reales del material.

Sustituyendo y pasando el término al miembro izquierdo:

$$\oint_S \left(\varepsilon_0 \vec E + \vec P\right)\cdot \hat n \, dS = Q .$$

Se define el **vector desplazamiento eléctrico**

$$\boxed{\ \vec D = \varepsilon_0 \vec E + \vec P \ }$$

y la ley de Gauss en presencia de dieléctricos queda

$$\boxed{\ \oiint_S \vec D \cdot \hat n \, dS = Q_{\text{libre}}
\qquad\Longleftrightarrow\qquad
\div \vec D = \rho_{\text{libre}} \ }$$

La forma diferencial sale del mismo argumento de volumen pequeño que se usó para
$\vec E$: donde había $\vec E$ ahora hay $\vec D$, y donde había $Q/\varepsilon_0$
ahora hay $Q$.

> **Advertencia explícita del docente:** esto es «barrer la mugre bajo la
> alfombra». No se resolvió nada. La carga de polarización molestaba y no se
> tiró: se escondió dentro de $\vec D$. La polarización sigue ahí. Es un acto de
> prestidigitación, y estéticamente se avanzó, pero el problema sigue vigente.

Y el problema es concreto: **falta alguien que diga cuánto vale $\vec D$ dado
$\vec E$**. Sin eso no se puede volver a $\vec E$, que es el campo que realmente
se observa y el único que deriva de un potencial.

---

## 8. La ecuación constitutiva

Lo que falta se llama **ecuación constitutiva** del material: la relación entre
$\vec P$ y $\vec E$ o, equivalentemente, entre $\vec D$ y $\vec E$. Conocer una
es conocer la otra.

Deducirla desde primeros principios es un problema muy difícil. Un pedacito de
materia tiene del orden de $10^{22}$–$10^{23}$ moléculas, y hay que tratar la
interacción de todas ellas con el campo y entre sí. Si cada molécula «habla» sólo
con el campo aplicado y no con las demás, el problema es abordable con
**mecánica estadística** —una rama de la física que no se dicta en la Facultad de
Ingeniería—. Si las moléculas interactúan entre sí, es mucho más difícil.

> **El docente dice explícitamente que hallar la ecuación constitutiva no se va a
> hacer en el curso.** Se la toma como dato, medida experimentalmente, y con ella
> se resuelven problemas de electrostática: por ejemplo, un cilindro de material
> dentro de un campo eléctrico. Se usan entonces **relaciones constitutivas
> fenomenológicas**: no deducidas, sino extraídas de experimentos.

### 8.1 Susceptibilidad y permitividad

Se restringe a materiales **homogéneos**, **isótropos** y **sin polarización
espontánea** (si se apaga $\vec E$, se apaga $\vec P$).

> Los materiales con polarización espontánea existen y se llaman
> **ferroeléctricos**, pero son poco comunes. El fenómeno análogo sí es
> frecuentísimo en magnetismo: los imanes conservan la magnetización tras apagar
> el campo. Son propiedades distintas: hay muchos ferromagnéticos —hierro,
> níquel, cobalto— que no son ferroeléctricos.

Por isotropía, $\vec P$ no puede apuntar en otra dirección que $\vec E$, y por
homogeneidad la relación es la misma en todo punto. Queda entonces una única
función escalar:

$$\boxed{\ \vec P = \chi(|\vec E|)\, \vec E \ }$$

donde $\chi$ es la **susceptibilidad eléctrica**.

> El nombre es adecuado: una persona susceptible es la que reacciona mucho ante
> una perturbación pequeña. Acá, cuanto mayor es $\chi$, mayor es la polarización
> para un campo dado.

De ahí se deduce la relación para $\vec D$:

$$\vec D = \varepsilon_0 \vec E + \vec P
= \left[\varepsilon_0 + \chi(|\vec E|)\right] \vec E
\equiv \varepsilon(|\vec E|)\, \vec E$$

y $\varepsilon$ es la **permitividad eléctrica** del material.

> La relación se supone **local**: la polarización en un punto depende del campo
> en ese punto. Existen relaciones no locales, pero son poco comunes y, en todo
> caso, el acoplamiento ocurre a distancias microscópicas: a escala macroscópica
> la aproximación local es excelente.

### 8.2 Por qué tantos materiales son lineales

Un material es **lineal** cuando $\chi$ —o equivalentemente $\varepsilon$— no
depende de $\vec E$, es decir es una constante:

$$\vec P = \chi \vec E, \qquad \vec D = \varepsilon \vec E .$$

Muchísimos materiales realistas lo son, y el motivo se conecta con la advertencia
sobre la caricatura del §1: **cuando se aplica un campo realista de laboratorio, a
las moléculas casi no les pasa nada**. Siguen desordenadas y oscilando por
agitación térmica, y apenas se alinean una porción minúscula.

Como el efecto es tan pequeño, se puede desarrollar $\chi(|\vec E|)$ en serie de
Taylor alrededor de cero, y la primera corrección resulta de orden $E^2$:

$$\chi(E) \simeq \chi(0) + \mathcal{O}(E^2),$$

despreciable porque los campos aplicables en un laboratorio son muy pequeños
comparados con los campos característicos a escala molecular. La susceptibilidad
vale, en la práctica, siempre lo que valdría en el límite $E \to 0$.

Finalmente se define la **constante dieléctrica**:

$$\boxed{\ K = \frac{\varepsilon}{\varepsilon_0}\ }$$

> **Decir «material de constante dieléctrica $K$» ya lo dice todo.** Esa frase
> sólo tiene sentido si $K$ es efectivamente una constante, y eso exige que el
> material sea homogéneo, isótropo, sin polarización espontánea y lineal. Muchas
> veces el enunciado de un ejercicio no lista esas hipótesis: al dar $K$, las
> está dando implícitamente.

*La clase siguiente arranca por las consecuencias de esta definición —el signo de
$\chi$ y la cota $K \ge 1$— y pasa a los primeros ejemplos con dieléctricos.*
