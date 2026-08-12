import { api } from "@/lib/axios";
import type {
  AboutPageContent,
  BlogPost,
  Company,
  CustomPage,
  GlobalContent,
  HomepageContent,
  InquiryPayload,
  Project,
  ProjectsPageContent,
  Review,
  Service,
  ServiceCategory,
  ServiceProvider,
  StrapiListResponse,
  StrapiSingleResponse,
  Technology,
} from "@/types/strapi";

async function getSingle<T>(
  path: string,
  params?: Record<string, unknown>,
): Promise<T | null> {
  try {
    const { data } = await api.get<StrapiSingleResponse<T>>(path, { params });
    return data.data;
  } catch {
    return null;
  }
}

async function getList<T>(
  path: string,
  params?: Record<string, unknown>,
): Promise<T[]> {
  try {
    const { data } = await api.get<StrapiListResponse<T>>(path, { params });
    return data.data ?? [];
  } catch (error) {
    console.error(`[strapi] GET ${path} failed:`, error);
    return [];
  }
}

async function getListStrict<T>(
  path: string,
  params?: Record<string, unknown>,
): Promise<T[]> {
  const { data } = await api.get<StrapiListResponse<T>>(path, { params });
  return data.data ?? [];
}

export async function getGlobal() {
  return getSingle<GlobalContent>("/global", {
    populate: {
      favicon: true,
      logo: true,
      contactInfo: true,
      socialLinks: true,
      defaultSeo: { populate: ["shareImage"] },
    },
  });
}

export async function getHomepage() {
  return getSingle<HomepageContent>("/homepage", {
    populate: {
      hero: { populate: ["backgroundImage"] },
      heroSecondaryImage: true,
      clientsHeading: true,
      clients: { populate: ["logo"] },
      featuresHeading: true,
      features: { populate: ["icon"] },
      aboutPreview: { populate: ["image"] },
      counters: true,
      servicesHeading: true,
      homepageServices: { populate: ["icon", "category", "priceRange"] },
      featuredProject: { populate: ["featuredImage", "company"] },
      featuredService: { populate: ["icon"] },
      projectsHeading: true,
      homepageProjects: {
        populate: ["featuredImage", "company", "technologies"],
      },
      technologiesHeading: true,
      homepageTechnologies: { populate: ["icon"] },
      teamHeading: true,
      homepageTeam: { populate: ["profileImage", "socialLinks"] },
      processHeading: true,
      processSteps: true,
      ctaBlock: { populate: ["image"] },
      testimonialsHeading: true,
      testimonials: { populate: ["company"] },
      seo: { populate: ["shareImage"] },
    },
  });
}

export async function getAboutPage() {
  return getSingle<AboutPageContent>("/about-page", {
    populate: {
      teamHighlights: { populate: ["profileImage"] },
      certifications: { populate: ["image"] },
      seo: { populate: ["shareImage"] },
    },
  });
}

export async function getProjectsPage() {
  return getSingle<ProjectsPageContent>("/projects-page", {
    populate: {
      heading: true,
      downloadButtons: { populate: ["file"] },
      seo: { populate: ["shareImage"] },
    },
  });
}

export async function getProjects(params?: Record<string, unknown>) {
  return getList<Project>("/projects", {
    populate: {
      featuredImage: true,
      bannerImage: true,
      company: { populate: ["logo"] },
      technologies: { populate: ["icon"] },
      services: true,
      team: { populate: ["profileImage"] },
      stats: true,
      downloadButtons: { populate: ["file"] },
    },
    sort: ["sortOrder:asc", "createdAt:asc"],
    pagination: { pageSize: 100 },
    ...params,
  });
}

export async function getProjectBySlug(slug: string) {
  const items = await getList<Project>("/projects", {
    filters: { slug: { $eq: slug } },
    populate: {
      featuredImage: true,
      bannerImage: true,
      videoImage: true,
      gallery: true,
      company: { populate: ["logo"] },
      technologies: { populate: ["icon"] },
      services: true,
      team: { populate: ["profileImage", "socialLinks"] },
      reviews: true,
      stats: true,
      downloadButtons: { populate: ["file"] },
    },
  });
  return items[0] ?? null;
}

export async function getServices(params?: Record<string, unknown>) {
  return getList<Service>("/services", {
    populate: {
      icon: true,
      featuredImage: true,
      category: { populate: ["icon"] },
      providers: { populate: ["profileImage"] },
      priceRange: true,
      specializations: true,
      stats: true,
    },
    pagination: { pageSize: 100 },
    ...params,
  });
}

export async function getServiceBySlug(slug: string) {
  try {
    const items = await getListStrict<Service>("/services", {
      filters: { slug: { $eq: slug } },
      populate: {
        icon: true,
        featuredImage: true,
        gallery: true,
        category: { populate: ["icon"] },
        providers: { populate: ["profileImage", "socialLinks"] },
        projects: { populate: ["featuredImage"] },
        priceRange: true,
        specializations: true,
        stats: true,
      },
    });
    return items[0] ?? null;
  } catch (error) {
    // Fallback with lighter populate if deep populate fails
    console.error(`[strapi] getServiceBySlug(${slug}) failed, retrying:`, error);
    try {
      const items = await getListStrict<Service>("/services", {
        filters: { slug: { $eq: slug } },
        populate: {
          icon: true,
          featuredImage: true,
          gallery: true,
          specializations: true,
          stats: true,
          priceRange: true,
        },
      });
      return items[0] ?? null;
    } catch (retryError) {
      console.error(`[strapi] getServiceBySlug(${slug}) retry failed:`, retryError);
      throw retryError;
    }
  }
}

export async function getTeam(params?: Record<string, unknown>) {
  return getList<ServiceProvider>("/service-providers", {
    filters: { activeStatus: { $eq: true } },
    populate: {
      profileImage: true,
      socialLinks: true,
      services: true,
    },
    pagination: { pageSize: 100 },
    ...params,
  });
}

export async function getTeamMemberBySlug(slug: string) {
  const items = await getList<ServiceProvider>("/service-providers", {
    filters: { slug: { $eq: slug } },
    populate: {
      profileImage: true,
      socialLinks: true,
      services: true,
      skills: true,
      projects: { populate: ["featuredImage"] },
      blogPosts: { populate: ["featuredImage"] },
    },
  });
  return items[0] ?? null;
}

export async function getBlogPosts(params?: Record<string, unknown>) {
  return getList<BlogPost>("/blog-posts", {
    populate: {
      featuredImage: true,
      author: { populate: ["profileImage"] },
      category: true,
      tags: true,
      seo: { populate: ["shareImage"] },
    },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
    ...params,
  });
}

export async function getBlogPostsPage(page = 1, pageSize = 6) {
  try {
    const { data } = await api.get<StrapiListResponse<BlogPost>>("/blog-posts", {
      params: {
        populate: {
          featuredImage: true,
          author: { populate: ["profileImage"] },
          category: true,
          tags: true,
          seo: { populate: ["shareImage"] },
        },
        sort: ["publishedAt:desc"],
        pagination: { page, pageSize },
      },
    });
    return {
      posts: data.data ?? [],
      pagination: data.meta?.pagination ?? {
        page,
        pageSize,
        pageCount: 0,
        total: 0,
      },
    };
  } catch {
    return {
      posts: [],
      pagination: { page: 1, pageSize, pageCount: 0, total: 0 },
    };
  }
}

export async function getBlogPostBySlug(slug: string) {
  const items = await getList<BlogPost>("/blog-posts", {
    filters: { slug: { $eq: slug } },
    populate: {
      featuredImage: true,
      author: { populate: ["profileImage", "socialLinks"] },
      category: true,
      tags: true,
      seo: { populate: ["shareImage"] },
    },
  });
  return items[0] ?? null;
}

export async function getBlogCategories() {
  return getList<{
    name?: string;
    slug?: string;
    blogPosts?: unknown[];
  }>("/blog-categories", {
    populate: { blogPosts: true },
    pagination: { pageSize: 50 },
  }).then((items) =>
    items.map((item) => ({
      ...item,
      count: Array.isArray(item.blogPosts) ? item.blogPosts.length : 0,
    })),
  );
}

export async function getBlogTags() {
  return getList<{ name?: string; slug?: string }>("/blog-tags", {
    pagination: { pageSize: 50 },
  });
}

export async function getReviews(
  params?: Record<string, unknown> & {
    filters?: Record<string, unknown>;
  },
) {
  const { filters, ...rest } = params || {};
  return getList<Review>("/reviews", {
    filters: {
      displayStatus: { $eq: "published" },
      ...(filters || {}),
    },
    populate: {
      company: { populate: ["logo"] },
      project: { populate: ["featuredImage"] },
    },
    pagination: { pageSize: 50 },
    ...rest,
  });
}

export async function getCompanies() {
  return getList<Company>("/companies", {
    populate: {
      logo: true,
      projects: { populate: ["featuredImage"] },
    },
    pagination: { pageSize: 100 },
  });
}

export async function getTechnologies() {
  return getList<Technology>("/technologies", {
    populate: { icon: true },
    pagination: { pageSize: 100 },
  });
}

export async function getServiceCategories() {
  return getList<ServiceCategory>("/service-categories", {
    populate: {
      icon: true,
      parent: true,
      children: true,
      services: true,
    },
    pagination: { pageSize: 100 },
  });
}

export async function getCustomPages() {
  return getList<CustomPage>("/custom-pages", {
    populate: { seo: { populate: ["shareImage"] } },
    pagination: { pageSize: 100 },
  });
}

export async function getCustomPageBySlug(slug: string) {
  const items = await getList<CustomPage>("/custom-pages", {
    filters: { slug: { $eq: slug } },
    populate: { seo: { populate: ["shareImage"] } },
  });
  return items[0] ?? null;
}

export async function createInquiry(payload: InquiryPayload) {
  const { data } = await api.post("/inquiries", {
    data: {
      ...payload,
      source: payload.source ?? "contact_form",
      status: "new",
    },
  });
  return data;
}
