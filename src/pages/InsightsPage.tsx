import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Book, LineChart, Newspaper, Calendar, FileText, ChevronRight, ArrowRight } from 'lucide-react';

const InsightsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const insights = [
    {
      id: 'cybersecurity-trends-2025',
      title: '2025 Cybersecurity Trends',
      category: 'trends',
      date: 'March 15, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      excerpt: 'Discover the emerging cybersecurity threats and technologies shaping the industry in 2025.'
    },
    {
      id: 'zero-trust-architecture',
      title: 'Implementing Zero Trust Architecture',
      category: 'technical',
      date: 'March 10, 2025',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
      excerpt: 'A comprehensive guide to implementing zero trust security models in your organization.'
    },
    {
      id: 'ai-threat-detection',
      title: 'AI in Threat Detection',
      category: 'technology',
      date: 'March 5, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity threat detection.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'trends', name: 'Latest Trends' },
    { id: 'technical', name: 'Technical Guides' },
    { id: 'technology', name: 'Technology' },
    { id: 'research', name: 'Research' }
  ];

  const filteredInsights = activeCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security Insights & Resources
            </h1>
            <p className="text-xl text-gray-300">
              Stay informed about the latest trends, best practices, and innovations 
              in cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredInsights.map(insight => (
              <article 
                key={insight.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {insight.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {insight.excerpt}
                  </p>
                  <a
                    href={`/insights/${insight.id}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Security Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">White Papers</h3>
              <p className="text-gray-600 mb-4">
                In-depth research and analysis on security topics
              </p>
              <a 
                href="/resources/white-papers"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Browse Papers
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Webinars</h3>
              <p className="text-gray-600 mb-4">
                Live and on-demand security presentations
              </p>
              <a 
                href="/resources/webinars"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                View Schedule
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Real-world security implementation stories
              </p>
              <a 
                href="/resources/case-studies"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Read Studies
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Reports</h3>
              <p className="text-gray-600 mb-4">
                Latest trends and industry analysis
              </p>
              <a 
                href="/resources/reports"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                View Reports
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest security insights and updates.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;