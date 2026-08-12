"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import type { BlogTag } from "@/types/strapi";

const DEFAULT_TAGS = [
  { tag: "IT Solutions", href: "/blog" },
  { tag: "Cyber", href: "/blog" },
  { tag: "Agency", href: "/blog" },
];

const SocialContent = [
  { icon: "fab fa-facebook-f", routerPath: "https://www.facebook.com/" },
  { icon: "fab fa-twitter", routerPath: "https://twitter.com/" },
  { icon: "fab fa-linkedin-in", routerPath: "https://www.linkedin.com/" },
  { icon: "fab fa-youtube", routerPath: "https://www.youtube.com/" },
];

type SocialMediaProps = {
  bgColor?: string;
  tags?: Pick<BlogTag, "name" | "slug">[];
};

const SocialMedia = ({ bgColor = "theme-bg", tags = [] }: SocialMediaProps) => {
  const tagItems = tags.length
    ? tags.map((tag) => ({
        tag: tag.name,
        href: tag.slug ? `/blog?tag=${tag.slug}` : "/blog",
      }))
    : DEFAULT_TAGS;

  return (
    <Fragment>
      <div
        className={`${bgColor} row gx-4 gx-xxl-5 align-items-center social-media pt-30 mt-55 mx-md-0`}
      >
        <div className="col-lg-7 col-md-7">
          <div className="media-tag text-center text-md-start mb-30 ms-lg-2">
            {tagItems.map((val, i) => (
              <Link key={`${val.tag}-${i}`} href={val.href}>
                {val.tag}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-lg-5 col-md-5 text-center text-md-end">
          <div className="team-social-three social-style-four mb-30">
            {SocialContent.map((val, i) => (
              <Link
                key={i}
                href={val.routerPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={val.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SocialMedia;
