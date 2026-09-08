# AGENTS.md — encargo para agentes

Este archivo es el encargo que reciben **todos** los agentes que trabajan en este
repo. Es idéntico para todos a propósito: si cada uno recibe instrucciones
distintas, lo que se compara es el encargo y no el agente.

---

## 1. Lo primero: leer las reglas del repo

Este repo ya tiene sus convenciones escritas. **No las reinventes y no las
negocies**, aunque tu criterio difiera:

| Archivo | Qué manda |
| --- | --- |
| `/CLAUDE.md` | contexto del pipeline: qué es una clase, qué archivos la componen, por qué la transcripción no se versiona, decisiones cerradas (`docs/adr/`) |
| `courses/<Curso>/CLAUDE.md` | **las reglas de composición del curso**: estilo del resumen, preámbulo LaTeX verbatim, esquema del `metadata.yaml`, figuras, compilación y los gotchas ya pagados |
| `docs/adr/` | las decisiones formales. Si algo en un `CLAUDE.md` las contradice, mandan los ADR |

Leelos enteros antes de escribir una línea. El `CLAUDE.md` del curso es la
especificación: cuando dice "verbatim", es verbatim; cuando fija un enum, es ese
enum; cuando prohíbe inventar un dato, se deja el valor por defecto documentado.

---

## 2. La tarea

Producir las **notas completas de una clase** a partir de su transcripción.

Entrada (ya está en disco, no hay que bajar nada):

- `courses/<Curso>/Clases/ClaseN/transcript.txt` — la transcripción, sin marcas.
- `courses/<Curso>/Clases/ClaseN/transcript.timed.txt` — la misma, con marcas
  `[m:ss]`, útil para ubicar en qué momento el docente dibuja o cambia de tema.
- `courses/<Curso>/Clases/ClaseN/transcript.stats.json` — métricas del extractor.
  **`stats.transcript_words` del `metadata.yaml` sale de acá** (`words`), no de un
  conteo propio ni de ninguna cabecera.

Si `transcript.txt` no está, se regenera con `npm run fetch -- <Curso> N --write`.

Salida, en esa misma carpeta:

1. `summary.md` — el resumen estructurado.
2. `notes.tex` — el mismo contenido en LaTeX.
3. `assets/clase<N>-<slug>.tex` — las figuras, si la clase las pide.
4. `metadata.yaml` — completar el esqueleto existente.
5. `notes.pdf` — compilado, con `./build.sh N` desde `courses/<Curso>/`.

El estilo, la estructura, el preámbulo, el esquema del YAML y las convenciones de
figuras **están todos en el `CLAUDE.md` del curso**. Este archivo no los repite.

---

## 3. Cómo se trabaja

- **La transcripción es la única fuente.** Reconstruí el razonamiento de la clase:
  hipótesis, pasos intermedios de las demostraciones, el porqué de cada paso, las
  sutilezas y los límites de validez. No es un índice de resultados.
- **Lo que el docente no hace, no lo hagas vos.** Si dice "no voy a demostrar esto",
  las notas dicen que no se demostró y dan la idea que él dio. Completar la
  demostración con conocimiento propio es exactamente el error que este repo trata
  de detectar.
- **El pizarrón es invisible en la transcripción.** Cuando el docente dice "esto" o
  "acá" señalando algo que escribió, el referente se perdió. Reconstruilo sólo si
  el texto lo determina; si no, decilo en vez de inventarlo.
- **La notación matemática la ponés vos.** La transcripción es prosa hablada, sin un
  solo símbolo ("raíz cuadrada de x", "para todo x positivo o nulo"). Traducir a
  símbolos es tu decisión, no la del docente: hacela conservadora y consistente.
- **Ruido de ASR**: hay repeticiones y palabras mal transcritas. Corregí en silencio
  lo obvio; no "corrijas" matemática que no entendés.
- **No inventes datos que no verificaste**: bibliografía, capítulos, fechas, nombres.
  El `CLAUDE.md` del curso dice qué valor por defecto va en cada caso.
- **Se dibuja donde dibuja la clase.** Si el docente razona sobre una figura, esa
  figura va en las notas; si la clase no tiene momentos gráficos, no se agregan
  figuras decorativas. Formato y estilos, en el `CLAUDE.md` del curso (§6): fuentes
  vectoriales (pgfplots/TikZ), estilos compartidos de `Clases/assets/tikzstyles.tex`,
  nunca raster para line-art.
- **Una sola pasada.** Trabajá con lo que hay en el repo; no le pidas al usuario
  contenido de la clase ni decisiones de fondo. Si algo es genuinamente ambiguo,
  resolvelo con el criterio más conservador y dejalo dicho en las notas.

---

## 4. Verificación (no es opcional)

1. **Compila**: `cd courses/<Curso> && ./build.sh N` → `OK ClaseN -> notes.pdf`.
   El compilador es **tectonic**, y **se detiene en el primer error**: si falla, es
   un bug real, no ruido.
2. **Cero `Overfull`**, desde el directorio de la clase:
   ```bash
   mkdir -p /tmp/chk   # obligatorio: sin esto --outdir falla y el grep da 0 igual
   ~/.local/bin/tectonic -X compile notes.tex --outdir /tmp/chk 2>&1 | grep -c Overfull
   ```
3. **Leé el PDF**. Que compile no quiere decir que esté bien: hay que abrir
   `notes.pdf` y revisarlo página por página — rótulos superpuestos, figuras que no
   dicen lo que afirma el texto, cortes feos, matemática que no cierra. Corregir el
   `.tex`, recompilar, releer.
4. **El `metadata.yaml` parsea** con un cargador YAML estándar y respeta tipos y
   enums (alimenta tablas de una base de datos).
5. **Contrato de archivos**: quedan versionados `summary.md`, `notes.tex`,
   `metadata.yaml`, `manifest.json` y `transcript.stats.json`, más `assets/` si hay
   figuras. `notes.pdf` y las transcripciones están en `.gitignore` — así es como
   tiene que ser.

---

## 5. Reglas de entrega

Estas notas se comparan a ciegas contra las de otros agentes. Para que la
comparación signifique algo:

- **Trabajá en una rama local de nombre neutro** (`benchmarking`), a partir del
  último commit de `main`. **No pushees.** No toques `main`.
- **Nada en el repo puede identificar qué agente escribió las notas**: ni el nombre
  de la rama, ni el mensaje de commit, ni un comentario en el `.tex`, ni una firma
  en el PDF. `llm.model` del `metadata.yaml` queda en `""` hasta que la evaluación
  a ciegas termine; el dato se lo pasás al usuario por fuera del repo.
- **No mires las notas de otro agente** para esta clase, ni un `summary.md` de otra
  corrida de la misma clase, aunque estén en el disco. Sí podés (y conviene) mirar
  **otras clases ya terminadas del mismo curso** como calibración de estilo: para
  eso están.
- El entregable final es el **`notes.pdf`**. El usuario lo renombra y lo distribuye;
  vos dejalo compilado y limpio.
