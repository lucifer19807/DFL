import React, { useState, useEffect, useRef  } from 'react';
import { 
  Code, 
  Cloud, 
  Shield, 
  BarChart3, 
  Headphones, 
  Settings,
  Users,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Truck,
  Package,Globe
} from 'lucide-react';

const ITServicePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "From ideation to deployment, we build scalable, secure, and user-friendly applications that cater to your business goals.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Optimize your infrastructure with our cloud migration, integration, and management services, ensuring seamless operations and cost efficiency.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Headphones,
      title: "IT Support & Maintenance",
      description: "Stay worry-free with our proactive IT support, ensuring your systems run smoothly and efficiently, 24/7.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Protect your business from evolving threats with advanced security solutions, including vulnerability assessments, data encryption, and monitoring.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Leverage data-driven insights to make smarter decisions with our cutting-edge analytics and business intelligence tools.",
      color: "from-orange-500 to-yellow-600"
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      description: "Let us handle your IT infrastructure while you focus on growing your business.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Our team of certified experts ensures quality solutions and dedicated support for all your IT needs."
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "No two businesses are alike. We customize our services to align with your unique requirements and objectives."
    },
    {
      icon: TrendingUp,
      title: "Scalable Services",
      description: "Whether you're a startup or a large enterprise, our solutions grow with your business."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Our portfolio showcases successful collaborations with businesses across various industries."
    }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-white to-slate-100">
     
      

      

      {/* Hero Section */}
      <section id="overview" className="pt-60  items-center justify-center min-h-screen pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
           
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Empowering Businesses Through 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 
                Cutting-Edge IT Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              In today's fast-paced digital landscape, staying ahead requires more than just adapting to change – it demands innovation, efficiency, and reliability. We provide comprehensive IT services designed to drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              {/* <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                View Our Work
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
           
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in a wide array of IT solutions tailored to meet the unique needs of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-600  font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 font-light px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-green-700 font-medium mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Your Success is Our Priority
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're committed to delivering excellence through innovation, expertise, and unwavering support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can drive your business forward and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
             
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ITServicePage;