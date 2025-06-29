// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import PreLoader from './components/PreLoader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ITServicesPage from './pages/ITServicesPage';
import OurPresence from './pages/OurPresence';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUS';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <PreLoader onLoadComplete={handleLoadComplete} />}
      
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Common Header */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Header />
          </div>

          {/* Main Content with Page Transitions */}
          <div className="pt-20 flex-1 items-center min-h-screen">
            <PageTransition>
              <Routes>
                
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/our-presence" element={<OurPresence />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </PageTransition>
          </div>

          {/* Common Footer */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
