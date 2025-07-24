import { Shield } from 'lucide-react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <div className="text-red-600 font-bold text-2xl flex items-center">
        {/* <img 
          src="/logo.png" 
          alt="ABH2 Technologies Logo" 
          className="h-8 mr-2" 
        /> */}
        <span className="text-white">ABH2</span>
        <span className="text-white font-light">Technologies</span>
      </div>
    </a>
  );
};

export default Logo;