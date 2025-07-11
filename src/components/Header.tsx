// React import
import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 vintage-texture bg-gradient-to-r from-amber-50 to-yellow-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <i className="fas fa-bicycle text-4xl text-amber-800"></i>
            <div>
              <h1
                className="text-3xl font-bold text-amber-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                FLUX & CO
              </h1>
              <p
                className="text-sm text-amber-700"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Vintage Cycling Heritage
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Home
            </a>
            <a
              href="#products"
              className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Products
            </a>
            <a
              href="#services"
              className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-amber-800 hover:text-amber-900 font-semibold cursor-pointer transition-colors"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
