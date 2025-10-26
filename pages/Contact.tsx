
import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const LocationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>);
const EmailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);

const Contact: React.FC = () => {
    const [heroRef, heroClasses] = useFadeIn<HTMLDivElement>();
    const [formRef, formClasses] = useFadeIn<HTMLDivElement>();
    const [ctaRef, ctaClasses] = useFadeIn<HTMLDivElement>();
  
    const [formData, setFormData] = useState({ name: '', email: '', organization: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <LocationIcon />, title: 'Address', details: ['Kampala, Uganda'] },
    { icon: <PhoneIcon />, title: 'Phone', details: ['+256 781 036 002', '+256 706 769 850'] },
    { icon: <EmailIcon />, title: 'Email', details: ['impactnexusanalyticsltd@gmail.com'] },
    { icon: <ClockIcon />, title: 'Business Hours', details: ['Mon - Fri: 8 AM - 6 PM', 'Sat: 9 AM - 1 PM'] }
  ];
  
  return (
    <div>
      <section ref={heroRef} className={`bg-blue-50 py-16 text-center ${heroClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900">Contact Us</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Ready to transform your data into impact? Get in touch with our team.</p>
        </div>
      </section>

      <section ref={formRef} className={`py-16 sm:py-24 ${formClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">Send Message</button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-lg">{info.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className={`py-16 sm:py-24 bg-slate-50 ${ctaClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold !text-white">Start Your Impact Journey Today</h2>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
              Let's discuss how we can help you transform data into measurable impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+256781036002" className="w-full sm:w-auto inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-md shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-100">Call Us Now</a>
              <a href="mailto:impactnexusanalyticsltd@gmail.com" className="w-full sm:w-auto inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-blue-800">Send Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
