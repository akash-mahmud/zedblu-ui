"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { pickImage } from "@/lib/axios";

function toPlainText(value) {
  if (!value) return "";
  return String(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const DEFAULT_HIGHLIGHTS = [
  { title: "Money Back Guarantee", icon: "/assets/img/icon/icon-1a.svg" },
  { title: "24/7 Online Support", icon: "/assets/img/icon/icon-2a.svg" },
];

const BlockStyleOneA = ({ about }) => {
  const title =
    about?.introTitle ||
    about?.title ||
    "About Our Techy Innovative IT Agency & Solutions";
  const description =
    toPlainText(about?.story) ||
    about?.mission ||
    about?.vision ||
    "";

  const highlights =
    about?.highlights?.length > 0
      ? about.highlights.map((item, i) => ({
          title: item.title,
          icon: pickImage(
            item.icon,
            DEFAULT_HIGHLIGHTS[i % DEFAULT_HIGHLIGHTS.length].icon,
          ),
        }))
      : [about?.mission, about?.vision].filter(Boolean).map((title, i) => ({
          title,
          icon: DEFAULT_HIGHLIGHTS[i % DEFAULT_HIGHLIGHTS.length].icon,
        }));

  const ctaText = about?.ctaText || "More Details";
  const ctaUrl = about?.ctaUrl || "/contact";

  if (!title && !description && !highlights.length) return null;

  return (
    <Fragment>
      <div className="block-style-one ps-lg-1 mb-45">
        {title ? <h2 className="mb-15">{title}</h2> : null}
        {description ? <p>{description}</p> : null}
        {highlights.length ? (
          <ul className="block-box box-two list-none">
            {highlights.map((item, i) => (
              <li key={`${item.title}-${i}`}>
                <Link href={ctaUrl}>
                  <span className="img-bg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt="" />
                  </span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <Link className="theme_btn mt-60" href={ctaUrl}>
          {ctaText}
        </Link>
      </div>
    </Fragment>
  );
};

export default BlockStyleOneA;
