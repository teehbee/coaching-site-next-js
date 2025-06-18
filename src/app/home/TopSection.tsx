"use client";

import Link from "next/link";
import Image from "next/image";

import { HomePageInterface } from "@/data/interface/frontpageInterface";
import { useEffect, useState } from "react";
import { client } from "../../lib/sanityClient";
import { frontpageQuery } from "@/lib/queries";

const HomepageTopSection: React.FC = () => {
  const [settings, setSettings] = useState<HomePageInterface | null>(null);

  useEffect(() => {
    client.fetch(frontpageQuery).then((data) => {
      setSettings(data);
    });
  }, []);

  if (!settings) {
    return null;
  }
  return (
    <section className="main-bg-color">
      <div className="container-fluid pos-relative pt-lg-45">
        <div className="row">
          <div className="col-10 col-sm-8 offset-1 offset-sm-4 col-md-4 offset-md-8 px-0">
            <Image priority width={600} height={650} className="img-full" src={settings.frontpageTopBanner.frontpageTopBannerImage.asset.url} alt={settings.frontpageTopBanner.frontpageTopBannerImage.alt || "toppbilde"} />
          </div>
        </div>
        <div className="overlay-sm">
          <div className="container d-flex flex-column h-100">
            <div className="row align-items-center">
              <div className="col-12 col-sm-8 col-md-6 text-center text-sm-start py-30 pt-xl-75">
                <div>
                  <h1 className="fs-2-rem-lg-4rem pos-relative custom-border-bottom custom-border-bottom-25-percent-tc-sm-ts">{settings.frontpageTopBanner.frontpageTopBannerTitle}</h1>
                </div>
                <div className="fs-1-5-rem-lg-2rem pb-30">{settings.frontpageTopBanner.frontpageTopBannerText}</div>
                <Link className="btn btn-primary align-self-center align-self-lg-start" href={settings.frontpageTopBanner.frontpageTopBannerLinkDestination}>
                  {settings.frontpageTopBanner.frontpageTopBannerLinkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageTopSection;
