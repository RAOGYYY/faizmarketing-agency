import { ArrowRight } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/data/config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent font-display text-base font-bold text-accent-contrast sm:h-11 sm:w-11 sm:rounded-2xl sm:text-lg">
                        F
                    </span>
                    <span className="min-w-0 leading-tight">
                        <span className="block text-[13px] font-bold leading-tight tracking-tight text-foreground sm:text-xl">
                            {siteConfig.brandName}
                        </span>
                        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:block">
                            Digital Growth Partner
                        </span>
                    </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
                    <ThemeToggle />
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 rounded-full bg-accent px-3 py-2 text-[12px] font-semibold text-accent-contrast shadow-sm transition-colors hover:bg-accent-hover sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        <span className="sm:hidden">Contact</span>
                        <span className="hidden sm:inline">Contact Us</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </a>
                </div>
            </div>
        </header>
    );
}
