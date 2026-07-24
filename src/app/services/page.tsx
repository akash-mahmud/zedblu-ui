import type { Metadata } from "next";
import Link from "next/link";
import {
  getGlobal,
  getServiceCategories,
  getServices,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Services", path: "/services", global });
}

export default async function ServicesPage() {
  const [services, categories] = await Promise.all([
    getServices({ filters: { status: { $eq: "active" } } }),
    getServiceCategories(),
  ]);

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title="Services" />
      <section className="our-services pt-100 pb-80">
        <div className="container">
          {categories.length ? (
            <div className="row mb-50">
              {categories.map((category) => (
                <div
                  className="col-md-4 mb-20"
                  key={category.slug || category.documentId}
                >
                  <div className="d-flex align-items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mediaUrl(
                        category.icon?.url,
                        "/assets/img/icon/icon-18b.svg",
                      )}
                      alt={category.name || "Category"}
                      style={{ width: 40, height: 40 }}
                    />
                    <div>
                      <h5 className="mb-0">{category.name}</h5>
                      <small>{category.description}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="row gx-4">
            {services.map((service) => (
              <div
                className="col-lg-4 col-md-6 mb-40"
                key={service.slug || service.documentId}
              >
                <div className="card-style-four p-4 h-100">
                  <p className="sub-title mb-10">{service.category?.name}</p>
                  <h4 className="mb-15">
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h4>
                  <p>{service.shortDescription}</p>
                  {service.priceRange ? (
                    <p className="mb-0">
                      {service.priceRange.label || "From"}{" "}
                      {service.priceRange.minPrice ?? ""}
                      {service.priceRange.maxPrice
                        ? ` - ${service.priceRange.maxPrice}`
                        : ""}{" "}
                      {service.priceRange.currency || "USD"}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
            {!services.length ? (
              <p>No active services in Strapi yet.</p>
            ) : null}
          </div>
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
