import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Playfair_Display, Cormorant_Garamond, Allura } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"] });
const allura = Allura({ subsets: ["latin"], weight: "400" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fotograf Monika Sæle sin hjemmeside.",
  description: "Portrettstudio på Hedrum i Larvik. Baby, nyfødt, familie og signature portrett",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
