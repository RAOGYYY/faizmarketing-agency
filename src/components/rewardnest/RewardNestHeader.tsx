import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import RewardNestLogo from "./RewardNestLogo";
import { rewardNest } from "@/data/rewardnest";

/**
 * Sticky header for every page under /rewardnest. Keeps the agency's
 * theme toggle so dark mode still works inside the app section.
 */
export default function RewardNestHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:px-6 sm:py-3.5">
                <Link
                    href="/rewardnest"
                    className="flex min-w-0 items-center gap-2.5 sm:gap-3"
                >
                    <RewardNestLogo size="sm" />
                    <span className="min-w-0 leading-tight">
                        <span className="block text-[15px] font-bold leading-tight tracking-tight text-foreground sm:text-lg">
                            {rewardNest.appName}
                        </span>
                        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400 sm:block">
                            {rewardNest.tagline}
                        </span>
                    </span>
                </Link>

                <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
                    <ThemeToggle />
                    <Link
                        href="/"
                        className="group flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-2 text-[12px] font-semibold text-muted transition-colors hover:border-accent hover:text-accent sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                        <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
                        <span className="hidden sm:inline">Main Site</span>
                        <span className="sm:hidden">Site</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
