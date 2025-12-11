'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/components/ui/use-mobile"
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
      "Wir führen sämtliche ambulant möglichen Eingriffe durch – darunter Vasektomie (Sterilisation), Zirkumzision (Beschneidung), Hydrozelektomie ('Wasserbruch-OP'), Varikozelensklerosierung, Feigwarzenbehandlung mittels Laser, Harnleiterschienung, Stoßwellenlithotripsie von Nierensteinen und Botulinumtoxin-Injektion in die Harnblase.",
      "Die Narkose erfolgt durch das erfahrene Anästhesieteam des Alb-Donau-Klinikums Ehingen.",
    ],
  },
  {
    title: "Stationäre Behandlung",
    category: "operationen",
    excerpt: "Als Belegärzte decken wir nahezu das komplette Spektrum der operativen Urologie ab.",
    details: [
      "Wir bieten Ihnen als Belegärzte am Alb-Donau Klinikum Ehingen nahezu das komplette Spektrum der operativen Urologie an. Hierzu zählen z.B. die endoskopische Therapie der gutartigen Prostatavergrößerung (transurethrale Resektion Prostata), die endoskopische Therapie von Harnblasentumoren sowie die komplette Entfernung der Harnblase, die Therapie des Prostatakarzinoms (Radikale Prostatektomie) und die Steintherapie (endoskopisch oder Laser).",
    ],
  },
  {
    title: "Prostatabiopsie",
    category: "diagnostik",
    excerpt: "Schonende transrektale Prostatabiopsien mit lokaler Betäubung oder kurzer Narkose.",
    details: [
      "Wir führen transrektale, sonographisch gesteuerte, systematische Biopsien bei Karzinomverdacht durch – ambulant, nahezu beschwerdefrei und in örtlicher Betäubung oder auf Wunsch in Narkose.",
      "Zusätzlich bieten wir Fusionsbiopsien mit zuvor erstelltem multiparametrischem MRT an.",
    ],
  },
  {
    title: "Endoskopie von Blase & oberem Harntrakt",
    category: "diagnostik",
    excerpt: "Minimalinvasive Diagnostik und Therapie von Tumoren, Steinen und Engstellen.",
    details: [
      "Wir bieten die minimal invasive endoskopische Diagnostik und Therapie bei Harnleiter- und Blasenerkrankungen sowie Tumoren und Steinen in diesem Bereich an. Die Endoskopie der Harnblase erfolgt mittels flexiblem (biegsamen) Zystoskop.",
    ],
  },
  {
    title: "Urodynamik",
    category: "diagnostik",
    excerpt: "Blasendruckmessungen und EMG zur Abklärung von Funktionsstörungen.",
    details: [
      "Wir analysieren Blasen- und Schließmuskelfunktion bei Inkontinenz, neurologischen Erkrankungen oder unklaren Speicher- und Entleerungsstörungen. Hierfür führen wir eine Blasendruckmessung und eine Elektromyographie durch.",
    ],
  },
  {
    title: "Ultraschalluntersuchungen",
    category: "diagnostik",
    excerpt: "Wir bieten die Sonografie von Niere, Blase, Prostata und Hoden inklusive transrektaler Sonographie und Farbduplexsonographie.",
    details: [
      "Hochauflösende Ultraschalltechnik erlaubt eine strahlenfreie Abklärung – auch transrektal oder als Farbduplex.",
    ],
  },
  {
    title: "Röntgen & Durchleuchtung",
    category: "diagnostik",
    excerpt: "Konventionelle Aufnahmen, digitale Durchleuchtung und interventionelle Diagnostik.",
    details: [
      "Wir führen konventionelle Röntgenaufnahmen, digitale Durchleuchtung und interventionelle Diagnostik zur Abklärung bei Hämaturie (Blut im Urin), Tumorverdacht und Harnsteinen durch. Außerdem wechseln wir Ihnen selbstverständlich einliegende Harnleiterschienen.",
    ],
  },
  {
    title: "Labor",
    category: "diagnostik",
    excerpt: "Umfassende Blutparameter inklusive Hormondiagnostik aus eigenem Praxislabor.",
    details: [
      "Wir bestimmen sämtliche Blutparameter in unserem praxiseigenen Labor für Sie - für schnelle und zuverlässige Ergebnisse. Hierzu zählen z.B. PSA, Hormone, Entzündungswerte und weitere Parameter, um Diagnostik und Therapie eng zu steuern.",
    ],
  },
  {
    title: "Urologische Onkologie",
    category: "tumor",
    excerpt: "Diagnostik, Therapie und Nachsorge sämtlicher urologischer Tumoren.",
    details: [
      "Die Diagnostik, Behandlung und Nachsorge urologischer Krebserkrankungen stellt einen besonderen Schwerpunkt unserer Praxis dar. Wir verfügen über langjährige Erfahrungen mit sämtlichen Formen der konservativen und operativen Tumorbehandlung in allen Erkrankungsstadien.",
      "Wir orientieren uns an wissenschaftlich fundierten Therapiestandards sowie aktuellen Studienergebnissen und Leitlinien der Deutschen Gesellschaft für Urologie (DGU), der europäischen urologischen Gesellschaft (EAU) und der amerikanischen urologischen Gesellschaft (AUA). Es besteht zudem eine Kooperation mit dem interdisziplinären Prostatakarzinomzentrum des Universitätsklinikums Ulm bzw. des Comprehensive Cancer Center Universitätsklinikum Ulm (CCCU).",
    ],
  },
  {
    title: "Chemo- & Immuntherapien",
    category: "tumor",
    excerpt: "Ambulante und stationäre medikamentöse Tumortherapien durch zertifizierte Fachärzte.",
    details: [
      "Wir führen jeweils die personengebundene Facharztbezeichnung 'Medikamentöse Tumortherapie', die besondere Kenntnisse in der onkologischen Therapie urologischer Krebserkrankungen nachweist, und führen Chemotherapie bzw. Immuntherapien bei allen urologischen Krebserkrankungen durch.",
    ],
  },
  {
    title: "Krebsvorsorge beim Mann",
    category: "maennergesundheit",
    excerpt: "Früherkennung nach G-BA-Richtlinie plus sinnvolle Zusatzleistungen.",
    details: [
      "Gemäß den G-BA-Richtlinien für das Leistungsspektrum gesetzlich krankenversicherter Patienten bieten wir für Männer die gezielte Anamnese, eine Untersuchung des äußeren Genitals, die rektale Prostatapalpation und den regionären Lymphknoten-Check gemäß Vorgaben ab 45 Jahren durch. Zudem bieten wir sowohl für Frauen als auch für Männer die Früherkennung von Krebserkrankungen der Haut ab dem Alter von 35 Jahren sowie des Rektums und des übrigen Dickdarms ab dem Alter von 50 Jahren an.",
      "Unserer Meinung nach sinnvolle Zusatzuntersuchungen wie Ultraschalluntersuchung der Nieren oder die Bestimmung des PSA-Werts sind im Rahmen der gesetzlichen Leistungen nicht enthalten. Gerne bieten wir Ihnen diese Untersuchungen allerdings als zusätzliche Leistung an.",
      "Medizinisch notwendige Untersuchungen führen wir selbstverständlich zu Lasten der gesetzlichen Krankenversicherung  - d.h. ohne zusätzliche Kosten für Sie - durch.",
    ],
  },
  {
    title: "Andrologie & Sexualmedizin",
    category: "maennergesundheit",
    excerpt: "Diagnostik und Therapie bei Fertilitäts-, Hormon- und Sexualitätsfragen.",
    details: [
      "Die Andrologie umfasst die Physiologie und Pathologie der männlichen Fortpflanzungsfunktionen, sexualmedizinische und endokrinologische Aspekte und die Problematik des alternden Mannes in Forschung und Klinik. Wir behandeln Infertilität, Hypogonadismus und Erektionsstörungen. Außerdem beraten wir Sie zur Sterilisation und begleiten Männer im Alterungsprozess.",
    ],
  },
  {
    title: "Sexualität des Mannes",
    category: "maennergesundheit",
    excerpt: "Individuelle Abklärung bei nachlassender Libido oder Potenz.",
    details: [
      "Die Sexualität des Menschen ist ein Zusammenspiel verschiedener biologischer, psychischer und sozialer Faktoren. Mit dem Älterwerden können die sexuelle Lust und die Erektionsfähigkeit (Potenz) nachlassen. Einige Männer nehmen bereits ab dem 40. Lebensjahr Veränderungen wahr, die individuell sehr unterschiedlich sein können. Die spezifischen Ursachen können erkannt und erfolgreich behandelt werden. Wenn Sie Veränderungen Ihrer sexuellen Leistungsfähigkeit und Potenz feststellen, sprechen Sie uns bitte vertrauensvoll an.",
    ],
  },
  {
    title: "Wechseljahre des Mannes",
    category: "maennergesundheit",
    excerpt: "Diagnose und Behandlung hormoneller Veränderungen im Alter.",
    details: [
      "Auch bei Männern kann es mit zunehmendem Alter zu Veränderungen im Hormonhaushalt kommen. Gemeinsam mit anderen Faktoren können dadurch vielfältige Beschwerden wie Abgeschlagenheit, Lustlosigkeit, Antriebsarmut, Konzentrationsmangel u.a. ausgelöst werden. Durch eine entsprechende Labordiagnostik kann ein relevanter Hormonmangel erkannt und ggf. auch therapiert werden.",
    ],
  },
  {
    title: "Infertilität & Kinderwunsch",
    category: "maennergesundheit",
    excerpt: "Spermiogramm, Hormondiagnostik und weiterführende Beratung.",
    details: [
      "Die Spermauntersuchung (Spermiogramm) ist die zentrale Untersuchung, um die Zeugungsfähigkeit des Mannes zu beurteilen. Wir beraten Sie und führen ggf.weitere Hormonanalysen durch.",
    ],
  },
  {
    title: "Infektionen",
    category: "haeufige-beschwerden",
    excerpt: "Abklärung wiederkehrender Blasenentzündungen und Geschlechtskrankheiten.",
    details: [
      "Wiederholt auftretende Blasenentzündungen von Frau und Mann sollten fachgerecht abgeklärt werden. Besonders wichtig ist die exakte Erregerdiagnostik und ggf. gezielte Therapie. Wir beraten Sie auch über natürliche Prophylaxemaßnahmen. Auch die Diagnostik und Therapie von Geschlechtserkrankungen gehört zu unserem Spektrum.",
    ],
  },
  {
    title: "Inkontinenz",
    category: "haeufige-beschwerden",
    excerpt: "Diagnostik und Therapie bei Harnverlust und Senkungsbeschwerden.",
    details: [
      "Je nach Ursache setzen wir medikamentöse oder operative Maßnahmen ein, um Harninkontinenz (Harnverlust) und Senkungsbeschwerden abzuklären und zu therapieren.",
    ],
  },
] as const

type ServiceItem = (typeof services)[number]

export function Services() {
  const [activeCategory, setActiveCategory] = useState<"all" | ServiceCategory>("all")
  const [showAll, setShowAll] = useState(false)
  const isMobile = useIsMobile()

  const limit = isMobile ? 4 : 6

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory)

  const hasOverflow = filteredServices.length > limit
  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, limit)

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
                onClick={() => {
                  setActiveCategory(cat)
                  setShowAll(false)
                }}
              >
                {label}
              </Button>
            )
          })}
        </div>

        {/* Grid statt Carousel */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-start">
          {visibleServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {!showAll && hasOverflow && (
          <div className="mt-8 text-center">
            <Button variant="link" className="text-base font-semibold" onClick={() => setShowAll(true)}>
              Weitere Leistungen anzeigen...
            </Button>
          </div>
        )}

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
    <Card className="border-border bg-background/95 shadow-sm flex flex-col min-h-[280px] sm:min-h-[280px]">
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

      <CardContent className="pt-0 flex-1 flex flex-col">
        <Collapsible open={open} onOpenChange={setOpen} className="flex-1 flex flex-col">
          <CollapsibleContent className="flex-1">
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              {service.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </CollapsibleContent>
          {service.details.length > 0 && (
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="px-4 text-primary hover:text-white font-medium mt-auto"
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

