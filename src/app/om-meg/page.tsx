import { aboutTextBoxesData } from "../../data/text";
import { Metadata } from "next";
import TopSection from "./TopSection";
import ImageAndTiles from "./ImageAndTiles";
import Resume from "./Resume";
import TextBoxes from "../../components/reusable/TextBoxes";
import { LoopedReviews, BannerLeftContent } from "../../components/reusable";

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

function About() {
  return (
    <>
      <TopSection />
      <ImageAndTiles />
      <TextBoxes data={aboutTextBoxesData} />
      <BannerLeftContent image="/assets/img/hytte-panorama.jpg" title="Katalyserance coaching" text="Det är inte rådgivning –det är en process som väcker mod, klarhet och riktning." />
      <Resume />
      <LoopedReviews />
    </>
  );
}

export default About;
