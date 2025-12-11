'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const SERVICE_CATEGORIES = [
  "haeufige-beschwerden",
  "diagnostik",
  "operationen",
  "tumor",
  "maennergesundheit",
] as const

type ServiceCategory = (typeof SERVICE_CATEGORIES)[number]

const categoryLabels: Record<ServiceCategory, string> = {
  "haeufige-beschwerden": "Häufige Beschwerden",
  diagnostik: "Diagnostik & Bildgebung",
  operationen: "Operationen",
  tumor: "Tumorerkrankungen",
  maennergesundheit: "Männergesundheit & Hormone",
}

const services = [
  {
    title: "Ambulante Operationen",
    category: "operationen",
    excerpt: "Vasektomie, Beschneidung, Hydrozelektomie, Varikozelensklerosierung, Lasertherapien und mehr.",
    details: [
      "Wir führen sämtliche ambulant möglichen Eingriffe durch – darunter Vasektomie, Zirkumzision, Hydrozelektomie, Varikozelensklerosierung, Feigwarzenlaser, Harnleiterschienung, Stoßwellenlithotripsie sowie Botulinumtoxin-Injektionen in die Blase.",
      "Die Narkose erfolgt durch das erfahrene Anästhesieteam des Alb-Donau-Klinikums Ehingen unter Leitung von Dr. Markus Brucke.",
    ],
  },
  {
    title: "Stationäre Behandlung",
    category: "operationen",
    excerpt: "Als Belegärzte decken wir nahezu das komplette Spektrum der operativen Urologie ab.",
    details: [
      "Im Alb-Donau-Klinikum Ehingen bieten wir Prostata- und Harnblaseneingriffe, inklusive transurethraler Resektionen, radikaler Prostatektomie sowie endoskopischer und Laser-Steintherapie.",
      "Auch komplexe Tumoroperationen bis hin zur vollständigen Entfernung der Harnblase sind möglich.",
    ],
  },
  {
    title: "Prostatabiopsie",
    category: "diagnostik",
    excerpt: "Schonende transrektale Prostatabiopsien mit lokaler Betäubung oder kurzer Narkose.",
    details: [
      "Wir führen systematische, sonografisch gesteuerte Biopsien bei Karzinomverdacht durch – ambulant, nahezu beschwerdefrei und auf Wunsch in Narkose.",
      "Zusätzlich bieten wir Fusionsbiopsien mit zuvor erstelltem multiparametrischem MRT zur noch präziseren Diagnose an.",
    ],
  },
  {
    title: "Endoskopie von Blase & Harntrakt",
    category: "diagnostik",
    excerpt: "Minimalinvasive Diagnostik und Therapie von Tumoren, Steinen und Engstellen.",
    details: [
      "Wir behandeln Erkrankungen von Blase, Harnleitern und Nieren mittels flexibler oder starrer Endoskope.",
      "Hierzu gehören auch sanfte Zystoskopien mit flexiblen Instrumenten.",
    ],
  },
  {
    title: "Urodynamik",
    category: "diagnostik",
    excerpt: "Blasendruckmessungen und EMG zur Abklärung von Funktionsstörungen.",
    details: [
      "Wir analysieren Blasen- und Schließmuskelfunktion bei Inkontinenz, neurologischen Erkrankungen oder unklaren Speicher- und Entleerungsstörungen.",
    ],
  },
  {
    title: "Ultraschalluntersuchungen",
    category: "diagnostik",
    excerpt: "Sonografie von Niere, Blase, Prostata und Hoden inklusive transrektaler Dopplerdiagnostik.",
    details: [
      "Hochauflösende Ultraschalltechnik erlaubt eine strahlenfreie Abklärung – auch transrektal oder als Farbduplex.",
    ],
  },
  {
    title: "Röntgen & Durchleuchtung",
    category: "diagnostik",
    excerpt: "Konventionelle Aufnahmen, digitale Durchleuchtung und interventionelle Diagnostik.",
    details: [
      "Wir klären Hämaturie, Tumorverdacht, Harnsteine sowie Schienenlagen ab und nehmen Wechsel einliegender Harnleiterschienen vor.",
    ],
  },
  {
    title: "Labor",
    category: "diagnostik",
    excerpt: "Umfassende Blutparameter inklusive Hormondiagnostik aus eigenem Praxislabor.",
    details: [
      "Wir bestimmen PSA, Hormone, Entzündungswerte und weitere Parameter, um Diagnostik und Therapie eng zu steuern.",
    ],
  },
  {
    title: "Urologische Onkologie",
    category: "tumor",
    excerpt: "Diagnostik, Therapie und Nachsorge sämtlicher urologischer Tumoren.",
    details: [
      "Wir orientieren uns an Leitlinien von DGU, EAU und AUA sowie aktuellen Studien.",
      "Zusammenarbeit mit dem Prostatakarzinomzentrum des Universitätsklinikums Ulm (CCCU) sichert Zugang zu interdisziplinären Therapien.",
    ],
  },
  {
    title: "Chemo- & Immuntherapien",
    category: "tumor",
    excerpt: "Ambulante und stationäre medikamentöse Tumortherapien durch zertifizierte Fachärzte.",
    details: [
      "Alle Ärztinnen und Ärzte besitzen die Zusatzbezeichnung „Medikamentöse Tumortherapie“ und führen Chemo- bzw. Immuntherapien bei urologischen Tumoren durch.",
    ],
  },
  {
    title: "Krebsvorsorge beim Mann",
    category: "maennergesundheit",
    excerpt: "Früherkennung nach G-BA-Richtlinie plus sinnvolle Zusatzleistungen.",
    details: [
      "Wir führen Anamnese, Untersuchung des äußeren Genitals, rektale Prostatapalpation und Lymphknoten-Check gemäß Vorgaben ab 45 Jahren durch.",
      "Ultraschall und PSA-Bestimmung bieten wir als individuelle Gesundheitsleistungen an, wenn medizinisch sinnvoll.",
    ],
  },
  {
    title: "Andrologie & Sexualmedizin",
    category: "maennergesundheit",
    excerpt: "Diagnostik und Therapie bei Fertilitäts-, Hormon- und Sexualitätsfragen.",
    details: [
      "Wir behandeln Infertilität, Hypogonadismus, Erektionsstörungen, beraten zur Sterilisation und begleiten Männer im Alterungsprozess.",
    ],
  },
  {
    title: "Sexualität des Mannes",
    category: "maennergesundheit",
    excerpt: "Individuelle Abklärung bei nachlassender Libido oder Potenz.",
    details: [
      "Wir betrachten biologische, psychische und soziale Faktoren und entwickeln maßgeschneiderte Therapie- oder Beratungsangebote.",
    ],
  },
  {
    title: "Wechseljahre des Mannes",
    category: "maennergesundheit",
    excerpt: "Diagnose und Behandlung hormoneller Veränderungen im Alter.",
    details: [
      "Mittels Laboranalysen erkennen wir Hormonmangelzustände, die z. B. Müdigkeit oder Antriebslosigkeit verursachen, und behandeln sie zielgerichtet.",
    ],
  },
  {
    title: "Infertilität & Kinderwunsch",
    category: "maennergesundheit",
    excerpt: "Spermiogramm, Hormondiagnostik und weiterführende Beratung.",
    details: [
      "Wir bewerten die Zeugungsfähigkeit durch standardisierte Analysen und planen weitere Diagnostik oder Therapie gemeinsam mit Ihnen.",
    ],
  },
  {
    title: "Infektionen",
    category: "haeufige-beschwerden",
    excerpt: "Abklärung wiederkehrender Blasenentzündungen und Geschlechtskrankheiten.",
    details: [
      "Wir identifizieren Erreger präzise und setzen gezielte Therapien ein – inklusive Beratung zu natürlichen Prophylaxemaßnahmen.",
    ],
  },
  {
    title: "Inkontinenz",
    category: "haeufige-beschwerden",
    excerpt: "Diagnostik und Therapie bei Harnverlust und Senkungsbeschwerden.",
    details: [
      "Je nach Ursache setzen wir medikamentöse, physiotherapeutische oder operative Maßnahmen ein.",
    ],
  },
] as const

type ServiceItem = (typeof services)[number]

export function Services() {
  const [activeCategory, setActiveCategory] = useState<"all" | ServiceCategory>("all")

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory)

  const categoryOrder: ("all" | ServiceCategory)[] = [
    "all",
    "haeufige-beschwerden",
    "diagnostik",
    "operationen",
    "tumor",
    "maennergesundheit",
  ]

  return (
    <section id="leistungen" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Unser Leistungsspektrum
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wählen Sie ein Thema, das zu Ihren Beschwerden oder Fragen passt. Alternativ können Sie sich auch alle
            Leistungen in der Übersicht anzeigen lassen.
          </p>
        </div>

        {/* Kategorie-Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categoryOrder.map((cat) => {
            const isAll = cat === "all"
            const label = isAll ? "Alle Leistungen" : categoryLabels[cat]
            const isActive = cat === activeCategory

            return (
              <Button
                key={cat}
                type="button"
                variant={isActive ? "default" : "outline"}
                size="sm"
                className="rounded-full px-4 py-2 text-sm"
                onClick={() => setActiveCategory(cat)}
              >
                {label}
              </Button>
            )
          })}
        </div>

        {/* Grid statt Carousel */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Sie sind unsicher, welche Untersuchung für Sie passend ist?
          </p>
          <a
            href="tel:+497391781080"
            className="text-primary hover:text-accent font-medium underline underline-offset-4"
          >
            Rufen Sie uns an – wir beraten Sie persönlich
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="h-full border-border bg-background/95 shadow-sm flex flex-col">
      <CardHeader className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {categoryLabels[service.category]}
        </p>
        <CardTitle className="text-2xl font-serif text-foreground">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {service.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto pt-0">
        <Collapsible open={open} onOpenChange={setOpen} className="space-y-3">
          <CollapsibleContent>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
              {service.details.map((paragraph) => (
                <li key={paragraph}>{paragraph}</li>
              ))}
            </ul>
          </CollapsibleContent>
          {service.details.length > 0 && (
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="px-4 text-primary hover:text-white font-medium"
              >
                {open ? "Weniger anzeigen" : "Mehr erfahren"}
              </Button>
            </CollapsibleTrigger>
          )}
        </Collapsible>
      </CardContent>
    </Card>
  )
}

