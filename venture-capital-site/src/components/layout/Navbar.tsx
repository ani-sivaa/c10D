'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = ['home', 'programs', 'impact-fund', 'categories', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Add some buffer to make the transition smoother
          if (scrollPosition >= offsetTop - 100 && 
              scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="text-blue-400 font-light"
        >
          <span className="text-lg">C10D</span>
        </a>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a 
            href="#programs" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('programs');
            }}
            className={`text-sm hover:text-blue-400 transition ${
              activeSection === 'programs' ? 'text-blue-400' : 'text-white'
            }`}
          >
            About
          </a>
          <a 
            href="#impact-fund" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('impact-fund');
            }}
            className={`text-sm hover:text-blue-400 transition ${
              activeSection === 'impact-fund' ? 'text-blue-400' : 'text-white'
            }`}
          >
            Impact Fund
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={`text-sm hover:text-blue-400 transition ${
              activeSection === 'contact' ? 'text-blue-400' : 'text-white'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
