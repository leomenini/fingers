# Plan de Hardening, Robustez y Generalización de la Documentación

Este documento detalla las tareas identificadas y ejecutadas para mejorar la robustez técnica del módulo extractor frente a fallos de red, compatibilidad multiplataforma y robustez al escribir archivos, así como la posterior limpieza y generalización de la documentación.

---

## Parte 1: Hardening y Robustez

### 1. Detección agnóstica de CLI en Windows e Importación Programática
- **Estado:** Completado.
- **Cambio:** Se reemplazó la comparación directa de strings `import.meta.url === \`file://\${process.argv[1]}\`` por `process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href` en `vtt.js`, `fetch.js`, y `diff-oraculo.js`. Esto evita fallos en Windows (donde las barras son invertidas `\`) y previene excepciones `TypeError` al importar los módulos programáticamente cuando `process.argv[1]` es `undefined`.

### 2. Control de Tiempos de Espera (Timeout) en Fetch
- **Estado:** Completado.
- **Cambio:** Se integró `AbortSignal.timeout(15000)` en `bajarTexto` dentro de `openfing.js` para asegurar que las llamadas fetch no se queden colgadas indefinidamente en malas conexiones de red.

### 3. User-Agent Desacoplado y Configurable
- **Estado:** Completado.
- **Cambio:** Se parametrizó el User-Agent exportando la variable modificable `USER_AGENT` en `openfing.js`, desacoplándolo de la cuenta individual de GitHub del creador original por defecto.

### 4. Escritura Atómica de Archivos en `fetch.js`
- **Estado:** Completado.
- **Cambio:** Se implementó la escritura atómica escribiendo a un archivo temporal (`.${nombre}.tmp.${Date.now()}`) y renombrándolo atómicamente (`rename`), previniendo que una interrupción brusca (como `Ctrl+C`) deje archivos de transcripción o metadatos corruptos o vacíos.

---

## Parte 2: Generalización de la Documentación

### 5. Sanitizar `CLAUDE.md` de la raíz
- **Estado:** Completado.
- **Cambio:** Se reemplazaron referencias absolutas/personales del desarrollador host (`~/Desktop/Files/Transcripciones` y `~/Desktop/Files/respaldo-fingers-borrados/`) por explicaciones genéricas y rutas relativas.

### 6. Sanitizar `scripts/extractor/README.md`
- **Estado:** Completado.
- **Cambio:** Se cambiaron los comandos con rutas absolutas a rutas relativas estándares (ej. `../respaldo-fingers-borrados/`).

### 7. Sanitizar `docs/log.md` y `SESIONES.md`
- **Estado:** Completado.
- **Cambio:** Se sanitizaron los registros históricos para eliminar la dependencia de rutas absolutas de usuario en el host local.

---

## Parte 3: Catálogo de Errores Comunes y Gotchas Identificados

A continuación se resumen los errores técnicos comunes y trampas de scraping/parsing encontradas en la plataforma OpenFING y el pipeline de extracción:

1. **HTML Minificado y Atributos sin Comillas:**
   - *Problema:* El HTML servido por OpenFING viene minificado y frecuentemente omite comillas en atributos HTML (`href=/courses/civ/1/`, `class=clase-enlace`).
   - *Solución:* Todos los patrones `RegExp` en `openfing.js` tratan las comillas como opcionales (`['"]?`).

2. **Enlaces de Navegación del Índice:**
   - *Problema:* El HTML del índice incluye links a otros cursos antes de listar las clases. Regex ingenuos que buscan `href` sin calificar terminan asociando el link del menú a la Clase 1.
   - *Solución:* Se anclan las expresiones regulares explícitamente en `class=clase-enlace`.

3. **Trampa del VTT de Miniaturas (`_thumbnails.vtt`):**
   - *Problema:* Existe un archivo WebVTT válido que referencia sprites JPG (`.jpg#xywh=...`). Un parser WebVTT estándar lo procesa sin arrojar advertencias.
   - *Solución:* Se valida el contenido en `vtt.js` (`validarTranscripcion`) para confirmar que contiene texto de transcripción real y no coordenadas de imágenes.

4. **Incompatibilidad de Rutas en Windows (CLI check):**
   - *Problema:* La comparación de URL estilo `file://` con `process.argv[1]` en Windows falla debido al separador de ruta `\`.
   - *Solución:* Usar `pathToFileURL(process.argv[1]).href`.

5. **Llamadas Fetch Colgadas por Red Inestable:**
   - *Problema:* Peticiones HTTP a OpenFING se congelaban indefinidamente sin rechazar ni resolver.
   - *Solución:* AbortSignal con timeout estricto de 15 segundos en `openfing.js`.

6. **Interrupción de Escritura de Archivos (Falta de Atomicidad):**
   - *Problema:* Interrumpir el proceso con `Ctrl+C` podía dejar archivos `.txt` o `.json` a medio escribir o vacíos en el disco.
   - *Solución:* Escritura atómica a través de un archivo `.tmp` intermedio seguido de `fs.rename`.
