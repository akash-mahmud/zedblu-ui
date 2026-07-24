import type { Metadata } from "next";
import Link from "next/link";
import { getGlobal, getTeam } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import FooterTwo from "@/components/footer/FooterTwo";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({ title: "Team", path: "/team", global });
}

export default async function TeamPage() {
  const team = await getTeam();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title="Team" />
      <section className="pt-100 pb-80">
        <div className="container">
          <div className="row gx-4">
            {team.map((member) => (
              <div
                className="col-lg-3 col-md-6 mb-40"
                key={member.slug || member.documentId}
              >
                <div className="card-style-eleven text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-100 mb-20"
                    src={mediaUrl(
                      member.profileImage?.url,
                      "/assets/img/team/team-7e.jpg",
                    )}
                    alt={member.name || "Team"}
                  />
                  <h4>
                    <Link href={`/team/${member.slug}`}>{member.name}</Link>
                  </h4>
                  {member.services?.length ? (
                    <p>{member.services.map((s) => s.title).join(", ")}</p>
                  ) : null}
                </div>
              </div>
            ))}
            {!team.length ? <p>No team members in Strapi yet.</p> : null}
          </div>
        </div>
      </section>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
