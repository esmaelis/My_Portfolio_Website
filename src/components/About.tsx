import React from 'react';
import { Users, Award, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Award, label: 'Projects Completed', value: '100+' },
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Star, label: 'Client Satisfaction', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate professional with over 5 years of experience in web development, 
                virtual assistance, and business support services. My mission is to help businesses 
                streamline their operations and establish a strong online presence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need custom web solutions, WordPress development, administrative support, 
                or data management, I bring dedication, attention to detail, and a commitment to 
                delivering exceptional results that exceed expectations.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">My Approach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Quality First</h4>
                    <p className="text-sm text-gray-600">Every project is delivered with meticulous attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Clear Communication</h4>
                    <p className="text-sm text-gray-600">Regular updates and transparent project management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Timely Delivery</h4>
                    <p className="text-sm text-gray-600">Meeting deadlines while maintaining high standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Continuous Learning</h4>
                    <p className="text-sm text-gray-600">Staying updated with latest technologies and trends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;