"use client";

import React, { Fragment } from "react";
import Link from "next/link";

const FALLBACK = [
  { category: "UX/UI Design", number: "26" },
  { category: "Nursing Assistant", number: "30" },
  { category: "Web Designer", number: "71" },
  { category: "Medical Assistant", number: "56" },
  { category: "Marketing Coordinator", number: "60" },
];

const CategoryWidgetTwo = ({ categories = [] }) => {
  const items = categories.length
    ? categories.map((cat) => ({
        category: cat.name,
        number: String(cat.count ?? cat.blogPosts?.length ?? ""),
        slug: cat.slug,
      }))
    : FALLBACK;

  return (
    <Fragment>
      <ul className="list-none">
        {items.map((val) => (
          <li key={val.slug || val.category}>
            <Link href={val.slug ? `/blog?category=${val.slug}` : "/blog"}>
              {val.category}{" "}
              {val.number ? (
                <span className="f-right">{val.number}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default CategoryWidgetTwo;
