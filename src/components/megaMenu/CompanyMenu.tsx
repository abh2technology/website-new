import MenuSection from '../ui/MenuSection';
import { ExternalLink } from 'lucide-react';

interface CompanyMenuProps {
  isMobile?: boolean;
}

const CompanyMenu = ({ isMobile = false }: CompanyMenuProps) => {
  if (isMobile) {
    return (
      <div className="space-y-4">
        <MenuSection title="About Us" links={[
          { label: 'Overview', url: '/company/about/overview' },
          { label: 'Values', url: '/company/about/values' },
          { label: 'People', url: '/company/about/people' },
          { label: 'History', url: '/company/about/history' },
        ]} isMobile={true} />
        
        <MenuSection title="Media" links={[
          { label: 'Press', url: '/company/media/press' },
          { label: 'Coverage', url: '/company/media/coverage' },
          { label: 'Brand Guidelines', url: '/company/media/brand-guidelines' },
        ]} isMobile={true} />
        
        <MenuSection title="More" links={[
          { label: 'Strategic Alliances', url: '/company/strategic-alliances' },
          { label: 'Corporate Governance', url: '/company/corporate-governance' },
          { label: 'Investor Relations', url: '/company/investor-relations' },
          { label: 'Our Business', url: '/company/our-business' },
          { label: 'Sustainability & Social Impact', url: '/company/sustainability' },
          { label: 'Ethics & Compliance', url: '/company/ethics' },
          { label: 'Economic Impact', url: '/company/economic-impact' },
          { label: 'Global Locations', url: '/company/locations' },
        ]} isMobile={true} />
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-1">
        <MenuSection title="About Us" links={[
          { label: 'Overview', url: '/company/about/overview' },
          { label: 'Values', url: '/company/about/values' },
          { label: 'People', url: '/company/about/people' },
          { label: 'History', url: '/company/about/history' },
        ]} />
        
        <MenuSection title="Media" links={[
          { label: 'Press', url: '/company/media/press' },
          { label: 'Coverage', url: '/company/media/coverage' },
          { label: 'Brand Guidelines', url: '/company/media/brand-guidelines' },
        ]} />
      </div>
      
      <div className="md:col-span-1">
        <MenuSection title="Strategic Alliances" links={[
          { label: 'Overview', url: '/company/alliances/overview' },
          { label: 'Partnerships', url: '/company/alliances/partnerships' },
          { label: 'Affiliations', url: '/company/alliances/affiliations' },
        ]} />
        
        <MenuSection title="Corporate Governance" links={[
          { label: 'Board', url: '/company/governance/board' },
          { label: 'Policies', url: '/company/governance/policies' },
        ]} />
        
        <MenuSection title="Investor Relations" links={[
          { label: 'Financial Information', url: '/company/investors/financial' },
          { label: 'Stock Information', url: '/company/investors/stock' },
        ]} />
      </div>
      
      <div className="md:col-span-1">
        <MenuSection title="Our Business" links={[
          { label: 'Industry Segments', url: '/company/business/segments' },
        ]} />
        
        <MenuSection title="Sustainability & Social Impact" links={[
          { label: 'Overview', url: '/company/sustainability/overview' },
          { label: 'Initiatives', url: '/company/sustainability/initiatives' },
          { label: 'Reports', url: '/company/sustainability/reports' },
        ]} />
        
        <MenuSection title="Ethics & Compliance" links={[
          { label: 'Code of Conduct', url: '/company/ethics/code' },
          { label: 'Compliance Programs', url: '/company/ethics/programs' },
        ]} />
      </div>
      
      <div className="md:col-span-1">
        <MenuSection title="Economic Impact" links={[
          { label: 'Reports', url: '/company/economic/reports' },
          { label: 'Analysis', url: '/company/economic/analysis' },
        ]} />
        
        <MenuSection title="Global Locations" links={[
          { label: 'Headquarters', url: '/company/locations/headquarters' },
          { label: 'Regional Offices', url: '/company/locations/regional' },
          { label: 'Find Us', url: '/company/locations/find' },
        ]} />
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Annual Report</h4>
          <p className="text-sm text-gray-600 mb-3">Download our latest annual report to learn about our achievements and plans.</p>
          <a 
            href="/company/reports/annual"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
          >
            Download PDF <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default CompanyMenu;