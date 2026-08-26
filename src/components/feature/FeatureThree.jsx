"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { pickImage } from "@/lib/axios";

const FeaturesContent = [
  {
    icon: "icon-15b",
    title: "Hybrid Apps",
    desc: "Authoritatively revolutionize the realise is performance based content.",
    dataAos: "fade-up",
    dataDelay: "",
  },
  {
    icon: "icon-16b",
    title: "Simple Pricing",
    desc: "Authoritatively revolutionize the realise is performance based content.",
    dataAos: "fade-up",
    dataDelay: "50",
  },
  {
    icon: "icon-17b",
    title: "24/7 Support",
    desc: "Authoritatively revolutionize the realise is performance based content.",
    dataAos: "fade-up",
    dataDelay: "100",
  },
];

const FeatureThree = ({ features }) => {
  const items =
    features?.length > 0
      ? features.slice(0, 3).map((feature, i) => ({
          title: feature.title || FeaturesContent[i]?.title,
          desc: feature.description || FeaturesContent[i]?.desc,
          icon: pickImage(
            feature.icon,
            `/assets/img/icon/${FeaturesContent[i % FeaturesContent.length].icon}.svg`,
          ),
          dataAos: "fade-up",
          dataDelay: String(i * 50 || ""),
        }))
      : FeaturesContent.map((val) => ({
          ...val,
          icon: `/assets/img/icon/${val.icon}.svg`,
        }));

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5 justify-content-center">
        {items.map((val, i) => (
          <div
            key={`${val.title}-${i}`}
            className="col-lg-4 col-md-6"
            data-aos={val.dataAos}
            data-aos-delay={val.dataDelay}
          >
            <div className="feature-style-three text-center mb-45">
              <div className="icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={val.icon} alt="" />
              </div>
              <h3>
                <Link className="sect-title-two" href="/services">
                  {val.title}
                </Link>
              </h3>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FeatureThree;
