"use client";
import React, { Fragment } from "react";
import Link from "next/link";

const NewsletterOne = ({
  title = "Have a project in mind? Let’s get to work.",
  ctaText = "Contact us",
  ctaUrl = "/contact",
}) => {

  return (
    <Fragment>
      <section className="techy-newsletter pt-120 pt-lg-60">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center borders">
            <div className="col-lg-8">
              <div className="block-style-two text-center pb-90">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="news-shape-one d-none d-xl-block"
                  src="/assets/img/shape/line-round-3a.svg"
                  alt=""
                />
                <h3>{title}</h3>
                <Link href={ctaUrl || "/contact"} className="theme_btn">
                  {ctaText || "Contact us"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NewsletterOne;
