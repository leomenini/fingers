# Resumen Clase 8 — Campo y carga inducida en la esfera, Laplace en cilíndricas y método de las imágenes

## Índice

1. [Cierre del problema de la esfera conductora](#1-cierre-del-problema-de-la-esfera-conductora)
   - 1.1 [El campo eléctrico](#11-el-campo-eléctrico)
   - 1.2 [Verificación en la superficie](#12-verificación-en-la-superficie)
   - 1.3 [La densidad superficial de carga](#13-la-densidad-superficial-de-carga)
   - 1.4 [Carga total y líneas de campo](#14-carga-total-y-líneas-de-campo)
   - 1.5 [Sobre la superposición](#15-sobre-la-superposición)
2. [Laplace en coordenadas cilíndricas](#2-laplace-en-coordenadas-cilíndricas)
   - 2.1 [Planteo y separación](#21-planteo-y-separación)
   - 2.2 [La ecuación angular y la periodicidad](#22-la-ecuación-angular-y-la-periodicidad)
   - 2.3 [La ecuación radial](#23-la-ecuación-radial)
   - 2.4 [La base de soluciones](#24-la-base-de-soluciones)
3. [El método de las imágenes](#3-el-método-de-las-imágenes)
   - 3.1 [Carga frente a un plano conductor](#31-carga-frente-a-un-plano-conductor)
   - 3.2 [Densidad inducida sobre el plano](#32-densidad-inducida-sobre-el-plano)
   - 3.3 [Dos espejos perpendiculares](#33-dos-espejos-perpendiculares)
   - 3.4 [Carga frente a una esfera conductora](#34-carga-frente-a-una-esfera-conductora)

---

## 1. Cierre del problema de la esfera conductora

Se retoma el resultado de la Clase 7: una esfera conductora descargada de radio $a$ en un campo uniforme $E_0\hat z$, con potencial para $r > a$

$$\phi(r,\theta) = -E_0\,r\cos\theta + E_0\,\frac{a^3}{r^2}\cos\theta$$

donde el primer término es lo que habría sin esfera ($-E_0 z$) y el segundo es el efecto de la polarización.

> El potencial está definido a menos de una constante aditiva. Con la constante elegida, $\phi = 0$ sobre la esfera; con otra elección el valor sería otro.

### 1.1 El campo eléctrico

Con simetría azimutal el campo tiene dos componentes, $\vec E = E_r\,\hat e_r + E_\theta\,\hat e_\theta$, que salen de $\vec E = -\nabla\phi$ en esféricas:

$$E_r = -\frac{\partial\phi}{\partial r}
\qquad\qquad
E_\theta = -\frac{1}{r}\frac{\partial\phi}{\partial\theta}$$

> **Un consejo, no de física sino de vida.** Ese signo menos es **la fuente principal de errores de cálculo** en Física III y en Electromagnetismo. La razón es psicológica: como es lo fácil, uno lo deja para el final, hace la cuenta larga llena de derivadas y se olvida. O peor: lo pone en el primer término de la derivada y no en el segundo.
>
> **La receta: poner el signo primero, en factor de todo, y recién después derivar.** No es un error conceptual, es de distracción — y por eso es tan común.

Derivando el primer término respecto de $r$ sale $-E_0\cos\theta$, y del segundo, con $r^{-2}$ en juego, sale $-2E_0 a^3 r^{-3}\cos\theta$. Aplicando el signo:

$$\boxed{E_r = E_0\cos\theta\left(1 + \frac{2a^3}{r^3}\right)}$$

> El $1$ es lo que habría sin la esfera; el otro término es producto de la polarización.

Para la componente angular, poniendo el $-1/r$ delante y abriendo corchete, la derivada del coseno da $-\sin\theta$ en ambos términos:

$$E_\theta = -\frac{1}{r}\left[E_0\,r\sin\theta - E_0\frac{a^3}{r^2}\sin\theta\right]$$

$$\boxed{E_\theta = -E_0\sin\theta\left(1 - \frac{a^3}{r^3}\right)}$$

(Dentro de la esfera el potencial es constante, así que $\vec E = 0$.)

### 1.2 Verificación en la superficie

Ya se sabía, de la Clase 4, que el campo justo afuera de un conductor tiene que ser **normal a la superficie**. Eso obliga a que la componente tangencial —que acá es $E_\theta$— se anule en $r=a$. Y efectivamente:

$$E_\theta\big|_{r=a} = -E_0\sin\theta\left(1 - \frac{a^3}{a^3}\right) = 0
\qquad\qquad
E_r\big|_{r=a} = 3E_0\cos\theta$$

> **La solución pasa el test**, y conviene hacer siempre esta verificación: es barata y detecta un factor 2 perdido en cualquier parte de la cuenta.
>
> **Y un consejo de parcial:** si en el examen la cuenta no da normal y no se encuentra el error, conviene decírselo al corrector — «sé que esto tiene que ser normal, me equivoqué en las cuentas pero no en la física». El error de cálculo y el error conceptual no pesan igual.

### 1.3 La densidad superficial de carga

Dentro del conductor no hay carga volumétrica, pero en la superficie sí se induce carga. Usando el resultado general de la Clase 4, $E_n = \sigma/\varepsilon_0$, con $E_n = E_r$:

$$\boxed{\sigma(\theta) = \varepsilon_0\,E_r\big|_{r=a} = 3\varepsilon_0 E_0\cos\theta}$$

**No es uniforme**: depende del ángulo, y además **cambia de signo**.

| $\theta$ | $\sigma$ |
|---|---|
| $0 \le \theta < \pi/2$ | positiva |
| $\theta = \pi/2$ | nula |
| $\pi/2 < \theta \le \pi$ | negativa |

> Y eso es lo que se espera físicamente: con el campo apuntando según $+\hat z$, las cargas negativas se acumulan del lado de los $\theta$ grandes y las positivas del lado opuesto.

### 1.4 Carga total y líneas de campo

La esfera se supuso descargada, así que la carga total debe dar cero. Vale la pena verificarlo. Con el elemento de superficie en esféricas, $dS = r^2\sin\theta\,d\theta\,d\varphi$, evaluado en $r=a$:

$$Q = \int_0^{2\pi}\!\!\int_0^{\pi} \sigma(\theta)\;a^2\sin\theta\,d\theta\,d\varphi
= 2\pi a^2\int_0^{\pi} 3\varepsilon_0 E_0\cos\theta\,\sin\theta\,d\theta$$

(la integral en $\varphi$ da $2\pi$ porque nada depende de $\varphi$). Con el cambio $u = \cos\theta$, $du = -\sin\theta\,d\theta$, y los límites $\theta=0\to u=1$, $\theta=\pi\to u=-1$:

$$Q = -2\pi a^2\,3\varepsilon_0 E_0\int_{1}^{-1} u\,du = 0$$

porque es la integral de una función **impar** sobre un intervalo centrado en cero.

$$\boxed{Q = 0}$$

> No sorprende, pero vale la pena confirmarlo: es una verificación independiente de toda la cuenta.

**Las líneas de campo.** Lejos de la esfera son paralelas y equidistribuidas, porque el campo es uniforme. Al acercarse se deforman, y **llegan normales a la superficie**. Las más alejadas del eje pasan sin tocar la esfera.

### 1.5 Sobre la superposición

Una pregunta de clase que vale la pena registrar: ¿por qué no se resolvió el problema por superposición desde el principio?

**Sí vale superposición** —el campo resultante es la suma del campo uniforme más el campo producido por las cargas inducidas, que resulta ser **estrictamente dipolar**—. Lo que pasa es que **a priori no se sabía cuál era esa distribución de carga**: $\sigma$ es *inducida por el propio campo externo*, y se obtuvo recién al final de la cuenta.

> Es decir: la superposición no ayudaba porque le faltaba un dato. Lo que el método sí garantizó es que la solución hallada, al cumplir Laplace y todas las condiciones de borde, es **la** solución, por unicidad.

---

## 2. Laplace en coordenadas cilíndricas

Se repite todo el programa en otras coordenadas, para mostrar que el método de separación de variables es general.

### 2.1 Planteo y separación

Igual que en esféricas no se trató el caso más general —se pidió simetría azimutal—, acá se pide **invariancia por traslaciones en $z$**: el problema es **plano**.

$$\phi = \phi(r,\theta), \qquad \frac{\partial\phi}{\partial z} = 0$$

> **El ejemplo:** un **cilindro conductor descargado muy largo**, de radio $a$, con su eje perpendicular al plano del dibujo, colocado en un campo uniforme. El dibujo es idéntico al de la esfera, **pero el objeto es completamente distinto**. La hipótesis de «muy largo» es la que elimina la dependencia en $z$.

Con el último término del laplaciano cilíndrico anulado, y proponiendo $\phi(r,\theta) = Y(r)\,S(\theta)$:

$$\frac{S(\theta)}{r}\frac{d}{dr}\big(r\,Y'(r)\big) + \frac{Y(r)}{r^2}\,S''(\theta) = 0$$

Multiplicando por $r^2/(Y S)$ se separan las variables:

$$\frac{r}{Y(r)}\frac{d}{dr}\big(r\,Y'(r)\big) = -\frac{S''(\theta)}{S(\theta)} = K$$

y otra vez cada miembro **no depende de ninguna variable** —el izquierdo no depende de $\theta$ y está igualado a algo que no depende de $r$—, así que ambos son la misma **constante de separación** $K$.

### 2.2 La ecuación angular y la periodicidad

$$S''(\theta) + K\,S(\theta) = 0$$

Ésta sí es «facilonga»: es la ecuación del resorte. Pero **cuál de sus familias de soluciones sirve lo decide una condición física**.

> **La restricción:** se consideran problemas en que $\theta$ recorre **todo** el intervalo $[0,2\pi]$. Como al dar la vuelta entera se vuelve al mismo punto del espacio, $S(\theta)$ tiene que ser una **función periódica de período $2\pi$**.
>
> **⚠ Un contraejemplo que aparece en el práctico:** dos planos semi-infinitos que forman una cuña de ángulo $\alpha$, con $\phi=0$ en uno y $\phi=\phi_0$ en el otro, y se busca el potencial entre ellos. El problema se escribe naturalmente en cilíndricas y adentro vale Laplace, **pero $\theta$ sólo recorre $[0,\alpha]$**: no se puede dar la vuelta, no hay periodicidad, y **el análisis que sigue no se le aplica**. Ese caso tiene condiciones de borde distintas y **más soluciones**, y hay que rehacer el análisis.

Con esa restricción:

- **Si $K < 0$**, las soluciones son **exponenciales reales**, y ninguna combinación de exponenciales reales es periódica. **Se descartan.** Luego $K \ge 0$.
- **Si $K = \omega^2 \ge 0$**, la ecuación es $S'' + \omega^2 S = 0$ y

$$S(\theta) = A\cos(\omega\theta) + B\sin(\omega\theta)$$

Para que el período sea exactamente $2\pi$, $\omega$ tiene que ser **entero**.

$$\boxed{K = n^2, \qquad n \in \mathbb{Z}}$$

> Comparado con el camino esférico —serie de potencias, recurrencia, polinomios de Legendre, criterio de convergencia— este fue mucho más corto. La estructura del argumento, sin embargo, es la misma: la condición física sobre el dominio es la que **cuantiza** la constante de separación.

### 2.3 La ecuación radial

Con $K = n^2$:

$$r\,\frac{d}{dr}\big(r\,Y'(r)\big) = n^2\,Y(r)$$

Otra vez lineal, de segundo orden, con coeficientes dependientes de $r$.

> **Ejercicio con la misma pista de la clase anterior:** cambio de variable $v = \ln r$.

Hay que separar dos casos:

- **$n \ge 1$:**

$$Y(r) = A\,r^{-n} + B\,r^{\,n}$$

- **$n = 0$:** la ecuación se reduce a $\dfrac{d}{dr}(r\,Y') = 0$, de donde $r\,Y' = C$, $Y' = C/r$ y

$$Y(r) = C\ln r + D$$

> El caso $n=0$ da **una sola** solución angular (la constante, con $\omega=0$) en lugar de dos, pero **dos** radiales: el logaritmo y la constante. Reaparece el potencial logarítmico de la línea infinita de carga que ya había salido en la Clase 6.

### 2.4 La base de soluciones

$$\boxed{\phi(r,\theta) = C\ln r + D
+ \sum_{n=1}^{\infty}\Big(a_n r^{\,n} + b_n r^{-n}\Big)\Big(A_n\cos n\theta + B_n\sin n\theta\Big)}$$

> **Hay una redundancia deliberada en la escritura:** por cada $n$ aparecen cuatro constantes, pero sólo **tres** son independientes, porque un factor común de la primera pareja se puede absorber en la segunda. Se deja así porque «el que puede más puede menos»: al imponer condiciones de borde algunas constantes sólo aparecerán como productos.

**Ejercicio dejado (y que está en el práctico):** resolver el cilindro conductor descargado en el campo uniforme con este desarrollo, imponiendo las condiciones de borde igual que con la esfera.

> **⚠ Pero hay una diferencia delicada con el caso esférico.** Para cerrar el problema de la esfera se usó el desarrollo multipolar y el hecho de que la carga total era nula. Acá **eso no se puede aplicar directamente**: el desarrollo multipolar vale para distribuciones **localizadas en una región finita**, y un cilindro infinito no lo es. Se puede estar muy lejos comparado con el radio, pero no comparado con la longitud. Al final el problema se resuelve igual, pero el argumento requiere más cuidado.

---

## 3. El método de las imágenes

La motivación vuelve al **teorema de unicidad** de la Clase 5: si se encuentra *una* solución que cumple todas las condiciones de borde, ganó — «todos los golpes están permitidos». La consecuencia práctica es que conviene coleccionar métodos: cuantos más golpes se sepan, más duro se le puede pegar a la ecuación.

### 3.1 Carga frente a un plano conductor

**El problema:** un plano conductor infinito y una carga $q$ a distancia $d$ de él. Se quiere resolver Laplace **sólo del lado de la carga**; lo que pasa del otro lado no interesa.

> **La idea rectora: un plano conductor es un espejo** —de hecho muchos espejos se construyen así—. Un observador parado del lado de la carga, si no se da cuenta de que eso es un espejo, **ve dos cargas**. Entonces la solución de este lado tiene que ser la misma que la del problema de dos cargas.

Se propone una **carga imagen** $q'$, ficticia, del otro lado del plano y a la misma distancia. Con el plano en $x=0$ y la carga real en $x=d$:

$$\phi(x,y,z) = \frac{1}{4\pi\varepsilon_0}\left[\frac{q}{\sqrt{(x-d)^2+y^2+z^2}} + \frac{q'}{\sqrt{(x+d)^2+y^2+z^2}}\right]$$

**Imponer la condición de borde.** Sobre el plano, $x=0$, los dos denominadores se vuelven **idénticos**:

$$\phi(0,y,z) = \frac{1}{4\pi\varepsilon_0}\cdot\frac{q + q'}{\sqrt{d^2+y^2+z^2}}$$

Para que eso sea **constante** —independiente de $y$ y $z$— hay una sola posibilidad:

$$\boxed{q' = -q \qquad\text{y entonces}\qquad \phi_0 = 0}$$

$$\phi(x,y,z) = \frac{q}{4\pi\varepsilon_0}\left[\frac{1}{\sqrt{(x-d)^2+y^2+z^2}} - \frac{1}{\sqrt{(x+d)^2+y^2+z^2}}\right]$$

> **Se verifican todas las condiciones:** es constante sobre el plano; cerca de la carga real domina el término de la carga y se comporta como debe; y $\phi\to0$ a distancia grande, coherente con que la carga está localizada.
>
> **⚠ Esta es la solución sólo de este lado del espejo.** Del otro lado es otra historia — si el conductor es macizo, allí el potencial es constante e igual a cero.

> **La carga inducida es negativa, y es razonable:** una carga positiva atrae las negativas hacia la zona cercana; en un conductor infinito las positivas quedan a lo lejos.

> **Comparación con la alternativa.** El mismo problema se podría atacar con simetría azimutal y polinomios de Legendre, pero sería «una pesadilla»: hay una serie infinita, un punto singular donde no vale Laplace, y habría que resolver por regiones y empalmar. Acá fueron dos cargas.

### 3.2 Densidad inducida sobre el plano

Sobre el plano el campo tiene que ser normal, es decir según $\hat x$. Derivando (y poniendo el signo menos **primero**, como manda §1.1):

$$E_x = -\frac{\partial\phi}{\partial x}
= \frac{q}{4\pi\varepsilon_0}\left[\frac{x-d}{\big((x-d)^2+y^2+z^2\big)^{3/2}} - \frac{x+d}{\big((x+d)^2+y^2+z^2\big)^{3/2}}\right]$$

Evaluando en $x=0$, los dos denominadores coinciden y los numeradores se suman:

$$\sigma = \varepsilon_0 E_x\big|_{x=0}$$

$$\boxed{\sigma(y,z) = -\,\frac{q\,d}{2\pi\big(d^2+y^2+z^2\big)^{3/2}}}$$

> Nótese que $\varepsilon_0$ se cancela, como debe.

**Ejercicio dejado en clase:** verificar que la carga inducida total es exactamente la opuesta a la carga real,

$$\int_{-\infty}^{\infty}\!\!\int_{-\infty}^{\infty}\sigma\,dy\,dz = -q$$

> **Truco:** pasar a coordenadas polares en el plano. El resultado tiene que dar $-q$: la carga distribuida sobre el plano es equivalente a la carga imagen.

### 3.3 Dos espejos perpendiculares

**El problema:** dos planos conductores perpendiculares y una carga $q$ en el cuadrante que forman. Se resuelve Laplace en ese cuadrante.

**Hacen falta tres imágenes**, no una ni dos:

| Posición | Carga |
|---|---|
| reflejada en el plano horizontal | $-q$ |
| reflejada en el plano vertical | $-q$ |
| reflejada en ambos (la diagonal) | $+q$ |

**Por qué la cuarta es indispensable.** La carga real más su imagen en un plano hacen que **ese** plano sea equipotencial. Pero al agregar la imagen del otro plano, esa condición se rompe. Para restaurarla hay que agregar **la imagen de la imagen**. Y entonces, por simetría, las cuatro cargas juntas dejan equipotenciales **los dos** planos a la vez.

> Y es exactamente lo que uno vería: **con dos espejos en ángulo recto se ven cuatro imágenes**. La construcción matemática reproduce lo que hace la óptica.

### 3.4 Carga frente a una esfera conductora

El ejemplo serio. Una **esfera conductora** de radio $a$ centrada en el origen y una carga $+q$ sobre el eje, a distancia $d > a$ del centro. Se busca el potencial **afuera** de la esfera, con la condición

$$\phi\big|_{r=a} = 0$$

> **La intuición del espejo curvo:** un espejo curvo también da una imagen, pero **deformada**. Se espera entonces que la imagen de una carga puntual siga siendo una carga puntual, pero con **otra posición** $d'$ y **otro valor** $q'$ — ninguno de los dos obvio de antemano.
>
> Lo que sí se sabe por simetría es que la imagen está **sobre el eje**: el problema es invariante por rotación alrededor de él, así que nada puede desimetrizarla.

Con la carga imagen en $x = d'$:

$$\phi(x,y,z) = \frac{1}{4\pi\varepsilon_0}\left[\frac{q}{\sqrt{(x-d)^2+y^2+z^2}} + \frac{q'}{\sqrt{(x-d')^2+y^2+z^2}}\right]$$

**Imponer $\phi=0$ sobre la esfera.** Desarrollando los cuadrados aparece la combinación $x^2+y^2+z^2$, que sobre la esfera vale $a^2$:

$$\frac{q}{\sqrt{a^2+d^2-2dx}} = -\,\frac{q'}{\sqrt{a^2+d'^2-2d'x}}
\qquad\text{para todo } x$$

> «Parece que estuviera hecho a propósito»: el desarrollo deja justo la combinación que la ecuación de la esfera permite sustituir.

Elevando al cuadrado y multiplicando cruzado:

$$q^2\big(a^2+d'^2-2d'x\big) = q'^2\big(a^2+d^2-2dx\big)$$

Como esto debe valer **para todo $x$** sobre la esfera, se igualan por separado la parte constante y la parte lineal en $x$ — un sistema de dos ecuaciones con dos incógnitas:

$$q^2\big(a^2+d'^2\big) = q'^2\big(a^2+d^2\big)
\qquad\qquad
q^2\,d' = q'^2\,d$$

De la segunda, $q'^2 = q^2\,d'/d$. Sustituyendo en la primera, $q^2$ se simplifica:

$$a^2+d'^2 = \frac{d'}{d}\big(a^2+d^2\big)
\qquad\Longrightarrow\qquad
d'^2 - \frac{a^2+d^2}{d}\,d' + a^2 = 0$$

Resolviendo la cuadrática:

$$d' = \frac{\big(a^2+d^2\big) \pm \sqrt{\big(a^2+d^2\big)^2 - 4a^2d^2}}{2d}
= \frac{\big(a^2+d^2\big) \pm \big|a^2-d^2\big|}{2d}$$

**completando el cuadrado** bajo la raíz. Como $d > a$, el valor absoluto vale $d^2-a^2$, y quedan dos candidatos:

| Signo | Valor | ¿Sirve? |
|---|---|---|
| $+$ | $\dfrac{2d^2}{2d} = d$ | **No**: es la posición de la carga original |
| $-$ | $\dfrac{2a^2}{2d} = \dfrac{a^2}{d}$ | **Sí** |

$$\boxed{d' = \frac{a^2}{d}}$$

> Y es consistente: como $d>a$, resulta $d' < a$, es decir la carga imagen queda **dentro** de la esfera, que es donde tiene que estar — fuera de la región donde se resuelve el problema.

Sustituyendo en $q'^2 = q^2 d'/d = q^2 a^2/d^2$ y eligiendo el signo negativo (la imagen tiene que compensar a la carga real, que está del lado cercano a esa parte de la superficie):

$$\boxed{q' = -\,q\,\frac{a}{d}}$$

**Pero esa no es la solución que interesa.** La configuración hallada corresponde a una esfera con **carga neta** $q' = -qa/d$: el potencial cero en la superficie exige que la esfera esté cargada.

**El caso realista es la esfera descargada.** Para pasar a él hay que agregar una **segunda carga imagen** que:

1. **no rompa la condición de equipotencial**, y
2. **cancele la carga neta**.

> **¿Dónde ponerla?** No en un lugar simétrico —eso rompería la primera condición—. La respuesta es **en el centro**: una carga puntual en el centro de la esfera mantiene la superficie equipotencial (a otro valor constante, ya no cero), que es todo lo que se pide.

$$q'' = +\,q\,\frac{a}{d} \quad\text{en el origen}
\qquad\Longrightarrow\qquad
q' + q'' = 0$$

> **La moraleja del método**, en palabras del docente: no es un procedimiento científico sino **artístico**. No hay una regla que dé la solución; hay que ser astuto para elegir dónde poner las cargas, y sólo funciona en geometrías suficientemente simples como para saber cuál es la imagen. Pero con experiencia se le agarra la mano — y el teorema de unicidad garantiza que, si las condiciones de borde se cumplen, la solución hallada es *la* solución.

*Continúa en la Clase 9 —cuya transcripción no está publicada en OpenFING— con la ecuación de Laplace en coordenadas cilíndricas y el método de las imágenes aplicados a más casos, y el paso a los medios dieléctricos.*
