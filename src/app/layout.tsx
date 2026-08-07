import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StarfieldBackground from "@/components/StarfieldBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Faiz Marketing Agency | Digital Marketing & Promotion Services",
  description:
    "Faiz Marketing Agency - Social Media Marketing, Instagram & Facebook Growth, YouTube Promotion, Business Reviews, KYC Assistance aur Digital Branding services.",
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
      lang="hi"
      suppressHydrationWarning
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <StarfieldBackground />
        {children}
      </body>
    </html>
  );
}
