"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { mediaUrl } from "@/lib/axios";

const FALLBACK_IMAGES = [
  "team-7e",
  "team-8e",
  "team-9e",
  "team-10e",
  "team-11e",
  "team-12e",
  "team-13e",
  "team-14e",
  "team-15e",
];

const DEFAULT_SOCIALS = [
  { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
  { platform: "twitter", icon: "fab fa-twitter", url: "#" },
  { platform: "linkedin", icon: "fab fa-linkedin-in", url: "#" },
  { platform: "youtube", icon: "fab fa-youtube", url: "#" },
];

const SOCIAL_ICON_MAP = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  x: "fab fa-twitter",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
  instagram: "fab fa-instagram",
  github: "fab fa-github",
};

function memberSocials(member) {
  if (!member?.socialLinks?.length) return DEFAULT_SOCIALS;
  return member.socialLinks.map((link) => {
    const platform = (link.platform || "").toLowerCase();
    return {
      platform,
      url: link.url || "#",
      icon: SOCIAL_ICON_MAP[platform] || "fab fa-link",
    };
  });
}

const TeamTwoA = ({ members }) => {
  const items = (members || []).map((member, index) => ({
    name: member.name,
    slug: member.slug,
    desig: member.jobTitle || "Team Member",
    image: mediaUrl(
      member.profileImage?.url,
      `/assets/img/team/${FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]}.jpg`,
    ),
    social: memberSocials(member),
    dataAos: "fade-up",
    dataDelay: String((index % 3) * 50 + 50),
  }));

  if (!items.length) {
    return <p className="text-center mb-45">No team members in Strapi yet.</p>;
  }

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5 justify-content-center">
        {items.map((val) => (
          <div
            key={val.slug || val.name}
            className="col-lg-4 col-md-6"
            data-aos={val.dataAos}
            data-aos-delay={val.dataDelay}
          >
            <div className="team-style-two text-center mb-45">
              <div className="team-thumb">
                <Link href={val.slug ? `/team/${val.slug}` : "/team"}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={val.image} alt={val.name || "Team member"} />
                </Link>
                <div className="team-social-two">
                  {val.social.map((social) => (
                    <a
                      key={`${val.slug}-${social.platform}-${social.url}`}
                      href={social.url}
                      target={social.url?.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.url?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.platform}
                    >
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="team-content">
                <p>{val.desig}</p>
                <h3 className="sect-title-two">
                  <Link href={val.slug ? `/team/${val.slug}` : "/team"}>
                    {val.name}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default TeamTwoA;
