import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uro-ehingen.de"),
  title: {
    default: "Urologisches Zentrum Ehingen-Blaubeuren",
    template: "%s | Urologisches Zentrum Ehingen-Blaubeuren",
  },
  description:
    "Urologisches Zentrum Ehingen - Blaubeuren: moderne Diagnostik, persönliche Betreuung, Terminvereinbarung per Telefon oder online.",
  keywords: [
    "Urologie Ehingen",
    "Urologe Blaubeuren",
    "Urologisches Zentrum",
    "Dr. Neßlauer",
    "Dr. Finter",
    "Jürgen Prang",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.uro-ehingen.de/",
    siteName: "Urologisches Zentrum Ehingen-Blaubeuren",
    title: "Urologisches Zentrum Ehingen - Blaubeuren",
    description:
      "Praxis für Urologie und Andrologie in Ehingen und Blaubeuren mit umfassendem Leistungsspektrum und modernen Räumen.",
    images: [
      {
        url: "/modern-medical-practice-waiting-room-with-comforta.jpg",
        width: 1200,
        height: 630,
        alt: "Urologisches Zentrum Ehingen-Blaubeuren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@uroehingen",
    title: "Urologisches Zentrum Ehingen-Blaubeuren",
    description:
      "Fachärzte für Urologie in Ehingen und Blaubeuren – moderne Diagnostik, persönliche Betreuung, flexible Termine.",
    images: ["/og-uro-zentrum.jpg"],
  },
  applicationName: "Uro Ehingen-Blaubeuren",
  generator: "smiit",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
