# Titularizare.ro - Ghid Pregătire Examen Titularizare 2026

## Project Overview
Site web Next.js pentru pregătirea examenului de titularizare (Iulie 2026), specializarea Învățător/Educatoare. Oferă calendar de pregătire, programa de examen, resurse de studiu și tracking al progresului.

## Tech Stack
- Next.js 15 (App Router, TypeScript, `src/` directory)
- Tailwind CSS v4
- Radix UI (checkbox, accordion, tabs)
- lucide-react (icons)
- date-fns (date manipulation)
- clsx (conditional CSS classes)
- localStorage (progress tracking, zero backend)

## Commands
- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint

## Project Structure
- `src/app/` — Pages (App Router)
- `src/components/` — React components (layout/, ui/, calendar/, programa/, progress/, home/)
- `src/data/` — Hardcoded content (TypeScript, type-safe)
- `src/lib/` — Utilities (progress.ts, utils.ts, constants.ts)
- `src/hooks/` — Custom React hooks
- `src/types/` — TypeScript interfaces

## Conventions
- Language: Romanian for content, English for code (variable names, comments)
- Styling: Tailwind utility classes, mobile-first responsive design
- Colors: blue-600 (primary), amber-500 (secondary), emerald-500 (success), slate-50 (bg)
- Components: functional components with TypeScript props interfaces
- State: localStorage for persistence, React state for UI
- No backend, no database — all data is hardcoded in src/data/
