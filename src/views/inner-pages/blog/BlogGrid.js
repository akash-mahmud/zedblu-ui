"use client";

import React, { Fragment } from "react";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import BlogStyleTwo from "@/components/blog/BlogStyleTwo";
import BlogPagination from "@/components/blog/BlogPagination";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";

const BlogGrid = ({ posts, page = 1, pageCount = 0 }) => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        <ThemeMenuTwo />
        <PageTitle title="Blog" />
        <section className="blog-grid-area pt-150 pb-105 pt-lg-60 pb-lg-15">
          <div className="container">
            <BlogStyleTwo posts={posts} />
            <BlogPagination page={page} pageCount={pageCount} />
          </div>
        </section>
        <NewsletterTwo />
        <FooterTwo />
      </div>
    </Fragment>
  );
};

export default BlogGrid;
