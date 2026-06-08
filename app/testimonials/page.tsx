import type { Metadata } from "next";
import { TestimonialsPageView } from "@/components/pages/TestimonialsPageView";

export const metadata: Metadata = { title: "Recensioni", description: "Recensioni Valentina Anzeliero su Matrimonio.com." };

export default function TestimonialsPage() {
  return <TestimonialsPageView />;
}
