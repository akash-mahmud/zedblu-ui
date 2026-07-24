import type { Metadata } from "next";
import StoreProvider from "@/components/providers/StoreProvider";
import AosProvider from "@/components/providers/AosProvider";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollTopBehavior from "@/components/ScrollTopBehavior";
import { getGlobal } from "@/services/strapi";
import { buildMetadata } from "@/lib/seo";
import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/css/modal-video.min.css";
import "@/assets/scss/main.scss";
import "@/assets/scss/spacing.scss";

export async function generateMetadata(): Promise<Metadata> {
  const global = await getGlobal();
  return buildMetadata({
    title: global?.siteName || "Zedblu",
    description: global?.siteDescription || undefined,
    path: "/",
    seo: global?.defaultSeo,
    global,
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StoreProvider>
          <AosProvider>
            <ScrollToTop />
            <ScrollTopBehavior />
            {children}
          </AosProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
