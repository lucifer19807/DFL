// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Common Header */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Main Content */}
        <div className="pt-20 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        {/* Common Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
