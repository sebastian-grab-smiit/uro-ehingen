import { Button } from "@/components/ui/button"
import { Calendar, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance leading-tight">
                Ihre Gesundheit in <span className="text-primary">erfahrenen Händen</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
                Willkommen im urologischen Zentrum für Ehingen und Blaubeuren – Ihrem Ansprechpartner für Vorsorge,
                Diagnostik und Andrologie mit kurzen Wegen, direkter Beratung und schneller Terminvergabe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <a href="tel:+497391781080" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>07391 / 781080</span>
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Standort Ehingen</h3>
                  <p className="text-sm text-muted-foreground">
                    Spitalstraße 29
                    <br />
                    89584 Ehingen (Donau)
                  </p>
                  <a
                    href="https://maps.google.com/?q=Spitalstraße+29+89584+Ehingen"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:text-accent mt-1 inline-flex items-center gap-1"
                  >
                    Route planen →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Standort Blaubeuren</h3>
                  <p className="text-sm text-muted-foreground">
                    Ulmer Straße 26
                    <br />
                    89143 Blaubeuren
                  </p>
                  <a
                    href="https://maps.google.com/?q=Ulmer+Straße+26+89143+Blaubeuren"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:text-accent mt-1 inline-flex items-center gap-1"
                  >
                    Route planen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-[420px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/leistung001.jpg"
              alt="Moderne Praxisräume"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
