"use client";
import React, { Fragment } from "react";
import Link from "next/link";

function planFeatures(features) {
  if (!features) return [];
  if (Array.isArray(features)) return features.filter(Boolean);
  return String(features)
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

const PriceGrid = ({ plans }) => {
  if (!plans?.length) return null;

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5 justify-content-center">
        {plans.map((val, i) => (
          <div
            key={`${val.name}-${i}`}
            className="col-lg-4 col-md-6"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <div className="plan mb-45">
              <div className="plan__header">
                <h3>{val.name}</h3>
                {val.description ? <p>{val.description}</p> : null}
              </div>
              <div className="plan__price">
                {val.price}
                {val.period ? <sub>{val.period}</sub> : null}
              </div>
              <ul className="plan__body list-none">
                {planFeatures(val.features).map((feature, index) => (
                  <li key={`${feature}-${index}`}>{feature}</li>
                ))}
              </ul>
              <div className="plan__footer">
                <Link
                  className="price-btn"
                  href={val.ctaUrl || "/contact"}
                >
                  {val.ctaText || "Choose Plan"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default PriceGrid;
