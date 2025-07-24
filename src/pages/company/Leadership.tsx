import { Users, Award, Linkedin, Mail, Globe } from 'lucide-react';

const Leadership = () => {
  const executives = [
    {
      name: "John Smith",
      title: "Chief Executive Officer & Co-Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "John brings over 20 years of experience in cybersecurity and technology leadership. Prior to founding ABH2 Technologies, he served as VP of Security at a Fortune 500 company and led security transformations for global enterprises.",
      education: "MBA from Stanford, MS Computer Science from MIT",
      experience: "Former VP Security at TechCorp, Security Consultant at CyberSafe",
      linkedin: "https://linkedin.com/in/johnsmith",
      email: "john.smith@abh2tech.com"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Technology Officer & Co-Founder",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      bio: "Sarah is a visionary technologist with expertise in AI, machine learning, and cybersecurity. She has led the development of cutting-edge security solutions and holds multiple patents in threat detection technologies.",
      education: "PhD Computer Science from Carnegie Mellon, BS from UC Berkeley",
      experience: "Former Principal Engineer at Google, Research Scientist at IBM",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah.johnson@abh2tech.com"
    },
    {
      name: "Michael Chen",
      title: "Chief Security Officer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      bio: "Michael is a renowned cybersecurity expert with extensive experience in enterprise security and threat prevention. He has advised government agencies and Fortune 100 companies on security strategy.",
      education: "MS Cybersecurity from Georgetown, BS from University of Washington",
      experience: "Former CISO at FinanceSecure, Security Director at DefenseTech",
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael.chen@abh2tech.com"
    },
    {
      name: "Emily Rodriguez",
      title: "Chief Financial Officer",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      bio: "Emily brings deep financial expertise and strategic planning experience to ABH2 Technologies. She has successfully led multiple funding rounds and IPO preparations for technology companies.",
      education: "MBA Finance from Wharton, CPA",
      experience: "Former CFO at CloudTech, VP Finance at StartupAccel",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "emily.rodriguez@abh2tech.com"
    },
    {
      name: "David Kim",
      title: "Chief Operating Officer",
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg",
      bio: "David oversees global operations and business development at ABH2 Technologies. His expertise in scaling technology companies has been instrumental in our international expansion.",
      education: "MBA Operations from Kellogg, BS Industrial Engineering",
      experience: "Former COO at GlobalSoft, VP Operations at TechScale",
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david.kim@abh2tech.com"
    },
    {
      name: "Lisa Thompson",
      title: "Chief Marketing Officer",
      image: "https://images.pexels.com/photos/3760071/pexels-photo-3760071.jpeg",
      bio: "Lisa leads global marketing and brand strategy for ABH2 Technologies. She has built successful marketing organizations for B2B technology companies and driven significant growth.",
      education: "MBA Marketing from Harvard, BA Communications",
      experience: "Former CMO at MarketLeader, VP Marketing at BrandTech",
      linkedin: "https://linkedin.com/in/lisathompson",
      email: "lisa.thompson@abh2tech.com"
    }
  ];

  const boardMembers = [
    {
      name: "Robert Anderson",
      title: "Chairman of the Board",
      company: "Former CEO of CyberDefense Corp",
      bio: "Robert brings decades of cybersecurity industry experience and strategic guidance to ABH2 Technologies."
    },
    {
      name: "Jennifer Walsh",
      title: "Independent Director",
      company: "Partner at Venture Capital Partners",
      bio: "Jennifer provides valuable insights on growth strategy and technology investments."
    },
    {
      name: "Dr. Ahmed Hassan",
      title: "Independent Director",
      company: "Professor of Cybersecurity at MIT",
      bio: "Dr. Hassan offers academic perspective and research insights on emerging security technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Users className="w-12 h-12 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership Team
            </h1>
            <p className="text-xl text-gray-300">
              Meet the experienced leaders driving innovation and growth at ABH2 Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of experience in cybersecurity, technology, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{exec.title}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{exec.bio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="font-medium text-gray-700">Education: </span>
                      <span className="text-gray-600 text-sm">{exec.education}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Experience: </span>
                      <span className="text-gray-600 text-sm">{exec.experience}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a 
                      href={exec.linkedin}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-150"
                      aria-label={`${exec.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${exec.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-150"
                      aria-label={`Email ${exec.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our board provides strategic guidance and governance oversight to ensure long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 font-medium mb-3">{member.company}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
              <p className="text-xl text-gray-600">
                We believe in leading by example and fostering a culture of innovation, integrity, and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">People First</h3>
                <p className="text-gray-600">
                  We prioritize our team's growth and well-being, creating an environment where everyone can thrive.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Perspective</h3>
                <p className="text-gray-600">
                  We think globally while acting locally, understanding diverse markets and customer needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence Driven</h3>
                <p className="text-gray-600">
                  We set high standards and continuously strive to exceed expectations in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Leadership Journey</h2>
            <p className="text-xl mb-8">
              We're always looking for exceptional leaders to join our team and help shape the future of cybersecurity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/careers" 
                className="px-8 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-150"
              >
                View Leadership Opportunities
              </a>
              <a 
                href="/company/about/values" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150"
              >
                Learn About Our Values
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;