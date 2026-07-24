"use client";
import React, { Fragment } from "react";
import Link from "next/link";

const ThemeBannerOne = ({ hero }) => {
  const headline = hero?.headline || "We’re a innovative IT Solutions";
  const lines = headline.split(/\n| \| /).filter(Boolean);
  const ctaText = hero?.ctaText || "Get Started Now";
  const ctaUrl = hero?.ctaUrl || "/contact";

  return (
    <Fragment>
      <div className="theme-banner-one pt-205 pb-35 pt-lg-120 pt-md-80 pt-xs-60">
        <div className="shadow-text">Techy</div>
        <img
          className="banner-shape shape-one"
          src="/assets/img/shape/line-1.svg"
          alt="shape"
        />
        <img
          className="banner-shape shape-two d-none d-lg-inline-block"
          src="/assets/img/shape/star-1.svg"
          alt="shape"
        />
        <img
          className="banner-shape shape-three d-none d-lg-inline-block"
          src="/assets/img/shape/star-2.svg"
          alt="shape"
        />
        <img
          className="banner-shape shape-four"
          src="/assets/img/shape/line-round-1.svg"
          alt="shape"
        />
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
            <div className="col-11">
              <div className="theme__content text-center">
                <h1 className="main-title-one">
                  {lines.length > 1
                    ? lines.map((line) => <span key={line}>{line}</span>)
                    : [
                        <span key="1">We’re a</span>,
                        <span key="2">innovative IT</span>,
                        <span key="3">Solutions</span>,
                      ]}
                </h1>
                {hero?.subHeadline ? (
                  <p className="mt-20 mb-30 text-white">{hero.subHeadline}</p>
                ) : null}
                <Link className="theme_btn" href={ctaUrl}>
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeBannerOne;
