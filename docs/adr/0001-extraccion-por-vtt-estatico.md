# ADR-0001 · Extracción de transcripciones por VTT estático

- **Estado:** Aceptado
- **Fecha:** 2026-08-02
- **Afecta a:** módulo Extractor · `docs/ARCHITECTURE.md` (pipeline, paso 1) ·
  Roadmap (Fase 1) · `scripts/`

## Contexto

Hasta este punto la transcripción se obtenía con un userscript de Tampermonkey
que raspaba los `<ol><li>` de la página de la clase y se copiaba a mano a
`Transcription_raw.txt`. Funcionó para las 28 clases de Física III, pero es un
paso manual: no se puede invocar desde una CLI, no deja registro de qué se
descargó ni cuándo, y no es ejercitable por pruebas automáticas.

Con el segundo corpus previsto (Cálculo Diferencial e Integral en una Variable,
42 clases) la extracción pasa a ser un cuello de botella real.

Se evaluó además una premisa que resultó ser falsa: que la transcripción
estuviera en el HTML servido. No lo está — el HTML entrega el marcador
`Cargando transcripción...` y el contenido lo inyecta JavaScript. Un cliente
HTTP que parsee el HTML de la clase no encuentra nada.

## Decisión

**El extractor obtiene la transcripción del archivo WebVTT estático que sirve
OpenFING, mediante peticiones HTTP directas, sin ejecutar JavaScript.**

La ruta sigue el patrón del asset de video:

```
video:         /media/{slug}/{slug}_{NN}.mp4
transcripción: /media/{slug}/{slug}_{NN}_transcription.vtt
```

La URL del VTT se **deriva del `og:video`** de la página de la clase, no del
slug del curso. Los slugs de OpenFING no son sistemáticos (`civ`, `cdiv-2022`,
`p2-2023`, `comp1`) y el padding de la numeración no está garantizado entre
ediciones; derivar del meta tag evita asumir una convención que puede no
sostenerse en cursos antiguos.

Esto implica dos peticiones por clase (página de la clase para metadatos y
`og:video`; luego el `.vtt`), más una petición al índice del curso, que sí
entrega en el HTML servido la lista completa de clases con sus títulos.

**Playwright queda como herramienta de diagnóstico, no de producción.** Se
conserva `scripts/probe.mjs` para volver a descubrir el patrón el día que
OpenFING cambie su infraestructura, o para incorporar una fuente nueva cuyo
mecanismo de entrega se desconozca.

## Alternativas consideradas

**Extensión de navegador (Manifest V3).** Descartada. No supera el techo del
userscript: sigue sin poder escribir en el repositorio (la API `downloads` sólo
alcanza la carpeta de descargas), no es invocable desde la CLI, y no es
ejercitable por pruebas. Automatiza la ergonomía de la extracción, no la
extracción. Contradice además el principio 4 del proyecto: un tercero que clona
el repositorio no puede reconstruir la transcripción sin instalar software en su
navegador y hacer clic. Se elimina en consecuencia la Fase 1 del Roadmap y se
absorbe dentro de la Fase 2 como el primer módulo del pipeline.

**Scraping del HTML servido con un cliente HTTP.** Inviable: el contenido no
está en el HTML.

**Playwright como motor permanente.** Viable y era el plan de contingencia,
pero innecesariamente caro una vez hallado el endpoint: ~150 MB de Chromium,
segundos de arranque por corrida, y ~11 peticiones por clase contra el servidor
de la Facultad frente a 3 con el enfoque adoptado.

**Lectura del DOM renderizado (con Playwright).** Descartada aun dentro del
escenario con navegador. El DOM pierde la estructura del origen y depende de
selectores que se rompen con cualquier rediseño; la ruta de un asset de
subtítulos es mucho más estable.

## Consecuencias

- El extractor es determinista, sin dependencias pesadas, y ejecutable en
  milisegundos por clase.
- El tráfico contra OpenFING baja de forma sustancial respecto de cargar la
  página completa en un navegador.
- El módulo puede probarse sin red a partir de payloads guardados (ver
  ADR-0002).
- Cuando OpenFING cambie su esquema de assets, el extractor falla de forma
  ruidosa y hay que volver a correr `probe.mjs`. Es un costo aceptado y
  acotado a un módulo.
- Los timestamps del VTT quedan disponibles como subproducto; su tratamiento se
  decide en ADR-0002.
- El extractor se ejecuta **localmente**. No se adopta CI por ahora, pero el
  módulo no debe depender del entorno de una máquina concreta (nada de rutas
  absolutas ni de perfiles de navegador del usuario).

## Evidencia

Corrida de `probe.mjs` sobre `https://open.fing.edu.uy/courses/civ/9/`
(2026-08-02), con bloqueo de recursos `media`, `image` y `font`:

- 11 respuestas capturadas como candidatas; una es la transcripción:
  `/media/civ/civ_09_transcription.vtt`, 60 439 bytes,
  `sha256 c392bbc231fc…`.
- El `content-type` es `application/octet-stream`, **no** `text/vtt`. El parser
  no debe apoyarse en el content-type para elegir el formato.
- Existe un `_thumbnails.vtt` en la misma ruta: es la previsualización del
  scrubbing del reproductor, no una transcripción. El extractor debe
  distinguirlos por nombre.
- El índice del curso (42 clases con título y número) viene en el HTML servido,
  sin ejecutar JavaScript.
- El fallback de DOM devolvió 1 486 líneas / 374 133 caracteres.

### Sobre el fallback de DOM

Se evaluó una hipótesis intermedia: que el DOM de una página de clase
contuviera las transcripciones de **todas** las clases del curso, lo que
permitiría obtener el corpus completo con una sola petición por curso.

**La hipótesis es falsa.** El DOM contiene únicamente la transcripción de la
clase solicitada, repetida cuatro veces (variantes del panel de transcripción),
más el índice de navegación del curso repetido dos veces.

Verificación (2026-08-02) sobre el volcado de `civ/9`:

- 1 325 marcas de tiempo en el archivo. El reloj retrocede 3 veces, y las tres
  transiciones son idénticas: `…los nuevos apuntes sobre las integrales.` →
  `0:18 Ok, hoy vamos a hacer la última clase…`. Es el mismo texto reiniciando
  desde 0:18 y terminando en 1:31:13, la duración exacta de `civ_09`.
- El bloque real de transcripción (entre `Buscar en la transcripción` y
  `Sincronizar con el video`) tiene 265 marcas monótonas, de 18 s a 5 473 s.
  Una sola clase.
- Búsqueda de contenido exclusivo de otras clases: `suma de Riemann`,
  `función escalonada` y `regla de la cadena` aparecen **0 veces**.
  `Teorema de Bolzano` e `Integrales: Presentación` aparecen 2 veces cada uno,
  ambas en el índice de navegación — son títulos, no transcripción.

Lo que indujo la confusión son los 42 títulos del curso, que sí aparecen (dos
veces) y leídos de corrido parecen contenido.

Consecuencia adicional a favor de la decisión adoptada: el volcado de DOM tiene
374 133 caracteres para 50 990 de contenido útil — un factor de ~7 de ruido
entre JavaScript inline, JSON-LD y la cuadruplicación del panel. Un extractor
basado en DOM tendría que deduplicar bloques idénticos antes de parsear. El VTT
son ~60 KB sin ruido.

El ahorro de tráfico que motivaba la hipótesis se obtiene igual por el otro
camino: 42 peticiones al `.vtt` (~60 KB cada una) pesan menos que cargar una
sola página completa en un navegador.
