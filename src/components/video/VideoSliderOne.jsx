"use client";
import React, { Fragment } from "react";
import Slider from "react-slick";
import { mediaUrl } from "@/lib/axios";

const VideoSliderOne = ({ videos = [], onSelect }) => {
  const items = videos.filter(
    (video) => video.youtubeUrl || video.file?.url,
  );

  if (!items.length) return null;

  const settings = {
    dots: false,
    arrows: items.length > 1,
    infinite: items.length > 1,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <Slider {...settings} className="video-slider-one">
        {items.map((video, index) => {
          const thumb = mediaUrl(
            video.thumbnail?.url,
            "/assets/img/video/video-1b.jpg",
          );
          return (
            <div key={video.youtubeUrl || video.file?.url || index}>
              <div
                className="video-wrapper"
                style={{ backgroundImage: `url(${thumb})` }}
              >
                <a
                  className="popup-video"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    onSelect?.(video);
                  }}
                >
                  <i className="bi bi-play-fill" />
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
};

export default VideoSliderOne;
