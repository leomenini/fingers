# Evidencia de los ADR

Respaldos de las mediciones que sostienen una decisión. Un ADR cita números;
acá vive el archivo del que salieron, para que dentro de un año se pueda
verificar la afirmación sin volver a correr nada.

Estos archivos **no se regeneran automáticamente**: son una foto de un
momento. Si una decisión se revisa, se agrega evidencia nueva con el número
del ADR nuevo, no se pisa la vieja.

Cada entrada de este índice existe para que no haya que abrir un JSON de 400
líneas para recordar qué dice.

---

## `0001-netlog.json` — tráfico de OpenFING al cargar una clase

- **Respalda:** [ADR-0001](../0001-extraccion-por-vtt-estatico.md) (extracción
  por VTT estático).
- **Cómo se capturó:** `scripts/extractor/probe.js` sobre
  `https://open.fing.edu.uy/courses/civ/9/`, con los recursos `media`, `image`
  y `font` bloqueados, el 2026-08-02 a las 02:40 UTC.
- **Tamaño:** 87 requests, ~16 KB.

**Qué contiene.** Una entrada por request, con `url`, `status` y
`contentType`; las respuestas que `probe.js` guardó como candidatas traen
además `bytes` y `sha256`.

| `contentType` | Requests |
| --- | --- |
| `application/javascript` | 77 |
| `text/css` | 6 |
| `text/html` | 1 |
| `application/octet-stream` | 2 |
| (vacío) | 1 |

**Qué buscar adentro.** Todo el valor está en los dos
`application/octet-stream`: son los únicos `.vtt` del tráfico y la razón de
ser del ADR.

- `media/civ/civ_09_transcription.vtt` — 60 439 bytes,
  `sha256 c392bbc231fc…`. Es la transcripción, el hallazgo que motiva la
  decisión.
- `media/civ/civ_09_thumbnails.vtt` — 41 654 bytes,
  `sha256 06b900fd81c7…`. Es la previsualización del scrubbing: WebVTT
  válido cuyos cues son referencias a sprites. Es el caso negativo que
  justifica `validarTranscripcion()` en el parser.

Nótese que ninguno de los dos se sirve como `text/vtt`: de ahí la regla de no
elegir parser por `content-type`.

**Por qué 87 y no 11.** ADR-0001 dice *"11 respuestas capturadas como
candidatas"*. No se contradice con las 87 de este archivo: 87 es el tráfico
total observado, y 11 es el subconjunto que `probe.js` retuvo como posible
transcripción tras filtrar. De esas 11, una sola lo era.

**Sobre los parámetros removidos.** Las dos requests a `www.fing.edu.uy` son
de Matomo (analítica). Su query string se reemplazó por
`<query-de-analitica-removida>` antes de commitear el archivo, porque
contenía un identificador de sesión. El resto del archivo está sin tocar.
