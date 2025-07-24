import { Calendar, Award, Users, Globe, TrendingUp } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'ABH2 Technologies was established with a vision to revolutionize cybersecurity solutions for enterprises worldwide.',
      icon: <Users className="w-8 h-8 text-red-600" />,
      achievements: [
        'Secured initial funding of $5M',
        'Assembled founding team of security experts',
        'Launched first security assessment platform'
      ]
    },
    {
      year: '2021',
      title: 'Product Launch & Growth',
      description: 'Launched our flagship security suite and achieved significant market traction with enterprise clients.',
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      achievements: [
        'Released FirewallShield and WebGuardian',
        'Acquired 50+ enterprise clients',
        'Expanded team to 75 employees',
        'Opened European operations in London'
      ]
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations globally and achieved key industry certifications and partnerships.',
      icon: <Globe className="w-8 h-8 text-red-600" />,
      achievements: [
        'Opened offices in Tokyo and Singapore',
        'Achieved SOC 2 Type II certification',
        'Formed strategic partnerships with major cloud providers',
        'Reached 200+ enterprise clients'
      ]
    },
    {
      year: '2023',
      title: 'Innovation & Recognition',
      description: 'Launched AI-powered threat detection and received industry recognition for innovation.',
      icon: <Award className="w-8 h-8 text-red-600" />,
      achievements: [
        'Launched Insight360 with AI capabilities',
        'Named "Cybersecurity Innovator of the Year"',
        'Achieved ISO 27001 certification',
        'Expanded to 500+ enterprise clients'
      ]
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Established market leadership position and continued innovation in cybersecurity solutions.',
      icon: <Award className="w-8 h-8 text-red-600" />,
      achievements: [
        'Reached $100M ARR milestone',
        'Launched ComplianceHub platform',
        'Opened offices in Sydney and Toronto',
        'Team grew to 300+ employees globally'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Calendar className="w-12 h-12 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-gray-300">
              From a startup vision to global cybersecurity leadership - discover the milestones that shaped ABH2 Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  {/* Timeline line */}
                  {index !== milestones.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-start">
                    {/* Year and Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-8">
                      {milestone.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl font-bold text-red-600 mr-4">{milestone.year}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">{milestone.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {milestone.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Growth Story</h2>
            <p className="text-xl text-gray-600">Key metrics that showcase our journey</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5</div>
              <div className="text-gray-600">Years of Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">300+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">9</div>
              <div className="text-gray-600">Global Offices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
            <p className="text-xl mb-8">
              As we continue our journey, we remain committed to innovation, excellence, and protecting organizations worldwide from evolving cyber threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/company/about/values" 
                className="px-8 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-150"
              >
                Our Values
              </a>
              <a 
                href="/careers" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150"
              >
                Join Our Journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;