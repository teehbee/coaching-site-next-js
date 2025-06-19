"use client";

import { useSanityData } from "@/utils";
import { aboutPageQuery } from "@/lib/queries";
import { AboutPageInterface } from "@/data/interface/aboutPageInterface";
import { PortableText } from "@portabletext/react";
import { resumeData as data } from "../../data/text";

const Resume: React.FC = () => {
  const settings = useSanityData<AboutPageInterface>(aboutPageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section id="resume" className="white-bg-color pb-45 pb-lg-90">
      <div className="container">
        <div className="row ">
          <div className="col-3 offset-2 offset-lg-3 timeline-col pos-relative">
            <h2 className="dark-font mb-30">{settings.aboutPageResumeSection.aboutPageResumeSectionHeading}</h2>
          </div>
        </div>

        {settings.aboutPageResumeSection.aboutPageResumeSectionList.map((listItem, index) => (
          <div key={index} className="row dark-font mh-100px">
            <div className="col-3 col-lg-2 offset-2 offset-lg-3 timeline-col pos-relative pb-15 pb-lg-30">
              <div className="timeline-marker" />
              <div>{listItem.aboutPageResumeSectionListItemFromYear}</div>
              <div>{listItem.aboutPageResumeSectionListItemToYear}</div>
            </div>
            <div className="col-6 pb-15 pb-lg-30">
              <div className="fw-500 pb-5">{listItem.aboutPageResumeSectionListItemCompany}</div>
              <div className="pb-5">{listItem.aboutPageResumeSectionListItemPosition}</div>
              <div className="fs-0-75-rem-lg-0-875rem pb-5">
                <PortableText value={listItem.aboutPageResumeSectionListItemDescription} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
