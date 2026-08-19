import type { Metadata } from "next";
import {
    RefreshCw,
    Lightbulb,
    Calculator,
    Ticket,
    CircleDollarSign,
    Users,
    Target,
    Info,
} from "lucide-react";
import GooglePlayButton from "@/components/rewardnest/GooglePlayButton";
import LegalLinks from "@/components/rewardnest/LegalLinks";
import RewardNestStructuredData from "@/components/rewardnest/RewardNestStructuredData";
import { rewardNest } from "@/data/rewardnest";

const title = `${rewardNest.appName} — Spin, Quiz, Scratch & Earn Rewards`;
const description =
    "RewardNest is a free-to-play rewards app where you earn virtual coins through fun daily activities like spinning wheels, quizzes, scratch cards, and referrals.";

export const metadata: Metadata = {
    // Absolute title so the section template does not append the app name twice.
    title: { absolute: title },
    description,
    keywords: [
        "rewards app",
        "earn coins",
        "spin wheel",
        "quiz app",
        "scratch card",
        "referral bonus",
        "free rewards",
        "loyalty app",
        rewardNest.appName,
    ],
    alternates: {
        canonical: rewardNest.basePath,
    },
    openGraph: {
        type: "website",
        url: rewardNest.basePath,
        title,
        description:
            "Earn virtual coins through fun daily activities. Spin the wheel, answer quizzes, scratch cards, and refer friends!",
    },
};

const stats = [
    { value: "500+", label: "Quiz Questions", tone: "text-emerald-600 dark:text-emerald-400" },
    { value: "3", label: "Free Spins/Day", tone: "text-amber-600 dark:text-amber-400" },
    { value: "5+", label: "Mini Games", tone: "text-indigo-600 dark:text-indigo-400" },
    { value: "∞", label: "Referral Bonus", tone: "text-pink-600 dark:text-pink-400" },
];

const features = [
    {
        icon: RefreshCw,
        title: "Spin the Wheel",
        body: "Get 3 free spins every day! Spin the colorful wheel and earn coins based on where it lands. Watch ads for bonus spins.",
        badge: "bg-emerald-500",
        card: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/20",
    },
    {
        icon: Lightbulb,
        title: "Word Quiz",
        body: "Test your knowledge with 500+ questions across Spelling, GK, History, Science, Sports, and more. Earn coins for correct answers!",
        badge: "bg-amber-500",
        card: "bg-amber-50 dark:bg-amber-500/10 border-amber-500/20",
    },
    {
        icon: Calculator,
        title: "Math Quiz",
        body: "Solve quick math problems against the clock. The faster you answer correctly, the more coins you earn!",
        badge: "bg-indigo-500",
        card: "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-500/20",
    },
    {
        icon: Ticket,
        title: "Scratch Cards",
        body: "Scratch the card to reveal your prize! Get daily scratch cards and uncover hidden coin rewards.",
        badge: "bg-pink-500",
        card: "bg-pink-50 dark:bg-pink-500/10 border-pink-500/20",
    },
    {
        icon: CircleDollarSign,
        title: "Coin Toss",
        body: "Choose heads or tails and test your luck! A fun mini-game to earn bonus coins throughout the day.",
        badge: "bg-cyan-500",
        card: "bg-cyan-50 dark:bg-cyan-500/10 border-cyan-500/20",
    },
    {
        icon: Users,
        title: "Refer & Earn",
        body: "Share your unique referral code with friends. Both you and your friend earn bonus coins when they sign up!",
        badge: "bg-purple-500",
        card: "bg-purple-50 dark:bg-purple-500/10 border-purple-500/20",
    },
];

const steps = [
    { title: "Download", body: "Get RewardNest free from Google Play Store", badge: "bg-emerald-500" },
    { title: "Sign In", body: "Quick sign-in with your Google account", badge: "bg-amber-500" },
    { title: "Play & Earn", body: "Complete activities to earn virtual coins", badge: "bg-indigo-500" },
    { title: "Redeem", body: "Submit redemption request when eligible", badge: "bg-pink-500" },
];

export default function RewardNestPage() {
    return (
        <>
            <RewardNestStructuredData />

            {/* Hero */}
            <section className="px-4 pb-10 pt-10 text-center sm:px-6 sm:pb-14 sm:pt-16">
                <div className="fade-up mx-auto max-w-3xl">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400 sm:text-xs">
                        <Target className="h-3.5 w-3.5" />
                        Free-to-Play Rewards App
                    </p>
                    <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                        Earn Coins Through{" "}
                        <span className="text-emerald-600 dark:text-emerald-400">
                            Fun Activities
                        </span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-muted sm:text-lg">
                        Spin the wheel, answer quizzes, scratch cards, play mini-games, and
                        refer friends — all to build up your coin balance and redeem
                        rewards!
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <GooglePlayButton />
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center rounded-xl border border-line-strong bg-surface px-6 py-3.5 text-[14px] font-semibold text-foreground shadow-sm transition-colors hover:border-accent hover:text-accent sm:text-base"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="px-4 sm:px-6">
                <dl className="mx-auto grid max-w-3xl grid-cols-2 gap-5 rounded-2xl border border-line bg-surface p-5 text-center shadow-sm sm:grid-cols-4 sm:p-6">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <dd className={`text-2xl font-bold sm:text-3xl ${stat.tone}`}>
                                {stat.value}
                            </dd>
                            <dt className="mt-1 text-[12px] text-muted sm:text-[13px]">
                                {stat.label}
                            </dt>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Features */}
            <section id="features" className="scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        Ways to Earn Coins
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-center text-[14px] text-muted sm:text-base">
                        Complete fun daily activities to earn virtual coins. No purchase
                        required — just play and earn!
                    </p>

                    <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <li
                                    key={feature.title}
                                    className={`rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md ${feature.card}`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${feature.badge}`}
                                    >
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <h3 className="text-[16px] font-bold text-foreground sm:text-lg">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                                        {feature.body}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* How it works */}
            <section className="border-y border-line bg-surface-muted/50 px-4 py-14 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        How It Works
                    </h2>
                    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <li key={step.title} className="text-center">
                                <span
                                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg ${step.badge}`}
                                >
                                    {index + 1}
                                </span>
                                <h3 className="text-[15px] font-bold text-foreground sm:text-base">
                                    {step.title}
                                </h3>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                                    {step.body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Important information */}
            <section className="px-4 py-14 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-8">
                    <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        <span
                            aria-hidden="true"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white"
                        >
                            <Info className="h-5 w-5" />
                        </span>
                        Important Information
                    </h2>
                    <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                        <p>
                            <strong className="font-semibold text-foreground">
                                Virtual Coins:
                            </strong>{" "}
                            Coins earned in {rewardNest.appName} are virtual in-app credits
                            with no intrinsic monetary value. They cannot be purchased with
                            real money.
                        </p>
                        <p>
                            <strong className="font-semibold text-foreground">
                                Redemption:
                            </strong>{" "}
                            Redemption requests are subject to manual review and approval.
                            Processing may take 7–14 business days. We reserve the right to
                            reject requests due to suspected fraud or policy violations.
                        </p>
                        <p>
                            <strong className="font-semibold text-foreground">
                                Not Gambling:
                            </strong>{" "}
                            {rewardNest.appName} is a loyalty/rewards program and does not
                            constitute gambling. There is no purchase required to
                            participate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Legal */}
            <section className="px-4 pb-4 sm:px-6">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        Legal &amp; Policies
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-center text-[14px] text-muted sm:text-base">
                        The official policy pages for the {rewardNest.appName} Android app.
                    </p>
                    <div className="mt-8">
                        <LegalLinks />
                    </div>
                </div>
            </section>
        </>
    );
}
