import { Users, Award, Star, BookOpen } from 'lucide-react';

const People = () => {
  const executives = [
    {
      name: "John Smith",
      title: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "20+ years of experience in cybersecurity and technology leadership."
    },
    {
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      bio: "Leading innovation in security technology and product development."
    },
    {
      name: "Michael Chen",
      title: "Chief Security Officer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      bio: "Expert in enterprise security and threat prevention."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our People
            </h1>
            <p className="text-xl text-gray-300">
              Meet the team driving innovation in cybersecurity and protecting 
              organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Executive Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exec.name}
                  </h3>
                  <p className="text-red-600 mb-4">{exec.title}</p>
                  <p className="text-gray-600">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600">
              We foster an environment of innovation, collaboration, and continuous 
              learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation First
              </h3>
              <p className="text-gray-600">
                We encourage creative thinking and new approaches to security 
                challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Collaborative Spirit
              </h3>
              <p className="text-gray-600">
                We work together across teams to deliver the best solutions for 
                our clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Continuous Learning
              </h3>
              <p className="text-gray-600">
                We invest in our people's growth and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8">
              We're always looking for talented individuals who share our passion 
              for cybersecurity and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/careers" 
                className="px-8 py-3 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-150"
              >
                View Open Positions
              </a>
              <a 
                href="/careers/culture" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors duration-150"
              >
                Learn About Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;