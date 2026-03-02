import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "REGAL WEB SERVICE";
const siteDescription =
  "企業法務に強い弁護士事務所向けWeb運用サービス。ページ構成×CTA×計測で問い合わせ導線を毎月改善。";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${siteName} | 弁護士事務所向けWeb運用`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${siteName} | 弁護士事務所向けWeb運用`,
    description: siteDescription,
    images: [
      "/og?title=REGAL%20WEB%20SERVICE&subtitle=%E5%BC%81%E8%AD%B7%E5%A3%AB%E4%BA%8B%E5%8B%99%E6%89%80%E5%90%91%E3%81%91Web%E9%81%8B%E7%94%A8",
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          本文へスキップ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}