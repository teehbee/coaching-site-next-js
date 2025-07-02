export interface SiteSettingsInterface {
  siteTitle: string;
  companyTitle: string;
  websiteUrl: string;
  orgNumber: string;
  logoSmall: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  logoLarge: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  contactPhone?: string;
  contactEmail?: string;
  contactAddress?: string;
  contactZipAndCity?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}
