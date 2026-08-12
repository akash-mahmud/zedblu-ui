import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getGlobal,
  getProjectBySlug,
  getProjects,
  getProjectsPage,
  getServices,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import ProjectDetailsView from "@/components/project/ProjectDetailsView";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const [global, project] = await Promise.all([
      getGlobal(),
      getProjectBySlug(slug),
    ]);
    if (!project) {
      return buildMetadata({
        title: "Project",
        path: `/projects/${slug}`,
        global,
      });
    }
    return buildMetadata({
      title: project.title,
      description:
        project.shortDescription ||
        project.description?.replace(/<[^>]+>/g, "").slice(0, 160),
      path: `/projects/${slug}`,
      global,
    });
  } catch {
    return buildMetadata({ title: "Project", path: `/projects/${slug}` });
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const [global, page, project, services, allProjects] = await Promise.all([
    getGlobal(),
    getProjectsPage(),
    getProjectBySlug(slug),
    getServices(),
    getProjects(),
  ]);
  if (!project) notFound();

  const relatedProjects = allProjects
    .filter((item) => item.slug && item.slug !== project.slug)
    .slice(0, 6);

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title={page?.pageTitle || "Project Details"} />
      <ProjectDetailsView
        project={project}
        page={page}
        services={services}
        relatedProjects={relatedProjects}
      />
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
