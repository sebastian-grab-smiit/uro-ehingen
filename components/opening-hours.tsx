import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function OpeningHours() {
  const schedules = [
    {
      location: "Ehingen",
      slots: [
        { day: "Montag", time: "8:00 - 18:00" },
        { day: "Dienstag", time: "8:00 - 16:00" },
        { day: "Mittwoch", time: "7:30 - 16:00" },
        { day: "Donnerstag", time: "8:00 - 16:00" },
        { day: "Freitag", time: "8:00 - 13:00" },
      ],
    },
    {
      location: "Blaubeuren",
      slots: [
        { day: "Montag", time: "8:00 - 16:00" },
        { day: "Dienstag", time: "8:00 - 16:00" },
        { day: "Mittwoch", time: "8:00 - 12:00" },
        { day: "Donnerstag", time: "8:00 - 16:00" },
        { day: "Freitag", time: "n. Vereinb." },
      ],
    },
  ] as const

  return (
    <section id="oeffnungszeiten" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Sprechzeiten
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Unsere Praxiszeiten für Ehingen und Blaubeuren.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {schedules.map(({ location, slots }) => (
            <Card key={location} className="border-border bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Clock className="h-5 w-5 text-primary" />
                  Sprechzeiten {location}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {slots.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-base">
                    <span className="text-foreground font-medium">{day}</span>
                    <span className="text-foreground">{time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
