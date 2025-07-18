// React import
import React from "react";
import { useTranslation } from 'react-i18next';
import bg from "../assets/bg.jpg";
import { Button } from "./Button";

interface HeroSectionProps {
}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
    const { t } = useTranslation();
    return (
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 sepia-filter"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-amber-800/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
          <div className="max-w-2xl">
            <h2
              className="text-6xl font-bold text-amber-50 mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {t('hero.title')}
              <br />
              <span className="text-amber-200">{t('hero.titleAccent')}</span>
            </h2>
            <p
              className="text-xl text-amber-100 mb-8 leading-relaxed"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              {t('hero.subtitle')}
            </p>
            <Button
              text={t('hero.cta')}
              icon="fab fa-line"
              onClick={() => {
              const message = t('contact.lineMessages.general');
              const lineUrl = `https://line.me/R/ti/p/584464896?text=${encodeURIComponent(message)}`;
              window.open(lineUrl, "_blank");
            }}
              color="amber"
              title={t('hero.cta')}
            />
          </div>
        </div>
      </section>
    );
  };
  