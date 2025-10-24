import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-muted-foreground leading-relaxed">
              Urologisches Zentrum Ehingen-Blaubeuren
              <br />
              Dr. med. Thomas Neßlauer
              <br />
              Dr. med. Florian Finter
              <br />
              Jürgen Prang
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Standort Ehingen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hehlestraße 2<br />
              89584 Ehingen
              <br />
              <br />
              Telefon: 07391 / 7030-0
              <br />
              Fax: 07391 / 7030-30
              <br />
              E-Mail: info@uro-ehingen.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Standort Blaubeuren</h2>
            <p className="text-muted-foreground leading-relaxed">
              Karlstraße 27
              <br />
              89143 Blaubeuren
              <br />
              <br />
              Telefon: 07344 / 9239-0
              <br />
              Fax: 07344 / 9239-29
              <br />
              E-Mail: info@uro-ehingen.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Berufsbezeichnung: Arzt/Ärztin (verliehen in der Bundesrepublik Deutschland)
              <br />
              <br />
              Zuständige Kammer: Landesärztekammer Baden-Württemberg
              <br />
              Jahnstraße 40, 70597 Stuttgart
              <br />
              <br />
              Zuständige Aufsichtsbehörde: Kassenärztliche Vereinigung Baden-Württemberg
              <br />
              Albstadtweg 11, 70567 Stuttgart
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Berufsrechtliche Regelungen</h2>
            <p className="text-muted-foreground leading-relaxed">
              - Berufsordnung für die Ärzte Baden-Württembergs
              <br />- Heilberufe-Kammergesetz Baden-Württemberg
              <br />
              <br />
              Die Regelungen finden Sie unter:{" "}
              <a
                href="https://www.aerztekammer-bw.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.aerztekammer-bw.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Haftungsausschluss</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Haftung für Inhalte</h3>
            <p className="text-muted-foreground leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
              Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Haftung für Links</h3>
            <p className="text-muted-foreground leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Urheberrecht</h3>
            <p className="text-muted-foreground leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
