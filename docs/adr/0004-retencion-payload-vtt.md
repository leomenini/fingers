# ADR-0004 · Retención del payload VTT crudo

- **Estado:** Aceptado
- **Fecha:** 2026-08-02
- **Afecta a:** módulo Extractor · `docs/log.md`
- **Depende de:** ADR-0002
- **Resuelve:** la sección *Pendiente* de ADR-0002

## Contexto

ADR-0002 dividió el extractor en `fetch` (toca la red, guarda el payload tal
como llegó) y `parse` (función pura, del payload al texto), y dejó explícitamente
abierta una pregunta: si el `.vtt` crudo que devuelve OpenFING se commitea en
el repositorio o queda fuera de Git, conservando sólo un manifiesto (URL,
`sha256`, fecha de extracción, versión del extractor).

El argumento a favor de commitearlo es resiliencia: el repo sobrevive aunque
OpenFING deje de servir el curso. El argumento en contra es que agrava un
riesgo ya anotado en `CLAUDE.md` §7: OpenFING es CC BY-NC-ND, y el repo ya
commitea 271 057 palabras de transcripción literal derivada (`Transcription_raw.txt`
de las 28 clases de Física III). Sumarle el `.vtt` crudo no resuelve ese
riesgo — el `.txt` derivado ya es contenido de terceros commiteado — y sí lo
agranda: ~60 KB más por clase de un archivo de origen ajeno, sin necesidad,
porque el `.txt` ya cubre el caso de uso real (reparsear localmente durante
desarrollo).

## Decisión

**El `.vtt` crudo no se commitea.** Se versiona únicamente `manifest.json`
por clase, con URL, `sha256` del payload, fecha de extracción y versión del
extractor que lo generó. Reparsear una clase después de este ADR exige red
(volver a pedirle el archivo a OpenFING) o una copia local del `.vtt`
guardada fuera de Git — no hay forma de reparsear sólo con lo que vive en el
repositorio.

Este ADR resuelve específicamente el `.vtt` crudo. **No resuelve** si la
transcripción derivada (`Transcription_raw.txt`, o su sucesor `transcript.txt`
de ADR-0002) debe seguir commiteada — esa es una pregunta más grande, sobre
el modelo de datos de todas las clases del repo, no sólo del extractor, y
queda anotada como abierta en `docs/log.md` y en `CLAUDE.md` §7, pendiente de
un ADR propio.

## Alternativas consideradas

**Commitear el `.vtt` crudo junto al manifiesto.** Da reparseo determinista
sin red incluso si OpenFING desaparece. Descartada: el `.txt` derivado que sí
se commitea ya sirve para reparsear/inspeccionar localmente durante
desarrollo; la única ganancia real de guardar también el `.vtt` es sobrevivir
a que OpenFING dé de baja el curso, un escenario no observado, a cambio de
redistribuir un archivo de un tercero bajo una licencia que no lo permite.

**Commitear el `.vtt` sólo para las fixtures de test.** Ya es lo que pasa:
`tests/extractor/fixtures/` guarda payloads pequeños y truncados (`.head.vtt`) creados a
propósito para ejercitar el parser, no extracciones reales completas de
clases del corpus. Este ADR no cambia esa práctica, que no es "retención del
payload de una clase" sino material de prueba construido deliberadamente.

## Consecuencias

- El extractor produce, por clase: `manifest.json` (versionado),
  `transcript.txt` / `transcript.timed.txt` / `transcript.stats.json`
  (versionados, son el contenido derivado), y el `.vtt` crudo sólo en el
  filesystem local de quien corrió la extracción (no versionado).
- Reproducibilidad *verificable*, no *hermética*: cualquiera puede confirmar
  que el `.txt` del repo corresponde al `sha256` del manifiesto volviendo a
  descargar el `.vtt`, pero no puede hacerlo sin red si OpenFING deja de
  servir el archivo.
- La pregunta grande (¿debe salir de Git la transcripción derivada ya
  commiteada?) sigue abierta; este ADR deliberadamente no la resuelve para no
  bloquear el trabajo de documentación de esta sesión con una decisión que
  afecta a las 33 clases existentes del corpus.

## Nota sobre ADR-0002

Este ADR resuelve el punto marcado como `Pendiente` en ADR-0002. No se edita
el texto original de ADR-0002 (un ADR no se corrige para cambiar de opinión);
se agrega ahí una línea que apunta a este documento.
