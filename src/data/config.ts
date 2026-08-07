// Central place to update contact details, social links, and brand info.

export const siteConfig = {
    brandName: "Faiz Marketing Agency",
    tagline: "Aapke Business ki Digital Growth Partner",

    // Production domain, used for metadata, sitemap and structured data.
    siteUrl: "https://faizmarketing.in",

    // WhatsApp number in international format (no +, spaces or dashes).
    whatsappNumber: "919058294333",
    whatsappDisplay: "+91 90582 94333",

    // Calling number.
    callNumber: "+919457280508",
    callDisplay: "+91 94572 80508",

    email: "contact@faizmarketing.in",
    address: "Saharanpur, Uttar Pradesh, India",
    social: {
        instagram: "https://www.instagram.com/faizmarketingagency",
    },
};

// Dedicated contact details for the App & Website Development category only.
// These services are delivered via RAOGY, so they route to RAOGY's own
// WhatsApp/email rather than the agency's regular numbers above.
export const devContact = {
    whatsappNumber: "917037380931",
    whatsappDisplay: "+91 70373 80931",
    email: "support@raogy.com",
    portfolioUrl: "https://raogy.com",
};

// Builds a wa.me link with a pre-filled message for a given service.
export function getWhatsAppLink(serviceName?: string) {
    const base = `https://wa.me/${siteConfig.whatsappNumber}`;
    const message = serviceName
        ? `Hi, mujhe "${serviceName}" service ke baare me jaankari chahiye.`
        : `Hi, mujhe apni digital marketing services ke baare me jaankari chahiye.`;
    return `${base}?text=${encodeURIComponent(message)}`;
}

// tel: link for the calling number.
export function getCallLink() {
    return `tel:${siteConfig.callNumber}`;
}

// wa.me link for the App & Website Development category (routes to RAOGY).
export function getDevWhatsAppLink(serviceName?: string) {
    const base = `https://wa.me/${devContact.whatsappNumber}`;
    const message = serviceName
        ? `Hi, mujhe "${serviceName}" ke baare me jaankari chahiye.`
        : `Hi, mujhe app/website development ke baare me jaankari chahiye.`;
    return `${base}?text=${encodeURIComponent(message)}`;
}

// mailto: link for the App & Website Development category (routes to RAOGY).
export function getDevMailLink(serviceName?: string) {
    const subject = serviceName
        ? `Enquiry: ${serviceName}`
        : "Enquiry: App / Website Development";
    return `mailto:${devContact.email}?subject=${encodeURIComponent(subject)}`;
}
