import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getGlobal,
  getTeam,
  getTeamMemberBySlug,
} from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import { mediaUrl } from "@/lib/axios";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const team = await getTeam();
  return team
    .filter((member) => member.slug)
    .map((member) => ({ slug: member.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [global, member] = await Promise.all([
    getGlobal(),
    getTeamMemberBySlug(slug),
  ]);
  if (!member) {
    return buildMetadata({ title: "Team Member", path: `/team/${slug}`, global });
  }
  return buildMetadata({
    title: member.name,
    description: member.bio?.replace(/<[^>]+>/g, "").slice(0, 160),
    path: `/team/${slug}`,
    global,
  });
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);
  if (!member) notFound();

  const image = mediaUrl(
    member.profileImage?.url,
    "/assets/img/team/team-img-1.jpg",
  );

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo />
      <PageTitle title={member.name || "Team"} />
      <div className="team-details-page pt-150 pb-100 pt-lg-60 pb-lg-50">
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-start">
            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-100 mb-30" src={image} alt={member.name || "Team"} />
            </div>
            <div className="col-lg-8">
              <h2 className="sect-title mb-20">{member.name}</h2>
              {member.bio ? (
                <div dangerouslySetInnerHTML={{ __html: member.bio }} />
              ) : null}
              {member.socialLinks?.length ? (
                <ul className="social-icon style-none d-flex mt-30">
                  {member.socialLinks.map((link) => (
                    <li key={`${link.platform}-${link.url}`}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-40">
                <Link className="theme_btn" href="/team">
                  All Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterTwo />
      <FooterTwo />
    </div>
  );
}
