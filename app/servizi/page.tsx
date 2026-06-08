import type { Metadata } from "next";
import { ServiziPageView } from "@/components/pages/ServiziPageView";

export const metadata: Metadata = {
  title: "Servizi fotografici",
  description: "Engagement, battesimi, newborn e sessioni di famiglia — Valentina Anzeliero, fotografa a Treviso e Vicenza.",
  alternates: { canonical: "/servizi/" }
};

export default function ServiziPage() {
  return <ServiziPageView />;
}
