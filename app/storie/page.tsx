import type { Metadata } from "next";
import { StoriesPageView } from "@/components/pages/StoriesPageView";

export const metadata: Metadata = {
  title: "Wedding Stories",
  description: "Wedding Stories di Valentina Anzeliero: matrimoni tra Treviso, Vicenza e il Veneto.",
  alternates: { canonical: "/storie/" }
};

export default function StoriePage() {
  return <StoriesPageView />;
}
