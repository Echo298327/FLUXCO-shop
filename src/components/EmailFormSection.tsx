// React imports
import React from "react";
// Hooks imports
import { useNavigate } from "react-router-dom";
// Components imports
import { Button } from "./Button";

interface EmailFormSectionProps {
    setShowSuccess: (showSuccess: boolean) => void;
}

export const EmailFormSection: React.FC<EmailFormSectionProps> = ({setShowSuccess}) => {
    const navigate = useNavigate();


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSuccess(true);
        
        // Navigate to home after 3 seconds
        setTimeout(() => {
          navigate('/');
        }, 3000);
      };
    return (
        <div className="vintage-texture bg-gradient-to-b from-amber-100/90 to-amber-50/90 p-8 vintage-shadow">
          <div className="max-w-4xl mx-auto">
            <h3
              className="text-3xl font-bold text-amber-900 mb-6 text-center"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Leave Your Details
            </h3>
            <p
              className="text-center text-amber-700 mb-8"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Interested in this product? Leave your details and we'll contact you soon!
            </p>
            
            <form
              className="space-y-6 max-w-2xl mx-auto"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  className="block text-amber-800 mb-2 font-semibold"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                  style={{ fontFamily: "Crimson Text, serif" }}
                />
              </div>
              
              <div>
                <label
                  className="block text-amber-800 mb-2 font-semibold"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                  style={{ fontFamily: "Crimson Text, serif" }}
                />
              </div>
              
              <div>
                <label
                  className="block text-amber-800 mb-2 font-semibold"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                  style={{ fontFamily: "Crimson Text, serif" }}
                />
              </div>
              
              <div>
                <label
                  className="block text-amber-800 mb-2 font-semibold"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your interest in this product..."
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all resize-vertical"
                  style={{ fontFamily: "Crimson Text, serif" }}
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button
                  text="Send Message"
                  icon="fas fa-paper-plane"
                  onClick={() => {}}
                  color="amber"
                  title="Send your inquiry"
                  className="w-full sm:w-auto"
                />
              </div>
            </form>
          </div>
        </div>
    );
};