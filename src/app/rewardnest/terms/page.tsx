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
                                quizzes, scratch cards, games, referrals, and daily logins), by
                                watching rewarded advertisements, and by completing{" "}
                                <strong className="font-semibold text-foreground">
                                    paid surveys
                                </strong>{" "}
                                offered through third-party survey partners.
                            </Row>
                            <Row tone="amber">
                                Surveys are entirely optional. Coins credited for a survey may be{" "}
                                <strong className="font-semibold text-foreground">
                                    reversed
                                </strong>{" "}
                                if the survey partner later reverses or invalidates that
                                completion, for example where the answers fail their quality
                                checks. You will be notified if this happens.
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
                                Redemption requests convert Coins into real-world rewards via{" "}
                                <strong className="font-semibold text-foreground">
                                    UPI, bank transfer, or PayPal
                                </strong>
                                , where available in your country.
                            </Row>
                            <Row>
                                A{" "}
                                <strong className="font-semibold text-foreground">
                                    minimum balance
                                </strong>{" "}
                                is required to redeem — currently 20,000 coins in India via UPI
                                or bank transfer, or the equivalent of about $5 for
                                international users via PayPal. Exact thresholds are shown
                                in-app and may be adjusted by the admin, so the figure in the
                                app is authoritative.
                            </Row>
                            <Row>
                                Redemption requests are subject to{" "}
                                <strong className="font-semibold text-foreground">
                                    manual review and approval
                                </strong>
                                .
                            </Row>
                            <Row>
                                Payouts usually complete{" "}
                                <strong className="font-semibold text-foreground">
                                    within 12 hours
                                </strong>
                                . Requests needing extra verification may take up to 7 business
                                days.
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

                    <PolicySection step={8} title="Paid Surveys">
                        <p>
                            Paid surveys are supplied by independent third-party partners —
                            currently{" "}
                            <strong className="font-semibold text-foreground">
                                CPX Research / MakeOpinion GmbH
                            </strong>{" "}
                            and{" "}
                            <strong className="font-semibold text-foreground">
                                TheoremReach, Inc.
                            </strong>{" "}
                            Taking a survey is always optional.
                        </p>
                        <RowList>
                            <Row>
                                Surveys open on the partner&apos;s own page. While you are there,
                                their terms and privacy policy apply in addition to ours.
                            </Row>
                            <Row>
                                Depending on the partner, a survey opens either inside the App or
                                in your device&apos;s{" "}
                                <strong className="font-semibold text-foreground">
                                    web browser
                                </strong>
                                . TheoremReach surveys open in the browser. This is normal — you
                                stay signed in to RewardNest, and your Coins are credited to the
                                same account when you return. Their page is large and hosted
                                outside India, so it can take several seconds to load.
                            </Row>
                            <Row>
                                A partner may first ask a short set of{" "}
                                <strong className="font-semibold text-foreground">
                                    profile questions
                                </strong>{" "}
                                (such as age group or household details) so it can match you to
                                suitable surveys. Some partners award Coins for completing these.
                                Answering them is optional, but without them far fewer surveys
                                will be available to you.
                            </Row>
                            <Row>
                                We pass the partner a random account identifier so it can credit
                                the right account. We never send your name, email address or
                                phone number.
                            </Row>
                            <Row>
                                Your survey answers go to the partner and the research company
                                that commissioned the survey.{" "}
                                <strong className="font-semibold text-foreground">
                                    We never receive or store them.
                                </strong>
                            </Row>
                            <Row>
                                You may not qualify for a survey after starting it. That is the
                                partner&apos;s decision, not ours. Where the partner pays
                                something for an unsuccessful attempt, we pass it on as Coins.
                            </Row>
                            <Row>
                                Coins are credited when the partner confirms the result to us,
                                which is usually immediate but can be delayed by the partner.
                            </Row>
                        </RowList>
                        <Callout tone="rose">
                            <p className="font-semibold">
                                Do not create or sign into an account on a survey
                                partner&apos;s own rewards panel from inside a survey.
                            </p>
                        </Callout>
                        <p>
                            Some partners advertise their own consumer panel on the survey page.
                            If you sign into one, your completions stop being linked to your
                            RewardNest account, no confirmation reaches us, and{" "}
                            <strong className="font-semibold text-foreground">
                                the Coins you expected will not arrive here
                            </strong>{" "}
                            — you would be earning into a separate account with that company
                            instead. You do not need any additional account to take surveys in
                            RewardNest.
                        </p>
                    </PolicySection>

                    <PolicySection step={9} title="Intellectual Property">
                        <p>
                            All content in {rewardNest.appName} (logos, designs, code, text) is
                            owned by or licensed to us. You may not copy, reproduce, or
                            distribute any content without prior written permission.
                        </p>
                    </PolicySection>

                    <PolicySection step={10} title="Disclaimer of Warranties">
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

                    <PolicySection step={11} title="Limitation of Liability">
                        <p>
                            To the maximum extent permitted by law, we shall not be liable for
                            any indirect, incidental, or consequential damages arising from
                            your use of the App, including loss of Coins or inability to
                            redeem.
                        </p>
                    </PolicySection>

                    <PolicySection step={12} title="Changes to Terms">
                        <p>
                            We may update these Terms at any time. Continued use of the App
                            after changes constitutes your acceptance of the new Terms.
                        </p>
                    </PolicySection>

                    <PolicySection step={13} title="Contact Us">
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
