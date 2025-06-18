export interface SiteSettingsInterface {
  siteTitle: string;
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
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}
