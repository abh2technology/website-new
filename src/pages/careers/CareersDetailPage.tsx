import { Routes, Route, Navigate } from 'react-router-dom';
import { Briefcase, Users, Heart, GraduationCap, MapPin, Clock, DollarSign } from 'lucide-react';

const JobOpenings = () => {
  const openings = [
    {
      title: "Senior Security Analyst",
      department: "Security Operations",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead security incident response and threat analysis for enterprise clients.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "5+ years of security operations experience",
        "CISSP or similar certification preferred",
        "Experience with SIEM tools and threat hunting"
      ]
    },
    {
      title: "Software Engineer, Backend",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable backend systems for our security platform.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "3+ years of backend development experience",
        "Proficiency in Python, Go, or Java",
        "Experience with cloud platforms (AWS, GCP, Azure)"
      ]
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Boston, MA",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive go-to-market strategy for our cybersecurity solutions.",
      requirements: [
        "Bachelor's degree in Marketing or Business",
        "4+ years of B2B product marketing experience",
        "Cybersecurity industry knowledge preferred",
        "Strong analytical and communication skills"
      ]
    },
    {
      title: "Security Consultant",
      department: "Professional Services",
      location: "Remote, US",
      type: "Full-time",
      experience: "6+ years",
      description: "Provide expert security consulting to enterprise clients.",
      requirements: [
        "Bachelor's degree in relevant field",
        "6+ years of security consulting experience",
        "Multiple security certifications (CISSP, CISM, etc.)",
        "Excellent client-facing skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Briefcase className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Current Openings</h1>
            <p className="text-xl text-gray-300">
              Join our team and help shape the future of cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <a 
                      href={`/careers/apply/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block w-full text-center px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Dental and vision coverage",
        "Mental health support",
        "Wellness programs",
        "Gym membership reimbursement"
      ]
    },
    {
      category: "Financial",
      items: [
        "Competitive salary",
        "Equity participation",
        "401(k) with company match",
        "Performance bonuses",
        "Stock options"
      ]
    },
    {
      category: "Time Off",
      items: [
        "Unlimited PTO policy",
        "Paid holidays",
        "Parental leave",
        "Sabbatical opportunities",
        "Flexible work arrangements"
      ]
    },
    {
      category: "Professional Development",
      items: [
        "Learning and development budget",
        "Conference attendance",
        "Certification reimbursement",
        "Mentorship programs",
        "Career advancement paths"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Heart className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Benefits & Perks</h1>
            <p className="text-xl text-gray-300">
              We offer comprehensive benefits to support our team's well-being and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Perks</h2>
            <p className="text-xl text-gray-600">Extra benefits that make ABH2 Technologies a great place to work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Team Events</h3>
              <p className="text-gray-600">Regular team building and social events</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Remote Work</h3>
              <p className="text-gray-600">Flexible remote and hybrid work options</p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Learning Budget</h3>
              <p className="text-gray-600">Annual budget for courses and certifications</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Volunteer Time</h3>
              <p className="text-gray-600">Paid time off for volunteer activities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CareersDetailPage = () => {
  return (
    <Routes>
      <Route path="/openings" element={<JobOpenings />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/" element={<Navigate to="/careers" replace />} />
    </Routes>
  );
};

export default CareersDetailPage;