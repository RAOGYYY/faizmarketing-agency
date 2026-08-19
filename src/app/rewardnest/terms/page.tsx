import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Globe, TriangleAlert } from "lucide-react";
import PolicyPageHeader from "@/components/rewardnest/PolicyPageHeader";
import LegalLinks from "@/components/rewardnest/LegalLinks";
import {
    PolicyCard,
    PolicySection,
    Callout,
    Row,
    RowList,
} from "@/components/rewardnest/PolicyBlocks";
import {
    rewardNest,
    rewardNestDisplayUrl,
    getRewardNestMailLink,
} from "@/data/rewardnest";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms of Service for the RewardNest mobile application - Rules and guidelines for using the app.",
    alternates: {
        canonical: `${rewardNest.basePath}/terms`,
    },
    openGraph: {
        type: "article",
        url: `${rewardNest.basePath}/terms`,
        title: `Terms of Service | ${rewardNest.appName}`,
        description:
            "The rules for using RewardNest, including coin earning, redemption and prohibited activities.",
    },
};

export default function RewardNestTermsPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
            <PolicyPageHeader
                title="Terms of Service"
                badge="Legal Agreement"
                tone="emerald"
            />

            <div className="mt-6 sm:mt-8">
                <PolicyCard>
                    <PolicySection step={1} title="Acceptance of Terms">
                        <p>
                            By downloading, installing, or using{" "}
                            <strong className="font-semibold text-foreground">
                                {rewardNest.appName}
                            </strong>{" "}
                            (&quot;the App&quot;), you agree to be bound by these Terms of
                            Service. If you do not agree, please do not use the App.
                        </p>
                    </PolicySection>

                    <PolicySection step={2} title="Eligibility">
                        <RowList>
                            <Row>
                                You must be at least{" "}
                                <strong className="font-semibold text-foreground">
                                    18 years old
                                </strong>{" "}
                                to use this App, because coins can be redeemed for real-world
                                rewards.
                            </Row>
                            <Row>
                                By using the App, you confirm that you are 18 or older.
                            </Row>
                        </RowList>
                    </PolicySection>

                    <PolicySection step={3} title="Virtual Coins" tone="amber">
                        <Callout tone="amber">
                            <p className="font-semibold">
                                {rewardNest.appName} uses a virtual coin system
                                (&quot;Coins&quot;):
                            </p>
                        </Callout>
                        <RowList>
                            <Row tone="amber">
                                Coins are virtual in-app credits with{" "}
                                <strong className="font-semibold text-foreground">
                                    no intrinsic monetary value
                                </strong>
                                .
                            </Row>
                            <Row tone="amber">
                                Coins are earned through completing in-app activities (spinning,
                                quizzes, scratch cards, referrals, and daily logins).
                            </Row>
                            <Row tone="amber">
                                Coins{" "}
                                <strong className="font-semibold text-foreground">
                                    cannot be purchased
                                </strong>{" "}
                                with real money.
                            </Row>
                            <Row tone="amber">
                                Coins are{" "}
                                <strong className="font-semibold text-foreground">
                                    non-transferable
                                </strong>{" "}
                                between accounts.
                            </Row>
                            <Row tone="amber">
                                We reserve the right to adjust coin values, rewards, or limits
                                at any time.
                            </Row>
                        </RowList>
                    </PolicySection>

                    <PolicySection step={4} title="Coin Redemption">
                        <RowList>
                            <Row>
                                Redemption requests convert Coins into real-world rewards (e.g.,
                                UPI payments).
                            </Row>
                            <Row>
                                A{" "}
                                <strong className="font-semibold text-foreground">
                                    minimum balance
                                </strong>{" "}
                                is required to redeem (e.g. 10,000 coins in India via UPI; the
                                equivalent of about $5 for international users via PayPal /
                                Google Play gift card). Exact thresholds are shown in-app and
                                may be adjusted by the admin.
                            </Row>
                            <Row>
                                Redemption requests are subject to{" "}
                                <strong className="font-semibold text-foreground">
                                    manual review and approval
                                </strong>
                                .
                            </Row>
                            <Row>
                                Processing may take{" "}
                                <strong className="font-semibold text-foreground">
                                    7–14 business days
                                </strong>
                                .
                            </Row>
                            <Row>
                                We reserve the right to reject requests due to suspected fraud,
                                policy violations, or insufficient verification.
                            </Row>
                            <Row>Approved redemptions are final and non-reversible.</Row>
                        </RowList>
                        <Callout tone="emerald">
                            <p className="font-semibold">
                                This is a loyalty/reward program and does not constitute
                                gambling.
                            </p>
                        </Callout>
                    </PolicySection>

                    <PolicySection step={5} title="Prohibited Activities" tone="rose">
                        <Callout tone="rose">
                            <p className="font-semibold">You agree NOT to:</p>
                        </Callout>
                        <RowList>
                            <Row tone="rose" marker="✗" soft>
                                Use bots, scripts, or automation to earn Coins
                            </Row>
                            <Row tone="rose" marker="✗" soft>
                                Create multiple accounts to exploit rewards
                            </Row>
                            <Row tone="rose" marker="✗" soft>
                                Attempt to hack, reverse-engineer, or manipulate the App
                            </Row>
                            <Row tone="rose" marker="✗" soft>
                                Share or sell your account credentials
                            </Row>
                            <Row tone="rose" marker="✗" soft>
                                Use the App for any illegal purpose
                            </Row>
                            <Row tone="rose" marker="✗" soft>
                                Provide false information during redemption
                            </Row>
                        </RowList>
                        <p className="flex items-start gap-2 font-semibold text-rose-600 dark:text-rose-400">
                            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                            Violation of these rules may result in immediate account suspension
                            and forfeiture of all Coins.
                        </p>
                    </PolicySection>

                    <PolicySection step={6} title="Account Suspension & Termination">
                        <p>
                            We reserve the right to suspend or permanently ban accounts that:
                        </p>
                        <RowList>
                            <Row>Violate these Terms</Row>
                            <Row>Show signs of fraudulent activity</Row>
                            <Row>Have been inactive for more than 12 months</Row>
                        </RowList>
                        <p>
                            Suspended accounts forfeit all accumulated Coins. You may delete
                            your account at any time from{" "}
                            <strong className="font-semibold text-foreground">
                                Menu → Delete My Account
                            </strong>
                            , or follow the steps on our{" "}
                            <Link
                                href="/rewardnest/delete-account"
                                className="font-semibold text-rose-600 underline decoration-rose-500/40 underline-offset-2 hover:decoration-rose-500 dark:text-rose-400"
                            >
                                Account Deletion page
                            </Link>
                            .
                        </p>
                    </PolicySection>

                    <PolicySection step={7} title="Advertisements">
                        <p>
                            The App displays advertisements through{" "}
                            <strong className="font-semibold text-foreground">
                                Google AdMob
                            </strong>{" "}
                            (banner, interstitial and optional rewarded ads). By using the App,
                            you consent to the display of relevant ads.{" "}
                            <strong className="font-semibold text-foreground">
                                Rewarded ads are always optional and user-initiated
                            </strong>{" "}
                            — for example, watching a short ad can grant a Daily Mystery Box,
                            extra puzzle moves, a bonus tournament entry, &quot;Watch &amp;
                            Earn&quot; bonus coins, or double a reward you just won. Core
                            features, already-earned coins, and redemptions are never locked
                            behind watching an ad, and rewarded rewards have daily limits to
                            keep the app fair.
                        </p>
                    </PolicySection>

                    <PolicySection step={8} title="Intellectual Property">
                        <p>
                            All content in {rewardNest.appName} (logos, designs, code, text) is
                            owned by or licensed to us. You may not copy, reproduce, or
                            distribute any content without prior written permission.
                        </p>
                    </PolicySection>

                    <PolicySection step={9} title="Disclaimer of Warranties">
                        <p>
                            The App is provided{" "}
                            <strong className="font-semibold text-foreground">
                                &quot;as is&quot;
                            </strong>{" "}
                            without warranties of any kind. We do not guarantee uninterrupted
                            or error-free service. We are not liable for any loss of Coins due
                            to technical failures beyond our control.
                        </p>
                    </PolicySection>

                    <PolicySection step={10} title="Limitation of Liability">
                        <p>
                            To the maximum extent permitted by law, we shall not be liable for
                            any indirect, incidental, or consequential damages arising from
                            your use of the App, including loss of Coins or inability to
                            redeem.
                        </p>
                    </PolicySection>

                    <PolicySection step={11} title="Changes to Terms">
                        <p>
                            We may update these Terms at any time. Continued use of the App
                            after changes constitutes your acceptance of the new Terms.
                        </p>
                    </PolicySection>

                    <PolicySection step={12} title="Contact Us">
                        <p>Questions about these Terms?</p>
                        <div className="space-y-2.5 rounded-lg bg-surface-muted p-4">
                            <a
                                href={getRewardNestMailLink("RewardNest Terms of Service")}
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
                <LegalLinks exclude={`${rewardNest.basePath}/terms`} columns={2} />
            </div>
        </div>
    );
}
