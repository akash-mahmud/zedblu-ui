import type { Metadata } from "next";
import { getBlogPostsPage, getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import BlogStyleTwo from "@/components/blog/BlogStyleTwo";
import BlogPagination from "@/components/blog/BlogPagination";

export const revalidate = 60;

const PAGE_SIZE = 6;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Blog", path: "/blog", global });
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const requestedPage = Math.max(1, Number(params.page) || 1);

  const [global, firstResult] = await Promise.all([
    getGlobal(),
    getBlogPostsPage(requestedPage, PAGE_SIZE),
  ]);

  const pageCount = firstResult.pagination.pageCount || 0;
  const page =
    pageCount > 0
      ? Math.min(requestedPage, pageCount)
      : 1;
  const result =
    page === firstResult.pagination.page
      ? firstResult
      : await getBlogPostsPage(page, PAGE_SIZE);

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Blog" />
      <section className="blog-grid-area pt-150 pb-105 pt-lg-60 pb-lg-15">
        <div className="container">
          <BlogStyleTwo posts={result.posts} />
          <BlogPagination page={page} pageCount={pageCount} />
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
