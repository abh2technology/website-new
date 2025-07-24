import { ReactNode } from 'react';

interface MenuLink {
  label: string;
  url: string;
  icon?: ReactNode;
}

interface MenuSectionProps {
  title: string;
  links: MenuLink[];
  icon?: ReactNode;
  isMobile?: boolean;
}

const MenuSection = ({ title, links, icon, isMobile = false }: MenuSectionProps) => {
  if (isMobile) {
    return (
      <div>
        <h3 className="font-semibold text-white mb-2 flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h3>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.url} 
                className="text-gray-300 hover:text-red-400 transition-colors duration-150 flex items-center"
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              className="text-sm text-gray-700 hover:text-red-600 transition-colors duration-150 flex items-center"
            >
              {link.icon && <span className="mr-2">{link.icon}</span>}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;