import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/meniu", priority: 0.9, changeFrequency: "weekly" },
    { path: "/despre-noi", priority: 0.6, changeFrequency: "monthly" },
    { path: "/locatie", priority: 0.8, changeFrequency: "monthly" },
    { path: "/termeni-si-conditii", priority: 0.2, changeFrequency: "yearly" },
    { path: "/despre-cookies", priority: 0.2, changeFrequency: "yearly" },
  ];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.path === "" ? { images: [`${SITE_URL}/opengraph-image.jpg`] } : {}),
  }));
}
