import type { Metadata } from "next";
import { getGlobal, getHomepage, getServices } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { pickImage } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FeatureFour from "@/components/feature/FeatureFour";

export const dynamic = "force-dynamic";

const FALLBACK_ICONS = [
  "icon-18b",
  "icon-19b",
  "icon-20b",
  "icon-21b",
  "icon-22b",
  "icon-23b",
];

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Services", path: "/services", global });
}

export default async function ServicesPage() {
  const [global, homepage, services] = await Promise.all([
    getGlobal(),
    getHomepage(),
    getServices(),
  ]);

  const source =
    homepage?.homepageServices?.length ? homepage.homepageServices : services;

  const cards = source
    .filter((service) => typeof service?.title === "string" && service.title.trim())
    .map((service, index) => ({
      title: service.title,
      desc: service.shortDescription || "",
      slug: service.slug,
      iconUrl: pickImage(
        service.icon,
        `/assets/img/icon/${FALLBACK_ICONS[index % FALLBACK_ICONS.length]}.svg`,
      ),
    }));

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Services" />
      <section className="our-services service-bg-two pt-95 pb-50 pt-lg-50 pb-lg-15">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-55">
                <h3 className="sect-title mb-25" data-aos="fade-up">
                  {homepage?.servicesHeading?.title || "Our Services"}
                </h3>
                <p data-aos="fade-up" data-aos-delay={100}>
                  {homepage?.servicesHeading?.description ||
                    'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.'}
                </p>
              </div>
            </div>
          </div>
          <FeatureFour services={cards} />
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
