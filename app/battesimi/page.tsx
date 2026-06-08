import type { Metadata } from "next";
import { SimpleGalleryPageView } from "@/components/pages/SimpleGalleryPageView";

export const metadata: Metadata = {
  title: "Battesimi",
  description: "Fotografia battesimi — Valentina Anzeliero, Treviso e Veneto."
};

export default function Page() {
  return <SimpleGalleryPageView type="battesimi" />;
}
