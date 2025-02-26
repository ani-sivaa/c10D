"use client";

import FinanceBackground from '@/components/ui/FinanceBackground';

const ImpactFundSection = () => {
  return (
    <section id="impact-fund" className="py-16 bg-black relative snap-start">
      {/* We don't need additional FinanceBackground here as it's already in the Hero section */}
      
      <div className="container-custom text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-0">The C10D</h2>
          <p className="text-3xl text-blue-400 italic font-light mb-6">Impact Venture Fund</p>
          
          <div className="text-gray-400 text-sm mb-16">
            <p>Mission Statement Goes Here</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ImpactFundSection;