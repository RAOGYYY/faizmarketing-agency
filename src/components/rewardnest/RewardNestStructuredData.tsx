import { siteConfig } from "@/data/config";
import { rewardNest, playStoreUrl, rewardNestUrl } from "@/data/rewardnest";

/**
 * JSON-LD for the RewardNest listing so search engines tie this page to the
 * Play Store app rather than to the agency's own service catalogue.
 */
export default function RewardNestStructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: `${rewardNest.appName} — ${rewardNest.subtitle}`,
        url: rewardNestUrl(),
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
        },
        downloadUrl: playStoreUrl,
        installUrl: playStoreUrl,
        publisher: {
            "@type": "Organization",
            name: siteConfig.brandName,
            url: siteConfig.siteUrl,
            email: rewardNest.supportEmail,
        },
    };

    return (
        <script
            type="application/ld+json"
            // Server-rendered JSON from local config, not user input.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
