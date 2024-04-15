"use client";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="p-2 size-10 dark:bg-stone-800"
    >
      <Sun className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-transform duration-700" />
      <MoonStar className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-transform duration-700" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
