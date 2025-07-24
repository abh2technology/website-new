import React from 'react';
import { useTranslation } from 'react-i18next';

const IndustriesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t('industries.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Industry cards will be populated here */}
      </div>
    </div>
  );
};

export default IndustriesPage;