import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://ap-computer-science-principles.koydo.app/sitemap.xml",
    host: "https://ap-computer-science-principles.koydo.app",
  };
}
