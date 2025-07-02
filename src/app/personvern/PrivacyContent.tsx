"use client";

import { useSanityData } from "@/utils";
import { SiteSettingsInterface } from "@/data/interface/siteSettingsInterface";
import { globalSettingsQuery } from "@/lib/queries";
import Link from "next/link";

const PrivacyContent: React.FC = () => {
  const settings = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!settings) {
    return null;
  }

  return (
    <section className="pb-45 pb-lg-90">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1 className="pb-15">Personvern og informasjonskapsler (cookies)</h1>
            <p>
              Vi i <strong>{settings.companyTitle || "Firmanavn"}</strong> tar ditt personvern på alvor. Denne erklæringen forklarer hvordan vi samler inn, bruker og beskytter informasjonen din når du besøker nettsiden vår <strong>{settings.websiteUrl || "URL"}</strong>. Vi ønsker å gi deg en trygg og transparent opplevelse på nett, samtidig som vi overholder gjeldende personvernregelverk.
            </p>
            <div>
              <p className="fs-1-rem-lg-1-25rem">
                <strong>Informasjonsinnsamling</strong>
              </p>
              <p>Når du besøker nettsiden vår, registreres visse tekniske opplysninger automatisk. Dette kan inkludere din IP-adresse, hvilken nettleser og enhet du bruker, hvilket operativsystem du har, hvilke sider du besøker og tidspunktet for besøket. Informasjonen brukes utelukkende til teknisk drift, forbedring av innhold og analyse av brukeropplevelse. Vi bruker ikke denne informasjonen til å identifisere deg personlig.</p>
            </div>
            <div>
              <p className="fs-1-rem-lg-1-25rem">
                <strong>Informasjonskapsler (Cookies)</strong>
              </p>
              <p>Nettsiden vår bruker informasjonskapsler, også kjent som cookies, for å forbedre brukeropplevelsen. En informasjonskapsel er en liten tekstfil som lagres i nettleseren din. Vi benytter nødvendige cookies som sørger for at nettsiden fungerer som den skal, og vi bruker også analytiske cookies for å forstå hvordan nettsiden brukes.</p>
              <p>
                Vi bruker <strong>Google Analytics</strong> for å samle inn anonym informasjon om hvordan besøkende navigerer og benytter innholdet vårt. Dette gjør det mulig for oss å forbedre strukturen og funksjonaliteten på nettstedet. Google Analytics lagrer ikke personlig identifiserbar informasjon, og IP-adresser anonymiseres.
              </p>
              <p>Før vi setter cookies som ikke er strengt nødvendige, ber vi om ditt samtykke. Du kan når som helst endre dine samtykkevalg eller trekke dem tilbake via samtykkeverktøyet vårt, som vises nederst på nettsiden.</p>
            </div>
            <div>
              <p className="fs-1-rem-lg-1-25rem">
                <strong>Tredjepartsverktøy</strong>
              </p>
            </div>
            <p>Per i dag benytter vi kun Google Analytics for analyseformål. Dersom vi i fremtiden tar i bruk flere tredjepartsverktøy, vil denne erklæringen oppdateres med relevant informasjon om leverandør, formål og lenke til den aktuelle tjenestens personvernerklæring. Slike tjenester vil aldri aktiveres uten at du først har gitt et gyldig samtykke.</p>
            <div>
              <p className="fs-1-rem-lg-1-25rem">
                <strong>Dine rettigheter</strong>
              </p>
              <p>Som bruker har du rett til innsyn i hvilke personopplysninger vi har lagret om deg, samt rett til å be om retting eller sletting av disse. Du kan også trekke tilbake samtykke eller reservere deg mot visse former for databehandling. Ved spørsmål om dine rettigheter eller behandlingen av personopplysninger, er du velkommen til å ta kontakt.</p>
            </div>
            <p className="fs-1-rem-lg-1-25rem">
              <strong>Kontaktinformasjon</strong>
            </p>
            <p>Dersom du har spørsmål om vår personvernerklæring, informasjonskapsler eller hvordan vi behandler dine personopplysninger, kan du kontakte oss via følgende informasjon:</p>
            <p>
              Firmanavn: <strong>{settings.companyTitle || "Firmanavn"}</strong>
            </p>
            <p>
              {" "}
              E-post:
              <Link href={`mailto:${settings.contactEmail || "E-post mangler"}`}>
                {" "}
                <strong>{settings.contactEmail || "E-postadresse her"}</strong>
              </Link>
            </p>

            <p>
              {" "}
              Telefon:
              <Link href={`tel:${settings.contactPhone || "Telefonnummer mangler"}`}>
                {" "}
                <strong>{settings.contactPhone || "Telefonnummer her"}</strong>
              </Link>
            </p>
            <p>
              Adresse:{" "}
              <strong>
                {settings.contactAddress}, {settings.contactZipAndCity}
              </strong>
            </p>
            <p>
              Org nr: <strong>{settings.orgNumber || "Org nummer her"}</strong>
            </p>
            <p>Vi etterstreber å gi deg svar innen rimelig tid og alltid i henhold til gjeldende lover og forskrifter.</p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default PrivacyContent;
