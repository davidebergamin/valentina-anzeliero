import type { Metadata } from "next";
import { SimpleGalleryPageView } from "@/components/pages/SimpleGalleryPageView";

export const metadata: Metadata = {
  title: "Famiglia",
  description: "Sessioni di famiglia e maternità — Valentina Anzeliero, Treviso e Veneto."
};

export default function Page() {
  return <SimpleGalleryPageView type="famiglia" />;
}
