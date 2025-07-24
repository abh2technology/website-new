import { Routes, Route, Navigate } from 'react-router-dom';
import { Shield, Zap, ClipboardCheck, Code, HelpCircle, FileText, Briefcase, Users, Clock, Award } from 'lucide-react';

const SecurityTesting = () => {
  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments simulating real-world attacks",
      features: ["Network Penetration Testing", "Web Application Testing", "Mobile App Testing", "Social Engineering Tests"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Systematic identification and classification of security vulnerabilities",
      features: ["Automated Scanning", "Manual Testing", "Risk Prioritization", "Remediation Guidance"]
    },
    {
      title: "Red Team Exercises",
      description: "Advanced adversarial simulations testing your security posture",
      features: ["Multi-vector Attacks", "Persistence Testing", "Lateral Movement", "Data Exfiltration Simulation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Shield className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Testing Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.
            </p>
            <a href="/contact" className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
              Schedule Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const IncidentResponse = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Zap className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Incident Response Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Rapid response and recovery from security incidents with 24/7 expert support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+18881234567" className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
                Emergency Hotline
              </a>
              <a href="/contact" className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Response Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Detection</h3>
              <p className="text-gray-600">Immediate threat identification and assessment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Containment</h3>
              <p className="text-gray-600">Isolate and prevent further damage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Eradication</h3>
              <p className="text-gray-600">Remove threats and vulnerabilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Recovery</h3>
              <p className="text-gray-600">Restore operations and strengthen defenses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesDetailPage = () => {
  return (
    <Routes>
      <Route path="/security-testing" element={<SecurityTesting />} />
      <Route path="/incident-response" element={<IncidentResponse />} />
      <Route path="/" element={<Navigate to="/services" replace />} />
    </Routes>
  );
};

export default ServicesDetailPage;