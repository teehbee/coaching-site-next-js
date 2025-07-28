"use-client";

import { useSanityData } from "@/utils";
import { globalSettingsQuery } from "@/lib/queries";
import Link from "next/link";
import { NavLink } from "@/components/reusable";
import { SiteSettingsInterface } from "@/data/interface/siteSettingsInterface";
import Image from "next/image";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const settings = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!settings) {
    return null;
  }
  return (
    <nav role="navigation">
      <div className="container-fluid d-flex justify-content-between nav-container">
        <Link href="/" aria-label="Link til forsiden">
          <Image width={229} height={71} src="/assets/logo/logo_final.png" alt="" />
        </Link>
        <div className="nav-desktop-and-menu-toggle d-flex align-items-center">
          <div className="nav-desktop-links d-none d-lg-block">
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/">
              Hem
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/coaching">
              Coaching
            </NavLink>
            <NavLink activeClassName="nav-active" className="nav-desktop-link" href="/om-mig">
              Om mig
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
