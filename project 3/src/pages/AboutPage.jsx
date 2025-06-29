import React from 'react';
import { Plane, Ship, FileText, ChevronRight, Globe, Award, Users, TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images
import img1 from '../assets/cr-about-1.png';
import img2 from '../assets/cr-about-2.png';
import img3 from '../assets/cr-about-3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const carouselImages = [
  {
    src: img1,
    alt: "Wide view of a busy shipping port with containers"
  },
  {
    src: img2,
    alt: "Cargo plane being loaded with containers"
  },
  {
    src: img3,
    alt: "Container ship moving through the water at sunset"
  }
];

// Stats Component
const StatCard = ({ icon, value, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        <p className="text-sm text-slate-600 mt-1">{label}</p>
      </div>
      <div className="text-indigo-600 opacity-20">
        {icon}
      </div>
    </div>
  </div>
);

// Service Item Component
const ServiceItem = ({ icon, title, description }) => (
  <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 h-full">
    <div className="mb-6">
      <div className="inline-flex p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl group-hover:from-indigo-100 group-hover:to-blue-100 transition-colors duration-300">
        <div className="text-indigo-600">
          {icon}
        </div>
      </div>
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 group/link">
      <span className="border-b border-transparent group-hover/link:border-indigo-600 transition-all duration-200">
        Learn More
      </span>
      <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
    </a>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen font-light bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 pt-12 pb-8 lg:pt-20 lg:pb-12">
          {/* Main Title */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              Together We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Grow
              </span>
            </h1>
            
          </div>

          {/* Hero Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ 
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-white/50',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
                }}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className="w-full aspect-[21/9]"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => { 
                          e.target.onerror = null; 
                          e.target.src='https://placehold.co/1200x500/e2e8f0/4a5568?text=Image+Not+Found'; 
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      

      {/* About Content Section */}
      <section className="py-2 lg:py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p className="first-letter:text-2xl first-letter:font-bold first-letter:text-indigo-600 first-letter:float-left">
                  At The DFL Group, we go beyond simply providing logistics services — we become an integral extension of your business, offering the expertise and support needed to navigate the complexities of global shipping. Our mission is to be your trusted logistics partner, delivering reliable, comprehensive, and fully customizable solutions that are designed to meet the ever-evolving demands of today’s global marketplace.
                  </p>
                  
                  <p>
                  As a leading international freight forwarder, we pride ourselves on offering seamless, end-to-end logistics services, tailored specifically to address the unique needs of your business. Whether you are a small start-up or an established global corporation, we have the resources, knowledge, and global presence to optimize your supply chain and help drive your business toward success.
                  </p>
                  
                  <p>
                  We understand that businesses today operate in an increasingly interconnected world, where challenges are as diverse and dynamic as the markets they serve. This is why we offer not only traditional shipping methods but also innovative, forward-thinking solutions that anticipate and overcome logistics hurdles before they arise. From air freight to sea freight, courier services to multimodal transportation, our solutions are designed with efficiency, reliability, and cost-effectiveness in mind. Every service we offer is customized to your specific business requirements, ensuring that your supply chain operates at its highest potential, regardless of the scale or complexity of the task.
                  </p>
                  
                  <p>
                  Our global expertise spans various transportation methods. Whether you need the speed and precision of air freight, the cost-efficiency of sea freight, or the urgent reliability of courier services, we have a solution to meet your needs. Our multimodal transportation options combine air, sea, and land transport to create a seamless and integrated supply chain, optimizing both transit time and costs for maximum efficiency.
                  </p>
                  
                  <p>
                  Furthermore, we recognize that logistics is not just about moving goods from one point to another — it’s about handling your shipments with the utmost care, attention, and compliance. Our team’s expertise in navigating complex customs procedures and understanding the regulatory landscapes of different countries ensures that every aspect of your logistics process is in full compliance with international standards. We take care of the intricate details of paperwork, clearance, and documentation, so you don’t have to worry about delays or disruptions in your supply chain.
                  </p>
                  
                  <p>
                  We take great pride in managing every phase of your logistics journey, ensuring that each stage — from initial planning to final delivery — is executed with precision and dedication. Our focus is always on your business’s specific needs, helping you maintain an efficient, effective, and timely operation. With a commitment to excellence, reliability, and customer satisfaction, we ensure that your logistics operations run smoothly and without interruption.
                  </p>
                  
                  <p>
                  At The DFL Group, we don’t just move cargo — we move your business forward. From the very first step to the last, we stand by your side, providing you with the guidance, expertise, and resources you need to enhance your logistics strategy and drive your business to new heights. We understand that each business is unique, and we are committed to creating personalized logistics solutions that enable you to thrive in a competitive and fast-paced market.


                  </p>
                  <p>
                  With our guiding principle of “Together We Grow,” we aim to build long-lasting partnerships that foster mutual success. Through our innovative and dependable logistics solutions, we will help you overcome challenges, seize new opportunities, and achieve your business goals — all while we grow alongside you.

                  </p>
                  <p>
                  Let us handle the complexities of logistics, so you can focus on what matters most: achieving your business’s growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceItem
              icon={<Plane size={32} />}
              title="Air Freight"
              description="DFL Group provides fast and reliable air shipping to get your goods delivered on time anywhere in the world. We handle your shipments with care, ensuring safe and hassle-free delivery every step of the way."
            />
            <ServiceItem
              icon={<Ship size={32} />}
              title="Sea Freight"
              description="DFL Group offers reliable and cost-effective sea shipping solutions for all types of goods. Whether it’s small shipments or large cargo, we ensure safe handling and timely delivery to ports worldwide."
            />
            <ServiceItem
              icon={<FileText size={32} />}
              title="Customs Clearance"
              description="DFL offers reliable and efficient land transportation solutions tailored to your needs. From last-mile delivery to long-haul trucking, we ensure safe and timely movement of goods across regions with our trusted network and skilled team."
            />
          </div>
        </div>
      </section>

      
    </div>
  );
}