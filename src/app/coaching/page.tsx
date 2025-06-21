import { CoachingContent } from "./CoachingContent";
import { Metadata } from "next";
import { getCoachingPageMetadata } from "@/lib/metadata/coachingMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCoachingPageMetadata();

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

const CoachingPage = async () => {
  return <CoachingContent />;
};

export default CoachingPage;
