// React import
import React, { useEffect } from "react";
// Components import
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/productsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ContactSection } from "../components/ContactSection";
// Utils import
import { products, features } from "../utils/homeData";

const Home: React.FC = () => {
  const handleLineContact = (productName?: string) => {
    const message = productName
      ? `Hello! I'm interested in the ${productName}. Could you provide more details?`
      : "Hello! I'd like to know more about the products.";
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(
      message
    )}`;
    window.open(lineUrl, "_blank");
  };
    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection handleLineContact={handleLineContact} />
      {/* Product Showcase */}
      <ProductsSection
        products={products}
      />
      {/* Features Section */}
      <FeaturesSection features={features} />
      
      {/* Contact Section */}
      <ContactSection handleLineContact={handleLineContact} />
    </div>
  );
};
export default Home;
