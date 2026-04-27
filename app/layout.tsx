import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cowboys-roofing-rebuild.vercel.app"),
  title: {
    default: "Cowboys Roofing & Exteriors — Calgary's #1 5-Star Rated Roofers",
    template: "%s · Cowboys Roofing & Exteriors",
  },
  description:
    "Anything exteriors. No short cuts. Roofing, hail & storm damage, siding, gutters, and windows for Calgary homes — backed by a lifetime workmanship warranty.",
  openGraph: {
    title: "Cowboys Roofing & Exteriors — Calgary's #1 5-Star Roofers",
    description:
      "15+ years on Calgary roofs. 3,284 projects completed. Lifetime workmanship warranty. Book your free inspection.",
    type: "website",
    locale: "en_CA",
    siteName: "Cowboys Roofing & Exteriors",
    images: [
      {
        url: "/photos/truck-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cowboys Roofing branded truck on a Calgary residential street",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cowboys Roofing & Exteriors — Calgary's #1 5-Star Roofers",
    description: "Anything exteriors. No short cuts. Book your free inspection.",
    images: ["/photos/truck-hero.webp"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
