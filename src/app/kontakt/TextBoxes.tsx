"use client";

import { ContactPageInterface } from "@/data/interface/contactPageInterface";
import { contactPageQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";
import { PortableText } from "@portabletext/react";

const TextBoxes: React.FC = () => {
  const settings = useSanityData<ContactPageInterface>(contactPageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        <div className="row">
          {settings.contactPageTextBoxes.map((box, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-30 d-flex mh-150px">
              <div className="border-full border-radius-5 text-center p-15 pt-30 w-100 d-flex flex-column">
                <div className="pb-15 fw-700 mh-lg-80px fs-1-rem-lg-1-25rem">{box.contactPageTextBoxHeading}</div>
                <div className="pb-15">
                  <PortableText value={box.contactPageTextBoxTextContent} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextBoxes;
