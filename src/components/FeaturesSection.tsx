// React import
import React from "react";

export const FeaturesSection: React.FC = () => {
  return (
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
              Not completely satisfied? Return your bicycle within 30 days for a
              full refund or exchange, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
