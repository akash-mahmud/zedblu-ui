import type { Metadata } from "next";
import { getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import ContactForm from "@/components/form/ContactForm";
import SocialFive from "@/components/social/SocialFive";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({
    title: "Contact",
    description: global?.siteDescription || undefined,
    path: "/contact",
    global,
  });
}

export default async function ContactPage() {
  const global = await getGlobal();
  const contact = global?.contactInfo;

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Contact" />
      <div className="contact-section pt-145 pb-100 pt-lg-60 pb-lg-15">
        <div className="container">
          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-5">
              <div className="contact-info-wrapper me-xxl-5 pe-xxl-5 mb-45">
                <h2 className="sect-title mb-5">Let’s Get Connect With Us</h2>
                {contact?.phone ? (
                  <div className="single-info-box mb-50">
                    <div className="icon">
                      <i className="bi bi-telephone" />
                    </div>
                    <span className="mb-10">{contact.phone}</span>
                  </div>
                ) : null}
                {contact?.address ? (
                  <div className="single-info-box mb-50">
                    <div className="icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <span className="mb-10">{contact.address}</span>
                  </div>
                ) : null}
                {contact?.email ? (
                  <div className="single-info-box mb-50">
                    <div className="icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <span className="mb-10">{contact.email}</span>
                  </div>
                ) : null}
                {contact?.officeHours ? (
                  <div className="single-info-box mb-40">
                    <div className="icon">
                      <i className="bi bi-briefcase" />
                    </div>
                    <span className="mb-10">{contact.officeHours}</span>
                  </div>
                ) : null}
                {!contact?.phone && !contact?.email && !contact?.address ? (
                  <p>Set Global contact info in Strapi.</p>
                ) : null}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-content-wrapper mb-45">
                <div className="row align-items-center mb-25">
                  <div className="col-md-8">
                    <p className="text-white mb-40">
                      {global?.siteDescription ||
                        "Send us a message and our team will get back to you."}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <SocialFive />
                  </div>
                </div>
                {global?.mapEmbedUrl ? (
                  <div className="contact-map pb-40 mb-xxl-4">
                    <iframe src={global.mapEmbedUrl} title="Office map" />
                  </div>
                ) : null}
                <div className="contact-form-two">
                  <h3 className="post-title mb-50">Send Us Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
