

# CLAUDE.md — contexto del módulo Extractor

> Estado al **2026-08-02**. Este archivo existe para que una sesión nueva
> (Claude Code u otra) retome el trabajo sin releer conversaciones. Si algo
> acá contradice a `docs/adr/`, mandan los ADR: son la decisión formal, esto
> es el contexto de trabajo.
> El repo está en medio de una migración y puede haber trabajo sin commitear
> Antes de asumir que algo no existe, mirar `git status`.

---

## 0. Alcance de este archivo

Este `CLAUDE.md` cubre el **pipeline y el extractor**: arquitectura,
decisiones de red y formato, métricas, benchmark. Nada de composición
de figuras.

Cada corpus tiene el suyo, con las convenciones de su dominio:

| Archivo | Cubre |
| --- | --- |
| `/CLAUDE.md` (este) | pipeline, extractor, ADRs, métricas |
| `courses/Fisica3-2015/CLAUDE.md` | recetas de TikZ/circuitikz/pgfplots de Física III, gotchas de LaTeX, chequeo de Overfull |
| `courses/CDIV2017/CLAUDE.md` | modificacion de recetas del courses/Fisica3-2015/CLAUDE.md |

Claude Code carga el de la raíz **y** el del subdirectorio donde trabaja,
así que se complementan. **No traer recetas de composición acá**: cuando se
aprenda algo produciendo figuras, va al `CLAUDE.md` del corpus, no a este.

## 1. Dónde está parado el proyecto

Fingers tiene un corpus completo (Física III de OpenFING, 28 clases con
resumen, notas LaTeX y 184 figuras) y **cero automatización**: la transcripción
se obtenía con un userscript de Tampermonkey y se copiaba a mano.

Dos frentes abiertos, en este orden:

1. **Automatizar la extracción.** Motivado por el segundo corpus: Cálculo
   Diferencial e Integral en una Variable, `civ` (Teórico 2017, Alexandre
   Miquel), **42 clases**. Desde el 2026-08-08 las 42 tienen transcripción y
   `metadata.yaml` esqueleto (§6.d); 5 tienen además resumen y notas. Existe
   también `cdiv-2022`, una segunda edición.
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
  el contenido: `validarTranscripcion()` en `vtt.js`.
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

`scripts/` y `tests/` se espejan por módulo del pipeline: el código en
`scripts/<modulo>/`, sus fixtures en `tests/<modulo>/fixtures/`. Hoy el único
módulo con código es `extractor/`; los demás se crean cuando exista código,
no antes. `package.json`, `package-lock.json` y `node_modules/` quedan en la
raíz — npm los necesita ahí y bajarlos exigiría workspaces, que no se
justifica con un módulo. `tests/` en la raíz queda libre para la suite BDD
cross-módulo (ver sección 9).

- **`scripts/extractor/probe.js`** — descubrimiento con Playwright. Abre una
  clase, bloquea `media`/`image`/`font`, escucha todo el tráfico, guarda
  candidatos a transcripción, extrae meta tags, y escribe `manifest.json` +
  `netlog.json`. Se conserva para re-descubrir el patrón si OpenFING cambia, o
  para incorporar una fuente nueva. Requiere
  `npm i playwright && npx playwright install chromium`.
- **`scripts/extractor/fetch.js`** — el extractor de punta a punta, y el
  comando que se usa en producción. Índice del curso → por clase, `og:video`
  → `.vtt` → parse → transcripción, métricas y manifiesto. Selección por
  número, rango o lista (`9,14,20-23`). Dry-run por defecto: sin `--write` no
  toca el disco. Idempotente y resumible. No calcula métricas propias: se las
  pide a `vtt.js`.
- **`scripts/extractor/openfing.js`** — la capa de red, y lo único que toca
  HTTP: `indiceDelCurso`, `metaDeClase`, `urlDelVtt`, `bajarTexto` (con
  reintento y `sha256`). El HTML del índice viene **minificado y con
  atributos sin comillas**, así que los regex las tratan como opcionales.
- **`scripts/extractor/cursos.js`** — registro de cursos: slug de OpenFING
  (que el nombre del directorio no dice, ADR-0003) y los datos fijos que
  `metadata.yaml` necesita y la transcripción no contiene.
- **`scripts/extractor/vtt.js`** — parser de WebVTT. Exporta funciones
  **puras**: `parseVtt`, `validarTranscripcion`, `aTextoPlano`,
  `aTextoConTiempo`, `metricas`, `detectarSolapeTextual`, `parseTimestamp`,
  `formatTimestamp`. CLI produce `transcript.txt`, `transcript.timed.txt`,
  `transcript.stats.json`, y sale con código 2 si la entrada no es una
  transcripción. Corrido contra `civ_09`: 0 advertencias.
- **`scripts/extractor/diff-oraculo.js`** — compara la salida del extractor
  contra los `Transcription_raw.txt` del userscript. Baja el VTT, no lo
  guarda (ADR-0004), y reporta cues, palabras y similitud por clase. Sale con
  código 1 si alguna baja de 0,97. Ver sección 6.c.
- **`scripts/extractor/README.md`** — cómo se invoca cada script y qué
  produce. (Hasta 2026-08-02 tenía por error una copia del README de
  fixtures.)
- **`tests/extractor/fixtures/`** — 6 entradas, una por rama del parser. Ver
  su README.
- **`docs/adr/evidence/`** — respaldos medidos de los ADR, con un `README.md`
  que resume cada uno. Hoy: `0001-netlog.json` (tráfico observado en el
  descubrimiento, parámetros de Matomo removidos).
- **`docs/adr/`** — ADR-0001 (extracción), ADR-0002 (representación),
  ADR-0003 (nombres de curso/edición), ADR-0004 (retención del VTT).

Los tres scripts son ESM con extensión `.js`: el `package.json` declara
`"type": "module"`, así que Node los trata como módulos sin necesidad de
`.mjs`. (Fueron `.mjs` hasta el 2026-08-02.)

---

## 6.c El extractor está validado contra el oráculo (2026-08-02)

`scripts/extractor/diff-oraculo.js` compara la salida del extractor contra
los `Transcription_raw.txt` que produjo el userscript. Son 28 casos con
contenido revisado a mano: el único test con oráculo real que tiene el
proyecto.

Resultado sobre las 28 clases de Física III:

| Similitud | Clases |
| --- | --- |
| **1.000 exacto** | 21 |
| 0,993–0,998 | 4 (2, 22, 23 y 1 más) |
| 0,976–0,978 | 3 (**10, 14, 20**) |

**El userscript no transformaba el texto.** La pregunta que abría este punto
—qué hacía el userscript que nunca se documentó— tiene respuesta: nada al
contenido. 21 clases reproducen palabra por palabra.

Las tres diferencias reales, ninguna de las cuales exige cambiar el parser:

1. **Etiqueta de locutor (clases 10, 14 y 20).** El oráculo trae
   `Nicolás Wschebor ` al principio de casi cada cue; los VTT de hoy no traen
   ningún tag `<v>`. La aritmética cierra exacto: en Clase14,
   9 819 − (213 cues × 2 palabras) = 9 393, el conteo del parser.
   `parseVtt` ya stripea tags inline, así que si volvieran estaría cubierto.
2. **OpenFING re-segmentó varios VTT.** Clase1 (249 → 221 cues), Clase25
   (248 → 201) y Clase26 (297 → 217) tienen **el mismo conteo de palabras**
   con distinta cantidad de cues. Cambió dónde corta, no qué dice. Por eso el
   diff compara bolsas de palabras y no cue a cue.
3. **Retoques de ASR.** Clases 2, 22 y 23 difieren en decenas de palabras
   (p. ej. `OpenFin` → `OpenFing`). La fuente se regeneró; no es un bug del
   parser.

**Consecuencia para el benchmark:** el oráculo sirve para validar el
extractor, pero **no es estable en el tiempo** — OpenFING regenera sus
transcripciones. Cualquier métrica que dependa de un conteo exacto de
palabras de la fuente tiene que fecharse.

---

## 6.d El extractor corre de punta a punta (2026-08-08)

`npm run fetch -- CDIV2017 --write` bajó **las 42 clases sin un solo error**.
36 escritas en esa corrida (5 ya estaban del corpus viejo, 1 de la prueba
previa). 307 280 palabras nuevas de transcripción.

Lo que la corrida confirmó:

- **`civ_09` reproduce exactamente los números de §4** — 279 cues, 9 301
  palabras, 50 990 chars, 4,7 % de overhead, 0 advertencias. La medición de
  aquel día era correcta y el pipeline la reproduce.
- **El `_thumbnails.vtt` sigue siendo la trampa que era.** 548 cues, 0
  advertencias, WebVTT impecable. Sólo lo agarra `validarTranscripcion`
  mirando el contenido.
- **Coste real:** 2 peticiones por clase, concurrencia 2. Sin Playwright.

Dos cosas que se descubrieron escribiendo el `fetch`:

1. **El HTML del índice está minificado y sin comillas en los atributos**
   (`href=/courses/civ/1/`, `class=clase-numero`). Los `<meta>` sí vienen
   entrecomillados — por eso el `urlDelVtt` viejo funcionaba — pero no hay
   garantía de que sigan así. Los regex de `openfing.js` tratan las comillas
   como opcionales.
2. **Hay que anclar en `<a class=clase-enlace>`, no en un `href` suelto.** El
   índice trae antes un nav con los otros cursos, y un regex que arranque por
   `href` se come ese enlace y se lo asigna a la clase 1. Pasó, y el síntoma
   era silencioso: la clase 1 apuntaba a `/courses/civ/`.

**El oráculo sigue verde después del refactor**: `npm run diff -- Fisica3-2015`
da ninguna clase bajo 0,97 y las mismas tres en 0,976–0,978 (10, 14, 20). Sí
se movió el reparto de la banda alta: hoy son **22 clases en 1.000 exacto y 3
en 0,99x**, donde §6.c registraba 21 y 4. Es exactamente la inestabilidad que
§6.c predijo —OpenFING regenera transcripciones—, no una regresión. Confirma
que cualquier medición sobre la fuente hay que fecharla.

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

- `"type": "module"` está puesto; los scripts son `.js` y Node los trata como
  ESM sin más.
- Scripts definidos: `npm run probe -- <url> <dir>`,
  `npm run vtt -- <archivo>` y `npm run diff -- <curso> [clase...]`.
- Playwright avisa `BEWARE: your OS is not officially supported` y baja el
  build de `ubuntu24.04-x64`. Es inocuo. Si falta alguna librería del sistema:
  `npx playwright install-deps` (pide sudo).
- El Chromium no vive en `node_modules` sino en `~/.cache/ms-playwright`
  (~150 MB), y se comparte entre proyectos.
- El repo **no tenía `.gitignore`** hasta 2026-08-02. Contiene
  `node_modules/`, `out/`, `probe-out/`, `notes.pdf` y `PDFiter1/`. Los dos
  últimos son artefactos de compilación: están en disco pero fuera de Git.

## 7. Qué sigue

**Lo próximo, en orden**

1. ~~**Completar el módulo Extractor de punta a punta.**~~ **Hecho el
   2026-08-08.** `fetch.js` hace índice → `og:video` → `.vtt` → parse →
   manifiesto, es idempotente y resumible, y se corrió sobre CDIV2017: las
   42 clases bajaron sin un solo error. Ver §6.d.
2. **Actualizar `docs/SPECS.md`.** Ahora son **dos** desalineos y es lo más
   urgente de la documentación. (a) La línea 30 sigue diciendo que
   `Transcription_raw.txt` es "dado, no se edita"; ADR-0002 lo convirtió en
   salida del parser. (b) ADR-0005 rompió *"cada clase es autocontenida"* y la
   lista de cuatro archivos obligatorios: hoy son tres versionados
   (`summary.md`, `notes.tex`, `metadata.yaml`) más `manifest.json` y
   `transcript.stats.json`, con la transcripción como insumo local no
   versionado.
3. **Instrumentar métricas** (ver sección 9). El paso previo al benchmark.
4. ~~**Pasada de `git filter-repo`.**~~ **Hecha el 2026-08-08.** Ver §7.b.

## 7.b El historial se reescribió (2026-08-08)

`git filter-repo` ejecutó ADR-0005 —ignorar no destrackea— y de paso limpió el
peso muerto. Un solo pase conceptual, cuatro objetivos:

| Salió del historial | Motivo |
| --- | --- |
| 33 `Transcription_raw.txt` (+ 4 variantes, ver abajo) | ADR-0005 |
| `Resnick.pdf` (67 MB) | peso muerto |
| 28 `notes.pdf` · `PDFiter1/` (56 PDF) | peso muerto |
| `NotasCA.pdf` | peso muerto |

**`.git`: 82 MB → 1,7 MB. Commits: 35 → 33** (dos quedaron vacíos al filtrar:
sólo agregaban PDF). Hoy no queda en el historial ni un `.txt` ni un `.pdf`;
los únicos binarios son los 12 fixtures `.vtt` de `tests/`, que ADR-0004
contempla explícitamente.

**La lección, y el motivo de que hiciera falta una segunda pasada:** filtrar
por el nombre exacto del archivo **no alcanza**. La primera pasada dejó
adentro cuatro transcripciones de la época temprana del repo con el nombre mal
escrito —`Transciption_raw.txt`, `transcript_raw.txt` (×2),
`transcrip_raw.txt`—, unas 40 000 palabras que una verificación por nombre
canónico nunca habría encontrado. **Verificar por extensión, no por nombre**:
la pregunta correcta no es *"¿queda algún `Transcription_raw.txt`?"* sino
*"¿queda algún `.txt` en el historial?"*.

Dos cosas más que hay que saber:

- **Las rutas cambian con el tiempo.** Los filtros tuvieron que cubrir
  `courses/Fisica3/` **y** `courses/Fisica3-2015/` (ADR-0003 renombró el
  directorio a mitad de camino), y `PDFiter1/` lleva un espacio inicial en el
  nombre, que git entrecomilla y un archivo de rutas se come en silencio.
- **El force-push no borra los objetos del lado de GitHub.** Siguen
  alcanzables por SHA hasta que GitHub corra su recolección. Cerrar el riesgo
  del todo exige pedírselo a Support o recrear el repo.

Todo lo borrado está en `~/Desktop/Files/respaldo-fingers-borrados/`, con un
README que dice qué es cada cosa. El oráculo de §6.c vive ahí: para volver a
correr `diff-oraculo.js` hay que copiar esos 28 archivos al working tree.

**Política de retención (vigente, ya aplicada)**

La salida de `probe.js` y `vtt.js` es efímera (`out/`, `probe-out/` en
`.gitignore`). De ahí se promueve **a mano** sólo lo que pasa a ser evidencia
de un ADR o fixture; todo lo demás se borra. Si el criterio es "lo guardo por
las dudas", en un año hay diez netlogs y ninguno indexado. Aplicada el
2026-08-02: se borró `scripts/out/` una vez promovido su netlog a
`docs/adr/evidence/`.

**Hecho el 2026-08-02** (ver `SESIONES.md` para el detalle)

- ~~Correr `vtt.js` contra los `Transcription_raw.txt` de Física III.~~
  Sección 6.c: el extractor está validado contra las 28 clases y **el
  userscript no transformaba el texto**.
- ~~Actualizar el README~~ (Fase 1 del Roadmap eliminada, `scripts/` ya no es
  "userscript"), ~~eliminar `scripts/tampermonkeyV0.1.js`~~ (commit `dbef60c`,
  por ADR-0001).
- ~~Convención de nombres curso/edición~~ → **ADR-0003**. `courses/Fisica3/`
  pasó a `courses/Fisica3-2015/`. Regla: sufijo `-<año>` cuando hace falta
  desambiguar ediciones o el slug ya termina en dígito (evita `Fisica32015`).
- ~~Retención del payload VTT~~ → **ADR-0004**. El `.vtt` crudo no se
  commitea; sólo el manifiesto (URL, `sha256`, fecha, versión del extractor).
  Resuelve el `Pendiente` de ADR-0002.
- ~~Los PDF salen de Git.~~ Los 28 `notes.pdf` estaban trackeados *y* en
  `.gitignore` a la vez; `PDFiter1/` cargaba 6,5 MB de PDF superados y tenía
  un espacio inicial en el nombre. Ambos fuera de Git, ambos en disco.

**Resueltas (2026-08-02)**

- **Convención de nombres curso/edición → ADR-0003.** `courses/Fisica3/` se
  renombró a `courses/Fisica3-2015/`. Regla general: sufijo `-<año>` cuando
  hace falta desambiguar ediciones o el slug ya termina en dígito (evita
  `Fisica32015`). `courses/CDIV2017/` ya cumplía la regla.
- **Retención del payload VTT → ADR-0004.** El `.vtt` crudo no se commitea;
  se versiona sólo `manifest.json` (URL, `sha256`, fecha, versión del
  extractor). Resuelve el `Pendiente` de ADR-0002.

**Decisiones abiertas**

- ~~**¿La transcripción derivada debe salir de Git?**~~ → **ADR-0005,
  `Aceptado`** (2026-08-08). **No se versiona.** `transcript.txt` y
  `transcript.timed.txt` al `.gitignore`; se versionan `manifest.json`,
  `transcript.stats.json` y `metadata.yaml`. El argumento que cerró la
  discusión es de alcance, no legal: el producto de este módulo es la
  herramienta que reproduce la transcripción, no la transcripción. Que además
  cierre el problema CC BY-NC-ND es consecuencia, no premisa.
- **Rename `Transcription_raw.txt` → `transcript.txt`/`transcript.timed.txt`
  en el corpus real.** ADR-0002 ya decidió el esquema de dos
  representaciones, pero el corpus (Física III y las 5 clases de CDIV2017)
  todavía usa el nombre y formato viejos — el extractor nuevo existe pero
  todavía no produjo ninguna clase real del corpus. Pendiente de decidir si
  se migra retroactivamente o sólo aplica de acá en adelante.
- **Granularidad del comando**: ¿`extract` toma una clase o un curso? Con el
  enfoque HTTP el costo de arranque desapareció, así que pesa menos que antes.
- **Representación canónica del contenido.** Ver sección 8.

**Más adelante**

- BDD con `cucumber-js`. Los `Then` decidibles ya tienen función que los
  responde en `vtt.js`. Se posterga porque su valor aparece cuando hay
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
- La afirmación *"los otros modelos no logran generar adecuadamente LaTeX"* es barata de
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
