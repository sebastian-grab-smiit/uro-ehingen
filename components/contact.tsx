"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock, Pin } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Benötige ich eine Überweisung für einen Termin?",
    answer:
      "Sie können mit oder ohne Überweisung erscheinen. Mit Überweisung beschleunigen Sie jedoch die Anmeldung und die Befundübermittlung.",
  },
  {
    question: "Kann ich den Standort frei wählen?",
    answer:
      "Ja, geben Sie bei der Terminanfrage einfach Ehingen oder Blaubeuren an. Wir koordinieren freie Slots zwischen beiden Praxen.",
  },
  {
    question: "Wie erhalte ich kurzfristig Hilfe?",
    answer:
      "Bei akuten Beschwerden rufen Sie bitte sofort an. Wir halten täglich Notfallzeiten frei und organisieren bei Bedarf Haus- oder Kliniküberweisungen.",
  },
]

const locations = [
  {
    name: "Ehingen",
    address: ["Spitalstraße 29", "89584 Ehingen (Donau)"] as const,
    phone: {
      display: "07391/781080",
      href: "tel:+497391781080",
    },
    email: "info@uro-ehingen.de",
    hours: [
      { day: "Montag", time: "8:00 - 18:00" },
      { day: "Dienstag", time: "8:00 - 16:00" },
      { day: "Mittwoch", time: "7:30 - 16:00" },
      { day: "Donnerstag", time: "8:00 - 16:00" },
      { day: "Freitag", time: "8:00 - 13:00" },
    ],
  },
  {
    name: "Blaubeuren",
    address: ["Ulmer Straße 26", "89143 Blaubeuren"] as const,
    phone: {
      display: "07344/923932",
      href: "tel:+497344923932",
    },
    email: "info@uro-ehingen.de",
    hours: [
      { day: "Montag", time: "8:00 - 16:00" },
      { day: "Dienstag", time: "8:00 - 16:00" },
      { day: "Mittwoch", time: "8:00 - 12:00" },
      { day: "Donnerstag", time: "8:00 - 16:00" },
      { day: "Freitag", time: "n. Vereinb." },
    ],
  },
] as const

export function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Kontakt & Terminvereinbarung
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Alle Kontaktwege und Sprechzeiten für Ehingen und Blaubeuren auf einen Blick. Melden Sie sich telefonisch oder
            per E-Mail – wir koordinieren zeitnahe Termine.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            Mehr zu unserem Angebot finden Sie im Bereich {" "}
            <Link href="#leistungen" prefetch={false} className="text-primary hover:text-accent font-semibold">
              Leistungen
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((location) => (
            <Card key={location.name} className="border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Standort {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    {/* <Clock className="h-4 w-4" /> */}
                    Sprechzeiten
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {location.hours.map((slot) => (
                      <div
                        key={`${location.name}-${slot.day}`}
                        className="flex items-center justify-between gap-6"
                      >
                        <span>{slot.day}</span>
                        <span>{slot.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Adresse
                  </p>
                  <p className="text-muted-foreground">
                    {location.address[0]}
                    <br />
                    {location.address[1]}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefon
                  </p>
                  <a href={location.phone.href} className="text-primary hover:text-accent">
                    {location.phone.display}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-Mail
                  </p>
                  <a href={`mailto:${location.email}`} className="text-primary hover:text-accent">
                    {location.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="max-w-4xl mx-auto bg-background border border-border rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">Häufige Fragen</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-border/60 rounded-xl p-5 bg-secondary/30">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
