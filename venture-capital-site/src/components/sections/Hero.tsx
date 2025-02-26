"use client";

import Background from '@/components/ui/Background'; // Make sure to create the Background.tsx file

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-visible bg-black snap-start">
      {/* Background with debugging enabled */}
      <Background />
      
      {/* Left triangle shape - Make sure z-index is higher than background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-blue-900 to-blue-800 transform -skew-x-12 -translate-x-20 z-2"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-3xl">
          <h1 className="mb-4">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light">the</span> 
            <span className="block text-4xl md:text-5xl lg:text-6xl italic font-light">future</span> 
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light">of</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light mb-2">venture capital</span>
            <span className="block text-3xl text-blue-400 font-light">@</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-blue-400 font-light">Duke <span className="text-white">&</span> UNC</span>
          </h1>
          
          <div className="mt-6 flex items-center">
            <p className="text-gray-400 mr-4 text-sm">backed by</p>
            <div className="text-xs text-blue-400 uppercase tracking-widest">
              VENTURE CAPITAL CLUB
            </div>
          </div>
          
          <div className="mt-16 flex items-center space-x-4">
            {/* Placeholder for Duke logo */}
            <div className="w-12 h-12 text-blue-600 font-bold text-2xl">
              D
            </div>
            
            <span className="text-xl">x</span>
            
            {/* Placeholder for UNC logo */}
            <div className="w-12 h-12 text-blue-400 font-bold text-2xl">
              NC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;