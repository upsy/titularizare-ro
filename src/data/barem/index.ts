import { BaremDeck, ExamSubjectId } from "@/types/flashcards";
import { baremSub1 } from "./barem-sub1";
import { baremSub2 } from "./barem-sub2";
import { baremSub3 } from "./barem-sub3";
import { baremGeneral } from "./barem-general";

export const allBaremDecks: BaremDeck[] = [baremSub1, baremSub2, baremSub3, baremGeneral];

export function getBaremDeck(id: string): BaremDeck | undefined {
  return allBaremDecks.find((d) => d.deckId === (id as ExamSubjectId));
}

export { baremSub1, baremSub2, baremSub3, baremGeneral };
