import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afrisoft AI Consultants",
  description:
    "Afrisoft AI Consultants - Bridging the gap between cutting-edge artificial intelligence and real-world business transformation.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  themeColor: "#ffffff", // White theme color for light appearance
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <style>{`
          @media (prefers-color-scheme: dark) {
            html.light {
              color-scheme: light;
            }
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
