"use client";
import React, { Fragment } from "react";
import CommonCounter from "./CommonCounter";

const counterContent = [
  { value: 125, suffix: "+", label: "We Develop Over 125+ Software" },
  { value: 64, suffix: "+", label: "Global Clients & Trusted Us" },
  { value: 32, suffix: "+", label: "Local & Global Award Wins" },
  { value: 122, suffix: "+", label: "Clients Reviews Our Software" },
];

const CounterTwoA = ({ counters }) => {
  if (Array.isArray(counters) && counters.length === 0) return null;
  const items =
    Array.isArray(counters) && counters.length ? counters : counterContent;

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5">
        {items.map((val, i) => (
          <div
            key={`${val.label}-${i}`}
            className="col-lg-3 col-md-6 col-sm-6"
            data-aos="fade-up"
          >
            <div className="counter-style-two boder-style d-xxl-flex align-items-center mb-45">
              <h3>
                <span className="counter">
                  <CommonCounter value={String(val.value ?? 0)} />
                </span>
                {val.suffix || "+"}
              </h3>
              <p className="text-white">{val.label}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CounterTwoA;
