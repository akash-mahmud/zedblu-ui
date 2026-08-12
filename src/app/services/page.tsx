import type { Metadata } from "next";
import { getGlobal, getServices } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FeatureFour from "@/components/feature/FeatureFour";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Services", path: "/services", global });
}

export default async function ServicesPage() {
  const services = await getServices({
    filters: { status: { $eq: "active" } },
  });

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title="Services" />
      <section className="our-services service-bg-two pt-145 pb-100 pt-lg-60 pb-lg-20">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-55">
                <h3 className="sect-title mb-25" data-aos="fade-up">
                  Our Services
                </h3>
                <p data-aos="fade-up" data-aos-delay={100}>
                  Dramatically supply transparent backward deliverables before
                  caward comp internal or &quot;organic&quot; sources.
                </p>
              </div>
            </div>
          </div>
          <FeatureFour services={services} />
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
