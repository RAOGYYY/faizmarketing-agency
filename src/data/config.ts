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
    address: "Your City, India",
    social: {
        instagram: "https://instagram.com/",
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/",
    },
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
