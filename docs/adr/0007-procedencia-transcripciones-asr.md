# ADR-0007 · Procedencia de las transcripciones generadas por ASR

- **Estado:** Aceptado
- **Fecha:** 2026-10-05
- **Afecta a:** `scripts/asr/` · `EXPERIMENTO.md` · `courses/ElecMag2024/`
  (clases 8, 9 y 10) · `metadata.yaml` · `manifest.json`
- **Depende de:** ADR-0004, ADR-0005, ADR-0006

## Contexto

En ElecMag2024, las clases 9 y 10 son las únicas del curso que OpenFING
publicó sin transcripción: tienen video, pero ningún derivado. El experimento
de `EXPERIMENTO.md` (2026-09-08) las transcribió con Whisper `large-v3` en
una GPU de RunPod. Se hizo en un sandbox con una regla escrita: *nada de acá
se promueve al repo sin un ADR de procedencia*. Este es ese ADR.

El experimento usó la **clase 8 como control**. Esa clase sí tiene VTT
oficial, y es del mismo docente, el mismo tema y con la misma acústica. Así se
pudo medir la transcripción propia contra la oficial sobre el mismo audio.

## Decisión

**Las transcripciones por ASR son un experimento documentado y una
posibilidad para las clases que OpenFING no transcribe. No son parte del
conector.**

1. **Se etiquetan siempre:**
   - `transcriptionSource: asr` en `metadata.yaml`;
   - el bloque `asr` en `manifest.json`: `sha256` del audio, modelo y
     parámetros.

   Una transcripción sin etiqueta se asume oficial de OpenFING.
2. **No se versionan**, igual que las oficiales (ADR-0005). Salen del audio
   de una clase de OpenFING (CC BY-NC-ND). Además, **`npm run fetch` no las
   reproduce**: se reproducen sólo con `scripts/asr/`, el audio verificado por
   `sha256` y los parámetros del manifiesto, con costo de GPU.
3. **El MCP no las sirve** (ADR-0006). El conector no puede disparar un
   proceso que cuesta GPU y depende de un pod externo. Antes de servirlas
   falta **medir más y configurar**: la medición 2 de `EXPERIMENTO.md` está
   pendiente.
4. **Lo que sí se versiona es la evidencia:**
   - `EXPERIMENTO.md`;
   - el código de `scripts/asr/`;
   - los `transcript.stats.json`;
   - `scripts/asr/control/clase08.vtt`, la salida de ASR de la clase de
     control, que es la referencia del 0,917.

   Ese VTT es una excepción acotada, del mismo tipo que los fixtures que
   contempla ADR-0004: es evidencia de una medición, no corpus.
5. **Las métricas no se comparan entre procedencias.** Whisper corta un cue
   cada 3,4 s y OpenFING cada 18,7 s. Las cuentas de cues y de segundos por
   cue de `transcript.stats.json` sólo se comparan dentro de la misma
   procedencia.

Las notas de las clases 9 y 10 se escribieron desde la transcripción ASR. Se
quedan en el corpus como contenido curado, con la procedencia visible en su
`metadata.yaml`.

## Alternativas consideradas

- **Servirlas en el MCP como cualquier otra transcripción.** Descartada por
  ahora: la calidad sólo está medida en una clase de control, y la medición
  de cuánto ruido llega a las notas está pendiente.
- **Versionarlas porque no son reproducibles barato.** Descartada: chocaría
  con ADR-0005 y con la licencia por la misma razón que las oficiales. Lo
  caro de reproducir se resuelve guardando bien la procedencia, no el texto.
- **Descartar el experimento.** Descartada: costó USD 0,155 y recuperó
  21 473 palabras que no existían en ningún lado.

## Consecuencias

- `scripts/asr/` queda en el repo como herramienta experimental, fuera del
  camino principal y sin compromiso de mantenimiento.
- Para usar ASR en otra clase hace falta repetir el control: una clase con VTT
  oficial del mismo curso, medida con `comparar.js`.
- Si algún día el MCP sirve transcripciones ASR, lo decide un ADR nuevo, con
  la medición 2 hecha.

## Evidencia

De `EXPERIMENTO.md`, mediciones del 2026-09-08:

| Métrica | Valor |
| --- | --- |
| Similitud ASR vs. oficial, clase 8, `large-v3` (bolsa de palabras) | **0,917** (cota inferior: parte de la diferencia es disfluencia normalizada) |
| Ídem con `tiny` | 0,632 |
| Diferencia de conteo de palabras, clase 8 | 14 sobre 10 397 (0,13 %) |
| Segundos por cue: OpenFING / `large-v3` | 18,7 / 3,4 |
| Palabras nuevas (clases 9 y 10) | 21 473 |
| Velocidad `large-v3` fp16, RTX 4090 | ~34× tiempo real |
| Costo total de los pods | USD 0,155 |
