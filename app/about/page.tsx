import type { Metadata } from "next";
import { AboutHubPageView } from "@/components/pages/AboutHubPageView";

export const metadata: Metadata = {
  title: "About",
  description: "About Valentina Anzeliero Photografa.",
  alternates: { canonical: "/about/" }
};

export default function AboutHubPage() {
  return <AboutHubPageView />;
}
