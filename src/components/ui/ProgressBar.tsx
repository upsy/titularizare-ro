import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "secondary" | "warning";
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  size = "md",
  color = "primary",
  showLabel = false,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn("w-full overflow-hidden rounded-full bg-slate-100", {
          "h-1.5": size === "sm",
          "h-2.5": size === "md",
          "h-4": size === "lg",
        })}
      >
        <div
          className={cn("h-full rounded-full transition-all duration-500", {
            "bg-primary": color === "primary",
            "bg-success": color === "success",
            "bg-secondary": color === "secondary",
            "bg-orange-500": color === "warning",
          })}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="min-w-[3ch] text-sm font-medium text-muted">{percentage}%</span>
      )}
    </div>
  );
}
