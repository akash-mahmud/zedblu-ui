"use client";

import React, { Fragment } from "react";
import Link from "next/link";

const FALLBACK = [
  "Web Solution",
  "Technology Support",
  "UI/UX Design",
  "Development",
  "HTML",
];

const CategoryTag = ({ tags = [] }) => {
  const items = tags.length
    ? tags.map((tag) => ({ name: tag.name, slug: tag.slug }))
    : FALLBACK.map((name) => ({ name, slug: null }));

  return (
    <Fragment>
      <div className="tag-list">
        {items.map((val, i) => (
          <Link
            key={`${val.name}-${i}`}
            href={val.slug ? `/blog?tag=${val.slug}` : "/blog"}
          >
            {val.name}
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default CategoryTag;
