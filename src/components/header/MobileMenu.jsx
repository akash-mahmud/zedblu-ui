"use client";

import React from "react";
import Link from "next/link";
import MetisMenu from "@metismenu/react";
import "metismenujs/style";
import { getVisibleMenuItems } from "@/lib/nav";

const MobileMenu = (props) => {
  const { onClick, active, global = null } = props;
  const items = getVisibleMenuItems(global);

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
        {items.map((item) => (
          <li key={`${item.url}-${item.position}`}>
            <Link href={item.url || "/"} onClick={onClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </MetisMenu>
    </div>
  );
};

export default MobileMenu;
