"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Darsh Shah",
    image: "/images/darsh.png",
    bio: "Darsh is a 2x founder, with a love for driving student innovation in every community he enters. His first startup was a \"business hackathon\" partnered with Berkeley,Haas and UCLA, and he's currently building another startup to democratize community driven investment in fintech. His passion for VC stems from his drive to support similar student founders",
    role: "Managing Partner"
  },
  {
    name: "Kiesten Jackson",
    image: "/images/kiesten.png",
    bio: "Introduced to venture through teaching experience at echo, a startup incubator for teens in the RTP, Kiestin has cultivated an affinity towards leveraging capital for Good—most recently starting an internship with Corridor Ventures in New Orleans.",
    role: "Managing Partner"
  },
  {
    name: "Akshay Gupta",
    image: "/images/akshay.png",
    bio: "Akshay has long been drawn to healthcare—not from a clinical perspective, but through the power of business to drive meaningful change. He sees venture capital as a tool to back startups that will shape the future of healthcare, ensuring innovative solutions reach those who need them most.",
    role: "Managing Partner"
  }
];

const ManagingPartnersSection = () => {
  return (
    <section 
      id="partners" 
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl text-blue-400 mb-4">Meet the Team</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Our managing partners bring diverse experiences and a shared vision for transforming venture capital at Duke and UNC.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl text-white font-medium mb-1">{partner.name}</h3>
                    <p className="text-blue-400 text-sm">{partner.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {partner.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagingPartnersSection;