# Resumen Clase 14 — Propiedades algebraicas de la integral

## Índice
1. [Introducción](#introducción)
2. [Propiedad de aditividad](#propiedad-de-aditividad)
   - [Enunciado](#enunciado-de-aditividad)
   - [Lema preliminar](#lema-preliminar)
   - [Demostración paso a paso](#demostración-de-aditividad)
3. [Propiedad de homogeneidad](#propiedad-de-homogeneidad)
   - [Caso \(\alpha = 0\)](#caso‑alpha‑0)
   - [Caso \(\alpha > 0\)](#caso‑alpha‑positiva)
   - [Caso \(\alpha < 0\)](#caso‑alpha‑negativa)
4. [Consecuencias estructurales](#consecuencias‑estructurales)
5. [Comentarios finales y vista a la siguiente clase](#comentarios‑finales)

---

## Introducción

En la clase se retomó la noción de integral de Riemann y se mostró que el conjunto de funciones integrables forma un **subespacio vectorial** del espacio de todas las funciones acotadas.  Esta observación permite aplicar la lógica del álgebra lineal dentro del cálculo, en especial al estudiar cómo se comporta la integral frente a sumas y a multiplicaciones por escalares.

---

## Propiedad de aditividad

### Enunciado de aditividad

> **Propiedad (Aditividad).**  Si \(f\) y \(g\) son funciones integrables en el intervalo \([a,b]\), entonces
> $$\int_a^b \bigl(f(x)+g(x)\bigr)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx.$$ 

### Lema preliminar

Se necesitó un lema que compara los ínfimos y supremos de la suma con la suma de los ínfimos y supremos:

- Para cualquier subintervalo \([c,d]\subset[a,b]\):
  $$\inf_{x\in[c,d]}\bigl(f(x)+g(x)\bigr) \ge \inf_{x\in[c,d]} f(x) + \inf_{x\in[c,d]} g(x),$$
  $$\sup_{x\in[c,d]}\bigl(f(x)+g(x)\bigr) \le \sup_{x\in[c,d]} f(x) + \sup_{x\in[c,d]} g(x).$$

Este hecho es una consecuencia directa de la **desigualdad triangular** aplicada a las funciones.

### Demostración de aditividad

1. Se consideró una partición \(P\) del intervalo \([a,b]\) y se definieron las sumas inferiores y superiores de \(f\), \(g\) y \(f+g\).
2. Usando el lema anterior se obtuvo,
   $$S_{P}^{\,\inf}(f+g) \ge S_{P}^{\,\inf}(f) + S_{P}^{\,\inf}(g),$$
   $$S_{P}^{\,\sup}(f+g) \le S_{P}^{\,\sup}(f) + S_{P}^{\,\sup}(g).$$
3. Al pasar al **supremo** de todas las sumas inferiores y al **ínfimo** de todas las sumas superiores se obtuvo la cadena de desigualdades
   $$\int_a^b f + \int_a^b g \le \int_a^b (f+g) \le \int_a^b f + \int_a^b g,$$ 
   lo que implica igualdad.

> **Resultado clave**
> \[\boxed{\int_a^b (f+g)\,dx = \int_a^b f\,dx + \int_a^b g\,dx}\]

---

## Propiedad de homogeneidad

### Caso \(\alpha = 0\)

Si \(\alpha = 0\) la función \(\alpha f\) es la función nula, cuya integral es 0.  Por tanto
$$\int_a^b 0\,dx = 0 = 0\cdot \int_a^b f\,dx.$$

### Caso \(\alpha > 0\)

- Los ínfimos y supremos de \(\alpha f\) se multiplican por \(\alpha\) sin cambiar de sentido.
- Por el mismo razonamiento que en la aditividad se obtiene
  $$\int_a^b (\alpha f)\,dx = \alpha\int_a^b f\,dx.$$

### Caso \(\alpha < 0\)

- Multiplicar por un número negativo invierte el orden de las desigualdades, de modo que los ínfimos se convierten en supremos y viceversa.
- Se muestra que
  $$\int_a^b (\alpha f)\,dx = \alpha\int_a^b f\,dx,$$ 
  manteniendo la igualdad porque la integral inferior coincide con la superior para funciones integrables.

> **Resultado clave**
> \[\boxed{\int_a^b (\alpha f)\,dx = \alpha\int_a^b f\,dx}\]

---

## Consecuencias estructurales

Del hecho de que la integral sea lineal se deduce que el conjunto
$$\mathcal{I}=\{f\,|\,f\text{ integrable en }[a,b]\}\$$
es un **subespacio vectorial** de \(\mathcal{F}=\{f\,|\,f\text{ acotada en }[a,b]\}\).  Además, el operador integral
$$\mathcal{T}:\mathcal{I}\to\mathbb{R},\qquad \mathcal{T}(f)=\int_a^b f(x)\,dx$$
 es una **transformación lineal**.

Esta observación será útil más adelante cuando se estudien operadores como la derivada, que también resultan lineales sobre los subespacios apropiados.

---

## Comentarios finales y vista a la siguiente clase

*Se enfatizó que el razonamiento subyacente a las demostraciones es esencial: no basta con citar el resultado, sino que hay que seguir la cadena de desigualdades y justificar cada paso.*  En la próxima clase se continuará con la **construcción del Teorema Fundamental del Cálculo**, mostrando cómo la linealidad permite definir la antiderivada y conectar integrales con derivadas.

*— Fin del resumen.*
