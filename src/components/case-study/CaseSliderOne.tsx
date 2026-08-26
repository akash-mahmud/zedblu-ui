"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { pickImage } from "@/lib/axios";
import type { Project } from "@/types/strapi";

const fallbackCases = [
  {
    img: "/assets/img/work/case-1b.jpg",
    tag: "Web Design",
    title: "Web Analytics",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    href: "/projects",
  },
  {
    img: "/assets/img/work/case-2b.jpg",
    tag: "Cyber Secure",
    title: "Cyber Security Core",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    href: "/projects",
  },
  {
    img: "/assets/img/work/case-3b.jpg",
    tag: "Design",
    title: "Design For Future",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    href: "/projects",
  },
  {
    img: "/assets/img/work/case-1b.jpg",
    tag: "Web Design",
    title: "Web Analytics",
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    href: "/projects",
  },
];

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 991, settings: { slidesToShow: 2 } },
    { breakpoint: 575, settings: { slidesToShow: 1, arrows: false } },
  ],
};

type CaseSliderOneProps = {
  projects?: Project[];
};

const CaseSliderOne = ({ projects = [] }: CaseSliderOneProps) => {
  const items =
    projects.length > 0
      ? projects.map((project, i) => ({
          href: project.slug ? `/projects/${project.slug}` : "/projects",
          img: pickImage(
            project.featuredImage,
            fallbackCases[i % fallbackCases.length].img,
          ),
          tag: project.category || "Project",
          title: project.title,
          desc: project.shortDescription || fallbackCases[i % fallbackCases.length].desc,
        }))
      : fallbackCases;

  return (
    <Fragment>
      <Slider
        {...settings}
        className="row gx-0 px-0 case-slider-one"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        {items.map((val, i) => (
          <div key={`${val.title}-${i}`} className="col-lg-4">
            <div className="case-item-one">
              <div className="case-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-100" src={val.img} alt={val.title || "Project"} />
              </div>
              <div className="case-content">
                {val.tag ? <span>{val.tag}</span> : null}
                <h3>
                  <Link className="sect-title-two" href={val.href}>
                    {val.title}
                  </Link>
                </h3>
                {val.desc ? <p>{val.desc}</p> : null}
                <Link className="case-btn" href={val.href}>
                  <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default CaseSliderOne;
