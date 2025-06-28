import type { Metadata } from "next";
import "../styles/styles.scss";
import { Header, Footer } from "@/components/navigation";
import Script from "next/script";
import { getFontClasses } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Bengt Johansson",
    template: "%s | Bengt Johansson",
  },
  description: "Offisiell nettside for Bengt Johansson – coaching og utvikling.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isGtmDefined = typeof gtmId === "string" && gtmId.trim().length > 0;

  if (!isGtmDefined && process.env.NODE_ENV !== "production") {
    console.warn(" GTM-ID mangler. Sjekk .env-filen din for NEXT_PUBLIC_GTM_ID");
  }
  return (
    <html lang="sv">
      <head>
        {/* GTM init script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      </head>
      <body className={getFontClasses()}>
        {/* GTM noscript (fallback) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
