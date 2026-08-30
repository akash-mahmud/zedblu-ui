"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { pickImage } from "@/lib/axios";

const SideBar = ({ onClick, value, global = null }) => {
  const logoSrc = pickImage(global?.logo, "/assets/img/logo/header-logo-1.png");
  const aboutTitle = global?.sidebar?.aboutTitle || "About Us";
  const aboutText = global?.sidebar?.aboutText || global?.siteDescription || "";
  const contactTitle = global?.sidebar?.contactTitle || "Contact Info";
  const address = global?.contactInfo?.address || "";
  const phone = global?.contactInfo?.phone || "";
  const email = global?.contactInfo?.email || "";

  return (
    <Fragment>
      <aside className={value ? "slide-bar show" : "slide-bar"}>
        <div className="close-mobile-menu">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onClick?.();
            }}
          >
            <i className="fas fa-times" />
          </a>
        </div>
        <div className="offset-sidebar">
          <div className="offset-widget offset-logo mb-30">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} alt={global?.siteName || "logo"} />
            </Link>
          </div>
          {aboutText ? (
            <div className="offset-widget mb-40">
              <div className="info-widget">
                <h4 className="offset-title mb-20">{aboutTitle}</h4>
                <p className="mb-30">{aboutText}</p>
              </div>
            </div>
          ) : null}
          {address || phone || email ? (
            <div className="offset-widget mb-30 pr-10">
              <div className="info-widget info-widget2">
                <h4 className="offset-title mb-20">{contactTitle}</h4>
                {address ? (
                  <p>
                    <i className="fal fa-address-book" />
                    {address}
                  </p>
                ) : null}
                {phone ? (
                  <p>
                    <i className="fal fa-phone" />
                    {phone}
                  </p>
                ) : null}
                {email ? (
                  <p>
                    <i className="fal fa-envelope-open" />
                    {email}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </aside>
    </Fragment>
  );
};

export default SideBar;
