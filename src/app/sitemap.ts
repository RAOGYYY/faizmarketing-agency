import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { rewardNestUrl } from "@/data/rewardnest";

// Auto-served at /sitemap.xml by Next.js.
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: siteConfig.siteUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        // RewardNest app pages. These URLs are referenced from the app's Google
        // Play listing, so they must stay crawlable and stable.
        {
            url: rewardNestUrl(),
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: rewardNestUrl("/privacy"),
            lastModified,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: rewardNestUrl("/terms"),
            lastModified,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: rewardNestUrl("/delete-account"),
            lastModified,
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}
