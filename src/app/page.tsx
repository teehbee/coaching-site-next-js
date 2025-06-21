// app/page.tsx
import { HomePageContent } from "./home/HomePageContent";
import { getFrontpageMetadata } from "@/lib/metadata/frontpageMetadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFrontpageMetadata();

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.ogImage
        ? [
            {
              url: data.ogImage,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      siteName: "Bengt Johansson",
      locale: "no_NO",
      type: "website",
      url: "https://dittdomene.no/",
    },
  };
}

export default async function Home() {
  return <HomePageContent />;
}
