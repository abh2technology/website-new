import { Routes, Route, Navigate } from 'react-router-dom';
import { Newspaper, Camera, FileText, Download, ExternalLink, Calendar } from 'lucide-react';

const MediaHub = () => {
  const pressReleases = [
    {
      title: "ABH2 Technologies Announces $50M Series B Funding Round",
      date: "March 15, 2025",
      excerpt: "Funding will accelerate global expansion and AI-powered security innovation.",
      category: "Funding",
      url: "/media/press/series-b-funding"
    },
    {
      title: "ABH2 Technologies Named Cybersecurity Innovator of the Year",
      date: "February 28, 2025",
      excerpt: "Recognition for breakthrough AI threat detection technology.",
      category: "Awards",
      url: "/media/press/innovator-award"
    },
    {
      title: "New Partnership with Global Cloud Provider Announced",
      date: "February 10, 2025",
      excerpt: "Strategic alliance to deliver integrated security solutions.",
      category: "Partnerships",
      url: "/media/press/cloud-partnership"
    }
  ];

  const mediaKit = [
    {
      name: "Company Logo Package",
      description: "High-resolution logos in various formats",
      type: "ZIP",
      size: "2.5 MB",
      url: "/downloads/abh2-logo-package.zip"
    },
    {
      name: "Executive Headshots",
      description: "Professional photos of leadership team",
      type: "ZIP",
      size: "15 MB",
      url: "/downloads/executive-headshots.zip"
    },
    {
      name: "Product Screenshots",
      description: "High-quality product interface images",
      type: "ZIP",
      size: "8 MB",
      url: "/downloads/product-screenshots.zip"
    },
    {
      name: "Company Fact Sheet",
      description: "Key company information and statistics",
      type: "PDF",
      size: "1.2 MB",
      url: "/downloads/company-fact-sheet.pdf"
    }
  ];

  const coverage = [
    {
      publication: "TechCrunch",
      title: "ABH2 Technologies Raises $50M to Expand AI Security Platform",
      date: "March 16, 2025",
      url: "https://techcrunch.com/abh2-series-b",
      logo: "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg"
    },
    {
      publication: "Forbes",
      title: "The Future of Cybersecurity: How AI is Changing the Game",
      date: "March 10, 2025",
      url: "https://forbes.com/cybersecurity-ai",
      logo: "https://images.pexels.com/photos/5473303/pexels-photo-5473303.jpeg"
    },
    {
      publication: "Wall Street Journal",
      title: "Cybersecurity Startups Attract Record Investment",
      date: "February 25, 2025",
      url: "https://wsj.com/cybersecurity-investment",
      logo: "https://images.pexels.com/photos/5473304/pexels-photo-5473304.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Newspaper className="w-12 h-12 text-red-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media Center
            </h1>
            <p className="text-xl text-gray-300">
              Latest news, press releases, and media resources for journalists and industry analysts.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Press Releases</h2>
            <a 
              href="/media/press/all"
              className="text-red-600 hover:text-red-700 font-medium flex items-center"
            >
              View All <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500">{release.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <a href={release.url} className="hover:text-red-600 transition-colors duration-150">
                      {release.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <a 
                    href={release.url}
                    className="text-red-600 hover:text-red-700 font-medium flex items-center"
                  >
                    Read More <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what industry publications are saying about ABH2 Technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverage.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={article.logo}
                    alt={`${article.publication} logo`}
                    className="w-12 h-12 object-contain mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{article.publication}</h4>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors duration-150"
                  >
                    {article.title}
                  </a>
                </h3>
                <a 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-medium flex items-center"
                >
                  Read Article <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Kit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download high-quality assets for your stories and publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <FileText className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span>{item.type}</span>
                  <span>{item.size}</span>
                </div>
                <a 
                  href={item.url}
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

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
              <p className="text-xl text-gray-300">
                For press inquiries, interviews, or additional information, please contact our media team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Press Contact</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Name:</span>
                    <span className="ml-2">Jennifer Martinez</span>
                  </div>
                  <div>
                    <span className="font-medium">Title:</span>
                    <span className="ml-2">Director of Communications</span>
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">press@abh2tech.com</span>
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">+1 (415) 555-0199</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Analyst Relations</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Name:</span>
                    <span className="ml-2">Robert Chen</span>
                  </div>
                  <div>
                    <span className="font-medium">Title:</span>
                    <span className="ml-2">VP Analyst Relations</span>
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">analysts@abh2tech.com</span>
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">+1 (415) 555-0198</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                We typically respond to media inquiries within 24 hours during business days.
              </p>
              <a 
                href="mailto:press@abh2tech.com"
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-150"
              >
                Contact Media Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Media = () => {
  return (
    <Routes>
      <Route path="/" element={<MediaHub />} />
      <Route path="/*" element={<MediaHub />} />
    </Routes>
  );
};

export default Media;