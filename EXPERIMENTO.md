# Experimento: terminar lo que OpenFING no hizo

Bitácora en vivo. Se escribe **mientras pasa**, no al final.

**Pregunta:** ¿cuán complicado es llevar las clases 9 y 10 de ElecMag2024 —las
únicas dos del curso sin transcripción publicada— hasta el mismo estado que las
otras 27, generando la transcripción por cuenta propia?

**Dónde:** este sandbox. No es el repo. Nada de acá se promueve sin un ADR de
procedencia.

---

## Diseño

Tres clases, no dos. **La clase 8 es el control**: sí tiene VTT oficial de
OpenFING, mismo docente, mismo tema, misma acústica. Sin ella se producirían dos
clases de calidad desconocida y, cuando un resumen saliera raro, no habría forma
de saber si la culpa fue del ASR o de la etapa de resumen.

Da dos mediciones:

1. **ASR vs VTT oficial**, mismo audio → cuánto peor es la transcripción propia.
2. **Notas desde el VTT oficial vs notas desde el ASR**, mismo prompt → cuánto
   de ese ruido sobrevive hasta el producto final. *(pendiente)*

| Clase | Duración | Estado en OpenFING |
| --- | --- | --- |
| 8 | 5566 s | VTT oficial ✅ — **control** |
| 9 | 6760 s | sin derivados |
| 10 | 5203 s | sin derivados |

Total: 3 h 19 min de audio.

---

## 2026-09-08 · Preparación en frío

Todo escrito y probado **antes** de encender una GPU. El módulo vive en
`scripts/asr/`:

| Pieza | Dónde corre | Qué hace |
| --- | --- | --- |
| `lote.js` | local | clase → URL del `.mp4`, reusando `openfing.js` |
| `preparar.sh` | pod | dependencias + descarga del modelo |
| `transcribir.py` | pod | descarga → audio → Whisper → `.vtt` |
| `integrar.js` | local | `.vtt` → artefactos de clase, marcados como ASR |
| `comparar.js` | local | el control contra el VTT oficial |

**El contrato del módulo es "producir un `.vtt`".** Por eso no reimplementa
nada: `parseVtt`, `validarTranscripcion`, `metricas`, `aTextoPlano` y
`aTextoConTiempo` salen tal cual de `vtt.js`, y `similitud()` de
`diff-oraculo.js`. La transcripción de Whisper entra por el mismo caño que la de
OpenFING.

### Hallazgos de la preparación

**El `moov` de los `.mp4` está al frente.** Bajando 26 MB con `curl -r` se
obtiene un clip válido: se puede probar el pipeline sin bajar 1,13 GB. (`ffmpeg`
no puede abrir HTTPS en esta máquina; hay que pasar por `curl`.)

**Bug encontrado por la prueba de humo:** `transcribir.py` intentaba bajar el
`.mp4` aunque el `.wav` ya estuviera. Corregido — importa en el pod, donde un
reintento no debe rebajar un giga.

### Prueba de humo — 90 s, `tiny`, int8, CPU

Corre de punta a punta. El `.vtt` emitido pasa `validarTranscripcion`, 0
warnings, 0 solape en cola. **14,7× tiempo real** en 4 núcleos.

---

## Resultado 1: el tamaño del modelo no es un detalle

Mismos 90 segundos, clase 8. **Similitud por bolsa de palabras: 0,632.**

> **OpenFING:** «…cómo resolver la ecuación de **Laplace** utilizando bases […]
> en **esféricas**, en coordenadas **esféricas** […] nos interesamos al caso de
> **R mayor que A**…»
>
> **`tiny`:** «…cómo resolver la ecuación de **la plaza** utilizando bases […]
> en **Efehíricas**, en **coordenas Efehíricas** […] nos interésamos el caso de
> **R major que va**…»

El error no es parejo: **se concentra exactamente en el vocabulario técnico**.
«Laplace» → «la plaza», «esféricas» → «Efehíricas», «R mayor que A» → «R major
que va». Y también aparece una alucinación entera («¿Pero no es conocimiento?»)
donde el original dice otra cosa.

Esto conecta con `/CLAUDE.md` §5: si la etapa de resumen ya inventa notación a
partir de prosa hablada correcta, alimentarla con «la ecuación de la plaza» es
pedirle que reconstruya desde ruido. **`tiny` queda descartado; el run real va
con `large-v3`.**

Vale como calibración, no como conclusión: `tiny` es el modelo más chico que
existe y se usó justamente para que la prueba fuera barata. El número que
importa es el de `large-v3`, y ese todavía no se midió.

---

## Pendiente

- [ ] **Alto administrativo:** autenticación de RunPod. El pod no se crea sin
      visto bueno explícito.
- [ ] Run real: `large-v3`, float16, clases 8/9/10.
- [ ] `comparar.js` sobre la clase 8 completa → el número que importa.
- [ ] `integrar.js --write` → artefactos con `transcriptionSource: asr`.
- [ ] Notas de la clase 8 por las dos vías, mismo prompt → medición 2.
- [ ] Notas de las clases 9 y 10.
- [ ] Costo y tiempo reales del pod; `delete-pod` y `get-billing`.

## Mediciones (se completa a medida que salen)

| Métrica | Valor |
| --- | --- |
| Similitud ASR vs oficial, clase 8, 90 s, `tiny` | **0,632** |
| Similitud ASR vs oficial, clase 8 completa, `large-v3` | — |
| Velocidad `tiny` int8 CPU (4 núcleos) | **14,7× tiempo real** |
| Velocidad `large-v3` fp16 GPU | — |
| Costo del pod | — |
| Correcciones a mano en las notas | — |
