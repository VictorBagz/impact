
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);

const About: React.FC = () => {
    const [heroRef, heroClasses] = useFadeIn<HTMLDivElement>();
    const [overviewRef, overviewClasses] = useFadeIn<HTMLDivElement>();
    const [structureRef, structureClasses] = useFadeIn<HTMLDivElement>();
    const [competenciesRef, competenciesClasses] = useFadeIn<HTMLDivElement>();
    const [complianceRef, complianceClasses] = useFadeIn<HTMLDivElement>();

  const companyStructure = {
    divisions: [ 'MEAL Framework Design & Implementation', 'Data Collection, Management & Analysis', 'Research & Evaluation Studies', 'Capacity Building & Training', 'Data Visualization & Dashboard Development' ],
    leadership: [ 'Managing Director', 'Head of Research & Evaluation', 'Senior Data Analyst & Tech Lead', 'MEAL Training & Capacity Building Manager', 'Finance & Administration Officer' ]
  };

  const competencies = [
    'Expert team with extensive field experience in international development', 'Proficiency in digital data collection and analysis platforms (ODK, Kobo, SurveyCTO, Power BI, R, QGIS)', 'Strong methodological skills in mixed-methods research', 'Ability to translate complex data into clear, user-friendly dashboards and reports', 'Client-centric approach with flexible engagement models', 'Deep understanding of donor reporting requirements (USAID, DFID, BMZ, UN)'
  ];

  const compliance = [
    { icon: '🏛️', text: 'Registered under the Companies Act' },
    { icon: '📝', text: 'Tax-compliant and registered with the URA' },
    { icon: '⚖️', text: 'Adherence to international ethical standards in research' }
  ];

  return (
    <div>
      <section ref={heroRef} className={`bg-blue-50 py-16 text-center ${heroClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900">About Us</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            A specialized consultancy firm dedicated to empowering development projects through data-driven insights.
          </p>
        </div>
      </section>

      <section ref={overviewRef} className={`py-16 sm:py-24 ${overviewClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Company Overview</h2>
              <p className="mt-4 text-lg text-gray-600">
                Impact Nexus Analytics Ltd. is dedicated to empowering development projects and organizations through robust data-driven insights.
              </p>
              <p className="mt-4 text-gray-600">
                We specialize in designing and implementing comprehensive Monitoring, Evaluation, Accountability, and Learning (MEAL) frameworks, conducting in-depth research, and transforming complex data into actionable intelligence.
              </p>
              <p className="mt-4 text-gray-600">
                Our mission is to enhance program effectiveness, demonstrate impact, and foster a culture of continuous learning and adaptive management for our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {competencies.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={structureRef} className={`py-16 sm:py-24 bg-slate-50 ${structureClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Company Structure</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Divisions</h3>
              <ul className="space-y-2">
                {companyStructure.divisions.map((division, index) => (
                  <li key={index} className="flex items-start"><span className="text-blue-600 mr-2">›</span>{division}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leadership Team</h3>
               <ul className="space-y-2">
                {companyStructure.leadership.map((leader, index) => (
                  <li key={index} className="flex items-start"><span className="text-blue-600 mr-2">›</span>{leader}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={competenciesRef} className={`py-16 sm:py-24 ${competenciesClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Key Competencies</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((competency, index) => (
              <div key={index} className="bg-blue-50/50 p-6 rounded-lg flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 font-bold rounded-full mr-4">{index + 1}</div>
                <p className="text-gray-700">{competency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={complianceRef} className={`py-16 sm:py-24 bg-slate-50 ${complianceClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Regulatory & Legal Compliance</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <div key={index} className="bg-white text-center p-8 rounded-lg shadow-md border border-gray-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-lg font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
