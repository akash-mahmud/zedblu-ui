"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { mediaUrl } from "@/lib/axios";

const FALLBACK_IMAGES = [
  "blog-03",
  "blog-04",
  "blog-05",
  "blog-06",
  "blog-07",
  "blog-08",
  "blog-09",
  "blog-10",
  "blog-11",
];

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function postTags(post) {
  const names = [
    ...(post.tags || []).map((tag) => tag.name),
    post.category?.name,
  ].filter(Boolean);
  return [...new Set(names)].join(" , ") || "Research , Technology";
}

const BlogStyleTwo = ({ posts }) => {
  const items = posts?.length
    ? posts.map((post, index) => ({
        slug: post.slug,
        title: post.title,
        tag: postTags(post),
        authorName: post.author?.name || "Admin",
        date: formatDate(post.publishedAt),
        image: mediaUrl(
          post.featuredImage?.url,
          `/assets/img/blog/${FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]}.jpg`,
        ),
      }))
    : [];

  if (!items.length) {
    return (
      <p className="text-center mb-45">No blog posts published yet.</p>
    );
  }

  return (
    <Fragment>
      <div className="row gx-4 gx-xxl-5">
        {items.map((val) => (
          <div key={val.slug} className="col-lg-4 col-md-6">
            <div className="blog-style-two mb-45">
              <div className="blog-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-100" src={val.image} alt={val.title || "Blog"} />
              </div>
              <div className="blog-content">
                <div className="blog-tag pb-10">{val.tag}</div>
                <h3>
                  <Link className="blog-title" href={`/blog/${val.slug}`}>
                    {val.title}
                  </Link>
                </h3>
                <div className="blog-meta">
                  <span className="mr-20">
                    <i className="bi bi-person-plus" />
                    {val.authorName}
                  </span>
                  <span>
                    <i className="bi bi-clock" />
                    {val.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BlogStyleTwo;
