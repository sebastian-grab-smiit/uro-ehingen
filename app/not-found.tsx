import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-4xl font-bold text-foreground">Seite nicht gefunden</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto text-pretty">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-5 w-5" />
              Zur Startseite
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Benötigen Sie Hilfe? Kontaktieren Sie uns unter{" "}
            <a href="tel:+4973919151550" className="text-primary hover:underline font-medium">
              07391/781080
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
