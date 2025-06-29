import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Building2, 
  Warehouse, 
  Users, 
  Shield, 
  TrendingUp,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const OurPresence = () => {
  const [activeTab, setActiveTab] = useState('India');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const branches = {
    India: [
      {
        city: 'Noida',
        address: 'B 135-136, Logix Technova, Noida UP-201305',
        contact: '+91 9999309839',
        email: 'sales@dflindia.in',
        country: 'INDIA',
        icon: Building2
      }
    ],
    Thailand: [
      {
        city: 'Bangkok',
        address: 'Thailand Office Address',
        contact: '+66 623657862',
        email: 'contact@dflthailand.com',
        country: 'THAILAND',
        icon: Building2
      }
    ],
    Dubai: [
      {
        city: 'Dubai',
        address: 'Dubai Office Address',
        contact: '+971 507076083',
        email: 'contact@dfldubai.com',
        country: 'UAE',
        icon: Building2
      }
    ],
    UK: [
      {
        city: 'London',
        address: 'UK Office Address',
        contact: '+44 7388 653479',
        email: 'contact@dfluk.com',
        country: 'UK',
        icon: Building2
      }
    ]
  };

  const additionalBranches = [
    {
      city: 'Mumbai',
      address: '231 Sai Chambers, B Wings, Sector 11, CBD Belapur, Navi Mumbai-400614',
      contact: '+91 9971076083',
      email: 'kp@dflindia.in',
      country: 'INDIA',
      icon: Building2
    },
    {
      city: 'Ahmedabad',
      address: 'D/1001, 10th Floor Titanium City Centre, Prahaladnagar, 100 FT Road, Satellite, Ahmedabad, Gujarat- 380015',
      contact: '+91 9319524092',
      email: 'be@dflindia.in',
      country: 'INDIA',
      icon: Building2
    }
  ];

  const highlights = [
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Serving clients across continents, we connect you to opportunities in international markets through robust supply chain management.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Warehouse,
      title: 'Advanced Infrastructure',
      description: 'Our state-of-the-art warehouses and distribution centers ensure secure storage and efficient handling of goods.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'On-the-Ground Teams',
      description: 'Local teams with expert knowledge provide real-time support and insights, ensuring smooth logistics operations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Customs & Compliance',
      description: 'Our presence in major ports and trade zones simplifies international shipping with seamless customs clearance.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen font-light">
     
    
      <div className="max-w-7xl mx-auto px-6 py-16">

        <section className='h-screen pt-20 items-center justify-center'>
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Our Global Presence
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connecting the world through strategic logistics solutions with unmatched reliability and operational excellence
          </p>
        </div>

        {/* Company Overview */}
        <div className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Redefining Global Logistics
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  At <span className="font-semibold text-slate-900">DFL Group</span>, our presence defines our strength, reliability, and commitment to delivering exceptional logistics solutions worldwide. We are more than just a logistics provider – we are a trusted partner, ensuring seamless connectivity and operational excellence across industries and borders.
                </p>
                <div className="flex items-center text-slate-700 group cursor-pointer">
                  <span className="font-medium">Learn more about our services</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-sm text-slate-600">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                      <div className="text-sm text-slate-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                      <div className="text-sm text-slate-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                      <div className="text-sm text-slate-600">On-Time Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Key Highlights */}
        <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Network</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Strategic advantages that set us apart in the global logistics landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${highlight.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{highlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Sections */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Local Expertise, Global Reach</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Our operations span multiple regions, blending local insights with global standards to create logistics solutions that cater to diverse market needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Strategic Locations</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                With strategically positioned facilities, offices, and warehouses, we streamline operations and reduce transit times effectively.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Industry Excellence</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                From e-commerce to manufacturing, automotive to healthcare, we cater to diverse industries with unmatched precision and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Branches Section */}
        <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Strategically located offices ensuring seamless service delivery worldwide
            </p>
          </div>
          
          {/* Modern Country Tabs */}
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

          {/* Enhanced Branch Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Active Tab Branch */}
            {branches[activeTab].map((branch, index) => {
              const IconComponent = branch.icon;
              return (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-white" />
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
              );
            })}

            {/* Additional branches for India tab */}
            {activeTab === 'India' && additionalBranches.map((branch, index) => {
              const IconComponent = branch.icon;
              return (
                <div key={`additional-${index}`} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:-translate-y-1">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-white" />
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;