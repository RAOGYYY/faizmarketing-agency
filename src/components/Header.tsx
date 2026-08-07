import { ArrowRight } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/data/config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 font-display text-lg font-bold text-white shadow-lg shadow-indigo-500/25 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                        F
                    </span>
                    <span className="min-w-0">
                        <span className="block truncate font-display text-[17px] font-bold tracking-tight text-foreground sm:text-2xl">
                            {siteConfig.brandName}
                        </span>
                        <span className="block truncate text-[9px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-[11px]">
                            Digital Growth Partner
                        </span>
                    </span>
                </div>

                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <ThemeToggle />
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:brightness-110 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                    >
                        Contact Us
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
                    </a>
                </div>
            </div>
        </header>
    );
}
