import { LoopedReviews } from "../../components/reusable";
import HomepageAlternatingBlocks from "./AlternatingBlocks";
import HomepageTopSection from "./TopSection";
import BannerWithTiles from "./BannerWithTiles";

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
