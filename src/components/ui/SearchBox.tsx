import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBoxProps {
  onClose: () => void;
}

const SearchBox = ({ onClose }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches] = useState([
    'Security assessment',
    'Vulnerability scanning',
    'Compliance requirements',
    'Penetration testing'
  ]);
  
  const [popularSearches] = useState([
    'Incident response',
    'Firewall configuration',
    'Zero trust architecture',
    'Security training'
  ]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log('Searching for:', searchTerm);
    // For a real app, this would trigger a search operation
  };
  
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Search</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products, services, or information..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors duration-150"
          >
            Search
          </button>
        </div>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Recent Searches</h4>
          <ul className="space-y-2">
            {recentSearches.map((search, index) => (
              <li key={index}>
                <button 
                  onClick={() => setSearchTerm(search)}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Search className="w-4 h-4 mr-2 text-gray-400" />
                  {search}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Popular Searches</h4>
          <ul className="space-y-2">
            {popularSearches.map((search, index) => (
              <li key={index}>
                <button 
                  onClick={() => setSearchTerm(search)}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Search className="w-4 h-4 mr-2 text-gray-400" />
                  {search}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;