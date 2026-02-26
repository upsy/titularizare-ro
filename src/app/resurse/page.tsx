import type { Metadata } from "next";
import { BookOpen, Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { bibliografie, categoriisBibliografie } from "@/data/bibliografie";

export const metadata: Metadata = {
  title: "Resurse și Bibliografie",
  description: "Bibliografie recomandată și resurse de studiu pentru examenul de titularizare 2026",
};

export default function ResursePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold sm:text-3xl">Resurse și Bibliografie</h1>
        </div>
        <p className="text-muted max-w-2xl">
          Bibliografie recomandată pentru pregătirea examenului de titularizare.
          Lucrările marcate cu stea sunt esențiale.
        </p>
      </div>

      {/* Bibliography by category */}
      <div className="space-y-8">
        {categoriisBibliografie.map((category) => {
          const items = bibliografie.filter((b) => b.category === category);
          return (
            <section key={category}>
              <h2 className="mb-4 text-xl font-semibold">{category}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <Card key={item.id} className={item.essential ? "border-l-4 border-l-amber-400" : ""}>
                    <CardContent>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            {item.essential && <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />}
                            <h3 className="font-medium text-foreground">{item.title}</h3>
                          </div>
                          <p className="mt-1 text-sm text-muted">{item.author}</p>
                          {item.publisher && (
                            <p className="text-xs text-muted">{item.publisher}</p>
                          )}
                        </div>
                        {item.essential && <Badge variant="secondary">Esențial</Badge>}
                      </div>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          Accesează <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Study Tips */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Sfaturi de Studiu</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Studiază activ",
              description: "Nu doar citi — fă rezumate, scheme, întrebări. Testează-te frecvent pe fiecare temă.",
            },
            {
              title: "Respectă calendarul",
              description: "Urmează planul de 19 săptămâni. Consistența e mai importantă decât intensitatea.",
            },
            {
              title: "Rezolvă subiecte anterioare",
              description: "Găsește subiecte date la titularizări anterioare și rezolvă-le cronometrat.",
            },
            {
              title: "Fă-ți fișe de sinteză",
              description: "Pentru fiecare capitol, creează o fișă cu ideile esențiale, formule, definiții.",
            },
            {
              title: "Exersează proiecte de lecție",
              description: "Pedagogia și didactica cer să știi să faci proiecte didactice. Exersează structura.",
            },
            {
              title: "Odihnă și echilibru",
              description: "Nu neglija pauzele. Un creier odihnit reține mai bine. Respectă zilele de pauză.",
            },
          ].map((tip) => (
            <Card key={tip.title}>
              <CardContent>
                <h3 className="mb-1 font-semibold text-foreground">{tip.title}</h3>
                <p className="text-sm text-muted">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
