import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">LC</div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Life Care</h2>
                <p className="text-blue-400">Physiotherapy Clinic</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading physiotherapy clinic in Bhubaneswar specializing in advanced treatment for back pain, arthritis, sports injuries, neurological conditions, and post-surgical rehabilitation.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <a href="tel:8093909684" className="hover:text-blue-400">8093909684</a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:lifecarephysios@gmail.com" className="hover:text-blue-400">lifecarephysios@gmail.com</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/drphysiocare01/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579179634196"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8093909684"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#doctors" className="hover:text-blue-400">Our Doctors</a></li>
              <li><a href="#conditions" className="hover:text-blue-400">Conditions</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Manual Therapy</li>
              <li>• Sports Injury Rehab</li>
              <li>• Neurological Physiotherapy</li>
              <li>• Post-Surgical Rehab</li>
              <li>• Pain Management</li>
              <li>• Home Physiotherapy</li>
              <li>• Exercise Therapy</li>
            </ul>
            
            <div className="mt-6">
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Book Appointment
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex items-start mb-4 lg:mb-0">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <div className="text-gray-300">
                <p className="font-semibold mb-1">Visit Our Clinic</p>
                <p className="text-sm">
                  MIG 23 Samant Vihar, NALCO Square, Chandrasekharpur,<br />
                  Infront of Gate No.2, 7th Battalion, Bhubaneswar, Odisha – 751017
                </p>
              </div>
            </div>
            
            <div className="text-gray-300">
              <p className="font-semibold mb-1">Working Hours</p>
              <p className="text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-2 sm:mb-0">
              © 2025 Life Care Physiotherapy Clinic. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>for better health</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-500">
            <p>SEO Title: Best Physiotherapy Clinic in Bhubaneswar – dealing with pain free life</p>
            <p>Looking for expert physiotherapy in Bhubaneswar? We treat back pain, arthritis, sports injuries, stroke, and more with thrilling results in few days.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;