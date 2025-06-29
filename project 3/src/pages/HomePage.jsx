// pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Transportation from '../components/Transportation';
import CompanyInfo from '../components/CompanyInfo';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <About />
        <Services />
        <Transportation />
      
      <CompanyInfo />
      <Testimonial />
      {/* <Contact /> */}
      </div>
    </div>
  );
};

export default HomePage;
