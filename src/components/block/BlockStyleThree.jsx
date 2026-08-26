"use client";
import React, { Fragment } from "react";
import Link from "next/link";

function toPlainText(value) {
  if (!value) return "";
  return String(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const BlockStyleThree = ({ about }) => {
  const eyebrow = about?.eyebrow || "About Us";
  const title =
    about?.title || "We Do Creative Design , Develop Best Softwares";
  const description =
    toPlainText(about?.description) ||
    "Continually strategize standards compliant ideas rather than performance based alignments. Globally leverage existing alternative solutions through virtual users.";
  const ctaText = about?.ctaText || "More Details";
  const ctaUrl = about?.ctaUrl || "/about";

  return (
    <Fragment>
      <div className="block-style-three mb-45">
        <h6 className="sub-title mb-20">{eyebrow}</h6>
        <h2 className="sect-title mb-15">{title}</h2>
        <p>{description}</p>
        <Link className="theme_btn mt-55" href={ctaUrl}>
          {ctaText}
        </Link>
      </div>
    </Fragment>
  );
};

export default BlockStyleThree;
