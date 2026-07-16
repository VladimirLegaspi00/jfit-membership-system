import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JFIT Fitness Master | Mamatid, Cabuyao",
  description:
    "Explore JFIT Fitness Master membership plans and training facilities in Mamatid, Cabuyao, Laguna.",
  keywords: [
    "JFIT Fitness Master",
    "gym in Cabuyao",
    "gym in Mamatid",
    "fitness gym Laguna",
    "gym membership Cabuyao",
  ],
  icons: {
    icon: "/jfit-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}