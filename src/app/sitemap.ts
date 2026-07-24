import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import {
  getBlogPosts,
  getCustomPages,
  getProjects,
  getServices,
  getTeam,
} from "@/services/strapi";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/team",
  "/blog",
  "/clients",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects, services, team, pages] = await Promise.all([
    getBlogPosts(),
    getProjects(),
    getServices(),
    getTeam(),
    getCustomPages(),
  ]);

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...team.map((member) => ({
      url: `${SITE_URL}/team/${member.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...pages.map((page) => ({
      url: `${SITE_URL}/pages/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
