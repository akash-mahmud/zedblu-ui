"use client";

import React, { Fragment, useState } from "react";
import { mediaUrl } from "@/lib/axios";
import ModalVideos from "@/components/modal-video/ModalVideos";
import BlogAuthor from "@/components/blog/BlogAuthor";
import SocialMedia from "@/components/blog/SocialMedia";
import BlogAuthorTwo from "@/components/blog/BlogAuthorTwo";
import BlogComment from "@/components/blog/BlogComment";
import CommentForm from "@/components/form/CommentForm";
import SearchForm from "@/components/form/SearchForm";
import CategoryWidgetTwo from "@/components/widget/CategoryWidgetTwo";
import WidgetPost from "@/components/widget/WidgetPost";
import CategoryTag from "@/components/widget/CategoryTag";

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

function postTagsLabel(post) {
  const names = [
    ...(post.tags || []).map((tag) => tag.name),
    post.category?.name,
  ].filter(Boolean);
  return [...new Set(names)].join(" , ") || "Research , Technology";
}

const BlogDetailsView = ({
  post,
  recentPosts = [],
  popularPosts = [],
  categories = [],
  tags = [],
}) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen((prev) => !prev);

  const image = mediaUrl(
    post.featuredImage?.url,
    "/assets/img/blog/blog-21.jpg",
  );
  const authorName = post.author?.name || "Admin";
  const dateLabel = formatDate(post.publishedAt);

  const handleBodyClick = (event) => {
    const trigger = event.target.closest?.(".popup-video");
    if (trigger) {
      event.preventDefault();
      openModal();
    }
  };

  return (
    <Fragment>
      <ModalVideos isOpen={open} onClick={openModal} />
      <section className="blog-single-area pt-150 pb-80 pt-lg-60">
        <div className="container">
          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-8 mb-60">
              <div className="blog-style-five mb-25">
                <div className="blog-content">
                  <div className="blog-tag pb-15">{postTagsLabel(post)}</div>
                  <h3>
                    <span className="blog-title">{post.title}</span>
                  </h3>
                  <div className="blog-meta mb-35">
                    <span className="mr-20">
                      <i className="bi bi-person-plus" /> {authorName}
                    </span>
                    {dateLabel ? (
                      <span>
                        <i className="bi bi-clock" /> {dateLabel}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="blog-thumb mb-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-100" src={image} alt={post.title || "Blog"} />
                </div>
                {post.excerpt ? (
                  <p className="text-white mb-25">{post.excerpt}</p>
                ) : null}
              </div>

              <BlogAuthor bgColor="theme-bg" />

              <div
                className="blog-single-content"
                onClick={handleBodyClick}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleBodyClick(e);
                }}
                role="presentation"
              >
                {post.body ? (
                  <div
                    className="blog-richtext"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                  />
                ) : (
                  <p className="text-white">No content published for this post yet.</p>
                )}
              </div>

              <SocialMedia
                bgColor="theme-bg"
                tags={post.tags?.length ? post.tags : tags.slice(0, 3)}
              />
              <BlogAuthorTwo author={post.author} />

              <div className="comments-wrapper mt-55">
                <h3 className="post-title mb-50">Comments</h3>
                <BlogComment />
              </div>
              <div className="comment-form mb-10 mt-65" id="reply">
                <h3 className="post-title mb-35">Leave a comment</h3>
                <CommentForm />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="right-widget-section">
                <div className="widget widget-search mb-60">
                  <div className="widget-title-box mb-30">
                    <h4 className="widget-sub-title2 fs-20">Search Here</h4>
                  </div>
                  <SearchForm />
                </div>
                <div className="widget widget-categories-list mb-40">
                  <div className="widget-title-box mb-30">
                    <h4 className="widget-sub-title2 fs-20">Categories</h4>
                  </div>
                  <CategoryWidgetTwo categories={categories} />
                </div>
                <div className="widget widget-post mb-60">
                  <div className="widget-title-box mb-30">
                    <h4 className="widget-sub-title2 fs-20">Recent Post</h4>
                  </div>
                  <WidgetPost posts={recentPosts} />
                </div>
                <div className="widget widget-categories-tag mb-60">
                  <div className="widget-title-box mb-25">
                    <h4 className="widget-sub-title2 fs-20">Tags</h4>
                  </div>
                  <CategoryTag tags={tags} />
                </div>
                <div className="widget widget-post mb-60">
                  <div className="widget-title-box mb-30">
                    <h4 className="widget-sub-title2 fs-20">Popular Post</h4>
                  </div>
                  <WidgetPost posts={popularPosts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogDetailsView;
