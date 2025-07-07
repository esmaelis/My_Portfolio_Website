import React from 'react';
import { ArrowRight, Code, Briefcase, Database, Globe } from 'lucide-react';


const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Esmael Seid
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                Professional Developer & Virtual Assistant
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                I help businesses grow with custom web solutions, WordPress development, 
                virtual assistance, CRM management, and data entry services. Let's bring 
                your vision to life with precision and professionalism.
              </p>
            </div>

            {/* Quick Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Code className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Web Dev</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Globe className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-medium">WordPress</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Briefcase className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">Virtual Assistant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Database className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">CRM & Data</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="font-medium">Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={scrollToServices}
                className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                <span className="font-medium">View Services</span>
              </button>
            </div>
          </div>

          {/* Professional Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-2xl">
                <div className="text-center space-y-4">
             
                  <div className="space-y-2">
                         <img
                  src="/src/Img/Photo.jpg"
                  alt="Esmael Seid - Professional Developer & Virtual Assistant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                  
                    
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;