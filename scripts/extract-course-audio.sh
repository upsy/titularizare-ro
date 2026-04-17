#!/usr/bin/env bash
# Download course recordings from Google Drive and extract MP3 audio.
#
# Prerequisites:
#   - gdown (pip install gdown)
#   - ffmpeg in PATH
#   - jq (for parsing JSON)
#   - Fill scripts/drive-mapping.json with the Drive file IDs
#
# Usage: bash scripts/extract-course-audio.sh
# Idempotent: skips dates whose MP3 already exists.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
MAPPING_FILE="$SCRIPT_DIR/drive-mapping.json"
OUTPUT_DIR="$ROOT_DIR/public/audio/lectii/original"
TMP_DIR="${TMPDIR:-/tmp}/titularizare-drive"

for cmd in gdown ffmpeg jq; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "error: '$cmd' not found in PATH" >&2
    exit 1
  fi
done

mkdir -p "$OUTPUT_DIR" "$TMP_DIR"

dates=$(jq -r '.mapping | keys[]' "$MAPPING_FILE")

for date in $dates; do
  file_id=$(jq -r ".mapping[\"$date\"]" "$MAPPING_FILE")
  mp3_path="$OUTPUT_DIR/$date.mp3"

  if [[ -z "$file_id" ]]; then
    echo "skip $date: no Drive file ID in mapping"
    continue
  fi

  if [[ -f "$mp3_path" ]]; then
    echo "skip $date: $mp3_path already exists"
    continue
  fi

  video_path="$TMP_DIR/$date.video"
  echo "download $date from Drive file $file_id"
  gdown "https://drive.google.com/uc?id=$file_id" -O "$video_path"

  echo "extract $date MP3"
  ffmpeg -y -loglevel error -i "$video_path" \
    -vn -ac 1 -ar 22050 -c:a libmp3lame -b:a 64k \
    "$mp3_path"

  rm -f "$video_path"
  echo "done $date: $(du -h "$mp3_path" | cut -f1)"
done

echo "all done — MP3s in $OUTPUT_DIR"
