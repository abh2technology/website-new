import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Breadcrumbs from './components/layout/Breadcrumbs';
import RFPSection from './components/layout/RFPSection';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import InsightsPage from './pages/InsightsPage';
import PartnersPage from './pages/PartnersPage';
import CareersPage from './pages/CareersPage';
import CompanyPage from './pages/company/CompanyPage';
import ProductsDetailPage from './pages/products/ProductsDetailPage';
import ServicesDetailPage from './pages/services/ServicesDetailPage';
import IndustriesDetailPage from './pages/industries/IndustriesDetailPage';
import InsightsDetailPage from './pages/insights/InsightsDetailPage';
import PartnersDetailPage from './pages/partners/PartnersDetailPage';
import CareersDetailPage from './pages/careers/CareersDetailPage';

function App() {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();
  const location = useLocation();
  
  useEffect(() => {
    i18n.changeLanguage(language);
    // Set RTL direction for Arabic and Urdu
    const isRTL = ['ar', 'ur'].includes(language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, i18n]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} setLanguage={setLanguage} />
      <Breadcrumbs />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company/*" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/*" element={<ProductsDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/*" element={<ServicesDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/*" element={<IndustriesDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/*" element={<InsightsDetailPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/partners/*" element={<PartnersDetailPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/*" element={<CareersDetailPage />} />
        </Routes>
      </main>
      <RFPSection />
      <Footer language={language} />
    </div>
  );
}

export default App;