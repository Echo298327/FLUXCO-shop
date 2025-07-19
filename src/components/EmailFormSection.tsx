// React imports
import React from "react";
// Hooks imports
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// Components imports
import { Button } from "./Button";
// Types imports
import type { Product } from "../types";

interface EmailFormSectionProps {
    setShowSuccess: (showSuccess: boolean) => void;
    setShowError: (showError: boolean) => void;
    product: Product;
}

export const EmailFormSection: React.FC<EmailFormSectionProps> = ({setShowSuccess, setShowError, product}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Format date as dd-mm-yy-hh-mm-ss (safe for email subjects)
    const getFormattedTimestamp = () => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = String(now.getFullYear()).slice(-2);
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        return `${day}-${month}-${year}-${hours}-${minutes}-${seconds}`;
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        
        // Update the subject with current timestamp before submitting
        const subjectInput = form.querySelector('input[name="_subject"]') as HTMLInputElement;
        if (subjectInput) {
            subjectInput.value = `FLUX&CO New inquiry ${getFormattedTimestamp()}`;
        }
        
        const formData = new FormData(form);
        
        // Removed logging of form data to prevent exposure of sensitive information.
        
        try {
            // Submit to FormSubmit
            const response = await fetch('https://formsubmit.co/shalomber17@gmail.com', {
                method: 'POST',
                body: formData
            });
            
            console.log('Response status:', response.status);
            
            if (response.ok) {
                setShowSuccess(true);
                
                // Navigate to home after 3 seconds
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } else {
                console.error('Form submission failed');
                setShowError(true);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setShowError(true);
        }
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
              {/* FormSubmit configuration fields */}
              <input type="hidden" name="_subject" value="" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="product_name" value={product.name} />
              <input type="hidden" name="product_price" value={product.price} />
              <input type="hidden" name="inquiry_timestamp" value={new Date().toISOString()} />
              <input type="hidden" name="message" value="Customer is interested in this product and would like more information. Please contact them soon." />
              
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
              
              {/* Message is now hard-coded in hidden field for testing */}
              <div className="bg-amber-50/80 p-4 rounded-lg border border-amber-200">
                <p className="text-amber-800 text-sm" style={{ fontFamily: "Crimson Text, serif" }}>
                  <strong>{t('productPage.form.noteLabel')}</strong> {t('productPage.form.noteMessage')}
                </p>
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