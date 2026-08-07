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
        <section className="px-4 py-12 text-center sm:py-16">
            <div className="fade-up mx-auto max-w-2xl">
                <h2 className="font-display text-xl font-semibold text-foreground sm:text-3xl">
                    Apni service pasand aa gayi?
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted sm:text-base">
                    Abhi contact karein, hum aapko poori jankari aur pricing bata denge.
                </p>

                <div className="mx-auto mt-7 flex max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row">
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all hover:bg-[#1eb955] active:scale-[0.98]"
                    >
                        <MessageCircle className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                        {siteConfig.whatsappDisplay}
                    </a>

                    <a
                        href={getCallLink()}
                        className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-contrast shadow-md shadow-accent/20 transition-all hover:bg-accent-hover active:scale-[0.98]"
                    >
                        <Phone className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                        {siteConfig.callDisplay}
                    </a>
                </div>

                <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="rounded-xl border border-line bg-surface px-2 py-4"
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
