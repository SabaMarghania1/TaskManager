import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");
  const [isSwapping, setIsSwapping] = useState(false);

  const swapLanguage = () => {
    console.log("Button clicked"); // Debugging to check if the function is triggered
    setIsSwapping(true);
    setTimeout(() => {
      const newLang = language === "en" ? "ka" : "en";
      i18n.changeLanguage(newLang);
      setLanguage(newLang);
      setIsSwapping(false);
    }, 300);
  };

  return (
    <button
      onClick={swapLanguage}
      onTouchStart={swapLanguage}
      className="relative z-50 flex justify-center items-center h-10 w-20 overflow-hidden text-gray-800 hover:text-black transition-colors duration-300"
    >
      <span
        className={`absolute transition-transform duration-300 ${
          isSwapping ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {language.toUpperCase()}
      </span>

      <span
        className={`absolute transition-transform duration-300 ${
          isSwapping ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ opacity: isSwapping ? 1 : 0 }}
      >
        {language === "en" ? "KA" : "EN"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
