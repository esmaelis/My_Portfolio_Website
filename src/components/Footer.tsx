import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:esmael@example.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/esmael-seid', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/esmael-seid', label: 'GitHub' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'WordPress Development',
    'Virtual Assistant',
    'CRM Specialist',
    'Data Entry',
    'Content Management',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Esmael Seid</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional web developer and virtual assistant helping businesses 
              grow with custom solutions, administrative support, and technical expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Email:</span><br />
                <a href="mailto:esmael@example.com" className="hover:text-white transition-colors duration-200">
                  esmael@example.com
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Phone:</span><br />
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Location:</span><br />
                Available Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Esmael Seid. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for amazing clients</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Back to Top
              </button>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">Professional Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;