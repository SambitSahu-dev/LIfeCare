import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import introImage from '../assets/intro_image/intro_2.png'; // ✅ Import from src/assets

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              9+ Years Combined Experience
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Physiotherapy Clinic in Bhubaneswar – 
              <span className="text-blue-600"> faster relief, improve mobility, increase your hope</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Welcome to Life Care, a leading physiotherapy clinic in Bhubaneswar specializing in advanced treatment for back pain, arthritis, sports injuries, neurological conditions, and post-surgical rehabilitation. Our experienced physiotherapists provide evidence-based therapies, modern equipment, and personalized exercise programs to help you recover faster and improve your quality of life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:8093909684"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 8093909684
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
              >
                Book Appointment
              </a>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <a 
                href="https://www.google.com/maps?q=Life+Care+Physiotherapy+Clinic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Bhubaneswar, Odisha
              </a>
            </div>

              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Mon-Sat: 9AM-9PM</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Home Service Available</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            {/* Main Image */}
            <img
              src={introImage} // ✅ Use imported image
              alt="Physiotherapy Treatment"
              className="rounded-2xl shadow-lg w-full object-cover"
            />

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Recovery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
