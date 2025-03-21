"use client";

import Link from 'next/link';

const Footer = () => {
  // Function to handle smooth scrolling to sections
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-10 bg-black border-t border-gray-800 mt-auto relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Logo and tagline */}
          <div>
            <Link href="/" className="text-3xl font-light text-cyan-400 mb-3 block hover:text-blue-400 transition-colors">
              C10D
            </Link>
            <p className="text-gray-300 text-sm mb-4">The future of venture capital @ Duke & UNC</p>
            <p className="text-gray-400 text-xs">Backed by Venture Capital Club @ UNC</p>
          </div>
          
          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#program"
                  onClick={(e) => handleScrollToSection(e, 'program')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Program
                </a>
              </li>
              <li>
                <a 
                  href="#impact-fund"
                  onClick={(e) => handleScrollToSection(e, 'impact-fund')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Impact Fund
                </a>
              </li>
              <li>
                <a 
                  href="#categories"
                  onClick={(e) => handleScrollToSection(e, 'categories')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Categories
                </a>
              </li>
              <li>
                <a 
                  href="#partners"
                  onClick={(e) => handleScrollToSection(e, 'partners')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Partners
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, 'contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact information */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900/20 border border-blue-600/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:darshah@unc.edu" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  darshah@unc.edu
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-xs uppercase text-gray-500 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-900/20 border border-blue-600/30 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} C10D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;