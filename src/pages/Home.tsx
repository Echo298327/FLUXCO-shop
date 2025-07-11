// React import
import React from "react";
// Components import
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/productsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/footer";
// Utils import
import { products, features } from "../utils/homeData";

const Home: React.FC = () => {
  const handleWhatsAppContact = (productName?: string) => {
    const message = productName
      ? `Hello! I'm interested in the ${productName}. Could you provide more details?`
      : "Hello! I'd like to know more about your vintage cycling products.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div>
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
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection handleWhatsAppContact={handleWhatsAppContact} />
      {/* Product Showcase */}
      <ProductsSection
        products={products}
        handleWhatsAppContact={handleWhatsAppContact}
      />
      {/* Features Section */}
      <FeaturesSection features={features} />
      {/* Contact Section */}
      <ContactSection handleWhatsAppContact={handleWhatsAppContact} />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
