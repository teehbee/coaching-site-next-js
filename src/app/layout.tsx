import type { Metadata } from "next";
import "../styles/styles.scss";
import { Header, Footer } from "@/components/navigation";
import Script from "next/script";
import LayoutClientWrapper from "./layout-client";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={getFontClasses()}>
        <Script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js" strategy="beforeInteractive" />
        <Script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="CWoF1AuWdmx_BX" strategy="beforeInteractive" />

        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
        anonymize_ip: true,
        send_page_view: false
      });
    `,
          }}
        />
        <LayoutClientWrapper>
          <Header />
          {children}
          <Footer />
        </LayoutClientWrapper>
      </body>
    </html>
  );
}
