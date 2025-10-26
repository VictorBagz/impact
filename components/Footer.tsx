
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Impact Nexus Analytics</h3>
            <p className="text-blue-200">Transforming data into actionable strategies for sustainable development in Africa.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>MEAL System Design</li>
              <li>Research & Evaluation</li>
              <li>Data Solutions</li>
              <li>Capacity Building</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-blue-200 space-y-2">
              <p>Kampala, Uganda</p>
              <p>+256 781 036 002</p>
              <p>+256 706 769 850</p>
              <p>
                <a href="mailto:impactnexusanalyticsltd@gmail.com" className="hover:text-white transition-colors">
                  impactnexusanalyticsltd@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Impact Nexus Analytics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
