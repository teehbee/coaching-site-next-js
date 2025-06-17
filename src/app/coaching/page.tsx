import AlternateImageTextTiles from "./AlternateTiles";
import TopBanner from "./TopBanner";
import { BannerLeftContent } from "../../components/reusable";
import QuoteSection from "./QuoteSection";

function Coaching() {
  return (
    <>
      <TopBanner />
      <AlternateImageTextTiles />
      <BannerLeftContent image="/assets/img/hytte-panorama.jpg" title="Katalyserande coaching" text="Det är inte rådgivning –det är en process som väcker mod, klarhet och riktning. Det är inte rådgivning –det är en process som väcker mod, klarhet och riktning." />
      <QuoteSection />
    </>
  );
}

export default Coaching;
