"use client";

import Image from "next/image";

import { CoachingPageInterface } from "@/data/interface/coachingPageInterface";
import { coachingQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";
import { PortableText } from "@portabletext/react";

const TopBanner: React.FC = () => {
  const settings = useSanityData<CoachingPageInterface>(coachingQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="p-0">
      <div className="container-fluid pos-relative p-0">
        <Image priority width={1920} height={650} className="img-cover h-60-md-80vh" src={settings.coachingPageTopBanner.coachingPageTopBannerImage.asset.url} alt={settings.coachingPageTopBanner.coachingPageTopBannerImage.alt || "Bildebeskrivelse mangler"} />
        <div className="overlay-lg d-flex align-items-end justify-content-center">
          <div className="container">
            <div className="row px-15 px-lg-0">
              <div className="col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-8 offset-lg-2 dark-bg-color p-30 p-lg-45 mt--75 mb-lg-150 border-radius-5">
                <h1 className="fs-1-5-rem-lg-3rem pos-relative custom-border-bottom  custom-border-bottom-25-15-percent-ts mb-15">{settings.coachingPageTopBanner.coachingPageTopBannerTitle}</h1>
                <div>
                  <PortableText value={settings.coachingPageTopBanner.coachingPageTopBannerText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
