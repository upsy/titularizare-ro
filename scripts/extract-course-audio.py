#!/usr/bin/env python3
"""Download course recordings from Google Drive and extract MP3 audio.

Reads scripts/drive-mapping.json and for each date with a non-empty
Drive file ID, downloads the video to a temp path, extracts mono 64kbps
MP3 to public/audio/lectii/original/{date}.mp3 with ffmpeg, then deletes
the video. Idempotent: skips dates whose MP3 already exists.

Requires: gdown, ffmpeg in PATH.
"""

import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAPPING = ROOT / "scripts" / "drive-mapping.json"
OUTPUT_DIR = ROOT / "public" / "audio" / "lectii" / "original"
TMP_DIR = Path(tempfile.gettempdir()) / "titularizare-drive"


def resolve_ffmpeg() -> str:
    """Prefer imageio-ffmpeg's bundled binary (ships with libmp3lame)."""
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        if shutil.which("ffmpeg") is None:
            sys.exit("error: install imageio-ffmpeg (pip) or put ffmpeg with libmp3lame in PATH")
        return "ffmpeg"


def main() -> None:
    if shutil.which("gdown") is None:
        sys.exit("error: 'gdown' not found in PATH (pip install gdown)")
    ffmpeg = resolve_ffmpeg()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    TMP_DIR.mkdir(parents=True, exist_ok=True)

    data = json.loads(MAPPING.read_text(encoding="utf-8"))
    mapping = data["mapping"]

    for date in sorted(mapping):
        file_id = mapping[date].strip()
        mp3 = OUTPUT_DIR / f"{date}.mp3"

        if not file_id:
            print(f"skip {date}: no Drive file ID")
            continue
        if mp3.exists():
            print(f"skip {date}: {mp3.name} already exists")
            continue

        video = TMP_DIR / f"{date}.video"
        print(f"download {date} from Drive file {file_id}")
        subprocess.run(
            ["gdown", f"https://drive.google.com/uc?id={file_id}", "-O", str(video)],
            check=True,
        )

        print(f"extract {date} MP3")
        subprocess.run(
            [
                ffmpeg, "-y", "-loglevel", "error",
                "-i", str(video),
                "-vn", "-ac", "1", "-ar", "22050",
                "-c:a", "libmp3lame", "-b:a", "64k",
                str(mp3),
            ],
            check=True,
        )

        video.unlink(missing_ok=True)
        size_mb = mp3.stat().st_size / (1024 * 1024)
        print(f"done {date}: {size_mb:.1f} MB")

    print(f"all done — MP3s in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
