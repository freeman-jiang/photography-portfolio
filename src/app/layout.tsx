import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freeman Jiang | Photography",
  description: "A photography portfolio",
};

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { MixpanelProvider } from "@/mixpanel/MixpanelProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `bg-white dark:bg-stone-950 transition-colors duration-300`,
          inter.className
        )}
      >
        {
          <MixpanelProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </MixpanelProvider>
        }
      </body>
    </html>
  );
}
