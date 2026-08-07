import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, getWhatsAppLink, getCallLink } from "@/data/config";
import { allServices } from "@/data/services";

export default function Hero() {
    const stats = [
        { value: `${allServices.length}+`, label: "Services" },
        { value: "24×7", label: "Support" },
        { value: "Fast", label: "Delivery" },
    ];

    return (
        <section className="px-4 py-14 text-center sm:px-6 sm:py-24">
            <div className="fade-up mx-auto max-w-3xl">
                <p className="mb-6 inline-block rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">
                    Digital Marketing &amp; Business Growth
                </p>

                <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {siteConfig.brandName}
                </h1>

                <div className="accent-rule mx-auto my-6 w-28" />

                <p className="text-base text-muted sm:text-xl">{siteConfig.tagline}</p>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    Social Media Growth, Business Reviews, Promotions aur Digital Branding
                    — sab ek hi jagah. Neeche apni zarurat ki service chunein aur turant
                    jankari payein.
                </p>

                <div className="mx-auto mt-9 flex max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row">
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#1eb955] active:scale-[0.98]"
                    >
                        <MessageCircle className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                        {siteConfig.whatsappDisplay}
                    </a>

                    <a
                        href={getCallLink()}
                        className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-contrast shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover active:scale-[0.98]"
                    >
                        <Phone className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                        {siteConfig.callDisplay}
                    </a>
                </div>

                <a
                    href="#services"
                    className="mt-4 inline-block text-sm font-semibold text-accent underline-offset-4 transition-colors hover:underline"
                >
                    Saari Services Dekhein ↓
                </a>

                <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-3">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="rounded-xl border border-line bg-surface/70 px-2 py-4 backdrop-blur-sm"
                        >
                            <p className="font-display text-xl font-semibold text-accent sm:text-2xl">
                                {s.value}
                            </p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted sm:text-xs">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
