#!/usr/bin/env python3
"""
transcribir.py — lo unico que corre en el pod.

Lee `clases.json` (lo genera `lote.js` en frio, local), baja cada .mp4, extrae
el audio, lo transcribe con faster-whisper y emite un .vtt por clase.

    python3 transcribir.py --lote clases.json --salida trabajo/ --modelo large-v3

Decisiones que valen la pena explicar:

- **El .wav de 16 kHz mono es el ancla de procedencia.** Su sha256 es
  determinista dados estos parametros de ffmpeg, y es barato de verificar.
  Hashear el .mp4 obligaria a bajar 1,13 GB cada vez que alguien quiera
  comprobar de donde salio una transcripcion.

- **Escribe cada segmento apenas sale** a un .jsonl, con flush. Whisper tarda
  ~15 min sobre 3 h de audio; si el pod se cae a la mitad, lo hecho queda. El
  .jsonl ademas es el log de progreso: `tail -f` muestra el avance real.

- **`condition_on_previous_text=False`.** Whisper condicionado al texto previo
  entra en loops de repeticion: cuando alucina una frase, la sigue repitiendo
  porque se condiciona a si mismo. Apagarlo cuesta algo de coherencia y evita
  el modo de falla que arruina una clase entera.

- **Descarga secuencial y con el User-Agent del extractor.** OpenFING es un
  servidor universitario; bajarle 2 GB en paralelo desde un datacenter es feo.
  El UA lleva contacto, igual que en `scripts/extractor/openfing.js`.

- **Reanuda a nivel de clase**: si el .vtt ya esta, la salta. Correrlo dos
  veces no re-transcribe nada.
"""

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path

# El mismo que usa scripts/extractor/openfing.js. Lleva contacto a proposito.
USER_AGENT = (
    "fingers-extractor/1.0 "
    "(+https://github.com/leomenini; contacto via repo)"
)


def log(msg):
    """Salida sin buffer: en el pod se mira con stream-pod-logs."""
    print(msg, flush=True)


def sha256_de(ruta, bloque=1 << 20):
    h = hashlib.sha256()
    with open(ruta, "rb") as f:
        for chunk in iter(lambda: f.read(bloque), b""):
            h.update(chunk)
    return h.hexdigest()


def hhmmss_ms(seg):
    """segundos -> '00:01:23.456', el formato de timestamp de WebVTT."""
    if seg < 0:
        seg = 0.0
    h = int(seg // 3600)
    m = int((seg % 3600) // 60)
    s = seg % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}"


def bajar(url, destino):
    """curl con reanudacion. Devuelve bytes finales."""
    if destino.exists() and destino.stat().st_size > 0:
        log(f"    .mp4 ya estaba ({destino.stat().st_size / 1e6:.0f} MB)")
        return destino.stat().st_size
    t0 = time.time()
    subprocess.run(
        ["curl", "-fL", "--no-progress-meter", "--retry", "3", "--retry-delay", "2",
         "-C", "-", "-A", USER_AGENT, "-o", str(destino), url],
        check=True,
    )
    n = destino.stat().st_size
    log(f"    bajado {n / 1e6:.0f} MB en {time.time() - t0:.0f} s")
    return n


def extraer_audio(mp4, wav):
    """
    16 kHz mono PCM: es lo que Whisper consume internamente, asi que
    convertir aca evita que lo haga el modelo y hace el hash determinista.
    """
    if wav.exists() and wav.stat().st_size > 0:
        log("    .wav ya estaba")
        return
    subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
         "-i", str(mp4), "-vn", "-ac", "1", "-ar", "16000",
         "-c:a", "pcm_s16le", str(wav)],
        check=True,
    )
    log(f"    audio {wav.stat().st_size / 1e6:.0f} MB")


def escribir_vtt(segmentos, destino):
    with open(destino, "w", encoding="utf8") as f:
        f.write("WEBVTT\n\n")
        for i, s in enumerate(segmentos, 1):
            texto = s["text"].strip()
            if not texto:
                continue
            f.write(f"{i}\n")
            f.write(f"{hhmmss_ms(s['start'])} --> {hhmmss_ms(s['end'])}\n")
            f.write(f"{texto}\n\n")


def transcribir_clase(modelo, clase, dirs, params):
    n = clase["n"]
    vtt = dirs["vtt"] / f"clase{n:02d}.vtt"
    if vtt.exists():
        log(f"  clase {n}: .vtt ya existe, se salta")
        return None

    log(f"  clase {n}: {clase['mp4']}")
    mp4 = dirs["tmp"] / f"clase{n:02d}.mp4"
    wav = dirs["tmp"] / f"clase{n:02d}.wav"

    # Si el .wav ya esta, no hay nada que bajar: es el unico insumo que el
    # modelo consume. Reintentar una clase no debe rebajar 1,1 GB.
    if wav.exists() and wav.stat().st_size > 0:
        log("    .wav ya estaba: se saltan descarga y extraccion")
    else:
        bajar(clase["mp4"], mp4)
        extraer_audio(mp4, wav)
        # El .mp4 no hace falta mas: son 1,1 GB por clase y el pod tiene disco
        # acotado. El .wav es lo que se hashea y lo que consume el modelo.
        mp4.unlink(missing_ok=True)

    audio_sha = sha256_de(wav)
    log(f"    sha256(audio) = {audio_sha}")

    jsonl = dirs["jsonl"] / f"clase{n:02d}.jsonl"
    segmentos = []
    t0 = time.time()

    iterador, info = modelo.transcribe(str(wav), **params)
    duracion = getattr(info, "duration", clase.get("duracionSeg") or 0)
    log(f"    duracion detectada: {duracion:.0f} s · idioma: {info.language}")

    with open(jsonl, "w", encoding="utf8") as f:
        for s in iterador:
            reg = {"start": s.start, "end": s.end, "text": s.text}
            segmentos.append(reg)
            f.write(json.dumps(reg, ensure_ascii=False) + "\n")
            f.flush()  # el checkpoint no sirve si se queda en el buffer
            if len(segmentos) % 25 == 0:
                transcurrido = time.time() - t0
                avance = s.end / duracion if duracion else 0
                eta = transcurrido / avance - transcurrido if avance > 0.01 else 0
                log(
                    f"    {len(segmentos):4d} seg · {avance * 100:5.1f}% · "
                    f"{transcurrido:5.0f}s transcurridos · ETA {eta:5.0f}s"
                )

    escribir_vtt(segmentos, vtt)
    tardanza = time.time() - t0
    palabras = sum(len(s["text"].split()) for s in segmentos)
    log(
        f"  clase {n}: LISTA · {len(segmentos)} segmentos · {palabras} palabras "
        f"· {tardanza:.0f} s ({duracion / tardanza:.1f}x tiempo real)"
    )

    wav.unlink(missing_ok=True)
    return {
        "clase": n,
        "mp4Url": clase["mp4"],
        "audioSha256": audio_sha,
        "segmentos": len(segmentos),
        "palabras": palabras,
        "duracionSeg": duracion,
        "idiomaDetectado": info.language,
        "segundosDeComputo": round(tardanza, 1),
        "factorTiempoReal": round(duracion / tardanza, 2) if tardanza else None,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lote", default="clases.json")
    ap.add_argument("--salida", default="trabajo")
    ap.add_argument("--modelo", default="large-v3")
    ap.add_argument("--compute-type", default="float16",
                    help="float16 en GPU; int8 para probar en CPU")
    ap.add_argument("--device", default="auto")
    ap.add_argument("--beam-size", type=int, default=5)
    ap.add_argument("--clases", default="",
                    help="subconjunto: '8,9'. Vacio = todas las del lote")
    args = ap.parse_args()

    lote = json.loads(Path(args.lote).read_text(encoding="utf8"))
    clases = lote["clases"]
    if args.clases:
        querido = {int(x) for x in args.clases.split(",") if x.strip()}
        clases = [c for c in clases if c["n"] in querido]
    if not clases:
        log("no hay clases que hacer")
        return 1

    raiz = Path(args.salida)
    dirs = {
        "vtt": raiz / "vtt",
        "jsonl": raiz / "jsonl",
        "tmp": raiz / "tmp",
    }
    for d in dirs.values():
        d.mkdir(parents=True, exist_ok=True)

    for prog in ("ffmpeg", "curl"):
        if not shutil.which(prog):
            log(f"falta {prog} en el PATH")
            return 1

    from faster_whisper import WhisperModel

    log(f"cargando {args.modelo} ({args.device}, {args.compute_type})...")
    t0 = time.time()
    modelo = WhisperModel(args.modelo, device=args.device,
                          compute_type=args.compute_type)
    log(f"modelo cargado en {time.time() - t0:.0f} s")

    params = dict(
        language="es",
        beam_size=args.beam_size,
        vad_filter=True,
        # Sin esto Whisper se condiciona a su propia alucinacion y repite la
        # misma frase hasta el final del audio.
        condition_on_previous_text=False,
    )

    resultados = []
    for c in clases:
        try:
            r = transcribir_clase(modelo, c, dirs, params)
            if r:
                resultados.append(r)
        except Exception as e:  # una clase que falla no tira las otras
            log(f"  clase {c['n']}: ERROR {type(e).__name__}: {e}")
            resultados.append({"clase": c["n"], "error": str(e)})

    salida = {
        "curso": lote.get("curso"),
        "modelo": args.modelo,
        "computeType": args.compute_type,
        "beamSize": args.beam_size,
        "vadFilter": True,
        "conditionOnPreviousText": False,
        "generadoEn": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "clases": resultados,
    }
    (raiz / "resultado.json").write_text(
        json.dumps(salida, ensure_ascii=False, indent=2), encoding="utf8"
    )
    log(f"\nresultado.json escrito. {len(resultados)} clase(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
