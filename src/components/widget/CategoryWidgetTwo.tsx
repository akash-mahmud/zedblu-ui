"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import type { BlogCategory } from "@/types/strapi";

const FALLBACK = [
  { category: "UX/UI Design", number: "26", slug: undefined as string | undefined },
  { category: "Nursing Assistant", number: "30", slug: undefined as string | undefined },
  { category: "Web Designer", number: "71", slug: undefined as string | undefined },
  { category: "Medical Assistant", number: "56", slug: undefined as string | undefined },
  { category: "Marketing Coordinator", number: "60", slug: undefined as string | undefined },
];

type CategoryItem = BlogCategory & {
  count?: number;
  blogPosts?: unknown[];
};

type CategoryWidgetTwoProps = {
  categories?: CategoryItem[];
};

const CategoryWidgetTwo = ({ categories = [] }: CategoryWidgetTwoProps) => {
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
