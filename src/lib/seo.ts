import type { Metadata } from "next";
import { mediaUrl } from "@/lib/axios";
import { SITE_URL } from "@/lib/config";
import type { GlobalContent, SeoFields } from "@/types/strapi";

type BuildMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  seo?: SeoFields;
  global?: GlobalContent | null;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  seo,
  global,
  noIndex,
}: BuildMetaInput): Metadata {
  const siteName = global?.siteName || "Zedblu";
  const resolvedTitle =
    seo?.metaTitle || title || global?.defaultSeo?.metaTitle || siteName;
  const resolvedDescription =
    seo?.metaDescription ||
    description ||
    global?.defaultSeo?.metaDescription ||
    global?.siteDescription ||
    `${siteName} — IT solutions, software, and digital services.`;
  const image =
    seo?.shareImage?.url ||
    global?.defaultSeo?.shareImage?.url ||
    undefined;
  const canonical = seo?.canonicalUrl || `${SITE_URL}${path}`;
  const fullTitle =
    resolvedTitle.includes(siteName) ? resolvedTitle : `${resolvedTitle} | ${siteName}`;

  return {
    title: fullTitle,
    description: resolvedDescription,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: resolvedDescription,
      url: canonical,
      siteName,
      type: "website",
      ...(image
        ? {
            images: [
              {
                url: mediaUrl(image),
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      ...(image ? { images: [mediaUrl(image)] } : {}),
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
