"use client";

import { useState } from "react";
import { QuizVariant } from "@/types/lectii";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { QuizSection } from "./QuizSection";
import { Badge } from "@/components/ui/Badge";
import { ClipboardCheck, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizVariantSectionProps {
  topicId: string;
  variants: QuizVariant[];
  backTo?: { href: string; label: string };
}

export function QuizVariantSection({ topicId, variants, backTo }: QuizVariantSectionProps) {
  return (
    <section id="quiz-section" className="mt-10 scroll-mt-20">
      <div className="mb-6 flex items-center gap-3">
        <ClipboardCheck className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Evaluare finală</h2>
      </div>

      {/* Desktop: Tabs */}
      <div className="hidden sm:block">
        <Tabs defaultValue={variants[0].variantId}>
          <TabsList className="flex-wrap">
            {variants.map((v) => (
              <TabsTrigger
                key={v.variantId}
                value={v.variantId}
                className="text-xs sm:text-sm data-[state=active]:ring-2 data-[state=active]:ring-blue-300"
              >
                {v.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {variants.map((v) => (
            <TabsContent key={v.variantId} value={v.variantId}>
              {v.description && (
                <p className="mb-4 text-sm text-muted">{v.description}</p>
              )}
              <QuizSection
                quiz={{ topicId, questions: v.questions }}
                variantId={v.variantId}
                backTo={backTo}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Mobile: Stacked expandable cards */}
      <div className="sm:hidden">
        <MobileVariantCards topicId={topicId} variants={variants} backTo={backTo} />
      </div>
    </section>
  );
}

function MobileVariantCards({
  topicId,
  variants,
  backTo,
}: {
  topicId: string;
  variants: QuizVariant[];
  backTo?: { href: string; label: string };
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {variants.map((v) => {
        const isOpen = expandedId === v.variantId;
        return (
          <div
            key={v.variantId}
            className="rounded-xl border border-border bg-card shadow-sm"
          >
            <button
              onClick={() => setExpandedId(isOpen ? null : v.variantId)}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left"
            >
              <div className="min-w-0">
                <span className="text-sm font-semibold text-foreground">
                  {v.label}
                </span>
                {v.description && (
                  <p className="mt-0.5 text-xs text-muted line-clamp-1">
                    {v.description}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-3">
                <Badge variant="default">{v.questions.length} întrebări</Badge>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </div>
            </button>
            {isOpen && (
              <div className="border-t border-border px-4 py-4">
                <QuizSection
                  quiz={{ topicId, questions: v.questions }}
                  variantId={v.variantId}
                  backTo={backTo}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
