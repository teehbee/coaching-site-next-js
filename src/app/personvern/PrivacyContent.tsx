"use client";

const PrivacyContent: React.FC = () => {
  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1 className="pb-15">Personvern og informasjonskapsler (cookies)</h1>
            <p>Vi tar ditt personvern på alvor. Denne siden forklarer hvordan vi samler inn og bruker informasjon når du besøker vår nettside.</p>
            <div>
              <p>
                <strong>Informasjonsinnsamling</strong>
              </p>
              <p>Når du besøker nettsiden vår, kan vi samle inn informasjon om din bruk for å forbedre tjenestene våre. Dette inkluderer data som IP-adresse, nettlesertype og sider du besøker.</p>
            </div>
            <div>
              <p>
                <strong>Informasjonskapsler (Cookies)</strong>
              </p>
              <p>Vi bruker informasjonskapsler for å forbedre brukeropplevelsen på nettsiden. Informasjonskapsler er små tekstfiler som lagres på din enhet.</p>
              <p>
                Vi benytter blant annet <strong>Google Analytics</strong> for å analysere trafikk og hvordan nettsiden brukes. Google Analytics bruker egne cookies for å samle inn anonymisert informasjon om besøket ditt. Disse dataene hjelper oss å forbedre nettsidens funksjonalitet og innhold.
              </p>
            </div>
            <div>
              <p>
                <strong>Samtykke til bruk av cookies</strong>
              </p>
              <p>For å overholde personvernregelverket krever vi ditt samtykke før vi aktiverer markedsførings- og analysecookies som Google Analytics. Du kan når som helst endre dine innstillinger eller trekke tilbake samtykket.</p>
            </div>
            <p>
              <strong>Kontakt oss</strong>
            </p>
            <p>Hvis du har spørsmål om hvordan vi behandler dine data, kan du kontakte oss på [din e-postadresse].</p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default PrivacyContent;
