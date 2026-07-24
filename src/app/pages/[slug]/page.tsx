import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCustomPageBySlug,
  getCustomPages,
  getGlobal,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const pages = await getCustomPages();
  return pages
    .filter((page) => page.slug)
    .map((page) => ({ slug: page.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [global, page] = await Promise.all([
    getGlobal(),
    getCustomPageBySlug(slug),
  ]);
  if (!page) {
    return buildMetadata({ title: "Page", path: `/pages/${slug}`, global });
  }
  return buildMetadata({
    title: page.title,
    path: `/pages/${slug}`,
    seo: page.seo,
    global,
  });
}

export default async function CustomPageRoute({ params }: Props) {
  const { slug } = await params;
  const page = await getCustomPageBySlug(slug);
  if (!page) notFound();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title={page.title || "Page"} />
      <section className="pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
            </div>
          </div>
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
