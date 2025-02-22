import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en'; // Toggle between English and Hindi
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="btn-secondary">
      {i18n.language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    </button>
  );
};

export default LanguageSwitcher;