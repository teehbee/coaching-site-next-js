"use client";

import Link from "next/link";
import Image from "next/image";

import { HomePageInterface } from "@/data/interface/frontpageInterface";
import { frontpageQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { useSanityData } from "@/utils";

const BannerWithTiles: React.FC = () => {
  const settings = useSanityData<HomePageInterface>(frontpageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section>
      <div className="container-fluid pos-relative px-0">
        <Image width={1920} height={600} className="img-cover img-350h-600" src="/assets/img/hytte-panorama.jpg" alt="Panorama av Vasstjena" />
        <div className="overlay align-items-end align-items-lg-center d-flex">
          <div className="container pt-15 my-md-0 ">
            <div className="row px-15 mb-30 mb-lg-0">
              <div className="col-12 col-lg-5 offset-lg-7 dark-bg-color border-radius-5">
                <div className="border-radius-5 d-flex flex-column text-center text-lg-start p-30">
                  <h3 className=" mb-15 pos-relative custom-border-bottom custom-border-bottom-25-percent-tc-lg-te">{settings.frontpageLowerBanner.frontpageLowerBannerTitle}</h3>
                  <div className="pb-15">
                    <PortableText value={settings.frontpageLowerBanner.frontpageLowerBannerText} />
                  </div>
                  <div>
                    <Link className="btn btn-primary" href={settings.frontpageLowerBanner.frontpageLowerBannerLinkDestination}>
                      {settings.frontpageLowerBanner.frontpageLowerBannerLinkText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerWithTiles;
