"use client";

import React, { Fragment, useState } from "react";
import { mediaUrl } from "@/lib/axios";
import ModalVideos from "@/components/modal-video/ModalVideos";
import ToolsList from "@/components/Service/ToolsList";
import Skill from "@/components/skill/Skill";
import CommonCounter from "@/components/counter/CommonCounter";
import ServiceCategory from "@/components/widget/ServiceCategory";
import WidgetForm from "@/components/form/WidgetForm";

const DEFAULT_HIGHLIGHTS = [
  "Collaboratively engineer prospective imperatives with transparent technology.",
  "Phosfluorescently morph excellent materials for multifunctional collaboration and idea-sharing.",
  "Conveniently cultivate compelling processes before client-centered networks.",
];

const DEFAULT_STATS = [
  { value: 125, suffix: "+", label: "We Develop Over 125+ Software" },
  { value: 64, suffix: "+", label: "Global Clients & Trusted Us" },
  { value: 32, suffix: "+", label: "Local & Global Award Wins" },
  { value: 122, suffix: "+", label: "Clients Reviews Our Software" },
];

const ServiceDetailsView = ({ service, services }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen((prev) => !prev);

  const intro =
    service.introDescription ||
    service.shortDescription ||
    "Quickly integrate client-centered users through vertical data.";

  const featured = mediaUrl(
    service.featuredImage?.url,
    "/assets/img/service/img-01.jpg",
  );

  const gallery = (service.gallery || []).filter((img) => img?.url);
  const galleryUrls = [
    mediaUrl(gallery[0]?.url, "/assets/img/service/img-02.jpg"),
    mediaUrl(gallery[1]?.url, "/assets/img/service/img-03.jpg"),
    mediaUrl(gallery[2]?.url, "/assets/img/service/img-04.jpg"),
  ];

  const highlights =
    Array.isArray(service.highlights) && service.highlights.length
      ? service.highlights
      : DEFAULT_HIGHLIGHTS;

  const stats =
    service.stats?.length > 0
      ? service.stats.map((item) => ({
          value: item.value ?? 0,
          suffix: item.suffix ?? "+",
          label: item.label || "",
        }))
      : DEFAULT_STATS;

  return (
    <Fragment>
      <ModalVideos isOpen={open} onClick={openModal} />
      <section className="service-details-wrapper pt-145 pb-100 pt-lg-60 pb-lg-20">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="service-details-content-top mb-60">
                <h2 className="sect-title">{service.title}</h2>
                <p className="text-white mb-35">{intro}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-100" src={featured} alt={service.title || "Service"} />
              </div>
            </div>
          </div>
          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-8">
              <div className="widget-left-section">
                {service.detailedContent ? (
                  <div
                    className="service-detail-body text-white"
                    dangerouslySetInnerHTML={{ __html: service.detailedContent }}
                  />
                ) : (
                  <>
                    <p className="text-white">{intro}</p>
                    <p className="text-white mt-15 mb-45">{intro}</p>
                  </>
                )}

                <h3 className="sect-title-two fw-bold mb-20">
                  {service.specializedHeading || "Our Specialized"}
                </h3>
                <p className="text-white">
                  {service.specializedDescription || intro}
                </p>
                <Skill items={service.specializations} />

                <h3 className="sect-title-two fw-bold mb-20">
                  {service.skillsHeading || "Our Skills"}
                </h3>
                <p className="text-white">
                  {service.skillsDescription || intro}
                </p>
                <ToolsList />

                <h3 className="sect-title-two fw-bold mb-20">
                  {service.relyHeading ||
                    "We Provide Services that You can Rely on"}
                </h3>
                <p className="text-white">
                  {service.relyDescription || intro}
                </p>

                <div className="service-video d-md-flex mt-40">
                  <div className="service-single mb-40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-100"
                      src={galleryUrls[0]}
                      alt={`${service.title || "Service"} gallery 1`}
                    />
                  </div>
                  <div className="service-single-video mb-40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-100"
                      src={galleryUrls[1]}
                      alt={`${service.title || "Service"} gallery 2`}
                    />
                    <a
                      className="popup-video mb-30"
                      onClick={openModal}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") openModal();
                      }}
                    >
                      <i className="bi bi-play-fill" />
                    </a>
                  </div>
                  <div className="service-single mb-40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-100"
                      src={galleryUrls[2]}
                      alt={`${service.title || "Service"} gallery 3`}
                    />
                  </div>
                </div>

                <ul className="text-list list-none">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="row mt-20">
                  {stats.map((stat, index) => (
                    <div
                      className="col-md-3"
                      data-aos="fade-up"
                      key={`${stat.label}-${index}`}
                    >
                      <div className="counter-style-two boder-style mb-45">
                        <h3>
                          <span className="counter">
                            <CommonCounter value={stat.value} />
                          </span>
                          {stat.suffix || "+"}
                        </h3>
                        <p className="text-white mt-20">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-md-first">
              <div className="widget-right-section mb-40">
                <ServiceCategory
                  services={services}
                  currentSlug={service.slug}
                />
                <div className="widget-form mt-60">
                  <h3 className="widget-title mb-20">Contact Us</h3>
                  <p className="mb-40">
                    Collaboratively engineer prospective imperatives with
                    transparent technology.
                  </p>
                  <WidgetForm serviceTitle={service.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServiceDetailsView;
