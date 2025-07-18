// React imports
import React from "react";
// Hooks imports
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// Components imports
import { Button } from "./Button";

interface EmailFormSectionProps {
    setShowSuccess: (showSuccess: boolean) => void;
}

export const EmailFormSection: React.FC<EmailFormSectionProps> = ({setShowSuccess}) => {
    const { t } = useTranslation();
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
              {t('productPage.form.title')}
            </h3>
            <p
              className="text-center text-amber-700 mb-8"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('productPage.form.subtitle')}
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
                  {t('productPage.form.name')}
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
                  {t('productPage.form.email')}
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
                  {t('productPage.form.phone')}
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
                  {t('productPage.form.message')}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={t('productPage.form.messagePlaceholder')}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all resize-vertical"
                  style={{ fontFamily: "Crimson Text, serif" }}
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button
                  text={t('productPage.form.submitButton')}
                  icon="fas fa-paper-plane"
                  onClick={() => {}}
                  color="amber"
                  title={t('productPage.form.submitButtonTitle')}
                  className="w-full sm:w-auto"
                />
              </div>
            </form>
          </div>
        </div>
    );
};