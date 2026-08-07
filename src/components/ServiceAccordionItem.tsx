"use client";

import { useRef, type CSSProperties, type SyntheticEvent } from "react";
import {
    Check,
    Clock,
    ChevronDown,
    MessageCircle,
    Phone,
    Mail,
    ExternalLink,
    BadgeCheck,
} from "lucide-react";
import type { Service } from "@/data/services";
import {
    getWhatsAppLink,
    getCallLink,
    getDevWhatsAppLink,
    getDevMailLink,
    siteConfig,
    devContact,
} from "@/data/config";
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

    const detailsRef = useRef<HTMLDetailsElement>(null);

    // When a row opens, bring it fully into view so the visitor doesn't
    // have to manually scroll down to see the expanded content.
    const handleToggle = (e: SyntheticEvent<HTMLDetailsElement>) => {
        if (e.currentTarget.open) {
            // Wait one frame so the expanded height is already laid out.
            requestAnimationFrame(() => {
                detailsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        }
    };

    return (
        <details
            ref={detailsRef}
            onToggle={handleToggle}
            className="svc-row group scroll-mt-20 overflow-hidden rounded-xl"
            style={colorVars}
        >
            <summary className="flex cursor-pointer list-none items-stretch gap-0 [&::-webkit-details-marker]:hidden">
                {/* Numbered gradient tile */}
                <span className="svc-grad flex w-9 shrink-0 items-center justify-center font-display text-xs font-bold text-white sm:w-14 sm:text-base">
                    {String(index).padStart(2, "0")}
                </span>

                <span className="flex min-w-0 flex-1 items-center gap-2.5 py-2.5 pl-2.5 pr-2.5 sm:gap-4 sm:py-3.5 sm:pl-4 sm:pr-4">
                    {/* Circular icon badge */}
                    <span className="svc-grad flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm sm:h-11 sm:w-11">
                        <ServiceIcon
                            name={service.icon}
                            className="h-4.5 w-4.5 sm:h-5 sm:w-5"
                            strokeWidth={2.2}
                        />
                    </span>

                    <span className="min-w-0 flex-1">
                        <span className="flex items-start gap-1">
                            <h3 className="text-[13px] font-semibold leading-snug text-foreground sm:text-[15px]">
                                {service.name}
                            </h3>
                            <BadgeCheck
                                className="svc-text mt-0.5 h-3.5 w-3.5 shrink-0 sm:mt-[3px] sm:h-4 sm:w-4"
                                strokeWidth={2.5}
                            />
                        </span>
                        <span className="mt-0.5 hidden truncate text-[13px] text-muted sm:block">
                            {service.short}
                        </span>
                    </span>

                    {/* Large faded watermark icon (desktop only) */}
                    <span className="svc-text hidden shrink-0 opacity-[0.12] lg:block">
                        <ServiceIcon name={service.icon} className="h-14 w-14" strokeWidth={1.6} />
                    </span>

                    {/* Circular chevron button */}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-muted transition-transform duration-200 group-open:rotate-180 sm:h-8 sm:w-8">
                        <ChevronDown className="svc-text h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
                    </span>
                </span>
            </summary>

            {/* Expanded detail */}
            <div className="reveal-down svc-divider border-t bg-surface px-3.5 pb-4 pt-3.5 sm:px-5 sm:pb-5 sm:pt-4">
                {/* Short description repeated here for mobile, where the summary row hides it */}
                <p className="mb-2.5 text-[13px] text-muted sm:hidden">{service.short}</p>

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

                    {service.isDev ? (
                        <>
                            {/* App & Website Development routes to RAOGY's dedicated contact */}
                            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                                <a
                                    href={getDevWhatsAppLink(service.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#1eb955] active:scale-[0.98]"
                                >
                                    <MessageCircle
                                        className="h-4 w-4 shrink-0"
                                        fill="currentColor"
                                        strokeWidth={0}
                                    />
                                    WhatsApp: {devContact.whatsappDisplay}
                                </a>

                                <a
                                    href={getDevMailLink(service.name)}
                                    className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-[13px] font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-hover active:scale-[0.98]"
                                >
                                    <Mail className="h-4 w-4 shrink-0" />
                                    {devContact.email}
                                </a>
                            </div>

                            <a
                                href={devContact.portfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="svc-tint mt-2.5 flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-semibold text-foreground transition-all hover:opacity-90 active:scale-[0.98]"
                            >
                                Portfolio Dekhein: raogy.com
                                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                            </a>
                        </>
                    ) : (
                        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                            <a
                                href={getWhatsAppLink(service.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#1eb955] active:scale-[0.98]"
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
                                className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-[13px] font-semibold text-accent-contrast shadow-sm transition-all hover:bg-accent-hover active:scale-[0.98]"
                            >
                                <Phone className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                                Call: {siteConfig.callDisplay}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </details>
    );
}
