"use client";

import React from "react";
import Link from "next/link";
import MetisMenu from "@metismenu/react";
import "metismenujs/style";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

const MobileMenu = (props) => {
  const { onClick, active } = props;

  return (
    <div className={`mobile-menu-wrapper ${active} d-lg-none`}>
      <div className="mobile-logo mb-5">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/logo/header-logo-1.png" alt="logo" />
        </Link>
      </div>
      <span className="mobile-menu-close" onClick={onClick}>
        <i className="bi bi-x-lg" />
      </span>
      <MetisMenu>
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onClick}>
              {item.name}
            </Link>
          </li>
        ))}
      </MetisMenu>
    </div>
  );
};

export default MobileMenu;
