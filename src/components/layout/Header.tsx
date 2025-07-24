import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Globe } from 'lucide-react';
import Logo from '../ui/Logo';
import MegaMenu from './MegaMenu';
import LanguageSelector from '../ui/LanguageSelector';
import SearchBox from '../ui/SearchBox';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  const handleMenuMouseEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };
  
  const handleMenuMouseLeave = () => {
    setActiveMenu(null);
  };

  const menuItems = [
    { name: 'Company', key: 'company' },
    { name: 'Products', key: 'products' },
    { name: 'Services', key: 'services' },
    { name: 'Industries', key: 'industries' },
    { name: 'Insights', key: 'insights' },
    { name: 'Partners', key: 'partners' },
    { name: 'Careers', key: 'careers' }
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {menuItems.map((item) => (
                <div 
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => handleMenuMouseEnter(item.key)}
                  onMouseLeave={handleMenuMouseLeave}
                >
                  <button 
                    className={`px-4 py-2 text-white hover:text-red-500 rounded-md flex items-center transition duration-150 ${
                      activeMenu === item.key ? 'text-red-500' : ''
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              ))}
            </nav>
            
            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Search icon */}
              <button 
                onClick={toggleSearch}
                className="text-white hover:text-red-500 transition duration-150"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {/* Language selector */}
              <LanguageSelector language={language} setLanguage={setLanguage} />
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-white hover:text-red-500 transition-colors duration-150"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mega menu container - only shown when a menu is active */}
        {activeMenu && (
          <div 
            className="hidden lg:block absolute w-full bg-white shadow-lg border-t border-gray-200"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={handleMenuMouseLeave}
          >
            <MegaMenu activeMenu={activeMenu} />
          </div>
        )}
        
        {/* Search overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <SearchBox onClose={() => setIsSearchOpen(false)} />
          </div>
        )}
      </header>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 inset-x-0 bottom-0 bg-black z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.key} className="border-b border-gray-700 pb-4">
                <button 
                  className="flex items-center justify-between w-full text-white py-2"
                  onClick={() => setActiveMenu(activeMenu === item.key ? null : item.key)}
                >
                  <span>{item.name}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${
                    activeMenu === item.key ? 'transform rotate-180' : ''
                  }`} />
                </button>
                
                {activeMenu === item.key && (
                  <div className="mt-2 pl-4 border-l-2 border-red-500">
                    <MegaMenu activeMenu={item.key} isMobile={true} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;