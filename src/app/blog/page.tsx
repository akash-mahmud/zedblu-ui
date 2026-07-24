import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Blog", path: "/blog", global });
}

export default async function BlogPage() {
  const [global, posts] = await Promise.all([getGlobal(), getBlogPosts()]);

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Blog" />
      <section className="pt-100 pb-80">
        <div className="container">
          <div className="row gx-4">
            {posts.map((post) => (
              <div
                className="col-lg-4 col-md-6 mb-40"
                key={post.slug || post.documentId}
              >
                <article className="card-style-seven">
                  <Link href={`/blog/${post.slug}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-100 mb-20"
                      src={mediaUrl(
                        post.featuredImage?.url,
                        "/assets/img/blog/blog-03.jpg",
                      )}
                      alt={post.title || "Blog"}
                    />
                  </Link>
                  <p className="mb-10">
                    {[post.category?.name, post.author?.name]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  <h4>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p>{post.excerpt}</p>
                  <Link className="read-btn" href={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </article>
              </div>
            ))}
            {!posts.length ? <p>No blog posts published yet.</p> : null}
          </div>
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
