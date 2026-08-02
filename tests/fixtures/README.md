# Fixtures del parser de WebVTT

Entradas para ejercitar `scripts/vtt.mjs` sin red. Cada archivo existe para
cubrir **una** rama concreta; si se agrega uno, decir acá qué rama cubre.

| Archivo | Origen | Qué ejercita | Resultado esperado |
| --- | --- | --- | --- |
| `civ_09.head.vtt` | real, recortado | camino feliz sobre datos reales | 15 cues, 0 advertencias, válido |
| `civ_09_thumbnails.head.vtt` | real, recortado | **caso negativo** | parsea sin advertencias pero `validarTranscripcion` lo rechaza |
| `rolling.vtt` | sintético | subtitulado *rolling* | 2 advertencias de solapamiento temporal, `detectarSolapeTextual` > 0 |
| `crlf-bom-notes.vtt` | sintético | BOM, CRLF, bloque `NOTE`, id de cue, settings de posición, tag `<v>`, cue multilínea | 2 cues limpios, 0 advertencias |
| `malformado.vtt` | sintético | cue con fin anterior al inicio; bloque sin línea de tiempo | 2 cues, 1 advertencia |
| `vacio.vtt` | sintético | archivo sin cues | 0 cues, rechazado por `validarTranscripcion` |

## Por qué los recortados están recortados

`civ_09_transcription.vtt` completo tiene 279 cues y 9 301 palabras. Como
fixture es lento de leer, produce diffs ilegibles y no aporta nada sobre
15 cues. Además evita commitear una transcripción completa de un curso de
terceros (OpenFING es CC BY-NC-ND).

## Por qué hacen falta los sintéticos

El único ejemplar real disponible da **cero advertencias**: es un camino feliz
perfecto. Por sí solo no ejercita ninguna rama de error del parser. Los
sintéticos son los que atrapan regresiones; el real sirve para verificar que
sobre datos verdaderos no rompe.

## El caso negativo importa más de lo que parece

`_thumbnails.vtt` es un WebVTT **válido**: 548 cues, cero advertencias. Sus
cues son referencias a sprites (`civ_09_thumbnails_001.jpg#xywh=0,0,160,90`).
Si el extractor eligiera el archivo equivocado, se le mandarían al LLM
cientos de líneas de coordenadas de imágenes sin que nada falle de forma
visible. Distinguir por nombre de archivo no alcanza: por eso
`validarTranscripcion` mira el contenido.
