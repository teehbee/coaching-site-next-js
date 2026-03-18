"use client";

import Link from "next/link";
import Image from "next/image";

import { HomePageInterface } from "@/data/interface/frontpageInterface";
import { frontpageQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";

const HomepageTopSection: React.FC = () => {
  const settings = useSanityData<HomePageInterface>(frontpageQuery);

  if (!settings) {
    return null;
  }

  return (
    <section className="main-bg-color h-80vh">
      <div className="container pt-90">
        <div className="row pb-45 align-items-center">
          {/* Col nummer 1 */}
          <div className="col-12 col-md-7 text-center text-lg-start d-flex flex-column align-items-center justicy-content-center">
            <div>
              <h1 className="fs-2-rem-lg-4rem">{settings.frontpageTopBanner.frontpageTopBannerTitle}</h1>
            </div>
            <div className="fs-1-5-rem-lg-2rem pb-30">{settings.frontpageTopBanner.frontpageTopBannerText}</div>
            <Link className="btn btn-primary" href={settings.frontpageTopBanner.frontpageTopBannerLinkDestination}>
              {settings.frontpageTopBanner.frontpageTopBannerLinkText}
            </Link>
          </div>
          {/* Col nummer 2 */}
          <div className="col-10 offset-1 offset-md-0 col-md-5">
            <Image priority width={500} height={550} className="img-cover" src={settings.frontpageTopBanner.frontpageTopBannerImage.asset.url} alt={settings.frontpageTopBanner.frontpageTopBannerImage.alt || "Bildebeskrivelse mangler"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageTopSection;
