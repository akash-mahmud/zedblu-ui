"use client";

import React, { Fragment } from "react";
import Link from "next/link";

const ThemeMainMenu = () => {
  return (
    <Fragment>
      <ul className="navbar-nav main-navbar mb-2 mb-lg-0 ps-1">
        <li className="nav-item">
          <Link className="nav-link" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/projects">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/team">
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/clients">
            Clients
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default ThemeMainMenu;
