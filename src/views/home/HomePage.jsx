"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import ThemeBannerTwo from "@/components/theme-banner/ThemeBannerTwo";
import BrandTwo from "@/components/brand/BrandTwo";
import FeatureThree from "@/components/feature/FeatureThree";
import BlockStyleThree from "@/components/block/BlockStyleThree";
import CounterTwo from "@/components/counter/CounterTwo";
import FeatureFour from "@/components/feature/FeatureFour";
import CaseSliderOne from "@/components/case-study/CaseSliderOne";
import VideoSliderOne from "@/components/video/VideoSliderOne";
import BlockStyleFive from "@/components/block/BlockStyleFive";
import TeamOne from "@/components/team/TeamOne";
import BlockStylFive from "@/components/block/BlockStylFive";
import FeedbackTwo from "@/components/testimonial/FeedbackTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import ModalVideos from "@/components/modal-video/ModalVideos";
import { pickImage } from "@/lib/axios";

export default function HomePage({ homepage, global }) {
  const [open, setOpen] = useState(false);
  const OpenModal = () => setOpen(!open);

  const phone =
    global?.contactInfo?.phone || homepage?.ctaBlock?.phoneLabel || "";
  const aboutImage = pickImage(
    homepage?.aboutPreview?.image,
    "/assets/img/about/about-2b.jpg",
  );
  const processImage = pickImage(
    homepage?.ctaBlock?.image,
    "/assets/img/work/process-1b.jpg",
  );

  return (
    <Fragment>
      <ModalVideos isOpen={open} onClick={OpenModal} />
      <div className="main-page-wrapper">
        <ThemeMenuTwo global={global} />

        <ThemeBannerTwo
          hero={homepage?.hero}
          secondaryImage={homepage?.heroSecondaryImage}
        />

        <section className="brand-area brand-bg pt-25 pb-25 mt-1">
          <div className="container">
            <div className="row gx-4 gx-xxl-5">
              <BrandTwo clients={homepage?.clients} />
            </div>
          </div>
        </section>

        <section className="techy-feature pt-150 pb-30 pt-lg-120">
          <div className="container">
            <FeatureThree features={homepage?.features} />
          </div>
        </section>

        <section className="about-techy-two pt-75 pb-105 pt-lg-40 pb-lg-20 pt-md-30 pb-md-15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-shape shape-1b"
            src="/assets/img/shape/star-3b.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-shape shape-2b"
            src="/assets/img/shape/star-4b.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-shape shape-3b d-none d-md-inline-block"
            src="/assets/img/shape/star-2.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-shape shape-4b"
            src="/assets/img/shape/star-5b.svg"
            alt=""
          />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div
                className="col-xxl-5 col-xl-4 col-md-6 order-2"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="about-img-wrapper-two text-lg-end position-relative mb-45">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-100" src={aboutImage} alt="About" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="shape-one"
                    src="/assets/img/shape/line-round-4a.svg"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-xxl-4 col-xl-4 col-md-6 order-1"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <BlockStyleThree about={homepage?.aboutPreview} />
              </div>
              <div
                className="col-xxl-3 col-xl-4 order-3"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <CounterTwo counters={homepage?.counters} />
              </div>
            </div>
          </div>
        </section>

        <section className="our-services service-bg-two pt-95 pb-50 pt-lg-50 pb-lg-15">
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="section-title text-center mb-55">
                  <h3 className="sect-title mb-25" data-aos="fade-up">
                    {homepage?.servicesHeading?.title || "Our Services"}
                  </h3>
                  {homepage?.servicesHeading?.description ? (
                    <p data-aos="fade-up" data-aos-delay={100}>
                      {homepage.servicesHeading.description}
                    </p>
                  ) : (
                    <p data-aos="fade-up" data-aos-delay={100}>
                      Dramatically supply transparent backward deliverables
                      before caward comp internal or &quot;organic&quot; sources.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <FeatureFour services={homepage?.homepageServices || []} />
          </div>
        </section>

        <section className="latest-case-work slick-nav blog-slick pt-145 pb-150 pt-lg-60 pb-lg-120">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-1b d-none d-lg-inline-block"
            src="/assets/img/shape/star-3b.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-2b d-none d-lg-inline-block"
            src="/assets/img/shape/star-4b.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-3b d-none d-lg-inline-block"
            src="/assets/img/shape/star-2.svg"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="case-shape shape-4b d-none d-lg-inline-block"
            src="/assets/img/shape/star-5b.svg"
            alt=""
          />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="section-title mb-55 text-md-start text-center">
                  <h6 className="sub-title mb-20" data-aos="fade-up">
                    {homepage?.projectsHeading?.eyebrow || "Latest Works"}
                  </h6>
                  <h3
                    className="sect-title mb-25"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    {homepage?.projectsHeading?.title ||
                      "Check out some great case studies"}
                  </h3>
                </div>
              </div>
            </div>
            <CaseSliderOne projects={homepage?.homepageProjects || []} />
          </div>
        </section>

        <section className="latest-case-video slick-nav">
          <div className="container-fluid px-lg-0">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div className="col-md-6 pb-sm-45">
                <VideoSliderOne openModal={OpenModal} />
              </div>
              <div className="col-xxl-4 col-md-6">
                <BlockStyleFive />
              </div>
            </div>
          </div>
        </section>

        <section className="gradient-bg techy-team pt-210 pt-lg-180 pt-sm-60 pb-100 pb-lg-55">
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
            src="/assets/img/shape/star-2.svg"
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
                <div className="section-title text-center mb-55">
                  <h6 className="sub-title mb-20">
                    {homepage?.teamHeading?.eyebrow || "Our Team"}
                  </h6>
                  <h2 className="sect-title">
                    {homepage?.teamHeading?.title || "Expert Team Member"}
                  </h2>
                </div>
              </div>
            </div>
            <TeamOne members={homepage?.homepageTeam || []} />
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

        <section className="techy-wrok-process pt-140 pb-30 pt-lg-55">
          <div className="container">
            <div className="row gx-4 gx-xxl-5">
              <div className="col-lg-12">
                <div className="section-title text-center mb-55">
                  <h6 className="sub-title mb-20">
                    {homepage?.processHeading?.eyebrow || "Working Process"}
                  </h6>
                  <h2 className="sect-title">
                    {homepage?.processHeading?.title || "How It Works"}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div className="col-xl-7 col-lg-6">
                <div className="process-img-wrapper mb-45">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={processImage} alt="" />
                  <div className="call-box">
                    <div className="icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/assets/img/icon/icon-27b.svg" alt="" />
                    </div>
                    <h3 className="sect-title-two">
                      {homepage?.ctaBlock?.title || "Do you have any question?"}
                    </h3>
                    {phone ? (
                      <h4 className="fs-24 text-uppercase text-theme fw-medium">
                        {phone}
                      </h4>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <BlockStylFive steps={homepage?.processSteps} />
              </div>
            </div>
          </div>
        </section>

        <section className="client-feedback feedback-bg pt-70 pb-110 pb-lg-60">
          <div className="container">
            <div className="row gx-4 gx-xxl-5">
              <div className="col-lg-12">
                <div className="section-title text-center mb-55">
                  <h6 className="sub-title mb-20">
                    {homepage?.testimonialsHeading?.eyebrow || "Testimonials"}
                  </h6>
                  <h2 className="sect-title">
                    {homepage?.testimonialsHeading?.title ||
                      "What Our Client Says"}
                  </h2>
                </div>
              </div>
            </div>
            <FeedbackTwo reviews={homepage?.testimonials} />
          </div>
        </section>

        <FooterTwo global={global} />
      </div>
    </Fragment>
  );
}
