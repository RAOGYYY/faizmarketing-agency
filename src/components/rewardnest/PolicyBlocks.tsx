import type { ReactNode } from "react";

/**
 * Shared building blocks for the RewardNest legal pages (privacy, terms,
 * account deletion). All colours are written as light + dark pairs so the
 * pages stay readable with the site's theme toggle.
 */

export type Tone = "emerald" | "amber" | "rose" | "sky" | "indigo";

const solidTone: Record<Tone, string> = {
    emerald: "bg-emerald-500 text-white",
    amber: "bg-amber-500 text-white",
    rose: "bg-rose-500 text-white",
    sky: "bg-sky-500 text-white",
    indigo: "bg-indigo-500 text-white",
};

const softTone: Record<Tone, string> = {
    emerald: "bg-emerald-50 dark:bg-emerald-500/10",
    amber: "bg-amber-50 dark:bg-amber-500/10",
    rose: "bg-rose-50 dark:bg-rose-500/10",
    sky: "bg-sky-50 dark:bg-sky-500/10",
    indigo: "bg-indigo-50 dark:bg-indigo-500/10",
};

const edgeTone: Record<Tone, string> = {
    emerald: "border-emerald-500",
    amber: "border-amber-500",
    rose: "border-rose-500",
    sky: "border-sky-500",
    indigo: "border-indigo-500",
};

const markTone: Record<Tone, string> = {
    emerald: "text-emerald-600 dark:text-emerald-400",
    amber: "text-amber-600 dark:text-amber-400",
    rose: "text-rose-600 dark:text-rose-400",
    sky: "text-sky-600 dark:text-sky-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
};

/** The white card that wraps a group of policy sections. */
export function PolicyCard({ children }: { children: ReactNode }) {
    return (
        <div className="space-y-9 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:space-y-11 sm:p-8">
            {children}
        </div>
    );
}

/** A numbered policy section with a heading and free-form body. */
export function PolicySection({
    step,
    title,
    tone = "emerald",
    children,
}: {
    step: number;
    title: string;
    tone?: Tone;
    children: ReactNode;
}) {
    return (
        <section>
            <h2 className="mb-4 flex items-center gap-2.5 text-lg font-bold text-foreground sm:text-xl">
                <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:h-8 sm:w-8 sm:text-sm ${solidTone[tone]}`}
                >
                    {step}
                </span>
                {title}
            </h2>
            <div className="space-y-3 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                {children}
            </div>
        </section>
    );
}

/** Tinted box with a coloured left edge, for emphasis inside a section. */
export function Callout({
    tone = "emerald",
    children,
}: {
    tone?: Tone;
    children: ReactNode;
}) {
    return (
        <div
            className={`space-y-2.5 rounded-r-lg border-l-4 p-4 text-[14px] leading-relaxed text-foreground sm:text-[15px] ${edgeTone[tone]} ${softTone[tone]}`}
        >
            {children}
        </div>
    );
}

/** Single-line list item with a coloured marker. */
export function Row({
    tone = "emerald",
    marker = "•",
    soft = false,
    children,
}: {
    tone?: Tone;
    marker?: string;
    soft?: boolean;
    children: ReactNode;
}) {
    return (
        <li
            className={`flex items-start gap-3 rounded-lg p-3 text-[14px] leading-relaxed text-foreground sm:text-[15px] ${soft ? softTone[tone] : "bg-surface-muted"
                }`}
        >
            <span
                aria-hidden="true"
                className={`shrink-0 font-bold ${markTone[tone]}`}
            >
                {marker}
            </span>
            <span>{children}</span>
        </li>
    );
}

/** List item with a bolded label above its explanation. */
export function DetailRow({
    tone = "emerald",
    marker = "✓",
    label,
    children,
}: {
    tone?: Tone;
    marker?: string;
    label: string;
    children: ReactNode;
}) {
    return (
        <li className="flex items-start gap-3 rounded-lg bg-surface-muted p-4">
            <span
                aria-hidden="true"
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${solidTone[tone]}`}
            >
                {marker}
            </span>
            <span>
                <strong className="block text-[14px] font-semibold text-foreground sm:text-[15px]">
                    {label}
                </strong>
                <span className="mt-1 block text-[13px] leading-relaxed text-muted sm:text-[14px]">
                    {children}
                </span>
            </span>
        </li>
    );
}

/** Numbered step, used for the in-app account deletion walkthrough. */
export function StepRow({
    step,
    tone = "emerald",
    label,
    children,
}: {
    step: number;
    tone?: Tone;
    label: string;
    children: ReactNode;
}) {
    return (
        <li
            className={`flex items-start gap-3 rounded-lg p-4 ${tone === "rose" ? `${softTone.rose} border border-rose-500/25` : "bg-surface-muted"
                }`}
        >
            <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${solidTone[tone]}`}
            >
                {step}
            </span>
            <span>
                <strong className="block text-[14px] font-semibold text-foreground sm:text-[15px]">
                    {label}
                </strong>
                <span className="mt-1 block text-[13px] leading-relaxed text-muted sm:text-[14px]">
                    {children}
                </span>
            </span>
        </li>
    );
}

/** Plain unordered wrapper that drops the default bullets. */
export function RowList({ children }: { children: ReactNode }) {
    return <ul className="grid gap-2.5">{children}</ul>;
}
