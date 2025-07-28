"use client";

import Image from "next/image";
import { aboutPageQuery } from "@/lib/queries";
import { AboutPageInterface } from "@/data/interface/aboutPageInterface";
import { useSanityData } from "@/utils";
import { PortableText } from "@portabletext/react";

const ImageAndTiles: React.FC = () => {
  const settings = useSanityData<AboutPageInterface>(aboutPageQuery);

  if (!settings) {
    return null;
  }

  return (
    <section className="pb-45 pb-lg-90 pos-relative alt-bg-color">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <Image width={740} height={550} className="img-full border-radius-5" src={settings.aboutPageImageAndTextTile.aboutPageImageAndTextTileImage.asset.url} alt={settings.aboutPageImageAndTextTile.aboutPageImageAndTextTileImage.alt || "Bildebeskrivelse mangler"} />
          </div>
        </div>
      </div>
      <div className="overlay-md d-flex align-items-end align-items-lg-center justify-content-md-end">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-lg-7 offset-lg-5 dark-bg-color p-30 p-lg-45 mt--75 mt-lg-0 border-radius-5">
              <h2 className="mb-15 pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">{settings.aboutPageImageAndTextTile.aboutPageImageAndTextTileTitle}</h2>
              <div className="pb-15">
                <PortableText value={settings.aboutPageImageAndTextTile.aboutPageImageAndTextTileTextContent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageAndTiles;
