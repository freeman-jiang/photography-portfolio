import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const serifFont = Crimson_Text({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Freeman Jiang | Photography",
  description: "A photography portfolio",
};

import { ThemeProvider } from "@/components/theme-provider";
import { MixpanelProvider } from "@/mixpanel/MixpanelProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serifFont.variable}`}>
        {
          <MixpanelProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </MixpanelProvider>
        }
      </body>
    </html>
  );
}
