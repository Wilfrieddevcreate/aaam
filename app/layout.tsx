import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import LocaleProvider from "./lib/i18n/LocaleProvider";
import CookieBanner from "./components/CookieBanner";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aaam.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AAAM — African Alliance of Artist Managers",
    template: "%s | AAAM",
  },
  description:
    "Plateforme de formation, de masterclass et de communauté pour les professionnels de l'industrie musicale africaine. Fondée par Donald Jean-Marie GNIMADI.",
  keywords: [
    "AAAM", "African Alliance of Artist Managers", "industrie musicale africaine",
    "management artistique", "masterclass musique", "formation musique Afrique",
    "manager artiste", "Donald Jean-Marie GNIMADI", "Bénin", "musique africaine",
    "African music industry", "artist management Africa",
  ],
  authors: [{ name: "AAAM — African Alliance of Artist Managers" }],
  creator: "Donald Jean-Marie GNIMADI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "AAAM — African Alliance of Artist Managers",
    title: "AAAM — African Alliance of Artist Managers",
    description:
      "Le carrefour essentiel de l'innovation, de la collaboration et de l'excellence au sein de l'industrie musicale africaine.",
    images: [
      {
        url: "/images/logo-aaam-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "AAAM — African Alliance of Artist Managers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAAM — African Alliance of Artist Managers",
    description:
      "Le carrefour de l'innovation et de l'excellence dans l'industrie musicale africaine.",
    images: ["/images/logo-aaam-banner.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${heading.variable} ${body.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased bg-bg text-text-1">
        <ThemeProvider>
          <LocaleProvider>
            <div className="noise-overlay" />
            {children}
            <CookieBanner />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
