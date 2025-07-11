// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import b1 from "./assets/bicycles/b1.jpg";
import b2 from "./assets/bicycles/b2.jpg";
import b3 from "./assets/bicycles/b3.jpg";
import b4 from "./assets/bicycles/b4.jpg";

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const products = [
    {
      id: 1,
      name: "Classic E-City",
      description:
        "Vintage-inspired electric city bike with elegant copper accents",
      image: b1,
    },
    {
      id: 2,
      name: "Retro E-Step",
      description: "Traditional step-through frame with modern electric assist",
      image: b2,
    },
    {
      id: 3,
      name: "E-Commuter",
      description: "Classic commuter design with hidden electric technology",
      image: b3,
    },  
    {
      id: 4,
      name: "E-Cargo",
      description: "Electric cargo bike with traditional bamboo carrier",
      image: b4,
    },
    {
      id: 5,
      name: "E-Explorer",
      description: "Retro adventure e-bike with vintage leather accessories",
      image: b1,
    },
    {
      id: 6,
      name: "E-Folding",
      description: "Compact electric folder with classic design elements",
      image: b2,
    },
  ];
  const features = [
    {
      icon: "fas fa-tools",
      title: "Expert Restoration",
      description:
        "Professional restoration services for vintage bicycles with authentic period components",
    },
    {
      icon: "fas fa-certificate",
      title: "Authentic Parts",
      description:
        "Genuine vintage bicycle parts sourced from trusted collectors worldwide",
    },
    {
      icon: "fas fa-handshake",
      title: "Personal Service",
      description:
        "One-on-one consultation to find the perfect vintage cycling solution",
    },
  ];
  const handleWhatsAppContact = (productName?: string) => {
    const message = productName
      ? `Hello! I'm interested in the ${productName}. Could you provide more details?`
      : "Hello! I'd like to know more about your vintage cycling products.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(45deg, #8B7355 0%, #A0956B 25%, #8B7355 50%, #6B5B47 75%, #8B7355 100%)",
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
}
`}</style>
      {/* Header */}
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
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 sepia-filter"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=vintage%20bicycle%20workshop%20interior%20with%20old%20wooden%20workbench%20antique%20cycling%20tools%20hanging%20on%20weathered%20brick%20walls%20warm%20sepia%20lighting%20atmospheric%20dust%20particles%20classic%20craftsmanship%20scene&width=1440&height=1024&seq=hero1&orientation=landscape')`,
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
      {/* Product Showcase */}
      <section
        id="products"
        className="py-20 vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3
              className="text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Curated Collection
            </h3>
            <p
              className="text-xl text-amber-700 max-w-3xl mx-auto"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Each piece in our collection has been carefully selected and
              restored to showcase the finest examples of vintage cycling
              craftsmanship.
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="vintage-texture bg-white/90 rounded-lg overflow-hidden vintage-shadow hover:scale-105 transition-all duration-300 cursor-pointer distressed-border"
                onClick={() =>
                  setSelectedProduct(
                    selectedProduct === product.id ? null : product.id,
                  )
                }
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover sepia-filter hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4
                    className="text-2xl font-bold text-amber-900 mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {product.name}
                  </h4>
                  <p
                    className="text-amber-700 mb-4 leading-relaxed"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    {product.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppContact(product.name);
                    }}
                    className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold transition-colors duration-300"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="py-8"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    className="vintage-texture bg-white/90 rounded-lg overflow-hidden vintage-shadow distressed-border"
                    onClick={() =>
                      setSelectedProduct(
                        selectedProduct === product.id ? null : product.id,
                      )
                    }
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover sepia-filter hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4
                        className="text-2xl font-bold text-amber-900 mb-3"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {product.name}
                      </h4>
                      <p
                        className="text-amber-700 mb-4 leading-relaxed"
                        style={{ fontFamily: "Crimson Text, serif" }}
                      >
                        {product.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppContact(product.name);
                        }}
                        className="!rounded-button whitespace-nowrap cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-semibold transition-colors duration-300"
                        style={{ fontFamily: "Crimson Text, serif" }}
                      >
                        <i className="fab fa-whatsapp mr-2"></i>
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section
        id="services"
        className="py-20 vintage-texture bg-gradient-to-b from-amber-100/90 to-amber-50/90"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3
              className="text-5xl font-bold text-amber-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Expertise
            </h3>
            <p
              className="text-xl text-amber-700 max-w-3xl mx-auto"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Decades of experience in vintage bicycle restoration and authentic
              parts sourcing ensure every piece meets the highest standards of
              quality and authenticity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center vintage-texture bg-white/80 p-8 rounded-lg vintage-shadow hover:bg-white/90 transition-all duration-300 distressed-border"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600 text-white rounded-full mb-6 vintage-shadow">
                  <i className={`${feature.icon} text-3xl`}></i>
                </div>
                <h4
                  className="text-2xl font-bold text-amber-900 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-amber-700 leading-relaxed"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 vintage-texture bg-gradient-to-b from-amber-800/90 to-amber-900/90"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3
            className="text-5xl font-bold text-amber-50 mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Let's Connect
          </h3>
          <p
            className="text-xl text-amber-200 mb-8 leading-relaxed"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            Ready to discover your perfect vintage cycling companion? Get in
            touch and let us help you find exactly what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleWhatsAppContact()}
              className="!rounded-button whitespace-nowrap cursor-pointer bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 vintage-shadow"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              <i className="fab fa-whatsapp mr-3 text-xl"></i>
              WhatsApp Chat
            </button>
            <div
              className="text-amber-200"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              <p className="text-lg">
                <i className="fas fa-phone mr-2"></i>
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
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
    </div>
  );
};
export default App;
