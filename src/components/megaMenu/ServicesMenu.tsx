import MenuSection from '../ui/MenuSection';
import { Shield, Zap, ClipboardCheck, Code, HelpCircle, FileText, Briefcase } from 'lucide-react';

interface ServicesMenuProps {
  isMobile?: boolean;
}

const ServicesMenu = ({ isMobile = false }: ServicesMenuProps) => {
  const coreServices = [
    { 
      label: 'Security Testing', 
      url: '/services/security-testing',
      icon: <Shield className="w-5 h-5 text-red-600" />,
      description: 'Penetration testing, red/blue team exercises, and vulnerability assessments'
    },
    { 
      label: 'Incident Response', 
      url: '/services/incident-response',
      icon: <Zap className="w-5 h-5 text-red-600" />,
      description: 'Rapid response to security breaches and advanced threat remediation'
    },
    { 
      label: 'Assessment Services', 
      url: '/services/assessment',
      icon: <ClipboardCheck className="w-5 h-5 text-red-600" />,
      description: 'Comprehensive security assessments and risk analysis'
    },
    { 
      label: 'DevSecOps', 
      url: '/services/devsecops',
      icon: <Code className="w-5 h-5 text-red-600" />,
      description: 'Integrating security into development and operations processes'
    },
  ];

  const additionalServices = [
    { 
      label: 'Managed Security', 
      url: '/services/managed-security',
      icon: <HelpCircle className="w-5 h-5 text-red-600" />,
      description: '24/7 monitoring and management of your security infrastructure'
    },
    { 
      label: 'Compliance Services', 
      url: '/services/compliance',
      icon: <FileText className="w-5 h-5 text-red-600" />,
      description: 'Ensuring adherence to regulatory requirements and industry standards'
    },
    { 
      label: 'Training & Certification', 
      url: '/services/training',
      icon: <Briefcase className="w-5 h-5 text-red-600" />,
      description: 'Professional development for security staff and awareness training'
    },
  ];

  if (isMobile) {
    return (
      <div className="space-y-4">
        <MenuSection 
          title="Core Services" 
          links={coreServices.map(s => ({ label: s.label, url: s.url }))} 
          isMobile={true} 
        />
        
        <MenuSection 
          title="Additional Services" 
          links={additionalServices.map(s => ({ label: s.label, url: s.url }))} 
          isMobile={true} 
        />
        
        <MenuSection title="Resources" links={[
          { label: 'Service Catalog', url: '/services/catalog' },
          { label: 'Case Studies', url: '/services/case-studies' },
          { label: 'Request Consultation', url: '/services/consultation' },
        ]} isMobile={true} />
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Core Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="flex items-start">
                <div className="mr-3 mt-1">{service.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    <a href={service.url} className="hover:text-red-600 transition-colors duration-150">{service.label}</a>
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Additional Services</h3>
        <div className="space-y-4">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="flex items-start">
                <div className="mr-3 mt-1">{service.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    <a href={service.url} className="hover:text-red-600 transition-colors duration-150">{service.label}</a>
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-1">
        <MenuSection title="Resources" links={[
          { label: 'Service Catalog', url: '/services/catalog' },
          { label: 'Case Studies', url: '/services/case-studies' },
          { label: 'White Papers', url: '/services/white-papers' },
          { label: 'Success Stories', url: '/services/success-stories' },
        ]} />
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Request a Consultation</h4>
          <p className="text-sm text-gray-600 mb-3">Speak with our security experts about your specific needs.</p>
          <a 
            href="/services/consultation"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ServicesMenu;