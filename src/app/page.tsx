import type { Metadata } from "next";
import { getGlobal, getHomepage } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import HomePage from "@/views/home/HomePage";
import MaintenanceScreen from "@/components/MaintenanceScreen";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [global, homepage] = await Promise.all([getGlobal(), getHomepage()]);
  return buildMetadata({
    title: homepage?.hero?.headline || "Home",
    description: homepage?.hero?.subHeadline || undefined,
    path: "/",
    seo: homepage?.seo,
    global,
  });
}

export default async function Page() {
  const [global, homepage] = await Promise.all([getGlobal(), getHomepage()]);

  if (global?.maintenanceMode) {
    return (
      <MaintenanceScreen
        message={global.maintenanceMessage}
        siteName={global.siteName}
      />
    );
  }

  return <HomePage homepage={homepage} global={global} />;
}
