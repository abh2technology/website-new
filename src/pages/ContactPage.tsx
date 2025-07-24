import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Globe, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about our security solutions? Our team is here to help 
              you find the right solutions for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Phone className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-2">Main: +1 (888) 123-4567</p>
              <p className="text-gray-600">Support: +1 (888) 765-4321</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Mail className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 mb-2">Sales: sales@abh2tech.com</p>
              <p className="text-gray-600">Support: support@abh2tech.com</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <MapPin className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600">
                123 Security Blvd<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="press">Press Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <Globe className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Global Offices
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">North America</h4>
                    <p className="text-gray-600">San Francisco • New York • Toronto</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Europe</h4>
                    <p className="text-gray-600">London • Paris • Berlin</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Asia Pacific</h4>
                    <p className="text-gray-600">Tokyo • Singapore • Sydney</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <MessageSquare className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quick Support
                </h3>
                <p className="text-gray-600 mb-6">
                  Need immediate assistance? Our support team is available 24/7 to help you with any questions or concerns.
                </p>
                <div className="space-y-4">
                  <a 
                    href="/support/chat"
                    className="block w-full px-6 py-3 bg-gray-100 text-gray-900 rounded-md font-medium hover:bg-gray-200 transition-colors duration-150 text-center"
                  >
                    Start Live Chat
                  </a>
                  <a 
                    href="/support/knowledge-base"
                    className="block w-full px-6 py-3 bg-gray-100 text-gray-900 rounded-md font-medium hover:bg-gray-200 transition-colors duration-150 text-center"
                  >
                    Visit Knowledge Base
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;