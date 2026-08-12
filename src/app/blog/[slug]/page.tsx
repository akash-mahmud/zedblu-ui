import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogCategories,
  getBlogPostBySlug,
  getBlogPosts,
  getBlogTags,
  getGlobal,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import BlogDetailsView from "@/components/blog/BlogDetailsView";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const [global, post] = await Promise.all([
      getGlobal(),
      getBlogPostBySlug(slug),
    ]);
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
  } catch {
    return buildMetadata({ title: "Blog Post", path: `/blog/${slug}` });
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const [global, post, allPosts, categories, tags] = await Promise.all([
    getGlobal(),
    getBlogPostBySlug(slug),
    getBlogPosts({ pagination: { pageSize: 12 } }),
    getBlogCategories(),
    getBlogTags(),
  ]);

  if (!post) notFound();

  const others = allPosts.filter((item) => item.slug !== post.slug);
  const recentPosts = others.slice(0, 4);
  const popularPosts = [...others].reverse().slice(0, 4);

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Blog Details Two" />
      <BlogDetailsView
        post={post}
        recentPosts={recentPosts}
        popularPosts={popularPosts}
        categories={categories}
        tags={tags}
      />
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
