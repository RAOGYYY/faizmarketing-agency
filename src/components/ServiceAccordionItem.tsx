import type { CSSProperties } from "react";
import {
    Check,
    Clock,
    ChevronDown,
    MessageCircle,
    Phone,
    BadgeCheck,
} from "lucide-react";
import type { Service } from "@/data/services";
import { getWhatsAppLink, getCallLink, siteConfig } from "@/data/config";
import ServiceIcon from "./ServiceIcon";

type Props = {
    service: Service;
    index: number;
};

export default function ServiceAccordionItem({ service, index }: Props) {
    // Drives every tint/gradient in this row via CSS (see globals.css).
    const colorVars = {
        "--svc": service.color[0],
        "--svc-2": service.color[1],
    } as CSSProperties;

    return (
        <details className="svc-row group overflow-hidden rounded-2xl" style={colorVars}>
            <summary className="flex cursor-pointer list-none items-stretch gap-0 [&::-webkit-details-marker]:hidden">
                {/* Numbered gradient tile */}
                <span className="svc-grad flex w-12 shrink-0 items-center justify-center font-display text-sm font-bold text-white sm:w-16 sm:text-lg">
                    {String(index).padStart(2, "0")}
                </span>

                <span className="flex min-w-0 flex-1 items-center gap-3 py-3 pl-3 pr-3 sm:gap-4 sm:py-4 sm:pl-4">
                    {/* Circular icon badge */}
                    <span className="svc-grad flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-md sm:h-12 sm:w-12">
                        <ServiceIcon
                            name={service.icon}
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            strokeWidth={2.2}
                        />
                    </span>

                    <span className="min-w-0 flex-1 border-l border-black/5 pl-3 dark:border-white/10 sm:pl-4">
                        <span className="flex items-center gap-1.5">
                            <span className="truncate text-[14px] font-bold tracking-tight text-foreground sm:text-[16px]">
                                {service.name}
                            </span>
                            <BadgeCheck
                                className="svc-text h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]"
                                strokeWidth={2.5}
                            />
                        </span>
                        <span className="mt-0.5 block truncate text-[12px] text-muted sm:text-[13.5px]">
                            {service.short}
                        </span>
                    </span>

                    {/* Large faded watermark icon (desktop only) */}
                    <span className="svc-text hidden shrink-0 opacity-[0.13] lg:block">
                        <ServiceIcon name={service.icon} className="h-16 w-16" strokeWidth={1.6} />
                    </span>

                    {/* Circular chevron button */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface shadow-md ring-1 ring-black/5 transition-transform duration-200 group-open:rotate-180 dark:ring-white/10 sm:h-9 sm:w-9">
                        <ChevronDown className="svc-text h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.5} />
                    </span>
                </span>
            </summary>

            {/* Expanded detail */}
            <div className="reveal-down svc-divider border-t bg-surface px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
                <p className="text-[13.5px] leading-relaxed text-foreground/80 sm:text-[15px]">
                    {service.description}
                </p>

                <p className="svc-text mt-4 text-[11px] font-bold uppercase tracking-[0.14em]">
                    Fayde
                </p>
                <ul className="mt-2.5 grid gap-2 sm:grid-cols-2 sm:gap-2.5">
                    {service.benefits.map((b) => (
                        <li
                            key={b}
                            className="svc-tint flex items-start gap-2 rounded-lg px-3 py-2 text-[13px] font-medium text-foreground sm:text-sm"
                        >
                            <Check
                                className="svc-text mt-[3px] h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                                strokeWidth={3}
                            />
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>

                <div className="svc-divider mt-4 border-t pt-4">
                    <span className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/75">
                        <Clock className="svc-text h-4 w-4 shrink-0" />
                        Delivery: {service.delivery}
                    </span>

                    <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        <a
                            href={getWhatsAppLink(service.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[13px] font-semibold text-white shadow-md shadow-[#25D366]/25 transition-all hover:bg-[#1eb955] active:scale-[0.98]"
                        >
                            <MessageCircle
                                className="h-4 w-4 shrink-0"
                                fill="currentColor"
                                strokeWidth={0}
                            />
                            WhatsApp: {siteConfig.whatsappDisplay}
                        </a>

                        <a
                            href={getCallLink()}
                            className="svc-grad flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[13px] font-semibold text-white shadow-md transition-all hover:brightness-110 active:scale-[0.98]"
                        >
                            <Phone className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                            Call: {siteConfig.callDisplay}
                        </a>
                    </div>
                </div>
            </div>
        </details>
    );
}
