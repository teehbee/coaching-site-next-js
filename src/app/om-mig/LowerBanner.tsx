"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useSanityData } from "@/utils";
import { AboutPageInterface } from "@/data/interface/aboutPageInterface";
import { aboutPageQuery } from "@/lib/queries";
import Link from "next/link";

const LowerBanner: React.FC = () => {
  const settings = useSanityData<AboutPageInterface>(aboutPageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="p-0">
      <div className="container-fluid pos-relative px-0">
        <Image width={1920} height={600} className="img-cover img-350h-600" src={settings.aboutPageLowerBanner.aboutPageBottomBannerImage.asset.url} alt={settings.aboutPageLowerBanner.aboutPageBottomBannerImage.alt || "Bildebeskrivelse mangler"} />
        <div className="overlay d-flex align-items-end align-items-md-center justify-content-center">
          <div className="container">
            <div className="row px-15 mb-30 mb-lg-0">
              <div className="col-12 col-md-8 col-lg-6 dark-bg-color p-30 p-lg-45 border-radius-5">
                <h2 className="mb-15 pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">{settings.aboutPageLowerBanner.aboutPageLowerBannerTitle}</h2>
                <div>
                  <PortableText value={settings.aboutPageLowerBanner.aboutPageLowerBannerTextContent} />{" "}
                </div>
                <div className="pt-15">
                  <Link className="btn btn-primary" href="/coaching">
                    Läs mer om coaching
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerBanner;
