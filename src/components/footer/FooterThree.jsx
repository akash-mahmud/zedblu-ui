"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import SubscribeFormTwo from "../form/SubscribeFormTwo";
import CopyRightThree from "./CopyRightThree";

/**
 * @param {{ global?: import("@/types/strapi").GlobalContent | null }} props
 */
const FooterThree = ({ global = null }) => {
  const contact = global?.contactInfo;
  const contactItems = [
    contact?.email,
    contact?.phone,
    contact?.address,
  ].filter(Boolean);
  const fallbackContact = [
    "techy@mail.com",
    "(505) 555-0125",
    "6391 Elgin St. Celina, Delaware 10299",
  ];
  const links = contactItems.length ? contactItems : fallbackContact;
  const siteName = global?.siteName || "Techy.";

  return (
    <Fragment>
      <footer className="footer-area theme-footer-three pt-145 pt-lg-100 pt-sm-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-shape shape-1b"
          src="/assets/img/shape/star-3b.svg"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-shape shape-2b"
          src="/assets/img/shape/star-4b.svg"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-shape shape-3b"
          src="/assets/img/shape/star-6b.svg"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-shape shape-4b"
          src="/assets/img/shape/star-5b.svg"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-shape shape-5b"
          src="/assets/img/shape/star-5b.svg"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="fot-shape-one"
          src="/assets/img/shape/line-round-7b.svg"
          alt=""
        />
        <div className="container">
          <div className="row gx-4 gx-xxl-5 mb-10">
            <div className="col-xxl-3 col-md-4" data-aos="fade-up">
              <div className="footer__widget mb-40">
                <Link className="logo-title" href="/">
                  {siteName}.
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4" data-aos="fade-up">
              <div className="footer__widget mb-40">
                <h4 className="widget-title">Contact</h4>
                <ul className="fot-list">
                  {links.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="footer__widget mb-40">
                <h4 className="widget-title">Quick Links</h4>
                <ul className="fot-list">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="footer__widget mb-40">
                <h4 className="widget-title">Subscribe</h4>
                <p className="fs-17 text-white mb-0 pb-20">
                  {global?.footerText ||
                    "Phosfluorescentl aggregate bleed channels rather global araa."}
                </p>
                <SubscribeFormTwo />
              </div>
            </div>
          </div>
        </div>
        <CopyRightThree global={global} />
      </footer>
    </Fragment>
  );
};

export default FooterThree;
