"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { mediaUrl } from "@/lib/axios";

const FALLBACK_ICONS = [
  "icon-18b",
  "icon-19b",
  "icon-20b",
  "icon-21b",
  "icon-22b",
  "icon-23b",
];

const featuresContent = [
  {
    img: "line-round-5b",
    icon: "icon-18b",
    title: "Software Develop",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    slug: "software-develop",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-19b",
    title: "Web Developmet",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    slug: "web-developmet",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "100",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-20b",
    title: "UI/UX Design",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    slug: "ui-ux-design",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "150",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-21b",
    title: "Web Security",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    slug: "web-security",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "200",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-22b",
    title: "Apps Development",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    slug: "apps-development",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "250",
    dataDelayDown: "100",
  },
  {
    img: "line-round-5b",
    icon: "icon-23b",
    title: "Programming",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    slug: "programming",
    dataAos: "fade-up",
    dataAosDown: "fade-down",
    dataDelay: "250",
    dataDelayDown: "100",
  },
];

function asText(value) {
  return typeof value === "string" ? value.trim() : "";
}

const FeatureFour = ({ services }) => {
  const cmsItems = (services || []).filter((service) => asText(service?.title));
  const items =
    cmsItems.length > 0
      ? cmsItems.map((service, index) => {
          const fallback = featuresContent[index % featuresContent.length];
          return {
            title: asText(service.title),
            desc: asText(service.desc || service.shortDescription) || fallback.desc,
            slug: service.slug,
            iconUrl:
              service.iconUrl ||
              mediaUrl(
                service.icon?.url,
                `/assets/img/icon/${FALLBACK_ICONS[index % FALLBACK_ICONS.length]}.svg`,
              ),
            dataAos: "fade-up",
            dataAosDown: "fade-down",
            dataDelay: String(index * 50 || ""),
            dataDelayDown: "100",
          };
        })
      : featuresContent.map((item) => ({
          ...item,
          iconUrl: `/assets/img/icon/${item.icon}.svg`,
        }));

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5">
        {items.map((val, i) => (
          <div
            key={val.slug || val.title || i}
            className="col-lg-4 col-md-6"
            data-aos={val.dataAos}
            data-aos-delay={val.dataDelay}
          >
            <div className="feature-style-four mb-45">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="shape-over"
                data-aos={val.dataAosDown}
                data-aos-delay={val.dataDelayDown}
                src="/assets/img/shape/line-round-5b.svg"
                alt=""
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={val.iconUrl} alt={val.title || "Service"} />
              <h2>
                <Link
                  className="sect-title-two"
                  href={val.slug ? `/services/${val.slug}` : "/services"}
                >
                  {val.title}
                </Link>
              </h2>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FeatureFour;
