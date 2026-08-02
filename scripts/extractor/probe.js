#!/usr/bin/env node
/**
 * probe.js — descubrimiento de red + extractor v0 para OpenFING
 *
 *   npm i playwright && npx playwright install chromium
 *   node probe.js https://open.fing.edu.uy/courses/civ/9/ ./out
 *
 * Qué hace:
 *   1. Abre la clase en Chromium headless.
 *   2. Bloquea media/imagen/fuente (no baja el mp4 de 90 min).
 *   3. Escucha TODAS las respuestas de red y guarda las que parecen
 *      transcripción (vtt/srt/json/texto).
 *   4. Extrae metadatos de los meta tags del HTML.
 *   5. Como fallback, saca el texto del DOM ya renderizado.
 *   6. Escribe manifest.json con url, fecha, sha256 y tamaño de cada payload.
 *
 * La primera corrida contesta la pregunta que veníamos postergando:
 * si en netlog.json aparece un .vtt o un .json de transcripción,
 * el extractor definitivo puede ser fetch puro y esto se descarta.
 */

import { chromium } from 'playwright';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const [, , url, outDirArg] = process.argv;
if (!url) {
  console.error('uso: node probe.js <url-de-la-clase> [dir-salida]');
  process.exit(1);
}
const outDir = outDirArg ?? './out';

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');

// Heurística: ¿esta respuesta puede ser la transcripción?
// Ancha a propósito — en el primer run preferís falsos positivos
// a perderte el endpoint bueno.
function pareceTranscripcion(resUrl, contentType) {
  const u = resUrl.toLowerCase();
  const ct = (contentType ?? '').toLowerCase();
  if (/\.(vtt|srt|ass|json|txt|xml)(\?|$)/.test(u)) return true;
  if (/(transcri|caption|subtitle|subtitulo|track|cue)/.test(u)) return true;
  if (/(text\/vtt|application\/json|text\/plain|text\/xml)/.test(ct)) return true;
  return false;
}

const netlog = [];      // TODO el tráfico, para inspección manual
const capturas = [];    // solo los candidatos, guardados a disco

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();

// Cortesía + velocidad: nada de video, imágenes ni fuentes.
await page.route('**/*', (route) => {
  const tipo = route.request().resourceType();
  if (['media', 'image', 'font'].includes(tipo)) return route.abort();
  return route.continue();
});

page.on('response', async (res) => {
  const resUrl = res.url();
  const ct = res.headers()['content-type'] ?? '';
  const entrada = { url: resUrl, status: res.status(), contentType: ct };

  if (!pareceTranscripcion(resUrl, ct)) {
    netlog.push(entrada);
    return;
  }

  try {
    const buf = await res.body();
    entrada.bytes = buf.length;
    entrada.sha256 = sha256(buf);
    // nombre de archivo derivado del hash: idempotente entre corridas
    const nombre = `payload-${entrada.sha256.slice(0, 12)}`;
    entrada.archivo = nombre;
    capturas.push({ ...entrada, buf });
  } catch (e) {
    entrada.error = String(e);
  }
  netlog.push(entrada);
});

console.log(`→ ${url}`);
await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });

// Damos margen a que el JS pinte la transcripción.
// Si tras esto sigue diciendo "Cargando transcripción...", el mecanismo
// es otro y hay que mirar netlog.json a mano.
await page.waitForTimeout(5_000);

// --- metadatos que el HTML sirve gratis ---
const meta = await page.evaluate(() => {
  const m = (prop) =>
    document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`)
      ?.content ?? null;
  return {
    title: document.title,
    ogTitle: m('og:title'),
    ogVideo: m('og:video'),
    ogDescription: m('og:description'),
    duration: m('og:video:duration') ?? m('video:duration'),
  };
});

// --- fallback: texto del DOM renderizado ---
const domTexto = await page.evaluate(() => {
  // ajustá el selector cuando sepas cuál es el contenedor real
  const cands = document.querySelectorAll('ol li, .transcript, [class*="transcri"]');
  return Array.from(cands).map((el) => el.textContent.trim()).filter(Boolean);
});

await browser.close();

// --- escritura ---
await mkdir(outDir, { recursive: true });

for (const c of capturas) {
  await writeFile(join(outDir, c.archivo), c.buf);
  delete c.buf;
}

if (domTexto.length) {
  await writeFile(join(outDir, 'dom-fallback.txt'), domTexto.join('\n'), 'utf8');
}

await writeFile(
  join(outDir, 'netlog.json'),
  JSON.stringify(netlog, null, 2),
  'utf8',
);

const manifest = {
  url,
  extractedAt: new Date().toISOString(),
  extractorVersion: '0.1.0',
  meta,
  payloads: capturas.map(({ url, contentType, bytes, sha256, archivo }) => ({
    url, contentType, bytes, sha256, archivo,
  })),
  domFallbackLineas: domTexto.length,
};
await writeFile(
  join(outDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf8',
);

console.log(`\ncandidatos guardados: ${capturas.length}`);
for (const c of capturas) {
  console.log(`  ${c.archivo}  ${c.bytes}B  ${c.contentType}  ${c.url}`);
}
console.log(`fallback DOM: ${domTexto.length} líneas`);
console.log(`requests totales: ${netlog.length}  →  ${outDir}/netlog.json`);
