# Módulo Extractor

Obtiene la transcripción de una clase y la convierte en texto. Es el primer
módulo del pipeline y hoy el único que existe como código.

Las decisiones de diseño están en los ADR, no acá:
[ADR-0001](../../docs/adr/0001-extraccion-por-vtt-estatico.md) (por qué VTT
estático vía HTTP y no scraping ni navegador) y
[ADR-0002](../../docs/adr/0002-representacion-de-la-transcripcion.md)
(separación `fetch`/`parse`, doble representación del texto). El contexto de
trabajo está en `CLAUDE.md` §3–§6 de la raíz.

| Archivo | Rol |
| --- | --- |
| `vtt.mjs` | Parser de WebVTT. Producción. |
| `probe.mjs` | Descubrimiento con Playwright. **Diagnóstico, no producción.** |
| `diff-oraculo.mjs` | Valida el extractor contra el corpus del userscript. |

Ambos son ESM y se ejecutan con Node (v20 en el entorno actual).

## `vtt.mjs` — parser

```bash
npm run vtt -- <archivo.vtt> [directorio-salida]   # salida por defecto: ./out
```

Exporta funciones **puras**, sin red ni estado: `parseVtt`,
`validarTranscripcion`, `aTextoPlano`, `aTextoConTiempo`, `metricas`,
`detectarSolapeTextual`, `parseTimestamp`, `formatTimestamp`.

Por CLI produce tres archivos en el directorio de salida:

- `transcript.txt` — párrafos sin marcas de tiempo (entrada al LLM).
- `transcript.timed.txt` — los mismos párrafos con `[m:ss]` (revisión humana
  y trazabilidad).
- `transcript.stats.json` — métricas del parseo.

**Sale con código 2 si la entrada no es una transcripción.** Eso no es un
detalle: en la misma ruta del servidor vive un `_thumbnails.vtt` que es
WebVTT perfectamente válido pero cuyos cues son referencias a sprites del
scrubbing. `validarTranscripcion` mira el contenido, no el nombre del
archivo.

## `probe.mjs` — descubrimiento

```bash
npm i -D playwright && npx playwright install chromium   # sólo la primera vez
npm run probe -- <url-de-una-clase> <directorio-salida>
```

Abre una clase con Chromium, bloquea `media`/`image`/`font`, escucha todo el
tráfico, guarda los candidatos a transcripción y escribe `manifest.json` +
`netlog.json`.

No corre en el pipeline. Existe para volver a descubrir el patrón el día que
OpenFING cambie su infraestructura, o para incorporar una fuente nueva cuyo
mecanismo de entrega se desconozca (ADR-0001). Chromium pesa ~150 MB y vive
en `~/.cache/ms-playwright`, no en `node_modules`.

## `diff-oraculo.mjs` — validación contra el oráculo

```bash
npm run diff -- Fisica3-2015 1 14 23   # sólo esas clases
npm run diff -- Fisica3-2015           # todas las del curso
```

Los `Transcription_raw.txt` que dejó el userscript de Tampermonkey son 28
casos de contenido revisado a mano: el único test con **oráculo real** del
proyecto. Este script baja el VTT de cada clase, lo parsea y compara el
resultado contra ese archivo.

Compara **bolsas de palabras, no cue a cue**, a propósito: OpenFING
re-segmentó varios VTT desde que se exportó el corpus, así que los cortes no
coinciden aunque el texto sea idéntico. Lo que se mide es si el contenido
sobrevive.

Sale con código 1 si alguna clase baja de 0,97 de similitud. El VTT se
descarta al terminar; no se guarda (ADR-0004).

El resultado de la corrida sobre las 28 clases está en `CLAUDE.md` §6.c:
21 clases dan 1.000 exacto y el userscript resultó no transformar el texto.

## Fixtures

En [`tests/extractor/fixtures/`](../../tests/extractor/fixtures/), con su
propio README explicando qué rama cubre cada entrada. Camino feliz:

```bash
npm run vtt -- tests/extractor/fixtures/civ_09.head.vtt
```

## Salida

`vtt.mjs` y `probe.mjs` escriben en directorios efímeros (`out/`,
`probe-out/`), ignorados por Git. De ahí se promueve a mano sólo lo que pasa
a ser evidencia de un ADR o fixture; el resto se borra (`CLAUDE.md` §7). El
payload `.vtt` crudo **no** se commitea
([ADR-0004](../../docs/adr/0004-retencion-payload-vtt.md)).
