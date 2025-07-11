// React import
import React from "react";



interface NavbarProps {
    isScrolled: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMenuOpen, toggleMenu }) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gray-900">
            VELOCITY<span className="text-[#00A3FF]">.</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
          >
            Bicycles
          </a>
          <a
            href="#"
            className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
          >
            Accessories
          </a>
          <a
            href="#"
            className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+1234567890"
            className="text-lg cursor-pointer"
            title="Call Us"
          >
            <i className="fas fa-phone"></i>
          </a>
          <a
            href="https://wa.me/1234567890"
            className="text-lg cursor-pointer"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="#contact"
            className="bg-[#00A3FF] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#0081cc] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i
            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
          ></i>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute w-full transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 shadow-lg" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-4 py-4">
            <a
              href="#"
              className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
            >
              Bicycles
            </a>
            <a
              href="#"
              className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
            >
              Accessories
            </a>
            <a
              href="#"
              className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium hover:text-[#00A3FF] transition-colors cursor-pointer"
            >
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-lg cursor-pointer">
                <i className="fas fa-search"></i>
              </a>
              <a href="#" className="text-lg cursor-pointer">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a
                href="#contact"
                className="bg-[#00A3FF] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#0081cc] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
