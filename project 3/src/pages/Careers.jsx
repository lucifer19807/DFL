import React, { useState, useEffect } from 'react';
import { ChevronRight, Send, Upload, Mail, Clock, Calendar, Briefcase, Users, TrendingUp, Heart, CheckCircle, ArrowRight, User, Phone, AtSign, FileText, Sparkles, Check } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    resume: null
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Accelerate your professional journey with continuous learning opportunities and clear advancement paths."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Work alongside industry experts and innovative minds in a supportive, diverse environment."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Challenging Projects",
      description: "Tackle complex logistics challenges that make a real impact on global commerce and sustainability."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Enjoy comprehensive benefits, flexible schedules, and a culture that values your well-being."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
     

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Careers at
            <span className="block font-normal text-transparent bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text">
              DFL Group
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Shape the future of logistics with innovative solutions that connect the world. 
            Join us in building tomorrow's supply chain today.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className={`mb-20 transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Why Choose DFL Group?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just a logistics company – we're a community of innovators, problem-solvers, and industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Application Section - Updated to fill h-screen */}
        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="min-h-screen flex items-center justify-center -mx-6 px-6">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-7xl">
              <div className="grid lg:grid-cols-5 min-h-[600px] lg:min-h-[700px]">
                {/* Left Panel - Form */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
                    <p className="text-gray-600">Join our team of innovators and industry leaders.</p>
                  </div>

                  {/* Progress Steps */}
                  <div className="flex items-center mb-8">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {currentStep > 1 ? <Check className="w-4 h-4" /> : '1'}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-700">Personal Info</span>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-1 bg-gray-200 rounded">
                        <div className={`h-1 bg-blue-600 rounded transition-all duration-500 ${currentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-700">Submit</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Input Fields with Icons */}
                    <div className="space-y-4">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setCurrentStep(1)}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>

                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <AtSign className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>

                      {/* Modern File Upload */}
                      <div className="relative">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className={`block w-full p-6 border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer ${
                            formData.resume 
                              ? 'border-blue-600 bg-blue-50' 
                              : 'border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <div className="text-center">
                            {formData.resume ? (
                              <>
                                <FileText className="mx-auto h-12 w-12 text-blue-600 mb-2" />
                                <p className="text-sm font-medium text-gray-900">{formData.resume.name}</p>
                                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${uploadProgress}%` }}
                                  ></div>
                                </div>
                              </>
                            ) : (
                              <>
                                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                                <p className="text-sm font-medium text-gray-900">Upload your resume</p>
                                <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                              </>
                            )}
                          </div>
                        </label>
                      </div>

                      <div className="relative group">
                        <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                          <FileText className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        </div>
                        <textarea
                          name="message"
                          placeholder="Tell us why you'd be a great fit..."
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setCurrentStep(2)}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* Right Panel - Contact Info */}
                <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">Email Us</p>
                        <div className="space-y-2">
                          <a href="mailto:hr@dflindia.in" className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>hr@dflindia.in</span>
                          </a>
                          <a href="mailto:hr@thedflgroup.com" className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>hr@thedflgroup.com</span>
                          </a>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">Office Hours</p>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-300">Mon-Sat: 9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-300">Sunday: Holiday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                             {/* Stats */}
                             <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-3xl font-bold text-white">500+</p>
                        <p className="text-gray-400 text-sm">Team Members</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">15+</p>
                        <p className="text-gray-400 text-sm">Years Experience</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">100+</p>
                        <p className="text-gray-400 text-sm">Open Positions</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">5★</p>
                        <p className="text-gray-400 text-sm">Employee Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                    <p className="text-gray-300 italic mb-4">
                      "Working at DFL has been transformative for my career. The growth opportunities and supportive culture make it an exceptional place to work."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">Sarah Johnson</p>
                        <p className="text-gray-400 text-sm">Senior Logistics Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Discover exciting opportunities and build your career with one of the industry's leading logistics companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
                  View Open Positions
                </button>
                <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern CSS for smooth animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input:focus, textarea:focus {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Careers;