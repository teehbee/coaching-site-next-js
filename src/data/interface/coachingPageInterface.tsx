import type { PortableTextBlock } from "@portabletext/types";

export interface CoachingPageInterface {
  coachingPageTopBanner: {
    coachingPageTopBannerTitle: string;
    coachingPageTopBannerText: PortableTextBlock[];
    coachingPageTopBannerImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt?: string;
    };
  };
  coachingPageAlternatingTiles: CoachingTile[];
  coachingPageLowerBanner: {
    coachingPageLowerBannerTitle: string;
    coachingPageLowerBannerText: PortableTextBlock[];
    coachingPageLowerBannerImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt?: string;
    };
  };
  coachingPageQuoteText: PortableTextBlock[];
}

export interface CoachingTile {
  coachingPageAlternatingTileHeading: string;
  coachingPageAlternatingTileText: PortableTextBlock[];
  coachingPageAlternatingTileImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}
