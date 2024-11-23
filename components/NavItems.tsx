import Link from "next/link";
import { useIsMobile } from "../lib/useIsMobile";
import { useRouter } from "next/navigation";

interface NavItemsProps {
  closeMenu?: () => void;
}

export default function NavItems({ closeMenu }: NavItemsProps) {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleClick = (e: React.MouseEvent, item: string) => {
    if (item === "Home") {
      e.preventDefault();
      router.push("/");
    }
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <>
      <ul
        className={`${
          isMobile ? "flex flex-col items-center space-y-4" : "flex space-x-4"
        }`}
      >
        {["Home", "About", "Projects"].map((item, index) => (
          <li key={index}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="group inline-flex h-9 w-max items-center justify-center 
                      relative rounded-md px-4 py-2 text-base font-normal
                      text-foreground transition-transform duration-300 
                      hover:scale-105 hover:translate-y-[-3px]
                      hover:bg-primary hover:text-[#FFFFFF] focus:outline-none"
              onClick={(e) => handleClick(e, item)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
