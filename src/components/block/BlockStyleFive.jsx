"use client";
import React, { Fragment } from "react";

const BlockStyleFive = ({ eyebrow, title, description }) => {
  if (!eyebrow && !title && !description) return null;

  return (
    <Fragment>
      <div className="block-style-five ps-xxl-5 ms-xxl-4">
        {eyebrow ? (
          <h6 className="sub-title mb-20" data-aos="fade-up">
            {eyebrow}
          </h6>
        ) : null}
        {title ? <h3 className="sect-title mb-20">{title}</h3> : null}
        {description ? (
          <p className="pe-xxl-5 mb-55">{description}</p>
        ) : null}
      </div>
    </Fragment>
  );
};

export default BlockStyleFive;
