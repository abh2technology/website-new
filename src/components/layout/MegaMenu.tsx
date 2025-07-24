import CompanyMenu from '../megaMenu/CompanyMenu';
import ProductsMenu from '../megaMenu/ProductsMenu';
import ServicesMenu from '../megaMenu/ServicesMenu';
import IndustriesMenu from '../megaMenu/IndustriesMenu';
import InsightsMenu from '../megaMenu/InsightsMenu';
import PartnersMenu from '../megaMenu/PartnersMenu';
import CareersMenu from '../megaMenu/CareersMenu';

interface MegaMenuProps {
  activeMenu: string | null;
  isMobile?: boolean;
}

const MegaMenu = ({ activeMenu, isMobile = false }: MegaMenuProps) => {
  // Default container styles
  const containerClasses = isMobile 
    ? "text-white py-2" 
    : "container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-6";

  return (
    <div className={containerClasses}>
      {activeMenu === 'company' && <CompanyMenu isMobile={isMobile} />}
      {activeMenu === 'products' && <ProductsMenu isMobile={isMobile} />}
      {activeMenu === 'services' && <ServicesMenu isMobile={isMobile} />}
      {activeMenu === 'industries' && <IndustriesMenu isMobile={isMobile} />}
      {activeMenu === 'insights' && <InsightsMenu isMobile={isMobile} />}
      {activeMenu === 'partners' && <PartnersMenu isMobile={isMobile} />}
      {activeMenu === 'careers' && <CareersMenu isMobile={isMobile} />}
    </div>
  );
};

export default MegaMenu;