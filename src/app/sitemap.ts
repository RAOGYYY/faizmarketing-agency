import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

// Auto-served at /sitemap.xml by Next.js.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
