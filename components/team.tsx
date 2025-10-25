import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Team() {
  const team = [
    {
      name: "Dr. med. Thomas Neßlauer",
      role: "Facharzt für Urologie, Andrologie, medikamentöse Tumortherapie, spezielle urologische Chirurgie, Palliativmedizin",
      image: "/assets/nesslauer.jpg",
    },
    {
      name: "Dr. med. Florian Finter",
      role: "Facharzt für Urologie, medikamentöse Tumortherapie, Ärztliches Qualitätsmanagement",
      image: "/assets/finter.jpg",
    },
    {
      name: "Jürgen Prang",
      role: "Facharzt für Urologie, Andrologie, medikamentöse Tumortherapie, spezielle urologische Chirurgie, Palliativmedizin",
      image: "/assets/prang.jpg",
    },
  ]

  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <Card className="border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto relative overflow-hidden bg-secondary">
                <img src="/assets/sonia.jpg" alt="Sonja Richter" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-2">Sonja Richter (B.A.)</h3>
                <p className="text-lg text-primary font-medium mb-6">
                  Praxismanagerin, Krankenschwester, Fachwirtin für ambulante medizinische Versorgung
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Frau Richter ist unsere Praxismanagerin und für die Organisation eines reibungslosen Praxisablaufs
                  zuständig. Sie ist außerdem Ansprechpartnerin für die Rechnungsstellung privatärztlicher Leistungen.
                  Durch ihre langjährige Erfahrung auf dem Gebiet der Urologie kennt sie sich hervorragend mit allen
                  urologischen Hilfsmitteln (Stomasysteme, Kathetersysteme, Inkontinenzversorgung etc.) aus.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="mt-12 bg-secondary/50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Unser Praxisteam</h3>
            <p className="text-muted-foreground leading-relaxed">
              Neben unseren Fachärzten steht Ihnen ein erfahrenes Team aus medizinischen Fachangestellten zur Seite. Wir
              legen großen Wert auf eine persönliche Atmosphäre und nehmen uns Zeit für Ihre Anliegen.
            </p>
            <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow mt-8">
              <div className="relative overflow-hidden bg-secondary aspect-[16/9]">
                <Image
                  src="/assets/team.jpg"
                  alt="Team"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
