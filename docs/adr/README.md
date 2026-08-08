# Architecture Decision Records

Un ADR registra **una** decisión de arquitectura: qué se decidió, en qué
contexto, qué alternativas se descartaron y con qué evidencia. No documenta
funcionalidades ni el estado del proyecto — para eso están `docs/ARCHITECTURE.md`
y `docs/log.md`.

Un ADR **no se edita para cambiar de opinión**. Si una decisión se revierte, se
escribe un ADR nuevo que la supersede y se marca el viejo como `Superado por
ADR-XXXX`. El historial de decisiones equivocadas es parte del valor del
registro: explica por qué el proyecto es como es.

## Convención

- Nombre: `NNNN-titulo-en-kebab-case.md`, numeración correlativa, sin reutilizar.
- Estados: `Propuesto` · `Aceptado` · `Superado por ADR-XXXX` · `Descartado`.
- Secciones: Contexto · Decisión · Alternativas consideradas · Consecuencias ·
  Evidencia.
- La sección **Evidencia** es obligatoria cuando la decisión se apoya en una
  medición. Va con números y con la fecha en que se tomaron.

## Índice

| ADR | Título | Estado |
| --- | ------ | ------ |
| [0001](0001-extraccion-por-vtt-estatico.md) | Extracción de transcripciones por VTT estático | Aceptado |
| [0002](0002-representacion-de-la-transcripcion.md) | Separación fetch/parse y doble representación de la transcripción | Aceptado |
| [0003](0003-convencion-nombres-curso-edicion.md) | Convención de nombres para curso/edición | Aceptado |
| [0004](0004-retencion-payload-vtt.md) | Retención del payload VTT crudo | Aceptado |
| [0005](0005-retencion-transcripcion-derivada.md) | Retención de la transcripción derivada | Propuesto |

## Evidencia

Los archivos que respaldan las mediciones citadas por un ADR viven en
[`evidence/`](evidence/), con un [índice](evidence/README.md) que resume cada
uno — qué es, cómo se capturó y qué buscar adentro. El índice existe para no
tener que abrir un volcado de cientos de líneas para recordar qué dice.
