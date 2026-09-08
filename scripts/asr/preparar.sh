#!/usr/bin/env bash
# preparar.sh — bootstrap del pod. Se corre UNA vez, apenas arranca.
#
#   bash preparar.sh [modelo]        # modelo por defecto: large-v3
#
# Existe para que el tiempo de GPU no se gaste debugueando instalaciones. Todo
# lo que este script hace es previsible y se puede leer en frio; cuando termina,
# `transcribir.py` corre sin sorpresas.
#
# Lo mas importante que hace es **bajar el modelo antes de transcribir**. Si no,
# la primera clase paga la descarga de ~3 GB de pesos y el log parece colgado.

set -euo pipefail

MODELO="${1:-large-v3}"

echo "==> sistema"
if ! command -v ffmpeg >/dev/null 2>&1; then
  apt-get update -qq && apt-get install -y -qq ffmpeg
fi
for prog in ffmpeg curl python3; do
  command -v "$prog" >/dev/null || { echo "falta $prog"; exit 1; }
done
ffmpeg -version | head -1

echo "==> GPU"
# Si esto no muestra nada, se esta por transcribir en CPU sin querer: son
# horas en vez de minutos. Mejor enterarse ahora.
nvidia-smi --query-gpu=name,memory.total,driver_version --format=csv,noheader \
  || echo "SIN GPU VISIBLE — revisar antes de seguir"

echo "==> dependencias python"
pip install --quiet --upgrade pip
pip install --quiet faster-whisper

echo "==> descarga del modelo ($MODELO)"
python3 - "$MODELO" <<'PY'
import sys, time
from faster_whisper import WhisperModel
t0 = time.time()
# Instanciarlo fuerza la descarga de los pesos y deja el cache caliente.
WhisperModel(sys.argv[1], device="auto", compute_type="float16")
print(f"modelo listo en {time.time() - t0:.0f} s", flush=True)
PY

echo "==> disco"
df -h . | tail -1

echo
echo "listo. ahora:"
echo "  python3 transcribir.py --lote clases.json --salida trabajo --modelo $MODELO"
