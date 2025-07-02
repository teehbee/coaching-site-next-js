"use client";

import Link from "next/link";

export const NotFoundContent: React.FC = () => {
  return (
    <section className="h-80vh">
      <div className="container text-center">
        <div className="pb-15">
          <h1>404 - Siden finnes ikke</h1>
        </div>
        <div className="pb-15">
          <p>Beklager, vi fant ikke siden du lette etter.</p>
        </div>
        <div>
          <Link className="btn btn-primary" href="/">
            Gå tilbake til forsiden
          </Link>
        </div>
      </div>
    </section>
  );
};
