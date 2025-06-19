import AlternateImageTextTiles from "./AlternateTiles";
import TopBanner from "./TopBanner";
import BannerLeftContent from "./BannerLeftContent";
import QuoteSection from "./QuoteSection";
import { Metadata } from "next";

export const metadata: Metadata = {
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

function Coaching() {
  return (
    <>
      <TopBanner />
      <AlternateImageTextTiles />
      <BannerLeftContent />
      <QuoteSection />
    </>
  );
}

export default Coaching;
