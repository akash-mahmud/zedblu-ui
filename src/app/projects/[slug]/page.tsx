import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getGlobal,
  getProjectBySlug,
  getProjects,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [global, project] = await Promise.all([
    getGlobal(),
    getProjectBySlug(slug),
  ]);
  if (!project) {
    return buildMetadata({ title: "Project", path: `/projects/${slug}`, global });
  }
  return buildMetadata({
    title: project.title,
    description: project.description?.replace(/<[^>]+>/g, "").slice(0, 160),
    path: `/projects/${slug}`,
    global,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const image = mediaUrl(
    project.featuredImage?.url,
    "/assets/img/work/work-img-1.jpg",
  );

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title={project.title || "Project"} />
      <div className="project-details-page pt-150 pb-100 pt-lg-60 pb-lg-50">
        <div className="container">
          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-100 mb-40" src={image} alt={project.title || "Project"} />
              <h2 className="sect-title mb-20">{project.title}</h2>
              {project.description ? (
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
              ) : null}
            </div>
            <div className="col-lg-4">
              <div className="widget mb-40">
                <h4 className="widget-title">Project Info</h4>
                <ul className="list-unstyled">
                  {project.company?.name ? (
                    <li>
                      <strong>Client:</strong> {project.company.name}
                    </li>
                  ) : null}
                  {project.status ? (
                    <li>
                      <strong>Status:</strong> {project.status}
                    </li>
                  ) : null}
                  {project.completionDate ? (
                    <li>
                      <strong>Completed:</strong> {project.completionDate}
                    </li>
                  ) : null}
                  {project.projectUrl ? (
                    <li>
                      <a href={project.projectUrl} target="_blank" rel="noreferrer">
                        Visit Project
                      </a>
                    </li>
                  ) : null}
                </ul>
                {project.technologies?.length ? (
                  <div className="mt-30">
                    <h5>Technologies</h5>
                    <ul>
                      {project.technologies.map((tech) => (
                        <li key={tech.slug || tech.name}>{tech.name}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <Link className="theme_btn" href="/project-grid">
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
