import React, { useEffect, useState, useRef } from "react";
import { Award, Users, Clock, Heart, Home, Star } from "lucide-react";
import introImage from "../assets/intro_image/intro_1.png";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    patients: 0,
    experience: 0,
    rating: 0,
    stories: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Stats Data
  const stats = [
    { icon: Users, value: 3000, label: "Patients Treated", suffix: "+" },
    { icon: Clock, value: 9, label: "Years Experience", suffix: "+" },
    { icon: Star, value: 4.9, label: "Patient Rating", suffix: "" },
    { icon: Award, value: 100, label: "Success Stories", suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate counters
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounters({
              patients: Math.floor(3000 * progress),
              experience: Math.floor(9 * progress),
              rating: Math.floor(4.9 * progress * 10) / 10,
              stories: Math.floor(100 * progress),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounters({
                patients: 3000,
                experience: 9,
                rating: 4.9,
                stories: 100,
              });
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trusted Physiotherapy Care in Bhubaneswar with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              9+ Years of Combined Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Three Equal Columns */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-16">
          {/* Column 1 - Photo */}
          <div
            className={`flex justify-center transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <img
              src={introImage}
              alt="Physiotherapy session"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
            />
          </div>

          {/* Column 2 - Our Approach Card */}
          <div
            className={`flex justify-center transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white w-full max-w-sm shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center">
                Our Approach
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Heart className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-100">
                    <span className="font-semibold">
                      Comprehensive Assessment:
                    </span>{" "}
                    Detailed evaluation of your condition.
                  </p>
                </div>
                <div className="flex items-start">
                  <Award className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-100">
                    <span className="font-semibold">
                      Personalized Treatment:
                    </span>{" "}
                    Tailored therapy plans for your needs.
                  </p>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-blue-100">
                    <span className="font-semibold">Expert Care Team:</span>{" "}
                    Experienced physiotherapists guiding recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Content */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              At Life Care, we focus on complete rehabilitation — relieving
              pain, restoring mobility, and preventing future injuries. Whether
              you need physiotherapy for chronic back pain, sports injuries,
              neurological recovery, or post-surgical rehabilitation, our team
              creates a customized plan based on your condition, lifestyle, and
              goals.
            </p>

            <div className="bg-blue-50 p-5 rounded-lg mb-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <Home className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Home Physiotherapy Services
                </h3>
              </div>
              <p className="text-xs text-gray-600">
                We proudly offer home physiotherapy services in Bhubaneswar for
                patients who cannot visit our clinic. Our qualified therapists
                bring professional care directly to your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8093909684"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
              >
                <span className="group-hover:animate-pulse">
                  Call Now: 8093909684
                </span>
              </a>
              <a
                href="https://forms.gle/6DwCUEpJGZzWqpUp8"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105"
              >
                <span className="group-hover:animate-bounce">
                  Book Consultation
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div
          className={`transform transition-all duration-1000 delay-800 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {index === 0 && counters.patients}
                  {index === 1 && counters.experience}
                  {index === 2 && counters.rating}
                  {index === 3 && counters.stories}
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
