# SPEC.md

# Especificación del Modelo de Datos

## Clase

Una clase constituye la unidad mínima del conocimiento dentro del proyecto.

Cada clase representa una instancia académica autocontenida.

Debe contener:

* contenido textual;
* metadatos;
* recursos asociados;
* estado editorial.

---

## Estructura

```text
ClaseXX/

assets/

metadata.yaml

summary.md

notes.tex

transcript_raw.txt
```

---

## Recursos

Los recursos pueden incluir:

* diagramas;
* fotografías;
* gráficos;
* circuitos;
* ecuaciones;
* referencias.

---

## Metadata

Toda clase posee un archivo metadata.yaml.

Este archivo describe información estructurada sobre la clase.

Ejemplos:

* curso;
* docente;
* duración;
* bibliografía;
* temas;
* prerequisitos;
* estado editorial;
* modelo utilizado para generar el borrador;
* fecha de revisión.

---

## Estados Editoriales

Cada clase posee un estado editorial.

Ejemplo:

* Draft
* Needs Work
* Reviewing
* Verified
* Published

---

## Recursos derivados

Una clase puede generar distintos productos.

Por ejemplo:

* PDF
* HTML
* Sitio web
* API
* Índices de búsqueda

Todos ellos son representaciones del repositorio.

Nunca constituyen la fuente principal del conocimiento.

---

## Versionado

Git constituye el sistema oficial de versionado.

El historial editorial nunca debe perderse.

---

## Revisión

Todo contenido debe poder responder:

* quién lo modificó;
* cuándo;
* por qué;
* qué fuentes respaldan el cambio.

