import type { GlobalContent, MenuItem } from "@/types/strapi";

export function getVisibleMenuItems(global?: GlobalContent | null): MenuItem[] {
  return [...(global?.menuItems || [])]
    .filter((item) => item?.visible !== false && item?.label && item?.url)
    .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
}
