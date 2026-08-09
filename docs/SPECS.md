# Especificación del Modelo de Datos

> **Autoridad.** Este documento describe el modelo de datos a nivel de proyecto.
> El `CLAUDE.md` de cada curso (p. ej. `courses/Fisica3-2015/CLAUDE.md`) define el
> esquema **ejecutable** y es más estricto. Ante un conflicto, **manda el
> `CLAUDE.md` del curso**; este documento se corrige para seguirlo.
>
> Actualizado el **2026-08-08** por ADR-0002 y ADR-0005.

## Clase

Una clase constituye la unidad mínima del conocimiento dentro del proyecto.

Cada clase representa una instancia académica **identificable y verificable**,
no autocontenida: desde ADR-0005 la transcripción no se versiona, así que
clonar el repositorio no alcanza para reconstruir una clase entera. Lo que el
repositorio sí garantiza es que puedas saber **de dónde salió** cada clase y
**cómo volver a obtenerla** (`npm run fetch`).

Debe contener:

* contenido textual;
* metadatos;
* procedencia de la fuente;
* recursos asociados;
* estado editorial.

---

## Estructura

```text
ClaseXX/

  # versionados
  summary.md               # generado
  notes.tex                # generado
  metadata.yaml            # generado
  manifest.json            # procedencia de la transcripción (ADR-0004)
  transcript.stats.json    # métricas del parseo

  # NO versionados: los produce `npm run fetch`, están en .gitignore
  transcript.txt           # párrafos sin marcas de tiempo
  transcript.timed.txt     # los mismos párrafos con [m:ss]

  assets/                  # opcional, se crea al producir la primera figura
```

**Cinco archivos versionados obligatorios.** `assets/` se crea **on demand**,
con los archivos planos (sin subcarpetas por tipo) nombrados
`<claseN>-<slug>.{tex,svg,pdf}`.

`Transcription_raw.txt` **ya no existe**. Era el nombre que usaba el
userscript de Tampermonkey; ADR-0002 lo reemplazó por las dos
representaciones de arriba y la pasada de `git filter-repo` del 2026-08-08 lo
borró del historial.

---

## Transcripción y procedencia

La transcripción es un **insumo local**, no un artefacto del repositorio. Vive
en el disco de quien corrió la extracción y se regenera con un comando:

```bash
npm run fetch -- <Curso> <clases> --write
```

Lo que el repositorio versiona en su lugar es `manifest.json`: URL de origen,
`sha256` del payload, fecha de extracción y versión del extractor. Con eso
cualquiera puede confirmar que el texto que tiene es exactamente el que se usó
para escribir la clase.

Esto da reproducibilidad **verificable**, no **hermética**: hace falta red, y
que la fuente siga sirviendo el archivo. Es el precio deliberado de no
redistribuir contenido de terceros (ADR-0005).

`transcript.stats.json` acompaña al manifiesto con las métricas del parseo
(cues, palabras, overhead de timestamps, proporción de habla). **Es la fuente
de verdad para cualquier conteo de palabras de la transcripción**: los
`stats.transcript_words` de `metadata.yaml` heredados del userscript tienen
errores de hasta +36 % (`docs/log.md` §7).

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

**El historial editorial nunca debe perderse.** Se versiona lo que el proyecto
produce —resúmenes, notas, metadatos, figuras— y su historia completa de
cambios: quién escribió qué y cuándo.

Eso **no** incluye el contenido de terceros que sirvió de insumo. La
transcripción no se versiona (ADR-0005) y el `.vtt` crudo tampoco (ADR-0004).
No se pierde historial editorial al excluirlos: nunca fueron ediciones, son
entradas al proceso.

> **Reescritura de historia.** El 2026-08-08 se corrió `git filter-repo` para
> sacar del historial la transcripción que se había commiteado antes de
> ADR-0005, junto con binarios pesados. Es la única forma de ejecutar esa
> decisión —ignorar un archivo no lo destrackea— y por eso es una excepción
> reglada, no una licencia general: reescribir historia **exige un ADR que lo
> justifique**. El detalle y las lecciones están en `CLAUDE.md` §7.b.

---

## Revisión

Todo contenido debe poder responder:

* quién lo modificó;
* cuándo;
* por qué;
* qué fuentes respaldan el cambio.

Las tres primeras las responde el historial de Git. La cuarta la responde
`manifest.json`, que es lo que ata cada clase a un archivo concreto de la
fuente, identificado por `sha256` y fechado — y no a "una clase de OpenFING"
en abstracto. Importa porque la fuente cambia: OpenFING regenera sus
transcripciones (`CLAUDE.md` §6.c), así que **toda medición sobre ella lleva
fecha**.

