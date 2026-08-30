import type { Metadata } from "next";
import { getCompanies, getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { pickImage } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Clients", path: "/clients", global });
}

export default async function ClientsPage() {
  const [global, companies] = await Promise.all([getGlobal(), getCompanies()]);

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Clients" />
      <section className="techy-project-one pt-145 pb-105 pt-lg-55 pb-lg-15">
        <div className="container">
          <div className="row gx-4 gx-xxl-5">
            {companies.map((company, index) => {
              const href = company.website || "/clients";
              const logo = pickImage(
                company.logo,
                `/assets/img/brand/brand-${(index % 4) + 1}.svg`,
              );
              return (
                <div
                  className="col-lg-4 col-md-6"
                  key={company.slug || company.documentId || index}
                >
                  <div className="feature-item mb-40">
                    <a className="back-bg" href={href} target={company.website ? "_blank" : undefined} rel="noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-100" src={logo} alt={company.name || "Client"} />
                    </a>
                    <h5>
                      {company.contactPerson || "Client"}
                    </h5>
                    <h3>
                      <a href={href} target={company.website ? "_blank" : undefined} rel="noreferrer">
                        {company.name}
                      </a>
                    </h3>
                    {company.projects?.length ? (
                      <p className="mt-15 mb-0">
                        {company.projects
                          .slice(0, 2)
                          .map((project) => project.title)
                          .filter(Boolean)
                          .join(" / ")}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
            {!companies.length ? (
              <div className="col-12">
                <p className="text-white text-center">No clients published in Strapi yet.</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
