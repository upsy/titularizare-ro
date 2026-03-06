import { Lesson, QuizQuestion as QuizQuestionType } from "@/types/lectii";
import { Flashcard, FlashcardDeck } from "@/types/flashcards";

function quizQuestionToFlashcard(
  q: QuizQuestionType,
  source: "quiz" | "mini-quiz",
  chapterId?: string
): Flashcard {
  let back = "";

  switch (q.type) {
    case "multiple-choice":
      back = `${q.options[q.correctIndex]}\n\n${q.explanation}`;
      break;
    case "true-false":
      back = `${q.correct ? "Adevărat" : "Fals"}\n\n${q.explanation}`;
      break;
    case "fill-blank":
      back = `${q.correctAnswers[0]}\n\n${q.explanation}`;
      break;
  }

  return {
    id: `${source}-${q.id}`,
    front: q.question,
    back,
    source,
    questionId: q.id,
    chapterId,
  };
}

/** Simple hash for stable IDs (not crypto, just uniqueness). */
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = ((hash << 5) - hash + ch) | 0;
  }
  return Math.abs(hash).toString(36);
}

/** Extract exam-tip FormatorNotes from lesson chapters as flashcards. */
function extractExamTipCards(lesson: Lesson): Flashcard[] {
  const tips: Flashcard[] = [];
  if (!lesson.chapters) return tips;

  for (const chapter of lesson.chapters) {
    for (const section of chapter.sections) {
      if (!section.contentBlocks) continue;
      for (const block of section.contentBlocks) {
        if (
          block.kind === "formator-note" &&
          block.formatorNote?.type === "exam-tip"
        ) {
          const content = block.formatorNote.content;
          const id = `exam-tip-${lesson.topicId}-${simpleHash(content)}`;
          tips.push({
            id,
            front: `Sfat de examen (${chapter.title}):`,
            back: content,
            source: "exam-tip",
            chapterId: chapter.id,
          });
        }
      }
    }
  }

  return tips;
}

export function generateFlashcardDeck(lesson: Lesson): FlashcardDeck {
  const cards: Flashcard[] = [];

  // 1. Main quiz questions
  if (lesson.quiz?.questions) {
    for (const q of lesson.quiz.questions) {
      cards.push(quizQuestionToFlashcard(q, "quiz"));
    }
  }

  // 2. Chapter mini-quiz questions + key points
  if (lesson.chapters) {
    for (const chapter of lesson.chapters) {
      // Mini-quiz questions
      if (chapter.miniQuiz?.questions) {
        for (const q of chapter.miniQuiz.questions) {
          cards.push(quizQuestionToFlashcard(q, "mini-quiz", chapter.id));
        }
      }

      // Important key points
      const importantPoints = chapter.keyPoints.filter((kp) => kp.important);
      for (const kp of importantPoints) {
        cards.push({
          id: `kp-${chapter.id}-${cards.length}`,
          front: `Ce trebuie să reții despre: ${chapter.title}?`,
          back: kp.text,
          source: "key-point",
          chapterId: chapter.id,
        });
      }
    }
  }

  // 3. Top-level key points (for non-chaptered lessons)
  if (!lesson.chapters && lesson.keyPoints) {
    const importantPoints = lesson.keyPoints.filter((kp) => kp.important);
    for (const kp of importantPoints) {
      cards.push({
        id: `kp-top-${cards.length}`,
        front: `Ce trebuie să reții despre: ${lesson.title}?`,
        back: kp.text,
        source: "key-point",
      });
    }
  }

  // 4. Exam tips from FormatorNote blocks
  const examTipCards = extractExamTipCards(lesson);
  cards.push(...examTipCards);

  return {
    topicId: lesson.topicId,
    title: lesson.title,
    cards,
  };
}
