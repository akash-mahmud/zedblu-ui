import type { Metadata } from "next";
import { getGlobal, getTeam } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import TeamTwoA from "@/components/team/TeamTwoA";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Team", path: "/team", global });
}

export default async function TeamPage() {
  const [global, team] = await Promise.all([getGlobal(), getTeam()]);

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Team" />
      <section className="techy-team team-sec-two mt-0 pt-145 pb-145 pt-lg-55 pb-lg-60">
        <div className="container">
          <div className="row gx-4 gx-xxl-5">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <h6 className="sub-title mb-20">Our Team</h6>
                <h2 className="sect-title">Expert Team Member</h2>
              </div>
            </div>
          </div>
          <TeamTwoA members={team} />
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
