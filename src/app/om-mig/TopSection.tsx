"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useSanityData } from "@/utils";
import { AboutPageInterface } from "@/data/interface/aboutPageInterface";
import { aboutPageQuery } from "@/lib/queries";

const TopSection: React.FC = () => {
  const settings = useSanityData<AboutPageInterface>(aboutPageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="pos-relative pb-45 pb-lg-90 main-bg-color">
      <div className="container">
        <div className="row align-items-center flex-sm-row-reverse justify-content-center text-center text-md-start">
          <div className="col-12 col-md-5 z-index-md-100 mb-30 mb-lg-0">
            <Image priority width={520} height={740} className="img-cover mw-md-400px border-radius-5" src={settings.aboutTopSection.aboutTopSectionImage.asset.url} alt={settings.aboutTopSection.aboutTopSectionImage.alt} />
          </div>
          <div className="col-12 col-md-7 z-index-md-100 pr-md-30 pr-lg-60 mt-xl--75">
            <div className="mb-30">
              <h1 className="fs-1-5-rem-lg-3rem mb-30 pos-relative custom-border-bottom custom-border-bottom-25-percent-tc-lg-te">{settings.aboutTopSection.aboutTopSectionTitle}</h1>
              <div className="pb-15">
                <PortableText value={settings.aboutTopSection.aboutTopSectionText} />
              </div>
            </div>
            <div className="">
              <a className="btn btn-primary" href={settings.aboutTopSection.aboutTopSectionLinkDestination}>
                {settings.aboutTopSection.aboutTopSectionLinkText}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block overlay-md">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-md-3 offset-md-9 h-100 alt-bg-color"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
