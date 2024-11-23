import { Button } from "./ui/button";

interface ResumeButtonProps {
  closeMenu?: () => void;
}

export default function ResumeButton({ closeMenu }: ResumeButtonProps) {
  return (
    <Button
      variant="ghost"
      className="hover:text-[#FFFFFF] hover:bg-primary text-base font-normal transition-all duration-400"
      onClick={closeMenu}
    >
      <a
        href="https://1drv.ms/w/s!AmrPDcCRevBfqSnsf3hKVKNslZBO?e=49WysH"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </Button>
  );
}
