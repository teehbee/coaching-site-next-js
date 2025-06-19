"use client";

import { ContactPageInterface } from "@/data/interface/contactPageInterface";
import { contactPageQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";
import { PortableText } from "@portabletext/react";

import Image from "next/image";

const TopSectionWithButton: React.FC = () => {
  const settings = useSanityData<ContactPageInterface>(contactPageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="p-0">
      <div className="container-fluid pos-relative p-0">
        <Image priority width={1920} height={650} className="img-cover h-60-md-80vh" src={settings.contactPageTopSection.contactPageTopSectionImage.asset.url} alt={settings.contactPageTopSection.contactPageTopSectionImage.alt} />
        <div className="overlay-lg d-flex align-items-end justify-content-center">
          <div className="container">
            <div className="row px-15 px-lg-0">
              <div className="col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-8 offset-lg-2 dark-bg-color p-30 p-lg-45 mt--75 mb-lg-150 border-radius-5">
                <h1 className="fs-1-5-rem-lg-3rem pos-relative custom-border-bottom  custom-border-bottom-25-15-percent-ts m-0">{settings.contactPageTopSection.contactPageTopSectionTitle}</h1>
                <div className="pt-15">
                  <PortableText value={settings.contactPageTopSection.contactPageTopSectionText} />
                </div>
                <a className="btn btn-primary" href={settings.contactPageTopSection.contactPageTopSectionLinkDestination}>
                  {settings.contactPageTopSection.contactPageTopSectionLinkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSectionWithButton;
