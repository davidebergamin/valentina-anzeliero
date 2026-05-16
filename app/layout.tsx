import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valentinanzeliero.liquidagency.eu"),
  title: "Valentina Anzeliero | Fotografa matrimonio Treviso",
  description:
    "Fotografa di matrimonio a Treviso e Vicenza per storie romantiche, spontanee e naturali. Reportage emozionale in Veneto con Valentina Anzeliero.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Valentina Anzeliero | Fotografa matrimonio Treviso",
    description:
      "Un portfolio romantico e naturale per matrimoni vissuti con calore, discrezione e spontaneita.",
    type: "website",
    locale: "it_IT"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
