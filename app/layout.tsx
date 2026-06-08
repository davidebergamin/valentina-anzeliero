import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { WhatsAppButton } from "@/componenti/WhatsAppButton";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valentinaanzeliero.it"),
  title: {
    default: "Valentina Anzeliero | Fotografa matrimonio Treviso e Vicenza",
    template: "%s | Valentina Anzeliero"
  },
  description: "Fotografa di matrimonio a Treviso e Vicenza. Reportage romantico, engagement, battesimi, newborn e sessioni di famiglia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Valentina Anzeliero | Fotografa matrimonio Treviso e Vicenza",
    description: "Reportage romantico e naturale tra Treviso, Vicenza e il Veneto.",
    type: "website",
    locale: "it_IT"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${serif.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
