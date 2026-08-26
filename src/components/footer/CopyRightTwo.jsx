"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { pickImage } from "@/lib/axios";

const pageContent = [
  { name: "About Us", routerPath: "/about" },
  { name: "Contact", routerPath: "/contact" },
  { name: "Blog", routerPath: "/blog" },
];

const CopyRightTwo = ({ global }) => {
  const logo = pickImage(global?.logo, "");
  const siteName = global?.siteName || "Zedblu";

  return (
    <Fragment>
      <div className="copyright-two">
        <div className="row gx-4 gx-xxl-5 align-items-center">
          <div className="col-xl-5 col-md-5">
            <ul className="fot-list d-flex align-items-center justify-content-center justify-content-md-start">
              {pageContent.map((val, i) => (
                <li key={i}>
                  <Link href={val.routerPath}>{val.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-3 col-md-6 text-center d-none d-lg-inline-block">
            <div className="footer__logo mb-25">
              <Link href="/">
                {logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logo} alt={siteName} />
                ) : (
                  <span className="logo-wordmark">{siteName}.</span>
                )}
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-7 text-center">
            <p className="text-white mb-20 pe-xl-3">
              © {new Date().getFullYear()} {siteName}, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CopyRightTwo;
