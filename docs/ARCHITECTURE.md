# ARCHITECTURE.md

## Visión

Este proyecto nace con un objetivo simple:

> **Preservar, organizar y mejorar el conocimiento académico generado en la universidad mediante un proceso abierto, trazable y revisado por personas.**

No pretende reemplazar a los docentes, las clases ni la bibliografía.

La inteligencia artificial es utilizada únicamente como una herramienta editorial para acelerar la construcción de borradores. La autoridad del contenido siempre proviene de las fuentes originales y de la revisión humana.

---

# Filosofía

El proyecto se inspira en varias ideas existentes:

* Git para el versionado del conocimiento.
* GitHub para el flujo de contribuciones mediante Pull Requests.
* Wikipedia para la construcción colaborativa del conocimiento.
* LaTeX como formato de publicación académica.
* Markdown como formato abierto para representar el conocimiento.
* YAML para describir metadatos estructurados.

Todo el contenido debe poder reconstruirse utilizando herramientas abiertas.

El conocimiento nunca debe depender de un proveedor específico de inteligencia artificial.

---

# Principios

## 1. Las fuentes son la autoridad

Las fuentes originales siempre tienen prioridad sobre cualquier resumen generado.

Las principales fuentes pueden ser:

* clases de OpenFING;
* bibliografía oficial;
* material publicado por los docentes;
* ejercicios oficiales.

El proyecto nunca intenta reemplazar estas fuentes.

---

## 2. La IA propone, las personas deciden

Los modelos de lenguaje generan únicamente borradores.

Todo contenido debe ser revisado antes de considerarse estable.

La revisión humana es parte obligatoria del proceso editorial.

---

## 3. El conocimiento es trazable

Toda modificación debe poder responder preguntas como:

* ¿Quién hizo este cambio?
* ¿Por qué se realizó?
* ¿Qué fuente lo respalda?
* ¿Cuándo fue revisado?

El conocimiento no debe ser anónimo.

---

## 4. El conocimiento es reproducible

A partir de las mismas fuentes debe ser posible reconstruir el resultado final.

El proyecto documenta el proceso completo, no solamente el resultado.

---

## 5. El repositorio es la fuente de verdad

Git constituye la fuente principal del proyecto.

Las futuras bases de datos o sitios web serán únicamente representaciones del repositorio.

Nunca al revés.

---

# Pipeline Editorial

Cada clase sigue el mismo flujo de trabajo.

```
Video

↓

Extracción de transcripción

↓

Limpieza

↓

Markdown

↓

LLM (borrador)

↓

Revisión humana

↓

LaTeX

↓

PDF
```

En ningún momento un contenido generado automáticamente se considera definitivo.

> El paso de "Extracción de transcripción" tiene su mecanismo concreto
> decidido en [`docs/adr/0001-extraccion-por-vtt-estatico.md`](adr/0001-extraccion-por-vtt-estatico.md)
> (VTT estático vía HTTP, sin ejecutar JavaScript) y
> [`docs/adr/0002-representacion-de-la-transcripcion.md`](adr/0002-representacion-de-la-transcripcion.md)
> (separación `fetch`/`parse`, doble representación con y sin marcas de
> tiempo). Este diagrama describe el flujo editorial a nivel de proyecto, no
> los módulos de código: hoy sólo el Extractor existe como código real: el
> resto de los pasos son manuales.

---

# Unidad Fundamental

La unidad mínima del proyecto es una **Clase**.

Cada clase representa un objeto académico independiente con:

* contenido;
* metadatos;
* historial;
* recursos asociados;
* estado editorial.

Una clase debe poder evolucionar sin afectar al resto del curso.

---

# Estructura

```
courses/<Curso>/

  build.sh
  CLAUDE.md

  Clases/

    assets/            # compartido por el curso (tikzstyles.tex)

    ClaseXX/

      Transcription_raw.txt
      summary.md
      notes.tex
      metadata.yaml
      assets/          # opcional, ver abajo
```

Cada carpeta de clase debe ser autocontenida: los cuatro archivos son
obligatorios.

La carpeta `assets/` de una clase **se crea on demand**, al producir su primera
figura. No se crean carpetas vacías ni subcarpetas por tipo de recurso: los
archivos van planos, nombrados `<claseN>-<slug>.{tex,svg,pdf}` en kebab-case.
El `assets/` a nivel de curso existe para consistencia visual (paleta y estilos
compartidos), no para deduplicar.

---

# Recursos

Una clase puede contener múltiples recursos además del texto.

Por ejemplo:

* diagramas;
* gráficos;
* circuitos;
* referencias bibliográficas;
* figuras originales.

El texto no representa todo el conocimiento de una clase.

Todo recurso gráfico se autora en **formato vectorial** y reproducible (TikZ,
circuitikz, pgfplots, SVG). No se usan fotografías del pizarrón ni capturas del
video: son material de origen, no contenido del repositorio, y no son
reconstruibles con herramientas abiertas.

---

# Estados Editoriales

Una clase puede encontrarse en distintos estados, que representan el nivel de
confianza editorial. No representan versiones del documento.

El estado se registra en `metadata.yaml` mediante **dos campos independientes**,
no uno solo: el avance editorial y el estado de revisión son ejes distintos. El
detalle del mapeo está en `SPECS.md`.

---

# Colaboración

Toda modificación importante debe realizarse mediante revisión.

La filosofía del proyecto es similar al desarrollo de software libre.

```
Contribución

↓

Pull Request

↓

Revisión

↓

Merge
```

La colaboración busca mejorar el conocimiento, no aumentar la cantidad de contenido.

---

# Rol de la Inteligencia Artificial

La IA nunca constituye una fuente.

La IA:

* resume;
* reorganiza;
* redacta borradores;
* ayuda a detectar inconsistencias.

La IA no valida hechos.

La IA no aprueba contenido.

La IA no sustituye la revisión humana.

---

# Objetivo a Largo Plazo

Construir una base de conocimiento académico abierta donde:

* el conocimiento sea trazable;
* las fuentes sean explícitas;
* las contribuciones sean revisables;
* el contenido sea mantenido por una comunidad;
* cualquier estudiante pueda aprender utilizando material confiable y verificable.

La plataforma no busca competir con la universidad.

Busca preservar y organizar el conocimiento generado por ella para hacerlo más accesible a futuras generaciones de estudiantes.

