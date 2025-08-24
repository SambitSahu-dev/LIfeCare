import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    condition: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Map your fields to Google Form entry IDs
    const googleFormData = new FormData();
    googleFormData.append("entry.2005620554", formData.name);      // Full Name
    googleFormData.append("entry.1166974658", formData.phone);     // Phone
    googleFormData.append("entry.1045781291", formData.email);     // Email
    googleFormData.append("entry.1065046570", formData.condition); // Condition
    googleFormData.append("entry.342113673", formData.message);    // Message

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSezw9tjNfHN3hnSIx2njkrduEfpq5x8wnbD8k6wd9XyOPbQdQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: googleFormData,
        }
      );

      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', condition: '', message: '' });
    } catch (error) {
      console.error("Error!", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert physiotherapy team. We're here to help you on your journey to better health and mobility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    MIG 23 Samant Vihar, NALCO Square, Chandrasekharpur,<br />
                    Infront of Gate No.2, 7th Battalion,<br />
                    Bhubaneswar, Odisha – 751017
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:8093909684" className="text-blue-600 hover:text-blue-700">
                    8093909684
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:lifecarephysios@gmail.com" className="text-blue-600 hover:text-blue-700">
                    lifecarephysios@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/drphysiocare01/" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579179634196" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://wa.me/8093909684" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-center">
                ✅ Thank you! Your response has been recorded.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Condition
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your condition</option>
                  <option value="Back Pain">Back Pain</option>
                  <option value="Knee Pain">Knee Pain</option>
                  <option value="Shoulder Pain">Shoulder Pain</option>
                  <option value="Neck Pain">Neck Pain</option>
                  <option value="Sports Injury">Sports Injury</option>
                  <option value="Post-Surgery Rehab">Post-Surgery Rehab</option>
                  <option value="Neurological Condition">Neurological Condition</option>
                  <option value="Arthritis">Arthritis</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your condition and how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Or Book Appointment Directly</h4>
              <div className="space-y-3">
                <a
                  href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors"
                >
                  Book Online Appointment
                </a>
                <a
                  href="tel:8093909684"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors"
                >
                  Call 8093909684
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
