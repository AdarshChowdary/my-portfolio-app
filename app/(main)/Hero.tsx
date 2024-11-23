import CarouselSlider from "@/components/CarouselSlider";
import { skills } from "@/lib/projectData";

export default function Hero() {
  return (
    <>
      <div className="flex-none space-y-4 w-full md:w-80">
        <div className="px-5 py-3 md:px-8 border-[1px] rounded-lg dark:bg-[#09090B]">
          <h1 className="text-center text-xl font-normal font-cormorant">
            Hello World!
          </h1>
        </div>
        <div className="mt-4 border-[1px] rounded-lg dark:bg-[#09090B] px-5 py-3 md:px-8">
          <h2 className="text-xl md:text-3xl font-cormorant text-center">
            About Me
          </h2>
          <p className="mt-2 text-sm md:text-base md:font-medium text-start">
            I am a passionate developer with a love for creating innovative
            solutions. With a background in software engineering, I enjoy
            working on projects that challenge me and allow me to grow my
            skills.
          </p>
        </div>
        <div className="mt-4 rounded-lg dark:bg-[#09090B] border-[1px] px-5 py-3 md:px-8">
          <h2 className="text-xl md:text-3xl font-cormorant text-center">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2 justify-center transition-all duration-1000 ease-in-out">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border-[1px] rounded-lg text-sm md:text-base md:font-medium dark:bg-[#09090B] px-3 py-2 hover:scale-105 hover:translate-y-[-3px] hover:text-[#2563eb] hover:bg-accent focus:outline-none transition-transform duration-300"
              >
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:mt-0">
        <CarouselSlider />
      </div>
    </>
  );
}
