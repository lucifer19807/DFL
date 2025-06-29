import React, { useState, useEffect } from 'react';
import { 
  ChevronRight,
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Building2,
  User,
  MessageCircle,
  Globe,
  Clock,
  Star
} from 'lucide-react';

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('India');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    shipmentType: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const branches = {
    India: [
      {
        city: 'Noida',
        address: 'B 331, Logix Technova Sector 132, Noida UP-201305',
        contact: '+91 9999309839',
        email: 'sales@dflindia.in',
        country: 'INDIA'
      }
    ],
    Thailand: [
      {
        city: 'Bangkok',
        address: 'Thailand Office Address',
        contact: '+66 623657862',
        email: 'contact@dflthailand.com',
        country: 'THAILAND'
      }
    ],
    Dubai: [
      {
        city: 'Dubai',
        address: 'Dubai Office Address',
        contact: '+971 507076083',
        email: 'contact@dfldubai.com',
        country: 'UAE'
      }
    ],
    UK: [
      {
        city: 'London',
        address: 'UK Office Address',
        contact: '+44 7388 653479',
        email: 'contact@dfluk.com',
        country: 'UK'
      }
    ]
  };

  const additionalBranches = [
    {
      city: 'Mumbai',
      address: '231 Sai Chambers, B Wings, Sector 11, CBD Belapur, Navi Mumbai-400614',
      contact: '+91 9971076083',
      email: 'kp@dflindia.in',
      country: 'INDIA'
    },
    {
      city: 'Ahmedabad',
      address: 'D/1001, 10th Floor Titanium City Centre, Prahaladnagar, 100 FT Road, Satellite, Ahmedabad, Gujarat- 380015',
      contact: '+91 9319524092',
      email: 'be@dflindia.in',
      country: 'INDIA'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen font-inter">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-600 hover:text-slate-800 transition-colors cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero Contact Section */}
      <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`}></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-600">Get in touch with our logistics experts</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      name="shipmentType"
                      value={formData.shipmentType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option value="">Shipment Type</option>
                      <option value="air-freight">Air Freight</option>
                      <option value="ocean-freight">Ocean Freight</option>
                      <option value="inland-transport">Inland Transport</option>
                      <option value="courier-delivery">Courier Delivery</option>
                      <option value="warehouse-services">Warehouse Services</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Enquiry Section */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl mb-8">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Enquiry</h2>
                <a 
                  href="mailto:info@thedflgroup.com" 
                  className="text-4xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors block mb-8"
                >
                  info@thedflgroup.com
                </a>
                
                {/* Contact Stats */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Support</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">99%</div>
                      <div className="text-sm opacity-80">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Branches</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Connect with our global network of offices for localized support
            </p>
          </div>
          
          {/* Country Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(branches).map((country) => (
              <button
                key={country}
                onClick={() => setActiveTab(country)}
                className={`px-8 py-4 font-semibold rounded-2xl transition-all duration-300 ${
                  activeTab === country
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Branch Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Active Tab Branch */}
            {branches[activeTab].map((branch, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{branch.city}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {branch.country}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 leading-relaxed">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`tel:${branch.contact}`} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                      {branch.contact}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`mailto:${branch.email}`} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                      {branch.email}
                    </a>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-2xl transition-colors group">
                      <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <span className="ml-3 text-sm text-slate-500">WhatsApp</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional branches for India tab */}
            {activeTab === 'India' && additionalBranches.map((branch, index) => (
              <div key={`additional-${index}`} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{branch.city}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {branch.country}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 leading-relaxed">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`tel:${branch.contact}`} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                      {branch.contact}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`mailto:${branch.email}`} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                      {branch.email}
                    </a>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-2xl transition-colors group">
                      <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <span className="ml-3 text-sm text-slate-500">WhatsApp</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Find Us on Map</h3>
                <p className="text-slate-600">Locate our offices worldwide</p>
              </div>
              
              {/* Map Placeholder - Replace with actual map integration */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-blue-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Interactive Map</h4>
                  <p className="text-slate-600 mb-4">
                    Integrate Google Maps or preferred map service here
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                    <Globe className="w-4 h-4" />
                    <span>Global Presence</span>
                  </div>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="flex justify-center mt-6 space-x-4">
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm font-medium">
                  Map
                </button>
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm font-medium">
                  Satellite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;