import { Lesson } from "@/types/lectii";
import { eduLimbaComunicareLessons } from "./edu-limba-comunicare";
import { eduMatematicaLessons } from "./edu-matematica";
import { eduPedagogieLessons } from "./edu-pedagogie";
import { eduPedagogieAdeLessons } from "./edu-pedagogie-ade";
import { eduPedagogieAdpLessons } from "./edu-pedagogie-adp";
import { eduRomanaLiteraturaLessons } from "./edu-romana-literatura";
import { eduRomanaSchitaLessons } from "./edu-romana-schita";
import { eduRomanaPovestireaLessons } from "./edu-romana-povestirea";
import { eduRomanaNuvelaLessons } from "./edu-romana-nuvela";
import { eduRomanaRomanulLessons } from "./edu-romana-romanul";
import { eduRomanaFabulaLessons } from "./edu-romana-fabula";
import { eduRomanaLuceafarulLessons } from "./edu-romana-luceafarul";
import { eduRomanaPastelulLessons } from "./edu-romana-pastelul";
import { eduRomanaModernismLessons } from "./edu-romana-modernism";
import { eduRomanaNeomodernismLessons } from "./edu-romana-neomodernism";
import { eduRomanaComediaLessons } from "./edu-romana-comedia";
import { eduPedagogieDlcPovestireLessons } from "./edu-pedagogie-dlc-povestire";
import { eduPedagogieDlcLecturaRepovestireLessons } from "./edu-pedagogie-dlc-lectura-repovestire";
import { eduPedagogieDlcLecturaDupaImaginiLessons } from "./edu-pedagogie-dlc-lectura-dupa-imagini";
import { eduPedagogieDlcConvorbireLessons } from "./edu-pedagogie-dlc-convorbire";
import { eduPedagogieStiinteObservareLessons } from "./edu-pedagogie-stiinte-observare";
import { eduPedagogieDlcMemorizareLessons } from "./edu-pedagogie-dlc-memorizare";
import { eduPedagogieStiinteExercitiuLessons } from "./edu-pedagogie-stiinte-exercitiu";
import { eduPedagogieJocDidacticLessons } from "./edu-pedagogie-joc-didactic";

export const allLessons: Lesson[] = [
  ...eduLimbaComunicareLessons,
  ...eduMatematicaLessons,
  ...eduPedagogieLessons,
  ...eduPedagogieAdeLessons,
  ...eduPedagogieAdpLessons,
  ...eduRomanaLiteraturaLessons,
  ...eduRomanaSchitaLessons,
  ...eduRomanaPovestireaLessons,
  ...eduRomanaNuvelaLessons,
  ...eduRomanaRomanulLessons,
  ...eduRomanaFabulaLessons,
  ...eduRomanaLuceafarulLessons,
  ...eduRomanaPastelulLessons,
  ...eduRomanaModernismLessons,
  ...eduRomanaNeomodernismLessons,
  ...eduRomanaComediaLessons,
  ...eduPedagogieDlcPovestireLessons,
  ...eduPedagogieDlcLecturaRepovestireLessons,
  ...eduPedagogieDlcLecturaDupaImaginiLessons,
  ...eduPedagogieDlcConvorbireLessons,
  ...eduPedagogieStiinteObservareLessons,
  ...eduPedagogieDlcMemorizareLessons,
  ...eduPedagogieStiinteExercitiuLessons,
  ...eduPedagogieJocDidacticLessons,
];

export function getLessonByTopicId(topicId: string): Lesson | undefined {
  return allLessons.find((l) => l.topicId === topicId);
}

export function hasLesson(topicId: string): boolean {
  return allLessons.some((l) => l.topicId === topicId);
}
