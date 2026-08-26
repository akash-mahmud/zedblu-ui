"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FeatureThree from "@/components/feature/FeatureThree";
import BlockStyleOneA from "@/components/block/BlockStyleOneA";
import CounterTwoA from "@/components/counter/CounterTwoA";
import TeamTwoA from "@/components/team/TeamTwoA";
import PricingTab from "@/components/price/PricingTab";
import NewsletterOne from "@/components/call-to-action/NewsletterOne";
import FooterTwo from "@/components/footer/FooterTwo";
import ModalVideos from "@/components/modal-video/ModalVideos";
import { pickImage, mediaUrl } from "@/lib/axios";

export default function AboutPage({ about, global }) {
  const [open, setOpen] = useState(false);
  const title = about?.title || "About Us";
  const features = about?.features || [];
  const counters = about?.counters || [];
  const team = about?.teamHighlights || [];
  const plans = about?.pricingPlans || [];
  const hasVideo = Boolean(about?.youtubeUrl || about?.videoFile?.url);
  const hasIntro =
    Boolean(about?.introTitle || about?.story || about?.mission || about?.vision);
  const image = pickImage(about?.image, "/assets/img/about/about-3d.jpg");
  const secondary = pickImage(
    about?.secondaryImage,
    "/assets/img/about/about-4d.jpg",
  );
  const videoThumb = about?.videoThumbnail?.url
    ? mediaUrl(about.videoThumbnail.url)
    : undefined;

  return (
    <Fragment>
      {hasVideo ? (
        <ModalVideos
          isOpen={open}
          onClick={() => setOpen(false)}
          videoUrl={about?.youtubeUrl}
          fileUrl={
            about?.videoFile?.url ? mediaUrl(about.videoFile.url) : undefined
          }
        />
      ) : null}

      <div className="main-page-wrapper">
        <ThemeMenuTwo global={global} />
        <PageTitle title={title} />

        {features.length ? (
          <section className="techy-feature pt-150 pt-lg-100 pb-30 pb-lg-15">
            <div className="container">
              <FeatureThree features={features} />
            </div>
          </section>
        ) : null}

        {hasIntro ? (
          <section className="about-techy about-techy-4d pt-140 pb-75 pt-lg-60 pb-lg-15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-shape-4d shape-1b d-none d-xl-inline-block"
              src="/assets/img/shape/star-3b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-shape-4d shape-2b d-none d-lg-inline-block"
              src="/assets/img/shape/star-4b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-shape-4d shape-3b d-none d-md-inline-block"
              src="/assets/img/shape/star-4b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-shape-4d shape-4b d-none d-md-inline-block"
              src="/assets/img/shape/star-7c.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="about-shape-4d shape-5b d-none d-xl-inline-block"
              src="/assets/img/shape/star-4b.svg"
              alt=""
            />
            <div className="container">
              <div className="row gx-4 gx-xxl-5 align-items-center">
                <div
                  className="col-lg-7"
                  data-aos="fade-right"
                  data-aos-delay={100}
                >
                  <div className="about-img-wrapper-four position-relative mb-45">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="main-img" src={image} alt={title} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="main-img-two d-none d-xl-inline-block"
                      src={secondary}
                      alt=""
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="shape-one"
                      src="/assets/img/shape/line-round-2a.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="col-lg-5"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <BlockStyleOneA about={about} />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {counters.length ? (
          <section className="counter-area pt-70 pb-100 pt-lg-25 pb-lg-15">
            <div className="container">
              <CounterTwoA counters={counters} />
            </div>
          </section>
        ) : null}

        {team.length ? (
          <section className="gradient-bg techy-team team-sec-two mt-0 pt-95 pb-90 pt-lg-55 pb-lg-60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="team-shape shape-1b"
              src="/assets/img/shape/star-3b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="team-shape shape-2b"
              src="/assets/img/shape/star-4b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="team-shape shape-3b"
              src="/assets/img/shape/star-6b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="team-shape shape-4b"
              src="/assets/img/shape/star-5b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="team-shape shape-5b"
              src="/assets/img/shape/star-5b.svg"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="team-shape shape-6b"
              src="/assets/img/shape/line-round-6b.svg"
              alt=""
            />
            <div className="container">
              <div className="row gx-4 gx-xxl-5">
                <div className="col-lg-12">
                  <div className="section-title-two text-center mb-55">
                    <h6 className="sub-title mb-20">
                      {about?.teamHeading?.eyebrow || "Our Team"}
                    </h6>
                    <h2 className="sect-title">
                      {about?.teamHeading?.title || "Expert Team Member"}
                    </h2>
                  </div>
                </div>
              </div>
              <TeamTwoA members={team} />
              <div className="row gx-4 gx-xxl-5">
                <div
                  className="col-lg-12 text-center pt-15"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <Link className="theme_btn" href="/team">
                    See All Member
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {hasVideo ? (
          <section
            className="techy-video pt-230 pb-230 pt-lg-150 pb-lg-150"
            style={
              videoThumb
                ? {
                    backgroundImage: `url(${videoThumb})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="video-wrapper-two text-center">
                    <a
                      className="popup-video mb-30"
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        setOpen(true);
                      }}
                    >
                      <i className="bi bi-play-fill" />
                    </a>
                    <h4>{about?.videoLabel || "Watch Videos"}</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {plans.length ? (
          <section className="techy-price price-bg pt-150 pb-50 pt-lg-60">
            <div className="container">
              <div className="row gx-4 gx-xxl-5">
                <div className="col-lg-12">
                  <div className="section-title-two text-center mb-30 pb-1">
                    <h6 className="sub-title mb-20">
                      {about?.pricingHeading?.eyebrow || "Pricing List"}
                    </h6>
                    <h2 className="sect-title">
                      {about?.pricingHeading?.title ||
                        "Our Simple & Easy Pricing"}
                    </h2>
                  </div>
                </div>
              </div>
              <PricingTab plans={plans} />
            </div>
          </section>
        ) : null}

        {about?.newsletterTitle ? (
          <NewsletterOne
            title={about.newsletterTitle}
            ctaText={about.newsletterCtaText}
            ctaUrl={about.newsletterCtaUrl}
          />
        ) : null}

        <FooterTwo global={global} />
      </div>
    </Fragment>
  );
}
