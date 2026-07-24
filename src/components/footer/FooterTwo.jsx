"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import CopyRightTwo from "./CopyRightTwo";
import { mediaUrl } from "@/lib/axios";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const platformIcon = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
  instagram: "fab fa-instagram",
  github: "fab fa-github",
};

const FooterTwo = ({ global }) => {
  const contact = global?.contactInfo;
  const logo = mediaUrl(global?.logo?.url, "/assets/img/logo/header-logo-1.png");

  return (
    <Fragment>
      <footer className="gradient-bg footer-area theme-footer-two pt-95 pb-80 pb-lg-10">
        <div className="container">
          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-4 col-md-6 mb-40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} alt={global?.siteName || "Logo"} className="mb-20" />
              <p>{global?.footerText || global?.siteDescription}</p>
            </div>
            <div className="col-lg-2 col-md-6 mb-40">
              <h5 className="text-white mb-20">Links</h5>
              <ul className="list-unstyled">
                {navLinks.map((item) => (
                  <li key={item.href} className="mb-10">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
                <li className="mb-10">
                  <Link href="/pages/faq">FAQ</Link>
                </li>
                <li className="mb-10">
                  <Link href="/pages/privacy-policy">Privacy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-40">
              <h5 className="text-white mb-20">Contact</h5>
              <ul className="list-unstyled">
                {contact?.email ? <li className="mb-10">{contact.email}</li> : null}
                {contact?.phone ? <li className="mb-10">{contact.phone}</li> : null}
                {contact?.address ? (
                  <li className="mb-10">{contact.address}</li>
                ) : null}
                {contact?.officeHours ? (
                  <li className="mb-10">{contact.officeHours}</li>
                ) : null}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-40">
              <h5 className="text-white mb-20">Social</h5>
              <ul className="social-icon style-none d-flex">
                {(global?.socialLinks || []).map((link) => (
                  <li key={`${link.platform}-${link.url}`} className="me-3">
                    <a href={link.url} target="_blank" rel="noreferrer">
                      <i
                        className={
                          platformIcon[link.platform] || "fab fa-link"
                        }
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <CopyRightTwo />
      </footer>
    </Fragment>
  );
};

export default FooterTwo;
