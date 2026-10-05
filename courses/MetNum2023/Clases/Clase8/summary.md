# Resumen Clase 8 — Número de condición y sensibilidad de los sistemas lineales

## Índice

1. [Un residuo pequeño y un error grande](#1-un-residuo-pequeno-y-un-error-grande)
2. [Del residuo absoluto al error relativo](#2-del-residuo-absoluto-al-error-relativo)
3. [Qué mide el número de condición](#3-que-mide-el-numero-de-condicion)
4. [Perturbaciones del lado derecho](#4-perturbaciones-del-lado-derecho)
5. [Perturbaciones de la matriz](#5-perturbaciones-de-la-matriz)
6. [Interpretación del resultado de Wilkinson](#6-interpretacion-del-resultado-de-wilkinson)

## 1. Un residuo pequeño y un error grande

### 1.1 La pregunta que quedó abierta

Se considera $A\mathbf x=\mathbf b$ con $A$ invertible, una aproximación computada $\overline{\mathbf x}$, el error $\mathbf e=\overline{\mathbf x}-\mathbf x$ y el residuo $\mathbf r=A\overline{\mathbf x}-\mathbf b$. La identidad $\mathbf r=A\mathbf e$ implica que error y residuo se anulan simultáneamente en aritmética exacta. No implica que sus normas sean simultáneamente pequeñas.

El residuo se calcula a partir de los datos y la salida del programa. El error exige conocer la solución exacta. Por eso interesa saber qué se puede concluir sobre el error a partir de un residuo menor que una tolerancia. Para responder se usarán las normas operador, su compatibilidad con la norma vectorial y la submultiplicatividad, introducidas en la clase anterior.

### 1.2 El ejemplo de tres cifras

El docente presenta un sistema de dos ecuaciones, usa tres cifras significativas y aplica eliminación gaussiana con pivoteo parcial. No desarrolla sus cuentas en el pizarrón: remite al ejemplo 2.5.1 de sus apuntes. Los vectores anunciados son

$$
\mathbf b=\begin{pmatrix}0.217\\0.254\end{pmatrix},\qquad
\overline{\mathbf x}=\begin{pmatrix}-0.443\\1\end{pmatrix},\qquad
\mathbf x=\begin{pmatrix}1\\-1\end{pmatrix}.
$$

La explicación explícita de las potencias de diez da

$$
\mathbf r\approx\begin{pmatrix}4.60\cdot10^{-4}\\-5.41\cdot10^{-4}\end{pmatrix},
\qquad \|\mathbf r\|_\infty\approx5.41\cdot10^{-4}.
$$

Sin embargo,

$$
\mathbf e=\begin{pmatrix}-1.443\\2\end{pmatrix},\qquad
\boxed{\|\mathbf e\|_\infty=2}.
$$

El residuo parece pequeño para una computadora de tres cifras, pero la solución es mala. Esta vez no basta culpar a la falta de pivoteo: ya se aplicó la estrategia aprendida. El sistema mismo es sensible.

> La transcripción no enumera todas las entradas de $A$ y presenta una vacilación al leer los ceros del residuo. Se conserva la aclaración posterior en potencias de diez y su norma anunciada. No se reconstruye una matriz numérica a partir de datos redondeados ni se atribuyen cuentas adicionales al docente.

### 1.3 Rectas casi paralelas

Un sistema de dos ecuaciones representa la intersección de dos rectas. En el gráfico mostrado, las rectas están tan próximas que hace falta ampliar mucho para distinguirlas. Un punto puede estar cerca de ambas rectas y, al mismo tiempo, lejos de su intersección. El residuo evalúa cuánto se incumplen las ecuaciones; el error mide la diferencia respecto del punto solución.

En contraste, si las rectas se cruzan con direcciones muy distintas, estar cerca de ambas obliga a estar cerca de su intersección. El docente dibuja un caso extremo aproximadamente ortogonal. Esta comparación motiva la sensibilidad, sin establecer una identificación literal entre residuo y distancia geométrica: los coeficientes de cada ecuación intervienen en su escala.

La proximidad a una dependencia lineal resulta peligrosa, pero el tamaño del determinante no será una medida adecuada para cuantificar el problema. Se necesita una cantidad construida con normas.

## 2. Del residuo absoluto al error relativo

### 2.1 Dos cotas absolutas

Se fija una norma vectorial y se usa siempre su norma matricial inducida. Por brevedad se escribe el mismo símbolo $\|\cdot\|$; el objeto dentro determina cuál de las dos se aplica. La compatibilidad da

$$
\|\mathbf r\|=\|A\mathbf e\|\le\|A\|\|\mathbf e\|.
$$

Como $A$ es invertible, también $\mathbf e=A^{-1}\mathbf r$, de donde

$$
\|\mathbf e\|\le\|A^{-1}\|\|\mathbf r\|.
$$

Juntas producen

$$
\frac{\|\mathbf r\|}{\|A\|}
\le\|\mathbf e\|\le\|A^{-1}\|\|\mathbf r\|.
$$

Es una relación entre tamaños absolutos. La norma de la inversa no es el inverso de la norma: el exponente $-1$ permanece dentro de las barras. Sacarlo destruiría precisamente la información sobre direcciones que se quiere medir.

### 2.2 Normalizar sin dividir por vectores

Un error relativo vectorial se mide dividiendo por $\|\mathbf x\|$, no por el vector $\mathbf x$. Para los cocientes siguientes se supone $\mathbf b\ne0$, equivalente aquí a $\mathbf x\ne0$. Se repite el argumento anterior usando $\mathbf b=A\mathbf x$:

$$
\frac{\|\mathbf b\|}{\|A\|}
\le\|\mathbf x\|\le\|A^{-1}\|\|\mathbf b\|.
$$

Tomar recíprocos invierte las desigualdades, porque las cantidades son positivas:

$$
\frac{1}{\|A^{-1}\|\|\mathbf b\|}
\le\frac{1}{\|\mathbf x\|}
\le\frac{\|A\|}{\|\mathbf b\|}.
$$

Se combina la cota inferior del error con la inferior del recíproco, y las dos superiores entre sí. Aparece naturalmente el **número de condición**:

$$
\boxed{\kappa(A)=\|A\|\|A^{-1}\|},
$$

$$
\boxed{
\frac1{\kappa(A)}\frac{\|\mathbf r\|}{\|\mathbf b\|}
\le\frac{\|\mathbf e\|}{\|\mathbf x\|}
\le\kappa(A)\frac{\|\mathbf r\|}{\|\mathbf b\|}}.
$$

El número depende de la norma. Aunque el producto se puede definir para otras normas matriciales, estas desigualdades fueron deducidas con una norma inducida compatible con la norma de los vectores.

Si $\kappa(A)$ fuera 4, error y residuo normalizados serían comparables dentro de ese factor. Si fuera de miles de millones, un residuo pequeño podría dar una cota enorme para el error. Una cota superior grande no prueba que todo error sea grande: significa que el residuo por sí solo deja de garantizar precisión.

## 3. Qué mide el número de condición

### 3.1 Cálculo y determinante

En la demostración con Octave se menciona `cond(A,p)` para distintas normas, y `condest(A)` como estimador del número de condición asociado a la norma uno. Según la explicación de clase, `cond(A)` usa la norma dos. Se señala que calcular una condición puede ser caro y que estimarla suele bastar para conocer su orden. No se explica el algoritmo interno de estas funciones.

Para la matriz del ejemplo se anuncian aproximadamente $2.6\cdot10^6$ en normas uno e infinito y $2.19\cdot10^6$ en norma dos. El estimador da un valor del mismo orden. Lo relevante es la magnitud $10^6$, no la diferencia entre 2.6 y 2.19. Las observaciones de comparabilidad entre normas se hacen para tamaños razonables; no se extrae una cota uniforme en la dimensión.

Un contraejemplo al criterio del determinante es un múltiplo pequeño de la identidad. El ejemplo corresponde a

$$
A=10^{-5}I_3=
\begin{pmatrix}10^{-5}&0&0\\0&10^{-5}&0\\0&0&10^{-5}\end{pmatrix},
\qquad \det A=10^{-15}.
$$

Aun con ese determinante, su número de condición inducido es uno. La matriz no es singular: un determinante pequeño y un determinante nulo son afirmaciones diferentes. La escala absoluta de los coeficientes no decide por sí sola la sensibilidad relativa.

### 3.2 Cociente entre mayor y menor amplificación

Para $A$ invertible se prueba la caracterización

$$
\boxed{\kappa(A)=
\frac{\displaystyle\max_{\mathbf x\ne0}\frac{\|A\mathbf x\|}{\|\mathbf x\|}}
{\displaystyle\min_{\mathbf x\ne0}\frac{\|A\mathbf x\|}{\|\mathbf x\|}}}.
$$

El numerador ya es $\|A\|$ por definición. Falta identificar el inverso del mínimo con $\|A^{-1}\|$. Para cantidades positivas, el recíproco del mínimo es el máximo de los recíprocos. Por tanto

$$
\left(\min_{\mathbf x\ne0}\frac{\|A\mathbf x\|}{\|\mathbf x\|}\right)^{-1}
=\max_{\mathbf x\ne0}\frac{\|\mathbf x\|}{\|A\mathbf x\|}.
$$

Se hace el cambio $\mathbf y=A\mathbf x$. La invertibilidad asegura que los vectores no nulos recorren exactamente los vectores no nulos, y $\mathbf x=A^{-1}\mathbf y$. Así,

$$
\max_{\mathbf x\ne0}\frac{\|\mathbf x\|}{\|A\mathbf x\|}
=\max_{\mathbf y\ne0}\frac{\|A^{-1}\mathbf y\|}{\|\mathbf y\|}
=\|A^{-1}\|.
$$

Son igualdades, no estimaciones por compatibilidad. El cambio de variable conserva todo el dominio del máximo; esa es la razón por la que se obtiene la caracterización exacta.

Se puede pensar equivalentemente en vectores unitarios: se aplica $A$ a todas las direcciones y se compara la mayor longitud de salida con la menor. Que una dirección invierta su sentido no importa, porque se miden normas. Los vectores que producen los dos extremos pueden ser distintos.

### 3.3 Dos escalas muy diferentes

Para $A=\alpha I$, con $\alpha\ne0$, toda dirección se amplifica por $|\alpha|$. El máximo y el mínimo coinciden y $\kappa(\alpha I)=1$. La observación computacional presupone que el número es representable en la máquina.

En cambio, el ejemplo diagonal

$$
A=\begin{pmatrix}\alpha&0\\0&1/\alpha\end{pmatrix},\qquad \alpha=1000
$$

estira una dirección por mil y contrae la otra por mil. En las normas usuales consideradas, el cociente es $1000/(1/1000)=10^6$. La dificultad está en la diferencia entre direcciones, no en que todas sean grandes o pequeñas simultáneamente.

Si una matriz es singular, hay una dirección no nula enviada a cero; el mínimo de amplificación se anula. Esto motiva asignar condición infinita en el caso singular, aunque la definición mediante $A^{-1}$ ya no sea aplicable. La clase no desarrolla una fórmula general basada sólo en los valores propios de una matriz arbitraria.

## 4. Perturbaciones del lado derecho

Se analiza ahora un error de medición, sin computadora ni redondeo. La matriz $A$ es exacta, pero el dato pasa de $\mathbf b$ a $\mathbf b+\delta\mathbf b$:

$$
\begin{aligned}
A\mathbf x&=\mathbf b,\\
A(\mathbf x+\delta\mathbf x)&=\mathbf b+\delta\mathbf b.
\end{aligned}
$$

Restar las ecuaciones cancela $A\mathbf x$ y $\mathbf b$:

$$
A\delta\mathbf x=\delta\mathbf b,\qquad
\delta\mathbf x=A^{-1}\delta\mathbf b.
$$

Es la misma estructura que relacionaba error y residuo. La compatibilidad da $\|\delta\mathbf b\|\le\|A\|\|\delta\mathbf x\|$ y $\|\delta\mathbf x\|\le\|A^{-1}\|\|\delta\mathbf b\|$. Al normalizar con las cotas derivadas de $A\mathbf x=\mathbf b$:

$$
\frac1{\kappa(A)}\frac{\|\delta\mathbf b\|}{\|\mathbf b\|}
\le\frac{\|\delta\mathbf x\|}{\|\mathbf x\|}
\le\kappa(A)\frac{\|\delta\mathbf b\|}{\|\mathbf b\|}.
$$

El número de condición mide sensibilidad de entrada a salida. Si es moderado, un pequeño cambio relativo en los datos garantiza un pequeño cambio relativo en la solución. Si es grande, la garantía se debilita. En el dibujo de rectas casi paralelas, cambiar ligeramente el término independiente desplaza mucho su intersección; con direcciones bien separadas, ese efecto es mucho menor.

## 5. Perturbaciones de la matriz

Ahora el lado derecho permanece fijo y cambian los coeficientes:

$$
A\mathbf x=\mathbf b,\qquad
(A+\delta A)(\mathbf x+\delta\mathbf x)=\mathbf b.
$$

Se considera una solución del sistema perturbado. Al expandir y restar aparece un término que no debe omitirse:

$$
A\delta\mathbf x+\delta A(\mathbf x+\delta\mathbf x)=0.
$$

Por la invertibilidad de la matriz original,

$$
\delta\mathbf x=-A^{-1}\delta A(\mathbf x+\delta\mathbf x).
$$

Aplicar compatibilidad al producto matriz-vector y submultiplicatividad al producto de matrices da

$$
\|\delta\mathbf x\|\le\|A^{-1}\|\|\delta A\|\,
\|\mathbf x+\delta\mathbf x\|.
$$

Se divide por la norma de la solución perturbada, suponiéndola no nula, y se multiplica y divide por $\|A\|$:

$$
\boxed{\frac{\|\delta\mathbf x\|}{\|\mathbf x+\delta\mathbf x\|}
\le\kappa(A)\frac{\|\delta A\|}{\|A\|}}.
$$

El denominador se corrige explícitamente durante la clase: es $\|\mathbf x+\delta\mathbf x\|$, no $\|\mathbf x\|$. El docente comenta que deberían parecerse cuando el cambio es pequeño, pero eso no autoriza a identificarlos en la desigualdad. Tampoco se demuestra aquí una condición de invertibilidad de $A+\delta A$ ni otra cota con denominador modificado.

## 6. Interpretación del resultado de Wilkinson

### 6.1 Resolver exactamente un problema perturbado

El docente atribuye a Wilkinson un resultado sobre la eliminación gaussiana con pivoteo parcial. La solución calculada se interpreta como solución exacta de un sistema cuya matriz ha cambiado:

$$
\boxed{(A+E)\overline{\mathbf x}=\mathbf b}.
$$

La matriz $E$ representa la perturbación. La clase describe sus entradas como del orden de los errores de representación de los coeficientes y resume esa idea, esquemáticamente, mediante

$$
\|E\|\lesssim c\,\varepsilon_{\mathrm{maq}}\|A\|.
$$

Se habla de un factor $c$ no muy grande, del orden de diez, para interpretar el efecto de la precisión. **El teorema no se demuestra.** La clase pide aceptarlo y estudiar sus consecuencias.

> Esta es la formulación simplificada presentada en clase. No se especifican dependencias generales del factor $c$ ni se proporciona una cota universal para toda matriz y dimensión. Las conclusiones siguientes se leen bajo el control de perturbación expuesto, sin convertir la estimación informal en una garantía uniforme.

### 6.2 Qué permite decir sobre el error

En el análisis anterior se identifica $\delta A=E$ y $\delta\mathbf x=\overline{\mathbf x}-\mathbf x=\mathbf e$. Por eso

$$
\frac{\|\mathbf e\|}{\|\overline{\mathbf x}\|}
\le\kappa(A)\frac{\|E\|}{\|A\|}
\lesssim c\,\kappa(A)\varepsilon_{\mathrm{maq}}.
$$

Una matriz bien condicionada permite convertir una pequeña perturbación relativa de los datos en una pequeña diferencia relativa de soluciones. La exposición ilustra el orden con precisión cercana a $10^{-16}$, un factor cercano a diez y condición del orden de veinte: se espera un error del orden de $10^{-14}$. Se trata de una estimación de escala, no de cifras garantizadas para cualquier entrada.

Si la condición es grande, el factor puede absorber la pequeñez de la precisión. Haber usado pivoteo parcial no elimina la sensibilidad del sistema. Aquí se separan dos causas: qué tan cerca queda el problema perturbado y qué tanto cambia su solución al perturbarlo.

### 6.3 El residuo tiene otra normalización

Para estudiar el residuo se parte directamente de la ecuación perturbada. Como $A\overline{\mathbf x}+E\overline{\mathbf x}=\mathbf b$,

$$
\mathbf r=A\overline{\mathbf x}-\mathbf b=-E\overline{\mathbf x}.
$$

La compatibilidad da $\|\mathbf r\|\le\|E\|\|\overline{\mathbf x}\|$. Se normaliza ahora por $\|A\|\|\overline{\mathbf x}\|$, en lugar de $\|\mathbf b\|$:

$$
\boxed{\frac{\|\mathbf r\|}{\|A\|\|\overline{\mathbf x}\|}
\le\frac{\|E\|}{\|A\|}
\lesssim c\,\varepsilon_{\mathrm{maq}}}.
$$

Se cancelan las normas de la solución computada y no aparece $\kappa(A)$. Bajo la estimación expuesta, el método produce un residuo relativamente pequeño incluso cuando la matriz está mal condicionada. Que ese residuo implique un error pequeño depende de la condición. No se confunden este cociente, el residuo absoluto y el residuo dividido por $\|\mathbf b\|$: cada normalización responde a una desigualdad diferente.
