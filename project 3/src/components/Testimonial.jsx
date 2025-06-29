import React, { useEffect, useRef } from 'react';
import { Quote, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import back from '../assets/blockquote.jpg';

const Testimonial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 relative  ">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-200/40 to-pink-300/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Professional Header Section */}
        <div className="text-center mb-16 lg:mb-20 animate-on-scroll opacity-0 translate-y-10">
          {/* Trust Badge */}
          
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            
            <span className="inline-block animate-slide-up animation-delay-400 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Warehousing
            </span>{' '}
            <span className="inline-block animate-slide-up animation-delay-600">&</span>{' '}
            <span className="inline-block animate-slide-up animation-delay-800">3PL Solutions</span>
          </h2>
          
         
          
         
        </div>

        {/* Enhanced Testimonial Card */}
        <div className="animate-on-scroll opacity-0 scale-95">
          <div className="relative group">
            {/* Card with Background Image */}
            <div 
              className="relative rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-700 border border-white/20 backdrop-blur-sm"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(67, 85, 115, 0.95) 0%, rgba(51, 65, 85, 0.9) 50%, rgba(30, 41, 59, 0.95) 100%), url('${back}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl lg:rounded-3xl blur-xl -z-10"></div>
              
              <div className="relative p-8 sm:p-10 lg:p-16">
                {/* Quote Icon with Enhanced Animation */}
                

                {/* Enhanced Testimonial Text */}
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-white text-center max-w-4xl mx-auto leading-relaxed mb-12 lg:mb-16 font-light">
                  <span className="animate-text-reveal block">
                    "At The DFL Group, we deliver{' '}
                    <span className="font-semibold text-blue-200">secure warehousing</span> and{' '}
                    <span className="font-semibold text-indigo-200">expert 3PL solutions</span> tailored for business success. 
                    From comprehensive freight distribution to advanced logistics management, our services ensure a{' '}
                    <span className="font-semibold text-purple-200">seamless supply chain</span>. 
                    With cutting-edge facilities and enterprise-grade security, we optimize your operations for maximum efficiency and reliability."
                  </span>
                </blockquote>

                
               

                {/* Professional Attribution */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                    
                    <div className="text-left">
                    
                      <p className="text-blue-200 text-sm">Warehousing & 3PL Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.6; }
        }

        @keyframes slide-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes width-grow {
          from { width: 0; transform: scaleX(0); }
          to { width: 64px; transform: scaleX(1); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes text-reveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes scale-in {
          from { transform: scale(0) rotate(-180deg); opacity: 0; }
          to { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        /* Animation Classes */
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 1s ease-out forwards; }
        .animate-width-grow { animation: width-grow 1.2s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-text-reveal { animation: text-reveal 1.2s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }

        /* Animation Delays */
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
        .animation-delay-500 { animation-delay: 500ms; }

        /* Scroll Animations */
        .animate-on-scroll {
          transition: all 1s cubic-bezier(0.17, 0.55, 0.55, 1);
        }

                .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }

        /* Responsive Improvements */
        @media (max-width: 640px) {
          .animate-blob {
            width: 200px;
            height: 200px;
          }
        }

        /* Enhanced Hover Effects */
        .group:hover .animate-bounce-slow {
          animation-duration: 1.5s;
        }

        /* Smooth Transitions */
        * {
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
        }

        /* Performance Optimizations */
        .animate-blob,
        .animate-float,
        .animate-spin-slow {
          will-change: transform;
        }

        .animate-on-scroll {
          will-change: opacity, transform;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;