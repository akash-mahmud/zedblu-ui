"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import ThemeMenuThree from "@/components/header/ThemeMenuThree";
import PageTitle from "@/components/page-title/PageTitle";
import FeatureFour from "@/components/feature/FeatureFour";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterThree from "@/components/footer/FooterThree";

const Services = ({ services }) => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        <ThemeMenuThree />
        <PageTitle title="Services" />
        <section className="our-services service-bg-two pt-145 pb-100 pt-lg-60 pb-lg-20">
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="section-title text-center mb-55">
                  <h3 className="sect-title mb-25" data-aos="fade-up">
                    Our Services
                  </h3>
                  <p data-aos="fade-up" data-aos-delay={100}>
                    Dramatically supply transparent backward deliverables before
                    caward comp internal or organic sources.
                  </p>
                </div>
              </div>
            </div>
            {services?.length ? (
              <div className="row gx-4 gx-xxl-5">
                {services.map((service, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-40"
                    key={service.slug || service.documentId || index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="card-style-four text-center">
                      <h4 className="mb-15">
                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
                      </h4>
                      <p>{service.shortDescription}</p>
                      <Link className="read-btn" href={`/services/${service.slug}`}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <FeatureFour />
            )}
          </div>
        </section>
        <NewsletterTwo />
        <FooterThree />
      </div>
    </Fragment>
  );
};

export default Services;
