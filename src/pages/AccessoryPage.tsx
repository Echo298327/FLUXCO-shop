// React import
import React, { useState, useEffect } from "react";
// Hooks imports
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Components imports
import { SEO } from "../components/SEO";
import { StructuredData } from "../components/StructuredData";
import { Button } from "../components/Button";
import { EmailFormSection } from "../components/EmailFormSection";
import { SuccessModal } from "../components/SuccessModal";
import { ErrorModal } from "../components/ErrorModal";
import { NotFound } from "../pages/404";
// Utils imports
import { accessories } from "../utils/homeData";
import { siteConfig } from "../config/site";

const AccessoryPage: React.FC = () => {
  const { name } = useParams();
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find accessory by name (URL-encoded name)
  const accessory = accessories.find(acc => 
    encodeURIComponent(t(acc.name).toLowerCase().replace(/\s+/g, '-')) === name
  );

  if (!accessory) {
    return <NotFound />;
  }

  const handleWhatsAppContact = () => {
    const message = t("contact.lineMessages.withProduct", { productName: t(accessory.name) });
    window.open(`https://line.me/R/oaMessage/@flux.tw/?${encodeURIComponent(message)}`);
  };

  return (
    <div className="min-h-screen pt-20 vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95">
      <SEO 
        title={`${t(accessory.name)} - ${t("accessories.title")}`}
        description={`${t(accessory.name)} - ${accessory.price}. ${t("accessories.subtitle")}`}
        ogImage={`${siteConfig.fullUrl}${accessory.image}`}
        ogUrl={`${siteConfig.fullUrl}/#/accessory/${name}`}
        canonicalUrl={`${siteConfig.fullUrl}/#/accessory/${name}`}
        imageWidth={400}
        imageHeight={300}
        imageAlt={t(accessory.name)}
      />
      <StructuredData type="organization" />
      
      <div className="max-w-6xl mx-auto px-6 py-12">    
        {/* Accessory Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              onClick={() => window.history.back()}
              text={t("productPage.notFound.backButton")}
              icon="fas fa-arrow-left"
              color="light-amber"
              size="sm"
            />
            <span className="text-amber-700/60 text-sm" style={{ fontFamily: "Crimson Text, serif" }}>
              {t("accessories.title")} / {t(accessory.category)}
            </span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {t(accessory.name)}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-amber-700 font-semibold" style={{ fontFamily: "Crimson Text, serif" }}>
                Category:
              </span>
              <span 
                className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                {t(accessory.category)}
              </span>
            </div>
          </div>
        </div>

        {/* Main Accessory Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Accessory Image */}
          <div className="lg:w-1/2">
            <div className="bg-white/80 rounded-lg p-8 vintage-shadow">
              <img
                src={accessory.image}
                alt={t(accessory.name)}
                className="w-full h-auto max-h-96 object-contain sepia-filter"
              />
            </div>
          </div>

          {/* Accessory Info */}
          <div className="lg:w-1/2">
            <div className="bg-white/80 rounded-lg p-8 vintage-shadow h-fit">
              {/* Price */}
              <div className="mb-8">
                <h3 
                  className="text-2xl font-bold text-amber-900 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Price
                </h3>
                <div className="text-3xl font-bold text-amber-800" style={{ fontFamily: "Crimson Text, serif" }}>
                  {accessory.price}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppContact}
                  text={t("contact.lineButton")}
                  icon="fab fa-line"
                  color="green"
                  size="lg"
                  className="w-full"
                  title={t("productPage.contactButtonTitle")}
                />
                
                <div className="text-center">
                  <span className="text-amber-700 text-sm" style={{ fontFamily: "Crimson Text, serif" }}>
                    or
                  </span>
                </div>
                
                <Button
                  onClick={() => {
                    const formSection = document.getElementById('contact-form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  text={t("productPage.form.title")}
                  icon="fas fa-envelope"
                  color="amber"
                  size="lg"
                  className="w-full"
                />
              </div>

              {/* Category Info */}
              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <h4 
                  className="text-lg font-semibold text-amber-900 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {t(accessory.category)}
                </h4>
                <p 
                  className="text-amber-700 text-sm"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  {t("accessories.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <EmailFormSection 
        setShowSuccess={setShowSuccess} 
        setShowError={setShowError} 
        product={{
          id: 0,
          name: t(accessory.name),
          description: `${t(accessory.name)} - ${accessory.price}`,
          image: accessory.image,
          dimensionsImage: accessory.image,
          price: parseFloat(accessory.price.replace(/[^\d]/g, '')),
          vehicleSeatHeight: 0,
          vehicleHeight: 0,
          vehicleLength: 0,
          details: {}
        }} 
      />
      
      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal />
      )}
      
      {/* Error Modal */}
      {showError && (
        <ErrorModal 
          onClose={() => setShowError(false)}
          onRetry={() => {
            setShowError(false);
          }}
        />
      )}
    </div>
  );
};

export default AccessoryPage;
