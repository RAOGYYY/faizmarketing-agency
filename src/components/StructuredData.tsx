import { siteConfig } from "@/data/config";
import { allServices } from "@/data/services";

/**
 * JSON-LD structured data so Google understands this as a real business
 * with a defined service catalogue. Rendered server-side, no client JS.
 */
export default function StructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.brandName,
        description:
            "Digital marketing agency offering social media growth, business reviews, promotion and branding services across India.",
        url: siteConfig.siteUrl,
        telephone: siteConfig.callNumber,
        email: siteConfig.email,
        address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
        },
        sameAs: [siteConfig.social.instagram],
        makesOffer: allServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: service.name,
                description: service.description,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            // Server-rendered JSON, not user input, so this is safe.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
