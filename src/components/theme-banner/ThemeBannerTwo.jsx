"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import CommonCounter from "../counter/CommonCounter";
import { mediaUrl } from "@/lib/axios";

const ThemeBannerTwo = ({ hero, secondaryImage }) => {
  const headline = hero?.headline || "";
  const lines = headline.split(/\n| \| /).filter(Boolean);
  const subHeadline = hero?.subHeadline || "";
  const ctaText = hero?.ctaText || "Get Our Quote";
  const ctaUrl = hero?.ctaUrl || "/contact";
  const bg = mediaUrl(hero?.backgroundImage?.url);
  const secondary = mediaUrl(secondaryImage?.url || hero?.backgroundImage?.url);

  return (
    <Fragment>
      <div className="theme-banner-two pt-220 pb-230 pt-lg-120 pt-md-80 pt-xs-60 pb-sm-120">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="banner-shape shape-one "
          src="/assets/img/shape/star-3b.svg"
          alt=""
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="banner-shape shape-two"
          src="/assets/img/shape/star-4b.svg"
          alt=""
        />
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center">
            <div className="col-xl-6 col-md-7">
              <div className="theme__content__two text-md-start text-center">
                {subHeadline ? (
                  <h4 className="hero-sub-title mb-25">{subHeadline}</h4>
                ) : null}
                <h1 className="main-title-two">
                  {lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>
                <Link className="theme_btn" href={ctaUrl}>
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-img img-1" src={bg} alt="hero" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-img img-2" src={secondary} alt="hero" />
          <div className="hero-box">
            <span className="icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/icon/icon-13b.svg" alt="" />
            </span>
            <div className="box">
              <span className="text-theme">
                <span className="counter">
                  <CommonCounter value="45" />
                </span>
                +
              </span>
              Awards Win
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeBannerTwo;
