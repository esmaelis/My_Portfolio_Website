import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'Esmael delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise helped us launch successfully and grow our online business by 300% in just 6 months.',
      rating: 5,
      category: 'Web Development',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Digital Solutions LLC',
      content: 'Working with Esmael as our virtual assistant has been a game-changer. He handles all our administrative tasks with precision and professionalism, allowing our team to focus on core business activities.',
      rating: 5,
      category: 'Virtual Assistant',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      company: 'Rodriguez Consulting',
      content: 'The WordPress website Esmael created for our consulting firm perfectly represents our brand. The site is fast, mobile-friendly, and has significantly improved our online presence and client inquiries.',
      rating: 5,
      category: 'WordPress Development',
    },
    {
      name: 'David Thompson',
      role: 'Operations Manager',
      company: 'GrowthCorp',
      content: 'Esmael set up our CRM system and trained our team thoroughly. The automation he implemented has improved our customer relationship management and increased our sales efficiency by 40%.',
      rating: 5,
      category: 'CRM Specialist',
    },
    {
      name: 'Lisa Park',
      role: 'Project Manager',
      company: 'DataFlow Systems',
      content: 'The data entry and processing services provided by Esmael have been outstanding. His accuracy is impeccable, and he always delivers on time. We trust him with our most important data projects.',
      rating: 5,
      category: 'Data Entry',
    },
    {
      name: 'Robert Wilson',
      role: 'Founder',
      company: 'InnovateLab',
      content: 'Esmael is not just a service provider, he\'s a trusted partner. His proactive approach and creative solutions have helped us streamline our operations and achieve our business goals faster.',
      rating: 5,
      category: 'Business Support',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {testimonial.category}
              </span>
              
              <blockquote className="mt-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-sm">Average rating from 50+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;