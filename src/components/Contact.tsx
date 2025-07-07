import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: '',
      timeline: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'esmael@example.com',
      link: 'mailto:esmael@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      link: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/esmael-seid',
      link: 'https://linkedin.com/in/esmael-seid',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how I can help 
            bring your vision to life with professional web development and virtual assistance services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                I'm always excited to work on new projects and help businesses grow. 
                Whether you need web development, virtual assistance, or any of my other services, 
                I'm here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Why Choose Me?</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Fast response within 24 hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Competitive pricing and flexible packages</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-2 mb-6">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="virtual-assistant">Virtual Assistant</option>
                  <option value="crm">CRM Specialist</option>
                  <option value="data-entry">Data Entry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;