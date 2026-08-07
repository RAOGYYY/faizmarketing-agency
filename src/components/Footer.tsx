import {
    Instagram,
    Facebook,
    Youtube,
    Phone,
    Mail,
    MapPin,
    MessageCircle,
} from "lucide-react";
import { siteConfig, getWhatsAppLink, getCallLink } from "@/data/config";

export default function Footer() {
    const socials = [
        { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
        { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
        { href: siteConfig.social.youtube, label: "YouTube", Icon: Youtube },
    ];

    return (
        <footer className="mt-6 border-t border-line bg-surface-muted/60 px-4 py-12 backdrop-blur-sm sm:px-6 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
                <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent font-display text-lg font-bold text-accent-contrast shadow-md shadow-accent/25">
                    F
                </span>

                <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    {siteConfig.brandName}
                </p>
                <div className="accent-rule mx-auto my-4 w-20" />
                <p className="text-[13px] text-muted sm:text-sm">{siteConfig.tagline}</p>

                <div className="mx-auto mt-7 grid max-w-lg gap-2.5 sm:grid-cols-2">
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[13px] font-semibold text-white shadow-md shadow-[#25D366]/25 transition-colors hover:bg-[#1eb955]"
                    >
                        <MessageCircle className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                        WhatsApp: {siteConfig.whatsappDisplay}
                    </a>

                    <a
                        href={getCallLink()}
                        className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-[13px] font-semibold text-accent-contrast shadow-md shadow-accent/25 transition-colors hover:bg-accent-hover"
                    >
                        <Phone className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                        Call: {siteConfig.callDisplay}
                    </a>
                </div>

                <div className="mt-8 flex flex-col items-center gap-2.5 text-[13px] text-muted sm:flex-row sm:justify-center sm:gap-7 sm:text-sm">
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center gap-2 transition-colors hover:text-accent"
                    >
                        <Mail className="h-3.5 w-3.5" /> {siteConfig.email}
                    </a>
                    <span className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" /> {siteConfig.address}
                    </span>
                </div>

                <div className="mt-7 flex items-center justify-center gap-3">
                    {socials.map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>

                <p className="mt-8 text-[11px] text-muted/70">
                    © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
