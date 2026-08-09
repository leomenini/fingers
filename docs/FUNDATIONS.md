# FUNDATIONS.md

Principios permanentes del proyecto, en un solo lugar corto y estable.

No son principios nuevos: son los que ya están escritos y dispersos entre
[`VISION.md`](VISION.md) y [`ARCHITECTURE.md`](ARCHITECTURE.md), consolidados
acá para no tener que repetir la filosofía del proyecto en cada conversación
nueva con un LLM ni releer dos documentos largos para recordar las reglas que
no cambian.

Este documento **no reemplaza** a `VISION.md` (por qué existe el proyecto) ni
a `ARCHITECTURE.md` (cómo está armado el pipeline y la estructura del repo).
Los modelos, las herramientas y los extractores van a cambiar; estos
principios están pensados para no hacerlo.

---

## 1. Las fuentes son la autoridad

Un resumen, una nota o un borrador nunca reemplazan a la clase, al libro ni
al material del docente. Las fuentes originales siempre tienen prioridad
sobre cualquier contenido derivado.

## 2. La IA nunca constituye una fuente

La IA propone: resume, reorganiza, redacta borradores, ayuda a detectar
inconsistencias. No valida hechos, no aprueba contenido, no sustituye la
revisión humana. Las personas deciden.

## 3. La revisión humana es obligatoria

Todo contenido generado automáticamente es borrador hasta que una persona lo
revisa. Ningún artefacto generado se considera definitivo por sí solo.

## 4. La clase es la unidad mínima

Cada clase es un objeto académico completo en sí mismo — contenido,
metadatos, procedencia, recursos, estado editorial — que puede evolucionar sin
afectar al resto del curso.

> Completo no es lo mismo que autocontenido. El material de terceros que sirve
> de insumo (la transcripción de la fuente) **no** se versiona: el repositorio
> guarda su procedencia y cómo regenerarlo, no una copia. Ver ADR-0004 y
> ADR-0005.

## 5. Todo contenido debe ser reproducible

A partir de las mismas fuentes y las mismas herramientas abiertas, el
resultado tiene que poder reconstruirse. El proceso se documenta completo,
no sólo el resultado final.

## 6. Todo contenido debe ser trazable

De cada cambio tiene que poder saberse quién lo hizo, por qué, con qué fuente
lo respalda y cuándo fue revisado. El conocimiento no es anónimo.

## 7. Git es la fuente de verdad

El repositorio es la fuente principal del proyecto. Cualquier sitio, base de
datos o API futura es una representación del repositorio — nunca al revés.

---

Cuando una decisión concreta (de arquitectura, de esquema, de una fuente
nueva) parezca entrar en tensión con alguno de estos siete puntos, el punto
gana salvo que se registre un ADR que lo revise explícitamente.
