export type Service = {
    id: string;
    name: string;
    short: string;
    description: string;
    benefits: string[];
    delivery: string;
    /** lucide icon key, resolved in ServiceIcon.tsx */
    icon: string;
    /** [from, to] gradient stops for the row accent */
    color: [string, string];
};

export type ServiceCategory = {
    id: string;
    title: string;
    description: string;
    services: Service[];
};

export const categories: ServiceCategory[] = [
    {
        id: "social-growth",
        title: "Social Media Growth",
        description:
            "Instagram, Facebook aur YouTube par apni presence aur engagement badhayein.",
        services: [
            {
                id: "social-media-marketing",
                name: "Social Media Marketing",
                short: "Aapke sabhi social platforms ki complete marketing.",
                description:
                    "Social Media Marketing ke through hum aapke brand ko Instagram, Facebook aur YouTube par plan banakar promote karte hain, taaki aapki reach aur sales dono badhe.",
                benefits: [
                    "Brand ki online visibility badhti hai",
                    "Sahi audience tak pahunch",
                    "Sales aur enquiries me izafa",
                ],
                delivery: "Plan ke hisab se, 24-72 hours me shuru",
                icon: "Megaphone",
                color: ["#3b82f6", "#1d4ed8"],
            },
            {
                id: "instagram-followers",
                name: "Instagram Followers",
                short: "Apne Instagram account par real-looking followers badhayein.",
                description:
                    "Ye service aapke Instagram account ki follower count badhati hai, jisse naye visitors ko aapka page zyada credible aur popular lagta hai.",
                benefits: [
                    "Page zyada trustworthy dikhta hai",
                    "Naye followers organically aane me help",
                    "Brand ki social proof badhti hai",
                ],
                delivery: "24-48 hours",
                icon: "Instagram",
                color: ["#dd2a7b", "#f58529"],
            },
            {
                id: "instagram-likes",
                name: "Instagram Likes",
                short: "Apni posts par likes badhakar engagement dikhayein.",
                description:
                    "Instagram Likes service aapki posts ko zyada likes deti hai, jisse post zyada engaging aur popular lagti hai, aur naye log bhi like/follow karne ke liye attract hote hain.",
                benefits: [
                    "Post ki engagement dikhne me behtar",
                    "Naye visitors par accha impression",
                    "Instagram algorithm me post ko boost milta hai",
                ],
                delivery: "12-24 hours",
                icon: "Heart",
                color: ["#f43f5e", "#ec4899"],
            },
            {
                id: "instagram-comments",
                name: "Instagram Comments",
                short: "Apni posts par genuine-looking comments payein.",
                description:
                    "Ye service aapki Instagram posts par relevant comments add karti hai, jisse post par conversation dikhti hai aur engagement rate improve hota hai.",
                benefits: [
                    "Post par activity zyada dikhti hai",
                    "Engagement rate improve hota hai",
                    "Audience ka interest badhta hai",
                ],
                delivery: "24-48 hours",
                icon: "MessageSquare",
                color: ["#a855f7", "#7c3aed"],
            },
            {
                id: "instagram-reel-views",
                name: "Instagram Reel Views",
                short: "Apne Reels ke views badhakar reach increase karein.",
                description:
                    "Reel Views service aapke Instagram Reels par views badhati hai, jisse Reel viral hone ke chances zyada hote hain aur Explore page par bhi aane ki sambhavna badhti hai.",
                benefits: [
                    "Reel viral hone ke chances badhte hain",
                    "Explore page par aane ki sambhavna",
                    "Naye followers milne me madad",
                ],
                delivery: "12-24 hours",
                icon: "Film",
                color: ["#f59e0b", "#f97316"],
            },
            {
                id: "instagram-story-views",
                name: "Instagram Story Views",
                short: "Apni Stories ke views badhayein.",
                description:
                    "Ye service aapki Instagram Stories par views badhati hai, jisse aapki daily updates zyada logon tak pahunchti dikhti hain.",
                benefits: [
                    "Story ki reach badhi hui dikhti hai",
                    "Brand active aur popular lagta hai",
                    "Engagement metrics improve hote hain",
                ],
                delivery: "Same day",
                icon: "Eye",
                color: ["#ec4899", "#a855f7"],
            },
            {
                id: "facebook-followers",
                name: "Facebook Followers",
                short: "Apne Facebook page ke followers badhayein.",
                description:
                    "Facebook Followers service se aapke page ki follower count badhti hai, jisse page naye visitors ko zyada established aur trustworthy lagta hai.",
                benefits: [
                    "Page zyada credible dikhta hai",
                    "Naye customers ka trust badhta hai",
                    "Page ki reach improve hoti hai",
                ],
                delivery: "24-48 hours",
                icon: "Facebook",
                color: ["#1877f2", "#0b5fce"],
            },
            {
                id: "facebook-likes",
                name: "Facebook Likes",
                short: "Page aur posts par likes badhakar popularity dikhayein.",
                description:
                    "Ye service aapke Facebook page ya posts par likes add karti hai, jisse aapka content zyada popular aur engaging dikhta hai.",
                benefits: [
                    "Post/page zyada popular dikhta hai",
                    "Naye visitors par accha first impression",
                    "Social proof strong hota hai",
                ],
                delivery: "24-48 hours",
                icon: "ThumbsUp",
                color: ["#2563eb", "#1e40af"],
            },
            {
                id: "facebook-comments",
                name: "Facebook Comments",
                short: "Posts par comments badhakar engagement dikhayein.",
                description:
                    "Facebook Comments service aapki posts par genuine-looking comments add karti hai, jisse post par active discussion dikhti hai.",
                benefits: [
                    "Post par activity dikhti hai",
                    "Audience engagement improve hota hai",
                    "Post ki reach badhne me madad",
                ],
                delivery: "24-48 hours",
                icon: "MessageCircle",
                color: ["#3b82f6", "#6366f1"],
            },
            {
                id: "facebook-page-promotion",
                name: "Facebook Page Promotion",
                short: "Apne Facebook Business page ko target audience tak pahunchayein.",
                description:
                    "Ye service aapke Facebook Business page ko planned promotion ke through sahi audience tak pahunchati hai, jisse likes, followers aur enquiries badhti hain.",
                benefits: [
                    "Sahi target audience tak reach",
                    "Page likes aur enquiries me badhotri",
                    "Business ki local/wide visibility",
                ],
                delivery: "Campaign ke hisab se, 2-5 din",
                icon: "Rocket",
                color: ["#0ea5e9", "#2563eb"],
            },
            {
                id: "youtube-subscribers",
                name: "YouTube Subscribers",
                short: "Apne YouTube channel ke subscribers badhayein.",
                description:
                    "YouTube Subscribers service se aapke channel ki subscriber count badhti hai, jisse channel zyada credible dikhta hai aur monetization requirements me bhi madad milti hai.",
                benefits: [
                    "Channel zyada trustworthy dikhta hai",
                    "Monetization goals tak pahunchne me madad",
                    "Naye viewers ka trust badhta hai",
                ],
                delivery: "2-4 din",
                icon: "Youtube",
                color: ["#ef4444", "#b91c1c"],
            },
            {
                id: "youtube-video-views",
                name: "YouTube Video Views",
                short: "Apne videos ke views badhakar reach increase karein.",
                description:
                    "Ye service aapke YouTube videos par views badhati hai, jisse video ki ranking aur recommendation chances improve hote hain.",
                benefits: [
                    "Video recommendation me aane ke chances badhte hain",
                    "Channel ki overall watch time improve hoti hai",
                    "Naye viewers attract hote hain",
                ],
                delivery: "2-4 din",
                icon: "PlayCircle",
                color: ["#f43f5e", "#dc2626"],
            },
        ],
    },
    {
        id: "reputation",
        title: "Business Reviews & Reputation",
        description:
            "Apne business ki online reputation strong banayein trusted platforms par.",
        services: [
            {
                id: "google-business-promotion",
                name: "Google Business Profile Promotion",
                short: "Google par apna business profile optimize aur promote karayein.",
                description:
                    "Ye service aapke Google Business Profile ko optimize karke promote karti hai, jisse local search results me aapka business zyada logon ko dikhta hai.",
                benefits: [
                    "Google Maps aur local search me better visibility",
                    "Naye customers ka trust badhta hai",
                    "Calls aur enquiries me izafa",
                ],
                delivery: "3-7 din",
                icon: "MapPin",
                color: ["#4285f4", "#34a853"],
            },
            {
                id: "justdial-review",
                name: "Justdial Profile Review",
                short: "Apne Justdial profile par genuine reviews payein.",
                description:
                    "Justdial Profile Review service aapke business listing par positive reviews add karti hai, jisse naye customers ka bharosa badhta hai.",
                benefits: [
                    "Listing zyada trustworthy dikhti hai",
                    "Naye customers ka decision easy hota hai",
                    "Business ki ranking improve hoti hai",
                ],
                delivery: "3-5 din",
                icon: "Star",
                color: ["#f59e0b", "#d97706"],
            },
            {
                id: "tripadvisor-review",
                name: "Tripadvisor Profile Review",
                short: "Apne Tripadvisor listing par reviews badhayein.",
                description:
                    "Ye service Tripadvisor par aapke business (hotel, restaurant, ya travel service) ke liye genuine-looking reviews add karti hai.",
                benefits: [
                    "Travel/hospitality customers ka trust badhta hai",
                    "Listing ranking improve hoti hai",
                    "Bookings/enquiries me izafa",
                ],
                delivery: "3-5 din",
                icon: "Plane",
                color: ["#10b981", "#0f766e"],
            },
            {
                id: "amazon-product-review",
                name: "Amazon Product Review",
                short: "Apne Amazon products par reviews badhayein.",
                description:
                    "Amazon Product Review service se aapke listed products par genuine reviews add hote hain, jisse buyer ka confidence badhta hai aur conversion rate improve hoti hai.",
                benefits: [
                    "Product listing zyada credible dikhti hai",
                    "Buyer confidence aur conversion rate badhta hai",
                    "Product ranking improve hone me madad",
                ],
                delivery: "3-7 din",
                icon: "Package",
                color: ["#f59e0b", "#ea580c"],
            },
            {
                id: "playstore-review",
                name: "Play Store App Review",
                short: "Apne app par Play Store reviews badhayein.",
                description:
                    "Ye service aapke Android app ke liye Play Store par positive reviews add karti hai, jisse naye users ka trust badhta hai aur app ki ranking improve hoti hai.",
                benefits: [
                    "App zyada credible dikhta hai",
                    "Naye downloads me madad",
                    "App Store ranking improve hoti hai",
                ],
                delivery: "3-5 din",
                icon: "Download",
                color: ["#34a853", "#16a34a"],
            },
        ],
    },
    {
        id: "business-support",
        title: "Business Support Services",
        description:
            "Aapke business ki digital presence aur documentation manage karne me madad.",
        services: [
            {
                id: "kyc-assistance",
                name: "KYC Assistance / KYC Work",
                short: "KYC related documentation aur process me poori madad.",
                description:
                    "KYC Assistance service ke through hum aapke business ya personal KYC documentation, verification, aur process ko sahi tarike se complete karne me madad karte hain.",
                benefits: [
                    "Documentation process easy ho jaata hai",
                    "Time aur effort dono me bachat",
                    "Sahi guidance ke saath verification",
                ],
                delivery: "Requirement ke hisab se, 1-3 din",
                icon: "ShieldCheck",
                color: ["#0ea5e9", "#0369a1"],
            },
            {
                id: "digital-branding",
                name: "Digital Branding",
                short: "Apne brand ki online identity professional banayein.",
                description:
                    "Digital Branding service me hum aapke business ki online identity - logo positioning, content style, aur overall presence - ko professional aur consistent banate hain.",
                benefits: [
                    "Brand ki professional identity banti hai",
                    "Customers ke saath trust aur recall badhta hai",
                    "Competitors se alag pehchan milti hai",
                ],
                delivery: "Project ke hisab se, 5-10 din",
                icon: "Palette",
                color: ["#a855f7", "#d946ef"],
            },
            {
                id: "social-media-management",
                name: "Social Media Page Management",
                short: "Apne social pages ka daily management humein sonp dein.",
                description:
                    "Ye service me hum aapke Instagram/Facebook pages ka regular management karte hain - posting, replies, aur growth strategy - taaki aapko time na dena pade.",
                benefits: [
                    "Regular aur consistent posting",
                    "Aapka time bachta hai",
                    "Page professionally grow karti hai",
                ],
                delivery: "Monthly service",
                icon: "LayoutGrid",
                color: ["#06b6d4", "#0891b2"],
            },
            {
                id: "business-profile-promotion",
                name: "Business Profile Promotion",
                short: "Apne business profiles ko multiple platforms par promote karayein.",
                description:
                    "Business Profile Promotion service me hum aapke business profile ko relevant platforms par promote karte hain, jisse aapki online presence strong hoti hai.",
                benefits: [
                    "Multiple platforms par visibility",
                    "Naye customers tak pahunch",
                    "Overall business credibility badhti hai",
                ],
                delivery: "Campaign ke hisab se, 3-7 din",
                icon: "Building2",
                color: ["#14b8a6", "#0d9488"],
            },
        ],
    },
    {
        id: "promotion-ads",
        title: "Promotion & Advertising",
        description: "Apps, influencers aur online ads ke through wider reach payein.",
        services: [
            {
                id: "app-promotion",
                name: "App Promotion",
                short: "Apne mobile app ko target users tak pahunchayein.",
                description:
                    "App Promotion service ke through hum aapke app ko planned strategy se promote karte hain, jisse downloads aur active users dono badhte hain.",
                benefits: [
                    "App downloads me izafa",
                    "Sahi target users tak reach",
                    "App ki ranking improve hoti hai",
                ],
                delivery: "Campaign ke hisab se, 3-7 din",
                icon: "Smartphone",
                color: ["#8b5cf6", "#6366f1"],
            },
            {
                id: "influencer-promotion",
                name: "Influencer Promotion",
                short: "Relevant influencers ke through apna brand promote karayein.",
                description:
                    "Ye service aapke brand/product ko relevant social media influencers ke through promote karti hai, jisse ek naye aur engaged audience tak pahunch milti hai.",
                benefits: [
                    "Naye aur engaged audience tak reach",
                    "Brand ki credibility badhti hai",
                    "Sales/enquiries me direct impact",
                ],
                delivery: "Influencer availability ke hisab se, 5-10 din",
                icon: "Sparkles",
                color: ["#f472b6", "#db2777"],
            },
            {
                id: "online-promotion-services",
                name: "Online Promotion Services",
                short: "Apne business ki general online promotion.",
                description:
                    "Online Promotion Services me hum aapke business ko multiple digital channels ke through promote karte hain, taaki overall online presence aur visibility badhe.",
                benefits: [
                    "Multiple channels se combined reach",
                    "Business visibility overall badhti hai",
                    "Long-term online growth me madad",
                ],
                delivery: "Plan ke hisab se, 3-7 din",
                icon: "Globe",
                color: ["#6366f1", "#4338ca"],
            },
            {
                id: "online-advertising",
                name: "Online Advertising & Marketing",
                short: "Paid ads ke through fast aur targeted results payein.",
                description:
                    "Ye service me hum aapke business ke liye paid online advertising campaigns plan aur run karte hain, jisse aapko fast aur measurable results milte hain.",
                benefits: [
                    "Fast aur targeted results",
                    "Budget ke hisab se customizable campaigns",
                    "Measurable ROI",
                ],
                delivery: "Campaign start, 1-2 din",
                icon: "TrendingUp",
                color: ["#f97316", "#e11d48"],
            },
        ],
    },
];

export const allServices: Service[] = categories.flatMap((c) => c.services);
