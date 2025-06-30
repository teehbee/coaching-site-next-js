import type { PortableTextBlock } from "@portabletext/types";

interface ImageType {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string | null;
}

interface FrontpageTopBanner {
  frontpageTopBannerTitle: string;
  frontpageTopBannerText: string;
  frontpageTopBannerLinkText: string;
  frontpageTopBannerLinkDestination: string;
  frontpageTopBannerImage: ImageType;
  frontpageTopBannerImageSmall: ImageType;
}

interface FrontpageAlternatingTile {
  frontpageAlternatingTilesHeading: string;
  frontpageAlternatingTilesText: PortableTextBlock[];
  frontpageAlternatingTilesLinkText: string;
  frontpageAlternatingTilesLinkDestination: string;
  frontpageAlternatingTilesImage: ImageType;
}

interface FrontpageTextColumn {
  frontpageTextColumnHeading: string;
  frontpageTextColumnTextContent: PortableTextBlock[];
}

interface TextColumnCTA {
  textColumnCTALinkText: string;
  textColumnCTALinkDestination: string;
}

interface FrontpageLowerBanner {
  frontpageLowerBannerTitle: string;
  frontpageLowerBannerText: PortableTextBlock[];
  frontpageLowerBannerLinkText: string;
  frontpageLowerBannerLinkDestination: string;
  frontpageBottomBannerImage: ImageType;
}

interface ReviewSectionItem {
  reviewSectionText: PortableTextBlock[];
  reviewSectionName: string;
}

interface ReviewsSection {
  _id: string;
  ReviewSection: ReviewSectionItem[];
}

export interface HomePageInterface {
  frontpageTopBanner: FrontpageTopBanner;
  frontpageAlternatingTiles: FrontpageAlternatingTile[];
  reviewsSection: ReviewsSection | null;
  frontpageLowerBanner: FrontpageLowerBanner;
  frontpageTextColumns: FrontpageTextColumn[];
  textColumnCTA: TextColumnCTA;
}
