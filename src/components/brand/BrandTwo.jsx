"use client";
import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pickImage } from "@/lib/axios";

const BrandLogo = [
  { img: "brand-1" },
  { img: "brand-2" },
  { img: "brand-3" },
  { img: "brand-4" },
  { img: "brand-5" },
  { img: "brand-6" },
  { img: "brand-2" },
  { img: "brand-4" },
  { img: "brand-1" },
  { img: "brand-3" },
];

const BrandTwo = ({ clients }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const items =
    clients?.length > 0
      ? clients.map((company, i) => ({
          img: pickImage(
            company.logo,
            `/assets/img/brand/${BrandLogo[i % BrandLogo.length].img}.svg`,
          ),
          name: company.name || "Client",
          href: company.website || "#",
        }))
      : BrandLogo.map((val) => ({
          img: `/assets/img/brand/${val.img}.svg`,
          name: "brand",
          href: "#",
        }));

  return (
    <Fragment>
      <Slider {...settings} className="brand-slider-one">
        {items.map((val, i) => (
          <div className="brand-logo" key={`${val.name}-${i}`}>
            <a href={val.href}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={val.img} alt={val.name} />
            </a>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default BrandTwo;
