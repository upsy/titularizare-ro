import { FormatorNote as FormatorNoteType } from "@/types/lectii";
import { GraduationCap, Wrench, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { renderFormattedText } from "./formatters";

const CONFIG = {
  "exam-tip": {
    icon: GraduationCap,
    border: "border-violet-500",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    label: "Sfat pentru examen",
    labelBg: "bg-violet-100 text-violet-700",
  },
  practical: {
    icon: Wrench,
    border: "border-amber-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    label: "Din practică",
    labelBg: "bg-amber-100 text-amber-700",
  },
  experience: {
    icon: MessageCircle,
    border: "border-rose-400",
    bg: "bg-rose-50",
    iconColor: "text-rose-500",
    label: "Nota formatoarei",
    labelBg: "bg-rose-100 text-rose-700",
  },
} as const;

interface FormatorNoteCardProps {
  note: FormatorNoteType;
}

export function FormatorNoteCard({ note }: FormatorNoteCardProps) {
  const cfg = CONFIG[note.type];
  const Icon = cfg.icon;

  return (
    <div className={cn("rounded-lg border-l-4 p-4", cfg.border, cfg.bg)}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className={cn("h-4 w-4", cfg.iconColor)} />
        <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", cfg.labelBg)}>
          {cfg.label}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-foreground">
        {note.content.split("\n\n").map((paragraph, j) => (
          <p key={j} className={cn(j > 0 && "mt-2")}>
            {renderFormattedText(paragraph)}
          </p>
        ))}
      </div>
    </div>
  );
}
