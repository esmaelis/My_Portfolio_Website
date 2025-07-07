import React from 'react';
import { Code, Globe, Headphones, Database, FileText, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, TypeScript, and Node.js.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO-Friendly', 'Cross-browser Compatibility'],
      color: 'blue',
    },
    {
      icon: Globe,
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and optimized performance.',
      features: ['Custom Themes', 'Plugin Development', 'E-commerce Integration', 'Security Optimization'],
      color: 'teal',
    },
    {
      icon: Headphones,
      title: 'Virtual Assistant',
      description: 'Comprehensive administrative support to help streamline your business operations.',
      features: ['Email Management', 'Calendar Scheduling', 'Research Tasks', 'Project Coordination'],
      color: 'orange',
    },
    {
      icon: Settings,
      title: 'CRM Specialist',
      description: 'Expert CRM setup, management, and optimization to enhance your customer relationships.',
      features: ['CRM Setup', 'Data Migration', 'Process Automation', 'Training & Support'],
      color: 'green',
    },
    {
      icon: Database,
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services with quality assurance and fast turnaround.',
      features: ['Data Processing', 'Quality Assurance', 'Database Management', 'Excel Automation'],
      color: 'purple',
    },
    {
      icon: FileText,
      title: 'Content Management',
      description: 'Professional content creation, editing, and management for your digital platforms.',
      features: ['Content Creation', 'SEO Optimization', 'Social Media Management', 'Documentation'],
      color: 'pink',
    },
  ];

  const colorVariants = {
    blue: 'from-blue-100 to-blue-200 border-blue-300 text-blue-600',
    teal: 'from-teal-100 to-teal-200 border-teal-300 text-teal-600',
    orange: 'from-orange-100 to-orange-200 border-orange-300 text-orange-600',
    green: 'from-green-100 to-green-200 border-green-300 text-green-600',
    purple: 'from-purple-100 to-purple-200 border-purple-300 text-purple-600',
    pink: 'from-pink-100 to-pink-200 border-pink-300 text-pink-600',
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From web development to virtual assistance, I provide comprehensive solutions 
            to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-br ${colorVariants[service.color as keyof typeof colorVariants]} border`}>
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;