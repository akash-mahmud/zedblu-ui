"use client";

import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import SearchModal from "../search-modal/SearchModal";
import ThemeMainMenu from "./ThemeMainMenu";
import SideBar from "../sidebar/SideBar";
import MobileMenu from "./MobileMenu";
import type { GlobalContent } from "@/types/strapi";
import { pickImage } from "@/lib/axios";

type ThemeMenuTwoProps = {
  global?: GlobalContent | null;
};

export default function ThemeMenuTwo({ global = null }: ThemeMenuTwoProps) {
  const [sticky, setSticky] = useState(false);
  const [modalIsopen, setOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [menu, setMenu] = useState("");
  const logoSrc = pickImage(global?.logo, "/assets/img/logo/header-logo-1.png");

  useEffect(() => {
    const stickyMenu = () => {
      setSticky(window.scrollY >= 60);
    };
    stickyMenu();
    window.addEventListener("scroll", stickyMenu);
    return () => window.removeEventListener("scroll", stickyMenu);
  }, []);

  return (
    <Fragment>
      <SearchModal isOpen={modalIsopen} onClick={() => setOpen(false)} />
      <SideBar onClick={() => setShowSidebar(false)} value={showSidebar} global={global} />
      <header className="theme-main-menu theme-menu-two pt-md-25 pt-40">
        <div className="top-header pb-20">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-6 text-start">
                <div className="logo-area">
                  <Link href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logoSrc} alt={global?.siteName || "Header-logo"} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-6 text-end">
                <ul className="right-nav mb-0 d-flex align-items-center justify-content-end">
                  <li className="search-area">
                    <a
                      className="search_input"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(true);
                      }}
                    >
                      <i className="bi bi-search" />
                    </a>
                  </li>
                  <li className="d-none d-lg-inline-block">
                    <div className="hamburger-menu">
                      <a
                        className="round-menu"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowSidebar(true);
                        }}
                      >
                        <i className="bi bi-list" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            sticky ? "main-header-area sticky-menu" : "main-header-area"
          }
        >
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div className="col-6 d-lg-none d-md-block">
                <div className="hamburger-menu">
                  <a
                    className="round-menu d-lg-none"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenu("show");
                    }}
                  >
                    <i className="bi bi-list" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                <nav className="navbar navbar-expand-lg">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ThemeMainMenu global={global} />
                  </div>
                </nav>
              </div>
              <div className="col-xl-4 col-lg-4 col-6 text-end">
                <ul className="right-nav mb-0 d-flex align-items-center justify-content-end">
                  <li className="d-none d-md-inline-block">
                    <Link className="theme_btn style-two" href="/contact">
                      Get a Quote
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Reserve nav height when sticky so the page does not jump */}
        {sticky ? <div className="sticky-menu-spacer" aria-hidden="true" /> : null}
        <MobileMenu onClick={() => setMenu("")} active={menu} global={global} />
      </header>
    </Fragment>
  );
}
