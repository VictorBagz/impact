
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useFadeIn } from '../hooks/useFadeIn';

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

const Home: React.FC = () => {
    const [section1Ref, section1Classes] = useFadeIn<HTMLDivElement>();
    const [section2Ref, section2Classes] = useFadeIn<HTMLDivElement>();
    const [section3Ref, section3Classes] = useFadeIn<HTMLDivElement>();

  const coreValues = [
    { icon: '📊', title: 'Evidence-Based', description: 'We ground our recommendations in rigorous data and analysis.' },
    { icon: '⭐', title: 'Excellence', description: 'Committed to the highest standards of methodological rigor and ethical practice.' },
    { icon: '🤝', title: 'Partnership', description: 'We work collaboratively with clients to build their internal capacity.' },
    { icon: '💡', title: 'Innovation', description: 'Leveraging cutting-edge digital tools for efficient and impactful data solutions.' },
    { icon: '🔒', title: 'Integrity', description: 'We uphold transparency and accountability in all our processes.' },
    { icon: '🌱', title: 'Sustainability', description: 'Building systems that last beyond our engagement.' },
  ];

  const services = [
    { icon: '📋', title: 'MEAL System Design', description: 'Comprehensive MEAL frameworks and performance monitoring plans.', link: '/services#meal' },
    { icon: '🔍', title: 'Research & Evaluation', description: 'Baseline, mid-term, and end-line evaluations with mixed-methods approach.', link: '/services#research' },
    { icon: '📈', title: 'Data Solutions', description: 'Advanced analytics, visualization, and real-time program tracking.', link: '/services#data' }
  ];

  return (
    <div>
      <Hero />
      
      <section ref={section1Ref} className={`py-16 sm:py-24 bg-slate-50 ${section1Classes}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide our work and partnerships.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={section2Ref} className={`py-16 sm:py-24 bg-white ${section2Classes}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">Driving impact through specialized expertise.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col p-8 bg-slate-50 rounded-lg shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <Link to={service.link} className="mt-6 inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">
                  Learn More <ChevronRightIcon />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/services" className="inline-block bg-blue-800 text-white font-semibold px-8 py-3 rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-blue-900">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section ref={section3Ref} className={`py-16 sm:py-24 bg-blue-50 ${section3Classes}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-600">
                To be a leading partner for development organizations in Africa, 
                renowned for transforming data into actionable strategies that 
                maximize social impact and drive sustainable change.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To provide expert MEAL services, advanced data analytics, and 
                capacity-building support that strengthens project design, improves 
                performance, and provides undeniable evidence of results for our 
                clients and the communities they serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
