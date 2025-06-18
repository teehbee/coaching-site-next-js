"use-client";

import { useEffect, useState } from "react";
import { client } from "../../../lib/sanityClient";
import { globalSettingsQuery } from "@/lib/queries";
import Link from "next/link";
import { NavLink } from "@/components/reusable";
import { SiteSettingsInterface } from "@/data/interface/siteSettingsInterface";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [settings, setSettings] = useState<SiteSettingsInterface | null>(null);

  useEffect(() => {
    client.fetch(globalSettingsQuery).then((data) => {
      setSettings(data);
    });
  }, []);

  if (!settings) {
    return null;
  }
  return (
    <nav role="navigation">
      <div className="container-fluid d-flex justify-content-between nav-container">
        <Link href="/" aria-label="Link til forsiden">
          <picture>
            <source srcSet={settings.logoLarge.asset.url} media="(min-width: 992px)" />
            <img src={settings.logoSmall.asset.url} alt={settings.logoSmall.alt || settings.siteTitle} />
          </picture>
        </Link>
        <div className="nav-desktop-and-menu-toggle d-flex align-items-center">
          <div className="nav-desktop-links d-none d-lg-block">
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/">
              Forside
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/coaching">
              Coaching
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/om-meg">
              Om meg
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/kontakt">
              Kontakt
            </NavLink>
          </div>
          <div onClick={onMenuToggle} className="d-block d-lg-none menu-toggle" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
