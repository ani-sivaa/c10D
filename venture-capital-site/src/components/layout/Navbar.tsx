'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showImpactFundPage, setShowImpactFundPage] = useState(false);

  // Function to handle smooth scrolling and hide impact fund page
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    
    // Hide the impact fund page when any button is clicked
    setShowImpactFundPage(false);
    
    // Hide the impact fund page element
    const impactFundPage = document.getElementById('impact-fund-page');
    if (impactFundPage) {
      impactFundPage.style.display = 'none';
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = ['home', 'programs', 'impact-fund', 'categories', 'partners', 'contact'];
      
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
            href="#partners" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('partners');
            }}
            className={`text-sm hover:text-blue-400 transition ${
              activeSection === 'partners' ? 'text-blue-400' : 'text-white'
            }`}
          >
            Partners
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