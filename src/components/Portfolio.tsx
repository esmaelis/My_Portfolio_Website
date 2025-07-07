import React from 'react';
import { ExternalLink, Code, Users, TrendingUp, Database } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['User Authentication', 'Payment Processing', 'Inventory Management', 'Order Tracking'],
      metrics: { users: '500+', conversion: '3.2%', performance: '95%' },
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Corporate WordPress Site',
      category: 'WordPress Development',
      description: 'A professional corporate website with custom theme, blog functionality, and SEO optimization.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Custom CSS'],
      features: ['Custom Theme', 'Blog Management', 'SEO Optimization', 'Contact Forms'],
      metrics: { pageviews: '10K+', speed: '98%', uptime: '99.9%' },
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'CRM System Integration',
      category: 'CRM Specialist',
      description: 'Comprehensive CRM setup and integration for a growing business, including data migration and staff training.',
      technologies: ['Salesforce', 'HubSpot', 'Zapier', 'Excel'],
      features: ['Data Migration', 'Process Automation', 'Custom Reports', 'Team Training'],
      metrics: { efficiency: '40%', accuracy: '99%', satisfaction: '96%' },
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const caseStudies = [
    {
      title: 'Virtual Assistant for Tech Startup',
      category: 'Virtual Assistant',
      description: 'Provided comprehensive administrative support for a growing tech startup, managing communications, scheduling, and project coordination.',
      results: ['Reduced admin overhead by 60%', 'Improved response time by 75%', 'Streamlined project workflows'],
      icon: Users,
    },
    {
      title: 'Data Entry Optimization Project',
      category: 'Data Entry',
      description: 'Optimized data entry processes for a medium-sized business, implementing quality control measures and automation.',
      results: ['Increased accuracy to 99.8%', 'Reduced processing time by 45%', 'Implemented quality assurance protocols'],
      icon: Database,
    },
    {
      title: 'Business Process Automation',
      category: 'Process Improvement',
      description: 'Automated repetitive tasks and created efficient workflows for multiple client businesses.',
      results: ['Saved 20+ hours per week', 'Eliminated manual errors', 'Improved team productivity'],
      icon: TrendingUp,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portfolio & Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent projects and success stories that demonstrate 
            my expertise across different domains.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <study.icon className="h-6 w-6 text-blue-600" />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {study.title}
                </h4>
                
                <span className="text-sm text-blue-600 font-medium mb-3 block">
                  {study.category}
                </span>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {study.description}
                </p>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Results:</h5>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;