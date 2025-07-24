import { ArrowRight } from 'lucide-react';

const RFPSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Request a Proposal
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our security experts create a customized solution tailored to your organization's unique needs and challenges.
          </p>
          <a 
            href="/rfp"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
          >
            Submit RFP Request <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RFPSection;