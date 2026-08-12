import type { Metadata } from "next";
import Link from "next/link";
import { getGlobal, getProjects, getProjectsPage } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import ProjectGridOne from "@/components/project/ProjectGridOne";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const [global, page] = await Promise.all([getGlobal(), getProjectsPage()]);
  return buildMetadata({
    title: page?.seo?.metaTitle || page?.heading?.title || "Projects",
    description:
      page?.seo?.metaDescription || page?.heading?.description || undefined,
    path: "/projects",
    global,
  });
}

export default async function ProjectsPage() {
  const [global, page, projects] = await Promise.all([
    getGlobal(),
    getProjectsPage(),
    getProjects(),
  ]);

  const pageTitle = page?.pageTitle || "Our Project";
  const headingTitle = page?.heading?.title || "Featured Works";
  const headingDescription = page?.heading?.description || "";
  const showLoadMore = page?.showLoadMore !== false;
  const loadMoreText = page?.loadMoreText || "Load More";
  const loadMoreUrl = page?.loadMoreUrl || "/projects";

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title={pageTitle} />
      <section className="techy-project-one pt-145 pb-105 pt-lg-55 pb-lg-15">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-25">
                {page?.heading?.eyebrow ? (
                  <h6 className="sub-title mb-20" data-aos="fade-up">
                    {page.heading.eyebrow}
                  </h6>
                ) : null}
                <h3 className="sect-title mb-25" data-aos="fade-up">
                  {headingTitle}
                </h3>
                {headingDescription ? (
                  <p data-aos="fade-up">{headingDescription}</p>
                ) : null}
              </div>
            </div>
          </div>
          <ProjectGridOne
            projects={projects}
            filterTabs={page?.filterTabs}
          />
          {showLoadMore ? (
            <div className="row">
              <div className="col-lg-12 text-center mt-10 mb-45">
                <Link className="theme_btn" href={loadMoreUrl}>
                  {loadMoreText}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
