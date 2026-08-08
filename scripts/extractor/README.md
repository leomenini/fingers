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
| `fetch.js` | CLI de punta a punta: curso → clases → transcripción. Producción. |
| `openfing.js` | La capa de red. **Lo único que toca HTTP.** |
| `cursos.js` | Registro de cursos: slug de OpenFING y datos fijos del curso. |
| `vtt.js` | Parser de WebVTT, funciones puras. Producción. |
| `diff-oraculo.js` | Valida el extractor contra el corpus del userscript. |
| `probe.js` | Descubrimiento con Playwright. **Diagnóstico, no producción.** |

Todos son ESM y se ejecutan con Node (v20 en el entorno actual).

## `fetch.js` — el comando que usás

```bash
npm run fetch -- CDIV2017                      # dry-run del curso entero
npm run fetch -- CDIV2017 --write              # baja las que faltan
npm run fetch -- CDIV2017 9,14,20-23 --write   # una selección
```

Flags: `--write` (sin él es dry-run), `--force` (rehace lo ya extraído),
`--concurrency N` (default 2), `--no-metadata`.

Por clase hace 2 peticiones —la página, para el `og:video`; después el
`.vtt`— y escribe en `courses/<Curso>/Clases/ClaseN/`:

| Archivo | Qué es |
| --- | --- |
| `transcript.txt` | párrafos sin marcas (entrada al LLM) |
| `transcript.timed.txt` | los mismos párrafos con `[m:ss]` |
| `transcript.stats.json` | métricas del parseo |
| `manifest.json` | procedencia: URL, `sha256`, fecha, versión (ADR-0004) |
| `metadata.yaml` | sólo si no existe, y sólo los campos mecánicos |

**No calcula ninguna métrica propia.** Baja el texto y se lo pasa a las
funciones puras de `vtt.js`; lo único que sale de la capa de red es la
procedencia, y va al `manifest.json`, no al `stats.json`. Por eso las
métricas son reproducibles: reparsear el mismo `.vtt` da idéntico.

**Idempotente y resumible**, que con 42 clases no es opcional: salta las que
ya están (con cualquiera de las dos convenciones de nombre — el rename de
ADR-0002 es *forward-only* y las clases viejas conservan
`Transcription_raw.txt`), y un fallo en la clase 27 no tira las 15 que
faltan: se acumulan, se reportan al final y se retoman corriendo el mismo
comando.

Sobre `metadata.yaml`: rellena lo que se puede derivar mecánicamente
(`title`, `id`, datos fijos del curso, `video.start`/`end` del primer y
último cue, `stats.transcript_words`) y deja vacío lo que exige leer la
clase (`topics`, `prerequisites`, `next_topics`, `equations`). **`llm.model`
queda vacío a propósito**: es trazabilidad y todavía no corrió ningún modelo.
Nunca pisa un `metadata.yaml` existente sin `--force`.

## `vtt.js` — parser

```bash
npm run vtt -- <archivo.vtt> [directorio-salida]   # salida por defecto: ./out
```

Con `fetch.js` andando, el CLI de `vtt.js` es para reparsear un `.vtt` que ya
tenés en disco sin volver a pedírselo a OpenFING. Las funciones que exporta,
en cambio, son el corazón del extractor: las usa `fetch.js`.

Exporta funciones **puras**, sin red ni estado: `parseVtt`,
`validarTranscripcion`, `aTextoPlano`, `aTextoConTiempo`, `metricas`,
`detectarSolapeTextual`, `parseTimestamp`, `formatTimestamp`, `formatHHMMSS`.

Hay dos formatos de tiempo y no son intercambiables: `formatTimestamp` da
`[m:ss]` para la transcripción con marcas, y `formatHHMMSS` da `"HH:MM:SS"`,
que es lo que pide `video.start`/`end` de `metadata.yaml`.

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

## `probe.js` — descubrimiento

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

## `diff-oraculo.js` — validación contra el oráculo

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

`vtt.js` y `probe.js` escriben en directorios efímeros (`out/`,
`probe-out/`), ignorados por Git. De ahí se promueve a mano sólo lo que pasa
a ser evidencia de un ADR o fixture; el resto se borra (`CLAUDE.md` §7). El
payload `.vtt` crudo **no** se commitea
([ADR-0004](../../docs/adr/0004-retencion-payload-vtt.md)).
