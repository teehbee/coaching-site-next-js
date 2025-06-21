import { client } from "../sanityClient";

const query = `*[_type == "coachingPage"][0] {
  metadata {
    title,
    description,
    "ogImage": ogImage.asset->url
  }
}`;

export async function getCoachingPageMetadata() {
  const data = await client.fetch(query);
  return data;
}
