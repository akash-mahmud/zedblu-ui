import type { Metadata } from "next";
import Link from "next/link";
import { getGlobal, getProjects } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Projects", path: "/projects", global });
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title="Projects" />
      <section className="pt-100 pb-80">
        <div className="container">
          <div className="row gx-4">
            {projects.map((project) => (
              <div
                className="col-lg-4 col-md-6 mb-40"
                key={project.slug || project.documentId}
              >
                <div className="card-style-nine">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-100 mb-20"
                    src={mediaUrl(
                      project.featuredImage?.url,
                      "/assets/img/work/project-1.jpg",
                    )}
                    alt={project.title || "Project"}
                  />
                  <h4>
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h4>
                  <p>
                    {project.company?.name}
                    {project.status ? ` · ${project.status}` : ""}
                  </p>
                </div>
              </div>
            ))}
            {!projects.length ? <p>No projects in Strapi yet.</p> : null}
          </div>
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
