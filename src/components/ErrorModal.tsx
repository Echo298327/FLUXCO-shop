// React imports
import React from "react";
// Hooks imports
import { useTranslation } from 'react-i18next';
// Utils imports
import { handleLineContact } from "../utils/globalFuncs";

interface ErrorModalProps {
    onClose: () => void;
    onRetry: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ onClose, onRetry }) => {
    const { t } = useTranslation();
    
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center transform">
                <div className="mb-6">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-exclamation-triangle text-4xl text-red-600"></i>
                    </div>
                    <h3
                        className="text-2xl font-bold text-amber-900 mb-2"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {t('productPage.error.title')}
                    </h3>
                    <p
                        className="text-amber-700 mb-4"
                        style={{ fontFamily: "Crimson Text, serif" }}
                    >
                        {t('productPage.error.message')}
                    </p>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={onRetry}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                        style={{ fontFamily: "Crimson Text, serif" }}
                    >
                        <i className="fas fa-redo mr-2"></i>
                        {t('productPage.error.retryButton')}
                    </button>
                    
                    <button
                        onClick={() => handleLineContact()}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                        style={{ fontFamily: "Crimson Text, serif" }}
                    >
                        <i className="fab fa-line mr-2"></i>
                        {t('productPage.error.lineButton')}
                    </button>
                    
                    <div className="text-center text-amber-700 text-sm" style={{ fontFamily: "Crimson Text, serif" }}>
                        <a 
                            href="tel:0983362103"
                            className="hover:text-amber-600 transition-colors cursor-pointer block"
                        >
                            <i className="fas fa-phone mr-2"></i>
                            {t('contact.phone')}
                        </a>
                    </div>
                    
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                        style={{ fontFamily: "Crimson Text, serif" }}
                    >
                        {t('productPage.error.closeButton')}
                    </button>
                </div>
            </div>
        </div>
    );
}; 