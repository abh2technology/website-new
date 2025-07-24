import { useState } from 'react';
import { Shield, Database, Lock, Server, Users, ChevronRight, ArrowRight, Play, Check, Globe, Award, Zap, AlertTriangle, Star, TrendingUp, Eye, Clock, Calendar } from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('enterprise');
  
  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Eye className="w-6 h-6" /> },
    { number: '150+', label: 'Security Experts', icon: <Shield className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Shield className="w-16 h-16 text-red-600" />,
      title: 'Advanced Protection',
      description: 'Next-generation security features protecting against sophisticated cyber threats',
      gradient: 'from-red-50 to-red-100'
    },
    {
      icon: <Zap className="w-16 h-16 text-blue-600" />,
      title: 'Real-time Response',
      description: 'Instant threat detection and automated response capabilities',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Globe className="w-16 h-16 text-green-600" />,
      title: 'Global Coverage',
      description: 'Worldwide security operations centers ensuring 24/7 protection',
      gradient: 'from-green-50 to-green-100'
    },
    {
      icon: <Award className="w-16 h-16 text-purple-600" />,
      title: 'Industry Leading',
      description: 'Recognized by top analysts for our innovative security solutions',
      gradient: 'from-purple-50 to-purple-100'
    }
  ];

  const clientLogos = [
    { name: 'Microsoft', url: 'https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg' },
    { name: 'Google', url: 'https://images.pexels.com/photos/5473303/pexels-photo-5473303.jpeg' },
    { name: 'Amazon', url: 'https://images.pexels.com/photos/5473304/pexels-photo-5473304.jpeg' },
    { name: 'IBM', url: 'https://images.pexels.com/photos/5473305/pexels-photo-5473305.jpeg' },
    { name: 'Oracle', url: 'https://images.pexels.com/photos/5473306/pexels-photo-5473306.jpeg' },
    { name: 'Salesforce', url: 'https://images.pexels.com/photos/5473307/pexels-photo-5473307.jpeg' },
    { name: 'Adobe', url: 'https://images.pexels.com/photos/5473308/pexels-photo-5473308.jpeg' },
    { name: 'Intel', url: 'https://images.pexels.com/photos/5473309/pexels-photo-5473309.jpeg' },
    { name: 'Cisco', url: 'https://images.pexels.com/photos/5473310/pexels-photo-5473310.jpeg' },
    { name: 'Dell', url: 'https://images.pexels.com/photos/5473311/pexels-photo-5473311.jpeg' }
  ];

  const certifications = [
    { name: 'ISO 27001 Certified', logo: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg' },
    { name: 'SOC 2 Type II Compliant', logo: 'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg' },
    { name: 'GDPR Compliant', logo: 'https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg' },
    { name: 'HIPAA Compliant', logo: 'https://images.pexels.com/photos/5473958/pexels-photo-5473958.jpeg' },
    { name: 'PCI DSS Level 1 Certified', logo: 'https://images.pexels.com/photos/5473959/pexels-photo-5473959.jpeg' }
  ];

  const advisories = [
    {
      title: 'OpenSSL Critical Update',
      date: '2023-11-15',
      severity: 'High',
      severityColor: 'bg-orange-500',
      impact: 'Medium'
    },
    {
      title: 'CMS Zero-day Alert',
      date: '2023-12-03',
      severity: 'Critical',
      severityColor: 'bg-red-600',
      impact: 'High'
    },
    {
      title: 'Network Protocol Update',
      date: '2024-01-10',
      severity: 'Medium',
      severityColor: 'bg-yellow-500',
      impact: 'Low'
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={`${import.meta.env.VITE_VIDEO_URL_1 || 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC'}`} type="video/mp4" />
            <source src={`${import.meta.env.VITE_VIDEO_URL_2 || '/assets/hero-video-fallback.mp4'}`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/70 to-gray-800/80"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600/5 to-blue-600/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 500+ Enterprise Clients
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Securing the Future
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  of Digital Business
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
                Comprehensive cybersecurity solutions designed to protect your most valuable assets from evolving threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/products" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25"
                >
                  Explore Solutions 
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="/services/consultation" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <section className="py-16 bg-white overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-900">Trusted by Industry Leaders</h2>
        </div>
        <div className="relative w-full client-logos-mask">
          <div className="flex space-x-12 animate-scroll">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-none w-[200px] h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={client.url}
                  alt={`${client.name} logo`}
                  className="max-h-[60px] w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-2xl mb-4 group-hover:bg-red-600/30 transition-all duration-300">
                  <div className="text-red-400 group-hover:text-red-300 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Why Choose ABH2 Technologies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry-Leading Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by expert teams and innovative technology, delivering unparalleled protection for your digital assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent">
                  <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Compliance & Certifications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4 mr-2" />
              Compliance & Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Maintaining the Highest Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive compliance portfolio demonstrates our commitment to data security and privacy excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-green-800 transition-colors duration-300 text-sm">
                    {cert.name}
                  </span>
                </div>
                <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transform scale-x-100 group-hover:scale-x-110 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Security Advisories Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Latest Security Advisories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Ahead of Emerging Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time threat intelligence and security updates to keep your organization protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {advisories.map((advisory, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${advisory.severityColor} shadow-lg`}>
                      {advisory.severity}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {advisory.date}
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                      {advisory.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Impact: {advisory.impact}</span>
                    <a href="#" className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      View Details <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/security/advisories"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-semibold hover:from-black hover:to-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View All Advisories <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-xl mb-12 text-red-100 max-w-3xl mx-auto">
              Connect with our security experts to discuss your specific needs and discover how ABH2 Technologies can help protect your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/services/consultation" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="/products/demo" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="mr-2 w-5 h-5" />
                Request a Demo
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;