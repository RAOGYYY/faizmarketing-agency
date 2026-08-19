import { playStoreUrl } from "@/data/rewardnest";

/**
 * "Get it on Google Play" call to action. The glyph is inlined because
 * lucide-react does not ship a Play Store mark.
 */
export default function GooglePlayButton() {
    return (
        <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-emerald-500/25 transition-colors hover:from-emerald-600 hover:to-emerald-700 sm:text-base"
        >
            <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Get it on Google Play
        </a>
    );
}
