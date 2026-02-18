#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8080}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

printf 'Iniciando H&R Soluciones en http://localhost:%s\n' "$PORT"
printf 'Presiona Ctrl+C para detener el servidor.\n'

python3 -m http.server "$PORT" --directory "$ROOT_DIR"
