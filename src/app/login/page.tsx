import type { Metadata } from "next";
import { GraduationCap, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { loginAction } from "./actions";

export const metadata: Metadata = {
  title: "Acces restricționat",
  robots: { index: false, follow: false, nocache: true },
};

type SearchParams = Promise<{ error?: string; from?: string }>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";
  const from = typeof params.from === "string" ? params.from : "";

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold text-foreground">
            Titularizare <span className="text-primary">2026</span>
          </h1>
          <p className="mt-1 text-sm text-muted">
            Acces restricționat. Introdu parola pentru a continua.
          </p>
        </div>

        <form action={loginAction} className="space-y-4">
          {from && <input type="hidden" name="from" value={from} />}

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Parolă
            </label>
            <div className="relative">
              <Lock
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="password"
                name="password"
                type="password"
                inputMode="numeric"
                autoComplete="current-password"
                autoFocus
                required
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? "password-error" : undefined}
                className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-blue-100"
                placeholder="••••"
              />
            </div>
            {hasError && (
              <p id="password-error" className="mt-2 text-sm text-red-600">
                Parolă incorectă. Încearcă din nou.
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg">
            Intră
          </Button>

          <p className="text-center text-xs text-muted">
            Odată introdusă, parola nu va mai fi cerută astăzi.
          </p>
        </form>
      </div>
    </div>
  );
}
