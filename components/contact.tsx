"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"
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

export function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Kontakt & Terminvereinbarung
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Vereinbaren Sie Ihren Termin in Ehingen oder Blaubeuren telefonisch oder online. Über das Formular erreichen Sie uns
            jederzeit, wir melden uns zeitnah zurück.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            Mehr zu unserem Angebot finden Sie im Bereich {" "}
            <Link href="/#leistungen" prefetch={false} className="text-primary hover:text-accent font-semibold">
              Leistungen
            </Link>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Standort Ehingen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="text-muted-foreground">
                    Spitalstraße 29
                    <br />
                    89584 Ehingen (Donau)
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefon
                  </p>
                  <a href="tel:+497391781080" className="text-primary hover:text-accent">
                    07391/781080
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-Mail
                  </p>
                  <a href="mailto:info@uro-ehingen.de" className="text-primary hover:text-accent">
                    info@uro-ehingen.de
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Standort Blaubeuren
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="text-muted-foreground">
                    Ulmer Straße 26
                    <br />
                    89143 Blaubeuren
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefon
                  </p>
                  <a href="tel:+497344923932" className="text-primary hover:text-accent">
                    07344/923932
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-Mail
                  </p>
                  <a href="mailto:info@uro-ehingen.de" className="text-primary hover:text-accent">
                    info@uro-ehingen.de
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
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
