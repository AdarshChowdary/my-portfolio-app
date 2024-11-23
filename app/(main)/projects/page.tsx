"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projectData";

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "linear" },
  },
};

export default function ProjectsPage() {
  const [showDeployedOnly, setShowDeployedOnly] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredProjects =
    showDeployedOnly === "deployed"
      ? projects.filter((project) => project.liveLink)
      : showDeployedOnly === "not-deployed"
      ? projects.filter((project) => !project.liveLink)
      : projects;

  return (
    <div className="w-full h-full flex flex-col">
      {/* Project Showcase Header */}
      <div className="flex flex-col space-y-8 flex-1 p-5 md:p-8">
        <div className="border-[1px] rounded-lg dark:bg-[#09090B] px-5 py-3 md:px-8">
          <h2 className="text-2xl md:text-3xl font-cormorant text-center">
            Project Showcase
          </h2>
        </div>

        {/* Filter Section */}
        <div className="flex justify-end">
          <div ref={filterRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 border-[1px] rounded-lg dark:bg-[#09090B] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
            >
              <Filter className="w-4 h-4" />
              <span className="hidden md:inline">
                {showDeployedOnly === "all"
                  ? "All Projects"
                  : showDeployedOnly === "deployed"
                  ? "Deployed Projects"
                  : "Not Deployed Projects"}
              </span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  isOpen && "transform rotate-180"
                )}
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 py-2 bg-white dark:bg-[#09090B] border-[1px] rounded-lg shadow-lg z-10">
                <button
                  onClick={() => {
                    setShowDeployedOnly("all");
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  All Projects
                </button>
                <button
                  onClick={() => {
                    setShowDeployedOnly("deployed");
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  Deployed Projects
                </button>
                <button
                  onClick={() => {
                    setShowDeployedOnly("not-deployed");
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  Not Deployed Projects
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-16">
          {" "}
          {/* Added margin bottom */}
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative w-full h-96 rounded-lg overflow-hidden group border-[1px] dark:bg-[#09090B]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageVariants}
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                  <div className="mt-4 space-x-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
