"use client";

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  );
}
