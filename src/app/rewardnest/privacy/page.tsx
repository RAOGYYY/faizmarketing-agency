import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import PolicyPageHeader from "@/components/rewardnest/PolicyPageHeader";
import LegalLinks from "@/components/rewardnest/LegalLinks";
import {
    PolicyCard,
    PolicySection,
    Callout,
    Row,
    DetailRow,
    RowList,
} from "@/components/rewardnest/PolicyBlocks";
import {
    rewardNest,
    rewardNestDisplayUrl,
    getRewardNestMailLink,
} from "@/data/rewardnest";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy Policy for the RewardNest mobile application - Learn how we collect, use, and protect your data.",
    alternates: {
        canonical: `${rewardNest.basePath}/privacy`,
    },
    openGraph: {
        type: "article",
        url: `${rewardNest.basePath}/privacy`,
        title: `Privacy Policy | ${rewardNest.appName}`,
        description:
            "How RewardNest collects, uses, and protects your data, and how to exercise your privacy rights.",
    },
};

const thirdParties = [
    {
        initial: "S",
        name: "Supabase",
        body: "Database & authentication",
        href: "https://supabase.com/privacy",
        label: "supabase.com/privacy",
        badge: "bg-sky-500",
    },
    {
        initial: "G",
        name: "Google AdMob",
        body: "Banner, interstitial & optional rewarded ads (uses advertising ID & approximate location)",
        href: "https://policies.google.com/privacy",
        label: "policies.google.com/privacy",
        badge: "bg-rose-500",
    },
    {
        initial: "G",
        name: "Google Sign-In",
        body: "Optional login method",
        href: "https://policies.google.com/privacy",
        label: "policies.google.com/privacy",
        badge: "bg-emerald-500",
    },
];

export default function RewardNestPrivacyPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
            <PolicyPageHeader
                title="Privacy Policy"
                badge="Mobile Application"
                tone="emerald"
            />

            <div className="mt-6 sm:mt-8">
                <PolicyCard>
                    <PolicySection step={1} title="Introduction">
                        <p>
                            Welcome to{" "}
                            <strong className="font-semibold text-foreground">
                                {rewardNest.appName}
                            </strong>{" "}
                            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy
                            Policy explains how we collect, use, disclose, and safeguard your
                            information when you use our mobile application (the
                            &quot;App&quot;).
                        </p>
                        <p>
                            {rewardNest.appName} is a{" "}
                            <strong className="font-semibold text-foreground">
                                free-to-play rewards application
                            </strong>{" "}
                            where users earn virtual coins through fun daily activities like
                            spinning wheels, answering quizzes, scratching cards, solving
                            picture puzzles, playing skill mini-games (Tic-Tac-Toe, Coin Toss,
                            Memory, Word Puzzle), joining free puzzle tournaments, daily login
                            streaks, and referring friends. Users may{" "}
                            <strong className="font-semibold text-foreground">
                                optionally
                            </strong>{" "}
                            watch rewarded ads to earn small bonus coins, extra moves or a
                            daily mystery box — this is always user-initiated and never
                            required to use the app.
                        </p>
                        <Callout tone="emerald">
                            <p>
                                <strong className="font-semibold">Important:</strong> By
                                downloading, installing, or using {rewardNest.appName}, you
                                agree to the collection and use of information in accordance
                                with this Privacy Policy. If you do not agree, please do not use
                                our App.
                            </p>
                        </Callout>
                    </PolicySection>

                    <PolicySection step={2} title="Information We Collect">
                        <p>
                            We collect the following information when you use{" "}
                            {rewardNest.appName}:
                        </p>
                        <RowList>
                            <DetailRow label="Email Address">
                                For account creation and login via Google Sign-In
                            </DetailRow>
                            <DetailRow label="Display Name">
                                Optional, chosen by you from your Google profile
                            </DetailRow>
                            <DetailRow label="Device Information & Advertising ID">
                                For app performance, crash reporting, and ads. Google AdMob may
                                use your device&apos;s advertising identifier and approximate
                                (country-level) location to serve and measure ads. Where
                                required (e.g. EEA/UK), we request consent first via
                                Google&apos;s UMP form.
                            </DetailRow>
                            <DetailRow label="Usage Data">
                                Quizzes answered, spins performed, coins earned, activities
                                completed
                            </DetailRow>
                            <DetailRow label="Transaction History">
                                Coin redemption requests and payment IDs (UPI)
                            </DetailRow>
                        </RowList>
                        <Callout tone="rose">
                            <p>
                                <strong className="font-semibold">We do NOT collect:</strong>{" "}
                                Payment card details, bank account numbers, government ID, or
                                any sensitive financial information.
                            </p>
                        </Callout>
                    </PolicySection>

                    <PolicySection step={3} title="How We Use Your Information">
                        <RowList>
                            <Row>To create and manage your account</Row>
                            <Row>To calculate and display your coin balance</Row>
                            <Row>To process coin redemption requests</Row>
                            <Row>To improve app features and performance</Row>
                            <Row>To send important account notifications</Row>
                            <Row>To prevent fraud and abuse</Row>
                        </RowList>
                    </PolicySection>

                    <PolicySection step={4} title="Coins & Redemptions" tone="amber">
                        <Callout tone="amber">
                            <p>
                                <strong className="font-semibold">Virtual Coins:</strong>{" "}
                                {rewardNest.appName} uses a virtual coin system. Coins are
                                earned through in-app activities (spinning, quizzes, scratch
                                cards, referrals). Coins have no real-world monetary value by
                                themselves and cannot be exchanged for cash directly.
                            </p>
                        </Callout>
                        <p>
                            Redemption requests are processed manually by our team within{" "}
                            <strong className="font-semibold text-foreground">
                                7–14 business days
                            </strong>{" "}
                            and are subject to verification. We reserve the right to reject
                            redemption requests that appear fraudulent or violate our Terms of
                            Service.
                        </p>
                    </PolicySection>

                    <PolicySection step={5} title="Third-Party Services">
                        <p>We use the following third-party services:</p>
                        <RowList>
                            {thirdParties.map((service) => (
                                <li
                                    key={service.name}
                                    className="flex items-start gap-3 rounded-lg bg-surface-muted p-4"
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${service.badge}`}
                                    >
                                        {service.initial}
                                    </span>
                                    <span>
                                        <strong className="block text-[14px] font-semibold text-foreground sm:text-[15px]">
                                            {service.name}
                                        </strong>
                                        <span className="mt-1 block text-[13px] leading-relaxed text-muted sm:text-[14px]">
                                            {service.body} —{" "}
                                            <a
                                                href={service.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                                            >
                                                {service.label}
                                            </a>
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </RowList>
                        <p className="text-[13px]">
                            Each service has its own privacy policy. We are not responsible
                            for their data practices.
                        </p>
                    </PolicySection>

                    <PolicySection step={6} title="Data Storage & Security">
                        <p>
                            Your data is stored securely on{" "}
                            <strong className="font-semibold text-foreground">
                                Supabase servers
                            </strong>
                            . We use industry-standard encryption for data transmission.
                            However, no method of transmission over the internet is 100%
                            secure. We encourage you to use a strong password.
                        </p>
                    </PolicySection>

                    <PolicySection step={7} title="Data Sharing">
                        <Callout tone="emerald">
                            <p className="font-semibold">
                                We do NOT sell your personal data to third parties.
                            </p>
                        </Callout>
                        <p>We may share data only:</p>
                        <RowList>
                            <Row>With service providers necessary to operate the app</Row>
                            <Row>When required by law or legal process</Row>
                            <Row>To protect our rights or prevent fraud</Row>
                        </RowList>
                    </PolicySection>

                    <PolicySection step={8} title="Children's Privacy">
                        <p>
                            Because {rewardNest.appName} lets users redeem coins for real-world
                            rewards, it is intended{" "}
                            <strong className="font-semibold text-foreground">
                                only for users aged 18 and above
                            </strong>
                            . We do not knowingly collect data from anyone under 18. If you
                            believe a minor has provided us with personal information, please
                            contact us and we will delete it.
                        </p>
                    </PolicySection>

                    <PolicySection step={9} title="Your Rights">
                        <p>You have the right to:</p>
                        <RowList>
                            <Row marker="✓">Access your personal data</Row>
                            <Row marker="✓">Request correction of inaccurate data</Row>
                            <Row marker="✓">Request deletion of your account and data</Row>
                            <Row marker="✓">Withdraw consent at any time</Row>
                        </RowList>
                        <Callout tone="rose">
                            <p>
                                <strong className="font-semibold">
                                    To delete your account:
                                </strong>{" "}
                                Go to{" "}
                                <strong className="font-semibold">
                                    Menu → Delete My Account
                                </strong>{" "}
                                within the app, or visit our{" "}
                                <Link
                                    href="/rewardnest/delete-account"
                                    className="font-semibold text-rose-600 underline decoration-rose-500/40 underline-offset-2 hover:decoration-rose-500 dark:text-rose-400"
                                >
                                    Account Deletion page
                                </Link>
                                .
                            </p>
                        </Callout>
                    </PolicySection>

                    <PolicySection step={10} title="Cookies & Analytics">
                        <p>
                            Our app may use local storage for preferences (theme, sound
                            settings). We may use analytics tools to understand app usage
                            patterns in aggregate form.
                        </p>
                    </PolicySection>

                    <PolicySection step={11} title="Changes to This Policy">
                        <p>
                            We may update this Privacy Policy from time to time. We will notify
                            you of significant changes through the app. Continued use of the
                            app after changes constitutes acceptance.
                        </p>
                    </PolicySection>

                    <PolicySection step={12} title="Contact Us">
                        <p>
                            If you have questions about this Privacy Policy, please contact us
                            at:
                        </p>
                        <div className="space-y-2.5 rounded-lg bg-surface-muted p-4">
                            <a
                                href={getRewardNestMailLink("RewardNest Privacy Policy")}
                                className="flex items-center gap-2.5 break-all font-semibold text-foreground transition-colors hover:text-accent"
                            >
                                <Mail className="h-4 w-4 shrink-0" />
                                {rewardNest.supportEmail}
                            </a>
                            <p className="flex items-center gap-2.5 break-all font-semibold text-foreground">
                                <Globe className="h-4 w-4 shrink-0" />
                                {rewardNestDisplayUrl}
                            </p>
                        </div>
                    </PolicySection>
                </PolicyCard>
            </div>

            <div className="mt-8">
                <LegalLinks
                    exclude={`${rewardNest.basePath}/privacy`}
                    columns={2}
                />
            </div>
        </div>
    );
}
