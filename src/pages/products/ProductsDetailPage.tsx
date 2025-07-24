import { Routes, Route, Navigate } from 'react-router-dom';
import { Shield, ZapOff, CheckCircle, MailCheck, BarChart2, FileCheck2, Users, Server, Clock, Award } from 'lucide-react';

const FirewallShield = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="w-16 h-16 text-red-500 mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">FirewallShield</h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced network protection with real-time threat monitoring and intelligent response capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/products/demo" className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
                  Request Demo
                </a>
                <a href="/contact" className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150">
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Intelligent Threat Detection</h3>
              <p className="text-gray-600">AI-powered threat analysis with real-time pattern recognition</p>
            </div>
            <div className="text-center">
              <ZapOff className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Automated Response</h3>
              <p className="text-gray-600">Instant threat mitigation with customizable response protocols</p>
            </div>
            <div className="text-center">
              <BarChart2 className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Comprehensive reporting and threat intelligence insights</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const WebGuardian = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ZapOff className="w-16 h-16 text-red-500 mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">WebGuardian</h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete web application security and vulnerability prevention for modern digital platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/products/demo" className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150">
                  Request Demo
                </a>
                <a href="/contact" className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150">
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Application Firewall</h3>
              <p className="text-gray-600">Advanced WAF protection against OWASP Top 10 vulnerabilities</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vulnerability Scanning</h3>
              <p className="text-gray-600">Continuous scanning for security weaknesses and misconfigurations</p>
            </div>
            <div className="text-center">
              <Server className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">API Security</h3>
              <p className="text-gray-600">Comprehensive API protection and monitoring capabilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductsDetailPage = () => {
  return (
    <Routes>
      <Route path="/firewall-shield" element={<FirewallShield />} />
      <Route path="/web-guardian" element={<WebGuardian />} />
      <Route path="/" element={<Navigate to="/products" replace />} />
    </Routes>
  );
};

export default ProductsDetailPage;