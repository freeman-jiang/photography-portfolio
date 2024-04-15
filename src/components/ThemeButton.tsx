"use client";
import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex lg:justify-center items-center gap-4 lg:flex-row-reverse">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="p-2 hover:bg-inherit size-12 dark:bg-stone-800 shadow-lg dark:shadow-yellow-300/50 dark:hover:shadow-yellow-300/90 shadow-blue-500/60 hover:shadow-blue-500/90 transition-shadow duration-300"
      >
        <Sun className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-transform duration-700" />
        <MoonStar className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-transform duration-700" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <motion.div
        className="text-secondary-light dark:text-secondary-dark font-switzer transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        {!mounted ? null : `${theme === "dark" ? "Night" : "Day"} Photography`}
      </motion.div>
    </div>
  );
};
