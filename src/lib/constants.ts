export const EXAM_DATE = new Date(2026, 6, 21); // 21 Iulie 2026 (month is 0-indexed)
export const SITE_NAME = "Titularizare 2026";
export const SITE_DESCRIPTION =
  "Ghid complet pentru pregătirea examenului de titularizare 2026";

export const NAV_LINKS = [
  { href: "/", label: "Acasă" },
  { href: "/cursuri", label: "Cursuri" },
  { href: "/programa", label: "Programa" },
  { href: "/inscriere", label: "Înscriere" },
  { href: "/resurse", label: "Resurse" },
  { href: "/progres", label: "Progres" },
] as const;

export const MONTHS_RO = [
  "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
  "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie",
] as const;

export const DAYS_RO = [
  "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică",
] as const;

export const STORAGE_KEY = "titularizare-progress";
