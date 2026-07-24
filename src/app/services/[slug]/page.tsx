import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getGlobal,
  getServiceBySlug,
  getServices,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const services = await getServices();
  return services
    .filter((service) => service.slug)
    .map((service) => ({ slug: service.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [global, service] = await Promise.all([
    getGlobal(),
    getServiceBySlug(slug),
  ]);
  if (!service) {
    return buildMetadata({ title: "Service", path: `/services/${slug}`, global });
  }
  return buildMetadata({
    title: service.title,
    description: service.shortDescription || undefined,
    path: `/services/${slug}`,
    global,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title={service.title || "Service"} />
      <div className="service-details-page pt-150 pb-100 pt-lg-60 pb-lg-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {service.shortDescription ? (
                <p className="mb-30">{service.shortDescription}</p>
              ) : null}
              {service.detailedContent ? (
                <div
                  dangerouslySetInnerHTML={{ __html: service.detailedContent }}
                />
              ) : null}
              {service.priceRange ? (
                <div className="mt-40 mb-40">
                  <h4>Pricing</h4>
                  <p>
                    {service.priceRange.label || "From"}{" "}
                    {service.priceRange.minPrice ?? ""}
                    {service.priceRange.maxPrice
                      ? ` - ${service.priceRange.maxPrice}`
                      : ""}{" "}
                    {service.priceRange.currency || "USD"}
                  </p>
                </div>
              ) : null}
              <Link className="theme_btn" href="/services">
                All Services
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
