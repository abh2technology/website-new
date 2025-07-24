import MenuSection from '../ui/MenuSection';
import { Briefcase, Users, Heart, GraduationCap, UserPlus } from 'lucide-react';

interface CareersMenuProps {
  isMobile?: boolean;
}

const CareersMenu = ({ isMobile = false }: CareersMenuProps) => {
  const featuredPositions = [
    {
      title: "Senior Security Analyst",
      location: "New York, NY",
      department: "Security Operations",
      url: "/careers/openings/senior-security-analyst"
    },
    {
      title: "Software Engineer, Backend",
      location: "San Francisco, CA",
      department: "Engineering",
      url: "/careers/openings/backend-engineer"
    },
    {
      title: "Product Marketing Manager",
      location: "Boston, MA",
      department: "Marketing",
      url: "/careers/openings/product-marketing-manager"
    },
    {
      title: "Security Consultant",
      location: "Remote, US",
      department: "Professional Services",
      url: "/careers/openings/security-consultant"
    }
  ];

  if (isMobile) {
    return (
      <div className="space-y-4">
        <MenuSection title="Careers at ABH2" links={[
          { label: 'Current Openings', url: '/careers/openings' },
          { label: 'Benefits', url: '/careers/benefits' },
          { label: 'Culture', url: '/careers/culture' },
          { label: 'Development Programs', url: '/careers/development' },
          { label: 'Alumni Network', url: '/careers/alumni' },
        ]} isMobile={true} />
        
        <div className="border-t border-gray-700 mt-4 pt-4">
          <h3 className="font-semibold text-white mb-3">Featured Positions</h3>
          {featuredPositions.slice(0, 3).map((position, index) => (
            <div key={index} className="mb-3">
              <a href={position.url} className="text-red-400 hover:text-red-300 font-medium">{position.title}</a>
              <p className="text-xs text-gray-400">{position.location} • {position.department}</p>
            </div>
          ))}
          <a href="/careers/openings" className="text-sm text-white hover:text-red-300">View all openings →</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center">
          <Briefcase className="w-5 h-5 text-red-600 mr-2" />
          Featured Positions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPositions.map((position, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <h4 className="font-medium text-gray-800 mb-1">
                <a href={position.url} className="hover:text-red-600 transition-colors duration-150">{position.title}</a>
              </h4>
              <p className="text-sm text-gray-500 mb-3">{position.location} • {position.department}</p>
              <a href={position.url} className="text-sm font-medium text-red-600 hover:text-red-800">
                View Details →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-5 text-center">
          <a 
            href="/careers/openings"
            className="inline-block px-5 py-2.5 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
          >
            View All Open Positions
          </a>
        </div>
      </div>
      
      <div className="md:col-span-1">
        <MenuSection 
          title="Why ABH2 Technologies" 
          icon={<Heart className="w-5 h-5 text-red-600" />}
          links={[
            { label: 'Our Mission & Values', url: '/careers/mission' },
            { label: 'Diversity & Inclusion', url: '/careers/diversity' },
            { label: 'Work Environment', url: '/careers/environment' },
            { label: 'Innovation Culture', url: '/careers/innovation' },
          ]} 
        />
        
        <MenuSection 
          title="Life at ABH2" 
          icon={<Users className="w-5 h-5 text-red-600" />}
          links={[
            { label: 'Employee Stories', url: '/careers/stories' },
            { label: 'Office Locations', url: '/careers/locations' },
            { label: 'Social Impact', url: '/careers/impact' },
            { label: 'Work-Life Balance', url: '/careers/balance' },
          ]} 
        />
      </div>
      
      <div className="md:col-span-1">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg border border-blue-100">
          <div className="flex items-start mb-4">
            <UserPlus className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Referral Program</h3>
              <p className="text-sm text-blue-700">Know someone perfect for ABH2? Refer talent and earn rewards!</p>
            </div>
          </div>
          <a 
            href="/careers/referrals"
            className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-150"
          >
            Learn About Referrals
          </a>
        </div>
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <GraduationCap className="w-5 h-5 text-red-600 mr-2" />
            Development Programs
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="/careers/development/internships" className="hover:text-red-600">Internship Program</a>
            </li>
            <li>
              <a href="/careers/development/new-grad" className="hover:text-red-600">New Graduate Program</a>
            </li>
            <li>
              <a href="/careers/development/mentorship" className="hover:text-red-600">Mentorship Opportunities</a>
            </li>
            <li>
              <a href="/careers/development/leadership" className="hover:text-red-600">Leadership Development</a>
            </li>
          </ul>
        </div>
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Benefits & Perks</h4>
          <p className="text-sm text-gray-600 mb-3">Discover the comprehensive benefits package we offer to our team members.</p>
          <a 
            href="/careers/benefits"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
          >
            View Benefits
          </a>
        </div>
      </div>
    </>
  );
};

export default CareersMenu;