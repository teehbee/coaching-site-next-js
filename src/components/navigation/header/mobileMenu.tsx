"use-client";

import { NavLink } from "@/components/reusable";
import Link from "next/link";
import { useRef } from "react";
import { useMenuBehavior } from "../../../utils";

interface MobileMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, isMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useMenuBehavior({ isMenuOpen, menuRef, onClose });

  return (
    <div className={`menu-backdrop ${isMenuOpen ? "show" : ""}`}>
      <div ref={menuRef} className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header d-flex justify-content-between">
          <Link href="/">
            <img src="/assets/logo/logo-sm.png" alt="logo" />
          </Link>
          <button onClick={onClose} className="mobile-menu-close" aria-label="Close menu">
            <div className="bar bar1" />
            <div className="bar bar2" />
          </button>
        </div>
        <div className="mobile-menu-wrapper d-flex flex-column justify-content-center">
          <nav className="d-flex flex-column text-center">
            <NavLink activeClassName="my-active-class" href="/" onClick={onClose}>
              Forside
            </NavLink>
            <NavLink activeClassName="my-active-class" href="/coaching" onClick={onClose}>
              Coaching
            </NavLink>
            <NavLink activeClassName="my-active-class" href="/om-meg" onClick={onClose}>
              Om meg
            </NavLink>
            <NavLink activeClassName="my-active-class" href="/kontakt" onClick={onClose}>
              Kontakt
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
