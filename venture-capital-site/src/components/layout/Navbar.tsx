'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  // Function to handle navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (isHomePage) {
      // If on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home and then scroll
      router.push(`/#${sectionId}`);
    }
    setActiveSection(sectionId);
    setShowEventsDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('events-dropdown');
      const button = document.getElementById('events-button');
      if (dropdown && button) {
        if (!dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
          setShowEventsDropdown(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update active section based on scroll position (only on home page)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = ['home', 'program', 'impact-fund', 'partners', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
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
  }, [isHomePage]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/"
          className="text-blue-400 font-light text-lg hover:text-cyan-400 transition-colors"
        >
          C10D
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a 
            href="#program" 
            onClick={(e) => handleNavigation(e, 'program')}
            className={`text-sm hover:text-blue-400 transition ${
              activeSection === 'program' ? 'text-blue-400' : 'text-white'
            }`}
          >
            Program
          </a>
          <a 
            href="#impact-fund" 
            onClick={(e) => handleNavigation(e, 'impact-fund')}
            className={`text-sm hover:text-blue-400 transition ${
              activeSection === 'impact-fund' ? 'text-blue-400' : 'text-white'
            }`}
          >
            Impact Fund
          </a>
          
          {/* Events Dropdown */}
          <div className="relative">
            <button
              id="events-button"
              onClick={() => setShowEventsDropdown(!showEventsDropdown)}
              className={`text-sm hover:text-blue-400 transition flex items-center gap-1 ${
                showEventsDropdown ? 'text-blue-400' : 'text-white'
              }`}
            >
              Events
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${showEventsDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showEventsDropdown && (
              <div 
                id="events-dropdown"
                className="absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-blue-500/20 rounded-lg shadow-xl py-2 px-1"
              >
                <Link 
                  href="/competition"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-500/10 hover:text-blue-400 rounded-lg transition-colors"
                  onClick={() => setShowEventsDropdown(false)}
                >
                  Duke × UNC VC Competition
                </Link>
                <Link 
                  href="/impact-fund"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-500/10 hover:text-blue-400 rounded-lg transition-colors"
                  onClick={() => setShowEventsDropdown(false)}
                >
                  C10D Impact Fund
                </Link>
                <a 
                  href="#program"
                  onClick={(e) => handleNavigation(e, 'program')}
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-blue-500/10 hover:text-blue-400 rounded-lg transition-colors"
                >
                  Networking Events
                </a>
              </div>
            )}
          </div>

          <a 
            href="#partners" 
            onClick={(e) => handleNavigation(e, 'partners')}
            className={`text-sm hover:text-blue-400 transition ${
              activeSection === 'partners' ? 'text-blue-400' : 'text-white'
            }`}
          >
            Partners
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavigation(e, 'contact')}
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