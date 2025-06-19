import { PortableTextBlock } from "@portabletext/react";

export interface ContactPageInterface {
  contactPageTopSection: {
    contactPageTopSectionTitle: string;
    contactPageTopSectionText: PortableTextBlock[];
    contactPageTopSectionLinkText: string;
    contactPageTopSectionLinkDestination: string;
    contactPageTopSectionImage: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
    };
  };
  contactPageTextBoxes: Array<{
    contactPageTextBoxHeading: string;
    contactPageTextBoxTextContent: PortableTextBlock[];
  }>;
}
