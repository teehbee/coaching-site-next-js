"use client";

import { CoachingPageInterface } from "@/data/interface/coachingPageInterface";
import { coachingQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";
import { PortableText } from "@portabletext/react";

import { QuoteIcon } from "../../assets/icon";

const QuoteSection: React.FC = () => {
  const settings = useSanityData<CoachingPageInterface>(coachingQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="main-bg-color pb-45 pb-lg-90">
      <div className="container pg-lg-90">
        <div className="row mx-15">
          <div className="col-12 col-lg-8 offset-lg-2 border-full border-radius-5 text-center p-30">
            <QuoteIcon className={"accent-fill"} />
            <div className="py-30 px-lg-30">
              <PortableText value={settings.coachingPageQuoteText} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
