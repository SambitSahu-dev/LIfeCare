import React from 'react';
import { Activity, Zap, Heart, Settings, Users, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const treatments = [
    { name: 'Manual Therapy', category: 'hands-on' },
    { name: 'Cupping Therapy', category: 'alternative' },
    { name: 'Dry Needling', category: 'advanced' },
    { name: 'Kinesio Taping', category: 'sports' },
    { name: 'Deep Tissue Release', category: 'hands-on' },
    { name: 'TENS Therapy', category: 'electrical' },
    { name: 'IFT (Interferential Therapy)', category: 'electrical' },
    { name: 'MST (Muscle Stimulation)', category: 'electrical' },
    { name: 'Faradic Foot Bath', category: 'specialized' },
    { name: 'Lumbar & Cervical Traction', category: 'mechanical' },
    { name: 'Laser Therapy', category: 'advanced' },
    { name: 'Infrared Therapy', category: 'heat' },
    { name: 'Ultrasound Therapy', category: 'advanced' },
    { name: 'Paraffin Wax Therapy', category: 'heat' },
    { name: 'Moist & Dry Heat Therapy', category: 'heat' },
    { name: 'Customized Exercise Therapy', category: 'exercise' }
  ];

  const serviceCategories = [
    {
      icon: Activity,
      title: 'Manual & Hands-On Therapy',
      description: 'Skilled manual techniques for pain relief and mobility improvement',
      color: 'bg-blue-100 text-blue-600',
      treatments: treatments.filter(t => t.category === 'hands-on')
    },
    {
      icon: Zap,
      title: 'Electrical & Advanced Therapy',
      description: 'Modern electrical stimulation and advanced treatment modalities',
      color: 'bg-green-100 text-green-600',
      treatments: treatments.filter(t => ['electrical', 'advanced'].includes(t.category))
    },
    {
      icon: Heart,
      title: 'Heat & Therapeutic Modalities',
      description: 'Thermal therapy and specialized treatment techniques',
      color: 'bg-red-100 text-red-600',
      treatments: treatments.filter(t => ['heat', 'alternative', 'specialized'].includes(t.category))
    },
    {
      icon: Settings,
      title: 'Sports & Exercise Therapy',
      description: 'Specialized programs for athletes and active individuals',
      color: 'bg-purple-100 text-purple-600',
      treatments: treatments.filter(t => ['sports', 'exercise', 'mechanical'].includes(t.category))
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced & Certified Physiotherapists',
      description: 'Our team has 15+ years combined experience in Bhubaneswar'
    },
    {
      icon: Heart,
      title: 'Better Results in Few Days',
      description: 'Evidence-based treatments that show faster improvement'
    },
    {
      icon: Shield,
      title: 'Treatment for Complex & Chronic Conditions',
      description: 'Specialized care for rare and long-term health issues'
    },
    {
      icon: Settings,
      title: 'Modern Equipment & Affordable Prices',
      description: 'Latest physiotherapy equipment at competitive rates'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Physiotherapy Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of advanced physiotherapy treatments using modern equipment and evidence-based techniques to help you recover faster.
          </p>
        </div>

        {/* Treatment Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.treatments.slice(0, 3).map((treatment, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {treatment.name}
                  </li>
                ))}
                {category.treatments.length > 3 && (
                  <li className="text-sm text-blue-600 font-medium">
                    +{category.treatments.length - 3} more treatments
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* All Treatments List */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Available Treatments</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-gray-800">{treatment.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Life Care?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Home Physiotherapy Available</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Can't visit our clinic? No problem! We provide professional physiotherapy services at your home across Bhubaneswar and nearby areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8093909684"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call for Home Service: 8093909684
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;