import React from 'react';
import { Bone, Brain, Scissors, Activity } from 'lucide-react';

const Conditions: React.FC = () => {
  const conditionCategories = [
    {
      icon: Bone,
      title: 'Musculoskeletal & Orthopedic Rehabilitation',
      color: 'bg-blue-100 text-blue-600',
      conditions: [
        'Low Back Pain, PIVD (Herniated Disc)',
        'Spondylosis, Spondylitis, Ankylosing Spondylitis',
        'Osteoarthritis (OA), Rheumatoid Arthritis (RA)',
        'Tennis Elbow, Golfer\'s Elbow, Frozen Shoulder',
        'Post-Fracture Stiffness, Tendonitis, Synovitis',
        'Spina Bifida'
      ]
    },
    {
      icon: Brain,
      title: 'Neurological Physiotherapy',
      color: 'bg-green-100 text-green-600',
      conditions: [
        'Sciatica',
        'Cervical & Lumbar Radiculopathy',
        'Stroke (CVA) Rehabilitation',
        'Cerebral Palsy (CP)',
        'Guillain-Barré Syndrome (GBS)',
        'Myopathy, Transverse Myelitis',
        'Hydrocephalus'
      ]
    },
    {
      icon: Scissors,
      title: 'Post-Surgical Physiotherapy',
      color: 'bg-purple-100 text-purple-600',
      conditions: [
        'Total Knee Replacement (TKR)',
        'Total Hip Replacement (THR)',
        'Meniscectomy, Patellectomy',
        'Laminectomy, Foramenectomy',
        'Craniotomy, Craniectomy'
      ]
    },
    {
      icon: Activity,
      title: 'Sports & General Injuries',
      color: 'bg-orange-100 text-orange-600',
      conditions: [
        'Sports-related muscle injuries',
        'Ligament and tendon injuries',
        'Joint mobility issues',
        'Muscle weakness and imbalance',
        'Chronic pain conditions'
      ]
    }
  ];

  return (
    <section id="conditions" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Conditions We Treat
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert physiotherapists specialize in treating a wide range of musculoskeletal, neurological, and post-surgical conditions with evidence-based approaches.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {conditionCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Conditions List */}
              <ul className="space-y-3">
                {category.conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Specialized Treatment for Complex & Chronic Conditions
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
            Our experienced physiotherapists have successfully treated hundreds of patients with complex, rare, and chronic conditions. We combine traditional physiotherapy techniques with modern equipment for optimal results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">3000+</div>
              <div className="text-blue-100">Patients Treated</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">9+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8093909684"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Consult Our Experts: 8093909684
            </a>
            <a
              href="https://forms.gle/6DwCUEpJGZzWqpUp8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Condition Listed?
            </h4>
            <p className="text-gray-600 mb-6">
              We treat many more conditions beyond what's listed here. Our comprehensive assessment helps us create personalized treatment plans for any musculoskeletal, neurological, or rehabilitation need you may have.
            </p>
            <a
              href="tel:8093909684"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call to Discuss Your Condition: 8093909684
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;