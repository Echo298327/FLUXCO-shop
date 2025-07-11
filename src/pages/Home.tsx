// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
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
          className={`md:hidden bg-white absolute w-full transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 shadow-lg" : "max-h-0"}`}
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
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20sleek%2C%20modern%20premium%20carbon%20fiber%20racing%20bicycle%20positioned%20against%20a%20minimalist%20white%20and%20light%20blue%20gradient%20background.%20The%20bicycle%20has%20electric%20blue%20accents%20and%20is%20photographed%20from%20a%20dynamic%20angle%20with%20dramatic%20lighting%20that%20highlights%20its%20aerodynamic%20design%20and%20premium%20components.%20High-end%20professional%20product%20photography%20with%20shallow%20depth%20of%20field%20and%20perfect%20lighting&width=1920&height=1080&seq=hero1&orientation=landscape')`,
            transform: `translateY(${isScrolled ? "-5%" : "0"})`,
            transition: "transform 0.5s ease-out",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Experience Premium <span className="text-[#00A3FF]">Cycling</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Discover our collection of high-performance bicycles designed for
              the modern rider. Engineered for speed, comfort, and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00A3FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0081cc] transition-all transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
                Shop Collection
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#featured" className="text-gray-900 cursor-pointer">
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Bicycles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our selection of premium bicycles, crafted with precision
              and designed for performance.
            </p>
          </div>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1 rounded-lg shadow-sm">
              <button className="px-6 py-2 rounded-lg bg-[#00A3FF] text-white font-medium !rounded-button whitespace-nowrap cursor-pointer">
                All
              </button>
              <button className="px-6 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Road
              </button>
              <button className="px-6 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Mountain
              </button>
              <button className="px-6 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Urban
              </button>
              <button className="px-6 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Electric
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20sleek%20carbon%20fiber%20road%20bicycle%20with%20electric%20blue%20accents%20positioned%20against%20a%20clean%20white%20background.%20The%20bicycle%20is%20shown%20from%20the%20side%20to%20highlight%20its%20aerodynamic%20frame%20and%20premium%20components.%20Professional%20product%20photography%20with%20perfect%20lighting%20that%20emphasizes%20the%20glossy%20finish%20and%20high-end%20details&width=600&height=400&seq=bike1&orientation=landscape"
                  alt="Carbon Road Bike"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Velocity Carbon Pro</h3>
                  <span className="text-[#00A3FF] font-bold">$3,499</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Ultralight carbon frame road bike with electronic shifting
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="text-gray-500 text-sm ml-1">(42)</span>
                  </div>
                  <a
                    href="#contact"
                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-[#00A3FF] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20premium%20mountain%20bike%20with%20full%20suspension%20and%20matte%20black%20frame%20with%20subtle%20electric%20blue%20accents%20positioned%20against%20a%20clean%20white%20background.%20The%20bicycle%20has%20aggressive%20off-road%20tires%20and%20high-end%20suspension%20components.%20Professional%20product%20photography%20with%20perfect%20lighting%20that%20emphasizes%20the%20technical%20features%20and%20rugged%20design&width=600&height=400&seq=bike2&orientation=landscape"
                  alt="Mountain Bike"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Apex Trail Master</h3>
                  <span className="text-[#00A3FF] font-bold">$4,299</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Full-suspension carbon mountain bike with wireless components
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-gray-500 text-sm ml-1">(37)</span>
                  </div>
                  <a
                    href="#contact"
                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-[#00A3FF] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20modern%20electric%20urban%20commuter%20bicycle%20with%20a%20sleek%20integrated%20battery%20in%20the%20downtube%20and%20electric%20blue%20accents%20positioned%20against%20a%20clean%20white%20background.%20The%20bicycle%20has%20a%20minimalist%20design%20with%20internal%20cable%20routing%20and%20integrated%20lights.%20Professional%20product%20photography%20with%20perfect%20lighting%20that%20emphasizes%20the%20clean%20lines%20and%20technological%20features&width=600&height=400&seq=bike3&orientation=landscape"
                  alt="Electric Bike"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">E-Urban Glide</h3>
                  <span className="text-[#00A3FF] font-bold">$2,899</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Electric urban bike with integrated battery and smart features
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-yellow-500 mr-1">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-gray-500 mr-1">
                      <i className="far fa-star"></i>
                    </span>
                    <span className="text-gray-500 text-sm ml-1">(28)</span>
                  </div>
                  <a
                    href="#contact"
                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-[#00A3FF] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#00A3FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0081cc] transition-all transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer">
              Discover Our Collection
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Velocity</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best cycling experience with
              premium quality bikes and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#00A3FF] text-4xl mb-4">
                <i className="fas fa-medal"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Our bicycles are crafted using the highest quality materials and
                components, ensuring durability and performance.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#00A3FF] text-4xl mb-4">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Service</h3>
              <p className="text-gray-600">
                Our team of certified technicians provides professional
                maintenance and repair services for all bicycle brands.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-[#00A3FF] text-4xl mb-4">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">30-Day Returns</h3>
              <p className="text-gray-600">
                Not completely satisfied? Return your bicycle within 30 days for
                a full refund or exchange, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from cyclists who have experienced the Velocity difference.
            </p>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold">James Donovan</h4>
                    <p className="text-gray-500 text-sm">
                      Professional Cyclist
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-gray-600 italic">
                  "The Velocity Carbon Pro is by far the best road bike I've
                  ever ridden. The responsiveness and handling are unmatched,
                  and the electronic shifting is flawless."
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#39FF14] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Mitchell</h4>
                    <p className="text-gray-500 text-sm">
                      Mountain Bike Enthusiast
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star-half-alt"></i>
                  </span>
                </div>
                <p className="text-gray-600 italic">
                  "I've taken my Apex Trail Master through some of the most
                  challenging trails, and it performs flawlessly. The suspension
                  system is incredible, and the bike feels incredibly stable."
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00A3FF] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    RK
                  </div>
                  <div>
                    <h4 className="font-bold">Robert Kim</h4>
                    <p className="text-gray-500 text-sm">Urban Commuter</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-gray-500 mr-1">
                    <i className="far fa-star"></i>
                  </span>
                </div>
                <p className="text-gray-600 italic">
                  "My E-Urban Glide has transformed my daily commute. The
                  battery life is impressive, and the integrated lights make
                  evening rides safe. Plus, it looks incredibly sleek."
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 4 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#39FF14] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    AL
                  </div>
                  <div>
                    <h4 className="font-bold">Amanda Lee</h4>
                    <p className="text-gray-500 text-sm">Weekend Rider</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500 mr-1">
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-gray-600 italic">
                  "The customer service at Velocity is exceptional. They helped
                  me find the perfect bike for my needs and provided expert
                  fitting services. I couldn't be happier with my purchase."
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
              Interested in our premium bicycles? Contact us for detailed
              information and personalized assistance.
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <i className="fas fa-phone mr-2"></i>
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                <span>WhatsApp</span>
              </a>
            </div>
            <form className="flex flex-col gap-4 max-w-xl mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF] text-gray-900 border-none placeholder-gray-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF] text-gray-900 border-none placeholder-gray-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF] text-gray-900 border-none resize-none placeholder-gray-500"
                required
                maxLength={500}
              ></textarea>
              <button
                type="submit"
                className="bg-[#00A3FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0081cc] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
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
    </div>
  );
};
export default Home;
