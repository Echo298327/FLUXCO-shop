// React import
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
import { accessories } from "../utils/accessoriesData";
import { siteConfig } from "../config/site";

const AccessoryPage: React.FC = () => {
  const { name } = useParams();
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const navigate = useNavigate();
  // Find accessory by key (language-independent)
  const accessory = accessories.find(acc => 
    acc.name.replace('accessories.items.', '') === name
  );

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set initial selected image when accessory is found
  useEffect(() => {
    if (accessory) {
      const imagesToUse = accessory.images && accessory.images.length > 0 ? accessory.images : [accessory.image];
      setSelectedImage(imagesToUse[0]);
      setCurrentImageIndex(0);
    }
  }, [accessory]);

  // Get the images array to use (either images array or single image)
  const imagesToDisplay = accessory?.images && accessory.images.length > 0 ? accessory.images : [accessory?.image || ""];

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % imagesToDisplay.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(imagesToDisplay[nextIndex]);
  }, [currentImageIndex, imagesToDisplay]);

  const previousImage = useCallback(() => {
    const prevIndex = currentImageIndex === 0 ? imagesToDisplay.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(imagesToDisplay[prevIndex]);
  }, [currentImageIndex, imagesToDisplay]);

  const selectImage = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Keyboard navigation for image slider
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (imagesToDisplay.length > 1) {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          previousImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, previousImage, imagesToDisplay.length]);

  if (!accessory) {
    return <NotFound />;
  }

  const handleWhatsAppContact = () => {
    const message = t("contact.lineMessages.withProduct", { productName: t(accessory.name) });
    const lineUrl = `https://line.me/R/ti/p/@629Ipvil?text=${encodeURIComponent(message)}`;
    window.open(lineUrl, "_blank");
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
              onClick={() => navigate("/accessories")}
              text={t("accessories.backToAccessories")}
              icon="fas fa-arrow-left"
              color="light-amber"
              size="sm"
              className="rounded-full"
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
              {/* Main Image with Navigation */}
              <div className="relative mb-4 h-96 flex items-center justify-center bg-gray-50/50 rounded-lg">
                <img
                  src={selectedImage || accessory.image}
                  alt={t(accessory.name)}
                  className="max-w-full max-h-full object-contain sepia-filter"
                />
                
                {/* Navigation Arrows - only show if multiple images */}
                {imagesToDisplay.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-200 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-200 cursor-pointer"
                      aria-label="Next image"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {currentImageIndex + 1} / {imagesToDisplay.length}
                    </div>
                  </>
                )}
              </div>
              
              {/* Image Gallery Thumbnails */}
              {imagesToDisplay.length > 1 && (
                <div className="flex gap-2">
                  {imagesToDisplay.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(image, index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                        currentImageIndex === index
                          ? "border-amber-500 scale-105"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${t(accessory.name)} ${index + 1}`}
                        className="w-full h-full object-cover sepia-filter"
                      />
                    </button>
                  ))}
                </div>
              )}
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
        redirectSection="accessories"
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
