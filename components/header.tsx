"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Startseite", href: "#home" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Team", href: "#team" },
    { name: "Sprechzeiten", href: "#kontakt" },
    { name: "Kontakt", href: "#kontakt" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="#home" prefetch={false} className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/logo_neu.png"
                  alt="Urologisches Zentrum"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-foreground">Urologisches Zentrum</div>
                <div className="text-xs text-muted-foreground">Ehingen - Blaubeuren</div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={false}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <Button size="sm" asChild>
              <a href="tel:+497391781080" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Anrufen</span>
              </a>
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileMenuOpen}
              aria-controls="primary-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div id="primary-mobile-menu" className="md:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={false}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button size="sm" asChild className="w-full">
                <a href="tel:+497391781080" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Anrufen</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
