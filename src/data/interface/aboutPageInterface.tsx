import { PortableTextBlock } from "@portabletext/react";

export interface AboutPageInterface {
  aboutTopSection: {
    aboutTopSectionTitle: string;
    aboutTopSectionText: PortableTextBlock;
    aboutTopSectionLinkText: string;
    aboutTopSectionLinkDestination: string;
    aboutTopSectionImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
    };
  };
  aboutPageImageAndTextTile: {
    aboutPageImageAndTextTileTitle: string;
    aboutPageImageAndTextTileTextContent: PortableTextBlock;
    aboutPageImageAndTextTileImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
    };
  };
  aboutPageTextBoxesSection: {
    aboutPageTextBoxesHeading: string;
    aboutPageTextBoxes: {
      aboutPageTextContent: PortableTextBlock;
    }[];
  };
  aboutPageLowerBanner: {
    aboutPageLowerBannerTitle: string;
    aboutPageLowerBannerTextContent: PortableTextBlock;
    aboutPageBottomBannerImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
    };
  };
  aboutPageResumeSection: {
    aboutPageResumeSectionHeading: string;
    aboutPageResumeSectionList: {
      aboutPageResumeSectionListItemFromYear: string;
      aboutPageResumeSectionListItemToYear: string;
      aboutPageResumeSectionListItemCompany: string;
      aboutPageResumeSectionListItemPosition: string;
      aboutPageResumeSectionListItemDescription: PortableTextBlock;
    }[];
  };
  reviewsSection?: {
    _id: string;
    ReviewSection: {
      reviewSectionText: string;
      reviewSectionName: string;
    }[];
  };
}
