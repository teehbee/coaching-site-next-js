"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, MouseEventHandler } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  activeClassName?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, activeClassName = "active", className = "", onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const combinedClassName = isActive ? `${className} ${activeClassName}`.trim() : className;

  return (
    <Link href={href} className={combinedClassName} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
