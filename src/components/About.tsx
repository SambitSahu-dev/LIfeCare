import React from 'react';
import { Award, Users, Clock, Heart, Home, Star } from 'lucide-react';

import introImage from '../assets/intro_image/intro_1.png'; // ✅ Import image

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '3000+', label: 'Patients Treated' },
    { icon: Clock, value: '9+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Patient Rating' },
    { icon: Award, value: '100+', label: 'Success Stories' }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trusted Physiotherapy Care in Bhubaneswar with 9+ Years of Combined Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Three Equal Columns */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-16">
          {/* Column 1 - Photo */}
          <div className="flex justify-center">
            <img
              src={introImage} // ✅ Using imported image
              alt="Physiotherapy session"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
            />
          </div>

          {/* Column 2 - Our Approach Card */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white w-full max-w-sm">
              <h3 className="text-xl font-bold mb-4 text-center">Our Approach</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Heart className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-100">
                    <span className="font-semibold">Comprehensive Assessment:</span> 
                    Detailed evaluation of your condition.
                  </p>
                </div>
                <div className="flex items-start">
                  <Award className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-100">
                    <span className="font-semibold">Personalized Treatment:</span> 
                    Tailored therapy plans for your needs.
                  </p>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-100">
                    <span className="font-semibold">Expert Care Team:</span> 
                    Experienced physiotherapists guiding recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Content */}
          <div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              At Life Care, we focus on complete rehabilitation — relieving pain, restoring mobility, 
              and preventing future injuries. Whether you need physiotherapy for chronic back pain, 
              sports injuries, neurological recovery, or post-surgical rehabilitation, our team 
              creates a customized plan based on your condition, lifestyle, and goals.
            </p>
            
            <div className="bg-blue-50 p-5 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <Home className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Home Physiotherapy Services</h3>
              </div>
              <p className="text-xs text-gray-600">
                We proudly offer home physiotherapy services in Bhubaneswar for patients who cannot 
                visit our clinic. Our qualified therapists bring professional care directly to your 
                doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8093909684"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors"
              >
                Call Now: 8093909684
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
