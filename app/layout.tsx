import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import LocaleProvider from "./lib/i18n/LocaleProvider";

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

export const metadata: Metadata = {
  title: "AAAM — African Alliance of Artist Managers",
  description:
    "Plateforme de formation, de masterclass et de communauté pour les professionnels de l'industrie musicale africaine.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('aaam-theme');if(t==='light')document.documentElement.classList.remove('dark');else if(!t&&window.matchMedia('(prefers-color-scheme:light)').matches)document.documentElement.classList.remove('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-bg text-text-1">
        <ThemeProvider>
          <LocaleProvider>
            <div className="noise-overlay" />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
