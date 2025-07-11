// React import
import React from "react";

interface HeroSectionProps {
  isScrolled: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isScrolled }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20sleek%2C%20modern%20premium%20carbon%20fiber%20racing%20bicycle%20positioned%20against%20a%20minimalist%20white%20and%20light%20blue%20gradient%20background.%20The%20bicycle%20has%20electric%20blue%20accents%20and%20is%20photographed%20from%20a%20dynamic%20angle%20with%20dramatic%20lighting%20that%20highlights%20its%20aerodynamic%20design%20and%20premium%20components.%20High-end%20professional%20product%20photography%20with%20shallow%20depth%20of%20field%20and%20perfect%20lighting&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          transform: `translateY(${isScrolled ? "-5%" : "0"})`,
          transition: "transform 0.5s ease-out",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Experience Premium <span className="text-[#00A3FF]">Cycling</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Discover our collection of high-performance bicycles designed for
            the modern rider. Engineered for speed, comfort, and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#00A3FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0081cc] transition-all transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
              Shop Collection
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#featured" className="text-gray-900 cursor-pointer">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};
