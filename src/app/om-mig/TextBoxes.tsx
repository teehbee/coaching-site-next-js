"use-client";

import { useSanityData } from "@/utils";
import { AboutPageInterface } from "@/data/interface/aboutPageInterface";
import { aboutPageQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import { CheckedSymbol } from "@/assets/icon";
import Link from "next/link";

const TextBoxes: React.FC = () => {
  const settings = useSanityData<AboutPageInterface>(aboutPageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        {settings.aboutPageTextBoxesSection.aboutPageTextBoxesHeading && (
          <div className="text-center pb-45">
            <h2 className="pos-relative pb-10 custom-border-bottom-25-15-percent-tc">{settings.aboutPageTextBoxesSection.aboutPageTextBoxesHeading}</h2>
          </div>
        )}

        <div className="row">
          {settings.aboutPageTextBoxesSection.aboutPageTextBoxes.map((box, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-30 d-flex mh-150px">
              <div className="border-full border-radius-5 text-center p-15 w-100">
                <div className="pb-15">
                  <CheckedSymbol />
                </div>
                <div className="pb-15">
                  <PortableText value={box.aboutPageTextContent} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-30">
          <Link className="btn btn-primary" href="/kontakt">
            Kontakta mig för mer information
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TextBoxes;
