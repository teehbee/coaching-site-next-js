// lib/metadata/aboutMetadata.ts
import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";

const query = `*[_type == "contactPage"][0] {
  metadata {
    title,
    description,
    ogImage
  }
}`;

export async function getContactMetadata() {
  const data = await client.fetch(query);

  const { metadata } = data || {};

  return {
    title: metadata?.title ?? "Om Bengt Johansson",
    description: metadata?.description ?? "Les mer om Bengt og hans erfaring med coaching.",
    ogImage: metadata?.ogImage ? urlFor(metadata.ogImage).width(1200).height(630).format("jpg").url() : undefined,
  };
}
