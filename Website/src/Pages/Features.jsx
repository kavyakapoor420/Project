// src/Pages/Features.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'ACCESSIBILITY PROFILE SETUP',
    description:
      'Upon installation, users can walk through a 3-step setup form to indicate specific disabilities or preferences (e.g., visual impairments, ADHD, dyslexia).',
  },
  {
    title: 'CHECKBOX-BASED ACCESSIBILITY CONTROLS',
    description:
      'Preferences are saved and synced locally, and corresponding changes can be applied to websites.',
  },
  {
    title: 'TEXT-TO-SPEECH (TTS)',
    description:
      'Users can highlight text and use the right-click menu to activate a speak function that reads the content aloud.',
  },
  {
    title: 'THEMING SYSTEM',
    description:
      'Users can switch between a variety of soft tone themes (pink, lavender, mint, peach, sky). This feature was especially designed with autism spectrum users in mind, as the available pastel tones have been shown to reduce overstimulation and improve comfort.',
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16 mt-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
        Our Features
      </h2>

      {/* Vertical timeline line — shifted below heading */}
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 h-[calc(100%-9rem)] w-1 bg-blue-300"></div>

      <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {/* Dot on the timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow"></div>

            {/* Card */}
            <div
              className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-lg ${
                index % 2 === 0 ? 'mr-auto ml-12' : 'ml-auto mr-12'
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
