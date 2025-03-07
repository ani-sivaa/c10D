"use client";

import Image from 'next/image';

const ManagingPartnersSection = () => {
  return (
    <section 
      id="managing-partners" 
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl text-blue-400 mb-12">Meet the Managing Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/Screenshot 2025-03-03 at 11.27.07 AM 1.png"
                alt="Darsh Shah"
                width={240}
                height={240}
                className="mb-4"
              />
              <h3 className="text-xl mb-2 text-white">Darsh Shah</h3>
              <p className="text-gray-300">
                Darsh is a 2x founder, with a love for driving student innovation in every community he enters. His first startup was a "business hackathon" partnered with Berkeley,Haas and UCLA, and he&apos;s currently building another startup to democratize community driven investment in fintech. His passion for VC stems from his drive to support similar student founders
              </p>
            </div>
            
            <div>
              <Image
                src="/images/Screenshot 2025-03-03 at 11.27.44 AM 1.png"
                alt="Kiesten Jackson"
                width={240}
                height={240}
                className="mb-4"
              />
              <h3 className="text-xl mb-2 text-white">Kiesten Jackson</h3>
              <p className="text-gray-300">
                Introduced to venture through teaching experience at echo, a startup incubator for teens in the RTP, Kiestin has cultivated an affinity towards leveraging capital for Good—most recently starting an internship with Corridor Ventures in New Orleans.
              </p>
            </div>
            
            <div>
              <Image
                src="/images/Screenshot 2025-03-03 at 11.28.14 AM 1.png"
                alt="Akshay Gupta"
                width={240}
                height={240}
                className="mb-4"
              />
              <h3 className="text-xl mb-2 text-white">Akshay Gupta</h3>
              <p className="text-gray-300">
                Akshay has long been drawn to healthcare—not from a clinical perspective, but through the power of business to drive meaningful change. He sees venture capital as a tool to back startups that will shape the future of healthcare, ensuring innovative solutions reach those who need them most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingPartnersSection;