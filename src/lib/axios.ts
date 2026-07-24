import axios from "axios";
import { STRAPI_API_URL, STRAPI_URL } from "./config";

export const api = axios.create({
  baseURL: STRAPI_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.error?.message ||
      error.message ||
      "Request failed";
    return Promise.reject(new Error(message));
  },
);

export function mediaUrl(
  url?: string | null,
  fallback = "/assets/img/logo/logo-1.svg",
): string {
  if (!url) return fallback;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${STRAPI_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}
