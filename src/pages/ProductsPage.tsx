import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Database, Lock, Server, Users, ChevronRight } from 'lucide-react';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'firewall-shield',
      name: 'FirewallShield',
      category: 'network',
      icon: <Shield className="w-12 h-12 text-red-600" />,
      description: 'Advanced network protection with real-time threat monitoring',
      features: [
        'Intelligent threat detection',
        'Automated response capabilities',
        'Real-time monitoring',
        'Advanced analytics'
      ]
    },
    {
      id: 'secure365',
      name: 'Secure365',
      category: 'security',
      icon: <Lock className="w-12 h-12 text-blue-600" />,
      description: 'Continuous security monitoring and protection',
      features: [
        '24/7 monitoring',
        'Incident response',
        'Threat intelligence',
        'Security analytics'
      ]
    },
    {
      id: 'compliance-hub',
      name: 'ComplianceHub',
      category: 'compliance',
      icon: <Database className="w-12 h-12 text-green-600" />,
      description: 'Streamlined compliance management and reporting',
      features: [
        'Automated compliance checks',
        'Policy management',
        'Audit trails',
        'Compliance reporting'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security Products Suite
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive cybersecurity solutions designed to protect your organization 
              from evolving digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Protection</h3>
              <p className="text-gray-600">
                State-of-the-art security features protecting against the latest threats
              </p>
            </div>
            <div className="text-center">
              <Server className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible and scalable to meet your organization's growing needs
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock expert support to ensure your security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our security solutions
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;