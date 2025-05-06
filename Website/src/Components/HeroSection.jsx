// src/Components/Common/HeroSection.jsx

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-200"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-2xl px-6 mt-20"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Making the Web Accessible to Everyone
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-6 drop-shadow-md">
          BetterWeb's Chrome extension empowers disabled users to browse with ease, offering tools like text adjustments, screen readers, and simplified navigation — because the internet should belong to everyone.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-shadow shadow-lg hover:shadow-xl"
        >
          Install Chrome Extension
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
