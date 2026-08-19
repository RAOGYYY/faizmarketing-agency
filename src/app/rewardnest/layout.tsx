import type { Metadata } from "next";
import RewardNestHeader from "@/components/rewardnest/RewardNestHeader";
import RewardNestFooter from "@/components/rewardnest/RewardNestFooter";
import { rewardNest } from "@/data/rewardnest";

// Overrides the agency-wide title template for this section, so app pages
// read "Privacy Policy | RewardNest" instead of the agency name.
export const metadata: Metadata = {
    title: {
        default: rewardNest.appName,
        template: `%s | ${rewardNest.appName}`,
    },
};

export default function RewardNestLayout({
    children,
}: LayoutProps<"/rewardnest">) {
    return (
        <>
            <RewardNestHeader />
            <main className="flex-1">{children}</main>
            <RewardNestFooter />
        </>
    );
}
