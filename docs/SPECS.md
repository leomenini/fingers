# SPEC.md

# Especificación del Modelo de Datos

> **Autoridad.** Este documento describe el modelo de datos a nivel de proyecto.
> El `CLAUDE.md` de cada curso (p. ej. `courses/Fisica3-2015/CLAUDE.md`) define el
> esquema **ejecutable** y es más estricto. Ante un conflicto, **manda el
> `CLAUDE.md` del curso**; este documento se corrige para seguirlo.

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

  Transcription_raw.txt    # dado, no se edita
  summary.md               # generado
  notes.tex                # generado
  metadata.yaml            # generado

  assets/                  # opcional, se crea al producir la primera figura
```

Los cuatro archivos son obligatorios. `assets/` se crea **on demand**, con los
archivos planos (sin subcarpetas por tipo) nombrados
`<claseN>-<slug>.{tex,svg,pdf}`.

---

## Recursos

Los recursos pueden incluir:

* diagramas;
* gráficos;
* circuitos;
* ecuaciones;
* referencias.

Siempre en formato vectorial y reproducible. No se admiten fotografías del
pizarrón ni capturas del video.

---

## Metadata

Toda clase posee un archivo metadata.yaml.

Este archivo describe información estructurada sobre la clase.

Ejemplos:

* curso;
* docente;
* tramo de video (`start`/`end`);
* bibliografía;
* temas;
* prerequisitos;
* estado editorial;
* modelo utilizado para generar el borrador;
* fecha de revisión.

> No existe un campo `duration`: es redundante con el tramo de video, que ya da
> el final real. El esquema completo y normativo está en el `CLAUDE.md` del
> curso.

---

## Estados Editoriales

El estado de una clase se registra en **dos campos independientes**, porque
avance editorial y estado de revisión son ejes distintos: una clase puede estar
avanzada y aun así necesitar trabajo.

| Campo | Valores | Qué expresa |
|---|---|---|
| `editorial_status` | `draft`, `reviewing`, `verified`, `published` | En qué punto del pipeline editorial está la clase |
| `review.state` | `needs-review`, `needs-work`, `reviewed` | Qué le hace falta a la revisión humana |

`needs-work` vive en `review.state`, **no** en `editorial_status`: significa que
alguien revisó y encontró problemas, no que la clase haya retrocedido de etapa.

Junto a ellos, el bloque `status` registra el avance por artefacto
(`transcript`, `summary`, `latex`, `assets`), con valores `done`, `pending` o
`in-progress`.

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

