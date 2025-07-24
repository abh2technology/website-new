import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnersPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('partners.title', 'Our Partners')}
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Partner cards will be populated here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-400">Partner Logo</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('partners.partner1.name', 'Strategic Partner')}
            </h3>
            <p className="text-gray-600">
              {t('partners.partner1.description', 'Leading technology solutions provider helping businesses transform digitally.')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-400">Partner Logo</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('partners.partner2.name', 'Innovation Partner')}
            </h3>
            <p className="text-gray-600">
              {t('partners.partner2.description', 'Collaborative partner focusing on innovative solutions and research.')}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
              <span className="text-gray-400">Partner Logo</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('partners.partner3.name', 'Technology Partner')}
            </h3>
            <p className="text-gray-600">
              {t('partners.partner3.description', 'Expert in implementing cutting-edge technological solutions.')}
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('partners.become.title', 'Become a Partner')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('partners.become.description', 'Join our partner network and help shape the future of technology solutions.')}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            {t('partners.become.cta', 'Partner With Us')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;