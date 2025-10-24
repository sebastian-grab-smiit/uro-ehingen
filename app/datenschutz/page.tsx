import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Wie erfassen wir Ihre Daten?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
              Daten handeln, die Sie in ein Kontaktformular eingeben.
              <br />
              <br />
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
              Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Wofür nutzen wir Ihre Daten?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
              Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
              Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Hosting und Content Delivery Networks (CDN)
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Externes Hosting</h3>
            <p className="text-muted-foreground leading-relaxed">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die
              auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
              a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Datenschutz</h3>
            <p className="text-muted-foreground leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
              <br />
              <br />
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
              Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
              und zu welchem Zweck das geschieht.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-muted-foreground leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              Urologisches Zentrum Ehingen-Blaubeuren
              <br />
              Dr. med. Thomas Neßlauer, Dr. med. Florian Finter, Jürgen Prang
              <br />
              Hehlestraße 2<br />
              89584 Ehingen
              <br />
              <br />
              Telefon: 07391 / 7030-0
              <br />
              E-Mail: info@uro-ehingen.de
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
              uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Recht auf Datenübertragbarkeit</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-muted-foreground leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
              von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Auskunft, Löschung und Berichtigung</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
              Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen
              Adresse an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Server-Log-Dateien</h3>
            <p className="text-muted-foreground leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
              <br />
              <br />- Browsertyp und Browserversion
              <br />- verwendetes Betriebssystem
              <br />- Referrer URL
              <br />- Hostname des zugreifenden Rechners
              <br />- Uhrzeit der Serveranfrage
              <br />- IP-Adresse
              <br />
              <br />
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die
              Server-Log-Files erfasst werden.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Kontaktformular</h3>
            <p className="text-muted-foreground leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
