import React from 'react';

function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-4">
            We're always looking for talented individuals to join our growing team. Explore our current openings and find your next opportunity with us.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Openings
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Culture</h2>
          <p className="text-gray-600 mb-4">
            We foster an inclusive, innovative environment where creativity and collaboration thrive. Learn about our values and what makes our workplace special.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
          <p className="text-gray-600 mb-4">
            We offer competitive compensation and comprehensive benefits to support our employees' well-being and professional growth.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View Benefits
          </button>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;