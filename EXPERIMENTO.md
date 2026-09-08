# Experimento: terminar lo que OpenFING no hizo

Bitácora en vivo. Se escribe **mientras pasa**, no al final.

**Pregunta:** ¿cuán complicado es llevar las clases 9 y 10 de ElecMag2024 —las
únicas dos del curso sin transcripción publicada— hasta el mismo estado que las
otras 27, generando la transcripción por cuenta propia?

**Dónde:** este sandbox. No es el repo. Nada de acá se promueve sin un ADR de
procedencia.

---

## Diseño

Tres clases, no dos. **La clase 8 es el control**: sí tiene VTT oficial de
OpenFING, mismo docente, mismo tema, misma acústica. Sin ella se producirían dos
clases de calidad desconocida y, cuando un resumen saliera raro, no habría forma
de saber si la culpa fue del ASR o de la etapa de resumen.

Da dos mediciones:

1. **ASR vs VTT oficial**, mismo audio → cuánto peor es la transcripción propia.
2. **Notas desde el VTT oficial vs notas desde el ASR**, mismo prompt → cuánto
   de ese ruido sobrevive hasta el producto final. *(pendiente)*

| Clase | Duración | Estado en OpenFING |
| --- | --- | --- |
| 8 | 5566 s | VTT oficial ✅ — **control** |
| 9 | 6760 s | sin derivados |
| 10 | 5203 s | sin derivados |

Total: 3 h 19 min de audio.

---

## 2026-09-08 · Preparación en frío

Todo escrito y probado **antes** de encender una GPU. El módulo vive en
`scripts/asr/`:

| Pieza | Dónde corre | Qué hace |
| --- | --- | --- |
| `lote.js` | local | clase → URL del `.mp4`, reusando `openfing.js` |
| `preparar.sh` | pod | dependencias + descarga del modelo |
| `transcribir.py` | pod | descarga → audio → Whisper → `.vtt` |
| `integrar.js` | local | `.vtt` → artefactos de clase, marcados como ASR |
| `comparar.js` | local | el control contra el VTT oficial |

**El contrato del módulo es "producir un `.vtt`".** Por eso no reimplementa
nada: `parseVtt`, `validarTranscripcion`, `metricas`, `aTextoPlano` y
`aTextoConTiempo` salen tal cual de `vtt.js`, y `similitud()` de
`diff-oraculo.js`. La transcripción de Whisper entra por el mismo caño que la de
OpenFING.

### Hallazgos de la preparación

**El `moov` de los `.mp4` está al frente.** Bajando 26 MB con `curl -r` se
obtiene un clip válido: se puede probar el pipeline sin bajar 1,13 GB. (`ffmpeg`
no puede abrir HTTPS en esta máquina; hay que pasar por `curl`.)

**Bug encontrado por la prueba de humo:** `transcribir.py` intentaba bajar el
`.mp4` aunque el `.wav` ya estuviera. Corregido — importa en el pod, donde un
reintento no debe rebajar un giga.

### Prueba de humo — 90 s, `tiny`, int8, CPU

Corre de punta a punta. El `.vtt` emitido pasa `validarTranscripcion`, 0
warnings, 0 solape en cola. **14,7× tiempo real** en 4 núcleos.

---

## Resultado 1: el tamaño del modelo no es un detalle

Mismos 90 segundos, clase 8. **Similitud por bolsa de palabras: 0,632.**

> **OpenFING:** «…cómo resolver la ecuación de **Laplace** utilizando bases […]
> en **esféricas**, en coordenadas **esféricas** […] nos interesamos al caso de
> **R mayor que A**…»
>
> **`tiny`:** «…cómo resolver la ecuación de **la plaza** utilizando bases […]
> en **Efehíricas**, en **coordenas Efehíricas** […] nos interésamos el caso de
> **R major que va**…»

El error no es parejo: **se concentra exactamente en el vocabulario técnico**.
«Laplace» → «la plaza», «esféricas» → «Efehíricas», «R mayor que A» → «R major
que va». Y también aparece una alucinación entera («¿Pero no es conocimiento?»)
donde el original dice otra cosa.

Esto conecta con `/CLAUDE.md` §5: si la etapa de resumen ya inventa notación a
partir de prosa hablada correcta, alimentarla con «la ecuación de la plaza» es
pedirle que reconstruya desde ruido. **`tiny` queda descartado; el run real va
con `large-v3`.**

Vale como calibración, no como conclusión: `tiny` es el modelo más chico que
existe y se usó justamente para que la prueba fuera barata. El número que
importa es el de `large-v3`, y ese todavía no se midió.

---

---

## 2026-09-08 · El run en RunPod

Pod: RTX 4090 24 GB, **secure cloud**, EU-CZ-1, USD 0,74/h.

### Hallazgo 1: el pod de community cloud no sirve para automatizar

El primero se creó en community cloud (USD 0,34/h) y **hubo que tirarlo**. Sin
IP pública sólo queda el proxy `ssh.runpod.io`, que:

- exige PTY (`Error: Your SSH client doesn't support PTY`), y
- aun con `-tt` **no ejecuta comandos no-interactivos**: se cuelga.

La autenticación funcionaba perfecto (`Server accepts key`), así que el
síntoma engaña: parece un problema de credenciales y es de transporte.
**Para manejar un pod por script hace falta secure cloud**, que sí da IP
pública y mapea el 22/tcp. El doble de precio compra que la cosa sea
automatizable.

### Hallazgo 2: OpenFING limita por conexión, no en total

Medido desde EU-CZ-1:

| | velocidad |
| --- | --- |
| 1 conexión | 275 KB/s |
| 4 conexiones en paralelo | ~270 KB/s **cada una** (~1,1 MB/s agregado) |

Es un límite **por conexión**. Con una sola, bajar las tres clases son **2,7 h
con la GPU parada y pagándose**; con cuatro, ~40 min. De ahí `prefetch.sh`,
que baja por rangos en paralelo y deja los `.wav` listos antes de tocar la GPU.

Cuatro es un techo deliberado: es lo que abre cualquier navegador. La idea es
no desperdiciar GPU, no exprimirle el ancho de banda a un servidor
universitario.

### Tres bugs que sólo aparecen sobre el pod

1. **PEP 668.** Ubuntu 24.04 marca el Python del sistema como *externally
   managed* y `pip` se niega. Resuelto con `--break-system-packages`: el pod
   es efímero y de un solo uso.
2. **`nvidia.cudnn` es un namespace package**, así que `__file__` da `None` y
   la detección de cuDNN fallaba. Hay que preguntarle al `spec` por sus rutas
   de búsqueda, con un `find` como respaldo.
3. **`pkill -f` se suicida.** El shell remoto tiene el nombre del script en su
   propia línea de comando, así que `pkill -f transcribir.py` mata la sesión
   SSH que lo ejecuta. El truco del corchete (`[t]ranscribir`) tampoco alcanza
   si el resto del comando menciona el archivo: hay que aislar el `pkill` en
   su propia invocación.

Ninguno de los tres se puede descubrir en frío. Es el argumento a favor de
haber preparado todo antes: se pagaron GPU-minutos sólo por estos tres, no
por el pipeline entero.

---

## Resultado 2: `large-v3` sirve. El número es 0,917

Clase 8, contra el VTT oficial de OpenFING sobre el mismo audio:

| | cues | palabras | s/cue | habla |
| --- | --- | --- | --- | --- |
| OpenFING | 253 | 10 397 | 18,7 | 85 % |
| `large-v3` propio | 1456 | 10 383 | 3,4 | 88 % |

**Similitud por bolsa de palabras: 0,917** (contra 0,632 de `tiny`). El conteo
de palabras difiere en **14 sobre 10 397 — 0,13 %**.

Y el pasaje que `tiny` destrozaba sale bien:

> **OpenFING:** «…la ecuación de **Laplace** […] en **esféricas**, en
> coordenadas **esféricas**…»
> **`large-v3`:** «…la ecuación de **Laplace** […] en **esféricas**, en
> coordenadas **esféricas**…»

Parte del 8 % restante **no son errores**: `large-v3` normaliza disfluencias
(«las variables en... en esféricas» → «las variables en esféricas»). Es texto
distinto del oficial y en algunos casos mejor. El 0,917 es, por eso, una cota
inferior de la fidelidad real.

**Lo que el número NO dice:** nada sobre puntuación ni segmentación. Whisper
corta cada 3,4 s contra los 18,7 s de OpenFING —5× más fino—, así que las
métricas de `transcript.stats.json` **no son comparables entre procedencias**.
Es exactamente el problema que el ADR de procedencia tiene que dejar escrito.

### Sobre el "solape" no nulo

`integrar.js` reportó 7 / 1 / 3 solapes. **No es alucinación**: revisados los
finales de las tres clases, terminan naturalmente («dejamos por acá», «nos
vemos la semana que viene»). `detectarSolapeTextual` detecta subtitulado
*rolling*, y con cues de 3,4 s son coincidencias legítimas del docente
repitiéndose: 7 sobre 1456 es 0,5 %. El criterio de "debe dar 0" que estaba en
el plan era mio y estaba mal: esa función no mide lo que yo creía.

---

## Resultado 3: las dos clases que faltaban existen

| Clase | Segmentos | Palabras | Cómputo | Velocidad |
| --- | --- | --- | --- | --- |
| 8 (control) | 1456 | 10 383 | 169 s | 32,8× |
| **9** | 1229 | **12 027** | 195 s | 34,7× |
| **10** | 1055 | **9 446** | 148 s | 35,1× |

**21 473 palabras que no existían en ningún lado.** 512 s de GPU en total
(~8,5 min) para 3 h 19 min de audio: **~34× tiempo real**, el doble de lo que
estimé.

Los artefactos de las clases 9 y 10 están en `courses/ElecMag2024/Clases/`,
marcados con `transcriptionSource: asr` en `metadata.yaml` y con el bloque
`asr` completo en `manifest.json` (sha256 del audio, modelo, parámetros).

**La clase 8 se restauró a su versión oficial.** Al integrarla se le piso el
`transcript.txt` con el del ASR, lo que contaminaba el control: su
`summary.md` y `notes.tex` vienen del texto oficial. El VTT propio de la
clase 8 vive en `scripts/asr/control/`, que es su lugar.

---

## Costo real

| | USD |
| --- | --- |
| Pod 1 (community, descartado) | 0,028 |
| Pod 2 (secure, el que sirvió) | 0,127 |
| **Total** | **0,155** |

Quince centavos, y un tercio se fue en el pod que hubo que tirar por el
problema de transporte. Ambos borrados y confirmados con 404.

---

## Resultado 4: las notas de las clases 9 y 10

Producidas siguiendo `courses/ElecMag2024/CLAUDE.md`, igual que las de las
clases 4–8. Compilan con `tectonic` sin errores y **sin un solo `Overfull`**.

| | Clase 9 | Clase 10 |
| --- | --- | --- |
| Transcripción (ASR) | 12 027 palabras | 9 446 |
| Resumen | 3571 | 3047 |
| Ratio resumen/transcripción | 29,7 % | 32,3 % |
| Ecuaciones display | 26 | 23 |
| Figuras TikZ | 4 | 4 |
| Páginas del PDF | 14 | 13 |

El ratio es el dato que importa para la pregunta del experimento: la clase 8,
escrita desde el **VTT oficial**, dio 29,1 %. Las dos escritas desde ASR dan
29,7 % y 32,3 %. **El texto del ASR no obligó a resumir distinto.**

### La respuesta a «cuán complicado es»

Ninguna de las dificultades vino del ASR. Con `large-v3` la transcripción es
utilizable tal cual: no hubo un solo pasaje donde el texto fuera tan ambiguo
como para no poder reconstruir el razonamiento. Los problemas que sí aparecieron
son los de siempre al componer figuras, y ya están catalogados en el
`CLAUDE.md` de Física III §6.5.

El único rastro real del ASR fueron errores de vocabulario aislados y fáciles de
corregir en silencio (*«macrópica»* → macroscópica), exactamente lo que
`courses/ElecMag2024/CLAUDE.md` §2.1 ya anticipaba para las transcripciones
oficiales.

### Lo que costó de verdad: las figuras

**Compilar sin errores no es garantía de nada.** Las ocho figuras compilaron
limpias en el primer intento y **cinco tenían colisiones de rótulos** que sólo
se ven leyendo el PDF:

- texto explicativo cayendo **encima** de los dipolos del condensador;
- `ê_r` y `n̂ = -ê_r` dibujados en el mismo ángulo, con los rótulos superpuestos
  hasta ser ilegibles (nacen del mismo punto y en la misma recta: hay que
  separarlos angularmente aunque la colinealidad sea real);
- cinco anclajes de condiciones de borde amontonados sobre un cilindro,
  pisándose entre sí **y** duplicando la tabla que estaba tres párrafos más
  abajo.

Y un error de coherencia que sólo aparece releyendo: al sacar los anclajes de esa
figura, su `\caption` siguió diciendo «cinco condiciones ancladas».

**El patrón que se repitió:** poner prosa explicativa dentro de la figura *y* en
el `\caption`. Además de redundante, la prosa interna era la que competía por el
espacio con los rótulos. La regla que salió de acá: **la figura muestra, el
caption explica**; adentro sólo van rótulos y anotaciones cortas.

### Costo comparado

El ASR fueron 512 segundos de GPU y USD 0,155 por tres clases. La composición de
dos clases fue el grueso del trabajo, y dentro de ella la mayor parte se fue en
la verificación visual de las figuras, no en el texto.

**Conclusión provisional:** terminar lo que OpenFING no hizo es perfectamente
viable, y el cuello de botella **no es la transcripción**. Con `large-v3` el
insumo alcanza. Lo caro es lo mismo que ya era caro en las otras 27 clases.

## Pendiente

- [x] ~~Autenticación de RunPod.~~
- [x] ~~Run real: `large-v3`, float16, clases 8/9/10.~~
- [x] ~~`comparar.js` sobre la clase 8 → **0,917**.~~
- [x] ~~`integrar.js --write` → clases 9 y 10 marcadas como `asr`.~~
- [ ] Notas de la clase 8 por las dos vías, mismo prompt → medición 2.
- [x] ~~Notas de las clases 9 y 10.~~
- [ ] Costo y tiempo reales del pod; `delete-pod` y `get-billing`.

## Mediciones (se completa a medida que salen)

| Métrica | Valor |
| --- | --- |
| Similitud ASR vs oficial, clase 8, 90 s, `tiny` | **0,632** |
| Similitud ASR vs oficial, clase 8 completa, `large-v3` | **0,917** |
| Velocidad `tiny` int8 CPU (4 núcleos) | **14,7× tiempo real** |
| Velocidad `large-v3` fp16 GPU (RTX 4090) | **~34× tiempo real** |
| Costo total de los pods | **USD 0,155** |
| Ratio resumen/transcripción, VTT oficial (clase 8) | **29,1 %** |
| Ratio resumen/transcripción, ASR (clases 9 y 10) | **29,7 %** y **32,3 %** |
| Figuras con colisiones detectadas al leer el PDF | **5 de 8** |
