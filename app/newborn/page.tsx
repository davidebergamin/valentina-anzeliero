import type { Metadata } from "next";
import { SimpleGalleryPageView } from "@/components/pages/SimpleGalleryPageView";

export const metadata: Metadata = {
  title: "Newborn",
  description: "Fotografia newborn — Valentina Anzeliero, Treviso e Veneto."
};

export default function Page() {
  return <SimpleGalleryPageView type="newborn" />;
}
