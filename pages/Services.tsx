
import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

const Services: React.FC = () => {
    const [heroRef, heroClasses] = useFadeIn<HTMLDivElement>();
    const [servicesRef, servicesClasses] = useFadeIn<HTMLDivElement>();
    const [toolsRef, toolsClasses] = useFadeIn<HTMLDivElement>();
    const [ctaRef, ctaClasses] = useFadeIn<HTMLDivElement>();

  const services = [
    { id: 'meal', icon: '📋', title: 'MEAL System Design & Implementation', description: 'Comprehensive MEAL frameworks to monitor and evaluate program effectiveness.', features: ['Design and set up of comprehensive MEAL frameworks and plans', 'Development of Theories of Change, Logical Frameworks, and Results Frameworks', 'Creation of key performance indicators (KPIs) and performance monitoring plans', 'Providing technical assistance in program design and strategic planning'] },
    { id: 'research', icon: '🔍', title: 'Research & Evaluation', description: 'In-depth research and evaluation studies to measure impact and inform decision-making.', features: ['Conducting baseline, mid-term, and end-line evaluations', 'Performing qualitative and quantitative research studies', 'Situational analyses and rapid needs assessments', 'Impact assessments and outcome harvesting studies'] },
    { id: 'data', icon: '📊', title: 'Data Solutions', description: 'Advanced data collection, analysis, and visualization solutions for real-time insights.', features: ['Data collection, management, and analysis using digital tools (ODK, Kobo, SurveyCTO)', 'Advanced data analysis using Microsoft Excel, R, and Power BI', 'Spatial data analysis and mapping using QGIS', 'Developing interactive data dashboards and visualization tools'] },
    { id: 'capacity', icon: '👥', title: 'Capacity Building & Training', description: 'Empowering organizations and professionals with MEAL expertise and skills.', features: ['Training and coaching in MEAL methodologies and tools', 'Facilitating learning workshops and knowledge-sharing sessions', 'Developing customized training manuals and resources', 'Mentoring for individual MEAL professionals'] },
    { id: 'technical', icon: '💼', title: 'Technical Assistance & Advisory', description: 'Expert advisory services to strengthen program design and management.', features: ['Technical assistance in program design and theory of change', 'Facilitating strategic learning and adaptive management sessions', 'Quality assurance of MEAL systems and data quality audits', 'Policy advisory related to results-based management'] }
  ];

  const tools = [
    { name: 'ODK', category: 'Data Collection' }, { name: 'Kobo Toolbox', category: 'Data Collection' }, { name: 'SurveyCTO', category: 'Data Collection' }, { name: 'MS Excel', category: 'Analysis' }, { name: 'R', category: 'Analysis' }, { name: 'Power BI', category: 'Visualization' }, { name: 'QGIS', category: 'Spatial Analysis' }, { name: 'NVivo', category: 'Analysis' }, { name: 'Atlas.ti', category: 'Analysis' }, { name: 'ActivityInfo', category: 'Data Collection' }
  ];

  return (
    <div>
      <section ref={heroRef} className={`bg-blue-50 py-16 text-center ${heroClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Comprehensive MEAL, data analytics, and research solutions for development organizations.
          </p>
        </div>
      </section>

      <section ref={servicesRef} className={`py-16 sm:py-24 ${servicesClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">{service.title}</h2>
                    <p className="mt-2 text-lg text-gray-600">{service.description}</p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={toolsRef} className={`py-16 sm:py-24 bg-slate-50 ${toolsClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Tools & Technologies</h2>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge digital tools for efficient and impactful data solutions.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800">{tool.name}</h4>
                <p className="text-sm text-gray-500">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className={`py-16 sm:py-24 ${ctaClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold !text-white">Ready to Transform Your Data?</h2>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
              Contact us today to discuss how our services can enhance your program effectiveness.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-100">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
