import { ContactContent } from "./ContactContent";
import type { Metadata } from "next";
import { getContactMetadata } from "@/lib/metadata/contactMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactMetadata();

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.ogImage
        ? [
            {
              url: data.ogImage,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      siteName: "Bengt Johansson",
      locale: "no_NO",
      type: "website",
      url: "https://dittdomene.no/om", // Husk å tilpasse denne for hver side
    },
  };
}

const ContactPage = async () => {
  return <ContactContent />;
};

export default ContactPage;
