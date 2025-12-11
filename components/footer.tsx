import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src="/logo_neu.png"
                  alt="Urologisches Zentrum"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-semibold">Urologisches Zentrum</div>
                <div className="text-xs opacity-80">Ehingen - Blaubeuren</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-md">
              Urologische Praxis mit persönlicher Betreuung und langjähriger Erfahrung. Ihre Gesundheit liegt
              uns am Herzen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#home" prefetch={false} className="opacity-80 hover:opacity-100 transition-opacity">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" prefetch={false} className="opacity-80 hover:opacity-100 transition-opacity">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#team" prefetch={false} className="opacity-80 hover:opacity-100 transition-opacity">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" prefetch={false} className="opacity-80 hover:opacity-100 transition-opacity">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="opacity-80 hover:opacity-100 transition-opacity">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="opacity-80 hover:opacity-100 transition-opacity">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Urologisches Zentrum Ehingen-Blaubeuren. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
