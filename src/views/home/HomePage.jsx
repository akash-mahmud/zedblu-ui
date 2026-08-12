"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import ThemeBannerTwo from "@/components/theme-banner/ThemeBannerTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import FeatureFour from "@/components/feature/FeatureFour";
import TeamTwoA from "@/components/team/TeamTwoA";
import CommonCounter from "@/components/counter/CommonCounter";
import CaseSliderOne from "@/components/case-study/CaseSliderOne";
import { mediaUrl } from "@/lib/axios";

function SectionTitle({ heading, center = true }) {
  if (!heading?.title) return null;
  return (
    <div className={`section-title mb-55 ${center ? "text-center" : ""}`}>
      {heading.eyebrow ? (
        <h6 className="sub-title mb-20" data-aos="fade-up">
          {heading.eyebrow}
        </h6>
      ) : null}
      <h3 className="sect-title mb-25" data-aos="fade-up" data-aos-delay={50}>
        {heading.title}
      </h3>
      {heading.description ? (
        <p data-aos="fade-up" data-aos-delay={100}>
          {heading.description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomePage({ homepage, global }) {
  const phone =
    global?.contactInfo?.phone || homepage?.ctaBlock?.phoneLabel || "";

  return (
    <Fragment>
      <div className="main-page-wrapper">
        <ThemeMenuTwo global={global} />
        <ThemeBannerTwo
          hero={homepage?.hero}
          secondaryImage={homepage?.heroSecondaryImage}
        />

        {homepage?.showClients !== false ? (
          <section className="brand-area brand-bg pt-25 pb-25 mt-1">
            <div className="container">
              <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                {(homepage?.clients || []).map((company) => (
                  <div
                    className="col-lg-2 col-md-3 col-4 text-center mb-20"
                    key={company.slug || company.documentId}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mediaUrl(company.logo?.url)}
                      alt={company.name || "Client"}
                      style={{ maxHeight: 48, objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {homepage?.showFeatures !== false && homepage?.features?.length ? (
          <section className="techy-feature pt-150 pb-30 pt-lg-120">
            <div className="container">
              <SectionTitle heading={homepage.featuresHeading} />
              <div className="row gx-4">
                {homepage.features.map((feature, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-40"
                    key={`${feature.title}-${index}`}
                    data-aos="fade-up"
                  >
                    <div className="card-style-four text-center p-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={mediaUrl(feature.icon?.url)}
                        alt={feature.title || "Feature"}
                        style={{ height: 48, marginBottom: 16 }}
                      />
                      <h4 className="mb-15">{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {homepage?.showAboutPreview !== false && homepage?.aboutPreview ? (
          <section className="about-techy-two pt-75 pb-105">
            <div className="container">
              <div className="row gx-4 align-items-center">
                <div className="col-lg-6 mb-40" data-aos="fade-up">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-100"
                    src={mediaUrl(homepage.aboutPreview.image?.url)}
                    alt={homepage.aboutPreview.title || "About"}
                  />
                </div>
                <div className="col-lg-6 mb-40" data-aos="fade-up">
                  {homepage.aboutPreview.eyebrow ? (
                    <h6 className="sub-title mb-20">
                      {homepage.aboutPreview.eyebrow}
                    </h6>
                  ) : null}
                  <h3 className="sect-title mb-25">
                    {homepage.aboutPreview.title}
                  </h3>
                  {homepage.aboutPreview.description ? (
                    <div
                      className="mb-30"
                      dangerouslySetInnerHTML={{
                        __html: homepage.aboutPreview.description,
                      }}
                    />
                  ) : null}
                  {homepage.counters?.length ? (
                    <div className="row mb-30">
                      {homepage.counters.map((counter, index) => (
                        <div className="col-4" key={`${counter.label}-${index}`}>
                          <h3 className="text-theme">
                            <CommonCounter value={String(counter.value || 0)} />
                            {counter.suffix || ""}
                          </h3>
                          <p>{counter.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {homepage.aboutPreview.ctaUrl ? (
                    <Link
                      className="theme_btn"
                      href={homepage.aboutPreview.ctaUrl}
                    >
                      {homepage.aboutPreview.ctaText || "Learn More"}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {homepage?.showServices !== false ? (
          <section className="our-services service-bg-two pt-95 pb-50">
            <div className="container">
              <SectionTitle heading={homepage?.servicesHeading} />
              <FeatureFour services={homepage?.homepageServices || []} />
              <div className="text-center mt-20 mb-30">
                <Link className="theme_btn" href="/services">
                  All Services
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        {(homepage?.showFeaturedService && homepage?.featuredService) ||
        (homepage?.showFeaturedProject && homepage?.featuredProject) ? (
          <section className="pt-80 pb-40">
            <div className="container">
              <div className="row gx-4">
                {homepage?.showFeaturedService && homepage?.featuredService ? (
                  <div className="col-md-6 mb-40">
                    <div className="card-style-four p-4">
                      <h6 className="sub-title mb-10">Featured Service</h6>
                      <h3 className="mb-15">
                        {homepage.featuredService.title}
                      </h3>
                      <p>{homepage.featuredService.shortDescription}</p>
                      <Link
                        className="theme_btn"
                        href={`/services/${homepage.featuredService.slug}`}
                      >
                        View Service
                      </Link>
                    </div>
                  </div>
                ) : null}
                {homepage?.showFeaturedProject && homepage?.featuredProject ? (
                  <div className="col-md-6 mb-40">
                    <div className="card-style-four p-4">
                      <h6 className="sub-title mb-10">Featured Project</h6>
                      <h3 className="mb-15">
                        {homepage.featuredProject.title}
                      </h3>
                      <Link
                        className="theme_btn"
                        href={`/projects/${homepage.featuredProject.slug}`}
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {homepage?.showProjects !== false ? (
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
        ) : null}

        {homepage?.showTechnologies !== false &&
        homepage?.homepageTechnologies?.length ? (
          <section className="pt-40 pb-80">
            <div className="container">
              <SectionTitle heading={homepage.technologiesHeading} />
              <div className="row justify-content-center">
                {homepage.homepageTechnologies.map((tech) => (
                  <div
                    className="col-lg-2 col-md-3 col-4 text-center mb-30"
                    key={tech.slug || tech.documentId}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mediaUrl(tech.icon?.url)}
                      alt={tech.name || "Tech"}
                      style={{ maxHeight: 40 }}
                    />
                    <p className="mt-10 mb-0">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {homepage?.showTeam !== false ? (
          <section className="techy-team team-sec-two pt-120 pb-100">
            <div className="container">
              <SectionTitle heading={homepage?.teamHeading} />
              <TeamTwoA members={homepage?.homepageTeam || []} />
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

        {homepage?.showProcess !== false && homepage?.processSteps?.length ? (
          <section className="techy-wrok-process pt-100 pb-40">
            <div className="container">
              <SectionTitle heading={homepage.processHeading} />
              <div className="row gx-4">
                {homepage.processSteps.map((step, index) => (
                  <div
                    className="col-lg-3 col-md-6 mb-40"
                    key={`${step.title}-${index}`}
                  >
                    <div className="card-style-four p-4 h-100">
                      <h5 className="text-theme mb-15">
                        {String(step.stepNumber || index + 1).padStart(2, "0")}
                      </h5>
                      <h4 className="mb-15">{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {homepage?.showCta !== false && homepage?.ctaBlock ? (
          <section className="pt-40 pb-80">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 mb-30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-100"
                    src={mediaUrl(homepage.ctaBlock.image?.url)}
                    alt={homepage.ctaBlock.title || "CTA"}
                  />
                </div>
                <div className="col-lg-5 mb-30">
                  <h3 className="sect-title-two mb-20">
                    {homepage.ctaBlock.title}
                  </h3>
                  {homepage.ctaBlock.description ? (
                    <p className="mb-20">{homepage.ctaBlock.description}</p>
                  ) : null}
                  {phone ? (
                    <h4 className="fs-24 text-uppercase text-theme fw-medium mb-30">
                      {phone}
                    </h4>
                  ) : null}
                  <Link
                    className="theme_btn"
                    href={homepage.ctaBlock.ctaUrl || "/contact"}
                  >
                    {homepage.ctaBlock.ctaText || "Contact Us"}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {homepage?.showTestimonials !== false ? (
          <section className="client-feedback feedback-bg pt-70 pb-110">
            <div className="container">
              <SectionTitle heading={homepage?.testimonialsHeading} />
              <div className="row gx-4">
                {(homepage?.testimonials || []).map((review, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-40"
                    key={review.documentId || review.authorName || index}
                  >
                    <div className="card-style-four p-4 h-100">
                      <p className="mb-20">{review.content}</p>
                      <h5 className="mb-5">{review.authorName}</h5>
                      <span>
                        {review.companyRole}
                        {review.company?.name
                          ? ` · ${review.company.name}`
                          : ""}
                      </span>
                      {review.rating ? (
                        <div className="mt-10">{"★".repeat(review.rating)}</div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <FooterTwo global={global} />
      </div>
    </Fragment>
  );
}
