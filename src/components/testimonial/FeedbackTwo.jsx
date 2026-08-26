"use client";
import React, { Fragment } from "react";
import Slider from "react-slick";
import { pickImage } from "@/lib/axios";

const feedbackContent = [
  {
    title: "“ Best software agency in the new world ”",
    desc: "Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or \"organic\" sources. Appropriately integrate revolutionary ideas & cross-media technologies.",
    img: "author-4b",
    author: "Kristin Watson",
    desig: "Marketing Coordinator",
  },
  {
    title: "“ 24/7 dedicated support team”",
    desc: "Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or \"organic\" sources. Appropriately integrate revolutionary ideas & cross-media technologies.",
    img: "author-5b",
    author: "Darrell Steward",
    desig: "Medical Assistant",
  },
  {
    title: "“ Best software agency in the new world ”",
    desc: "Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or \"organic\" sources. Appropriately integrate revolutionary ideas & cross-media technologies.",
    img: "author-4b",
    author: "Kristin Watson",
    desig: "Marketing Coordinator",
  },
  {
    title: "“ 24/7 dedicated support team”",
    desc: "Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or \"organic\" sources. Appropriately integrate revolutionary ideas & cross-media technologies.",
    img: "author-5b",
    author: "Darrell Steward",
    desig: "Medical Assistant",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 991, settings: { slidesToShow: 1 } }],
};

function quoteTitle(content) {
  if (!content) return "“ Best software agency in the new world ”";
  const first = content.split(/[.!?]/)[0]?.trim();
  return `“ ${first} ”`;
}

const FeedbackTwo = ({ reviews }) => {
  const items =
    reviews?.length > 0
      ? reviews.map((review, i) => ({
          title: quoteTitle(review.content),
          desc: review.content,
          img: pickImage(
            review.company?.logo,
            `/assets/img/testimonial/${feedbackContent[i % feedbackContent.length].img}.jpg`,
          ),
          author: review.authorName,
          desig: [review.companyRole, review.company?.name]
            .filter(Boolean)
            .join(" · "),
          rating: review.rating || 5,
        }))
      : feedbackContent.map((val) => ({
          ...val,
          img: `/assets/img/testimonial/${val.img}.jpg`,
          rating: 5,
        }));

  return (
    <Fragment>
      <Slider {...settings} className="row gx-0 feedback-slider-two">
        {items.map((val, i) => (
          <div key={`${val.author}-${i}`} className="col-lg-6">
            <div className="feedback-style-two">
              <h4 className="fw-medium mb-25">{val.title}</h4>
              <p>{val.desc}</p>
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="author d-flex align-items-center justify-content-center mt-35">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={val.img} alt={val.author || "author"} />
                  <div className="author-info">
                    <h4>{val.author}</h4>
                    <p className="text-white">{val.desig}</p>
                  </div>
                </div>
                <div className="rating mt-35">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <a href="#" key={star}>
                      <i
                        className={
                          star < val.rating
                            ? "bi bi-star-fill"
                            : "bi bi-star"
                        }
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default FeedbackTwo;
