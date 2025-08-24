import React from 'react';
import { Award, Users, Clock, Heart, Home, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Patients Treated' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Patient Rating' },
    { icon: Award, value: '100+', label: 'Success Stories' }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trusted Physiotherapy Care in Bhubaneswar with 15+ Years of Combined Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Life Care, we focus on complete rehabilitation — relieving pain, restoring mobility, and preventing future injuries. Whether you need physiotherapy for chronic back pain, sports injuries, neurological recovery, or post-surgical rehabilitation, our team creates a customized plan based on your condition, lifestyle, and goals.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Home className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Home Physiotherapy Services</h3>
              </div>
              <p className="text-gray-600">
                We proudly offer home physiotherapy services in Bhubaneswar for patients who cannot visit our clinic. Our qualified therapists bring professional care directly to your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8093909684"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Call Now: 8093909684
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Heart className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Assessment</h4>
                    <p className="text-blue-100 text-sm">Detailed evaluation of your condition and medical history</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Treatment</h4>
                    <p className="text-blue-100 text-sm">Customized therapy plans based on your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Care Team</h4>
                    <p className="text-blue-100 text-sm">Experienced physiotherapists with specialized training</p>
                  </div>
                </div>
              </div>
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