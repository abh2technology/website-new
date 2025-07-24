import MenuSection from '../ui/MenuSection';
import { Users, Award, Search, ShieldCheck } from 'lucide-react';

interface PartnersMenuProps {
  isMobile?: boolean;
}

const PartnersMenu = ({ isMobile = false }: PartnersMenuProps) => {
  const partnerPrograms = [
    {
      title: "Solution Provider",
      description: "Resell ABH2 Technologies solutions with competitive margins and comprehensive support.",
      url: "/partners/programs/solution-provider"
    },
    {
      title: "Technology Alliance",
      description: "Integrate your solutions with our technology for mutual customer benefits.",
      url: "/partners/programs/technology-alliance"
    },
    {
      title: "Managed Security Provider",
      description: "Deliver managed services powered by ABH2 Technologies security solutions.",
      url: "/partners/programs/msp"
    }
  ];

  if (isMobile) {
    return (
      <div className="space-y-4">
        <MenuSection title="Partner Programs" links={[
          { label: 'Solution Provider', url: '/partners/programs/solution-provider' },
          { label: 'Technology Alliance', url: '/partners/programs/technology-alliance' },
          { label: 'Managed Security Provider', url: '/partners/programs/msp' },
        ]} isMobile={true} />
        
        <MenuSection title="Resources" links={[
          { label: 'Partner Portal', url: '/partners/portal' },
          { label: 'Find a Partner', url: '/partners/find' },
          { label: 'Become a Partner', url: '/partners/apply' },
          { label: 'Partner Training', url: '/partners/training' },
          { label: 'Marketing Resources', url: '/partners/marketing' },
        ]} isMobile={true} />
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center">
          <Users className="w-5 h-5 text-red-600 mr-2" />
          Partner Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <h4 className="font-medium text-gray-800 mb-2">
                <a href={program.url} className="hover:text-red-600 transition-colors duration-150">{program.title}</a>
              </h4>
              <p className="text-sm text-gray-600 mb-3">{program.description}</p>
              <a href={program.url} className="text-sm font-medium text-red-600 hover:text-red-800">
                Learn More →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex items-start">
            <Award className="w-8 h-8 text-red-600 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Partner Recognition Program</h3>
              <p className="text-gray-600 mb-4">We celebrate our top-performing partners through our recognition program, offering exclusive benefits, priority support, and marketing opportunities.</p>
              <a 
                href="/partners/recognition"
                className="inline-block px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
              >
                Learn About Recognition Tiers
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-1">
        <MenuSection 
          title="Partner Portal" 
          icon={<ShieldCheck className="w-5 h-5 text-red-600" />}
          links={[
            { label: 'Login to Portal', url: '/partners/portal/login' },
            { label: 'Deal Registration', url: '/partners/portal/deals' },
            { label: 'Sales Resources', url: '/partners/portal/sales' },
            { label: 'Technical Support', url: '/partners/portal/support' },
          ]} 
        />
        
        <div className="mt-6 flex flex-col items-center bg-gray-100 p-4 rounded-lg">
          <Search className="w-8 h-8 text-red-600 mb-2" />
          <h4 className="font-semibold text-gray-800 mb-2 text-center">Find a Partner</h4>
          <p className="text-sm text-gray-600 mb-4 text-center">Connect with certified ABH2 Technologies partners in your region.</p>
          <a 
            href="/partners/find"
            className="inline-block w-full text-center px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
          >
            Partner Directory
          </a>
        </div>
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Become a Partner</h4>
          <p className="text-sm text-gray-600 mb-3">Join our partner ecosystem and grow your business with industry-leading security solutions.</p>
          <a 
            href="/partners/apply"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-150"
          >
            Apply Now
          </a>
        </div>
      </div>
      
      <div className="md:col-span-1">
        <MenuSection title="Partner Resources" links={[
          { label: 'Training & Certification', url: '/partners/training' },
          { label: 'Marketing Resources', url: '/partners/marketing' },
          { label: 'Technical Documentation', url: '/partners/documentation' },
          { label: 'Partner Events', url: '/partners/events' },
          { label: 'Success Stories', url: '/partners/success-stories' },
        ]} />
        
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-2">Partner Newsletter</h4>
          <p className="text-sm text-blue-700 mb-3">Stay updated with the latest partner news, resources, and opportunities.</p>
          <form className="space-y-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-150"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartnersMenu;