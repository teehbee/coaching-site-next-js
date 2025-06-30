"use client";

import { HomePageInterface } from "@/data/interface/frontpageInterface";
import { frontpageQuery } from "@/lib/queries";
// import { PortableText } from "@portabletext/react";
import { useSanityData } from "@/utils";

const TextColumns: React.FC = () => {
  const settings = useSanityData<HomePageInterface>(frontpageQuery);

  if (!settings) {
    return null;
  }
  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 pr-lg-50 pb-30">
            <div className="pb-15">
              <h3>Overskrift</h3>
            </div>
            <div>Bengt Johansson har lång erfarenhet av ledarskap, både som befäl till sjöss och som chef inom teknisk förvaltning. Hans styrkor ligger i ett naturligt lugn, tydlig kommunikation och en närvaro som skapar förtroende hos medarbetare och ledare. Genom åren har han stöttat individer i förändringsarbete och utveckling, vilket gör honom särskilt skicklig inom coaching. Hans bakgrund i krävande miljöer har gett honom djup förståelse för vad som krävs för att leda sig själv och andra.</div>
          </div>
          <div className="col-12 col-lg-4 pr-lg-50 pb-30">
            <div className="pb-15">
              <h3>Overskrift</h3>
            </div>
            <div>Bengt Johansson har lång erfarenhet av ledarskap, både som befäl till sjöss och som chef inom teknisk förvaltning. Hans styrkor ligger i ett naturligt lugn, tydlig kommunikation och en närvaro som skapar förtroende hos medarbetare och ledare. Genom åren har han stöttat individer i förändringsarbete och utveckling, vilket gör honom särskilt skicklig inom coaching. Hans bakgrund i krävande miljöer har gett honom djup förståelse för vad som krävs för att leda sig själv och andra.</div>
          </div>
          <div className="col-12 col-lg-4 pr-lg-50 pb-30">
            <div className="pb-15">
              <h3>Overskrift</h3>
            </div>
            <div>Bengt Johansson har lång erfarenhet av ledarskap, både som befäl till sjöss och som chef inom teknisk förvaltning. Hans styrkor ligger i ett naturligt lugn, tydlig kommunikation och en närvaro som skapar förtroende hos medarbetare och ledare. Genom åren har han stöttat individer i förändringsarbete och utveckling, vilket gör honom särskilt skicklig inom coaching. Hans bakgrund i krävande miljöer har gett honom djup förståelse för vad som krävs för att leda sig själv och andra.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextColumns;
