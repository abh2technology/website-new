import MenuSection from '../ui/MenuSection';
import { Rocket, Building2, Users, Factory, Landmark, Guitar as Hospital, FileText } from 'lucide-react';

interface IndustriesMenuProps {
  isMobile?: boolean;
}

const IndustriesMenu = ({ isMobile = false }: IndustriesMenuProps) => {
  const primaryIndustries = [
    { 
      label: 'Aerospace & Defense', 
      url: '/industries/aerospace',
      icon: <Rocket className="w-5 h-5 text-red-600" />,
    },
    { 
      label: 'Energy & Utilities', 
      url: '/industries/energy',
      icon: <Factory className="w-5 h-5 text-red-600" />,
    },
    { 
      label: 'Manufacturing', 
      url: '/industries/manufacturing',
      icon: <Factory className="w-5 h-5 text-red-600" />,
    },
  ];

  const secondaryIndustries = [
    { 
      label: 'Financial Services', 
      url: '/industries/financial',
      icon: <Landmark className="w-5 h-5 text-red-600" />,
      description: 'Banking, insurance, and investment security solutions'
    },
    { 
      label: 'Consumer Markets', 
      url: '/industries/consumer',
      icon: <Users className="w-5 h-5 text-red-600" />,
      description: 'Retail, e-commerce, and consumer products protection'
    },
    { 
      label: 'Infrastructure', 
      url: '/industries/infrastructure',
      icon: <Building2 className="w-5 h-5 text-red-600" />,
      description: 'Critical infrastructure and systems security'
    },
    { 
      label: 'Government', 
      url: '/industries/government',
      icon: <Landmark className="w-5 h-5 text-red-600" />,
      description: 'Federal, state, and local government security solutions'
    },
    { 
      label: 'Healthcare', 
      url: '/industries/healthcare',
      icon: <Hospital className="w-5 h-5 text-red-600" />,
      description: 'Medical facilities and healthcare data protection'
    },
  ];

  if (isMobile) {
    return (
      <div className="space-y-4">
        <MenuSection 
          title="Primary Industries" 
          links={primaryIndustries.map(i => ({ label: i.label, url: i.url }))} 
          isMobile={true} 
        />
        
        <MenuSection 
          title="Other Industries" 
          links={secondaryIndustries.map(i => ({ label: i.label, url: i.url }))} 
          isMobile={true} 
        />
        
        <MenuSection title="Resources" links={[
          { label: 'Case Studies', url: '/industries/case-studies' },
          { label: 'Industry Solutions', url: '/industries/solutions' },
          { label: 'Compliance Guides', url: '/industries/compliance' },
        ]} isMobile={true} />
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Primary Industries</h3>
        <div className="space-y-4">
          {primaryIndustries.map((industry, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-1">{industry.icon}</div>
              <div>
                <h4 className="font-medium text-gray-800">
                  <a href={industry.url} className="hover:text-red-600 transition-colors duration-150">{industry.label}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <FileText className="w-5 h-5 text-red-600 mr-2" />
            Featured Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/industries/whitepapers/aerospace-security" className="text-sm text-blue-600 hover:text-blue-800">Whitepaper: Aerospace Security Challenges</a>
            </li>
            <li>
              <a href="/industries/whitepapers/energy-protection" className="text-sm text-blue-600 hover:text-blue-800">Guide: Energy Sector Protection</a>
            </li>
            <li>
              <a href="/industries/whitepapers/manufacturing-security" className="text-sm text-blue-600 hover:text-blue-800">Report: Manufacturing Security Trends</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Other Industries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryIndustries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="flex items-start">
                <div className="mr-3 mt-1">{industry.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    <a href={industry.url} className="hover:text-red-600 transition-colors duration-150">{industry.label}</a>
                  </h4>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-1">
        <MenuSection title="Case Studies" links={[
          { label: 'Financial Services', url: '/industries/case-studies/financial' },
          { label: 'Healthcare', url: '/industries/case-studies/healthcare' },
          { label: 'Government', url: '/industries/case-studies/government' },
          { label: 'Manufacturing', url: '/industries/case-studies/manufacturing' },
        ]} />
        
        <MenuSection title="Industry Solutions" links={[
          { label: 'Customized Solutions', url: '/industries/solutions/custom' },
          { label: 'Compliance Packages', url: '/industries/solutions/compliance' },
          { label: 'Enterprise Security', url: '/industries/solutions/enterprise' },
        ]} />
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Industry Consultation</h4>
          <p className="text-sm text-gray-600 mb-3">Get industry-specific security advice from our experts.</p>
          <a 
            href="/industries/consultation"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
          >
            Request Consultation
          </a>
        </div>
      </div>
    </>
  );
};

export default IndustriesMenu;