// React import
import React from "react";
import bg from "../assets/bg.jpg";

interface HeroSectionProps {
    handleWhatsAppContact: () => void;
  }
  
  export const HeroSection: React.FC<HeroSectionProps> = ({
    handleWhatsAppContact,
  }) => {
    return (
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 sepia-filter"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-amber-800/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
          <div className="max-w-2xl">
            <h2
              className="text-6xl font-bold text-amber-50 mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Timeless Cycling
              <br />
              <span className="text-amber-200">Heritage</span>
            </h2>
            <p
              className="text-xl text-amber-100 mb-8 leading-relaxed"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Discover authentic vintage bicycles and accessories, carefully
              restored to preserve the golden age of cycling. Each piece tells a
              story of craftsmanship and adventure.
            </p>
            <button
              onClick={() => handleWhatsAppContact()}
              className="!rounded-button whitespace-nowrap cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 vintage-shadow"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              <i className="fab fa-whatsapp mr-3"></i>
              Connect With Us
            </button>
          </div>
        </div>
      </section>
    );
  };
  