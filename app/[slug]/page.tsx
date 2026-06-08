import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryPageView } from "@/components/pages/StoryPageView";
import { allStoryParams, findStoryBySlug } from "@/lib/site-data";

type StoryRouteParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return allStoryParams();
}

export async function generateMetadata({ params }: { params: StoryRouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const story = findStoryBySlug(slug);
  if (!story) return {};
  return { title: story.title, description: `${story.title}. Valentina Anzeliero Photografa.` };
}

export default async function StoryPage({ params }: { params: StoryRouteParams }) {
  const { slug } = await params;
  const story = findStoryBySlug(slug);
  if (!story) notFound();
  return <StoryPageView story={story} />;
}
