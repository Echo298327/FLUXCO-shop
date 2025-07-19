// React import
import React from 'react'
// Router import
import { Outlet } from 'react-router-dom'
// Components import
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout: React.FC = () => {
    return (
        <div
            className="min-h-screen"
            style={{
            background:"linear-gradient(45deg, #8B7355 0%, #A0956B 25%, #8B7355 50%, #6B5B47 75%, #8B7355 100%)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
        }}
      >
            <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Crimson+Text:wght@400;600&display=swap');
          @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
          }
          .vintage-texture {
          position: relative;
          }
          .vintage-texture::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
          radial-gradient(circle at 20% 50%, rgba(139, 115, 85, 0.3) 1px, transparent 1px),
          radial-gradient(circle at 80% 20%, rgba(107, 91, 71, 0.2) 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, rgba(160, 149, 107, 0.2) 1px, transparent 1px);
          background-size: 50px 50px, 30px 30px, 70px 70px;
          pointer-events: none;
          }
          .distressed-border {
          border: 3px solid #6B5B47;
          border-image: repeating-linear-gradient(45deg, #6B5B47 0px, #6B5B47 10px, transparent 10px, transparent 20px) 3;
          }
          .vintage-shadow {
          box-shadow:
          0 8px 16px rgba(107, 91, 71, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
          .sepia-filter {
          filter: sepia(0.8) contrast(1.2) brightness(0.9);
          }
          header.vintage-texture {
          position: fixed !important;
          }`
      }</style>
        
        
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}