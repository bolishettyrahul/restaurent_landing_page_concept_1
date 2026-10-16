import type { MetadataRoute } from "next";
import { CONCEPT_MODE, siteUrl } from "@/content/site";

// Concept builds stay out of search; an approved site is crawlable.
export default function robots(): MetadataRoute.Robots {
  if (CONCEPT_MODE) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` };
}
