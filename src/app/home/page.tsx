import { HomePageContent } from "./HomePageContent";
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
      url: "https://dittdomene.no/om", // Husk å tilpasse denne for hver side
    },
  };
}

const Home = async () => {
  return <HomePageContent />;
};

export default Home;
