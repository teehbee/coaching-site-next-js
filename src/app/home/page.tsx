import { HomePageContent } from "./HomePageContent";
import { getFrontpagePageMetadata } from "@/lib/metadata/frontpageMetadata";

export async function generateMetadata() {
  const data = await getFrontpagePageMetadata();

  if (!data?.metadata) return {};

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      images: [
        {
          url: data.metadata.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      siteName: "Bengt Johansson",
      locale: "no_NO",
      type: "website",
      // Change to correct domain
      url: "https://dittdomene.no/kontakt",
    },
  };
}

const Home = async () => {
  return <HomePageContent />;
};

export default Home;
