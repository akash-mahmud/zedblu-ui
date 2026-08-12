import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGlobal, getTeamMemberBySlug } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import ThemeMenuTwo from "@/components/header/ThemeMenuTwo";
import PageTitle from "@/components/page-title/PageTitle";
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import TeamDetailsView from "@/components/team/TeamDetailsView";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const [global, member] = await Promise.all([
      getGlobal(),
      getTeamMemberBySlug(slug),
    ]);
    if (!member) {
      return buildMetadata({
        title: "Team Member",
        path: `/team/${slug}`,
        global,
      });
    }
    return buildMetadata({
      title: member.name,
      description: member.bio?.replace(/<[^>]+>/g, "").slice(0, 160),
      path: `/team/${slug}`,
      global,
    });
  } catch {
    return buildMetadata({ title: "Team Member", path: `/team/${slug}` });
  }
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const [global, member] = await Promise.all([
    getGlobal(),
    getTeamMemberBySlug(slug),
  ]);
  if (!member) notFound();

  return (
    <div className="main-page-wrapper">
      <ThemeMenuTwo global={global} />
      <PageTitle title="Team Details" />
      <TeamDetailsView member={member} />
      <NewsletterTwo />
      <FooterTwo global={global} />
    </div>
  );
}
