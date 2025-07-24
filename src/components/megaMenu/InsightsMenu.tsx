import MenuSection from '../ui/MenuSection';
import { TrendingUp, Book, LineChart, Newspaper, Calendar, FileText } from 'lucide-react';

interface InsightsMenuProps {
  isMobile?: boolean;
}

const InsightsMenu = ({ isMobile = false }: InsightsMenuProps) => {
  const featuredInsights = [
    {
      title: "2025 Cybersecurity Trends",
      description: "Discover the emerging cybersecurity threats and technologies shaping the industry.",
      url: "/insights/reports/2025-trends",
      date: "June 15, 2025"
    },
    {
      title: "Zero Trust Architecture",
      description: "Implementation strategies for effective zero trust security models.",
      url: "/insights/white-papers/zero-trust",
      date: "May 22, 2025"
    },
    {
      title: "AI in Threat Detection",
      description: "How artificial intelligence is revolutionizing cybersecurity threat detection.",
      url: "/insights/thought-leadership/ai-threat-detection",
      date: "April 8, 2025"
    }
  ];

  if (isMobile) {
    return (
      <div className="space-y-4">
        <MenuSection title="Content Categories" links={[
          { label: 'Latest Trends', url: '/insights/trends' },
          { label: 'Thought Leadership', url: '/insights/thought-leadership' },
          { label: 'Research', url: '/insights/research' },
          { label: 'Blog', url: '/insights/blog' },
          { label: 'Events', url: '/insights/events' },
          { label: 'Resources', url: '/insights/resources' },
        ]} isMobile={true} />
        
        <div className="border-t border-gray-700 mt-4 pt-4">
          <h3 className="font-semibold text-white mb-3">Featured Insights</h3>
          {featuredInsights.map((insight, index) => (
            <div key={index} className="mb-4">
              <a href={insight.url} className="text-red-400 hover:text-red-300 font-medium">{insight.title}</a>
              <p className="text-sm text-gray-400 mt-1">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Featured Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredInsights.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <span className="text-xs text-gray-500">{insight.date}</span>
                <h4 className="font-medium text-gray-800 mt-1 mb-2">
                  <a href={insight.url} className="hover:text-red-600 transition-colors duration-150">{insight.title}</a>
                </h4>
                <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                <a href={insight.url} className="text-sm font-medium text-red-600 hover:text-red-800">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-1">
        <MenuSection 
          title="Content Categories" 
          icon={<Book className="w-5 h-5 text-red-600" />}
          links={[
            { label: 'Latest Trends', url: '/insights/trends', icon: <TrendingUp className="w-4 h-4" /> },
            { label: 'Thought Leadership', url: '/insights/thought-leadership', icon: <LineChart className="w-4 h-4" /> },
            { label: 'Research', url: '/insights/research', icon: <FileText className="w-4 h-4" /> },
            { label: 'Blog', url: '/insights/blog', icon: <Newspaper className="w-4 h-4" /> },
          ]} 
        />
        
        <MenuSection 
          title="Events & Resources" 
          icon={<Calendar className="w-5 h-5 text-red-600" />}
          links={[
            { label: 'Upcoming Webinars', url: '/insights/events/webinars' },
            { label: 'Industry Conferences', url: '/insights/events/conferences' },
            { label: 'White Papers', url: '/insights/resources/white-papers' },
            { label: 'Security Guides', url: '/insights/resources/guides' },
          ]} 
        />
        
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Subscribe to Updates</h4>
          <p className="text-sm text-gray-600 mb-3">Stay informed about the latest security insights and research.</p>
          <a 
            href="/insights/subscribe"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-150"
          >
            Subscribe Now
          </a>
        </div>
      </div>
      
      <div className="md:col-span-1">
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Security Alerts</h3>
          <ul className="space-y-3">
            <li className="pb-2 border-b border-blue-100">
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-1">Critical</span>
              <a href="/insights/alerts/log4j-vulnerability" className="block text-blue-800 font-medium hover:text-blue-600">
                Log4j Vulnerability Update
              </a>
              <span className="text-xs text-blue-600">Updated 3 hours ago</span>
            </li>
            <li className="pb-2 border-b border-blue-100">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-1">Important</span>
              <a href="/insights/alerts/windows-patch" className="block text-blue-800 font-medium hover:text-blue-600">
                Windows Critical Patch Released
              </a>
              <span className="text-xs text-blue-600">Updated 1 day ago</span>
            </li>
            <li>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-1">Advisory</span>
              <a href="/insights/alerts/phishing-campaign" className="block text-blue-800 font-medium hover:text-blue-600">
                New Phishing Campaign Detected
              </a>
              <span className="text-xs text-blue-600">Updated 2 days ago</span>
            </li>
          </ul>
          <a href="/insights/alerts" className="mt-3 inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
            View all alerts →
          </a>
        </div>
      </div>
    </>
  );
};

export default InsightsMenu;