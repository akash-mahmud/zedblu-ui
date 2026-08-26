import type { Metadata } from "next";
import { getAboutPage, getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import AboutPageView from "@/views/about/AboutPage";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [global, about] = await Promise.all([getGlobal(), getAboutPage()]);
  return buildMetadata({
    title: about?.title || "About Us",
    description: about?.mission || about?.vision || about?.introTitle || undefined,
    path: "/about",
    seo: about?.seo,
    global,
  });
}

export default async function AboutPage() {
  const [global, about] = await Promise.all([getGlobal(), getAboutPage()]);
  return <AboutPageView about={about} global={global} />;
}
