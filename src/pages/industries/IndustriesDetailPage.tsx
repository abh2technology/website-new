import { Routes, Route, Navigate } from 'react-router-dom';
import { Building2, Landmark, Heart, Factory, Shield, FileText, Users, Award } from 'lucide-react';

const FinancialServices = () => {
  const solutions = [
    {
      title: "Banking Security",
      description: "Comprehensive protection for online banking and financial transactions",
      features: ["PCI DSS Compliance", "Fraud Detection", "Transaction Monitoring", "Customer Data Protection"]
    },
    {
      title: "Investment Protection",
      description: "Secure trading platforms and investment management systems",
      features: ["Market Data Security", "Trading Platform Protection", "Regulatory Compliance", "Risk Management"]
    },
    {
      title: "Insurance Security",
      description: "Protect sensitive customer data and claims processing systems",
      features: ["Claims Data Protection", "Underwriting Security", "Customer Portal Security", "Regulatory Compliance"]
    }
  ];

  const compliance = [
    "PCI DSS Level 1",
    "SOX Compliance",
    "GDPR Compliance",
    "FFIEC Guidelines",
    "Basel III Requirements"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Landmark className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Services Security</h1>
            <p className="text-xl text-gray-300 mb-8">
              Specialized cybersecurity solutions for banks, investment firms, and insurance companies.
            </p>
            <a href="/contact" className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-red-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FileText className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Regulatory Compliance</h2>
            <p className="text-xl text-gray-600">We help you meet all financial industry regulations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {compliance.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <span className="font-medium text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Heart className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Security</h1>
            <p className="text-xl text-gray-300 mb-8">
              HIPAA-compliant security solutions protecting patient data and medical systems.
            </p>
            <a href="/contact" className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Security Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Patient Data Protection</h3>
              <p className="text-gray-600">Securing sensitive health information and medical records</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Medical Device Security</h3>
              <p className="text-gray-600">Protecting connected medical devices and IoT systems</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">HIPAA Compliance</h3>
              <p className="text-gray-600">Ensuring compliance with healthcare regulations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Government = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Building2 className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Government Security</h1>
            <p className="text-xl text-gray-300 mb-8">
              Secure government operations with FedRAMP-authorized solutions and compliance expertise.
            </p>
            <a href="/contact" className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Government Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Government Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Federal Agencies</h3>
              <p className="text-gray-600 mb-4">Comprehensive security for federal government operations</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <Award className="w-4 h-4 text-red-600 mr-3" />
                  FedRAMP Authorized
                </li>
                <li className="flex items-center text-gray-700">
                  <Shield className="w-4 h-4 text-red-600 mr-3" />
                  FISMA Compliance
                </li>
                <li className="flex items-center text-gray-700">
                  <FileText className="w-4 h-4 text-red-600 mr-3" />
                  NIST Framework
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">State & Local</h3>
              <p className="text-gray-600 mb-4">Tailored solutions for state and local government needs</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <Users className="w-4 h-4 text-red-600 mr-3" />
                  Citizen Services Protection
                </li>
                <li className="flex items-center text-gray-700">
                  <Building2 className="w-4 h-4 text-red-600 mr-3" />
                  Infrastructure Security
                </li>
                <li className="flex items-center text-gray-700">
                  <FileText className="w-4 h-4 text-red-600 mr-3" />
                  Public Records Security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const IndustriesDetailPage = () => {
  return (
    <Routes>
      <Route path="/financial" element={<FinancialServices />} />
      <Route path="/healthcare" element={<Healthcare />} />
      <Route path="/government" element={<Government />} />
      <Route path="/" element={<Navigate to="/industries" replace />} />
    </Routes>
  );
};

export default IndustriesDetailPage;