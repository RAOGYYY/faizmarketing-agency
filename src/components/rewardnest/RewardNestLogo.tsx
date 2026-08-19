import { Coins } from "lucide-react";

const sizes = {
    sm: { box: "h-9 w-9 rounded-xl", icon: "h-5 w-5" },
    md: { box: "h-11 w-11 rounded-xl", icon: "h-6 w-6" },
    lg: { box: "h-14 w-14 rounded-2xl", icon: "h-8 w-8" },
};

/**
 * RewardNest mark: a coin glyph on the app's emerald-to-amber gradient.
 * Decorative only, so it is hidden from assistive tech.
 */
export default function RewardNestLogo({
    size = "md",
}: {
    size?: keyof typeof sizes;
}) {
    const s = sizes[size];

    return (
        <span
            aria-hidden="true"
            className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-emerald-500 to-amber-400 text-white shadow-md shadow-emerald-500/25 ${s.box}`}
        >
            <Coins className={s.icon} strokeWidth={2.2} />
        </span>
    );
}
