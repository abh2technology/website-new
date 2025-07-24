import { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Check } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  const certifications = [
    {
      name: 'ISO 27001 Certified',
      logo: 'https://images.pexels.com/photos/2014773/pexels-photo-2014773.jpeg',
      tooltip: 'ISO/IEC 27001:2013 Information Security Management System'
    },
    {
      name: 'SOC 2 Type II Compliant',
      logo: 'https://images.pexels.com/photos/2014774/pexels-photo-2014774.jpeg',
      tooltip: 'SOC 2 Type II Attestation for Security, Availability, and Confidentiality'
    },
    {
      name: 'GDPR Compliant',
      logo: 'https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg',
      tooltip: 'General Data Protection Regulation (GDPR) Compliance'
    },
    {
      name: 'HIPAA Compliant',
      logo: 'https://images.pexels.com/photos/2014776/pexels-photo-2014776.jpeg',
      tooltip: 'Health Insurance Portability and Accountability Act Compliance'
    },
    {
      name: 'PCI DSS Level 1',
      logo: 'https://images.pexels.com/photos/2014777/pexels-photo-2014777.jpeg',
      tooltip: 'Payment Card Industry Data Security Standard Level 1 Service Provider'
    }
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Certifications Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center group relative"
                title={cert.tooltip}
              >
                <div className="w-6 h-6 grayscale opacity-75 group-hover:opacity-100 transition-opacity duration-200">
                  <Check className="w-full h-full" />
                </div>
                <span className="ml-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                  {cert.name}
                </span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-xs text-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                  {cert.tooltip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-red-500 mr-2" />
                <h3 className="text-xl font-bold">ABH2 Technologies</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Leading the way in cybersecurity solutions for businesses of all sizes. Protecting your digital assets is our priority.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">contact@abh2tech.com</span>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">+1 (888) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">123 Security Blvd, San Francisco, CA 94105</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Main Navigation</h3>
              <ul className="space-y-2">
                <li><a href="/company" className="text-gray-400 hover:text-white transition-colors duration-150">Our Company</a></li>
                <li><a href="/culture" className="text-gray-400 hover:text-white transition-colors duration-150">Our Culture</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-150">Careers</a></li>
                <li><a href="/locations" className="text-gray-400 hover:text-white transition-colors duration-150">Our Locations</a></li>
                <li><a href="/events" className="text-gray-400 hover:text-white transition-colors duration-150">Events</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-150">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/advertise" className="text-gray-400 hover:text-white transition-colors duration-150">Advertise with us</a></li>
                <li><a href="/partner" className="text-gray-400 hover:text-white transition-colors duration-150">Become Partner</a></li>
                <li><a href="/glossary" className="text-gray-400 hover:text-white transition-colors duration-150">Glossary</a></li>
                <li><a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-150">Cookies</a></li>
                <li><a href="/accessibility" className="text-gray-400 hover:text-white transition-colors duration-150">Accessibility</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal & Compliance</h3>
              <ul className="space-y-2">
                <li><a href="/legal" className="text-gray-400 hover:text-white transition-colors duration-150">Legal and Privacy</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-150">Privacy Policy</a></li>
                <li><a href="/website-privacy" className="text-gray-400 hover:text-white transition-colors duration-150">Website Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-150">Terms and Conditions</a></li>
                <li><a href="/compliance" className="text-gray-400 hover:text-white transition-colors duration-150">Certification & Compliance</a></li>
                <li><a href="/do-not-sell" className="text-gray-400 hover:text-white transition-colors duration-150">Do Not Sell My Personal Information</a></li>
                <li><a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-150">Cookie Policy</a></li>
                <li><a href="/modern-slavery" className="text-gray-400 hover:text-white transition-colors duration-150">Modern Slavery Act Statement</a></li>
                <li><a href="/vulnerability" className="text-gray-400 hover:text-white transition-colors duration-150">Vulnerability Disclosure Policy</a></li>
                <li><a href="/report-vulnerability" className="text-gray-400 hover:text-white transition-colors duration-150">Report Vulnerability</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-sm text-gray-400 leading-relaxed">
                  ABH2 Technologies Inc. is a US-based entity with global operations. References to 'ABH2 Technologies' encompass the global organization and its member firms, each operating as part of ABH2 and as separate legal entities where applicable. ABH2 Technologies Inc., a US company limited by guarantee, provides direct client services. Visit <a href="/governance" className="text-red-400 hover:text-red-300">ABH2 Technologies governance</a> for detailed organizational structure information.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <h4 className="text-lg font-semibold">Stay Updated</h4>
                  <p className="text-sm text-gray-400">Subscribe to our newsletter for updates and insights.</p>
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors duration-150"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} ABH2 Technologies Inc. All rights reserved.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-150">Sitemap</a>
                <a href="/help" className="text-gray-400 hover:text-white transition-colors duration-150">Help</a>
                <a href="/feedback" className="text-gray-400 hover:text-white transition-colors duration-150">Feedback</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;