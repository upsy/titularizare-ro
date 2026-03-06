"use client";

import { Play, Pause, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPlayerBarProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  onToggle: () => void;
  onSeek: (time: number) => void;
  onRateChange: () => void;
  onClose: () => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayerBar({
  isPlaying,
  currentTime,
  duration,
  playbackRate,
  onToggle,
  onSeek,
  onRateChange,
  onClose,
}: AudioPlayerBarProps) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onSeek(ratio * duration);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white shadow-lg">
      <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3">
        {/* Play/Pause */}
        <button
          onClick={onToggle}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
          aria-label={isPlaying ? "Pauză" : "Redare"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 ml-0.5" />
          )}
        </button>

        {/* Time */}
        <span className="shrink-0 text-xs tabular-nums text-slate-600">
          {formatTime(currentTime)}
        </span>

        {/* Progress bar */}
        <div
          className="relative flex-1 cursor-pointer py-2"
          onClick={handleProgressClick}
          role="slider"
          aria-label="Progres audio"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
        >
          <div className="h-1.5 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-500 transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Duration */}
        <span className="shrink-0 text-xs tabular-nums text-slate-600">
          {formatTime(duration)}
        </span>

        {/* Speed */}
        <button
          onClick={onRateChange}
          className={cn(
            "shrink-0 rounded-md px-2 py-1 text-xs font-semibold transition-colors",
            playbackRate === 1
              ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          )}
          aria-label={`Viteză: ${playbackRate}x`}
        >
          {playbackRate}x
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Închide player"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
