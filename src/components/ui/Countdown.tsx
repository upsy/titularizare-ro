"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { EXAM_DATE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CountdownProps {
  className?: string;
}

export function Countdown({ className }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(EXAM_DATE);

  const blocks = [
    { value: days, label: "Zile" },
    { value: hours, label: "Ore" },
    { value: minutes, label: "Minute" },
    { value: seconds, label: "Secunde" },
  ];

  return (
    <div className={cn("flex gap-3 sm:gap-4", className)}>
      {blocks.map((block) => (
        <div
          key={block.label}
          className="flex flex-col items-center rounded-xl bg-white px-3 py-3 shadow-sm sm:px-5 sm:py-4"
        >
          <span className="text-2xl font-bold text-primary sm:text-4xl">
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-xs text-muted sm:text-sm">{block.label}</span>
        </div>
      ))}
    </div>
  );
}
