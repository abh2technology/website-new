import { Routes, Route, Navigate } from 'react-router-dom';
import { Users, Award, Search, ShieldCheck, Building2, Globe, Star } from 'lucide-react';

const PartnerPrograms = () => {
  const programs = [
    {
      title: "Solution Provider Program",
      description: "Resell ABH2 Technologies solutions with competitive margins and comprehensive support",
      benefits: [
        "Up to 40% partner margins",
        "Dedicated partner support",
        "Sales and technical training",
        "Marketing development funds",
        "Lead sharing program"
      ],
      requirements: [
        "Proven cybersecurity expertise",
        "Minimum annual commitment",
        "Certified sales team",
        "Technical support capability"
      ]
    },
    {
      title: "Technology Alliance Program",
      description: "Integrate your solutions with our technology for mutual customer benefits",
      benefits: [
        "Technical integration support",
        "Joint go-to-market strategies",
        "Co-marketing opportunities",
        "Shared customer success",
        "API access and documentation"
      ],
      requirements: [
        "Complementary technology",
        "Technical integration capability",
        "Shared customer base",
        "Marketing collaboration"
      ]
    },
    {
      title: "Managed Security Provider",
      description: "Deliver managed services powered by ABH2 Technologies security solutions",
      benefits: [
        "White-label solutions",
        "24/7 technical support",
        "Training and certification",
        "Flexible pricing models",
        "Customer success support"
      ],
      requirements: [
        "MSP/MSSP experience",
        "SOC capabilities",
        "Certified security team",
        "Service delivery infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Users className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner Programs</h1>
            <p className="text-xl text-gray-300">
              Join our partner ecosystem and grow your business with industry-leading security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="/partners/apply"
                  className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FindPartner = () => {
  const partners = [
    {
      name: "CyberSecure Solutions",
      location: "New York, NY",
      specialties: ["Financial Services", "Healthcare", "Government"],
      tier: "Gold",
      description: "Leading cybersecurity consultancy with 15+ years of experience",
      contact: "contact@cybersecuresolutions.com"
    },
    {
      name: "TechGuard Partners",
      location: "San Francisco, CA",
      specialties: ["Technology", "Manufacturing", "Retail"],
      tier: "Platinum",
      description: "Premier technology integrator specializing in enterprise security",
      contact: "info@techguardpartners.com"
    },
    {
      name: "SecureNet Consulting",
      location: "London, UK",
      specialties: ["Banking", "Insurance", "Professional Services"],
      tier: "Gold",
      description: "European cybersecurity leader with global reach",
      contact: "hello@securenetconsulting.co.uk"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Search className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find a Partner</h1>
            <p className="text-xl text-gray-300">
              Connect with certified ABH2 Technologies partners in your region.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Search by location..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
                <option>All Industries</option>
                <option>Financial Services</option>
                <option>Healthcare</option>
                <option>Government</option>
                <option>Technology</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
                <option>All Partner Tiers</option>
                <option>Platinum</option>
                <option>Gold</option>
                <option>Silver</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Directory */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{partner.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    partner.tier === 'Platinum' ? 'bg-purple-100 text-purple-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {partner.tier}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  {partner.location}
                </div>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={`mailto:${partner.contact}`}
                  className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
                >
                  Contact Partner
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PartnersDetailPage = () => {
  return (
    <Routes>
      <Route path="/programs" element={<PartnerPrograms />} />
      <Route path="/find" element={<FindPartner />} />
      <Route path="/" element={<Navigate to="/partners" replace />} />
    </Routes>
  );
};

export default PartnersDetailPage;