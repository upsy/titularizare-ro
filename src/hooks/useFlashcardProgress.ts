"use client";

import { useState, useEffect, useCallback } from "react";
import { FlashcardProgressState } from "@/types/flashcards";

const STORAGE_KEY = "titularizare-flashcard-progress";

const DEFAULT_STATE: FlashcardProgressState = { decks: {} };

function getStoredState(): FlashcardProgressState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_STATE;
    return JSON.parse(stored) as FlashcardProgressState;
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(state: FlashcardProgressState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useFlashcardProgress(topicId: string) {
  const [state, setState] = useState<FlashcardProgressState>(DEFAULT_STATE);

  useEffect(() => {
    setState(getStoredState()); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const deckProgress = state.decks[topicId] ?? { known: [], unknown: [] };

  const markKnown = useCallback(
    (cardId: string) => {
      setState((prev) => {
        const deck = prev.decks[topicId] ?? { known: [], unknown: [] };
        const known = deck.known.includes(cardId) ? deck.known : [...deck.known, cardId];
        const unknown = deck.unknown.filter((id) => id !== cardId);
        const next = { ...prev, decks: { ...prev.decks, [topicId]: { known, unknown } } };
        saveState(next);
        return next;
      });
    },
    [topicId]
  );

  const markUnknown = useCallback(
    (cardId: string) => {
      setState((prev) => {
        const deck = prev.decks[topicId] ?? { known: [], unknown: [] };
        const unknown = deck.unknown.includes(cardId) ? deck.unknown : [...deck.unknown, cardId];
        const known = deck.known.filter((id) => id !== cardId);
        const next = { ...prev, decks: { ...prev.decks, [topicId]: { known, unknown } } };
        saveState(next);
        return next;
      });
    },
    [topicId]
  );

  const isKnown = useCallback(
    (cardId: string) => deckProgress.known.includes(cardId),
    [deckProgress.known]
  );

  return {
    known: deckProgress.known.length,
    unknown: deckProgress.unknown.length,
    total: deckProgress.known.length + deckProgress.unknown.length,
    markKnown,
    markUnknown,
    isKnown,
  };
}
