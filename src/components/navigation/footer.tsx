"use client";

import Link from "next/link";

import { useSanityData } from "@/utils";
import { globalSettingsQuery } from "@/lib/queries";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../assets/icon";
import { SiteSettingsInterface } from "@/data/interface/siteSettingsInterface";

function Footer() {
  const settings = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!settings) {
    return null;
  }

  return (
    <footer className="alt-bg-color py-45">
      <div className="container text-center">
        <div className="row align-items-end border-bottom pb-15">
          <div className="d-none d-lg-flex col-lg-4 justify-content-end">
            <Link className="pr-50" href="/coaching">
              Coaching
            </Link>
            <Link className="pr-50" href="/om-meg">
              Om meg
            </Link>
          </div>
          <div className="col-12 col-lg-4">
            <Link href="/">
              <picture>
                <source srcSet={settings.logoLarge.asset.url} media="(min-width: 992px)" />
                <img src={settings.logoSmall.asset.url} alt={settings.logoSmall.alt || settings.siteTitle} />
              </picture>
            </Link>
          </div>
          <div className="d-none d-lg-flex col-lg-4 justify-content-start">
            <Link className="pl-50" href="kontakt">
              Kontakt
            </Link>
            <Link className="pl-50" href="personvern">
              Personvern
            </Link>
          </div>
          <div className="d-flex flex-wrap d-lg-none col-12 justify-content-center pt-15">
            <Link className="px-15 pb-5" href="coaching">
              Coaching
            </Link>
            <Link className="px-15 pb-5" href="om-meg">
              Om meg
            </Link>
            <Link className="px-15 pb-5" href="kontakt">
              Kontakt
            </Link>
            <Link className="px-15 pb-5" href="personvern">
              Personvern
            </Link>
          </div>
        </div>
        <div className="row align-items-center border-bottom py-15">
          <div className="col-12 footer-socials-row d-flex justify-content-center fs-0-75-rem-lg-0-875rem ">
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href={settings.facebookUrl} aria-label="Facebook lenke">
                <FacebookIcon />
                Facebook
              </a>
            </div>
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href={settings.instagramUrl} aria-label="Instagram lenke">
                <InstagramIcon />
                Instagram
              </a>
            </div>
            <div className="px-15 ">
              <a className="social-link" target="_blank" rel="noopener noreferrer" href={settings.linkedinUrl} aria-label="Linkedin lenke">
                <LinkedinIcon />
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 fs-0-75-rem-lg-0-875rem d-flex justify-content-between py-15">
            <div>© 2025 {settings.siteTitle}. Alle rettigheter reservert.</div>
            <div>
              Nettside og design levert av{" "}
              <a target="_blank" href="https://thbergseng-portfolio-2.netlify.app/">
                THbergseng Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
