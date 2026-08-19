import { rewardNest } from "@/data/rewardnest";
import type { Tone } from "./PolicyBlocks";

const titleTone: Record<Tone, string> = {
    emerald: "text-emerald-600 dark:text-emerald-400",
    amber: "text-amber-600 dark:text-amber-400",
    rose: "text-rose-600 dark:text-rose-400",
    sky: "text-sky-600 dark:text-sky-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
};

const badgeTone: Record<Tone, string> = {
    emerald:
        "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/12 dark:text-emerald-300",
    amber: "bg-amber-50 text-amber-700 dark:bg-amber-500/12 dark:text-amber-300",
    rose: "bg-rose-50 text-rose-700 dark:bg-rose-500/12 dark:text-rose-300",
    sky: "bg-sky-50 text-sky-700 dark:bg-sky-500/12 dark:text-sky-300",
    indigo:
        "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/12 dark:text-indigo-300",
};

/** Title card at the top of each RewardNest legal page. */
export default function PolicyPageHeader({
    title,
    badge,
    tone = "emerald",
    lastUpdated = rewardNest.lastUpdated,
}: {
    title: string;
    badge: string;
    tone?: Tone;
    lastUpdated?: string;
}) {
    return (
        <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-8">
            <h1
                className={`font-display text-2xl font-semibold tracking-tight sm:text-4xl ${titleTone[tone]}`}
            >
                {title}
            </h1>
            <p className="mt-2 text-[14px] text-muted sm:text-base">
                {rewardNest.appName} — {rewardNest.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-muted sm:text-[13px]">
                <span
                    className={`rounded-full px-3 py-1 font-semibold ${badgeTone[tone]}`}
                >
                    {badge}
                </span>
                <span>Last Updated: {lastUpdated}</span>
            </div>
        </div>
    );
}
