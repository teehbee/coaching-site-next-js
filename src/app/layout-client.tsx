"use client";

import { ClientGoogleAnalytics } from "@/components/analytics/ClientGoogleAnalytics";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientGoogleAnalytics />
      {children}
    </>
  );
}
