// React import
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export const TestimonialsSection: React.FC = () => {
  return (
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
                  <p className="text-gray-500 text-sm">Professional Cyclist</p>
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
                "The Velocity Carbon Pro is by far the best road bike I've ever
                ridden. The responsiveness and handling are unmatched, and the
                electronic shifting is flawless."
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
                "My E-Urban Glide has transformed my daily commute. The battery
                life is impressive, and the integrated lights make evening rides
                safe. Plus, it looks incredibly sleek."
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
                "The customer service at Velocity is exceptional. They helped me
                find the perfect bike for my needs and provided expert fitting
                services. I couldn't be happier with my purchase."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
