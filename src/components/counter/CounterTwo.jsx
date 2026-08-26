"use client";
import React, { Fragment } from "react";
import CommonCounter from "./CommonCounter";

const counterContent = [
  { num: "125", desc: "We Develop Over 125 Software" },
  { num: "64", desc: "Global Clients & Trusted Us" },
  { num: "122", desc: "Clients Reviews Our Software" },
];

const CounterTwo = ({ counters }) => {
  const items =
    counters?.length > 0
      ? counters.slice(0, 3).map((counter, i) => ({
          num: String(counter.value ?? counterContent[i]?.num ?? "0"),
          suffix: counter.suffix || "+",
          desc: counter.label || counterContent[i]?.desc,
        }))
      : counterContent.map((val) => ({ ...val, suffix: "+" }));

  return (
    <Fragment>
      <ul className="list-none count-list">
        {items.map((val, i) => (
          <li key={`${val.desc}-${i}`}>
            <div className="counter-style-two boder-style d-xxl-flex align-items-center mb-30">
              <h3>
                <span className="counter">
                  <CommonCounter value={val.num} />
                </span>
                {val.suffix}
              </h3>
              <p className="text-white">{val.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default CounterTwo;
