import { siteConfig } from "@/data/config";

/**
 * Short intro sitting right above the services list, so the list itself
 * is the first meaningful thing a visitor sees and scrolls into.
 */
export default function IntroBanner() {
    return (
        <section className="px-4 pb-6 pt-8 text-center sm:pb-8 sm:pt-12">
            <div className="fade-up mx-auto max-w-2xl">
                <p className="mb-3 inline-block rounded-full border border-line-strong bg-surface px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs">
                    Digital Marketing &amp; Business Growth
                </p>
                <h1 className="font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                    {siteConfig.tagline}
                </h1>
                <p className="mx-auto mt-2.5 max-w-lg text-[13px] text-muted sm:text-base">
                    Apni zarurat ki service neeche chunein aur turant jankari payein.
                </p>
            </div>
        </section>
    );
}
