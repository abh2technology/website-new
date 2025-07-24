import MenuSection from '../ui/MenuSection';
import { ShieldCheck, ZapOff, CheckCircle, MailCheck, BarChart2, FileCheck2, Shield } from 'lucide-react';

interface ProductsMenuProps {
  isMobile?: boolean;
}

const ProductsMenu = ({ isMobile = false }: ProductsMenuProps) => {
  const securityProducts = [
    { 
      label: 'FirewallShield', 
      url: '/products/security/firewall-shield',
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      description: 'Advanced network protection with real-time threat monitoring'
    },
    { 
      label: 'WebGuardian', 
      url: '/products/security/web-guardian',
      icon: <ZapOff className="w-5 h-5 text-red-600" />,
      description: 'Complete web application security and vulnerability prevention'
    },
    { 
      label: 'Secure365', 
      url: '/products/security/secure365',
      icon: <CheckCircle className="w-5 h-5 text-red-600" />,
      description: 'Continuous security monitoring and protection'
    },
    { 
      label: 'EmailFortify', 
      url: '/products/security/email-fortify',
      icon: <MailCheck className="w-5 h-5 text-red-600" />,
      description: 'Advanced email protection against phishing and threats'
    },
    { 
      label: 'Insight360', 
      url: '/products/security/insight360',
      icon: <BarChart2 className="w-5 h-5 text-red-600" />,
      description: 'Comprehensive security analytics and reporting'
    },
    { 
      label: 'ComplianceHub', 
      url: '/products/security/compliance-hub',
      icon: <FileCheck2 className="w-5 h-5 text-red-600" />,
      description: 'Streamlined compliance management and reporting'
    },
  ];

  const additionalProducts = [
    { label: 'PhishGuard', url: '/products/security/phish-guard' },
    { label: 'VulneraPortal', url: '/products/security/vulnera-portal' },
    { label: 'ThreatIntel', url: '/products/security/threat-intel' },
    { label: 'SecureID', url: '/products/security/secure-id' },
  ];

  if (isMobile) {
    return (
      <div className="space-y-4">
        <MenuSection 
          title="Security Suite" 
          links={securityProducts.map(p => ({ label: p.label, url: p.url }))} 
          isMobile={true} 
        />
        
        <MenuSection 
          title="Additional Products" 
          links={additionalProducts} 
          isMobile={true} 
        />
        
        <MenuSection title="More" links={[
          { label: 'Partner/Reseller Information', url: '/products/partner-info' },
          { label: 'Product Comparison Tool', url: '/products/comparison' },
          { label: 'Pricing', url: '/products/pricing' },
        ]} isMobile={true} />
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-3">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">Security Suite</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="flex items-start">
                <div className="mr-3 mt-1">{product.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    <a href={product.url} className="hover:text-red-600 transition-colors duration-150">{product.label}</a>
                  </h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-1">
        <MenuSection title="Additional Products" links={additionalProducts} />
        
        <MenuSection title="Partner/Reseller" links={[
          { label: 'Information', url: '/products/partner-info' },
          { label: 'Become a Reseller', url: '/products/become-reseller' },
        ]} />
        
        <MenuSection title="Resources" links={[
          { label: 'Product Comparison Tool', url: '/products/comparison' },
          { label: 'Pricing', url: '/products/pricing' },
          { label: 'Documentation', url: '/products/docs' },
        ]} />
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Shield className="w-5 h-5 text-red-600 mr-2" />
            Security Assessment
          </h4>
          <p className="text-sm text-gray-600 mb-3">Get a comprehensive evaluation of your security posture.</p>
          <a 
            href="/products/assessment"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
          >
            Start Free Assessment
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductsMenu;