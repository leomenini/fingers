#!/usr/bin/env bash
# prefetch.sh — baja los .mp4 y los deja convertidos a .wav, para que
# `transcribir.py` no gaste tiempo de GPU descargando.
#
#   bash prefetch.sh clases.json trabajo/tmp [conexiones]
#
# **Por que existe.** Medido el 2026-09-08 desde un pod en EU-CZ-1: OpenFING
# limita a ~275 KB/s **por conexion**, no en total. Cuatro conexiones dan
# ~1,1 MB/s. Con una sola, bajar las tres clases son 2,7 h con la GPU parada
# (y pagandose); con cuatro, ~40 min.
#
# Cuatro es un techo deliberado: es lo que abre cualquier navegador o gestor
# de descargas, y OpenFING es un servidor universitario. La idea es no
# desperdiciar tiempo de GPU, no exprimirles el ancho de banda.
#
# Deja el .wav donde transcribir.py lo espera; ese script ya salta la descarga
# si el .wav esta, asi que las dos etapas se combinan solas.

set -euo pipefail

LOTE="${1:-clases.json}"
DESTINO="${2:-trabajo/tmp}"
CONEXIONES="${3:-4}"
UA="fingers-extractor/1.0 (+https://github.com/leomenini; contacto via repo)"

mkdir -p "$DESTINO"

# chr(9) en vez de "\t" y concatenacion en vez de f-string: las comillas
# escapadas dentro de una expresion f-string, pasando por bash Y por ssh,
# fallaban en silencio y el bucle corria cero veces.
mapfile -t ENTRADAS < <(python3 -c '
import json, sys
for c in json.load(open(sys.argv[1]))["clases"]:
    print(str(c["n"]) + chr(9) + c["mp4"])
' "$LOTE")

if [ "${#ENTRADAS[@]}" -eq 0 ]; then
  echo "no pude leer ninguna clase de $LOTE" >&2
  exit 1
fi

for entrada in "${ENTRADAS[@]}"; do
  n="${entrada%%$'\t'*}"
  url="${entrada#*$'\t'}"
  nn=$(printf '%02d' "$n")
  wav="$DESTINO/clase$nn.wav"
  mp4="$DESTINO/clase$nn.mp4"

  if [ -s "$wav" ]; then
    echo "clase $n: .wav ya esta, se salta"
    continue
  fi

  total=$(curl -sI -A "$UA" "$url" | tr -d '\r' | awk '/^[Cc]ontent-[Ll]ength:/{print $2}')
  if [ -z "${total:-}" ]; then
    echo "clase $n: no pude leer Content-Length, bajo en una sola conexion"
    curl -s --no-progress-meter -A "$UA" -o "$mp4" "$url"
  else
    echo "clase $n: $((total/1000000)) MB en $CONEXIONES conexiones"
    t0=$(date +%s)
    trozo=$(( (total + CONEXIONES - 1) / CONEXIONES ))
    pids=()
    for ((i=0; i<CONEXIONES; i++)); do
      ini=$(( i * trozo ))
      fin=$(( ini + trozo - 1 ))
      [ "$fin" -ge "$total" ] && fin=$(( total - 1 ))
      [ "$ini" -gt "$fin" ] && continue
      curl -s --no-progress-meter --retry 3 --retry-delay 2 -A "$UA" \
        -r "$ini-$fin" -o "$mp4.part$i" "$url" &
      pids+=($!)
    done
    for p in "${pids[@]}"; do wait "$p"; done

    cat "$mp4".part* > "$mp4"
    rm -f "$mp4".part*
    real=$(stat -c%s "$mp4")
    if [ "$real" != "$total" ]; then
      echo "clase $n: ERROR tamano $real != $total esperado"
      rm -f "$mp4"
      continue
    fi
    t1=$(date +%s)
    echo "clase $n: bajado en $((t1-t0)) s ($(( total / (t1-t0+1) / 1000 )) KB/s)"
  fi

  ffmpeg -hide_banner -loglevel error -y -i "$mp4" -vn -ac 1 -ar 16000 \
    -c:a pcm_s16le "$wav"
  rm -f "$mp4"   # 1,1 GB por clase; el .wav es lo unico que hace falta
  echo "clase $n: wav $(stat -c%s "$wav" | awk '{printf "%.0f MB", $1/1000000}') · sha256 $(sha256sum "$wav" | cut -c1-16)…"
done

echo
echo "prefetch listo:"
ls -la "$DESTINO"/*.wav 2>/dev/null || echo "  (ningun wav)"
