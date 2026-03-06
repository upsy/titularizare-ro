import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { FlashcardDeck } from "@/types/flashcards";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface FlashcardDeckCardProps {
  deck: FlashcardDeck;
}

export function FlashcardDeckCard({ deck }: FlashcardDeckCardProps) {
  const quizCount = deck.cards.filter((c) => c.source === "quiz").length;
  const miniQuizCount = deck.cards.filter((c) => c.source === "mini-quiz").length;
  const keyPointCount = deck.cards.filter((c) => c.source === "key-point").length;
  const examTipCount = deck.cards.filter((c) => c.source === "exam-tip").length;

  return (
    <Link href={`/flashcards/${deck.topicId}`}>
      <Card hover className="h-full">
        <CardContent>
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-lg bg-violet-100 p-2">
              <Layers className="h-5 w-5 text-violet-600" />
            </div>
            <h3 className="font-medium text-foreground line-clamp-2">{deck.title}</h3>
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            <Badge variant="default">{deck.cards.length} cards</Badge>
            {quizCount > 0 && <Badge variant="primary">{quizCount} quiz</Badge>}
            {miniQuizCount > 0 && <Badge variant="secondary">{miniQuizCount} mini-quiz</Badge>}
            {keyPointCount > 0 && <Badge variant="success">{keyPointCount} puncte cheie</Badge>}
            {examTipCount > 0 && <Badge variant="warning">{examTipCount} sfaturi</Badge>}
          </div>

          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            Începe <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
