import { Shield, Users, Lightbulb, Target, Heart, Globe } from 'lucide-react';

const Values = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Values
            </h1>
            <p className="text-xl text-gray-300">
              The core principles that guide our mission to secure the digital 
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Security First
              </h3>
              <p className="text-gray-600">
                We prioritize security in everything we do, ensuring our clients' 
                assets are protected against evolving threats.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Client Partnership
              </h3>
              <p className="text-gray-600">
                We build lasting relationships with our clients, understanding 
                their unique needs and delivering tailored solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Lightbulb className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously innovate and adapt to stay ahead of emerging 
                threats and technological advances.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from 
                solution development to customer service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We conduct our business with the highest standards of integrity 
                and ethical behavior.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Impact
              </h3>
              <p className="text-gray-600">
                We work to make a positive impact on global cybersecurity, 
                protecting organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To secure the digital future by providing innovative cybersecurity 
              solutions that protect organizations and enable their growth in an 
              increasingly connected world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  Protect
                </div>
                <p className="text-gray-600">
                  Safeguarding digital assets and infrastructure
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  Innovate
                </div>
                <p className="text-gray-600">
                  Advancing security technology
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  Enable
                </div>
                <p className="text-gray-600">
                  Empowering digital transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;