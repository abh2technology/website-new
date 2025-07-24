import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  if (pathSegments.length === 0) return null;
  
  return (
    <nav className="bg-gray-100 py-2" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-600 hover:text-red-600 transition-colors duration-150">
              Home
            </Link>
          </li>
          
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            
            return (
              <li key={path} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                {isLast ? (
                  <span className="text-gray-900 font-medium">
                    {t(`nav.${segment}`, segment)}
                  </span>
                ) : (
                  <Link 
                    to={path}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-150"
                  >
                    {t(`nav.${segment}`, segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs