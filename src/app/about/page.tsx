import type { Metadata } from "next";
import { getAboutPage, getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import Link from "next/link";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [global, about] = await Promise.all([getGlobal(), getAboutPage()]);
  return buildMetadata({
    title: about?.title || "About Us",
    description: about?.mission || about?.vision || undefined,
    path: "/about",
    seo: about?.seo,
    global,
  });
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title={about?.title || "About Us"} />

      <section className="pt-100 pb-60">
        <div className="container">
          <div className="row gx-4">
            {about?.mission ? (
              <div className="col-md-4 mb-40">
                <h3 className="sect-title fs-28 mb-15">Mission</h3>
                <p>{about.mission}</p>
              </div>
            ) : null}
            {about?.vision ? (
              <div className="col-md-4 mb-40">
                <h3 className="sect-title fs-28 mb-15">Vision</h3>
                <p>{about.vision}</p>
              </div>
            ) : null}
            {about?.story ? (
              <div className="col-md-4 mb-40">
                <h3 className="sect-title fs-28 mb-15">Our Story</h3>
                <div dangerouslySetInnerHTML={{ __html: about.story }} />
              </div>
            ) : null}
            {!about?.mission && !about?.vision && !about?.story ? (
              <div className="col-12">
                <p>Add About Page content in Strapi Admin.</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {about?.teamHighlights?.length ? (
        <section className="pb-80">
          <div className="container">
            <h3 className="sect-title text-center mb-40">Team Highlights</h3>
            <div className="row">
              {about.teamHighlights.map((member) => (
                <div className="col-md-4 mb-30" key={member.slug || member.documentId}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-100 mb-15"
                    src={mediaUrl(
                      member.profileImage?.url,
                      "/assets/img/team/team-7e.jpg",
                    )}
                    alt={member.name || "Team"}
                  />
                  <h4>
                    <Link href={`/team/${member.slug}`}>{member.name}</Link>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {about?.certifications?.length ? (
        <section className="pb-100">
          <div className="container">
            <h3 className="sect-title text-center mb-40">Certifications & Awards</h3>
            <div className="row">
              {about.certifications.map((cert, index) => (
                <div className="col-md-4 mb-30" key={`${cert.title}-${index}`}>
                  {cert.image?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="mb-15"
                      src={mediaUrl(cert.image.url)}
                      alt={cert.title || "Certification"}
                      style={{ maxHeight: 80 }}
                    />
                  ) : null}
                  <h5>{cert.title}</h5>
                  <p>
                    {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
