import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import RewardNestLogo from "./RewardNestLogo";
import {
    rewardNest,
    rewardNestLegalPages,
    rewardNestDisplayUrl,
    getRewardNestMailLink,
} from "@/data/rewardnest";
import { siteConfig } from "@/data/config";

/**
 * Footer for every page under /rewardnest. Repeats the three legal links so
 * a Play Store reviewer can reach them from any page.
 */
export default function RewardNestFooter() {
    return (
        <footer className="mt-12 border-t border-line bg-surface-muted/60 px-4 py-10 backdrop-blur-sm sm:px-6 sm:py-12">
            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
                <div>
                    <div className="flex items-center gap-2.5">
                        <RewardNestLogo size="sm" />
                        <span className="text-base font-bold text-foreground">
                            {rewardNest.appName}
                        </span>
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted">
                        A free-to-play rewards app where you earn virtual coins through fun
                        daily activities.
                    </p>
                </div>

                <div>
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                        Legal
                    </h2>
                    <ul className="mt-3 space-y-2 text-[13px] text-muted">
                        {rewardNestLegalPages.map((page) => (
                            <li key={page.href}>
                                <Link
                                    href={page.href}
                                    className="transition-colors hover:text-accent"
                                >
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                        Contact
                    </h2>
                    <ul className="mt-3 space-y-2 text-[13px] text-muted">
                        <li>
                            <a
                                href={getRewardNestMailLink("RewardNest Support")}
                                className="flex items-center gap-2 break-all transition-colors hover:text-accent"
                            >
                                <Mail className="h-3.5 w-3.5 shrink-0" />
                                {rewardNest.supportEmail}
                            </a>
                        </li>
                        <li className="flex items-center gap-2 break-all">
                            <Globe className="h-3.5 w-3.5 shrink-0" />
                            {rewardNestDisplayUrl}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-9 max-w-4xl border-t border-line pt-6 text-center">
                <p className="text-[11px] text-muted/70">
                    © {new Date().getFullYear()} {rewardNest.appName}. All rights reserved.
                </p>
                <p className="mt-1.5 text-[11px] text-muted/70">
                    Published on{" "}
                    <Link
                        href="/"
                        className="font-semibold text-accent transition-colors hover:text-accent-hover"
                    >
                        {siteConfig.brandName}
                    </Link>
                </p>
            </div>
        </footer>
    );
}
