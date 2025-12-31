import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

function InfoPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  )
}

export function Team() {
  const team = [
    {
      name: "Dr. med. Thomas Neßlauer",
      role: "Facharzt für Urologie",
      additional1:
        "Zusatzbezeichnungen: Andrologie, Medikamentöse Tumortherapie, Spezielle urologische Chirurgie, Palliativmedizin",
      image: "/assets/nesslauer.jpg",
    },
    {
      name: "Dr. med. Florian Finter",
      role: "Facharzt für Urologie",
      additional1: "Zusatzbezeichnungen: Medikamentöse Tumortherapie",
      additional2: "Ärztliches Qualitätsmanagement",
      image: "/assets/finter.jpg",
    },
    {
      name: "Jürgen Prang",
      role: "Facharzt für Urologie",
      additional1: "Zusatzbezeichnungen: Andrologie, Medikamentöse Tumortherapie, Palliativmedizin",
      image: "/assets/prang.jpg",
    },
  ]

  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Ärzteteam */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Unser Ärzteteam
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Erfahrene Fachärzte mit langjähriger Expertise in der Urologie betreuen Sie kompetent und einfühlsam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow p-0 gap-0">
              <div className="aspect-square relative overflow-hidden bg-secondary">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                <p className="text-muted-foreground mt-2 text-sm">{member.additional1}</p>
                <p className="text-muted-foreground text-sm">{member.additional2}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ✅ Zusammengeführt: Sonja + Team als EIN Bereich */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
              Organisation & Praxisteam
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ein eingespieltes Team sorgt für Struktur, kurze Wege und eine angenehme Atmosphäre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Sonja */}
            <Card className="border-border overflow-hidden p-0 hover:shadow-lg transition-shadow">
              <div className="relative aspect-[16/10] bg-secondary">
                <Image
                  src="/assets/sonia.jpg"
                  alt="Sonja Richter"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col gap-2">

                <div>
                  <p className="text-xl font-semibold text-foreground">Sonja Richter (B.A.)</p>
                  <p className="text-sm text-primary font-medium mt-1">
                    Praxismanagerin, Fachwirtin ambulante medizinische Versorgung und Krankenschwester
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Frau Richter ist unsere Praxismanagerin und für die Organisation eines reibungslosen Praxisablaufs
                  zuständig. Sie ist außerdem Ansprechpartnerin für die Rechnungsstellung privatärztlicher Leistungen.
                </p>
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="border-border overflow-hidden p-0 hover:shadow-lg transition-shadow">
              <div className="relative aspect-[16/10] bg-secondary">
                <Image
                  src="/assets/team.jpg"
                  alt="Unser Praxisteam"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col gap-2">
                <div>
                  <p className="text-xl font-semibold text-foreground">Unser Praxisteam</p>
                  <p className="text-sm text-primary font-medium mt-1">
                    Medizinische Fachangestellte und Krankenschwestern
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Neben unseren Fachärzten steht Ihnen ein erfahrenes Team aus medizinischen Fachangestellten und Krankenschwestern zur Seite. Wir legen großen Wert auf eine
                    persönliche Atmosphäre und nehmen uns Zeit für Ihre Anliegen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
