import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageSelector = ({ language, setLanguage }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  
  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 text-white hover:text-red-500 transition duration-150 px-3 py-2 rounded-md"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select language: currently ${currentLanguage.name}`}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden md:inline-flex items-center space-x-2">
          <span className="text-lg" aria-hidden="true">{currentLanguage.flag}</span>
          <span className="text-sm">{currentLanguage.name}</span>
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div
        className={`
          absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20
          transform origin-top-right transition-all duration-200 ease-in-out
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-menu"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`
              flex items-center space-x-3 w-full px-4 py-2 text-sm
              ${lang.code === language
                ? 'bg-gray-100 text-red-600 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
              }
              transition-colors duration-150
            `}
            role="menuitem"
            aria-current={lang.code === language ? 'true' : undefined}
          >
            <span className="text-lg" aria-hidden="true">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;