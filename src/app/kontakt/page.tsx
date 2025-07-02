import { ContactContent } from "./ContactContent";
import type { Metadata } from "next";
import { getContactMetadata } from "@/lib/metadata/contactMetadata";¨
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactMetadata();

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
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
  return (
    <>
     <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
    <ContactContent />;
    </>
  )
   
};

export default ContactPage;


