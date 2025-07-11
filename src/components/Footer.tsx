// React import
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              VELOCITY<span className="text-[#00A3FF]">.</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Premium bicycles for every rider, from professional cyclists to
              weekend enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Road Bikes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Mountain Bikes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Urban Bikes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Electric Bikes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Apparel
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Warranty
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Service & Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#00A3FF] transition-colors cursor-pointer"
                >
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Velocity Bicycles. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-[#00A3FF] transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-[#00A3FF] transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-[#00A3FF] transition-colors cursor-pointer"
              >
                Cookies
              </a>
              <div className="flex items-center space-x-2">
                <i className="fab fa-cc-visa text-gray-600 text-xl"></i>
                <i className="fab fa-cc-mastercard text-gray-600 text-xl"></i>
                <i className="fab fa-cc-amex text-gray-600 text-xl"></i>
                <i className="fab fa-cc-paypal text-gray-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#00A3FF] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#0081cc] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};
