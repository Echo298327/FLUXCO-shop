// React import
import React from "react";

export const ContactSection: React.FC = () => {
  return (
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
  );
};
