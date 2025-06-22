import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";
import { metadataFields } from "./metaDataFields";

const query = `*[_type == "coaching"][0] {
  ${metadataFields}
}`;

export async function getCoachingPageMetadata() {
  const data = await client.fetch(query);

  const { metadata } = data || {};

  return {
    title: metadata?.title ?? "Om Bengt Johansson",
    description: metadata?.description ?? "Les mer om Bengt og hans erfaring med coaching.",
    ogImage: metadata?.ogImage ? urlFor(metadata.ogImage).width(1200).height(630).format("jpg").url() : undefined,
    keywords: metadata?.keywords ?? [],
  };
}
