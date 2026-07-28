import type { MetadataRoute } from "next";
import { site } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/ai-automation", priority: 0.9, freq: "monthly" },
    { path: "/monday-com-consultant", priority: 0.9, freq: "monthly" },
    { path: "/industries", priority: 0.8, freq: "monthly" },
    { path: "/case-studies", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
  ];
  return routes.map((r) => ({
    url: site.url + r.path,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
