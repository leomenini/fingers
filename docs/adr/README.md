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
