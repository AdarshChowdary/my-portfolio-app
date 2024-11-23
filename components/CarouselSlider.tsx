"use client";

import React, { useState, useEffect } from "react";
import { projects } from "@/lib/projectData";

export default function CarouselSlider() {
  const images = projects.map((project) => project.image);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance feature
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col space-y-4">
      <div className="border-[1px] rounded-lg dark:bg-[#09090B] px-5 py-3 md:px-8 text-center">
        <h2 className="text-xl md:text-3xl font-cormorant">Project Showcase</h2>
      </div>
      <div className="relative w-full flex-grow rounded-lg overflow-hidden group">
        <div className="relative w-full pb-[56.25%] overflow-hidden border-[1px] rounded-lg">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black dark:bg-white scale-125 hover:bg-primary dark:hover:bg-primary"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
