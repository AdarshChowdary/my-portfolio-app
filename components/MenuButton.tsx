import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import NavItems from "./NavItems";
import ResumeButton from "./ResumeButton";

export default function ExpandingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const circleVariants = {
    hidden: {
      scale: 0,
      borderRadius: "50%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      scale: 1,
      borderRadius: "0%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative">
      <Button
        className="group bg-[#FFFFFF] dark:bg-[#09090B] dark:hover:bg-accent "
        variant="outline"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <svg
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            fill={theme === "dark" ? "#fff" : "#000"}
            className="group-hover:fill-[#2563eb]"
          />
        </svg>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={circleVariants}
            className={`fixed inset-0 min-h-screen h-full w-full 
              ${theme === "dark" ? "bg-[#09090B]" : "bg-[#FFFFFF]"} 
              z-50 flex flex-col items-center justify-center gap-4 
              overflow-hidden`}
          >
            <button
              className="absolute top-2 right-6 text-2xl px-4 py-2 font-bold 
                rounded-md hover:bg-accent hover:text-[#2563eb]"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              &times;
            </button>

            <NavItems closeMenu={() => setIsOpen(false)} />
            <ResumeButton closeMenu={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
