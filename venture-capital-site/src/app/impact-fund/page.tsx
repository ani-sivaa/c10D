"use client";

import Image from 'next/image';
import Link from 'next/link';

const ImpactFundPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="py-6 px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <Link href="/" className="text-blue-400 font-semibold text-xl">
              C10D
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white hover:text-blue-300 transition">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-300 transition">
                Contact
              </Link>
              <Link href="/overview" className="text-white hover:text-blue-300 transition">
                Overview
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logos/duke-logo.svg"
              alt="Duke University"
              width={40}
              height={40}
              className="opacity-80"
            />
            <span className="text-gray-400">x</span>
            <Image
              src="/images/logos/unc-logo.svg"
              alt="UNC Chapel Hill"
              width={40}
              height={40}
              className="opacity-80"
            />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="px-8 py-16 md:px-16">
        <div className="max-w-5xl">
          <div className="mb-2">The C10D</div>
          <h1 className="text-4xl md:text-6xl text-blue-400 font-light italic mb-8">
            Impact Fund
          </h1>

          <p className="text-lg mb-10 max-w-3xl">
            A cross-campus fund for Duke & UNC's sharpest investors. No fluff—just real
            opportunities to scout, invest, and lead.
          </p>

          <ul className="space-y-4 mb-12 max-w-3xl">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Select student partners run specific industry sectors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Coinvestment opportunities with top student & alum-backed startups</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Pick your focus—from fintech to deep tech</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Advisory board of top VCs & startup founders from the RTP, Bay Area & beyond</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>Backed by Duke & UNC's venture communities</span>
            </li>
          </ul>

          <a
            href="#apply"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition-colors"
          >
            Apply as a Partner
          </a>
        </div>
      </main>

    
    </div>
  );
};

export default ImpactFundPage;