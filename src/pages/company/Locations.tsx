import { MapPin, Phone, Mail, Clock, Users, Building } from 'lucide-react';

const Locations = () => {
  const offices = [
    {
      city: "San Francisco",
      country: "United States",
      type: "Global Headquarters",
      address: "123 Security Blvd, San Francisco, CA 94105",
      phone: "+1 (415) 555-0100",
      email: "sf@abh2tech.com",
      employees: "120+",
      established: "2020",
      timezone: "PST (UTC-8)",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
      description: "Our global headquarters houses our executive team, R&D, and primary operations center.",
      specialties: ["Executive Leadership", "Research & Development", "Global Operations", "Customer Success"]
    },
    {
      city: "New York",
      country: "United States",
      type: "Regional Office",
      address: "456 Financial Ave, New York, NY 10001",
      phone: "+1 (212) 555-0200",
      email: "ny@abh2tech.com",
      employees: "45+",
      established: "2021",
      timezone: "EST (UTC-5)",
      image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg",
      description: "Our East Coast hub focusing on financial services and enterprise clients.",
      specialties: ["Financial Services", "Enterprise Sales", "Professional Services", "Compliance"]
    },
    {
      city: "London",
      country: "United Kingdom",
      type: "European Headquarters",
      address: "789 Tech Square, London EC2A 4DP",
      phone: "+44 20 7555 0300",
      email: "london@abh2tech.com",
      employees: "60+",
      established: "2021",
      timezone: "GMT (UTC+0)",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
      description: "Leading our European operations with focus on GDPR compliance and regional partnerships.",
      specialties: ["GDPR Compliance", "European Sales", "Regional Partnerships", "Localization"]
    },
    {
      city: "Tokyo",
      country: "Japan",
      type: "Asia Pacific Hub",
      address: "321 Innovation District, Tokyo 100-0001",
      phone: "+81 3 5555 0400",
      email: "tokyo@abh2tech.com",
      employees: "35+",
      established: "2022",
      timezone: "JST (UTC+9)",
      image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg",
      description: "Driving growth across Asia Pacific with culturally adapted security solutions.",
      specialties: ["APAC Sales", "Cultural Adaptation", "Regional Support", "Government Relations"]
    },
    {
      city: "Singapore",
      country: "Singapore",
      type: "Regional Office",
      address: "654 Business Park, Singapore 018956",
      phone: "+65 6555 0500",
      email: "singapore@abh2tech.com",
      employees: "25+",
      established: "2022",
      timezone: "SGT (UTC+8)",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
      description: "Supporting Southeast Asian markets with specialized security solutions.",
      specialties: ["Southeast Asia", "Financial Technology", "Cloud Security", "Technical Support"]
    },
    {
      city: "Toronto",
      country: "Canada",
      type: "Regional Office",
      address: "987 Innovation Way, Toronto, ON M5V 3A8",
      phone: "+1 (416) 555-0600",
      email: "toronto@abh2tech.com",
      employees: "30+",
      established: "2023",
      timezone: "EST (UTC-5)",
      image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
      description: "Serving Canadian enterprises with bilingual support and local expertise.",
      specialties: ["Canadian Market", "Bilingual Support", "Government Sector", "Healthcare"]
    }
  ];

  const regions = [
    {
      name: "North America",
      offices: ["San Francisco", "New York", "Toronto"],
      employees: "195+",
      description: "Our largest region with comprehensive coverage across the United States and Canada."
    },
    {
      name: "Europe",
      offices: ["London", "Paris (Coming Soon)", "Berlin (Coming Soon)"],
      employees: "60+",
      description: "Growing European presence with focus on GDPR compliance and regional partnerships."
    },
    {
      name: "Asia Pacific",
      offices: ["Tokyo", "Singapore", "Sydney (Coming Soon)"],
      employees: "60+",
      description: "Expanding across APAC with culturally adapted solutions and local expertise."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <MapPin className="w-12 h-12 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Global Locations
            </h1>
            <p className="text-xl text-gray-300">
              With offices across major technology hubs worldwide, we deliver security solutions on a global scale while maintaining local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic locations enable us to serve clients across time zones with local expertise and cultural understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{region.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600">{region.employees}</span>
                  <span className="text-gray-600 ml-2">employees</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Offices:</h4>
                  <ul className="space-y-1">
                    {region.offices.map((office, officeIndex) => (
                      <li key={officeIndex} className="text-gray-600 text-sm">{office}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600 text-sm">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each office brings unique expertise and local market knowledge to serve our global client base.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{office.city}</h3>
                      <p className="text-red-600 font-medium">{office.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{office.employees}</div>
                      <div className="text-sm text-gray-600">employees</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{office.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-gray-700 text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-gray-700 text-sm">{office.email}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-gray-700 text-sm">{office.timezone}</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-gray-700 text-sm">Est. {office.established}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              We welcome visitors at all our locations. Contact us to schedule a meeting or office tour.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
              >
                Contact Us
              </a>
              <a 
                href="/careers" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;