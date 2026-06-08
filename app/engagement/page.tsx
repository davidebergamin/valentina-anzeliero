import type { Metadata } from "next";
import { SimpleGalleryPageView } from "@/components/pages/SimpleGalleryPageView";

export const metadata: Metadata = {
  title: "Engagement",
  description: "Servizi prematrimoniali e engagement — Valentina Anzeliero, fotografa matrimonio Treviso."
};

export default function Page() {
  return <SimpleGalleryPageView type="engagement" />;
}
