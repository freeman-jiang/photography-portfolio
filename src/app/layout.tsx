import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonFont = Crimson_Text({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Freeman Jiang | Photography",
  description: "A photography portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${crimsonFont.variable}`}>{children}</body>
    </html>
  );
}
