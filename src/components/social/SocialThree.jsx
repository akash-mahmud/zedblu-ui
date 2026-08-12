"use client";

import React, { Fragment } from "react";
import Link from "next/link";

const SOCIAL_ICON_MAP = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  x: "fab fa-twitter",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
  instagram: "fab fa-instagram",
};

const DEFAULT_SOCIALS = [
  { icon: "fab fa-facebook-f", url: "https://www.facebook.com/" },
  { icon: "fab fa-twitter", url: "https://twitter.com/" },
  { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/" },
  { icon: "fab fa-youtube", url: "https://www.youtube.com/" },
];

const SocialThree = ({ links }) => {
  const socialContent =
    links?.length > 0
      ? links.map((link) => ({
          icon:
            SOCIAL_ICON_MAP[(link.platform || "").toLowerCase()] ||
            "fab fa-link",
          url: link.url || "#",
        }))
      : DEFAULT_SOCIALS;

  return (
    <Fragment>
      <div className="team-social-three mb-30">
        {socialContent.map((val, i) => (
          <Link
            key={`${val.url}-${i}`}
            href={val.url}
            target={val.url?.startsWith("http") ? "_blank" : undefined}
            rel={
              val.url?.startsWith("http") ? "noopener noreferrer" : undefined
            }
          >
            <i className={val.icon} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialThree;
