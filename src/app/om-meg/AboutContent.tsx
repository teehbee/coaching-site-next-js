"use client";

import TopSection from "./TopSection";
import ImageAndTiles from "./ImageAndTiles";
import LowerBanner from "./LowerBanner";
import TextBoxes from "./TextBoxes";
import Resume from "./Resume";
import { LoopedReviews } from "../../components/reusable";

const AboutContent: React.FC = () => {
  return (
    <>
      <TopSection />
      <ImageAndTiles />
      <LowerBanner />
      <TextBoxes />
      <Resume />
      <LoopedReviews />
    </>
  );
};

export default AboutContent;
