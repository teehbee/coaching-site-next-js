// Frontpage queries

export const frontpageQuery = `*[_type == "homePage"][0]{
  frontpageTopBanner{
  frontpageTopBannerTitle,
  frontpageTopBannerText,
  frontpageTopBannerLinkText,
  frontpageTopBannerLinkDestination,
  frontpageTopBannerImage{
      asset->{_id, url},
      alt
    }
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
    aboutPageTextBoxesHeadeding,
    aboutPageTextBoxes[] {
      frontpageAlternatingTilesText
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

// Global settings

export const globalSettingsQuery = `*[_type == "siteSettings"][0] {
    siteTitle,
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
    facebookUrl,
    instagramUrl,
    linkedinUrl
}`;
