'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
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
  };

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