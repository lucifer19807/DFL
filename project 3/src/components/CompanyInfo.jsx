
import { React, useState, useEffect } from 'react';
import { Truck, Package, Clock, Anchor, ArrowRight, Shield, Globe, Users, Menu, Phone, Mail, Ship, Plane } from 'lucide-react';



const visuals = [
  {
    icon: <Truck className="w-24 h-16 text-white mx-auto" />,
    color: 'from-gray-800 to-gray-700',
    floating: [
      { icon: <Package className="w-8 h-8 text-indigo-600" />, pos: 'top-[-16px] right-[-16px]' },
      { icon: <Shield className="w-8 h-8 text-green-600" />, pos: 'bottom-[-16px] left-[-16px]' },
    ],
    lines: true,
  },
  {
    icon: <Plane className="w-24 h-16 text-white mx-auto rotate-45" />,
    color: 'from-blue-700 to-blue-600',
    floating: [
      { icon: <Shield className="w-8 h-8 text-blue-400" />, pos: 'top-[-16px] right-[-16px]' },
      { icon: <Package className="w-8 h-8 text-purple-500" />, pos: 'bottom-[-16px] left-[-16px]' },
    ],
    lines: false,
  },
  {
    icon: <Ship className="w-24 h-16 text-white mx-auto" />,
    color: 'from-teal-800 to-teal-600',
    floating: [
      { icon: <Package className="w-8 h-8 text-cyan-500" />, pos: 'top-[-16px] right-[-16px]' },
      { icon: <Shield className="w-8 h-8 text-lime-500" />, pos: 'bottom-[-16px] left-[-16px]' },
    ],
    lines: false,
  },
];

export default function CompanyInfo() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visuals.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const current = visuals[activeIndex];

  return (
    <div className="min-h-screen ">


      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div className="order-2 lg:order-1">


              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ultimate
                <span className="block text-indigo-600">Transport Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Delivering excellence to the world's most challenging destinations with
                <span className="font-semibold text-gray-900"> unmatched reliability</span> and precision
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book Shipment Now
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Contact Us
                </button>
              </div>

              {/* Stats */}

            </div>

            <div className="order-1 lg:order-2 relative transition-all duration-700">
              <div className="relative">
                <div className="w-full max-w-md mx-auto relative">
                  <div className={`bg-gradient-to-r ${current.color} rounded-3xl p-12 shadow-2xl transition-all duration-500`}>
                    {current.icon}
                  </div>

                  {/* Floating elements */}
                  {current.floating.map((item, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${item.pos} bg-white rounded-2xl p-4 shadow-xl transition-all duration-500`}
                    >
                      {item.icon}
                    </div>
                  ))}

                  {/* Motion lines only for truck */}
                  {current.lines && (
                    <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 space-y-2">
                      <div className="w-8 h-1 bg-indigo-300 rounded-full animate-pulse"></div>
                      <div className="w-6 h-1 bg-indigo-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-4 h-1 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-4">
              <Package className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose DFL Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of working with industry leaders who prioritize your success
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Our System */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Anchor className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our System</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The DFL Group, we make shipping easy and reliable. From air and ocean freight to customs clearance and warehousing, we ensure your goods reach anywhere on time, every time. Trust us for smooth and efficient logistics solutions worldwide.
              </p>
            </div>

            {/* Updated team */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Updated team</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our top management team carries over two decades of expertise in ocean and air freight, making us leaders in delivering seamless and reliable logistics solutions. With their vast experience and dedication to excellence, we ensure efficient operations, tailored services, and customer satisfaction in every shipment we handle.
              </p>
            </div>

            {/* Timely Delivery */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The DFL Group, we understand the value of time in freight forwarding. Our dedicated team ensures your shipments reach their destination safely and on schedule. With efficient planning, reliable carriers, and real-time tracking, we prioritize timely deliveries to keep your business running smoothly. Partner with us for dependable, on-time solutions you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}