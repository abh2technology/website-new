import { Shield, Users, Globe, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Overview = () => {
  const { t } = useTranslation('about');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('overview.hero.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('overview.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('overview.company.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('overview.company.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">{t('overview.company.stats.clients')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                  <div className="text-gray-600">{t('overview.company.stats.countries')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
                  <div className="text-gray-600">{t('overview.company.stats.experts')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-gray-600">{t('overview.company.stats.support')}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('overview.global.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('overview.global.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('overview.global.regions.northAmerica')}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>San Francisco (HQ)</li>
                <li>New York</li>
                <li>Toronto</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('overview.global.regions.europe')}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>London</li>
                <li>Paris</li>
                <li>Berlin</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('overview.global.regions.asiaPacific')}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Tokyo</li>
                <li>Singapore</li>
                <li>Sydney</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('overview.recognition.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('overview.recognition.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((award) => (
              <div key={award} className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t('overview.recognition.award.title')}
                </h3>
                <p className="text-gray-600">
                  {t('overview.recognition.award.description')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;