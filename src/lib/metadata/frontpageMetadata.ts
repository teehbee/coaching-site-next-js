import { client } from "../sanityClient";

const query = `*[_type == "homePage"][0] {
  metadata {
    title,
    description,
    "ogImage": ogImage.asset->url
  }
}`;

export async function getFrontpagePageMetadata() {
  const data = await client.fetch(query);
  return data;
}
