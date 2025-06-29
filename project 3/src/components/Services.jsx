import React, { useState } from 'react';
import { 
  Truck, Ship, Plane, Package, Clock, Shield, Users, Globe, 
  ArrowRight, ChevronRight, Filter, Search, Star, MapPin 
} from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', count: 9 },
    { id: 'shipping', name: 'Shipping & Freight', count: 4 },
    { id: 'logistics', name: 'Logistics & Warehousing', count: 3 },
    { id: 'specialized', name: 'Specialized Services', count: 2 }
  ];

  const services = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "NVOCC Services",
      category: "shipping",
      featured: true,
      description: "Seamless cargo movement without owning vessels. We manage container bookings, consolidation, documentation, and efficient transport solutions, ensuring cost-effective and reliable shipping to global destinations.",
      highlights: ["Container Management", "Global Documentation", "Cost-Effective Solutions"],
      coverage: "Worldwide"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Air Freight",
      category: "shipping",
      featured: true,
      description: "Fast and reliable air shipping to get your goods delivered on time anywhere in the world. We handle your shipments with care, ensuring safe and hassle-free delivery every step of the way.",
      highlights: ["Express Delivery", "Global Network", "Secure Handling"],
      coverage: "200+ Countries"
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Sea Freight",
      category: "shipping",
      featured: false,
      description: "Reliable and cost-effective sea shipping solutions for all types of goods. Whether it's small shipments or large cargo, we ensure safe handling and timely delivery to ports worldwide.",
      highlights: ["FCL & LCL Options", "Port-to-Port", "Bulk Cargo"],
      coverage: "Major Ports"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Land Transport Services",
      category: "logistics",
      featured: false,
      description: "Reliable and efficient land transportation solutions tailored to your needs. From last-mile delivery to long-haul trucking, we ensure safe and timely movement of goods across regions.",
      highlights: ["Last-Mile Delivery", "Long-Haul Trucking", "Regional Coverage"],
      coverage: "Multi-Regional"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Customs Clearance",
      category: "specialized",
      featured: true,
      description: "Hassle-free custom clearance services to ensure your shipments move smoothly across borders. We handle all the paperwork and procedures, saving you time and effort.",
      highlights: ["Documentation", "Compliance", "Border Solutions"],
      coverage: "Global Borders"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inspection & Packing Services",
      category: "specialized",
      featured: false,
      description: "Specialized industrial packing services to protect your goods during transit. From custom crating to secure wrapping, our solutions ensure safety, durability, and compliance.",
      highlights: ["Custom Crating", "Quality Inspection", "Compliance Standards"],
      coverage: "On-Site Available"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Bonded & General Warehousing",
      category: "logistics",
      featured: false,
      description: "Secure bonded and general warehousing solutions for your goods. Whether for storage or customs purposes, we provide safe and reliable facilities to meet your needs.",
      highlights: ["Bonded Storage", "Security Systems", "Inventory Management"],
      coverage: "Strategic Locations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project & Heavy Cargo Expertise",
      category: "specialized",
      featured: true,
      description: "Specialized handling of large and complex shipments, including heavy cargo and project cargo. With our expertise, we ensure safe and efficient delivery, no matter the size or challenge.",
      highlights: ["Heavy Lift", "Project Management", "Specialized Equipment"],
      coverage: "Global Projects"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "RORO Services",
      category: "shipping",
      featured: false,
      description: "Roll-on/Roll-off services offer efficient transportation for wheeled cargo, including vehicles and machinery. With seamless loading and unloading, we ensure safe, cost-effective delivery.",
      highlights: ["Vehicle Transport", "Machinery Shipping", "Efficient Loading"],
      coverage: "Major Routes"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="min-h-screen ">
      
      

      <div className="container mx-auto px-6 pt-2 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Comprehensive logistics solutions tailored to meet your business needs with reliability, 
            efficiency, and cost-effectiveness across every stage of your supply chain.
          </p>
        </div>

        {/* Filter and Search Section */}
        {/* <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

            
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`group relative ${service.featured ? 'lg:col-span-1' : ''}`}>
                <div className={`bg-white rounded-2xl p-8 shadow-sm border transition-all duration-500 h-full ${
                  service.featured 
                    ? 'border-blue-200 hover:shadow-2xl hover:border-blue-300' 
                    : 'border-slate-200 hover:shadow-xl hover:border-blue-200'
                }`}>
                  
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      service.featured 
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white' 
                        : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white'
                    }`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {/* <div className="flex items-center text-sm text-slate-500 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {service.coverage}
                      </div> */}
                    </div>
                    
                    <p className="text-slate-600 font-light leading-relaxed">
                      {service.description}
                    </p>

                    

                 
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No services found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

      
        
      </div>
    </section>
  );
};

export default Services;