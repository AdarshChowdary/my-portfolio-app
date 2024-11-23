import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <div className="text-center border-[1px] rounded-lg px-5 py-3 md:px-8 w-full">
        <h1 className="font-cormorant text-xl md:text-3xl ">
          I&apos;m Adarsh Vemasani
        </h1>
        <p className="mt-2 text-base text-left">
          My journey in tech started with a curiosity about how things work,
          which led me to pursue a degree in Information Technology. Since then,
          I&apos;ve been on an exciting adventure, constantly learning and
          pushing the boundaries of what&apos;s possible on the web.
        </p>
        <p className="mt-2 text-base text-left">
          I am a creative and detail-oriented professional passionate about
          designing seamless digital experiences. With a strong foundation in
          web development and a keen eye for aesthetics, I specialize in
          crafting user-friendly interfaces that balance functionality and
          visual appeal. My expertise spans React JS, HTML, CSS, and JavaScript,
          enabling me to bring ideas to life with intuitive design and smooth
          interactions.
        </p>
        <p className="mt-2 text-base text-left">
          One of my key projects,
          <span className="font-bold">Connect Social Web Application</span>,
          exemplifies my approach to design—focusing on security, usability, and
          elegance. Through this and other projects, I’ve honed my ability to
          create designs that resonate with users, integrating secure systems
          and responsive layouts for a delightful user journey.
        </p>
        <p className="mt-2 text-base text-left">
          Driven by a commitment to continuous learning, I thrive in
          collaborative environments where innovative ideas come to life. I
          believe great design is not just about how something looks, but how it
          works—and I strive to deliver solutions that leave a lasting
          impression.
        </p>
        <Button
          variant="outline"
          className="mt-4 text-base font-semibold font-cormorant hover:bg-[#2563eb] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF]"
        >
          <Link href="/projects">Projects</Link>
        </Button>
      </div>
    </>
  );
}
