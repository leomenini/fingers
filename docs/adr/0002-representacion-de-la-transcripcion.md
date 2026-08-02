# ADR-0002 · Separación fetch/parse y doble representación de la transcripción

- **Estado:** Aceptado
- **Fecha:** 2026-08-02
- **Afecta a:** módulo Extractor · `docs/SPECS.md` (modelo de datos de una clase)
- **Depende de:** ADR-0001

## Contexto

`docs/SPECS.md` define `Transcription_raw.txt` como *dado*: crudo, no se edita.
Esa definición era exacta mientras la transcripción se copiaba a mano desde el
navegador. Deja de serlo cuando el origen es un archivo WebVTT: el `.txt` pasa a
ser el resultado de un parser que ya tomó decisiones (descartar timestamps, unir
cues, normalizar espacios). Es *dado* respecto del resumen, pero *generado*
respecto de la red.

Si no se conserva el VTT original, esas decisiones quedan enterradas: no se
puede reparsear sin volver a pedirle el archivo a OpenFING, y no hay ninguna
fixture local contra la cual ejercitar el extractor sin red.

Aparece además una segunda pregunta. El VTT trae marcas de tiempo. Enviarlas al
LLM cuesta tokens; descartarlas pierde la posibilidad de anclar cualquier
afirmación del resumen a un minuto del video.

## Decisión

**1. El extractor se divide en dos sub-etapas con contratos distintos.**

- `fetch` — toca la red, no es determinista. Guarda el payload **tal como
  llegó**, sin transformar, y escribe un `manifest.json` con URL, fecha de
  extracción, content-type, tamaño, `sha256` y versión del extractor.
- `parse` — función pura. Del payload crudo a las representaciones de texto.
  Sin red, sin estado.

**2. El VTT crudo es el artefacto de origen.** El manifiesto es lo que se
versiona en Git; la conservación del payload en el repositorio se decidirá por
separado (ver *Pendiente*).

**3. Se producen dos representaciones del mismo contenido**, ambas derivadas del
mismo VTT y por lo tanto siempre consistentes entre sí:

| Archivo                | Contenido                    | Uso                              |
| ---------------------- | ---------------------------- | -------------------------------- |
| `transcript.txt`       | párrafos, sin marcas         | entrada al LLM                   |
| `transcript.timed.txt` | párrafos con `[m:ss]`        | revisión humana y trazabilidad   |

El cue del VTT se adopta como **unidad de párrafo**. No se re-segmenta: la
fuente ya viene segmentada por oraciones.

**4. `parse` emite métricas** (`transcript.stats.json`): cantidad de cues,
palabras, caracteres, estimación de tokens, segundos de habla, proporción de
habla sobre duración total, y detección de repetición de cola entre cues.

## Alternativas consideradas

**Guardar sólo `Transcription_raw.txt` y descartar el VTT.** Más simple y
mantiene el esquema actual intacto. Descartada: sin el payload no hay reparseo
sin red ni fixtures para pruebas, y se pierde la información temporal de forma
irreversible.

**Una sola representación con timestamps embebidos.** Descartada: obliga a
elegir entre pagar tokens siempre o perder trazabilidad siempre, cuando ambas
salidas cuestan lo mismo derivar.

**Descartar los timestamps por costo.** La medición mostró que el argumento
económico no se sostiene (ver Evidencia). La decisión de enviarlos o no al LLM
deja de ser una cuestión de costo y pasa a ser una hipótesis sobre calidad, a
resolver por experimento y no por este ADR.

## Consecuencias

- El extractor se vuelve probable sin red, contra payloads guardados. Es
  condición previa para escribir especificaciones ejecutables del módulo.
- Se gana trazabilidad real: queda registro de qué devolvió el servidor y
  cuándo, no sólo de cómo se interpretó.
- Reparsear no implica volver a golpear el servidor.
- `docs/SPECS.md` debe actualizarse: `Transcription_raw.txt` deja de ser el
  artefacto crudo de la clase y pasa a ser una salida del parser.
- Aparece un archivo más por clase, y una decisión pendiente sobre si el payload
  se versiona.

## Pendiente

Si el payload crudo se commitea o queda fuera de Git. Mantenerlo fuera y
conservar sólo el manifiesto (URL + `sha256` + versión del extractor) permite
que cualquiera reconstruya la transcripción **verificando** que obtuvo lo mismo,
lo cual es una forma más fuerte de reproducibilidad que incluir el texto, y
evita redistribuir material de terceros. El costo es depender de que la fuente
siga disponible. Se decidirá en un ADR propio.

> **Resuelto por [ADR-0004](0004-retencion-payload-vtt.md)** (2026-08-02): el
> `.vtt` crudo no se commitea, sólo el manifiesto.

## Evidencia

Parseo de `civ_09_transcription.vtt` (2026-08-02):

```
cues                    279
palabras              9 301
chars sin marcas     50 990
chars con marcas     53 398
overhead timestamps    4,7 %   (≈ 600 tokens por clase)
segundos de habla     4 615    sobre 5 457 de duración (84,6 %)
duración media/cue     16,5 s
repetición de cola      1 cue
advertencias            0
```

Observaciones relevantes para el diseño:

- **No es subtitulado *rolling*.** Un solo cue con repetición de cola en 279.
  Concatenar cues no duplica texto; la preocupación inicial no aplica a esta
  fuente.
- La fuente viene segmentada por oraciones, con puntuación y mayúsculas. El
  parser no necesita re-segmentar.
- El 15 % de duración sin habla no son bloques largos de pizarrón mudo: hay un
  único hueco mayor a 20 s (33 s, en 43:48). El resto son pausas entre
  oraciones y la cola del video.
- El overhead de timestamps medido sobre el formato crudo del VTT sería 16,6 %;
  con formato compacto por párrafo (`[1:17]`) baja a 4,7 %. La diferencia es la
  que invalida el argumento de costo.
- El volumen por clase (9 301 palabras) es comparable al promedio de Física III
  (≈ 9 680). El corpus de Cálculo no es más caro por clase, sino más largo:
  42 clases frente a 28.
