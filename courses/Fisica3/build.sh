#!/usr/bin/env bash
# build.sh — compila los notes.tex del curso a PDF con tectonic (builder canónico).
#
# Uso:
#   ./build.sh              # compila TODAS las ClaseN
#   ./build.sh 1 5 14       # compila sólo Clase1, Clase5, Clase14
#
# Cada PDF queda in situ en ClaseN/notes.pdf. tectonic no deja .aux/.log.
# (El snapshot iter1 del usuario en " PDFiter1/" NO se toca.)
set -uo pipefail

# --- localizar tectonic (PATH o ~/.local/bin) ---
if command -v tectonic >/dev/null 2>&1; then
  TEC="tectonic"
elif [ -x "$HOME/.local/bin/tectonic" ]; then
  TEC="$HOME/.local/bin/tectonic"
else
  echo "ERROR: no encuentro 'tectonic' (ni en PATH ni en ~/.local/bin)." >&2
  echo "  Instalar: curl --proto '=https' --tlsv1.2 -fsSL https://drop-sh.fullyjustified.net | sh" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# --- lista de clases: args, o todas ordenadas naturalmente ---
if [ "$#" -gt 0 ]; then
  CLASSES=("$@")
else
  mapfile -t CLASSES < <(for d in "$ROOT"/Clases/Clase*/; do n="${d%/}"; echo "${n##*/Clase}"; done | sort -n)
fi

fail=0
for N in "${CLASSES[@]}"; do
  dir="$ROOT/Clases/Clase$N"
  if [ ! -f "$dir/notes.tex" ]; then
    echo "SKIP Clase$N (no existe notes.tex)"; continue
  fi
  # compilar desde el dir de la clase para que \input{../assets/...} resuelva
  if ( cd "$dir" && "$TEC" -X compile notes.tex >/dev/null 2>".build.log" ); then
    sz=$(stat -c%s "$dir/notes.pdf" 2>/dev/null || echo '?')
    printf 'OK   Clase%-3s -> notes.pdf (%s bytes)\n' "$N" "$sz"
    rm -f "$dir/.build.log"
  else
    echo "FAIL Clase$N — cola del log:"
    tail -4 "$dir/.build.log" 2>/dev/null | sed 's/^/     /'
    fail=1
  fi
done
exit $fail
