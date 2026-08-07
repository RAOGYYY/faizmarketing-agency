import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StarfieldBackground from "@/components/StarfieldBackground";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/data/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Faiz Marketing Agency | Digital Marketing & Promotion Services";
const description =
  "Faiz Marketing Agency - Social Media Marketing, Instagram & Facebook Growth, YouTube Promotion, Business Reviews, KYC Assistance aur Digital Branding services. Abhi WhatsApp ya Call par contact karein.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s | ${siteConfig.brandName}`,
  },
  description,
  keywords: [
    "digital marketing agency India",
    "social media marketing",
    "Instagram followers likes comments",
    "Facebook page promotion",
    "YouTube subscribers views",
    "Google Business Profile promotion",
    "online reputation management",
    "KYC assistance",
    "digital branding",
    siteConfig.brandName,
  ],
  authors: [{ name: siteConfig.brandName }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Applies the saved theme before first paint so there is no flash.
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var dark = saved ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <StructuredData />
        <StarfieldBackground />
        {children}
      </body>
    </html>
  );
}
