import { Routes, Route, Navigate } from 'react-router-dom';
import { TrendingUp, Book, Calendar, FileText, Download, ExternalLink } from 'lucide-react';

const TrendsPage = () => {
  const trends = [
    {
      title: "AI-Powered Threat Detection",
      description: "How artificial intelligence is revolutionizing cybersecurity threat detection and response",
      date: "March 2025",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg"
    },
    {
      title: "Zero Trust Architecture Adoption",
      description: "The growing adoption of zero trust security models in enterprise environments",
      date: "March 2025",
      readTime: "12 min read",
      category: "Strategy",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
    },
    {
      title: "Cloud Security Evolution",
      description: "Latest developments in cloud security and multi-cloud protection strategies",
      date: "February 2025",
      readTime: "10 min read",
      category: "Cloud",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <TrendingUp className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Security Trends</h1>
            <p className="text-xl text-gray-300">
              Stay ahead of emerging cybersecurity trends and technologies shaping the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Trends Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={trend.image} alt={trend.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>{trend.date}</span>
                    <span>•</span>
                    <span>{trend.readTime}</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">{trend.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{trend.title}</h2>
                  <p className="text-gray-600 mb-4">{trend.description}</p>
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                    Read More <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const WhitePapers = () => {
  const papers = [
    {
      title: "The Future of Cybersecurity: AI and Machine Learning",
      description: "Comprehensive analysis of AI's role in modern cybersecurity",
      pages: "24 pages",
      downloadUrl: "/downloads/ai-cybersecurity-whitepaper.pdf"
    },
    {
      title: "Zero Trust Implementation Guide",
      description: "Step-by-step guide to implementing zero trust architecture",
      pages: "32 pages",
      downloadUrl: "/downloads/zero-trust-guide.pdf"
    },
    {
      title: "Cloud Security Best Practices",
      description: "Essential security practices for cloud environments",
      pages: "28 pages",
      downloadUrl: "/downloads/cloud-security-practices.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Book className="w-16 h-16 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">White Papers</h1>
            <p className="text-xl text-gray-300">
              In-depth research and analysis on critical cybersecurity topics.
            </p>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <FileText className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{paper.pages}</span>
                  <span className="text-sm text-gray-500">PDF</span>
                </div>
                <a 
                  href={paper.downloadUrl}
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const InsightsDetailPage = () => {
  return (
    <Routes>
      <Route path="/trends" element={<TrendsPage />} />
      <Route path="/white-papers" element={<WhitePapers />} />
      <Route path="/" element={<Navigate to="/insights" replace />} />
    </Routes>
  );
};

export default InsightsDetailPage;