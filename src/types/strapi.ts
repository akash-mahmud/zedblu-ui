export type StrapiMedia = {
  url?: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
} | null;

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string | null;
  shareImage?: StrapiMedia;
} | null;

export type SocialLink = {
  platform?: string;
  url?: string;
};

export type MenuItem = {
  id?: number;
  label?: string;
  url?: string;
  visible?: boolean;
  position?: number | null;
};

export type ContactInfo = {
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  officeHours?: string | null;
} | null;

export type HeroSection = {
  headline?: string;
  subHeadline?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  backgroundImage?: StrapiMedia;
} | null;

export type StrapiEntity<T> = T & {
  id?: number;
  documentId?: string;
};

export type StrapiListResponse<T> = {
  data: StrapiEntity<T>[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiSingleResponse<T> = {
  data: StrapiEntity<T> | null;
};

export type SectionHeading = {
  eyebrow?: string | null;
  title?: string;
  description?: string | null;
} | null;

export type CounterItem = {
  value?: number;
  suffix?: string | null;
  label?: string;
};

export type ProcessStep = {
  title?: string;
  description?: string | null;
  stepNumber?: number | null;
};

export type FeatureItem = {
  title?: string;
  description?: string | null;
  icon?: StrapiMedia;
};

export type AboutPreview = {
  eyebrow?: string | null;
  title?: string;
  description?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  image?: StrapiMedia;
} | null;

export type CtaBlock = {
  title?: string;
  description?: string | null;
  phoneLabel?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  image?: StrapiMedia;
} | null;

export type VideoClip = {
  youtubeUrl?: string | null;
  thumbnail?: StrapiMedia;
  file?: StrapiMedia;
};

export type LatestVideos = {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
  items?: VideoClip[];
} | null;

export type GlobalContent = {
  siteName?: string;
  siteDescription?: string | null;
  favicon?: StrapiMedia;
  logo?: StrapiMedia;
  footerText?: string | null;
  mapEmbedUrl?: string | null;
  contactInfo?: ContactInfo;
  sidebar?: {
    aboutTitle?: string | null;
    aboutText?: string | null;
    contactTitle?: string | null;
  } | null;
  socialLinks?: SocialLink[];
  menuItems?: MenuItem[];
  defaultSeo?: SeoFields;
  maintenanceMode?: boolean;
  maintenanceMessage?: string | null;
};

export type HomepageContent = {
  hero?: HeroSection;
  heroSecondaryImage?: StrapiMedia;
  clientsHeading?: SectionHeading;
  showClients?: boolean;
  clients?: Company[];
  featuresHeading?: SectionHeading;
  showFeatures?: boolean;
  features?: FeatureItem[];
  aboutPreview?: AboutPreview;
  showAboutPreview?: boolean;
  counters?: CounterItem[];
  servicesHeading?: SectionHeading;
  showServices?: boolean;
  homepageServices?: Service[];
  showFeaturedProject?: boolean;
  featuredProject?: Project | null;
  showFeaturedService?: boolean;
  featuredService?: Service | null;
  projectsHeading?: SectionHeading;
  showProjects?: boolean;
  homepageProjects?: Project[];
  technologiesHeading?: SectionHeading;
  showTechnologies?: boolean;
  homepageTechnologies?: Technology[];
  teamHeading?: SectionHeading;
  showTeam?: boolean;
  homepageTeam?: ServiceProvider[];
  processHeading?: SectionHeading;
  showProcess?: boolean;
  processSteps?: ProcessStep[];
  ctaBlock?: CtaBlock;
  showCta?: boolean;
  latestVideos?: LatestVideos;
  testimonialsHeading?: SectionHeading;
  showTestimonials?: boolean;
  testimonials?: Review[];
  seo?: SeoFields;
};

export type PricePlan = {
  name?: string;
  description?: string | null;
  price?: string;
  period?: string | null;
  features?: string | null;
  cycle?: "monthly" | "yearly" | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
};

export type AboutPageContent = {
  title?: string;
  story?: string | null;
  mission?: string | null;
  vision?: string | null;
  introTitle?: string | null;
  ctaText?: string | null;
  ctaUrl?: string | null;
  image?: StrapiMedia;
  secondaryImage?: StrapiMedia;
  features?: FeatureItem[];
  highlights?: FeatureItem[];
  counters?: CounterItem[];
  teamHeading?: SectionHeading;
  teamHighlights?: ServiceProvider[];
  videoLabel?: string | null;
  youtubeUrl?: string | null;
  videoFile?: StrapiMedia;
  videoThumbnail?: StrapiMedia;
  pricingHeading?: SectionHeading;
  pricingPlans?: PricePlan[];
  newsletterTitle?: string | null;
  newsletterCtaText?: string | null;
  newsletterCtaUrl?: string | null;
  certifications?: Array<{
    title?: string;
    issuer?: string | null;
    year?: number | null;
    image?: StrapiMedia;
  }>;
  seo?: SeoFields;
};

export type ProjectCategory = {
  documentId?: string;
  id?: number;
  name?: string;
  slug?: string;
  sortOrder?: number | null;
  showAllProjects?: boolean;
};

export type Project = {
  documentId?: string;
  id?: number;
  title?: string;
  slug?: string;
  category?: string | null;
  filterTags?: string[] | string | Array<{ text?: string }> | Record<string, unknown> | null;
  filterCategories?: ProjectCategory[];
  shortDescription?: string | null;
  description?: string | null;
  bodyDescription?: string | null;
  clientName?: string | null;
  clientLink?: string | null;
  projectUrl?: string | null;
  projectType?: string | null;
  startDate?: string | null;
  completionDate?: string | null;
  duration?: string | null;
  location?: string | null;
  employees?: string | null;
  results?: string | null;
  tags?: string | null;
  challengeDescription?: string | null;
  challengeItems?: Array<string | { text?: string }> | null;
  goalsDescription?: string | null;
  solutionsDescription?: string | null;
  stats?: { value?: number; suffix?: string | null; label?: string }[];
  videoUrl?: string | null;
  status?: string;
  sortOrder?: number | null;
  featuredImage?: StrapiMedia;
  bannerImage?: StrapiMedia;
  videoImage?: StrapiMedia;
  gallery?: StrapiMedia[];
  downloadButtons?: {
    label?: string;
    url?: string | null;
    file?: StrapiMedia;
  }[];
  company?: Company | null;
  services?: Service[];
  team?: ServiceProvider[];
  technologies?: Technology[];
  reviews?: Review[];
};

export type ProjectsPageContent = {
  documentId?: string;
  id?: number;
  pageTitle?: string | null;
  heading?: {
    eyebrow?: string | null;
    title?: string;
    description?: string | null;
  } | null;
  showLoadMore?: boolean;
  loadMoreText?: string | null;
  loadMoreUrl?: string | null;
  relatedProjectsHeading?: string | null;
  showRelatedProjects?: boolean;
  infoHeading?: string | null;
  challengeHeading?: string | null;
  goalsHeading?: string | null;
  solutionsHeading?: string | null;
  contactWidgetTitle?: string | null;
  contactWidgetDescription?: string | null;
  showServiceSidebar?: boolean;
  downloadButtons?: {
    label?: string;
    url?: string | null;
    file?: StrapiMedia;
  }[];
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
    shareImage?: StrapiMedia;
  } | null;
};

export type Service = {
  documentId?: string;
  id?: number;
  title?: string;
  slug?: string;
  shortDescription?: string | null;
  introDescription?: string | null;
  detailedContent?: string | null;
  icon?: StrapiMedia;
  featuredImage?: StrapiMedia;
  gallery?: StrapiMedia[];
  specializedHeading?: string | null;
  specializedDescription?: string | null;
  specializations?: { title?: string; value?: number }[];
  skillsHeading?: string | null;
  skillsDescription?: string | null;
  relyHeading?: string | null;
  relyDescription?: string | null;
  highlights?: Array<string | { text?: string }> | null;
  stats?: { value?: number; suffix?: string | null; label?: string }[];
  priceRange?: {
    label?: string | null;
    minPrice?: number | null;
    maxPrice?: number | null;
    currency?: string | null;
  } | null;
  status?: string;
  category?: ServiceCategory | null;
  providers?: ServiceProvider[];
  projects?: Project[];
};

export type ServiceCategory = {
  documentId?: string;
  id?: number;
  name?: string;
  slug?: string;
  description?: string | null;
  icon?: StrapiMedia;
};

export type ServiceProvider = {
  documentId?: string;
  id?: number;
  name?: string;
  slug?: string;
  bio?: string | null;
  jobTitle?: string | null;
  roles?: string | null;
  phone?: string | null;
  email?: string | null;
  experience?: string | null;
  skillLevel?: string | null;
  languages?: string | null;
  skillsDescription?: string | null;
  skills?: { title?: string; value?: number }[];
  profileImage?: StrapiMedia;
  socialLinks?: SocialLink[];
  activeStatus?: boolean;
  services?: Service[];
  projects?: Project[];
  blogPosts?: BlogPost[];
};

export type Company = {
  documentId?: string;
  id?: number;
  name?: string;
  slug?: string;
  logo?: StrapiMedia;
  website?: string | null;
  contactPerson?: string | null;
  projects?: Project[];
  reviews?: Review[];
};

export type Technology = {
  documentId?: string;
  id?: number;
  name?: string;
  slug?: string;
  icon?: StrapiMedia;
};

export type Review = {
  documentId?: string;
  id?: number;
  authorName?: string;
  companyRole?: string | null;
  content?: string;
  rating?: number | null;
  featured?: boolean;
  displayStatus?: string;
  company?: Company | null;
};

export type BlogPost = {
  documentId?: string;
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string | null;
  body?: string;
  featuredImage?: StrapiMedia;
  author?: ServiceProvider | null;
  category?: BlogCategory | null;
  tags?: BlogTag[];
  seo?: SeoFields;
  publishedAt?: string | null;
};

export type BlogCategory = {
  documentId?: string;
  id?: number;
  name?: string;
  slug?: string;
  description?: string | null;
};

export type BlogTag = {
  documentId?: string;
  id?: number;
  name?: string;
  slug?: string;
};

export type CustomPage = {
  documentId?: string;
  id?: number;
  title?: string;
  slug?: string;
  content?: string;
  seo?: SeoFields;
};

export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?:
    | "website"
    | "contact_form"
    | "referral"
    | "social_media"
    | "email"
    | "other";
};
