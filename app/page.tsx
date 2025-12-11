import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { OpeningHours } from "@/components/opening-hours"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Urologisches Zentrum Ehingen - Blaubeuren",
  description:
    "Ihre Urologen in Ehingen und Blaubeuren: Moderne Diagnostik, persönliche Beratung, großzügige Sprechzeiten und schnelle Terminvergabe.",
  alternates: {
    canonical: "/",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.uro-ehingen.de/#business-ehingen",
      name: "Urologisches Zentrum Ehingen",
      url: "https://www.uro-ehingen.de/",
      telephone: "+49-7391-781080",
      image: "https://www.uro-ehingen.de/modern-medical-practice-waiting-room-with-comforta.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Spitalstraße 29",
        postalCode: "89584",
        addressLocality: "Ehingen (Donau)",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.2817,
        longitude: 9.7249,
      },
      openingHoursSpecification: [
        { dayOfWeek: "Monday", opens: "08:00", closes: "18:00" },
        { dayOfWeek: "Tuesday", opens: "08:00", closes: "16:00" },
        { dayOfWeek: "Wednesday", opens: "07:30", closes: "16:00" },
        { dayOfWeek: "Thursday", opens: "08:00", closes: "16:00" },
        { dayOfWeek: "Friday", opens: "08:00", closes: "13:00" },
      ],
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.uro-ehingen.de/#business-blaubeuren",
      name: "Urologisches Zentrum Blaubeuren",
      url: "https://www.uro-ehingen.de/",
      telephone: "+49-7344-923932",
      image: "https://www.uro-ehingen.de/modern-medical-practice-waiting-room-with-comforta.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ulmer Straße 26",
        postalCode: "89143",
        addressLocality: "Blaubeuren",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.4087,
        longitude: 9.7855,
      },
      openingHoursSpecification: [
        { dayOfWeek: "Monday", opens: "08:00", closes: "16:00" },
        { dayOfWeek: "Tuesday", opens: "08:00", closes: "16:00" },
        { dayOfWeek: "Wednesday", opens: "08:00", closes: "12:00" },
        { dayOfWeek: "Thursday", opens: "08:00", closes: "16:00" },
        { dayOfWeek: "Friday", opens: "08:00", closes: "16:00" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: "https://www.uro-ehingen.de/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Leistungen",
          item: "https://www.uro-ehingen.de/#leistungen",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kontakt",
          item: "https://www.uro-ehingen.de/#kontakt",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Benötige ich eine Überweisung für einen Termin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gesetzlich versicherte Patientinnen und Patienten können mit oder ohne Überweisung kommen – mit Überweisung geht die Anmeldung schneller.",
          },
        },
        {
          "@type": "Question",
          name: "Welche Standorte kann ich wählen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wir behandeln Sie in Ehingen (Spitalstraße 29) oder Blaubeuren (Ulmer Straße 26). Geben Sie Ihren Wunschstandort bei der Terminbuchung an.",
          },
        },
        {
          "@type": "Question",
          name: "Bieten Sie kurzfristige Termine an?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Akutfälle erhalten nach telefonischer Absprache schnelle Termine. Nutzen Sie dafür bitte unsere Telefonnummern auf der Kontaktseite.",
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
