import React from "react";
import { GraduationCap, Award, Phone } from "lucide-react";

// ✅ Import images from src/assets (Vite will handle bundling & hashing)
import gokulImage from "../assets/docters/Dr-GOKULANANDA-SENAPATI.jpeg";
import pralayaImage from "../assets/docters/Dr-Pralaya-Jyoti-Sahoo.jpeg";
import subhalaxmiImage from "../assets/docters/Dr-Subhalaxmi-Mohanty.jpeg";
import karttickImage from "../assets/docters/Dr-Karttick-Kumar-Mahalik.jpeg";

const Doctors: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Gokula Nanda Senapti",
      role: "Senior Physiotherapist, Utkal Hospital- Bhubaneswar",
      education: "BPT(Utkal University)",
      expertise: [
        "Orthopedic & Neurological Physiotherapy",
        "Post-Surgical Rehabilitation",
        "Chronic Pain Management",
      ],
      experience: "10+ Years",
      image: gokulImage,
    },
    {
      name: "Dr. Pralaya Jyoti Sahoo",
      role: "Junior Physiotherapist",
      education: "Utkal University",
      expertise: [
        "Sports Injury Rehabilitation",
        "Pain Management",
        "Neuro-Rehabilitation",
      ],
      experience: "5+ Years",
      image: pralayaImage,
    },
    {
      name: "Dr. Subhalaxmi Mohanty",
      role: "Assistant Physiotherapist",
      education: "BPT (Utkal University), KT, CT",
      expertise: [
        "Orthopedic & Neurological Physiotherapy",
        "Post-Surgical Rehabilitation",
        "Chronic Pain Management",
      ],
      experience: "3+ Years",
      image: subhalaxmiImage,
    },
    {
      name: "Dr. Karttick Kumar Mahalik",
      role: "Assistant Therapist",
      education: "BPT (Utkal University)",
      expertise: [
        "Orthopedic & Neurological Physiotherapy",
        "Post-Surgical Rehabilitation",
        "Chronic Pain Management",
      ],
      experience: "3+ Years",
      image: karttickImage,
    },
  ];

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Expert Physiotherapists
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced team of certified physiotherapists is dedicated to
            providing you with the highest quality care and personalized
            treatment plans.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto justify-items-center">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Doctor Image */}
              <div className="h-80 relative overflow-hidden rounded-t-2xl">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                {/* Soft Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                  {doctor.experience}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {doctor.role}
                </p>

                {/* Education */}
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="text-gray-600">{doctor.education}</span>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Areas of Expertise
                  </h4>
                  <ul className="space-y-2">
                    {doctor.expertise.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Button */}
                <a
                  href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Recovery Journey?
            </h3>
            <p className="text-blue-100 mb-6">
              Our expert physiotherapists are here to help you achieve your
              health and wellness goals with personalized care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8093909684"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call 8093909684
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Online Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
