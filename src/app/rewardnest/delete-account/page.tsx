import type { Metadata } from "next";
import { Mail, Globe, TriangleAlert } from "lucide-react";
import PolicyPageHeader from "@/components/rewardnest/PolicyPageHeader";
import LegalLinks from "@/components/rewardnest/LegalLinks";
import {
    PolicyCard,
    PolicySection,
    Callout,
    Row,
    StepRow,
    RowList,
} from "@/components/rewardnest/PolicyBlocks";
import {
    rewardNest,
    rewardNestDisplayUrl,
    getRewardNestMailLink,
} from "@/data/rewardnest";

export const metadata: Metadata = {
    title: "Delete Account",
    description:
        "Delete your RewardNest account - Learn how to permanently delete your account and all associated data.",
    alternates: {
        canonical: `${rewardNest.basePath}/delete-account`,
    },
    openGraph: {
        type: "article",
        url: `${rewardNest.basePath}/delete-account`,
        title: `Delete Account | ${rewardNest.appName}`,
        description:
            "Steps to permanently delete your RewardNest account and all associated data, in-app or by email.",
    },
};

const deletedData = [
    "Your account and login credentials",
    "All your coins and balance",
    "Quiz history and scores",
    "Spin history",
    "Referral bonuses and code",
    "All pending redemption requests",
    "Login streak and rewards",
    "Transaction history",
];

export default function RewardNestDeleteAccountPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
            <PolicyPageHeader
                title="Delete Your Account"
                badge="Account Deletion"
                tone="rose"
            />

            {/* Permanent action warning */}
            <div className="mt-6 flex items-start gap-4 rounded-2xl border-2 border-rose-500/30 bg-rose-50 p-5 dark:bg-rose-500/10 sm:mt-8 sm:p-6">
                <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500 text-white"
                >
                    <TriangleAlert className="h-6 w-6" />
                </span>
                <div>
                    <h2 className="text-[16px] font-bold text-rose-700 dark:text-rose-300 sm:text-lg">
                        This Action is Permanent
                    </h2>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-rose-900/80 dark:text-rose-200/80 sm:text-[15px]">
                        Deleting your account will permanently remove all your data, including
                        your coin balance, transaction history, and progress. This action{" "}
                        <strong className="font-semibold">cannot be undone</strong>.
                    </p>
                </div>
            </div>

            <div className="mt-6 sm:mt-8">
                <PolicyCard>
                    <PolicySection
                        step={1}
                        title="How to Delete Your Account (In-App)"
                    >
                        <Callout tone="emerald">
                            <p className="font-semibold">
                                Follow these steps to delete your account from within the app:
                            </p>
                        </Callout>
                        <ol className="grid gap-2.5">
                            <StepRow step={1} label="Open the RewardNest app">
                                Launch the app on your mobile device
                            </StepRow>
                            <StepRow step={2} label="Go to Menu (☰)">
                                Tap the menu icon in the top-right corner of the home screen
                            </StepRow>
                            <StepRow step={3} label={`Tap on "Delete My Account"`}>
                                Scroll down and find the Delete My Account option
                            </StepRow>
                            <StepRow step={4} label={`Type "DELETE" to confirm`}>
                                Enter the word DELETE in the confirmation field
                            </StepRow>
                            <StepRow
                                step={5}
                                tone="rose"
                                label={`Tap "Permanently Delete My Account"`}
                            >
                                Your account and all data will be immediately deleted
                            </StepRow>
                        </ol>
                    </PolicySection>

                    <PolicySection step={2} title="What Gets Deleted" tone="rose">
                        <p>
                            The following data will be{" "}
                            <strong className="font-semibold text-foreground">
                                permanently deleted
                            </strong>{" "}
                            from our servers:
                        </p>
                        <RowList>
                            {deletedData.map((item) => (
                                <Row key={item} tone="rose" marker="✗" soft>
                                    {item}
                                </Row>
                            ))}
                        </RowList>
                    </PolicySection>

                    <PolicySection step={3} title="Important Notes" tone="amber">
                        <Callout tone="amber">
                            <p>
                                <strong className="font-semibold">Pending Redemptions:</strong>{" "}
                                Any pending redemption requests will be{" "}
                                <strong className="font-semibold">cancelled</strong>. Make sure
                                to wait for pending requests to be processed before deleting
                                your account.
                            </p>
                            <p>
                                <strong className="font-semibold">No Recovery:</strong> Coins
                                and data{" "}
                                <strong className="font-semibold">cannot be recovered</strong>{" "}
                                after deletion. This action is permanent.
                            </p>
                            <p>
                                <strong className="font-semibold">Google Account:</strong>{" "}
                                Deleting your {rewardNest.appName} account does{" "}
                                <strong className="font-semibold">not</strong> delete your
                                Google account. You can still use your Google account for other
                                services.
                            </p>
                        </Callout>
                    </PolicySection>

                    <PolicySection step={4} title="Alternative: Request via Email">
                        <p>
                            If you cannot access the app, you can request account deletion by
                            email:
                        </p>
                        <div className="rounded-lg bg-surface-muted p-5">
                            <p className="text-[13px] font-semibold text-foreground sm:text-[14px]">
                                Send an email to:
                            </p>
                            <a
                                href={getRewardNestMailLink("Account Deletion Request")}
                                className="mt-2 flex items-center gap-2.5 break-all text-lg font-bold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 sm:text-xl"
                            >
                                <Mail className="h-5 w-5 shrink-0" />
                                {rewardNest.supportEmail}
                            </a>

                            <p className="mt-5 text-[13px] font-semibold text-foreground sm:text-[14px]">
                                Include the following information:
                            </p>
                            <ul className="mt-2 list-inside list-disc space-y-1.5 text-[13px] leading-relaxed text-muted sm:text-[14px]">
                                <li>Subject line: &quot;Account Deletion Request&quot;</li>
                                <li>Your registered email address</li>
                                <li>Reason for deletion (optional)</li>
                            </ul>

                            <p className="mt-4 text-[13px] leading-relaxed text-muted">
                                We will process your request within{" "}
                                <strong className="font-semibold text-foreground">
                                    7 business days
                                </strong>{" "}
                                and send a confirmation email once completed.
                            </p>
                        </div>
                    </PolicySection>

                    <PolicySection step={5} title="Data Retention After Deletion">
                        <p>After account deletion:</p>
                        <RowList>
                            <Row marker="✓">
                                All personal data is deleted immediately from our active
                                database
                            </Row>
                            <Row marker="✓">
                                Backup copies may be retained for up to 30 days for technical
                                reasons
                            </Row>
                            <Row marker="✓">
                                Anonymized analytics data may be retained for service
                                improvement
                            </Row>
                            <Row marker="✓">
                                Legal records (if any) may be retained as required by law
                            </Row>
                        </RowList>
                    </PolicySection>

                    <PolicySection step={6} title="Need Help?">
                        <p>
                            If you have any questions about account deletion, please contact
                            us:
                        </p>
                        <div className="space-y-2.5 rounded-lg bg-surface-muted p-4">
                            <a
                                href={getRewardNestMailLink("RewardNest Account Deletion Help")}
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
                    exclude={`${rewardNest.basePath}/delete-account`}
                    columns={2}
                />
            </div>
        </div>
    );
}
