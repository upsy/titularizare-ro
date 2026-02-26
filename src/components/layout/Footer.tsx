import { GraduationCap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Titularizare 2026</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="/programa" className="text-sm text-muted hover:text-primary transition-colors">
              Programa
            </Link>
            <Link href="/cursuri" className="text-sm text-muted hover:text-primary transition-colors">
              Cursuri
            </Link>
            <Link href="/resurse" className="text-sm text-muted hover:text-primary transition-colors">
              Resurse
            </Link>
            <Link href="/inscriere" className="text-sm text-muted hover:text-primary transition-colors">
              Înscriere
            </Link>
          </nav>
          <p className="text-xs text-muted">
            Ghid neoficial de pregătire. Verifică informațiile la ISJ.
          </p>
        </div>
      </div>
    </footer>
  );
}
