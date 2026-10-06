import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const head = Zilla_Slab({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris's Property Restoration | Landscaping, Patios & Concrete in Hamilton, ON",
  description:
    "Stamped concrete, flagstone and interlock patios, garden design, tree planting and removal, sod and drainage in Hamilton, Ontario. Rated 4.8 from 13 Google reviews. Call Chris at (289) 933-7662.",
  openGraph: {
    title: "Chris's Property Restoration | Hamilton Landscaping & Concrete",
    description:
      "Patios, concrete, trees, gardens and drainage in Hamilton. Rated 4.8 from 13 Google reviews. Call (289) 933-7662.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
