"use client";

import Image from 'next/image';
import Background from '@/components/ui/Background';

const Hero = () => {
  // Add smooth scrolling functionality
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black snap-start">
      {/* Background animation */}
      <Background />
      
      {/* Gradient overlay for better visual integration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-black/40 z-1"></div>
      
      {/* Left triangle shape - simplified */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-br from-blue-800/50 via-blue-700/30 to-transparent transform -skew-x-12 -translate-x-8 z-2"></div>
      
      {/* Content container - simplified and improved structure */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl backdrop-blur-sm bg-black/20 p-8 md:p-12 lg:p-16 rounded-xl border border-blue-900/30 shadow-2xl">
          {/* Main heading with improved responsive typography */}
          <h1 className="mb-8 leading-tight">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-extralight text-cyan-400 mb-2">
              C10D
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl italic font-extralight text-white/90 mb-2">
              future
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-extralight text-white/90 mb-4">
              of venture capital
            </span>
            
            <div className="mt-6 flex items-baseline flex-wrap gap-2">
              <span className="text-4xl md:text-5xl lg:text-6xl text-cyan-400 font-light">@</span>
              <span className="text-4xl md:text-5xl lg:text-6xl text-cyan-400 font-light">
                Duke <span className="text-white">&</span> UNC
              </span>
            </div>
          </h1>
          
          {/* Backed by section - simplified */}
          <div className="mt-10 flex items-center border-l-4 border-blue-500/40 pl-6">
            <p className="text-gray-300 mr-6 text-lg font-light">backed by</p>
            <div className="text-base md:text-lg text-cyan-400 uppercase tracking-wider font-medium">
              VENTURE CAPITAL CLUB @ UNC
            </div>
          </div>
          
          {/* Bottom section with logos and CTA - improved layout */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-6">
              {/* Duke logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/5 rounded-full p-4 backdrop-blur-sm border border-blue-900/20 shadow-lg">
                <Image 
                  src="/images/logos/duke-logo.svg"
                  alt="Duke University"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              
              <span className="text-3xl font-light text-blue-300/70">×</span>
              
              {/* UNC logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/5 rounded-full p-4 backdrop-blur-sm border border-blue-900/20 shadow-lg">
                <Image 
                  src="/images/logos/unc-logo.svg"
                  alt="University of North Carolina"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
            </div>
            
            {/* Call to action button - added smooth scroll */}
            <div className="ml-auto mt-6 md:mt-0">
              <a 
                href="#contact" 
                onClick={(e) => handleScrollToSection(e, 'contact')}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 font-medium text-lg"
              >
                <span>Join Program</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reduced decorative elements for cleaner look */}
      <div className="absolute bottom-4 right-4 w-32 h-32 border border-blue-500/10 rounded-full"></div>
    </section>
  );
};

export default Hero;