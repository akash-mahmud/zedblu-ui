import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import ServiceDetailsView from "@/components/Service/ServiceDetailsView";

type Props = { params: Promise<{ slug: string }> };

// Always fetch live data so a temporary Strapi outage is not cached as a 404.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const [global, service] = await Promise.all([
      getGlobal(),
      getServiceBySlug(slug),
    ]);
    if (!service) {
      return buildMetadata({ title: "Service", path: `/services/${slug}`, global });
    }
    return buildMetadata({
      title: service.title,
      description:
        service.introDescription || service.shortDescription || undefined,
      path: `/services/${slug}`,
      global,
    });
  } catch {
    return buildMetadata({ title: "Service", path: `/services/${slug}` });
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  let service;
  let services = [];
  let global = null;

  try {
    [global, service, services] = await Promise.all([
      getGlobal(),
      getServiceBySlug(slug),
      getServices(),
    ]);
  } catch (error) {
    console.error(`[services/${slug}] failed to load:`, error);
    throw error;
  }

  if (!service) notFound();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Service Details" />
      <ServiceDetailsView service={service} services={services} />
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
