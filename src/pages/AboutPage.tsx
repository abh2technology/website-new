import { useTranslation } from 'react-i18next';
import { Shield, Users, History, Globe, Award } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Securing Tomorrow's Digital World
            </h1>
            <p className="text-xl text-gray-300">
              ABH2 Technologies is a global leader in cybersecurity solutions, 
              protecting organizations from evolving digital threats through 
              innovation and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're dedicated to creating a safer digital world through innovative 
                cybersecurity solutions and unwavering commitment to our clients' 
                security.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Security First
                    </h3>
                    <p className="text-gray-600">
                      We prioritize security in everything we do, ensuring our 
                      clients' assets are protected against evolving threats.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Client Partnership
                    </h3>
                    <p className="text-gray-600">
                      We build lasting relationships with our clients, understanding 
                      their unique needs and delivering tailored solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Global Impact
                    </h3>
                    <p className="text-gray-600">
                      Our solutions protect organizations worldwide, making the 
                      digital landscape safer for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((leader) => (
              <div key={leader} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Executive Name
                  </h3>
                  <p className="text-gray-600 mb-4">Position Title</p>
                  <p className="text-gray-600 text-sm">
                    Brief biography and background information about the executive.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <History className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-lg text-gray-600">
              From our founding to today, we've been at the forefront of 
              cybersecurity innovation and excellence.
            </p>
          </div>
          <div className="space-y-12">
            {[2020, 2021, 2022, 2023].map((year) => (
              <div key={year} className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-red-600">{year}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Milestone Title
                  </h3>
                  <p className="text-gray-600">
                    Description of the significant milestone or achievement from 
                    this year in the company's history.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-300">
              Our commitment to excellence has been recognized by industry leaders 
              and organizations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((award) => (
              <div key={award} className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Award Name</h3>
                <p className="text-gray-400">Brief description of the award and its significance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Securing the Digital Future
            </h2>
            <p className="text-xl mb-8">
              Discover how ABH2 Technologies can help protect your organization 
              from evolving cyber threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-150"
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

export default AboutPage;