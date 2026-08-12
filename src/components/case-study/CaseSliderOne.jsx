"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { mediaUrl } from "@/lib/axios";

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

const CaseSliderOne = ({ projects = [] }) => {
  if (!projects.length) return null;

  return (
    <Fragment>
      <Slider
        {...settings}
        className="row gx-0 px-0 case-slider-one"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        {projects.map((project, i) => {
          const href = project.slug ? `/projects/${project.slug}` : "/projects";
          const image = mediaUrl(project.featuredImage?.url);
          const desc = project.shortDescription || "";
          return (
            <div key={project.slug || project.documentId || i} className="col-lg-4">
              <div className="case-item-one">
                <div className="case-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-100" src={image} alt={project.title || "Project"} />
                </div>
                <div className="case-content">
                  {project.category ? <span>{project.category}</span> : null}
                  <h3>
                    <Link className="sect-title-two" href={href}>
                      {project.title}
                    </Link>
                  </h3>
                  {desc ? (
                    <p>
                      {desc.length > 140 ? `${desc.slice(0, 137)}...` : desc}
                    </p>
                  ) : null}
                  <Link className="case-btn" href={href}>
                    <i className="bi bi-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
};

export default CaseSliderOne;
