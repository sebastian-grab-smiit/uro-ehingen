import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Microscope, Stethoscope, Heart, Shield, Users } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Allgemeine Urologie",
      description:
        "Umfassende urologische Diagnostik und Behandlung aller Erkrankungen des Harntrakts und der männlichen Geschlechtsorgane an den Standorten Ehingen und Blaubeuren.",
    },
    {
      icon: Microscope,
      title: "Krebsvorsorge",
      description:
        "Moderne Vorsorgeuntersuchungen zur Früherkennung von Prostata-, Blasen- und Nierenkrebs – abgestimmt mit Hausärzten in Ehingen und Blaubeuren.",
    },
    {
      icon: Activity,
      title: "Ultraschalldiagnostik",
      description: "Hochauflösende Ultraschalluntersuchungen von Nieren, Blase, Prostata und Hoden direkt in Ehingen oder Blaubeuren.",
    },
    {
      icon: Heart,
      title: "Männergesundheit",
      description: "Beratung und Behandlung bei Potenzstörungen, Testosteronmangel und Kinderwunsch – diskret und wohnortnah.",
    },
    {
      icon: Shield,
      title: "Inkontinenztherapie",
      description: "Moderne Behandlungskonzepte bei Harn- und Stuhlinkontinenz für Männer und Frauen inklusive Hilfsmittelberatung.",
    },
    {
      icon: Users,
      title: "Kinderurologie",
      description: "Spezialisierte Betreuung urologischer Erkrankungen bei Kindern und Jugendlichen – eng abgestimmt mit Kinderärzten in der Region.",
    },
  ]

  return (
    <section id="leistungen" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Unser Leistungsspektrum
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Wir bieten Ihnen das gesamte Spektrum der modernen Urologie mit modernster Diagnostik und individueller
            Therapie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Sie haben Fragen zu unseren Leistungen?</p>
          <a href="tel:+497391781080" className="text-primary hover:text-accent font-medium underline underline-offset-4">
            Kontaktieren Sie uns für eine persönliche Beratung
          </a>
        </div>
      </div>
    </section>
  )
}
