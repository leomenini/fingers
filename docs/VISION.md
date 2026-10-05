# VISION.md

## Visión

OpenFING tiene cientos de horas de clases grabadas. El contenido está, pero
encontrarlo no es fácil. ¿En qué clase se vio Taylor? ¿Qué hay que saber antes
de la clase 14? ¿En qué minuto el docente demuestra el teorema? Para
responderlo hay que mirar las clases.

Los LLM pueden explicar casi cualquier tema, pero no saben **qué se dijo en
esta clase, en este curso, en este minuto**. fingers quiere ser ese puente: una
herramienta que le da al LLM el mapa de los cursos y lo devuelve siempre a la
fuente, con el tramo exacto del video.

## Misión

Construir un conector (un servidor MCP) que guíe a quien estudia a través de
los cursos de OpenFING, con respuestas que siempre se puedan verificar contra
la clase original.

## Principios

- **El mapa, no el territorio.** fingers escribe el mapa (temas, orden,
  prerrequisitos, procedencia). Las clases son de OpenFING, y el conector
  apunta a ellas en lugar de reemplazarlas.
- **Toda respuesta cita su fuente.** Clase y tramo de video, con un enlace.
- **Herramienta, no producto terminado.** Lo que no se puede medir no se
  presenta como resultado. Primero la evaluación, después la afirmación.
- **Determinista donde se pueda.** El conector arma pasajes y enlaces con
  código reproducible. El razonamiento lo pone el LLM del cliente.
- **Un conector, un objetivo.** Guiar por los cursos. Lo demás espera su
  propio ADR.

## Lo que este proyecto NO busca

- Reemplazar a los docentes, las clases o la bibliografía.
- Redistribuir el material de OpenFING.
- Ser un repositorio de apuntes terminados: las notas que existen son
  contenido curado y referencia de evaluación, no el objetivo.
- Dar respuestas sin fuente.

## Horizonte

- **Ahora:** un conector útil para el autor mientras estudia.
- **Después:** que cualquier estudiante de FING lo use, y que usarlo cueste
  pegar un enlace.
