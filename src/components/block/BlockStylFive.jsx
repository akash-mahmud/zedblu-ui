"use client";
import React, { Fragment } from "react";
import Link from "next/link";

const procesContent = [
  {
    icon: "icon-24b",
    title: "Create Account",
    desc: "Interactively provide access to world-class materials for catalysts.",
    margin: "mb-40",
  },
  {
    icon: "icon-25b",
    title: "Choose Any Service",
    desc: "Interactively provide access to world-class materials for catalysts.",
    margin: "mb-40",
  },
  {
    icon: "icon-26b",
    title: "Get Solutions",
    desc: "Interactively provide access to world-class materials for catalysts.",
    margin: "mb-65",
  },
];

const BlockStylFive = ({ steps }) => {
  const items =
    steps?.length > 0
      ? steps.slice(0, 3).map((step, i) => ({
          icon: `/assets/img/icon/${procesContent[i % procesContent.length].icon}.svg`,
          title: step.title || procesContent[i]?.title,
          desc: step.description || procesContent[i]?.desc,
          margin: i === 2 ? "mb-65" : "mb-40",
        }))
      : procesContent.map((val) => ({
          ...val,
          icon: `/assets/img/icon/${val.icon}.svg`,
        }));

  return (
    <Fragment>
      <div className="block-style-six">
        {items.map((val, i) => (
          <div key={`${val.title}-${i}`} className={`process-box ${val.margin}`}>
            <div className="img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={val.icon} alt="" />
            </div>
            <div className="text-wrapper">
              <h3 className="sect-title-two">{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
        <div className="text-md-start text-center">
          <Link className="theme_btn" href="/services">
            More Details
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default BlockStylFive;
