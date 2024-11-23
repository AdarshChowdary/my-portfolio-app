// /components/ui/Navbar.tsx
import Link from "next/link";
import { ThemeButton } from "@/components/ThemeButton";
import MenuButton from "@/components/MenuButton";
import NavItems from "@/components/NavItems";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Navbar() {
  const isMobile = useIsMobile();

  // Mobile Navbar Layout
  const MobileNavbar = () => (
    <nav className="flex items-center justify-between w-full">
      <ThemeButton />
      <Link
        href="/"
        className="text-2xl font-cormorant font-semibold text-primary"
      >
        Adarsh
      </Link>
      <MenuButton />
    </nav>
  );

  // Desktop Navbar Layout
  const DesktopNavbar = () => (
    <nav className="flex items-center justify-evenly w-full">
      <Link
        href="/"
        className="text-2xl font-cormorant font-semibold text-primary"
      >
        Adarsh
      </Link>
      <NavItems />
      <ThemeButton />
    </nav>
  );

  return (
    <header className="sticky top-0 z-10 border-[1px] bg-[#FFFFFF] dark:bg-[#09090B] header-animation">
      <div className="mx-auto max-w-7xl px-5 py-3 md:px-8">
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </div>
    </header>
  );
}
