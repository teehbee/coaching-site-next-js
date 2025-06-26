import type { Metadata } from "next";
import Script from "next/script";
import "../styles/styles.scss";
import { Header, Footer } from "@/components/navigation";
import { getFontClasses } from "@/lib/fonts";
// import { GoogleAnalytics } from "@next/third-parties/google";

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
  const gaId = process.env.NEXT_PUBLIC_GA_ID!;

  return (
    <html lang="en">
      <body className={getFontClasses()}>
        {/* Consent mode: default deny */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>

        {/* Usercentrics */}
        <Script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js" strategy="beforeInteractive" />
        <Script id="usercentrics-cmp" src="https://web.cmp.usercentrics.eu/ui/loader.js" data-settings-id="CWoF1AuWdmx_BX" async strategy="afterInteractive" />

        {/* Consent callback */}
        <Script id="usercentrics-consent-callback" strategy="afterInteractive">
          {`
            window.addEventListener("UC_UI_INITIALIZED", function () {
              window.addEventListener("UC_UI_ACCEPT_ALL", function () {
                gtag('consent', 'update', {
                  'ad_storage': 'granted',
                  'analytics_storage': 'granted'
                });
                loadGAScript();
              });

              window.addEventListener("UC_UI_REJECT_ALL", function () {
                gtag('consent', 'update', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied'
                });
              });
            });

            function loadGAScript() {
              const script = document.createElement('script');
              script.src = "https://www.googletagmanager.com/gtag/js?id=${gaId}";
              script.async = true;
              document.head.appendChild(script);

              script.onload = () => {
                gtag('js', new Date());
                gtag('config', '${gaId}');
              };
            }
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
