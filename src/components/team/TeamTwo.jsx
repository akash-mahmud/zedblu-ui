"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { pickImage } from "@/lib/axios";

const teamContent = [
  {
    img: "/assets/img/team/team-4d.jpg",
    desig: "Chief Excutive",
    name: "Savannah Nguyen",
    slug: "/team",
    social: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
    dataAos: "fade-up",
    dataDelay: "50",
  },
  {
    img: "/assets/img/team/team-5d.jpg",
    desig: "President",
    name: "Jane Cooper",
    slug: "/team",
    social: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
    dataAos: "fade-up",
    dataDelay: "100",
  },
  {
    img: "/assets/img/team/team-6d.jpg",
    desig: "Chief Manager",
    name: "Esther Howard",
    slug: "/team",
    social: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
    dataAos: "fade-up",
    dataDelay: "150",
  },
];

const SOCIAL_ICON_MAP = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  x: "fab fa-twitter",
  linkedin: "fab fa-linkedin-in",
  youtube: "fab fa-youtube",
  instagram: "fab fa-instagram",
};

const TeamTwo = ({ members }) => {
  const items =
    members?.length > 0
      ? members.slice(0, 3).map((member, i) => ({
          name: member.name || teamContent[i]?.name,
          desig: member.jobTitle || teamContent[i]?.desig,
          slug: member.slug ? `/team/${member.slug}` : "/team",
          img: pickImage(member.profileImage, teamContent[i].img),
          social: member.socialLinks?.length
            ? member.socialLinks.map((link) => ({
                url: link.url || "#",
                icon:
                  SOCIAL_ICON_MAP[(link.platform || "").toLowerCase()] ||
                  "fab fa-link",
              }))
            : teamContent[i].social,
          dataAos: "fade-up",
          dataDelay: String((i + 1) * 50),
        }))
      : teamContent;

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
            <div className="team-style-two text-center mb-45">
              <div className="team-thumb">
                <Link href={val.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={val.img} alt={val.name || "Team"} />
                </Link>
                <div className="team-social-two">
                  {val.social.map((social, s) => (
                    <a key={`${val.name}-${s}`} href={social.url}>
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="team-content">
                <p>{val.desig}</p>
                <h3 className="sect-title-two">
                  <Link href={val.slug}>{val.name}</Link>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default TeamTwo;
