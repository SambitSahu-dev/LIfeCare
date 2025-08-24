import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Conditions from './components/Conditions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = 'Best Physiotherapy Clinic in Bhubaneswar – dealing with pain free life';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Looking for expert physiotherapy in Bhubaneswar? We treat back pain, arthritis, sports injuries, stroke, and more and giving thrilling result in few days. Book your appointment today, our therapist waiting for you.'
      );
    }

    // Handle scroll-based section detection
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'doctors', 'conditions', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Conditions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;