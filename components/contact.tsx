"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Kontakt & Terminvereinbarung
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Vereinbaren Sie einen Termin oder kontaktieren Sie uns bei Fragen. Wir sind gerne für Sie da.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
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
                    Hauptstraße 45
                    <br />
                    89584 Ehingen (Donau)
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefon
                  </p>
                  <a href="tel:+497391777770" className="text-primary hover:text-accent">
                    07391 777770
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
                    Karlstraße 28
                    <br />
                    89143 Blaubeuren
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefon
                  </p>
                  <a href="tel:+497344929292" className="text-primary hover:text-accent">
                    07344 929292
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Sprechzeiten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Montag - Freitag</span>
                  <span className="font-medium text-foreground">8:00 - 12:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Montag, Dienstag, Donnerstag</span>
                  <span className="font-medium text-foreground">14:00 - 17:00 Uhr</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">Termine nach Vereinbarung</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Terminanfrage</CardTitle>
              <CardDescription>Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vorname">Vorname *</Label>
                    <Input id="vorname" placeholder="Max" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nachname">Nachname *</Label>
                    <Input id="nachname" placeholder="Mustermann" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" type="email" placeholder="max@beispiel.de" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefon *</Label>
                  <Input id="telefon" type="tel" placeholder="0123 456789" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="standort">Bevorzugter Standort</Label>
                  <select
                    id="standort"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option>Ehingen</option>
                    <option>Blaubeuren</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nachricht">Ihre Nachricht</Label>
                  <Textarea id="nachricht" placeholder="Teilen Sie uns Ihr Anliegen mit..." rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Terminanfrage senden
                </Button>
                <p className="text-xs text-muted-foreground">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
