import { Lesson, QuizQuestion } from "@/types/lectii";
import { Flashcard, BaremDeck } from "@/types/flashcards";

export interface QuestionWithContext {
  question: QuizQuestion;
  topicId: string;
  topicTitle: string;
  chapterId?: string;
  chapterTitle?: string;
  source: "quiz" | "mini-quiz";
}

export interface FlashcardReviewContext {
  card: Flashcard;
  topicId: string;
  topicTitle: string;
}

export type ReviewItemContext =
  | { type: "question"; data: QuestionWithContext }
  | { type: "flashcard"; data: FlashcardReviewContext };

/** Build a Map<questionId, QuestionWithContext> from all lessons. */
export function buildQuestionIndex(lessons: Lesson[]): Map<string, QuestionWithContext> {
  const index = new Map<string, QuestionWithContext>();

  for (const lesson of lessons) {
    // Main quiz questions
    if (lesson.quiz?.questions) {
      for (const q of lesson.quiz.questions) {
        index.set(q.id, {
          question: q,
          topicId: lesson.topicId,
          topicTitle: lesson.title,
          source: "quiz",
        });
      }
    }

    // Quiz variant questions
    if (lesson.quizVariants) {
      for (const variant of lesson.quizVariants) {
        for (const q of variant.questions) {
          if (!index.has(q.id)) {
            index.set(q.id, {
              question: q,
              topicId: lesson.topicId,
              topicTitle: lesson.title,
              source: "quiz",
            });
          }
        }
      }
    }

    // Chapter mini-quiz questions
    if (lesson.chapters) {
      for (const chapter of lesson.chapters) {
        if (chapter.miniQuiz?.questions) {
          for (const q of chapter.miniQuiz.questions) {
            index.set(q.id, {
              question: q,
              topicId: lesson.topicId,
              topicTitle: lesson.title,
              chapterId: chapter.id,
              chapterTitle: chapter.title,
              source: "mini-quiz",
            });
          }
        }
      }
    }
  }

  return index;
}

/** Build a combined index that includes quiz questions AND barem flashcards. */
export function buildCombinedReviewIndex(
  lessons: Lesson[],
  baremDecks: BaremDeck[]
): Map<string, ReviewItemContext> {
  const index = new Map<string, ReviewItemContext>();

  // Quiz questions
  const qIndex = buildQuestionIndex(lessons);
  for (const [id, ctx] of qIndex) {
    index.set(id, { type: "question", data: ctx });
  }

  // Barem flashcards (keyed by card.id)
  for (const deck of baremDecks) {
    for (const card of deck.cards) {
      index.set(card.id, {
        type: "flashcard",
        data: {
          card,
          topicId: deck.deckId,
          topicTitle: deck.title,
        },
      });
    }
  }

  return index;
}
