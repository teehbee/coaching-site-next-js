"use client";

import { useRef, useState } from "react";
import { MobileMenu, Navbar } from "./header/index";
import { useStickyScroll } from "../../utils";

interface HeaderProps {
  stickyOnscroll?: boolean;
}

const Header: React.FC<HeaderProps> = ({ stickyOnscroll = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const { isSticky, spacerHeight } = useStickyScroll(stickyOnscroll, headerRef);

  return (
    <>
      <header ref={headerRef} className={`alt-bg-color ${isSticky ? "is-sticky" : ""}`}>
        <Navbar onMenuToggle={() => setMenuOpen(true)} />
        <MobileMenu isMenuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>
      {isSticky && <div style={{ height: spacerHeight }} />}
    </>
  );
};

export default Header;
