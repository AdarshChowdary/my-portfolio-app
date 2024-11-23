"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a simple loading placeholder
  }
  return (
    <>
      <Navbar />
      <div className="dark:bg-[#09090B] mx-auto flex flex-col md:flex-row justify-center w-full max-w-7xl px-5 py-3 md:px-8 space-y-4 md:space-y-0 md:space-x-8">
        {children}
      </div>
      <Footer />
    </>
  );
}
