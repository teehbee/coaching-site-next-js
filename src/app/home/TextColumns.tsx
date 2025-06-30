"use client";

import { HomePageInterface } from "@/data/interface/frontpageInterface";
import { frontpageQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { useSanityData } from "@/utils";

const TextColumns: React.FC = () => {
  const settings = useSanityData<HomePageInterface>(frontpageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        <div className="row align-items-stretch">
          {settings.frontpageTextColumns.map((column, i) => {
            return (
              <div key={i} className="col-12 col-lg-4 pb-30 d-flex flex-column">
                <div className="border-full p-30 border-radius-5 h-100">
                  <div className="pb-15">
                    <h3 className="pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">{column.frontpageTextColumnHeading}</h3>
                  </div>
                  <PortableText value={column.frontpageTextColumnTextContent} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="row text-center">
          <div className="pt-15">
            <a className="btn btn-primary" href={settings.textColumnCTA.textColumnCTALinkDestination}>
              {settings.textColumnCTA.textColumnCTALinkText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextColumns;
