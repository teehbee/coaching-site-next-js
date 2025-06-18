import { LoopedReviews } from "../../components/reusable";
import HomepageAlternatingBlocks from "./AlternatingBlocks";
import HomepageTopSection from "./TopSection";
import BannerWithTiles from "./BannerWithTiles";

export const metadata = {
  title: "Kontakt | Mitt Firma",
  description: "Ta kontakt for å lære mer om våre tjenester.",
  keywords: ["coaching", "mental trening", "kontakt"],
  openGraph: {
    title: "Kontakt oss – Mitt Firma",
    description: "Slik kommer du i kontakt med oss.",
    url: "https://mittdomene.no/kontakt",
    siteName: "Mitt Firma",
    images: [
      {
        url: "https://mittdomene.no/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "no_NO",
    type: "website",
  },
};

function Home() {
  return (
    <>
      <HomepageTopSection />
      <HomepageAlternatingBlocks />
      <LoopedReviews />
      <BannerWithTiles />
    </>
  );
}

export default Home;
