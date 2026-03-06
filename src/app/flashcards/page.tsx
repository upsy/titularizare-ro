"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Layers, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { allLessons } from "@/data/lectii";
import { allBaremDecks } from "@/data/barem";
import { generateFlashcardDeck } from "@/lib/flashcard-generator";
import { FlashcardDeckCard } from "@/components/flashcards/FlashcardDeckCard";
import { BaremDeckCard } from "@/components/flashcards/BaremDeckCard";

export default function FlashcardsPage() {
  const decks = useMemo(() => {
    return allLessons
      .map((lesson) => generateFlashcardDeck(lesson))
      .filter((deck) => deck.cards.length > 0);
  }, []);

  const totalLessonCards = decks.reduce((acc, d) => acc + d.cards.length, 0);
  const totalBaremCards = allBaremDecks.reduce((acc, d) => acc + d.cards.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Navigation */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            Acasă
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Layers className="h-7 w-7 text-violet-600" />
          <h1 className="text-2xl font-bold sm:text-3xl">Flashcards</h1>
        </div>
        <p className="text-muted max-w-2xl">
          Repetă noțiunile cheie cu flashcards. Secțiunea de barem te ajută să
          memorezi structurile de eseu și criteriile de punctare pentru examen.
        </p>
      </header>

      {/* Barem Section */}
      <section className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-amber-600" />
          <h2 className="text-lg font-semibold">Barem &amp; Strategie de Examen</h2>
          <span className="text-sm text-muted">
            {allBaremDecks.length} deck-uri &middot; {totalBaremCards} carduri
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allBaremDecks.map((deck) => (
            <BaremDeckCard key={deck.deckId} deck={deck} />
          ))}
        </div>
      </section>

      {/* Lesson Decks Section */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Layers className="h-5 w-5 text-violet-600" />
          <h2 className="text-lg font-semibold">Lecții</h2>
          <span className="text-sm text-muted">
            {decks.length} deck-uri &middot; {totalLessonCards} carduri
          </span>
        </div>
        {decks.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <FlashcardDeckCard key={deck.topicId} deck={deck} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-muted">
              Nu sunt flashcards disponibile încă. Completează lecții pentru a genera deck-uri.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
