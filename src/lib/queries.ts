// Sanity queries

// Frontpage

export const frontpageQuery = `*[_type == "homePage"][0]{
  frontpageTopBanner{
  frontpageTopBannerTitle,
  frontpageTopBannerText,
  frontpageTopBannerLinkText,
  frontpageTopBannerLinkDestination,
  frontpageTopBannerImageSmall{
  asset->{_id, url},
  alt
},
  frontpageTopBannerImage{
      asset->{_id, url},
      alt
    },
  },
  frontpageAlternatingTiles[]{
    frontpageAlternatingTilesHeading,
    frontpageAlternatingTilesText, 
    frontpageAlternatingTilesLinkText,
    frontpageAlternatingTilesLinkDestination,
    frontpageAlternatingTilesImage{
      asset->{_id, url},
      alt,
    }
  },
  reviewsSection->{
    _id,
    ReviewSection[]{
      reviewSectionText,
      reviewSectionName
    }
  },
   frontpageTextColumns[] {
    frontpageTextColumnHeading,
    frontpageTextColumnTextContent,
  },
  textColumnCTA {
    textColumnCTALinkText,
    textColumnCTALinkDestination
  },
    frontpageLowerBanner{
    frontpageLowerBannerTitle,
    frontpageLowerBannerText,
    frontpageLowerBannerLinkText,
    frontpageLowerBannerLinkDestination,
    frontpageBottomBannerImage{
    asset->{_id, url},
      alt
    }
    }
}`;

// Coaching page

export const coachingQuery = `*[_type == "coaching"][0]{
  coachingPageTopBanner {
    coachingPageTopBannerTitle,
    coachingPageTopBannerText,
    coachingPageTopBannerImage {
      asset->{_id, url},
      alt
    }
  },
  coachingPageAlternatingTiles[]{
    coachingPageAlternatingTileHeading,
    coachingPageAlternatingTileText,
    coachingPageAlternatingTileImage {
      asset->{_id, url},
      alt
    }
  },
  coachingPageLowerBanner {
    coachingPageLowerBannerTitle,
    coachingPageLowerBannerText,
    coachingPageLowerBannerImage {
      asset->{_id, url},
      alt
    }
  },
  coachingPageQuoteText
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  aboutTopSection {
    aboutTopSectionTitle,
    aboutTopSectionText,
    aboutTopSectionLinkText,
    aboutTopSectionLinkDestination,
    aboutTopSectionImage {
      asset->{_id, url},
      alt
    }
  },
  aboutPageImageAndTextTile {
    aboutPageImageAndTextTileTitle,
    aboutPageImageAndTextTileTextContent,
    aboutPageImageAndTextTileImage {
      asset->{_id, url},
      alt
    }
  },
  aboutPageTextBoxesSection {
    aboutPageTextBoxesHeading,
    aboutPageTextBoxes[] {
      aboutPageTextContent
    }
  },
  aboutPageLowerBanner {
    aboutPageLowerBannerTitle,
    aboutPageLowerBannerTextContent,
    aboutPageBottomBannerImage {
      asset->{_id, url},
      alt
    }
  },
  aboutPageResumeSection {
    aboutPageResumeSectionHeading,
    aboutPageResumeSectionList[] {
      aboutPageResumeSectionListItemFromYear,
      aboutPageResumeSectionListItemToYear,
      aboutPageResumeSectionListItemCompany,
      aboutPageResumeSectionListItemPosition,
      aboutPageResumeSectionListItemDescription
    }
  },
  reviewsSection-> {
    _id,
    ReviewSection[] {
      reviewSectionText,
      reviewSectionName
    }
  }
}`;

// Contact page

export const contactPageQuery = `*[_type == "contactPage"][0] {
  contactPageTopSection {
    contactPageTopSectionTitle,
    contactPageTopSectionText,
    contactPageTopSectionLinkText,
    contactPageTopSectionLinkDestination,
    contactPageTopSectionImage {
      asset->{_id, url},
      alt
    }
  },
  contactPageTextBoxes[] {
    contactPageTextBoxHeading,
    contactPageTextBoxTextContent
  }
}`;

// Global settings

export const globalSettingsQuery = `*[_type == "siteSettings"][0] {
    siteTitle,
    companyTitle,
    websiteUrl,
    orgNumber,
    logoSmall{
    asset->{_id, url},
      alt
    },
    logoLarge{
    asset->{_id, url},
      alt
    },
    contactPhone,
    contactEmail,
    contactAddress,
    contactZipAndCity,
    facebookUrl,
    instagramUrl,
    linkedinUrl
}`;
