import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="mx-auto dark:bg-[#09090B] flex flex-col gap-5 w-full max-w-7xl px-5 py-3 md:px-8 space-y-4 md:space-y-0 md:space-x-8">
      <div className="border-[1px] rounded-lg dark:bg-[#09090B] px-5 py-3 md:px-8 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-xl md:text-3xl font-bold font-cormorant">
            Say Hello!
          </h1>
          <h4 className="text-sm md:text-base md:font-bold">
            adarshvemasani0@gmail.com
          </h4>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          {["Home", "About", "Projects"].map((profile, index) => (
            <Link
              key={index}
              href={profile.toLowerCase()}
              className="text-sm md:text-base md:font-medium hover:border-b-[2px] hover:border-[#2563eb]"
              onClick={(e) => {
                if (profile === "Home") {
                  e.preventDefault(); // Prevent default navigation
                  router.push("/"); // Redirect to home page
                }
              }}
            >
              {profile}
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          {["Instagram", "GitHub", "LinkedIn"].map((social, index) => (
            <a
              key={index}
              href={`https://${social.toLowerCase()}.com/${
                social === "Instagram"
                  ? "adarsh_vemasani__"
                  : social === "GitHub"
                  ? "adarshchowdary"
                  : "in/adarshvemasani"
              }`}
              className="text-sm md:text-base md:font-medium hover:border-b-[2px] hover:border-[#2563eb]"
            >
              {social}
            </a>
          ))}
        </div>
        <ContactForm />
      </div>
      <div className="flex flex-row justify-center items-center px-5 md:px-0 py-3 mt-0">
        <p className="text-sm md:text-base md:font-medium text-center">
          Copyright © 2024 Adarsh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
