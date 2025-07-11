// React import
import React from "react";

export const ProductsSection: React.FC = () => {
  return (
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
  );
};
