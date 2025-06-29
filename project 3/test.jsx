import React, { useState, useEffect } from 'react';
import { Menu, X, Building, Phone, Mail, ChevronDown, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { 
      name: 'Logistics Services', 
      href: '#services',
      dropdown: [
        { name: 'Air Freight Forwarding', href: '#logistics-services' },
        { name: 'Surface Transport Services', href: '#it-services' },
        { name: 'Ocean Freight Forwarding', href: '#logistics-services' },
        { name: 'Courier & Express Delivery Services', href: '#it-services' },
        { name: 'Customs Clearances & Documentation', href: '#logistics-services' },
        { name: 'Warehouse Services & Smart Warehousing Solutions', href: '#it-services' },
      ]
    },
    { name: 'IT Services', href: '#it-services' },
    { name: 'Our Presence', href: '#our-presence' },
    { name: 'Our Team', href: '#our-team' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div>
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-slate-300 py-3 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Info@thedflgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="font-medium">Global Logistics Network</span>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12  rounded-xl flex items-center justify-center shadow-md">
              <div className="flex items-center">
              <img src={logo} alt="DFL GROUP Logo" className="h-10 w-auto" />
            </div>

              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-800 leading-tight">DFL GROUP</h1>
                <p className="text-xs text-slate-500 font-medium">Logistics & IT Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <button 
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          index === 0 
                            ? 'text-blue-600 bg-blue-50' 
                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                        onMouseEnter={() => setActiveDropdown(index)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 ${
                          activeDropdown === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href={dropItem.href}
                            className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        index === 0 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            {/* <div className="hidden md:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Quote
              </button>
            </div> */}

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-800">DFL GROUP</h2>
                <p className="text-xs text-slate-500">Menu</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(index)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl font-medium transition-all duration-200 ${
                        index === 0 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`overflow-hidden transition-all duration-200 ${
                      activeDropdown === index ? 'max-h-40 mt-1' : 'max-h-0'
                    }`}>
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href={dropItem.href}
                            onClick={closeMenu}
                            className="block p-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`block p-3 rounded-xl font-medium transition-all duration-200 ${
                      index === 0 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={closeMenu}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
            <div className="flex items-center space-x-3 text-sm text-slate-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Info@thedflgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-600">
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;