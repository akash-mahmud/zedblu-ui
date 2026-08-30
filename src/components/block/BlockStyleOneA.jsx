"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { pickImage } from "@/lib/axios";

const DEFAULT_HIGHLIGHTS = [
  { title: "Money Back Guarantee", icon: "/assets/img/icon/icon-1a.svg" },
  { title: "24/7 Online Support", icon: "/assets/img/icon/icon-2a.svg" },
];

function toPlainText(value) {
  if (!value) return "";
  return String(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const BlockStyleOneA = ({ about }) => {
  const title =
    about?.introTitle ||
    "About Our Techy Innovative IT Agency & Solutions";
  const storyText = toPlainText(about?.story);
  const description =
    storyText && storyText.length < 280
      ? storyText
      : "Dramatically supply transparent deliverables before caward comp internal or \"organic\" sources. Comp transparent and leverage backward other.";

  const highlights =
    about?.highlights?.length > 0
      ? about.highlights.slice(0, 2).map((item, i) => ({
          title: item.title || DEFAULT_HIGHLIGHTS[i].title,
          icon: pickImage(item.icon, DEFAULT_HIGHLIGHTS[i].icon),
        }))
      : DEFAULT_HIGHLIGHTS;

  const ctaText = about?.ctaText || "More Details";
  const ctaUrl = about?.ctaUrl || "/contact";

  return (
    <Fragment>
      <div className="block-style-one ps-lg-1 mb-45">
        <h2 className="mb-15">{title}</h2>
        <p>{description}</p>
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
        <Link className="theme_btn mt-60" href={ctaUrl}>
          {ctaText}
        </Link>
      </div>
    </Fragment>
  );
};

export default BlockStyleOneA;
