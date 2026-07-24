"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CommonCounter = (props) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  return (
    <span ref={ref}>
      {started ? (
        <CountUp start={0} end={props.value} duration={2} />
      ) : (
        0
      )}
    </span>
  );
};

export default CommonCounter;
