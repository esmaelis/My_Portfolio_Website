import React from 'react';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

const Resume: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'PHP', 'Python', 'MySQL', 'MongoDB'] },
    { category: 'CMS & Tools', items: ['WordPress', 'Shopify', 'Salesforce', 'HubSpot', 'Zapier'] },
    { category: 'Other', items: ['SEO', 'Google Analytics', 'Project Management', 'Data Analysis'] },
  ];

  const certifications = [
    'Google Analytics Certified',
    'HubSpot Content Marketing Certification',
    'Salesforce Administrator Certification',
    'WordPress Developer Certification',
  ];

  const handleDownload = () => {
    // In a real application, this would trigger an actual download
    alert('Resume download would be triggered here. Please provide your actual resume PDF link.');
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resume & Qualifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download my complete resume or explore my skills and qualifications below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Download Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Download My Resume
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                Get a comprehensive overview of my experience, skills, and achievements in a professionally formatted PDF.
              </p>
              
              <div className="text-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                Last updated: December 2024
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
              </div>
              
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-6">
                <Briefcase className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-medium text-gray-900">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Summary */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience Summary</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-medium text-gray-900">Web Developer & Virtual Assistant</h4>
                  <p className="text-sm text-gray-600">Freelance | 2020 - Present</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Providing comprehensive web development and virtual assistance services to 50+ clients worldwide.
                  </p>
                </div>
                
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="font-medium text-gray-900">WordPress Developer</h4>
                  <p className="text-sm text-gray-600">Various Agencies | 2019 - 2020</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Specialized in custom WordPress development and theme customization for client projects.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-medium text-gray-900">Administrative Assistant</h4>
                  <p className="text-sm text-gray-600">Tech Solutions Inc. | 2018 - 2019</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Managed administrative tasks, data entry, and customer support for growing tech company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;