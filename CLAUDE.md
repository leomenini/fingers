# CLAUDE.md — contexto del módulo Extractor

> Estado al **2026-08-02**. Este archivo existe para que una sesión nueva
> (Claude Code u otra) retome el trabajo sin releer conversaciones. Si algo
> acá contradice a `docs/adr/`, mandan los ADR: son la decisión formal, esto
> es el contexto de trabajo.
>
> El repo está en medio de una migración: hay trabajo sin commitear
> (`courses/CDIV2017/`, `docs/adr/`, `scripts/extraction/`, `scripts/legacy/`,
> `CLAUDE.md`, `package.json`) y el userscript viejo borrado sin commitear.
> Antes de asumir que algo no existe, mirar `git status`.

---

## 1. Dónde está parado el proyecto

Fingers tiene un corpus completo (Física III de OpenFING, 28 clases con
resumen, notas LaTeX y 184 figuras) y **cero automatización**: la transcripción
se obtenía con un userscript de Tampermonkey y se copiaba a mano.

Dos frentes abiertos, en este orden:

1. **Automatizar la extracción.** Motivado por el segundo corpus: Cálculo
   Diferencial e Integral en una Variable, `civ` (Teórico 2017, Alexandre
   Miquel), **42 clases**. Existe también `cdiv-2022`, una segunda edición.
2. **Instrumentar métricas**, como paso previo a un benchmark.

La revisión humana de Física III (28 clases en `draft`) sigue pendiente y es el
cuello de botella del contenido. Automatizar no la desbloquea; son trabajos
paralelos.

---

## 2. Decisiones ya tomadas (no reabrir sin ADR nuevo)

| Decisión | Dónde |
| --- | --- |
| Extracción por VTT estático, HTTP directo, sin ejecutar JS | ADR-0001 |
| Playwright = diagnóstico, no producción | ADR-0001 |
| Extensión de navegador descartada; Fase 1 del Roadmap se elimina y se absorbe en Fase 2 | ADR-0001 |
| `fetch` y `parse` son sub-etapas separadas | ADR-0002 |
| Dos representaciones: `transcript.txt` (sin marcas) y `transcript.timed.txt` (con marcas) | ADR-0002 |
| El cue del VTT es la unidad de párrafo; no se re-segmenta | ADR-0002 |
| El extractor corre local; sin CI por ahora, pero sin dependencias del entorno | ADR-0001 |

---

## 3. Lo que se descubrió sobre OpenFING

**El HTML servido NO contiene la transcripción.** Dice
`Cargando transcripción...` y la inyecta JavaScript. Cualquier intento de
scrapear el HTML de la clase con un cliente HTTP falla.

**La transcripción es un archivo VTT estático:**

```
página:        /courses/{slug}/{N}/
video:         /media/{slug}/{slug}_{NN}.mp4        ← viene en og:video
transcripción: /media/{slug}/{slug}_{NN}_transcription.vtt
```

- Derivar la URL del VTT **del `og:video`**, no del slug. Los slugs no son
  sistemáticos (`civ`, `cdiv-2022`, `p2-2023`, `comp1`, `imp`) y el padding no
  está garantizado entre ediciones.
- El `content-type` es `application/octet-stream`, **no** `text/vtt`. No
  confiar en el content-type para elegir parser; usar la extensión o el header
  `WEBVTT`.
- Existe un `_thumbnails.vtt` en la misma ruta: es la previsualización del
  scrubbing. **Es un WebVTT válido** — 548 cues, cero advertencias — cuyos
  cues son referencias a sprites (`civ_09_thumbnails_001.jpg#xywh=…`). Un
  parser genérico lo acepta en silencio. Distinguir por nombre **y** validar
  el contenido: `validarTranscripcion()` en `vtt.mjs`.
- El **índice del curso sí viene en el HTML servido**: los 42 títulos con
  número y link, sin ejecutar JS.

**Coste por curso:** 1 petición al índice + 2 por clase (página para
`og:video` y metadatos, luego el `.vtt`). Para `civ`: ~85 peticiones.

**El DOM fallback fue evaluado y descartado.** No contiene las transcripciones
de las demás clases (hipótesis que pareció plausible y resultó falsa): trae la
de la clase pedida repetida 4 veces, más el índice 2 veces. 374 133 caracteres
para 50 990 útiles. Detalle completo en la sección de Evidencia del ADR-0001.

---

## 4. Cómo es el VTT (medido sobre `civ_09`)

```
cues                    279
palabras              9 301
chars sin marcas     50 990
overhead timestamps    4,7 %   (formato compacto [m:ss]) ≈ 600 tokens/clase
segundos de habla     4 615    sobre 5 457 (84,6 %)
duración media/cue     16,5 s
repetición de cola      1 cue
advertencias            0
```

- **No es subtitulado *rolling*.** Concatenar cues no duplica texto.
- Viene segmentado por oraciones, con puntuación y mayúsculas.
- El 15 % sin habla son pausas entre oraciones, no bloques de pizarrón mudo
  (un solo hueco > 20 s, de 33 s, en 43:48).
- Volumen por clase comparable a Física III (≈ 9 680 palabras/clase). Cálculo
  no es más caro por clase; es más largo: 42 vs 28.

---

## 5. Riesgo específico de Cálculo (importante)

**El VTT no contiene un solo símbolo matemático.** Todo está en prosa hablada:
*"para todo x positivo o nulo existe un único y positivo o nulo cuyo cuadrado
es igual a x"*, *"raíz cuadrada de x"*.

Consecuencia: en la etapa de resumen el modelo no transcribe notación, la
**inventa** — traduce prosa a símbolos. Esa conversión es decisión suya, no del
docente. Y el pizarrón es invisible: cuando el docente escribe y dice "esto",
el referente se pierde y el modelo lo reconstruye de su propio conocimiento.
Va a quedar bien, pero puede no ser lo que pasó en esa clase.

Hay además ruido de ASR visible pero escaso (`"ya definí la noción de
intervalo, pero definí los intervalos"`).

Implicación para el gold standard: el de Física III no sirve como referencia
para Cálculo. Son tareas distintas y fallan distinto. El gold standard es
**específico por curso por diseño**, no por accidente.

---

## 6. Artefactos que existen

- **`scripts/probe.mjs`** — descubrimiento con Playwright. Abre una clase,
  bloquea `media`/`image`/`font`, escucha todo el tráfico, guarda candidatos a
  transcripción, extrae meta tags, y escribe `manifest.json` + `netlog.json`.
  Se conserva para re-descubrir el patrón si OpenFING cambia, o para incorporar
  una fuente nueva. Requiere `npm i playwright && npx playwright install chromium`.
- **`scripts/vtt.mjs`** — parser de WebVTT. Exporta funciones **puras**:
  `parseVtt`, `validarTranscripcion`, `aTextoPlano`, `aTextoConTiempo`,
  `metricas`, `detectarSolapeTextual`, `parseTimestamp`, `formatTimestamp`.
  CLI produce `transcript.txt`, `transcript.timed.txt`,
  `transcript.stats.json`, y sale con código 2 si la entrada no es una
  transcripción. Corrido contra `civ_09`: 0 advertencias.
- **`tests/fixtures/`** — 6 entradas, una por rama del parser. Ver su README.
- **`docs/adr/evidence/0001-netlog.json`** — tráfico observado en el
  descubrimiento, con los parámetros de Matomo removidos.
- **`docs/adr/`** — ADR-0001 (extracción) y ADR-0002 (representación).

Ambos scripts son ESM (`.mjs`). Si se ponen bajo un `package.json` con
`"type": "module"`, pueden renombrarse a `.js`.

---

## 6.b Entorno local

Node v20.20.2. El repo vive en `~/Desktop/Files/Transcripciones` (el directorio
se llama distinto que el proyecto; el `package.json` dice `fingers`).

```
npm init -y
npm pkg set type=module private=true name=fingers
npm pkg delete main
npm i -D playwright
npx playwright install chromium
```

- `"type": "module"` está puesto, así que `probe.mjs` y `vtt.mjs` pueden
  renombrarse a `.js` sin tocar el código (usar `git mv`).
- Scripts definidos: `npm run probe -- <url> <dir>` y `npm run vtt -- <archivo>`.
- Playwright avisa `BEWARE: your OS is not officially supported` y baja el
  build de `ubuntu24.04-x64`. Es inocuo. Si falta alguna librería del sistema:
  `npx playwright install-deps` (pide sudo).
- El Chromium no vive en `node_modules` sino en `~/.cache/ms-playwright`
  (~150 MB), y se comparte entre proyectos.
- El repo **no tenía `.gitignore`** hasta 2026-08-02. Debe contener
  `node_modules/`, `/probe-out/` y `/out/`.

## 7. Qué sigue

**Inmediato**

0. **Política de retención ya aplicada:** la salida de `probe.mjs` es efímera
   (`/probe-out/` y `/out/` en `.gitignore`). De ahí sólo se promueve a mano
   lo que pasa a ser evidencia de un ADR o fixture. Todo lo demás se borra:
   si el criterio es "lo guardo por las dudas", en un año hay diez netlogs y
   ninguno indexado.
1. Correr `vtt.mjs` sobre una clase de Física III y **diffear** contra su
   `Transcription_raw.txt`. Es un test con oráculo real y 28 casos disponibles.
   La diferencia revela qué transformación hacía el userscript que nunca se
   documentó.
2. Completar el módulo Extractor: índice del curso → por clase, `og:video` →
   `.vtt` → parse → manifest. Idempotente y resumible (con 42 clases, algo va
   a fallar en la 27).
3. Actualizar `docs/SPECS.md`: `Transcription_raw.txt` deja de ser el artefacto
   crudo de la clase y pasa a ser una salida del parser.
4. Actualizar el README: eliminar Fase 1 del Roadmap, generalizar el paso 1 del
   pipeline, y `scripts/` deja de ser "userscript".
5. `scripts/tampermonkeyV0.1.js` está borrado en el working tree pero sin
   commitear. Al commitear, que el mensaje diga que se elimina **por ADR-0001**,
   así el `git log` y los ADR cuentan la misma historia. Git conserva el
   historial; el ADR lo menciona como pieza histórica, no como archivo vivo.

**Decisiones abiertas**

- **Si el payload VTT se commitea o queda fuera de Git** (`Pendiente` del
  ADR-0002). Mantenerlo fuera y conservar sólo el manifiesto (URL + `sha256` +
  versión del extractor) da reproducibilidad *verificable* y evita redistribuir
  material de terceros; el costo es depender de que la fuente siga disponible.
  Requiere ADR propio. **Relacionado:** OpenFING es CC BY-NC-ND y el repo hoy
  commitea 271 057 palabras de transcripción literal. El riesgo real no es una
  demanda sino un takedown en GitHub, y es un agujero de procedencia en un
  proyecto cuyo producto es la trazabilidad.
- **¿Curso o edición como unidad? — resuelta de hecho, falta formalizar.**
  El árbol nuevo es `courses/CDIV2017/`, que codifica la edición. Es la
  decisión correcta: `civ` (2017) y `cdiv-2022` son dos ediciones del mismo
  curso y así conviven sin chocar.
  **Queda una inconsistencia:** el corpus viejo es `courses/Fisica3/`, sin
  edición. Dos convenciones en el mismo directorio, y la vieja no dice de qué
  año es. Tres salidas: (a) renombrar ahora, que es barato; (b) dejarlo y
  documentar `Fisica3` como legacy; (c) adoptar la regla "edición sólo si hay
  más de una". Cualquiera sirve — lo que no sirve es dejarlo sin decidir.
  **Material de ADR-0003.**
- **Granularidad del comando**: ¿`extract` toma una clase o un curso? Con el
  enfoque HTTP el costo de arranque desapareció, así que pesa menos que antes.
- **Representación canónica del contenido.** Ver sección 8.

**Más adelante**

- BDD con `cucumber-js`. Los `Then` decidibles ya tienen función que los
  responde en `vtt.mjs`. Se posterga porque su valor aparece cuando hay
  automatización que pueda romperse.
- Instrumentación de métricas (ver sección 9).
- OCR de apuntes manuscritos.

---

## 8. `summary.md` no es redundante — es capa de compatibilidad

Contexto que no está escrito en ningún documento del repo y conviene
explicitar: `summary.md` **no** es una duplicación de `notes.tex`. Existe
porque los modelos distintos de Claude no logran generar adecuadamente el LaTeX desde
cero. El Markdown es el mínimo común denominador que todos manejan.

El pipeline real son **dos etapas con modelos potencialmente distintos**:

- **Etapa A** — transcripción → `summary.md`. Comprender y reconstruir el
  razonamiento. Intercambiable entre proveedores.
- **Etapa B** — `summary.md` → `notes.tex`. Traducir a formato tipográfico con
  convenciones estrictas. Hoy acoplada a Claude.

Consecuencias:

- Se miden **por separado**, con métricas distintas. A: fidelidad, cobertura,
  corrección conceptual. B: ¿compila?, ¿respeta el preámbulo?, ¿cuántas
  correcciones tipográficas necesitó? La B es en buena parte automatizable.
- Habilita **mezclar modelos** (barato en A, Claude en B). Con 42 clases el
  impacto en costo es real. Es el primer experimento que conviene correr.
- La afirmación *"los otros modelos se caen a pedazos con LaTeX"* es barata de
  medir: 3 clases × 4 modelos, contar cuántos `.tex` compilan sin intervención.

**Problema abierto:** si `summary.md` es descartable, `notes.tex` es el
contenido definitivo. Pero al revisar, la corrección se hace en el `.tex`, y
como la etapa B no es determinista, no se puede regenerar sin perder la
corrección. Tres salidas posibles: (a) el `.md` muere al entrar en revisión;
(b) se corrige en el `.md` y se propaga; (c) se bifurca por tipo de corrección
(conceptual al `.md`, de forma al `.tex`). **Esto define qué archivo bendice el
gold standard, así que hay que resolverlo antes de empezar la revisión.**

---

## 9. Métricas y benchmark — estado del pensamiento

**No confundir dos tipos de métrica:**

- **De proceso** — costo, tokens, tiempo, reducción de palabras, tiempo de
  compilación. Objetivas y baratas. Responden *"¿cuánto cuesta una clase?"*.
- **De calidad** — fidelidad, cobertura, corrección matemática. Caras,
  requieren juicio humano. Hoy **no existe ninguna**.

La postura a defender ("el LLM hace buen trabajo") es sobre calidad, pero lo
implementable ya es de proceso. Publicar *"271 057 → 60 554 palabras, 78 % de
reducción"* como evidencia no sostiene nada: mide compresión, no fidelidad.
Construir la instrumentación igual — sin ella no hay benchmark — sabiendo qué
es.

**No comparar los modelos con los datos retroactivos.** Los 19 `opus-4-8` /
5 `deepseek-v4-flash` / 4 `opus-5` no fueron asignados al azar, así que
cualquier diferencia está confundida con qué clases le tocaron a cada uno.
Comparar modelos exige correr varios sobre **la misma** clase.

**Dónde viven las métricas:** la unidad de registro debe ser **la corrida, no
la clase**. `metadata.yaml` asume un `llm.model` por clase y no soporta N
corridas. Conviene un log append-only (`runs/`) con timestamp, módulo, entrada,
salida, modelo, tokens, costo y duración; `metadata.yaml` conserva identidad y
estado, y apunta a la corrida vigente.

**Costo y tokens sólo existen en el momento de la llamada.** Generar borradores
copiando y pegando en un chat los pierde para siempre. Instrumentar costo
obliga a llamar la API desde código. Ya está decidido ir por API.

### BDD ≠ evaluación de modelos

Son cosas distintas y se parecen sólo de lejos.

- **BDD** (`cucumber-js`) exige `Then` decidibles por máquina. Sirve para el
  contrato estructural del pipeline: los cuatro archivos obligatorios,
  `Transcription_raw.txt` intacto, `assets/` sólo si hay figuras, esquema del
  YAML, `notes.tex` compila. **No** puede evaluar *"el resumen es fiel"*.
- **Evals** es la disciplina de evaluar salidas de modelos. Vocabulario para
  buscar: *rubric-based evaluation*, *LLM-as-a-judge*,
  *inter-annotator agreement*.

### Diseño del experimento de comparación

Tres familias, combinables:

1. **Chequeos automáticos** (baratos, débiles): palabras, ratio de reducción,
   secciones presentes, cantidad de bloques matemáticos, si el `.tex` compila.
2. **Cobertura conceptual** (el punto dulce): por clase, escribir **a mano y
   antes de generar nada** una lista de 12–15 conceptos y resultados que la
   clase necesariamente contiene. Marcar cada uno como presente / ausente /
   presente-pero-mal. Casi objetivo, reutilizable para siempre, y es un pedazo
   real de gold standard. Además da un `Then` decidible.
3. **Juicio humano**: usar **comparación por pares**, no puntuación 1–5. Un
   evaluador solo no es consistente consigo mismo entre sesiones. 3 modelos =
   3 pares por clase.

Restricciones metodológicas, todas gratis y todas necesarias:

- **Ciego.** Renombrar los archivos a hashes y no mirar el mapeo hasta
  terminar. Es lo más importante de la lista.
- **Orden aleatorio** entre modelos.
- **Mismo prompt y mismos parámetros**, o se mide el prompt y no el modelo.
- **Clases elegidas a propósito** (una densa en notación, una conceptual, una
  mixta), no al azar.
- Con n=3 **no hay significancia estadística**. El valor es tener un
  procedimiento probado que después escala.

**LLM-as-judge**: usarlo después, no primero. Tiene sesgos conocidos (favorece
el propio estilo, las respuestas largas, el orden). Y hay un problema fatal de
credibilidad: si la tesis es *"los críticos rechazan LLM sin evidencia"* y la
evidencia la produjo un LLM, no convence a nadie. El juez se valida contra el
humano; nunca al revés.

**Un experimento barato y pendiente:** los timestamps cuestan sólo 4,7 %, así
que la duda dejó de ser económica. Misma clase, mismo modelo, con y sin marcas:
¿ayudan o distraen?

---

## 10. Cambio de narrativa (pendiente de redactar)

El proyecto deja de presentarse como extractor de OpenFING y pasa a ser una
herramienta multi-módulo para extraer contenido de fuentes educativas y
unificarlo en documentación estructurada. OpenFING es sólo el primer corpus.

**Buena noticia:** la parte conceptual del README ya está generalizada. Los
cinco principios, la clase como unidad mínima y los dos ejes de estado no
mencionan OpenFING. El acoplamiento está concentrado en cuatro lugares:
pipeline paso 1, Roadmap Fase 1, sección "Fuentes y alcance", y `scripts/`.

Lo que **no** es cosmético es la frase *"traducir formatos a un documento
unificado"*: implica decidir si existe una representación intermedia canónica.
Con N fuentes × M salidas (Fase 3 agrega HTML) el problema se multiplica. Ver
sección 8 — es probablemente la decisión más importante del rediseño, porque el
extractor es reemplazable módulo a módulo pero el modelo de contenido toca las
28 clases ya escritas.
