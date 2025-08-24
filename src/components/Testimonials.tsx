import React from 'react';
import { Star, Quote, Play, ExternalLink } from 'lucide-react';

// Import all testimonial images from assets
const testimonialImages = import.meta.glob("../assets/testimonials/*.{jpg,jpeg,png}", { eager: true });
const testimonialImageMap: Record<string, string> = {};

Object.entries(testimonialImages).forEach(([path, mod]) => {
  const fileName = path.split("/").pop() || "";
  testimonialImageMap[fileName] = (mod as any).default;
});

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sudhir Kumar Sahu",
      condition: "Post-Knee Surgery",
      rating: 5,
      text: "After my knee surgery, the clinic's team helped me recover in record time. Amazing care!",
      image: testimonialImageMap["Sudhir Kumar Sahu.jpeg"]
    },
    {
      name: "R. Patnaik",
      condition: "Chronic Back Pain",
      rating: 4,
      text: "My back pain is gone after just 3 weeks of treatment. Highly recommend!",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Priya Sharma",
      condition: "Frozen Shoulder",
      rating: 4,
      text: "The physiotherapy team was excellent. My shoulder mobility improved dramatically.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rajesh Mohanty",
      condition: "Sports Injury",
      rating: 5,
      text: "Professional service and modern equipment. Got back to playing cricket within a month!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied patients who have experienced remarkable recoveries with our personalized physiotherapy care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Patient Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Our Patients' Recovery Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch real patient testimonials and recovery journey videos to see how our physiotherapy treatments have transformed lives.
            </p>
          </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden aspect-video shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TDyYJIv-csU"
                title="Clinic Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden aspect-video shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TDyYJIv-csU"
                title="Treatment Process"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="rounded-lg overflow-hidden aspect-video shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TDyYJIv-csU"
                title="Patient Success Stories"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* YouTube Channel Link */}
          <div className="text-center">
            <a
              href="https://youtube.com/@lifecarephysiotherapy.01?si=h-DWKUuFgBcUuTj2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Visit Our YouTube Channel
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Recovery Journey?</h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of satisfied patients who have experienced life-changing results with our expert physiotherapy care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8093909684"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: 8093909684
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;