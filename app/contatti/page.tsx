import type { Metadata } from "next";
import { ContactPageView } from "@/components/pages/ContactPageView";

export const metadata: Metadata = { title: "Contatti", description: "Contatti Valentina Anzeliero Photografa — Treviso e Vicenza." };

export default function ContattiPage() {
  return <ContactPageView />;
}
