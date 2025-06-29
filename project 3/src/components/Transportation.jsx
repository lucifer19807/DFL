import React, { useState } from 'react';
import {
  Ship, Plane, Truck, ArrowRight, Clock, MapPin, Shield,
  CheckCircle, Star, Calculator, Calendar, Users
} from 'lucide-react';

const Transportation = () => {
  const [activeMode, setActiveMode] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const modes = [
    {
      icon: <Ship className="w-12 h-12" />,
      title: "Ocean Freight",
      subtitle: "Cost-Effective Global Shipping",
      description: "Affordable and dependable ocean shipping to get your goods safely delivered to ports around the world. We make the process easy and stress-free for you.",
      features: ["FCL & LCL Services", "Port-to-Port Delivery", "Global Coverage", "Competitive Rates"],
      stats: { capacity: "Up to 40,000 TEU", time: "15-45 Days", coverage: "500+ Ports" },
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      popular: false
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Air Freight",
      subtitle: "Express Global Delivery",
      description: "Quick and dependable air shipping to ensure your goods reach their destination on time, anywhere in the world. We take great care of your shipments, making the process smooth and worry-free.",
      features: ["Express Delivery", "Time-Critical Cargo", "Global Network", "Real-time Tracking"],
      stats: { capacity: "Up to 150 Tons", time: "1-7 Days", coverage: "200+ Countries" },
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      popular: false
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Surface Freight",
      subtitle: "Reliable Ground Transportation",
      description: "Safe and reliable road transport to move your goods quickly and efficiently. We ensure timely deliveries and smooth service every step of the way.",
      features: ["FTL & LTL Options", "Regional Coverage", "Specialized Equipment", "Door-to-Door Service"],
      stats: { capacity: "Up to 40 Tons", time: "1-14 Days", coverage: "Multi-Regional" },
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      popular: false
    }
  ];

  return (
    <section className="min-h-screen">


      <div className="container mx-auto px-6  pt-10 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">


          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Transportation{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Modes
            </span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Choose from our comprehensive transportation options designed to meet your specific
            shipping requirements and budget. From express air freight to cost-effective ocean shipping.
          </p>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
              <div className="text-slate-600">Global Destinations</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Real-time Tracking</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">99.8%</div>
              <div className="text-slate-600">On-time Delivery</div>
            </div>
          </div> */}
        </div>

        {/* Transportation Mode Selector */}
        {/* <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200">
            <div className="grid grid-cols-3 gap-1">
              {modes.map((mode, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMode(index)}
                  className={`flex items-center justify-center py-4 px-4 rounded-xl font-medium transition-all duration-300 ${
                    activeMode === index
                      ? `bg-gradient-to-r ${mode.gradient} text-white shadow-lg`
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-6 h-6 mr-2">
                    {React.cloneElement(mode.icon, { 
                      className: `w-6 h-6 ${activeMode === index ? 'text-white' : 'text-slate-400'}` 
                    })}
                  </div>
                  <span className="hidden sm:inline">{mode.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Featured Transportation Mode */}
        {/* <div className="max-w-6xl mx-auto mb-16">
          <div className={`bg-gradient-to-br ${modes[activeMode].bgGradient} rounded-3xl p-12 border border-slate-200`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${modes[activeMode].gradient} text-white rounded-2xl shadow-lg mr-6`}>
                    {modes[activeMode].icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {modes[activeMode].title}
                    </h2>
                    <p className="text-lg text-slate-600">{modes[activeMode].subtitle}</p>
                  </div>
                  {modes[activeMode].popular && (
                    <div className="ml-auto">
                      <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {modes[activeMode].description}
                </p> */}

        {/* Key Stats */}
        {/* <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/70 rounded-xl p-4 text-center">
                    <Calendar className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                    <div className="font-semibold text-slate-900">{modes[activeMode].stats.time}</div>
                    <div className="text-sm text-slate-600">Transit Time</div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 text-center">
                    <Shield className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                    <div className="font-semibold text-slate-900">{modes[activeMode].stats.capacity}</div>
                    <div className="text-sm text-slate-600">Max Capacity</div>
                  </div>
                  <div className="bg-white/70 rounded-xl p-4 text-center">
                    <MapPin className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                    <div className="font-semibold text-slate-900">{modes[activeMode].stats.coverage}</div>
                    <div className="text-sm text-slate-600">Coverage</div>
                  </div>
                </div> */}

        {/* Features */}
        {/* <div className="space-y-3 mb-8">
                  {modes[activeMode].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${modes[activeMode].gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}>
                    Get Quote
                    <Calculator className="w-5 h-5 ml-2" />
                  </button>
                  <button className="inline-flex items-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div> */}

        {/* Visual Element */}
        {/* <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose This Mode?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-slate-900">Cost Effective</div>
                        <div className="text-sm text-slate-600">Optimized pricing for your budget</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-slate-900">Reliable Service</div>
                        <div className="text-sm text-slate-600">Consistent on-time performance</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-slate-900">Global Network</div>
                        <div className="text-sm text-slate-600">Extensive worldwide coverage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* All Transportation Modes Grid */}
        <div className="max-w-7xl mx-auto mb-16">


          <div className="grid lg:grid-cols-3 gap-8">
            {modes.map((mode, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-2xl p-8 shadow-sm border transition-all duration-500 cursor-pointer ${hoveredCard === index
                  ? 'shadow-2xl border-blue-200 transform -translate-y-2'
                  : 'border-slate-200 hover:shadow-lg'
                  }`}
                onClick={() => setActiveMode(index)}
              >
                {mode.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center h-full flex flex-col">
                  <div className="flex-grow">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${mode.gradient} text-white rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {mode.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {mode.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {mode.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mode.bgGradient} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Transportation;