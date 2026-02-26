export interface Topic {
  id: string;
  title: string;
  description?: string;
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  chapters: Chapter[];
}

export interface BibliographyItem {
  id: string;
  title: string;
  author: string;
  publisher?: string;
  year?: number;
  category: string;
  essential: boolean;
  url?: string;
}

export type Specialization = "invatator" | "educatoare";
