import type { Metadata } from "next";
import { HomePageView } from "@/components/pages/HomePageView";
import { copy } from "@/lib/site-data";

export const metadata: Metadata = {
  title: copy.seoTitle,
  description: copy.seoDescription,
  alternates: { canonical: "/" }
};

export default function Home() {
  return <HomePageView />;
}
