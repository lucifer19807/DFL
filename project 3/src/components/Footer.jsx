import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800   text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* CEO's Statement */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500 uppercase tracking-wide">
              OUR CEO's STATEMENT
            </h3>
            <div className="w-12 h-1 bg-orange-500 mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-sm">
              At DFL Group, we are committed to delivering seamless, reliable, and innovative logistics solutions. Our focus is on connecting businesses globally with efficiency and sustainability at the core of everything we do. Together, let's drive the future of logistics forward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              QUICK LINKS
            </h3>
            <div className="w-12 h-1 bg-orange-500 mb-6"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide">
                  AIR FREIGHT
                </a>
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide">
                  INLAND TRANSPORT
                </a>
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide">
                  OCEAN FREIGHT
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide">
                  COURIER DELIVERY
                </a>
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide">
                  CUSTOMS CLEARANCES
                </a>
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors text-sm uppercase tracking-wide">
                  WAREHOUSE SERVICES
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              Contact us
            </h3>
            <div className="w-12 h-1 bg-orange-500 mb-6"></div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 uppercase tracking-wide">INDIA:</span>
                <span className="text-gray-300">+91 9999309839</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 uppercase tracking-wide">THAILAND:</span>
                <span className="text-gray-300">+66 623657862</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 uppercase tracking-wide">UAE:</span>
                <span className="text-gray-300">+97 1503998139</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 uppercase tracking-wide">UK:</span>
                <span className="text-gray-300">+447388 653479</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-sm">
            Copyright © 2025. All rights Reserved by DFL Group.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;