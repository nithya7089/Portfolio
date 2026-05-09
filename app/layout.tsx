import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nithya Paleti — Software Engineer",
  description:
    "Portfolio of Nithya Paleti: IIIT Lucknow CSE (AI) undergrad, Amazon SDE intern, full-stack developer, and competitive programmer.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nithya Paleti — Portfolio",
    description:
      "Software engineer building reliable backend systems, ML-enabled apps, and high-quality product experiences.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
