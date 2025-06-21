import { client } from "../sanityClient";

const query = `*[_type == "aboutPage"][0] {
  metadata {
    title,
    description,
    "ogImage": ogImage.asset->url
  }
}`;

export async function getAboutPageMetadata() {
  const data = await client.fetch(query);
  return data;
}
