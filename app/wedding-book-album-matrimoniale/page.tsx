import type { Metadata } from "next";
import { WeddingBookPageView } from "@/components/pages/WeddingBookPageView";

export const metadata: Metadata = { title: "Album matrimoniale", description: "Album e consegna digitale — Valentina Anzeliero Photografa." };

export default function WeddingBookPage() {
  return <WeddingBookPageView />;
}
