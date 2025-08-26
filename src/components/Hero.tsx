import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Clock, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import introImage from '../assets/intro_image/intro_2.png'; // ✅ Import image

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    "9+ Years Combined Experience",
    "3000+ Happy Patients",
    "95% Success Rate",
    "Home Service Available"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 lg:py-24 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`lg:pr-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="font-semibold">{highlights[currentSlide]}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Physiotherapy Clinic in Bhubaneswar –
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 block mt-2">
                Faster relief • Improve mobility • Increase your hope
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Welcome to <span className="font-semibold text-blue-600">Life Care</span>, a leading
              physiotherapy clinic in Bhubaneswar specializing in advanced treatment for back pain,
              arthritis, sports injuries, neurological conditions, and post-surgical rehabilitation.
              Our experienced physiotherapists provide evidence-based therapies, modern equipment,
              and personalized exercise programs to help you recover faster and improve your quality
              of life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:8093909684"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Call 8093909684
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
              >
                <CheckCircle className="w-5 h-5 mr-2 group-hover:animate-spin" />
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
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Mon-Sat: 9AM - 9PM</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">Home Service Available</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Main Image */}
            <img
              src={introImage}
              alt="Physiotherapy Treatment"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-100 hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-green-100 hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Recovery Rate</div>
              </div>
            </div>

            {/*<div className="absolute top-1/2 -left-4 bg-white p-4 rounded-xl shadow-lg border-2 border-purple-100 hover:scale-110 transition-transform">
               <div className="text-center">
               <div className="text-lg font-bold text-purple-600">9+</div>
                <div className="text-xs text-gray-600">Years Exp.</div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
