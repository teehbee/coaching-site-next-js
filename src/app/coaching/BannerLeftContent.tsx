"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { CoachingPageInterface } from "@/data/interface/coachingPageInterface";
import { coachingQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";

const BannerLeftContent: React.FC = () => {
  const settings = useSanityData<CoachingPageInterface>(coachingQuery);

  if (!settings) {
    return null;
  }

  return (
    <section>
      <div className="container-fluid pos-relative px-0">
        <Image width={1920} height={600} className="img-cover img-350h-600" src={settings.coachingPageLowerBanner.coachingPageLowerBannerImage.asset.url} alt={settings.coachingPageLowerBanner.coachingPageLowerBannerImage.alt || "Bildebeskrivelse mangler"} />
        <div className="overlay d-flex align-items-end align-items-md-center justify-content-center">
          <div className="container">
            <div className="row px-15 mb-30 mb-lg-0">
              <div className="col-12 col-md-8 col-lg-6 dark-bg-color p-30 p-lg-45 border-radius-5">
                <h2 className="mb-15 pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">{settings.coachingPageLowerBanner.coachingPageLowerBannerTitle}</h2>
                <div>
                  <PortableText value={settings.coachingPageLowerBanner.coachingPageLowerBannerText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerLeftContent;
