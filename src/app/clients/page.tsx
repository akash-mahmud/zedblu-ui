import type { Metadata } from "next";
import Link from "next/link";
import { getCompanies, getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Clients", path: "/clients", global });
}

export default async function ClientsPage() {
  const companies = await getCompanies();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title="Clients" />
      <section className="pt-100 pb-80">
        <div className="container">
          <div className="row gx-4">
            {companies.map((company) => (
              <div
                className="col-lg-4 col-md-6 mb-40"
                key={company.slug || company.documentId}
              >
                <div className="card-style-four p-4 h-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mediaUrl(
                      company.logo?.url,
                      "/assets/img/brand/brand-1.png",
                    )}
                    alt={company.name || "Client"}
                    style={{ maxHeight: 56, marginBottom: 16 }}
                  />
                  <h4>{company.name}</h4>
                  {company.contactPerson ? <p>{company.contactPerson}</p> : null}
                  {company.website ? (
                    <a href={company.website} target="_blank" rel="noreferrer">
                      Visit website
                    </a>
                  ) : null}
                  {company.projects?.length ? (
                    <ul className="mt-20 mb-0">
                      {company.projects.map((project) => (
                        <li key={project.slug || project.documentId}>
                          <Link href={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
            {!companies.length ? <p>No clients in Strapi yet.</p> : null}
          </div>
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
