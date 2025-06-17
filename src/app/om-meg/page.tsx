import { aboutTextBoxesData } from "../../data/text";

import TopSection from "./TopSection";
import ImageAndTiles from "./ImageAndTiles";
import Resume from "./Resume";
import TextBoxes from "../../components/reusable/TextBoxes";
import { LoopedReviews, BannerLeftContent } from "../../components/reusable";

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
