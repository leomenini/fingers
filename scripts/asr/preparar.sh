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
# Ubuntu 24.04 marca el Python del sistema como "externally managed" (PEP 668)
# y pip se niega a instalar sin esto. El pod es efimero y de un solo uso, asi
# que romper los paquetes del sistema no tiene consecuencias; armar un venv
# solo agregaria un paso mas que puede fallar.
PIP_FLAGS="--quiet --break-system-packages"
pip install $PIP_FLAGS --upgrade pip || PIP_FLAGS="--quiet"
pip install $PIP_FLAGS faster-whisper

# ctranslate2 4.x (el motor de faster-whisper) enlaza contra cuDNN 9 y NO lo
# trae. La imagen de PyTorch sí lo tiene, pero dentro de site-packages, fuera
# del linker path: sin esto el modelo carga y revienta con
# "libcudnn_ops.so.9: cannot open shared object file" recien al transcribir.
# Se resuelve una vez y se deja escrito en env.sh para que transcribir.py lo
# herede.
echo "==> cuDNN en el linker path"
# `nvidia.cudnn` es un NAMESPACE package: no tiene __file__ (da None), asi que
# hay que preguntarle al spec por sus rutas de busqueda. Si eso falla, se
# busca el .so a mano.
CUDNN_DIR="$(python3 - <<'PY' 2>/dev/null || true
import importlib.util, os
spec = importlib.util.find_spec("nvidia.cudnn")
for base in (spec.submodule_search_locations or []) if spec else []:
    lib = os.path.join(base, "lib")
    if os.path.isdir(lib):
        print(lib)
        break
PY
)"
if [ -z "${CUDNN_DIR:-}" ]; then
  CUDNN_DIR="$(dirname "$(find / -name 'libcudnn_ops*.so*' -print -quit 2>/dev/null)" 2>/dev/null || true)"
  [ "$CUDNN_DIR" = "." ] && CUDNN_DIR=""
fi
if [ -n "${CUDNN_DIR:-}" ] && [ -d "$CUDNN_DIR" ]; then
  echo "export LD_LIBRARY_PATH=\"$CUDNN_DIR:\${LD_LIBRARY_PATH:-}\"" > env.sh
  echo "    $CUDNN_DIR"
else
  : > env.sh
  echo "    no hay nvidia.cudnn en site-packages; se confia en el del sistema"
fi
# shellcheck disable=SC1091
. ./env.sh

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
echo "  . ./env.sh && python3 transcribir.py --lote clases.json --salida trabajo --modelo $MODELO"
