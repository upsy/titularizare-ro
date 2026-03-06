import Link from "next/link";
import { Target, ArrowRight } from "lucide-react";
import { BaremDeck } from "@/types/flashcards";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface BaremDeckCardProps {
  deck: BaremDeck;
}

const colorMap = {
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    border: "border-l-amber-500",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    border: "border-l-blue-500",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-l-orange-500",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-700",
    border: "border-l-violet-500",
  },
};

export function BaremDeckCard({ deck }: BaremDeckCardProps) {
  const colors = colorMap[deck.color];
  const structureCount = deck.cards.filter((c) => c.category === "essay-structure").length;
  const criteriaCount = deck.cards.filter((c) => c.category === "scoring-criteria").length;
  const templateCount = deck.cards.filter((c) => c.category === "template").length;
  const strategyCount = deck.cards.filter((c) => c.category === "exam-strategy").length;

  return (
    <Link href={`/flashcards/${deck.deckId}`}>
      <Card hover className={`h-full border-l-4 ${colors.border}`}>
        <CardContent>
          <div className="mb-3 flex items-center gap-2">
            <div className={`rounded-lg p-2 ${colors.bg}`}>
              <Target className={`h-5 w-5 ${colors.text}`} />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{deck.examSubject}</h3>
              <p className="text-xs text-muted">{deck.totalPoints}p &middot; {deck.subtitle}</p>
            </div>
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            <Badge variant="default">{deck.cards.length} carduri</Badge>
            {structureCount > 0 && <Badge variant="primary">{structureCount} structură</Badge>}
            {criteriaCount > 0 && <Badge variant="warning">{criteriaCount} criterii</Badge>}
            {templateCount > 0 && <Badge variant="secondary">{templateCount} șabloane</Badge>}
            {strategyCount > 0 && <Badge variant="success">{strategyCount} strategie</Badge>}
          </div>

          <div className={`flex items-center gap-1 text-sm font-medium ${colors.text}`}>
            Studiază <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
