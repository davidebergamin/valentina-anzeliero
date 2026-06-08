import type { Metadata } from "next";
import { AboutStudioPageView } from "@/components/pages/AboutStudioPageView";

export const metadata: Metadata = {
  title: "Fotografi di Matrimoni Verona e Lago di Garda",
  description: "Chi è Valentina Anzeliero, fotografa di matrimoni a Treviso e Vicenza.",
  alternates: { canonical: "/about-fotografo-matrimoni/" }
};

export default function AboutPage() {
  return <AboutStudioPageView />;
}
