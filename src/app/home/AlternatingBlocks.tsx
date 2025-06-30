"use client";

import Link from "next/link";
import Image from "next/image";

import { HomePageInterface } from "@/data/interface/frontpageInterface";
import { frontpageQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";

const HomepageAlternatingBlocks: React.FC = () => {
  const settings = useSanityData<HomePageInterface>(frontpageQuery);

  if (!settings) {
    return null;
  }

  return (
    <section className="alt-bg-color">
      <div className="container-wide pb-45 pb-lg-90">
        {settings.frontpageAlternatingTiles.map((block, i) => {
          const isEven = i % 2 === 0;

          return (
            <div key={i} className="row pos-relative pb-60 align-items-center">
              <div className={`col-12 col-lg-5 ${!isEven ? "offset-lg-6" : "offset-lg-2"}`}>
                <Image width={636} height={477} className="img-full border-radius-5" src={block.frontpageAlternatingTilesImage.asset.url} alt={block.frontpageAlternatingTilesImage.alt || "Bildebeskrivelse mangler"} />
              </div>
              <div className={`col-10 col-lg-5 offset-1 offset-lg-1 text-center text-lg-start dark-bg-color border-radius-5 p-30 p-lg-30 p-xl-45 mt--75 mt-lg-0 ${isEven ? "text-overlay-right" : "text-overlay-left"}`}>
                <h2 className="mb-15 custom-border-bottom pos-relative custom-border-bottom-25-percent-tc-lg-te">{block.frontpageAlternatingTilesHeading}</h2>
                <div className="pb-15">
                  {block.frontpageAlternatingTilesText.map((block) => (
                    <p key={block._key}>{block.children[0]?.text}</p>
                  ))}
                </div>
                <Link className="btn btn-primary" href={block.frontpageAlternatingTilesLinkDestination}>
                  {block.frontpageAlternatingTilesLinkText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomepageAlternatingBlocks;
