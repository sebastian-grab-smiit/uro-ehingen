import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>

            <div className="prose prose-slate max-w-3xl mx-auto space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Pflichtangaben nach § 5 Teledienstgesetz (TMG)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. med. Florian Finter<br />
                  Dr. med. Thomas Neßlauer<br />
                  Jürgen Prang<br />
                  Fachärzte für Urologie, Überörtliche Berufsausübungsgemeinschaft (ÜBAG)
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Spitalstr. 29<br />
                  89584 Ehingen
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Telefon: 07391 781080<br />
                  Telefax: 07391 7810829
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ulmer Str. 26<br />
                  89143 Blaubeuren
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Telefon: 07344/923932<br />
                  Telefax: 07344/9235070<br />
                  E-Mail: <a href="mailto:Info@uro-ehingen.de" className="text-primary hover:underline">Info@uro-ehingen.de</a><br />
                  Internet:{" "}
                  <a href="https://www.uro-ehingen.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.uro-ehingen.de
                  </a>{" "}
                  <a href="https://www.uro-blaubeuren.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.uro-blaubeuren.de
                  </a>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Inhaber: Dr. med. Florian Finter, Dr. med. Thomas Neßlauer, Jürgen Prang
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Gesetzliche Berufsbezeichnung</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Arzt, Facharzt für Urologie (Bundesrepublik Deutschland)
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Zuständige Kammer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Landesärztekammer Baden-Württemberg,<br />
                  Bezirksärztekammer Südwürttemberg,<br />
                  Haldenhaustraße 11, 72770 Reutlingen,<br />
                  Telefon: 07121 91 70, Telefax: 07121 91 72 400,<br />
                  Internet:{" "}
                  <a href="https://www.baek-sw.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.baek-sw.de
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Kassenärztliche Vereinigung</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kassenärztliche Vereinigung Baden-Württemberg,<br />
                  Haldenhaustraße 11, 72770 Reutlingen,<br />
                  Telefon: 07121 91 70, Telefax: 07121 91 72 400,<br />
                  Internet:{" "}
                  <a href="https://www.kvbw.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.kvbw.de
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Berufsrechtliche Regelung</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Berufsordnung der Landesärztekammer Baden-Württemberg,<br />
                  Internet:{" "}
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV
                </h2>
                <p className="text-muted-foreground leading-relaxed">Dr. med. Florian Finter</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Haftungsausschluss</h2>

                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Haftung für Inhalte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obwohl wir uns um Aktualität, Vollständigkeit und Richtigkeit der Inhalte unserer Seiten bemühen, können
                  wir hierfür keine Garantie übernehmen. Nach § 7 Absatz 1 TDG sind wir als Diensteanbieter für eigene
                  Inhalte auf unseren Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur
                  Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch nicht (§§ 8-10 TDG).
                  Sobald uns Rechtsverstöße bekannt werden, werden wir die entsprechenden Inhalte umgehend entfernen. Eine
                  dahingehende Haftung wird jedoch erst ab dem Zeitpunkt der Kenntnis konkreter Rechtsverletzungen
                  übernommen.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Haftung für Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unsere Seiten enthalten Links auf externe Webseiten Dritter. Auf die Inhalte dieser verlinkten Webseiten
                  haben wir keinen Einfluss. Für die Richtigkeit der Inhalte ist immer der jeweilige Anbieter oder Betreiber
                  verantwortlich, weshalb wir diesbezüglich keinerlei Gewähr übernehmen. Die fremden Webseiten haben wir zum
                  Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Zum Zeitpunkt der Verlinkung waren
                  keinerlei Rechtsverletzungen erkennbar. Eine ständige Überprüfung sämtlicher Inhalte der von uns
                  verlinkten Seiten ohne tatsächliche Anhaltspunkte für einen Rechtsverstoß können wir nicht leisten. Falls
                  uns Rechtsverletzungen bekannt werden, werden wir die entsprechenden Links sofort entfernen.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
                  Rechtswirksamkeit dieses Haftungsausschlusses
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sollten einzelne Regelungen oder Formulierungen dieses Haftungsausschlusses unwirksam sein oder werden,
                  bleiben die übrigen Regelungen in ihrem Inhalt und ihrer Gültigkeit hiervon unberührt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quelle:{" "}
                  <a
                    href="https://www.anwalt-seiten.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.anwalt-seiten.de
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Urheberrecht</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die durch den Betreiber dieser Seite erstellten Inhalte und Werke auf diesen Webseiten unterliegen dem
                  deutschen Urheberrecht. Sämtliche Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
                  Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                  schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Kopien von diesen Seiten sind nur für den
                  privaten Bereich gestattet, nicht jedoch für kommerzielle Zwecke.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quelle:{" "}
                  <a
                    href="https://www.anwalt-seiten.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.anwalt-seiten.de
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Datenschutz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Für die Sicherheit der Datenübertragung im Internet können wir keine Gewähr übernehmen, insbesondere
                  besteht bei der Übertragung von Daten per E-Mail die Gefahr des Zugriffs durch Dritte. Im Falle der
                  Erhebung personenbezogener Daten auf unseren Seiten erfolgt die Preisgabe dieser Daten seitens des Nutzers
                  stets auf freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist auch ohne
                  Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet, soweit dies
                  technisch möglich und zumutbar ist. Einer Nutzung der im Impressum veröffentlichten Kontaktdaten durch
                  Dritte zu Werbezwecken wird hiermit ausdrücklich widersprochen. Der Betreiber behält sich für den Fall
                  unverlangt zugesandter Werbe- oder Informationsmaterialien ausdrücklich rechtliche Schritte vor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quelle:{" "}
                  <a
                    href="https://www.anwalt-seiten.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.anwalt-seiten.de
                  </a>
                </p>
              </section>

              {/*
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Verwendung von Google Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google
                  Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine
                  Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über
                  Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und
                  dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse
                  von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des
                  Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
                  IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers
                  dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
                  Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websnutzung und der
                  Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von
                  Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google
                  zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                  Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall ggf. nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können.
                </p>
              </section>
              */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
