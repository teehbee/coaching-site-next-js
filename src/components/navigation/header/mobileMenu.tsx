"use-client";

import { useSanityData } from "../../../utils";
import { globalSettingsQuery } from "@/lib/queries";
import Image from "next/image";
import { NavLink } from "@/components/reusable";
import Link from "next/link";
import { useRef } from "react";
import { useMenuBehavior } from "../../../utils";
import { SiteSettingsInterface } from "@/data/interface/siteSettingsInterface";

interface MobileMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, isMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useMenuBehavior({ isMenuOpen, menuRef, onClose });
  const settings = useSanityData<SiteSettingsInterface>(globalSettingsQuery);

  if (!settings) {
    return null;
  }

  return (
    <div className={`menu-backdrop ${isMenuOpen ? "show" : ""}`}>
      <div ref={menuRef} className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header d-flex justify-content-between">
          <Link href="/">
            <Image width={178} height={54} src={settings.logoSmall.asset.url} alt={settings.logoSmall.alt || settings.siteTitle} />
          </Link>
          <button onClick={onClose} className="mobile-menu-close" aria-label="Close menu">
            <div className="bar bar1" />
            <div className="bar bar2" />
          </button>
        </div>
        <div className="mobile-menu-wrapper d-flex flex-column justify-content-center">
          <nav className="d-flex flex-column text-center">
            <NavLink activeClassName="nav-active" href="/" onClick={onClose}>
              Forside
            </NavLink>
            <NavLink activeClassName="nav-active" href="/coaching" onClick={onClose}>
              Coaching
            </NavLink>
            <NavLink activeClassName="nav-active" href="/om-meg" onClick={onClose}>
              Om meg
            </NavLink>
            <NavLink activeClassName="nav-active" href="/kontakt" onClick={onClose}>
              Kontakt
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
