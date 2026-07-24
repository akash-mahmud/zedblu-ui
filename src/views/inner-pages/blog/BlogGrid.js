"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import ThemeMenuThree from "@/components/header/ThemeMenuThree";
import PageTitle from "@/components/page-title/PageTitle";
import BlogStyleTwo from "@/components/blog/BlogStyleTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterThree from "@/components/footer/FooterThree";
import { mediaUrl } from "@/lib/axios";

const BlogGrid = ({ posts }) => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        <ThemeMenuThree />
        <PageTitle title="Blog Grid" />
        <div className="blog-section pt-150 pb-105 pt-lg-60 pb-lg-50">
          <div className="container">
            {posts?.length ? (
              <div className="row gx-4 gx-xxl-5">
                {posts.map((post, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-40"
                    key={post.slug || post.documentId || index}
                  >
                    <article className="card-style-seven">
                      <div className="img-holder mb-20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={mediaUrl(
                            post.featuredImage?.url,
                            "/assets/img/blog/blog-03.jpg",
                          )}
                          alt={post.title || "Blog"}
                        />
                      </div>
                      <h4>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <p>{post.excerpt}</p>
                    </article>
                  </div>
                ))}
              </div>
            ) : (
              <BlogStyleTwo />
            )}
          </div>
        </div>
        <NewsletterTwo />
        <FooterThree />
      </div>
    </Fragment>
  );
};

export default BlogGrid;
