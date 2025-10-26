import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden shadow-lg">
      <img 
        src="/impact.jpg" 
        alt="Impact Nexus Logo" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
    </div>
  );
};

export default Logo;