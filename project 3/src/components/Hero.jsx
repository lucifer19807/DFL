import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-opacity-80 bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gray-900  bg-opacity-80"></div>
      </div>

      

      {/* Hero Content */}
      <div className="relative z-3 pt-40 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Deliver The Goods
              <br />
              <span className="text-white">on time</span>
             
            </h1>
            
            <p className="text-xl text-white mb-8 opacity-90 max-w-2xl leading-relaxed">
              Over 100+ acre interior warehouse space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition flex items-center justify-center group">
                View services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;