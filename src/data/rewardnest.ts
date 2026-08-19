// RewardNest app details.
//
// These pages exist so the RewardNest Android app can point its Google Play
// listing (privacy policy, terms, account deletion URLs) at faizmarketing.in
// instead of any other domain. Everything the listing references lives here,
// so a single edit updates every page.

import { siteConfig } from "./config";

export const rewardNest = {
    appName: "RewardNest",
    tagline: "Spin • Quiz • Scratch • Earn",
    subtitle: "Spin, Quiz, Scratch & Earn Rewards",

    // Android package id, used for the Play Store link and app schema.
    packageId: "com.rewardnest.app",

    // Support inbox shown on every RewardNest page. Account deletion requests
    // and privacy questions land here, so it must stay a monitored mailbox.
    supportEmail: "contact@faizmarketing.in",

    // Section root on this site. Play Console URLs are built from it.
    basePath: "/rewardnest",

    lastUpdated: "August 2026",
};

// Canonical Play Store listing for the app.
export const playStoreUrl = `https://play.google.com/store/apps/details?id=${rewardNest.packageId}`;

// Absolute URL for a RewardNest page, e.g. https://faizmarketing.in/rewardnest/privacy
export function rewardNestUrl(path: "" | "/privacy" | "/terms" | "/delete-account" = "") {
    return `${siteConfig.siteUrl}${rewardNest.basePath}${path}`;
}

// Display form of the section URL, used in the "Contact" blocks.
export const rewardNestDisplayUrl = `${siteConfig.siteUrl.replace(
    /^https?:\/\//,
    "",
)}${rewardNest.basePath}`;

// mailto: link for support, with a pre-filled subject.
export function getRewardNestMailLink(subject?: string) {
    const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    return `mailto:${rewardNest.supportEmail}${query}`;
}

// The three legal pages, rendered as cards on the landing page and linked
// from the section footer.
export const rewardNestLegalPages = [
    {
        href: `${rewardNest.basePath}/privacy`,
        title: "Privacy Policy",
        description: "How we handle your data",
        icon: "shield" as const,
        accent: "sky" as const,
    },
    {
        href: `${rewardNest.basePath}/terms`,
        title: "Terms of Service",
        description: "Rules for using the app",
        icon: "document" as const,
        accent: "emerald" as const,
    },
    {
        href: `${rewardNest.basePath}/delete-account`,
        title: "Delete Account",
        description: "How to delete your data",
        icon: "trash" as const,
        accent: "rose" as const,
    },
];
