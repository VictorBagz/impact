
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24 sm:py-32 lg:py-40">
       <div className="absolute inset-0 bg-white/5 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white !text-white leading-tight">
            Transforming Data into Impact
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-200">
            Monitoring, Evaluation, Accountability & Learning | Data Analytics | Research
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-base text-blue-200">
            Empowering development projects through robust data-driven insights 
            to enhance program effectiveness and demonstrate measurable impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/services" 
              className="w-full sm:w-auto inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-100"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-blue-800"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
