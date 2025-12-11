import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-slate max-w-none space-y-8">

              {/* 1) Einleitung und Kontaktdaten */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
                <p className="text-muted-foreground leading-relaxed">
                  1.1 Wir freuen uns, dass Sie unsere Website besuchen, und bedanken uns für Ihr Interesse. Im Folgenden
                  informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website.
                  Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist
                  Urolog. Gem.-Praxis Dres. Finter, Nesslauer und Prang GbR, Spitalstr. 29, 89584 Ehingen, Deutschland,
                  Tel.: +49 7391/781080, Fax: +49 7391/7810829, E-Mail: info@uro-ehingen.de. Der für die Verarbeitung von personenbezogenen Daten
                  Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel
                  der Verarbeitung von personenbezogenen Daten entscheidet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  1.3 Der Verantwortliche hat einen Datenschutzbeauftragten bestellt, dieser ist wie folgt zu erreichen:
                  "Sonja Richter c/o Urologisches Zentrum Ehingen-Blaubeuren, Spitalstraße 29, 89584 Ehingen, 07391/781080, info@uro-ehingen.de"
                </p>
              </section>

              {/* 2) Datenerfassung */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2) Datenerfassung beim Besuch unserer Website</h2>
                <p className="text-muted-foreground leading-relaxed">
                  2.1 Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns
                  anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver
                  übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die
                  für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Unsere besuchte Website</li>
                  <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                  <li>Menge der gesendeten Daten in Byte</li>
                  <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                  <li>Verwendeter Browser</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der
                  Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung
                  der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu
                  überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  2.2 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und
                  anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw.
                  TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem
                  Schloss-Symbol in Ihrer Browserzeile erkennen.
                </p>
              </section>

              {/* 3) Hosting & CDN */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3) Hosting & Content-Delivery-Network</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir einen Anbieter, der seine
                  Leistungen selbst oder durch ausgewählte Sub-Unternehmer ausschließlich auf Servern innerhalb der
                  Europäischen Union erbringt. Sämtliche auf unserer Website erhobenen Daten werden auf diesen Servern verarbeitet.
                  Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer
                  Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
                </p>
              </section>

              {/* 4) Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4) Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen,
                  verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden
                  diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog. „Session-Cookies“), teilweise
                  verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen
                  (sog. „persistente Cookies“). Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den
                  Cookie-Einstellungen Ihres Webbrowsers entnehmen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt
                  die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6
                  Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung
                  unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer
                  kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln
                  über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
                  können. Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website
                  eingeschränkt sein kann.
                </p>
              </section>

              {/* 5) Kontaktaufnahme */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5) Kontaktaufnahme</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten
                  erhoben. Welche Daten im Falle der Nutzung eines Kontaktformulars erhoben werden, ist aus dem jeweiligen
                  Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens
                  bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet.
                  Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres
                  Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab,
                  so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach
                  abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich aus den Umständen entnehmen
                  lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </p>
              </section>

              {/* 6) Seitenfunktionalitäten */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6) Seitenfunktionalitäten</h2>

                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.1 Google Maps</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Webseite nutzt einen Online-Kartendienst des folgenden Anbieters: Google Maps (API) von Google
                  Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland (“Google”). Google Maps ist ein
                  Webdienst zur Darstellung von interaktiven (Land-)Karten, um geographische Informationen visuell darzustellen.
                  Über die Nutzung dieses Dienstes wird Ihnen unser Standort angezeigt und eine etwaige Anfahrt erleichtert.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bereits beim Aufrufen derjenigen Unterseiten, in die die Karte von Google Maps eingebunden ist, werden
                  Informationen über Ihre Nutzung unserer Website (wie z.B. Ihre IP-Adresse) an Server von Google übertragen
                  und dort gespeichert, hierbei kann es auch zu einer Übermittlung an die Server der Google LLC. in den USA
                  kommen. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind
                  oder ob ein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto
                  zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor
                  Aktivierung des Buttons ausloggen. Google speichert Ihre Daten (selbst für nicht eingeloggte Nutzer) als
                  Nutzungsprofile und wertet diese aus.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Die Erhebung, Speicherung und die Auswertung erfolgen gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis des
                  berechtigten Interesses von Google an der Einblendung personalisierter Werbung, Marktforschung und/oder der
                  bedarfsgerechten Gestaltung von Google-Websites. Ihnen steht ein Widerspruchsrecht gegen die Bildung dieser
                  Nutzerprofile zu, wobei Sie sich für dessen Ausübung an Google wenden müssen. Wenn Sie mit der künftigen
                  Übermittlung Ihrer Daten an Google im Rahmen der Nutzung von Google Maps nicht einverstanden sind, besteht
                  auch die Möglichkeit, den Webdienst von Google Maps vollständig zu deaktivieren, indem Sie die Anwendung
                  JavaScript in Ihrem Browser ausschalten. Google Maps und damit auch die Kartenanzeige auf dieser
                  Internetseite kann dann nicht genutzt werden.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Soweit rechtlich erforderlich, haben wir zur vorstehend dargestellten Verarbeitung Ihrer Daten Ihre
                  Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt. Sie können Ihre erteilte Einwilligung jederzeit
                  mit Wirkung für die Zukunft widerrufen. Um Ihren Widerruf auszuüben, befolgen Sie bitte die vorstehend
                  geschilderte Möglichkeit zur Vornahme eines Widerspruchs. Für Datenübermittlungen in die USA hat sich der
                  Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines
                  Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus
                  sicherstellt. Weitere Hinweise zum Datenschutz von Google finden sich hier:{" "}
                  <a
                    href="https://business.safety.google/intl/de/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://business.safety.google/intl/de/privacy/
                  </a>
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">6.2 Google Web Fonts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts des folgenden
                  Anbieters: Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland. Beim Aufruf einer
                  Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browser-Cache, um Texte und Schriftarten korrekt
                  anzuzeigen und stellt eine direkte Verbindung zu den Servern des Anbieters her. Hierbei werden bestimmte
                  Browserinformationen, einschließlich Ihrer IP-Adresse, an den Anbieter übermittelt. Daten können zudem
                  übermittelt werden an: Google LLC, USA.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Die Verarbeitung von personenbezogenen Daten im Zuge der Verbindungsaufnahme mit dem Anbieter der
                  Schriftarten wird nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre
                  ausdrückliche Einwilligung erteilt haben. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für
                  die Zukunft widerrufen, indem Sie diesen Dienst über das auf der Webseite bereitgestellte
                  „Cookie-Consent-Tool“ deaktivieren. Falls Ihr Browser keine Web Fonts unterstützt, wird eine
                  Standardschrift von Ihrem Computer genutzt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy
                  Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die
                  Einhaltung des europäischen Datenschutzniveaus sicherstellt. Weitere Hinweise zu den
                  Datenschutzbestimmungen von Google finden sich hier:{" "}
                  <a
                    href="https://business.safety.google/intl/de/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://business.safety.google/intl/de/privacy/
                  </a>
                </p>
              </section>

              {/* 7) Cookie-Consent-Tool */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7) Tools und Sonstiges</h2>
                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Cookie-Consent-Tool</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen für einwilligungspflichtige Cookies und
                  cookie-basierte Anwendungen ein sog. „Cookie-Consent-Tool“. Das „Cookie-Consent-Tool“ wird Nutzern bei
                  Seitenaufruf in Form einer interaktiven Benutzeroberfläche angezeigt, auf welcher sich per Häkchensetzung
                  Einwilligungen für bestimmte Cookies und/oder cookie-basierte Anwendungen erteilen lassen. Hierbei werden
                  durch den Einsatz des Tools alle einwilligungspflichtigen Cookies/Dienste nur dann geladen, wenn der
                  jeweilige Nutzer entsprechende Einwilligungen per Häkchensetzung erteilt. So wird sichergestellt, dass nur
                  im Falle einer erteilten Einwilligung derartige Cookies auf dem jeweiligen Endgerät des Nutzers gesetzt
                  werden.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Das Tool setzt technisch notwendige Cookies, um Ihre Cookie-Präferenzen zu speichern. Personenbezogene
                  Nutzerdaten werden hierbei grundsätzlich nicht verarbeitet. Kommt es im Einzelfall zum Zwecke der
                  Speicherung, Zuordnung oder Protokollierung von Cookie-Einstellungen doch zur Verarbeitung personenbezogener
                  Daten (wie etwa der IP-Adresse), erfolgt diese gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
                  berechtigten Interesses an einem rechtskonformen, nutzerspezifischen und nutzerfreundlichen
                  Einwilligungsmanagement für Cookies und mithin an einer rechtskonformen Ausgestaltung unseres
                  Internetauftritts. Weitere Rechtsgrundlage für die Verarbeitung ist ferner Art. 6 Abs. 1 lit. c DSGVO. Wir
                  unterliegen als Verantwortliche der rechtlichen Verpflichtung, den Einsatz technisch nicht notwendiger
                  Cookies von der jeweiligen Nutzereinwilligung abhängig zu machen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Soweit erforderlich, haben wir mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den
                  Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
                  Weitere Informationen zum Betreiber und den Einstellungsmöglichkeiten des Cookie-Consent-Tools finden Sie
                  direkt in der entsprechenden Benutzeroberfläche auf unserer Website.
                </p>
              </section>

              {/* 8) Rechte des Betroffenen */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8) Rechte des Betroffenen</h2>
                <p className="text-muted-foreground leading-relaxed">
                  8.1 Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung
                  Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte),
                  wobei für die jeweiligen Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
                  <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
                  <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
                  <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
                  <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
                  <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
                  <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;</li>
                  <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">8.2 WIDERSPRUCHSRECHT</h3>
                <p className="text-muted-foreground leading-relaxed">
                  WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN
                  BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER
                  BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
                  MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE
                  WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                  NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE
                  VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS
                  RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
                  DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUSÜBEN. MACHEN SIE VON
                  IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU
                  DIREKTWERBEZWECKEN.
                </p>
              </section>

              {/* 9) Dauer der Speicherung */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9) Dauer der Speicherung personenbezogener Daten</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage,
                  am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen
                  Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art.
                  6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung
                  widerrufen. Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw.
                  rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet
                  werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht
                  mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes
                  Interesse an der Weiterspeicherung fortbesteht.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese
                  Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn,
                  wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                  Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6
                  Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21
                  Abs. 2 DSGVO ausüben.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen
                  nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für
                  die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
                </p>
              </section>

              {/* Copyright-Hinweis */}
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Copyright-Hinweis:</strong> Diese Datenschutzerklärung wurde von den Fachanwälten der IT-Recht Kanzlei
                  erstellt und ist urheberrechtlich geschützt (
                  <a
                    href="https://www.it-recht-kanzlei.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://www.it-recht-kanzlei.de
                  </a>
                  ).
                </p>
              </section>

              {/* Stand */}
              <section className="mt-8 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Stand: 10.09.2025, 13:10:40</p>
              </section>

              {/* 321 MED – Online-Rezeption (wortgleich) */}
              <section className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Diese Website nutzt den Online-Rezeptionsservicedienst 321 MED für die digitale, online-basierte Kommunikation
                  und Interaktion zwischen Patienten/-innen und Gesundheitseinrichtungen und/oder Arztpraxen. Dienstanbieter ist
                  die 321 MED GmbH, Am heimlichen Grund 5, 92421 Schwandorf.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  321 MED ermöglicht uns eine unmittelbare Online-Betreuung unserer Patienten/-innen sowie eine schnelle und
                  unkomplizierte Kommunikation mit unseren Patienten/-innen.  Wenn Sie auf unserer Website über unsere
                  Online-Rezeption Daten, etwa Ihre Kontaktdaten, zum Zwecke des der Kommunikation mit uns eingeben, werden
                  diese auf den Servern von 321 MED in Deutschland gespeichert. Ja nach individueller Konfiguration und
                  Eingabe werden im Rahmen der Nutzung unseres Online-Rezeptionsdienstes unter Umständen personenbezogene Daten
                  und/oder Gesundheitsdaten erfasst.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Die Nutzung von 321 MED erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote sowie
                  der Bereitstellung eines unmittelbaren und schnellen Services. Dies stellt ein berechtigtes Interesse dar,
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Datenverarbeitung mittels 321 MED erfolgt mittels der
                  von Ihnen zur Verfügung gestellten/eingegebenen Daten auf Grundlage Ihrer Einwilligung, Art. 6 Abs. 1 lit. a
                  DSGVO. Soweit Sie optionale Daten wie Geschlecht oder Gesundheitsdaten angeben, erfolgt die
                  Datenverarbeitung auf Grundlage Ihrer Einwilligung gem. Art. 9 Abs. 2 lit. a DSGVO. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wenn Sie nicht möchten, dass Ihre Daten an 321 MED übertragen werden, können Sie Ihre Einwilligung zur
                  Verarbeitung Ihrer personenbezogenen Daten oder Gesundheitsdaten jederzeit durch eine Nachricht an uns
                  widerrufen. Wenn Sie Ihre Einwilligung widerrufen, werden Ihre Daten bei uns bzw. bei 321 MED gelöscht.
                  Bitte beachten Sie, dass Sie in diesem Fall aber möglicherweise nicht (mehr) sämtliche Funktionen unseres
                  Online-Rezeptionsdienstes vollständig nutzen können. Daten, die zu anderen Zwecken bei uns oder 321 MED
                  gespeichert wurden, bleiben hiervon unberührt. Die Rechtmäßigkeit bereits erfolgter
                  Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wir haben mit dem Anbieter 321 MED einen datenschutzrechtlich vorgeschriebenen Vertrag über
                  Auftragsverarbeitung (AVV) geschlossen. Hierbei handelt es sich um einen Vertrag, der gewährleistet, dass
                  der jeweilige Anbieter personenbezogene Daten der User unserer Website nur nach unseren Weisungen sowie
                  unter Einhaltung der DSGVO verarbeitet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Weitere Informationen zu den via 321 MED verarbeiteten Daten sowie darüber, welche Cookies wir verwenden und
                  wie Sie Ihre Cookie-Einstellungen verwalten können, finden Sie in der Datenschutzerklärung von 321 MED unter{" "}
                  <a
                    href="https://321med.com/de/dataprotection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    https://321med.com/de/dataprotection
                  </a>.
                </p>
              </section>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
