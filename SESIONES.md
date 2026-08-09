# SESIONES.md

Bitácora de trabajo, una entrada por sesión. Existe para responder *"¿qué pasó
la última vez?"* sin releer el `git log` ni una conversación.

No duplica otros documentos: las **decisiones** viven en `docs/adr/`, las de
esquema en `docs/log.md`, y el estado del pipeline en `CLAUDE.md`. Acá va el
relato: qué se hizo, qué se descubrió y qué quedó abierto.

---

## 2026-08-08 — El extractor de punta a punta, y el repo sin transcripción

**9 commits** en `chore/estructura`, todos pusheados. El día empezó con
`vtt.js` parseando un archivo que ya tenías en disco y terminó con 70 clases
extraídas por comando, el historial de Git reescrito y la documentación
alineada con un modelo de datos nuevo.

### El arco de la sesión

Cuatro cosas, en este orden, y cada una habilitó la siguiente:

1. **Se levantó ADR-0005** sobre si la transcripción debía seguir versionada,
   en estado `Propuesto`, difiriendo la decisión hasta que existiera el
   `fetch` — con la condición escrita de no aceptar la alternativa de sacarla
   sin poder regenerarla con un comando.
2. **Se completó el `fetch`**, y con eso la condición se cumplió el mismo día.
3. **ADR-0005 pasó a `Aceptado`**: la transcripción no se versiona.
4. **`git filter-repo`** ejecutó esa decisión —ignorar no destrackea— y de
   paso limpió 79 MB de peso muerto.

Después, la documentación: `SPECS.md` y todo lo que arrastraba, y un TL;DR de
instalación y uso en el README.

### Lo que se construyó

- **`fetch.js`** — el extractor de punta a punta y el comando de producción.
  Índice del curso → `og:video` → `.vtt` → transcripción, métricas y
  manifiesto. Selección por número, rango o lista (`9,14,20-23`). Dry-run por
  defecto. Idempotente y resumible.
- **`openfing.js`** (la capa de red, lo único que toca HTTP) y **`cursos.js`**
  (slug de OpenFING + datos fijos del curso).
- **`formatHHMMSS`** en `vtt.js` — `metadata.yaml` pide `"HH:MM:SS"` y el
  `[m:ss]` de la transcripción con marcas no sirve.
- **ADR-0005**, levantado y aceptado.

**No hizo falta escribir código de red nuevo.** `urlDelVtt` y el mapa de slugs
ya existían enterrados en `diff-oraculo.js`. Se extrajeron a módulos y ahora
los comparten, así el oráculo valida exactamente el camino que corre en
producción.

### Los hallazgos que importan

**1. Filtrar por nombre exacto no alcanza.** La primera pasada de
`filter-repo` dejó adentro cuatro transcripciones con el nombre mal escrito de
la época temprana del repo —`Transciption_raw.txt`, `transcript_raw.txt` (×2),
`transcrip_raw.txt`—, unas 40 000 palabras. La pregunta correcta no es *"¿queda
algún `Transcription_raw.txt`?"* sino ***"¿queda algún `.txt`?"***: verificar
por extensión, no por nombre canónico. Detalle en `CLAUDE.md` §7.b.

**2. `--force` no debe significar "borrá lo que escribí".** El `fetch` pisaba
`metadata.yaml` con `--force`, y correrlo sobre Física III —prerrequisito del
`filter-repo`— habría borrado `topics`, `review` y `llm.model` de 28 clases.
`llm.model` es trazabilidad y el extractor no puede reconstruirlo. Ahora
`metadata.yaml` sólo se crea si falta, nunca se pisa.

**3. El HTML del índice de OpenFING viene minificado y sin comillas** en los
atributos, y hay que anclar en `<a class=clase-enlace>`: un regex que arranque
por `href` se come el nav de otros cursos y le asigna esa URL a la clase 1.
Fallaba en silencio.

**4. Probar el tutorial encontró un bug.** Al verificar el README en un clon
limpio, `git status` quedaba sucio: `manifest.json` se reescribía en cada
corrida por el `extractedAt`. Cualquiera que clonara y bajara las
transcripciones —lo que el README acababa de mandar hacer— se encontraba con
70 archivos modificados con diffs de sólo la fecha. Ahora, si el `sha256` no
cambió, se conserva el manifiesto.

**5. El oráculo se movió, como estaba previsto.** Hoy son **22 clases en 1.000
exacto y 3 en 0,99x**, donde §6.c registraba 21 y 4. No es una regresión: es la
inestabilidad que ese mismo apartado predijo —OpenFING regenera sus
transcripciones—. Confirma que toda medición sobre la fuente lleva fecha.

### Números

| | Antes | Después |
| --- | --- | --- |
| Clases con transcripción | 33 | **70** (0 errores en las dos corridas) |
| CDIV2017 transcrito | 5/42 | **42/42** |
| Clases con procedencia (`manifest.json`) | 0 | **70/70** |
| Transcripción literal versionada | 308 452 palabras | **0** |
| `.git` | 82 MB | **1,7 MB** ↓ |
| Commits en el historial | 35 | 33 ↓ |

↓ Medido **justo después del filtrado**. Los commits de documentación
posteriores lo dejaron en ~2 MB y 36 commits; el orden de magnitud es el que
importa. Dos commits desaparecieron porque quedaron vacíos al filtrar: sólo
agregaban PDF.

### Lo que costó, y hay que tener presente

- **El oráculo ya no está en el repo.** Para correr `npm run diff` hay que
  restaurarlo primero:
  ```bash
  cp -r ~/Desktop/Files/respaldo-fingers-borrados/courses/. courses/
  ```
  Está en el `.gitignore`, así que no se re-commitea solo. Documentado en
  `scripts/extractor/README.md`.
- **La clase dejó de ser autocontenida.** Clonar ya no alcanza para trabajar:
  hace falta red y que OpenFING siga sirviendo el curso. Es reproducibilidad
  *verificable*, no *hermética*, y fue una elección consciente.
- **GitHub todavía conserva los objetos viejos.** El force-push no los borra;
  siguen alcanzables por SHA hasta que corra su recolección. Cerrarlo del todo
  exige un ticket a Support o recrear el repo. **Es la única parte de ADR-0005
  que quedó sin ejecutar**, y no es técnica.

### Documentación realineada

ADR-0005 rompió dos afirmaciones que estaban repartidas por todo el repo:
*"cada clase es autocontenida"* y la lista de cuatro archivos obligatorios.
Se corrigió `docs/SPECS.md` y se propagó a `README.md`,
`docs/ARCHITECTURE.md`, `docs/FUNDATIONS.md` y los `CLAUDE.md` de los dos
cursos.

Los de curso eran los más dañinos: su paso 1 mandaba leer un archivo que ya no
existe y sacar `stats.transcript_words` de una cabecera que la representación
nueva no tiene. Cualquiera que siguiera esa guía se trababa en el primer paso.

Se cerraron además tres pendientes: el rename `Transcription_raw.txt` →
`transcript.txt` (resuelto por eliminación: las 70 clases usan la convención
nueva), la granularidad del comando (resuelta por implementación) y la
limpieza del historial.

---

## Próximo paso: instrumentar métricas, **antes** de escribir los 37 resúmenes

Es lo único que queda en el roadmap (`CLAUDE.md` §7 y §9), y el orden importa
más de lo que parece.

**La situación.** Las 37 clases nuevas de CDIV2017 tienen transcripción y
`metadata.yaml` esqueleto, y no tienen `summary.md` ni `notes.tex`. Ese es el
trabajo de contenido que sigue.

**El riesgo de hacerlo primero.** `CLAUDE.md` §9 lo dice sin vueltas: *el costo
y los tokens sólo existen en el momento de la llamada*. Si esos 37 resúmenes
se generan copiando y pegando en un chat, se pierden para siempre los datos
del único lote grande y homogéneo que va a tener el proyecto. Después no se
reconstruyen.

**Por dónde empezar, concretamente:**

1. **Un script que llame a la API** y escriba un log append-only en `runs/`
   con timestamp, módulo, entrada, salida, modelo, tokens, costo y duración.
   La unidad de registro es **la corrida, no la clase**: `metadata.yaml`
   asume un `llm.model` por clase y no soporta N corridas — conserva identidad
   y estado, y apunta a la corrida vigente.
2. **Correrlo sobre 2 o 3 clases primero**, no sobre las 37, y mirar si el log
   sirve para lo que se quiere responder.
3. **Recién ahí, el lote.** Con eso queda instrumentado el experimento que
   §8 propone como primero: mezclar modelos entre la etapa A (transcripción →
   `summary.md`) y la B (`summary.md` → `notes.tex`), que es donde está el
   ahorro real con 42 clases.

**Dos cosas que conviene tener presentes al empezar:**

- **No comparar modelos con los datos retroactivos.** Los 19 `opus-4-8` /
  5 `deepseek-v4-flash` / 4 `opus-5` de Física III no se asignaron al azar, así
  que cualquier diferencia está confundida con qué clases le tocaron a cada
  uno (§9).
- **`stats.transcript_words` ya tiene la fuente correcta:**
  `transcript.stats.json` → `words`, escrito por el extractor. Los números
  heredados del userscript tienen errores de hasta +36 % (`docs/log.md` §7).
  Al generar los `metadata.yaml` de las 37, no copiar nada de una cabecera.

Lo demás abierto: el ticket a GitHub Support (arriba), la revisión humana de
las 28 clases de Física III —que sigue siendo el cuello de botella del
contenido y no lo desbloquea ninguna automatización—, y el problema del §8:
si `summary.md` es descartable y la corrección se hace en el `.tex`, hay que
decidir qué archivo bendice el gold standard **antes** de empezar a revisar.

---

## 2026-08-02 — Automatización de la extracción

**12 commits · 3 PR · 367 archivos · +11 553 / −340** (sin contar PDF).
Rama de trabajo: `pipeline/extractor` → `pipeline/oraculo` → `chore/estructura`.

El día empezó con un corpus completo y cero automatización, y terminó con el
extractor validado contra las 28 clases de Física III.

### Lo que se construyó

- **Módulo Extractor** en `scripts/extractor/`: `vtt.js` (parser de WebVTT,
  funciones puras), `probe.js` (descubrimiento con Playwright, diagnóstico) y
  `diff-oraculo.js` (validación contra el corpus viejo). Fixtures en
  `tests/extractor/fixtures/`, una por rama del parser.
- **Cuatro ADR**: extracción por VTT estático (0001), separación `fetch`/`parse`
  y doble representación (0002), convención de nombres curso/edición (0003) y
  retención del payload VTT (0004).
- **`docs/FUNDATIONS.md`**, con los principios permanentes que estaban
  dispersos entre `VISION.md` y `ARCHITECTURE.md`.
- **`scripts/README.md`**, que dice qué está automatizado y qué se hace a mano.

### Los dos hallazgos que importan

**1. El userscript no transformaba el texto.** Era la pregunta abierta desde
que se decidió automatizar. El diff contra las 28 clases da **21 con similitud
1.000 exacta** y ninguna por debajo de 0,97. Las tres diferencias reales
—etiqueta de locutor en las clases 10/14/20, re-segmentación de OpenFING en
1/25/26, y retoques de ASR en 2/22/23— no exigen tocar el parser. Detalle en
`CLAUDE.md` §6.c.

**2. `stats.transcript_words` está mal en las 28 clases.** Error típico +4 %, y
Clase23 declara `12584` cuando el archivo tiene **9225** (+36 %). En 26 clases
el número copia fielmente el header del userscript, así que el error viene de
origen. No se corrigió a mano: el conteo correcto lo produce el parser y la
corrección llega cuando el extractor regenere cada clase — pero hay que dejar
de copiar el header. Anotado en `docs/log.md` §7.

> Corolario para el benchmark: el oráculo **no es estable en el tiempo**,
> OpenFING regenera sus transcripciones. Las mediciones hay que fecharlas.

### Saneamiento

- `courses/Fisica3/` → `courses/Fisica3-2015/` (356 archivos, rename puro).
- Los PDF salen de Git: los 28 `notes.pdf` estaban trackeados *y* en
  `.gitignore` a la vez; `PDFiter1/` cargaba 6,5 MB y tenía un espacio inicial
  en el nombre. Ambos siguen en disco.
- `scripts/` y `tests/` se espejan por módulo. `.mjs` → `.js`. README reducido
  a un TL;DR de WIP honesto.

### Qué quedó abierto

Lo próximo es **completar el extractor de punta a punta**: hoy parsea un
archivo que ya tenés, falta el `fetch` (índice del curso → `og:video` →
`.vtt` → manifiesto, idempotente y resumible). El arnés para validarlo ya
existe.

Lo demás, en `CLAUDE.md` §7: actualizar `docs/SPECS.md` (línea 30 todavía
dice que `Transcription_raw.txt` es "dado"), instrumentar métricas, y la
pasada de `git filter-repo` que ahora cubre ~79 MB.

### Nota de método

Un `git rebase` borró del disco los 28 `notes.pdf` al pasar por un `main`
donde todavía estaban trackeados. Se recuperaron con
`git restore --source=origin/main --worktree`. **Cuando un commit destrackea
archivos que querés conservar, verificá que sigan en disco después de
cualquier rebase o cambio de rama.** Deja de ser un riesgo una vez que el
cambio está en `main`.
