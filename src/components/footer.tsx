// React import
import React from "react";

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="vintage-texture bg-amber-900/95 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <i className="fas fa-bicycle text-3xl text-amber-300"></i>
              <h4
                className="text-2xl font-bold text-amber-100"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                FLUX & CO
              </h4>
            </div>
            <p
              className="text-amber-300"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Preserving cycling heritage through authentic restoration and
              curated vintage collections.
            </p>
          </div>
          <div>
            <h5
              className="text-xl font-bold text-amber-100 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Business Hours
            </h5>
            <div
              className="text-amber-300 space-y-2"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
          <div>
            <h5
              className="text-xl font-bold text-amber-100 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Follow Us
            </h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-amber-300 hover:text-amber-100 text-2xl cursor-pointer transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-amber-300 hover:text-amber-100 text-2xl cursor-pointer transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-amber-300 hover:text-amber-100 text-2xl cursor-pointer transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p
            className="text-amber-400"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            © 2024 FLUX & CO. All rights reserved. | Crafted with passion for
            vintage cycling heritage.
          </p>
        </div>
      </div>
    </footer>
  );
};
