import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 animate-gradient"></div>
      <div className="relative w-full h-full flex items-center justify-center">
        <span className="text-white font-bold text-xl tracking-wider">IN</span>
      </div>
      <div className="absolute inset-0 bg-white/10 hover:bg-white/20 transition-colors duration-300"></div>
    </div>
  );
};

export default Logo;