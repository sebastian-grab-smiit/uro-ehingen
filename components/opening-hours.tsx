import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function OpeningHours() {
  return (
    <section id="sprechzeiten" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Sprechzeiten
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Unsere Praxiszeiten für Ehingen und Blaubeuren.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto border-border bg-primary/5">
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
    </section>
  )
}
