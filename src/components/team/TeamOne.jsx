"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { pickImage } from "@/lib/axios";

const FALLBACK_IMAGES = ["team-1b", "team-2b", "team-3b"];

const teamContent = [
  {
    img: "team-1b",
    desig: "Chief Excutive",
    name: "Savannah Nguyen",
    dataAos: "fade-up",
    dataDelay: "100",
  },
  {
    img: "team-2b",
    desig: "chief Excutive",
    name: "Timm Miller",
    dataAos: "fade-up",
    dataDelay: "100",
  },
  {
    img: "team-3b",
    desig: "Chief Manager",
    name: "David Human",
    dataAos: "fade-up",
    dataDelay: "100",
  },
];

const DEFAULT_SOCIALS = [
  { icon: "fab fa-facebook-f", url: "#" },
  { icon: "fab fa-twitter", url: "#" },
  { icon: "fab fa-linkedin-in", url: "#" },
  { icon: "fab fa-youtube", url: "#" },
];

const SOCIAL_ICON_MAP = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  x: "fab fa-twitter",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
  instagram: "fab fa-instagram",
};

const TeamOne = ({ members }) => {
  const items =
    members?.length > 0
      ? members.slice(0, 3).map((member, i) => ({
          name: member.name,
          desig: member.jobTitle || teamContent[i]?.desig,
          href: member.slug ? `/team/${member.slug}` : "/team",
          img: pickImage(
            member.profileImage,
            `/assets/img/team/${FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]}.jpg`,
          ),
          social: member.socialLinks?.length
            ? member.socialLinks.map((link) => ({
                url: link.url || "#",
                icon:
                  SOCIAL_ICON_MAP[(link.platform || "").toLowerCase()] ||
                  "fab fa-link",
              }))
            : DEFAULT_SOCIALS,
          dataAos: "fade-up",
          dataDelay: "100",
        }))
      : teamContent.map((val) => ({
          ...val,
          href: "/team",
          img: `/assets/img/team/${val.img}.jpg`,
          social: DEFAULT_SOCIALS,
        }));

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5 justify-content-center">
        {items.map((val, i) => (
          <div
            key={`${val.name}-${i}`}
            className="col-lg-4 col-md-6"
            data-aos={val.dataAos}
            data-aos-delay={val.dataDelay}
          >
            <div className="team-style-one text-center mb-45">
              <Link href={val.href}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={val.img} alt={val.name || "Team"} />
              </Link>
              <div className="team-content">
                <p>{val.desig}</p>
                <h3 className="sect-title-two">
                  <Link href={val.href}>{val.name}</Link>
                </h3>
                <div className="team-social">
                  {val.social.map((social, s) => (
                    <a key={`${val.name}-${s}`} href={social.url}>
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default TeamOne;
