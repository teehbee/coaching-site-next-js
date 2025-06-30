"use client";

import { LoopedReviews } from "../../components/reusable";
import HomepageAlternatingBlocks from "./AlternatingBlocks";
import HomepageTopSection from "./TopSection";
import BannerWithTiles from "./BannerWithTiles";
import TextColumns from "./TextColumns";

export const HomePageContent: React.FC = () => {
  return (
    <>
      <HomepageTopSection />
      <HomepageAlternatingBlocks />
      <LoopedReviews />
      <TextColumns />
      <BannerWithTiles />
    </>
  );
};
