import type { Metadata } from "next";
import { getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import View from "@/views/NotFound";

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({
    title: "Page Not Found",
    path: "/404",
    global,
    noIndex: true,
  });
}

export default function NotFound() {
  return <View />;
}
