"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { getVisibleMenuItems } from "@/lib/nav";

/**
 * @param {{ global?: import("@/types/strapi").GlobalContent | null }} props
 */
const ThemeMainMenu = ({ global = null }) => {
  const items = getVisibleMenuItems(global);

  return (
    <Fragment>
      <ul className="navbar-nav main-navbar mb-2 mb-lg-0 ps-1">
        {items.map((item) => (
          <li className="nav-item" key={`${item.url}-${item.position}`}>
            <Link className="nav-link" href={item.url || "/"}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ThemeMainMenu;
