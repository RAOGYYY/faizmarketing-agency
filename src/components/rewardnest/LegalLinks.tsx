import Link from "next/link";
import { ShieldCheck, FileText, Trash2 } from "lucide-react";
import { rewardNestLegalPages } from "@/data/rewardnest";
import type { Tone } from "./PolicyBlocks";

const icons = {
    shield: ShieldCheck,
    document: FileText,
    trash: Trash2,
};

const solidTone: Record<Tone, string> = {
    emerald: "bg-emerald-500 text-white",
    amber: "bg-amber-500 text-white",
    rose: "bg-rose-500 text-white",
    sky: "bg-sky-500 text-white",
    indigo: "bg-indigo-500 text-white",
};

/**
 * Cards linking the three RewardNest legal pages. Pass `exclude` with the
 * current page's path so a page never links to itself.
 */
export default function LegalLinks({
    exclude,
    columns = 3,
}: {
    exclude?: string;
    columns?: 2 | 3;
}) {
    const pages = rewardNestLegalPages.filter((page) => page.href !== exclude);

    return (
        <div
            className={`grid gap-4 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
                }`}
        >
            {pages.map((page) => {
                const Icon = icons[page.icon];

                return (
                    <Link
                        key={page.href}
                        href={page.href}
                        className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                    >
                        <span
                            aria-hidden="true"
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${solidTone[page.accent]
                                }`}
                        >
                            <Icon className="h-5 w-5" />
                        </span>
                        <span>
                            <span className="block text-[15px] font-bold text-foreground transition-colors group-hover:text-accent">
                                {page.title}
                            </span>
                            <span className="mt-0.5 block text-[13px] text-muted">
                                {page.description}
                            </span>
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
