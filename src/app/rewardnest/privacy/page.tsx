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
    {
        initial: "F",
        name: "Firebase Cloud Messaging",
        body: "Push notifications",
        href: "https://firebase.google.com/support/privacy",
        label: "firebase.google.com/support/privacy",
        badge: "bg-amber-500",
    },
    {
        initial: "C",
        name: "CPX Research / MakeOpinion GmbH",
        body: "Paid surveys",
        href: "https://www.cpx-research.com/main/en/privacy",
        label: "cpx-research.com/main/en/privacy",
        badge: "bg-indigo-500",
    },
    {
        initial: "T",
        name: "TheoremReach, Inc.",
        body: "Paid surveys",
        href: "https://theoremreach.com/privacy-policy",
        label: "theoremreach.com/privacy-policy",
        badge: "bg-violet-500",
    },
    {
        initial: "S",
        name: "Sentry",
        body: "Crash reporting",
        href: "https://sentry.io/privacy/",
        label: "sentry.io/privacy",
        badge: "bg-slate-500",
    },
];

const internationalTransfers = [
    "CPX Research / MakeOpinion GmbH — Germany (European Union)",
    "TheoremReach, Inc. — United States",
    "Google (AdMob, Sign-In, Firebase Cloud Messaging) — United States and other countries where Google operates",
    "Sentry — United States",
];

const retentionPeriods = [
    {
        label: "Push notification delivery records",
        body: "Deleted after 7 days",
    },
    {
        label: "Records of which reminders were sent to you",
        body: "Deleted after 7 days",
    },
    {
        label: "Messages you have already read, collected gifts, used scratch cards",
        body: "Deleted after 30 days. Unread messages are kept longer, up to 90 days, because an unread message is still owed to you",
    },
    {
        label: "Records of zero-prize game rounds",
        body: "Deleted after 30 days",
    },
    {
        label: "Rewarded-ad records used to stop double-crediting",
        body: "Deleted after 90 days",
    },
    {
        label: "Survey-open records",
        body: "Deleted after 90 days",
    },
    {
        label: "Individual game reward entries",
        body: "Collapsed into daily totals after 60 days, so your lifetime earnings stay correct without keeping every row",
    },
];

const legalBases = [
    {
        label: "Performance of a contract",
        body: "Running your account, tracking your coin balance and paying out redemptions. Without this data there is no way to operate the app for you.",
    },
    {
        label: "Consent",
        body: "Push notifications, personalised advertising where the consent prompt applies, and paid surveys. Each is optional and you may withdraw consent at any time, in the app or in your Android settings.",
    },
    {
        label: "Legitimate interests",
        body: "Preventing fraud, detecting duplicate reward-earning accounts, and keeping the app secure and working. We use the least data that achieves this and you can object (see section 11).",
    },
    {
        label: "Legal obligation",
        body: "Retaining payout records where we are required to.",
    },
];

const yourRights = [
    "Access the personal data we hold about you, and get a copy of it",
    "Correct anything inaccurate",
    "Delete your account and its data",
    "Withdraw consent you gave for notifications, personalised ads or surveys, at any time, without losing access to the rest of the app",
    "Receive your data in a portable, machine-readable form",
    "Object to processing we base on legitimate interests, including our fraud and duplicate-account checks",
    "Restrict processing while a dispute about your data is open",
    "Have a human review any automated decision described in section 9",
];

/** Sub-heading inside a numbered section. Keeps the h2 -> h3 order correct. */
function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="pt-1 text-[15px] font-semibold text-foreground sm:text-base">
            {children}
        </h3>
    );
}

export default function RewardNestPrivacyPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
            <PolicyPageHeader
                title="Privacy Policy"
                badge="Mobile Application"
                tone="emerald"
                lastUpdated="September 2026"
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
                            where users earn virtual coins through daily activities such as
                            spinning wheels, quizzes, scratch cards, picture puzzles, skill
                            mini-games (Tic-Tac-Toe, Coin Toss, Memory, Word Puzzle), daily
                            login streaks, paid surveys and referring friends. Users may{" "}
                            <strong className="font-semibold text-foreground">
                                optionally
                            </strong>{" "}
                            watch rewarded ads to earn bonus coins, extra moves or a daily
                            mystery box — this is always user-initiated and never required to
                            use the app.
                        </p>
                        <Callout tone="emerald">
                            <p>
                                <strong className="font-semibold">Important:</strong> By
                                downloading, installing, or using {rewardNest.appName}, you
                                agree to the collection and use of information in accordance
                                with this Privacy Policy. If you do not agree, please do not use
                                our App.
                            </p>
                            <p>
                                {rewardNest.appName} is intended only for users aged 18 and
                                above.
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
                                Optional, from your Google profile or chosen by you
                            </DetailRow>
                            <DetailRow label="Date of Birth & Country">
                                Required at onboarding to verify the 18+ age requirement and to
                                show rewards available in your country
                            </DetailRow>
                            <DetailRow label="Device Information & Advertising ID">
                                For app performance, crash reporting, and ads. Google AdMob may
                                use your device&apos;s advertising identifier and approximate
                                (country-level) location to serve and measure ads. Where
                                required (e.g. EEA/UK), we request consent first via
                                Google&apos;s UMP form. You can reset or limit the Advertising
                                ID in Android settings.
                            </DetailRow>
                            <DetailRow label="A Hashed Device Identifier">
                                Used only to detect multiple reward-earning accounts on one
                                device. It is hashed before it leaves your device.
                            </DetailRow>
                            <DetailRow label="Push Notification Token">
                                To deliver account and reward notifications. Only collected if
                                you allow notifications.
                            </DetailRow>
                            <DetailRow label="Usage Data">
                                Needed to operate rewards and prevent abuse — for example
                                quizzes answered, spins performed and coins earned
                            </DetailRow>
                            <DetailRow label="Gift Voucher & Giveaway Activity">
                                Which brands you selected, which vouchers were sent to you and
                                whether you opened them, and which giveaways you entered
                            </DetailRow>
                            <DetailRow label="Redemption Details You Provide">
                                UPI ID, or the phone number linked to your bank account, or a
                                PayPal email, or bank account and IFSC. Used solely to process
                                the payout you request. You may save payout destinations in
                                advance and delete them at any time from Wallet → Payout
                                details.
                            </DetailRow>
                            <DetailRow label="Phone Number, Where You Provide One">
                                For UPI you may identify yourself by UPI ID or by the phone
                                number linked to your bank account, whichever you know; a
                                separate phone number is optional for UPI and required for Bank
                                Transfer. Where provided it is stored on that withdrawal request
                                rather than your profile, used only for payout verification and
                                support, masked in our admin interface, excluded from analytics
                                and application logs, and retained with the withdrawal audit
                                record. PayPal does not require a phone number because the
                                PayPal email is the payout destination.
                            </DetailRow>
                        </RowList>
                        <Callout tone="amber">
                            <p>
                                <strong className="font-semibold">
                                    Bank account and IFSC
                                </strong>{" "}
                                are collected only if you choose Bank Transfer as a payout
                                method, and are used only to send the redemption you asked for.
                            </p>
                        </Callout>
                        <Callout tone="rose">
                            <p>
                                <strong className="font-semibold">We do NOT collect:</strong>{" "}
                                Payment card details, government ID, your precise location, your
                                contacts, or any files on your device.
                            </p>
                        </Callout>
                    </PolicySection>

                    <PolicySection step={3} title="Legal Basis for Processing" tone="sky">
                        <p>
                            Where data protection law requires us to name a legal basis, ours
                            are:
                        </p>
                        <RowList>
                            {legalBases.map((basis) => (
                                <DetailRow key={basis.label} label={basis.label} tone="sky">
                                    {basis.body}
                                </DetailRow>
                            ))}
                        </RowList>
                    </PolicySection>

                    <PolicySection step={4} title="Coins & Redemptions" tone="amber">
                        <Callout tone="amber">
                            <p>
                                <strong className="font-semibold">Virtual Coins:</strong>{" "}
                                {rewardNest.appName} uses a virtual coin system. Coins are
                                earned through in-app activities, have no real-world monetary
                                value by themselves and cannot be exchanged for cash directly.
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
                                    key={`${service.name}-${service.body}`}
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

                        <SubHeading>About paid surveys</SubHeading>
                        <p>
                            Paid surveys are entirely optional. If you open a survey we pass the
                            survey provider a random account identifier —{" "}
                            <strong className="font-semibold text-foreground">
                                never your name, email address or phone number
                            </strong>{" "}
                            — so the reward reaches the right account. Your answers go to the
                            survey provider and the research company that commissioned the
                            survey; we never see them. The provider may ask demographic
                            questions (for example age group or interests) and may record your
                            IP address and device details to detect fraud. When a survey is
                            credited, the provider sends us the reward amount and the IP address
                            the survey was taken from, which we keep to check for duplicate
                            accounts. All of that is governed by the provider&apos;s own privacy
                            policy. If you never open a survey, none of your data reaches them.
                        </p>

                        <SubHeading>WhatsApp</SubHeading>
                        <p>
                            The app may invite you to open our WhatsApp channel. That invitation
                            is optional and rewards nothing. If you open it, WhatsApp opens
                            outside this app and anything you do there is governed by
                            WhatsApp&apos;s own privacy policy. We cannot see whether you
                            followed the channel — we only record that you tapped the button, so
                            we stop showing the invitation.
                        </p>

                        <p className="text-[13px]">
                            Each service has its own privacy policy. We are not responsible
                            for their data practices.
                        </p>
                    </PolicySection>

                    <PolicySection
                        step={6}
                        title="Where Your Data Is Stored, and International Transfers"
                        tone="sky"
                    >
                        <p>
                            Your account data is stored on{" "}
                            <strong className="font-semibold text-foreground">
                                Supabase servers in Mumbai, India
                            </strong>
                            . We use industry-standard encryption for data in transit. No method
                            of transmission over the internet is 100% secure, so please keep
                            your Google account secure.
                        </p>
                        <p>
                            Some services in section 5 are outside India and receive data
                            internationally:
                        </p>
                        <RowList>
                            {internationalTransfers.map((entry) => (
                                <Row key={entry} tone="sky">
                                    {entry}
                                </Row>
                            ))}
                        </RowList>
                        <p>
                            Where a transfer leaves the European Economic Area or the UK it
                            relies on the receiving provider&apos;s own transfer safeguards,
                            such as the European Commission&apos;s Standard Contractual Clauses.
                            Each provider&apos;s privacy policy, linked in section 5, describes
                            the safeguards it uses.
                        </p>
                    </PolicySection>

                    <PolicySection step={7} title="Data Sharing">
                        <Callout tone="emerald">
                            <p className="font-semibold">
                                We do NOT sell your personal data to third parties.
                            </p>
                        </Callout>
                        <p>We share it only:</p>
                        <RowList>
                            <Row>
                                With the service providers listed in section 5, as necessary to
                                operate the app
                            </Row>
                            <Row>When required by law or legal process</Row>
                            <Row>To protect our rights or prevent fraud</Row>
                        </RowList>
                    </PolicySection>

                    <PolicySection step={8} title="How Long We Keep Your Data" tone="indigo">
                        <p>
                            We do not keep operational data indefinitely. Automatic clean-up
                            jobs run nightly and delete:
                        </p>
                        <RowList>
                            {retentionPeriods.map((item) => (
                                <DetailRow
                                    key={item.label}
                                    label={item.label}
                                    tone="indigo"
                                    marker="⏱"
                                >
                                    {item.body}
                                </DetailRow>
                            ))}
                        </RowList>
                        <p>
                            Kept for as long as your account exists, because they are your
                            balance or your proof of payment: your profile and coin balance,
                            your withdrawal history, vouchers you own, and coins or gifts you
                            have not yet collected.
                        </p>
                        <Callout tone="indigo">
                            <p>
                                Accounts dormant for more than a month with a negligible balance
                                may be deleted along with their data.{" "}
                                <strong className="font-semibold">
                                    Accounts with any withdrawal history are never deleted this
                                    way.
                                </strong>
                            </p>
                        </Callout>
                        <p>
                            When you delete your account, your profile, balance, login and
                            everything linked to them are removed immediately. Withdrawal
                            records already paid may be retained where we are legally required
                            to keep them.
                        </p>
                    </PolicySection>

                    <PolicySection step={9} title="Automated Decisions" tone="amber">
                        <p>
                            One process makes an automated decision about you. To stop one person
                            creating many accounts to claim the same signup and referral
                            rewards, we compare a hashed device identifier across accounts. If
                            several reward-earning accounts are found on one device, signup and
                            referral coins on the newer account may be reversed automatically
                            and its referral cancelled.
                        </p>
                        <Callout tone="amber">
                            <p>
                                This affects{" "}
                                <strong className="font-semibold">bonus coins only</strong>. It
                                never touches coins you earned by playing, and it never blocks a
                                withdrawal you are already entitled to.
                            </p>
                        </Callout>
                        <p>
                            You have the right to a human review of any such decision. Contact
                            us using the details in section 15 and we will look at it ourselves
                            and tell you the outcome.
                        </p>
                    </PolicySection>

                    <PolicySection step={10} title="Children's Privacy" tone="rose">
                        <p>
                            {rewardNest.appName} is intended{" "}
                            <strong className="font-semibold text-foreground">
                                only for users aged 18 and above
                            </strong>
                            . Account creation requires date-of-birth verification and users
                            under 18 cannot proceed past onboarding. We do not knowingly collect
                            data from anyone under 18. If you believe a minor has provided us
                            with personal information, contact us immediately so we can remove
                            it.
                        </p>
                    </PolicySection>

                    <PolicySection step={11} title="Your Rights">
                        <p>Wherever you live, you can ask us to:</p>
                        <RowList>
                            {yourRights.map((right) => (
                                <Row key={right} marker="✓">
                                    {right}
                                </Row>
                            ))}
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
                        <p>
                            For anything else, email us using the details in section 15. We
                            reply within 30 days and never charge for a request.
                        </p>
                        <p>
                            If you are in the European Economic Area or the UK and are not
                            satisfied with how we handled your request, you may complain to your
                            national data protection authority. That right is in addition to
                            contacting us, not instead of it.
                        </p>
                    </PolicySection>

                    <PolicySection step={12} title="For California Residents" tone="indigo">
                        <p>This section applies if you live in California.</p>
                        <p>
                            The categories of personal information we collect, why, and who
                            receives them are in sections 2, 3 and 5. We collect them from you
                            directly and from your use of the app.
                        </p>
                        <p>
                            We do{" "}
                            <strong className="font-semibold text-foreground">not</strong> sell
                            your personal information, and we do not share it for cross-context
                            behavioural advertising beyond the advertising identifier used by
                            Google AdMob to serve and measure ads. You can switch that off at
                            any time in Android:{" "}
                            <strong className="font-semibold text-foreground">
                                Settings → Privacy → Ads → Delete advertising ID
                            </strong>
                            . Doing so does not reduce your access to the app or your ability to
                            earn or withdraw.
                        </p>
                        <p>
                            You have the right to know what we collect, to delete it, to correct
                            it, and to opt out of sharing for advertising as described above.
                            Exercise any of them through Menu → Delete My Account or by emailing
                            us.
                        </p>
                        <Callout tone="indigo">
                            <p>
                                <strong className="font-semibold">
                                    We will never discriminate against you for exercising these
                                    rights.
                                </strong>{" "}
                                Your coin balance, earning rate and withdrawal eligibility do not
                                change because you made a privacy request.
                            </p>
                        </Callout>
                    </PolicySection>

                    <PolicySection step={13} title="Cookies & Analytics">
                        <p>
                            The app uses local storage for preferences such as theme and sound
                            settings. We use analytics to understand app usage in aggregate.
                        </p>
                    </PolicySection>

                    <PolicySection step={14} title="Changes to This Policy">
                        <p>
                            We may update this Privacy Policy from time to time. We will notify
                            you of significant changes through the app. Continued use of the
                            app after changes constitutes acceptance.
                        </p>
                    </PolicySection>

                    <PolicySection step={15} title="Contact Us">
                        <p>
                            {rewardNest.appName} is operated by{" "}
                            <strong className="font-semibold text-foreground">
                                Faiz Marketing
                            </strong>
                            . We are the data controller for the personal data described in this
                            policy, and the single point of contact for any question or request
                            about it.
                        </p>
                        <p>
                            If you have questions about this policy, or want to exercise any
                            right in section 11 or 12, contact us at:
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
                        <p>We aim to reply within 30 days.</p>
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
