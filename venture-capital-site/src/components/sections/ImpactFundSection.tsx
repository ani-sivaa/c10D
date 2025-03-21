"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  RiLightbulbFlashLine, 
  RiBuilding4Line,
  RiDatabase2Line,
  RiBankLine,
  RiHospitalLine,
  RiHomeSmileLine
} from 'react-icons/ri';

const ImpactFundSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="impact-fund" 
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl transition-all duration-700 ease-in-out"
             style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-indigo-600/20 blur-3xl transition-all duration-700 ease-in-out"
             style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/impact-fund" className="group block hover:opacity-90 transition-opacity">
              <h2 className="text-4xl md:text-5xl font-light text-blue-400 leading-tight mb-2 group-hover:text-cyan-400 transition-colors">
                The C10D
              </h2>
              
              <p className="text-4xl md:text-5xl italic font-light mb-8 text-blue-400 group-hover:text-cyan-400 transition-colors">
                Impact Venture Fund
              </p>
            </Link>
            
            <div className="bg-black/30 p-6 rounded-lg border border-blue-500/20 max-w-3xl mx-auto backdrop-blur-sm">
              <p className="text-gray-200 leading-relaxed">
                To bridge Duke and UNC's entrepreneurial spirit, driving impactful change through strategic investments in visionary ventures
              </p>
            </div>
          </motion.div>
        </div>

        {/* Investment Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-900/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300 flex flex-col items-center text-center group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-light text-white">
                {category.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link 
            href="/impact-fund"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
          >
            <span>Learn More About the Fund</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const categories = [
  {
    title: "Energy",
    icon: <RiLightbulbFlashLine className="w-16 h-16" />
  },
  {
    title: "Technology",
    icon: <RiDatabase2Line className="w-16 h-16" />
  },
  {
    title: "Fintech",
    icon: <RiBankLine className="w-16 h-16" />
  },
  {
    title: "Financial Services",
    icon: <RiBuilding4Line className="w-16 h-16" />
  },
  {
    title: "Healthcare",
    icon: <RiHospitalLine className="w-16 h-16" />
  },
  {
    title: "Real Estate",
    icon: <RiHomeSmileLine className="w-16 h-16" />
  }
];

export default ImpactFundSection;