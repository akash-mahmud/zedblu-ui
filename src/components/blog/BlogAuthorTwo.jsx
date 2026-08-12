"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { mediaUrl } from "@/lib/axios";

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

const BlogAuthorTwo = ({ author }) => {
  const name = author?.name || "Kane William";
  const role = author?.jobTitle || "Software Developer";
  const avatar = mediaUrl(
    author?.profileImage?.url,
    "/assets/img/blog/author-1.jpg",
  );
  const socials =
    author?.socialLinks?.length > 0
      ? author.socialLinks.map((link) => ({
          icon:
            SOCIAL_ICON_MAP[(link.platform || "").toLowerCase()] ||
            "fab fa-link",
          url: link.url || "#",
        }))
      : DEFAULT_SOCIALS;

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5 align-items-center author-profile mx-md-0 mt-60">
        <div className="col-lg-7 col-md-7">
          <div className="blog-author d-md-flex align-items-center text-center text-md-start mb-30">
            <div className="author-avatar mb-4 mb-md-0 me-md-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar} alt={name} />
            </div>
            <div className="author-info ms-xl-3">
              <h3 className="author-name">{name}</h3>
              <h4 className="h5 fs-20 fw-medium text-white">{role}</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 text-center text-md-end">
          <div className="team-social-three social-style-five mb-30">
            {socials.map((val, i) => (
              <Link
                key={`${val.url}-${i}`}
                href={val.url}
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

export default BlogAuthorTwo;
