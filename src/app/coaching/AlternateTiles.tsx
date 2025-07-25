"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { CoachingPageInterface } from "@/data/interface/coachingPageInterface";
import { coachingQuery } from "@/lib/queries";
import { useSanityData } from "@/utils";
import Link from "next/link";

function AlternateImageTextTiles() {
  const settings = useSanityData<CoachingPageInterface>(coachingQuery);

  if (!settings) {
    return null;
  }

  return (
    <section className="main-bg-color alternate-flex-order-lg">
      <div className="container">
        {settings.coachingPageAlternatingTiles.map((tile, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={index} className="row px-15 px-lg-0 pb-30 pb-lg-90 d-flex align-items-stretch">
              <div className="col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-6 p-0">
                <Image width={660} height={440} className={`img-cover w-100 h-100 border-radius-top-5 ${isEven ? "border-radius-lg-5-right" : "border-radius-lg-5-left"}`} src={tile.coachingPageAlternatingTileImage.asset.url} alt={tile.coachingPageAlternatingTileImage.alt || "Bildebeskrivelse mangler"} />
              </div>

              <div className={`col-12 col-sm-10 offset-sm-1 offset-lg-0 col-lg-6 d-flex flex-column justify-content-center alt-bg-color p-30 p-lg-75 border-radius-bottom-5 ${isEven ? "border-radius-lg-5-left" : "border-radius-lg-5-right"}`}>
                <h2 className="fs-1-5-rem-lg-2rem mb-15 pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">{tile.coachingPageAlternatingTileHeading}</h2>
                <div>
                  <PortableText value={tile.coachingPageAlternatingTileText} />
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center">
          <Link className="btn btn-primary" href="/kontakt">
            kontakta mig idag
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AlternateImageTextTiles;
