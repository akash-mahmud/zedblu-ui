"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { SubscribeFormOne } from "../form/SubscribeFormOne";
import CopyRightTwo from "./CopyRightTwo";
import type { GlobalContent } from "@/types/strapi";

const defaultLinks = [
  { name: "Home", routerPath: "/" },
  { name: "About", routerPath: "/about" },
  { name: "Services", routerPath: "/services" },
  { name: "Contact", routerPath: "/contact" },
];

const platformIcon: Record<string, string> = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
  instagram: "fab fa-instagram",
  github: "fab fa-github",
};

const defaultSocial = [
  { icon: "fab fa-facebook-f", url: "#" },
  { icon: "fab fa-twitter", url: "#" },
  { icon: "fab fa-linkedin-in", url: "#" },
  { icon: "fab fa-youtube", url: "#" },
];

const defaultMap =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14586.166746112083!2d90.38689255!3d23.941278099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1656070170544!5m2!1sen!2sbd";

type FooterTwoProps = {
  global?: GlobalContent | null;
};

export default function FooterTwo({ global = null }: FooterTwoProps) {
  const contact = global?.contactInfo;
  const contactItems = [
    contact?.email,
    contact?.phone,
    contact?.address,
  ].filter(Boolean) as string[];
  const socials =
    global?.socialLinks?.length
      ? global.socialLinks.map((link) => ({
          icon: platformIcon[link.platform || ""] || "fab fa-link",
          url: link.url || "#",
        }))
      : defaultSocial;
  const mapSrc = global?.mapEmbedUrl || defaultMap;

  return (
    <Fragment>
      <footer className="gradient-bg footer-area theme-footer-two pt-95 pb-80 pb-lg-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-shape shape-1b"
          src="/assets/img/shape/star-3b.svg"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="footer-shape shape-2b d-none d-lg-inline-block"
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
          className="footer-shape shape-4b d-none d-lg-inline-block"
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
            <div className="col-xl-2 col-md-6" data-aos="fade-up">
              <div className="footer__widget mb-40">
                <h4 className="widget-title mb-35">Quick Links</h4>
                <ul className="fot-list">
                  {defaultLinks.map((val) => (
                    <li key={val.routerPath}>
                      <Link href={val.routerPath}>{val.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="footer__widget mb-40 ps-xxl-4">
                <h4 className="widget-title mb-35">Contact</h4>
                <ul className="fot-list">
                  {contactItems.length
                    ? contactItems.map((item) => (
                        <li key={item}>
                          <span>{item}</span>
                        </li>
                      ))
                    : (
                      <>
                        <li>
                          <a href="#">mail@zedblu.com</a>
                        </li>
                        <li>
                          <a href="#">+919897206206</a>
                        </li>
                      </>
                    )}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 ps-xxl-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="footer__widget mb-40 px-xxl-5">
                <h4 className="widget-title mb-35">Subscribe</h4>
                <p className="fs-17 mb-0 pb-20">
                  {global?.footerText ||
                    "Phosfluorescentl aggregate bleed channels rather global araa."}
                </p>
                <SubscribeFormOne />
                <div className="footer__social mb-30">
                  {socials.map((val, i) => (
                    <a key={`${val.icon}-${i}`} href={val.url}>
                      <i className={val.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="footer__widget mb-40">
                <iframe src={mapSrc} title="Office location" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <CopyRightTwo global={global} />
        </div>
      </footer>
    </Fragment>
  );
}
