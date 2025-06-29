import React from 'react';
import { Eye, Target, Heart, ArrowRight, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To become the top choice in global logistics, known for innovation, excellence, and a client-first mindset. We aim to lead the industry by adopting new technologies and promoting sustainable logistics practices.",
      highlight: "Global Recognition"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To be a customer-centric project logistics expert, setting the standard in our industry with a flexible and adaptive approach.",
      highlight: "Excellence in Service"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "We uphold honesty, transparency, and ethical standards while exceeding client expectations through innovation and dependable, timely services. Committed to sustainability and teamwork, we strive for mutual success with clients and partners.",
      highlight: "Trust & Partnership"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Global Clients" },
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="min-h-screen ">
      {/* Navigation Breadcrumb */}
      {/* <div className="container mx-auto px-6 pt-8">
        <div className="flex items-center text-sm text-slate-500 mb-8">
          <span>Home</span>
          <ArrowRight className="w-4 h-4 mx-2" />
          <span className="text-slate-700 font-medium">About Us</span>
        </div>
      </div> */}

      <div className="container mx-auto  px-6 pt-10 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <Globe className="w-4 h-4 mr-2" />
            Global Supply Chain Solutions
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              The DFL Group
            </span>
          </h1>
          
          <p className="text-xl font-light text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
          At The DFL Group, we go beyond logistics—we are your trusted partner in navigating the complexities of global shipping. As a leading international freight forwarder, we deliver seamless, end-to-end logistics solutions tailored to the diverse and dynamic needs of businesses worldwide.
          </p>

         
          
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto">
          

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-500 h-full">
                  {/* Icon with gradient background */}
                  <div className="relative mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                      {value.highlight}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-slate-600 font-light leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        
      </div>
    </section>
  );
};

export default About;