import { useState } from 'react';
import { Shield, Zap, ClipboardCheck, Code, HelpCircle, FileText, Briefcase, ChevronRight, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState('security-testing');

  const services = [
    {
      id: 'security-testing',
      title: 'Security Testing',
      description: 'Comprehensive security assessment and penetration testing services.',
      icon: <Shield className="w-12 h-12 text-red-600" />,
      features: [
        'Vulnerability Assessment',
        'Penetration Testing',
        'Code Security Review',
        'Infrastructure Testing'
      ]
    },
    {
      id: 'incident-response',
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents.',
      icon: <Zap className="w-12 h-12 text-red-600" />,
      features: [
        '24/7 Emergency Response',
        'Incident Investigation',
        'Threat Containment',
        'Recovery Planning'
      ]
    },
    {
      id: 'managed-security',
      title: 'Managed Security',
      description: 'Continuous monitoring and management of your security infrastructure.',
      icon: <HelpCircle className="w-12 h-12 text-red-600" />,
      features: [
        'Security Monitoring',
        'Threat Detection',
        'Security Updates',
        'Compliance Management'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Security Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security solutions tailored to protect your organization's digital assets and infrastructure.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
            >
              Schedule a Consultation <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ChevronRight className="w-5 h-5 text-red-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-800"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">Thorough evaluation of your security needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-gray-600">Development of customized security strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">Execution of security measures and protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <p className="text-gray-600">Continuous oversight and optimization of security systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team of security experts to discuss your specific needs and discover how we can help protect your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-150"
            >
              Contact Us
            </a>
            <a 
              href="/services/pricing" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;