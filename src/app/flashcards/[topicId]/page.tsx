"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getLessonByTopicId } from "@/data/lectii";
import { getBaremDeck } from "@/data/barem";
import { generateFlashcardDeck } from "@/lib/flashcard-generator";
import { FlashcardPlayer } from "@/components/flashcards/FlashcardPlayer";

export default function FlashcardTopicPage() {
  const params = useParams();
  const topicId = params.topicId as string;

  // Check barem deck first
  const baremDeck = getBaremDeck(topicId);

  const lesson = baremDeck ? null : getLessonByTopicId(topicId);
  const lessonDeck = useMemo(() => {
    if (!lesson) return null;
    return generateFlashcardDeck(lesson);
  }, [lesson]);

  const deck = baremDeck
    ? { topicId: baremDeck.deckId, title: baremDeck.title, cards: baremDeck.cards }
    : lessonDeck;

  if (!deck) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <Link href="/flashcards">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Toate deck-urile
            </Button>
          </Link>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-muted">Lecția nu a fost găsită.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Navigation */}
      <div className="mb-6 flex items-center gap-3">
        <Link href="/flashcards">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            Toate deck-urile
          </Button>
        </Link>
        {!baremDeck && (
          <>
            <span className="text-muted">|</span>
            <Link href={`/lectii/${topicId}`}>
              <Button variant="ghost" size="sm">
                Lecția completă
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Player */}
      <FlashcardPlayer topicId={deck.topicId} cards={deck.cards} title={deck.title} />
    </div>
  );
}
