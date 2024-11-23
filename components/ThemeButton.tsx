"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ResumeButton from "./ResumeButton";
import { useIsMobile } from "../lib/useIsMobile";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isMobile = useIsMobile();
  const [isSpinning, setIsSpinning] = React.useState(false);

  // Prevent hydration mismatch by mounting component only on client side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  const handleThemeToggle = () => {
    setIsSpinning(true);
    setTheme(theme === "dark" ? "light" : "dark");
    // Reset spinning state after animation completes
    setTimeout(() => setIsSpinning(false), 300); // 300ms matches the animation duration
  };

  return (
    <div className="flex items-center justify-center gap-5">
      <button
        onClick={handleThemeToggle}
        className={`rounded-full p-2 hover:bg-accent group ${
          theme === "light" && "hover:bg-[#09090B]"
        }`}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon
            className={`h-5 w-5 transition-transform ${
              isSpinning ? "animate-[spin_300ms_linear]" : ""
            }`}
          />
        ) : (
          <Sun
            className={`h-5 w-5 text-white group-hover:text-[#FFD700] transition-transform ${
              isSpinning ? "animate-[spin_300ms_linear]" : ""
            }`}
          />
        )}
      </button>
      {!isMobile && <ResumeButton />}
    </div>
  );
}
