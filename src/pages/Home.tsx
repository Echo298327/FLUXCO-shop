// React import
import React, { useState, useEffect } from "react";
// Components import
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/ProductsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* Navigation */}
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      {/* Hero Section */}
      <HeroSection isScrolled={isScrolled} />
      {/* Featured Products */}
      <ProductsSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Testimonials */}
      <TestimonialsSection />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
