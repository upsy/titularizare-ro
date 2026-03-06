"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Check,
  X,
  RotateCcw,
} from "lucide-react";
import { Flashcard } from "@/types/flashcards";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { FlashcardView } from "./FlashcardView";
import { useFlashcardProgress } from "@/hooks/useFlashcardProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";

interface FlashcardPlayerProps {
  topicId: string;
  cards: Flashcard[];
  title: string;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function FlashcardPlayer({ topicId, cards, title }: FlashcardPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const touchRef = useRef<{ startX: number; startY: number } | null>(null);
  const { known, markKnown, markUnknown, isKnown } = useFlashcardProgress(topicId);
  const { seedAnswer } = useSpacedRepetition();

  const displayCards = useMemo(() => {
    void shuffleSeed; // trigger re-shuffle on toggle
    return isShuffled ? shuffleArray(cards) : cards;
  }, [cards, isShuffled, shuffleSeed]);

  const currentCard = displayCards[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, displayCards.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const handleKnown = useCallback(() => {
    if (!currentCard) return;
    markKnown(currentCard.id);
    // Feed into SR — use questionId if available, otherwise card.id (barem cards)
    const srId = currentCard.questionId ?? currentCard.id;
    seedAnswer(srId, topicId, true, currentCard.chapterId);
    goNext();
  }, [currentCard, markKnown, seedAnswer, topicId, goNext]);

  const handleUnknown = useCallback(() => {
    if (!currentCard) return;
    markUnknown(currentCard.id);
    // Feed into SR — use questionId if available, otherwise card.id (barem cards)
    const srId = currentCard.questionId ?? currentCard.id;
    seedAnswer(srId, topicId, false, currentCard.chapterId);
    goNext();
  }, [currentCard, markUnknown, seedAnswer, topicId, goNext]);

  const toggleShuffle = useCallback(() => {
    setIsShuffled((s) => !s);
    setShuffleSeed((s) => s + 1);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  const resetProgress = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  // Touch swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchRef.current) return;
      const dx = e.changedTouches[0].clientX - touchRef.current.startX;
      const dy = e.changedTouches[0].clientY - touchRef.current.startY;
      touchRef.current = null;

      // Only trigger if horizontal swipe > 50px and not too vertical
      if (Math.abs(dx) > 50 && Math.abs(dy) < Math.abs(dx)) {
        if (dx < 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === " ") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  if (cards.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-muted">Nu sunt flashcards disponibile pentru această lecție.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleShuffle}
            className={`rounded-lg p-2 text-sm transition-colors ${
              isShuffled
                ? "bg-blue-100 text-blue-700"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
            aria-label="Amestecă cardurile"
          >
            <Shuffle className="h-4 w-4" />
          </button>
          <button
            onClick={resetProgress}
            className="rounded-lg bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200"
            aria-label="Resetează"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="mb-1 flex justify-between text-sm text-muted">
          <span>Card {currentIndex + 1} din {displayCards.length}</span>
          <span>{known} știute</span>
        </div>
        <ProgressBar value={currentIndex + 1} max={displayCards.length} size="sm" color="primary" />
      </div>

      {/* Card */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {currentCard && (
          <FlashcardView
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped((f) => !f)}
          />
        )}
      </div>

      {/* Know / Don't Know buttons */}
      <div className="mt-4 flex gap-3">
        <Button
          variant="outline"
          className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
          onClick={handleUnknown}
        >
          <X className="h-4 w-4" />
          Nu știu
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-emerald-300 text-emerald-600 hover:bg-emerald-50"
          onClick={handleKnown}
        >
          <Check className="h-4 w-4" />
          Știu
        </Button>
      </div>

      {/* Navigation */}
      <div className="mt-4 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={goPrev} disabled={currentIndex === 0}>
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={goNext}
          disabled={currentIndex >= displayCards.length - 1}
        >
          Următorul
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Status indicator */}
      {currentCard && isKnown(currentCard.id) && (
        <div className="mt-3 text-center text-sm text-emerald-600">
          Ai marcat acest card ca știut
        </div>
      )}
    </div>
  );
}
