import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBlogPostBySlug,
  getBlogPosts,
  getGlobal,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts
    .filter((post) => post.slug)
    .map((post) => ({ slug: post.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [global, post] = await Promise.all([getGlobal(), getBlogPostBySlug(slug)]);
  if (!post) {
    return buildMetadata({ title: "Blog Post", path: `/blog/${slug}`, global });
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt || undefined,
    path: `/blog/${slug}`,
    seo: post.seo,
    global,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [global, post] = await Promise.all([getGlobal(), getBlogPostBySlug(slug)]);
  if (!post) notFound();

  const image = mediaUrl(post.featuredImage?.url, "/assets/img/blog/blog-img-1.jpg");

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title={post.title || "Blog"} />
      <div className="blog-details-page pt-150 pb-100 pt-lg-60 pb-lg-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <article className="blog-details-content">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-100 mb-40" src={image} alt={post.title || "Blog"} />
                <p className="mb-15">
                  {[post.category?.name, post.author?.name, post.publishedAt]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <h2 className="sect-title mb-20">{post.title}</h2>
                {post.excerpt ? <p className="mb-30">{post.excerpt}</p> : null}
                {post.body ? (
                  <div
                    className="blog-richtext"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                  />
                ) : null}
                {post.tags?.length ? (
                  <div className="mt-30">
                    {post.tags.map((tag) => (
                      <span key={tag.slug || tag.name} className="me-2">
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="mt-40">
                  <Link className="theme_btn" href="/blog">
                    Back to Blog
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
