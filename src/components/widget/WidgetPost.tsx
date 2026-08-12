"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { mediaUrl } from "@/lib/axios";
import type { BlogPost } from "@/types/strapi";

type WidgetPostProps = {
  posts?: BlogPost[];
};

const WidgetPost = ({ posts = [] }: WidgetPostProps) => {
  const items = posts.length
    ? posts.slice(0, 4).map((post, index) => ({
        slug: post.slug,
        title: post.title,
        authorName: post.author?.name ? `By ${post.author.name}` : "By Admin",
        thumb: mediaUrl(
          post.featuredImage?.url,
          `/assets/img/blog/post-0${(index % 4) + 1}.jpg`,
        ),
      }))
    : [];

  if (!items.length) return null;

  return (
    <Fragment>
      <ul className="post-list">
        {items.map((val) => (
          <li key={val.slug}>
            <div className="blog-post mb-20">
              <Link href={`/blog/${val.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={val.thumb} alt={val.title || "Post"} />
              </Link>
              <div className="post-content">
                <h6 className="mb-10">
                  <Link href={`/blog/${val.slug}`}>{val.title}</Link>
                </h6>
                <span>{val.authorName}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default WidgetPost;
