import { client } from "../sanityClient";

const query = `*[_type == "contactPage"][0] {
  metadata {
    title,
    description,
    "ogImage": ogImage.asset->url
  }
}`;

export async function getContactPageMetadata() {
  const data = await client.fetch(query);
  return data;
}
