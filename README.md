# fingers

Una base de conocimiento académico abierta, versionada y revisada por la
comunidad: cada afirmación puede rastrearse hasta sus fuentes y cada cambio
tiene historial.

> ¿Qué hace falta para que una clase pase de ser un video de 90 minutos a un
> documento que un profesor firmaría sin problemas?

---

## Qué es esto

La universidad genera una enorme cantidad de conocimiento cada semestre, y ese
conocimiento queda repartido entre clases grabadas, apuntes personales, libros,
ejercicios y pizarrones. Con el tiempo, buena parte de ese trabajo se pierde o
se vuelve difícil de reutilizar.

Este repositorio existe para preservarlo y organizarlo dándole el mismo ciclo de
vida que tiene el software libre: cada cambio es trazable, revisable, respaldado
por fuentes y mantenido por una comunidad de responsables de cada área. No
pretende reemplazar las clases, los docentes ni la bibliografía; busca conservar
y ordenar lo que ellos producen.

La inteligencia artificial participa del proceso, pero en un lugar preciso:
genera borradores y acelera el trabajo editorial. La autoridad del contenido
viene siempre de las fuentes originales y de la revisión humana.

> La inteligencia artificial no forma parte del repositorio; forma parte del
> proceso editorial.

## Principios

1. **Las fuentes son la autoridad.** Un resumen nunca reemplaza a la clase, al
   libro ni al material del docente.
2. **La IA propone, las personas deciden.** Todo lo generado es borrador hasta
   que alguien lo revisa. (Dejo a Claude como colaborador porque tiene skills
   para dibujar las figuras; tip: revisar `courses/Fisica3/CLAUDE.md`, puntos 6
   y 7.)
3. **El conocimiento es trazable.** De cada cambio debe poder saberse quién lo
   hizo, por qué, con qué respaldo y cuándo fue revisado.
4. **El conocimiento es reproducible.** Con las mismas fuentes y las mismas
   herramientas abiertas, el resultado se reconstruye.
5. **El repositorio es la fuente de verdad.** Un sitio, una base de datos o una
   API son representaciones del repositorio, nunca al revés.

---

## Estructura del repositorio

```text
fingers/
  courses/
    Fisica3/                  # OpenFING · Nicolás Wschebor · 2015, semestre 2
      build.sh                # compila las 28 clases a PDF (tectonic)
      readMe.md               # índice del curso
      Clases/
        assets/               # estilos compartidos del curso (tikzstyles.tex)
        Clase1/ … Clase28/    # una carpeta autocontenida por clase
  docs/                       # visión, arquitectura, modelo de datos, bitácora
  scripts/                    # userscript para extraer transcripciones
  README.md
```

> El árbol muestra lo esencial. Cada curso lleva además sus archivos internos de
> convenciones y algún snapshot histórico de PDF.

## La unidad mínima es una clase

Una clase es un objeto académico independiente, con su contenido, sus metadatos,
sus recursos y su propio estado editorial. Puede evolucionar sin afectar al
resto del curso.

```text
ClaseN/
  Transcription_raw.txt   # dado: transcripción cruda, no se edita
  summary.md              # generado: resumen estructurado en Markdown
  notes.tex               # generado: el mismo resumen en LaTeX
  metadata.yaml           # generado: metadatos con esquema estricto
  assets/                 # on demand: figuras vectoriales de la clase
```

Los cuatro archivos son obligatorios. La carpeta `assets/` se crea recién al
producir la primera figura, con los archivos planos —sin subcarpetas por tipo—
nombrados `<claseN>-<slug>.tex` en kebab-case.

El `metadata.yaml` está pensado para alimentar tablas de una base de datos, así
que respeta tipos y enumerados. El estado de una clase vive en **dos ejes
independientes**, porque avance editorial y revisión son cosas distintas:

| Campo | Valores | Qué expresa |
|---|---|---|
| `editorial_status` | `draft`, `reviewing`, `verified`, `published` | En qué punto del pipeline está la clase |
| `review.state` | `needs-review`, `needs-work`, `reviewed` | Qué le hace falta a la revisión humana |

Junto a ellos, el bloque `status` registra el avance por artefacto
(`transcript`, `summary`, `latex`, `assets`).

---

## Pipeline: de un video a un PDF

Cada clase recorre siempre el mismo camino:

1. **Transcripción.** Se extrae la del video de OpenFING con el userscript de
   [`scripts/`](scripts) → `Transcription_raw.txt`, que a partir de ahí no se
   toca más.
2. **Borrador.** Un LLM produce `summary.md`: un resumen que **reconstruye el
   razonamiento** de la clase —motivación, hipótesis, pasos intermedios,
   interpretación física y límites de validez—, no un listado de resultados.
3. **Notas.** El mismo contenido se traduce a `notes.tex`, con preámbulo y
   estilo comunes a todo el curso.
4. **Metadatos.** Se completa `metadata.yaml`, incluido el modelo que generó el
   borrador y las estadísticas de la clase.
5. **Figuras.** Se autoran en `assets/` con TikZ, circuitikz o pgfplots.
6. **Compilación.** `./build.sh` deja cada `notes.pdf` in situ, sin más
   dependencias que tectonic.
7. **Revisión humana.** Es la que mueve `review.state` y `editorial_status`.
   Nada generado automáticamente se considera definitivo.

En las primeras pruebas el modelo resumió correctamente el contenido de las
clases, y los errores encontrados fueron sobre todo de formato (LaTeX) o de
redacción, no de conceptos físicos. Eso no cambia el rol de la revisión: la baja
frecuencia de errores conceptuales es justamente lo que los hace difíciles de
detectar sin leer con atención.

**Regla de recursos:** todo gráfico se autora en formato **vectorial y
reproducible**. No se admiten fotos del pizarrón ni capturas del video: son
material de origen, no contenido del repositorio, y no se reconstruyen con
herramientas abiertas. (Sólo es una cuestión de peso del proyecto esta regla.)

## Cómo se produce una figura

Es la parte más artesanal del flujo y tiene su propia disciplina:

- **Nunca se entrega una figura sin haberla visto compilada.** Escribir TikZ a
  ciegas produce etiquetas encimadas, vectores mal orientados o código que
  directamente no compila.
- El ciclo es: compilar todas las figuras de la clase juntas en un documento de
  prueba → leer el PDF → corregir → compilar la clase completa → **releer** el
  `notes.pdf`. El último paso no es opcional: el interlineado del documento
  final estira los rótulos de varias líneas y saca a la luz colisiones que la
  prueba aislada no muestra. (Detalles en courses/Fisica3/CLAUDE.md).

## Cómo se arma un commit

El historial es parte del contenido: tiene que poder responder qué se hizo, qué
se verificó y qué se corrigió.

- **Una rama por lote de trabajo**, y Pull Request contra `main`.
- **Un commit por lote coherente** —por ejemplo, las figuras de un grupo de
  clases— y no un commit por archivo suelto.
- **Prefijos**: `assets:` para contenido gráfico, `docs:` para documentación y
  convenciones.
- **Qué entra en un commit de figuras**: los `assets/*.tex` nuevos, el
  `notes.tex` que los incluye, el `notes.pdf` recompilado y el `metadata.yaml`
  actualizado (`diagrams_pending`, `status.assets`).
- **Qué no se toca**: `llm.model` y `review.date`. Registran qué modelo generó
  el borrador y cuándo lo revisó una persona; son trazabilidad, no metadatos
  cosméticos.
- **El cuerpo del mensaje** enumera lo que se verificó y las correcciones de
  fondo que salieron en el camino, no sólo lo que se agregó.

```text
assets: diagramas verificados de las Clases 27 y 28
assets: diagramas verificados de las Clases 23 a 26
assets: diagramas verificados de las Clases 16 a 22
```

---

## Estado (2026-07-26)

| | |
|---|---|
| Cursos | 1 — Física III (OpenFING, 2015 s2) |
| Clases | 28 / 28 con resumen, notas y figuras |
| Figuras vectoriales | 184 archivos TikZ / circuitikz / pgfplots |
| Transcripción → resumen | 271 057 → 60 554 palabras |
| PDF compilados | 28 (~3,3 MB) |
| Borradores por modelo | 19 `claude-opus-4-8` · 5 `deepseek-v4-flash` · 4 `claude-opus-5` |
| `editorial_status` | 28 en `draft` |
| Revisión humana | 27 `needs-review` · 1 `needs-work` |

El corpus está completo en notas y figuras. Lo que falta es la **revisión
humana**: es la que mueve una clase de `draft` en adelante, y sin ella nada de
esto es todavía contenido estable.

## Roadmap

- **Fase 0 — en curso.** Markdown, LaTeX y Git.
- **Fase 1.** Una pequeña extensión de navegador para extraer transcripciones.
- **Fase 2.** Automatizar el flujo con Node.js.
- **Fase 3.** Un sitio estático que publique el contenido.
- **Fase 4.** Una base de datos, cuando ya no alcance con archivos.
- **Fase 5.** Autenticación, cuando aparezcan los primeros colaboradores.
- **Fase 6.** Sistema propio de revisión y Pull Requests, si alguna vez GitHub
  deja de ser suficiente.

## Documentación

- [`docs/VISION.md`](docs/VISION.md) — visión, misión y principios.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — filosofía, pipeline editorial
  y estructura del proyecto.
- [`docs/SPECS.md`](docs/SPECS.md) — modelo de datos de una clase.
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) — cómo colaborar.
- [`docs/log.md`](docs/log.md) — bitácora de decisiones de nomenclatura y
  esquema.

## Fuentes y alcance

Las transcripciones provienen de las clases públicas de **OpenFING**. El
contenido de este repositorio es redactado por sus colaboradores: las fuentes
sirven para verificar y respaldar afirmaciones, no para ser reproducidas. No se
distribuye material protegido por derechos de autor.
