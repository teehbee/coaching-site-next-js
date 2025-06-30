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
        <div className="row align-items-stretch">
          <div className="col-12 col-lg-4 pb-30 d-flex flex-column">
            <div className="border-full p-30 border-radius-5 h-100">
              <div className="pb-15">
                <h3 className="pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">Ta steget mot tydliga mål</h3>
              </div>
              <div>Bengt Johansson har lång erfarenhet av ledarskap, både som befäl till sjöss och som chef inom teknisk förvaltning. Hans styrkor ligger i ett naturligt lugn, tydlig kommunikation och en närvaro som skapar förtroende hos medarbetare och ledare. Genom åren har han stöttat individer i förändringsarbete och utveckling, vilket gör honom särskilt skicklig inom coaching. Hans bakgrund i krävande miljöer har gett honom djup förståelse för vad som krävs för att leda sig själv och andra.</div>
            </div>
          </div>
          <div className="col-12 col-lg-4 pb-30 d-flex flex-column">
            <div className="border-full p-30 border-radius-5 h-100">
              <div className="pb-15">
                <h3 className="pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">Coaching</h3>
              </div>
              <div>Hos mig handlar coaching om att stärka dig som ledare, medarbetare eller individ att hitta dina egna svar och lösningar. Jag utgår från att du redan är expert på ditt liv och ditt ledarskap – min roll är att skapa klarhet och riktning. Genom professionell coaching får du verktyg för att utvecklas, fatta bättre beslut och faktiskt få det gjort. Det är ett samarbete som bygger på tillit, reflektion och en tydlig framdrift mot dina mål.</div>
            </div>
          </div>
          <div className="col-12 col-lg-4 pb-30 d-flex flex-column">
            <div className="border-full p-30 border-radius-5 h-100">
              <div className="pb-15">
                <h3 className="pos-relative custom-border-bottom custom-border-bottom-25-percent-ts">Ta steget mot tydliga mål</h3>
              </div>
              <div>Ta kontakt med mig redan idag om du vill utveckla ditt ledarskap och skapa verklig förändring. Tillsammans hittar vi verktygen som gör skillnad – och ser till att du får det gjort. Oavsett om du är ny som ledare eller mitt i en utmanande vardag, finns stöd att få. Börja resan mot tydligare riktning, starkare självledarskap och ökad trygghet – nu.</div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="pt-15">
            <a className="btn btn-primary" href="">
              Ta kontakt med meg i dag
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextColumns;
